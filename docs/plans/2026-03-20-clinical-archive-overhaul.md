# Clinical Archive Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Re.Match intake site into a high-end, multi-step technical archive interface.

**Architecture:** A vanilla HTML/CSS/JS frontend using a multi-step wizard pattern. Layout is a 12-column grid with a minimalist "archive" aesthetic.

**Tech Stack:** Vanilla HTML5, CSS3 (Grid/Flexbox), ES6+ JavaScript, PageClip.

---

### Task 1: Foundation & Base Styles

**Files:**
- Modify: `style.css`
- Modify: `index.html`

- [ ] **Step 1: Reset CSS and define Typography/Palette**
Implement the new charcoal/white/orange palette and system-ui/monospace pairings.

- [ ] **Step 2: Implement the "Archive Frame" Grid**
Create the central 750px frame with 1px solid borders.

- [ ] **Step 3: Commit**
```bash
git add style.css index.html
git commit -m "style: implement foundation grid and clinical palette"
```

### Task 2: The Blueprint Ledger Component

**Files:**
- Modify: `index.html`
- Modify: `style.css`

- [ ] **Step 1: Scaffold Ledger HTML**
Add the horizontal ticker container at the top of the body.

- [ ] **Step 2: Style the Ledger**
Implement the scrolling animation and anonymized data cards.

- [ ] **Step 3: Commit**
```bash
git add index.html style.css
git commit -m "feat: add Blueprint Ledger social proof component"
```

### Task 3: The Protocol Wizard (Phase 1: HTML Restructure)

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Refactor form into sections**
Wrap the 4 current form parts into `<section class="wizard-step">` tags.

- [ ] **Step 2: Add Navigation Controls**
Add "Protocol Progress" indicator and "Previous/Continue" buttons to each section.

- [ ] **Step 3: Commit**
```bash
git add index.html
git commit -m "feat: restructure form into multi-step wizard sections"
```

### Task 4: Wizard Logic (JavaScript Integration)

**Files:**
- Modify: `script.js`
- Modify: `style.css`

- [ ] **Step 1: Implement Step Switching Logic**
Write the JS to toggle visibility between sections based on button clicks.

- [ ] **Step 2: Implement Progress Tracking**
Update the "Protocol Progress" indicator dynamically.

- [ ] **Step 3: Commit**
```bash
git add script.js style.css
git commit -m "feat: implement multi-step wizard navigation logic"
```

### Task 5: Technical Polish & Safety

**Files:**
- Modify: `index.html`
- Modify: `script.js`
- Modify: `style.css`

- [ ] **Step 1: Accessibility Overhaul**
Add ARIA labels, required indicators, and ensure full keyboard navigation.

- [ ] **Step 2: Refine the Terminate Session Control**
Update the ESC logic and styling to look like a system control.

- [ ] **Step 3: Final Aesthetic Pass**
Add the "Protocol Cleared" validation animations and 1px "blueprint" accents.

- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "polish: finalize clinical archive aesthetic and a11y"
```
