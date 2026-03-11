// Registry to map curriculum content to interactive games
// Version 6.0 - Added Taktik Grundlagen
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
    },

    // --- Taktik Grundlagen ---
    'taktik_phasen_angriff': {
        moduleId: 'taktik_grundlagen',
        type: 'sorting',
        title: 'Phasen des Angriffs',
        description: 'Bringe die fünf Phasen des Angriffs in die richtige Reihenfolge.',
        items: [
            { id: 1, text: 'Vorbereitung und Anmarsch', order: 1 },
            { id: 2, text: 'Annäherung',                order: 2 },
            { id: 3, text: 'Einbruch',                  order: 3 },
            { id: 4, text: 'Kampf durch die Tiefe',     order: 4 },
            { id: 5, text: 'Konsolidierung',            order: 5 }
        ],
        xpReward: 120
    },
    'taktik_fuehren_mit_auftrag_schritte': {
        moduleId: 'taktik_grundlagen',
        type: 'sorting',
        title: 'Führen mit Auftrag: Voraussetzungen',
        description: 'Bringe die Voraussetzungen für erfolgreiches Führen mit Auftrag in eine sinnvolle Reihenfolge.',
        items: [
            { id: 1, text: 'Eindeutige Formulierung der eigenen Absicht',         order: 1 },
            { id: 2, text: 'Zuweisung erforderlicher Kräfte, Mittel und Zeit',    order: 2 },
            { id: 3, text: 'Willen zur Delegation von Verantwortung',             order: 3 },
            { id: 4, text: 'Handlungsfreiheit nutzen und gewähren',               order: 4 },
            { id: 5, text: 'Bereitschaft, Fehler zu akzeptieren',                 order: 5 }
        ],
        xpReward: 110
    },
    'taktik_grundsaetze_zuordnung': {
        moduleId: 'taktik_grundlagen',
        type: 'drag-drop',
        title: 'Grundsätze der Operationsführung',
        description: 'Ordne jeden Grundsatz seiner Kernaussage zu.',
        pairs: [
            { source: 'Klarheit und Einfachheit',  target: 'Nur das Einfache hat Erfolg' },
            { source: 'Beweglichkeit',             target: 'Ständig der Lage anpassen, schnell und überlegt handeln' },
            { source: 'Schnelligkeit',             target: 'Tempo in Entscheidungsfindung, Planung und Befehlsgebung' },
            { source: 'Schwerpunktbildung',        target: 'Wirkung aller Kräfte zur richtigen Zeit am richtigen Ort' },
            { source: 'Erfolg und Risiko',         target: 'Initiative fordert Risikobereitschaft – niemals unkalkulierbar' }
        ],
        xpReward: 110
    },
    'taktik_operationsarten': {
        moduleId: 'taktik_grundlagen',
        type: 'drag-drop',
        title: 'Operationsarten – Zweck',
        description: 'Ordne jeder Operationsart ihren Zweck zu.',
        pairs: [
            { source: 'Offensivoperation',        target: 'Dem Feind den eigenen Willen aufzwingen' },
            { source: 'Defensivoperation',        target: 'Dem Feind das Erreichen seiner Ziele verwehren' },
            { source: 'Stabilisierungsoperation', target: 'Sicheres Umfeld für staatliche Akteure schaffen' },
            { source: 'Gegenangriff',             target: 'Nach Grundsätzen des Angriffs – wenn Feind verlustreich aufgelaufen' }
        ],
        xpReward: 100
    },
    'taktik_bewegungen': {
        moduleId: 'taktik_grundlagen',
        type: 'drag-drop',
        title: 'Bewegungen: Auftragsarten',
        description: 'Ordne die Auftragsart der richtigen Beschreibung zu.',
        pairs: [
            { source: 'Erreichen', target: 'Raum beziehen – ohne Feindberührung' },
            { source: 'Gewinnen',  target: 'Raum ggf. gegen Widerstand in Besitz nehmen und halten' },
            { source: 'Nehmen',    target: 'Raum dem Feind gegen erwarteten Widerstand durch Angriff entreißen' },
            { source: 'Sperren',   target: 'Feindliche Nutzung eines Raumes verwehren / kanalisieren' }
        ],
        xpReward: 100
    },
    'taktik_vernetzter_ansatz': {
        moduleId: 'taktik_grundlagen',
        type: 'drag-drop',
        title: 'Vernetzter Ansatz: Zuordnung',
        description: 'Ordne das Ministerium / Akteur dem Handlungsfeld zu.',
        pairs: [
            { source: 'BMVg',            target: 'Militär / Sicherheit' },
            { source: 'BMI',             target: 'Polizei / Innere Stabilität' },
            { source: 'BMZ',             target: 'Entwicklungshilfe / Wiederaufbau' },
            { source: 'Auswärtiges Amt', target: 'Diplomatie / Außenpolitik' }
        ],
        xpReward: 90
    },
    'taktik_reserven_einsatz': {
        moduleId: 'taktik_grundlagen',
        type: 'drag-drop',
        title: 'Reserven – Einsatzzwecke',
        description: 'Ordne die Aussage dem richtigen Grundsatz zum Thema Reserve zu.',
        pairs: [
            { source: 'Entscheidung erzwingen', target: 'Einsatzzweck der Reserve' },
            { source: 'Schwerpunkt verlegen',   target: 'Einsatzzweck der Reserve' },
            { source: 'Krisen überwinden',      target: 'Einsatzzweck der Reserve' },
            { source: 'Geschlossen einsetzen',  target: 'Grundsatz – Zersplitterung führt zum Misserfolg' }
        ],
        xpReward: 100
    },
    'taktik_raumordnung_begriffe': {
        moduleId: 'taktik_grundlagen',
        type: 'drag-drop',
        title: 'Raumordnung – Begriffe',
        description: 'Ordne den Begriff der richtigen Definition zu.',
        pairs: [
            { source: 'Verantwortungsbereich', target: 'Zugewiesener Raum inkl. Bereich vorwärts der FLOT' },
            { source: 'Interessenbereich',     target: 'Über eigenen Verantwortungsbereich hinausgehender Raum' },
            { source: 'Operationsraum',        target: 'Gesamter Raum der Operation aller Ebenen' },
            { source: 'Führungslinien',        target: 'Legen Raumgrenzen zwischen Truppenteilen fest' }
        ],
        xpReward: 100
    },
    'taktik_schwerpunkt_cloze': {
        moduleId: 'taktik_grundlagen',
        type: 'cloze',
        title: 'Lückentext: Schwerpunktbildung',
        description: 'Ergänze die fehlenden Begriffe.',
        text: 'Es ist stets {1} Schwerpunkt zu bilden. {2} der Kräfte ist zu vermeiden. Erfolg hat, wer die Wirkung aller nötigen Kräfte und Mittel zur richtigen Zeit am richtigen Ort auf das richtige {3} konzentriert.',
        blanks: [
            { index: 1, answer: 'ein' },
            { index: 2, answer: 'Zersplitterung' },
            { index: 3, answer: 'Ziel' }
        ],
        xpReward: 90
    },
    'taktik_fuehren_auftrag_cloze': {
        moduleId: 'taktik_grundlagen',
        type: 'cloze',
        title: 'Lückentext: Führen mit Auftrag',
        description: 'Ergänze die Kernbegriffe.',
        text: 'Die eigene Absicht leitet sich aus der Absicht der {1} Führung sowie dem eigenen {2} ab und zielt auf die Erfüllung der wesentlichen {3} unter Beachtung von Auflagen.',
        blanks: [
            { index: 1, answer: 'übergeordneten' },
            { index: 2, answer: 'Auftrag' },
            { index: 3, answer: 'Leistung' }
        ],
        xpReward: 90
    },
    'taktik_reserven_cloze': {
        moduleId: 'taktik_grundlagen',
        type: 'cloze',
        title: 'Lückentext: Reserven',
        description: 'Ergänze die Grundsätze zum Einsatz von Reserven.',
        text: 'Reserven werden {1} eingesetzt. Zersplitterung führt zum {2}. Ist die Reserve eingesetzt, muss schnellstmöglich eine {3} gebildet werden.',
        blanks: [
            { index: 1, answer: 'geschlossen' },
            { index: 2, answer: 'Misserfolg' },
            { index: 3, answer: 'neue' }
        ],
        xpReward: 80
    },
    'taktik_opvguw_cloze': {
        moduleId: 'taktik_grundlagen',
        type: 'cloze',
        title: 'Lückentext: Operation verbundener Kräfte',
        description: 'Ergänze die Merkmale der Operation verbundener Kräfte.',
        text: 'Die Operation verbundener Kräfte ist das Zusammenwirken verschiedener {1} oder multinationaler Kräfte unter einheitlicher {2} Führung mit gemeinsamer {3}.',
        blanks: [
            { index: 1, answer: 'nationaler' },
            { index: 2, answer: 'militärischer' },
            { index: 3, answer: 'Zielsetzung' }
        ],
        xpReward: 90
    },
    'taktik_schnelligkeit_cloze': {
        moduleId: 'taktik_grundlagen',
        type: 'cloze',
        title: 'Lückentext: Schnelligkeit',
        description: 'Ergänze die Aussagen zur Schnelligkeit in der Operationsführung.',
        text: 'Schnelligkeit in der Operationsführung wird bestimmt durch die Geschwindigkeit der {1}, Planung, {2} sowie deren Umsetzung. Schnelligkeit darf nicht zur {3} verleiten.',
        blanks: [
            { index: 1, answer: 'Entscheidungsfindung' },
            { index: 2, answer: 'Befehlsgebung' },
            { index: 3, answer: 'Hast' }
        ],
        xpReward: 90
    },

    // --- Crossword Puzzles ---
    'cw_milhistory': {
        moduleId: 'milhistory',
        type: 'crossword',
        title: 'Kreuzworträtsel: Militärgeschichte',
        description: 'Löse das Rätsel zu historischen Ereignissen.',
        xpReward: 150,
        grid: {
            rows: 15,
            cols: 15,
            words: [
                { id: 1, direction: 'across', x: 0, y: 0, answer: 'WESTFALEN',   clue: 'Ort des Friedens 1648' },
                { id: 2, direction: 'down',   x: 0, y: 0, answer: 'WALLENSTEIN', clue: 'Kaiserlicher Feldherr im 30-jährigen Krieg' },
                { id: 3, direction: 'across', x: 0, y: 5, answer: 'NAPOLEON',    clue: 'Kaiser der Franzosen, Gegner Preußens' },
                { id: 4, direction: 'down',   x: 2, y: 5, answer: 'PREUSSEN',    clue: 'Verlierer der Schlacht von Jena-Auerstedt' }
            ]
        }
    },
    'cw_befehlsrecht': {
        moduleId: 'befehlsrecht',
        type: 'crossword',
        title: 'Kreuzworträtsel: Befehlsrecht',
        description: 'Teste dein Wissen zu §1-32 WStG.',
        xpReward: 150,
        grid: {
            rows: 15,
            cols: 10,
            words: [
                { id: 1, direction: 'across', x: 0, y: 0, answer: 'BEFEHL',        clue: 'Anweisung zu einem bestimmten Verhalten' },
                { id: 2, direction: 'down',   x: 1, y: 0, answer: 'EIGENMAECHTIG', clue: 'Unerlaubte Abwesenheit (§15)' },
                { id: 3, direction: 'across', x: 1, y: 2, answer: 'GESETZ',        clue: 'Grundlage für Rechtmäßigkeit (sg.)' }
            ]
        }
    },
    'cw_polbil': {
        moduleId: 'polbil',
        type: 'crossword',
        title: 'Kreuzworträtsel: Int. Politik',
        description: 'Begriffe aus UN und Sicherheitspolitik.',
        xpReward: 150,
        grid: {
            rows: 8,
            cols: 15,
            words: [
                { id: 1, direction: 'across', x: 0, y: 0, answer: 'SICHERHEITSRAT', clue: 'Mächtigstes UN-Gremium' },
                { id: 2, direction: 'down',   x: 2, y: 0, answer: 'CHINA',          clue: 'Ständiges UN-Mitglied (Asien)' },
                { id: 3, direction: 'down',   x: 5, y: 0, answer: 'RUSSLAND',       clue: 'Ständiges UN-Mitglied (Eurasien)' }
            ]
        }
    },
    'cw_fuehrung': {
        moduleId: 'fuehrung',
        type: 'crossword',
        title: 'Kreuzworträtsel: Führung',
        description: 'Grundsätze der Führung im Einsatz.',
        xpReward: 150,
        grid: {
            rows: 10,
            cols: 15,
            words: [
                { id: 1, direction: 'across', x: 0, y: 0, answer: 'AUFTRAGSTAKTIK', clue: 'Führungsprinzip der Bundeswehr' },
                { id: 2, direction: 'down',   x: 2, y: 0, answer: 'FREIHEIT',       clue: 'Was man in der Durchführung gewährt' },
                { id: 3, direction: 'down',   x: 0, y: 0, answer: 'ABSICHT',        clue: 'Kern des Auftrags (Wille des Führers)' }
            ]
        }
    },
    'cw_taktik2': {
        moduleId: 'taktik2',
        type: 'crossword',
        title: 'Kreuzworträtsel: Beurteilung',
        description: 'Begriffe aus dem Führungsprozess.',
        xpReward: 150,
        grid: {
            rows: 12,
            cols: 12,
            words: [
                { id: 1, direction: 'across', x: 0, y: 0, answer: 'BEURTEILUNG', clue: 'Analyse der Lagefaktoren' },
                { id: 2, direction: 'down',   x: 1, y: 0, answer: 'ENTSCHLUSS',  clue: 'Ergebnis der Beurteilung' },
                { id: 3, direction: 'across', x: 1, y: 6, answer: 'LAGE',        clue: 'Situation, Umstände' }
            ]
        }
    },
    'cw_taktik_grundlagen': {
        moduleId: 'taktik_grundlagen',
        type: 'crossword',
        title: 'Kreuzworträtsel: Taktik Grundlagen',
        description: 'Begriffe aus Truppenführung, Operationsarten und Raumordnung.',
        xpReward: 150,
        grid: {
            rows: 15,
            cols: 15,
            words: [
                { id: 1,  direction: 'across', x: 0, y: 0,  answer: 'SCHWERPUNKT',   clue: 'Konzentration der Wirkung – stets nur einer' },
                { id: 2,  direction: 'down',   x: 0, y: 0,  answer: 'SCHNELLIGKEIT', clue: 'Tempo in Entscheidungsfindung und Befehlsgebung' },
                { id: 3,  direction: 'across', x: 2, y: 3,  answer: 'RESERVE',       clue: 'Mittel zur Einflussnahme – geschlossen einsetzen' },
                { id: 4,  direction: 'down',   x: 2, y: 3,  answer: 'RAUMORDNUNG',   clue: 'Zuweisung von Räumen und Verantwortlichkeiten' },
                { id: 5,  direction: 'across', x: 1, y: 7,  answer: 'EINBRUCH',      clue: '3. Phase des Angriffs' },
                { id: 6,  direction: 'down',   x: 5, y: 5,  answer: 'INFILTRATION',  clue: 'Angriffsform: verdecktes Eindringen durch Lücken' },
                { id: 7,  direction: 'across', x: 0, y: 11, answer: 'ABSICHT',       clue: 'Kern des Führungsprinzips – leitet sich aus übergeordneter Führung ab' },
                { id: 8,  direction: 'down',   x: 9, y: 7,  answer: 'DURCHBRUCH',    clue: 'Angriffsform: Bresche schlagen und Tiefe ausnutzen' },
                { id: 9,  direction: 'across', x: 3, y: 13, answer: 'FLANKE',        clue: 'Seitlicher Bereich der Truppe' },
                { id: 10, direction: 'down',   x: 0, y: 11, answer: 'AUFTRAG',       clue: 'Grundlage des Führens – zusammen mit Absicht der übergeordneten Führung' }
            ]
        }
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
