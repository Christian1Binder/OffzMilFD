// data.js – Vollversion mit vollständigem ZIP-Inhalt

export const curriculum = {
modules: [

/* =========================================================
   BEFEHLSRECHT – vollständig aus ZIP
========================================================= */

{
id: 'befehlsrecht',
title: 'Befehlsrecht',
icon: '⚖️',
description: 'Rechtsgrundlagen soldatischer Pflichten und Befehlsgewalt.',
units: [

{
id: 'befehlsbegriff',
title: 'Befehlsbegriff und Voraussetzungen',
cards: [

{ type: 'text', content: `
<h3>Befehlsdefinition (§2 Nr.2 WStG)</h3>
Ein Befehl ist eine Anordnung zu einem bestimmten Verhalten, die ein militärischer Vorgesetzter einem Untergebenen erteilt.
Merkmale:
- konkretes Verhalten
- Vorgesetztenverhältnis
- Gehorsamsanspruch`},

{ type: 'text', content: `
<h3>Vorgesetztenverhältnis</h3>
Regelung durch:
- §1 Abs.3 SG
- Vorgesetztenverordnung
Arten:
- Dienstgradvorgesetzter
- Dienststellungsvorgesetzter
- Fachvorgesetzter
- Vorgesetzter mit besonderer Anordnung
- Vorgesetzter in Gefahr im Verzug`},

{ type: 'text', content: `
<h3>Gehorsamspflicht (§11 SG)</h3>
Befehle sind vollständig, gewissenhaft und unverzüglich auszuführen.
Grenzen:
- keine Straftat
- keine Menschenwürdeverletzung
- Verhältnismäßigkeit`},

{ type: 'text', content: `
<h3>Rechtswidrigkeit vs. Unverbindlichkeit</h3>
Rechtswidrigkeit: objektiver Verstoß gegen Recht.
Unverbindlichkeit: keine Pflicht zur Ausführung.
Beispiel: Unverhältnismäßiger Drill = rechtswidrig, aber nicht zwingend unverbindlich.`}
]
},

{
id: 'rechtmaessigkeit',
title: 'Rechtmäßigkeit & Verbindlichkeit',
cards: [

{ type: 'text', content: `
Rechtmäßigkeit (Sicht Vorgesetzter):
1. Dienstlicher Zweck
2. Beachtung GG
3. HVR
4. Dienstvorschriften

Verbindlichkeit (Sicht Untergebener):
1. Kein Straftatbestand
2. Keine Menschenwürdeverletzung
3. Zumutbarkeit
4. Verhältnismäßigkeit`},

{ type: 'text', content: `
Unzumutbarkeit:
- erhebliche Gefahr für Leib/Leben ohne militärische Notwendigkeit
- Missbrauch der Befehlsgewalt`},

{ type: 'text', content: `
Gehorsamsverweigerung:
- §20 WStG
- beharrliche Weigerung
- Aufwiegelung`},

{ type: 'text', content: `
Dienstvergehen:
Verstoß gegen soldatische Pflichten.
Erfordert Vorsatz oder Fahrlässigkeit.`}
]
},

{
id: 'wehrstraftaten',
title: 'Wehrstraftaten im Detail',
cards: [

{ type: 'text', content: `
§15 WStG – Eigenmächtige Abwesenheit:
Fernbleiben >3 Tage oder Verlassen der Truppe.`},

{ type: 'text', content: `
§18 WStG – Dienstentziehung:
Täuschung zur Entziehung vom Dienst.
Nur Vorsatz.`},

{ type: 'text', content: `
§19 WStG – Ungehorsam:
Nichtbefolgen eines Befehls mit schwerwiegenden Folgen.
Schaden >750€ oder Gefährdung.`},

{ type: 'text', content: `
Beschwerderecht (§1 WBO):
Jeder Soldat kann Beschwerde einlegen.
Frist: 1 Monat.
Unterschied Meldung/Beschwerde.`}
]
}

]
},

/* =========================================================
   FÜHRUNG IM EINSATZ – vollständig aus ZIP
========================================================= */

{
id: 'fuehrung',
title: 'Führung im Einsatz',
icon: '🛡️',
description: 'Grundsätze militärischer Führung.',
units: [

{
id: 'auftragstaktik',
title: 'Führen mit Auftrag',
cards: [

{ type: 'text', content: `
Führen mit Auftrag:
Zielvorgabe statt Detailvorgabe.
Absicht ist Kern des Befehls.
Selbstständiges Handeln bei Lageänderung.`},

{ type: 'text', content: `
Wirkungsorientiertes Denken:
Fokus auf Ergebnis, nicht auf Methode.`},

{ type: 'text', content: `
Operation verbundener Kräfte:
Infanterie, Panzer, Artillerie im Zusammenwirken.`}
]
},

{
id: 'taktische_grundsaetze',
title: 'Taktische Grundsätze',
cards: [

{ type: 'text', content: `
Feuer und Bewegung:
Ein Teil bindet, anderer bewegt.`},

{ type: 'text', content: `
Schwerpunkt:
Konzentration der Kampfkraft am entscheidenden Punkt.`},

{ type: 'text', content: `
Reserve:
Ermöglicht Einflussnahme und Gegenangriff.`},

{ type: 'text', content: `
Gegenangriff vs. Gegenstoß:
Angriff = geplant, Reserve.
Stoß = sofort, lokal.`}
]
},

{
id: 'fuehrungsprozess',
title: 'Führungsprozess',
cards: [

{ type: 'text', content: `
Entscheidungsfindung:
1. Auftrag analysieren
2. Lage beurteilen
3. Entschluss
4. Befehl`},

{ type: 'text', content: `
Faktoren:
Kräfte – Raum – Zeit – Information`}
]
}

]
},

/* =========================================================
   MILITÄRGESCHICHTE – vollständig aus ZIP
========================================================= */

{
id: 'milhistory',
title: 'Militärgeschichte',
icon: '⚔️',
description: 'Vom 30-jährigen Krieg bis 1991.',
units: [

{
id: '30_jahre',
title: '30-jähriger Krieg',
cards: [

{ type: 'text', content: `
1618: Prager Fenstersturz.
Konflikt Protestanten vs. Katholiken.
Cuius regio eius religio.`},

{ type: 'text', content: `
Wallenstein – Militärunternehmer.
Gustav II Adolf – schwedischer König.`},

{ type: 'text', content: `
1648 Westfälischer Frieden:
Osnabrück & Münster.
Grundlage föderaler Ordnung.`}
]
},

{
id: 'napoleon',
title: 'Napoleonische Ära',
cards: [

{ type: 'text', content: `
Französische Revolution 1789.
Napoleon 1799.`},

{ type: 'text', content: `
Jena-Auerstedt 1806:
Preußische Niederlage.
Lineartaktik vs. flexible Division.`},

{ type: 'text', content: `
Preußische Reformen:
Krümper-System
Generalstab
Kriegsakademie
Tirailleur-Taktik`},

{ type: 'text', content: `
Eisernes Kreuz 1813.
Schwarz-Rot-Gold.`}
]
},

{
id: 'weltkriege',
title: 'Weltkriege',
cards: [

{ type: 'text', content: `
1914 Sarajevo.
Schlieffen-Plan.
Verdun.
USA-Eintritt 1917.
Versailler Vertrag.`},

{ type: 'text', content: `
Weimar:
Seeckt.
Truppenamt.
Geheime Kooperation UdSSR.`},

{ type: 'text', content: `
Konferenzen:
Teheran
Jalta
Potsdam – 4 Ds.`}
]
},

{
id: 'kalter_krieg',
title: 'Kalter Krieg',
cards: [

{ type: 'text', content: `
NATO 1949.
Warschauer Pakt 1955.`},

{ type: 'text', content: `
Bundeswehr 1955.
Himmeroder Denkschrift.
Innere Führung.`},

{ type: 'text', content: `
Krisen:
1961 Mauer
1962 Kuba
1979 Doppelbeschluss
1991 Ende UdSSR.`}
]
}

]
},

/* =========================================================
   POLITISCHE BILDUNG – vollständig aus ZIP
========================================================= */

{
id: 'polbil',
title: 'Politische Bildung',
icon: '🌍',
description: 'Internationale Sicherheit.',
units: [

{
id: 'uno',
title: 'UNO',
cards: [

{ type: 'text', content: `
Art.1 UN-Charta: Wahrung Weltfrieden.
Organe:
Generalversammlung
Sicherheitsrat (P5)
Sekretariat`},

{ type: 'text', content: `
Deutschland:
Nichtständiges Mitglied 2019/20.
Ambition ständiger Sitz.`}
]
},

{
id: 'nato',
title: 'NATO',
cards: [

{ type: 'text', content: `
Artikel 5 Bündnisfall.
NAC.
SACEUR.`},

{ type: 'text', content: `
Ostflanke.
2%-Ziel.
Finnland & Schweden.`}
]
},

{
id: 'eu',
title: 'EU & GSVP',
cards: [

{ type: 'text', content: `
Institutionen:
Europäischer Rat
Kommission
Rat der EU
Parlament`},

{ type: 'text', content: `
Petersberg-Aufgaben.
Battlegroups.
Kopenhagener Kriterien.`}
]
},

{
id: 'de_sicherheit',
title: 'Deutsche Sicherheitspolitik',
cards: [

{ type: 'text', content: `
Nationale Sicherheitsstrategie.
Resilienz.
Cyber.
Hybride Bedrohungen.`},

{ type: 'text', content: `
Parlamentsarmee.
Bundestagsmandat.
Einfache Mehrheit.`}
]
}

]
},

/* =========================================================
   TAKTIK II – vollständig aus ZIP
========================================================= */

{
id: 'taktik2',
title: 'Taktik II',
icon: '♟️',
description: 'Lagebeurteilung.',
units: [

{
id: 'lageaenderung',
title: 'Grundlegende Lageänderung',
cards: [

{ type: 'text', content: `
Kernfrage:
Hätte der Vorgesetzte bei Kenntnis anders befohlen?`},

{ type: 'text', content: `
Prüffragen:
- Verantwortungsbereich?
- Wesentliche Leistung?
- Auftrag gefährdet?`}
]
},

{
id: 'handlungsbedarf',
title: 'Handlungsbedarf',
cards: [

{ type: 'text', content: `
Gefahr oder Gelegenheit.`},

{ type: 'text', content: `
Prozess:
Lagefeststellung
Faktorenvergleich
Entschluss
Befehl`}
]
}

]
}

]
};

export async function loadData() {
return new Promise(resolve => setTimeout(() => resolve(curriculum), 10));
}

export function getModule(id) {
return curriculum.modules.find(m => m.id === id);
}

export function getUnit(moduleId, unitId) {
const mod = getModule(moduleId);
return mod ? mod.units.find(u => u.id === unitId) : null;
}
