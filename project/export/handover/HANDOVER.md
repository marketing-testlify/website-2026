# Testlify Website — Design Handover

**For:** UX Lead continuing the page build
**Status:** 4 pages + 2 shared components complete. Foundation + system established. Remaining pages scoped below.
**Last updated:** June 2026

---

## 1. What this is

High-fidelity **design references built in HTML** — not production code to ship. Each file is a self-contained prototype showing the intended look, motion, copy and behaviour. The job for whoever picks this up is to **keep building the remaining pages in this same system** (and, separately, the eng team rebuilds it all in Testlify's real React/Next stack — see §9).

Everything here shares one design language, one set of tokens, and — importantly — **one header and one footer component**, so the chrome never drifts page to page.

**Fidelity:** final. Colours, type, spacing, copy and interactions are all intentional. Treat hex/px values as spec.

---

## 2. File map

```
handover/
├── HANDOVER.md                       ← this document
├── support.js                        ← prototype runtime (DO NOT SHIP — preview only)
│
│   PAGES (built)
├── Testlify Home v3.dc.html          ← homepage (primary deliverable)
├── Product - AI Resume Screener.dc.html   ← product page (gold-standard template)
├── Test Library.dc.html              ← filterable test catalogue (3,184+ tests)
├── Section Templates.dc.html         ← library of spare/optional sections for reuse
│
│   SHARED COMPONENTS (single source of truth)
├── Site Header.dc.html               ← ribbon + mega-menu nav + mobile drawer
├── Site Footer.dc.html               ← global footer
│
└── brand/                            ← logo assets (pages use a text wordmark today)
    ├── testlify-logo-main.png
    ├── testlify-logo-white.png
    └── testlify-logo-white-redline.svg
```

The full vector brand kit (SVG / PNG / PDF, all variants + favicons) lives in the working project at `uploads/Final Logo Files-…/` if you need source files.

---

## 3. How to preview

Open any `.dc.html` in a browser with `support.js` sitting **next to it** (it already is in this folder). All photographic/logo imagery loads from remote `https://testlify.com/…` URLs, so you need an internet connection for images to appear. No build step, no server.

---

## 4. Architecture — read this before editing

### The component model
These are **Design Components ("DC")**. Each `.dc.html` is a small template + a logic class, rendered by `support.js` (an in-house React-based templating runtime). You'll see:

- `<helmet>` — head stuff: fonts, `<style>` block, scripts. Mounts first.
- The markup between `<x-dc>…</x-dc>` — the template. Holes look like `{{ value }}`; loops are `<sc-for>`, conditionals `<sc-if>`.
- `<dc-import name="Site Header" …>` — mounts a sibling component (this is how pages pull in the shared header/footer).
- A `<script type="text/x-dc">` block at the bottom — the `class Component extends DCLogic` logic.

You don't need to master the runtime to keep building — copy an existing page as a starting point and edit copy/sections.

### Shared header & footer — the important part
**`Site Header.dc.html` and `Site Footer.dc.html` are the single source of truth for site chrome.** Every page imports them rather than copying markup. Change the nav once → it changes everywhere.

Drop them on any new page like this (inside the template, header right after `</helmet>`, footer at the end):

```html
<dc-import name="Site Header"
    announcement="Your page-specific ribbon line"
    announcement-cta="Book a demo"
    home-href="Testlify Home v3.dc.html"
    hint-size="100%,110px"></dc-import>

  … your page sections …

<dc-import name="Site Footer"
    home-href="Testlify Home v3.dc.html"
    hint-size="100%,560px"></dc-import>
```

**Header props** (all optional, sensible defaults): `announcement`, `announcement-cta`, `announcement-href`, `home-href`, `login-href`, `cta-href`, `cta-label`, `contact-href`, `overlay`.
- `overlay="true"` → transparent-over-hero, solidifies on scroll (used on the homepage). Omit/`false` → solid sticky header (used on Product, Test Library — the right default for content pages).
- **Only `announcement` is really meant to change per page.**

**Footer props:** `home-href`.

### Cross-page links resolve automatically
Both components contain logic so that an in-page `#anchor` (e.g. `#integrations`) that **doesn't exist on the current page** auto-redirects to the homepage's version of that section. So mega-menu links work from every page without per-page wiring. Keep `home-href` pointed at the homepage and it just works.

---

## 5. Design tokens

### Colour
| Role | Hex |
|---|---|
| Coral / primary (Testlify red) | `#F23F44` |
| Coral deep (hover, gradient stop) | `#A91E23` / `#DC3137` |
| Coral bright (gradient / rays) | `#FF7A52` / `#F76A6E` |
| Ink (headings) | `#1A1014` |
| Body text | `#5A4B4E` / `#6C5A5D` |
| Muted (eyebrows, meta) | `#8A7A7D` / `#7C6A6D` |
| Faint (captions, dividers) | `#A9999C` / `#C9B9BC` |
| Rose tint surfaces | `#FFF8F7`, `#FFF0EF`, `#FCE0DE`, `#FBE4E5` |
| Sand surface (alt band) | `#FBF3EE` |
| Warm borders / hairlines | `#F0E2E3`, `#EADDDE`, `#F2E3E4` |
| White base | `#FFFFFF` |
| Footer ink | `#1A1014` (bg), `#A9999C` (links) |

**Difficulty tags (Test Library):** Beginner `#1B7F4B` on `#E8F6EE` · Intermediate `#B5740F` on `#FFF3E0` · Advanced `#D23B40` on `#FDE7E7`.

**Section background rhythm:** no two adjacent sections share a background. Cycle: white `#FFF` → sand `#FBF3EE` → soft rose-gradient accent. Keep this alternation if you reorder or add sections.

### Typography — Poppins (one family, weights 400/500/600/700/800)
- **Section eyebrow:** ~13px, weight 700, `letter-spacing:.16em`, UPPERCASE, colour `#8A7A7D` (or coral), **followed by a coral period `.`** — signature detail, keep it on every section label.
- **H1 hero:** up to ~54px desktop, weight 800, `letter-spacing:-1.4px`; clamps on mobile.
- **H2 section:** ~30–42px, weight 800, `letter-spacing:-.8px…-1.3px`.
- **Body:** 15–18px, `line-height:1.55–1.64`, colour `#5A4B4E`.

### Spacing
- Section vertical padding: **96px** top & bottom (symmetric) for content sections; hero taller to clear the fixed header.
- Content max-width **1240px**, centred, **28px** gutters.
- Radius: cards 16–20px · tiles/inputs 12–15px · pills full.
- Card shadow: warm, e.g. `0 16px 30px rgba(110,11,14,.10)`.

### Motion
- **Scroll-reveal:** elements rise `28px` + fade in on scroll, staggered (`data-delay` 0.06–0.32s). On short viewports anything above the fold reveals immediately (don't gate the hero behind scroll).
- **Scroll progress bar:** 3px coral gradient, top, fills with scroll.
- **Button sheen** on hover; **subtle 3D card tilt** toward cursor.
- **No emoji** anywhere — use inline SVG line icons (1.8–2px stroke).

---

## 6. Pages built — status & contents

### Homepage — `Testlify Home v3.dc.html` ✅
Full marketing flow: hero (with **dark-globe ↔ light-rays ↔ dark-rays** backdrop toggle) → "watch it build" pipeline → AI ranked-shortlist → tabbed product demo (AI screener / Test library / Video interview, each with looping motion graphics) → testimonial carousel → proof vs résumés → use-case grid → 100+ ATS integrations → security badges → global stats band → G2 awards → FAQ accordion → manifesto + final CTA. Imports shared header (overlay mode) + footer.

### Product page — `Product - AI Resume Screener.dc.html` ✅
The **gold-standard product template** — copy this to build the other product/feature pages. Solid sticky header, hero, feature storytelling, proof, CTA. Page-specific ribbon line passed via the `announcement` prop.

### Test Library — `Test Library.dc.html` ✅
Filterable catalogue modelled on testlify.com/test-library. Hero with live search + popular chips + stats strip; **12 real category filters**; difficulty segmented control (Beginner/Intermediate/Advanced); live keyword search; 48 representative test cards (type badge, difficulty, description, question count, duration); "request a test" band; dark CTA band. Cards link to `Test Detail.dc.html` (**not yet built — see §7**).

### Section Templates — `Section Templates.dc.html` ✅
A holding page of spare sections lifted off the homepage (kept lean), available to reassemble into future pages. Same tokens. Linked from the Resources mega-menu.

---

## 7. What's remaining (roadmap)

Built so far: **homepage + 1 product page + test library + the component system.** From the master brief and the 18-content-type sitemap, the remaining templates, in suggested priority:

1. **Test Detail page** (`Test Detail.dc.html`) — *next obvious one; Test Library cards already link to it.* Model on testlify.com/test-library/attention-to-detail-textual-test: what it measures, skills covered, sample questions, who it's for, SME/validation note, related tests, FAQ, CTA.
2. **Comparison page** ("Testlify vs X") — highest SEO leverage. Reference: Adaface.
3. **Integrations** — directory + detail page. Reference: Merge, Checkr.
4. **Pricing page.** Reference: TestGorilla.
5. **Use-case / solution page** (by role / by industry). Reference: Workable.
6. **Customer success story** + index. Reference: Eightfold.
7. **Blog post + index**, **Glossary term + index** (HR / Tech), **Job-description templates** — SEO content templates.

Each should get a quick competitor-reference pass before building (the brief lists references per type). **Build each on the shared header/footer + tokens above** — don't re-roll chrome.

### How to start a new page
1. Duplicate `Product - AI Resume Screener.dc.html` (closest blank-ish template) or `Test Library.dc.html` (if it needs filtering/data).
2. Swap the body sections; keep the two `<dc-import>` chrome lines.
3. Set the page's `announcement` ribbon line.
4. Use the eyebrow-with-coral-dot pattern, 96px section padding, the background rhythm, reveal-on-scroll, SVG icons.
5. Wire any new top-level destination into the header/footer mega-menu (edit `Site Header.dc.html` once).

---

## 8. Interactions to preserve
Scroll progress bar · reveal-on-scroll (staggered) · hero backdrop toggle (globe/rays, both locked to equal height so toggling never shifts layout) · draggable globe · animated light rays · demo tabs cross-fade with per-tab looping graphics · testimonial carousel advances exactly one slide · FAQ accordion · mega-menus on hover/focus with keyboard states · button sheen · card tilt. Responsive ≤900px: grids collapse to 1 col, nav → hamburger drawer, headline clamps, 5-col grids reflow; touch targets ≥44px.

---

## 9. For the engineering rebuild
`support.js` is a **prototype runtime only — do not ship it.** Recreate these designs in Testlify's real front-end (React/Next + your component library + design tokens), reusing established patterns. Where this doc gives exact hex/px, match it; where it describes motion, reproduce the effect with your animation approach (Framer Motion / CSS). Host the currently hot-linked `testlify.com/…` imagery in your own asset pipeline.

**Stateful pieces a real build needs:** `heroBackdropMode` ('globe' | 'rays' | 'darkrays'), `activeDemoTab`, `testimonialIndex`, `openFaq`, globe drag-rotation; Test Library: `query` + `categoryFilter` + `difficultyFilter`.

---

## 10. Assets
- **Imagery & logos:** remote `https://testlify.com/wp-content/uploads/…` (portraits, ATS logos, security/G2 badges). Re-host in production.
- **Brand wordmark:** pages currently render a text wordmark "Testlify." with a coral dot. Swap in `brand/` logo files (or your canonical brand assets) for production.
- **Icons:** inline SVG line icons throughout — no emoji.
- **Font:** Poppins (Google Fonts).
