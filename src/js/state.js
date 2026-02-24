// State Management

let state = {
    xp: 0,
    level: 1,
    streak: 0,
    lastLogin: null,
    completedUnits: [],
    badges: [],
    perfectQuizzes: 0,
    practiceXP: 0 // New metric for practice
};

export async function initState() {
    const saved = localStorage.getItem('taclearn_state');
    if (saved) {
        state = { ...state, ...JSON.parse(saved) };
    }

    // Streak Logic
    const today = new Date().toDateString();
    if (state.lastLogin !== today) {
        if (state.lastLogin === new Date(Date.now() - 86400000).toDateString()) {
            state.streak++;
        } else {
            state.streak = 1; // Reset if missed a day, or first login
        }
        state.lastLogin = today;
        saveState();
    }

    console.log('State Loaded:', state);
}

export function getState() {
    return state;
}

export function addXP(amount, isPractice = false) {
    const oldLevel = state.level;
    state.xp += amount;
    if (isPractice) {
        state.practiceXP = (state.practiceXP || 0) + amount;
        checkBadges();
    }
    checkLevelUp(oldLevel);
    saveState();
    return state.level > oldLevel; // Return true if leveled up
}

export function completeUnit(unitId) {
    if (!state.completedUnits.includes(unitId)) {
        state.completedUnits.push(unitId);
        addXP(50); // XP Reward for Unit
        checkBadges(); // Check for new badges
        saveState();
        return true;
    }
    return false;
}

// New function to track perfect quizzes
export function recordPerfectQuiz() {
    state.perfectQuizzes = (state.perfectQuizzes || 0) + 1;
    checkBadges();
    saveState();
}

function checkLevelUp(oldLevel) {
    // Level Formula: Level * 100 XP needed
    const newLevel = Math.floor(state.xp / 100) + 1;
    if (newLevel > state.level) {
        state.level = newLevel;
        window.dispatchEvent(new CustomEvent('taclearn:levelup', { detail: { level: newLevel } }));
        checkBadges(); // Check badges on level up too
    }
}

function checkBadges() {
    const badges = [
        { id: 'first_mission', name: 'Erster Einsatz', condition: () => state.completedUnits.length >= 1 },
        { id: 'veteran_5', name: 'Veteran (5 Missionen)', condition: () => state.completedUnits.length >= 5 },
        { id: 'strategist', name: 'Stratege', condition: () => state.level >= 5 },
        { id: 'sharpshooter', name: 'Scharfschütze', condition: () => state.perfectQuizzes >= 3 },
        { id: 'iron_will', name: 'Eiserner Wille', condition: () => state.streak >= 3 },
        { id: 'drill_master', name: 'Drill Sergeant', condition: () => state.practiceXP >= 500 }
    ];

    badges.forEach(badge => {
        if (!state.badges.includes(badge.name) && badge.condition()) {
            state.badges.push(badge.name);
            window.dispatchEvent(new CustomEvent('taclearn:badge', { detail: { name: badge.name } }));
        }
    });
}

function saveState() {
    localStorage.setItem('taclearn_state', JSON.stringify(state));
}
