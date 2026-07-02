# Testlify prototype → Next.js porting guide (READ FIRST)

You are porting one design prototype into this already-scaffolded app at
`/home/claude/repo/web`. **Match the visual output pixel-for-pixel** (treat hex/px
as exact spec). Do NOT copy the prototype's runtime structure.

## Stack
- Next.js 16 App Router, React 19, TypeScript, **Tailwind v4** (tokens via `@theme`
  in `app/globals.css`). Poppins is already the global font. Turbopack build.

## The source prototype
Read your assigned file under `/home/claude/repo/project/<NAME>.dc.html` IN FULL.
It is a "DC" component:
- `<helmet><style>…</style>` → the CSS (your source of truth for colours/sizes).
- markup between `<x-dc>…</x-dc>` → the template. `{{ x }}` are data holes,
  `<sc-for list as>` are loops, `<sc-if value>` are conditionals.
- bottom `<script type="text/x-dc">` → the logic class (data arrays, handlers).
Recreate what it renders. Pull copy/data verbatim from the logic class arrays.

Also skim `/home/claude/repo/project/CLAUDE.md` and
`/home/claude/repo/project/handover/HANDOVER.md` for tokens + voice. Use REAL stats
only — never invent numbers; copy them from the source.

## Chrome (do not rebuild)
The source imports `<dc-import name="Site Header" announcement="…" …>` and
`<dc-import name="Site Footer" …>`. In React:

```tsx
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
// ...
<SiteHeader announcement="…copy the announcement string…" announcementCta="…if present…" />
{/* page body */}
<SiteFooter />
```
- Pass the page's `announcement` (and `announcementCta`/`announcementHref` if present).
- Header is solid-sticky by default (correct for every content page). Only the
  homepage passes `overlay`.
- **`SiteFooter` already renders the global coral CTA band ("Replace gut instinct
  with verified skills") + the footer.** If your source page has its own final CTA
  section right before the footer that is an EXACT duplicate of that, drop it.
  Otherwise keep the page's own distinct CTA section.

## Styling
- Use Tailwind utilities with **arbitrary values** for exact px/hex:
  `text-[42px] tracking-[-1.3px] leading-[1.1] bg-[#FBF3EE] shadow-[0_16px_30px_rgba(110,11,14,0.10)]`.
- Named brand tokens (use like `bg-coral`, `text-ink`, `border-warm`, `bg-sand`):
  `coral coral-hover coral-deep coral-bright coral-bright2 ink body body2 muted
  muted2 faint faint2 rose-50 rose-100 rose-150 rose-200 rose-250 sand warm warm2
  warm3` plus difficulty `beg-bg beg-fg int-bg int-fg adv-bg adv-fg`.
- Helper classes already in globals.css: `btn-sheen` (button hover sheen),
  `reveal`/`is-in` (use the `<Reveal>` component instead of hand-rolling),
  `scrollprog`, `tcard`, `uc`.
- Eyebrow signature: SHORT UPPERCASE ~13px/700/`tracking-[0.16em]` + a **coral period**.
- Section rhythm: no two adjacent sections share a background (white → sand `#FBF3EE`
  → rose/accent → white). Section vertical padding ~96px; content max-width 1240px,
  28px gutters (`max-w-[1240px] mx-auto px-7`).

## Shared components you MAY import
- `@/components/FAQ` — `<FAQ items={[{q,a}, …]} />` (accordion).
- `@/components/SecuritySection` — `<SecuritySection eyebrow heading sub />`.
- `@/components/UseCaseCard` — `<UseCaseCard icon title desc href tint ink />`
  (icon ∈ chart|globe|cap|users|code|headset|compass|bolt).
- `@/components/Reveal` — scroll reveal wrapper: `<Reveal as="h2" delay={0.06}
  className="…">…</Reveal>`. Stagger with delay (seconds). Don't gate the hero.
- `@/components/TestIcon` — the test-type line-icon set.
- `@/components/CtaButton` — `<CtaButton label href variant size icon magnetic />`.
  variant ∈ primary|secondary|light|outline-light, size ∈ lg|md|sm, icon ∈
  arrow|play|none. Set `magnetic` only where the source's `dc-import name="CTA
  Button"` passes `magnetic="true"` — it's an explicit per-button opt-in, not a
  page-wide default. Use this wherever the prototype imports "CTA Button"
  instead of hand-rolling the button markup.

## Links
`import { routes } from "@/lib/routes"` and use `next/link` `<Link href={…}>`. Map:
home `/`, product `/product`, testLibrary `/test-library`, testDetail, pricing,
solutions, integrations, customers, blog, blogArticle, resources, about, careers,
security, legal, sectionTemplates. Preserve `#anchors`:
`` `${routes.solutions}#volume-hiring` ``. External/`#` placeholders stay as `<a href="#">`.

## Images
Prototype hot-links `https://testlify.com/…`. Use plain `<img>` (NOT next/image)
with the same `src`, and put `{/* eslint-disable-next-line @next/next/no-img-element */}`
on the line directly above every `<img>`.

## Interactivity
Tabs / accordions / carousels / drag / filters → make a client component
(`"use client"`) colocated in your route folder (e.g. `app/pricing/PricingClient.tsx`)
and render it from the server `page.tsx`. The server `page.tsx` exports `metadata`
(`{ title, description }`; title is just the page-specific part — layout adds
"· Testlify") and renders the client component. Purely static pages can be one
server component with no `"use client"`.

## Hard rules
- **Do NOT edit any shared file**: `app/globals.css`, `app/layout.tsx`,
  `lib/routes.ts`, or anything in `components/`. Only CREATE files under your
  assigned `app/<route>/` folder. If you need a keyframe Tailwind can't express,
  use a scoped inline `<style>` in your page or inline `style={{}}`.
- No emoji anywhere — inline SVG line icons only (1.8–2px stroke), matching the source.
- Valid TSX: camelCase SVG/JSX props (`strokeWidth`, `strokeLinecap`, `viewBox`,
  `className`, `htmlFor`), `style` as an object, no `class=`. Escape apostrophes in
  JSX text (`&apos;`) or use curly strings.
- Don't run the build — the orchestrator does that and will fix stragglers.
