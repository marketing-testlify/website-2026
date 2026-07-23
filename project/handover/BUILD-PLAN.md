# Testlify — Live-Match Build Plan (autonomous, resumable)

This file is the SINGLE SOURCE OF TRUTH for the "match the live site" operation.
Any session can resume from here with **no user intervention**. Work top-down.

## Locked decisions (from user, 2026-07)
1. **IA = live 7-item nav** (overrides the old 5-item adopted IA): `Product · Test library · Interviews · Pricing · Solutions · Resources · About`. Company pages live under the **About** menu (not footer-only anymore).
2. **Build the ~65 missing sub-pages in EXCEL-SHEET ROW ORDER** (sheet "Testlify pages export"). One (or a few) per turn; each FAITHFULLY content-mapped to its live page (exact headings, paragraph copy, FAQ verbatim, live section order, live images), built in OUR design system, reusing components. Update the sitemap chip after each.
3. **File names = the live URL slug** exactly (no `core-`/`solution-`/`product-`/`resource-` prefix, no `-detail`/`-template` suffix) — e.g. `/recruitment-industry/` → `recruitment-industry.dc.html`. Apply to NEW pages as built AND rename existing built pages at the END.
4. **Templates & components KEEP their names** (`solution-industry-template`, `solution-usecase-template`, `solution-testtype-template`, `solution-company-template`, `resource-glossary-detail`, `customer-success-stories-detail`, `component-*`, etc.). Only *instances* get live slugs.
5. **Interim menu/footer links** to not-yet-built pages = `#` placeholder. **At the very END**, do one pass to point every link at its real file + full broken-link audit.
6. **HR tools:** match live — where the live page is a **working calculator**, build the same working calculator here (clone `resource-tools-detail`, the working cost-per-hire calc, and adapt the formula). The 2 "generator" tools (AI interview question generator, AI job description generator) match live behaviour.
7. **Homepage keeps `core-home.dc.html`** (NOT renamed; live "/" has no slug). Every `home-href` stays `core-home.dc.html`.
8. **DO NOT change the body/copy/design of already content-mapped pages.** Renaming their file + fixing link refs is allowed; altering their content is NOT.
9. Header/footer are shared components — editing them updates every page (expected, not a "page" edit).

## Content-mapping recipe (per page) — from CLAUDE.md playbook
- `web_fetch` the live URL (STANDING RULE — never rely on memory/snippets).
- Reproduce exact live H1/eyebrow, paragraph copy, section ORDER, FAQ Q&A verbatim, and reference live `testlify.com/wp-content/...` image URLs.
- Keep our design system (Poppins, coral system, eyebrow+coral period, warm shadows, split sections, background rhythm white→sand→…, tab style, reveal via rAF).
- Reuse components: `component-security-section` (eyebrow/heading/sub), `component-testimonials` (eyebrow/heading; defaults already hold live Xneelo/Kimp/Endiprev/Virtual Gurus quotes), `component-recognition` (defaults), `component-cta-band` (above footer, no props), `component-site-header`, `component-site-footer`.
- CTA rule: coral primary ONLY for start-trial ("Try for free"). "View all …" = coral text link, standalone (no Book-a-demo beside it).
- Industry/use-case/test-type/company instances: clone the matching template OR clone the gold upgraded `solution-industry-it.dc.html` and swap DATA. The upgraded industry structure = animated hero card + logos marquee + split sections (live images via `data-bg`, no numbering) + real-logo ATS grid + `component-security-section` + `component-testimonials` + `component-recognition` + FAQ + `component-cta-band`. Live section order: hero → logos → splits → ATS → Security → Testimonials → Awards → FAQ → CTA.
- After building: flip its sitemap chip to the `d-cm` (Content mapped) dot; repoint its header/footer menu link from `#` to the new file.

## RESUME PROTOCOL (do this at the start of every session)
1. Open this file + `sitemap.dc.html` (chip statuses) to see what's done.
2. Find the next page in the BUILD ORDER below whose status is ☐ TODO.
3. `web_fetch` its live URL → build → verify → mark ☑ here + flip sitemap chip + repoint menu link.
4. Repeat. When all ☐ done → run the END TASKS.

---

## EXACT LIVE MEGA-MENU SPEC (task 1 — rebuild header to this)
Top-level order: **Product · Test library · Interviews · Pricing · Solutions · Resources · About** + "Try for Free" button. Roadmap = external new tab. No scrollbar (multi-column panels; sleek scrollbar only if unavoidable).

### Product (8)
- Testlify AI → ai-powered-talent-assessment-platform.dc.html ✅
- AI resume screener → ai-resume-screener.dc.html ✅
- Features → features.dc.html ✅
- Video interviewing → video-interviewing-tool.dc.html ✅
- Science behind tests → science.dc.html ✅
- Live product demo → demo.dc.html ✅
- Roadmap → https://roadmap.testlify.com/ (ext) ✅
- ATS integrations → integrations.dc.html ✅

### Test library (single) → test-library.dc.html ✅
### Interviews (single) → interviews.dc.html ✅
### Pricing (single) → pricing.dc.html ✅

### Solutions — 4 groups
By industry type (13): Information & technology→it-industry ✅ · Logistics & supply chain→logistics-supply-chain-industry ☐ · Retail→retail-industry ✅ · Recruitment→recruitment-industry ☐ · Financial→financial-industry ☐ · SaaS→saas-industry ☐ · Energy→energy-industry ☐ · Hospitality→hospitality-industry ☐ · Health care→health-care-industry ☐ · BPO→bpo-industry ☐ · Edtech→edtech-industry ☐ · Real estate→real-estate-industry ☐ · Media→media-industry ☐
By use case (10): Lateral hiring→lateral-hiring ☐ · Diversity and inclusion→diversity-and-inclusions ☐ · Volume hiring→volume-hiring ☐ · Remote hiring→remote-hiring ☐ · Blue collar hiring→blue-collar-hiring ☐ · Freelance hiring→freelance-hiring ☐ · Campus hiring→campus-hiring ☐ · Technical hiring→technical-hiring ☐ · Sales hiring→sales-hiring ☐ · Skills validation→skills-validation ☐
By test type (11): Role specific→role-specific-tests ☐ · Language→language-tests ☐ · Programming→programming-tests ☐ · Software skills→software-skills-tests ☐ · Personality & culture→psychometric-tests ☐ · Cognitive ability→cognitive-ability-tests ☐ · Situational judgment→situational-judgment ☐ · CEFR→cefr-test ☐ · Typing→typing-test ☐ · Coding→coding-tests ☐ · Engineering→engineering-skills ☐
By company type (5): For startups→for-startups ☐ · SMB's→small-medium-businesses ☐ · Enterprises→enterprise ☐ · Non-profits→non-profits ☐ · Public sector→public-sector-talent-assessment-solution ☐

### Resources (flat list + HR tools submenu)
- Blogs → blog.dc.html ✅
- HR tools → hr-tools.dc.html ✅ (submenu, 15):
  - AI Interview question generator→ai-interview-question-generator ☐ · AI Job description generator→job-description-generator ☐ · Cost per hire calculator→cost-per-hire-calculator ☐ · Attrition rate calculator→attrition-rate-calculator ☐ · Employee NPS calculator→free-employee-net-promoter-score-enps-calculator ☐ · Applicant funnel calculator→applicant-funnel-calculator ☐ · Average Time to Hire→average-time-to-hire-calculator ☐ · Employee turnover→cost-of-employee-turnover-calculator ☐ · Sourcing channel efficiency→sourcing-channel-efficiency-calculator ☐ · Remote work cost savings→remote-work-cost-savings-calculator ☐ · Quality of hire calculator→quality-of-hire-calculator ☐ · Interview-to-hire offer→interview-to-offer-ratio-calculator ☐ · Recruiting conversion rate→recruiting-conversion-rate-calculator ☐ · Job offer acceptance rate→job-offer-acceptance-rate-calculator ☐ · Hiring manager satisfaction→hiring-manager-satisfaction-calculator ☐
- Hiring guides → hiring-guides.dc.html ✅
- HR glossary → hr-glossary.dc.html ✅
- Customer success stories → customer-success-stories.dc.html ✅ (exists)
- Job description templates → job-description-templates.dc.html ✅
- Ebooks → knowledge-base ☐
- Podcasts → podcast ☐
- Referral program → referral-program ☐
- Partnership program → partnership ☐
- Integration program → integration-program ☐
- Competitors → alternatives.dc.html ✅
- Sitemap → sitemap.dc.html ✅

### About (8)
- Our story → about.dc.html ✅
- Contact us → contact.dc.html ✅
- Our leadership → our-leadership ☐ (live has a separate page; build it — do NOT keep merged now that we match live)
- Trust center → external redirect to https://trust.testlify.com/ (trust.dc.html deleted; all internal links point out)
- Clients → clients ☐ (live /clients/ — distinct from customer-success-stories)
- Partners → our-partners ☐
- Job openings → job-openings ☐ (distinct from careers.dc.html; live /job-openings/)
- Write for us → write-for-us ☐

---

## LIVE FOOTER SPEC (align footer at END; columns/labels from live)
- **Product:** Testlify AI→ai-powered-talent-assessment-platform · Test library→test-library · ATS integrations→integrations · Science→science · Analytics→reporting-analytics ☐ · API→api ☐ · Reseller plan→reseller-plan ☐ · Features→features · What's new→whats-new ☐ · White label→white-label ☐ · Video interviewing→video-interviewing-tool · Product roadmap→(ext)
- **Test type:** Role specific→role-specific-tests · Language→language-tests · Programming→programming-tests · Software skills→software-skills-tests · Cognitive ability→cognitive-ability-tests · Situational judgment→situational-judgment · CEFR→cefr-test · Typing→typing-test · Coding→coding-tests · Psychometric→psychometric-tests · Engineering→engineering-skills · Process knowledge→process-knowledge-tests (New)
- **Resources:** Blog→blog · Join Testlify SME→subject-matter-experts · Integration program→integration-program · Sitemap→sitemap · Knowledge base→knowledge-base · Podcast→podcast · Referral program→referral-program · Partnership program→partnership · Success stories→customer-success-stories · Competitors→alternatives · Hiring guides→hiring-guides · HR glossary→hr-glossary · HR tools→hr-tools
- **Terms:** Privacy policy→privacy-policy · Terms & conditions→terms · Refund policy→fair-refund-policy · GDPR compliance→gdpr-compliance · Cookie policy→cookie-policy · Security practices→security-practices · Security→security · Data processing agreement→data-processing-agreement · Data privacy framework→data-privacy-framework ☐ · CCPA→ccpa ☐ · Trust center→trust
- **Company:** About us→about · Careers→careers (hiring) · For subject matter experts→subject-matter-experts · Clients→clients · Our partners→our-partners · Press room→press-room ☐ · Investors→investors · Write for us→write-for-us · Contact us→contact
- **Support:** Help center→(ext help.testlify.com)
- Backed by: SHRM Labs, Google for Startups, Microsoft for Startups, NVIDIA Inception. Badges: SOC2, ISO, EEOC, CCPA, GDPR.

---

## BUILD ORDER (Excel sheet rows) — ☑ done / ☐ todo. Build ☐ top-down.
Status legend: ✅mapped ·  ☐todo ·  ↻rename-at-end ·  ⤳merged
- r1  / → core-home ✅ (keep name)
- r2  /pricing/ → pricing ✅
- r3  /ai-powered-talent-assessment-platform/ ✅
- r4  /ai-resume-screener/ ✅
- r6  /features/ ✅
- r7  /science/ ✅
- r8  /demo/ ✅
- r9  /it-industry/ ✅  ↻ rename solution-industry-it.dc.html → it-industry.dc.html (END)
- r10 /retail-industry/ ✅ (already renamed)
- r11 /recruitment-industry/ ☑ built (clone of retail; scorecard hero, 6 splits, 5 FAQs)
- r12 /financial-industry/ ☑ built (finance scorecard hero, 4 splits, 5 FAQs)
- r13 /saas-industry/ ☑ built (SaaS scorecard hero, 5 splits, 5 FAQs)
- r12 /financial-industry/ ☐
- r13 /saas-industry/ ☐
- r14 /energy-industry/ ☑ built
- r15 /hospitality-industry/ ☑ built (3-card challenge section + 5 splits + 7 FAQs)
- r16 /health-care-industry/ ☑ built (cards + 6 splits + 7 FAQs). NEXT = r17 bpo-industry
- r17 /bpo-industry/ ☑ built (5 splits + 5 FAQs). NEXT = r18 edtech-industry
- r18 /edtech-industry/ ☑ built (4 splits + 5 FAQs). NEXT = r19 real-estate-industry
- r19 /real-estate-industry/ ☑ built (6 splits + 5 FAQs). NEXT = r20 media-industry
- r20 /media-industry/ ☑ built (4 splits + 5 FAQs). All industries done except Logistics (build later). NEXT = r21 lateral-hiring (use-case block)
- r21 /lateral-hiring/ ☑ built (3 splits + cards + 7 FAQs). NEXT = r22 volume-hiring
- r22 /volume-hiring/ ☑ built (3 splits + cards + 5 FAQs). NEXT = r23 remote-hiring
- r23 /remote-hiring/ ☑ built (4 splits + 5 FAQs). NEXT = r24 blue-collar-hiring
- r24 /blue-collar-hiring/ ☑ built (4 splits + 5 FAQs). NEXT = r25 campus-hiring
- r25 /campus-hiring/ ☑ built (4 splits + cards + 5 FAQs). All 5 core use-cases done (Diversity/Freelance/Technical/Sales/Skills-validation still ☐). NEXT = r26 role-specific-tests (test-type block)
- r26 /role-specific-tests/ ☑ built (4 splits + 7 FAQs). NEXT = r27 language-tests
- r27 /language-tests/ ☑ built (5 splits + 7 FAQs). NEXT = r28 software-skills-tests
- r28 /software-skills-tests/ ☑ built (3 splits + cards + 7 FAQs). NEXT = r29 psychometric-tests
- r29 /psychometric-tests/ ☑ built (2 splits + cards + 6 FAQs). NEXT = r30 cognitive-ability-tests
- r30 /cognitive-ability-tests/ ☑ built (2 splits + 2 cards + 7 FAQs). NEXT = r31 situational-judgment
- r31 /situational-judgment/ ☑ built (5 splits + 6 FAQs). NEXT = r32 cefr-test
- r32 /cefr-test/ ☑ built (1 split + 2 cards + 6 FAQs). NEXT = r33 typing-test
- r33 /typing-test/ ☑ built (4 splits + 7 FAQs). NEXT = r34 engineering-skills
- Coding (menu) /coding-tests/ ☑ built (2 splits + 2 cards + 5 FAQs). Test-type menu fully linked EXCEPT process-knowledge (footer). NEXT = r35 for-startups (company-size block)
- r35 /for-startups/ ☑ built (4 splits + cards + 5 FAQs). NEXT = r36 small-medium-businesses
- r36 /small-medium-businesses/ ☑ built (2 splits + 2 cards + 6 FAQs). NEXT = r37 non-profits
- r37 /non-profits/ ☑ built (3 splits + 5 FAQs). NEXT = r38 public-sector-talent-assessment-solution, then enterprise (menu)
- Enterprises (menu) /enterprise/ ☑ built (2 splits + cards + 4 FAQs). ✅ SOLUTIONS MEGA-MENU FULLY LINKED (industry 13 + use-case 5 + test-type 11 + company 5). Remaining use-cases (diversity/freelance/technical/sales/skills-validation) + logistics-industry still ☐. NEXT = r40 about / company + resource + legal rows
- r39 /video-interviewing-tool/ ✅
- r40 /about/ ✅ (verify vs live; leave content-mapped if flagged)
- r41 /contact/ ✅
- r42 /our-leadership/ ☑ built (founders grid [Abhishek Shah/Jiten Modi/Namrata Kamdar/Hemal Doshi — real roles via theorg] + wider-team grid + 3 leadership principles + backers band + CTA). Header About link wired. NEXT = r43 clients
- r43 /clients/ ☐
- r44 /write-for-us/ ☐
- r45 /product-tour/ ☐
- r46 /terms/ ☐
- r47 /investors/ ☐
- r48 /responsible-hiring/ ☐
- r49 /why-testlify/ ☐
- r50 /how-testlify-works/ ☐
- r51 /subject-matter-experts/ ☐
- r52 /careers/ ✅
- r53 /fair-refund-policy/ ☐
- r55 /candidate-honesty-policy-and-agreement/ ☐
- r56 /privacy-policy/ ☐
- r57 /cookie-policy/ ☐
- r58 /data-processing-agreement/ ☐
- r59 /service-level-agreement/ ☐
- r60 /blockchain-industry/ ☐ (industry template)
- r61 /skills-assessment-platform/ ☐ (or ⤳ ai-powered)
- r62 /whire/ ☐ (case study → customer-success-stories-detail)
- r63 /udder/ ☐
- r64 /playroll/ ☐
- r65 /comeet/ ☐
- r66 /whats-new/ ☐
- r67 /api/ ☐
- r68 /security-and-compliance/ ☐
- r69 /gdpr-compliance/ ☐
- r70 /gdpr-faqs/ ☐
- r71 /security-practices/ ☐
- r72 /security/ ☐
- r73 /white-label/ ☐
- r74 /data-residency/ ☐
- r75 /architecture-overview/ ☐
- r76 /security-control-and-visibility/ ☐
- r77 /information-security/ ☐
- r78 /assess-and-develop-your-workplace-abilities/ ☐
- r79 /designed-for-high-completion-rate/ ☐
- r80 /unleash-your-brands-potential/ ☐
- r81 /discover-the-power-of-rapid-team-scaling/ ☐
- r82 /ai-interview-question-generator/ ☐
- r83 /job-description-generator/ ☐
- r84 /multilingual-abilities/ ☐
- r85 /case-study/ ☐ (uses customer-success-stories-detail)
- r86 /press-kit/ ☐
- r87 /awards/ ☐
- r88 /submit-rfp-for-skills-assessment-ai-interviews-proctoring/ ☐
- r89 /brand/ ☐
- r90 /interview-as-a-service/ ☐
- r91 /testlify-the-recruiter-who-never-sleeps/ ☐ (blog post → blog-detail)
- r92 /system-compatibility-check-for-remote-asessments/ ☐
- r93 /skills-assessment-and-interviewing-platform/ ☐ (or ⤳)
- r94 /testlify-launches-conversational-ai-for-talent-assessment/ ☐ (blog post)
- r95 /getting-your-smart-personality-assessment-report/ ☐
- r96 /download-smart-personality-assessment-report/ ☐
- r97 /smart-personality-assessment/ ☐
- r98 /smart-personality-assessment-report/ ☐
- r99 /process-knowledge-tests/ ☐ (testtype template)
- r100 /testlify-information-security-standards/ ☐

### HR-tools calculators (mega-menu "HR tools" submenu — build with the working-calc pattern)
cost-per-hire-calculator ☐ · attrition-rate-calculator ☐ · free-employee-net-promoter-score-enps-calculator ☐ · applicant-funnel-calculator ☐ · average-time-to-hire-calculator ☐ · cost-of-employee-turnover-calculator ☐ · sourcing-channel-efficiency-calculator ☐ · remote-work-cost-savings-calculator ☐ · quality-of-hire-calculator ☐ · interview-to-offer-ratio-calculator ☐ · recruiting-conversion-rate-calculator ☐ · job-offer-acceptance-rate-calculator ☐ · hiring-manager-satisfaction-calculator ☐

---

## END TASKS (after all ☐ built)
1. **Rename built pages whose file ≠ live slug** and rewrite every `dc-import name`/`href`/`home-href` (encoded + raw, both quote styles) in one pass, then delete old files. Known rename: `solution-industry-it.dc.html` → `it-industry.dc.html`. (core-home stays.)
2. **Repoint every header + footer menu link** from `#` placeholder to its real file.
3. **Full broken-link audit:** grep every `href="..."`/`dc-import name="..."`; confirm each target file exists (or is an intended external/`#`). Fix stragglers.
4. Update `sitemap.dc.html` + CLAUDE.md to final state.

## Progress log (append per session)

### Authoring guidelines (apply to every page built/mapped)
- **Prioritise our design system** first; map live CONTENT into our components.
- **Reuse existing/created components** to present live content before building anything new.
- **Fetch images from the live site** (reference `testlify.com/wp-content/...` URLs; apply via `data-bg` on a div to avoid the unresolved-hole fetch error, or `<img>` where safe).
- **Hero = creative freedom:** make it engaging/lively (animated product/scorecard cards, floating badges, etc.) rather than a literal copy of the live hero image.
- **Appearing animation on ALL pages:** every section reveals via the rAF `.reveal`→`.in` sweep (scroll + resize + timer fallbacks + MutationObserver) used across the site.

- 2026-07: menu spec captured; IA switched to live 7-item; header rebuild done (multi-column, no-scroll). IT+Retail+Recruitment+Financial industries mapped. NEXT = r14 energy-industry.
- 2026-07 (COMPLETION SESSION): built ALL remaining rows r42→r100 + remaining Solutions instances. Shared assets added: `site-base.css` (tokens/layout/reveal classes), `reveal.js` (self-installing rAF sweep), `legal.css` (policy doc layout), `calc.css` (calculator UI). Built: our-leadership, clients, write-for-us, investors, why-testlify, how-testlify-works, subject-matter-experts, our-partners, job-openings, press-kit, awards, brand, product-tour, responsible-hiring; legal set (terms, privacy-policy, cookie-policy, fair-refund-policy, candidate-honesty-policy-and-agreement, data-processing-agreement, service-level-agreement, gdpr-compliance, gdpr-faqs, ccpa, data-privacy-framework); security suite (security, security-practices, security-and-compliance, information-security, testlify-information-security-standards, data-residency, architecture-overview, security-control-and-visibility); product/feature (whats-new, api, white-label, reporting-analytics, reseller-plan, multilingual-abilities, interview-as-a-service, skills-assessment-platform, skills-assessment-and-interviewing-platform, assess-and-develop-your-workplace-abilities, designed-for-high-completion-rate, unleash-your-brands-potential, discover-the-power-of-rapid-team-scaling); HR tools (2 generators + 13 WORKING calculators using data-driven logic classes); case studies (whire/udder/playroll/comeet as thin wrappers passing pageData to customer-success-stories-detail; case-study hub); 2 blog posts; personality flow (smart-personality-assessment + report + getting + download); template instances (blockchain-industry, process-knowledge-tests via template wrappers; logistics-supply-chain-industry + diversity-and-inclusions + freelance-hiring + technical-hiring + sales-hiring + skills-validation); misc (system-compatibility-check-for-remote-asessments [functional device check], submit-rfp-...).
- END TASKS DONE: (1) renamed solution-industry-it.dc.html → it-industry.dc.html (header ref updated). (2) Repointed EVERY header `#` placeholder — Solutions (logistics + 5 use-cases), Resources (ebooks→knowledge-base, podcasts→podcast), all 15 HR-tools submenu items, 3 Programs, About 4 (clients/partners/job-openings/write-for-us, desktop+mobile). (3) Broken-link audit across all 176 .dc.html files — 0 broken (fixed 3 stray demo.dc.html feature-card links → features.dc.html). Footer social `#` left intentionally. (4) Sitemap updated with new cards for every group. **All BUILD ORDER rows + Solutions instances now BUILT.** Remaining live-site rows not in scope were feature sub-pages (anti-cheating-features, multiple-question-types, video-interview-questions) — folded into the Features hub.
