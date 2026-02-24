// Registry to map curriculum content to interactive games
// Does NOT modify original data.js, but references IDs from it.

export const gameRegistry = {
    /* =========================================================
       MODUL: BEFEHLSRECHT (basierend auf data.js)
    ========================================================= */
    
    'befehlsbegriff_def': {
        moduleId: 'befehlsrecht',
        type: 'drag-drop',
        title: 'Definition: Der Befehl',
        description: 'Ordne die Rechtsbegriffe aus § 2 Nr. 2 WStG den Erklärungen zu.',
        pairs: [
            { source: 'Anweisung', target: 'Einseitige Willensäußerung' },
            { source: 'Vorgesetzter', target: 'Person nach § 1 Abs. 3 SG' },
            { source: 'Gehorsam', target: 'Anspruch nach § 11 Abs. 1 SG' },
            { source: 'Verhalten', target: 'Tun, Dulden oder Unterlassen' }
        ],
        xpReward: 100
    },

    'vorgesetzten_typen': {
        moduleId: 'befehlsrecht',
        type: 'drag-drop',
        title: 'Vorgesetztenverordnung (VvV)',
        description: 'Welcher Paragraph regelt welches Vorgesetztenverhältnis?',
        pairs: [
            { source: '§ 1 VvV', target: 'Unmittelbarer Vorgesetzter' },
            { source: '§ 3 VvV', target: 'Vorgesetzter mit besonderem Aufgabenbereich' },
            { source: '§ 5 VvV', target: 'Vorgesetzter aufgrund der Dienststellung' },
            { source: '§ 6 VvV', target: 'Vorgesetzter aufgrund eigener Erklärung' }
        ],
        xpReward: 120
    },

    'gehorsamspflicht_luecke': {
        moduleId: 'befehlsrecht',
        type: 'cloze',
        title: 'Pflicht zum Gehorsam (§ 11 SG)',
        description: 'Ergänze den Gesetzestext zur Gehorsamspflicht.',
        text: 'Der Soldat muss seinen Vorgesetzten {1} und die Befehle nach besten Kräften {2}, {3} und {4} ausführen.',
        blanks: [
            { index: 1, answer: 'gehorchen' },
            { index: 2, answer: 'vollständig' },
            { index: 3, answer: 'gewissenhaft' },
            { index: 4, answer: 'unverzüglich' }
        ],
        xpReward: 90
    },

    'verbindlichkeit_pruefung': {
        moduleId: 'befehlsrecht',
        type: 'sorting',
        title: 'Prüfschema: Rechtmäßigkeit',
        description: 'Bringe die Kriterien der Verbindlichkeit in die logische Prüfreihenfolge.',
        items: [
            { id: 1, text: 'Verletzung der Menschenwürde? (Unverbindlich)', order: 1 },
            { id: 2, text: 'Straftat gefordert? (Unverbindlich)', order: 2 },
            { id: 3, text: 'Dienstlicher Zweck & Völkerrecht? (Rechtmäßig)', order: 3 },
            { id: 4, text: 'Zumutbarkeit der Ausführung? (Eingeschränkt verbindlich)', order: 4 }
        ],
        xpReward: 130
    },

    'beschwerderecht_fristen': {
        moduleId: 'befehlsrecht',
        type: 'drag-drop',
        title: 'WBO: Fristen & Form',
        description: 'Wichtige Eckdaten der Wehrbeschwerdeordnung.',
        pairs: [
            { source: 'Nachtwartezeit', target: 'Verschlafen einer Nacht (Frühestens)' },
            { source: 'Einlegungsfrist', target: 'Innerhalb von einem Monat' },
            { source: 'Zuständigkeit', target: 'Nächsthöherer Disziplinarvorgesetzter' },
            { source: 'Form', target: 'Schriftlich oder mündlich zu Protokoll' }
        ],
        xpReward: 100
    },

    /* =========================================================
       MODUL: MILITÄRISCHE FÜHRUNG / STF
    ========================================================= */

    'stf_wirkungsformen': {
        moduleId: 'milfuehrung',
        type: 'drag-drop',
        title: 'Wirkungsformen (STF)',
        description: 'Ordne die taktischen Wirkungen den Begriffen zu.',
        pairs: [
            { source: 'Blind (bli)', target: 'Feind die Sicht nehmen (Nebel)' },
            { source: 'Overwatch (ovw)', target: 'Überwachen von Räumen (z.B. ABRA)' },
            { source: 'Engage', target: 'Bekämpfen (z.B. bei Feindstau)' },
            { source: 'Annihilate', target: 'Vernichten (Zerschlagung)' }
        ],
        xpReward: 110
    },

    'zeit_info_faktor': {
        moduleId: 'milfuehrung',
        type: 'cloze',
        title: 'Führungsfaktor Zeit',
        description: 'Wichtige Zeitvorgaben im Gefecht.',
        text: 'Der Kern des Führungsprozesses ist die {1}. Folgekräfte gelten als unmittelbar {2}, wenn sie in weniger als {3} Minuten wirken können.',
        blanks: [
            { index: 1, answer: 'Entscheidungsfindung' },
            { index: 2, answer: 'lageentscheidend' },
            { index: 3, answer: '60' }
        ],
        xpReward: 80
    },

    'angriff_vorbereitung_sort': {
        moduleId: 'milfuehrung',
        type: 'sorting',
        title: 'Vorbereitung der Unmittelbarkeit',
        description: 'Bringe die Schritte der Angriffsvorbereitung in die richtige Reihenfolge.',
        items: [
            { id: 1, text: 'Erkundung der Anmarschwege', order: 1 },
            { id: 2, text: 'Absprachen am VRV zur Feuerregelung', order: 2 },
            { id: 3, text: 'Detaillierte Planung & Befehlsgebung', order: 3 }
        ],
        xpReward: 100
    },

    /* =========================================================
       MODUL: MILITÄRGESCHICHTE (aus deinem Beispiel übernommen)
    ========================================================= */

    '30years': {
        moduleId: 'milhistory',
        type: 'sorting',
        title: '30-jähriger Krieg: Chronologie',
        description: 'Ordne die Ereignisse zeitlich ein.',
        items: [
            { id: 1, text: 'Prager Fenstersturz', order: 1 },
            { id: 2, text: 'Eintritt Schwedens', order: 2 },
            { id: 3, text: 'Ermordung Wallensteins', order: 3 },
            { id: 4, text: 'Westfälischer Frieden', order: 4 }
        ],
        xpReward: 100
    },

    'napoleon_era': {
        moduleId: 'milhistory',
        type: 'drag-drop',
        title: 'Preußen vs. Napoleon',
        description: 'Begriffe und Erklärungen.',
        pairs: [
            { source: 'Jena-Auerstedt', target: 'Niederlage Preußens 1806' },
            { source: 'Tilsit', target: 'Friedensvertrag & Gebietsverlust' },
            { source: 'Scharnhorst', target: 'Heeresreformer' },
            { source: 'Krümper-System', target: 'Umgehung der Wehrpflichtbeschränkung' }
        ],
        xpReward: 100
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
