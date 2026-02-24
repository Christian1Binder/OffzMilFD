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
      title: '30-jähriger Krieg & Absolutismus',
      cards: [
        { 
          type: 'text', 
          content: `
            **30-jähriger Krieg (1618–1648):**
            • Auslöser: Prager Fenstersturz.
            • Ursache: Konfessionelle Spannungen (Prot. vs. Kath.) seit den 1580ern verschärft.
            • Sonderfall Böhmen: Überwiegend prot. Bevölkerung, aber katholischer König.
            • Regel: Landesherr bestimmt Konfession (Cuius regio, eius religio).` 
        },
        { 
          type: 'text', 
          content: `
            **Akteure & Westfälischer Frieden (1648):**
            • Wallenstein (1583–1634): Militärunternehmer.
            • Gustav II. Adolf (1594–1632): Schwedischer König.
            • Frieden: Rathaus Osnabrück & Münster (Schwur span./niederl. Gesandte).
            • Ergebnis: Gleichberechtigung der 3 Konfessionen (Kath., Luth., Calv.).
            • Bedeutung: Basis für zw.staatliche Regeln & dt. Föderalismus.` 
        },
        { 
          type: 'text', 
          content: `
            **Absolutismus & Preußens Aufstieg:**
            • Absolutismus: Unbeschränkte Staatsgewalt, keine Mitwirkung Dritter, "Von Gottes Gnaden", "Diener Gottes".
            • Siebenjähriger Krieg: Pentarchie (PR, GB, RU, FR, Ö). Preußen verbündet mit GB.` 
        }
      ]
    },
    {
      id: 'napoleon',
      title: 'Napoleonische Ära & Befreiungskriege',
      cards: [
        { 
          type: 'text', 
          content: `
            **Französische Revolution (1789-1799):**
            • 1792: Kriegserklärung an Ö & Abschaffung Monarchie.
            • 1793: Hinrichtung König.
            • Napoleon: Überwinder & Ende der Rev. 1799.
            • 1. Koalitionskrieg (1792): Valmy. 2. Koalitionskrieg (1798-1802): Aufstieg Napoleons.` 
        },
        { 
          type: 'text', 
          content: `
            **Jena-Auerstedt (14.10.1806):**
            • Preußen/Sachsen: Überheblichkeit, Lineartaktik, Artillerie nur Unterstützung, Manöverstrategie.
            • Frankreich: Kriegserfahrung, flexible Divisionen, Kolonnentaktik, eigenständige Artillerie, Vernichtungsstrategie.
            • Frieden von Tilsit (1807): Preußen verliert Besitz westl. Elbe, Heer max. 42.000 Mann, Wehrpflichtverbot, Besetzung Berlins (18.000 Mann), Pufferstaat.` 
        },
        { 
          type: 'text', 
          content: `
            **Preußische Heeresreform:**
            • Abschaffung Adelsprivileg.
            • Krümper-System (Umgehung Wehrpflichtverbot).
            • Kolonnen- & Tirailleur-Taktik.
            • Selbstständige waffengemischte Divisionen.
            • Milderung Wehrstrafrecht.
            • Kriegsministerium, Kriegsschulen & -akademien.` 
        },
        { 
          type: 'text', 
          content: `
            **Nationale Symbole & Erhebung:**
            • Nationalfarben: Lützower Jäger (Schwarz, Rote Vorstöße, Goldene Knöpfe), "Gold gab ich für Eisen" oder Symbol für "Einheit".
            • Eisernes Kreuz (10.03.1813): Erster Orden für jeden Soldaten (standesunabhängig).
            • Werte: Ritterlichkeit, Vaterlandsliebe, Tapferkeit.
            • Anlehnung an Tatenkreuz (Deutschritter). Stiftungen: 1813, 1870, 1914, 1939.` 
        },
        { 
          type: 'text', 
          content: `
            **Wiener Kongress 1815 (Metternich):**
            • Leitmotive: Restauration, Legitimität, Solidarität, Pentarchie (F, RUS, GB, PR, Ö).
            • Ergebnisse: Preußen erhält Rheinland/Sachsen ("Wacht am Rhein"). Ö wächst nach Südosteuropa.
            • Deutscher Dualismus: PR & Ö im Wettbewerb.` 
        },
        { 
          type: 'text', 
          content: `
            **Deutscher Bund & Revolution:**
            • 1815: Lockerer Staatenbund (41 Staaten), inkl. GB, Dänemark, Niederlande. Ziel: Kollektive Sicherheit.
            • Vormärz (1815-1844): Restaurative Fürsten vs. liberales Bürgertum.
            • Frankfurt 1848: Nationalstaat "von unten", Teilhabe, Grundrechte.
            • Scheitern: Ablehnung Krone durch Friedr. Wilh. IV., Erfurter Union.` 
        }
      ]
    },
    {
      id: 'reichseinigung',
      title: 'Reichseinigung & Kaiserreich',
      cards: [
        { 
          type: 'text', 
          content: `
            **Einigungskriege (1864-1871):**
            • 1864: Dänemark (Düppeler Schanzen).
            • 1866: Bruderkrieg Ö (Königgrätz).
            • 1870/71: FR (Sedan). Auslöser: Emser Depesche.
            • 18.01.1871: Kaiserproklamation Versailles.` 
        },
        { 
          type: 'text', 
          content: `
            **Bismarck vs. Wilhelm II.:**
            • Bismarck: Gleichgewicht, Isolation FR, Bündnisse (Dreikaiserbund, Zweibund, Dreibund, Rückversicherungsvertrag, Mittelmeerabkommen).
            • Dreikaiserjahr 1888: Wilhelm I. †, Friedrich III. †, Wilhelm II. übernimmt.
            • Wilhelm II. (ab 1890): Weltpolitik, Flotte, Imperialismus. Demontage der Bündnisse.` 
        },
        { 
          type: 'text', 
          content: `
            **Balkankriege 1912/13:**
            • Balkanbund vs. Osm. Reich.
            • RU als Schutzmacht Slawen, Ö-U mit slaw. Anteil.
            • Ergebnis: Schaffung Albanien, Gebietsgewinne Serbien, GR, Montenegro.` 
        }
      ]
    },
    {
      id: 'weltkriege',
      title: 'Weltkriege & Weimar',
      cards: [
        { 
          type: 'text', 
          content: `
            **Erster Weltkrieg (1914-1918):**
            • 28.06.14: Sarajevo (Princip ermordet Franz Ferdinand).
            • Automatismus: Blankoscheck -> Ultimatum -> Mobilmachung -> Kriegserklärungen (28.07. bis 04.08.).
            • Schlieffenplan: Zweifrontenkrieg-Annahme. Verdun 1916.
            • 1917: USA-Eintritt (Zimmermann-Telegramm).
            • 11.11.1918: Waffenstillstand (Erzberger/Foch).` 
        },
        { 
          type: 'text', 
          content: `
            **Versailles & Weimarer Republik:**
            • Versailler Vertrag (Art. 231): Alleinige Kriegsschuld.
            • Mil. Limits: 100k Mann, keine Pz/Lw/Gas, kein GenStab.
            • Dolchstoßlegende: "Im Felde unbesiegt" (Hindenburg/Ludendorff).
            • Geheimrüstung: Kooperation UdSSR (Kasan, Tomka, Lipezk), Truppenamt, Führerheer, Schwarze Reichswehr.` 
        },
        { 
          type: 'text', 
          content: `
            **Drittes Reich & Konferenzen:**
            • 09.11.1923: Hitler-Putsch scheitert. Strategie: Legalität.
            • 1938: Münchener Abkommen (Sudeten). 1939: Zerschlagung "Resttschechei".
            • Konferenzen: Teheran (Vorgehen/Aufteilung), Jalta (Besatzungszonen/Entnazifizierung), Potsdam (5 Ds: Demil., Denaz., Dezentr., Demokr., Demontage).` 
        }
      ]
    },
    {
      id: 'kalter_krieg',
      title: 'Kalter Krieg & Wiederbewaffnung',
      cards: [
        { 
          type: 'text', 
          content: `
            **Bündnisse & NATO:**
            • NATO (04.04.1949): Gründe: Tschechoslowakei-Umsturz, Berlinkrise 1948.
            • Neutralität: IRL, Ö, CH. (FIN/SWE bis 2022).
            • BRD-Beitritt (09.05.1955): 12 Heeresdivisionen, 20 Lw-Geschwader, 172 Schiffe.
            • Warschauer Pakt (14.05.1955): Militärpräsenz UdSSR in Osteuropa.` 
        },
        { 
          type: 'text', 
          content: `
            **Wiederbewaffnung West & Ost:**
            • West: Himmeroder Denkschrift (1950), Koreakrieg-Angst, Abschreckung.
            • Nov. 1955: Gründung Bundeswehr (Scharnhorst-Bezug).
            • Ost: NVA-Gründung (01.03.1956) aus Kasernierter Volkspolizei. Wehrpflicht ab 1962.` 
        },
        { 
          type: 'text', 
          content: `
            **Krisen & Ende:**
            • 13.08.1961: Mauerbau ("Antifa Schutzwall").
            • 1962: Kubakrise (Raketen TR vs. Kuba, Seeblockade, Abzug).
            • 12.12.1979: NATO-Doppelbeschluss (Nachrüstung vs. Verhandlung).
            • 12/1991: Auflösung UdSSR & Rücktritt Gorbatschow.` 
        }
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
