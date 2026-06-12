# 🧮 Calculator App

### Built by Abhishek Prasad Gupta | InternSpark Frontend Developer Internship — Task 2

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

A fully functional, beautifully designed calculator web app built with pure HTML, CSS, and JavaScript — no frameworks, no libraries.

---

## 🌐 Live Demo

👉 **[View Live App](https://abhishekprasadgupta21.github.io/InternSpark-Abhishek/task2-calculator/)**

---

## 📸 Preview

| Dark Theme                                      | Light Theme                                    |
| ----------------------------------------------- | ---------------------------------------------- |
| Calculator body is light/off-white on dark page | Calculator body is dark charcoal on light page |

---

## ✨ Features

### Core Calculator

- ➕ Addition, ➖ Subtraction, ✖️ Multiplication, ➗ Division
- 🔢 Decimal number support with up to **15 decimal places** precision
- 🔣 Smart **( )** bracket button — intelligently opens or closes brackets
- **%** Percentage button — converts current value instantly
- ⌫ Backspace button — delete last character
- **AC** — All Clear, resets calculator

### Smart UX Features

- 🌙 / ☀️ **Dark / Light theme toggle** — inverted design (dark page + light calc, or light page + dark calc)
- 📋 **Calculation History** — press the History button to see last 10 calculations right inside the display
- ⎘ **Copy result** button — one tap copies result to clipboard with toast notification
- ⌨️ **Full keyboard support** — type numbers, operators, Enter for equals, Escape to clear, Backspace to delete
- 📜 **Scrollable display** — long decimal results scroll horizontally
- 🎬 **Count-up animation** — results animate smoothly when calculated
- 📱 **Fully responsive** — works on mobile, tablet, and desktop

---

## 🗂️ Project Structure

```
task2-calculator/
│
├── index.html        ← Everything: HTML + CSS + JavaScript in one file
├── manifest.json     ← PWA manifest (makes it installable as an app)
├── sw.js             ← Service Worker (enables offline use)
├── icon-192.png      ← App icon (192x192)
├── icon-512.png      ← App icon (512x512)
└── README.md         ← You are here
```

> **Note:** The entire calculator logic lives inside `index.html` as a single self-contained file — no external dependencies required.

---

## 🚀 How to Run Locally

### Option 1 — Just open in browser (simplest)

1. Download or clone this repository
2. Double-click `index.html`
3. Opens directly in your browser ✅

### Option 2 — Using VS Code + Live Server

1. Open VS Code
2. `File > Open Folder` → select the `task2-calculator` folder
3. Install the **Live Server** extension (by Ritwick Dey)
4. Right-click `index.html` → **Open with Live Server**
5. Opens at `http://127.0.0.1:5500` ✅

### Option 3 — Clone via Git

```bash
git clone https://github.com/AbhishekPrasadGupta21/InternSpark-Abhishek.git
# Open index.html in your browser
```

---

## 📱 Install as a Mobile App (PWA)

This calculator is a **Progressive Web App** — it can be installed on your phone like a native app.

1. Open the live demo link in **Chrome on Android**
2. Chrome shows a banner: **"Add to Home Screen"** — tap it
3. The calculator installs with its own icon on your home screen
4. Works **offline** too — no internet needed after install ✅

---

## ⌨️ Keyboard Shortcuts

| Key            | Action                |
| -------------- | --------------------- |
| `0–9`          | Enter digits          |
| `+ - * /`      | Operators             |
| `.`            | Decimal point         |
| `( )`          | Brackets              |
| `Enter` or `=` | Calculate result      |
| `Backspace`    | Delete last character |
| `Escape`       | Clear all (AC)        |

---

## 🧠 How It Works

### Button Layout

```
┌─────────────────────────┐
│        Display          │
├─────────────────────────┤
│ AC   ⌫   %    ÷        │
│ 7    8    9    ×        │
│ 4    5    6    −        │
│ 1    2    3    +        │
│ Hist  .  ( )   =        │
└─────────────────────────┘
```

### Smart Bracket Logic

The `( )` button is intelligent:

- If no unclosed brackets exist → inserts `(`
- If there's an unclosed bracket → inserts `)`
- Button label updates dynamically to show what the next press will do

### History Inside Display

Pressing the **History** button flips the display area to show the last 10 calculations with a smooth animation. Tap any result to load it back into the calculator.

### Theme System

Uses CSS custom properties (`--variables`) for the entire color scheme. Toggling the theme swaps the variable values — the calculator body goes **light on dark** or **dark on light** for a unique inverted feel.

---

## 🛠️ Technologies Used

| Technology                | Purpose                                      |
| ------------------------- | -------------------------------------------- |
| **HTML5**                 | Structure and layout                         |
| **CSS3**                  | Styling, themes, animations, grid layout     |
| **Vanilla JavaScript**    | Calculator logic, DOM manipulation           |
| **CSS Custom Properties** | Dark/light theme system                      |
| **CSS Grid**              | Button layout                                |
| **Web Animations API**    | Count-up animation (`requestAnimationFrame`) |
| **Clipboard API**         | Copy result feature                          |
| **Service Worker API**    | Offline PWA support                          |
| **Web App Manifest**      | Installable PWA                              |
| **Google Fonts**          | DM Sans + DM Mono typography                 |

---

## 💡 Key JavaScript Functions

| Function            | What it does                           |
| ------------------- | -------------------------------------- |
| `appendValue(val)`  | Adds digit/operator to display         |
| `calculate()`       | Evaluates expression, saves to history |
| `clearDisplay()`    | Resets everything to 0                 |
| `backspace()`       | Removes last character                 |
| `smartBracket()`    | Intelligently opens or closes bracket  |
| `percent()`         | Divides current value by 100           |
| `toggleHistory()`   | Flips display between calc and history |
| `animateTo(target)` | Smooth count-up animation on result    |
| `toggleTheme()`     | Switches dark/light theme              |
| `copyResult()`      | Copies display value to clipboard      |

---

## 🎯 What I Learned

- Structuring a complete project in a **single HTML file**
- Using **CSS custom properties** to build a theme system
- **CSS Grid** for responsive button layouts
- JavaScript **DOM manipulation** and event handling
- **requestAnimationFrame** for smooth animations
- **Clipboard API** and **Service Worker** for modern web features
- Making a site installable as a **PWA**
- **Git & GitHub** for version control and deployment

---

## 📋 InternSpark Task Details

- **Internship:** InternSpark Frontend Developer Intern
- **Candidate ID:** IS-2026-8822
- **Task:** Task 2 — GUI Calculator
- **Duration:** 2 Months (Starting 07/06/2026)

---

## 🙏 Acknowledgements

- [InternSpark](https://www.internspark.in) for the internship opportunity
- [Google Fonts](https://fonts.google.com) — DM Sans & DM Mono
- [Shields.io](https://shields.io) — README badges

---

_Made with ❤️ by Abhishek Prasad Gupta_
