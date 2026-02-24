import { getUnit } from '../data.js';
import { completeUnit, addXP } from '../state.js';
import { showXP, showLevelUp } from './gamification.js';

export function renderUnit(container, moduleId, unitId) {
    const unit = getUnit(moduleId, unitId);
    if (!unit) {
        container.innerHTML = `<p>Unit not found.</p>`;
        return;
    }

    let html = `
        <button class="btn btn-secondary" onclick="window.location.hash='#modules/${moduleId}'" style="margin-bottom: 20px;">
            ← Zurück zum Modul
        </button>
        <h2>${unit.title}</h2>
        <div id="unit-content">
            <!-- Cards will be rendered here dynamically -->
        </div>
        <div id="unit-controls" style="margin-top: 20px; display: flex; justify-content: space-between;">
            <button id="prev-btn" class="btn btn-secondary" style="width: 48%;">Zurück</button>
            <button id="next-btn" class="btn" style="width: 48%;">Weiter</button>
        </div>
    `;

    container.innerHTML = html;

    // State: Current Card Index
    let currentCardIndex = 0;
    let maxCardIndexReached = 0;
    let interactedCards = new Set(); // Track XP awards for interactions

    const contentDiv = document.getElementById('unit-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function renderCard(index) {
        if (index < 0 || index >= unit.cards.length) return;

        const card = unit.cards[index];

        // Final Quiz Logic: If it's a quiz, ensure it's the last card or treat it specially?
        // Current requirement: "am ende jedes Lernprozesses bekomme ich dann ein quiz"
        // The data structure allows mixing quizzes. We should ideally ensure the quiz is the last item.
        // For now, we render the card as is, but we could add a visual cue if it's the final card.

        let cardHtml = '';

        switch (card.type) {
            case 'text':
                cardHtml = `
                    <div class="card fade-in">
                        ${card.content}
                    </div>
                `;
                break;
            case 'checklist':
                cardHtml = `
                    <div class="card fade-in">
                        <h3>Checklist: ${card.title}</h3>
                        <ul>
                            ${card.items.map(item => `<li><input type="checkbox"> ${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
                break;
            case 'flashcard':
                cardHtml = `
                    <div class="card fade-in flashcard-container" style="perspective: 1000px; cursor: pointer;">
                        <div class="flashcard-inner" style="position: relative; width: 100%; height: 250px; text-align: center; transition: transform 0.6s; transform-style: preserve-3d;">
                            <div class="flashcard-front" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background-color: var(--color-panel); display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid var(--color-primary);">
                                <h3>${card.front}</h3>
                                <p class="text-dim" style="margin-top: 10px;">(Tippen zum Umdrehen)</p>
                            </div>
                            <div class="flashcard-back" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background-color: var(--color-panel); color: var(--color-text); transform: rotateY(180deg); display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid var(--color-secondary);">
                                <h3 style="color: var(--color-primary);">${card.back}</h3>
                                <div style="margin-top: 20px; display: flex; gap: 10px;">
                                    <button class="btn btn-secondary review-btn" data-status="known" style="margin: 0; padding: 5px 10px; font-size: 0.8rem; border-color: var(--color-success); color: var(--color-success);">Gewusst</button>
                                    <button class="btn btn-secondary review-btn" data-status="unknown" style="margin: 0; padding: 5px 10px; font-size: 0.8rem; border-color: var(--color-danger); color: var(--color-danger);">Nicht gewusst</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'quiz':
                cardHtml = `
                    <div class="card fade-in quiz-card">
                        <h3>Quick Check</h3>
                        <p>${card.question}</p>
                        <div class="options">
                            ${card.options.map((opt, i) => `
                                <button class="btn btn-secondary quiz-option" data-index="${i}" style="margin-top: 5px;">${opt}</button>
                            `).join('')}
                        </div>
                        <div id="quiz-feedback" class="mt-2 text-center"></div>
                    </div>
                `;
                break;
        }

        contentDiv.innerHTML = cardHtml;

        // Flashcard Event
        const flashcard = contentDiv.querySelector('.flashcard-container');
        if (flashcard) {
            flashcard.addEventListener('click', (e) => {
                // Prevent flip if clicking buttons
                if (e.target.classList.contains('review-btn')) return;

                const inner = flashcard.querySelector('.flashcard-inner');
                inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
            });

            // Review Buttons
            const reviewBtns = flashcard.querySelectorAll('.review-btn');
            reviewBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Stop flip
                    const status = btn.dataset.status;

                    if (status === 'known') {
                        showXP(10, btn);
                        addXP(10);
                        btn.parentElement.innerHTML = '<span class="text-success">Gespeichert: Gewusst</span>';
                    } else {
                        btn.parentElement.innerHTML = '<span class="text-warning">Gespeichert: Wiederholen</span>';
                    }

                    // Interaction tracking
                    if (!interactedCards.has(`flashcard-${index}`)) {
                        addXP(5);
                        interactedCards.add(`flashcard-${index}`);
                    }
                });
            });
        }

        // Quiz Event
        const options = contentDiv.querySelectorAll('.quiz-option');
        options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                // Disable all options
                options.forEach(o => o.disabled = true);

                const selected = parseInt(e.target.dataset.index);
                const feedback = document.getElementById('quiz-feedback');

                if (selected === card.answer) {
                    feedback.innerHTML = `<span class="text-success pulse">Correct! +20 XP</span>`;
                    e.target.style.backgroundColor = 'var(--color-primary)';
                    e.target.style.color = 'var(--color-bg)';

                    if (!interactedCards.has(`quiz-${index}`)) {
                        addXP(20);
                        showXP(20, e.target);
                        interactedCards.add(`quiz-${index}`);
                    }
                } else {
                    feedback.innerHTML = `<span class="text-danger shake">Incorrect. The right answer was: ${card.options[card.answer]}</span>`;
                    e.target.classList.add('shake');
                    setTimeout(() => e.target.classList.remove('shake'), 500);
                    // No XP for wrong answer
                }
            });
        });

        // Button Logic
        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === unit.cards.length - 1 ? 'Finish Mission' : 'Next';
    }

    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            renderCard(currentCardIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex < unit.cards.length - 1) {
            currentCardIndex++;
            renderCard(currentCardIndex);

            // Small XP for reading a NEW card
            if (currentCardIndex > maxCardIndexReached) {
                maxCardIndexReached = currentCardIndex;
                addXP(5);
            }
        } else {
            // Finish Unit
            const leveledUp = completeUnit(unit.id); // Also awards XP inside state

            // Wait for alert/modal
            setTimeout(() => {
                 alert("Mission Accomplished!");
                 window.location.hash = `#modules/${moduleId}`;
            }, 500);
        }
    });

    // Initial Render
    renderCard(0);
}
