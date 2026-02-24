// Game Engine: Sorts items chronologically or logically

export function renderSortingGame(container, config, onComplete) {
    let items = [...config.items];
    // Shuffle items
    items.sort(() => Math.random() - 0.5);

    let html = `
        <button class="btn btn-secondary" onclick="window.location.hash='#practice'" style="margin-bottom: 20px;">← Zurück</button>
        <h2>${config.title}</h2>
        <p>${config.description}</p>
        <div class="sorting-container" style="margin-top: 20px;">
    `;

    items.forEach(item => {
        html += `
            <div class="draggable-item card" draggable="true" data-id="${item.id}" style="cursor: grab; margin-bottom: 10px;">
                <span style="margin-right: 10px;">☰</span> ${item.text}
            </div>
        `;
    });

    html += `</div><button id="check-sort-btn" class="btn">Überprüfen</button><div id="game-feedback"></div>`;

    container.innerHTML = html;

    // Drag & Drop Logic
    const draggables = container.querySelectorAll('.draggable-item');
    const sortContainer = container.querySelector('.sorting-container');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    sortContainer.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(sortContainer, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            sortContainer.appendChild(draggable);
        } else {
            sortContainer.insertBefore(draggable, afterElement);
        }
    });

    // Check Logic
    container.querySelector('#check-sort-btn').addEventListener('click', () => {
        const currentOrder = [...container.querySelectorAll('.draggable-item')].map(el => parseInt(el.dataset.id));
        const correctOrder = config.items.sort((a, b) => a.order - b.order).map(i => i.id);

        const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
        const feedback = container.querySelector('#game-feedback');

        if (isCorrect) {
            feedback.innerHTML = '<h3 class="text-success pulse">Korrekt! Mission Erfüllt.</h3>';
            onComplete(config.xpReward);
        } else {
            feedback.innerHTML = '<h3 class="text-danger shake">Reihenfolge falsch. Neuer Versuch.</h3>';
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
