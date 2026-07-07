import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import FAQ from "@/components/FAQ";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Video interviewing — one-way & live, auto-scored",
  description:
    "Send one-way video interviews candidates record on their own schedule, or host live two-way calls in the platform. Set your questions, auto-score every response and reduce scheduling to zero.",
};

/* ---------------------------------------------------------------- */
/* FAQ data — verbatim from the prototype logic class               */
/* ---------------------------------------------------------------- */

const FAQ_ITEMS = [
  {
    q: "What types of questions can I ask in a video interview?",
    a: "Ask open-ended behavioural, situational or role-specific questions. Choose from Testlify’s curated question sets or write your own to match exactly what the role requires.",
  },
  {
    q: "Can I customize video interviews to fit specific job roles?",
    a: "Yes. Customize the questions to fit any job role so you assess the exact skills and competencies that matter for that position.",
  },
  {
    q: "How long can a candidate take to answer?",
    a: "The time limit is fully customizable. You set how long candidates have to respond to each question, along with thinking time and retake rules.",
  },
  {
    q: "What’s the difference between one-way and live interviews?",
    a: "One-way interviews are async — candidates record answers on their own schedule and you review later, ideal for high-volume screening. Live two-way interviews are real-time calls hosted inside Testlify for final-stage conversations.",
  },
  {
    q: "How do you keep the evaluation fair?",
    a: "Every candidate answers the same standardized questions, and auto-scoring applies consistent criteria to each response — removing the inconsistency and bias of ad-hoc phone screens.",
  },
  {
    q: "Does it integrate with my existing hiring process?",
    a: "Yes. Testlify’s video interviews sync seamlessly with 100+ ATS platforms so scores and recordings flow straight into your existing workflow.",
  },
];

/* ---------------------------------------------------------------- */
/* Shared class fragments (mirroring the prototype helmet)          */
/* ---------------------------------------------------------------- */

const WRAP = "max-w-[1240px] mx-auto px-7";
const SEC = "py-24 px-7 max-[640px]:py-16 max-[640px]:px-[22px]";
const H2 = "text-[38px] font-extrabold tracking-[-1px] leading-[1.1] m-0 max-[640px]:text-[28px]";
const H2P = "text-[17px] leading-[1.6] m-0 mt-4";
/* non-link card lift: Tailwind v4 gotcha — -translate-y-* sets the CSS
   `translate` property, so the arbitrary transition list must include it. */
const CARD_HOVER =
  "[transition:translate_.3s_cubic-bezier(.2,.7,.3,1),border-color_.3s,box-shadow_.3s] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]";

const REYEBROW = "text-[12.5px] font-bold tracking-[0.14em] uppercase text-coral m-0 mb-3";
const RH3 = "text-[28px] font-extrabold tracking-[-0.6px] leading-[1.14] m-0 mb-3.5 text-ink";
const RP = "text-[16px] leading-[1.62] text-body m-0 mb-[18px] max-w-[480px]";
const RVIS = "bg-white border border-[#F0E2E3] rounded-[20px] p-[22px] shadow-[0_16px_34px_rgba(110,11,14,0.08)]";
const RVHEAD = "flex items-center gap-2.5 pb-3.5 border-b border-[#F4E7E8] mb-3.5";
const ROW = "grid grid-cols-2 gap-14 items-center max-[1000px]:grid-cols-1 max-[1000px]:gap-[30px]";

/* ---------------------------------------------------------------- */
/* Small building blocks                                            */
/* ---------------------------------------------------------------- */

function SHead({ eyebrow, heading, sub, dark = false }: { eyebrow: string; heading: ReactNode; sub?: string; dark?: boolean }) {
  const eb = dark ? "text-coral-bright" : "text-coral";
  return (
    <Reveal className="max-w-[720px] mx-auto mb-[52px] text-center">
      <p className={`text-[13px] font-bold tracking-[0.16em] uppercase m-0 mb-3.5 ${eb}`}>
        {eyebrow}
        <span className={eb}>.</span>
      </p>
      <h2 className={`${H2} ${dark ? "text-white" : "text-ink"}`}>{heading}</h2>
      {sub ? <p className={`${H2P} ${dark ? "text-[#D8C5C8]" : "text-[#6C5A5D]"}`}>{sub}</p> : null}
    </Reveal>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[11px] m-0 p-0 list-none">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-[11px] text-[15px] font-medium text-[#3C2C2F] leading-[1.45]">
          <span className="flex-none w-[22px] h-[22px] rounded-full bg-[#FFF0EF] text-coral flex items-center justify-center mt-px">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 6" />
            </svg>
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

function Mrow({ label, barWidth, value, valueColor, last = false }: { label: string; barWidth?: string; value: string; valueColor: string; last?: boolean }) {
  return (
    <div className={`flex items-center gap-3 py-[11px] ${last ? "" : "border-b border-[#F7EDEE]"}`.trim()}>
      <span className="flex-1 text-[14px] font-semibold text-[#2A1A1D]">{label}</span>
      {barWidth ? (
        <span className="h-2 rounded-full bg-[#F4E7E8] overflow-hidden flex-1 max-w-[120px]">
          <span className="block h-full rounded-full" style={{ width: barWidth, background: "linear-gradient(90deg,#FF7A52,#F23F44)" }} />
        </span>
      ) : null}
      <span className="text-[12.5px] font-bold" style={{ color: valueColor }}>
        {value}
      </span>
    </div>
  );
}

function ModeRow({ gradient, icon, title, desc, tag, on = false }: { gradient: string; icon: ReactNode; title: string; desc: string; tag?: string; on?: boolean }) {
  return (
    <div className={`flex items-center gap-3 py-[13px] px-[15px] border-[1.4px] rounded-[13px] ${on ? "border-[#FBD0D1] bg-[#FFF6F6]" : "border-[#F2E6E7]"}`}>
      <span className="flex-none w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-white" style={{ background: gradient }}>
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[14px] font-bold text-ink">{title}</div>
        <div className="text-[11.5px] text-muted font-medium">{desc}</div>
      </div>
      {tag ? (
        <span className="flex-none text-[10.5px] font-bold tracking-[0.03em] uppercase text-[#1F9D6B] bg-[#E7F6EE] py-1 px-[9px] rounded-full">{tag}</span>
      ) : null}
    </div>
  );
}

/* icon renderers reused across the interview-modes rows */
const videoIcon = (s: number) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);

/* ---------------------------------------------------------------- */
/* Section data                                                     */
/* ---------------------------------------------------------------- */

const STEPS: { n: string; icon: ReactNode; h: string; p: string }[] = [
  {
    n: "STEP 01",
    icon: <path d="M4 6h16M4 12h16M4 18h10" />,
    h: "Set your questions",
    p: "Pick from curated question sets or write your own, and set a time limit and retake rules per question.",
  },
  {
    n: "STEP 02",
    icon: (
      <>
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    ),
    h: "Candidates record",
    p: "They get a link and answer on camera on their own schedule — no download, no scheduling required.",
  },
  {
    n: "STEP 03",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    h: "Auto-score responses",
    p: "Every answer is scored instantly on relevance and verbal cues, with the option for manual review.",
  },
  {
    n: "STEP 04",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    h: "Review & shortlist",
    p: "Watch, rate and compare side by side. Scores and recordings sync straight to your ATS.",
  },
];

const FORMATS: { icon: ReactNode; h: string; p: string }[] = [
  {
    icon: (
      <>
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    ),
    h: "One-way async interviews",
    p: "Candidates record answers on their own time. Watch responses at your convenience and cut scheduling to zero.",
  },
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    h: "Live two-way calls",
    p: "Host real-time interviews with built-in audio and video — no third-party meeting tool to juggle.",
  },
  {
    icon: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />,
    h: "Custom question sets",
    p: "Select from curated sets or create your own to align with role-specific requirements.",
  },
  {
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    h: "Instant auto-scoring",
    p: "Precise scores on answer relevance and verbal cues, with the option to review and adjust manually.",
  },
  {
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </>
    ),
    h: "Recordings & transcripts",
    p: "Download videos and read auto-generated transcripts for thorough, collaborative reviews.",
  },
  {
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
      </>
    ),
    h: "Seamless ATS sync",
    p: "Scores and recordings push to 100+ ATS platforms like Greenhouse, Lever and Workday.",
  },
];

const STATS: [string, string][] = [
  ["55%", "Less time-to-hire"],
  ["75%", "Less screening time"],
  ["100+", "ATS integrations"],
  ["94%", "Candidate satisfaction"],
];

/* ---------------------------------------------------------------- */
/* Page                                                             */
/* ---------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Screen 10x more candidates with async video interviews — auto-scored in minutes"
        announcementCta="See how it works"
      />

      {/* Scoped keyframes for the hero gradient drift, blob, float bob and REC
          pulse. Wrapped in prefers-reduced-motion per the interaction system. */}
      <style>{`
        @keyframes viHeroGrad{0%{background-position:0% 0%}50%{background-position:100% 100%}100%{background-position:0% 0%}}
        @keyframes viBlob{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-26px) scale(1.12)}66%{transform:translate(-26px,22px) scale(.93)}}
        @keyframes viFloaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
        @keyframes viFloaty2{0%,100%{transform:translateY(0)}50%{transform:translateY(11px)}}
        @keyframes viPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.14);opacity:.7}}
        .vi-hero-anim{animation:viHeroGrad 30s ease-in-out infinite;}
        .vi-blob-anim{animation:viBlob 22s ease-in-out infinite reverse;}
        .vi-f1-anim{animation:viFloaty 6s ease-in-out infinite;}
        .vi-f2-anim{animation:viFloaty2 7s ease-in-out infinite;}
        .vi-rec-anim{animation:viPulse 1.6s ease-in-out infinite;}
        @media(prefers-reduced-motion:reduce){.vi-hero-anim,.vi-blob-anim,.vi-f1-anim,.vi-f2-anim,.vi-rec-anim{animation:none;}}
      `}</style>

      {/* ============ 1. HERO ============ */}
      <section
        className="vi-hero-anim relative overflow-hidden pt-[78px] px-7 pb-[68px] max-[640px]:pt-11 max-[640px]:px-[22px] max-[640px]:pb-10"
        style={{
          background:
            "radial-gradient(1100px 520px at 82% 4%,#FCE0E1 0%,rgba(252,224,225,0) 58%),radial-gradient(900px 540px at 4% 62%,#FFEDED 0%,rgba(255,237,237,0) 52%),linear-gradient(180deg,#FFF8F7 0%,#FFFBFA 72%,#fff 100%)",
          backgroundSize: "170% 170%",
        }}
      >
        <div
          className="vi-blob-anim absolute -bottom-[140px] -left-[90px] w-[380px] h-[380px] rounded-full blur-[34px] opacity-[.16] pointer-events-none"
          style={{ background: "radial-gradient(circle at 60% 40%,#FDD5D6,#FBA3A5)" }}
        />
        <div className={`relative ${WRAP}`}>
          <div className="relative grid grid-cols-[1.04fr_0.96fr] gap-14 items-center max-[1000px]:grid-cols-1 max-[1000px]:gap-11">
            {/* left */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-[9px] bg-white border border-[#FBD0D1] py-2 px-4 rounded-full shadow-[0_6px_18px_rgba(242,63,68,0.10)]">
                  <span className="w-2 h-2 rounded-full bg-coral" />
                  <span className="text-[13.5px] font-semibold text-[#A91E23] tracking-[0.2px]">
                    Video interviewing · one-way &amp; live two-way
                  </span>
                </span>
              </Reveal>
              <Reveal
                as="h1"
                delay={0.08}
                className="text-[52px] leading-[1.05] font-extrabold tracking-[-1.4px] text-ink m-0 mt-[22px] max-w-[640px] max-[640px]:text-[36px]"
              >
                See beyond the resume.
                <br />
                <span className="text-coral">Watch them answer.</span>
              </Reveal>
              <Reveal as="p" delay={0.15} className="text-[18px] leading-[1.62] text-body m-0 mt-5 max-w-[560px]">
                Send one-way video interviews candidates record on their own schedule, or host live two-way calls in the
                platform. Set your questions, auto-score every response and reduce scheduling to zero.
              </Reveal>
              <Reveal delay={0.22} className="flex flex-wrap gap-3.5 mt-[34px]">
                <CtaButton
                  label="Try for free"
                  href={routes.pricing}
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  magnetic
                  className="border-[1.5px] border-transparent"
                />
                <CtaButton
                  label="Book a demo"
                  href="#"
                  variant="secondary"
                  size="lg"
                  icon="play"
                  className="[&>span:first-child]:w-6 [&>span:first-child]:h-6"
                />
              </Reveal>
              <Reveal delay={0.27} className="flex items-center gap-6 flex-wrap mt-5 text-[14.5px] text-muted font-medium">
                {["7-day free trial", "No credit card required", "100+ ATS integrations"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-[7px]">
                    <svg className="text-coral" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 6" />
                    </svg>
                    {t}
                  </span>
                ))}
              </Reveal>
            </div>

            {/* right — player visual */}
            <Reveal delay={0.18} className="relative max-[1000px]:max-w-[460px]">
              <div className="relative bg-white rounded-[24px] shadow-[0_30px_70px_rgba(110,11,14,0.18)] p-[18px] border border-[#FBE4E5] z-[2]">
                {/* browser bar */}
                <div className="flex items-center gap-[7px] pt-0 px-0.5 pb-3.5 border-b border-[#F4E7E8] mb-3.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2.5 flex-1 text-[12px] text-[#A9999C] font-medium bg-[#FBF3F3] py-1 px-3 rounded-lg">
                    app.testlify.com/interviews/review
                  </span>
                </div>
                {/* player */}
                <div className="relative rounded-[14px] overflow-hidden aspect-[16/10] flex items-end p-3.5" style={{ background: "linear-gradient(155deg,#241318,#3A1E24)" }}>
                  <span className="absolute top-[13px] left-[13px] inline-flex items-center gap-[7px] bg-[rgba(26,16,20,0.55)] backdrop-blur-[4px] text-white text-[11px] font-bold tracking-[0.04em] py-[5px] px-[11px] rounded-full">
                    <span className="vi-rec-anim w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
                    REC 00:47
                  </span>
                  <span className="absolute top-[13px] right-[13px] bg-[rgba(255,255,255,0.16)] backdrop-blur-[4px] text-white text-[11px] font-semibold py-[5px] px-[11px] rounded-full">
                    Question 2 of 5
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-24 h-24 rounded-full flex items-center justify-center text-white font-extrabold text-[34px] shadow-[0_12px_30px_rgba(0,0,0,0.35)]" style={{ background: "linear-gradient(135deg,#F76A6E,#F23F44)" }}>
                      SD
                    </span>
                  </span>
                  <span className="relative z-[1] w-[46px] h-[46px] rounded-full bg-[rgba(255,255,255,0.92)] flex items-center justify-center text-coral shadow-[0_8px_20px_rgba(0,0,0,0.3)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 4l14 8-14 8z" />
                    </svg>
                  </span>
                  <span className="relative z-[1] flex-1 h-[5px] rounded-full bg-[rgba(255,255,255,0.28)] mx-3 overflow-hidden">
                    <span className="block h-full w-[42%] bg-white rounded-full" />
                  </span>
                  <span className="relative z-[1] text-white text-[12px] font-semibold">0:47 / 1:30</span>
                </div>
                {/* prompt */}
                <div className="text-[13px] font-semibold text-[#3C2C2F] mt-3.5 mx-0.5 mb-3 leading-[1.4]">
                  <span className="text-[#A9999C] font-bold text-[11px] block mb-1 tracking-[0.04em] uppercase">Prompt</span>
                  Tell us about a time you turned around an unhappy customer.
                </div>
                {/* scores */}
                <div className="flex gap-[9px]">
                  {(
                    [
                      ["8.6", "Relevance"],
                      ["9.1", "Communication"],
                      ["8.4", "Confidence"],
                    ] as [string, string][]
                  ).map(([n, l]) => (
                    <div key={l} className="flex-1 border-[1.4px] border-[#F2E6E7] rounded-[11px] py-[9px] px-[11px] text-center">
                      <b className="block text-[17px] font-extrabold text-coral tracking-[-0.5px]">{n}</b>
                      <span className="block text-[10.5px] text-muted font-semibold mt-0.5">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* float 1 */}
              <div className="vi-f1-anim absolute -top-6 right-4 flex items-center gap-3 bg-white rounded-2xl shadow-[0_18px_40px_rgba(110,11,14,0.16)] py-3 px-4 border border-[#FBE4E5] z-[3]">
                <span className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-white font-extrabold text-[11.5px]" style={{ background: "linear-gradient(135deg,#F76A6E,#F23F44)" }}>
                  AI
                </span>
                <div>
                  <div className="text-[11.5px] text-muted font-medium">Auto-scored</div>
                  <div className="text-[15px] font-bold text-ink">In seconds</div>
                </div>
              </div>
              {/* float 2 */}
              <div className="vi-f2-anim absolute -bottom-[22px] -left-7 flex items-center gap-3 bg-white rounded-2xl shadow-[0_18px_40px_rgba(110,11,14,0.16)] py-3 px-4 border border-[#FBE4E5] z-[3]">
                <span className="w-[34px] h-[34px] rounded-full bg-[#E7F6EE] text-[#1F9D6B] flex items-center justify-center">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 6" />
                  </svg>
                </span>
                <div>
                  <div className="text-[11.5px] text-muted font-medium">Zero scheduling</div>
                  <div className="text-[15px] font-bold text-ink">Answered on their time</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 2. HOW IT WORKS (sand) ============ */}
      <section className={`${SEC} bg-sand`}>
        <div className={WRAP}>
          <SHead
            eyebrow="How it works"
            heading="From interview link to ranked shortlist"
            sub="Set it up once, then let candidates answer whenever they can — no calendars, no back-and-forth."
          />
          <Reveal delay={0.12} className="grid grid-cols-4 gap-[18px] max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
            {STEPS.map((s) => (
              <div key={s.n} className={`bg-white border-[1.4px] border-[#F0E2E3] rounded-[18px] py-[26px] px-6 ${CARD_HOVER}`}>
                <div className="text-[13px] font-extrabold text-coral tracking-[0.02em] mb-4">{s.n}</div>
                <div className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0EF] text-coral flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold tracking-[-0.3px] m-0 mb-2 text-ink">{s.h}</h3>
                <p className="text-[14.5px] leading-[1.55] text-[#6C5A5D] m-0">{s.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ 3. EVERYTHING IN ONE TOOL (white) ============ */}
      <section className={SEC}>
        <div className={WRAP}>
          <SHead
            eyebrow="Everything in one tool"
            heading="Built for how modern teams screen"
            sub="Async and live, curated or custom, auto-scored and shareable — no bolt-ons required."
          />
          <Reveal delay={0.12} className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
            {FORMATS.map((f) => (
              <div key={f.h} className={`bg-white border-[1.4px] border-[#F0E2E3] rounded-2xl pt-6 px-6 pb-[22px] ${CARD_HOVER}`}>
                <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0EF] text-coral flex items-center justify-center mb-[18px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </span>
                <h3 className="text-[17px] font-bold tracking-[-0.2px] m-0 mb-2 text-ink">{f.h}</h3>
                <p className="text-[14px] leading-[1.55] text-[#7C6A6D] m-0">{f.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ 4. WHY TEAMS SWITCH (sand) ============ */}
      <section className={`${SEC} bg-sand`}>
        <div className={WRAP}>
          <SHead
            eyebrow="Why teams switch"
            heading="Faster screening, fairer decisions"
            sub="Replace endless phone screens with structured video that scores itself."
          />
          <div className="flex flex-col gap-10">
            {/* Row 1 */}
            <Reveal className={ROW}>
              <div>
                <div className={REYEBROW}>Async &amp; live in one place</div>
                <h3 className={RH3}>Interview on your schedule — or theirs</h3>
                <p className={RP}>
                  Send one-way interviews for high-volume screening and jump on a live two-way call when you want a
                  conversation. Same questions, same scoring, one platform.
                </p>
                <CheckList items={["No scheduling for async interviews", "Built-in live audio & video", "Candidates answer from anywhere"]} />
              </div>
              <div className={RVIS}>
                <div className={RVHEAD}>
                  <span className="flex-none w-9 h-9 rounded-[10px] flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg,#7C5CFF,#5B7BFF)" }}>
                    {videoIcon(18)}
                  </span>
                  <div>
                    <div className="text-[14.5px] font-bold tracking-[-0.2px]">Interview modes</div>
                    <div className="text-[12px] text-muted font-medium">Pick per role or stage</div>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px]">
                  <ModeRow on gradient="linear-gradient(135deg,#F76A6E,#F23F44)" icon={videoIcon(16)} title="One-way async video" desc="Best for early, high-volume screening" tag="Popular" />
                  <ModeRow
                    gradient="linear-gradient(135deg,#1FB57A,#12A063)"
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                    }
                    title="Live two-way call"
                    desc="Best for final-stage conversations"
                  />
                  <ModeRow
                    gradient="linear-gradient(135deg,#FF9F43,#F76A2E)"
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" />
                      </svg>
                    }
                    title="Audio-only screening"
                    desc="For phone-first sales & support roles"
                  />
                </div>
              </div>
            </Reveal>

            {/* Row 2 (flip) */}
            <Reveal className={ROW}>
              <div>
                <div className={REYEBROW}>Auto-scoring + manual review</div>
                <h3 className={RH3}>Every answer scored the moment it lands</h3>
                <p className={RP}>
                  Get instant, precise scores based on answer relevance and verbal cues — then review, adjust and add
                  your own notes. Objective signals, human judgment where it counts.
                </p>
                <CheckList items={["Instant relevance & delivery scores", "Manual override and team ratings", "Side-by-side candidate comparison"]} />
              </div>
              <div className={`${RVIS} min-[1001px]:[order:-1]`}>
                <div className={RVHEAD}>
                  <span className="flex-none w-9 h-9 rounded-[10px] flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg,#1FB57A,#12A063)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[14.5px] font-bold tracking-[-0.2px]">Response scorecard</div>
                    <div className="text-[12px] text-muted font-medium">Question 2 · Sana D.</div>
                  </div>
                </div>
                <Mrow label="Answer relevance" barWidth="86%" value="8.6" valueColor="#1F9D6B" />
                <Mrow label="Communication" barWidth="91%" value="9.1" valueColor="#1F9D6B" />
                <Mrow label="Confidence" barWidth="84%" value="8.4" valueColor="#1F9D6B" />
                <Mrow label="Overall rank" value="#2 of 34" valueColor="#F23F44" last />
              </div>
            </Reveal>

            {/* Row 3 */}
            <Reveal className={ROW}>
              <div>
                <div className={REYEBROW}>Fair &amp; on-brand</div>
                <h3 className={RH3}>A consistent, branded candidate experience</h3>
                <p className={RP}>
                  Every candidate answers the same standardized questions to eliminate bias, with clear instructions and
                  your own logo and colours throughout the journey.
                </p>
                <CheckList items={["Standardized questions for every candidate", "White-label branding & custom domain", "Clear instructions in 16+ languages"]} />
              </div>
              <div className={RVIS}>
                <div className={RVHEAD}>
                  <span className="flex-none w-9 h-9 rounded-[10px] flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg,#FF9F43,#F76A2E)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[14.5px] font-bold tracking-[-0.2px]">Candidate view</div>
                    <div className="text-[12px] text-muted font-medium">Your brand, front and centre</div>
                  </div>
                </div>
                <Mrow label="Standardized questions" value="On" valueColor="#1F9D6B" />
                <Mrow label="Custom logo & colours" value="On" valueColor="#1F9D6B" />
                <Mrow label="Custom domain" value="On" valueColor="#1F9D6B" />
                <Mrow label="Candidate languages" value="16+" valueColor="#F23F44" last />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 5. THE PAYOFF (dark stats) ============ */}
      <section className={`${SEC} text-white`} style={{ background: "radial-gradient(900px 460px at 50% 0%,#2A1417 0%,#1A1014 60%)" }}>
        <div className={WRAP}>
          <SHead dark eyebrow="The payoff" heading="Less screening. Better shortlists." />
          <Reveal
            delay={0.12}
            className="grid grid-cols-4 gap-5 max-w-[960px] mx-auto max-[1000px]:grid-cols-2 max-[1000px]:gap-x-5 max-[1000px]:gap-y-[34px] max-[640px]:grid-cols-1"
          >
            {STATS.map(([n, l]) => (
              <div key={l} className="text-center">
                <b className="block text-[44px] font-extrabold tracking-[-1.5px] text-coral-bright leading-none">{n}</b>
                <span className="block text-[14.5px] text-[#D8C5C8] font-medium mt-2.5">{l}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ 6. FAQ (sand) ============ */}
      <section className={`${SEC} bg-sand`}>
        <div className={WRAP}>
          <SHead eyebrow="Questions" heading="Video interviewing, answered" />
          <Reveal delay={0.12} className="max-w-[820px] mx-auto">
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
