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
