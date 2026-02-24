
export function renderCrosswordGame(container, config, onComplete) {
    const { rows, cols, words } = config.grid;

    // Create Grid Map (2D array representation for rendering)
    const gridMap = Array(rows).fill(null).map(() => Array(cols).fill(null));
    const cellMap = {}; // Key: "x,y", Value: { char, number, words: [] }

    // Populate Grid Logic
    words.forEach(word => {
        const chars = word.answer.toUpperCase().split('');
        let x = word.x;
        let y = word.y;

        chars.forEach((char, index) => {
            const key = `${x},${y}`;
            if (!cellMap[key]) {
                cellMap[key] = { char, number: null, words: [] };
            } else if (cellMap[key].char !== char) {
                console.error(`Conflict at ${x},${y}: Expected ${cellMap[key].char}, found ${char}`);
            }

            // Assign number to start of word
            if (index === 0) {
                cellMap[key].number = word.id;
            }

            cellMap[key].words.push(word);

            if (word.direction === 'across') x++;
            else y++;
        });
    });

    let backHash = config.moduleId ? `#practice/${config.moduleId}` : '#practice';

    const html = `
        <button class="btn btn-secondary" onclick="window.location.hash='${backHash}'" style="margin-bottom: 20px;">← Zurück</button>
        <h2>${config.title}</h2>
        <p>${config.description}</p>

        <div class="crossword-layout">
            <div class="crossword-grid" style="
                display: grid;
                grid-template-columns: repeat(${cols}, 30px);
                grid-template-rows: repeat(${rows}, 30px);
                gap: 2px;
                margin-bottom: 20px;
            ">
                ${generateGridHTML(rows, cols, cellMap)}
            </div>

            <div class="crossword-clues">
                <div class="clue-column">
                    <h3>Waagerecht</h3>
                    <ul id="clues-across">
                        ${generateCluesHTML(words, 'across')}
                    </ul>
                </div>
                <div class="clue-column">
                    <h3>Senkrecht</h3>
                    <ul id="clues-down">
                        ${generateCluesHTML(words, 'down')}
                    </ul>
                </div>
            </div>
        </div>

        <button id="check-crossword-btn" class="btn">Überprüfen</button>
        <div id="game-feedback" style="margin-top: 10px;"></div>
    `;

    container.innerHTML = html;

    // --- Interaction Logic ---
    const inputs = container.querySelectorAll('.cw-cell input');

    // Navigation & Input
    inputs.forEach(input => {
        input.addEventListener('focus', (e) => {
             highlightClue(e.target.dataset.words);
        });

        input.addEventListener('input', (e) => {
            if (e.target.value.length > 1) e.target.value = e.target.value.slice(-1).toUpperCase();
            e.target.value = e.target.value.toUpperCase();

            // Auto-advance
            if (e.target.value) {
                // Determine direction (heuristic: try across first, then down)
                // A better approach requires tracking "current direction" state,
                // but for simplicity we can try to find next cell in current word context.
                // Here: simple coordinate based next step?
                // Let's rely on simple DOM order if possible, or coordinate lookup.
                const x = parseInt(e.target.dataset.x);
                const y = parseInt(e.target.dataset.y);
                // Try move right (Across)
                let next = container.querySelector(`input[data-x="${x+1}"][data-y="${y}"]`);
                if (!next) {
                    // Try move down (Down)
                    next = container.querySelector(`input[data-x="${x}"][data-y="${y+1}"]`);
                }
                if(next) next.focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value) {
                const x = parseInt(e.target.dataset.x);
                const y = parseInt(e.target.dataset.y);
                 // Try move left
                let prev = container.querySelector(`input[data-x="${x-1}"][data-y="${y}"]`);
                if (!prev) {
                    // Try move up
                    prev = container.querySelector(`input[data-x="${x}"][data-y="${y-1}"]`);
                }
                if(prev) prev.focus();
            }
        });
    });

    // Validation
    container.querySelector('#check-crossword-btn').addEventListener('click', () => {
        let allCorrect = true;
        let filledCount = 0;

        inputs.forEach(input => {
            if (input.value) filledCount++;
            const correctChar = input.dataset.char;
            if (input.value.toUpperCase() !== correctChar) {
                allCorrect = false;
                input.classList.add('cw-error');
            } else {
                input.classList.remove('cw-error');
                input.classList.add('cw-correct');
            }
        });

        const feedback = container.querySelector('#game-feedback');
        if (allCorrect && filledCount === Object.keys(cellMap).length) {
            feedback.innerHTML = '<h3 class="text-success pulse">Hervorragend! Rätsel gelöst.</h3>';
            onComplete(config.xpReward);
        } else {
            feedback.innerHTML = '<h3 class="text-danger shake">Noch nicht ganz richtig. Überprüfe die rot markierten Felder.</h3>';
        }
    });

    function highlightClue(wordIds) {
        // Simple highlighting of associated clues
        container.querySelectorAll('.clue-item').forEach(el => el.classList.remove('active-clue'));
        if(wordIds) {
            const ids = wordIds.split(',');
            ids.forEach(id => {
                 const clue = container.querySelector(`.clue-item[data-id="${id}"]`);
                 if(clue) clue.classList.add('active-clue');
            });
        }
    }
}

function generateGridHTML(rows, cols, cellMap) {
    let html = '';
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const key = `${x},${y}`;
            const cell = cellMap[key];

            if (cell) {
                // Valid Cell
                const wordIds = cell.words.map(w => w.id).join(',');
                html += `
                    <div class="cw-cell" style="position: relative; width: 30px; height: 30px;">
                        ${cell.number ? `<span class="cw-number">${cell.number}</span>` : ''}
                        <input type="text" maxlength="1"
                            data-x="${x}" data-y="${y}"
                            data-char="${cell.char}"
                            data-words="${wordIds}"
                            class="cw-input"
                        >
                    </div>
                `;
            } else {
                // Empty/Black Cell
                html += `<div class="cw-block"></div>`;
            }
        }
    }
    return html;
}

function generateCluesHTML(words, direction) {
    return words
        .filter(w => w.direction === direction)
        .map(w => `<li class="clue-item" data-id="${w.id}"><strong>${w.id}.</strong> ${w.clue}</li>`)
        .join('');
}
