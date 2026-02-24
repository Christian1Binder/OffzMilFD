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
1. Anweisung zu bestimmtem Verhalten?\n
2. Militärischer Vorgesetzter gem. §1 Abs.3 SG?\n
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
    TAKTIK & TRUPPENFÜHRUNG – Vollständig aus Notizen
========================================================= */

{
  id: 'taktik_leadership',
  title: 'Taktik & Truppenführung',
  icon: '🎖️',
  description: 'Grundsätze der Truppenführung, Verteidigung und Gefechtsführung.',
  units: [
    {
      id: 'grundsaetze_führung',
      title: 'Leitende Grundsätze & Faktoren',
      cards: [
        { 
          type: 'text', 
          content: `
            **Prinzipien der Truppenführung (TrpFhr):**
            • Führen mit Auftrag (Auftragstaktik).
            • Wirkungsorientiertes Denken.
            • Vernetzter Ansatz.
            • Operation verbundener Kräfte.
            **Hauptelemente des Gefechtes:** Feuer und Bewegung in Verbindung mit Sperren.` 
        },
        { 
          type: 'text', 
          content: `
            **Faktoren & Handlungsfelder:**
            • **Handlungsfelder:** Information (Kern des Führungsprozesses: Entscheidungsfindung).
            • **Faktoren:** Kräfte, Raum, Zeit.
            • **Wichtigste Faktoren für Entscheidung:** Zeit & Information.` 
        },
        { 
          type: 'text', 
          content: `
            **Raumordnung in Landoperationen:**
            • **Verantwortungsbereich:** Zugewiesener Operationsraum; TrFhr ist hier voll verantwortlich.
            • **Interessenbereich:** Raum über den Verantwortungsbereich hinaus, der für die eigene Operationsführung von Bedeutung ist.` 
        }
      ]
    },
    {
      id: 'schwerpunkt_reserve',
      title: 'Schwerpunktbildung & Reserven',
      cards: [
        { 
          type: 'text', 
          content: `
            **Der Schwerpunkt (SP):**
            • Ort, an dem der Hauptstoß des Angreifers zum Scheitern gebracht werden soll.
            • Ziel: Höchste Wirkung von Feuer und Sperren; Herbeiführen der Entscheidung.
            • **Bildung durch:** Zusammenfassung von Kräften, Raum oder Feuer.` 
        },
        { 
          type: 'text', 
          content: `
            **Maßnahmen zur SP-Bildung:**
            • Vorrang beim Feuer & Verdichten der Aufklärung.
            • Änderung der Raumordnung.
            • Planung/Einsatz von Reserven & zusätzlichen Kräften.
            • Elektronischer Kampf (EloKa).` 
        },
        { 
          type: 'text', 
          content: `
            **Reserven:**
            • **Einsatz:** Werden grundsätzlich geschlossen eingesetzt.
            • **Zweck:** Entscheidung erzwingen, SP verlegen, Krisen überwinden.
            • **Nachsteuerung:** Ist die Reserve eingesetzt, muss schnellstmöglich eine neue gebildet werden.` 
        }
      ]
    },
    {
      id: 'verteidigung_dynamik',
      title: 'Verteidigung & Gegenmaßnahmen',
      cards: [
        { 
          type: 'text', 
          content: `
            **Zweck & Ziele Verteidigen:**
            • Angriff zum Scheitern bringen.
            • Fokus: Halten des Raumes ODER Abnutzen/Zerschlagen feindlicher Kräfte.
            • **Definition Aktiv:** Raum halten, Gegner aufhalten/abschwächen, Zeit gewinnen.` 
        },
        { 
          type: 'text', 
          content: `
            **Gegenmaßnahme vs. Gegenangriff:**
            • **Gegenangriff:** Vorgeplant/vorbereitet, meist durch Reserven geführt. Ziel: Feind zerschlagen & Handlungsfreiheit gewinnen (Fokus: Schnelligkeit/Überraschung).
            • **Gegenstoß:** Aus eigenem Entschluss in günstiger Lage, meist ohne Vorbereitung, nah gestecktes Ziel, mit sofort verfügbaren Kräften.` 
        },
        { 
          type: 'text', 
          content: `
            **Einbruch vs. Durchbruch:**
            • **Einbruch:** Eindringen in Stellungen mit begrenztem Erfolg, keine nachhaltige Kontrolle.
            • **Durchbruch:** Strategischer Erfolg; Stellung vollständig überwunden -> Umgruppierung -> Vorstoß ins Hinterland.` 
        },
        { 
          type: 'text', 
          content: `
            **Spezialformen:**
            • **Auffangen:** Tiefe Verteidigungsführung, wenn Einbruch nicht anders haltbar und Gegenangriff aussichtslos.
            • **Verstärken:** Unterstellung von Kräften, eigener Gefechtsstreifen, frühzeitige Bedrohungsabwehr.` 
        }
      ]
    },
    {
      id: 'gefechtsfuehrung_stf',
      title: 'Gefechtsführung & Wirkungsformen',
      cards: [
        { 
          type: 'text', 
          content: `
            **FAWU-Grundgliederung:**
            • **F**ührung (Gefechtsstand)
            • **A**ufklärung (z.B. Drohnen)
            • **W**irkung (z.B. Sperren)
            • **U**nterstützung (Logistik)` 
        },
        { 
          type: 'text', 
          content: `
            **Hammer-Amboss-Prinzip:**
            • **Amboss (Feuer):** Feind binden (Feuerüberlegenheit/Gelände), Bewegungsfreiheit einschränken -> Zeitgewinn.
            • **Hammer (Bewegung):** Bewegliches Element, Umfassungsbewegung/Flankenstoß in die Tiefe zur Zerschlagung.` 
        },
        { 
          type: 'text', 
          content: `
            **4 Wirkforderungen STF (Englisch):**
            1. **Blind (bli):** Phase Ausweichen von Kräften aus der Sichtlinie.
            2. **Overwatch (ovw):** Überwachung (z.B. durch ABRA).
            3. **Engage:** Allgemeiner Auftrag bei gestauten Feindkräften an Richte-Minen-Sperren (RiMiSpe).
            4. **Annihilate:** Vernichtungsauftrag.` 
        },
        { 
          type: 'text', 
          content: `
            **4 Arten des Feuerkampfes:**
            1. Allg. Feuerunterstützung (AF) – General Support (GS).
            2. Unmittelbare (UF) – Direct Support (DS).
            3. Feuerverstärkung (FV) – Reinforcing (R).
            4. Allg. mit Feuerverstärkung – General Support Reinforcing (GSR).` 
        }
      ]
    },
    {
      id: 'pioniere_technik',
      title: 'Pionierwesen & Kampfmittel',
      cards: [
        { 
          type: 'text', 
          content: `
            **Pionierunterstützung:**
            • **Unmittelbar:** Unterstützung laufender Operationen, Fokus: Schnelligkeit.
            • **Allgemein:** Langfristige Vorbereitung, Fokus: Einsatzinfrastruktur.
            • **4 Kernaufgaben:** Bewegungen fördern, Überlebensfähigkeit erhöhen, Hemmen/Kanalisieren (Gegner), Lagebildbeitrag.` 
        },
        { 
          type: 'text', 
          content: `
            **Sperren:**
            • **Zweck:** Lenken, Hemmen, Stauen, Abnutzen, Kanalisieren.
            • **Grundsatz:** Sperren sind zwingend zu überwachen!` 
        },
        { 
          type: 'text', 
          content: `
            **Waffensysteme & Reichweiten:**
            • **PzGrenKp (Puma):** 14 Fahrzeuge. Kampfentf.: 2000m KE, 3000m ABM, 4000m MELLS.
            • **PzZg (Leopard):** 4 Fahrzeuge. Kampfentf.: 3000m KE, 5000m HE.` 
        }
      ]
    },
    {
      id: 'planung_besonderheiten',
      title: 'Planung & Besonderheiten',
      cards: [
        { 
          type: 'text', 
          content: `
            **Gegenangriff (GGAngriff) Planung:**
            • Benötigt die meiste Vorbereitungszeit.
            • Phasen: Erkundung Anmarsch, Feuerregelung mit Kräften am VRV, eigene Feuerplanung, Befehlsgebung.` 
        },
        { 
          type: 'text', 
          content: `
            **Gelände & Grenzen:**
            • **Grenzen:** Zusammenhängende Geländeabschnitte müssen in einer Verantwortung bleiben.
            • **Stellungsraum:** Ermöglicht den Kampf aus wechselnden Stellungen (Plätze für gedeckte Aufstellung).` 
        },
        { 
          type: 'text', 
          content: `
            **Auswirkungen verspäteter Aufträge:**
            • Wenig Zeit zur Erkundung.
            • Eingeschränkte Kampfkraft.
            • Lange Dauer bis zur Bildung einer neuen Reserve.` 
        }
      ]
    }
  ]
},

/* =========================================================
    MILITÄRGESCHICHTE – VOLLSTÄNDIG & DETAILREICH
========================================================= */

{
  id: 'milhistory',
  title: 'Militärgeschichte',
  icon: '⚔️',
  description: 'Detaillierte Chronik vom 30-jährigen Krieg bis zum Ende der UdSSR 1991.',
  units: [
    {
      id: 'fruehe_neuzeit',
      title: 'Frühe Neuzeit & Absolutismus',
      cards: [
        { 
          type: 'text', 
          content: `
            **30-jähriger Krieg (1618–1648):**
            • **Auslöser:** Prager Fenstersturz (1618).
            • **Konflikt:** Protestanten gegen Katholiken, Spannungen seit den 1580ern.
            • **Landesherr:** Bestimmt die Konfession (Cuius regio, eius religio).
            • **Böhmen:** Sonderfall (prot. Volk / kath. König).
            • **Akteure:** Wallenstein (Militärunternehmer), Gustav II. Adolf (Schwedenkönig).` 
        },
        { 
          type: 'text', 
          content: `
            **Westfälischer Frieden (1648):**
            • **Orte:** Rathaus Osnabrück & Münster.
            • **Ereignis:** Schwur span. & niederl. Gesandter (Frieden von Münster).
            • **Kern:** Gleichberechtigung von Katholiken, Lutheranern und Calvinisten.
            • **Bedeutung:** Basis für dt. Föderalismus & zw.staatliche Regelungen.` 
        },
        { 
          type: 'text', 
          content: `
            **Absolutismus & Preußen:**
            • **Herrschaft:** Souverän mit ungeteilter Staatsgewalt, keine Mitwirkung anderer Gruppen.
            • **Legitimation:** "Von Gottes Gnaden", über dem Gesetz, aber "Diener Gottes".
            • **7-jähriger Krieg:** Aufstieg Preußens in der Pentarchie (PR, GB, RU, FR, Ö). Bündnis PR-GB.` 
        }
      ]
    },
    {
      id: 'napoleon_reformen',
      title: 'Napoleonische Ära & Preußische Reformen',
      cards: [
        { 
          type: 'text', 
          content: `
            **Französische Revolution (1789-1799):**
            • 04/1792: Krieg an Österreich. 1792: Ende Monarchie. 1793: Hinrichtung König.
            • Napoleon: Beendet Rev. 1799 (Überwinder).
            • **Koalitionskriege:** 1. Krieg (1792-1797) mit Kanonade von Valmy. 2. Krieg (1798-1802) als Basis für Napoleons Aufstieg.
            • Ägypten-Expedition (1798-1801).` 
        },
        { 
          type: 'text', 
          content: `
            **Zusammenbruch Preußens 1806/07:**
            • **Schlacht von Jena (14.10.1806):** PR (Lineartaktik, alte Kommandeure, Überheblichkeit) unterliegt FR (Kolonnentaktik, flexible Divisionen, eigenst. Artillerie, Vernichtungsstrategie).
            • **Frieden von Tilsit (1807):** Preußen als Pufferstaat; Verlust aller Gebiete westl. Elbe; max. 42.000 Mann Heer; Verbot der Wehrpflicht; Besetzung Berlins (18.000 Mann Vollversorgung). Folge: Armut & Demütigung.` 
        },
        { 
          type: 'text', 
          content: `
            **Preußische Heeresreform (Kernelemente):**
            • Abschaffung Adelsprivileg.
            • **Krümper-System:** Umgehung des Wehrpflichtverbots.
            • Taktik: Kolonnen- & Tirailleur-Taktik.
            • Struktur: Waffengemischte Divisionen, Kriegsministerium, Kriegsschulen/Akademien.
            • Milderung des Wehrstrafrechts.` 
        },
        { 
          type: 'text', 
          content: `
            **Nationale Erhebung & Symbole:**
            • **Nationalfarben:** Uniform Lützower Jäger (Schwarz, Rot, Gold); "Gold gab ich für Eisen". Symbol für bestehende Einheit.
            • **Eisernes Kreuz (10.03.1813):** Stiftung zum Geb. von Königin Luise. Erster Orden für alle Ränge (unabh. von Stand). Anlehnung an Deutschritter-Tatenkreuz.
            • Werte: Ritterlichkeit, Freiheit, Vaterlandsliebe, Tapferkeit.` 
        }
      ]
    },
    {
      id: 'restauration_einigung',
      title: 'Restauration & Reichsgründung',
      cards: [
        { 
          type: 'text', 
          content: `
            **Wiener Kongress 1815 (Metternich):**
            • **Motive:** Restauration, Legitimität, Solidarität gegen Revolution, Pentarchie-Gleichgewicht.
            • **Ergebnisse:** FR bleibt Großmacht (1792); RU halbhegemonial; GB gewinnt Helgoland/Malta; PR erhält Rheinland & Sachsen ("Wacht am Rhein"); Ö wächst aus DEU heraus.` 
        },
        { 
          type: 'text', 
          content: `
            **Der Deutsche Bund (1815):**
            • Lockerer Staatenbund (41 Staaten); Nachfolge HRRDN.
            • Führung: PR & Ö. Inkl. GB, Dänemark, Niederlande.
            • Ziel: Europ. Sicherheit & eigene Kriegsverfassung.
            • **Vormärz:** Konflikt Fürsten (Restauration) vs. Bürgertum (Liberalismus).` 
        },
        { 
          type: 'text', 
          content: `
            **Revolution & Einigungskriege:**
            • **Frankfurt 1848:** Nationalstaat "von unten", Teilhabe, Versammlungsfreiheit. Scheitert an Kronenablehnung Friedr. Wilh. IV.
            • **Erfurter Union:** Gescheiterte Einigung "von oben".
            • **Kriege:** 1864 Dänemark (Düppeler Schanzen); 1866 Ö (Königgrätz/Bruderkrieg); 1870/71 FR (Emser Depesche/Sedan).
            • **18.01.1871:** Kaiserproklamation Versailles.` 
        }
      ]
    },
    {
      id: 'ära_wilhelm',
      title: 'Das Kaiserreich bis 1918',
      cards: [
        { 
          type: 'text', 
          content: `
            **Bismarcks Bündnispolitik (Isolation FR):**
            • Dreikaiserbund (1872/73), Zweibund (1879), Dreibund (1882), Beitritt Rumänien (1883), Rückversicherungsvertrag (1887), Mittelmeerabkommen (1887).
            • **Dreikaiserjahr 1888:** Wilhelm I. †, Friedrich III. †, Wilhelm II. tritt an.` 
        },
        { 
          type: 'text', 
          content: `
            **Wilhelminismus & Balkan:**
            • 1890: Bismarck-Entlassung; Ende Konsolidierung; Weltpolitik & Flotte.
            • Schutzzollpolitik (ab 1878); Nichtverlängerung Rückvers.-Vertrag; Einkreisung.
            • **Balkankriege 1912/13:** Balkanbund vs. Osm. Reich. RU (Schutzmacht Slawen) vs. Ö-U. Ergebnis: Albanien-Gründung, Gebietsgewinne Serbien/GR/Montenegro.` 
        },
        { 
          type: 'text', 
          content: `
            **Erster Weltkrieg (1914-1918):**
            • **Ausbruch:** 28.06. Sarajevo (Franz Ferdinand †). Blankoscheck 06.07. Ultimatum 23.07. Kriegserklärungen ab 28.07.
            • **Militär:** Schlieffenplan (Zweifrontenkrieg); Verdun 1916 (Stellungskrieg).
            • **Wende 1917:** USA-Eintritt (Zimmermann-Telegramm).
            • **Ende:** 11.11.1918, 11 Uhr, Compiègne (Erzberger/Foch).` 
        }
      ]
    },
    {
      id: 'weimar_ns',
      title: 'Weimarer Republik & NS-Zeit',
      cards: [
        { 
          type: 'text', 
          content: `
            **Versailles & Geheimrüstung:**
            • **Versailles:** Art. 231 (Schuld); 100k Heer; 15k Marine; 4k Offiziere; 12/25 J. Verpflichtung; Verbot Lw/Pz/Gas/GenStab.
            • **Dolchstoßlegende:** Heer "im Felde unbesiegt" (Hindenburg/Ludendorff).
            • **Geheim-Kooperation UdSSR:** Kasan (Pz), Tomka (Chem.), Lipezk (Flugzeug).
            • **Struktur:** Führerheer, Truppenamt (GenStab-Ersatz), Schwarze Reichswehr.` 
        },
        { 
          type: 'text', 
          content: `
            **NS-Aufstieg & Kriegsvorbereitung:**
            • 09.11.1923: Hitler-Putsch scheitert; Haft; Legalitätstaktik.
            • 1938: Münchner Abkommen (Sudeten). Chamberlain lenkt ein.
            • 15.03.1939: Zerschlagung "Resttschechei".` 
        },
        { 
          type: 'text', 
          content: `
            **Alliierte Konferenzen:**
            • **Teheran (1943):** Mil. Vorgehen, Kapitulation, Aufteilung PR.
            • **Jalta (02/1945):** 4 Zonen, Entmilitarisierung, Entnazifizierung.
            • **Potsdam (08/1945):** Die 5 Ds (Demil., Denaz., Dezentr., Demokr., Demontage).` 
        }
      ]
    },
    {
      id: 'kalter_krieg_ende',
      title: 'Kalter Krieg & Systemkonflikt',
      cards: [
        { 
          type: 'text', 
          content: `
            **NATO & Warschauer Pakt:**
            • **NATO (1949):** Reaktion auf CZ-Umsturz & Berlin-Blockade.
            • **WP (1955-1991):** Sozialist. Hilfeleistung; sowjet. Präsenz; keine Wirtschaftskomponente.
            • **Neutralität:** IRL, Ö, CH (Neutral), FIN/SWE (Neutral bis 2022).` 
        },
        { 
          type: 'text', 
          content: `
            **Wiederbewaffnung BRD & DDR:**
            • **BRD:** Himmeroder Denkschrift (1950); NATO-Beitritt 09.05.1955 (12 Div., 20 Geschw., 172 Schiffe).
            • **DDR:** KVP -> NVA-Gründung (01.03.1956); Wehrpflicht 1962; sowjet. Vorbild; kaum Wehrmacht-Veteranen.
            • 13.08.1961: Mauerbau ("Antifa Schutzwall").` 
        },
        { 
          type: 'text', 
          content: `
            **Krisen bis zum Zerfall:**
            • **Kubakrise 1962:** Raketen TR (USA) vs. Kuba (RU); Seeblockade; Abzug beider Seiten.
            • **NATO-Doppelbeschluss (1979):** Reaktion auf sowjet. Aufrüstung; Aufstellung Mittelstrecke vs. Verhandlung.
            • **12/1991:** Ende UdSSR; Rücktritt Gorbatschow.` 
        }
      ]
    }
  ]
},
   
/* =========================================================
    POLITISCHE BILDUNG – Vollständig aus Notizen
========================================================= */

{
  id: 'pol_education',
  title: 'Politische Bildung',
  icon: '🏛️',
  description: 'Sicherheitspolitik, Bündnisse und internationale Organisationen.',
  units: [
    {
      id: 'parlament_bundeswehr',
      title: 'Parlamentsvorbehalt & Recht',
      cards: [
        { 
          type: 'text', 
          content: `
            **Prozess bewaffnete Einsätze (7 Schritte):**
            1. Konfliktsituation entsteht.
            2. VN-Sicherheitsrat analysiert + Rechtsgrundlage.
            3. NATO/VN/EU autorisiert den Einsatz.
            4. Bitte an die Bundesregierung.
            5. Mandatsentwurf & Kabinettsentschluss.
            6. Beratung in Verteidigungs- & Auswärtigem Ausschuss.
            7. Bundestag-Abstimmung (Genehmigung 50+1) -> Entsendung.` 
        },
        { 
          type: 'text', 
          content: `
            **Parlamentsbeteiligungsgesetz:**
            Gibt vor, wie/wann Anträge an den BT gestellt werden. Pflichtangaben:
            • Einsatzauftrag & Einsatzgebiet.
            • Rechtliche Grundlagen.
            • Höchstzahl der Soldaten & Fähigkeiten der SK.
            • Geplante Dauer & voraussichtliche Kosten.` 
        }
      ]
    },
    {
      id: 'nss_vpr_strategie',
      title: 'Strategien (NSS) & Aufträge (VPR)',
      cards: [
        { 
          type: 'text', 
          content: `
            **Nationale Sicherheitsstrategie (NSS) - Kap. 1:**
            Ganzheitlicher Ansatz (Politik, Wirtschaft, Gesellschaft, Militär).
            • **Ziel:** Freiheit, Sicherheit, Stabilität, Bewahrung der Demokr. Grundordnung.
            • **Werte:** Demokratie, Rechtsstaat, Menschenrechte, int. Zusammenarbeit.` 
        },
        { 
          type: 'text', 
          content: `
            **Bedrohungsanalyse gemäß NSS (Kap. 2):**
            • Cyberangriffe, Terrorismus, hybride Bedrohungen.
            • Klimawandel, globale Krisen, geopolitische Spannungen.
            • Inner-/zwischenstaatliche Konflikte, Demographie, Ressourcenkampf, Org. Kriminalität.
            • Notwendigkeit: Resilienz, schnelle Reaktion & Integration aller Bereiche.` 
        },
        { 
          type: 'text', 
          content: `
            **Kernaufträge gemäß VPR:**
            • Abschreckung (Hoheits- & Bündnisgebiet) in allen Dimensionen.
            • Landesverteidigung (LV) & territoriale Verteidigung.
            • Bündnisverteidigung (BV) bei Angriffen auf Partner.
            • Abwehr terroristischer & hybrider Bedrohungen.
            • Festigung transatlantischer & europäischer Verteidigungsfähigkeit.` 
        },
        { 
          type: 'text', 
          content: `
            **Single Set of Forces:**
            Fähigkeiten sind in einem Kräftedispositiv gebündelt (Flexibilität/Agilität).
            • Ermöglicht Einsatz in versch. Regionen/Bedrohungen.
            • Einbindung multinationaler Partner zur Wirkungsgradsteigerung.
            • Schnelle Nutzung von Hochtechnologie-Innovationen.` 
        }
      ]
    },
    {
      id: 'nato_strukturen',
      title: 'NATO: Bündnis & Ostflanke',
      cards: [
        { 
          type: 'text', 
          content: `
            **Artikel 5 & LV/BV Maßnahmen:**
            • **Art. 5:** Angriff auf einen = Angriff auf alle. Kollektive Verteidigung.
            • **Maßnahmen:** Übungen zur Einsatzbereitschaft, Modernisierung, verstärkte Präsenz im Bündnisgebiet, Verteidigungsplanung (NATO-Plan/Bund).` 
        },
        { 
          type: 'text', 
          content: `
            **Gipfelentscheidung W24 & Führung:**
            • Ausbau mil. Kapazitäten, Solidarität, Fokus auf Osteuropa & Cyber/Hybrid. Erhöhung der Ausgaben.
            • **NAC (North Atlantic Council):** Wichtigstes Gremium (Botschafter), polit. Entscheidungen.
            • **SACEUR:** Gen. Christopher G. Cavoli (USA).
            • **ACO/SHAPE:** Gen. Laubenthal ist Chief of Staff (COS).` 
        },
        { 
          type: 'text', 
          content: `
            **Lage NATO-Ostflanke:**
            • **Polen/Baltikum:** Multinationale Kampfgruppen & Präsenz.
            • **Rumänien/Bulgarien:** Sicherung Südostflanke.
            • **Infrastruktur:** Ausbau Logistik & Stützpunkte.
            • **Speerspitze:** Schnelle Eingreifkräfte für Ernstfall-Reaktion.` 
        },
        { 
          type: 'text', 
          content: `
            **DEU Verteidigungsausgaben 2024:**
            • Haushalt: 51,95 Mrd. € | Sondervermögen: 19,8 Mrd. €
            • Munition: 280 Mio. | Kampffahrzeuge: 79 Mio.
            • Flugzeuge: 320 Mio. | Schiffe: 80 Mio. | Mil. Ausrüstung (allg.): 2,48 Mrd. €` 
        }
      ]
    },
    {
      id: 'eu_europa',
      title: 'Europäische Union (EU)',
      cards: [
        { 
          type: 'text', 
          content: `
            **Prinzipien & Organe:**
            • **Supranationalität:** Abgabe von Souveränität an EU-Institutionen (EU-Recht vor nationalem Recht).
            • **Europäischer Rat:** Impulse (Antonio Costa).
            • **EU Kommission:** Interessen weltweit (Ursula von der Leyen).
            • **Rat der EU (Ministerrat):** Kaja Kallas (Außen-/Sicherheitspolitik).
            • **EU Parlament:** Roberta Metsola (Bürgervertretung, Haushalt, Kontrolle).` 
        },
        { 
          type: 'text', 
          content: `
            **Beitritt & Krisenreaktion:**
            • **Kopenhagener Kriterien:** 1. Politisch (Demokratie/Rechtsstaat), 2. Wirtschaftlich (Marktwirtschaft), 3. Rechtlich (EU-Rechtsbestand übernehmen).
            • **EUBG:** Schnelle Eingreiftruppe zur Friedenssicherung.
            • **EU-RDC:** Teil der Verteidigungsplanung für mil. Einsätze.
            • **Petersberg-Abkommen:** Aufgaben (humanitär, Krisenmanagement, Stabilisierung).` 
        }
      ]
    },
    {
      id: 'vereinte_nationen',
      title: 'Vereinte Nationen (VN)',
      cards: [
        { 
          type: 'text', 
          content: `
            **Ziele & Organe:**
            • **Art. 1 Charta:** Weltfrieden, Sicherheit, friedliche Konfliktlösung, freundschaftliche Beziehungen.
            • **Sekretariat:** GenSek Antonio Guterres (Vermittler/Repräsentant).
            • **GenVersammlung:** 193 Staaten, Empfehlungen, Wahl nichtständiger Mitglieder.` 
        },
        { 
          type: 'text', 
          content: `
            **Sicherheitsrat (SR):**
            • 15 Mitglieder (5 ständige: CHN, FRA, GBR, RUS, USA mit Veto | 10 nichtständige auf 2 Jahre).
            • Beschlüsse sind bindend.
            • **DEU Interessen:** Bewerbung für 2027/28 als nichtständiges Mitglied; Streben nach umfassender Reform inkl. ständigem Sitz.` 
        }
      ]
    }
  ]
},

/* =========================================================
    TAKTIK II – VERTIEFUNG & OPERATIVE DETAILS
========================================================= */

{
  id: 'taktik_detail_v2',
  title: 'Taktik II (Vertiefung)',
  icon: '⚔️',
  description: 'Detaillierte taktische Verfahren, Wirkungsbereiche und operative Planung.',
  units: [
    {
      id: 'gefechtsarten_dynamik',
      title: 'Dynamik der Verteidigung',
      cards: [
        { 
          type: 'text', 
          content: `
            **Zweck des Verteidigens:**
            Angriff zum Scheitern bringen durch:
            1. **Halten des Raumes:** Statische Komponente, Geländebehauptung.
            2. **Zerschlagen/Abnutzen:** Dynamische Komponente, Vernichtung der feindlichen Kampfkraft.
            
            **Definition "Aktiv":** Den eigenen Raum behaupten, den Gegner bereits im Vorfeld aufhalten/abschwächen und dadurch Zeit für Reserven gewinnen.` 
        },
        { 
          type: 'text', 
          content: `
            **Angriffsoperationen aus der Verteidigung:**
            • **Gegenstoß:** Unmittelbare Reaktion aus der Lage. Führt der Führer vor Ort aus eigenem Entschluss mit Kräften, die bereits im Kampf stehen oder sofort verfügbar sind. Ziel: Begrenzt (Einbruch rückgängig machen).
            • **Gegenangriff:** Strategische Maßnahme. Erfordert umfassende Planung & Vorbereitung. Meist durch Reserven geführt. Ziel: Zerschlagung des Feindes und Rückgewinnung der Handlungsfreiheit (Initiative).` 
        },
        { 
          type: 'text', 
          content: `
            **Einbruch vs. Durchbruch:**
            • **Einbruch:** Begrenztes Eindringen des Feindes in die Verteidigungsstellung. Kontrolle über den Abschnitt ist noch nicht nachhaltig verloren.
            • **Durchbruch:** Komplette Überwindung des Stellungssystems. Feind beginnt Umgruppierung für den Stoß ins Hinterland (operative Freiheit).` 
        }
      ]
    },
    {
      id: 'waffensysteme_technik',
      title: 'Technische Kapazitäten & Wirkbereiche',
      cards: [
        { 
          type: 'text', 
          content: `
            **PzGrenKp - Waffensystem PUMA:**
            • **Struktur:** 14 Schützenpanzer pro Kompanie.
            • **Wirkung (KE):** Kinetische Energie (Wuchtgeschoss) bis 2000m.
            • **Wirkung (ABM):** Air Burst Munition (programmierbar) bis 3000m.
            • **Wirkung (MELLS):** Mehrrollenfähiges Leichtes Lenkflugkörper-System bis 4000m.` 
        },
        { 
          type: 'text', 
          content: `
            **PzZg - Waffensystem LEOPARD 2:**
            • **Struktur:** 4 Kampfpanzer pro Zug.
            • **Wirkung (KE):** Kinetische Energie bis 3000m.
            • **Wirkung (HE):** High Explosive (Sprenggranate) bis 5000m.` 
        },
        { 
          type: 'text', 
          content: `
            **Stellungsbau & Raum:**
            Ein **Stellungsraum** umfasst mehrere erkundete und vorbereitete Wechselstellungen sowie gedeckte Aufstellungsplätze. Er ermöglicht den Zügen das "Wirken aus der Tiefe" und den schnellen Stellungswechsel zur Vermeidung von feindlichem Gegenfeuer.` 
        }
      ]
    },
    {
      id: 'pioniere_spezial',
      title: 'Pionierwesen & Hemmung',
      cards: [
        { 
          type: 'text', 
          content: `
            **Pionier-Unterstützungsarten:**
            1. **Unmittelbar:** Schnelle Durchführung während der Operation (z.B. Minenräumen im Angriff).
            2. **Allgemein:** Langfristige Infrastruktur (Gefechtsstände, feste Sperren, Instandsetzung von Wegen).
            
            **Kernaufgaben:**
            • Bewegungen fördern (eigene).
            • Bewegungen hemmen & kanalisieren (Feind).
            • Überlebensfähigkeit erhöhen (Schanzen).
            • Beitrag zum Lagebild (Erkundung).` 
        },
        { 
          type: 'text', 
          content: `
            **Sperrwesen:**
            Sperren dienen dem Lenken, Hemmen, Stauen und Abnutzen.
            • **Wichtigster Grundsatz:** Sperren ohne Überwachung und Feuerbedeckung sind wertlos. 
            • **Hierarchie der Pi-Berater:** ZgFhr berät KpChef | KpChef berät BtlKdr | Btl berät Brigade | Brigade berät Regiment | Regiment berät Division.` 
        }
      ]
    },
    {
      id: 'operative_planung',
      title: 'Operative Planung & Zeitmanagement',
      cards: [
        { 
          type: 'text', 
          content: `
            **Der Gegenangriff (Phasen & Zeit):**
            Diese Auftragsart benötigt die **meiste Vorbereitungszeit**.
            1. Erkundung der Anmarschwege.
            2. Absprachen mit den Kräften am VRV (Vorderer Rand der Verteidigung) zur Feuerregelung.
            3. Eigene detaillierte Planung und Befehlsgebung für den Stoß.` 
        },
        { 
          type: 'text', 
          content: `
            **Führungsfaktor Zeit & Information:**
            Der Kern des Führungsprozesses ist die **Entscheidungsfindung**.
            • Zeitverzug bei der Befehlsgebung führt zu: Wenig Zeit für Erkundung, Absinken der Kampfkraft und Verzögerung bei der Bildung neuer Reserven.
            • **60-Minuten-Regel:** Wenn Folgekräfte in weniger als 60 Min. wirken können, sind sie in der aktuellen Beurteilung als unmittelbar lageentscheidend zu werten.` 
        },
        { 
          type: 'text', 
          content: `
            **Wirkungsformen STF (Standardisierte Taktische Forderungen):**
            • **Blind (bli):** Feind die Sicht nehmen (Nebel/Ausweichen).
            • **Overwatch (ovw):** Überwachen von Räumen (z.B. durch ABRA).
            • **Engage:** Bekämpfen (Auftrag bei Feindstau an RiMiSpe).
            • **Annihilate:** Vernichten (Vollständige Zerschlagung).` 
        }
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
