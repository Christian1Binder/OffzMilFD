import { getState } from '../state.js';

export function renderProfile(container) {
    const state = getState();
    const badges = state.badges.length > 0 ? state.badges.map(b => `<div class="badge">${b}</div>`).join('') : '<p class="text-dim">No badges earned yet. Keep training!</p>';

    container.innerHTML = `
        <h2>Service Record</h2>
        <div class="card">
            <div style="display: flex; justify-content: space-between;">
                <div>
                    <h3>Rank</h3>
                    <p class="text-primary" style="font-size: 1.5rem;">${state.level}</p>
                </div>
                <div>
                    <h3>XP</h3>
                    <p class="text-secondary" style="font-size: 1.5rem;">${state.xp}</p>
                </div>
                <div>
                    <h3>Streak</h3>
                    <p class="text-warning" style="font-size: 1.5rem;">${state.streak}</p>
                </div>
            </div>
        </div>

        <h3>Medals & Badges</h3>
        <div class="card">
            <div class="badge-grid">
                ${badges}
            </div>
        </div>

        <h3>Training History</h3>
        <div class="card">
            <p>Completed Missions: ${state.completedUnits.length}</p>
            <button class="btn btn-secondary" onclick="if(confirm('Reset progress?')) { localStorage.clear(); location.reload(); }">Reset Career</button>
        </div>
    `;
}
