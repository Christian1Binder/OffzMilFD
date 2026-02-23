import { curriculum, getModule } from '../data.js';
import { getState } from '../state.js';

export function renderModules(container) {
    const hash = window.location.hash;
    const parts = hash.split('/');

    // If route is #modules, show list of modules
    if (parts.length === 1) {
        renderModuleList(container);
    } else if (parts.length === 2) {
        // If route is #modules/id, show list of units
        renderUnitList(container, parts[1]);
    }
}

function renderModuleList(container) {
    let html = `<h2>Field Manuals</h2>`;

    curriculum.modules.forEach(mod => {
        // Calculate progress
        const totalUnits = mod.units.length;
        const state = getState();
        const completedCount = mod.units.filter(u => state.completedUnits.includes(u.id)).length;
        const percent = Math.round((completedCount / totalUnits) * 100);

        html += `
            <div class="card module-card" onclick="window.location.hash='#modules/${mod.id}'">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-size: 2rem;">${mod.icon}</div>
                    <div style="flex-grow: 1; margin-left: 15px;">
                        <h3>${mod.title}</h3>
                        <p class="text-dim">${mod.description}</p>
                        <div class="progress-container" style="height: 4px; margin-top: 5px;">
                            <div class="progress-fill" style="width: ${percent}%"></div>
                        </div>
                    </div>
                    <div style="color: var(--color-primary); font-weight: bold;">${percent}%</div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function renderUnitList(container, moduleId) {
    const mod = getModule(moduleId);
    if (!mod) {
        container.innerHTML = `<p>Module not found.</p>`;
        return;
    }

    let html = `
        <button class="btn btn-secondary" onclick="window.location.hash='#modules'" style="margin-bottom: 20px;">
            ← Back to Manuals
        </button>
        <h2>${mod.title}</h2>
        <p class="text-dim mb-2">Select a mission to begin.</p>
    `;

    const state = getState();

    mod.units.forEach((unit, index) => {
        const isCompleted = state.completedUnits.includes(unit.id);
        const statusIcon = isCompleted ? '✅' : '⭕';
        const statusClass = isCompleted ? 'text-success' : '';

        // Lock logic: Sequential unlocking? For now, all open.
        // Gamification: "Locked" status could be added here based on previous unit completion.

        html += `
            <div class="card unit-card ${statusClass}" onclick="window.location.hash='#unit/${moduleId}/${unit.id}'" style="cursor: pointer; transition: transform 0.2s;">
                <div style="display: flex; align-items: center;">
                    <span style="font-size: 1.5rem; margin-right: 15px;">${statusIcon}</span>
                    <div>
                        <h4>Mission ${index + 1}: ${unit.title}</h4>
                        <span class="text-dim" style="font-size: 0.8rem;">${isCompleted ? 'Completed (+50 XP)' : 'Status: Pending'}</span>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}
