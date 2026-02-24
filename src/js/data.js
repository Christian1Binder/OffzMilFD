// data.js – Vollversion mit vollständigem ZIP-Inhalt

export const curriculum = {
modules: [

/* =========================================================
   BEFEHLSRECHT – Vollständig & prüfungstauglich integriert
========================================================= */

{
id: 'befehlsrecht',
title: 'Befehlsrecht',
icon: '⚖️',
description: 'Rechtsgrundlagen soldatischer Pflichten, Wehrstrafrecht und Beschwerdewesen.',
units: [

/* ---------------------------------------------------------
   1. Liegt ein Befehl vor?
--------------------------------------------------------- */

{
id: 'befehlsbegriff',
title: 'Befehlsbegriff (§2 Nr.2 WStG)',
cards: [

{ type: 'text', content: `
<h3>Liegt ein Befehl vor gem. §2 Nr.2 WStG?</h3>
1. Anweisung zu bestimmtem Verhalten?
2. Militärischer Vorgesetzter gem. §1 Abs.3 SG?
3. Mit Anspruch auf Gehorsam §11 Abs.1 SG („keine Handlungsalternative“)?`},

{ type: 'text', content: `
<h3>Vorgesetztenverhältnis</h3>
- Dienstgradvorgesetzter
- Dienststellungsvorgesetzter
- Fachvorgesetzter
- Vorgesetzter mit besonderer Anordnung
- Vorgesetzter bei Gefahr im Verzug
Rechtsgrundlagen: Vorgesetztenverordnung, §21 WDO, Art. 65a GG, Art.115b GG`}

]
},

/* ---------------------------------------------------------
   2. Rechtmäßigkeit & Verbindlichkeit
--------------------------------------------------------- */

{
id: 'rechtmaessigkeit',
title: 'Rechtmäßigkeit (§10 Abs.4 SG) & Verbindlichkeit (§11 SG)',
cards: [

{ type: 'text', content: `
<h3>Rechtmäßigkeit (Sicht Befehlsgeber) §10 Abs.4 SG</h3>
1. Dienstlicher Zweck
2. Beachtung Völkerrecht (Art.25 GG)
3. Beachtung Gesetze
4. Dienstvorschriften beachten`},

{ type: 'text', content: `
<h3>Verbindlichkeit (Sicht Empfänger) §11 Abs.1 S.3, Abs.2 SG</h3>
1. Dienstlicher Zweck
2. Kein Verstoß gegen Menschenwürde oder HVR
3. Keine Unzumutbarkeit
   a) Eingriff in Grundrecht benennen
   b) Verhältnismäßigkeit prüfen:
      - Geeignetheit
      - Erforderlichkeit
      - Angemessenheit
4. Keine Straftat (StGB, WStG, VStGB)`}

]
},

/* ---------------------------------------------------------
   3. Soldatengesetz – Pflichtenstruktur
--------------------------------------------------------- */

{
id: 'soldatenpflichten',
title: 'Soldatische Pflichten (SG)',
cards: [

{ type: 'text', content: `
<h3>§7 SG – Grundpflichten (Kernpflichten!)</h3>
- Loyalität zur Rechtsordnung
- Pflicht zur Dienstleistung
- Wahrung Bundesvermögen
Bezug zu §31 Abs.1 WStG und StGB bei Kernpflichtverletzung.`},

{ type: 'text', content: `
<h3>§8 SG – FDGO</h3>
Würde des Menschen
Demokratieprinzip
Rechtsstaatlichkeit`},

{ type: 'text', content: `
<h3>§10 SG – Pflichten des Vorgesetzten</h3>
Abs.2 Dienstaufsicht
Abs.3 Fürsorgepflicht
Abs.4 Rechtmäßigkeit
Abs.5 Befehlsdurchsetzung
Abs.6 Zurückhaltung bei Äußerungen`},

{ type: 'text', content: `
<h3>§11 SG – Gehorsam</h3>
Abs.1 Gehorsamspflicht (Dienstplan etc.)
Abs.2 Grenzen`},

{ type: 'text', content: `
<h3>§12 S.2 SG – Kameradschaft</h3>`},

{ type: 'text', content: `
<h3>§17 Abs.1–3 SG – Verhalten im und außer Dienst</h3>
Abs.2 S.3 nur bei mittelschwerer Strafe (bis 2 Jahre)`},

{ type: 'text', content: `
Keine soldatische Pflicht:
§30 Abs.3 & §32 Abs.3 WDO
§7 Abs.2 SoldGG`}

]
},

/* ---------------------------------------------------------
   4. Prüfung Dienstvergehen
--------------------------------------------------------- */

{
id: 'dienstvergehen_pruefung',
title: 'Prüfung eines Dienstvergehens',
cards: [

{ type: 'text', content: `
<h3>I) Objektiver Tatbestand §23 Abs.1 SG</h3>
- Pflichtverstoß prüfen
- Bezug zum Sachverhalt herstellen
- Bei Kernpflichtverletzung Bezug zu §7 SG
- Bezug zu §31 Abs.1 WStG oder andere WStG-Normen`},

{ type: 'text', content: `
<h3>Vorsatz & Fahrlässigkeit (§15 StGB)</h3>
Vorsatz (+): wusste und wollte
Fahrlässigkeit (+): hätte wissen können/müssen`},

{ type: 'text', content: `
<h3>II) Subjektiver Tatbestand</h3>
Zu 1 Vorsatz (+) …
Zu 2 Fahrlässigkeit (+) …`},

{ type: 'text', content: `
<h3>III) Rechtswidrigkeit</h3>
Kein Rechtfertigungsgrund`},

{ type: 'text', content: `
<h3>IV) Schuld</h3>
Keine Schuldausschließungsgründe`}

]
},

/* ---------------------------------------------------------
   5. Wehrstrafgesetz – Tatbestände
--------------------------------------------------------- */

{
id: 'wstg',
title: 'Wehrstrafgesetz (WStG)',
cards: [

{ type: 'text', content: `
<h3>§15 Eigenmächtige Abwesenheit</h3>
I) 1. Trp/Dst verlassen oder fernbleiben
   2. eigenmächtig
   3. >3 Kalendertage
II) Vorsatz bzgl. Verlassen + Eigenmächtigkeit
   Fahrlässigkeit/Vorsatz bzgl. Dauer
III) Rechtswidrigkeit
IV) Schuld`},

{ type: 'text', content: `
<h3>§18 Dienstentziehung durch Täuschung</h3>
I) 1. Sich oder anderen Sdt.
   2. dem Wehrdienst entziehen
   3. für gewisse Zeit
   4. durch arglistige Täuschung
   5. auf Genehmigung hingewirkt
Nur Vorsatz möglich.`},

{ type: 'text', content: `
<h3>§19 Ungehorsam</h3>
I) Nichtbefolgung eines Befehls
II) Schwerwiegende Folge (>750€)
Vorsatz oder Fahrlässigkeit möglich.`},

{ type: 'text', content: `
<h3>§32 Missbrauch der Befehlsbefugnis</h3>
1. Vorgesetzter
2. Missbrauch Befehlsbefugnis/Dienststellung
3. Befehle/Forderungen/Zumutungen
4. Ohne Bezug zum Dienst oder dienstlichen Zwecken zuwider`}

]
},

/* ---------------------------------------------------------
   6. Beschwerderecht (WBO/WDO)
--------------------------------------------------------- */

{
id: 'beschwerde',
title: 'Beschwerderecht',
cards: [

{ type: 'text', content: `
<h3>Beschwerde vs. Meldung</h3>
Meldung: kein Anspruch auf Rückmeldung
Beschwerde: Anspruch auf Beschwerdebescheid §12 Abs.1 S.3 WBO`},

{ type: 'text', content: `
<h3>Beschwerdearten</h3>
Disziplinarbeschwerde §42 WDO
Truppendienstliche Beschwerde §1 WBO
Keine aufschiebende Wirkung §3 WBO`},

{ type: 'text', content: `
<h3>Zulässigkeit §13 WBO</h3>
Statthaftigkeit §1 I, IV WBO
Beschwer
Form §6 II WBO
Fristen §6 I WBO (Nachtfrist & Monatsfrist)`},

{ type: 'text', content: `
<h3>Zuständigkeit</h3>
§43 I WDO
§9 I 1 WBO
Empfangszuständigkeit §5 WBO`},

{ type: 'text', content: `
Zurücknahme §8 I 4 WBO
Dienstaufsicht bleibt §8 II WBO`}

]
},

/* ---------------------------------------------------------
   7. Abgabe an Staatsanwaltschaft A-2160/6
--------------------------------------------------------- */

{
id: 'staatsanwaltschaft',
title: 'Abgabe an Staatsanwaltschaft (A-2160/6)',
cards: [

{ type: 'text', content: `
1.9.8 Muss: sämtliche Verbrechen (§12 StGB)`},

{ type: 'text', content: `
1.9.9 Soll: Straftaten nach WStG (nicht 1.9.8)`},

{ type: 'text', content: `
1126 Kann: Entscheidung durch Vorgesetzten`}
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
