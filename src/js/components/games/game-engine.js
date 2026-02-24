// Placeholder to route to specific game engines
// In a real build step, we'd bundle this. Here we import dynamically or switch.

import { getGameConfig } from '../../games-registry.js';
import { renderSortingGame } from './sorting-game.js';
import { renderDragDropGame } from './drag-drop.js';
import { renderClozeGame } from './cloze-game.js';
import { addXP } from '../../state.js';
import { showXP } from '../gamification.js';

export function launchGame(container, gameId) {
    const config = getGameConfig(gameId);
    if (!config) {
        container.innerHTML = '<p>Spiel nicht gefunden.</p>';
        return;
    }

    const onComplete = (xp) => {
        addXP(xp, true); // true = isPractice
        showXP(xp, container);
        // Maybe wait and go back?
        setTimeout(() => {
            if(confirm("Training abgeschlossen! Zurück zur Übersicht?")) {
                window.location.hash = '#practice';
            }
        }, 1500);
    };

    switch (config.type) {
        case 'sorting':
            renderSortingGame(container, config, onComplete);
            break;
        case 'drag-drop':
            renderDragDropGame(container, config, onComplete);
            break;
        case 'cloze':
            renderClozeGame(container, config, onComplete);
            break;
        default:
            container.innerHTML = '<p>Unbekannter Spieltyp.</p>';
    }
}
