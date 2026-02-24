// Game Engine: Matches pairs (Drag & Drop)

export function renderDragDropGame(container, config, onComplete) {
    let sources = config.pairs.map(p => ({ id: p.source, text: p.source }));
    let targets = config.pairs.map(p => ({ id: p.source, text: p.target }));

    // Shuffle
    sources.sort(() => Math.random() - 0.5);
    targets.sort(() => Math.random() - 0.5);

    let html = `
        <button class="btn btn-secondary" onclick="window.location.hash='#practice'" style="margin-bottom: 20px;">← Zurück</button>
        <h2>${config.title}</h2>
        <p>${config.description}</p>
        <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 20px;">
            <div id="sources" style="width: 45%;">
    `;

    sources.forEach(item => {
        html += `<div class="draggable-source card" draggable="true" data-id="${item.id}" style="cursor: grab;">${item.text}</div>`;
    });

    html += `</div><div id="targets" style="width: 45%;">`;

    targets.forEach(item => {
        html += `<div class="drop-target card" data-id="${item.id}" style="border: 2px dashed var(--color-dim); min-height: 60px;">${item.text}</div>`;
    });

    html += `</div></div><div id="game-feedback"></div>`;

    container.innerHTML = html;

    const dragSources = container.querySelectorAll('.draggable-source');
    const dropTargets = container.querySelectorAll('.drop-target');
    let matches = 0;

    dragSources.forEach(src => {
        src.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', src.dataset.id);
            src.classList.add('dragging');
        });

        src.addEventListener('dragend', () => {
            src.classList.remove('dragging');
        });
    });

    dropTargets.forEach(tgt => {
        tgt.addEventListener('dragover', e => {
            e.preventDefault();
            tgt.style.borderColor = 'var(--color-primary)';
        });

        tgt.addEventListener('dragleave', () => {
            tgt.style.borderColor = 'var(--color-dim)';
        });

        tgt.addEventListener('drop', e => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');

            if (id === tgt.dataset.id) {
                // Correct Match
                tgt.style.borderColor = 'var(--color-success)';
                tgt.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
                tgt.innerHTML = `✅ ${tgt.innerText} = ${id}`;

                // Hide source
                const src = container.querySelector(`.draggable-source[data-id="${id}"]`);
                if (src) src.style.display = 'none';

                matches++;
                if (matches === config.pairs.length) {
                    container.querySelector('#game-feedback').innerHTML = '<h3 class="text-success pulse">Alle Ziele identifiziert!</h3>';
                    onComplete(config.xpReward);
                }
            } else {
                tgt.style.borderColor = 'var(--color-danger)';
                setTimeout(() => tgt.style.borderColor = 'var(--color-dim)', 500);
            }
        });
    });
}
