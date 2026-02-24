import { getAllGames, getPracticeModules, getGamesByModule } from '../games-registry.js?v=5';
import { getModule } from '../data.js?v=5';

export function renderPractice(container) {
    const hash = window.location.hash;
    const parts = hash.split('/');

    // #practice -> Show Module List
    if (parts.length === 1) {
        renderPracticeModules(container);
    }
    // #practice/moduleId -> Show Game List for Module
    else if (parts.length === 2) {
        renderGameList(container, parts[1]);
    }
    // #practice/moduleId/gameId -> Launch Game
    else if (parts.length === 3) {
        renderGame(container, parts[2], parts[1]);
    }
}

function renderPracticeModules(container) {
    const moduleIds = getPracticeModules();
    console.log("Practice Modules found in registry:", moduleIds);

    let html = `<h2>Gefechtsübung: Modulwahl</h2><p class="text-dim mb-2">Wähle ein Themengebiet.</p><div class="module-grid">`;

    if (moduleIds.length === 0) {
        html += `<p>Keine Übungsmodule gefunden.</p>`;
    }

    moduleIds.forEach(modId => {
        const mod = getModule(modId); // Helper from data.js
        console.log(`Loading Module for Practice: ${modId}`, mod);

        if (!mod) {
            console.error(`CRITICAL: Module ID '${modId}' exists in registry but NOT in data.js. Check data.js content.`);
            // Fallback visualization for debugging in production if needed
            // html += `<div class="module-tile error"><h3>Error: ${modId}</h3></div>`;
            return;
        }

        html += `
            <div class="module-tile" onclick="window.location.hash='#practice/${mod.id}'">
                <div class="module-icon">${mod.icon}</div>
                <h3>${mod.title}</h3>
                <p class="text-dim">Verfügbare Übungen: ${getGamesByModule(mod.id).length}</p>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function renderGameList(container, moduleId) {
    const mod = getModule(moduleId);
    const games = getGamesByModule(moduleId);

    if (!mod) {
        container.innerHTML = `<p>Modul nicht gefunden.</p>`;
        return;
    }

    let html = `
        <button class="btn btn-secondary" onclick="window.location.hash='#practice'" style="margin-bottom: 20px;">← Zurück zur Auswahl</button>
        <h2>${mod.title}: Übungen</h2>
        <div class="module-grid">
    `;

    games.forEach(game => {
        let icon = '🎮';
        if (game.type === 'sorting') icon = '🔢';
        if (game.type === 'drag-drop') icon = '🧩';
        if (game.type === 'cloze') icon = '📝';
        if (game.type === 'crossword') icon = '📰';

        html += `
            <div class="module-tile" onclick="window.location.hash='#practice/${moduleId}/${game.unitId}'">
                <div class="module-icon">${icon}</div>
                <h3>${game.title}</h3>
                <p class="text-dim" style="flex-grow: 1;">${game.description}</p>
                <div class="text-secondary" style="font-weight: bold; margin-top: 10px;">+${game.xpReward} XP</div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function renderGame(container, gameId, moduleId) {
    import('./games/game-engine.js').then(module => {
        module.launchGame(container, gameId, moduleId);
    });
}
