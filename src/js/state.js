// State Management

let state = {
    xp: 0,
    level: 1,
    streak: 0,
    lastLogin: null,
    completedUnits: [],
    badges: []
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

export function addXP(amount) {
    const oldLevel = state.level;
    state.xp += amount;
    checkLevelUp(oldLevel);
    saveState();
    return state.level > oldLevel; // Return true if leveled up
}

export function completeUnit(unitId) {
    if (!state.completedUnits.includes(unitId)) {
        state.completedUnits.push(unitId);
        addXP(50); // XP Reward for Unit
        saveState();
        return true;
    }
    return false;
}

function checkLevelUp(oldLevel) {
    // Level Formula: Level * 100 XP needed
    // Simple progression: 0-100 (L1), 100-300 (L2), etc.
    // Let's just say Level = floor(XP / 100) + 1
    const newLevel = Math.floor(state.xp / 100) + 1;
    if (newLevel > state.level) {
        state.level = newLevel;
        // Import dynamically to avoid circular dependency if any, or just use window/event
        // For now, simpler: dispatch event
        window.dispatchEvent(new CustomEvent('taclearn:levelup', { detail: { level: newLevel } }));
    }
}

function saveState() {
    localStorage.setItem('taclearn_state', JSON.stringify(state));
}
