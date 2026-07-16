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
  title: "Features — every tool your team needs to hire on evidence",
  description:
    "Assess skills objectively, screen at any volume, and make hiring decisions backed by data — not résumés. From 13+ question types and AI proctoring to deep analytics and a full API.",
};

/* ---------------------------------------------------------------- */
/* Shared class strings, matching the prototype CSS exactly.        */
/* ---------------------------------------------------------------- */
const EYEBROW =
  "text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]";
const H2 =
  "text-[42px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[960px]:text-[32px] max-[960px]:tracking-[-1px]";
const LEAD = "text-[19px] leading-[1.6] text-body font-normal";
const CARD =
  "bg-white border border-[#F2E6E7] transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]";

/* ---------------------------------------------------------------- */
/* Line-icon helper                                                 */
/* ---------------------------------------------------------------- */
function LineIcon({ size = 22, children }: { size?: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
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

/* .chk — coral check chip + point text (split sections, 24px chip). */
function Chk({ children, last }: { children: ReactNode; last?: boolean }) {
  return (
    <div className={`flex gap-3 items-start ${last ? "" : "mb-[14px]"}`}>
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

/* Smaller check chip used inside the "More ways" cards (20px chip). */
function MiniChk({ children, last }: { children: ReactNode; last?: boolean }) {
  return (
    <div className={`flex gap-3 items-start ${last ? "" : "mb-[9px]"}`}>
      <span className="flex-none w-5 h-5 rounded-md bg-coral flex items-center justify-center mt-px">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <p className="text-[13.5px] leading-[1.45] text-body m-0">{children}</p>
    </div>
  );
}

/* Centered section header (eyebrow · h2 · lead). */
function Head({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto text-center ${className}`}>
      <Reveal as="p" className={EYEBROW}>
        {eyebrow}
        <b className="text-coral font-semibold">.</b>
      </Reveal>
      <Reveal as="h2" delay={0.04} className={H2}>
        {title}
      </Reveal>
      <Reveal as="p" delay={0.08} className={`${LEAD} mt-4`}>
        {lead}
      </Reveal>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Data                                                             */
/* ---------------------------------------------------------------- */
const METRICS: { num: string; u: string; label: string }[] = [
  { num: "3,500", u: "+", label: "Validated tests in the library" },
  { num: "80", u: "%", label: "Faster time-to-hire on average" },
  { num: "45", u: "+", label: "Live coding languages supported" },
  { num: "100", u: "+", label: "Native ATS & HRIS integrations" },
];

const HOW_STEPS: { title: string; body: string }[] = [
  {
    title: "Build your assessment",
    body: "Choose from 3,500+ validated tests or create custom questions in 13+ formats.",
  },
  {
    title: "Invite candidates",
    body: "Send a branded link to one applicant or your entire pool at once.",
  },
  {
    title: "AI scores instantly",
    body: "Every submission — video, audio, chat and text — is auto-evaluated in real time.",
  },
  {
    title: "Collaborate and decide",
    body: "Share scorecards, compare side-by-side and align as a team.",
  },
  {
    title: "Hire with confidence",
    body: "Push the decision to your ATS and close roles faster on objective evidence.",
  },
];

const FEATURE_CARDS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "AI candidate insights",
    body: "Full report cards with per-skill breakdowns, global benchmarks, AI-written pros & cons and pipeline trends.",
    icon: (
      <LineIcon>
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </LineIcon>
    ),
  },
  {
    title: "Live coding tests",
    body: "Real-time IDE in 45+ languages — candidates write, run and debug so you see how they think.",
    icon: (
      <LineIcon>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </LineIcon>
    ),
  },
  {
    title: "Native ATS integration",
    body: "Two-way sync of assessment data with Workday, Greenhouse and 98 more — no middleware.",
    icon: (
      <LineIcon>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
      </LineIcon>
    ),
  },
  {
    title: "Custom question types",
    body: "13+ formats: qualifier, audio, video, fill-in-the-blank, coding, Google Docs/Sheets, rating, date, SJT.",
    icon: (
      <LineIcon>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </LineIcon>
    ),
  },
  {
    title: "Anti-cheating & proctoring",
    body: "Webcam snapshots, IP restriction, tab-switch detection, full-screen enforcement and AI plagiarism scoring.",
    icon: (
      <LineIcon>
        <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
      </LineIcon>
    ),
  },
  {
    title: "White-label branding",
    body: "Custom domain, logo, colours and email templates — candidates see your brand, not ours.",
    icon: (
      <LineIcon>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </LineIcon>
    ),
  },
];

const MORE_CARDS: {
  tag: string;
  title: string;
  body: string;
  points: string[];
}[] = [
  {
    tag: "AI Interviews",
    title: "Conversational AI Interviews",
    body: "Assess real-time communication and problem-solving at scale using three formats:",
    points: [
      "Chat AI simulation for written communication roles",
      "Voice AI with pronunciation insights and fluency scoring",
      "Video AI with confidence and articulation analysis",
    ],
  },
  {
    tag: "Global Hiring",
    title: "Multilingual Assessment Support",
    body: "Run assessments in 16+ languages so every candidate tests in the language they work in. Includes full UI translation and a translatable test library.",
    points: [
      "English, Arabic, Chinese, Dutch, French, German",
      "Italian, Japanese, Spanish, Russian, Turkish, Korean",
      "CEFR-aligned English tests from A1 to C2",
    ],
  },
  {
    tag: "Role Simulations",
    title: "Tech stack proficiency",
    body: "Go beyond multiple-choice. Test candidates inside the tools they will actually use on the job:",
    points: [
      "Microsoft Excel, Word, PowerPoint",
      "Google Sheets, Docs, Slides",
      "File upload tasks and AI chat scenarios",
    ],
  },
  {
    tag: "Resume Screening",
    title: "AI Resume Screening",
    body: "Automatically extract and rank candidate details from resumes inside Testlify. Reduces manual screening work and surfaces top-fit profiles before a single test is run.",
    points: [
      "Resume parser (Feb 2026)",
      "AI resume scoring with Greenhouse integration",
      "Structured candidate profiles, auto-populated",
    ],
  },
  {
    tag: "Proctoring",
    title: "20+ Anti-Cheating Measures",
    body: "The most complete proctoring suite at this price point. Includes:",
    points: [
      "Photo ID verification and face detection",
      "Talking prohibition and AI assistance detection",
      "Focus Guard anti-cheat mode and screenshot monitoring",
      "Location tracking and country-based restrictions",
    ],
  },
  {
    tag: "Workflow",
    title: "Multi-Stage Hiring Workflows",
    body: "Run structured, sequential hiring pipelines without manual follow-up:",
    points: [
      "360 Feedback Review from multiple stakeholders",
      "Auto-invites for sequential assessments",
      "AI-suggested interview questions per candidate",
      "Weighted scoring to prioritize what matters most",
    ],
  },
];

const PROCTOR_STEPS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Webcam snapshot proctoring",
    body: "Random photo captures with AI presence verification to flag unattended sessions.",
    icon: (
      <LineIcon size={18}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </LineIcon>
    ),
  },
  {
    title: "IP & location restriction",
    body: "Lock assessments to specific IP ranges or geographies to prevent proxy submissions.",
    icon: (
      <LineIcon size={18}>
        <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </LineIcon>
    ),
  },
  {
    title: "Tab-switch detection",
    body: "Full-screen enforcement with real-time alerts and automatic logging when candidates navigate away.",
    icon: (
      <LineIcon size={18}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
        <line x1="9" y1="6.5" x2="9.01" y2="6.5" />
      </LineIcon>
    ),
  },
  {
    title: "AI plagiarism & GPT detection",
    body: "Detects copy-paste patterns, AI-generated text and shared answers across your pipeline.",
    icon: (
      <LineIcon size={18}>
        <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </LineIcon>
    ),
  },
];

const CMP_HEAD = ["Feature", "Testlify", "HackerRank", "Codility"];
const CMP_ROWS: [string, string, string, string][] = [
  ["AI auto-scoring (video + text)", "All plans", "Not available", "Not available"],
  ["Test library size", "3,500+ across all roles", "7,500+ questions, dev only", "1,100+ coding tasks only"],
  ["Non-technical role coverage", "4,500+ roles, 50+ industries", "Dev and tech only", "Dev and tech only"],
  ["Async and live video interviews", "All plans", "Live only (CodePair)", "Live only (CodeLive)"],
  ["Advanced proctoring", "All plans — 20+ measures", "Tab-switch, webcam, plagiarism", "Anti-plagiarism only"],
  ["White-label branding", "All plans", "Enterprise only", "Enterprise only"],
  ["Native ATS integrations", "100+", "40+", "20+"],
  ["Multilingual assessments (UI)", "14 languages", "English + Canadian French only", "10 languages"],
  ["Free trial — no card required", "7-day free trial", "No free trial", "Demo only"],
  ["Pricing model", "From $139/mo, no annual lock-in", "From $165/mo (annual billed)", "From $1,200/yr (annual only)"],
];

const INTG: [string, string][] = [
  ["https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png", "Workday"],
  ["https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png", "Greenhouse"],
  ["https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr", "Lever"],
  ["https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg", "SmartRecruiters"],
  ["https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png", "BambooHR"],
  ["https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr", "SuccessFactors"],
  ["https://testlify.com/wp-content/uploads/2025/10/logo.svg", "UKG"],
  ["https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr", "Recruitee"],
  ["https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png", "Zoho Recruit"],
  ["https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr", "JazzHR"],
];

const FAQ_ITEMS = [
  {
    q: "Can I build a custom assessment, or do I have to use pre-built tests?",
    a: "You can do both. Choose from 3,500+ validated assessments in our library, build your own from scratch, or combine the two. Testlify supports 13+ question formats, including video, audio, coding challenges, Google Docs/Sheets simulations, and fill-in-the-blank questions, giving you complete flexibility to evaluate role-specific and company-specific skills.",
  },
  {
    q: "How does Testlify prevent candidates from cheating during remote assessments?",
    a: "Testlify helps maintain assessment integrity with built-in proctoring tools such as Focus Guard, full-screen enforcement, tab-switch and copy-paste detection, webcam snapshots, IP and location verification, and optional live proctoring. Every assessment includes an activity log, allowing recruiters to review flagged behavior before making hiring decisions.",
  },
  {
    q: "Does Testlify integrate with the ATS my team already uses?",
    a: "Most likely, yes. Testlify integrates with 100+ ATS and HRIS platforms, including Workday and Greenhouse. Candidate scores, reports, and hiring statuses sync automatically, helping your team manage assessments without leaving your existing workflow.",
  },
  {
    q: "How does AI scoring work, and can I trust it?",
    a: "Testlify automatically evaluates responses across video, audio, chat, and coding assessments. Recruiters receive skill-level insights, benchmark comparisons, and candidate summaries to support faster, more informed decisions. AI-generated results are designed to assist evaluation, while recruiters remain in control of final hiring decisions.",
  },
  {
    q: "Can candidates take assessments on mobile devices, and how long do they take?",
    a: "Yes. Candidates can complete assessments from any modern browser on desktop, tablet, or mobile without installing additional software. Most assessments are designed to take less than 45 minutes, providing a thorough evaluation without creating unnecessary candidate drop-off.",
  },
  {
    q: "Is Testlify compliant with GDPR, CCPA, and other data privacy standards?",
    a: "Yes. Testlify is ISO 27001 certified, SOC 2 Type II compliant, and supports both GDPR and CCPA requirements. The platform also includes role-based access controls and configurable data retention policies to help organizations manage candidate data securely.",
  },
  {
    q: "Can we white-label assessments with our own branding?",
    a: "Yes. With Testlify's white-label option, you can remove Testlify branding, use a custom domain, configure your own email infrastructure, and add a custom support email. This creates a seamless branded experience for candidates from assessment invitation through reporting.",
  },
];

/* ---------------------------------------------------------------- */
export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="13+ question types, AI proctoring and full analytics — all in one platform."
        announcementCta="Explore features"
        announcementHref="#features"
      />

      {/* HERO */}
      <section className="relative overflow-hidden px-7 pt-[72px] pb-[88px] max-[960px]:px-[22px] max-[960px]:pt-11 max-[960px]:pb-[60px] bg-[radial-gradient(1100px_540px_at_78%_6%,#FFF0EE_0%,rgba(255,240,238,0)_60%),#fff]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.02fr_1.1fr] gap-[60px] items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <div>
              <Reveal delay={0.02}>
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
                className="text-[60px] leading-[1.05] font-extrabold tracking-[-2px] text-ink mt-[22px] max-[960px]:text-[42px] max-[960px]:tracking-[-1.2px]"
              >
                Every tool your team needs to
                <br />
                hire on <span className="text-coral">evidence.</span>
              </Reveal>
              <Reveal as="p" delay={0.1} className={`${LEAD} mt-[22px] max-w-[520px]`}>
                Assess skills objectively, screen at any volume, and make hiring
                decisions backed by data — not résumés. From 13+ question types
                and AI proctoring to deep analytics and a full API.
              </Reveal>
              <Reveal
                delay={0.14}
                className="flex items-center gap-[14px] flex-wrap mt-[30px]"
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
                className="flex items-center gap-[13px] flex-wrap mt-[26px] text-[13.5px] text-muted font-semibold"
              >
                <span className="inline-flex items-center gap-[7px]">
                  <span className="text-coral font-bold">✓</span>No credit card
                </span>
                <span className="inline-flex items-center gap-[7px]">
                  <span className="text-coral font-bold">✓</span>3,500+ tests ready
                </span>
                <span className="inline-flex items-center gap-[7px]">
                  <span className="text-coral font-bold">✓</span>Up in minutes
                </span>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="relative">
              <div className="absolute -top-[14px] right-4 z-[3] flex items-center gap-2 bg-white border border-[#F0E2E3] rounded-full px-[15px] py-[9px] text-[12.5px] font-semibold text-ink shadow-[0_16px_30px_rgba(110,11,14,0.12)]">
                <span className="w-2 h-2 rounded-full bg-[#1F9D6B]" /> Senior Engineer
                · 18 submissions
              </div>
              <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <MockTop bar="app.testlify.com/assessment/senior-engineer" />
                <div className="p-5">
                  <div className="flex justify-between items-baseline mb-4">
                    <div className="text-[16px] font-bold text-ink">
                      Ranked shortlist
                    </div>
                    <div className="text-[12px] text-muted font-semibold">
                      80% faster shortlist
                    </div>
                  </div>
                  <HeroRow
                    initials="AK"
                    grad="linear-gradient(135deg,#F23F44,#FF7A52)"
                    name="Anika Kapoor · 5 yrs"
                    flag="92%"
                    tone="ok"
                  />
                  <HeroRow
                    initials="MS"
                    grad="linear-gradient(135deg,#6E62F2,#9A8BFF)"
                    name="Marco Silva · 4 yrs"
                    flag="85%"
                    tone="ok"
                  />
                  <HeroRow
                    initials="JL"
                    grad="linear-gradient(135deg,#2AA6F2,#67C9FF)"
                    name="Jamie Lee · 3 yrs"
                    flag="77%"
                    tone="warn"
                    last
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* METRIC BAND */}
      <section className="px-7 py-11 max-[960px]:px-[22px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="grid grid-cols-4 max-[960px]:grid-cols-2 max-[960px]:gap-y-9">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`text-center px-[22px] py-1 ${
                  i === 0 ? "" : "border-l border-[#EFE3E4] max-[960px]:border-l-0"
                }`}
              >
                <div className="text-[34px] max-[960px]:text-[30px] font-bold tracking-[-1px] leading-none tabular-nums text-ink">
                  {m.num}
                  <span className="text-[#D98C8F] font-semibold">{m.u}</span>
                </div>
                <div className="text-[14px] text-[#6C5A5D] font-medium mt-[10px] leading-[1.45]">
                  {m.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-white scroll-mt-[90px]"
      >
        <div className="max-w-[1240px] mx-auto">
          <Head
            eyebrow="How it works"
            title="From job opening to hire in five steps"
            lead="A clear, supportive process designed to help you launch, score and decide — without confusion or overwhelm."
            className="max-w-[680px] mb-[52px]"
          />
          <div className="grid grid-cols-[.92fr_1.08fr] gap-11 items-stretch max-[960px]:grid-cols-1 max-[960px]:gap-[34px]">
            <Reveal className="relative rounded-[22px] overflow-hidden border border-[#F0E2E3] shadow-[0_30px_60px_rgba(110,11,14,0.12)] bg-[#FBF3EE] max-[960px]:min-h-[380px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/features-how.png"
                alt="Recruiters reviewing a hiring pipeline dashboard"
                className="absolute inset-0 w-full h-full object-cover object-center block"
              />
              <div className="absolute left-[18px] right-[18px] bottom-[18px] bg-[rgba(26,16,20,0.62)] backdrop-blur-[10px] border border-white/[0.16] rounded-[18px] px-6 py-[22px] flex items-center gap-[18px]">
                <div>
                  <p className="text-white font-bold text-[19px] m-0 mb-1.5 tracking-[-0.3px]">
                    Start your free trial now
                  </p>
                  <p className="text-white/[0.82] text-[13.5px] leading-[1.5] m-0">
                    Explore tests, question types and scoring — no credit card
                    required.
                  </p>
                </div>
                <Link
                  href={routes.pricing}
                  aria-label="Get started"
                  className="flex-none w-[46px] h-[46px] rounded-full bg-white text-coral flex items-center justify-center ml-auto shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-transform duration-[250ms] hover:-translate-y-0.5"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              </div>
            </Reveal>

            <div className="flex items-center">
              <Reveal delay={0.14} className="flex flex-col gap-[14px] w-full">
                {HOW_STEPS.map((s, i) => (
                  <div
                    key={s.title}
                    className={`flex gap-4 items-start rounded-2xl px-[22px] py-5 ${CARD}`}
                  >
                    <div className="flex-none w-10 h-10 rounded-[11px] bg-coral text-white font-extrabold text-[17px] flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-ink m-0 mb-[5px] leading-[1.25] tracking-[-0.4px]">
                        {s.title}
                      </h3>
                      <p className="text-[14px] leading-[1.66] text-body m-0">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section
        id="features"
        className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-sand scroll-mt-[90px]"
      >
        <div className="max-w-[1240px] mx-auto">
          <Head
            eyebrow="Core capabilities"
            title="Everything hiring teams actually need"
            lead="Built for speed, objectivity and a candidate experience worth bragging about."
            className="max-w-[680px] mb-12"
          />
          <Reveal className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
            {FEATURE_CARDS.map((c) => (
              <div key={c.title} className={`rounded-[18px] px-6 py-7 ${CARD}`}>
                <div className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-5">
                  {c.icon}
                </div>
                <h3 className="text-[18px] font-bold text-ink m-0 mb-[9px] leading-[1.25] tracking-[-0.4px]">
                  {c.title}
                </h3>
                <p className="text-[14.5px] leading-[1.66] text-body m-0">
                  {c.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* MORE WAYS */}
      <section
        id="more"
        className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-white scroll-mt-[90px]"
      >
        <div className="max-w-[1240px] mx-auto">
          <Head
            eyebrow="Beyond the basics"
            title="More ways to assess, verify and hire"
            lead={
              "Capabilities most platforms don't have at all — built into every Testlify plan."
            }
            className="max-w-[680px] mb-12"
          />
          <Reveal className="grid grid-cols-3 gap-5 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
            {MORE_CARDS.map((c) => (
              <div key={c.title} className={`rounded-[18px] px-6 py-7 ${CARD}`}>
                <span className="inline-block bg-[#FFF0F0] text-[#A8323A] text-[11px] font-bold tracking-[0.06em] uppercase px-[10px] py-[5px] rounded-full mb-[14px]">
                  {c.tag}
                </span>
                <h3 className="text-[18px] font-bold text-ink m-0 mb-[9px] leading-[1.25] tracking-[-0.4px]">
                  {c.title}
                </h3>
                <p className="text-[14.5px] leading-[1.66] text-body m-0 mb-4">
                  {c.body}
                </p>
                {c.points.map((p, i) => (
                  <MiniChk key={p} last={i === c.points.length - 1}>
                    {p}
                  </MiniChk>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* REPORTING (split) */}
      <section
        id="reporting"
        className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-sand scroll-mt-[90px]"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.02fr_1.05fr] gap-16 items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <Reveal>
              <p className={EYEBROW}>
                Reporting &amp; analytics
                <b className="text-coral font-semibold">.</b>
              </p>
              <h2 className={`${H2} mb-5`}>
                Know exactly who to advance, with data
              </h2>
              <p className={`${LEAD} mb-6`}>
                AI Insights generates an automatic performance summary for every
                candidate — scorecards, per-skill breakdowns and suggested
                follow-up questions, ready before your debrief call.
              </p>
              <Chk>See strengths and gaps by skill area.</Chk>
              <Chk>Rank candidates against global benchmarks.</Chk>
              <Chk>Compare top applicants instantly.</Chk>
              <Chk last>Improve assessments with question-level analytics.</Chk>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <MockTop bar="Candidate report · Senior PM" />
                <div className="p-5">
                  <TextRow name="Priya Ramanathan · Top 4%" flag="94%" tone="ok" />
                  <TextRow name="David Lim · Top 11%" flag="87%" tone="ok" />
                  <TextRow
                    name="Sara Kowalski · Top 19%"
                    flag="79%"
                    tone="warn"
                    mb="mb-4"
                  />
                  <div className="flex flex-col gap-3">
                    <SkillBar label="Product strategy" pct={96} />
                    <SkillBar label="Data-driven decisions" pct={91} />
                    <SkillBar label="Stakeholder management" pct={88} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CODING (split reversed) */}
      <section
        id="coding"
        className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-white scroll-mt-[90px]"
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.02fr_1.05fr] gap-16 items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <Reveal className="order-2 max-[960px]:order-none">
              <p className={EYEBROW}>
                Live coding<b className="text-coral font-semibold">.</b>
              </p>
              <h2 className={`${H2} mb-5`}>
                Assess real coding skill, not memorised answers
              </h2>
              <p className={`${LEAD} mb-6`}>
                Candidates code in a real-world environment while AI evaluates
                quality, correctness and performance automatically.
              </p>
              <Chk>45+ programming languages supported.</Chk>
              <Chk>Custom challenges for your tech stack.</Chk>
              <Chk>AI-powered code evaluation on quality and performance.</Chk>
              <Chk last>Live coding and pair-programming interviews.</Chk>
              <div className="mt-[26px]">
                <Link
                  href={routes.testLibrary}
                  className="inline-flex items-center gap-2 text-coral font-semibold"
                >
                  Browse coding tests →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="order-1 max-[960px]:order-none">
              <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <MockTop bar="Python · Algorithms" />
                <div className="p-5 [font-family:ui-monospace,Menlo,monospace] text-[12.5px] leading-[1.7] text-body bg-[#FCFAFA]">
                  <div className="text-[#A9999C]"># Merge two sorted linked lists</div>
                  <div>
                    <span className="text-[#2A6FDB]">def</span>{" "}
                    <span className="text-coral">merge_sorted</span>(l1, l2):
                  </div>
                  <div className="pl-4">dummy = head = ListNode(0)</div>
                  <div className="pl-4">
                    <span className="text-[#2A6FDB]">while</span> l1{" "}
                    <span className="text-[#2A6FDB]">and</span> l2:
                  </div>
                  <div className="pl-8">
                    <span className="text-[#2A6FDB]">if</span> l1.val &lt;= l2.val:
                  </div>
                  <div className="pl-12">head.next, l1 = l1, l1.next</div>
                  <div className="pl-8">
                    <span className="text-[#2A6FDB]">else</span>:
                  </div>
                  <div className="pl-12">head.next, l2 = l2, l2.next</div>
                  <div className="pl-8">head = head.next</div>
                  <div className="pl-4">
                    <span className="text-[#2A6FDB]">return</span> dummy.next
                  </div>
                  <div className="mt-2 text-[#1F9D6B]">
                    ✓ All 8 test cases passed · O(n+m) · 41ms
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHITE-LABEL (split) */}
      <section className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.02fr_1.05fr] gap-16 items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <Reveal>
              <p className={EYEBROW}>
                White-label<b className="text-coral font-semibold">.</b>
              </p>
              <h2 className={`${H2} mb-5`}>
                Your brand. Your experience. No footnotes
              </h2>
              <p className={`${LEAD} mb-6`}>
                Testlify disappears completely — candidates interact with your
                brand from invite email to results page, lifting completion rates
                and strengthening your employer brand.
              </p>
              <Chk>Custom subdomain and branded candidate portal.</Chk>
              <Chk>Your logo, brand colours and typography throughout.</Chk>
              <Chk last>Custom invite and results email templates.</Chk>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <MockTop bar="assessments.acmecorp.com" />
                <div className="p-5">
                  <div className="flex items-center gap-2.5 mb-[18px]">
                    <span className="w-[34px] h-[34px] rounded-[9px] bg-[linear-gradient(135deg,#2A6FDB,#67C9FF)] text-white flex items-center justify-center font-extrabold">
                      A
                    </span>
                    <div>
                      <div className="text-[14px] font-bold text-ink">
                        Acme Corp
                      </div>
                      <div className="text-[11.5px] text-muted">
                        Engineering Assessment · 45 minutes
                      </div>
                    </div>
                  </div>
                  <div className="text-[15px] font-bold text-ink mb-1.5">
                    Welcome, Jamie
                  </div>
                  <p className="text-[13px] leading-[1.66] text-body m-0 mb-[18px]">
                    {
                      "This assessment helps us understand your engineering approach. Take your time — there's no trick to it."
                    }
                  </p>
                  <span className="inline-flex items-center gap-2 bg-[#2A6FDB] text-white font-semibold text-[13.5px] px-5 py-[11px] rounded-[11px]">
                    Begin assessment →
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section
        id="compare"
        className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-white scroll-mt-[90px]"
      >
        <div className="max-w-[1240px] mx-auto">
          <Head
            eyebrow="Compare"
            title="Not all tools are created equal"
            lead="How Testlify stacks up on the features that move hiring outcomes."
            className="max-w-[680px] mb-11"
          />
          <Reveal className="overflow-x-auto p-6 pb-12 -m-6 -mb-12">
            <table className="w-full border-collapse bg-white border border-[#F0E2E3] rounded-[18px] overflow-hidden min-w-[640px] shadow-[0_18px_40px_rgba(110,11,14,0.09)]">
              <thead>
                <tr>
                  {CMP_HEAD.map((h, i) => (
                    <th
                      key={h}
                      className={`px-[18px] py-4 text-left text-[13px] font-bold border-b border-[#F4ECEC] bg-[#FBF3EE] ${
                        i === 1 ? "text-coral" : "text-ink"
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CMP_ROWS.map((row, ri) => (
                  <tr key={row[0]}>
                    {row.map((cell, ci) => {
                      const lastRow = ri === CMP_ROWS.length - 1;
                      const base = `px-[18px] py-4 text-left text-[14.5px] ${
                        lastRow ? "" : "border-b border-[#F4ECEC]"
                      }`;
                      if (ci === 0)
                        return (
                          <td key={ci} className={`${base} font-semibold text-ink`}>
                            {cell}
                          </td>
                        );
                      if (ci === 1)
                        return (
                          <td
                            key={ci}
                            className={`${base} font-bold text-ink bg-[#FFF8F7]`}
                          >
                            {cell}
                          </td>
                        );
                      return (
                        <td key={ci} className={`${base} text-[#6C5A5D]`}>
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* PROCTORING */}
      <section
        id="proctoring"
        className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-sand scroll-mt-[90px]"
      >
        <div className="max-w-[1240px] mx-auto">
          <Head
            eyebrow="Anti-cheating &amp; proctoring"
            title="Results you can actually defend"
            lead="Multi-layer proctoring ships on every plan, so every score reflects genuine ability."
            className="max-w-[680px] mb-12"
          />
          <div className="grid grid-cols-[1.08fr_.92fr] gap-11 items-stretch max-[960px]:grid-cols-1 max-[960px]:gap-[34px]">
            <Reveal className="relative rounded-[22px] overflow-hidden border border-[#F0E2E3] shadow-[0_30px_60px_rgba(110,11,14,0.12)] bg-[#FBF3EE] order-2 max-[960px]:order-none max-[960px]:min-h-[380px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/features-proctoring.png"
                alt="Candidate taking a proctored assessment with face verification, plagiarism and geo-lock active"
                style={{
                  width: "557px",
                  height: "613px",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  left: "0px",
                  top: "-104px",
                  position: "absolute",
                }}
              />
            </Reveal>
            <div className="flex items-center order-1 max-[960px]:order-none">
              <Reveal delay={0.14} className="flex flex-col gap-[14px] w-full">
                {PROCTOR_STEPS.map((s) => (
                  <div
                    key={s.title}
                    className={`flex gap-4 items-start rounded-2xl px-[22px] py-5 ${CARD}`}
                  >
                    <div className="flex-none w-10 h-10 rounded-[11px] bg-coral text-white flex items-center justify-center">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-ink m-0 mb-[5px] leading-[1.25] tracking-[-0.4px]">
                        {s.title}
                      </h3>
                      <p className="text-[14px] leading-[1.66] text-body m-0">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL (dark) */}
      <section className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-ink">
        <div className="max-w-[960px] mx-auto text-center">
          <Reveal
            as="p"
            className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-[#C9B9BC] m-0"
          >
            Hear from our clients
            <b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="text-[26px] leading-[1.5] font-semibold text-white mt-[18px] mb-[26px]"
          >
            &quot;The biggest change was moving from a process we were managing to
            a <span className="text-coral">system we could trust</span>. Now we
            hire faster, develop smarter, and make decisions backed by real
            data.&quot;
          </Reveal>
          <Reveal as="p" delay={0.08} className="text-white font-bold m-0">
            Andrei Ivanov
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="text-[#A9999C] text-[14px] mt-1 mb-10"
          >
            Training Co-ordinator, inDrive
          </Reveal>
          <Reveal
            delay={0.12}
            className="grid grid-cols-3 gap-6 max-w-[640px] mx-auto max-[960px]:grid-cols-1"
          >
            {[
              ["67%", "Faster time-to-hire"],
              ["4x", "Recruiter efficiency"],
              ["82%", "More L&D participation"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="text-[46px] font-extrabold tracking-[-1.6px] text-coral leading-none m-0">
                  {num}
                </p>
                <p className="text-[14.5px] text-[#C9B9BC] font-medium mt-[10px]">
                  {label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section
        id="integrations"
        className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-sand scroll-mt-[90px]"
      >
        <div className="max-w-[1240px] mx-auto">
          <Head
            eyebrow="Integrations"
            title="Works with 100+ ATS & HRIS tools"
            lead="Streamline hiring from assessment to onboarding — sync candidate data, automate workflows and stay in your existing stack."
            className="max-w-[680px] mb-11"
          />
          <Reveal className="grid grid-cols-5 gap-[14px] max-[960px]:grid-cols-3">
            {INTG.map(([src, alt]) => (
              <div
                key={alt}
                className="flex items-center justify-center h-[88px] bg-white border border-[#F2E6E7] rounded-2xl px-5 py-4 transition-[transform,box-shadow,border-color] duration-[280ms] ease-out hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-10 object-contain"
                />
              </div>
            ))}
          </Reveal>
          <Reveal className="text-center mt-[26px]">
            <Link
              href={routes.integrations}
              className="inline-flex items-center gap-2 text-coral font-semibold"
            >
              View all integrations →
            </Link>
          </Reveal>
        </div>
      </section>

      <SecuritySection
        eyebrow="Security & compliance"
        heading="Enterprise-grade security by default"
        sub="SOC 2 Type II, ISO 27001 and GDPR compliance, granular admin controls and full audit trails keep your assessment data protected at every step."
      />

      {/* FAQ */}
      <section className="px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[70px] bg-sand">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-11">
            <Reveal as="p" className={EYEBROW}>
              FAQ<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={H2}>
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

/* ---------------------------------------------------------------- */
/* Row helpers                                                      */
/* ---------------------------------------------------------------- */
function Flag({ flag, tone }: { flag: string; tone: "ok" | "warn" }) {
  return (
    <span
      className={`ml-auto text-[10.5px] font-bold tracking-[0.05em] px-[10px] py-1 rounded-full ${
        tone === "ok"
          ? "bg-[#EAF8F0] text-[#1F9D6B]"
          : "bg-[#FFF4E6] text-[#C7791B]"
      }`}
    >
      {flag}
    </span>
  );
}

/* Hero shortlist row (avatar + name + flag). */
function HeroRow({
  initials,
  grad,
  name,
  flag,
  tone,
  last,
}: {
  initials: string;
  grad: string;
  name: string;
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
      <span
        className="w-7 h-7 rounded-lg text-white flex items-center justify-center font-bold text-[11px]"
        style={{ background: grad }}
      >
        {initials}
      </span>
      {name}
      <Flag flag={flag} tone={tone} />
    </div>
  );
}

/* Reporting report row (text + flag, no avatar). */
function TextRow({
  name,
  flag,
  tone,
  mb = "mb-[10px]",
}: {
  name: string;
  flag: string;
  tone: "ok" | "warn";
  mb?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-[14px] py-3 border border-[#F1E6E7] rounded-xl text-[13.5px] ${mb}`}
    >
      <span>{name}</span>
      <Flag flag={flag} tone={tone} />
    </div>
  );
}

/* Per-skill progress bar. */
function SkillBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex justify-between text-[12px] text-[#6C5A5D] mb-[5px]">
        <span>{label}</span>
        <span className="font-bold text-ink">{pct}%</span>
      </div>
      <div className="h-[7px] rounded-full bg-[#F3E7E8] overflow-hidden">
        <div
          className="h-full bg-[linear-gradient(90deg,#F23F44,#FF7A52)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
