# Nova — USDT Card Landing Page

React + Vite + Tailwind CSS landing page for a USDT-backed digital & physical card concept, with simple client-side routing (`react-router-dom`).

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Structure

- `src/pages/Home.jsx` — the home page, assembled from section components
- `src/components/sections/` — one file per landing-page section (Hero, How It Works, Cashback, etc.)
- `src/components/` — shared pieces (Navbar, Footer, card mockup, animated counter, scroll-reveal)
- `src/pages/Legal.jsx` — one route (`/legal/:slug`) that renders placeholder Terms, Privacy, Risk Disclosure, Fees, About and Contact pages, linked from the footer

## Notes

- All rates, cashback and reward figures on the page are illustrative placeholders per the brief — replace with real, legally reviewed copy before launch.
- Colors, fonts and spacing live in `tailwind.config.js` and `src/index.css` if you want to retheme.
