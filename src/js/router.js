// Hash-based Router

import { renderDashboard } from './components/dashboard.js';
import { renderModules } from './components/module-view.js';
import { renderProfile } from './components/profile.js';
import { renderUnit } from './components/unit-view.js';
import { renderPractice } from './components/practice-view.js';

export function initRouter() {
    // Nav Button Listeners
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            window.location.hash = `#${target}`;
        });
    });

    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Initial load
}

function handleRoute() {
    const hash = window.location.hash || '#dashboard';
    const parts = hash.slice(1).split('/');
    const route = parts[0];
    const param1 = parts[1];
    const param2 = parts[2];

    hideAllViews();
    updateNav(route);

    switch (route) {
        case 'dashboard':
            renderDashboard(document.getElementById('dashboard-view'));
            showView('dashboard-view');
            break;
        case 'modules':
            renderModules(document.getElementById('module-view'));
            showView('module-view');
            break;
        case 'unit':
            renderUnit(document.getElementById('unit-view'), param1, param2);
            showView('unit-view');
            break;
        case 'practice':
            renderPractice(document.getElementById('practice-view'));
            showView('practice-view');
            break;
        case 'profile':
            renderProfile(document.getElementById('profile-view'));
            showView('profile-view');
            break;
        default:
            renderDashboard(document.getElementById('dashboard-view'));
            showView('dashboard-view');
    }
}

function hideAllViews() {
    document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
}

function showView(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
}

function updateNav(route) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.target === route) {
            btn.classList.add('active');
        }
    });
}
