# Design Spec: The Clinical Archive (Re.Match)

**Date**: 2026-03-20  
**Project**: Re.Match (Einherjar Endeavor)  
**Status**: Draft  
**Persona**: The Sovereign Architect  

## 1. Problem Statement
The current "Re.Match" intake system has a strong core identity but lacks professional execution. Critiques identify the "edgelord hacker" aesthetic as amateurish, which erodes trust for a system handling sensitive personal data. The form is a single, daunting list that creates high cognitive load and friction for users in "survival mode."

## 2. Objectives
*   **Elevate Trust**: Transition from a "hacker vibe" to a "high-end technical archive" aesthetic.
*   **Reduce Cognitive Load**: Implement a 4-step wizard to guide users through the intake protocol.
*   **Provide Social Proof**: Add a "Blueprint Ledger" section showing anonymized success stories.
*   **Achieve 10/10 Metrics**: Ensure 100% semantic HTML, accessibility (A11y), and performance optimization for GitHub Pages.
*   **Maintain Character**: Ensure the site feels authentic to the creator's "Valiant Investigator" persona without looking like "AI-slop."

## 3. Aesthetic & UI Strategy
*   **Style**: "Clinical Archive" — Sterile, precise, and authoritative.
*   **Palette**: 
    *   Background: Pure White (#ffffff)
    *   Text: Deep Slate / Charcoal (#1e293b)
    *   Accent: Sovereign Orange (#f97316) for primary actions and progress indicators.
*   **Typography**: 
    *   Headings: Bold Sans-Serif (All Caps, letter-spaced) for a "governmental report" feel.
    *   Body: High-readability Sans-Serif (Inter or System-UI).
    *   Data/Inputs: Courier New (Monospace) to maintain the "data-entry" heritage.
*   **Layout**: 12-column grid within a central 750px "Archive Frame." 1px borders and subtle "blueprint" grid accents.

## 4. Components & IA
### 4.1. The Blueprint Ledger
A scrollable horizontal bar at the top of the viewport.
*   **Content**: Anonymized data cards: "ALIAS: [GHOST_ID] | STATUS: MATCHED | [N] CLUSTERS FOUND."
*   **Interaction**: Auto-scroll with user pause capability.

### 4.2. The System Header
*   **Logo**: Minimalist interlocking "R/M" sigil.
*   **Brief**: A structured "System Summary" replacing the scattered pitch stanzas.
*   **Controls**: Persistent "TERMINATE SESSION [ESC]" button.

### 4.3. The Protocol Wizard (Form)
*   **Step 1: Initialization**: Identity & Demographics (Alias, Location).
*   **Step 2: Environmental Scan**: Trajectories (Housing, Health, Recovery).
*   **Step 3: Constraint Mapping**: Barriers (Legal, Documentation).
*   **Step 4: Objective Definition**: Goals & Priorities.
*   **Navigation**: "Previous" and "Continue" buttons with a "Sequence Map" progress indicator.

## 5. Technical Implementation
*   **Frontend**: Vanilla HTML5, CSS3 (Grid/Flexbox), and ES6+ JavaScript.
*   **Hosting**: GitHub Pages (EinherjarEndeavor.github.io).
*   **Form Handling**: PageClip (v1) integration.
*   **Accessibility**: ARIA roles, semantic tags, and keyboard-focusable controls.
*   **Validation**: Real-time client-side verification with "Protocol Cleared" visual feedback.

## 6. Privacy & Safety
*   **Copy**: "NO NAMES. NO TRACE. TOTAL PRIVACY."
*   **Emergency Exit**: ESC key wipes the form and redirects to neutral content (Weather).
*   **Alias Protocol**: Absolute enforcement of alphanumeric aliases over real names.

## 7. Testing & Validation
*   **Lighthouse**: Target 100/100 in Accessibility, SEO, and Best Practices.
*   **Functionality**: Test all 4 wizard steps, validation logic, and successful PageClip transmission.
*   **Responsiveness**: Mobile-first grid ensures the "Archive Frame" scales perfectly.
