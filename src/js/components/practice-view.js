import { getAllGames } from '../games-registry.js';

export function renderPractice(container) {
    const games = getAllGames();

    let html = `<h2>Gefechtsübung</h2><p class="text-dim mb-2">Wähle eine Simulation.</p><div class="module-grid">`;

    games.forEach(game => {
        let icon = '🎮';
        if (game.type === 'sorting') icon = '🔢';
        if (game.type === 'drag-drop') icon = '🧩';
        if (game.type === 'cloze') icon = '📝';

        html += `
            <div class="module-tile" onclick="window.location.hash='#practice/${game.unitId}'">
                <div class="module-icon">${icon}</div>
                <h3>${game.title}</h3>
                <p class="text-dim" style="flex-grow: 1;">${game.description}</p>
                <div class="text-secondary" style="font-weight: bold; margin-top: 10px;">+${game.xpReward} XP</div>
            </div>
        `;
    });

    html += `</div>`;

    // Check if a specific game is selected in the hash
    const hash = window.location.hash;
    const parts = hash.split('/');
    if (parts.length === 2) {
        // Specific game route: #practice/gameId
        // We will render the game container overlay or replace content
        renderGame(container, parts[1]);
    } else {
        container.innerHTML = html;
    }
}

function renderGame(container, gameId) {
    // Dynamic import to avoid circular dependencies or massive bundles
    // For this environment, we'll map manually or import all game engines
    import('./games/game-engine.js').then(module => {
        module.launchGame(container, gameId);
    });
}
