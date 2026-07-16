# Handoff — Testlify website

Quick-start for anyone (or any Claude Code account) picking this up. Read
`README.md` for the overview and `web/PORTING_GUIDE.md` for how to port a
prototype. This file captures **current state, the update workflow, and the
decisions already made** so you don't re-litigate them.

## Where things stand

- Branch **`main`** is the source of truth; working tree is clean and pushed.
- Everything builds and lints clean: `cd web && npm run build` and `npx eslint .`.
- The site is a faithful Next.js 16 / React 19 / TypeScript / Tailwind v4
  recreation of the Claude Design prototypes in `project/*.dc.html`.
- `project/` mirrors the **latest uploaded design build** — i.e. it is the
  current design source of truth, already synced. When a new build lands, diff
  the new `.dc.html` files against `project/` to see exactly what changed.
- Deploy: GitHub → Vercel, project `marketing-testlify/website-2026`,
  **Root Directory = `web`**.

## The recurring workflow (new design-export zip)

Each new export is a set of `*.dc.html` prototypes. To update the code:

1. Unzip to a scratch dir. Diff its top-level `*.dc.html` against `project/`:
   - new files, removed files, and `diff -q` for changed content.
2. For **renamed** prototypes, decide route impact (see decisions below).
3. Implement/adjust the affected pages to match the new prototype **exactly**
   (copy, colors as hex, spacing, animations, interactions). Fan out subagents
   per page/section for larger builds; keep each agent to disjoint files.
4. Sync `project/` to the new build (copy changed files in, delete removed ones)
   so future diffs stay clean.
5. Verify: `npm run build`, `npx eslint .`, then a headless-browser pass
   (status codes, 0 JS errors, reveals un-hide, key sections render). A
   throwaway Playwright script via `/opt/node22/lib/node_modules/playwright`
   with `executablePath:'/opt/pw-browsers/chromium'` on a `npm run start` server
   works well.
6. Commit + push to `main`.

## Decisions already made (keep unless told otherwise)

- **Routes are internal choices**, mapped centrally in `web/lib/routes.ts`; all
  links go through it. Two pages were renamed to match the real site URLs:
  `/ai-powered-talent-assessment-platform` (Testlify AI) and
  `/ai-resume-screener`. The remaining product pages stay under `/product/*`.
- **Orphan pages get deleted**: routes with no corresponding prototype are
  removed (e.g. the old `/product` and `/resources` hubs). The blog is the
  "Resources" landing — "Resources" breadcrumbs point to `routes.blog`.
- **Global CTA band + footer** live once in `SiteFooter` (rendered on every
  page). Prototypes that `dc-import` `component-cta-band` per page are a no-op
  here — don't duplicate it.
- **Magnetic cursor-follow CTA is homepage-hero-only.** Prototypes often set
  `magnetic` on other heroes; strip it everywhere except the home hero.
- **Homepage animations**: recreated faithfully with React + CSS / rAF /
  IntersectionObserver. The prototype loads GSAP + ScrollTrigger + Lenis
  smooth-scroll; we deliberately did **not** add those libs or global
  smooth-scroll. If exact GSAP/Lenis parity is ever wanted, that's a follow-up.
- **Hub cards without a detail page render non-linking** (not 404) — glossary
  terms, tool "generator" cards, competitor cards.
- Prototype-runtime concerns that are **N/A** to this stack: the footer's global
  auto-reveal JS and responsive-CSS safety net (we use `Reveal` + Tailwind
  responsive utilities); HTML-entity/`crossorigin` noise in diffs.

## Gotchas (Tailwind v4 + this repo)

- **Cascade layers**: unlayered CSS beats Tailwind utility classes regardless of
  specificity. Keep styling in `className`; base resets belong in `@layer base`.
  Don't set a property in a scoped `<style>` that a utility on the same element
  also sets.
- **`translate` transitions**: `-translate-y-*` sets the CSS `translate`
  property, so any arbitrary transition list for a hover-lift MUST include
  `translate`, e.g. `transition-[translate,box-shadow]`.
- **Reveal vs hover**: `Reveal` animates via `transform`; hover-lifts use
  `translate`. Put `Reveal` on containers, not on the hover-lifting card itself,
  to avoid the two fighting.
- **Dynamic routes** use async params: `const { slug } = await props.params;`
  plus `generateStaticParams` and `notFound()`.

## Shared building blocks

`SiteHeader`, `SiteFooter`, `Reveal`, `CtaButton` (variants primary/secondary/
light/outline-light; sizes lg/md/sm; icon arrow/play/none; `magnetic`), `FAQ`,
`SecuritySection`, `UseCaseCard`, `TestIcon`. Homepage-only visuals live in
`HomeClient.tsx` (animated hero, demo tabs, stats canvas, testimonials).

## Verify commands

```bash
cd web
npm run build           # must compile clean
npx eslint .            # must be clean
npm run start -- -p 4321  # then headless-browser spot-check
```
