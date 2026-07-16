# Testlify — Project Memory

**STANDING RULE — sitemap status:** `page-sitemap.dc.html` tracks build status of every page (Built / Partial / Template / To do chips). EVERY time a page is created, completed, or upgraded, update its status chip on the sitemap page in the same session — without fail.

**ADOPTED IA (Option 2, 2026-07):** 5-item nav — Product · Library · Solutions · Pricing · Resources. Company pages live in the footer (not nav). Product menu = Testlify AI (absorbs platform hub) · AI resume screener · Skill assessments · AI interviews (→ library-interviews) · Video interviewing (DISTINCT page, product-video-interviewing — NOT merged with AI interviews) · Features (1 page ← 27 live) · ATS integrations · Why it works (science+trust) · Live demo. Library menu = Test library · Interview library · Build your own. Solutions = use case / industry / company size / test type (test-type pages RETAINED under Solutions via solution-testtype-template, NOT folded into Library filters). HR Glossary = archive hub (resource-glossary) with 500+ term subpages built from resource-glossary-term template. Header/footer already match. Pre-IA backups in `backup pages/Site Header -pre-IA-.dc.html` + `Site Footer -pre-IA-.dc.html`. TestGorilla.com is the reference competitor.

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

Built (don't rebuild): core-home, product-ai-resume-screener (gold-standard template), library-tests, component-section-templates, component-site-header, component-site-footer, core-pricing, product-ai-resume-screener (faithful recreation of live /ai-resume-screener/), product-testlify-ai (faithful recreation of live /ai-powered-talent-assessment-platform/).

## File naming & structure convention (ALL files flat at root — folders break DC imports)
DC imports resolve as same-folder siblings (`./<name>.dc.html`, name can't hold a path), and the preview serves under a `/…/serve/` prefix so root-absolute links fail. So every DC stays FLAT at project root; group is encoded as a **`<group>-<name>` filename prefix**, all lowercase-hyphenated (URL-friendly). Groups map 1:1 to the sitemap (`core-sitemap.dc.html`):
- `core-*` — top-level / nav-agnostic pages: `core-home` (homepage), `core-pricing`, `core-compare` (compare plans), `core-sitemap`.
- `product-*` — product pages: `product-testlify-ai` (absorbs the old platform hub), `product-ai-resume-screener`, `product-skill-assessments`, `product-video-interviewing` (DISTINCT product page — kept separate from AI interviews), `product-integrations` (ATS), `product-why-it-works` (science + trust), `product-live-demo`, `product-features` (ONE hub page ← 27 live). Feature sub-pages, if ever split out, use a shared template named `product-feature-template` (then instances `product-feature-<name>`).
- `library-*` — the catalogues: `library-tests` (test library), `library-test-detail`, `library-interviews` (interview library — this is what the Product menu's "AI interviews" links to), `library-interview-detail`.
- `solution-*` — `solution-index` (hub). Sub-pages built from templates `solution-usecase-template`, `solution-industry-template`, `solution-company-template`, `solution-testtype-template` (test-type pages RETAINED under Solutions — coding, cognitive, personality, language, role-based, etc.); instances `solution-usecase-<name>`, `solution-testtype-<name>` etc.
- `resource-glossary` — HR Glossary ARCHIVE hub (500+ terms). Term pages built from `resource-glossary-term` template; instances `resource-glossary-<term>`.
- `resource-*` — `resource-blog`, `resource-blog-post` (NO resource hub/landing page — the live site has none; "Resources" is only a footer grouping + nav mega-menu whose trigger lands on the Blog). Templates: `resource-list-template` (filterable list), `resource-detail-template` (article/reading), `resource-tool-template` (working calculator — Cost-per-hire example; duplicate + swap for other calculators → `resource-tool-<name>`).
- `company-*` — `company-about`, `company-careers`, `company-customers`, `company-trust`, `company-legal`, `company-contact` (contact + book-a-demo).
- `component-*` — shared imported components: `component-site-header`, `component-site-footer`, `component-cta-button`, `component-faq`, `component-security-section`, `component-use-case-card`, `component-section-templates` (dev section reference).
- **Templates** carry a group prefix + `-template` suffix (e.g. `product-feature-template`, `solution-usecase-template`, `resource-tool-template`) and carry example content until instantiated.
When renaming, rewrite every `dc-import name="…"` and every `<a href>`/`home-href` (encoded AND raw, both quote styles) in one pass, then delete old files. Pre-IA/pre-rename snapshots live in `backup pages/` and intentionally keep OLD names — never rewrite refs there. `export/` = clean developer handoff folder.

## Mega-menu wiring (component-site-header) — matches sitemap 1:1
- Nav = 5 items: **Product · Library · Solutions · Pricing · Resources**. Company pages are footer-only.
- **Product** menu (now 9 items): Testlify AI→product-testlify-ai, AI resume screener→product-ai-resume-screener, Skill assessments→product-skill-assessments, AI interviews→library-interviews, Video interviewing→product-video-interviewing (DISTINCT from AI interviews), Features→product-features, ATS integrations→product-integrations, Why it works→product-why-it-works, Live demo→product-live-demo. (`PMAP` in renderVals maps group id→page; `PROD` fallback→product-testlify-ai.)
- **Library** menu: Test library→library-tests, Interview library→library-interviews, Build your own→library-build-your-own.
- **Solutions** = 4 category tabs (use case / industry / company size / test type); each links to its TEMPLATE (`solution-{usecase,industry,company,testtype}-template`). Hub = solution-index.
- **Resources** = Learn/Tools/Company groupings; nav trigger + mobile link land on resource-blog (NO resource-index hub — removed, live site has none) → resource-blog (+resource-blog-post), resource-list-template, resource-tool-template, resource-glossary, company-customers, product-integrations, company-trust, company-about, company-careers.
- Footer also links core-compare (Compare plans) and company-contact (Contact us).

## Still pending (real content build)
product-{skill-assessments,why-it-works,live-demo} are complete bespoke pages. **product-video-interviewing** (DISTINCT from AI interviews, built from live /video-interviewing-tool/ content) and **library-build-your-own** are complete bespoke pages. **solution-testtype-template** (data-driven, ships with Coding-tests example content — retained under Solutions), **resource-glossary** (A–Z archive hub with live search + alphabet jump-nav, seeded with 29 sample terms scaling to 500+) and **resource-glossary-term** (data-driven definition-article template) are all built. Solution/resource/tool templates carry example content until instantiated. Still to build: term/solution/resource INSTANCES from the templates (instantiate with real copy fetched from testlify.com — pass `pageData` prop or edit the DATA default), remaining live industries/use-cases/company solutions, Features feature-detail split if ever needed.

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
