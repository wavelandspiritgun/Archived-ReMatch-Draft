# Tar0tscepter Systems Lab

**Live Site:** [https://tar0tscepter.github.io/](https://tar0tscepter.github.io/)

## Project Overview

Tar0tscepter Systems Lab is the digital headquarters for **Re.Match**, an opportunity and resource matching engine designed specifically for individuals navigating the justice system, addiction recovery, and homelessness. 

The core philosophy of this application is constraint-based filtering: utilizing societal "red flags" (felonies, employment gaps, lack of documentation) as mathematical constraints to unlock highly specific, localized grants, employment, and resources.

## Technical Requirements (Next Chapter Admissions)

This project was built from the ground up to strictly adhere to the Next Chapter pre-course technical requirements:

*   **Strict Vanilla Constraints:** Built using exclusively pure HTML5, CSS3, and Vanilla JavaScript.
*   **Zero External Libraries:** No CSS frameworks (like Bootstrap or Tailwind) and no JS libraries (like React or jQuery) were used.
*   **Responsive Design:** Fully responsive layout that scales appropriately across mobile and desktop environments.
*   **Separation of Concerns:** Clean architecture utilizing distinct `.html`, `.css`, and `.js` files.

## Features

*   **Re.Match Intake Form:** A structured data collection system designed with cognitive load reduction in mind, enabling users to input their constraints for dossier generation.
*   **Accessible Design:** High-contrast aesthetic ("Systems Lab" theme) prioritizing readability and clear semantic HTML structure.
*   **Future Integration:** (Planned) Native web-audio recording for narrative intake.

## Version History

*   **v1.1.0** - Shifted narrative focus from "overcoming weakness" to "leveraging systemic constraints." Adjusted text to confidently present a tool that will help.
*   **v1.0.0** - Initial deployment. Established "Systems Lab" aesthetic, basic routing, and initial contact form structure.

## Learning Journey & Curriculum

As part of the development of this project, I am actively following open-source curriculums to understand the underlying architecture of the web. Below are the core concepts applied in this project and the corresponding open-source learning materials:

### 1. Document Structure & Semantic HTML
*The foundation of the site, ensuring accessibility and proper document flow.*
*   **Curriculum:** [freeCodeCamp - Basic HTML and HTML5](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5)
*   **Concepts Applied:** `<!DOCTYPE html>`, `<head>` metadata, viewport scaling for responsiveness, and semantic block elements (`<main>`, `<section>`, `<header>`).

### 2. Form Architecture & Data Collection
*Building the Re.Match intake system using native web standards.*
*   **Curriculum:** [MDN Web Docs - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
*   **Concepts Applied:** Implicit labeling (nesting `<input>` inside `<label>`), structural grouping (`<fieldset>` and `<legend>`), and native input validation (`type="number"`, `min`, `max`, `required`).

### 3. Data Transmission (Without Backend Servers)
*Handling form submissions securely without relying on external JavaScript libraries.*
*   **Curriculum:** [MDN Web Docs - Sending form data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
*   **Concepts Applied:** Utilizing the `<form action="...">` attribute, `method="POST"`, and `enctype="text/plain"` to interface directly with native client protocols (like `mailto:`).

### 4. Text Formatting & Semantic Emphasis
*Structuring the psychological copywriting for maximum readability and screen-reader accessibility.*
*   **Curriculum:** [freeCodeCamp - HTML Text Formatting](https://www.freecodecamp.org/news/html-formatting-tags-how-to-format-text-in-html/)
*   **Concepts Applied:** Differentiating between stylistic boldness (`<b>`) and semantic importance (`<strong>`), inline styling containers (`<span>`), and structured lists (`<ul>`, `<ol>`, `<li>`).

### 5. Documentation & Markdown
*Creating this README and documenting the project lifecycle.*
*   **Curriculum:** [GitHub Docs - Mastering Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
*   **Concepts Applied:** Version history tracking, header formatting, and hyperlink integration.

## Author

**Shane (tar0t)**
*In pursuit of systematic methods to help people.*


**Learning progression**
*   **v1.1.0** - Started using Codex and Gemini CLI for research and studying. Have an independent curriculum of open source materials for every component I work through.   
*   **v1.0.0** - Installed VS Code for the first time. Installed GitHub for the first time. Learned how to create the files, edit them, preview, and basic GitHub Push.