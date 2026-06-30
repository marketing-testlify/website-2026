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

`/` home · `/product` · `/test-library` (+ `/test-library/[slug]` test detail) ·
`/pricing` · `/solutions` · `/integrations` · `/customers` · `/blog` (+ `/blog/[slug]`) ·
`/resources` · `/about` · `/careers` · `/security` · `/legal` · `/section-templates`

## Architecture

- **Shared chrome:** `web/components/SiteHeader.tsx` and `SiteFooter.tsx` are the single
  source of truth for nav + footer — every page imports them.
- **Shared sections:** `FAQ`, `SecuritySection`, `UseCaseCard`, `Reveal`
  (scroll-reveal), `ScrollProgress`, `TestIcon`.
- **Design tokens:** brand palette (coral/sand/ink), Poppins, and effect helpers live in
  `web/app/globals.css` (Tailwind v4 `@theme`).
- **Routes map:** `web/lib/routes.ts` centralizes every internal link.
- `web/PORTING_GUIDE.md` documents the conventions used to port the prototypes.

## Deploy to Vercel (Git integration)

Import this repo in Vercel and set **Root Directory = `web`** (the app is in a
subfolder). Framework preset: Next.js. After that, every push to the default branch
auto-builds and deploys — keeping the live site in sync with the codebase.
