// Visual Feedback System

export function showXP(amount, element) {
    const el = document.createElement('div');
    el.className = 'xp-float';
    el.textContent = `+${amount} XP`;

    // Position relative to the trigger element
    const rect = element.getBoundingClientRect();
    el.style.left = `${rect.left + rect.width / 2}px`;
    el.style.top = `${rect.top}px`;

    document.body.appendChild(el);

    // Remove after animation
    setTimeout(() => {
        el.remove();
    }, 1000);
}

export function showLevelUp(level) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '3000';
    modal.style.flexDirection = 'column';
    modal.style.animation = 'fadeIn 0.5s';

    const ranks = [
        'Schütze', 'Gefreiter', 'Obergefreiter', 'Hauptgefreiter', 'Stabsgefreiter', 'Oberstabsgefreiter', 'Korporal', 'Stabskorporal', 'Unteroffizier', 'Stabsunteroffizier',
        'Feldwebel', 'Oberfeldwebel', 'Hauptfeldwebel', 'Stabsfeldwebel', 'Oberstabsfeldwebel', 'Leutnant', 'Oberleutnant', 'Hauptmann', 'Stabshauptmann', 'Major', 'Oberstleutnant', 'Oberst', 'Brigadegeneral', 'Generalmajor', 'Generalleutnant', 'General'
    ];
    const rankTitle = ranks[Math.min(level - 1, ranks.length - 1)];

    modal.innerHTML = `
        <div class="card text-center pulse" style="border: 2px solid var(--color-primary); min-width: 300px;">
            <h1 style="color: var(--color-primary); font-size: 3rem;">BEFÖRDERUNG!</h1>
            <h2 style="color: var(--color-text);">Rang ${level}: ${rankTitle}</h2>
            <p style="margin: 20px 0;">Hervorragende Leistung!</p>
            <button class="btn" id="close-modal">Weitermachen</button>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('close-modal').addEventListener('click', () => {
        modal.remove();
    });
}

export function showBadge(name) {
    const toast = document.createElement('div');
    toast.className = 'badge-toast';
    toast.style.position = 'fixed';
    toast.style.top = '80px';
    toast.style.right = '20px';
    toast.style.backgroundColor = 'var(--color-warning)';
    toast.style.color = 'var(--color-bg)';
    toast.style.padding = '15px';
    toast.style.borderRadius = 'var(--border-radius)';
    toast.style.boxShadow = '0 0 10px rgba(255, 204, 0, 0.5)';
    toast.style.zIndex = '4000';
    toast.style.animation = 'slideInRight 0.5s ease-out';
    toast.style.fontWeight = 'bold';
    toast.innerHTML = `🏅 ABZEICHEN ERHALTEN:<br>${name}`;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}
