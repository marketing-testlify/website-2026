import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import FAQ from "@/components/FAQ";
import { routes } from "@/lib/routes";
import CountUp from "./CountUp";

export const metadata: Metadata = {
  title:
    "Logistics and supply chain skill tests for every role you hire",
  description:
    "Assess warehouse, driver, planner and analyst candidates on the skills that predict performance. Screen applicants at volume, shortlist in days, and stop losing new hires.",
};

const ARROW = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CHECK = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 mt-0.5 text-[#1FA463] w-[18px] h-[18px] [stroke-width:3]"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

type Skill = { label: string; v: number };

const FRONTLINE: Skill[] = [
  { label: "Attention to detail", v: 89 },
  { label: "Workplace safety", v: 92 },
  { label: "Numerical reasoning", v: 82 },
  { label: "Reliability & punctuality", v: 86 },
  { label: "Spatial reasoning", v: 79 },
  { label: "Situational judgement", v: 90 },
];

const STRATEGIC: Skill[] = [
  { label: "Excel & Analytics", v: 91 },
  { label: "ERP / SAP / Oracle", v: 86 },
  { label: "SQL & Reporting", v: 77 },
  { label: "Demand forecasting", v: 84 },
  { label: "Procurement & sourcing", v: 81 },
  { label: "Supply chain analytics", v: 88 },
];

function ScoreRow({ label, v, w = 168 }: { label: string; v: number; w?: number }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="text-[12.5px] font-semibold text-[#46383C] flex-none"
        style={{ width: w }}
      >
        {label}
      </span>
      <span className="flex-1 h-2 rounded-[6px] bg-[#F4E7E8] overflow-hidden">
        <i
          className="scbar block h-full rounded-[6px]"
          style={{ ["--w" as string]: `${v}%` }}
        />
      </span>
      <span className="text-[13px] font-extrabold text-[#F23F44] w-[34px] text-right flex-none">
        {v}
      </span>
    </div>
  );
}

type Role = { title: string; desc: string; tags: string[]; icon: React.ReactNode };

const ROLES: Role[] = [
  {
    title: "Peak season volume hiring",
    desc: "Screen thousands of warehouse and fulfilment applicants in days, not weeks. Auto-rank candidates and shortlist the job-fit ones before your competitors do.",
    tags: ["High-volume", "Warehouse", "Frontline", "Seasonal"],
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </>
    ),
  },
  {
    title: "Distribution centre buildout",
    desc: "Rapidly assess and hire forklift operators, shift leads and logistics coordinators across multiple sites with one consistent skills benchmark.",
    tags: ["High-volume", "Warehouse", "Frontline"],
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </>
    ),
  },
  {
    title: "Nearshoring & network redesign",
    desc: "As supply chains restructure, test candidates for strategic network design, trade compliance and cross-border operations the skills nearshoring demands.",
    tags: ["Strategic", "Compliance", "Cross-border"],
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  {
    title: "Planning & analytics team growth",
    desc: "Validate Excel, SQL, ERP and forecasting proficiency for demand planners, supply-chain analysts and operations roles before the first interview.",
    tags: ["Planners", "Analysts", "ERP", "SQL"],
    icon: (
      <>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </>
    ),
  },
  {
    title: "Fleet & driver hiring",
    desc: "Assess route logic, safety awareness and service quality across a high-volume applicant pool. Reduce risky hires before they get behind the wheel.",
    tags: ["Drivers", "Fleet", "Safety", "High-volume"],
    icon: (
      <>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
  {
    title: "Sustainability & compliance hiring",
    desc: "Test for Scope 3 emissions awareness, supplier governance and ESG reporting skills as sustainability regulations reshape supply chain hiring.",
    tags: ["ESG", "Compliance", "Procurement", "Governance"],
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6" />
      </>
    ),
  },
];

type Cert = { cf: string; title: string; items: string[] };

const CERTS: Cert[] = [
  {
    cf: "APICS / ASCM",
    title: "CSCP & CPIM aligned",
    items: ["Demand & supply planning", "Inventory optimization", "Distribution & logistics management"],
  },
  {
    cf: "Lean / Six Sigma",
    title: "Process improvement skills",
    items: ["DMAIC process knowledge", "Waste identification", "KPI measurement & analysis"],
  },
  {
    cf: "WMS / TMS platforms",
    title: "Tech stack proficiency",
    items: ["SAP, Oracle & Blue Yonder", "WMS operations & workflows", "TMS reporting & routing"],
  },
  {
    cf: "Trade & compliance",
    title: "Regulatory & legal knowledge",
    items: ["Customs & import/export rules", "Incoterms & documentation", "Tariff classification basics"],
  },
  {
    cf: "RFP / CPIM aligned",
    title: "Procurement & sourcing",
    items: ["Supplier evaluation & bid", "Category management", "Contract & negotiation skills"],
  },
  {
    cf: "Safety & OSHA",
    title: "Workplace safety compliance",
    items: ["OSHA standards & regulations", "Forklift & equipment safety", "Hazmat awareness & protocols"],
  },
];

const ATS: { src: string; alt: string }[] = [
  { src: "https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png", alt: "Workday" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png", alt: "SAP SuccessFactors" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png", alt: "Lever" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg", alt: "SmartRecruiters" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png", alt: "Recruitee" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/logo.svg", alt: "UKG Pro Recruiting" },
  { src: "https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png", alt: "BambooHR" },
  { src: "https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png", alt: "Greenhouse" },
  { src: "https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png", alt: "Zoho Recruit" },
  { src: "https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png", alt: "JazzHR" },
];

const FAQS = [
  {
    q: "What are logistics and supply chain skill tests?",
    a: "Logistics and supply chain skill tests are pre-hire assessments that measure a candidate's ability to perform the actual tasks required in logistics, warehousing, procurement and planning roles. Unlike resumes, they give objective, role-specific data on skills like ERP proficiency, data analysis, safety awareness and demand forecasting before a single interview.",
  },
  {
    q: "How do I screen warehouse applicants at high volume without slowing down?",
    a: "Send one assessment link to your entire applicant pool and Testlify auto-scores and ranks every candidate on operational aptitude, attention to detail and safety. During peak season you get a job-fit shortlist within hours instead of manually reviewing thousands of resumes.",
  },
  {
    q: "Which skills should I test for logistics and supply chain roles?",
    a: "Frontline roles need attention to detail, workplace safety, numerical reasoning and situational judgment. Strategic roles need Excel and analytics, ERP/SAP knowledge, SQL, demand forecasting and procurement skills. Testlify maps validated tests to both so every hire is measured on what the role actually demands.",
  },
  {
    q: "Can logistics skill tests reduce warehouse turnover?",
    a: "Yes. Hiring on verified reliability, safety awareness and operational aptitude — rather than availability alone — means new hires are better matched to the job and stay longer. Teams using skills-based screening report meaningfully lower early attrition on frontline roles.",
  },
  {
    q: "Do the assessments work for nearshoring and cross-border supply chain roles?",
    a: "Yes. Testlify includes tests for trade compliance, customs and documentation, network design and cross-border operations, so you can screen for the strategic and regulatory skills that nearshoring and network redesign require.",
  },
  {
    q: "How do the assessments fit into our ATS and HRIS?",
    a: "Testlify has 100+ native ATS and HRIS integrations including Workday, SAP SuccessFactors, Greenhouse, BambooHR and Lever. Assessments fire automatically and ranked results sync straight into your existing hiring workflow without manual data transfer.",
  },
  {
    q: "Are Testlify's supply chain skill tests valid and bias free?",
    a: "Every test is built by subject-matter experts and I/O psychologists, validated for reliability and reviewed for adverse impact. Objective, consistent scoring gives every candidate the same fair evaluation and produces a defensible, documented hiring decision.",
  },
  {
    q: "How fast can we launch assessments for a peak season hiring surge?",
    a: "Minutes. Pick a role-specific logistics assessment or build your own from the test library, set your pass threshold, and send one link to your whole applicant pool. Candidates are scored and ranked automatically as they complete, so your shortlist builds in real time.",
  },
];

export default function LogisticsSupplyChainPage() {
  return (
    <>
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      <style>{`
        @keyframes rtfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes rtfill{to{width:var(--w)}}
        .lg-floatcard{animation:rtfloat 6s ease-in-out infinite;}
        .scbar{width:0;background:linear-gradient(90deg,#FF7A52,#F23F44);animation:rtfill 1.4s cubic-bezier(.4,0,.2,1) forwards;}
        @media (prefers-reduced-motion: reduce){.lg-floatcard{animation:none;}.scbar{animation:none;width:var(--w);}}
      `}</style>

      {/* Hero */}
      <section className="pt-[74px] pb-20 bg-[linear-gradient(180deg,#FFF8F7_0%,#fff_82%)]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-[1.02fr_0.98fr] gap-14 items-center max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <Reveal>
            <div className="text-[13px] text-[#8A7A7D] flex gap-2 items-center mb-[18px]">
              <Link href={routes.solutions} className="hover:text-coral">Solutions</Link>
              <span>/</span>
              <span>Industry / Logistics &amp; supply chain</span>
            </div>
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">
              For logistics &amp; supply chain teams<b className="text-[#F23F44]">.</b>
            </p>
            <h1 className="text-[52px] font-extrabold tracking-[-1.6px] leading-[1.06] mt-4 max-[960px]:text-[38px] text-balance">
              Logistics and supply chain skill tests for{" "}
              <span className="text-[#F23F44]">every role you hire</span>
            </h1>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5 text-pretty">
              Assess warehouse, driver, planner and analyst candidates on the skills that predict
              performance. Screen applicants at volume, shortlist in days, and stop losing new hires.
            </p>
            <div className="flex gap-[14px] flex-wrap mt-[26px]">
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

          <Reveal>
            <div className="lg-floatcard bg-[linear-gradient(180deg,#FFF1EF,#FFF8F7)] border border-[#F6DAD9] rounded-[24px] p-6 shadow-[0_40px_90px_rgba(110,11,14,.14)]">
              <div className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#8A7A7D] flex justify-between mb-[14px]">
                <span>Frontline applicant funnel</span>
                <span>Peak season</span>
              </div>
              {[
                { lbl: "Applicants", w: "100%", n: "3,499" },
                { lbl: "Assessed", w: "70%", n: "1,780" },
                { lbl: "Job-fit", w: "40%", n: "820" },
                { lbl: "Shortlist", w: "15%", n: "28" },
              ].map((r) => (
                <div key={r.lbl} className="flex items-center gap-[10px] mb-[9px]">
                  <span className="text-[11.5px] text-[#6C5A5D] font-semibold w-[70px] flex-none text-right">
                    {r.lbl}
                  </span>
                  <span
                    className="h-[26px] rounded-[7px] bg-[linear-gradient(90deg,#FF7A52,#F23F44)] flex items-center px-[11px] text-white text-[12px] font-extrabold min-w-[44px]"
                    style={{ width: r.w }}
                  >
                    {r.n}
                  </span>
                </div>
              ))}
              <div className="bg-white rounded-[16px] p-[18px_20px] shadow-[0_12px_26px_rgba(110,11,14,.08)] mt-5">
                <div className="flex justify-between items-start gap-[14px]">
                  <div>
                    <b className="text-[15.5px] font-bold text-[#1A1014] block">Rohan M.</b>
                    <span className="text-[12px] text-[#8A7A7D] mt-0.5 block">Demand Planner</span>
                  </div>
                  <span className="text-[19px] font-extrabold text-[#F23F44] tracking-[-1px] leading-none flex-none">
                    Top 6%
                  </span>
                </div>
                <div className="flex flex-col gap-[11px] mt-[14px]">
                  <ScoreRow label="Excel & Data Analysis" v={92} />
                  <ScoreRow label="Supply Chain Analytics" v={88} />
                  <ScoreRow label="ERP / SAP knowledge" v={87} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="bg-[#FBF3EE] py-11">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="grid grid-cols-4 max-[960px]:grid-cols-2 max-[960px]:gap-y-[34px] max-[560px]:grid-cols-1">
            {[
              { v: 22, u: "%", l: "YoY growth in supply chain roles since 2020, with no sign of slowing" },
              { v: 35, u: "%", l: "of companies rank talent shortage as a top supply chain challenge" },
              { v: 17, u: "%", l: "projected employment growth for logistics 2024–2034, far above average" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`text-center px-[22px] py-1 ${i > 0 ? "border-l border-[#EFE3E4] max-[960px]:border-l-0" : ""}`}
              >
                <div className="text-[34px] font-bold tracking-[-1px] leading-none text-[#1A1014] tabular-nums">
                  <CountUp to={s.v} />
                  <span className="text-[#D98C8F] font-semibold">{s.u}</span>
                </div>
                <p className="text-[14px] text-[#6C5A5D] font-medium mt-[10px] leading-[1.45] m-0">{s.l}</p>
              </div>
            ))}
            <div className="text-center px-[22px] py-1 border-l border-[#EFE3E4] max-[960px]:border-l-0">
              <div className="text-[34px] font-bold tracking-[-1px] leading-none text-[#1A1014] tabular-nums">
                1.9<span className="text-[#D98C8F] font-semibold">M</span>
              </div>
              <p className="text-[14px] text-[#6C5A5D] font-medium mt-[10px] leading-[1.45] m-0">
                US supply chain jobs projected to go unfilled by 2030
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 max-[960px]:text-[27px] text-balance">
              Exactly which skills do your logistics and supply chain roles need?
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5 text-pretty">
              Testlify&apos;s validated skill library maps to both frontline and strategic logistics
              roles, so every test predicts on-the-job performance.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-6 mt-[46px] max-[960px]:grid-cols-1">
            <div className="bg-white border border-[#F0E2E3] rounded-[20px] p-[32px_30px] shadow-[0_16px_30px_rgba(110,11,14,.08)]">
              <div className="flex items-center gap-[13px] mb-1">
                <span className="w-11 h-11 rounded-[12px] bg-[#FFF0F0] text-[#F23F44] flex items-center justify-center flex-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </span>
                <h3 className="text-[18px] font-bold m-0 tracking-[-0.3px]">Frontline &amp; Operational skills</h3>
              </div>
              <p className="text-[13px] text-[#8A7A7D] m-0 mb-[22px]">Warehouse, floor, forklift and fleet roles</p>
              <div className="flex flex-col gap-[11px]">
                {FRONTLINE.map((s) => (
                  <ScoreRow key={s.label} label={s.label} v={s.v} />
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#F0E2E3] rounded-[20px] p-[32px_30px] shadow-[0_16px_30px_rgba(110,11,14,.08)]">
              <div className="flex items-center gap-[13px] mb-1">
                <span className="w-11 h-11 rounded-[12px] bg-[#FFF0F0] text-[#F23F44] flex items-center justify-center flex-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </span>
                <h3 className="text-[18px] font-bold m-0 tracking-[-0.3px]">Strategic &amp; Professional skills</h3>
              </div>
              <p className="text-[13px] text-[#8A7A7D] m-0 mb-[22px]">Analyst, planner, procurement and ops manager</p>
              <div className="flex flex-col gap-[11px]">
                {STRATEGIC.map((s) => (
                  <ScoreRow key={s.label} label={s.label} v={s.v} />
                ))}
              </div>
            </div>
          </Reveal>
          <div className="text-center">
            <Reveal as="span" delay={0.06}>
              <Link
                href={routes.testLibrary}
                className="inline-flex items-center gap-2 mt-[34px] text-[#F23F44] font-bold text-[15.5px]"
              >
                Browse the full test library
                {ARROW}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How teams hire */}
      <section className="py-24 bg-[#FBF3EE] max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">
              How teams hire<b className="text-[#F23F44]">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 max-[960px]:text-[27px] text-balance">
              Built for how logistics teams actually hire
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5 text-pretty">
              Whether you&apos;re ramping for peak season or building a planning team, Testlify fits
              the way your work works.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-3 gap-5 mt-[46px] max-[960px]:grid-cols-1">
            {ROLES.map((r) => (
              <div
                key={r.title}
                className="bg-white border border-[#F0E2E3] rounded-[18px] p-[28px_26px] shadow-[0_16px_30px_rgba(110,11,14,.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,.12)]"
              >
                <div className="flex items-center mb-[18px]">
                  <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-[#F23F44] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      {r.icon}
                    </svg>
                  </span>
                </div>
                <h3 className="text-[18px] font-bold m-0 mb-1.5 tracking-[-0.3px]">{r.title}</h3>
                <p className="text-[13.5px] leading-[1.5] text-[#6C5A5D] m-0 mb-4">{r.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] font-semibold text-[#B23A3F] bg-[#FDECEC] border border-[#F8DADA] rounded-full px-3 py-1.5 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <div className="text-center">
            <Reveal as="span" delay={0.06}>
              <Link
                href={routes.testLibrary}
                className="inline-flex items-center gap-2 mt-[34px] text-[#F23F44] font-bold text-[15.5px]"
              >
                See volume hiring solutions
                {ARROW}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">
              Certifications<b className="text-[#F23F44]">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 max-[960px]:text-[27px] text-balance">
              Test for the certifications your industry values most
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5 text-pretty">
              Testlify&apos;s logistics and supply chain skill tests cover the knowledge frameworks
              behind the most in-demand industry credentials.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-3 gap-5 mt-[46px] max-[960px]:grid-cols-1">
            {CERTS.map((c) => (
              <div
                key={c.cf}
                className="bg-white border border-[#F0E2E3] rounded-[18px] p-[28px_26px] shadow-[0_16px_30px_rgba(110,11,14,.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,.12)]"
              >
                <p className="text-[11.5px] font-bold tracking-[0.05em] uppercase text-[#F23F44] m-0 mb-2.5">{c.cf}</p>
                <h3 className="text-[17.5px] font-bold m-0 mb-4 tracking-[-0.3px]">{c.title}</h3>
                {c.items.map((it) => (
                  <div key={it} className="flex gap-[9px] items-start text-[14px] leading-[1.45] text-[#46383C] font-medium py-[7px]">
                    {CHECK}
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Client story */}
      <section className="py-24 bg-[#1A1014] max-[960px]:py-16">
        <div className="max-w-[960px] mx-auto px-7 text-center">
          <Reveal as="p" className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#C9B9BC] m-0">
            Client story<b className="text-[#F23F44]">.</b>
          </Reveal>
          <Reveal as="p" className="text-[26px] leading-[1.5] font-semibold text-white my-[18px] mt-[18px] mb-[26px] text-pretty">
            &quot;We were drowning in warehouse applicants every peak season. Testlify cut our
            screening from <span className="text-[#FF7A52]">weeks to days</span>, and the people we
            hire now actually stay past 90 days.&quot;
          </Reveal>
          <Reveal as="p" className="text-white font-bold m-0">Head of Talent</Reveal>
          <Reveal as="p" className="text-[#A9999C] text-[14px] mt-1 mb-10">Logistics Company</Reveal>
          <Reveal className="grid grid-cols-3 max-w-[720px] mx-auto max-[960px]:grid-cols-1 max-[960px]:gap-y-[34px]">
            {[
              { v: 80, u: "%", l: "faster time to shortlist" },
              { v: 3, u: "×", l: "faster time-to-hire" },
              { v: 40, u: "%", l: "lower 90-day attrition" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`text-center px-[22px] py-1 ${i > 0 ? "border-l border-white/[0.14] max-[960px]:border-l-0" : ""}`}
              >
                <div className="text-[34px] font-bold tracking-[-1px] leading-none text-white tabular-nums">
                  <CountUp to={s.v} />
                  <span className="text-[#D98C8F] font-semibold">{s.u}</span>
                </div>
                <p className="text-[14px] text-[#C9B9BC] font-medium mt-[10px] leading-[1.45] m-0">{s.l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-[#FBF3EE] max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">
              Integrations<b className="text-[#F23F44]">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 max-[960px]:text-[27px] text-balance">
              Testlify integrates seamlessly with 100+ ATS tools
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5 text-pretty">
              Streamline your hiring process from assessment to onboarding. Sync candidate data
              effortlessly, automate workflows, and gain deeper insights to make informed hiring
              decisions faster.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-5 gap-4 mt-[44px] max-[960px]:grid-cols-3 max-[560px]:grid-cols-2">
            {ATS.map((a) => (
              <div
                key={a.alt}
                className="bg-white border border-[#F0E2E3] rounded-[14px] h-[84px] flex items-center justify-center p-[18px] shadow-[0_10px_22px_rgba(110,11,14,.06)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_34px_rgba(110,11,14,.10)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt={a.alt} className="max-w-full max-h-[38px] object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal className="text-center mt-[34px]">
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-[#F23F44] font-bold text-[15.5px]">
              View all ATS integration
              {ARROW}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">
              FAQ<b className="text-[#F23F44]">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5 max-[960px]:text-[27px] text-balance">
              Frequently asked questions (FAQs)
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5 text-pretty">
              Here are answers to the most commonly asked questions about Testlify&apos;s logistics
              and supply chain skill tests.
            </p>
          </Reveal>
          <div className="max-w-[820px] mx-auto mt-[44px]">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
