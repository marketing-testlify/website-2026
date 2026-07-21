# Testlify Website — Claude Code Handoff

## What this is
A complete, high-fidelity design prototype of the Testlify marketing site (~176 pages) built as **Design Components** (`*.dc.html`). These are **design references**, not production code — recreate them in the target codebase's environment (Next.js/React is the intended target, per the project name) using its established patterns. The HTML captures exact layout, copy, colors, typography, and interactions to implement pixel-perfectly.

## The `.dc.html` format (read first)
Each page is a single self-contained file with three parts inside an `<x-dc>` element:
1. **Template** — HTML markup between `<x-dc>` and `</x-dc>`. Uses `{{ dotted.path }}` holes, `<sc-for list as>` loops, `<sc-if value>` conditionals, and `<dc-import name="X">` to mount sibling `X.dc.html` components.
2. **Logic** — a `<script type="text/x-dc">` block: `class Component extends DCLogic { renderVals() { return {...} } }` (plain JS, React-class-like lifecycle, no render()).
3. **Styling** — **inline styles only**, plus a `<helmet><style>` block for `@font-face`, `@keyframes`, resets, and page-scoped classes.

`support.js` is the tiny runtime that renders these; it's referenced by every file. For a real codebase you will **discard `support.js` and the `.dc.html` wrapper** and translate each template + logic class into a real component (JSX/TSX). The markup, class names, inline styles, and copy are what you port.

## Architecture
- **Shared chrome** is imported, never copied: `component-site-header.dc.html` (sticky mega-menu; `overlay="true"` only on home) and `component-site-footer.dc.html`. Also shared: `component-cta-band`, `component-cta-button`, `component-faq`, `component-security-section`, `component-testimonials`, `component-testimonials-cards`, `component-recognition`, `component-use-case-card`.
- **Data-driven templates** render many pages from one layout via a `pageData` prop: `solution-{usecase,industry,company,testtype}-template`, `product-features-detail`, `customer-success-stories-detail`, `hr-glossary-detail`, `hiring-guides-detail`, `hr-tools-detail`, `alternatives-detail`, `resource-list-template`, `resource-detail-template`. Instances are thin wrappers passing a data object.
- **Flat file structure** — every file sits at project root (DC imports resolve as same-folder siblings). File names match the live URL slug.
- **`sitemap.dc.html`** is the map of every page with build/audit status chips — start there for the full inventory.

## Design tokens
- **Font:** Poppins only (400–800).
- **Colors:** coral/primary `#F23F44` (hover `#DC3137`/`#A91E23`; bright `#FF7A52`/`#F76A6E`); ink `#1A1014`; body `#5A4B4E`/`#6C5A5D`; muted `#8A7A7D`; faint `#A9999C`/`#C9B9BC`; rose tints `#FFF8F7`/`#FFF0EF`/`#FCE0DE`; sand band `#FBF3EE`; warm borders `#F0E2E3`/`#EADDDE`; footer/dark bg `#1A1014`; success green `#1FA463`.
- **Type:** eyebrow ~13px/700/.16em uppercase + coral period; H1 ~54px/800/-1.4px with the key keyword(s) colored coral; H2 ~30–42px/800; body 15–18px/1.55–1.64. `text-wrap:balance` on headings, `pretty` on body.
- **Layout:** section padding 96px top+bottom; content max-width 1240px; gutters 28px. Card radius 16–20px, pills full. **Warm shadow** `0 16px 30px rgba(110,11,14,.10)` — never cool grey.
- **Background rhythm:** white → sand `#FBF3EE` → rose/accent → white… never two adjacent sections sharing a bg.
- **Motion:** rAF scroll-reveal (rise 28px + fade, staggered); button sheen on hover; card hover = lift + warm shadow (no-link cards) or running conic-gradient border (whole-card links).
- **Bullets:** coral line-check `.chk` (no badge) is canonical; the badge variant `.chki` uses a green `#1FA463` check.
- **No emoji.** SVG line icons only (1.8–2px stroke).

## CTAs & voice
Primary "Try for free →" (coral, no credit card); secondary "Book a demo"; tertiary "See how it works". Voice: confident challenger, lead with the pain then the solution, specific numbers over adjectives, "you" not "our users". Verified stats only (see any built page for the canonical set).

## How to work
1. Open `sitemap.dc.html` for the page inventory and status.
2. For any page, read its `.dc.html`: the template is the DOM, `renderVals()` supplies the data/handlers, inline styles + helmet are the CSS.
3. Recreate in the target framework using its component library, preserving exact copy, tokens, layout, and interactions.
4. Reuse shared components as real shared components; render template-family pages from data.
