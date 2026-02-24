// Registry to map curriculum content to interactive games
// Does NOT modify original data.js, but references IDs from it.

export const gameRegistry = {
    // Map Unit ID -> Game Config
    '30years': {
        moduleId: 'milhistory',
        type: 'sorting',
        title: '30-jähriger Krieg: Chronologie',
        description: 'Ordne die Ereignisse des 30-jährigen Krieges in die richtige zeitliche Reihenfolge.',
        items: [
            { id: 1, text: 'Prager Fenstersturz', order: 1 },
            { id: 2, text: 'Eintritt Schwedens (Gustav Adolf)', order: 2 },
            { id: 3, text: 'Ermordung Wallensteins', order: 3 },
            { id: 4, text: 'Westfälischer Frieden', order: 4 }
        ],
        xpReward: 100
    },
    'napoleon_era': {
        moduleId: 'milhistory',
        type: 'drag-drop',
        title: 'Preußen vs. Napoleon: Begriffe',
        description: 'Ordne die Begriffe den richtigen Erklärungen zu.',
        pairs: [
            { source: 'Jena-Auerstedt', target: 'Niederlage Preußens 1806' },
            { source: 'Tilsit', target: 'Friedensvertrag & Gebietsverlust' },
            { source: 'Scharnhorst', target: 'Heeresreformer' },
            { source: 'Krümper-System', target: 'Umgehung der Wehrpflichtbeschränkung' }
        ],
        xpReward: 100
    },
    'befehl_legality': {
        moduleId: 'befehlsrecht',
        type: 'cloze',
        title: 'Lückentext: Rechtmäßigkeit',
        description: 'Ergänze die fehlenden Begriffe zur Rechtmäßigkeit von Befehlen.',
        text: 'Ein Befehl ist rechtmäßig, wenn er einen {1} Zweck hat, nicht gegen das {2} verstößt und die {3} beachtet.',
        blanks: [
            { index: 1, answer: 'dienstlichen' },
            { index: 2, answer: 'Völkerrecht' },
            { index: 3, answer: 'Gesetze' }
        ],
        xpReward: 80
    },
    'nato': {
        moduleId: 'polbil',
        type: 'drag-drop',
        title: 'NATO Struktur',
        description: 'Wer macht was in der NATO?',
        pairs: [
            { source: 'NAC', target: 'Höchstes politisches Gremium' },
            { source: 'SACEUR', target: 'Militärischer Oberbefehlshaber' },
            { source: 'Artikel 5', target: 'Bündnisfall' },
            { source: 'Washington', target: 'Gründungsort 1949' }
        ],
        xpReward: 90
    }
};

export function getGameConfig(unitId) {
    return gameRegistry[unitId] || null;
}

export function getAllGames() {
    return Object.keys(gameRegistry).map(id => ({
        unitId: id,
        ...gameRegistry[id]
    }));
}

export function getGamesByModule(moduleId) {
    return getAllGames().filter(game => game.moduleId === moduleId);
}

export function getPracticeModules() {
    // Get unique module IDs that have games
    const games = getAllGames();
    const moduleIds = [...new Set(games.map(g => g.moduleId))];
    return moduleIds;
}
