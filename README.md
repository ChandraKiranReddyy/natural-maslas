# Natural Masalas — Website

Plain HTML/CSS/JS, no build step, no dependencies. Open this folder directly in **Cursor** (File → Open Folder) and edit any `.html` file — refresh the browser to see changes. No `npm install` needed.

## Pages

| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Hero, bestsellers, category strip, story teaser |
| Spices | `spices.html` | 26 SKUs — Whole Spices (12) + Ground Powders (14), filterable |
| Blends | `blends.html` | 26 SKUs — Blended Masalas (18) + Special Combos (8), filterable |
| Our Story | `about.html` | Brand story, values, stats |
| Recipes | `recipes.html` | 6 recipes, each tagged with the SKUs used, expandable method |
| Blog | `blog.html` | 6 post previews |
| — sample article | `blog-post.html` | One full article, wired as a template for the rest |
| Contact | `contact.html` | Contact form (front-end only, see below), address, hours |

Shared files: `css/style.css` (all styling/design tokens), `js/script.js` (nav, scroll reveals, filters, cart badge, recipe/step accordions, contact form).

## What's real vs. placeholder

- **Real:** layout, responsive design, animations, filtering, SKU data structure, copy voice.
- **Placeholder — replace before launch:**
  - Product prices (₹) — estimates by weight, not your actual MRPs
  - Product "photos" — these are illustrated jar/bowl SVGs generated in code, not real photography (I can't legally source and host stock photos on a commercial site). Swap the `.prod-media` SVG in each card for a real `<img>` once you have product shots.
  - "Add to Cart" — only bumps the nav cart badge, no real cart or checkout. You'll need an actual e-commerce backend (Shopify, WooCommerce, Snipcart, or a custom cart) for real orders.
  - Contact form — `onsubmit` is intercepted in-browser only; nothing is actually sent. Wire it to a form backend (Formspree, Netlify Forms, your own endpoint) or a `mailto:` before launch.
  - Address / phone / email in `contact.html` and the footer — all placeholder, update with real details.
  - Blog post content — written as example copy, not verified facts.

## Editing tips (Cursor)

- All 8 pages share `css/style.css` — a design-token block at the top (`:root`) controls colors, fonts, spacing. Change a value once, it updates everywhere.
- SKU cards were generated from a Python script (not included) — if you want to add/remove/edit SKUs at scale rather than by hand, ask Claude to regenerate the `spices.html` / `blends.html` product grids from an updated list.
- Nav and footer are duplicated across all 8 pages (plain HTML, no templating). If you rename a page or add a new one, update the `<div class="nav-links">` block and footer links in every file.

## Hosting (free)

Static files, no server needed. Recommended: **Cloudflare Pages** (unlimited free bandwidth) — drag this whole folder into the Cloudflare dashboard under Workers & Pages → Create → Pages → Upload assets. Netlify Drop (app.netlify.com/drop) works too for the fastest first deploy.
