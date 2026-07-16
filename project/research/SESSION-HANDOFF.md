# Session Handoff — 2026-07-04 (continue here)

Read CLAUDE.md first (project rules incl. the STANDING RULE: update page-sitemap.dc.html status chips every time a page is created/changed).

## What happened this session
1. Fetched live testlify.com sitemap → saved `research/live-sitemap.md` + `research/testlify-sitemap.csv`.
2. Built `page-sitemap.dc.html` — full page hierarchy as compact status chips (Built/Partial/Template/To do) with insights strip (19 built · 4 partial · 6 templates ~145 pages · ~25 to do).
3. Built **Interview Library** (`page-interview-library.dc.html`, cloned from Test Library: 27 AI interviews, 9 role families, Video/Audio/Chat mode facets) and **Interview Detail** (`page-interview-detail.dc.html`, Frontend Engineer Interview example, competencies/AI-follow-ups/fairness framing). Verified; sitemap updated.
4. IA exploration in `option-header-ia.dc.html`: current header vs **Option 2 (recommended, edited per user)** vs Option 1 (TestGorilla-informed).
   - User corrections applied to Option 2: menu named **Product** (not Platform), first item **Testlify AI**, Solutions keeps **By company size**.
   - Option 2 nav: Product · Library · Solutions · Pricing · Resources; no Company menu (footer only).
   - Key merges proposed: Testlify AI+platform hub · AI interviews+video interviewing · Science+Trust → "Why it works" · 27 feature pages → 1 anchored Features page · 11 test-type solution pages → Library filters · About+leadership 13→1 · Trust subpages → tabs · 3 programs → 1 Partners · ebooks+podcasts → Blog · contact+demo → 1.
   - TestGorilla (testgorilla.com) = direct competitor, use as ongoing reference. They put AI interviews inside the Products menu.
5. User preferences: SHORT conversational replies; no re-explaining; status pills AFTER page names in sitemap; blog pages named "Blog" and "Blog Post".

## Open decisions
- Which header IA to implement (Option 2 pending final approval) → then rebuild `component-site-header` (+ footer to match).
- Footer also drifts from live site — not yet diffed in detail.

## Task queue (todos)
1. Finish product page bodies: skill-assessments, video-interviewing, science, live-demo (currently clones).
2. ~~Interview library + detail~~ DONE.
3. Compare plans + Contact/Book-a-demo pages.
4. Feature-detail template + Features hub (one template covers 27 live pages — or ONE anchored page if Option 2 adopted).
5. HR tools landing (Test Library pattern; template-tool exists).
6. Competitor comparison template (~100 pages, high SEO value).
7. Leadership, Trust subpages, glossary, success stories, JD templates, programs.

## Template strategy agreed
- One template per: feature detail, solution group (4 exist), resource detail (exists), tool (exists), competitor comparison (to build), trust subpage.
- Blog = index + post only. HR tools/hiring guides/competitors = landing + detail template each.
