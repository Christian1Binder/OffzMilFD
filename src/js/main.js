// Entry point for the application

import { initRouter } from './router.js';
import { initState } from './state.js';
import { loadData } from './data.js';
import { showLevelUp } from './components/gamification.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize State (Load from LocalStorage)
    await initState();

    // 2. Load Content Data
    await loadData();

    // 3. Setup Global Listeners
    window.addEventListener('taclearn:levelup', (e) => {
        showLevelUp(e.detail.level);
    });

    // 4. Initialize Router (Start the App)
    initRouter();

    console.log('TacLearn App Initialized');
});
