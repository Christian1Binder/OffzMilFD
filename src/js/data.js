// Content Repository - Expanded with Deep Dive

export const curriculum = {
    modules: [
        {
            id: 'befehlsrecht',
            title: 'Befehlsrecht',
            icon: '⚖️',
            description: 'Master the legal foundation of command authority.',
            units: [
                {
                    id: 'befehl_definitions',
                    title: 'Befehlsbegriff',
                    cards: [
                        { type: 'text', content: '<h3>Command Definition (§2 Nr.2 WstG)</h3><p>Anweisung zu einem bestimmten Verhalten.</p>' },
                        { type: 'text', content: '<h3>Superior Status (§1(3) SG)</h3><p>Must be a military superior authorized to give orders.</p>' },
                        { type: 'text', content: '<h3>Claim to Obedience (§11(1) SG)</h3><p>Subordinate has no alternative but to obey.</p>' },
                        { type: 'quiz', question: 'Does a command require a specific behavior?', options: ['Yes', 'No'], answer: 0 }
                    ]
                },
                {
                    id: 'befehl_legality',
                    title: 'Rechtmäßigkeit & Verbindlichkeit',
                    cards: [
                        { type: 'text', content: '<h3>Legality (Commander\'s View)</h3><p>1. Service Purpose (Dienstlicher Zweck)<br>2. Respect International Law (HVR, Art. 25 GG)<br>3. Respect Laws<br>4. Follow Regulations (Dv)</p>' },
                        { type: 'text', content: '<h3>Binding Nature (Recipient\'s View)</h3><p>Binding if:<br>1. Service Purpose<br>2. No violation of Human Dignity/HVR<br>3. Reasonable (Verhältnismäßig)<br>4. No Crime ordered</p>' },
                        { type: 'flashcard', front: 'Can you disobey an unreasonable order?', back: 'Technically YES, but risky. "Unzumutbarkeit" involves proportionality check.' }
                    ]
                },
                {
                    id: 'soldier_duties',
                    title: 'Pflichten (§7 - §17 SG)',
                    cards: [
                        { type: 'text', content: '<h3>§7: Loyalty to Legal Order</h3><p>Serve the Federal Republic faithfully and bravely.</p>' },
                        { type: 'text', content: '<h3>§10: Superior\'s Duties</h3><p>Responsibility for command. Care for subordinates (Fürsorge). Supervision (Dienstaufsicht).</p>' },
                        { type: 'text', content: '<h3>§11: Obedience</h3><p>Follow commands completely, conscientiously, and immediately.</p>' },
                        { type: 'text', content: '<h3>§12: Comradeship</h3><p>Mutual respect and assistance regardless of rank.</p>' },
                        { type: 'text', content: '<h3>§17: Conduct</h3><p>In service: Discipline. Out of service: Reputation of the Bundeswehr.</p>' }
                    ]
                },
                {
                    id: 'wstg_offenses',
                    title: 'Wehrstraftaten',
                    cards: [
                        { type: 'text', content: '<h3>Disciplinary Offense</h3><p>Violation of soldierly duties. Requires Intent (Vorsatz) or Negligence (Fahrlässigkeit).</p>' },
                        { type: 'text', content: '<h3>§15 WstG: AWOL</h3><p>Leaving troop/service or staying away > 3 days (Eigenmächtige Abwesenheit).</p>' },
                        { type: 'text', content: '<h3>§18 WstG: Deception</h3><p>Evading service by deception (Dienstentziehung durch Täuschung). Intent only!</p>' },
                        { type: 'text', content: '<h3>§19 WstG: Disobedience</h3><p>Not following a command with serious consequences (Schwerwiegende Folge >750€).</p>' },
                        { type: 'quiz', question: 'Which offense requires intent ONLY?', options: ['AWOL', 'Deception', 'Disobedience'], answer: 1 }
                    ]
                },
                {
                    id: 'complaints',
                    title: 'Beschwerderecht',
                    cards: [
                        { type: 'text', content: '<h3>Right to Complain (§1 WBO)</h3><p>Every soldier can complain if they believe their rights were violated by superiors or the service.</p>' },
                        { type: 'text', content: '<h3>Difference: Report vs. Complaint</h3><p>Complaint grants a claim to a decision (Bescheid). Report does not.</p>' },
                        { type: 'text', content: '<h3>Deadlines</h3><p>One month (Monatsfrist) after gaining knowledge of the incident.</p>' }
                    ]
                }
            ]
        },
        {
            id: 'fuehrung',
            title: 'Führung im Einsatz',
            icon: '🛡️',
            description: 'Learn the principles of modern combat leadership.',
            units: [
                {
                    id: 'principles',
                    title: 'Führungsgrundsätze',
                    cards: [
                        { type: 'text', content: '<h3>Mission Command (Führen mit Auftrag)</h3><p>Define the objective (Goal), allocate resources, allow freedom of execution. Crucial: "Intent" (Absicht).</p>' },
                        { type: 'text', content: '<h3>Effect-Based Thinking</h3><p>Focus on the outcome, not the method.</p>' },
                        { type: 'text', content: '<h3>Combined Arms</h3><p>Different branches (Infantry, Armor, Artillery) working together to maximize effect.</p>' }
                    ]
                },
                {
                    id: 'elements',
                    title: 'Hauptelemente',
                    cards: [
                        { type: 'text', content: '<h3>Fire & Movement</h3><p>The core of tactical maneuver.</p>' },
                        { type: 'text', content: '<h3>Schwerpunkt (Main Effort)</h3><p>Concentration of combat power at the decisive point.</p>' },
                        { type: 'text', content: '<h3>Reserve</h3><p>Forces held back to influence the battle later. "Without a reserve, no influence."</p>' },
                        { type: 'quiz', question: 'Why keep a reserve?', options: ['To rest troops', 'To influence the battle', 'To guard the rear'], answer: 1 }
                    ]
                },
                {
                    id: 'operations',
                    title: 'Operationsarten',
                    cards: [
                        { type: 'text', content: '<h3>Defense</h3><p>Aim: Break the enemy attack. Hold terrain or attrit enemy forces.</p>' },
                        { type: 'text', content: '<h3>Offense: Counter-Attack (Gegenangriff)</h3><p>Planned operation (usually by reserves) to regain initiative or lost ground.</p>' },
                        { type: 'text', content: '<h3>Offense: Counter-Stroke (Gegenstoß)</h3><p>Immediate reaction by local forces to contain a breach.</p>' },
                        { type: 'flashcard', front: 'Difference: Counter-Attack vs Counter-Stroke', back: 'Attack = Planned/Reserves. Stroke = Immediate/Local.' }
                    ]
                },
                {
                    id: 'support',
                    title: 'Kampfunterstützung',
                    cards: [
                        { type: 'text', content: '<h3>Artillery Fire Support</h3><p>GS (General Support): Supports the whole force.<br>DS (Direct Support): Dedicated to a specific unit.</p>' },
                        { type: 'text', content: '<h3>Engineers (Pioniere)</h3><p>Mobility: Breaching minefields, bridging.<br>Counter-Mobility: Laying mines, obstacles.<br>Survivability: Digging positions.</p>' }
                    ]
                },
                {
                    id: 'leadership_process',
                    title: 'Führungsprozess',
                    cards: [
                        { type: 'text', content: '<h3>Decision Making</h3><p>Analyze Mission -> Analyze Situation -> Develop Courses of Action -> Decide -> Issue Orders.</p>' },
                        { type: 'text', content: '<h3>Factors (Faktoren)</h3><p>Forces (Kräfte), Space (Raum), Time (Zeit), Information.</p>' }
                    ]
                }
            ]
        },
        {
            id: 'milhistory',
            title: 'Militärgeschichte',
            icon: '⚔️',
            description: 'From 30 Years\' War to the Cold War.',
            units: [
                {
                    id: '30years',
                    title: 'The 30 Years\' War (1618-1648)',
                    cards: [
                        { type: 'text', content: '<h3>Trigger (1618)</h3><p><strong>Defenestration of Prague</strong> (Prager Fenstersturz). The catalyst for the war. Tensions between Protestants and Catholics had been rising since the 1580s.</p>' },
                        { type: 'text', content: '<h3>Religious Context</h3><p><strong>Cuius regio, eius religio:</strong> The ruler determines the religion of the territory. Bohemia was a special case with a Protestant population but a Catholic King.</p>' },
                        { type: 'text', content: '<h3>Key Figures</h3><p><strong>Wallenstein (1583–1634):</strong> The great military entrepreneur.<br><strong>Gustav II. Adolf (1594–1632):</strong> The Swedish King who intervened for the Protestants.</p>' },
                        { type: 'text', content: '<h3>Peace of Westphalia (1648)</h3><p>Ended the war. Signed in <strong>Osnabrück</strong> (Swedes) and <strong>Münster</strong> (French). Recognized the equality of three confessions: Catholic, Lutheran, Calvinist.</p>' },
                        { type: 'flashcard', front: 'Significance of Westphalia', back: 'Basis for interstate regulations and German Federalism.' },
                        { type: 'quiz', question: 'Who was the Swedish King in the 30 Years War?', options: ['Wallenstein', 'Gustav II Adolf', 'Ferdinand II'], answer: 1 }
                    ]
                },
                {
                    id: 'prussia_rise',
                    title: 'Rise of Prussia (1740-1786)',
                    cards: [
                        { type: 'text', content: '<h3>7 Years\' War</h3><p><strong>Pentarchy:</strong> Prussia, GB, Russia, France, Austria.<br>Prussia allied with GB against the continental powers.</p>' },
                        { type: 'text', content: '<h3>Absolutism</h3><p>Monarch has undivided state power. "By the Grace of God". No participation of other social groups. Ruler stands above the law but is a "Servant of God".</p>' }
                    ]
                },
                {
                    id: 'napoleon_era',
                    title: 'Napoleonic Era (1789-1815)',
                    cards: [
                        { type: 'text', content: '<h3>French Revolution (1789-1799)</h3><p>War declaration on Austria (1792). Monarchy abolished (1792), King executed (1793). Napoleon ends the revolution in 1799.</p>' },
                        { type: 'text', content: '<h3>Coalition Wars</h3><p><strong>1st Coalition (1792-1797):</strong> Cannonade of Valmy. Napoleon\'s Egyptian Expedition.<br><strong>2nd Coalition (1798-1802):</strong> Foundation for Napoleon\'s political rise.</p>' },
                        { type: 'text', content: '<h3>Jena-Auerstedt (1806)</h3><p><strong>Prussian Defeat:</strong> Arrogance, old commanders, linear tactics, artillery only as support.<br><strong>French Victory:</strong> Flexible divisions, column tactics, independent artillery, annihilation strategy.</p>' },
                        { type: 'text', content: '<h3>Peace of Tilsit (1807)</h3><p>Prussia loses all land west of the Elbe. Army limited to 42,000 men. French occupation of Berlin. Poverty and humiliation.</p>' },
                        { type: 'checklist', title: 'Prussian Reforms (1807)', items: ['Abolition of Nobility Privilege', 'Krümper System (evading draft ban)', 'General Staff & War Academy', 'Skirmisher Tactics (Tirailleur)', 'Iron Cross (1813)'] },
                        { type: 'text', content: '<h3>Wars of Liberation</h3><p><strong>Iron Cross:</strong> Founded 10.03.1813. First award for ALL ranks. Values: Chivalry, Duty, Love of Fatherland.<br><strong>Colors:</strong> Black/Red/Gold from Lützow Rangers uniforms ("Gold for Iron").</p>' },
                        { type: 'quiz', question: 'What was the Krümper System?', options: ['A new weapon', 'Evading the draft ban', 'A type of bread'], answer: 1 }
                    ]
                },
                {
                    id: 'restoration',
                    title: 'Restoration & Empire (1815-1890)',
                    cards: [
                        { type: 'text', content: '<h3>Congress of Vienna (1815)</h3><p><strong>Leader:</strong> Metternich.<br><strong>Principles:</strong> Restoration (pre-1789), Legitimacy (Monarchs), Solidarity (against revolution).<br><strong>Balance of Power:</strong> Pentarchy restored.</p>' },
                        { type: 'text', content: '<h3>German Confederation (Deutscher Bund)</h3><p>Loose federation of 41 states. Defensive orientation. Disappointment for nationalists seeking a unified state.</p>' },
                        { type: 'text', content: '<h3>Revolution of 1848</h3><p>Paulskirche Parliament. Goal: National State "from below". Failed because King Friedrich Wilhelm IV refused the "crown from the gutter".</p>' },
                        { type: 'text', content: '<h3>Wars of Unification</h3><p>1864: German-Danish War (Düppeler Schanzen).<br>1866: German War (Königgrätz).<br>1870/71: Franco-Prussian War (Sedan). Trigger: Ems Dispatch.</p>' },
                        { type: 'text', content: '<h3>Empire Proclamation (1871)</h3><p>18.01.1871 in Versailles. Bismarck\'s Policy: Isolation of France, complex alliances (Three Emperors League, Reinsurance Treaty) to prevent a two-front war.</p>' },
                        { type: 'text', content: '<h3>Wilhelmine Era (1890+)</h3><p>"Place in the Sun". Bismarck dismissed. Encirclement of Germany begins. Naval arms race.</p>' }
                    ]
                },
                {
                    id: 'world_war_1',
                    title: 'World War I (1914-1918)',
                    cards: [
                        { type: 'text', content: '<h3>The Spark (1914)</h3><p>Assassination of Franz Ferdinand in Sarajevo (28.06.1914). Blank Cheque to Austria. Chain reaction of alliances.</p>' },
                        { type: 'text', content: '<h3>Schlieffen Plan</h3><p>Germany\'s plan to avoid a two-front war: Knock out France quickly via Belgium before Russia mobilizes. Failed at the Marne.</p>' },
                        { type: 'text', content: '<h3>War Years</h3><p>1916: Verdun (Materialschlachten).<br>1917: US Entry (Turning Point).<br>1918: Armistice at Compiègne (11.11.1918).</p>' },
                        { type: 'text', content: '<h3>Treaty of Versailles</h3><p><strong>Art. 231:</strong> War Guilt Clause.<br><strong>Military:</strong> 100k Army, No Air Force/Tanks/Subs, Demilitarized Rhineland.<br><strong>Dolchstoßlegende:</strong> Myth that the army was "undefeated in the field" and betrayed by civilians.</p>' },
                        { type: 'quiz', question: 'What was the purpose of the Schlieffen Plan?', options: ['Invade Russia first', 'Avoid a two-front war', 'Capture London'], answer: 1 }
                    ]
                },
                {
                    id: 'interwar_ww2',
                    title: 'Interwar & WWII',
                    cards: [
                        { type: 'text', content: '<h3>Weimar Military</h3><p>Seeckt builds a "Führerheer" (Leaders Army). Covert cooperation with USSR (Kazan-Tanks, Lipetsk-Air). "Truppenamt" hides the General Staff.</p>' },
                        { type: 'text', content: '<h3>Hitler\'s Rise</h3><p>1923: Failed Putsch (Munich). 1933: Seizure of Power. 1938: Munich Agreement (Sudetenland). 1939: Invasion of "Rest-Czechia".</p>' },
                        { type: 'text', content: '<h3>Allied Conferences</h3><p><strong>Tehran (1943):</strong> Planning D-Day.<br><strong>Yalta (1945):</strong> Division of Germany.<br><strong>Potsdam (1945):</strong> 4 Ds (Demilitarization, Denazification, Decentralization, Democratization).</p>' }
                    ]
                },
                {
                    id: 'cold_war',
                    title: 'Cold War & Bundeswehr',
                    cards: [
                        { type: 'text', content: '<h3>Formation of Blocs</h3><p><strong>NATO (1949):</strong> Collective Defense.<br><strong>Warsaw Pact (1955):</strong> Soviet Response.</p>' },
                        { type: 'text', content: '<h3>Bundeswehr (1955)</h3><p><strong>Himmerod Memorandum (1950):</strong> Blueprint for rearmament.<br><strong>1955:</strong> Joined NATO. 500,000 men target. Concept of "Innere Führung" (Citizen in Uniform).</p>' },
                        { type: 'text', content: '<h3>NVA (East Germany)</h3><p>Founded 1956. Soviet model. "Kasernierte Volkspolizei" as precursor.</p>' },
                        { type: 'text', content: '<h3>Crises</h3><p><strong>Berlin Wall (1961):</strong> "Anti-Fascist Protection Rampart".<br><strong>Cuba (1962):</strong> World on brink of nuclear war.<br><strong>NATO Double-Track (1979):</strong> Stationing Pershing II vs SS-20.</p>' },
                        { type: 'text', content: '<h3>End of Cold War</h3><p>1991: Dissolution of USSR.</p>' },
                        { type: 'quiz', question: 'Which document planned the rearmament of West Germany?', options: ['Potsdam Agreement', 'Himmerod Memorandum', 'Schlieffen Plan'], answer: 1 }
                    ]
                }
            ]
        },
        {
            id: 'polbil',
            title: 'Politische Bildung',
            icon: '🌍',
            description: 'International Security & German Policy.',
            units: [
                {
                    id: 'uno',
                    title: 'United Nations (UN)',
                    cards: [
                        { type: 'text', content: '<h3>Goal (Art. 1)</h3><p>Maintain world peace and international security.</p>' },
                        { type: 'text', content: '<h3>Organs</h3><p><strong>General Assembly:</strong> All 193 members. Recommendations.<br><strong>Security Council:</strong> 5 Permanent (US, RU, CN, UK, FR) with Veto + 10 Rotating. Binding resolutions.<br><strong>Secretariat:</strong> Admin (Guterres).</p>' },
                        { type: 'text', content: '<h3>Germany\'s Role</h3><p>Seeking permanent seat. Non-permanent member 2019/2020 (and applying for 27/28).</p>' },
                        { type: 'quiz', question: 'Who has Veto power in the UN?', options: ['General Assembly', 'Security Council (P5)', 'Secretariat'], answer: 1 }
                    ]
                },
                {
                    id: 'nato',
                    title: 'NATO',
                    cards: [
                        { type: 'text', content: '<h3>North Atlantic Treaty (1949)</h3><p>Value alliance. <strong>Article 5:</strong> Collective Defense (Attack on one is attack on all).</p>' },
                        { type: 'text', content: '<h3>Structure</h3><p><strong>NAC (Council):</strong> Highest political body (Ambassadors).<br><strong>SACEUR:</strong> Supreme Allied Commander Europe (Always US General, currently Cavoli).</p>' },
                        { type: 'text', content: '<h3>Current Situation</h3><p>Eastern Flank reinforcement (EFP in Baltics/Poland). 2% GDP Goal. Finland/Sweden accession.</p>' }
                    ]
                },
                {
                    id: 'eu',
                    title: 'European Union (EU)',
                    cards: [
                        { type: 'text', content: '<h3>Institutions</h3><p><strong>European Council:</strong> Heads of State (Guidance).<br><strong>Commission:</strong> "Government" (Ursula von der Leyen).<br><strong>Council of EU:</strong> Ministers.<br><strong>Parliament:</strong> Legislation/Budget (Roberta Metsola).</p>' },
                        { type: 'text', content: '<h3>Security (CSDP)</h3><p><strong>Petersberg Tasks:</strong> Humanitarian, Peacekeeping, Crisis Management.<br><strong>Battlegroups (EUBG):</strong> Rapid Reaction Forces.</p>' },
                        { type: 'text', content: '<h3>Accession</h3><p><strong>Copenhagen Criteria:</strong> Democracy, Market Economy, Ability to adopt EU law.</p>' }
                    ]
                },
                {
                    id: 'security_policy',
                    title: 'German Security Policy',
                    cards: [
                        { type: 'text', content: '<h3>National Security Strategy (NSS)</h3><p>Integrated Security Approach. Values: Democracy, Rule of Law.<br><strong>Threats:</strong> Cyber, Terror, Hybrid, Russia.</p>' },
                        { type: 'text', content: '<h3>Bundeswehr Missions</h3><p>1. National/Alliance Defense (LV/BV).<br>2. Crisis Management.<br>3. Homeland Security (Amtshilfe).</p>' },
                        { type: 'text', content: '<h3>Legal Basis</h3><p><strong>Parliamentary Army:</strong> Armed deployments require Bundestag Mandate (Simple Majority).<br><strong>Mandate Content:</strong> Mission, Area, Forces, Duration, Cost.</p>' },
                        { type: 'quiz', question: 'What majority is needed for a mandate?', options: ['2/3 Majority', 'Simple Majority (50%+1)', 'Unanimous'], answer: 1 }
                    ]
                }
            ]
        },
        {
            id: 'taktik2',
            title: 'Taktik II (Advanced)',
            icon: '♟️',
            description: 'Advanced decision making and tactical analysis.',
            units: [
                {
                    id: 'lageaenderung',
                    title: 'Beurteilung der Lage',
                    cards: [
                        { type: 'text', content: '<h3>Basic Question</h3><p><strong>Fundamental Change?</strong> Has the situation developed in a way the superior did not foresee?</p>' },
                        { type: 'text', content: '<h3>Checklist</h3><p>1. Would the superior have given the same order if they knew this?<br>2. Can the mission still be accomplished within the area?<br>3. Is the "Essential Task" (Wesentliche Leistung) still achievable?</p>' }
                    ]
                },
                {
                    id: 'handlungsbedarf',
                    title: 'Handlungsbedarf',
                    cards: [
                        { type: 'text', content: '<h3>When to Act?</h3><p>1. Threat to mission success (Danger).<br>2. Opportunity to seize initiative (Chance).</p>' },
                        { type: 'text', content: '<h3>Process</h3><p>Situation Analysis (A) -> Factors (Forces, Space, Time) -> Comparison -> Decision -> Order.</p>' },
                        { type: 'quiz', question: 'What is the primary trigger for changing a plan?', options: ['Boredom', 'Fundamental Situation Change', 'Radio Silence'], answer: 1 }
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
