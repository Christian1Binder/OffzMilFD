// data.js – Vollversion mit vollständigem ZIP-Inhalt

export const curriculum = {
modules: [

/* =========================================================
   BEFEHLSRECHT – Vollständig & prüfungstauglich integriert
========================================================= */

{
  id: 'befehlsrecht',
  title: 'Befehlsrecht & Wehrrecht',
  icon: '⚖️',
  description: 'Umfassende Rechtsgrundlagen: Soldatengesetz, Wehrstrafrecht und Beschwerdewesen.',
  units: [

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

{
  id: 'taktik_leadership_ultimate',
  title: 'Taktik & Truppenführung',
  icon: '🎖️',
  description: 'Vollständige taktische Grundsätze, operative Faktoren und technische Daten.',
  units: [
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
