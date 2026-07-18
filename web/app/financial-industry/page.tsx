import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import FAQ from "@/components/FAQ";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Finance skills assessment",
  description:
    "Testlify verifies modeling, Excel, numerical reasoning, and regulatory knowledge before the offer. Give every finance hire an audit-ready foundation from day one.",
};

const check = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const heroScores = [
  { label: "Financial modeling", w: "93%", v: "93" },
  { label: "Excel", w: "90%", v: "90" },
  { label: "Numerical reasoning", w: "95%", v: "95" },
  { label: "AML / KYC", w: "86%", v: "86" },
  { label: "Cognitive aptitude", w: "89%", v: "89" },
];

const stats = [
  { n: "4,500", u: "+", l: "job roles you can assess" },
  { n: "3,500", u: "+", l: "validated, ready-to-use tests" },
  { n: "100", u: "+", l: "native ATS integrations" },
  { n: "200", u: "+", l: "finance and accounting roles covered" },
];

const liability = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    h: "Credentials do not prove competence",
    p: "A CPA or CFA designation tells you what someone studied. It does not tell you how they perform under a real deadline with a three-statement model open.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    h: "Compliance errors cost more than the hire",
    p: "Replacing a mis-hire costs 30%+ of first-year salary. In financial services, the wrong compliance or risk hire adds regulatory fines and audit exposure on top.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    h: "Skilled finance talent does not wait",
    p: "Quantitative analysts, controllers, and risk officers are scarce. Manual screening loses them to faster competitors before you reach the interview stage.",
  },
];

const roles = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    h: "Financial Analyst",
    d: "Model accuracy, data interpretation, and financial statement analysis under realistic conditions.",
    tags: ["3-statement modeling", "DCF", "Numerical reasoning"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    h: "Accountant / Controller",
    d: "GAAP and IFRS knowledge, reconciliation accuracy, and journal entry mechanics at role seniority.",
    tags: ["GAAP / IFRS", "Excel", "Reconciliation"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    h: "Risk and Compliance Officer",
    d: "AML, KYC, situational judgment, and regulatory scenario testing before any offer is extended.",
    tags: ["AML / KYC", "SJT", "Regulatory knowledge"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    h: "Internal / External Auditor",
    d: "Audit methodology, risk identification, and attention to detail across financial documentation.",
    tags: ["Audit process", "Risk assessment", "IFRS"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    h: "Banker / Wealth Advisor",
    d: "Client communication, portfolio analysis, and product knowledge for retail and private banking roles.",
    tags: ["Client communication", "Portfolio analysis", "Product knowledge"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="12" y2="14" />
      </svg>
    ),
    h: "Finance Operations / Bookkeeper",
    d: "Speed and accuracy across high-volume transaction processing, reconciliation, and Excel data tasks.",
    tags: ["Excel", "Bookkeeping", "Numerical accuracy"],
  },
];

const atsLogos = [
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

const testimonials = [
  {
    q: "“We verify modeling, Excel, and numerical reasoning before the interview now, so every finance hire is audit-ready from day one.”",
    name: "Head of Talent",
    role: "Financial services, 500+ employees",
    badge: "G2 High Performer",
  },
  {
    q: "“Skills testing cut mis-hires on the analyst team and gave compliance a clean, defensible paper trail.”",
    name: "VP, People",
    role: "Fintech, high-growth",
    badge: "G2 Leader",
  },
];

const cmpRows = [
  { cap: "Numerical reasoning and cognitive aptitude", tl: "Built in", ms: "no", gen: "Partial", sa: "no" },
  { cap: "AML, KYC, and compliance screening", tl: "Built in", ms: "no", gen: "no", sa: "Varies" },
  { cap: "Custom pass thresholds per module", tl: "Yes", ms: "no", gen: "Rarely", sa: "no" },
  { cap: "Proctoring with full audit trail", tl: "Yes", ms: "no", gen: "Partial", sa: "no" },
  { cap: "Native ATS and HRIS integration", tl: "100+ native", ms: "no", gen: "Webhooks only", sa: "no" },
];

const faqs = [
  { q: "What is a finance skills assessment?", a: "A finance skills assessment is a structured pre-employment test that verifies a candidate's financial ability, including modeling, accounting, numerical reasoning, and regulatory knowledge. It replaces resume screening with objective, scored evidence of what a candidate can actually do before you extend an offer." },
  { q: "Does Testlify include numerical reasoning tests for finance roles?", a: "Yes. Numerical reasoning modules test data interpretation across tables, charts, and quantitative inference — the fast, accurate analysis finance roles demand. You can add them to any assessment in a click." },
  { q: "How does Testlify test financial modeling and Excel skills?", a: "Candidates build and solve directly in a real Excel environment — three-statement models, DCF exercises, and formula-based tasks. Testlify auto-scores the output and returns a ranked, skill-by-skill breakdown, not just a pass or fail." },
  { q: "Can Testlify screen for AML, KYC, and regulatory knowledge?", a: "Yes. Compliance modules cover AML, KYC, GDPR, and situational judgment in regulatory contexts. Set minimum pass thresholds so only candidates who meet your compliance standard advance automatically." },
  { q: "How long does a finance skills assessment take?", a: "Most finance assessments run about 30 to 70 minutes depending on the modules you include. You control the mix and time limit for every role." },
  { q: "Can I set minimum pass scores for compliance-critical roles?", a: "Yes. Set custom pass thresholds per module so candidates below your bar on AML, KYC, or any compliance test do not advance to interview automatically." },
  { q: "Which finance and accounting roles can I assess?", a: "Financial analysts, accountants and controllers, risk and compliance officers, auditors, bankers and wealth advisors, and finance operations or bookkeeping roles — with test types mapped to each role and seniority." },
  { q: "Is Testlify secure and compliant enough for financial services?", a: "Yes. Testlify is SOC 2 Type II, ISO 27001, GDPR, and CCPA compliant, with webcam and tab-switch proctoring, IP monitoring, plagiarism detection, and timestamped, exportable audit logs for every candidate." },
];

function CmpCell({ value }: { value: string }) {
  if (value === "no") {
    return (
      <>
        <span className="text-[#C79A9C]">&#10007;</span> No
      </>
    );
  }
  return <>{value}</>;
}

export default function FinancialIndustryPage() {
  return (
    <>
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      {/* Hero */}
      <section className="pt-[74px] pb-20 bg-[linear-gradient(180deg,#FFF8F7_0%,#fff_82%)]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[1.02fr_.98fr] gap-14 items-center">
          <Reveal className="reveal">
            <div className="flex items-center gap-2 text-[13px] text-muted mb-[18px]">
              <Link href={routes.solutions} className="hover:text-coral">Solutions</Link>
              <span>/</span>
              <span>Industry / Financial</span>
            </div>
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
              For finance teams<b className="text-coral-bright2">.</b>
            </p>
            <h1 className="text-[38px] lg:text-[52px] font-extrabold tracking-[-1.6px] leading-[1.06] mt-4">
              Finance skills assessment that <span className="text-coral-bright2">proves the numbers</span>
            </h1>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">
              Testlify verifies modeling, Excel, numerical reasoning, and regulatory knowledge before the offer. Give every finance hire an audit-ready foundation from day one.
            </p>
            <div className="flex gap-[14px] flex-wrap mt-[26px]">
              <CtaButton label="Try for Free" href={routes.pricing} variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a Demo" href={routes.contact} variant="secondary" size="md" icon="play" />
            </div>
            <div className="flex gap-[22px] flex-wrap mt-6">
              {["7-day free trial", "Unlimited assessments", "No credit card required"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[13.5px] font-semibold text-[#6C5A5D]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="reveal">
            <div className="bg-[linear-gradient(180deg,#FFF1EF,#FFF8F7)] border border-[#F6DAD9] rounded-3xl p-6 shadow-[0_40px_90px_rgba(110,11,14,.14)]">
              <div className="relative flex justify-between pt-3 px-1.5 pb-6">
                <span className="absolute top-[38px] left-9 right-9 h-0.5 bg-[repeating-linear-gradient(90deg,#F0B9B9_0_6px,transparent_6px_12px)]" />
                {["Role input", "AI builder", "Excel task", "Compliance", "Auto score", "Ranked list"].map((n) => (
                  <div key={n} className="relative z-[1] flex flex-col items-center gap-[9px] flex-1">
                    <span className="w-[52px] h-[52px] rounded-full bg-white border-2 border-coral-bright2 flex items-center justify-center shadow-[0_0_0_7px_rgba(242,63,68,.07)]">
                      <i className="w-[15px] h-[15px] rounded-full bg-coral-bright2 block" />
                    </span>
                    <span className="text-[11px] font-semibold text-[#6C5A5D] text-center leading-[1.2]">{n}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl py-[18px] px-5 shadow-[0_12px_26px_rgba(110,11,14,.08)]">
                <div className="flex justify-between items-baseline text-[13px] font-semibold text-[#6C5A5D] mb-4">
                  <span>Candidate assessment score</span>
                  <b className="text-[20px] font-extrabold text-coral-bright2 tracking-[-.5px]">88/100</b>
                </div>
                <div className="flex flex-col gap-[11px]">
                  {heroScores.map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <span className="text-[12.5px] font-semibold text-[#46383C] w-[132px] flex-none">{s.label}</span>
                      <span className="flex-1 h-2 rounded-md bg-[#F4E7E8] overflow-hidden">
                        <i className="block h-full rounded-md bg-[linear-gradient(90deg,#FF7A52,#F23F44)]" style={{ width: s.w }} />
                      </span>
                      <span className="text-[13px] font-extrabold text-coral-bright2 w-[34px] text-right flex-none">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="bg-[#FBF3EE] py-11">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.l} className={`text-center px-[22px] py-1 ${i > 0 ? "lg:border-l border-[#EFE3E4]" : ""}`}>
                <div className="text-[34px] font-bold tracking-[-1px] leading-none text-ink tabular-nums">
                  {s.n}
                  <span className="text-[#D98C8F] font-semibold">{s.u}</span>
                </div>
                <div className="text-[14px] text-[#6C5A5D] font-medium mt-2.5 leading-[1.45]">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* The stakes */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="reveal text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">The stakes<b className="text-coral-bright2">.</b></p>
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-3.5">In finance, a wrong hire is a liability. Not just a setback</h2>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">Resumes show titles and certifications. They cannot show who actually reconciles cleanly, models accurately, or stays compliant under pressure.</p>
          </Reveal>
          <Reveal className="reveal grid grid-cols-1 lg:grid-cols-3 gap-5 mt-[46px]">
            {liability.map((c) => (
              <div key={c.h} className="bg-white border border-[#F0E2E3] rounded-[18px] px-7 py-[30px] shadow-[0_16px_30px_rgba(110,11,14,.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,.12)]">
                <span className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral-bright2 flex items-center justify-center mb-5">{c.icon}</span>
                <h3 className="text-[19px] font-bold mb-3 tracking-[-.3px] leading-[1.28]">{c.h}</h3>
                <p className="text-[14.5px] leading-[1.6] text-[#6C5A5D] m-0">{c.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Finance roles */}
      <section className="py-24 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="reveal text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">Finance roles<b className="text-coral-bright2">.</b></p>
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-3.5">Every finance and accounting role. One platform</h2>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">Map the right test types to each role in minutes. Mix technical, numerical, compliance, and behavioral modules on a single assessment.</p>
          </Reveal>
          <Reveal className="reveal grid grid-cols-1 lg:grid-cols-3 gap-5 mt-[46px]">
            {roles.map((r) => (
              <div key={r.h} className="group relative bg-white border border-[#F0E2E3] rounded-[18px] px-[26px] py-7 shadow-[0_16px_30px_rgba(110,11,14,.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,.12)]">
                <div className="flex items-center justify-between mb-[18px]">
                  <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral-bright2 flex items-center justify-center">{r.icon}</span>
                  <span className="w-8 h-8 rounded-full bg-[#FBF3EE] text-[#C9B9BC] flex items-center justify-center transition-[background,color,transform] duration-[250ms] group-hover:bg-coral-bright2 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-[18px] font-bold mb-1.5 tracking-[-.3px]">{r.h}</h3>
                <p className="text-[13.5px] leading-[1.5] text-[#6C5A5D] mb-4">{r.d}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="text-[12px] font-semibold text-[#B23A3F] bg-[#FDECEC] border border-[#F8DADA] rounded-full px-3 py-1.5 whitespace-nowrap">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* The platform — real spreadsheet */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="reveal text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">The platform<b className="text-coral-bright2">.</b></p>
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-3.5">What finance teams actually need in an assessment platform</h2>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">From real spreadsheet simulations to compliance screening and behavioral depth. All in one workflow.</p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center mt-14">
            <Reveal className="reveal">
              <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-0">Real spreadsheet tasks. Not guessable multiple choice</h2>
              <p className="text-[15.5px] leading-[1.64] text-body mt-3.5">Candidates build and solve directly in Excel, completing DCF models, three-statement exercises, and formula-based tasks. Testlify auto-scores the output and returns a ranked, skill-by-skill scorecard.</p>
              <div className="flex flex-col gap-3 mt-[22px]">
                {[
                  "Three-statement model and DCF exercises in a real Excel environment",
                  "Auto-scored with per-skill breakdown, not just a total",
                  "Comparable scorecards across every candidate for fast shortlisting",
                ].map((t) => (
                  <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                    <span className="flex-none mt-0.5 text-[#1FA463]">{check}</span>
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="reveal">
              <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_24px_50px_rgba(110,11,14,.10)] overflow-hidden">
                <div className="flex items-center gap-2 py-[13px] px-5 border-b border-[#F4E9E9] bg-[#FCF7F7]">
                  <span className="flex gap-1.5">
                    <i className="w-[11px] h-[11px] rounded-full block bg-[#F26B6B]" />
                    <i className="w-[11px] h-[11px] rounded-full block bg-[#F5B93F]" />
                    <i className="w-[11px] h-[11px] rounded-full block bg-[#4CC38A]" />
                  </span>
                  <span className="text-[12.5px] font-semibold text-muted ml-1.5">Candidate Scorecard: Financial Analyst</span>
                </div>
                <div className="py-[22px] px-6">
                  <div className="flex justify-between items-start mb-[18px]">
                    <div>
                      <p className="text-[17px] font-extrabold text-ink m-0">Priya Mehta</p>
                      <p className="text-[12.5px] text-muted mt-0.5 mb-0">Financial Analyst · Senior</p>
                    </div>
                    <div>
                      <div className="text-[30px] font-extrabold text-coral-bright2 leading-none tracking-[-1px]">87</div>
                      <div className="text-[11.5px] text-muted text-right">out of 100</div>
                    </div>
                  </div>
                  {[
                    { l: "Financial modeling", w: "92%", v: "92", c: "#1FA463" },
                    { l: "Excel proficiency", w: "88%", v: "88", c: "#1FA463" },
                    { l: "GAAP / IFRS", w: "80%", v: "80", c: "#E5484D" },
                    { l: "Numerical reasoning", w: "91%", v: "91", c: "#1FA463" },
                    { l: "DCF analysis", w: "74%", v: "74", c: "#F5A623" },
                  ].map((row) => (
                    <div key={row.l} className="flex items-center gap-3 mb-[13px]">
                      <span className="text-[12.5px] font-semibold text-[#46383C] w-[150px] flex-none">{row.l}</span>
                      <span className="flex-1 h-2 rounded-md bg-[#EFE7E7] overflow-hidden">
                        <i className="block h-full rounded-md" style={{ width: row.w, background: row.c }} />
                      </span>
                      <span className="text-[13px] font-extrabold w-8 text-right flex-none text-ink">{row.v}</span>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-2.5 mt-[18px]">
                    <span className="text-[12px] font-bold rounded-[9px] py-[9px] px-[13px] bg-[#E8F6EE] text-[#1A6B44]">Strong shortlist</span>
                    <span className="text-[12px] font-bold rounded-[9px] py-[9px] px-[13px] bg-[#FDF3E0] text-[#9A6B12]">DCF: review in interview</span>
                    <span className="text-[12px] font-bold rounded-[9px] py-[9px] px-[13px] bg-[#FDECEC] text-[#B23A3F]">Move to next stage</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Numerical reasoning — flipped */}
      <section className="py-24 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <Reveal className="reveal order-2 lg:order-1">
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-0">Test how candidates think under pressure. Not just what they know</h2>
            <p className="text-[15.5px] leading-[1.64] text-body mt-3.5">Finance roles at every level demand fast, accurate data interpretation and problem-solving under time pressure. Testlify&apos;s numerical reasoning and cognitive aptitude modules measure the thinking skills that predict performance, not just prior experience.</p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {[
                "Numerical reasoning: data tables, charts, and quantitative inference",
                "Cognitive aptitude: pattern recognition, abstract reasoning, and processing speed",
                "Validated for finance analyst, operations, and banking roles",
              ].map((t) => (
                <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                  <span className="flex-none mt-0.5 text-[#1FA463]">{check}</span>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="reveal order-1 lg:order-2">
            <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_24px_50px_rgba(110,11,14,.10)] overflow-hidden">
              <div className="flex items-center gap-2 py-[13px] px-5 border-b border-[#F4E9E9] bg-[#FCF7F7]">
                <span className="flex gap-1.5">
                  <i className="w-[11px] h-[11px] rounded-full block bg-[#F26B6B]" />
                  <i className="w-[11px] h-[11px] rounded-full block bg-[#F5B93F]" />
                  <i className="w-[11px] h-[11px] rounded-full block bg-[#4CC38A]" />
                </span>
                <span className="text-[12.5px] font-semibold text-muted ml-1.5">AI Test Builder: Finance Analyst</span>
              </div>
              <div className="py-[22px] px-6">
                <p className="text-[12px] text-muted m-0 mb-3.5 font-semibold">Role: Financial Analyst · Seniority: Mid-level · Focus: Modeling + Compliance</p>
                {[
                  { name: "Financial modeling (3-statement)", badge: "Technical", bc: "bg-[#FFF0EF] text-coral-bright2", min: "20 min" },
                  { name: "Numerical reasoning", badge: "Cognitive", bc: "bg-[#EEF1FE] text-[#5B6BD6]", min: "15 min" },
                  { name: "Excel proficiency", badge: "Technical", bc: "bg-[#FFF0EF] text-coral-bright2", min: "15 min" },
                  { name: "AML / KYC knowledge", badge: "Compliance", bc: "bg-[#E8F6EE] text-[#1FA463]", min: "10 min" },
                  { name: "Situational judgment", badge: "Behavioral", bc: "bg-[#FDF3E0] text-[#9A6B12]", min: "10 min" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-3 border border-[#EFE3E4] rounded-xl py-[13px] px-[15px] mb-[9px] bg-white">
                    <span className="text-[#D8C7C9] text-[13px] tracking-[1px] leading-[.7]">&#8286;&#8286;</span>
                    <span className="text-[14px] font-semibold text-ink">{m.name}</span>
                    <span className={`ml-auto text-[11px] font-bold rounded-full py-1 px-2.5 ${m.bc}`}>{m.badge}</span>
                    <span className="text-[12px] text-muted w-11 text-right flex-none">{m.min}</span>
                  </div>
                ))}
                <div className="border border-dashed border-[#E0CFD0] rounded-xl p-3.5 text-center text-[#A9999C] text-[13.5px] font-semibold">+ Add module from library</div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[13px] text-muted font-semibold">Total: 70 min · 5 modules</span>
                  <span className="bg-coral-bright2 text-white font-bold text-[13.5px] rounded-[10px] py-[11px] px-[18px]">Send assessment</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Compliance screening */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <Reveal className="reveal">
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-0">Screen for compliance knowledge before the first interview. Not after</h2>
            <p className="text-[15.5px] leading-[1.64] text-body mt-3.5">Verify AML, KYC, and regulatory judgment as part of the standard hiring workflow. Set minimum pass thresholds on compliance modules so only candidates who meet your standard advance automatically.</p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {[
                "AML, KYC, GDPR, and situational judgment in compliance contexts",
                "Custom pass thresholds per module for compliance-critical roles",
                "Per-module score breakdown visible to hiring managers, not just totals",
              ].map((t) => (
                <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                  <span className="flex-none mt-0.5 text-[#1FA463]">{check}</span>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="reveal">
            <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_24px_50px_rgba(110,11,14,.10)] overflow-hidden">
              <div className="flex items-center gap-2 py-[13px] px-5 border-b border-[#F4E9E9] bg-[#FCF7F7]">
                <span className="flex gap-1.5">
                  <i className="w-[11px] h-[11px] rounded-full block bg-[#F26B6B]" />
                  <i className="w-[11px] h-[11px] rounded-full block bg-[#F5B93F]" />
                  <i className="w-[11px] h-[11px] rounded-full block bg-[#4CC38A]" />
                </span>
                <span className="text-[12.5px] font-semibold text-muted ml-1.5">Candidates: Risk and Compliance Officer</span>
              </div>
              <div className="py-[22px] px-6">
                <table className="w-full border-collapse text-[13.5px]">
                  <thead>
                    <tr>
                      {["Candidate", "Overall", "AML/KYC", "SJT", "Status"].map((h) => (
                        <th key={h} className="text-[11.5px] font-bold text-muted text-left py-2.5 px-1.5 border-b border-[#F0E2E3]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { n: "Arjun S.", dot: "#1FA463", o: "91", aml: "94", sjt: "88", adv: true },
                      { n: "Fatima K.", dot: "#1FA463", o: "86", aml: "89", sjt: "82", adv: true },
                      { n: "Marcus L.", dot: "#F5A623", o: "71", aml: "63", sjt: "79", adv: false },
                      { n: "Neha R.", dot: "#1FA463", o: "88", aml: "91", sjt: "85", adv: true },
                    ].map((r) => (
                      <tr key={r.n}>
                        <td className="py-[13px] px-1.5 border-b border-[#F6EDED] font-bold text-ink">{r.n}</td>
                        <td className="py-[13px] px-1.5 border-b border-[#F6EDED]">
                          <span className="inline-block w-2 h-2 rounded-full mr-[7px]" style={{ background: r.dot }} />
                          {r.o}
                        </td>
                        <td className="py-[13px] px-1.5 border-b border-[#F6EDED]">{r.aml}</td>
                        <td className="py-[13px] px-1.5 border-b border-[#F6EDED]">{r.sjt}</td>
                        <td className="py-[13px] px-1.5 border-b border-[#F6EDED]">
                          {r.adv ? (
                            <span className="text-[#1FA463] bg-[#E8F6EE] text-[11px] font-bold rounded-full py-1 px-[11px] whitespace-nowrap">Advance</span>
                          ) : (
                            <span className="text-[#B23A3F] bg-[#FDECEC] text-[11px] font-bold rounded-full py-1 px-[11px] whitespace-nowrap">Below threshold</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[12px] text-muted mt-3.5 leading-[1.5]">AML/KYC pass threshold set to 70. Marcus did not advance automatically.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Audit / integrity — flipped */}
      <section className="py-24 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <Reveal className="reveal order-2 lg:order-1">
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-0">Every assessment is defensible to risk, audit, and regulators</h2>
            <p className="text-[15.5px] leading-[1.64] text-body mt-3.5">Finance hiring decisions get scrutinized. Testlify keeps a complete audit trail, including webcam snapshots, IP monitoring, plagiarism detection, and timestamp-stamped score breakdowns, for every candidate across every role.</p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {[
                "Webcam monitoring, tab-switch detection, and IP verification",
                "Timestamped candidate logs exportable on demand for compliance review",
                "Role-based access, IP logging, and exportable candidate logs on demand",
              ].map((t) => (
                <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                  <span className="flex-none mt-0.5 text-[#1FA463]">{check}</span>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="reveal order-1 lg:order-2">
            <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_24px_50px_rgba(110,11,14,.10)] overflow-hidden">
              <div className="py-[22px] px-6">
                <div className="flex justify-between items-center mb-[18px]">
                  <h4 className="text-[18px] font-extrabold m-0">Assessment integrity</h4>
                  <span className="text-[12px] font-bold text-[#9A6B12] bg-[#FBEFD3] rounded-lg py-1.5 px-3">1 flag</span>
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  {[
                    { l: "Webcam active", v: "Active throughout", c: "text-[#1FA463]" },
                    { l: "IP consistency", v: "Single location", c: "text-[#1FA463]" },
                    { l: "Tab switching", v: "2 switches detected", c: "text-[#C77A16]" },
                    { l: "Plagiarism check", v: "No match found", c: "text-[#1FA463]" },
                  ].map((t) => (
                    <div key={t.l} className="border border-[#EFE3E4] rounded-[14px] py-4 px-[18px]">
                      <p className="text-[12.5px] text-muted m-0 mb-2">{t.l}</p>
                      <p className={`text-[15px] font-bold m-0 ${t.c}`}>{t.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Testlify — comparison table */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="reveal text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">Why Testlify<b className="text-coral-bright2">.</b></p>
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-3.5">Testlify vs. the usual ways finance teams screen</h2>
          </Reveal>
          <Reveal className="reveal mt-11 -mx-6 -mb-12 overflow-x-auto pt-6 px-6 pb-12">
            <table className="w-full border-collapse bg-white border border-[#F0E2E3] rounded-[18px] overflow-hidden min-w-[720px] shadow-[0_18px_40px_rgba(110,11,14,.09)]">
              <thead>
                <tr>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-ink bg-[#FBF3EE] border-b border-[#F4ECEC]">Capability</th>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-coral-bright2 bg-[#FBF3EE] border-b border-[#F4ECEC]">Testlify</th>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-ink bg-[#FBF3EE] border-b border-[#F4ECEC]">Manual screening</th>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-ink bg-[#FBF3EE] border-b border-[#F4ECEC]">Generic test tools</th>
                  <th className="py-4 px-[18px] text-left text-[13px] font-bold text-ink bg-[#FBF3EE] border-b border-[#F4ECEC]">Staffing agency</th>
                </tr>
              </thead>
              <tbody>
                {cmpRows.map((r, i) => (
                  <tr key={r.cap}>
                    <td className={`py-4 px-[18px] text-[14.5px] font-semibold text-ink ${i < cmpRows.length - 1 ? "border-b border-[#F4ECEC]" : ""}`}>{r.cap}</td>
                    <td className={`py-4 px-[18px] text-[14.5px] font-bold text-ink bg-[#FFF8F7] ${i < cmpRows.length - 1 ? "border-b border-[#F4ECEC]" : ""}`}>
                      <span className="text-[#1FA463] font-bold">&#10003;</span> {r.tl}
                    </td>
                    <td className={`py-4 px-[18px] text-[14.5px] text-body ${i < cmpRows.length - 1 ? "border-b border-[#F4ECEC]" : ""}`}><CmpCell value={r.ms} /></td>
                    <td className={`py-4 px-[18px] text-[14.5px] text-body ${i < cmpRows.length - 1 ? "border-b border-[#F4ECEC]" : ""}`}><CmpCell value={r.gen} /></td>
                    <td className={`py-4 px-[18px] text-[14.5px] text-body ${i < cmpRows.length - 1 ? "border-b border-[#F4ECEC]" : ""}`}><CmpCell value={r.sa} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Testimonials cards */}
      <section className="py-24 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="reveal text-center max-w-[760px] mx-auto">
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-0">What finance and talent leaders say</h2>
          </Reveal>
          <Reveal className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 mt-11">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-[#F0E2E3] rounded-[20px] py-[30px] px-8 shadow-[0_16px_30px_rgba(110,11,14,.08)]">
                <div className="text-coral-bright2 tracking-[4px] text-[15px]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-[17px] leading-[1.55] text-ink italic my-4">{t.q}</p>
                <div className="font-bold text-[15.5px]">{t.name}</div>
                <div className="text-[13.5px] text-muted mt-0.5">{t.role}</div>
                <span className="inline-block mt-4 text-[12px] font-bold text-coral-bright2 bg-[#FFF0EF] rounded-full py-1.5 px-3">{t.badge}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="reveal text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">Integrations<b className="text-coral-bright2">.</b></p>
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-3.5">Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p>
          </Reveal>
          <Reveal className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-11">
            {atsLogos.map((logo) => (
              <div key={logo.alt} className="bg-white border border-[#F0E2E3] rounded-[14px] h-[84px] flex items-center justify-center p-[18px] shadow-[0_10px_22px_rgba(110,11,14,.06)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_34px_rgba(110,11,14,.10)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="max-w-full max-h-[38px] object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal className="reveal text-center mt-[34px]">
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-coral-bright2 font-bold text-[15.5px]">
              View all ATS integration
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="reveal text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">FAQ<b className="text-coral-bright2">.</b></p>
            <h2 className="text-[27px] lg:text-[34px] font-extrabold tracking-[-.8px] leading-[1.16] mt-3.5">Frequently asked questions (FAQs)</h2>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.</p>
          </Reveal>
          <div className="max-w-[820px] mx-auto mt-11">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
