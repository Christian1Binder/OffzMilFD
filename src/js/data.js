// Content Repository - Expanded

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
                        { type: 'text', content: '<h3>Trigger: Defenestration of Prague (1618)</h3><p>Prager Fenstersturz. Conflict between Protestants and Catholics.</p>' },
                        { type: 'text', content: '<h3>Key Figures</h3><p>Wallenstein (Military Entrepreneur) & Gustav II Adolf (Swedish King).</p>' },
                        { type: 'text', content: '<h3>Peace of Westphalia (1648)</h3><p>Osnabrück & Münster. Recognized 3 confessions (Catholics, Lutherans, Calvinists). Basis for German federalism.</p>' },
                        { type: 'quiz', question: 'What ended the 30 Years\' War?', options: ['Treaty of Versailles', 'Peace of Westphalia', 'Congress of Vienna'], answer: 1 }
                    ]
                },
                {
                    id: 'prussia_napoleon',
                    title: 'Prussia & Napoleon (1789-1815)',
                    cards: [
                        { type: 'text', content: '<h3>French Revolution (1789)</h3><p>Monarchy abolished (1792). Napoleon rises (1799).</p>' },
                        { type: 'text', content: '<h3>Jena-Auerstedt (1806)</h3><p>Prussia defeated. Reasons: Outdated linear tactics, old commanders vs. French flexibility (Divisions, Skirmishers).</p>' },
                        { type: 'text', content: '<h3>Prussian Reforms (1807)</h3><p>Scharnhorst, Gneisenau, Clausewitz. Abolition of nobility privilege. General Staff. Krümper System (evading draft ban).</p>' },
                        { type: 'flashcard', front: 'Iron Cross (1813)', back: 'First award for ALL ranks. Symbol of chivalry & duty.' }
                    ]
                },
                {
                    id: 'world_wars',
                    title: 'World Wars (1914-1945)',
                    cards: [
                        { type: 'text', content: '<h3>WWI Trigger (1914)</h3><p>Assassination of Archduke Franz Ferdinand in Sarajevo (28.06.1914). Triggers alliance systems.</p>' },
                        { type: 'text', content: '<h3>Schlieffen Plan</h3><p>German strategy to avoid a two-front war by quickly knocking out France before Russia mobilized. Failed.</p>' },
                        { type: 'text', content: '<h3>Weimar Military</h3><p>Covert rearmament (Lipetsk/Kazan/Tomka) with USSR. "Truppenamt" as hidden General Staff.</p>' },
                        { type: 'text', content: '<h3>WWII Conferences</h3><p>Tehran (1943), Yalta (1945), Potsdam (1945). Decided division of Germany.</p>' }
                    ]
                },
                {
                    id: 'cold_war',
                    title: 'Cold War & Bundeswehr',
                    cards: [
                        { type: 'text', content: '<h3>Alliances</h3><p>NATO (1949, Art. 5) vs. Warsaw Pact (1955).</p>' },
                        { type: 'text', content: '<h3>Bundeswehr Founding (1955)</h3><p>Himmerod Memorandum (1950). Joined NATO 1955. 12 Divisions planned.</p>' },
                        { type: 'text', content: '<h3>Crises</h3><p>Berlin Wall (1961). Cuban Missile Crisis (1962). NATO Double-Track Decision (1979).</p>' },
                        { type: 'quiz', question: 'When was the Bundeswehr founded?', options: ['1949', '1955', '1961'], answer: 1 }
                    ]
                }
            ]
        },
        {
            id: 'polbil',
            title: 'Politische Bildung',
            icon: '🌍',
            description: 'Understanding International Security & German Policy.',
            units: [
                {
                    id: 'organizations',
                    title: 'International Organizations',
                    cards: [
                        { type: 'text', content: '<h3>United Nations (UN)</h3><p>Goal: World Peace. Security Council: 5 Permanent (Veto) + 10 Rotating. General Assembly.</p>' },
                        { type: 'text', content: '<h3>NATO</h3><p>North Atlantic Treaty Org. Collective Defense (Art. 5). Political decision body: North Atlantic Council (NAC).</p>' },
                        { type: 'text', content: '<h3>European Union (EU)</h3><p>Commission (Executive), Council (Member States), Parliament (Citizens). Petersberg Tasks: Peacekeeping, Crisis Management.</p>' },
                        { type: 'quiz', question: 'Which body has Veto power in the UN?', options: ['General Assembly', 'Security Council (P5)', 'Secretariat'], answer: 1 }
                    ]
                },
                {
                    id: 'security_policy',
                    title: 'German Security Policy',
                    cards: [
                        { type: 'text', content: '<h3>National Security Strategy (NSS)</h3><p>Integrated Security: Politics, Economy, Military, Society. Resilience is key.</p>' },
                        { type: 'text', content: '<h3>Threat Analysis</h3><p>Cyber, Terrorism, Hybrid Threats, Climate Change, Geopolitical Tensions.</p>' },
                        { type: 'text', content: '<h3>Parliamentary Reservation</h3><p>Armed deployments require Bundestag mandate (50% + 1 vote). Exception: Danger in delay (rescue).</p>' }
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
                    id: 'decision_making',
                    title: 'Decision Making Process',
                    cards: [
                        { type: 'text', content: '<h3>Check: Situation Change?</h3><p>Has the situation changed fundamentally from the original order?</p>' },
                        { type: 'checklist', title: 'Handlungsbedarf? (Need for Action)', items: ['Is mission success threatened?', 'Is there an opportunity to seize initiative?', 'Can I still act within my intent?'] },
                        { type: 'text', content: '<h3>Process</h3><p>Analyze Situation -> Weigh Factors -> Decide -> Issue Order.</p>' }
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
