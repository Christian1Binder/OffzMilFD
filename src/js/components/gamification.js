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
        'Schütze', 'Gefreiter', 'Obergefreiter', 'Unteroffizier',
        'Feldwebel', 'Leutnant', 'Hauptmann', 'Major', 'Oberst', 'General'
    ];
    const rankTitle = ranks[Math.min(level - 1, ranks.length - 1)];

    modal.innerHTML = `
        <div class="card text-center pulse" style="border: 2px solid var(--color-primary); min-width: 300px;">
            <h1 style="color: var(--color-primary); font-size: 3rem;">LEVEL UP!</h1>
            <h2 style="color: var(--color-text);">Rank ${level}: ${rankTitle}</h2>
            <p style="margin: 20px 0;">Outstanding performance, Officer!</p>
            <button class="btn" id="close-modal">Continue Mission</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Confetti effect could be added here

    document.getElementById('close-modal').addEventListener('click', () => {
        modal.remove();
    });
}
