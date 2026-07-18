# Testlify Website

The Testlify marketing site — an AI-native, skills-based pre-hire assessment
platform — built in **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4**.

Recreated from the Claude Design prototypes (kept in `project/` for reference) as a
real, production-grade codebase. This codebase is the source of truth for the live site.

## Layout

```
web/        ← the Next.js application (deploy this)
project/    ← original Claude Design prototypes (.dc.html) + brand assets, for reference
chats/      ← the design conversation transcripts that produced the prototypes
```

## Run locally

```bash
cd web
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm run start` (serve the build),
`npx eslint .` (lint).

## Pages

Product: `/ai-powered-talent-assessment-platform` · `/ai-resume-screener` ·
`/product/skill-assessments` · `/product/video-interviewing` · `/product/features`
(+ `/product/features/[slug]`) · `/product/science` · `/product/live-demo` · `/integrations`
Library: `/test-library` (+ `/test-library/[slug]`) · `/library/interviews`
(+ `/library/interviews/[slug]`) · `/library/build-your-own`
Solutions: `/solutions` (+ `/solutions/[slug]`)
Resources: `/blog` (+ `/blog/[slug]`) · `/resources/tools` (+ `/[slug]`) ·
`/resources/glossary` (+ `/[slug]`) · `/resources/hiring-guides` (+ `/[slug]`) ·
`/resources/jd-templates` · `/resources/competitors` (+ `/[slug]`) · `/resources/partners`
Core / company: `/` home · `/pricing` · `/compare` · `/customers` (+ `/[slug]`) ·
`/about` · `/careers` · `/contact` · `/security` · `/trust-center` · `/compliance` ·
`/legal` · `/sitemap` · `/section-templates`

> Note: `/product` and `/resources` hub pages were removed (no prototype); the blog is
> the Resources landing. See `HANDOFF.md` for route decisions.

## Architecture

- **Shared chrome:** `web/components/SiteHeader.tsx` and `SiteFooter.tsx` are the single
  source of truth for nav + footer — every page imports them.
- **Shared sections:** `FAQ`, `SecuritySection`, `UseCaseCard`, `Reveal`
  (scroll-reveal), `ScrollProgress`, `TestIcon`.
- **Design tokens:** brand palette (coral/sand/ink), Poppins, and effect helpers live in
  `web/app/globals.css` (Tailwind v4 `@theme`).
- **Routes map:** `web/lib/routes.ts` centralizes every internal link.
- `web/PORTING_GUIDE.md` documents the conventions used to port the prototypes.

## Updating the site from a new design ZIP (STANDING WORKFLOW)

When asked to **"update"** (a new Claude Design export ZIP is provided), the goal
is always to **update the live Vercel site** — which means changing the `web/`
Next.js app, never shipping the ZIP itself. The `.dc.html` prototypes cannot run
on Vercel (they need the Claude Design runtime); `web/` is the deployable
translation. The procedure:

1. **Extract** the ZIP to a scratch dir and **diff it against `project/`** to find
   what changed (modified prototypes, net-new pages/assets).
2. **Triage direction per file** — the export is *not* always newer. If a `web/`
   page / `project/` prototype is already richer than the export, do NOT regress
   it. Only carry forward changes where the export is genuinely newer.
3. **Refresh `project/`** (reference folder) with the newer prototypes + assets.
4. **Port the real changes into `web/`** following `web/PORTING_GUIDE.md`
   conventions (Tailwind arbitrary values for exact px/hex, shared
   `SiteHeader`/`SiteFooter`/`Reveal`/`CtaButton`, `<img>` hot-links for
   testlify.com assets, client components for interactivity). Skip DC-runtime-only
   fixes that don't apply to React (e.g. the `>span:last-child` eyebrow bug — the
   React eyebrows already color only the period via a separate `<b>`).
5. **Verify**: `cd web && npm install && npm run build && npx eslint .`, then
   `npm run start` and spot-check the changed routes.
6. **Commit + push**. Pushing to the default branch triggers the Vercel deploy.

## Deploy to Vercel (Git integration)

Import this repo in Vercel and set **Root Directory = `web`** (the app is in a
subfolder). Framework preset: Next.js. After that, every push to the default branch
auto-builds and deploys — keeping the live site in sync with the codebase.
