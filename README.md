# Genico Tech Solutions — Website

A creative, fully animated multi-page website for Genico Tech Solutions (industrial automation trader & supplier, Pune). Built with plain **HTML, CSS and JavaScript** — no build step, no framework.

## How to run
Open **`index.html`** in any browser. That's it.

## Pages
- `index.html` — Home (animated hero, category strip, featured products, why-us, CTA)
- `products.html` — Full catalogue with category filter chips + animated product reveals
- `product-detail.html` — Detail view, loaded via `?id=` when a product is clicked (specs, related products, "Ask the Assistant")
- `about.html` — Company profile, key facts, mission & vision
- `contact.html` — Contact details, inquiry form (with product dropdown) and map

## Folder structure
```
genico-website/
├── index.html / products.html / product-detail.html / about.html / contact.html
├── css/   → style.css (theme), animations.css, chatbot.css
└── js/    → data.js (all content), main.js, products.js, product-detail.js, chatbot.js
```

## Theme
White background + blue (`#1565d8`) + dark blue (`#0a2a66`). Fonts: Poppins (headings) + Inter (body).

## Chatbot
A floating assistant (bottom-right) on every page:
- **Our Products / About Company / Contact Us** quick buttons return in-chat messages.
- Type a product name or model (e.g. `MS300`, `FX3U`, `HGKN43K`) → it pops that product's image, specs and a link to the detail page.
- Clicking a product can also push its info into the chat via the "Ask the Assistant" button on detail pages.

## Editing content
**All products, company info and contact details live in `js/data.js`** — edit there to add/change products. Replace the `img:` placeholder URLs (and the logo `placehold.co` URLs in the HTML) with your real images later.
