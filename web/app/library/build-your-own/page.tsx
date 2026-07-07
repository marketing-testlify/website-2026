import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import FAQ from "@/components/FAQ";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Build your own — custom tests & questions",
  description:
    "Start from a blank canvas or any of 3,500+ validated tests, add your own questions in 13+ formats, and combine everything into one job-ready assessment — no code, ready in minutes.",
};

/* ---------------------------------------------------------------- */
/* FAQ data — verbatim from the prototype logic class               */
/* ---------------------------------------------------------------- */

const FAQ_ITEMS = [
  {
    q: "Do I need any coding or setup to build a test?",
    a: "No. The builder is fully drag-and-drop. You add questions, set time limits and scoring in the interface — nothing to install and no code required.",
  },
  {
    q: "Can I combine my own questions with tests from the library?",
    a: "Yes. Start from a blank canvas or any of 3,500+ validated tests, then add your own questions and even an AI interview into a single job-ready assessment.",
  },
  {
    q: "How does scoring work for open-ended questions?",
    a: "Auto-scorable formats like MCQ, coding and spreadsheets are graded instantly. For essays, video and file uploads you score against a rubric, and results roll up into one ranked shortlist.",
  },
  {
    q: "Are custom questions reviewed for quality?",
    a: "They can be. Send any custom question for peer review and our subject-matter experts validate difficulty, fairness and scoring before it goes live — the same rigour as our validated library.",
  },
  {
    q: "Can I brand the assessment as my own?",
    a: "Yes. Add your logo, colours and welcome message on every plan. Paid plans add white-labelling and a custom domain so the whole candidate experience is yours.",
  },
  {
    q: "What plan do I need to build my own tests?",
    a: "Building custom tests is available across paid plans. Start a 7-day free trial with no credit card to try the full builder before you decide.",
  },
];

/* ---------------------------------------------------------------- */
/* Shared class fragments                                            */
/* ---------------------------------------------------------------- */

const WRAP = "max-w-[1240px] mx-auto px-7";
const SEC = "py-24 px-7 max-[640px]:py-16 max-[640px]:px-[22px]";
const SHEAD = "max-w-[720px] mx-auto mb-[52px] text-center";
const EYEBROW = "text-[13px] font-bold tracking-[0.16em] uppercase text-coral m-0 mb-3.5";
const H2 = "text-[38px] leading-[1.1] font-extrabold tracking-[-1px] m-0 text-ink max-[640px]:text-[28px]";
const H2P = "text-[17px] leading-[1.6] text-body2 mt-4 mb-0";

/* non-link card hover: lift + warm shadow. Tailwind v4 gotcha — -translate-y-*
   sets the CSS `translate` property, so the arbitrary transition list includes it. */
const CARD_HOVER =
  "[transition:translate_.3s_cubic-bezier(.2,.7,.3,1),border-color_.3s,box-shadow_.3s] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]";

/* ---------------------------------------------------------------- */
/* Tiny inline SVG icons                                             */
/* ---------------------------------------------------------------- */

function GripIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="9" cy="6" r="1" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="9" cy="18" r="1" />
      <circle cx="15" cy="6" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="15" cy="18" r="1" />
    </svg>
  );
}

function CheckMini() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12l5 5L20 6" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Hero builder rows                                                 */
/* ---------------------------------------------------------------- */

const BUILDER_ROWS: {
  on?: boolean;
  gradient: string;
  icon: ReactNode;
  name: string;
  meta: string;
  qn: string;
}[] = [
  {
    on: true,
    gradient: "linear-gradient(135deg,#7C5CFF,#5B7BFF)",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    name: "Portfolio walkthrough",
    meta: "Video response · custom",
    qn: "3 Q",
  },
  {
    gradient: "linear-gradient(135deg,#1FB57A,#12A063)",
    icon: (
      <>
        <path d="M12 20h9M4 20l8-8" />
        <path d="M14 6l4 4L8 20H4v-4z" />
      </>
    ),
    name: "Figma auto-layout",
    meta: "From library · validated",
    qn: "18 Q",
  },
  {
    gradient: "linear-gradient(135deg,#FF9F43,#F76A2E)",
    icon: <path d="M4 6h16M4 12h16M4 18h10" />,
    name: "Design critique essay",
    meta: "Long answer · custom",
    qn: "1 Q",
  },
];

/* ---------------------------------------------------------------- */
/* How-it-works steps                                               */
/* ---------------------------------------------------------------- */

const STEPS: { n: string; icon: ReactNode; title: ReactNode; desc: string }[] = [
  {
    n: "STEP 01",
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
      </>
    ),
    title: "Start from scratch or a template",
    desc: "Open a blank assessment or duplicate any of 3,500+ validated tests as your starting point.",
  },
  {
    n: "STEP 02",
    icon: <path d="M12 5v14M5 12h14" />,
    title: "Add your own questions",
    desc: "Write questions in 13+ formats — MCQ, coding, video, essay, spreadsheet, file upload and more.",
  },
  {
    n: "STEP 03",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    title: "Combine tests & interviews",
    desc: "Mix multiple tests plus an AI interview into one evaluation, then set weighting and pass marks.",
  },
  {
    n: "STEP 04",
    icon: (
      <>
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4z" />
      </>
    ),
    title: "Publish & invite candidates",
    desc: "Share a link or sync to your ATS. Auto-scored results and a ranked shortlist land in your dashboard.",
  },
];

/* ---------------------------------------------------------------- */
/* Question formats                                                 */
/* ---------------------------------------------------------------- */

const FORMATS: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    title: "Multiple choice",
    desc: "Single or multi-select, shuffled options, instant auto-scoring.",
  },
  {
    icon: (
      <>
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </>
    ),
    title: "Coding challenge",
    desc: "In-browser IDE, 45+ languages, hidden test cases and live coding.",
  },
  {
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    title: "Video response",
    desc: "Ask candidates to record an answer on camera, review async.",
  },
  {
    icon: <path d="M4 6h16M4 12h16M4 18h10" />,
    title: "Essay & long answer",
    desc: "Free-text with word limits and rubric-based scoring.",
  },
  {
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18" />
      </>
    ),
    title: "Spreadsheet",
    desc: "Live Excel/Sheets-style tasks scored on the final output.",
  },
  {
    icon: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5M12 15V3" />
      </>
    ),
    title: "File upload",
    desc: "Portfolios, designs or documents submitted for review.",
  },
  {
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    title: "Case & scenario",
    desc: "Situational judgment prompts with weighted response options.",
  },
  {
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
    title: "Fill in the blank",
    desc: "Precise recall and terminology checks, auto-graded.",
  },
  {
    icon: <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />,
    title: "& more formats",
    desc: "Audio, image-based, typing, slider and matching questions too.",
  },
];

/* ---------------------------------------------------------------- */
/* Stats band                                                       */
/* ---------------------------------------------------------------- */

const STATS: [string, string][] = [
  ["13+", "Question formats"],
  ["45+", "Coding languages"],
  ["3,500+", "Tests to start from"],
  ["16+", "Candidate languages"],
];

/* ---------------------------------------------------------------- */
/* Small building blocks                                            */
/* ---------------------------------------------------------------- */

function RvHead({ gradient, icon, title, sub }: { gradient: string; icon: ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-2.5 pb-3.5 border-b border-[#F4E7E8] mb-3.5">
      <span className="w-9 h-9 rounded-[10px] flex items-center justify-center text-white flex-none" style={{ background: gradient }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <div>
        <div className="text-[14.5px] font-bold tracking-[-0.2px]">{title}</div>
        <div className="text-[12px] text-muted font-medium">{sub}</div>
      </div>
    </div>
  );
}

const MROW = "flex items-center gap-3 py-[11px] border-b border-[#F7EDEE] last:border-b-0";
const ML = "flex-1 text-[14px] font-semibold text-[#2A1A1D]";

function RList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[11px] m-0 p-0 list-none">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-[11px] text-[15px] font-medium text-[#3C2C2F] leading-[1.45]">
          <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFF0EF] text-coral flex items-center justify-center mt-px">
            <CheckMini />
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                             */
/* ---------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Build a custom assessment in minutes — add your own questions, no code needed"
        announcementCta="Start building"
      />

      {/* Page-scoped decorative loops (once visible) + play-icon height match.
          Scoped/unlayered CSS, no same-property conflicts with utilities. */}
      <style>{`
        @keyframes byHeroGrad{0%{background-position:0% 0%}50%{background-position:100% 100%}100%{background-position:0% 0%}}
        @keyframes byBlob{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-26px) scale(1.12)}66%{transform:translate(-26px,22px) scale(.93)}}
        @keyframes byFloaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
        @keyframes byFloaty2{0%,100%{transform:translateY(0)}50%{transform:translateY(11px)}}
        .by-hero-anim{background:radial-gradient(1100px 520px at 82% 4%,#FCE0E1 0%,rgba(252,224,225,0) 58%),radial-gradient(900px 540px at 4% 62%,#FFEDED 0%,rgba(255,237,237,0) 52%),linear-gradient(180deg,#FFF8F7 0%,#FFFBFA 72%,#fff 100%);background-size:170% 170%;animation:byHeroGrad 30s ease-in-out infinite;}
        .by-blob-anim{animation:byBlob 22s ease-in-out infinite reverse;}
        .by-f1-anim{animation:byFloaty 6s ease-in-out infinite;}
        .by-f2-anim{animation:byFloaty2 7s ease-in-out infinite;}
        .by-demo > span:first-child{width:24px;height:24px;}
        @media(prefers-reduced-motion:reduce){.by-hero-anim,.by-blob-anim,.by-f1-anim,.by-f2-anim{animation:none;}}
      `}</style>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-[78px] pb-[68px] px-7 by-hero-anim max-[640px]:pt-11 max-[640px]:pb-10 max-[640px]:px-[22px]">
        <div className="absolute bottom-[-140px] left-[-90px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle_at_60%_40%,#FDD5D6,#FBA3A5)] blur-[34px] opacity-[.16] by-blob-anim pointer-events-none" />
        <div className={`${WRAP} relative`}>
          <div className="grid grid-cols-[1.04fr_.96fr] gap-14 items-center max-[1000px]:grid-cols-1 max-[1000px]:gap-11">
            {/* left column */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-[9px] bg-white border border-[#FBD0D1] py-2 px-4 rounded-full shadow-[0_6px_18px_rgba(242,63,68,0.10)]">
                  <span className="w-2 h-2 rounded-full bg-coral" />
                  <span className="text-[13.5px] font-semibold text-coral-deep tracking-[0.2px]">
                    Build your own · custom tests &amp; questions
                  </span>
                </span>
              </Reveal>
              <Reveal
                as="h1"
                delay={0.08}
                className="text-[52px] leading-[1.05] font-extrabold tracking-[-1.4px] text-ink mt-[22px] mb-0 max-w-[640px] max-[640px]:text-[36px]"
              >
                Your role. Your questions.
                <br />
                <span className="text-coral">Your assessment.</span>
              </Reveal>
              <Reveal as="p" delay={0.15} className="text-[18px] leading-[1.62] text-body mt-5 mb-0 max-w-[560px]">
                Start from a blank canvas or any of 3,500+ validated tests, add your own questions in 13+ formats, and
                combine everything into one job-ready assessment — no code, ready in minutes.
              </Reveal>
              <Reveal delay={0.22} className="flex flex-wrap gap-3.5 mt-[34px]">
                <CtaButton
                  label="Try for free"
                  href={routes.pricing}
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  className="border-[1.5px] border-transparent"
                />
                <CtaButton label="Book a demo" href={routes.contact} variant="secondary" size="lg" icon="play" className="by-demo" />
              </Reveal>
              <Reveal delay={0.27} className="flex items-center gap-6 flex-wrap mt-5 text-[14.5px] text-muted font-medium">
                {["7-day free trial", "No credit card required", "SME-reviewed on request"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-[7px]">
                    <span className="text-coral">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12l5 5L20 6" />
                      </svg>
                    </span>
                    {t}
                  </span>
                ))}
              </Reveal>
            </div>

            {/* right column — builder visual */}
            <Reveal delay={0.18} className="relative max-[1000px]:max-w-[460px]">
              <div className="relative bg-white rounded-[24px] shadow-[0_30px_70px_rgba(110,11,14,0.18)] p-[18px] border border-[#FBE4E5] z-[2]">
                <div className="flex items-center gap-[7px] px-0.5 pb-3.5 border-b border-[#F4E7E8] mb-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2.5 text-[12px] text-faint font-medium bg-[#FBF3F3] py-1 px-3 rounded-lg flex-1">
                    app.testlify.com/build
                  </span>
                </div>
                <div className="flex items-center justify-between mb-[13px]">
                  <span className="text-[14.5px] font-bold text-ink tracking-[-0.2px]">Senior Product Designer</span>
                  <span className="text-[11px] font-bold tracking-[0.03em] uppercase text-[#1F9D6B] bg-[#E7F6EE] py-1 px-2.5 rounded-full">
                    Draft
                  </span>
                </div>
                <div className="flex flex-col gap-[9px]">
                  {BUILDER_ROWS.map((r) => (
                    <div
                      key={r.name}
                      className={`flex items-center gap-3 border-[1.5px] rounded-[13px] py-[11px] px-[13px] [transition:border-color_.25s,box-shadow_.25s] ${
                        r.on ? "bg-[#FFF6F6] border-[#FBD0D1]" : "bg-white border-[#F2E6E7]"
                      }`}
                    >
                      <span className="text-[#D9C4C6] flex flex-none cursor-grab">
                        <GripIcon />
                      </span>
                      <span className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center flex-none text-white" style={{ background: r.gradient }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {r.icon}
                        </svg>
                      </span>
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <span className="text-[14px] font-bold text-ink tracking-[-0.2px]">{r.name}</span>
                        <span className="text-[11.5px] text-muted font-medium">{r.meta}</span>
                      </div>
                      <span className="text-[11.5px] font-bold text-[#B29A9E] flex-none">{r.qn}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-[9px] border-[1.6px] border-dashed border-[#F4C7C8] rounded-[13px] p-3 mt-[11px] text-coral text-[13.5px] font-bold bg-[#FFFAFA]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add question or test
                </div>
              </div>

              {/* floating chips */}
              <div className="absolute top-[-24px] right-4 by-f1-anim bg-white rounded-2xl shadow-[0_18px_40px_rgba(110,11,14,0.16)] py-3 px-4 flex items-center gap-3 border border-[#FBE4E5] z-[3]">
                <span className="w-[34px] h-[34px] rounded-[10px] bg-[linear-gradient(135deg,#F76A6E,#F23F44)] flex items-center justify-center text-white font-extrabold text-[12.5px]">
                  13+
                </span>
                <div>
                  <div className="text-[11.5px] text-muted font-medium">Question formats</div>
                  <div className="text-[15px] font-bold text-ink">MCQ · video · code</div>
                </div>
              </div>
              <div className="absolute bottom-[-22px] left-[-28px] by-f2-anim bg-white rounded-2xl shadow-[0_18px_40px_rgba(110,11,14,0.16)] py-3 px-4 flex items-center gap-3 border border-[#FBE4E5] z-[3]">
                <span className="w-[34px] h-[34px] rounded-full bg-[#E7F6EE] flex items-center justify-center text-[#1F9D6B]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12l5 5L20 6" />
                  </svg>
                </span>
                <div>
                  <div className="text-[11.5px] text-muted font-medium">Every custom test</div>
                  <div className="text-[15px] font-bold text-ink">SME-reviewed</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS (sand) ============ */}
      <section className={`${SEC} bg-sand`}>
        <div className={WRAP}>
          <Reveal className={SHEAD}>
            <div className={EYEBROW}>
              How it works<span className="text-coral">.</span>
            </div>
            <h2 className={H2}>From blank canvas to shortlist in four steps</h2>
            <p className={H2P}>
              A drag-and-drop builder does the heavy lifting. You bring the questions that matter for the role.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="grid grid-cols-4 gap-[18px] max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
            {STEPS.map((s) => (
              <div key={s.n} className={`bg-white border-[1.4px] border-[#F0E2E3] rounded-[18px] py-[26px] px-6 ${CARD_HOVER}`}>
                <div className="text-[13px] font-extrabold text-coral tracking-[0.02em] mb-4">{s.n}</div>
                <div className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0EF] text-coral flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold tracking-[-0.3px] mt-0 mb-2">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.55] text-body2 m-0">{s.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ QUESTION FORMATS (white) ============ */}
      <section className={SEC}>
        <div className={WRAP}>
          <Reveal className={SHEAD}>
            <div className={EYEBROW}>
              Question formats<span className="text-coral">.</span>
            </div>
            <h2 className={H2}>13+ ways to ask what actually matters</h2>
            <p className={H2P}>
              Go beyond multiple choice. Every format is auto-scored where it can be, and rubric-scored where it can&apos;t.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
            {FORMATS.map((f) => (
              <div key={f.title} className={`flex items-start gap-[15px] bg-white border-[1.4px] border-[#F0E2E3] rounded-[16px] py-5 px-[22px] ${CARD_HOVER}`}>
                <span className="w-[42px] h-[42px] rounded-[12px] bg-[#FFF0EF] text-coral flex items-center justify-center flex-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="text-[16px] font-bold tracking-[-0.2px] mt-0.5 mb-[5px]">{f.title}</h3>
                  <p className="text-[13.5px] leading-[1.5] text-muted2 m-0">{f.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ WHY BUILD (sand) ============ */}
      <section className={`${SEC} bg-sand`}>
        <div className={WRAP}>
          <Reveal className={SHEAD}>
            <div className={EYEBROW}>
              Why build with Testlify<span className="text-coral">.</span>
            </div>
            <h2 className={H2}>Custom, but never guesswork</h2>
            <p className={H2P}>
              Your questions get the same rigour, fairness and scoring science as our validated library.
            </p>
          </Reveal>

          <div className="flex flex-col gap-10">
            {/* Row 1 — SME review */}
            <Reveal className="grid grid-cols-2 gap-14 items-center max-[1000px]:grid-cols-1 max-[1000px]:gap-[30px]">
              <div>
                <div className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-coral mb-3">SME review on request</div>
                <h3 className="text-[28px] font-extrabold tracking-[-0.6px] leading-[1.14] m-0 mb-3.5">
                  Write it yourself — or have an expert pressure-test it
                </h3>
                <p className="text-[16px] leading-[1.62] text-body m-0 mb-[18px] max-w-[480px]">
                  Draft custom questions in minutes. Need extra confidence? Send them for peer review and our
                  subject-matter experts validate difficulty, fairness and scoring before you go live.
                </p>
                <RList items={["Difficulty calibrated to the role", "Bias and readability checks", "Model answers & scoring rubrics"]} />
              </div>
              <div className="bg-white border border-[#F0E2E3] rounded-[20px] p-[22px] shadow-[0_16px_34px_rgba(110,11,14,0.08)]">
                <RvHead
                  gradient="linear-gradient(135deg,#7C5CFF,#5B7BFF)"
                  icon={
                    <>
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </>
                  }
                  title="Review report"
                  sub="3 custom questions checked"
                />
                {[
                  ["Role relevance", 94, "94%"],
                  ["Difficulty fit", 88, "88%"],
                  ["Fairness & bias", 97, "Pass"],
                ].map(([label, w, val]) => (
                  <div key={label as string} className={MROW}>
                    <span className={ML}>{label}</span>
                    <span className="h-2 rounded-full bg-[#F4E7E8] overflow-hidden flex-1 max-w-[120px]">
                      <span className="block h-full rounded-full bg-[linear-gradient(90deg,#FF7A52,#F23F44)]" style={{ width: `${w}%` }} />
                    </span>
                    <span className="text-[12.5px] font-bold" style={{ color: "#1F9D6B" }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Row 2 — proctoring (flip: visual left) */}
            <Reveal className="grid grid-cols-2 gap-14 items-center max-[1000px]:grid-cols-1 max-[1000px]:gap-[30px]">
              <div>
                <div className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-coral mb-3">Fair &amp; cheat-resistant</div>
                <h3 className="text-[28px] font-extrabold tracking-[-0.6px] leading-[1.14] m-0 mb-3.5">
                  Every custom test comes proctored by default
                </h3>
                <p className="text-[16px] leading-[1.62] text-body m-0 mb-[18px] max-w-[480px]">
                  Question shuffling, time limits, webcam snapshots, tab-switch detection and plagiarism checks apply to
                  your own questions automatically — so scores stay trustworthy.
                </p>
                <RList items={["Randomised order per candidate", "Webcam & tab-switch monitoring", "Plagiarism & AI-answer detection"]} />
              </div>
              <div className="bg-white border border-[#F0E2E3] rounded-[20px] p-[22px] shadow-[0_16px_34px_rgba(110,11,14,0.08)] order-first max-[1000px]:order-none">
                <RvHead
                  gradient="linear-gradient(135deg,#1FB57A,#12A063)"
                  icon={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                  title="Integrity checks"
                  sub="Live during the assessment"
                />
                {["Question shuffle", "Webcam proctoring", "Tab-switch detection", "Plagiarism scan"].map((label) => (
                  <div key={label} className={MROW}>
                    <span className={ML}>{label}</span>
                    <span className="text-[12.5px] font-bold" style={{ color: "#1F9D6B" }}>
                      On
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Row 3 — branding */}
            <Reveal className="grid grid-cols-2 gap-14 items-center max-[1000px]:grid-cols-1 max-[1000px]:gap-[30px]">
              <div>
                <div className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-coral mb-3">Make it yours</div>
                <h3 className="text-[28px] font-extrabold tracking-[-0.6px] leading-[1.14] m-0 mb-3.5">
                  Brand the whole candidate experience
                </h3>
                <p className="text-[16px] leading-[1.62] text-body m-0 mb-[18px] max-w-[480px]">
                  Add your logo, colours and a custom welcome message. On paid plans, white-label the assessment and send
                  it from your own domain for a seamless candidate journey.
                </p>
                <RList items={["Logo, colours & welcome copy", "White-label & custom domain", "16+ candidate languages"]} />
              </div>
              <div className="bg-white border border-[#F0E2E3] rounded-[20px] p-[22px] shadow-[0_16px_34px_rgba(110,11,14,0.08)]">
                <RvHead
                  gradient="linear-gradient(135deg,#FF9F43,#F76A2E)"
                  icon={
                    <>
                      <circle cx="13.5" cy="6.5" r="2.5" />
                      <circle cx="17.5" cy="10.5" r="2.5" />
                      <circle cx="8.5" cy="7.5" r="2.5" />
                      <circle cx="6.5" cy="12.5" r="2.5" />
                      <path d="M12 2a10 10 0 1 0 0 20c1 0 1.5-.8 1.5-1.5 0-.4-.2-.8-.5-1a1.5 1.5 0 0 1 1-2.6H16a4 4 0 0 0 4-4 8 8 0 0 0-8-8z" />
                    </>
                  }
                  title="Candidate view"
                  sub="Your brand, front and centre"
                />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 py-3.5 px-4 border-[1.4px] border-[#F2E6E7] rounded-[13px]">
                    <span className="w-10 h-10 rounded-[10px] bg-[linear-gradient(135deg,#FF7A52,#F23F44)] flex items-center justify-center text-white font-extrabold text-[17px] flex-none">
                      A
                    </span>
                    <div>
                      <div className="text-[14.5px] font-bold tracking-[-0.2px]">Acme Corp assessment</div>
                      <div className="text-[12px] text-muted font-medium">assess.acme.com</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-0.5">
                    <span className="text-[12px] text-muted font-semibold">Brand colours</span>
                    <span className="flex gap-[9px]">
                      {["#F23F44", "#1A1014", "#FF9F43"].map((c) => (
                        <span key={c} className="w-[34px] h-[34px] rounded-[9px] border-2 border-white shadow-[0_2px_8px_rgba(110,11,14,0.12)]" style={{ background: c }} />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ STATS (dark) ============ */}
      <section className={`${SEC} text-white [background:radial-gradient(900px_460px_at_50%_0%,#2A1417_0%,#1A1014_60%)]`}>
        <div className={WRAP}>
          <Reveal className={SHEAD}>
            <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-coral-bright m-0 mb-3.5">
              Built on proven science<span className="text-coral-bright">.</span>
            </div>
            <h2 className={`${H2} text-white`}>Custom questions, credible signals</h2>
          </Reveal>
          <Reveal delay={0.12} className="grid grid-cols-4 gap-5 max-w-[960px] mx-auto max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
            {STATS.map(([n, label]) => (
              <div key={label} className="text-center">
                <b className="block text-[44px] font-extrabold tracking-[-1.5px] text-coral-bright leading-none">{n}</b>
                <span className="block text-[14.5px] text-[#D8C5C8] font-medium mt-2.5">{label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ (sand) ============ */}
      <section className={`${SEC} bg-sand`}>
        <div className={WRAP}>
          <Reveal className="max-w-[720px] mx-auto mb-[52px] text-center">
            <div className={EYEBROW}>
              Questions<span className="text-coral">.</span>
            </div>
            <h2 className={H2}>Build-your-own, answered</h2>
          </Reveal>
          <Reveal delay={0.12} className="max-w-[820px] mx-auto">
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
