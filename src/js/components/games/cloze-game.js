// Game Engine: Fill in the blanks (Cloze)

export function renderClozeGame(container, config, onComplete) {
    // Replace {1} with input fields
    let textHtml = config.text;
    config.blanks.forEach(b => {
        textHtml = textHtml.replace(`{${b.index}}`, `<input type="text" data-index="${b.index}" class="cloze-input" style="background: transparent; border: none; border-bottom: 2px solid var(--color-primary); color: white; width: 100px; text-align: center;">`);
    });

    let backHash = config.moduleId ? `#practice/${config.moduleId}` : '#practice';
    let html = `
        <button class="btn btn-secondary" onclick="window.location.hash='${backHash}'" style="margin-bottom: 20px;">← Zurück</button>
        <h2>${config.title}</h2>
        <p>${config.description}</p>
        <div class="card" style="line-height: 2.5rem; font-size: 1.2rem;">
            ${textHtml}
        </div>
        <button id="check-cloze-btn" class="btn">Überprüfen</button>
        <div id="game-feedback"></div>
    `;

    container.innerHTML = html;

    container.querySelector('#check-cloze-btn').addEventListener('click', () => {
        let correctCount = 0;
        const inputs = container.querySelectorAll('.cloze-input');

        inputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const blank = config.blanks.find(b => b.index === index);
            const val = input.value.trim().toLowerCase();

            if (val === blank.answer.toLowerCase()) {
                input.style.borderColor = 'var(--color-success)';
                correctCount++;
            } else {
                input.style.borderColor = 'var(--color-danger)';
            }
        });

        if (correctCount === config.blanks.length) {
            container.querySelector('#game-feedback').innerHTML = '<h3 class="text-success pulse">Vollständig!</h3>';
            onComplete(config.xpReward);
        } else {
            container.querySelector('#game-feedback').innerHTML = '<h3 class="text-warning">Nicht ganz. Überprüfe deine Eingaben.</h3>';
        }
    });
}
