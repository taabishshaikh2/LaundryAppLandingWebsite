# Dhobi Ghat — Landing Page

A simple, responsive marketing/informational landing page for Dhobi Ghat, a
doorstep laundry and garment-care service. Its only job is to explain the
service and send visitors to the separate ordering webapp — there's no
backend, no database, and no ordering logic here.

## Stack

- React 18 + Vite
- Tailwind CSS
- [lucide-react](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Editing content

Everything editable lives in one file: **`src/config/siteConfig.js`**

- `WEBAPP_URL` — the link every "Book a Service" button points to. Change
  this one line once you have the real webapp URL.
- `SERVICES` — the service cards (name, description, icon).
- `PROCESS_STEPS` — the 4-step "How it works" sequence.
- `WHY_US` — the trust/benefit list.
- `SHOWCASE_ITEMS` — the "more than a wash" examples.
- `FOOTER_LINKS` — footer nav and contact details.

Icon names reference the map in `src/components/icons.js`. If you add a
service or step with a new icon, import it from `lucide-react` in that file
and add it to the `ICONS` map.

## Structure

```
src/
  config/siteConfig.js   ← all editable content and the webapp URL
  components/
    Navbar.jsx
    Hero.jsx
    Services.jsx
    HowItWorks.jsx
    WhyDhobiGhat.jsx
    Showcase.jsx
    FinalCta.jsx
    Footer.jsx
    CtaButton.jsx        ← shared CTA link component
    icons.js             ← icon name → component map
  App.jsx
  index.css              ← Tailwind layers + small custom classes
```

## Design notes

- Palette: indigo/navy as the primary brand color (`ink`, `indigo`), a warm
  off-white background (`cotton`) evoking clean cotton fabric, and marigold
  as the single warm accent used for the primary CTA and small highlights.
- Type: Newsreader (serif) for headlines, Manrope (sans) for body text —
  loaded via Google Fonts in `index.html`.
- The service cards are shaped like garment care tags (a small punched
  "hole" at the top), and the "How it works" section hangs its 4 steps off
  a clothesline motif — vertical on mobile, horizontal on desktop.
- Motion is limited to one gentle, continuous sway on the hero illustration;
  everything else is static. `prefers-reduced-motion` is respected globally.
