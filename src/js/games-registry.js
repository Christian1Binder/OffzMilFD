// Registry to map curriculum content to interactive games
// Version 3.0 - Force Refresh
// Does NOT modify original data.js, but references IDs from it.

export const gameRegistry = {
    // --- Militärgeschichte ---
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
    'cold_war': {
        moduleId: 'milhistory',
        type: 'sorting',
        title: 'Kalter Krieg: Chronologie',
        description: 'Ordne die Ereignisse des Kalten Krieges.',
        items: [
            { id: 1, text: 'Gründung NATO', order: 1 },
            { id: 2, text: 'Gründung Bundeswehr', order: 2 },
            { id: 3, text: 'Mauerbau', order: 3 },
            { id: 4, text: 'NATO-Doppelbeschluss', order: 4 },
            { id: 5, text: 'Ende UdSSR', order: 5 }
        ],
        xpReward: 120
    },

    // --- Befehlsrecht ---
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
    'wstg_offenses': {
        moduleId: 'befehlsrecht',
        type: 'drag-drop',
        title: 'Wehrstraftaten Zuordnung',
        description: 'Ordne die Paragraphen den Straftaten zu.',
        pairs: [
            { source: '§15 WstG', target: 'Eigenmächtige Abwesenheit' },
            { source: '§18 WstG', target: 'Dienstentziehung' },
            { source: '§19 WstG', target: 'Ungehorsam' },
            { source: '§32 WstG', target: 'Missbrauch der Befehlsbefugnis' }
        ],
        xpReward: 100
    },

    // --- Politische Bildung ---
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
    },
    'uno': {
        moduleId: 'polbil',
        type: 'cloze',
        title: 'UN Sicherheitsrat',
        description: 'Fülle die Lücken über den UN-Sicherheitsrat.',
        text: 'Der Sicherheitsrat hat {1} ständige Mitglieder. Diese haben ein {2}. Insgesamt gibt es {3} Mitglieder im Rat.',
        blanks: [
            { index: 1, answer: '5' },
            { index: 2, answer: 'Vetorecht' },
            { index: 3, answer: '15' }
        ],
        xpReward: 90
    },

    // --- Führung im Einsatz ---
    'principles': {
        moduleId: 'fuehrung',
        type: 'drag-drop',
        title: 'Führungsgrundsätze',
        description: 'Ordne die Grundsätze zu.',
        pairs: [
            { source: 'Führen mit Auftrag', target: 'Freiheit in der Durchführung' },
            { source: 'Schwerpunkt', target: 'Klotzen, nicht kleckern' },
            { source: 'Reserve', target: 'Mittel zur Einflussnahme' },
            { source: 'Wirkungsorientierung', target: 'Vom Ziel her denken' }
        ],
        xpReward: 100
    },
    'leadership_process': {
        moduleId: 'fuehrung',
        type: 'sorting',
        title: 'Führungsprozess',
        description: 'Bringe die Schritte der Entscheidungsfindung in die richtige Reihenfolge.',
        items: [
            { id: 1, text: 'Auswertung des Auftrags', order: 1 },
            { id: 2, text: 'Beurteilung der Lage', order: 2 },
            { id: 3, text: 'Entschlussfassung', order: 3 },
            { id: 4, text: 'Befehlsgebung', order: 4 }
        ],
        xpReward: 100
    },

    // --- Taktik II ---
    'handlungsbedarf': {
        moduleId: 'taktik2',
        type: 'cloze',
        title: 'Handlungsbedarf',
        description: 'Wann muss ein Führer vom Befehl abweichen?',
        text: 'Handlungsbedarf besteht bei einer {1} Lageänderung. Entweder droht eine {2} für den Auftrag oder es bietet sich eine {3} zur Initiative.',
        blanks: [
            { index: 1, answer: 'grundlegenden' },
            { index: 2, answer: 'Gefahr' },
            { index: 3, answer: 'Chance' }
        ],
        xpReward: 110
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
