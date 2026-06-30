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

## Architecture
DC files import shared chrome — `<dc-import name="Site Header" …>` + `<dc-import name="Site Footer" …>`; never copy chrome. `overlay="true"` header only on homepage; all other pages solid sticky (default). Only `announcement` changes per page.
- Helmet `<style>` is GLOBAL across all DCs on the page — avoid generic class names that collide with Site Header/Footer (e.g. `.plist`, `.psub` collided). Prefix page-specific classes.

Built (don't rebuild): Testlify Home v3, Product - AI Resume Screener (gold-standard template), Test Library, Section Templates, Site Header, Site Footer, Pricing.
