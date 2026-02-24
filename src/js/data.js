// Content Repository - German Translation

export const curriculum = {
    modules: [
        {
            id: 'befehlsrecht',
            title: 'Befehlsrecht',
            icon: '⚖️',
            description: 'Beherrsche die rechtlichen Grundlagen der Befehlsbefugnis.',
            units: [
                {
                    id: 'befehl_definitions',
                    title: 'Befehlsbegriff',
                    cards: [
                        { type: 'text', content: '<h3>Befehlsdefinition (§2 Nr.2 WstG)</h3><p>Eine Anweisung zu einem bestimmten Verhalten.</p>' },
                        { type: 'text', content: '<h3>Vorgesetztenstatus (§1(3) SG)</h3><p>Muss ein militärischer Vorgesetzter sein, der befugt ist, Befehle zu erteilen.</p>' },
                        { type: 'text', content: '<h3>Gehorsamsanspruch (§11(1) SG)</h3><p>Der Untergebene hat keine Handlungsalternative, sondern muss gehorchen.</p>' },
                        { type: 'quiz', question: 'Verlangt ein Befehl ein bestimmtes Verhalten?', options: ['Ja', 'Nein'], answer: 0 }
                    ]
                },
                {
                    id: 'befehl_legality',
                    title: 'Rechtmäßigkeit & Verbindlichkeit',
                    cards: [
                        { type: 'text', content: '<h3>Rechtmäßigkeit (Sicht des Vorgesetzten)</h3><p>1. Dienstlicher Zweck<br>2. Beachtung des Völkerrechts (HVR, Art. 25 GG)<br>3. Beachtung der Gesetze<br>4. Beachtung der Dienstvorschriften (Dv)</p>' },
                        { type: 'text', content: '<h3>Verbindlichkeit (Sicht des Empfängers)</h3><p>Verbindlich wenn:<br>1. Dienstlicher Zweck<br>2. Kein Verstoß gegen Menschenwürde/HVR<br>3. Zumutbar (Verhältnismäßig)<br>4. Keine Straftat befohlen</p>' },
                        { type: 'flashcard', front: 'Kann man einen unzumutbaren Befehl verweigern?', back: 'Technisch JA, aber riskant. "Unzumutbarkeit" erfordert eine Verhältnismäßigkeitsprüfung.' }
                    ]
                },
                {
                    id: 'soldier_duties',
                    title: 'Soldatische Pflichten (§7 - §17 SG)',
                    cards: [
                        { type: 'text', content: '<h3>§7: Treue zur Rechtsordnung</h3><p>Der Bundesrepublik Deutschland treu zu dienen und das Recht und die Freiheit des deutschen Volkes tapfer zu verteidigen.</p>' },
                        { type: 'text', content: '<h3>§10: Pflichten des Vorgesetzten</h3><p>Verantwortung für Befehle. Fürsorgepflicht. Dienstaufsicht.</p>' },
                        { type: 'text', content: '<h3>§11: Gehorsam</h3><p>Befehle vollständig, gewissenhaft und unverzüglich ausführen.</p>' },
                        { type: 'text', content: '<h3>§12: Kameradschaft</h3><p>Hilfeleistung und gegenseitige Achtung unabhängig vom Dienstgrad.</p>' },
                        { type: 'text', content: '<h3>§17: Verhalten</h3><p>Im Dienst: Disziplin wahren. Außer Dienst: Ansehen der Bundeswehr nicht schädigen.</p>' }
                    ]
                },
                {
                    id: 'wstg_offenses',
                    title: 'Wehrstraftaten',
                    cards: [
                        { type: 'text', content: '<h3>Dienstvergehen</h3><p>Verletzung soldatischer Pflichten. Erfordert Vorsatz oder Fahrlässigkeit.</p>' },
                        { type: 'text', content: '<h3>§15 WstG: Eigenmächtige Abwesenheit</h3><p>Verlassen der Truppe oder Fernbleiben > 3 Tage.</p>' },
                        { type: 'text', content: '<h3>§18 WstG: Dienstentziehung</h3><p>Entziehung vom Dienst durch Täuschung. Nur Vorsatz!</p>' },
                        { type: 'text', content: '<h3>§19 WstG: Ungehorsam</h3><p>Nichtbefolgen eines Befehls mit schwerwiegenden Folgen (>750€ Schaden oder Gefahr).</p>' },
                        { type: 'quiz', question: 'Welche Straftat erfordert NUR Vorsatz?', options: ['Eigenmächtige Abwesenheit', 'Dienstentziehung durch Täuschung', 'Ungehorsam'], answer: 1 }
                    ]
                },
                {
                    id: 'complaints',
                    title: 'Beschwerderecht',
                    cards: [
                        { type: 'text', content: '<h3>Beschwerderecht (§1 WBO)</h3><p>Jeder Soldat kann sich beschweren, wenn er glaubt, dass seine Rechte verletzt wurden.</p>' },
                        { type: 'text', content: '<h3>Unterschied: Meldung vs. Beschwerde</h3><p>Beschwerde garantiert einen Anspruch auf einen Bescheid. Eine Meldung nicht.</p>' },
                        { type: 'text', content: '<h3>Fristen</h3><p>Einen Monat (Monatsfrist) nach Kenntnisnahme des Vorfalls.</p>' }
                    ]
                }
            ]
        },
        {
            id: 'fuehrung',
            title: 'Führung im Einsatz',
            icon: '🛡️',
            description: 'Lerne die Prinzipien moderner militärischer Führung.',
            units: [
                {
                    id: 'principles',
                    title: 'Führungsgrundsätze',
                    cards: [
                        { type: 'text', content: '<h3>Führen mit Auftrag</h3><p>Ziel vorgeben, Ressourcen zuteilen, Freiheit in der Durchführung gewähren. Entscheidend: Die "Absicht".</p>' },
                        { type: 'text', content: '<h3>Wirkungsorientiertes Denken</h3><p>Fokus auf das Ergebnis, nicht auf die Methode.</p>' },
                        { type: 'text', content: '<h3>Operation verbundener Kräfte</h3><p>Zusammenwirken verschiedener Truppengattungen (Inf, Pz, Art) zur Wirkungssteigerung.</p>' }
                    ]
                },
                {
                    id: 'elements',
                    title: 'Hauptelemente',
                    cards: [
                        { type: 'text', content: '<h3>Feuer und Bewegung</h3><p>Der Kern des taktischen Manövers.</p>' },
                        { type: 'text', content: '<h3>Schwerpunkt</h3><p>Konzentration der Kampfkraft am entscheidenden Punkt. "Klotzen, nicht kleckern!"</p>' },
                        { type: 'text', content: '<h3>Reserve</h3><p>Kräfte, die zurückgehalten werden, um das Gefecht später zu beeinflussen. "Ohne Reserve keine Einflussnahme."</p>' },
                        { type: 'quiz', question: 'Wozu dient eine Reserve?', options: ['Zur Erholung', 'Um das Gefecht zu beeinflussen', 'Zur Bewachung'], answer: 1 }
                    ]
                },
                {
                    id: 'operations',
                    title: 'Operationsarten',
                    cards: [
                        { type: 'text', content: '<h3>Verteidigung</h3><p>Ziel: Angriff des Feindes zerschlagen. Gelände halten oder Feind abnutzen.</p>' },
                        { type: 'text', content: '<h3>Gegenangriff</h3><p>Geplante Operation (meist durch Reserven), um die Initiative zurückzugewinnen oder Gelände zurückzuerobern.</p>' },
                        { type: 'text', content: '<h3>Gegenstoß</h3><p>Sofortige Reaktion lokaler Kräfte, um einen Einbruch abzuriegeln.</p>' },
                        { type: 'flashcard', front: 'Unterschied: Gegenangriff vs. Gegenstoß', back: 'Angriff = Geplant/Reserven. Stoß = Sofort/Lokal.' }
                    ]
                },
                {
                    id: 'support',
                    title: 'Kampfunterstützung',
                    cards: [
                        { type: 'text', content: '<h3>Artillerie Feuerunterstützung</h3><p>GS (Allgemeine Unterstützung): Unterstützt den Großverband.<br>DS (Unmittelbare Unterstützung): Einem Truppenteil fest zugeordnet.</p>' },
                        { type: 'text', content: '<h3>Pioniere</h3><p>Fördern (Brücken, Minenräumen).<br>Hemmen (Minen, Sperren).<br>Überleben (Stellungsbau).</p>' }
                    ]
                },
                {
                    id: 'leadership_process',
                    title: 'Führungsprozess',
                    cards: [
                        { type: 'text', content: '<h3>Entscheidungsfindung</h3><p>Auftrag auswerten -> Lage beurteilen -> Entschluss fassen -> Befehl geben.</p>' },
                        { type: 'text', content: '<h3>Faktoren</h3><p>Kräfte, Raum, Zeit, Information.</p>' }
                    ]
                }
            ]
        },
        {
            id: 'milhistory',
            title: 'Militärgeschichte',
            icon: '⚔️',
            description: 'Vom 30-jährigen Krieg bis zum Kalten Krieg.',
            units: [
                {
                    id: '30years',
                    title: 'Der 30-jährige Krieg (1618-1648)',
                    cards: [
                        { type: 'text', content: '<h3>Auslöser (1618)</h3><p><strong>Prager Fenstersturz</strong>. Spannungen zwischen Protestanten und Katholiken seit 1580.</p>' },
                        { type: 'text', content: '<h3>Kontext</h3><p><strong>Cuius regio, eius religio:</strong> Der Landesherr bestimmt die Konfession. Böhmen: Protestantische Bevölkerung, Katholischer König.</p>' },
                        { type: 'text', content: '<h3>Schlüsselfiguren</h3><p><strong>Wallenstein (1583–1634):</strong> Der große Militärunternehmer.<br><strong>Gustav II. Adolf (1594–1632):</strong> Schwedenkönig, intervenierte für Protestanten.</p>' },
                        { type: 'text', content: '<h3>Westfälischer Frieden (1648)</h3><p>Ende des Krieges. Unterzeichnet in <strong>Osnabrück</strong> und <strong>Münster</strong>. Anerkennung der Gleichberechtigung der drei Konfessionen.</p>' },
                        { type: 'flashcard', front: 'Bedeutung Westfälischer Frieden', back: 'Grundlage für zwischenstaatliche Regelungen und deutschen Föderalismus.' },
                        { type: 'quiz', question: 'Wer war der schwedische König im 30-jährigen Krieg?', options: ['Wallenstein', 'Gustav II Adolf', 'Ferdinand II'], answer: 1 }
                    ]
                },
                {
                    id: 'prussia_rise',
                    title: 'Aufstieg Preußens (1740-1786)',
                    cards: [
                        { type: 'text', content: '<h3>7-jähriger Krieg</h3><p><strong>Pentarchie:</strong> Preußen, GB, Russland, Frankreich, Österreich.<br>Preußen verbündet mit GB gegen die Kontinentalmächte.</p>' },
                        { type: 'text', content: '<h3>Absolutismus</h3><p>Monarch hat ungeteilte Staatsgewalt. "Von Gottes Gnaden". Keine Mitwirkung anderer Gruppen.</p>' }
                    ]
                },
                {
                    id: 'napoleon_era',
                    title: 'Napoleonische Ära (1789-1815)',
                    cards: [
                        { type: 'text', content: '<h3>Französische Revolution (1789-1799)</h3><p>Monarchie abgeschafft (1792), König hingerichtet. Napoleon beendet die Revolution 1799.</p>' },
                        { type: 'text', content: '<h3>Jena-Auerstedt (1806)</h3><p><strong>Preußische Niederlage:</strong> Überheblichkeit, alte Kommandeure, Lineartaktik.<br><strong>Französischer Sieg:</strong> Flexible Divisionen, Kolonnentaktik, eigenständige Artillerie.</p>' },
                        { type: 'text', content: '<h3>Frieden von Tilsit (1807)</h3><p>Preußen verliert Gebiete westlich der Elbe. Heer auf 42.000 Mann begrenzt. Besatzung Berlins. Demütigung.</p>' },
                        { type: 'checklist', title: 'Preußische Reformen (1807)', items: ['Abschaffung Adelsprivileg', 'Krümper-System (Wehrpflicht-Verbot umgehen)', 'Generalstab & Kriegsakademie', 'Tirailleur-Taktik', 'Eisernes Kreuz (1813)'] },
                        { type: 'text', content: '<h3>Befreiungskriege</h3><p><strong>Eisernes Kreuz:</strong> Gestiftet 10.03.1813. Erster Orden für ALLE Dienstgrade.<br><strong>Farben:</strong> Schwarz/Rot/Gold (Lützower Jäger).</p>' },
                        { type: 'quiz', question: 'Was war das Krümper-System?', options: ['Eine neue Waffe', 'Umgehung des Wehrpflichtverbots', 'Eine Brotsorte'], answer: 1 }
                    ]
                },
                {
                    id: 'restoration',
                    title: 'Restauration & Kaiserreich (1815-1890)',
                    cards: [
                        { type: 'text', content: '<h3>Wiener Kongress (1815)</h3><p><strong>Leitung:</strong> Metternich.<br><strong>Prinzipien:</strong> Restauration, Legitimität, Solidarität.<br><strong>Gleichgewicht:</strong> Pentarchie wiederhergestellt.</p>' },
                        { type: 'text', content: '<h3>Deutscher Bund</h3><p>Lockerer Staatenbund. Defensive Ausrichtung. Enttäuschung für Nationalisten.</p>' },
                        { type: 'text', content: '<h3>Revolution 1848</h3><p>Paulskirche. Ziel: Nationalstaat "von unten". Gescheitert (König Friedrich Wilhelm IV lehnte Krone ab).</p>' },
                        { type: 'text', content: '<h3>Einigungskriege</h3><p>1864: Deutsch-Dänischer Krieg (Düppel).<br>1866: Deutscher Krieg (Königgrätz).<br>1870/71: Deutsch-Französischer Krieg (Sedan). Auslöser: Emser Depesche.</p>' },
                        { type: 'text', content: '<h3>Reichsgründung (1871)</h3><p>18.01.1871 in Versailles. Bismarcks Politik: Isolation Frankreichs, Bündnissysteme (Rückversicherungsvertrag) zur Verhinderung eines Zweifrontenkrieges.</p>' },
                        { type: 'text', content: '<h3>Wilhelminische Ära (1890+)</h3><p>"Platz an der Sonne". Bismarck entlassen. Einkreisung Deutschlands beginnt. Flottenwettrüsten.</p>' }
                    ]
                },
                {
                    id: 'world_war_1',
                    title: 'Erster Weltkrieg (1914-1918)',
                    cards: [
                        { type: 'text', content: '<h3>Der Funke (1914)</h3><p>Attentat von Sarajevo (28.06.1914). Blankoscheck an Österreich. Bündnisautomatismen.</p>' },
                        { type: 'text', content: '<h3>Schlieffen-Plan</h3><p>Deutscher Plan gegen Zweifrontenkrieg: Schneller Sieg gegen Frankreich über Belgien, bevor Russland mobil macht. Gescheitert.</p>' },
                        { type: 'text', content: '<h3>Kriegsjahre</h3><p>1916: Verdun (Materialschlachten).<br>1917: USA-Eintritt (Wende).<br>1918: Waffenstillstand in Compiègne (11.11.1918).</p>' },
                        { type: 'text', content: '<h3>Versailler Vertrag</h3><p><strong>Art. 231:</strong> Alleinschuld.<br><strong>Militär:</strong> 100.000 Mann Heer, keine Luftwaffe/Panzer/U-Boote.<br><strong>Dolchstoßlegende:</strong> Mythos vom "im Felde unbesiegten" Heer.</p>' },
                        { type: 'quiz', question: 'Was war das Ziel des Schlieffen-Plans?', options: ['Russland zuerst besiegen', 'Zweifrontenkrieg vermeiden', 'London erobern'], answer: 1 }
                    ]
                },
                {
                    id: 'interwar_ww2',
                    title: 'Zwischenkrieg & 2.WK',
                    cards: [
                        { type: 'text', content: '<h3>Weimarer Militär</h3><p>Seeckt baut "Führerheer". Geheime Kooperation mit UdSSR (Kasan-Panzer, Lipezk-Luft). "Truppenamt" als getarnter Generalstab.</p>' },
                        { type: 'text', content: '<h3>Hitlers Aufstieg</h3><p>1923: Gescheiterter Putsch (München). 1933: Machtergreifung. 1938: Münchner Abkommen (Sudetenland). 1939: Zerschlagung Rest-Tschechei.</p>' },
                        { type: 'text', content: '<h3>Alliierte Konferenzen</h3><p><strong>Teheran (1943):</strong> Planung D-Day.<br><strong>Jalta (1945):</strong> Aufteilung Deutschlands.<br><strong>Potsdam (1945):</strong> 4 Ds (Demilitarisierung, Denazifizierung, Dezentralisierung, Demokratisierung).</p>' }
                    ]
                },
                {
                    id: 'cold_war',
                    title: 'Kalter Krieg & Bundeswehr',
                    cards: [
                        { type: 'text', content: '<h3>Blockbildung</h3><p><strong>NATO (1949):</strong> Kollektive Verteidigung.<br><strong>Warschauer Pakt (1955):</strong> Sozialistisches Gegenstück.</p>' },
                        { type: 'text', content: '<h3>Bundeswehr (1955)</h3><p><strong>Himmeroder Denkschrift (1950):</strong> Blaupause der Wiederbewaffnung.<br><strong>1955:</strong> NATO-Beitritt. 12 Divisionen geplant. Konzept der "Inneren Führung" (Staatsbürger in Uniform).</p>' },
                        { type: 'text', content: '<h3>NVA (DDR)</h3><p>Gegründet 1956. Sowjetisches Vorbild. Vorläufer: Kasernierte Volkspolizei.</p>' },
                        { type: 'text', content: '<h3>Krisen</h3><p><strong>Mauerbau (1961):</strong> "Antifaschistischer Schutzwall".<br><strong>Kuba (1962):</strong> Welt am Rande des Atomkriegs.<br><strong>NATO-Doppelbeschluss (1979):</strong> Nachrüstung vs. SS-20.</p>' },
                        { type: 'text', content: '<h3>Ende des Kalten Krieges</h3><p>1991: Auflösung der Sowjetunion.</p>' },
                        { type: 'quiz', question: 'Welches Dokument plante die Wiederbewaffnung?', options: ['Potsdamer Abkommen', 'Himmeroder Denkschrift', 'Schlieffen-Plan'], answer: 1 }
                    ]
                }
            ]
        },
        {
            id: 'polbil',
            title: 'Politische Bildung',
            icon: '🌍',
            description: 'Internationale Sicherheit & Deutsche Politik.',
            units: [
                {
                    id: 'uno',
                    title: 'Vereinte Nationen (UN)',
                    cards: [
                        { type: 'text', content: '<h3>Ziel (Art. 1 Charta)</h3><p>Wahrung des Weltfriedens und der internationalen Sicherheit.</p>' },
                        { type: 'text', content: '<h3>Organe</h3><p><strong>Generalversammlung:</strong> Alle 193 Staaten. Empfehlungen.<br><strong>Sicherheitsrat:</strong> 5 Ständige (US, RU, CN, UK, FR) mit Veto + 10 Nichtständige. Bindende Beschlüsse.<br><strong>Sekretariat:</strong> Verwaltung (Guterres).</p>' },
                        { type: 'text', content: '<h3>Rolle Deutschlands</h3><p>Strebt ständigen Sitz an. Nichtständiges Mitglied 2019/2020 (Bewerbung 27/28).</p>' },
                        { type: 'quiz', question: 'Wer hat ein Veto-Recht in der UN?', options: ['Generalversammlung', 'Sicherheitsrat (P5)', 'Sekretariat'], answer: 1 }
                    ]
                },
                {
                    id: 'nato',
                    title: 'NATO',
                    cards: [
                        { type: 'text', content: '<h3>Nordatlantikvertrag (1949)</h3><p>Wertebündnis. <strong>Artikel 5:</strong> Bündnisfall (Angriff auf einen ist Angriff auf alle).</p>' },
                        { type: 'text', content: '<h3>Struktur</h3><p><strong>NAC (Rat):</strong> Höchstes politisches Gremium (Botschafter).<br><strong>SACEUR:</strong> Oberbefehlshaber Europa (US-General, aktuell Cavoli).</p>' },
                        { type: 'text', content: '<h3>Aktuelle Lage</h3><p>Stärkung der Ostflanke (Baltikum/Polen). 2%-Ziel. Beitritt Finnland/Schweden.</p>' }
                    ]
                },
                {
                    id: 'eu',
                    title: 'Europäische Union (EU)',
                    cards: [
                        { type: 'text', content: '<h3>Institutionen</h3><p><strong>Europäischer Rat:</strong> Staatschefs (Impulse).<br><strong>Kommission:</strong> "Regierung" (von der Leyen).<br><strong>Rat der EU:</strong> Fachminister.<br><strong>Parlament:</strong> Gesetzgebung/Haushalt (Metsola).</p>' },
                        { type: 'text', content: '<h3>Sicherheit (GSVP)</h3><p><strong>Petersberg-Aufgaben:</strong> Humanitäre Hilfe, Friedenserhaltung, Krisenbewältigung.<br><strong>Battlegroups (EUBG):</strong> Schnelle Eingreiftruppen.</p>' },
                        { type: 'text', content: '<h3>Beitritt</h3><p><strong>Kopenhagener Kriterien:</strong> Demokratie, Marktwirtschaft, Übernahme EU-Recht.</p>' }
                    ]
                },
                {
                    id: 'security_policy',
                    title: 'Deutsche Sicherheitspolitik',
                    cards: [
                        { type: 'text', content: '<h3>Nationale Sicherheitsstrategie (NSS)</h3><p>Integrierte Sicherheit: Politik, Wirtschaft, Militär, Gesellschaft. Resilienz ist Kern.</p>' },
                        { type: 'text', content: '<h3>Bedrohungsanalyse</h3><p>Cyber, Terror, Hybride Bedrohungen, Russland, Klimawandel.</p>' },
                        { type: 'text', content: '<h3>Rechtliche Basis</h3><p><strong>Parlamentsarmee:</strong> Bewaffnete Einsätze erfordern Bundestagsmandat (einfache Mehrheit). Ausnahme: Gefahr im Verzug (Rettung).</p>' },
                        { type: 'quiz', question: 'Welche Mehrheit braucht ein Mandat?', options: ['2/3 Mehrheit', 'Einfache Mehrheit (50%+1)', 'Einstimmigkeit'], answer: 1 }
                    ]
                }
            ]
        },
        {
            id: 'taktik2',
            title: 'Taktik II (Advanced)',
            icon: '♟️',
            description: 'Beurteilung der Lage & Entschlussfassung.',
            units: [
                {
                    id: 'lageaenderung',
                    title: 'Lageänderung',
                    cards: [
                        { type: 'text', content: '<h3>Kernfrage</h3><p><strong>Grundlegende Lageänderung?</strong> Hat sich die Lage so entwickelt, wie der Vorgesetzte es nicht vorhergesehen hat?</p>' },
                        { type: 'text', content: '<h3>Prüffragen</h3><p>1. Hätte der Vorgesetzte den Befehl so gegeben, wenn er das gewusst hätte?<br>2. Ist das Gefecht noch im eigenen Verantwortungsbereich führbar?<br>3. Ist die "Wesentliche Leistung" noch erbringbar?</p>' }
                    ]
                },
                {
                    id: 'handlungsbedarf',
                    title: 'Handlungsbedarf',
                    cards: [
                        { type: 'text', content: '<h3>Wann handeln?</h3><p>1. Gefährdung des Auftrags (Gefahr).<br>2. Chance zur Initiative (Gelegenheit).</p>' },
                        { type: 'text', content: '<h3>Prozess</h3><p>Lagefeststellung -> Faktorenvergleich (Kräfte, Raum, Zeit) -> Entschluss -> Befehl.</p>' },
                        { type: 'quiz', question: 'Was ist der Hauptgrund, einen Plan zu ändern?', options: ['Langeweile', 'Grundlegende Lageänderung', 'Funkstille'], answer: 1 }
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
