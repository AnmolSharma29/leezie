# Leezie — Marketing & Brand Studio

A vintage-themed, dark, one-page React + Tailwind website with scroll animations powered by Framer Motion.

## Stack
- React 18 + Vite
- Tailwind CSS 3
- Framer Motion (animations)
- Google Fonts: **Jim Nightshade** (display), **Google Sans Flex** (body)

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── App.jsx                # composes all sections + global overlays
├── main.jsx               # React entry
├── index.css              # Tailwind + grain/vignette/vintage utilities
└── components/
    ├── Header.jsx         # Logo, nav, Connect button (mobile menu included)
    ├── Banner.jsx         # Hero, animated lettering, marquee, scroll cue
    ├── About.jsx          # Editorial 2-column with vintage photo frame
    ├── WhatWeDo.jsx       # Six service cards with hover micro-interactions
    ├── Testimonials.jsx   # Postcard-style testimonials
    ├── Contact.jsx        # Direct lines + correspondence form (mailto)
    └── Footer.jsx         # Giant wordmark + contact summary
```

## Replacing the logo
Drop a file named `logo.png` into the `public/` folder. The header will pick it up automatically. Until then, the wordmark "Leezie" in Jim Nightshade is shown as a fallback.

## Design notes
- **Palette**: dark brown (`#1a0e08`, `#2a1810`, `#3d2817`) with cream and gold (`#c9a559`) accents.
- **Vintage texture**: a subtle SVG noise overlay + soft vignette is mounted globally in `App.jsx`.
- **Photography**: all images come from Unsplash and are filtered with a `sepia/contrast/saturate` treatment via the `.vintage-img` class so they match the palette automatically.
- **Animations**: most sections use `whileInView` triggers with custom easing `[0.22, 1, 0.36, 1]` (a refined "vintage" ease). The hero word "Leezie" reveals letter-by-letter; marquees in the hero and services section run continuously.

## Contact (configured)
- Email: contact@leezie.in
- Phone: +91 9324837154
- Instagram: @leezie
