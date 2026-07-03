# Testlify — Project Memory

Full design system: `handover/Testlify Design System.md` (read it for detail). Condensed rules below — apply to ALL Testlify pages/components, current and future.

## Product & domain
Testlify = AI-native, skills-based pre-hire assessment platform. Replaces resume screening / gut-feel hiring with verified skill proof. One-liner: "Testlify helps hiring teams stop guessing and start proving who can actually do the job."

## Personas (design to the right one per page)
- **Champion / primary — TA Manager / Recruiter** (50–2,000 employees). Pain: drowning in resumes, phone screens, gut-call hires. Wants to feel "this makes my job easier and makes me look smarter." Language: time saved, easier screening, better shortlists, candidate experience. → homepage, features, test library, product, blog, comparison.
- **Economic Buyer / secondary — HR Director / VP People / CPO / CEO** (200–10,000+). Pain: justifying spend, compliance risk, ROI, standardizing hiring. Wants "defensible, scalable, worth the cost." Language: ROI, EEOC compliance, audit trail, cost per hire, quality of hire, scalability, security certs. → **PRICING**, security/compliance, enterprise, ROI customer stories, comparison.
- **Pricing page lead persona = the Economic Buyer.** Transparency is the hero message.

## Voice & tone
Confident challenger. Lead with the pain, then the solution. Specific > general ("93% less phone screening", not "significant savings"). Active short sentences. "You", not "our users". No empty adjectives (powerful/robust/cutting-edge). Numbers anchor credibility — never invent stats.
- Headline formula: [painful truth] / [outcome] / [proof point].
- Eyebrow: SHORT UPPERCASE + **coral period** (e.g. `PRICING.`) — brand signature, never omit.
- CTAs: primary "Try for free →" / "Start free →" (no credit card); secondary "Book a demo"; tertiary "See how it works".

## Positioning vs TestGorilla (imply, never name)
"3,500+ tests" (10x), "No annual contract — pay per candidate", "100+ ATS integrations on every paid plan", "AI video, audio AND chat interviews — one platform".

## Verified stats ONLY (never invent)
3,500+ validated tests · 4,500+ job roles · 50+ industries · 1,500+ hiring teams · 50,000+ recruiters · 5M+ candidates assessed · 100+ native ATS integrations · 16+ languages (9 candidate UI) · 45+ coding languages · 13+ question formats · 30 min typical assessment · **4.7 on G2** · 6x recruiter efficiency · 55% less time-to-hire · 94% candidate satisfaction · up to 75% less screening · founded 2021 · 100+ team · backed by SHRM Labs, Google for Startups, Microsoft for Startups, NVIDIA Inception. Compliance: SOC 2 Type II, ISO 27001, GDPR, CCPA, EEOC-defensible. Use real customer names/quotes from the full doc — never generic placeholders.

## Design tokens (spec)
- Font: **Poppins only** (400–800).
- Coral/primary `#F23F44`; hover `#DC3137`/`#A91E23`; bright `#FF7A52`/`#F76A6E`. Ink `#1A1014`. Body `#5A4B4E`/`#6C5A5D`. Muted `#8A7A7D`. Faint `#A9999C`/`#C9B9BC`. Rose tints `#FFF8F7`/`#FFF0EF`/`#FCE0DE`. Sand band `#FBF3EE`. Warm borders `#F0E2E3`/`#EADDDE`. Footer bg `#1A1014`.
- Eyebrow ~13px/700/.16em/UPPERCASE + coral period. H1 ~54px/800/-1.4px. H2 ~30–42px/800. Body 15–18px/1.55–1.64.
- Section padding 96px top+bottom; content max-width 1240px; gutters 28px. Card radius 16–20px; pills full. **Card shadow warm**: `0 16px 30px rgba(110,11,14,.10)` — never cool grey.
- **Background rhythm (never break):** white → sand `#FBF3EE` → rose/accent → white… no two adjacent sections share a bg.
- Motion: scroll-reveal (rise 28px + fade, staggered, above-fold reveals immediately) — use the rAF `data-reveal`/animateReveal mechanism the other pages use; button sheen on hover; card tilt. NOTE: pure CSS reveal transitions/animations gated by a class are unreliable in this runtime — drive reveal with rAF JS.
- **No emoji, ever.** SVG line icons only (1.8–2px stroke).

## Consistency rules (apply to every page)
- **Every new page must match the existing site** — theme/tokens (Poppins, coral system, background rhythm, warm shadows), UI patterns (buttons, cards, eyebrows, sections), and brand voice/tone for all copy (see Voice & tone above). A new page should look and read like it was always part of the site.
- **Reuse before you build.** Always check `Section Templates`, the gold-standard `Product - AI Resume Screener`, and other built pages FIRST — if an existing section/component (hero, split feature, stat band, FAQ, CTA, logo strip, etc.) can accommodate the content, adapt it rather than authoring a fresh layout. Only build new when nothing fits.
- **Hero buttons must be consistent across pages** — same primary/secondary pairing, same styling, same hover/interaction (coral primary `.btn-primary` + sheen, ghost secondary `.btn-ghost`; hover = translateY(-2px) + warm shadow). Match the gold-standard `Product - AI Resume Screener` hero exactly; don't invent new button treatments per page.

## Architecture
DC files import shared chrome — `<dc-import name="Site Header" …>` + `<dc-import name="Site Footer" …>`; never copy chrome. `overlay="true"` header only on homepage; all other pages solid sticky (default). Only `announcement` changes per page.
- Helmet `<style>` is GLOBAL across all DCs on the page — avoid generic class names that collide with Site Header/Footer (e.g. `.plist`, `.psub` collided). Prefix page-specific classes.

Built (don't rebuild): Testlify Home v3, Product - AI Resume Screener (gold-standard template), Test Library, Section Templates, Site Header, Site Footer, Pricing, AI Resume Screener (faithful recreation of live /ai-resume-screener/), product-testlify-ai (faithful recreation of live /ai-powered-talent-assessment-platform/).

## File naming & structure convention (ALL files flat at root — folders break DC imports)
DC imports resolve as same-folder siblings (`./<name>.dc.html`, name can't hold a path), and the preview serves under a `/…/serve/` prefix so root-absolute links fail. So every DC stays FLAT at project root; group is encoded as a **`page-<group>-<name>` filename prefix**, all lowercase-hyphenated (URL-friendly):
- `page-index` — homepage. Standalone pages keep bare `page-`: `page-pricing`, `page-test-library`, `page-test-detail`.
- `page-product-*` — product pages: `page-product-testlify-ai`, `page-product-skill-assessments`, `page-product-ai-resume-screener` (standalone screener), `page-product-video-interviewing`, `page-product-integrations`, `page-product-platform` (multi-product hub / gold-standard).
- `page-solution-*` — `page-solution-index` (Solutions hub). Solution sub-pages are built from the `template-solution-details-*` templates.
- `page-resource-*` — `page-resource-index`, `page-resource-blog`, `page-resource-blog-article`.
- `page-company-*` — `page-company-about`, `page-company-careers`, `page-company-customers`, `page-company-trust` (security), `page-company-legal`.
- `component-*` — shared imported components: `component-site-header`, `component-site-footer`, `component-cta-button`, `component-faq`, `component-security-section`, `component-use-case-card`.
- `template-*` — reusable scaffolds instantiated during dev (carry example content): `template-section-templates`, `template-solution-details-{use-case,industry,company,test-type}`, `template-resource-index` (filterable list, from blog layout), `template-resource-detail` (article/reading layout), `template-tool` (working calculator — Cost-per-hire example; duplicate + swap inputs/formula/copy for the other calculators).
When renaming, rewrite every `dc-import name="…"` and every `<a href>`/`home-href` (encoded AND raw, both quote styles) in one pass, then delete old files. `export/` = clean developer handoff folder (all DC files + support.js + brand/ + handover/ + CLAUDE.md; omits screenshots/backups/research/uploads/logos).

## Mega-menu wiring (component-site-header)
- **Product** = 7 main pages, each sub-feature is an on-page `#section`: Testlify AI→page-product-testlify-ai, Skill assessments→page-product-skill-assessments, AI resume screener→page-product-ai-resume-screener, Video interviewing→page-product-video-interviewing, ATS integrations→page-product-integrations, Science behind tests→page-product-science, Live product demo→page-product-live-demo. (`PMAP` in renderVals maps group id→page; `PROD` fallback→page-product-platform.)
- **Solutions** = 4 category tabs (use case / industry / company size / test type); every item links to that category's TEMPLATE for reuse (`template-solution-details-{use-case,industry,company,test-type}`). Hub = page-solution-index.
- **Resources** = list items→`template-resource-index`, HR tools & calculators→`template-tool`, Blog→page-resource-blog (+page-resource-blog-article), FAQ→component-faq, Test Library→page-test-library, Customers→page-company-customers, Integrations→page-product-integrations, Trust→page-company-trust, About→page-company-about, Careers→page-company-careers.

## Still pending (real content build)
page-product-{skill-assessments,video-interviewing,science,live-demo} are retitled clones (real hero + FAQ where done) but still carry the source page's body sections — need real body copy + sub-features as on-page `#section`s. Solution/resource/tool templates carry example content until instantiated. Still to build: remaining live industries/use-cases/test-types/company + resource items (instantiate from templates with real copy fetched from testlify.com).

## Card hover conventions (memorize — apply to every card, all pages)
- **Gold standard lives on the homepage + pricing page** (user hand-built these). Before building any hover, scan those.
- **Cards WITHOUT a link → lift + shadow.** Rest: white bg, `1px solid #F2E6E7` border, NO resting shadow (flat). Hover: `transform:translateY(-4px); border-color:#FBD0D1; box-shadow:0 16px 34px rgba(110,11,14,.10)`. Transition: `transform .3s cubic-bezier(.2,.7,.3,1), border-color .3s, box-shadow .3s`. (This is the homepage Security Section `.ss-tile` hover — the canonical non-link card hover.)
- **Cards WITH a whole-card link → running conic-gradient border** (NOT lift). Recipe from Pricing `.pcard`: `@property --bang{syntax:"<angle>";initial-value:0deg;inherits:false;}` + `@keyframes runborder{to{--bang:360deg;}}` + a `::before` with `padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg)` masked with `-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0` and `.card:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}`.
- Shadows are ALWAYS warm brown `rgba(110,11,14,…)`, never red `rgba(242,63,68,…)` and never cool grey.

## Gotchas learned this session
- **Reveal vs hover conflict:** the `.reveal` rAF mechanism sets inline `transform:none` on completion, and inline styles override CSS `:hover{transform:…}` — so a card that is BOTH `.reveal` and hover-lift will never lift. Fix: put `.reveal` on the CONTAINER (grid/row), not on each hover card. (Existing groups like Security `.ss-grid`, atsgrid, val3 already reveal via container.)
- **CTA Button height matching:** `icon="play"` renders a 30px `.cta-play` circle that makes the button ~7px taller than an arrow/none button → mismatched pairs. To keep the play icon AND match heights, override on the page: `.ctabtn .cta-play{width:24px!important;height:24px!important;}` and give the borderless variants a transparent border `.ctabtn.v-primary,.ctabtn.v-light{border:1.5px solid transparent!important;}` so both share the same box (→ both 55px at `sz-md`).
- **Reuse before building (reinforced):** for a live-page recreation, pull the site's own section — Security = `<dc-import name="Security Section" eyebrow heading sub>`; Integration grid = homepage `.intg-grid`/`.intg-tile` centered layout (full-color logos, "View all integrations →" text link, NOT a split with buttons). Adapt homepage `data-reveal` markup to this page's `.reveal` class so it animates.
- **Trust/logo marquee** (`Trusted by 1,500+ talent teams worldwide` + scrolling wordmarks) is HOMEPAGE-ONLY — it reads as a hero extension there. Don't add it to interior product pages.
- **Don't duplicate the footer CTA:** the Site Footer already contains the "Replace gut instinct with verified skills" CTA — do NOT add a standalone CTA section above the footer on interior pages.
- **Background rhythm across a full page** (recreations): white hero → sand → white → dark → sand → white(Security Section is `#fff`) → sand(FAQ). Never two adjacent same-bg sections; the Security Section component is always white, so the section before it must be sand/dark.
