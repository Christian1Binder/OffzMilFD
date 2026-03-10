import { getModule } from '../data.js?v=5';

export function renderTimeline(container) {
    // Manually curated dates from data.js based on the image's structure
    // Grouping into Eras to match the style
    const timelineData = [
        {
            era: "Frühe Neuzeit",
            colorClass: "timeline-line-era-1", // Yellow
            events: [
                {
                    year: "1618 - 1648",
                    title: "30-jähriger Krieg",
                    unitId: "fruehe_neuzeit",
                    cardIndex: 0
                },
                {
                    year: "1648",
                    title: "Westfälischer Frieden",
                    unitId: "fruehe_neuzeit",
                    cardIndex: 1
                },
                {
                    year: "1756 - 1763",
                    title: "Siebenjähriger Krieg",
                    unitId: "fruehe_neuzeit",
                    cardIndex: 2
                }
            ]
        },
        {
            era: "Napoleonische Ära",
            colorClass: "timeline-line-era-2", // Green
            events: [
                {
                    year: "1789 - 1799",
                    title: "Französische Revolution",
                    unitId: "napoleon_reformen",
                    cardIndex: 0
                },
                {
                    year: "1806 / 1807",
                    title: "Zusammenbruch Preußens",
                    unitId: "napoleon_reformen",
                    cardIndex: 1
                },
                {
                    year: "1813",
                    title: "Nationale Erhebung & Symbole",
                    unitId: "napoleon_reformen",
                    cardIndex: 3
                }
            ]
        },
        {
            era: "Restauration & Reichsgründung",
            colorClass: "timeline-line-era-3", // Light Blue
            events: [
                {
                    year: "1815",
                    title: "Wiener Kongress & Deutscher Bund",
                    unitId: "restauration_einigung",
                    cardIndex: 0
                },
                {
                    year: "1848",
                    title: "Revolution",
                    unitId: "restauration_einigung",
                    cardIndex: 2
                },
                {
                    year: "1871",
                    title: "Reichsgründung",
                    unitId: "restauration_einigung",
                    cardIndex: 2
                }
            ]
        },
        {
            era: "Weltkriege & Kalter Krieg",
            colorClass: "timeline-line-era-4", // Dark Blue
            events: [
                {
                    year: "1914 - 1918",
                    title: "1. Weltkrieg",
                    unitId: "ära_wilhelm",
                    cardIndex: 2
                },
                {
                    year: "1919",
                    title: "Versailles & Geheimrüstung",
                    unitId: "weimar_ns",
                    cardIndex: 0
                },
                {
                    year: "1939 - 1945",
                    title: "2. Weltkrieg",
                    unitId: "weimar_ns",
                    cardIndex: 1
                },
                {
                    year: "1949",
                    title: "NATO Gründung",
                    unitId: "kalter_krieg_ende",
                    cardIndex: 0
                },
                {
                    year: "1955 / 1956",
                    title: "Wiederbewaffnung BRD & DDR",
                    unitId: "kalter_krieg_ende",
                    cardIndex: 1
                },
                {
                    year: "1962",
                    title: "Kubakrise",
                    unitId: "kalter_krieg_ende",
                    cardIndex: 2
                },
                {
                    year: "1991",
                    title: "Ende UdSSR",
                    unitId: "kalter_krieg_ende",
                    cardIndex: 2
                }
            ]
        }
    ];

    container.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: var(--color-text);">Militärgeschichte Zeitstrahl</h2>
            <p style="color: var(--color-dim);">Klicken Sie auf ein Ereignis für Details.</p>
        </div>

        <div class="timeline-container">
            ${generateTimelineHTML(timelineData)}
        </div>

        <!-- Modal for details -->
        <div id="timelineModal" class="timeline-modal">
            <div class="timeline-modal-content">
                <span class="timeline-modal-close" id="closeTimelineModal">&times;</span>
                <div id="timelineModalBody" class="timeline-modal-body"></div>
            </div>
        </div>
    `;

    // Attach Event Listeners
    attachModalListeners();
}

function generateTimelineHTML(data) {
    let html = '';
    let isLeft = true;

    data.forEach(eraData => {
        // Era Title Header
        html += `
            <div class="era-title-container right-aligned">
                <div class="era-title">${eraData.era}</div>
            </div>
        `;

        // Era Wrapper with specific line color
        html += `<div class="timeline-wrapper ${eraData.colorClass}">`;

        eraData.events.forEach(event => {
            const sideClass = isLeft ? 'left' : 'right';
            isLeft = !isLeft; // Toggle side

            html += `
                <div class="timeline-item ${sideClass}">
                    <div class="timeline-content" data-unit="${event.unitId}" data-card="${event.cardIndex}">
                        <h3>${event.title}</h3>
                        <p>${event.year}</p>
                    </div>
                </div>
            `;
        });

        html += `</div>`;
    });

    return html;
}

function attachModalListeners() {
    const modal = document.getElementById('timelineModal');
    const closeBtn = document.getElementById('closeTimelineModal');
    const modalBody = document.getElementById('timelineModalBody');
    const items = document.querySelectorAll('.timeline-content');

    const milHistoryModule = getModule('milhistory');

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (!milHistoryModule) {
                modalBody.innerHTML = '<p>Modul "Militärgeschichte" nicht gefunden.</p>';
                modal.classList.add('show');
                return;
            }

            const unitId = item.getAttribute('data-unit');
            const cardIndex = parseInt(item.getAttribute('data-card'), 10);

            const unit = milHistoryModule.units.find(u => u.id === unitId);
            if (unit && unit.cards[cardIndex]) {
                const cardContent = unit.cards[cardIndex].content;
                modalBody.innerHTML = cardContent;
                modal.classList.add('show');
            } else {
                modalBody.innerHTML = '<p>Keine Details gefunden.</p>';
                modal.classList.add('show');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    const outsideClickListener = (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    };

    // Remove existing listener to prevent leaks if re-rendered
    if (window._timelineModalClickListener) {
        window.removeEventListener('click', window._timelineModalClickListener);
    }

    window._timelineModalClickListener = outsideClickListener;
    window.addEventListener('click', outsideClickListener);
}
