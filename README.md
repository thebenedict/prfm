# PRFM prototypes

Two buildless, static pages for local review:

- `vendor.html`: Seattle Transit Live’s acceptance page, demo checkout, setup requests, neighboring vendors, and poster sharing.
- `index.html`: searchable vendor directory and interactive indoor floor plan, category filters, photo view, and browser-local saved vendors.

## View locally

From this directory:

```sh
python3 -m http.server 4186 --bind 127.0.0.1
```

Open http://127.0.0.1:4186/vendor.html or http://127.0.0.1:4186/ . No install or build is needed. You can also open either HTML file directly; clipboard and native sharing work best over localhost.

## Prototype data

Booth geometry and numbering are manually traced from PRFM's supplied indoor floor plan v4.1. The original is in `assets/floorplan.png`. All vendor assignments are illustrative, including Seattle Transit Live at booth 45. Vendor names other than Seattle Transit Live are fictional. Sunday has sample data; Friday and Saturday show an unpublished-lineup state. No arrival times or booth dimensions are invented.

The payment form runs entirely in the browser. It makes no payment requests and never stores card details. Use “Use sample card details” to demonstrate it. A production checkout should replace these fields with a hosted payment provider integration. Setup requests and saved vendors use localStorage; payment plans and work-trades link to the crew’s email. Nothing is emailed.

## Assets and sources

- PRFM logo, December poster by The Planet Studio, and floor plan: supplied PRFM materials / punkrockfleamarketseattle.com. Used for this private concept review.
- Seattle Transit Live photograph: user's existing `0781-board-ferry-table-sunset-editorial.webp`.
- Representative category photographs: Unsplash image URLs in `data.js`. These are sample imagery, not actual vendor products; verify image permissions and replace with approved vendor images before publishing.
- Archivo Black and Assistant: Google Fonts, matching PRFM's current website. System fallbacks are provided.
- Event, acceptance, fee, deadline and request information: user's November 2026 acceptance email. Contact/address and brand styling: PRFM public website.

## Editing

`data.js` holds booth rectangles and sample vendors; `app.js` handles interaction; `styles.css` is shared. The project writing guide is in `AGENTS.md`, adapted from Tinker Badge.

Relative asset paths make these pages suitable for a GitHub Pages project subpath. Nothing has been published.

## Validation

JavaScript syntax checks passed. Checked 126 unique booth IDs, positive booth dimensions, the selected booth and neighbor references, unique HTML IDs, form-label targets, and local asset paths. Browser rendering and interaction QA is pending: the authoring session could not bind a local HTTP port, and browser policy blocked file URLs. Run the command above to enable browser review.
