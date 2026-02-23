const quizzes = {
    "militaergeschichte": [
        {
            question: "Wann begann der Erste Weltkrieg?",
            options: ["1912", "1914", "1918", "1939"],
            answer: 1
        },
        {
            question: "Wer war der preußische Heeresreformer?",
            options: ["Clausewitz", "Scharnhorst", "Gneisenau", "Alle genannten"],
            answer: 3
        }
    ],
    "politische_bildung": [
        {
            question: "Was ist das Grundgesetz?",
            options: ["Die Verfassung der BRD", "Ein einfaches Gesetz", "Eine EU-Verordnung", "Ein Bundeswehr-Erlass"],
            answer: 0
        },
        {
            question: "Wer ist der Oberbefehlshaber der Bundeswehr im Frieden?",
            options: ["Der Bundeskanzler", "Der Bundespräsident", "Der Verteidigungsminister", "Der Generalinspekteur"],
            answer: 2
        }
    ],
    "fuehrung_im_einsatz": [
        {
            question: "Was ist ein wesentliches Prinzip der Auftragstaktik?",
            options: ["Strikte Befolgung von Details", "Freiheit in der Durchführung", "Zentralisierte Kontrolle", "Vermeidung von Risiken"],
            answer: 1
        },
        {
            question: "Welche Führungsebene ist die niedrigste?",
            options: ["Taktisch", "Operativ", "Strategisch", "Politisch"],
            answer: 0
        }
    ],
    "befehlsrecht": [
        {
            question: "Wann ist ein Befehl unverbindlich?",
            options: ["Wenn er unangenehm ist", "Wenn er gegen die Menschenwürde verstößt", "Wenn er nachts gegeben wird", "Wenn er nicht schriftlich ist"],
            answer: 1
        },
        {
            question: "Wer darf Befehle erteilen?",
            options: ["Jeder Soldat", "Nur Offiziere", "Vorgesetzte", "Nur Generäle"],
            answer: 2
        }
    ],
    "taktik_ii": [
        {
            question: "Was ist das Ziel des Angriffs?",
            options: ["Das Gelände halten", "Den Feind zerschlagen", "Ausweichen", "Beobachten"],
            answer: 1
        },
        {
            question: "Welche Geländeform bietet Deckung?",
            options: ["Ebene", "Mulde", "Kuppe", "Offenes Feld"],
            answer: 1
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-quiz');
    const quizContainer = document.getElementById('quiz-container');

    if (startButton && quizContainer) {
        startButton.addEventListener('click', () => {
            const topic = quizContainer.getAttribute('data-topic');
            startQuiz(topic);
        });
    }
});

function startQuiz(topic) {
    const questions = quizzes[topic];
    const quizContent = document.getElementById('quiz-content');
    const startButton = document.getElementById('start-quiz');

    if (!questions) {
        quizContent.innerHTML = "<p>Kein Quiz für dieses Thema verfügbar.</p>";
        startButton.style.display = 'none';
        return;
    }

    let html = '';
    questions.forEach((q, index) => {
        html += `<div class="question">
            <p><strong>${index + 1}. ${q.question}</strong></p>
            <div class="options">`;

        q.options.forEach((opt, optIndex) => {
            html += `<label>
                <input type="radio" name="q${index}" value="${optIndex}"> ${opt}
            </label>`;
        });

        html += `</div></div>`;
    });

    html += `<button id="submit-quiz" onclick="submitQuiz('${topic}')">Absenden</button>`;

    quizContent.innerHTML = html;
    startButton.style.display = 'none';
}

function submitQuiz(topic) {
    const questions = quizzes[topic];
    let score = 0;
    let total = questions.length;
    let feedback = '';

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected) {
            if (parseInt(selected.value) === q.answer) {
                score++;
                feedback += `<p style="color: green">Frage ${index + 1}: Richtig</p>`;
            } else {
                feedback += `<p style="color: red">Frage ${index + 1}: Falsch (Richtige Antwort: ${q.options[q.answer]})</p>`;
            }
        } else {
            feedback += `<p style="color: orange">Frage ${index + 1}: Keine Antwort (Richtige Antwort: ${q.options[q.answer]})</p>`;
        }
    });

    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `<h3>Ergebnis: ${score} von ${total} richtig</h3>` + feedback;

    // Remove submit button
    const submitBtn = document.getElementById('submit-quiz');
    if(submitBtn) submitBtn.remove();

    document.getElementById('quiz-content').appendChild(resultDiv);

    // Add retry button
    const retryBtn = document.createElement('button');
    retryBtn.textContent = "Quiz wiederholen";
    retryBtn.id = "retry-quiz";
    retryBtn.onclick = () => startQuiz(topic);
    document.getElementById('quiz-content').appendChild(retryBtn);
}
