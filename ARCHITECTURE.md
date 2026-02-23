# Technical Architecture

## Overview
The application is a lightweight, high-performance Single Page Application (SPA) built with Vanilla JavaScript (ES6 Modules) and CSS3 Variables. No external frameworks are used to maximize stability and speed within the constrained environment, ensuring 100% control over the DOM and state.

## Tech Stack
*   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
*   **State Management:** `localStorage` (Persists user progress across sessions)
*   **Routing:** Custom hash-based router (`#dashboard`, `#module/1`, `#unit/1/1`)
*   **Styling:** CSS Custom Properties (Variables) for theming, Flexbox/Grid for layout.
*   **Animations:** CSS Keyframes & Transitions for performant UI feedback.

## Directory Structure
```
/
├── index.html          # Entry point (App Shell)
├── src/
│   ├── css/
│   │   ├── style.css       # Core styles & Theme variables
│   │   ├── animations.css  # Gamification effects
│   ├── js/
│   │   ├── main.js         # Entry point & Router
│   │   ├── state.js        # User progress & Gamification logic
│   │   ├── data.js         # Content repository (JSON structure)
│   │   ├── components/     # UI Component renderers
│   │   │   ├── dashboard.js
│   │   │   ├── module-view.js
│   │   │   ├── unit-view.js
│   │   │   ├── quiz-view.js
│   │   │   ├── gamification.js # XP/Badge logic
```

## Core Modules

### 1. State Manager (`state.js`)
*   **Responsibilities:**
    *   Load/Save user profile from `localStorage`.
    *   Track XP, Level, Unlocked Modules.
    *   Handle "Level Up" events.
*   **Data Structure:**
    ```javascript
    const userState = {
        xp: 0,
        level: 1,
        streak: 0,
        completedUnits: ['module1_unit1'],
        badges: []
    };
    ```

### 2. Router (`main.js`)
*   **Responsibilities:**
    *   Listen to `hashchange` events.
    *   Clear the main view container.
    *   Invoke the appropriate Component renderer based on the route.

### 3. Content Repository (`data.js`)
*   **Responsibilities:**
    *   Store all curriculum text, definitions, and quiz questions.
    *   Provide helper functions to fetch modules by ID.

### 4. Component Renderers (`components/*.js`)
*   **Responsibilities:**
    *   Take data and state as input.
    *   Return HTML strings or DOM elements.
    *   Attach event listeners (click handlers for quizzes/navigation).

## Performance Considerations
*   **Lazy Loading:** Components are imported only when needed (dynamic imports optional, but standard modules suffice).
*   **Asset Optimization:** Minimal assets (SVG icons or CSS shapes).
*   **Reflow Minimization:** Batch DOM updates using `DocumentFragment`.
