import { getState } from '../state.js';
import { getModule } from '../data.js';

export function renderDashboard(container) {
    const state = getState();
    const nextLevelXP = state.level * 100;
    const progress = (state.xp / nextLevelXP) * 100;

    // Ranks based on level
    const ranks = ['Schütze', 'Gefreiter', 'Obergefreiter', 'Hauptgefreiter', 'Stabsgefreiter', 'Oberstabsgefreiter', 'Korporal', 'Stabskorporal', 'Unteroffizier', 'Stabsunteroffizier', 'Feldwebel', 'Oberfeldwebel', 'Hauptfeldwebel', 'Stabsfeldwebel', 'Oberstabsfeldwebel', 'Leutnant', 'Oberleutnant', 'Hauptmann', 'Major', 'Oberstleutnant', 'Oberst', 'Brigadegeneral', 'Generalmajor', 'Generalleutnant', 'General'];
    const currentRank = ranks[Math.min(state.level - 1, ranks.length - 1)]; 

    container.innerHTML = `
        <div class="card text-center pulse-border">
            <h2>Dienstgrad: ${currentRank}</h2>
            <div class="progress-container">
                <div class="progress-fill" style="width: ${Math.min(progress, 100)}%"></div>
            </div>
            <p class="text-dim mt-2">${state.xp} / ${nextLevelXP} XP</p>
            <div class="streak-badge" style="margin-top: 10px; font-size: 1.2rem;">
                🔥 Streak: ${state.streak} Tage
            </div>
        </div>

        <h3>Aktuelle Mission</h3>
        <div class="card" onclick="window.location.hash='#modules'">
            <h4>Ausbildung fortsetzen</h4>
            <p>Wählen Sie ein Modul, um Ihre Offiziersausbildung fortzusetzen.</p>
            <button class="btn">Zum Briefing</button>
        </div>

        <h3>Tagesbefehl</h3>
        <div class="card">
            <h4>Tipp des Tages</h4>
            <p>"Führen mit Auftrag erfordert Vertrauen. Vertrauen Sie Ihren Untergebenen!"</p>
        </div>
    `;
}
