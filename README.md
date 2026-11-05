# weLabs · Managed Dokan Marketplace

Landing page for **Managed Dokan Marketplace**, built in the weLabs design system.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The page (Managed Dokan Marketplace). Self-contained: open it in a browser. The weLabs nav and footer are unchanged. |
| `split-variations.html` + `split-variations/` | 10 layouts for the "You Focus On / We Handle" section (Variation 7 is live). |
| `pricing-variations.html` + `pricing-variations/` | 10 layouts for the pricing section (Variation 2 is live). |
| `price-card-variations.html` + `price-card-variations/` | 10 layouts for the price card (Variation 7 is live). |
| `src/managed-dokan-body.src.js` | Readable source of the page body script (markup, styles, GSAP / ScrollTrigger / Lenis motion). Image data is left as `__IMG_*__` placeholders. |

## Notes

- Fonts (Manrope, Geist, IBM Plex Mono) load from welabs.dev; GSAP, ScrollTrigger and Lenis load from a CDN. Offline, the page still shows everything, without motion.
- Black Friday pricing shows until Dec 1, 2026, then switches to standard pricing automatically.
- Layout: 1496px container at 1920px, 144px between sections on every device.

## Live

https://welabs-managed-dokan.vercel.app
