// data.js – Vollversion mit vollständigem ZIP-Inhalt
// ---------------------------------------------------------
// STRUKTURHINWEIS
// curriculum.modules[] enthält die Kurs-Module (z.B. Befehlsrecht, Taktik, Militärgeschichte …)
// Jedes Modul hat units[] (Lernfelder/Unterthemen) und jede Unit hat cards[] (Lernkarten).
// ---------------------------------------------------------

export const curriculum = {
modules: [

/* =========================================================
   BEFEHLSRECHT – Vollständig & prüfungstauglich integriert
========================================================= */

// =========================================================
// MODUL 1: BEFEHLSRECHT & WEHRRECHT
// =========================================================
{
  id: 'befehlsrecht',
  title: 'Befehlsrecht & Wehrrecht',
  icon: '⚖️',
  description: 'Umfassende Rechtsgrundlagen: Soldatengesetz, Wehrstrafrecht und Beschwerdewesen.',
  units: [

    // UNIT 1: Befehlsbegriff & Vorgesetzte
    /* ---------------------------------------------------------
       1. Der Befehlsbegriff & Vorgesetzte
    --------------------------------------------------------- */
    {
      id: 'befehlsbegriff',
      title: 'Befehlsbegriff & Vorgesetzte',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Befehlsbegriff (§ 2 Nr. 2 WStG)</h3>
            Ein Befehl ist eine Anweisung zu einem bestimmten Verhalten, die:<br><br>
            <b>1. Anweisung:</b> Einseitige Willensäußerung (Tun, Dulden, Unterlassen).<br>
            <b>2. Vorgesetzter:</b> Erteilt von einem mil. Vorgesetzten (§ 1 Abs. 3 SG).<br>
            <b>3. Gehorsamsanspruch:</b> Mit Anspruch auf Gehorsam (§ 11 Abs. 1 SG).<br>
            <b>4. Einzelfall/Allgemein:</b> Gegenüber Soldaten (einzeln oder nach Merkmalen bestimmt).<br>
            <i>Merke: Höflichkeitsformen ("Ich bitte Sie...") ändern nichts am Befehlscharakter.</i>`
        },
        { 
          type: 'text', 
          content: `
            <h3>Vorgesetztenverhältnisse (VvV)</h3>
            Festlegung, wer wem Befehle erteilen darf:<br><br>
            <b>§ 1 Dienstgrad:</b> Innerhalb der Einheit (subsidiär).<br>
            <b>§ 2 Dienststellung:</b> Kompaniechef, Zugführer etc. (stärkstes VvV).<br>
            <b>§ 3 Besondere Anordnung:</b> "Hiermit unterstelle ich..." (Vfg. d. BMVg).<br>
            <b>§ 4 Fachvorgesetzter:</b> Nur für den fachlichen Bereich (z.B. Arzt/Schirrmeister).<br>
            <b>§ 5 Besondere Aufgaben:</b> Streife, Wache, Leiter v. Dienst.<br>
            <b>§ 6 Gefahr im Verzug:</b> Wenn d. zuständige Vorgesetzte nicht erreichbar ist.`
        }
      ]
    },

    // UNIT 2: Rechtmäßigkeit & Verbindlichkeit
    /* ---------------------------------------------------------
       2. Rechtmäßigkeit & Verbindlichkeit
    --------------------------------------------------------- */
    {
      id: 'rechtmaessigkeit',
      title: 'Rechtmäßigkeit & Verbindlichkeit',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Rechtmäßigkeit (§ 10 Abs. 4 SG)</h3>
            Prüfung aus Sicht des Befehlsgebers:<br><br>
            <b>1. Dienstlicher Zweck:</b> Förderung der Aufgaben der Bundeswehr.<br>
            <b>2. Völkerrecht:</b> Einhaltung v. Verträgen & Art. 25 GG.<br>
            <b>3. Gesetze:</b> Kein Verstoß gegen StGB, WStG, etc.<br>
            <b>4. Dienstvorschriften:</b> Beachtung der internen Regelwerke.`
        },
        { 
          type: 'text', 
          content: `
            <h3>Verbindlichkeit (§ 11 Abs. 1 & 2 SG)</h3>
            Wann MUSS der Soldat gehorchen?<br><br>
            <b>1. Dienstlicher Zweck:</b> Muss erkennbar sein.<br>
            <b>2. Menschenwürde:</b> Verbot von entwürdigender Behandlung/Schikane.<br>
            <b>3. Zumutbarkeit:</b> Prüfung der Verhältnismäßigkeit.<br>
            <b>4. Keine Straftat:</b> Befehle zur Begehung einer Straftat sind unverbindlich (§ 11 Abs. 2 SG).`
        },
        { 
          type: 'text', 
          content: `
            <h3>Verhältnismäßigkeit (Prüfschema)</h3>
            Bei Eingriffen in Grundrechte (z.B. Art. 2 GG):<br><br>
            <b>1. Geeignetheit:</b> Ist die Maßnahme zwecktauglich?<br>
            <b>2. Erforderlichkeit:</b> Gibt es ein milderes, gleich wirksames Mittel?<br>
            <b>3. Angemessenheit:</b> Stehen Zweck und Mittel im vernünftigen Verhältnis? (Güterabwägung)`
        }
      ]
    },

    // UNIT 3: Pflichtenstruktur des SG
    /* ---------------------------------------------------------
       3. Soldatengesetz - Pflichten des Soldaten
    --------------------------------------------------------- */
    {
      id: 'soldatenpflichten',
      title: 'Pflichtenstruktur des SG',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Kernpflichten (§§ 7 - 12 SG)</h3>
            <b>§ 7 Treuepflicht:</b> Loyalität zur Verfassung & Schutz des Bundesvermögens.<br>
            <b>§ 8 FDGO:</b> Aktives Eintreten für die Demokratie & Menschenwürde.<br>
            <b>§ 10 Vorgesetztenpflichten:</b> Fürsorge (Abs. 3) & Dienstaufsicht (Abs. 2).<br>
            <b>§ 12 Kameradschaft:</b> Beistandspflicht & Verbot von Ausgrenzung (Satz 2).`
        },
        { 
          type: 'text', 
          content: `
            <h3>Verhalten im/außer Dienst (§ 17 SG)</h3>
            <b>Abs. 1:</b> Achtungs- & vertrauenswürdiges Verhalten (Im Dienst).<br>
            <b>Abs. 2 S. 1/2:</b> Außer Dienst darf das Ansehen der Bw nicht ernsthaft gefährdet werden.<br>
            <b>Abs. 2 S. 3:</b> Erhalt der Funktionsfähigkeit (z.B. Sport/Gesundheitspflicht).<br>
            <b>Abs. 3:</b> Politische Zurückhaltung in Uniform.`
        }
      ]
    },

    // UNIT 4: Tatbestände des WStG
    /* ---------------------------------------------------------
       4. Dienstvergehen & Wehrstrafrecht
    --------------------------------------------------------- */
    {
      id: 'straftaten_wstg',
      title: 'Tatbestände des WStG',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>§ 15 WStG: Eigenmächtige Abwesenheit</h3>
            <b>I. Objektiver Tatbestand:</b><br>
            1. Truppe verlassen oder fernbleiben.<br>
            2. Eigenmächtigkeit (kein Urlaub/KE/Krankmeldung).<br>
            3. Dauer: Länger als 3 volle Kalendertage.<br><br>
            <b>II. Subjektiv:</b> Vorsatz bzgl. Fernbleiben; bzgl. Dauer reicht Fahrlässigkeit.`
        },
        { 
          type: 'text', 
          content: `
            <h3>§ 19 WStG: Ungehorsam</h3>
            <b>I. Objektiver Tatbestand:</b><br>
            1. Nichtbefolgung eines verbindlichen Befehls.<br>
            2. Schwerwiegende Folge: Tod, schwere Körperverletzung oder Sachschaden > 750 €.<br><br>
            <b>Subjektiv:</b> Vorsatz bzgl. Nichtbefolgung; Fahrlässigkeit bzgl. Folge möglich.`
        },
        { 
          type: 'text', 
          content: `
            <h3>§ 32 WStG: Missbrauch der Befehlsbefugnis</h3>
            Straftat des Vorgesetzten:<br><br>
            1. Missbrauch der Dienststellung zu dienstfremden Zwecken.<br>
            2. Unzumutbare Forderungen oder Kränkungen des Untergebenen.<br>
            3. Beeinträchtigung der Menschenwürde.`
        }
      ]
    },

    // UNIT 5: Beschwerdewesen (WBO)
    /* ---------------------------------------------------------
       5. Beschwerde & Meldeordnung
    --------------------------------------------------------- */
    {
      id: 'beschwerde',
      title: 'Beschwerdewesen (WBO)',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Zulässigkeit der Beschwerde (§ 13 WBO)</h3>
            <b>1. Statthaftigkeit:</b> Gegen jede Maßnahme/Unterlassung (§ 1 WBO).<br>
            <b>2. Beschwer:</b> Persönliche Beeinträchtigung/Verletzung von Rechten.<br>
            <b>3. Frist:</b> Frühestens nach 24 Std. (Nachtfrist), spätestens nach 1 Monat (§ 6 WBO).<br>
            <b>4. Form:</b> Schriftlich oder mündlich zu Protokoll (§ 6 II WBO).`
        },
        { 
          type: 'text', 
          content: `
            <h3>Zuständigkeit & Ablauf</h3>
            <b>Empfangszuständig:</b> Der nächste Disziplinarvorgesetzte.<br>
            <b>Entscheidungszuständig:</b> Der Vorgesetzte, der die Maßnahme angeordnet hat (§ 9 WBO).<br>
            <b>Wirkung:</b> Keine aufschiebende Wirkung (Befehl muss i.d.R. erst ausgeführt werden).`
        }
      ]
    },

    // UNIT 6: Abgabe an StA (A-2160/6)
    /* ---------------------------------------------------------
       6. Zusammenarbeit mit der Staatsanwaltschaft
    --------------------------------------------------------- */
    {
      id: 'abgabe_stawa',
      title: 'Abgabe an StA (A-2160/6)',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Meldung von Straftaten</h3>
            <b>Nr. 1.9.8 (MUSS):</b> Verbrechen (§ 12 StGB: Mindeststrafe 1 Jahr) wie Raub, Mord, schwere Brandstiftung.<br><br>
            <b>Nr. 1.9.9 (SOLL):</b> Katalogtaten des WStG (z.B. § 15, § 17, § 19) und Straftaten von erheblicher Bedeutung.<br><br>
            <b>Nr. 1126 (KANN):</b> Ermessen des Vorgesetzten bei einfachen Vergehen des StGB.`
        }
      ]
    }
  ]
},
/* =========================================================
    TAKTIK & TRUPPENFÜHRUNG – ULTIMATIVE VERSION
========================================================= */

// =========================================================
// MODUL 2: TAKTIK & TRUPPENFÜHRUNG
// =========================================================
{
  id: 'taktik_leadership_ultimate',
  title: 'Taktik & Truppenführung',
  icon: '🎖️',
  description: 'Vollständige taktische Grundsätze, operative Faktoren und technische Daten.',
  units: [
    // UNIT 1: Truppenführung & Handlungsfelder
    {
      id: 'fuehrungslehre_grundlagen',
      title: 'Truppenführung & Handlungsfelder',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Leitende Prinzipien der TrpFhr</h3>
            • <b>Führen mit Auftrag:</b> Freiheit in der Ausführung.<br>
            • <b>Wirkungsorientiertes Denken:</b> Das Ziel definiert die Mittel.<br>
            • <b>Vernetzter Ansatz:</b> Ressortübergreifende Kooperation.<br>
            • <b>Operation verbundener Kräfte:</b> Wirksames Zusammenspiel aller Truppengattungen.<br><br>
            <b>Hauptelemente des Gefechtes:</b><br>
            Feuer und Bewegung in enger Verbindung mit Sperren.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Handlungsfelder & Faktoren</h3>
            <b>Kern des Führungsprozesses:</b> Die Entscheidungsfindung.<br><br>
            <b>Faktoren der Truppenführung:</b><br>
            1. <b>Kräfte:</b> Eigene Stärke und Feindlage.<br>
            2. <b>Raum:</b> Geländebegebenheiten und Infrastruktur.<br>
            3. <b>Zeit:</b> Der meist limitierende Faktor.<br><br>
            <b>Wichtigste Faktoren für die Entscheidung:</b> Zeit & Information (Handlungsfeld Information).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Raumordnung & Grenzen</h3>
            <b>Verantwortungsbereich:</b> Zugewiesener Raum; volle Verantwortung des TrFhr.<br>
            <b>Interessenbereich:</b> Raum über den Verantwortungsbereich hinaus, der für die eigene Führung wichtig ist.<br><br>
            <b>Grundsatz Grenze:</b><br>
            Zusammenhängende Geländeabschnitte müssen in <b>einer</b> Verantwortung bleiben. Eigene und feindliche Schwerpunkte sind zu berücksichtigen. Verantwortung für Aufklärung und Sicherung muss klar erkennbar sein.` 
        }
      ]
    },
    // UNIT 2: Schwerpunkt & Reserven
    {
      id: 'schwerpunkt_reserve_detail',
      title: 'Schwerpunkt & Reserven',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Der Schwerpunkt (SP)</h3>
            Ort, an dem der <b>Hauptstoß des Angreifers</b> zum Scheitern gebracht werden soll.<br><br>
            <b>Zweck:</b> Herbeiführen der Entscheidung durch höchste Wirkung.<br>
            <b>Bildung durch:</b> Zusammenfassung von Kräften, Raum oder Feuer.<br><br>
            <b>Konkrete Maßnahmen:</b><br>
            Vorrang beim Feuer, Verdichtung der Aufklärung, Änderung der Raumordnung, Einsatz von Reserven/zusätzlichen Mitteln, Elektronischer Kampf (EloKa).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Reservenführung</h3>
            <b>Einsatz:</b> Werden grundsätzlich <b>geschlossen</b> eingesetzt.<br>
            <b>Zweck:</b> Entscheidung erzwingen, SP verlegen, Krisen überwinden.<br><br>
            <b>Nachsteuerung:</b> Ist die Reserve eingesetzt, muss schnellstmöglich eine neue gebildet werden.<br>
            <b>Vorbereitungszeit:</b> Der Auftrag <b>Gegenangriff</b> bedarf der meisten Vorbereitungszeit (Erkundung, Feuerregelung, Befehlsgebung).` 
        }
      ]
    },
    // UNIT 3: Verteidigung & Gegenmaßnahmen
    {
      id: 'verteidigung_aktiv',
      title: 'Verteidigung & Gegenmaßnahmen',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Zweck & Formen der Verteidigung</h3>
            <b>Ziel:</b> Angriff zum Scheitern bringen (Raum halten oder Feind zerschlagen).<br><br>
            <b>Defensive Aktivitäten:</b><br>
            Eigener Raum halten, Gegner aufhalten/abschwächen, Zeit gewinnen.<br><br>
            <b>Auffangen:</b><br>
            Wird befohlen in tiefer Verteidigungsführung, wenn ein Einbruch nicht aufgehalten werden kann und ein Gegenangriff keine Aussicht auf Erfolg verspricht.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Gegenstoß vs. Gegenangriff</h3>
            <b>Gegenstoß:</b><br>
            Angriff meist ohne Vorbereitung, nah gestecktes Ziel. Aus eigenem Entschluss mit verfügbaren Kräften in günstiger Lage.<br><br>
            <b>Gegenangriff:</b><br>
            Vorgeplant und vorbereitet (meist Reserven). Ziel: Feindkräfte durch Schnelligkeit/Überraschung zerschlagen und Handlungsfreiheit gewinnen.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Einbruch vs. Durchbruch</h3>
            <b>Einbruch:</b> Eindringen in Stellungen mit begrenztem Erfolg; keine nachhaltige Kontrolle.<br>
            <b>Durchbruch:</b> Strategischer Erfolg; Stellungen vollständig überwunden. Folgt: Umgruppierung und Vorstoß in das Hinterland.` 
        }
      ]
    },
    // UNIT 4: Gefechtsführung & Technik
    {
      id: 'gefechtsfuehrung_technik_stf',
      title: 'Gefechtsführung & Technik',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Strukturen & Wirkungsformen</h3>
            <b>FAWU (Gliederung):</b> Führung (Gefechtsstand), Aufklärung (Drohnen), Wirkung (Sperren/Waffen), Unterstützung (Logistik).<br><br>
            <b>Hammer-Amboss-Prinzip:</b><br>
            • <b>Amboss (Feuer):</b> Feind binden, Bewegungsfreiheit einschränken.<br>
            • <b>Hammer (Bewegung):</b> Flankenstoß/Umfassung in die Tiefe zur Zerschlagung.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>4 Wirkforderungen STF</h3>
            1. <b>Blind (bli):</b> Ausweichen von Kräften aus der Sichtlinie ermöglichen.<br>
            2. <b>Overwatch (ovw):</b> Überwachung (z.B. ABRA).<br>
            3. <b>Engage:</b> Allg. Auftrag bei gestauten Feinden an RiMiSpe.<br>
            4. <b>Annihilate:</b> Vernichtungsauftrag.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Waffensysteme & Reichweiten</h3>
            <b>PzGrenKp (14 Pumas):</b><br>
            • 2000m KE | 3000m ABM | 4000m MELLS.<br><br>
            <b>PzZg (4 Leopard):</b><br>
            • 3000m KE | 5000m HE.<br><br>
            <b>Stellungsraum:</b> Besteht aus mehreren vorbereiteten Stellungen; ermöglicht Kampf aus wechselnden Positionen.` 
        }
      ]
    },
    // UNIT 5: Pionierwesen & Beratung
    {
      id: 'pioniere_beratung_sperren',
      title: 'Pionierwesen & Beratung',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Pionierunterstützung & Berater</h3>
            <b>Unmittelbar:</b> Schnelle Durchführung (laufende OP).<br>
            <b>Allgemein:</b> Einsatzinfrastruktur (langfristig).<br><br>
            <b>Berater-Ebenen:</b><br>
            ZgFhr → KpChef | KpChef → BtlKdr | Btl → Brig | Brig → Reg | Reg → Div.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Sperren & Kernaufgaben</h3>
            <b>4 Kernaufgaben:</b> Bewegungen fördern (eigene), Überlebensfähigkeit erhöhen, Hemmen/Kanalisieren (Feind), Beitrag zum Lagebild.<br><br>
            <b>Zweck Sperren:</b> Lenken, Hemmen, Stauen, Abnutzen, Kanalisieren.<br>
            <i>Merke: Sperren sind zwingend zu überwachen!</i>` 
        }
      ]
    },
    // UNIT 6: Planung & Verspätungen
    {
      id: 'planung_besonderheiten_vstk',
      title: 'Planung & Verspätungen',
      cards: [
        { 
          type: 'text', 
          content: `
            <h3>Informationen Aufklärung</h3>
            Bei der Aufklärung/Informationen ist zwingend zu klären:<br>
            • Art und Stärke des Feindes.<br>
            • Verhalten und Gliederung.<br>
            • Absicht des Gegners.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Verspätete Aufträge (vstk/verm)</h3>
            <b>Auswirkungen auf geplante Aufträge:</b><br>
            • Wenig Zeit zur Erkundung.<br>
            • Eingeschränkte Kampfkraft.<br>
            • Lange Dauer bis zur Bildung einer neuen Reserve.<br><br>
            <b>Phasen Angriffsvorbereitung:</b><br>
            Erkundung Anmarsch, Absprache VRV-Kräfte (Feuerregelung), eigene Feuerplanung, Befehlsgebung.` 
        }
      ]
    }
  ]
},
/* =========================================================
    MILITÄRGESCHICHTE – VOLLSTÄNDIG & DETAILREICH
========================================================= */

// =========================================================
// MODUL 3: MILITÄRGESCHICHTE
// =========================================================
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
            <h3>30-jähriger Krieg (1618–1648)</h3>
            • <b>Auslöser:</b> Prager Fenstersturz (1618).<br>
            • <b>Konflikt:</b> Protestanten gegen Katholiken, Spannungen seit den 1580ern.<br>
            • <b>Landesherr:</b> Bestimmt die Konfession (Cuius regio, eius religio).<br>
            • <b>Böhmen:</b> Sonderfall (prot. Volk / kath. König).<br>
            • <b>Akteure:</b> Wallenstein (Militärunternehmer), Gustav II. Adolf (Schwedenkönig).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Westfälischer Frieden (1648)</h3>
            • <b>Orte:</b> Rathaus Osnabrück & Münster.<br>
            • <b>Ereignis:</b> Schwur span. & niederl. Gesandter (Frieden von Münster).<br>
            • <b>Kern:</b> Gleichberechtigung von Katholiken, Lutheranern und Calvinisten.<br>
            • <b>Bedeutung:</b> Basis für dt. Föderalismus & zw.staatliche Regelungen.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Absolutismus & Preußen</h3>
            • <b>Herrschaft:</b> Souverän mit ungeteilter Staatsgewalt, keine Mitwirkung anderer Gruppen.<br>
            • <b>Legitimation:</b> "Von Gottes Gnaden", über dem Gesetz, aber "Diener Gottes".<br>
            • <b>7-jähriger Krieg:</b> Aufstieg Preußens in der Pentarchie (PR, GB, RU, FR, Ö). Bündnis PR-GB.` 
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
            <h3>Französische Revolution (1789-1799)</h3>
            • <b>04/1792:</b> Krieg an Österreich. 1792: Ende Monarchie. 1793: Hinrichtung König.<br>
            • <b>Napoleon:</b> Beendet Rev. 1799 (Überwinder).<br>
            • <b>Koalitionskriege:</b> 1. Krieg (1792-1797) mit Kanonade von Valmy. 2. Krieg (1798-1802) als Basis für Napoleons Aufstieg.<br>
            • <b>Ägypten-Expedition:</b> (1798-1801).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Zusammenbruch Preußens 1806/07</h3>
            • <b>Schlacht von Jena (14.10.1806):</b> PR (Lineartaktik, alte Kommandeure, Überheblichkeit) unterliegt FR (Kolonnentaktik, flexible Divisionen, eigenst. Artillerie, Vernichtungsstrategie).<br>
            • <b>Frieden von Tilsit (1807):</b> Preußen als Pufferstaat; Verlust aller Gebiete westl. Elbe; max. 42.000 Mann Heer; Verbot der Wehrpflicht; Besetzung Berlins (18.000 Mann Vollversorgung).<br>
            • <b>Folge:</b> Armut & Demütigung.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Preußische Heeresreform (Kernelemente)</h3>
            • Abschaffung Adelsprivileg.<br>
            • <b>Krümper-System:</b> Umgehung des Wehrpflichtverbots.<br>
            • <b>Taktik:</b> Kolonnen- & Tirailleur-Taktik.<br>
            • <b>Struktur:</b> Waffengemischte Divisionen, Kriegsministerium, Kriegsschulen/Akademien.<br>
            • Milderung des Wehrstrafrechts.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Nationale Erhebung & Symbole</h3>
            • <b>Nationalfarben:</b> Uniform Lützower Jäger (Schwarz, Rot, Gold); "Gold gab ich für Eisen". Symbol für bestehende Einheit.<br>
            • <b>Eisernes Kreuz (10.03.1813):</b> Stiftung zum Geb. von Königin Luise. Erster Orden für alle Ränge (unabh. von Stand). Anlehnung an Deutschritter-Tatenkreuz.<br>
            • <b>Werte:</b> Ritterlichkeit, Freiheit, Vaterlandsliebe, Tapferkeit.` 
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
            <h3>Wiener Kongress 1815 (Metternich)</h3>
            • <b>Motive:</b> Restauration, Legitimität, Solidarität gegen Revolution, Pentarchie-Gleichgewicht.<br>
            • <b>Ergebnisse:</b> FR bleibt Großmacht (1792); RU halbhegemonial; GB gewinnt Helgoland/Malta; PR erhält Rheinland & Sachsen ("Wacht am Rhein"); Ö wächst aus DEU heraus.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Der Deutsche Bund (1815)</h3>
            • Lockerer Staatenbund (41 Staaten); Nachfolge HRRDN.<br>
            • <b>Führung:</b> PR & Ö. Inkl. GB, Dänemark, Niederlande.<br>
            • <b>Ziel:</b> Europ. Sicherheit & eigene Kriegsverfassung.<br>
            • <b>Vormärz:</b> Konflikt Fürsten (Restauration) vs. Bürgertum (Liberalismus).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Revolution & Einigungskriege</h3>
            • <b>Frankfurt 1848:</b> Nationalstaat "von unten", Teilhabe, Versammlungsfreiheit. Scheitert an Kronenablehnung Friedr. Wilh. IV.<br>
            • <b>Erfurter Union:</b> Gescheiterte Einigung "von oben".<br>
            • <b>Kriege:</b> 1864 Dänemark (Düppeler Schanzen); 1866 Ö (Königgrätz/Bruderkrieg); 1870/71 FR (Emser Depesche/Sedan).<br>
            • <b>18.01.1871:</b> Kaiserproklamation Versailles.` 
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
            <h3>Bismarcks Bündnispolitik (Isolation FR)</h3>
            • Dreikaiserbund (1872/73), Zweibund (1879), Dreibund (1882), Beitritt Rumänien (1883), Rückversicherungsvertrag (1887), Mittelmeerabkommen (1887).<br><br>
            • <b>Dreikaiserjahr 1888:</b> Wilhelm I. †, Friedrich III. †, Wilhelm II. tritt an.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Wilhelminismus & Balkan</h3>
            • <b>1890:</b> Bismarck-Entlassung; Ende Konsolidierung; Weltpolitik & Flotte.<br>
            • Schutzzollpolitik (ab 1878); Nichtverlängerung Rückvers.-Vertrag; Einkreisung.<br>
            • <b>Balkankriege 1912/13:</b> Balkanbund vs. Osm. Reich. RU (Schutzmacht Slawen) vs. Ö-U.<br>
            • <b>Ergebnis:</b> Albanien-Gründung, Gebietsgewinne Serbien/GR/Montenegro.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Erster Weltkrieg (1914-1918)</h3>
            • <b>Ausbruch:</b> 28.06. Sarajevo (Franz Ferdinand †). Blankoscheck 06.07. Ultimatum 23.07. Kriegserklärungen ab 28.07.<br>
            • <b>Militär:</b> Schlieffenplan (Zweifrontenkrieg); Verdun 1916 (Stellungskrieg).<br>
            • <b>Wende 1917:</b> USA-Eintritt (Zimmermann-Telegramm).<br>
            • <b>Ende:</b> 11.11.1918, 11 Uhr, Compiègne (Erzberger/Foch).` 
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
            <h3>Versailles & Geheimrüstung</h3>
            • <b>Versailles:</b> Art. 231 (Schuld); 100k Heer; 15k Marine; 4k Offiziere; 12/25 J. Verpflichtung; Verbot Lw/Pz/Gas/GenStab.<br>
            • <b>Dolchstoßlegende:</b> Heer "im Felde unbesiegt" (Hindenburg/Ludendorff).<br>
            • <b>Geheim-Kooperation UdSSR:</b> Kasan (Pz), Tomka (Chem.), Lipezk (Flugzeug).<br>
            • <b>Struktur:</b> Führerheer, Truppenamt (GenStab-Ersatz), Schwarze Reichswehr.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>NS-Aufstieg & Kriegsvorbereitung</h3>
            • <b>09.11.1923:</b> Hitler-Putsch scheitert; Haft; Legalitätstaktik.<br>
            • <b>1938:</b> Münchner Abkommen (Sudeten). Chamberlain lenkt ein.<br>
            • <b>15.03.1939:</b> Zerschlagung "Resttschechei".` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Alliierte Konferenzen</h3>
            • <b>Teheran (1943):</b> Mil. Vorgehen, Kapitulation, Aufteilung PR.<br>
            • <b>Jalta (02/1945):</b> 4 Zonen, Entmilitarisierung, Entnazifizierung.<br>
            • <b>Potsdam (08/1945):</b> Die 5 Ds (Demil., Denaz., Dezentr., Demokr., Demontage).` 
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
            <h3>NATO & Warschauer Pakt</h3>
            • <b>NATO (1949):</b> Reaktion auf CZ-Umsturz & Berlin-Blockade.<br>
            • <b>WP (1955-1991):</b> Sozialist. Hilfeleistung; sowjet. Präsenz; keine Wirtschaftskomponente.<br>
            • <b>Neutralität:</b> IRL, Ö, CH (Neutral), FIN/SWE (Neutral bis 2022).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Wiederbewaffnung BRD & DDR</h3>
            • <b>BRD:</b> Himmeroder Denkschrift (1950); NATO-Beitritt 09.05.1955 (12 Div., 20 Geschw., 172 Schiffe).<br>
            • <b>DDR:</b> KVP -> NVA-Gründung (01.03.1956); Wehrpflicht 1962; sowjet. Vorbild; kaum Wehrmacht-Veteranen.<br>
            • <b>13.08.1961:</b> Mauerbau ("Antifa Schutzwall").` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Krisen bis zum Zerfall</h3>
            • <b>Kubakrise 1962:</b> Raketen TR (USA) vs. Kuba (RU); Seeblockade; Abzug beider Seiten.<br>
            • <b>NATO-Doppelbeschluss (1979):</b> Reaktion auf sowjet. Aufrüstung; Aufstellung Mittelstrecke vs. Verhandlung.<br>
            • <b>12/1991:</b> Ende UdSSR; Rücktritt Gorbatschow.
            ` 
        }
      ]
    }
  ]
},
   
/* =========================================================
    POLITISCHE BILDUNG – VOLLSTÄNDIG AUS NOTIZEN
========================================================= */

// =========================================================
// MODUL 4: POLITISCHE BILDUNG
// =========================================================
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
            <h3>Prozess bewaffnete Einsätze (7 Schritte)</h3>
            1. Konfliktsituation entsteht.<br>
            2. <b>VN-Sicherheitsrat</b> analysiert + Rechtsgrundlage.<br>
            3. NATO/VN/EU autorisiert den Einsatz.<br>
            4. Bitte an die Bundesregierung.<br>
            5. Mandatsentwurf & Kabinettsentschluss.<br>
            6. Beratung in Verteidigungs- & Auswärtigem Ausschuss.<br>
            7. <b>Bundestag-Abstimmung</b> (Genehmigung 50+1) -> Entsendung.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Parlamentsbeteiligungsgesetz</h3>
            Gibt vor, wie/wann Anträge an den BT gestellt werden. Pflichtangaben:<br><br>
            • Einsatzauftrag & Einsatzgebiet.<br>
            • Rechtliche Grundlagen.<br>
            • Höchstzahl der Soldaten & Fähigkeiten der SK.<br>
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
            <h3>Nationale Sicherheitsstrategie (NSS)</h3>
            <b>Ganzheitlicher Ansatz:</b> Politik, Wirtschaft, Gesellschaft, Militär.<br><br>
            • <b>Ziel:</b> Freiheit, Sicherheit, Stabilität, Bewahrung der Demokr. Grundordnung.<br>
            • <b>Werte:</b> Demokratie, Rechtsstaat, Menschenrechte, int. Zusammenarbeit.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Bedrohungsanalyse gemäß NSS</h3>
            • Cyberangriffe, Terrorismus, hybride Bedrohungen.<br>
            • Klimawandel, globale Krisen, geopolitische Spannungen.<br>
            • Inner-/zwischenstaatliche Konflikte, Demographie, Ressourcenkampf, Org. Kriminalität.<br><br>
            <i>Notwendigkeit: Resilienz, schnelle Reaktion & Integration aller Bereiche.</i>` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Kernaufträge gemäß VPR</h3>
            • <b>Abschreckung:</b> Hoheits- & Bündnisgebiet in allen Dimensionen.<br>
            • <b>Landesverteidigung (LV):</b> & territoriale Verteidigung.<br>
            • <b>Bündnisverteidigung (BV):</b> bei Angriffen auf Partner.<br>
            • Abwehr terroristischer & hybrider Bedrohungen.<br>
            • Festigung transatlantischer & europäischer Verteidigungsfähigkeit.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Single Set of Forces</h3>
            Fähigkeiten sind in einem Kräftedispositiv gebündelt (Flexibilität/Agilität).<br><br>
            • Ermöglicht Einsatz in versch. Regionen/Bedrohungen.<br>
            • Einbindung multinationaler Partner zur Wirkungsgradsteigerung.<br>
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
            <h3>Artikel 5 & LV/BV Maßnahmen</h3>
            • <b>Art. 5:</b> Angriff auf einen = Angriff auf alle. Kollektive Verteidigung.<br><br>
            <b>Maßnahmen:</b><br>
            Übungen zur Einsatzbereitschaft, Modernisierung, verstärkte Präsenz im Bündnisgebiet, Verteidigungsplanung (NATO-Plan/Bund).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Führung & Gremien</h3>
            • <b>NAC (North Atlantic Council):</b> Wichtigstes Gremium (Botschafter), polit. Entscheidungen.<br>
            • <b>SACEUR:</b> Gen. Christopher G. Cavoli (USA).<br>
            • <b>ACO/SHAPE:</b> Gen. Laubenthal ist Chief of Staff (COS).<br><br>
            <i>Gipfelentscheidung W24: Ausbau mil. Kapazitäten, Fokus auf Osteuropa & Cyber/Hybrid.</i>` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Lage NATO-Ostflanke</h3>
            • <b>Polen/Baltikum:</b> Multinationale Kampfgruppen & Präsenz.<br>
            • <b>Rumänien/Bulgarien:</b> Sicherung Südostflanke.<br>
            • <b>Infrastruktur:</b> Ausbau Logistik & Stützpunkte.<br>
            • <b>Speerspitze:</b> Schnelle Eingreifkräfte für Ernstfall-Reaktion.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>DEU Verteidigungsausgaben 2024</h3>
            • <b>Haushalt:</b> 51,95 Mrd. € | <b>Sondervermögen:</b> 19,8 Mrd. €<br><br>
            <b>Einzelposten (Beispiele):</b><br>
            • Munition: 280 Mio. | Kampffahrzeuge: 79 Mio.<br>
            • Flugzeuge: 320 Mio. | Schiffe: 80 Mio.<br>
            • Mil. Ausrüstung (allg.): 2,48 Mrd. €` 
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
            <h3>Prinzipien & Organe</h3>
            • <b>Supranationalität:</b> EU-Recht steht vor nationalem Recht.<br>
            • <b>Europäischer Rat:</b> Impulse (Antonio Costa).<br>
            • <b>EU Kommission:</b> Interessen weltweit (Ursula von der Leyen).<br>
            • <b>Rat der EU:</b> Kaja Kallas (Außen-/Sicherheitspolitik).<br>
            • <b>EU Parlament:</b> Roberta Metsola (Bürgervertretung, Haushalt).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Beitritt & Krisenreaktion</h3>
            <b>Kopenhagener Kriterien:</b> 1. Politisch, 2. Wirtschaftlich, 3. Rechtlich.<br><br>
            • <b>EUBG:</b> Schnelle Eingreiftruppe zur Friedenssicherung.<br>
            • <b>EU-RDC:</b> Teil der Verteidigungsplanung.<br>
            • <b>Petersberg-Abkommen:</b> Aufgaben (humanitär, Krisenmanagement, Stabilisierung).` 
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
            <h3>Ziele & Organe</h3>
            • <b>Art. 1 Charta:</b> Weltfrieden, Sicherheit, friedliche Konfliktlösung.<br>
            • <b>Sekretariat:</b> GenSek Antonio Guterres (Vermittler).<br>
            • <b>GenVersammlung:</b> 193 Staaten, Empfehlungen.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Sicherheitsrat (SR)</h3>
            • <b>15 Mitglieder:</b> 5 ständige (CHN, FRA, GBR, RUS, USA) mit Veto | 10 nichtständige.<br>
            • Beschlüsse sind bindend.<br><br>
            <b>DEU Interessen:</b> Bewerbung für 2027/28; Streben nach umfassender Reform inkl. ständigem Sitz.` 
        }
      ]
    }
  ]
},

/* =========================================================
    TAKTIK II – VERTIEFUNG & OPERATIVE DETAILS
========================================================= */

// =========================================================
// MODUL 5: TAKTIK II (VERTIEFUNG)
// =========================================================
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
            <h3>Zweck des Verteidigens</h3>
            Angriff zum Scheitern bringen durch:<br><br>
            1. <b>Halten des Raumes:</b> Statische Komponente, Geländebehauptung.<br>
            2. <b>Zerschlagen/Abnutzen:</b> Dynamische Komponente, Vernichtung der feindlichen Kampfkraft.<br><br>
            <b>Definition "Aktiv":</b> Den eigenen Raum behaupten, den Gegner bereits im Vorfeld aufhalten/abschwächen und dadurch Zeit für Reserven gewinnen.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Angriffsoperationen aus der Verteidigung</h3>
            • <b>Gegenstoß:</b> Unmittelbare Reaktion aus der Lage. Führt der Führer vor Ort aus eigenem Entschluss mit Kräften aus dem laufenden Kampf aus. <i>Ziel: Begrenzt (Einbruch rückgängig machen).</i><br><br>
            • <b>Gegenangriff:</b> Strategische Maßnahme mit umfassender Planung. Meist durch Reserven geführt. <i>Ziel: Zerschlagung des Feindes und Rückgewinnung der Initiative.</i>` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Einbruch vs. Durchbruch</h3>
            • <b>Einbruch:</b> Begrenztes Eindringen in die Verteidigungsstellung. Kontrolle über den Abschnitt ist noch nicht nachhaltig verloren.<br><br>
            • <b>Durchbruch:</b> Komplette Überwindung des Stellungssystems. Feind beginnt Umgruppierung für den Stoß ins Hinterland (operative Freiheit).` 
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
            <h3>PzGrenKp - Waffensystem PUMA</h3>
            • <b>Struktur:</b> 14 Schützenpanzer pro Kompanie.<br>
            • <b>Wirkung (KE):</b> Kinetische Energie bis 2000m.<br>
            • <b>Wirkung (ABM):</b> Air Burst Munition bis 3000m.<br>
            • <b>Wirkung (MELLS):</b> Lenkflugkörper-System bis 4000m.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>PzZg - Waffensystem LEOPARD 2</h3>
            • <b>Struktur:</b> 4 Kampfpanzer pro Zug.<br>
            • <b>Wirkung (KE):</b> Kinetische Energie bis 3000m.<br>
            • <b>Wirkung (HE):</b> High Explosive (Sprenggranate) bis 5000m.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Stellungsbau & Raum</h3>
            Ein <b>Stellungsraum</b> umfasst mehrere erkundete und vorbereitete Wechselstellungen sowie gedeckte Aufstellungsplätze.<br><br>
            <b>Zweck:</b> Ermöglicht "Wirken aus der Tiefe" und schnellen Stellungswechsel zur Vermeidung von feindlichem Gegenfeuer.` 
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
            <h3>Pionier-Unterstützungsarten</h3>
            1. <b>Unmittelbar:</b> Schnelle Durchführung während der Operation (z.B. Minenräumen im Angriff).<br>
            2. <b>Allgemein:</b> Langfristige Infrastruktur (Gefechtsstände, feste Sperren).<br><br>
            <b>Kernaufgaben:</b><br>
            • Bewegungen fördern (eigene).<br>
            • Bewegungen hemmen & kanalisieren (Feind).<br>
            • Überlebensfähigkeit erhöhen (Schanzen).<br>
            • Beitrag zum Lagebild (Erkundung).` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Sperrwesen & Beratung</h3>
            Sperren dienen dem Lenken, Hemmen, Stauen und Abnutzen.<br><br>
            • <b>Wichtigster Grundsatz:</b> Sperren ohne Überwachung und Feuerbedeckung sind wertlos.<br><br>
            <b>Hierarchie der Pi-Berater:</b><br>
            ZgFhr → KpChef | KpChef → BtlKdr | Btl → Brigade | Brigade → Regiment | Regiment → Division.` 
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
            <h3>Der Gegenangriff (Phasen)</h3>
            Diese Auftragsart benötigt die <b>meiste Vorbereitungszeit</b>.<br><br>
            1. Erkundung der Anmarschwege.<br>
            2. Absprachen mit den Kräften am VRV (Vorderer Rand der Verteidigung) zur Feuerregelung.<br>
            3. Eigene detaillierte Planung und Befehlsgebung für den Stoß.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Führungsfaktor Zeit & Information</h3>
            Kern des Prozesses: <b>Entscheidungsfindung</b>.<br><br>
            • <b>Folgen von Zeitverzug:</b> Wenig Zeit für Erkundung, Absinken der Kampfkraft, verzögerte Reservebildung.<br><br>
            • <b>60-Minuten-Regel:</b> Wenn Folgekräfte in weniger als 60 Min. wirken können, gelten sie als unmittelbar lageentscheidend.` 
        },
        { 
          type: 'text', 
          content: `
            <h3>Wirkungsformen STF</h3>
            • <b>Blind (bli):</b> Feind die Sicht nehmen (Nebel/Ausweichen).<br>
            • <b>Overwatch (ovw):</b> Überwachen von Räumen (z.B. ABRA).<br>
            • <b>Engage:</b> Bekämpfen (Auftrag bei Feindstau an RiMiSpe).<br>
            • <b>Annihilate:</b> Vernichten (Vollständige Zerschlagung).` 
        }
      ]
    }
  ]
},

// =========================================================
// MODUL 6: TAKTIK GRUNDLAGEN
// =========================================================
{
  id: 'taktik_grundlagen',
  title: 'Taktik Grundlagen',
  icon: '🎯',
  description: 'Grundlagen der Truppenführung und Landoperationen.',
  units: [
    {
      id: 'einleitung',
      title: 'Einführung',
      cards: [
        {
      type: 'text',
      content: `
        <h3>Soldatisches Führen – „Führen von Vorne“</h3>

        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; text-align:left;">
            
            <tr>
              <td style="border:1px solid #ccc; padding:10px; vertical-align:top;">
                • Vertrauen<br>
                • Kameradschaft<br>
                • Disziplin
              </td>

              <td style="border:1px solid #ccc; padding:10px; vertical-align:top;">
                • Persönliche Haltung<br>
                • Urteilsfähigkeit<br>
                • Beweglich im Denken<br>
                • Beweglich im Handeln
              </td>

              <td style="border:1px solid #ccc; padding:10px; vertical-align:top;">
                • Moral und Korpsgeist<br>
                • Verantwortungsfreude<br>
                • Kritikfähig<br>
                • Fürsorge<br>
                • Gemeinsamer Zeichenvorrat
              </td>
            </tr>
          </table>
        </div>
      `
    }
  ]
},

/* =========================================================
      Frage 2
----------------------------------------------------------*/
{
  id: 'leitende_prinzipien_truppenfuehrung',
  title: 'Leitende Prinzipien der Truppenführung',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Erfolgreiches Führen mit Auftrag setzt voraus:</h3>
        <ul style="line-height:1.7;">
          <li>Die eindeutige Formulierung der eigenen Absicht mit einer realistischen Zielsetzung.</li>
          <li>Die Zuweisung erforderlicher Kräfte, Mittel und Zeit sowie die Bereitstellung von Informationen zur Auftragsdurchführung.</li>
          <li>Den Willen, Verantwortung zu delegieren, ohne sich der Gesamtverantwortung zu entziehen.</li>
          <li>Die Bereitschaft und Fähigkeit, Handlungsspielraum im Sinne der Absicht der übergeordneten Führung zu nutzen und zu gewähren.</li>
          <li>Eine angemessene Bereitschaft, Fehler zu akzeptieren.</li>
        </ul>
      `
    },
    {
      type: 'text',
      content: `
        <h3>Eigene Absicht</h3>
        <p style="line-height:1.7;">
          Im Rahmen einer Beurteilung der Lage (BdL) leitet sich die eigene Absicht aus der 
          <b>Absicht der übergeordneten Führung</b> sowie dem eigenen <b>Auftrag</b> ab 
          und beschreibt die <b>zu erzielende wesentliche Leistung</b> unter Berücksichtigung 
          der gegebenen Rahmenbedingungen.
        </p>
      `
    },
    {
      type: 'text',
      content: `
        <h3>Abweichen vom Auftrag</h3>
        <p style="line-height:1.7;">
          Das Prinzip des Führens mit Auftrag erfordert vom jeweiligen Truppenführer die Fähigkeit, 
          bei veränderter Lage eigenständig zu handeln. 
          Weicht die tatsächliche Lage wesentlich von den Annahmen ab, 
          kann ein Abweichen vom ursprünglichen Auftrag erforderlich sein, 
          sofern dies im Sinne der <b>Absicht der übergeordneten Führung</b> geschieht.
        </p>
      `
    }
  ]
}, 

/* =========================================================
      Frage 3
----------------------------------------------------------*/

{
  id: 'vernetzter_ansatz_struktur',
  title: 'Vernetzter Ansatz – Strukturmodell',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Struktur des Vernetzten Ansatzes</h3>

        <div style="margin-top:20px;">

          <!-- Dach -->
          <div style="
            text-align:center;
            padding:14px;
            background:#1e293b;
            color:#f1f5f9;
            font-weight:bold;
            font-size:1.1rem;
            border-radius:10px 10px 0 0;
          ">
            Vernetzter Ansatz
          </div>

          <!-- Wirkdimension -->
          <div style="
            display:flex;
            justify-content:space-between;
            background:#334155;
            color:#f8fafc;
            padding:10px;
            font-weight:600;
          ">
            <div>Sicherheit</div>
            <div>+</div>
            <div>Stabilität</div>
            <div>+</div>
            <div>Wiederaufbau</div>
          </div>

          <!-- Säulen -->
          <div style="
            display:flex;
            justify-content:space-between;
            background:#0f172a;
            padding:20px 10px;
            gap:10px;
          ">

            <div style="
              flex:1;
              background:#1e293b;
              color:#f1f5f9;
              text-align:center;
              padding:18px 10px;
              border-radius:8px;
              font-weight:600;
            ">
              AuswA
            </div>

            <div style="
              flex:1;
              background:#1e293b;
              color:#f1f5f9;
              text-align:center;
              padding:18px 10px;
              border-radius:8px;
              font-weight:600;
            ">
              BMVg
            </div>

            <div style="
              flex:1;
              background:#1e293b;
              color:#f1f5f9;
              text-align:center;
              padding:18px 10px;
              border-radius:8px;
              font-weight:600;
            ">
              BMI
            </div>

            <div style="
              flex:1;
              background:#1e293b;
              color:#f1f5f9;
              text-align:center;
              padding:18px 10px;
              border-radius:8px;
              font-weight:600;
            ">
              BMZ
            </div>

          </div>

          <!-- Handlungsfelder -->
          <div style="
            display:flex;
            justify-content:space-between;
            background:#334155;
            color:#f8fafc;
            padding:12px;
            border-radius:0 0 10px 10px;
            font-weight:500;
          ">
            <div>Diplomatie</div>
            <div>Militär</div>
            <div>Polizei</div>
            <div>Entwicklungshilfe</div>
          </div>

        </div>
      `
    }
  ]
},

/* =========================================================
      Frage 4
----------------------------------------------------------*/

{
  id: 'wirkungsorientiertes_denken',
  title: 'Wirkungsorientiertes Denken',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Wirkungsorientiertes Denken</h3>

        <div style="margin-top:40px; display:flex; justify-content:center;">
  <div style="
    position:relative;
    width:100%;
    max-width:950px;
  ">

    <!-- Kreis: Wille (oben) -->
    <div style="
      position:absolute;
      top:-50px;
      left:50%;
      transform:translateX(-50%);
      width:120px;
      height:120px;
      border-radius:50%;
      background:#1e293b;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:600;
      color:#f1f5f9;
      box-shadow:0 6px 18px rgba(0,0,0,0.4);
    ">
      Wille
    </div>

    <!-- Kreis: Ziel (rechts) -->
    <div style="
      position:absolute;
      top:50%;
      right:-80px;
      transform:translateY(-50%);
      width:120px;
      height:120px;
      border-radius:50%;
      background:#1e293b;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:600;
      color:#f1f5f9;
      box-shadow:0 6px 18px rgba(0,0,0,0.4);
    ">
      Ziel
    </div>

    <!-- Kreis: Legitimierung (unten) -->
    <div style="
      position:absolute;
      bottom:-70px;
      left:50%;
      transform:translateX(-50%);
      width:120px;
      height:120px;
      border-radius:50%;
      background:#1e293b;
      color:#f1f5f9;
      font-weight:bold;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 6px 18px rgba(0,0,0,0.4);
    ">
      Legitimierung
    </div>

    <!-- Kreis: Mittel (links) -->
    <div style="
      position:absolute;
      top:50%;
      left:-80px;
      transform:translateY(-50%);
      width:120px;
      height:120px;
      border-radius:50%;
      background:#1e293b;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:600;
      color:#f1f5f9;
      box-shadow:0 6px 18px rgba(0,0,0,0.4);
    ">
      Mittel
    </div>

    <!-- Deine bestehende 2x2 Matrix bleibt hier unverändert -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
      
      <div style="background:#1e293b;padding:24px;border-radius:14px;text-align:center;">
        <b>Offensives Vorgehen</b><br><br>
        Agieren und<br>Entscheidungen suchen
      </div>

      <div style="background:#1e293b;padding:24px;border-radius:14px;text-align:center;">
        <b>Defensives Vorgehen</b><br><br>
        Reagieren und<br>Schwächen suchen
      </div>

      <div style="background:#334155;padding:24px;border-radius:14px;text-align:center;">
        <b>Direktes Vorgehen</b><br><br>
        Wirkung gegen Gegner
      </div>

      <div style="background:#334155;padding:24px;border-radius:14px;text-align:center;">
        <b>Indirektes Vorgehen</b><br><br>
        Unmittelbare Wirkung<br>durch Überraschung
      </div>

    </div>

    <!-- Zentrum -->
    <div style="
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      background:#0f172a;
      color:#38bdf8;
      padding:14px 22px;
      border-radius:12px;
      font-weight:bold;
      box-shadow:0 6px 18px rgba(0,0,0,0.4);
    ">
      Operation / Gefecht
    </div>

  </div>
</div>

      `
    }
  ]
},
/* =========================================================
      Frage 5
----------------------------------------------------------*/
{
  id: 'grundsaetze_operationsfuehrung',
  title: 'Grundsätze der Operationsführung',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Erfolg und Risiko</h3>
        Das Ergreifen der Initiative verlangt vom milTrFhr Risikobereitschaft,
        denn zunächst ist der Erfolg eigenen Handelns immer ungewiss.<br><br>

        Jeder Vorsprung vor dem Feind vergrößert die eigene Handlungsfreiheit
        und engt die des anderen ein.<br><br>

        <b>Aber niemals gehen militärische Führer unkalkulierbare Risiken ein.</b>
      `
    },
    {
      type: 'text',
      content: `
        <h3>Klarheit und Einfachheit</h3>
        Nur das Einfache hat Erfolg.<br><br>

        Militärische Führer weichen nicht ohne Not von ihrem Entschluss ab.
      `
    }
  ]
},
/* =========================================================
    Frage 6
========================================================= */

{
  id: 'beweglichkeit_schnelligkeit',
  title: 'Beweglichkeit & Schnelligkeit',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Beweglichkeit</h3>

        Beweglich Führen heißt zunächst auch beweglich zu denken.
        Beweglichkeit bedeutet für mil Fhr, sich ständig der Entwicklung
        der Lage und der Intensität anzupassen, schnell und überlegt
        zu befehlen und zu handeln.<br><br>

        Im Gefecht wechseln mil Fhr geschickt ihr Vorgehen und Koordinieren zielstrebige Feuer und Bewegung.
       
      `
    },
    {
      type: 'text',
      content: `
        <h3>Schnelligkeit</h3>

        Schnelligkeit in der Operationsführung wird bestimmt
        durch Geschwindigkeit der Entscheidungsfindung,
        Planung, Befehlsgebung sowie deren Umsetzung.<br><br>

        Schnelligkeit darf mil Fhr nicht zur Hast werden.
        Auch im komplexen Lagen Führen und Handeln sie überlegt.<br><br>

        Unzulässige Forderungen nach Schnelligkeit überfordert und schwächt
        die Truppe lageabhängig ist nicht allerdings nicht Schnelligkeit,
        sondern Geduld erforderlich.
      `
    }
  ]
},

/* =========================================================
      Frage 7
----------------------------------------------------------*/
{
  id: 'operation_verbundene_kraefte',
  title: 'Operation verbundener Kräfte',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Die Operation verbundener Kräfte</h3>

        <p><b>Definition:</b></p>
        <p>
        Das Zusammenwirken verschiedener nationaler oder multinationaler
        Kräfte <br>
        Mittel aauf taktischer Ebene <br>
        unter einheitlicher militärischer Führung<br>
        mit gemeinsamer Zielsetzung <br>
        auch unter Einbindung nichtmilitärischer Fähigkeiten.
        </p><br>

        <p><b>Denkebene:</b></p>
        <p>
        Ausrichtung aller verfügbaren Kräfte und Mittel nach deren Fähigkeiten
        / Wirkungen auf ein Ziel – nach festgelegten <b>Prinzipien.</b>
        </p>
      `
    },
    {
      type: 'text',
      content: `
        <h3>Gefecht der verbundenen Waffen</h3>

        <p><b>Einordnung:</b></p>
        <p>
        Teil der Führungsprinzipien <b>OPVGUWA</b>.
        </p><br>

        <p><b>Merkmal:</b></p>
        <p>
        Der kinetische Kampf gegen ebenfalls kenetischen Feind in der Dimension Land.
        </p><br>

        <p><b>Anwendungsebene:</b></p>
        <p>
        Zielgerichteter und koordinierter Einsatz von Waffen
        (Truppengattungen) für und in einem Gefecht.
        </p>
      `
    }
  ]
},

{
  id: 'schwerpunktbildung',
  title: 'Schwerpunktbildung',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Schwerpunktbildung</h3>

        <p>
        Es ist stets <b>ein</b> Schwerpunkt zu bilden.
        Zersplitterung der Kräfte ist zu vermeiden.
        </p> <br>

        <p>
        Erfolg hat, wer die Wirkung aller nötigen Kräfte und Mittel
        zur richtigen Zeit am richtigen Ort auf das richtige Ziel
        konzentriert.
        </p><br>

        <p>
        Wird die Entscheidung gesucht, kann man nie stark genug sein.
        Daher entscheiden mil Fhr, wo sie die Anstrengungen zur
        Auftragserfüllung konzentrieren.
        </p><br>

        <p>
        Hierbei müssen sie bereit sein, an anderer Stelle Risiken
        einzugehen.
        </p>
      `
    }
  ]
},

{
  id: 'merkmale_landoperationen',
  title: 'Allgemeine Merkmale von Landoperationen',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Allgemeine Merkmale von Landoperationen</h3>

        <p>
        <b>Operationen</b> sind militärische Handlungen, die zeitlich und
        räumlich zusammenhängen, auf eine gemeinsame Zielsetzung ausgerichtet
        sind und auf allen Führungsebenen geführt werden.
        </p><br>

        <p>
        <b>Operationsführung</b> ist Planung und Steuerung militärischer
        Handlungen von Streitkräften oder Teilen davon zur Erfüllung
        strategischer, operativer und taktischer Aufträge.
        </p>
      `
    }
  ]
},

{
  id: 'mittel_schwerpunktbildung',
  title: 'Mittel zur Schwerpunktbildung',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Mittel zur Schwerpunktbildung</h3>

        <p>Zur Schwerpunktbildung tragen bei:</p>

        • Verdichten der Aufklärung<br>
        • Planung und Einsatz von Reserven<br>
        • Einsatz zusätzlicher Kräfte und Mittel (z.B. luftbewegliche Kräfte)<br>
        • Unterstützung durch Kräfte und Wirkung aus anderen Dimensionen<br>
        • Vorrang beim Feuer<br>
        • Maßnahmen zum Wirken im Informationsumfeld<br>
        • Elektronischer Kampf<br>
        • Vorrang in der logistischen und sanitätsdienstlichen Unterstützung<br>
        • Vorrang in der Führungsunterstützung<br>
        • Besondere Maßnahmen zum Fördern, Hemmen und Kanalisieren von Bewegung<br>
        • Änderung der Raumordnung (z.B. ein kleinerer Verantwortungsbereich)
      `
    }
  ]
},

{
  id: 'reserven_grundsatz_einsatz',
  title: 'Reserven – Grundsatz & Einsatz',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Reserven</h3>

        <p>
        Reserven werden <b>geschlossen eingesetzt</b>. 
        Zersplitterung führt zum Misserfolg. 
        Die Reserve darf nicht frühzeitig gebunden oder in feindlicher Wirkung ausgesetzt sein.
        </p>

        <p>
        Ist die Reserve eingesetzt, muss schnellstmöglich eine neue gebildet werden.
        </p><br>

        <h4>Reserven werden grundsätzlich...</h4>
        • aus eigenen Kräften und Mitteln gebildet<br>
        • durch den militärischen Führer eingesetzt<br>
        • zur eigenen Verfügung bereitgehalten<br>
        • mit ihren Aufträgen vorgeplant<br>
        • ihre Aufträge erkundet<br><br>

        <h4>Reserven werden eingesetzt um...</h4>
        • die Entscheidung zu erzwingen<br>
        • den Schwerpunkt zu verlegen<br>
        • Krisen zu überwinden<br><br>

        <h4>Bedeutung</h4>
        <p>
        Durch das Einsetzen der Reserve zum richtigen Zeitpunkt hat die Reserve eine entscheidende Bedeutung.
        Der militärische Führer erzielt in der Regel dann die größte Wirkung, wenn durch den Einsatz der Reserve der Feind überrascht werden kann.
        </p>
      `
    }
  ]
},

{
  id: 'verstaerken_abloesung_gegenangriff_reserve_schema',
  title: 'Verstärken – Ablösung – Gegenangriff (Schema)',
  cards: [
    {
      type: 'text',
      content:
        '<h3>Verstärken – Ablösung – Gegenangriff</h3>' +

        '<p><b>Verstärken:</b> Um frühzeitig drohende Gefahr im Entstehen abzuwenden.</p><br>' +
        '<p><b>Auffangen:</b> Bei Fein einbruch, wenn ein Gegenangriff keinen Erfolg verspricht.</p><br>' +
        '<p><b>Gegenangriff:</b><br> Nach Grundsätzen des Angriffs geführt,<br>' +
        '<p> wenn Fein verlustreich aufgefangen ist,<br>' +
        '<p>wenn möglich mit weit gestrechkem Ziel,<br>' +
        '<p> Einsatz aller verfügbaren Kräfte bevor sich weitere FdKr auswirken können.</p>' +

        '<div style="margin:16px 0; padding:12px; border:1px solid rgba(255,255,255,.18); border-radius:12px; overflow:auto;">' +

          // SVG (Inline, ohne <style>, ohne Template-Backticks)
          '<svg viewBox="0 0 920 520" width="100%" height="auto" role="img" aria-label="Schema um die Reserve">' +
            '<defs>' +
              '<marker id="arrGrey" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">' +
                '<path d="M0,0 L10,3 L0,6 Z" fill="rgba(230,230,230,.95)"></path>' +
              '</marker>' +
              '<marker id="arrGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">' +
                '<path d="M0,0 L10,3 L0,6 Z" fill="#22c55e"></path>' +
              '</marker>' +
              '<marker id="arrBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">' +
                '<path d="M0,0 L10,3 L0,6 Z" fill="#60a5fa"></path>' +
              '</marker>' +
              '<marker id="arrPink" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">' +
                '<path d="M0,0 L10,3 L0,6 Z" fill="#fb7185"></path>' +
              '</marker>' +
            '</defs>' +

            // Rahmen
            '<rect x="18" y="18" width="884" height="484" rx="16" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.14)"></rect>' +

            // Knoten oben links: Verstärken
            '<rect x="70" y="70" width="300" height="96" rx="14" fill="rgba(34,197,94,.10)" stroke="#22c55e" stroke-width="2"></rect>' +
            '<text x="220" y="112" text-anchor="middle" font-size="22" fill="#22c55e" font-weight="800">Verstärken</text>' +
            '<text x="220" y="140" text-anchor="middle" font-size="14" fill="rgba(240,240,240,.95)">Gefahr früh abwenden / stabilisieren</text>' +

            // Knoten oben rechts: Gegenangriff
            '<rect x="550" y="70" width="300" height="96" rx="14" fill="rgba(96,165,250,.10)" stroke="#60a5fa" stroke-width="2"></rect>' +
            '<text x="700" y="112" text-anchor="middle" font-size="22" fill="#60a5fa" font-weight="800">Gegenangriff</text>' +
            '<text x="700" y="140" text-anchor="middle" font-size="14" fill="rgba(240,240,240,.95)">Initiative zurück / Entscheidung suchen</text>' +

            // Knoten mittig: Ablösung (schräger Block)
            '<polygon points="350,240 520,175 590,255 420,320" fill="rgba(251,113,133,.10)" stroke="#fb7185" stroke-width="2"></polygon>' +
            '<text x="470" y="250" text-anchor="middle" font-size="18" fill="#fb7185" font-weight="800">Ablösung</text>' +
            '<text x="470" y="274" text-anchor="middle" font-size="13" fill="rgba(240,240,240,.95)">Neuordnung / Regeneration</text>' +

            // Reserve unten
            '<circle cx="460" cy="410" r="56" fill="rgba(250,204,21,.12)" stroke="#facc15" stroke-width="3"></circle>' +
            '<rect x="430" y="395" width="60" height="30" rx="8" fill="rgba(15,23,42,.95)" stroke="rgba(250,204,21,.55)"></rect>' +
            '<text x="460" y="415" text-anchor="middle" font-size="18" fill="#facc15" font-weight="800">Res</text>' +

            // Bögen wie in Skizze (gestrichelt)
            // Res -> Verstärken
            '<path d="M 430 392 C 250 360, 150 285, 150 170" fill="none" stroke="rgba(230,230,230,.85)" stroke-width="4" stroke-dasharray="10 10" marker-end="url(#arrGreen)"></path>' +
            // Res -> Gegenangriff
            '<path d="M 490 392 C 670 360, 770 285, 770 170" fill="none" stroke="rgba(230,230,230,.85)" stroke-width="4" stroke-dasharray="10 10" marker-end="url(#arrBlue)"></path>' +
            // Res -> Ablösung
            '<path d="M 450 372 C 420 340, 405 325, 390 310" fill="none" stroke="rgba(230,230,230,.85)" stroke-width="4" stroke-dasharray="10 10" marker-end="url(#arrPink)"></path>' +

            // Brücken Ablösung -> (gedanklich) Verstärken / Gegenangriff
            '<path d="M 410 300 C 300 260, 250 225, 220 170" fill="none" stroke="rgba(230,230,230,.55)" stroke-width="3" stroke-dasharray="7 10" marker-end="url(#arrGrey)"></path>' +
            '<path d="M 590 240 C 640 215, 670 200, 700 170" fill="none" stroke="rgba(230,230,230,.55)" stroke-width="3" stroke-dasharray="7 10" marker-end="url(#arrGrey)"></path>' +

            // Labels
            '<text x="92" y="270" font-size="14" fill="rgba(240,240,240,.85)">Einsatz der Reserve</text>' +
            '<text x="828" y="270" font-size="14" fill="rgba(240,240,240,.85)" text-anchor="end">Einsatz der Reserve</text>' +
          '</svg>' +

        '</div>' +

        '<p><b>Merksatz:</b> Verstärken stabilisiert · Ablösung ordnet neu · Reserve befähigt · Gegenangriff entscheidet.</p>'
    }
  ]
},
     // ---------------------------------------------------------
// Handlungsfelder der Truppenführung
// ---------------------------------------------------------
{
  id: 'handlungsfelder_truppenfuehrung',
  title: 'Handlungsfelder der Truppenführung',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Handlungsfelder & Faktoren der Truppenführung</h3>

        <p style="line-height:1.7; margin-bottom:16px;">
          Mil Fhr planen Operationen in beiden Handlungsfeldern – <b>Information</b> sowie den
          Faktoren der Truppenführung (<b>Kräfte · Raum · Zeit</b>) –
          und gestalten den Einsatz der Kräfte stets nach Raum und Zeit.
          Informationen schaffen die Voraussetzung für die zielgerichtete Koordination.
        </p>

        <!-- Übersichts-Grafik -->
        <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">

          <!-- Dach: Truppenführung -->
          <div style="
            text-align:center; padding:12px;
            background:#1e293b; color:#f1f5f9;
            font-weight:700; font-size:1rem;
            border-radius:10px 10px 0 0;
            border-bottom:2px solid #38bdf8;
          ">Truppenführung</div>

          <!-- Zwei Säulen -->
          <div style="display:flex; gap:10px;">

            <!-- Information -->
            <div style="
              flex:1; background:#0f172a;
              border:1px solid #38bdf8;
              border-radius:10px; padding:14px;
            ">
              <div style="color:#38bdf8; font-weight:700; margin-bottom:8px;">📡 Information</div>
              <ul style="margin:0; padding-left:18px; line-height:1.8; color:#e2e8f0; font-size:.95rem;">
                <li>Grundlage der Entscheidungsfindung (mil Fhr / Stab)</li>
                <li>Gleichzeitig Wirkungsmittel – gezielt auf Zielgruppen ausrichten</li>
                <li>Schafft Voraussetzung für Koordination von Kräften, Raum und Zeit</li>
              </ul>
            </div>

            <!-- Faktoren -->
            <div style="
              flex:2; background:#0f172a;
              border:1px solid #475569;
              border-radius:10px; padding:14px;
            ">
              <div style="color:#94a3b8; font-weight:700; margin-bottom:8px;">⚙️ Faktoren der Truppenführung</div>
              <div style="display:flex; gap:8px;">

                <div style="flex:1; background:#1e293b; border-radius:8px; padding:10px;">
                  <div style="color:#34d399; font-weight:700; margin-bottom:6px;">Kräfte</div>
                  <p style="font-size:.88rem; line-height:1.6; margin:0; color:#cbd5e1;">
                    Truppen / Truppenteile zur Auftragserfüllung. In OpBuBa auch lokale Behörden / zivile Org.
                    Kräfte sind stets Mitteln zugeordnet.
                  </p>
                </div>

                <div style="flex:1; background:#1e293b; border-radius:8px; padding:10px;">
                  <div style="color:#fb923c; font-weight:700; margin-bottom:6px;">Raum</div>
                  <p style="font-size:.88rem; line-height:1.6; margin:0; color:#cbd5e1;">
                    3-dim. Umfeld für Landoperationen.
                    Schlüsselgelände · rückwärtiger Raum · Tageszeit · Jahreszeit.
                    Grundlage: Beurteilung der Geofaktoren.
                  </p>
                </div>

                <div style="flex:1; background:#1e293b; border-radius:8px; padding:10px;">
                  <div style="color:#a78bfa; font-weight:700; margin-bottom:6px;">Zeit</div>
                  <p style="font-size:.88rem; line-height:1.6; margin:0; color:#cbd5e1;">
                    Beeinflusst durch: Abfolge · Dauer · Geschwindigkeit der Planung /
                    Durchführung · Verfügbarkeit der Kräfte.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      type: 'text',
      content: `
        <h3>Maßnahmen zur Reduzierung des Zeitbedarfs</h3>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:12px;">

          ${[
            ['📋', 'Vorbefehl', 'Vorausschauende Bestimmungen früh erteilen'],
            ['🗺️', 'Rahmen- & Alternativpläne', 'Optionen vorab durchdenken und planen'],
            ['🔭', 'Frühzeitige Aufklärung & Erkundung', 'Informationsvorsprung sichern'],
            ['🤝', 'Kollaboratives, paralleles Planen', 'Gleichzeitiges Planen auf allen Ebenen'],
            ['📡', 'Vorausschauende Regelung', 'Unterstützung und Raumordnung vorplanen'],
            ['📶', 'Führungsfähigkeit sicherstellen', 'Verbindungen und Stäbe frühzeitig aufbauen'],
            ['💻', 'Informations- & Waffenstechnik', 'Konsequente Nutzung moderner Systeme'],
          ].map(([icon, title, desc]) => `
            <div style="background:#1e293b; border-radius:8px; padding:12px; display:flex; gap:10px; align-items:flex-start;">
              <span style="font-size:1.4rem;">${icon}</span>
              <div>
                <div style="font-weight:700; color:#f1f5f9; font-size:.95rem;">${title}</div>
                <div style="color:#94a3b8; font-size:.85rem; margin-top:4px;">${desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `
    }
  ]
},

// ---------------------------------------------------------
// Hauptelemente des Gefechts
// ---------------------------------------------------------
{
  id: 'hauptelemente_gefecht',
  title: 'Hauptelemente des Gefechts',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Hauptelemente des Gefechts</h3>

        <p style="line-height:1.7; margin-bottom:20px;">
          Das Gefecht verbundener Kräfte besteht aus dem Zusammenwirken
          von <b>Information</b>, <b>Abhängigkeit</b> und <b>Wirkung</b>.
          Information ist das dominierende Element.
        </p>

        <!-- Kreisdiagramm -->
        <div style="display:flex; justify-content:center; margin:20px 0;">
          <svg viewBox="0 0 400 340" width="100%" max-width="400" style="max-width:400px;">

            <!-- Äußerer Ring -->
            <circle cx="200" cy="170" r="140" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="28"/>

            <!-- Segmente (vereinfacht als Bögen) -->
            <!-- Information (oben, blau) -->
            <path d="M200,170 L200,30 A140,140 0 0,1 321,240 Z"
              fill="rgba(56,189,248,.18)" stroke="#38bdf8" stroke-width="2"/>
            <!-- Abhängigkeit (unten-rechts, grün) -->
            <path d="M200,170 L321,240 A140,140 0 0,1 79,240 Z"
              fill="rgba(52,211,153,.13)" stroke="#34d399" stroke-width="2"/>
            <!-- Wirkung (unten-links, orange) -->
            <path d="M200,170 L79,240 A140,140 0 0,1 200,30 Z"
              fill="rgba(251,146,60,.13)" stroke="#fb923c" stroke-width="2"/>

            <!-- Zentrum -->
            <circle cx="200" cy="170" r="52" fill="#0f172a" stroke="rgba(255,255,255,.2)" stroke-width="2"/>
            <text x="200" y="164" text-anchor="middle" font-size="13" fill="#e2e8f0" font-weight="700">Gefecht der</text>
            <text x="200" y="182" text-anchor="middle" font-size="13" fill="#e2e8f0" font-weight="700">verbundenen</text>
            <text x="200" y="200" text-anchor="middle" font-size="12" fill="#94a3b8">Waffen</text>

            <!-- Labels -->
            <text x="200" y="80" text-anchor="middle" font-size="16" fill="#38bdf8" font-weight="800">Information</text>
            <text x="200" y="98" text-anchor="middle" font-size="11" fill="rgba(240,240,240,.75)">(dominierendes Element)</text>

            <text x="320" y="278" text-anchor="middle" font-size="15" fill="#34d399" font-weight="700">Abhängigkeit</text>

            <text x="80" y="278" text-anchor="middle" font-size="15" fill="#fb923c" font-weight="700">Wirkung</text>

            <!-- Feuerüberlegenheit Banner unten -->
            <rect x="60" y="310" width="280" height="28" rx="8"
              fill="rgba(239,68,68,.15)" stroke="#ef4444" stroke-width="1.5"/>
            <text x="200" y="329" text-anchor="middle" font-size="13"
              fill="#ef4444" font-weight="700">⚡ Feuerüberlegenheit</text>

          </svg>
        </div>

        <p style="color:#94a3b8; font-size:.9rem; text-align:center; margin-top:4px;">
          Feuerüberlegenheit ist zentrale Voraussetzung für den Gefechtserfolg.
        </p>
      `
    }
  ]
},

// ---------------------------------------------------------
// Truppeneinteilung & Gefechtsgliederung
// ---------------------------------------------------------
{
  id: 'truppeneinteilung_gefechtsgliederung',
  title: 'Truppeneinteilung & Gefechtsgliederung',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Truppeneinteilung</h3>

        <p style="line-height:1.7; margin-bottom:16px;">
          Mil Fhr weisen unterstellten Führern durch die Truppeneinteilung die
          <b>Kräfte und Mittel</b> zu, die zur Auftragserfüllung benötigt werden.
          Truppenteile können hierzu <b>verstärkt oder vermindert</b> werden.
          Die Truppeneinteilung wird im <b>Anhang zum OpBef</b> festgelegt
          und regelt gleichzeitig die <b>Unterstellungsverhältnisse</b>.
        </p>

        <!-- Schema: Unterstellungsebenen -->
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:.9rem; text-align:center;">
            <thead>
              <tr style="background:#1e3a5f; color:#93c5fd;">
                <th style="padding:10px; border:1px solid #334155;">Ebene</th>
                <th style="padding:10px; border:1px solid #334155;">Verfahren</th>
                <th style="padding:10px; border:1px solid #334155;">Wirkung</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background:#0f172a;">
                <td style="padding:10px; border:1px solid #334155; color:#f1f5f9;">Unterstellt</td>
                <td style="padding:10px; border:1px solid #334155; color:#cbd5e1;">Vollständige Unterstellung unter höheren Führer</td>
                <td style="padding:10px; border:1px solid #334155; color:#94a3b8;">Vollständige Verfügungsgewalt</td>
              </tr>
              <tr style="background:#1e293b;">
                <td style="padding:10px; border:1px solid #334155; color:#f1f5f9;">Verstärkt</td>
                <td style="padding:10px; border:1px solid #334155; color:#cbd5e1;">Kräfte werden zeitweilig zugewiesen</td>
                <td style="padding:10px; border:1px solid #334155; color:#94a3b8;">Erhöhung der Kampfkraft</td>
              </tr>
              <tr style="background:#0f172a;">
                <td style="padding:10px; border:1px solid #334155; color:#f1f5f9;">Vermindert</td>
                <td style="padding:10px; border:1px solid #334155; color:#cbd5e1;">Kräfte werden abgegeben</td>
                <td style="padding:10px; border:1px solid #334155; color:#94a3b8;">Reduzierung für eigene Operation</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      type: 'text',
      content: `
        <h3>Gefechtsgliederung</h3>

        <p style="line-height:1.7; margin-bottom:16px;">
          Die Gefechtsgliederung ist die <b>Dislozierung der Truppe im Raum</b>
          und beschreibt Breite, Tiefe, Auflockerung bzw. Zusammenfassung der Kräfte.
          Sie ist abhängig von <b>Lage, Auftrag und eigener Absicht</b>
          und wird maßgeblich vom Gelände beeinflusst.
          Die Gefechtsgliederung wird im <b>grafischen OpPlan</b> verdeutlicht.
        </p>

        <!-- Grafik: Gefechtsgliederung Schema -->
        <div style="display:flex; justify-content:center; margin-top:10px;">
          <svg viewBox="0 0 480 260" width="100%" style="max-width:480px;">

            <!-- Hintergrund -->
            <rect x="0" y="0" width="480" height="260" rx="12"
              fill="#0f172a" stroke="rgba(255,255,255,.1)" stroke-width="1"/>

            <!-- Breite-Pfeil oben -->
            <line x1="40" y1="30" x2="440" y2="30" stroke="#38bdf8" stroke-width="2"
              marker-end="url(#arrowB)" marker-start="url(#arrowBr)"/>
            <text x="240" y="22" text-anchor="middle" font-size="12" fill="#38bdf8">◄── Breite ──►</text>

            <!-- Tiefe-Pfeil links -->
            <line x1="22" y1="55" x2="22" y2="235" stroke="#34d399" stroke-width="2"/>
            <text x="12" y="150" text-anchor="middle" font-size="11" fill="#34d399"
              transform="rotate(-90,12,150)">◄── Tiefe ──►</text>

            <!-- Vordere Linie -->
            <line x1="40" y1="55" x2="440" y2="55"
              stroke="#ef4444" stroke-width="2" stroke-dasharray="8 5"/>
            <text x="444" y="58" font-size="10" fill="#ef4444">FLOT</text>

            <!-- Einheiten (vereinfacht als Rechtecke) -->
            <!-- Linie 1: Vorwärts -->
            <rect x="80"  y="75"  width="80" height="40" rx="6"
              fill="rgba(56,189,248,.15)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="120" y="100" text-anchor="middle" font-size="13" fill="#38bdf8" font-weight="700">I</text>

            <rect x="200" y="75"  width="80" height="40" rx="6"
              fill="rgba(56,189,248,.15)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="240" y="100" text-anchor="middle" font-size="13" fill="#38bdf8" font-weight="700">II</text>

            <rect x="320" y="75"  width="80" height="40" rx="6"
              fill="rgba(56,189,248,.15)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="360" y="100" text-anchor="middle" font-size="13" fill="#38bdf8" font-weight="700">III</text>

            <!-- Linie 2: Hinten / Reserve -->
            <rect x="140" y="155" width="80" height="40" rx="6"
              fill="rgba(250,204,21,.15)" stroke="#facc15" stroke-width="1.5"/>
            <text x="180" y="175" text-anchor="middle" font-size="11" fill="#facc15">Reserve</text>
            <text x="180" y="188" text-anchor="middle" font-size="10" fill="#94a3b8">Res</text>

            <rect x="260" y="155" width="80" height="40" rx="6"
              fill="rgba(167,139,250,.15)" stroke="#a78bfa" stroke-width="1.5"/>
            <text x="300" y="175" text-anchor="middle" font-size="11" fill="#a78bfa">Führung</text>
            <text x="300" y="188" text-anchor="middle" font-size="10" fill="#94a3b8">Stab</text>

            <!-- Verbindungslinien -->
            <line x1="120" y1="115" x2="180" y2="155" stroke="rgba(255,255,255,.2)" stroke-width="1" stroke-dasharray="4 4"/>
            <line x1="240" y1="115" x2="240" y2="155" stroke="rgba(255,255,255,.2)" stroke-width="1" stroke-dasharray="4 4"/>
            <line x1="360" y1="115" x2="300" y2="155" stroke="rgba(255,255,255,.2)" stroke-width="1" stroke-dasharray="4 4"/>

            <!-- Rückwärtiger Raum Label -->
            <text x="240" y="245" text-anchor="middle" font-size="11" fill="#475569">◄── rückwärtiger Raum ──►</text>

          </svg>
        </div>
      `
    }
  ]
},

// ---------------------------------------------------------
// Raumordnung
// ---------------------------------------------------------
{
  id: 'raumordnung_verantwortungsbereiche',
  title: 'Raumordnung & Verantwortungsbereiche',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Raumordnung</h3>

        <p style="line-height:1.7; margin-bottom:16px;">
          Die Raumordnung ist Bestandteil der Planung.
          Durch sie werden mil Fhr aller Ebenen <b>Räume und die damit verbundenen
          Verantwortlichkeiten</b> zugewiesen.
          Grenzen zu benachbarten Truppenteilen dürfen <b>nicht trennend wirken</b> –
          sie dienen der Koordinierung.
        </p>

        <!-- Schema Raumordnung -->
        <div style="display:flex; justify-content:center; margin:16px 0;">
          <svg viewBox="0 0 520 300" width="100%" style="max-width:520px;">

            <rect x="0" y="0" width="520" height="300" rx="12"
              fill="#0f172a" stroke="rgba(255,255,255,.1)"/>

            <!-- Einsatzgebiet (äußerste Grenze) -->
            <rect x="20" y="20" width="480" height="260" rx="10"
              fill="none" stroke="rgba(255,255,255,.15)" stroke-width="2" stroke-dasharray="12 6"/>
            <text x="260" y="36" text-anchor="middle" font-size="11" fill="rgba(255,255,255,.4)">Einsatzgebiet</text>

            <!-- Operationsraum -->
            <rect x="50" y="50" width="420" height="200" rx="8"
              fill="rgba(251,146,60,.05)" stroke="#fb923c" stroke-width="2" stroke-dasharray="8 5"/>
            <text x="260" y="68" text-anchor="middle" font-size="12" fill="#fb923c" font-weight="600">Operationsraum</text>

            <!-- Verantwortungsbereich BtL -->
            <rect x="80" y="85" width="160" height="140" rx="6"
              fill="rgba(56,189,248,.08)" stroke="#38bdf8" stroke-width="2"/>
            <text x="160" y="104" text-anchor="middle" font-size="11" fill="#38bdf8" font-weight="700">Verantwortungsbereich</text>
            <text x="160" y="118" text-anchor="middle" font-size="11" fill="#38bdf8">BtL</text>

            <!-- FLOT Linie -->
            <line x1="80" y1="130" x2="240" y2="130"
              stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4"/>
            <text x="84" y="126" font-size="10" fill="#ef4444">FLOT</text>

            <!-- Interessenbereich -->
            <rect x="80" y="85" width="340" height="140" rx="6"
              fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="5 5"/>
            <text x="400" y="104" text-anchor="middle" font-size="11" fill="#a78bfa">Interessenbereich</text>
            <text x="400" y="118" text-anchor="middle" font-size="11" fill="#a78bfa">BtL</text>

            <!-- Legende -->
            <rect x="290" y="200" width="180" height="68" rx="6"
              fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)"/>
            <line x1="298" y1="215" x2="322" y2="215" stroke="#38bdf8" stroke-width="2"/>
            <text x="328" y="219" font-size="10" fill="#cbd5e1">Verantwortungsbereich</text>
            <line x1="298" y1="232" x2="322" y2="232" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="5 5"/>
            <text x="328" y="236" font-size="10" fill="#cbd5e1">Interessenbereich</text>
            <line x1="298" y1="249" x2="322" y2="249" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4"/>
            <text x="328" y="253" font-size="10" fill="#cbd5e1">FLOT</text>

          </svg>
        </div>
      `
    },
    {
      type: 'text',
      content: `
        <h3>Verantwortungsbereich & Interessenbereich</h3>

        <div style="display:flex; flex-direction:column; gap:12px; margin-top:12px;">

          <div style="background:#0f172a; border-left:4px solid #38bdf8;
                      border-radius:0 8px 8px 0; padding:14px;">
            <div style="color:#38bdf8; font-weight:700; margin-bottom:6px;">
              🗺️ Verantwortungsbereich
            </div>
            <p style="color:#cbd5e1; line-height:1.7; margin:0; font-size:.93rem;">
              Der zugewiesene Bereich des Operationsraumes, in dem mit Fhr Operationen führen
              und für den sie verantwortlich sind. Umfasst auch den Bereich <b>vorwärts der FLOT</b>,
              in dem mit Fhr Verantwortung für Aufklärung und Feuerkampf tragen.
            </p>
          </div>

          <div style="background:#0f172a; border-left:4px solid #a78bfa;
                      border-radius:0 8px 8px 0; padding:14px;">
            <div style="color:#a78bfa; font-weight:700; margin-bottom:6px;">
              🔍 Interessenbereich
            </div>
            <p style="color:#cbd5e1; line-height:1.7; margin:0; font-size:.93rem;">
              Der für die eigene Operationsführung bedeutsame Raum
              <b>über den eigenen Verantwortungsbereich hinaus</b>.
              Umfasst den Operationsraum der nächsthöheren Führungsebene
              und ggf. die angrenzenden Räume der Nachbarn.
            </p>
          </div>

          <div style="background:#0f172a; border-left:4px solid #fb923c;
                      border-radius:0 8px 8px 0; padding:14px;">
            <div style="color:#fb923c; font-weight:700; margin-bottom:6px;">
              📐 Raumordnung – Festlegung
            </div>
            <p style="color:#cbd5e1; line-height:1.7; margin:0; font-size:.93rem;">
              Räume werden durch <b>Führungslinien</b> festgelegt.
              Grenzen zu benachbarten Truppenteilen dürfen nicht trennend wirken –
              sie dienen der <b>Koordinierung</b>.
            </p>
          </div>

        </div>
      `
    }
  ]
},

// ---------------------------------------------------------
// Bewegungen / Auftragsarten
// ---------------------------------------------------------
{
  id: 'bewegungen_auftragsarten',
  title: 'Bewegungen – Auftragsarten',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Bewegungen – Auftragsarten</h3>

        <!-- Visuelle Karten -->
        <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px;">

          <!-- Erreichen -->
          <div style="
            background:#0f172a;
            border:1px solid #334155;
            border-radius:10px; padding:14px;
            display:flex; gap:14px; align-items:flex-start;
          ">
            <div style="
              width:48px; height:48px; border-radius:50%;
              background:rgba(52,211,153,.15);
              border:2px solid #34d399;
              display:flex; align-items:center;
              justify-content:center; font-size:1.4rem;
              flex-shrink:0;
            ">→</div>
            <div>
              <div style="color:#34d399; font-weight:700; font-size:1rem; margin-bottom:4px;">Erreichen</div>
              <p style="color:#cbd5e1; line-height:1.6; margin:0; font-size:.9rem;">
                Auftrag an eine Truppe, in einen bestimmten Raum zu marschieren oder dorthin zu verlegen –
                <b>ohne dass dabei mit Feindberührung zu rechnen ist.</b>
              </p>
            </div>
          </div>

          <!-- Gewinnen -->
          <div style="
            background:#0f172a;
            border:1px solid #334155;
            border-radius:10px; padding:14px;
            display:flex; gap:14px; align-items:flex-start;
          ">
            <div style="
              width:48px; height:48px; border-radius:50%;
              background:rgba(251,146,60,.15);
              border:2px solid #fb923c;
              display:flex; align-items:center;
              justify-content:center; font-size:1.4rem;
              flex-shrink:0;
            ">⚑</div>
            <div>
              <div style="color:#fb923c; font-weight:700; font-size:1rem; margin-bottom:4px;">Gewinnen</div>
              <p style="color:#cbd5e1; line-height:1.6; margin:0; font-size:.9rem;">
                Auftrag, einen bestimmten Raum ggf. gegen Widerstand
                <b>in Besitz zu nehmen, unter Kontrolle zu bringen</b>
                und das nachfolgende Gewinnen der Führung oder Zerstörung durch feindliche Kräfte zu verhindern.
              </p>
            </div>
          </div>

          <!-- Nehmen -->
          <div style="
            background:#0f172a;
            border:1px solid #334155;
            border-radius:10px; padding:14px;
            display:flex; gap:14px; align-items:flex-start;
          ">
            <div style="
              width:48px; height:48px; border-radius:50%;
              background:rgba(239,68,68,.15);
              border:2px solid #ef4444;
              display:flex; align-items:center;
              justify-content:center; font-size:1.4rem;
              flex-shrink:0;
            ">⚔️</div>
            <div>
              <div style="color:#ef4444; font-weight:700; font-size:1rem; margin-bottom:4px;">Nehmen</div>
              <p style="color:#cbd5e1; line-height:1.6; margin:0; font-size:.9rem;">
                Auftrag an eine Truppe, einen bestimmten Raum dem Feind gegen
                <b>erwarteten Widerstand durch Angriff zu entreißen.</b>
              </p>
            </div>
          </div>

          <!-- Sperren -->
          <div style="
            background:#0f172a;
            border:1px solid #334155;
            border-radius:10px; padding:14px;
            display:flex; gap:14px; align-items:flex-start;
          ">
            <div style="
              width:48px; height:48px; border-radius:50%;
              background:rgba(250,204,21,.15);
              border:2px solid #facc15;
              display:flex; align-items:center;
              justify-content:center; font-size:1.4rem;
              flex-shrink:0;
            ">🚧</div>
            <div>
              <div style="color:#facc15; font-weight:700; font-size:1rem; margin-bottom:4px;">Sperren</div>
              <p style="color:#cbd5e1; line-height:1.6; margin:0; font-size:.9rem;">
                Durch Sperren wird die <b>feindliche Nutzung eines Raumes verwehrt</b> –
                der Feind wird gehemmt, kanalisiert oder an der Bewegung gehindert.
              </p>
            </div>
          </div>

          <!-- Verwehren -->
          <div style="
            background:#0f172a;
            border:1px solid #334155;
            border-radius:10px; padding:14px;
            display:flex; gap:14px; align-items:flex-start;
          ">
            <div style="
              width:48px; height:48px; border-radius:50%;
              background:rgba(167,139,250,.15);
              border:2px solid #a78bfa;
              display:flex; align-items:center;
              justify-content:center; font-size:1.4rem;
              flex-shrink:0;
            ">🛑</div>
            <div>
              <div style="color:#a78bfa; font-weight:700; font-size:1rem; margin-bottom:4px;">Verwehren</div>
              <p style="color:#cbd5e1; line-height:1.6; margin:0; font-size:.9rem;">
                Auftrag, die feindliche Nutzung eines Raumes zu verhindern –
                durch Kräfte oder Wirkung aus anderen Dimensionen.
              </p>
            </div>
          </div>

        </div>
      `
    }
  ]
},

// ---------------------------------------------------------
// Operationsarten
// ---------------------------------------------------------
{
  id: 'operationsarten',
  title: 'Operationsarten',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Operationsarten</h3>

        <p style="line-height:1.7; margin-bottom:16px;">
          Truppenteile erhalten Aufträge, aus denen sie
          <b>Gefechtshandlungen und allgemeine Aufgaben</b> ableiten
          und für ihren Verantwortungsbereich lageabhängig einsetzen.
          Die Kombination ergibt die Operation.
        </p>

        <div style="display:flex; flex-direction:column; gap:12px;">

          <!-- Offensiv -->
          <div style="background:#0f172a; border:1px solid #ef4444;
                      border-radius:10px; padding:16px;">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <span style="font-size:1.5rem;">⚔️</span>
              <span style="color:#ef4444; font-weight:700; font-size:1.05rem;">Offensivoperation</span>
            </div>
            <p style="color:#cbd5e1; line-height:1.7; margin:0; font-size:.9rem;">
              Zweck: dem Feind durch Gewalt oder Androhung von Gewalt den eigenen Willen aufzuzwingen.
              Zielt auf das <b>Gewinnen und Halten der Initiative</b>.
              Kann auf feindliche Kräfte oder Inbesitznahme eines Raumes zielen.
              Kann auch dienen um Angriffsvorbereitungen zu stören, zu täuschen, zu zersplittern oder zu binden.
            </p>
            <div style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(239,68,68,.2);">
              <span style="color:#94a3b8; font-size:.85rem;">
                Kann Voraussetzungen für Stabilisierungsoperation schaffen.
              </span>
            </div>
          </div>

          <!-- Defensiv -->
          <div style="background:#0f172a; border:1px solid #38bdf8;
                      border-radius:10px; padding:16px;">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <span style="font-size:1.5rem;">🛡️</span>
              <span style="color:#38bdf8; font-weight:700; font-size:1.05rem;">Defensivoperation</span>
            </div>
            <p style="color:#cbd5e1; line-height:1.7; margin:0; font-size:.9rem;">
              Zweck: dem Feind das <b>Erreichen seiner Ziele zu verwehren</b>.
              Der Angriff des Feindes soll unter Nutzung des Geländes, von Sperren sowie
              Feuerunterstützung so früh wie möglich <b>zum Stehen gebracht</b> werden.
            </p>
            <div style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(56,189,248,.2);">
              <span style="color:#94a3b8; font-size:.85rem;">
                Kann Voraussetzung für offensive Folgeoperation schaffen oder Erfolge der Offensivoperation absichern.
              </span>
            </div>
          </div>

          <!-- Stabilisierung -->
          <div style="background:#0f172a; border:1px solid #34d399;
                      border-radius:10px; padding:16px;">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
              <span style="font-size:1.5rem;">🕊️</span>
              <span style="color:#34d399; font-weight:700; font-size:1.05rem;">Stabilisierungsoperation</span>
            </div>
            <p style="color:#cbd5e1; line-height:1.7; margin:0; font-size:.9rem;">
              Zweck: Rahmenbedingungen zu schaffen oder zu erhalten, die es staatlichen Akteuren
              und anderen Organisationen ermöglichen, in einem <b>hinreichend sicheren Umfeld</b>
              zu agieren und ihren Funktionen gerecht zu werden.
            </p>
            <div style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(52,211,153,.2);">
              <span style="color:#94a3b8; font-size:.85rem;">
                Entwickelt sich oft als Konsequenz aus Offensiv- oder Defensivoperation.
              </span>
            </div>
          </div>

        </div>
      `
    },
    {
      type: 'text',
      content: `
        <h3>Gefechtshandlungen & Allgemeine Aufgaben</h3>

        <div style="display:flex; gap:12px; margin-top:12px;">

          <!-- Gefechtshandlungen -->
          <div style="flex:1; background:#1e293b; border-radius:10px; padding:14px;">
            <div style="color:#f87171; font-weight:700; margin-bottom:10px;">
              ⚔️ Gefechtshandlungen
            </div>
            <ul style="margin:0; padding-left:18px; line-height:2; color:#cbd5e1; font-size:.88rem;">
              <li>Herstellen des Entsatzes</li>
              <li>Auszeichnen / Ausbruch</li>
              <li>Handstreich</li>
              <li>Rücknahme</li>
              <li>Begegnungsgefecht</li>
              <li>Gegenangriff</li>
              <li>Hinterhalt</li>
            </ul>
          </div>

          <!-- Allgemeine Aufgaben -->
          <div style="flex:1; background:#1e293b; border-radius:10px; padding:14px;">
            <div style="color:#86efac; font-weight:700; margin-bottom:10px;">
              📋 Allgemeine Aufgaben
            </div>
            <ul style="margin:0; padding-left:18px; line-height:2; color:#cbd5e1; font-size:.88rem;">
              <li>Aufklären</li>
              <li>Erkundung</li>
              <li>Lähmen / Verzehren der Nutzung</li>
              <li>Überwachen und Sichern</li>
              <li>Tarnen und Täuschen</li>
              <li>Fördern, Hemmen &amp; Kanalisieren von Bewegungen</li>
              <li>Marsch</li>
            </ul>
          </div>

        </div>

        <div style="margin-top:12px; background:#0f172a; border-radius:8px;
                    padding:12px; border:1px solid rgba(255,255,255,.1);">
          <p style="color:#94a3b8; font-size:.88rem; margin:0; line-height:1.6;">
            💡 Diese Handlungen und Aufgaben können in der Operationsplanung vorgesehen sein
            oder sich lageabhängig im laufenden Gefecht ergeben.
            Sie werden durch <b>Einzelaufträge präzisiert</b>.
          </p>
        </div>
      `
    }
  ]
},

// ---------------------------------------------------------
// Formen der Offensivoperationen
// ---------------------------------------------------------
{
  id: 'formen_offensivoperationen',
  title: 'Formen der Offensivoperationen',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Angriffsformen</h3>

        <p style="line-height:1.7; margin-bottom:18px;">
          Offensivoperationen haben den Zweck, dem Feind den eigenen Willen aufzuzwingen.
          Je nach Lage kommen unterschiedliche Angriffsformen zum Einsatz:
        </p>

        <!-- Angriffsformen Schema SVG -->
        <div style="display:flex; justify-content:center; margin-bottom:20px;">
          <svg viewBox="0 0 680 340" width="100%" style="max-width:680px;">

            <rect x="0" y="0" width="680" height="340" rx="12"
              fill="#0f172a" stroke="rgba(255,255,255,.08)"/>

            <!-- ===== GEGEN DIE FRONT ===== -->
            <rect x="30" y="30" width="180" height="130" rx="8"
              fill="rgba(239,68,68,.07)" stroke="#ef4444" stroke-width="1.5"/>
            <text x="120" y="52" text-anchor="middle" font-size="12" fill="#ef4444" font-weight="700">Gegen die Front</text>

            <!-- Feind oben -->
            <rect x="70"  y="62" width="28" height="18" rx="3" fill="rgba(239,68,68,.3)" stroke="#ef4444"/>
            <rect x="105" y="62" width="28" height="18" rx="3" fill="rgba(239,68,68,.3)" stroke="#ef4444"/>
            <rect x="140" y="62" width="28" height="18" rx="3" fill="rgba(239,68,68,.3)" stroke="#ef4444"/>

            <!-- Pfeile nach oben -->
            <line x1="84"  y1="110" x2="84"  y2="84" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrowFront)"/>
            <line x1="119" y1="110" x2="119" y2="84" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrowFront)"/>
            <line x1="154" y1="110" x2="154" y2="84" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrowFront)"/>

            <!-- Eigene Einheiten -->
            <rect x="70"  y="112" width="28" height="18" rx="3" fill="rgba(52,211,153,.3)" stroke="#34d399"/>
            <rect x="105" y="112" width="28" height="18" rx="3" fill="rgba(52,211,153,.3)" stroke="#34d399"/>
            <rect x="140" y="112" width="28" height="18" rx="3" fill="rgba(52,211,153,.3)" stroke="#34d399"/>
            <text x="120" y="148" text-anchor="middle" font-size="10" fill="#94a3b8">direkter Angriff</text>

            <!-- ===== GEGEN DIE FLANKE ===== -->
            <rect x="250" y="30" width="180" height="130" rx="8"
              fill="rgba(251,146,60,.07)" stroke="#fb923c" stroke-width="1.5"/>
            <text x="340" y="52" text-anchor="middle" font-size="12" fill="#fb923c" font-weight="700">Gegen die Flanke</text>

            <!-- Feind mittig -->
            <rect x="315" y="85" width="50" height="28" rx="4" fill="rgba(239,68,68,.3)" stroke="#ef4444"/>
            <text x="340" y="104" text-anchor="middle" font-size="11" fill="#ef4444">Feind</text>

            <!-- Pfeil von links -->
            <line x1="270" y1="99" x2="311" y2="99" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrowFront)"/>
            <!-- Pfeil von rechts (etwas versetzt) -->
            <line x1="410" y1="99" x2="369" y2="99" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrowFront)"/>

            <rect x="258" y="90" width="8" height="18" rx="2" fill="rgba(52,211,153,.3)" stroke="#34d399"/>
            <rect x="412" y="90" width="8" height="18" rx="2" fill="rgba(52,211,153,.3)" stroke="#34d399"/>
            <text x="340" y="148" text-anchor="middle" font-size="10" fill="#94a3b8">beidseitige Flankenangriffe</text>

            <!-- ===== EINFACHE UMFASSUNG ===== -->
            <rect x="470" y="30" width="185" height="130" rx="8"
              fill="rgba(167,139,250,.07)" stroke="#a78bfa" stroke-width="1.5"/>
            <text x="562" y="52" text-anchor="middle" font-size="12" fill="#a78bfa" font-weight="700">Einfache Umfassung</text>

            <!-- Feind -->
            <rect x="535" y="80" width="50" height="28" rx="4" fill="rgba(239,68,68,.3)" stroke="#ef4444"/>
            <text x="560" y="99" text-anchor="middle" font-size="11" fill="#ef4444">Feind</text>

            <!-- Frontangriff + Umfassungspfeil -->
            <line x1="560" y1="130" x2="560" y2="112" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrowFront)"/>
            <!-- Bogen von links herum -->
            <path d="M 480 120 C 480 55, 620 55, 585 80"
              fill="none" stroke="#a78bfa" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#arrowPurple)"/>
            <text x="562" y="148" text-anchor="middle" font-size="10" fill="#94a3b8">Front + Flanke</text>

            <!-- ===== TIEFE UMFASSUNG ===== -->
            <rect x="30" y="190" width="180" height="130" rx="8"
              fill="rgba(56,189,248,.07)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="120" y="212" text-anchor="middle" font-size="12" fill="#38bdf8" font-weight="700">Tiefe Umfassung</text>

            <rect x="92" y="236" width="50" height="28" rx="4" fill="rgba(239,68,68,.3)" stroke="#ef4444"/>
            <text x="117" y="255" text-anchor="middle" font-size="11" fill="#ef4444">Feind</text>

            <!-- Pfeile von weit hinten -->
            <path d="M 60 300 C 40 230, 80 220, 92 250"
              fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#arrowBlue)"/>
            <path d="M 180 300 C 200 230, 160 220, 145 250"
              fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#arrowBlue)"/>
            <text x="120" y="310" text-anchor="middle" font-size="10" fill="#94a3b8">tief in Rücken/Flanke</text>

            <!-- ===== DURCHBRUCH ===== -->
            <rect x="250" y="190" width="180" height="130" rx="8"
              fill="rgba(250,204,21,.07)" stroke="#facc15" stroke-width="1.5"/>
            <text x="340" y="212" text-anchor="middle" font-size="12" fill="#facc15" font-weight="700">Durchbruch</text>

            <!-- Feindlinie -->
            <line x1="270" y1="250" x2="410" y2="250" stroke="#ef4444" stroke-width="3"/>
            <!-- Bresche -->
            <line x1="325" y1="250" x2="355" y2="250" stroke="#0f172a" stroke-width="6"/>

            <!-- Pfeil durch Bresche -->
            <line x1="340" y1="300" x2="340" y2="256" stroke="#facc15" stroke-width="3" marker-end="url(#arrowYellow)"/>
            <text x="340" y="235" text-anchor="middle" font-size="10" fill="#94a3b8">Bresche schlagen</text>
            <text x="340" y="318" text-anchor="middle" font-size="10" fill="#94a3b8">konzentrierter Stoß</text>

            <!-- ===== INFILTRATION ===== -->
            <rect x="470" y="190" width="185" height="130" rx="8"
              fill="rgba(52,211,153,.07)" stroke="#34d399" stroke-width="1.5"/>
            <text x="562" y="212" text-anchor="middle" font-size="12" fill="#34d399" font-weight="700">Infiltration</text>

            <!-- Feindlinie mit Lücken -->
            <line x1="490" y1="250" x2="520" y2="250" stroke="#ef4444" stroke-width="2"/>
            <line x1="535" y1="250" x2="560" y2="250" stroke="#ef4444" stroke-width="2"/>
            <line x1="575" y1="250" x2="600" y2="250" stroke="#ef4444" stroke-width="2"/>
            <line x1="615" y1="250" x2="640" y2="250" stroke="#ef4444" stroke-width="2"/>

            <!-- Kleine Pfeile durch Lücken -->
            <line x1="527" y1="295" x2="527" y2="254" stroke="#34d399" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#arrowGreen)"/>
            <line x1="567" y1="295" x2="567" y2="254" stroke="#34d399" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#arrowGreen)"/>
            <line x1="607" y1="295" x2="607" y2="254" stroke="#34d399" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#arrowGreen)"/>
            <text x="562" y="318" text-anchor="middle" font-size="10" fill="#94a3b8">durch Lücken / verdeckt</text>

            <!-- Marker-Definitionen -->
            <defs>
              <marker id="arrowFront" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
                <path d="M0,0 L8,2.5 L0,5 Z" fill="#34d399"/>
              </marker>
              <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
                <path d="M0,0 L8,2.5 L0,5 Z" fill="#a78bfa"/>
              </marker>
              <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
                <path d="M0,0 L8,2.5 L0,5 Z" fill="#38bdf8"/>
              </marker>
              <marker id="arrowYellow" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
                <path d="M0,0 L8,2.5 L0,5 Z" fill="#facc15"/>
              </marker>
              <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="2.5" orient="auto">
                <path d="M0,0 L8,2.5 L0,5 Z" fill="#34d399"/>
              </marker>
            </defs>

          </svg>
        </div>

        <!-- Einschließung extra -->
        <div style="background:#0f172a; border:1px solid #f87171;
                    border-radius:10px; padding:14px; margin-top:4px;">
          <div style="color:#f87171; font-weight:700; margin-bottom:8px;">🔵 Einschließung</div>
          <p style="color:#cbd5e1; line-height:1.7; margin:0; font-size:.9rem;">
            Vollständige Umschließung des Feindes. Ziel ist es, den Feind einzuschließen,
            seine Versorgung zu unterbrechen und zur Kapitulation oder Vernichtung zu zwingen.
            Eigene Reserve bleibt für möglichen Ausbruchsversuch bereit.
          </p>
        </div>
      `
    }
  ]
},

// ---------------------------------------------------------
// Phasen des Angriffs
// ---------------------------------------------------------
{
  id: 'phasen_angriff',
  title: 'Phasen des Angriffs',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Phasen des Angriffs</h3>

        <p style="line-height:1.7; margin-bottom:20px;">
          Der Angriff wird in unterschiedliche, aber eng zusammenhängende Phasen unterteilt.
          Er umfasst <b>fünf ineinander übergehende Phasen</b>:
        </p>

        <!-- Zeitstrahl / Phasendiagramm -->
        <div style="display:flex; justify-content:center; margin-bottom:20px;">
          <svg viewBox="0 0 620 290" width="100%" style="max-width:620px;">

            <rect x="0" y="0" width="620" height="290" rx="12"
              fill="#0f172a" stroke="rgba(255,255,255,.08)"/>

            <!-- Zeitachse -->
            <line x1="30" y1="240" x2="590" y2="240"
              stroke="rgba(255,255,255,.2)" stroke-width="2"/>
            <polygon points="590,236 602,240 590,244" fill="rgba(255,255,255,.4)"/>
            <text x="608" y="244" font-size="10" fill="rgba(255,255,255,.4)">t</text>

            <!-- Phasendaten: x-Start, Farbe, Nummer, Titel, Höhe der Balken -->
            <!-- Phase 1: Vorbereitung & Anmarsch -->
            <rect x="30" y="100" width="95" height="135" rx="4"
              fill="rgba(148,163,184,.15)" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="77" y="125" text-anchor="middle" font-size="18" fill="#94a3b8" font-weight="800">1</text>
            <text x="77" y="145" text-anchor="middle" font-size="9"  fill="#94a3b8">Vorbereitung</text>
            <text x="77" y="158" text-anchor="middle" font-size="9"  fill="#94a3b8">&amp; Anmarsch</text>

            <!-- Phase 2: Annäherung -->
            <rect x="133" y="80" width="95" height="155" rx="4"
              fill="rgba(251,146,60,.15)" stroke="#fb923c" stroke-width="1.5"/>
            <text x="180" y="105" text-anchor="middle" font-size="18" fill="#fb923c" font-weight="800">2</text>
            <text x="180" y="125" text-anchor="middle" font-size="9"  fill="#fb923c">Annäherung</text>

            <!-- Phase 3: Einbruch (rot, Höhepunkt) -->
            <rect x="236" y="40" width="95" height="195" rx="4"
              fill="rgba(239,68,68,.2)" stroke="#ef4444" stroke-width="2"/>
            <text x="283" y="65" text-anchor="middle" font-size="18" fill="#ef4444" font-weight="800">3</text>
            <text x="283" y="85" text-anchor="middle" font-size="9"  fill="#ef4444">Einbruch</text>
            <text x="283" y="98" text-anchor="middle" font-size="9"  fill="#ef4444">(Angriff)</text>

            <!-- Phase 4: Kampf durch die Tiefe -->
            <rect x="339" y="60" width="95" height="175" rx="4"
              fill="rgba(239,68,68,.15)" stroke="#f87171" stroke-width="1.5"/>
            <text x="386" y="85" text-anchor="middle" font-size="18" fill="#f87171" font-weight="800">4</text>
            <text x="386" y="105" text-anchor="middle" font-size="9"  fill="#f87171">Kampf durch</text>
            <text x="386" y="118" text-anchor="middle" font-size="9"  fill="#f87171">die Tiefe</text>

            <!-- Phase 5: Konsolidierung -->
            <rect x="442" y="90" width="95" height="145" rx="4"
              fill="rgba(52,211,153,.15)" stroke="#34d399" stroke-width="1.5"/>
            <text x="489" y="115" text-anchor="middle" font-size="18" fill="#34d399" font-weight="800">5</text>
            <text x="489" y="135" text-anchor="middle" font-size="9"  fill="#34d399">Konsolidierung</text>

            <!-- Übergangspfeile -->
            <line x1="126" y1="167" x2="132" y2="157" stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-dasharray="3 3"/>
            <line x1="229" y1="157" x2="235" y2="137" stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-dasharray="3 3"/>
            <line x1="332" y1="137" x2="338" y2="147" stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-dasharray="3 3"/>
            <line x1="435" y1="147" x2="441" y2="162" stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-dasharray="3 3"/>

            <!-- Zeitachse Labels -->
            <text x="30" y="260" font-size="9" fill="rgba(255,255,255,.3)">Start</text>
            <text x="442" y="260" font-size="9" fill="rgba(255,255,255,.3)">Ziel erreicht</text>

            <!-- Intensitätskurve (gepunktet) -->
            <path d="M 30,235 C 80,230 130,200 283,100 C 370,60 420,90 490,185 C 540,220 580,232 590,235"
              fill="none" stroke="rgba(239,68,68,.5)" stroke-width="2" stroke-dasharray="5 3"/>
            <text x="283" y="24" text-anchor="middle" font-size="10" fill="rgba(239,68,68,.7)">⬆ Gefechtshöhepunkt</text>

          </svg>
        </div>

        <!-- Detailtabelle -->
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:.88rem;">
            <thead>
              <tr style="background:#1e3a5f; color:#93c5fd; text-align:left;">
                <th style="padding:10px; border:1px solid #334155;">Phase</th>
                <th style="padding:10px; border:1px solid #334155;">Bezeichnung</th>
                <th style="padding:10px; border:1px solid #334155;">Schwerpunkt</th>
              </tr>
            </thead>
            <tbody>
              ${[
                ['1', 'Vorbereitung und Anmarsch', 'Planung, Befehlsgebung, Heranführen der Kräfte'],
                ['2', 'Annäherung',               'Aufklärung, Kontaktaufnahme, Marsch in Angriffsräume'],
                ['3', 'Einbruch',                 'Feuerunterstützung, Bresche schlagen, Einbruch in feindliche Stellung'],
                ['4', 'Kampf durch die Tiefe',    'Ausnutzen des Angriffserfolges, Vorstoß in Tiefe'],
                ['5', 'Konsolidierung',           'Sichern des Geländes, Neuordnung, Reserve neu bilden'],
              ].map(([n, t, s], i) => `
                <tr style="background:${i % 2 === 0 ? '#0f172a' : '#1e293b'};">
                  <td style="padding:10px; border:1px solid #334155; color:#f1f5f9; font-weight:700;">${n}</td>
                  <td style="padding:10px; border:1px solid #334155; color:#e2e8f0;">${t}</td>
                  <td style="padding:10px; border:1px solid #334155; color:#94a3b8;">${s}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `
    }
  ]
},

// ---------------------------------------------------------
// Begrifflichkeiten der Raumordnung
// ---------------------------------------------------------
{
  id: 'begrifflichkeiten_raumordnung',
  title: 'Begrifflichkeiten der Raumordnung',
  cards: [
    {
      type: 'text',
      content: `
        <h3>Begrifflichkeiten der Raumordnung</h3>

        <!-- SVG Raumordnung Kompass-Schema -->
        <div style="display:flex; justify-content:center; margin:20px 0;">
          <svg viewBox="0 0 480 380" width="100%" style="max-width:480px;">

            <rect x="0" y="0" width="480" height="380" rx="12"
              fill="#0f172a" stroke="rgba(255,255,255,.08)"/>

            <!-- Äußerer Rahmen (Gesamtraum) -->
            <rect x="30" y="30" width="420" height="320" rx="10"
              fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.15)" stroke-width="1.5"/>

            <!-- FRONT (oben, rot) -->
            <line x1="100" y1="100" x2="380" y2="100"
              stroke="#ef4444" stroke-width="3"/>
            <text x="240" y="92" text-anchor="middle" font-size="15"
              fill="#ef4444" font-weight="800">▬▬ FRONT ▬▬</text>

            <!-- Zentrum (eigene Truppe) -->
            <rect x="180" y="155" width="120" height="70" rx="8"
              fill="rgba(56,189,248,.15)" stroke="#38bdf8" stroke-width="2"/>
            <text x="240" y="186" text-anchor="middle" font-size="13"
              fill="#38bdf8" font-weight="700">Eigene</text>
            <text x="240" y="203" text-anchor="middle" font-size="13"
              fill="#38bdf8" font-weight="700">Truppe</text>

            <!-- LINKE FLANKE -->
            <line x1="100" y1="100" x2="100" y2="290"
              stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-dasharray="6 4"/>
            <text x="58" y="200" text-anchor="middle" font-size="12"
              fill="#f1f5f9" font-weight="700" transform="rotate(-90,58,200)">Linke Flanke</text>

            <!-- RECHTE FLANKE -->
            <line x1="380" y1="100" x2="380" y2="290"
              stroke="rgba(255,255,255,.3)" stroke-width="1.5" stroke-dasharray="6 4"/>
            <text x="422" y="200" text-anchor="middle" font-size="12"
              fill="#f1f5f9" font-weight="700" transform="rotate(90,422,200)">Rechte Flanke</text>

            <!-- LINKER FLÜGEL -->
            <text x="130" y="145" text-anchor="middle" font-size="11"
              fill="#a78bfa">Linker Flügel</text>

            <!-- RECHTER FLÜGEL -->
            <text x="350" y="145" text-anchor="middle" font-size="11"
              fill="#a78bfa">Rechter Flügel</text>

            <!-- RÜCKEN (unten) -->
            <line x1="100" y1="290" x2="380" y2="290"
              stroke="rgba(255,255,255,.3)" stroke-width="2" stroke-dasharray="8 5"/>
            <text x="240" y="316" text-anchor="middle" font-size="15"
              fill="#94a3b8" font-weight="800">▬ ▬ RÜCKEN ▬ ▬</text>

            <!-- LINKE TIEFE FLANKE -->
            <text x="68" y="295" text-anchor="middle" font-size="10"
              fill="#64748b">Linke Tiefe-Flanke</text>

            <!-- RECHTE TIEFE FLANKE -->
            <text x="412" y="295" text-anchor="middle" font-size="10"
              fill="#64748b">Rechte Tiefe-Flanke</text>

            <!-- Richtungspfeil oben -->
            <polygon points="240,55 232,75 248,75" fill="#ef4444" opacity=".8"/>
            <text x="240" y="50" text-anchor="middle" font-size="10" fill="#ef4444">Feindrichtung</text>

          </svg>
        </div>

        <!-- Legende Tabelle -->
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-size:.88rem;">
            <thead>
              <tr style="background:#1e3a5f; color:#93c5fd; text-align:left;">
                <th style="padding:10px; border:1px solid #334155;">Begriff</th>
                <th style="padding:10px; border:1px solid #334155;">Beschreibung</th>
              </tr>
            </thead>
            <tbody>
              ${[
                ['Front',              '#ef4444', 'Die dem Feind zugewandte Seite der Truppe.'],
                ['Linke / Rechte Flanke', '#f1f5f9', 'Die seitlichen Bereiche der Truppe (aus eigener Sicht: linke und rechte Seite).'],
                ['Linker / Rechter Flügel', '#a78bfa', 'Die vorderen Seitenenden der Gefechtsgliederung.'],
                ['Rücken',             '#94a3b8', 'Die dem Feind abgewandte Seite der Truppe.'],
                ['Linke/Rechte Tiefe-Flanke', '#64748b', 'Tiefgestaffelte Seitenbereiche, rückwärtig der Hauptkampflinie.'],
              ].map(([t, c, d], i) => `
                <tr style="background:${i % 2 === 0 ? '#0f172a' : '#1e293b'};">
                  <td style="padding:10px; border:1px solid #334155; color:${c}; font-weight:700;">${t}</td>
                  <td style="padding:10px; border:1px solid #334155; color:#94a3b8;">${d}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `
    }
  ]
}



/* Fragen immer über dieser Zeile einfügen */
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
