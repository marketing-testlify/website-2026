import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Features — one platform for every way you assess talent",
  description:
    "From 13+ question types and AI proctoring to deep analytics, multilingual delivery and a full API — Testlify gives you every tool to run fair, rigorous assessments at scale.",
};

/* ---------------------------------------------------------------- */
/* Shared class strings, matching the prototype CSS exactly.        */
/* ---------------------------------------------------------------- */
const EYEBROW =
  "text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0";
const H2 =
  "text-[42px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[960px]:text-[32px] max-[960px]:tracking-[-1px]";
const LEAD = "text-[19px] leading-[1.6] text-body font-normal";

/* ---------------------------------------------------------------- */
/* FAQ data — verbatim from the prototype logic class               */
/* ---------------------------------------------------------------- */
const FAQ_ITEMS = [
  {
    q: "How many question types does Testlify support?",
    a: "13+ question formats — including coding, video, audio, file upload, multiple choice, essay, ranking, rating, fill-in-the-blank, Google Doc/Sheet/Slides tasks, qualifiers and more — all combinable in one assessment.",
  },
  {
    q: "How does anti-cheating work?",
    a: "Testlify combines webcam snapshots, full-screen enforcement, tab-switch and copy-paste detection, IP tracking, and plagiarism plus AI-answer detection. Every flag is transparent and reviewable.",
  },
  {
    q: "Can I integrate Testlify with my ATS?",
    a: "Yes — native two-way sync with 100+ ATS tools including Greenhouse, Lever and Workday, plus a full REST API and webhooks for custom flows.",
  },
  {
    q: "Is the platform available in other languages?",
    a: "The candidate experience is available in 9 languages, so assessments measure ability rather than English fluency.",
  },
  {
    q: "Can I white-label assessments?",
    a: "Yes. White-label the candidate experience with your own logo, domain and colours, and use SSO and role-based access for enterprise governance.",
  },
];

/* ---------------------------------------------------------------- */
/* Question-type gallery (12 cards) — copy + line icons verbatim    */
/* ---------------------------------------------------------------- */
type QCard = { name: string; desc: string; icon: ReactNode };
function qsvg(children: ReactNode) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}
const QUESTION_TYPES: QCard[] = [
  {
    name: "Coding",
    desc: "Live IDE across 45+ languages with hidden test cases.",
    icon: qsvg(
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    name: "Video response",
    desc: "Recorded answers scored against a rubric.",
    icon: qsvg(
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    ),
  },
  {
    name: "Audio",
    desc: "Voice answers for language and comms roles.",
    icon: qsvg(
      <>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      </>
    ),
  },
  {
    name: "File upload",
    desc: "Portfolios, docs and work samples.",
    icon: qsvg(
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
  },
  {
    name: "Multiple choice",
    desc: "Single- and multi-select, auto-graded.",
    icon: qsvg(
      <>
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
  {
    name: "Essay / open-ended",
    desc: "Long-form answers with AI-assisted scoring.",
    icon: qsvg(
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    ),
  },
  {
    name: "Fill in the blank",
    desc: "In-context recall, auto-scored.",
    icon: qsvg(
      <>
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="10" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="14" y2="21" />
      </>
    ),
  },
  {
    name: "Ranking",
    desc: "Order options by priority or preference.",
    icon: qsvg(
      <>
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </>
    ),
  },
  {
    name: "Rating scale",
    desc: "Likert and confidence-based responses.",
    icon: qsvg(
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
  },
  {
    name: "Google Doc / Sheet / Slides",
    desc: "Real-tool tasks scored on output.",
    icon: qsvg(
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </>
    ),
  },
  {
    name: "Qualifier",
    desc: "Knock-out screening questions.",
    icon: qsvg(
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </>
    ),
  },
  {
    name: "Number, date, dropdown & more",
    desc: "Structured inputs for precise, gradable answers.",
    icon: qsvg(
      <>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </>
    ),
  },
];

/* ---------------------------------------------------------------- */
/* Shared 22px line-icon helper for the platform capability cards.  */
/* ---------------------------------------------------------------- */
function csvg(children: ReactNode) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}
/* Platform capability cards (6) — copy + icons verbatim. */
type BCard = { name: string; body: ReactNode; icon: ReactNode };
const PLATFORM: BCard[] = [
  {
    name: "Multilingual delivery",
    body: "Deliver the candidate experience in 9 languages, so tests reflect ability — not English fluency.",
    icon: csvg(
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  {
    name: "100+ ATS integrations",
    body: (
      <>
        Native two-way sync with Greenhouse, Lever, Workday and 97 more.{" "}
        <Link
          href={routes.integrations}
          className="text-coral font-semibold hover:text-coral-hover"
        >
          See all &rarr;
        </Link>
      </>
    ),
    icon: csvg(
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
      </>
    ),
  },
  {
    name: "Candidate journey",
    body: "A branded, mobile-friendly experience with a 94% satisfaction rate keeps talent engaged.",
    icon: csvg(
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    name: "Custom question types",
    body: "Build and reuse your own question formats and score them your way.",
    icon: csvg(
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </>
    ),
  },
  {
    name: "Bias & fairness controls",
    body: (
      <>
        Structured, consistent scoring keeps every assessment EEOC-defensible.{" "}
        <Link
          href={routes.productScience}
          className="text-coral font-semibold hover:text-coral-hover"
        >
          Why it works &rarr;
        </Link>
      </>
    ),
    icon: csvg(<path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />),
  },
  {
    name: "Assessment builder",
    body: "Combine tests, set weights, timing and passing scores in minutes.",
    icon: csvg(
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </>
    ),
  },
];

/* Window chrome: traffic lights + address bar. */
function MockTop({ bar }: { bar: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-[13px] border-b border-[#F4ECEC] bg-[#FCFAFA]">
      <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
      <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
      <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
      <span className="ml-3 flex-1 h-[26px] rounded-lg bg-[#F3EAEA] flex items-center px-3 text-[11.5px] text-faint font-medium">
        {bar}
      </span>
    </div>
  );
}

/* .chk — coral check chip + point text (split copy). */
function Chk({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start mb-[14px] last:mb-0">
      <span className="flex-none w-6 h-6 rounded-[7px] bg-coral flex items-center justify-center mt-px">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <p className="text-[16px] leading-[1.66] text-body m-0">{children}</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="13+ question types, AI proctoring and full analytics — all in one platform."
        announcementCta="Explore features"
        announcementHref="#question-types"
      />

      {/* HERO */}
      <section className="relative overflow-hidden text-center px-7 pt-[72px] pb-[60px] max-[960px]:pt-11 max-[960px]:pb-12 bg-[radial-gradient(1100px_540px_at_78%_6%,#FFF0EE_0%,rgba(255,240,238,0)_60%),#fff]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="flex justify-center" delay={0.02}>
            <span className="inline-flex items-center gap-[9px] bg-white border border-[#F4D9DA] rounded-full pl-2 pr-[15px] py-[7px] text-[13px] font-semibold text-[#A8323A] shadow-[0_6px_16px_rgba(110,11,14,0.06)]">
              <span className="bg-coral text-white text-[11px] font-bold tracking-[0.04em] px-[9px] py-[3px] rounded-full">
                FEATURES
              </span>
              Everything you need to assess
            </span>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="text-[60px] leading-[1.05] font-extrabold tracking-[-2px] text-ink mt-[22px] mx-auto max-w-[900px] max-[960px]:text-[42px] max-[960px]:tracking-[-1.2px]"
          >
            One platform for every
            <br />
            way you <span className="text-coral">assess talent.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className={`${LEAD} mt-[22px] mx-auto max-w-[620px]`}
          >
            From 13+ question types and AI proctoring to deep analytics,
            multilingual delivery and a full API — Testlify gives you every tool
            to run fair, rigorous assessments at scale.
          </Reveal>
          <Reveal
            delay={0.14}
            className="flex items-center gap-[14px] flex-wrap justify-center mt-[30px]"
          >
            <CtaButton
              label="Try for free"
              href={routes.pricing}
              variant="primary"
              size="md"
              icon="arrow"
            />
            <CtaButton
              label="Book a demo"
              href={routes.contact}
              variant="secondary"
              size="md"
              icon="play"
            />
          </Reveal>
          <Reveal
            delay={0.18}
            className="flex items-center gap-[13px] flex-wrap justify-center mt-[26px] text-[13.5px] text-muted font-semibold"
          >
            <span>13+ question types</span>
            <span className="w-1 h-1 rounded-full bg-[#D9C7C9]" />
            <span>9 candidate languages</span>
            <span className="w-1 h-1 rounded-full bg-[#D9C7C9]" />
            <span>SOC 2 · ISO 27001 · GDPR</span>
          </Reveal>
        </div>
      </section>

      {/* JUMP NAV (sticky under the solid header) */}
      <nav className="sticky top-16 z-40 bg-white/[0.86] backdrop-blur-[12px] backdrop-saturate-[180%] border-t border-b border-[#F4E7E8] max-[960px]:top-14">
        <div className="max-w-[1240px] mx-auto px-7 flex gap-[6px] overflow-x-auto">
          {[
            ["Question types", "#question-types"],
            ["Anti-cheating", "#proctoring"],
            ["Reporting", "#analytics"],
            ["Platform", "#platform"],
            ["API & white label", "#developers"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap px-[14px] py-[15px] text-[13.5px] font-semibold text-body2 border-b-2 border-transparent transition-[color,border-color] duration-200 hover:text-coral hover:border-coral"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* QUESTION TYPES */}
      <section id="question-types" className="px-7 py-24 max-[960px]:py-16 bg-white scroll-mt-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[660px] mx-auto mb-12 text-center">
            <Reveal as="p" className={`${EYEBROW} flex justify-center`}>
              13+ question types<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} mt-4`}>
              Ask anything, score everything
            </Reveal>
            <Reveal as="p" delay={0.08} className={`${LEAD} mt-4`}>
              Mix and match formats in a single assessment — from live coding and
              video responses to file uploads and Google-doc tasks — all
              auto-scored where it counts.
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-4 gap-[14px] max-[960px]:grid-cols-2">
            {QUESTION_TYPES.map((q) => (
              <div
                key={q.name}
                className="bg-white border border-warm rounded-[15px] px-[18px] py-5 transition-[translate,border-color,box-shadow] duration-[280ms] ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                <div className="w-10 h-10 rounded-[11px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[14px]">
                  {q.icon}
                </div>
                <p className="text-[15px] font-bold text-ink leading-[1.25] m-0 mb-[5px]">
                  {q.name}
                </p>
                <p className="text-[12.5px] leading-[1.5] text-muted m-0">
                  {q.desc}
                </p>
              </div>
            ))}
          </Reveal>
          <Reveal
            as="p"
            className="text-center mt-6 text-[14px] text-faint"
          >
            …and more. Every question type can be combined into a single, timed,
            auto-scored assessment.
          </Reveal>
        </div>
      </section>

      {/* ANTI-CHEATING (split) */}
      <section id="proctoring" className="px-7 py-24 max-[960px]:py-16 bg-sand scroll-mt-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.02fr_1.05fr] gap-16 items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <Reveal>
              <p className={EYEBROW}>
                Anti-cheating &amp; proctoring
                <b className="text-coral font-semibold">.</b>
              </p>
              <h2 className={`${H2} mb-5`}>Results you can trust, at any scale</h2>
              <Chk>
                Webcam snapshots and full-screen enforcement flag suspicious
                behaviour.
              </Chk>
              <Chk>
                Tab-switch, copy-paste and multiple-face detection catch
                shortcuts.
              </Chk>
              <Chk>
                IP tracking, plagiarism and AI-answer detection on written
                responses.
              </Chk>
              <Chk>
                Every flag is transparent and reviewable — no black-box
                rejections.
              </Chk>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="bg-white border border-warm rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <MockTop bar="Proctoring report · Backend Engineer test" />
                <div className="p-5">
                  <ProcRow label="Webcam integrity" flag="CLEAR" tone="ok" />
                  <ProcRow label="Full-screen maintained" flag="CLEAR" tone="ok" />
                  <ProcRow label="Tab switches detected" flag="2 FLAGS" tone="warn" />
                  <ProcRow
                    label="Plagiarism & AI check"
                    flag="PASSED"
                    tone="ok"
                    last
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REPORTING (split reversed) */}
      <section id="analytics" className="px-7 py-24 max-[960px]:py-16 bg-white scroll-mt-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.02fr_1.05fr] gap-16 items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <Reveal className="order-2">
              <p className={EYEBROW}>
                Reporting &amp; analytics
                <b className="text-coral font-semibold">.</b>
              </p>
              <h2 className={`${H2} mb-5`}>
                See how every candidate really stacks up
              </h2>
              <p className={`${LEAD} m-0`}>
                Benchmarked scores, per-skill breakdowns and time-to-complete
                analytics — exportable and synced back to your ATS. Compare
                candidates on evidence, spot your strongest talent instantly, and
                share clear reports with hiring managers.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="order-1">
              <div className="bg-white border border-warm rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <MockTop bar="Candidate analytics · Senior Frontend" />
                <div className="p-5">
                  <div className="text-[12px] mb-2 text-muted">
                    Score distribution · 412 candidates
                  </div>
                  <div className="flex items-end gap-[10px] h-[130px] pt-[10px] px-1">
                    {[30, 52, 74, 100, 88, 60, 38].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-[7px] bg-[linear-gradient(180deg,#F23F44,#FF9E7A)]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-[10px] text-[11px] text-faint">
                    <span>0–40</span>
                    <span>40–60</span>
                    <span>60–80</span>
                    <span>80–100</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLATFORM (grid) */}
      <section id="platform" className="px-7 py-24 max-[960px]:py-16 bg-sand scroll-mt-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-12 text-center">
            <Reveal as="p" className={`${EYEBROW} flex justify-center`}>
              Built for real hiring teams
              <b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} mt-4`}>
              Everything else you&apos;d expect — and more
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-1">
            {PLATFORM.map((b) => (
              <div
                key={b.name}
                className="bg-white border border-warm rounded-[18px] px-6 py-7 transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                <div className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-5">
                  {b.icon}
                </div>
                <h3 className="text-[18px] font-bold text-ink m-0 mb-[9px] tracking-[-0.3px]">
                  {b.name}
                </h3>
                <p className="text-[14.5px] leading-[1.66] text-body m-0">
                  {b.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* DEVELOPERS (split) */}
      <section id="developers" className="px-7 py-24 max-[960px]:py-16 bg-white scroll-mt-[120px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.02fr_1.05fr] gap-16 items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <Reveal>
              <p className={EYEBROW}>
                Developers &amp; enterprise
                <b className="text-coral font-semibold">.</b>
              </p>
              <h2 className={`${H2} mb-5`}>API-first and fully white-label</h2>
              <Chk>
                A full REST API and webhooks to embed assessments in your own
                product.
              </Chk>
              <Chk>
                White-label the candidate experience with your logo, domain and
                colours.
              </Chk>
              <Chk>
                SSO, audit trails and role-based access for enterprise
                governance.
              </Chk>
              <div className="mt-[26px]">
                <CtaButton
                  label="Read the API docs"
                  href="#"
                  variant="primary"
                  size="md"
                  icon="arrow"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="bg-white border border-warm rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <MockTop bar="POST /v1/assessments" />
                <div className="p-5 bg-[#FCFAFA] text-[12.5px] leading-[1.7] text-body [font-family:ui-monospace,Menlo,monospace]">
                  <div>
                    <span className="text-[#1F9D6B]">POST</span> /v1/assessments
                  </div>
                  <div className="text-faint">{"{"}</div>
                  <div className="pl-4">
                    &quot;role&quot;:{" "}
                    <span className="text-coral">&quot;Backend Engineer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    &quot;tests&quot;: [
                    <span className="text-coral">&quot;python&quot;</span>,{" "}
                    <span className="text-coral">&quot;sql&quot;</span>],
                  </div>
                  <div className="pl-4">
                    &quot;proctoring&quot;:{" "}
                    <span className="text-[#2A6FDB]">true</span>,
                  </div>
                  <div className="pl-4">
                    &quot;webhook&quot;:{" "}
                    <span className="text-coral">&quot;https://…&quot;</span>
                  </div>
                  <div className="text-faint">{"}"}</div>
                  <div className="mt-2 text-[#1F9D6B]">
                    → 201 Created · assessment_id: as_9f3
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Security & compliance"
        heading="Enterprise-grade security by default"
        sub="SOC 2 Type II, ISO 27001 and GDPR compliance, granular admin controls and full audit trails keep your assessment data protected at every step."
      />

      {/* FAQ */}
      <section className="px-7 py-24 max-[960px]:py-16 bg-sand">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-11">
            <Reveal as="p" className={`${EYEBROW} flex justify-center`}>
              FAQ<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} mt-4`}>
              Frequently asked questions
            </Reveal>
          </div>
          <Reveal>
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

/* .pline — proctoring report row. */
function ProcRow({
  label,
  flag,
  tone,
  last,
}: {
  label: string;
  flag: string;
  tone: "ok" | "warn";
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-[14px] py-3 border border-[#F1E6E7] rounded-xl text-[13.5px] ${
        last ? "" : "mb-[10px]"
      }`}
    >
      <span>{label}</span>
      <span
        className={`ml-auto text-[10.5px] font-bold tracking-[0.05em] px-[10px] py-1 rounded-full ${
          tone === "ok"
            ? "bg-[#EAF8F0] text-[#1F9D6B]"
            : "bg-[#FFF4E6] text-[#C7791B]"
        }`}
      >
        {flag}
      </span>
    </div>
  );
}
