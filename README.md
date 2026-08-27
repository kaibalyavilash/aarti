# Aarti Steel — Next.js website

A publish-ready Next.js (App Router) rebuild of the Aarti Steel site. Real
per-page routing, shared Header/Footer/HeroSlider components, global CSS, and
per-page SEO metadata.

## Project structure

```
app/
  layout.js          Root layout — Header, Footer, global CSS, reveal observer
  page.js             Homepage (hero slider + content)
  about/page.js
  green-steel/page.js
  circularity/page.js
  products/page.js
  applications/page.js
  infrastructure/page.js
  csr/page.js
  contact/page.js
  globals.css          All site styling (design tokens, layout, responsive rules)
components/
  Header.js            Nav with dropdowns + mobile menu (React state)
  Footer.js
  HeroSlider.js         The homepage's 5-slide carousel (React state, autoplay)
  RevealObserver.js      Scroll-reveal animation (IntersectionObserver)
  RawSection.js          Renders each page's content block
content/
  *.js                  Each page's body content, already written and
                         browser-tested in the static version of this site
lib/
  nav.js                Single source of truth for nav items + dropdown links,
                         used by both the header and footer
public/
  aarti-logo.png         Logo, served as a real static asset (not base64)
```

## Running locally

This sandbox has no internet access, so `npm install` couldn't be run or
verified here — you'll need to do that on your own machine:

```bash
npm install
npm run dev       # http://localhost:3000
```

To build for production:

```bash
npm run build
npm start
```

## Deploying

This is a standard Next.js app, so it deploys as-is to:

- **Vercel** (recommended, zero config): push to a GitHub repo, import it at
  vercel.com, and it deploys automatically.
- **Netlify**: same idea, via the Next.js runtime plugin (enabled by default
  for Next.js projects).
- **Any Node host**: `npm run build && npm start` behind a reverse proxy.

## What carried over from the static build

The CSS (`app/globals.css`), page content, and copy are the exact versions
already tested in the browser (desktop/tablet/mobile, nav dropdowns, the
mobile menu fix, the circular-economy diagram fix, the bordered logo) — so
the visual result should match what you already reviewed. The two things
rebuilt as real React rather than carried over as static markup:

- **Header** — dropdown/mobile menu now driven by React state instead of
  vanilla DOM class toggling.
- **HeroSlider** — the 5-slide homepage carousel is a real controlled React
  component (`useState` + `setInterval`), not a DOM-driven slider.

Everything else (About, Green Steel, Circularity, Products, Applications,
Infrastructure, EHS & CSR, Contact) renders its already-tested HTML directly,
so page structure and styling are unchanged from the version you reviewed.

## Known gaps to close before going live

- **Contact form** is UI only — wire it to a backend or a form service
  (Formspree, Resend, etc.) to actually receive submissions.
- **Photo placeholders** — the icon tiles (Iron Making, Rolling Mill, EAF Bay,
  Testing Lab, etc.) are stylized placeholders; swap in real plant photography
  via the `public/` folder.
- **Fonts** currently load via a `@import` in `globals.css`. For better
  performance, consider switching to `next/font/google` for Oswald, Inter,
  and JetBrains Mono.
- **Images** use plain `<img>` tags rather than `next/image`, since the
  existing markup was carried over as-is. Swapping to `next/image` would add
  automatic optimization once real photography is in place.
