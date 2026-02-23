import { getState } from '../state.js';
import { getModule } from '../data.js';

export function renderDashboard(container) {
    const state = getState();
    const nextLevelXP = state.level * 100;
    const progress = (state.xp / nextLevelXP) * 100;

    // Ranks based on level
    const ranks = ['Schütze', 'Gefreiter', 'Obergefreiter', 'Unteroffizier', 'Feldwebel', 'Leutnant', 'Hauptmann', 'Major', 'Oberst', 'General'];
    const currentRank = ranks[Math.min(state.level - 1, ranks.length - 1)];

    container.innerHTML = `
        <div class="card text-center pulse-border">
            <h2>Rank: ${currentRank}</h2>
            <div class="progress-container">
                <div class="progress-fill" style="width: ${Math.min(progress, 100)}%"></div>
            </div>
            <p class="text-dim mt-2">${state.xp} / ${nextLevelXP} XP</p>
            <div class="streak-badge" style="margin-top: 10px; font-size: 1.2rem;">
                🔥 Streak: ${state.streak} Days
            </div>
        </div>

        <h3>Active Mission</h3>
        <div class="card" onclick="window.location.hash='#modules'">
            <h4>Continue Training</h4>
            <p>Select a module to proceed with your officer training.</p>
            <button class="btn">To Briefing Room</button>
        </div>

        <h3>Daily Intel</h3>
        <div class="card">
            <h4>Tip of the Day</h4>
            <p>"Führen mit Auftrag requires trust. Trust your subordinates!"</p>
        </div>
    `;
}
