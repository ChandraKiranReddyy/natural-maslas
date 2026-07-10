# RV Natural — Website

Plain HTML/CSS/JS, no build step, no dependencies. Open this folder directly in **Cursor** (File → Open Folder) and edit any `.html` file — refresh the browser to see changes. No `npm install` needed.

## Pages

| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Hero, bestsellers, category strip, story teaser |
| Spices & Pantry | `spices.html` | 16 SKUs — Ground Spices (4) + Whole Spices (3) + Salts (2) + Baking & Pantry (7), filterable |
| Blends | `blends.html` | 13 SKUs — Vegetarian & All-Purpose (9) + Chicken & Meat (4), filterable |
| Our Story | `about.html` | Brand story, values, stats |
| Recipes | `recipes.html` | 6 recipes, each tagged with the SKUs used, expandable method |
| Blog | `blog.html` | 6 post previews |
| — sample article | `blog-post.html` | One full article, wired as a template for the rest |
| Contact | `contact.html` | Contact form (front-end only, see below), address, hours |

Shared files: `css/style.css` (all styling/design tokens), `js/script.js` (nav, scroll reveals, filters, cart badge, recipe/step accordions, contact form).

## Assets

- `assets/products/*.jpg` — real product photography, cropped and compressed from the source packaging photos.
- `assets/brand/logo.png` — the RV Natural logo, cropped from packaging with the background removed.
- Full-resolution source photos remain in `Images/` (not optimized for web — don't link to these directly).

## What's real vs. placeholder

- **Real:** layout, responsive design, animations, filtering, SKU data structure, product names, product photography, brand logo, copy voice.
- **Placeholder — replace before launch:**
  - Product prices (₹) — estimates by weight, not your actual MRPs
  - "Add to Cart" — only bumps the nav cart badge, no real cart or checkout. You'll need an actual e-commerce backend (Shopify, WooCommerce, Snipcart, or a custom cart) for real orders.
  - Contact form — `onsubmit` is intercepted in-browser only; nothing is actually sent. Wire it to a form backend (Formspree, Netlify Forms, your own endpoint) or a `mailto:` before launch.
  - Address / phone / email in `contact.html` and the footer — placeholder Bengaluru address, update with your real details.
  - Blog post content — written as example copy, not verified facts.
  - Brand story copy in `about.html` — written to match the packaging tone, not verified against the real company history. Update with your actual story.

## Editing tips (Cursor)

- All 8 pages share `css/style.css` — a design-token block at the top (`:root`) controls colors, fonts, spacing. Change a value once, it updates everywhere.
- SKU cards were generated from a Python script (not included) — if you want to add/remove/edit SKUs at scale rather than by hand, ask Claude to regenerate the `spices.html` / `blends.html` product grids from an updated list.
- Nav and footer are duplicated across all 8 pages (plain HTML, no templating). If you rename a page or add a new one, update the `<div class="nav-links">` block and footer links in every file.

## Hosting (free)

Static files, no server needed. Currently deployed on **GitHub Pages**. Cloudflare Pages and Netlify are also good free options if you switch later.
