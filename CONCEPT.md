# Gamification & UX Concept

## Philosophy: "Tactical Engagement"
The goal is to transform dry military theory into an engaging "Mission Briefing" experience.
Users are not "students"; they are "officer candidates" on a mission to master the content.

## Core Loops
1.  **Mission Briefing (Learning):** Read bite-sized content (Units).
2.  **Field Exercise (Interaction):** Answer inline questions or complete drag-and-drop tasks to verify comprehension.
3.  **After Action Review (Quiz):** Prove mastery to earn Rank points.
4.  **Rank Up (Progression):** Gain XP to unlock new ranks and badges.

## Gamification Systems

### 1. XP & Rank System
*   **XP Sources:**
    *   Complete a Unit: +50 XP
    *   Correct Checkpoint Answer: +20 XP
    *   Perfect Quiz Score: +100 XP Bonus
    *   Daily Streak: +10 XP * Streak Days
*   **Ranks (Military Progression):**
    *   LVL 1: Schütze (0 XP)
    *   LVL 2: Gefreiter (100 XP)
    *   LVL 3: Obergefreiter (300 XP)
    *   LVL 4: Unteroffizier (600 XP)
    *   LVL 5: Feldwebel (1000 XP)
    *   LVL 6: Leutnant (1500 XP)
    *   LVL 7: Hauptmann (2200 XP)
    *   LVL 8: Major (3000 XP)
    *   LVL 9: Oberst (4000 XP)
    *   LVL 10: General (5000 XP)

### 2. Badges & Achievements
*   **"Legal Eagle":** Complete Module "Befehlsrecht" with >90% accuracy.
*   **"Master Tactician":** Complete Module "Führung im Einsatz" with >90% accuracy.
*   **"Iron Will":** Maintain a 7-day streak.
*   **"First Blood":** Complete the first quiz perfectly.

### 3. Visual Feedback
*   **Progress Bars:** Circular progress for overall rank, linear for module completion.
*   **Micro-Interactions:** Buttons have tactile feedback (scale/color shift). Correct answers flash green; wrong answers shake red.
*   **Confetti/Particles:** On Level Up or Perfect Score.

## UX Flow (Mobile First)
1.  **Dashboard (Home):**
    *   Top: Current Rank, XP Bar, Streak Counter.
    *   Center: "Next Mission" (Main Call-to-Action).
    *   Bottom: Module Selection Grid (Locked/Unlocked status).
2.  **Module View:**
    *   List of Units (Chapters).
    *   Visual progress indicator per unit.
3.  **Unit View (The "Mission"):**
    *   Content Chunking: Text is broken into small cards.
    *   Interactive Elements: Tap to reveal definitions, Swipe to clear cards.
    *   "Checkpoint": A question blocks progress until answered.
4.  **Quiz View:**
    *   Timed questions (optional tension).
    *   Immediate feedback.

## Theme: "Tactical HUD"
*   **Colors:** Dark Slate Grey (`#1a1a1a`), Neon Green (`#00ff00`) for success, Amber (`#ffcc00`) for warnings, Cyan (`#00ccff`) for information.
*   **Typography:** Monospace headers (Courier New/Roboto Mono) for "Classified Document" feel, Sans-Serif body (Inter/Roboto) for readability.
