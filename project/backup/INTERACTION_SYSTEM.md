# Testlify Site — Shared Interaction & Animation System

Source of truth: **Homepage v2.dc.html**. Every page must reuse these patterns verbatim so the site feels like one product. Do NOT invent new reveal/CTA mechanics — reuse these; for genuinely new sections, pick the closest pattern below.

## Why not pure-CSS reveals
CSS entrance animations/transitions gated by a class are UNRELIABLE in this runtime (frozen at frame 0 → invisible content). All entrances are driven by **rAF JS** in the logic class. Any element that should animate in starts with inline `opacity:0;transform:translateY(28px)` AND a `data-reveal` attribute; the JS animates it to visible. Never rely on a CSS keyframe to reveal (fine for looping decorative motion once already visible).

## 1. Scroll reveal (the backbone)
Markup: `<el data-reveal data-delay="0.08" style="opacity:0;transform:translateY(28px); …">`
- `data-delay` = seconds (stagger siblings 0 / 0.08 / 0.16 / 0.24 …).
- Above-the-fold elements reveal immediately (scan runs on mount).
- Companion attrs handled by the same observer: `data-bar` (+`data-w` %) fills a bar; `data-count` counts a number up; `data-grow` scales in.

Logic (copy into every page's `Component`):
- `componentDidMount`: collect `[data-reveal]`, `[data-bar]`, `[data-count]`, `[data-grow]`; `inView` = `r.top < vh*0.94 && r.bottom > 0`; `scan()` on mount + `scroll`/`resize` (passive); a `setTimeout` fallback force-activates all (so nothing is stuck hidden). Track activated in a `Set` so each fires once.
- `animateReveal(el)`: dur 620ms, startY 28, ease `1-(1-p)^3`, honors `data-delay`; ends at `opacity:1;transform:none`.
- Clear leaked timers on mount: `if(window.__tlTimers){…clear…}; window.__tlTimers=[];`

## 2. Hero primary CTA — magnetic (ONLY the hero primary CTA)
Class `hero-cta` on the hero's primary button ONLY. `initMagnetic(root)` binds mousemove: strength 0.32, lift -2px, `transition:transform .18s cubic-bezier(.2,.7,.3,1)`. Never apply to secondary/other buttons (user explicitly restricted this).

## 3. Button sheen
`.btnsheen{position:relative;overflow:hidden;}` + a `::after` light sweep on hover (`@keyframes shine`). Use on primary CTAs everywhere. Hover lift `translateY(-3px)` + deepened coral shadow via `style-hover`.

## 4. Card hover / tilt
Cards lift on hover (`translateY(-4/-6px)`) with warm shadow `0 16px 30px rgba(110,11,14,.10)`. Where a page has a signature hero card, a subtle pointer-tilt is allowed (same spirit as homepage dashboard). Keep border→coral transitions on hover for interactive rows.

## 5. Looping decorative motion (only once visible)
Reusable keyframes already defined in Homepage v2 helmet — copy the ones a section needs:
`floaty`/`floaty2` (bob), `heroGrad` (hero gradient drift), `marquee` (logo strip), `blob` (bg blobs), `pulsering`/`pulse`/`livepulse`/`barcap` (radar/live dots), `shimmer`+`.shimmer-word` (coral gradient text sweep), `shine` (button/card sheen), `scanmove`+`.scanbeam` (resume scan), `sksheen`+`.skline` (skeleton shimmer), `spin360`, `rowglow`, `ticyc`, `chartsheen`+`.chartwrap`, `optglow`, `okbadge`, `playring`+`.playpulse`, `recblink`+`.recdot`, `stripeslide`+`.stripemove`, `starseq`, `dragpulse`, `pulsedot`, `tlibin`.
Wrap ALL of them in `@media(prefers-reduced-motion:reduce){…animation:none}` as Homepage v2 does.

## 6. Section rhythm & scroll bg wash
- Background rhythm never breaks: white → sand `#FBF3EE` → rose/accent → white… no two adjacent sections share a bg.
- `data-bgwash` element + `updateBgWash()` lerps the page bg through 4 warm stops on scroll (rose → rose → cool-tint → warm). Optional per page but nice on long pages.

## 7. Live interactive widgets (reuse where the content fits)
- **How-it-works stepper**: clickable Build→Invite→Rank tabs auto-advancing; each step swaps a product-realistic panel. Reuse on any "how it works / process" section.
- **Live search + filter** (Test Library): real `<input>` + filter chips filtering a JS dataset, capped results with a live count line + empty state. Reuse anywhere there's a browsable list.
- **Hover-reveal cards**: category cards reveal sample questions/detail on hover.

## Rollout checklist (per page)
1. Add the reveal keyframes/CSS + `data-reveal` attrs to every major block (staggered).
2. Port `componentDidMount` reveal observer + `animateReveal` (+ bar/count/grow if used) into the page's `Component`.
3. Mark hero primary CTA `hero-cta`; add `initMagnetic`.
4. `.btnsheen` + hover lift on all primary CTAs.
5. Card hover lift + warm shadow.
6. Add the closest live widget for any interactive-worthy section (invent tasteful ones in this spirit).
7. Keep the matching `-Vercel-` copy in sync (edit both).
8. Verify render + interactions; check no element stuck at opacity 0.

## Pages remaining (all get the treatment; canonical + -Vercel-)
Pricing · Test Library · Product - AI Resume Screener · Solutions · Integrations · Security · Customers · About · Careers · Resources · Blog · Blog Article · FAQ · Test Detail · Legal
(Homepage v2 = done/source. Homepage & Homepage -Vercel- already have most of this.)
