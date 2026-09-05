# Tathya — Frontend

Verify before you believe or share. A static, vanilla HTML/CSS/JS
front end for the Tathya evidence-based claim verification product.

## Structure

```
TATHYA/
│
├── index.html                 Homepage
│
├── pages/
│   ├── about.html              Mission, developer info, contact form
│   ├── how-it-works.html       5-step process, truth spectrum, FAQ
│   └── login.html              Combined Log in / Sign up
│
├── css/
│   ├── style.css                Design tokens, base styles, components
│   └── responsive.css           Breakpoints (1080 / 860 / 600 / 380)
│
├── js/
│   ├── theme.js                 Light/dark mode, persisted + system-aware
│   ├── navbar.js                 Mobile sidebar, scroll state, focus trap
│   ├── faq.js                    Accessible accordion
│   ├── auth.js                   Login/Signup tab switching
│   └── main.js                   Scroll reveal + contact form validation
│
├── assets/
│   └── images/tathya-logo.png    Brand mark
│
└── README.md
```

## Design system

Theme variables live in `css/style.css` under `:root` (light) and
`[data-theme="dark"]`. Every color, surface, border and verdict tint
is a CSS custom property, so the whole site reflows between light
and dark instantly with no per-component overrides.

Verdict colors follow the standard convention: green (true), red
(false), amber (misleading), gray (unverified) — consistent across
the truth-spectrum cards on the homepage and How it works page.

## Behavior notes

- **Theme** persists to `localStorage` under `tathya-theme` and
  otherwise follows the OS preference. Applied inline in `<head>`
  before paint to avoid a flash of the wrong theme.
- **Mobile navigation**: the hamburger sits on the left of the
  navbar (next to the logo); it opens a left-sliding sidebar with
  a background overlay, focus trap, and Escape-to-close.
- **Auth**: a single "Signup / Login" entry point in the navbar
  leads to one page with a Log in / Sign up tab switch — no separate
  buttons. Forms are client-validated only; there is no backend
  wired up yet (submitting shows a local "not wired up" message).
- **Contact form** (About page) validates name, email, and a
  10-character-minimum message before showing a success state.
- All interactive elements are keyboard reachable with visible
  focus rings, and `prefers-reduced-motion` disables transitions.

## Running locally

This is a static site — no build step. Serve the folder with any
static server, e.g.:

```
npx serve .
```

or open `index.html` directly in a browser.
