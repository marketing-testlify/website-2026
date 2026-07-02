"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

const faqItems = [
  {
    q: "How accurate is the AI scoring?",
    a: "Testlify scores against a structured skill profile built from your role, then shows the evidence behind every ranking. Teams consistently see top-ranked candidates convert to hires at a higher rate than manual screening — and you can always override and the model learns from it.",
  },
  {
    q: "Will it introduce bias?",
    a: "It's designed to reduce it. Blind-screening hides names, photos and schools, the same criteria apply to every applicant, and every decision is logged for EEOC-defensible audit trails.",
  },
  {
    q: "Does it work with our ATS?",
    a: "Yes — native, two-way connections to Greenhouse, Lever, Workday, BambooHR and 100+ more. Résumés flow in and rankings sync back automatically.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are screening live the same afternoon. Connect a source, point it at a role, and the first ranked shortlist is ready in minutes.",
  },
  {
    q: "Is our candidate data secure?",
    a: "Testlify is SOC 2 Type II certified, GDPR and CCPA compliant, with encryption in transit and at rest. Your data is never used to train shared models.",
  },
];

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

type PGroup = {
  id: string;
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
  cards: { num: string; t: string; d: string }[];
};

const PGROUPS: PGroup[] = [
  {
    id: "testlify-ai",
    eyebrow: "Testlify AI",
    title: "Screen, interview & score with conversational AI",
    icon: <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" />,
    cards: [
      { num: "01", t: "AI screening", d: "Auto-screen every applicant the moment they apply" },
      { num: "02", t: "AI interviewer", d: "Conversational, adaptive interviews at any scale" },
      { num: "03", t: "Auto-scoring", d: "Objective, rubric-based scores in seconds" },
      { num: "04", t: "Candidate summaries", d: "One-glance fit reports for every applicant" },
    ],
  },
  {
    id: "skill-assessments",
    eyebrow: "Skill assessments",
    title: "3,500+ expert-validated tests across every role",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    cards: [
      { num: "01", t: "Test library", d: "3,500+ tests across every role and skill" },
      { num: "02", t: "Coding tests", d: "Real-world dev challenges in 40+ languages" },
      { num: "03", t: "Cognitive ability", d: "Aptitude & reasoning that predicts performance" },
      { num: "04", t: "Personality & culture", d: "Behavioural fit, mapped to your team" },
    ],
  },
  {
    id: "ai-resume-screener",
    eyebrow: "AI resume screener",
    title: "Rank every applicant by verified fit in seconds",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
    cards: [
      { num: "01", t: "Bulk ranking", d: "Sort thousands of résumés instantly" },
      { num: "02", t: "Fit scoring", d: "Evidence-based match scores you can trust" },
      { num: "03", t: "Bias controls", d: "Structured, fair, defensible shortlists" },
      { num: "04", t: "ATS sync", d: "Push ranked results straight to your ATS" },
    ],
  },
  {
    id: "video-interviewing",
    eyebrow: "Video interviewing",
    title: "One-way & live interviews, automatically scored",
    icon: (
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    ),
    cards: [
      { num: "01", t: "One-way interviews", d: "Async interviews on candidates’ own time" },
      { num: "02", t: "Live interviews", d: "Scheduled & scored right inside Testlify" },
      { num: "03", t: "Interview scoring", d: "Rubric-based evaluations, every time" },
      { num: "04", t: "Question library", d: "Role-ready prompts, ready to send" },
    ],
  },
  {
    id: "ats-integrations",
    eyebrow: "ATS integrations",
    title: "Native two-way sync with 100+ ATS tools",
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
      </>
    ),
    cards: [
      { num: "01", t: "100+ integrations", d: "Greenhouse, Lever, Workday and many more" },
      { num: "02", t: "Two-way sync", d: "Keep both systems perfectly in step" },
      { num: "03", t: "API & webhooks", d: "Build your own automated flows" },
      { num: "04", t: "Zapier", d: "No-code automations in a few clicks" },
    ],
  },
];

const LOGOS: { src: string; alt: string; h: number }[] = [
  { src: "https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png", alt: "Greenhouse", h: 26 },
  { src: "https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png", alt: "BambooHR", h: 30 },
  { src: "https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png", alt: "Workday", h: 34 },
  { src: "https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr", alt: "Lever", h: 20 },
  { src: "https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png", alt: "Zoho Recruit", h: 24 },
];

export default function ProductClient() {
  return (
    <>
      <SiteHeader
        announcement="AI Resume Screener now reads portfolios & GitHub"
        announcementCta="Book a demo"
      />

      {/* HERO */}
      <section className="relative overflow-hidden px-7 pt-[74px] pb-[90px] bg-[radial-gradient(1100px_540px_at_78%_6%,#FFF0EE_0%,rgba(255,240,238,0)_60%),#fff]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.04fr_1.1fr] gap-[62px] items-center max-[920px]:grid-cols-1 max-[920px]:gap-[42px]">
            <div>
              <Reveal delay={0.02}>
                <span className="inline-flex items-center gap-[9px] bg-white border border-[#F4D9DA] rounded-[999px] pl-2 pr-[15px] py-[7px] text-[13px] font-semibold text-[#A8323A] shadow-[0_6px_16px_rgba(110,11,14,0.06)]">
                  <span className="bg-coral text-white text-[11px] font-bold tracking-[0.04em] px-[9px] py-[3px] rounded-[999px]">AI SCREENING</span>
                  Shortlist in minutes, not weeks
                </span>
              </Reveal>
              <Reveal as="h1" delay={0.06} className="mt-[22px] text-[62px] leading-[1.04] font-extrabold tracking-[-2px] m-0 text-ink max-[920px]:text-[44px] max-[920px]:tracking-[-1.4px]">
                Screen every résumé.
                <br />
                Surface the best <span className="text-coral">automatically.</span>
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-[22px] max-w-[520px] text-[19px] leading-[1.6] text-body font-normal">
                Testlify&apos;s AI reads every application the moment it lands — scoring skills, experience and intent against your role, then handing you a ranked shortlist you can trust. No keyword filters. No bias. No backlog.
              </Reveal>
              <Reveal delay={0.14} className="flex items-center gap-[14px] flex-wrap mt-[30px]">
                <CtaButton label="Start free — screen 50 résumés" href={routes.pricing} variant="primary" size="md" icon="arrow" magnetic />
                <CtaButton label="Book a demo" href="#" variant="secondary" size="md" icon="none" />
              </Reveal>
              <Reveal delay={0.18} className="flex items-center gap-[14px] flex-wrap mt-[26px] text-[13.5px] text-muted font-semibold">
                <span>No credit card</span>
                <span className="w-1 h-1 rounded-full bg-[#D9C7C9]" />
                <span>7-day free trial</span>
                <span className="w-1 h-1 rounded-full bg-[#D9C7C9]" />
                <span>SOC 2 · GDPR</span>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="relative">
              <div className="absolute -top-[14px] right-[30px] z-[4] bg-ink text-white text-[12.5px] font-semibold px-[15px] py-[9px] rounded-[12px] shadow-[0_16px_34px_rgba(26,16,20,0.30)] flex items-center gap-2">
                <i className="w-[7px] h-[7px] rounded-full bg-[#3DDC84] inline-block shadow-[0_0_0_4px_rgba(61,220,132,0.2)]" />
                Top match found — 96% fit
              </div>
              <div className="bg-white border border-warm rounded-[22px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <div className="flex items-center gap-2 px-[18px] py-[14px] border-b border-[#F4ECEC] bg-[#FCFAFA]">
                  <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
                  <span className="ml-[14px] flex-1 h-[26px] rounded-lg bg-[#F3EAEA] flex items-center px-3 text-[11.5px] text-[#A9999C] font-medium">testlify.com/screening/senior-frontend</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[16px] leading-[1.25] font-bold tracking-[-0.4px] text-ink">Ranked shortlist</div>
                    <div className="text-[12px] text-muted font-semibold"><b className="text-ink">412</b> screened · <b className="text-ink">under 2 min</b></div>
                  </div>
                  <div className="flex items-center gap-[13px] px-[14px] py-[13px] border border-[#FBC9CB] rounded-[14px] mb-[10px] bg-[linear-gradient(180deg,#FFF8F8,#fff)] shadow-[0_14px_30px_rgba(242,63,68,0.12)]">
                    <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-[14px] text-white shrink-0 bg-[linear-gradient(135deg,#F23F44,#FF7A52)]">AR</span>
                    <div>
                      <div className="text-[14px] font-bold text-ink leading-[1.2]">Amelia Rao</div>
                      <div className="text-[11.5px] text-[#9A878A] font-medium">Senior Frontend Engineer · 7 yrs</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-[18px] font-extrabold tracking-[-0.5px] text-[#1F9D6B]">96</div>
                      <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#A9999C]">Skill fit</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[13px] px-[14px] py-[13px] border border-[#F1E6E7] rounded-[14px] mb-[10px] bg-white">
                    <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-[14px] text-white shrink-0 bg-[linear-gradient(135deg,#6E62F2,#9A8BFF)]">DS</span>
                    <div>
                      <div className="text-[14px] font-bold text-ink leading-[1.2]">Daniel Singh</div>
                      <div className="text-[11.5px] text-[#9A878A] font-medium">Frontend Engineer · 5 yrs</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-[18px] font-extrabold tracking-[-0.5px] text-ink">91</div>
                      <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#A9999C]">Skill fit</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[13px] px-[14px] py-[13px] border border-[#F1E6E7] rounded-[14px] mb-[10px] bg-white">
                    <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-[14px] text-white shrink-0 bg-[linear-gradient(135deg,#2AA6F2,#67C9FF)]">MK</span>
                    <div>
                      <div className="text-[14px] font-bold text-ink leading-[1.2]">Mei Kawano</div>
                      <div className="text-[11.5px] text-[#9A878A] font-medium">UI Engineer · 6 yrs</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-[18px] font-extrabold tracking-[-0.5px] text-ink">88</div>
                      <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#A9999C]">Skill fit</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-[13px] px-[14px] py-[13px] border border-[#F1E6E7] rounded-[14px] bg-white opacity-60">
                    <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold text-[14px] text-white shrink-0 bg-[linear-gradient(135deg,#B59A9D,#D9C7C9)]">JP</span>
                    <div>
                      <div className="text-[14px] font-bold text-ink leading-[1.2]">James Park</div>
                      <div className="text-[11.5px] text-[#9A878A] font-medium">Web Developer · 4 yrs</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-[18px] font-extrabold tracking-[-0.5px] text-[#A9999C]">73</div>
                      <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#A9999C]">Skill fit</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="px-7 pt-[42px] pb-3">
        <div className="max-w-[1240px] mx-auto">
          <Reveal as="p" className="text-center text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#A9999C] m-0 mb-[26px]">
            Screening résumés for teams at
          </Reveal>
          <Reveal className="flex items-center justify-center flex-wrap gap-[46px] opacity-[0.78]">
            {LOGOS.map((l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={l.alt} src={l.src} alt={l.alt} style={{ height: l.h, filter: "grayscale(1)", opacity: 0.7 }} className="max-[920px]:!h-[22px]" />
            ))}
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-7 py-[104px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mx-auto mb-14 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              How it works<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[33px] max-[920px]:tracking-[-1px]">
              From inbox to interview-ready in three steps
            </Reveal>
            <Reveal as="p" delay={0.08} className="mt-[18px] text-[19px] leading-[1.6] text-body font-normal">
              Connect your pipeline once. Every résumé that arrives is read, scored and ranked — so your team only ever opens the ones worth their time.
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[920px]:grid-cols-1">
            {[
              {
                d: 0.04,
                step: "STEP 01",
                title: "Connect your sources",
                body: "Pull applications straight from your ATS, careers page or a job board — Greenhouse, Lever, Workday and 100+ more, live in minutes.",
                icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
              },
              {
                d: 0.1,
                step: "STEP 02",
                title: "AI reads & scores",
                body: "Our model understands context — projects, portfolios, GitHub, career trajectory — and scores each candidate against the skills your role actually needs.",
                icon: (
                  <>
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  </>
                ),
              },
              {
                d: 0.16,
                step: "STEP 03",
                title: "Open a ranked shortlist",
                body: "Get a defensible, explainable ranking with the evidence behind every score — then move the top candidates straight into assessment or interview.",
                icon: (
                  <>
                    <path d="M3 17l6-6 4 4 8-8" />
                    <path d="M17 7h4v4" />
                  </>
                ),
              },
            ].map((s) => (
              <Reveal key={s.step} delay={s.d} className="bg-white border border-[#F1E6E7] rounded-[20px] px-7 py-8">
                <div className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {s.icon}
                  </svg>
                </div>
                <div className="text-[13px] font-bold text-coral tracking-[0.06em] mb-[9px]">{s.step}</div>
                <h3 className="text-[22px] leading-[1.25] font-bold tracking-[-0.4px] text-ink m-0 mb-[11px]">{s.title}</h3>
                <p className="text-[16px] leading-[1.66] text-body m-0">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY 1 — Understanding, not keywords (sand) */}
      <section className="px-7 py-[104px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.05fr_1fr] gap-16 items-center max-[920px]:grid-cols-1">
            <Reveal>
              <p className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
                Understanding, not keywords<b className="text-coral font-semibold">.</b>
              </p>
              <h2 className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] text-ink m-0 mb-5 max-[920px]:text-[33px] max-[920px]:tracking-[-1px]">
                It reads like your best recruiter — at 1,000× the speed
              </h2>
              <p className="text-[19px] leading-[1.6] text-body mb-6">
                Keyword filters reject great people for using the wrong synonym. Testlify reads for meaning: it connects a side project to a competency, a job-hop to growth, a bootcamp to real skill — and explains every call.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { b: "Skill inference", rest: " — maps each résumé to a structured skill profile, not a string match." },
                  { b: "Evidence on every score", rest: " — see exactly which lines drove the ranking." },
                  { b: "Bias controls", rest: " — hide names, photos and schools; score on capability alone." },
                ].map((it) => (
                  <div key={it.b} className="flex gap-[13px] items-start">
                    <span className="shrink-0 w-6 h-6 rounded-[7px] bg-coral flex items-center justify-center mt-px">
                      <Check />
                    </span>
                    <p className="text-[16px] leading-[1.66] text-body m-0"><b className="text-ink">{it.b}</b>{it.rest}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="bg-white border border-warm rounded-[22px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <div className="flex items-center gap-2 px-[18px] py-[14px] border-b border-[#F4ECEC] bg-[#FCFAFA]">
                  <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
                  <span className="ml-[14px] flex-1 h-[26px] rounded-lg bg-[#F3EAEA] flex items-center px-3 text-[11.5px] text-[#A9999C] font-medium">Candidate · Amelia Rao</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-[13px] mb-[18px]">
                    <span className="w-[46px] h-[46px] rounded-full flex items-center justify-center font-bold text-[14px] text-white shrink-0 bg-[linear-gradient(135deg,#F23F44,#FF7A52)]">AR</span>
                    <div>
                      <div className="text-[16px] font-bold text-ink leading-[1.2]">Amelia Rao</div>
                      <div className="text-[11.5px] text-[#9A878A] font-medium">Match score · <b className="text-[#1F9D6B]">96 / 100</b></div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px]">
                    {[
                      { label: "React & TypeScript", val: "Expert", w: "94%" },
                      { label: "System design", val: "Strong", w: "82%" },
                      { label: "Accessibility", val: "Proven", w: "88%" },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between text-[12.5px] font-semibold mb-1.5">
                          <span className="text-muted">{s.label}</span>
                          <span className="text-ink">{s.val}</span>
                        </div>
                        <div className="h-[7px] rounded-[99px] bg-warm overflow-hidden">
                          <div className="h-full bg-[linear-gradient(90deg,#F23F44,#FF7A52)]" style={{ width: s.w }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-[18px] px-[15px] py-[13px] rounded-[12px] bg-[#F6FBF8] border border-[#D6EFE2] text-[12.5px] text-[#1F7A57] leading-[1.5]">
                    <b>Why ranked #1:</b> Led a design-system rebuild (evidence: portfolio), 7 yrs React, open-source a11y contributor.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY 2 — Fair, defensible, auditable (white) */}
      <section className="px-7 py-[104px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1fr_1.05fr] gap-16 items-center max-[920px]:grid-cols-1">
            <Reveal className="order-2 max-[920px]:order-none">
              <p className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
                Fair, defensible, auditable<b className="text-coral font-semibold">.</b>
              </p>
              <h2 className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] text-ink m-0 mb-5 max-[920px]:text-[33px] max-[920px]:tracking-[-1px]">
                Hiring decisions you can stand behind
              </h2>
              <p className="text-[19px] leading-[1.6] text-body mb-6">
                Every score is explainable and logged. Apply consistent criteria across thousands of applicants, document the rationale, and stay EEOC-defensible without slowing down.
              </p>
              <div className="grid grid-cols-2 gap-[14px]">
                <div className="bg-white border border-[#F1E6E7] rounded-[16px] p-5">
                  <div className="text-[34px] font-extrabold tracking-[-1.4px] text-coral leading-[1.08]">80%</div>
                  <p className="text-[14.5px] leading-[1.66] text-body m-0 mt-1.5">less time in the résumé pile</p>
                </div>
                <div className="bg-white border border-[#F1E6E7] rounded-[16px] p-5">
                  <div className="text-[34px] font-extrabold tracking-[-1.4px] text-coral leading-[1.08]">2.4×</div>
                  <p className="text-[14.5px] leading-[1.66] text-body m-0 mt-1.5">more diverse shortlists</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="order-1 max-[920px]:order-none">
              <div className="bg-white border border-warm rounded-[22px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
                <div className="flex items-center gap-2 px-[18px] py-[14px] border-b border-[#F4ECEC] bg-[#FCFAFA]">
                  <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
                  <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
                  <span className="ml-[14px] flex-1 h-[26px] rounded-lg bg-[#F3EAEA] flex items-center px-3 text-[11.5px] text-[#A9999C] font-medium">Audit log · Senior Frontend</span>
                </div>
                <div className="py-2">
                  <div className="flex items-center gap-3 px-5 py-[14px] border-b border-[#F4ECEC]">
                    <span className="shrink-0 w-[30px] h-[30px] rounded-full bg-[#FFF0F0] flex items-center justify-center">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.2" aria-hidden>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="text-[13.5px] font-semibold">Names &amp; schools hidden</div>
                      <div className="text-[11.5px] text-[#A9999C]">Blind screening enabled · 09:14</div>
                    </div>
                    <span className="text-[11px] font-bold text-[#1F9D6B]">ON</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-[14px] border-b border-[#F4ECEC]">
                    <span className="shrink-0 w-[30px] h-[30px] rounded-full bg-[#FFF0F0] flex items-center justify-center">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.2" aria-hidden>
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="text-[13.5px] font-semibold">412 candidates scored</div>
                      <div className="text-[11.5px] text-[#A9999C]">Same criteria applied · 09:16</div>
                    </div>
                    <span className="text-[11px] font-bold text-[#1F9D6B]">DONE</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-[14px]">
                    <span className="shrink-0 w-[30px] h-[30px] rounded-full bg-[#FFF0F0] flex items-center justify-center">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.2" aria-hidden>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                    </span>
                    <div className="flex-1">
                      <div className="text-[13.5px] font-semibold">Decision rationale exported</div>
                      <div className="text-[11.5px] text-[#A9999C]">EEOC-ready PDF · 09:18</div>
                    </div>
                    <span className="text-[11px] font-bold text-muted">PDF</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLATFORM TOUR (sand) */}
      <section id="platform" className="px-7 py-[104px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[700px] mx-auto mb-[52px] text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0">
              The Testlify platform<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" className="mt-3.5 text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[33px] max-[920px]:tracking-[-1px]">
              Everything you need to hire on skill
            </Reveal>
            <Reveal as="p" className="mt-4 text-[19px] leading-[1.6] text-body">
              Five connected products, one workflow — from first résumé to signed offer.
            </Reveal>
          </div>
          <div className="flex flex-col gap-6">
            {PGROUPS.map((g) => (
              <div key={g.id} id={g.id} className="scroll-mt-[120px]">
              <Reveal
                className="bg-white border border-warm rounded-[20px] px-8 py-[30px] shadow-[0_16px_32px_rgba(110,11,14,0.06)] max-[920px]:px-5 max-[920px]:py-6"
              >
                <div className="flex items-start gap-4 mb-[22px]">
                  <span className="shrink-0 w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {g.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-1.5">
                      {g.eyebrow}<b className="text-coral font-semibold">.</b>
                    </p>
                    <h3 className="text-[22px] leading-[1.25] font-bold tracking-[-0.4px] text-ink m-0">{g.title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-[14px] max-[920px]:grid-cols-2">
                  {g.cards.map((c) => (
                    <div key={c.num} className="p-[18px] border border-[#F4ECEC] rounded-[14px] bg-[#FCFAFA] transition-all duration-200 hover:border-[#FBC9CB] hover:-translate-y-[3px] hover:shadow-[0_14px_28px_rgba(242,63,68,0.10)]">
                      <p className="text-[11px] font-bold tracking-[0.1em] text-[#D98A8D] m-0 mb-2.5">{c.num}</p>
                      <p className="text-[15.5px] font-bold text-ink m-0 mb-1 tracking-[-0.2px]">{c.t}</p>
                      <p className="text-[13px] text-muted m-0 leading-[1.45]">{c.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS (dark) */}
      <section className="px-7 py-[104px] bg-ink text-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-[54px]">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#C9A9AB] m-0 mb-[18px]">
              Proven at scale<b className="text-coral-bright font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-white max-[920px]:text-[33px] max-[920px]:tracking-[-1px]">
              The numbers teams see in week one
            </Reveal>
          </div>
          <div className="grid grid-cols-4 gap-5 max-[920px]:grid-cols-2">
            {[
              { d: 0.04, n: "80%", l: "faster time-to-shortlist" },
              { d: 0.1, n: "412k", l: "résumés screened monthly" },
              { d: 0.16, n: "2.4×", l: "more diverse shortlists" },
              { d: 0.22, n: "4.9", l: "avg. G2 rating" },
            ].map((s) => (
              <Reveal key={s.l} delay={s.d} className="text-center">
                <div className="text-[52px] font-extrabold tracking-[-2px] bg-[linear-gradient(180deg,#fff,#FFC9BD)] bg-clip-text text-transparent">{s.n}</div>
                <p className="text-[14.5px] text-[#C9B9BC] m-0 mt-1.5">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE (white) */}
      <section className="px-7 py-[104px]">
        <Reveal className="max-w-[900px] mx-auto text-center">
          <div className="text-[13px] font-bold tracking-[0.1em] text-coral mb-6">★★★★★ &nbsp;G2 · 4.9/5</div>
          <p className="text-[30px] leading-[1.4] font-semibold tracking-[-0.6px] text-ink m-0 mb-7">
            &ldquo;We went from a three-day résumé slog to a ranked shortlist before our first coffee. The explanations are what sold our talent team — every score comes with the receipts.&rdquo;
          </p>
          <div className="inline-flex items-center gap-[13px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2026/03/Xneelo-Chrissie-Blom.png" alt="Chrissie Blom" className="w-[52px] h-[52px] rounded-full object-cover" />
            <div className="text-left">
              <div className="font-bold text-[15px]">Chrissie Blom</div>
              <div className="text-muted text-[13.5px]">Head of Talent, Xneelo</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ (sand) */}
      <section className="px-7 py-[104px] bg-sand">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              Questions, answered<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[33px] max-[920px]:tracking-[-1px]">
              What teams ask before switching
            </Reveal>
          </div>
          <Reveal>
            <FAQ items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* PAGE CTA (coral, distinct from global band) */}
      <section className="px-7 py-24">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="relative overflow-hidden rounded-[30px] px-14 py-[72px] text-center text-white bg-[radial-gradient(900px_420px_at_80%_0%,#FFE3DD_0%,rgba(255,227,221,0)_60%),linear-gradient(135deg,#F23F44,#C0242B)]">
            <h2 className="text-[46px] leading-[1.08] font-extrabold tracking-[-1.4px] text-white m-0 mb-[18px]">
              Stop reading résumés.
              <br />
              Start meeting your best people.
            </h2>
            <p className="text-[19px] leading-[1.55] text-white/90 max-w-[560px] mx-auto mb-[34px]">
              Screen your first 50 résumés free — no credit card, no setup call. See a ranked shortlist for your real role in minutes.
            </p>
            <div className="flex items-center justify-center gap-[14px] flex-wrap">
              <CtaButton label="Start free" href={routes.pricing} variant="light" size="md" icon="arrow" />
              <CtaButton label="Book a demo" href="#" variant="outline-light" size="md" icon="none" />
            </div>
            <div className="flex items-center justify-center gap-[14px] flex-wrap mt-[26px] text-[13.5px] text-white/85 font-semibold">
              <span>SOC 2 Type II</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>GDPR &amp; CCPA</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Cancel anytime</span>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
