import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Real estate skills assessment",
  description:
    "Screen agents, brokers, property managers and leasing consultants on negotiation, compliance and market knowledge — before your shortlist ever reaches the first call.",
};

/* ---------- data (verbatim from the prototype logic class) ---------- */

const FAQ_ITEMS = [
  {
    q: "What should a real estate skills assessment cover?",
    a: "A real estate skills assessment should cover role-specific competencies for the position you are hiring: negotiation, market knowledge, sales aptitude, communication and client handling for agents, plus fair housing, disclosure and compliance knowledge. It replaces resume screening with objective, scored evidence of who can actually do the job.",
  },
  {
    q: "How do you assess property manager candidates before hiring?",
    a: "Property manager candidates are assessed on operations knowledge, tenant and resident handling, compliance awareness and situational judgment. Testlify combines role-specific tests with cognitive and personality modules so you can see how a candidate handles the day-to-day realities of managing a portfolio.",
  },
  {
    q: "What is the best pre-employment test for real estate agents?",
    a: "The strongest agent assessment blends sales aptitude, negotiation and communication with a market-knowledge and fair-housing check. Testlify lets you combine these into one role-specific assessment and set a pass threshold, so only agents who can genuinely sell and stay compliant advance.",
  },
  {
    q: "Can I screen real estate candidates for fair housing compliance?",
    a: "Yes. Testlify includes fair housing, disclosure and agency-law modules validated for real estate roles. Set a minimum pass score on the compliance module so candidates who do not meet your standard are automatically flagged and do not advance to interview.",
  },
  {
    q: "How long does a real estate pre-employment assessment take for candidates?",
    a: "Most real estate assessments run between 20 and 40 minutes depending on the role and modules selected. Agent and leasing roles typically combine sales aptitude, communication and compliance; appraiser and analyst roles add numerical and reasoning modules. Candidates receive results immediately on completion.",
  },
  {
    q: "Does Testlify integrate with real estate ATS systems?",
    a: "Yes. Testlify has 100+ native ATS and HRIS integrations including Workday, SAP SuccessFactors, Greenhouse, BambooHR and Lever. Assessment results and candidate rankings sync directly into your existing hiring workflow without manual data transfer.",
  },
  {
    q: "What is skills-based hiring in real estate and why does it matter?",
    a: "Skills-based hiring means shortlisting on verified, job-relevant ability rather than resumes or interview charisma. In real estate — where a bad hire costs commissions, compliance exposure and reputation — it gives recruiters objective, scored proof of who can negotiate, price, sell and stay compliant before the first call.",
  },
];

const PIPE_NODES = [
  "Role input",
  "AI builder",
  "Skills test",
  "Proctoring",
  "Auto score",
  "Ranked list",
];

const HERO_SCORES: [string, number][] = [
  ["Negotiation", 96],
  ["Market knowledge", 88],
  ["Fair housing law", 90],
  ["Communication", 84],
  ["Client handling", 89],
];

const IDENTIFY = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
        <polyline points="17 18 23 18 23 12" />
      </svg>
    ),
    h: "Early attrition is expensive",
    p: "A wrong hire in a commissioned role can sit for months without closing. Verified selling and market aptitude up front protects your pipeline and your ramp.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    h: "Compliance gaps become incidents",
    p: "Fair housing, disclosure and contract rules leave no room for guesswork. Assessment gives you scored proof a candidate knows the rules before day one.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    h: "Interviews reward confidence, not competence",
    p: "Real estate interviews favor the smooth talker. Skills tests surface who can actually negotiate, price and close — not just who presents well.",
  },
];

const ROLES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    h: "Real Estate Agent",
    d: "Sales aptitude, negotiation and client communication for residential agents who list, show and close.",
    tags: ["Sales aptitude", "Negotiation", "Communication"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <line x1="9" y1="9" x2="9" y2="9.01" />
        <line x1="9" y1="13" x2="9" y2="13.01" />
        <line x1="15" y1="9" x2="15" y2="9.01" />
        <line x1="15" y1="13" x2="15" y2="13.01" />
      </svg>
    ),
    h: "Commercial Real Estate Agent",
    d: "Market analysis, financial reasoning and complex negotiation for office, retail and industrial deals.",
    tags: ["Market analysis", "Negotiation", "Financial reasoning"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    h: "Property Manager",
    d: "Operations, tenant handling and compliance knowledge for managing portfolios and resident relations.",
    tags: ["Operations", "Tenant handling", "Compliance"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    h: "Real Estate Broker",
    d: "Leadership, deal structuring and market judgment for brokers who run teams and own outcomes.",
    tags: ["Leadership", "Deal structuring", "Market knowledge"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    h: "Leasing Consultant",
    d: "Customer service, sales and objection handling for consultants who tour, qualify and convert renters.",
    tags: ["Customer service", "Sales", "Objection handling"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    h: "Real Estate Appraiser",
    d: "Valuation, numerical reasoning and attention to detail for appraisers who price property accurately.",
    tags: ["Valuation", "Numerical reasoning", "Attention to detail"],
  },
];

const SCORECARD_1: [string, number][] = [
  ["Negotiation", 94],
  ["Market knowledge", 88],
  ["Fair housing law", 91],
  ["Communication", 86],
  ["Client handling", 93],
];

const COMPLIANCE_SCORES: [string, number][] = [
  ["Fair housing law", 96],
  ["Disclosure & contracts", 90],
  ["Anti-discrimination", 94],
  ["Agency law", 88],
];

const RANK_ROWS: [string, number, number, number, "adv" | "below"][] = [
  ["Maya R.", 94, 96, 90, "adv"],
  ["Devin K.", 88, 85, 89, "adv"],
  ["Tom H.", 68, 60, 74, "below"],
  ["Aisha N.", 90, 92, 88, "adv"],
];

const COMPARE_ROWS: [string, React.ReactNode, React.ReactNode, React.ReactNode][] = [
  ["Real estate–specific test library", <span key="a"><span className="text-[#1FA463] font-bold">&#10003;</span> Yes</span>, "Limited", <span key="b" className="text-[#C79A9C]">&#10007;</span>],
  ["Fair housing & compliance screening", <span key="a"><span className="text-[#1FA463] font-bold">&#10003;</span> Yes</span>, <span key="b" className="text-[#C79A9C]">&#10007;</span>, <span key="c" className="text-[#C79A9C]">&#10007;</span>],
  ["Role-specific negotiation & sales tests", <span key="a"><span className="text-[#1FA463] font-bold">&#10003;</span> Yes</span>, "Partial", <span key="b" className="text-[#C79A9C]">&#10007;</span>],
  ["Auto-ranked shortlists", <span key="a"><span className="text-[#1FA463] font-bold">&#10003;</span> Yes</span>, "Partial", <span key="b" className="text-[#C79A9C]">&#10007;</span>],
  ["Proctoring & anti-cheating", <span key="a"><span className="text-[#1FA463] font-bold">&#10003;</span> Yes</span>, "Partial", <span key="b" className="text-[#C79A9C]">&#10007;</span>],
  ["Cost per role at volume", <span key="a"><span className="text-[#1FA463] font-bold">&#10003;</span> Low</span>, "Medium", <span key="b">High (time)</span>],
];

const TESTIMONIALS = [
  {
    q: "“We screen sales aptitude and client handling before we ever interview an agent. Close rates went up and we stopped losing a quarter to hires who could not actually sell.”",
    name: "Head of Talent",
    role: "Residential brokerage, multi-office",
  },
  {
    q: "“Verifying fair housing and disclosure knowledge up front took real risk off the table. Every shortlist now comes with scored proof, not a gut feel.”",
    name: "Recruitment Manager",
    role: "Property management group",
  },
];

const ATS: [string, string][] = [
  ["https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png", "Workday"],
  ["https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png", "SAP SuccessFactors"],
  ["https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png", "Lever"],
  ["https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg", "SmartRecruiters"],
  ["https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png", "Recruitee"],
  ["https://testlify.com/wp-content/uploads/2025/10/logo.svg", "UKG Pro Recruiting"],
  ["https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png", "BambooHR"],
  ["https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png", "Greenhouse"],
  ["https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png", "Zoho Recruit"],
  ["https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png", "JazzHR"],
];

const MARQUEE = ["LTIMindtree", "Veeam", "Thales", "Third Bridge", "Sonatafy", "NSE", "Apollo", "Solvay"];

/* ---------- small building blocks ---------- */

function ChkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-[#1FA463] w-5 h-5" style={{ strokeWidth: 3 }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[12.5px] font-semibold text-[#46383C] w-[150px] shrink-0">{label}</span>
      <span className="flex-1 h-2 rounded-md bg-[#F4E7E8] overflow-hidden">
        <i
          className="block h-full rounded-md bg-[linear-gradient(90deg,#FF7A52,#F23F44)] re-bar-fill"
          style={{ ["--w" as string]: `${value}%` }}
        />
      </span>
      <span className="text-[13px] font-extrabold text-coral w-[34px] text-right shrink-0">{value}</span>
    </div>
  );
}

function CardBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 py-[13px] px-5 border-b border-[#F4E9E9] bg-[#FCF7F7]">
      <span className="flex gap-1.5">
        <i className="w-[11px] h-[11px] rounded-full block bg-[#F26B6B]" />
        <i className="w-[11px] h-[11px] rounded-full block bg-[#F5B93F]" />
        <i className="w-[11px] h-[11px] rounded-full block bg-[#4CC38A]" />
      </span>
      <span className="text-[12.5px] font-semibold text-muted ml-1.5">{title}</span>
    </div>
  );
}

const SEC = "max-w-[1240px] mx-auto px-7";
const CARD = "bg-white border border-warm rounded-[20px] shadow-[0_24px_50px_rgba(110,11,14,0.10)] overflow-hidden";

/* ---------- page ---------- */

export default function RealEstateIndustryPage() {
  return (
    <>
      <style>{`
        @keyframes rtfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes rtfill{to{width:var(--w)}}
        @keyframes remarquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .re-float{animation:rtfloat 6s ease-in-out infinite}
        .re-bar-fill{width:0;animation:rtfill 1.4s cubic-bezier(.4,0,.2,1) forwards}
        .re-marq{animation:remarquee 30s linear infinite}
      `}</style>

      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      {/* ============ HERO ============ */}
      <section className="pt-[74px] pb-20 bg-[linear-gradient(180deg,#FFF8F7_0%,#fff_82%)]">
        <div className={`${SEC} grid grid-cols-1 md:grid-cols-[1.02fr_.98fr] gap-14 items-center`}>
          <Reveal className="rt-copy">
            <div className="flex items-center gap-2 text-[13px] text-muted mb-[18px]">
              <Link href={routes.solutions} className="text-muted hover:text-coral">Solutions</Link>
              <span>/</span>
              <span>Industry / Real estate</span>
            </div>
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
              For real estate teams<b className="text-coral">.</b>
            </p>
            <h1 className="text-[38px] md:text-[52px] font-extrabold tracking-[-1.6px] leading-[1.06] mt-4 text-ink">
              The real estate skills assessment built for how <span className="text-coral">recruiters actually hire</span>
            </h1>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">
              Screen agents, brokers, property managers and leasing consultants on negotiation, compliance and market knowledge — before your shortlist ever reaches the first call.
            </p>
            <div className="flex gap-3.5 flex-wrap mt-[26px]">
              <CtaButton label="Try for Free" href={routes.pricing} variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a Demo" href={routes.contact} variant="secondary" size="md" icon="play" />
            </div>
            <div className="flex gap-[22px] flex-wrap mt-6">
              {["7-day free trial", "Unlimited assessments", "No credit card required"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[13.5px] font-semibold text-[#6C5A5D]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="rt-media">
            <div className="re-float bg-[linear-gradient(180deg,#FFF1EF,#FFF8F7)] border border-[#F6DAD9] rounded-3xl p-6 shadow-[0_40px_90px_rgba(110,11,14,0.14)]">
              {/* pipeline */}
              <div className="relative flex justify-between px-1.5 pt-3 pb-6">
                <span className="absolute top-[38px] left-9 right-9 h-0.5 bg-[repeating-linear-gradient(90deg,#F0B9B9_0_6px,transparent_6px_12px)]" />
                {PIPE_NODES.map((n) => (
                  <div key={n} className="relative z-[1] flex flex-col items-center gap-[9px] flex-1">
                    <span className="w-[52px] h-[52px] rounded-full bg-white border-2 border-coral flex items-center justify-center shadow-[0_0_0_7px_rgba(242,63,68,0.07)]">
                      <i className="w-[15px] h-[15px] rounded-full bg-coral block" />
                    </span>
                    <span className="text-[11px] font-semibold text-[#6C5A5D] text-center leading-[1.2]">{n}</span>
                  </div>
                ))}
              </div>
              {/* score */}
              <div className="bg-white rounded-2xl py-[18px] px-5 shadow-[0_12px_26px_rgba(110,11,14,0.08)]">
                <div className="flex justify-between items-baseline text-[13px] font-semibold text-[#6C5A5D] mb-4">
                  <span>Candidate assessment score</span>
                  <b className="text-xl font-extrabold text-coral tracking-[-0.5px]">92/100</b>
                </div>
                <div className="flex flex-col gap-[11px]">
                  {HERO_SCORES.map(([l, v]) => <ScoreBar key={l} label={l} value={v} />)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TRUST MARQUEE ============ */}
      <section className="bg-sand pt-10 pb-12">
        <Reveal className={SEC}>
          <p className="text-center text-[13.5px] font-semibold tracking-[1.5px] text-faint uppercase mb-[30px]">
            Trusted by <strong className="text-coral font-extrabold">1,500+</strong> hiring teams from fast-scaling startups to enterprise TA functions
          </p>
          <div className="relative max-w-[1100px] mx-auto overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="re-marq flex w-max gap-16 items-center">
              {[...MARQUEE, ...MARQUEE].map((m, i) => (
                <span key={i} className="text-2xl font-bold text-[#C9B9BC] tracking-[-0.5px] whitespace-nowrap">{m}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ IDENTIFY (3 cards) ============ */}
      <section className="py-24">
        <div className={SEC}>
          <Reveal className="text-center max-w-[760px] mx-auto">
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] text-ink">Rank shortlists before the first call</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">Assessment helps identify who can apply those skills in real-world scenarios.</p>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mt-[52px]">
            {IDENTIFY.map((c) => (
              <div key={c.h} className="relative bg-white border border-[#F0E2E3] rounded-[20px] pt-[34px] px-8 pb-8 shadow-[0_16px_30px_rgba(110,11,14,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,0.12)]">
                <div className="flex items-center gap-3.5 mb-5">
                  <span className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center shrink-0">{c.icon}</span>
                </div>
                <h3 className="text-[19px] font-bold m-0 tracking-[-0.3px] leading-[1.28] text-ink">{c.h}</h3>
                <p className="text-[14.5px] leading-[1.62] text-[#6C5A5D] mt-3.5">{c.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ ROLES ============ */}
      <section className="py-24 bg-sand">
        <div className={SEC}>
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">Real estate roles<b className="text-coral">.</b></p>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 text-ink">Every position on your real estate team, assessed</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">From front-line agents to appraisers and property managers, map the right role-specific test to every hire in under 60 seconds.</p>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[46px]">
            {ROLES.map((r) => (
              <div key={r.h} className="relative bg-white border border-[#F0E2E3] rounded-[18px] py-7 px-[26px] shadow-[0_16px_30px_rgba(110,11,14,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,0.12)]">
                <div className="flex items-center mb-[18px]">
                  <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center">{r.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold m-0 mb-1.5 tracking-[-0.3px] text-ink">{r.h}</h3>
                <p className="text-[13.5px] leading-[1.5] text-[#6C5A5D] m-0 mb-4">{r.d}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="text-[12px] font-semibold text-[#B23A3F] bg-[#FDECEC] border border-[#F8DADA] rounded-full py-1.5 px-3 whitespace-nowrap">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <div className="text-center">
            <Reveal as="span" className="inline-block">
              <Link href={routes.testLibrary} className="inline-flex items-center gap-2 mt-[34px] text-coral font-bold text-[15.5px]">
                View all test library
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHAT IT SHOWS ============ */}
      <section className="py-24">
        <div className={SEC}>
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">What it shows<b className="text-coral">.</b></p>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 text-ink">What the real estate skills assessment actually shows recruiters</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">Each feature below is built from what real estate teams told us was missing from the tools they already had.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center mt-14">
            <Reveal>
              <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] text-ink mt-0">Per-skill scores, not just a single number to guess from</h2>
              <p className="text-[15.5px] leading-[1.64] text-[#5A4B4E] mt-3.5">Every candidate gets a breakdown by skill area, not a single composite that hides who is actually job-ready.</p>
              <div className="flex flex-col gap-3 mt-[22px]">
                {["Negotiation, market knowledge and communication scored separately", "Fair housing and compliance knowledge verified, not assumed", "Ranked against your own pass threshold per role"].map((t) => (
                  <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium"><ChkIcon />{t}</div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className={CARD}>
                <CardBar title="Candidate Scorecard · Real Estate Agent" />
                <div className="p-[22px]">
                  <div className="flex justify-between items-start gap-3.5">
                    <div>
                      <b className="text-[15.5px] font-bold text-ink block">Maya Reyes</b>
                      <span className="text-[12px] text-muted mt-0.5 block">Real Estate Agent · Residential</span>
                    </div>
                    <span className="text-[32px] font-extrabold text-coral tracking-[-1px] leading-none shrink-0">92<i className="text-[14px] text-[#C9B9BC] not-italic font-bold">/100</i></span>
                  </div>
                  <div className="flex flex-col gap-[11px] mt-[18px]">
                    {SCORECARD_1.map(([l, v]) => <ScoreBar key={l} label={l} value={v} />)}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ RANKED SHORTLISTS (flip) ============ */}
      <section className="py-24 bg-sand">
        <div className={`${SEC} grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center`}>
          <Reveal className="md:order-2">
            <div className={CARD}>
              <CardBar title="Candidates · Real Estate Agent" />
              <div className="p-[22px]">
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr>
                      <th className="text-[10.5px] font-bold text-muted uppercase tracking-[0.04em] text-left pt-0 px-2 pb-3">Candidate</th>
                      <th className="text-[10.5px] font-bold text-muted uppercase tracking-[0.04em] text-right pt-0 px-2 pb-3">Overall</th>
                      <th className="text-[10.5px] font-bold text-muted uppercase tracking-[0.04em] text-right pt-0 px-2 pb-3">Sales</th>
                      <th className="text-[10.5px] font-bold text-muted uppercase tracking-[0.04em] text-right pt-0 px-2 pb-3">Cognitive</th>
                      <th className="text-[10.5px] font-bold text-muted uppercase tracking-[0.04em] text-right pt-0 px-2 pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RANK_ROWS.map(([name, o, s, c, status]) => (
                      <tr key={name}>
                        <td className="py-3 px-2 border-t border-[#F4ECEC] text-ink font-bold">{name}</td>
                        <td className="py-3 px-2 border-t border-[#F4ECEC] text-[#6C5A5D] font-bold text-right tabular-nums">{o}</td>
                        <td className="py-3 px-2 border-t border-[#F4ECEC] text-[#6C5A5D] font-bold text-right tabular-nums">{s}</td>
                        <td className="py-3 px-2 border-t border-[#F4ECEC] text-[#6C5A5D] font-bold text-right tabular-nums">{c}</td>
                        <td className="py-3 px-2 border-t border-[#F4ECEC] text-right">
                          {status === "adv" ? (
                            <span className="text-[11px] font-bold rounded-full py-[5px] px-[11px] whitespace-nowrap text-[#1FA463] bg-[#E8F6EE]">Advance</span>
                          ) : (
                            <span className="text-[11px] font-bold rounded-full py-[5px] px-[11px] whitespace-nowrap text-muted bg-[#F1E9E9]">Below threshold</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <Reveal className="md:order-1">
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] text-ink mt-0">Ranked shortlists auto-delivered. No spreadsheet</h2>
            <p className="text-[15.5px] leading-[1.64] text-[#5A4B4E] mt-3.5">The moment your final candidate is done, Testlify ranks the entire slate by overall score and per-skill performance. Share a ranked view with your hiring manager or export it as needed.</p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {["Full slate auto-ranked by objective criteria", "Per-skill breakdown behind every candidate score", "Below-threshold candidates flagged so recruiters focus their time"].map((t) => (
                <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium"><ChkIcon />{t}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAIR HOUSING ============ */}
      <section className="py-24">
        <div className={`${SEC} grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center`}>
          <Reveal>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] text-ink mt-0">Know before you hire whether a candidate understands fair housing law</h2>
            <p className="text-[15.5px] leading-[1.64] text-[#5A4B4E] mt-3.5">A single wrong call on fair housing, disclosure or agency law exposes your brokerage to real risk. Testlify&apos;s compliance modules give you scored proof of what each candidate knows before they ever speak to a client.</p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {["Fair housing, disclosure and agency-law modules validated for real estate", "Set a minimum pass score so only compliant candidates advance", "Exportable, timestamped scores for internal and audit review"].map((t) => (
                <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium"><ChkIcon />{t}</div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className={CARD}>
              <CardBar title="Compliance Scorecard · Maya R." />
              <div className="p-[22px]">
                <div className="flex justify-between items-start gap-3.5">
                  <div>
                    <b className="text-[15.5px] font-bold text-ink block">Fair Housing &amp; Compliance</b>
                    <span className="text-[12px] text-muted mt-0.5 block">Real Estate Agent · Residential</span>
                  </div>
                  <span className="text-[32px] font-extrabold text-coral tracking-[-1px] leading-none shrink-0">93<i className="text-[14px] text-[#C9B9BC] not-italic font-bold">/100</i></span>
                </div>
                <div className="flex flex-col gap-[11px] mt-[18px]">
                  {COMPLIANCE_SCORES.map(([l, v]) => <ScoreBar key={l} label={l} value={v} />)}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY TESTLIFY (comparison) ============ */}
      <section className="py-24 bg-sand">
        <div className={SEC}>
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">Why Testlify<b className="text-coral">.</b></p>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 text-ink">Why real estate recruiters move to Testlify</h2>
          </Reveal>
          <Reveal className="mt-11 overflow-x-auto pb-3">
            <table className="w-full border-collapse bg-white border border-warm rounded-[18px] overflow-hidden min-w-[720px] shadow-[0_18px_40px_rgba(110,11,14,0.09)]">
              <thead>
                <tr>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-ink border-b border-[#F4ECEC]">Capability</th>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-coral border-b border-[#F4ECEC]">Testlify</th>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-ink border-b border-[#F4ECEC]">Generic assessment tools</th>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-ink border-b border-[#F4ECEC]">Manual interviews only</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([cap, tl, generic, manual], i) => (
                  <tr key={i}>
                    <td className="py-4 px-[18px] text-[14.5px] font-semibold text-ink border-b border-[#F4ECEC]">{cap}</td>
                    <td className="py-4 px-[18px] text-[14.5px] font-bold text-ink bg-[#FFF8F7] border-b border-[#F4ECEC]">{tl}</td>
                    <td className="py-4 px-[18px] text-[14.5px] text-[#6C5A5D] border-b border-[#F4ECEC]">{generic}</td>
                    <td className="py-4 px-[18px] text-[14.5px] text-[#6C5A5D] border-b border-[#F4ECEC]">{manual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24">
        <div className={SEC}>
          <Reveal>
            <h2 className="text-[44px] font-extrabold tracking-[-0.8px] leading-[1.16] text-ink">What real estate hiring teams say</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-11">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white border border-warm rounded-[20px] pt-[38px] px-9 pb-9">
                <div className="flex gap-[5px] mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="#F23F44" className="w-5 h-5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl leading-[1.5] italic text-[#2A1D21] m-0 mb-[26px]">{t.q}</p>
                <div className="font-bold text-[17px] text-ink">{t.name}</div>
                <div className="text-[14.5px] text-[#6C5A5D] mt-1">{t.role}</div>
                <span className="inline-block whitespace-nowrap mt-5 bg-[#FCE0DE] text-coral text-[12.5px] font-bold py-[7px] px-3.5 rounded-full">G2 Verified</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section className="py-24 bg-sand">
        <div className={SEC}>
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">Integrations<b className="text-coral">.</b></p>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 text-ink">Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p>
          </Reveal>
          <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-11">
            {ATS.map(([src, alt]) => (
              <div key={alt} className="bg-white border border-warm rounded-[14px] h-[84px] flex items-center justify-center p-[18px] shadow-[0_10px_22px_rgba(110,11,14,0.06)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_34px_rgba(110,11,14,0.10)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="max-w-full max-h-[38px] object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal className="text-center mt-[34px]">
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-coral font-bold text-[15.5px]">
              View all ATS integration
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24">
        <div className={SEC}>
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">FAQ<b className="text-coral">.</b></p>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 text-ink">Frequently asked questions (FAQs)</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">Here are answers to the most commonly asked questions about Testlify&apos;s skills assessment for the real estate industry.</p>
          </Reveal>
          <div className="max-w-[820px] mx-auto mt-11">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
