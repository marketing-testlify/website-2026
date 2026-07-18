import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import {
  TurnoverCalculator,
  SampleQuestion,
  SampleQuestionCopy,
  StatNumber,
} from "./RetailInteractive";

export const metadata: Metadata = {
  title: "Retail hiring — hire staff who keep customers coming back",
  description:
    "Skills tests show you who can perform before you hire them. Fill stores faster, cut turnover, and keep your best retail people longer.",
};

const Check3 = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 mt-[3px] text-[#1FA463]"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ROLES = [
  {
    title: "Sales Associate",
    desc: "Sell, serve, and hit floor targets.",
    tags: ["Customer service", "Upselling", "Product knowledge"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Cashier",
    desc: "Fast, accurate checkout and service.",
    tags: ["Numeracy", "Attention", "Service"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Store Manager",
    desc: "Lead the team and own store KPIs.",
    tags: ["Cognitive aptitude", "Leadership", "KPIs"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Visual Merchandiser",
    desc: "Bring the brand to life in-store.",
    tags: ["Creativity", "Brand", "Organization"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Stock / Inventory",
    desc: "Keep shelves accurate and stocked.",
    tags: ["Accuracy", "Speed", "Organization"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Customer Service Rep",
    desc: "Resolve issues with empathy and speed.",
    tags: ["Communication", "Empathy", "Problem-solving"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const ATS = [
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

const FAQ_ITEMS = [
  {
    q: "What is a retail skills assessment test?",
    a: "A short, validated test that scores a candidate on the skills a retail job needs: customer service, sales, numeracy, and reliability. It predicts on-the-job performance better than a resume.",
  },
  {
    q: "Which tests should I use to hire a retail sales associate?",
    a: "Combine a customer service test, a sales aptitude test, and a reliability check. For store managers, add cognitive aptitude and leadership.",
  },
  {
    q: "How do I hire seasonal staff fast without lowering quality?",
    a: "Send one link to your applicant pool. Get a ranked shortlist in hours. Managers review only candidates who already clear the bar.",
  },
  {
    q: "Can a skills test really reduce retail turnover?",
    a: "Retail turnover runs near 60% a year, and replacing one hire costs $2,000 to $10,000. Hiring for reliability and fit keeps more people past 90 days.",
  },
  {
    q: "Do store managers need training to use it?",
    a: "No. Managers send a link and read a ranked shortlist. Tests are pre-built, so there is nothing to set up or grade.",
  },
  {
    q: "How does it fit our ATS?",
    a: "Testlify connects to major ATS and HRIS tools, plus an open API. Tests fire automatically and results sync back.",
  },
  {
    q: "Are the tests valid and fair across stores?",
    a: "Yes. Standardized, science-backed scoring judges every candidate at every location on the same criteria.",
  },
];

const SCORE_BAR =
  "block h-full rounded-md bg-gradient-to-r from-[#FF7A52] to-[#F23F44]";

export default function RetailIndustryPage() {
  return (
    <>
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      {/* ============ HERO ============ */}
      <section className="pt-[74px] pb-[88px] bg-[linear-gradient(180deg,#FFF8F7_0%,#fff_82%)]">
        <div className="max-w-[1240px] mx-auto px-7 grid md:grid-cols-[1.02fr_0.98fr] gap-[60px] items-center">
          <div>
            <div className="text-[13px] text-muted flex gap-2 items-center mb-[18px]">
              <Link href={routes.solutions} className="hover:text-coral">
                Solutions
              </Link>
              <span>/</span>
              <span>Industry / Retail</span>
            </div>
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
              For retail teams<b className="text-coral">.</b>
            </p>
            <h1 className="text-[52px] font-extrabold tracking-[-1.6px] leading-[1.06] mt-4 text-balance">
              Hire retail staff who <span className="text-coral">keep customers coming back</span>
            </h1>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">
              Skills tests show you who can perform before you hire them. Fill stores faster, cut
              turnover, and keep your best people longer.
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
          </div>

          <div>
            <div className="bg-white border border-warm rounded-[22px] shadow-[0_40px_90px_rgba(110,11,14,0.14)] overflow-hidden rt-float">
              <div className="flex items-baseline justify-between px-[22px] pt-[18px] pb-2">
                <span className="text-[14px] font-extrabold text-ink">Store applicant funnel</span>
                <span className="text-[12px] font-semibold text-coral bg-[#FFF0EF] rounded-full px-[11px] py-1">
                  Holiday season
                </span>
              </div>
              <div className="px-[22px] pt-[6px] pb-4 flex flex-col gap-[9px]">
                {[
                  { w: "100%", label: "3,200 applicants" },
                  { w: "78%", label: "2,400 assessed" },
                  { w: "52%", label: "1,050 job-fit" },
                  { w: "30%", label: "280 shortlist" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span
                      className="h-[34px] rounded-[9px] bg-gradient-to-r from-[#FF7A52] to-[#F23F44] flex items-center px-3 text-white text-[12.5px] font-bold whitespace-nowrap shadow-[0_6px_14px_rgba(242,63,68,0.22)]"
                      style={{ width: r.w }}
                    >
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 px-[22px] py-[14px] border-t border-[#F4E9E9] bg-[#FCF6F5]">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7A52] to-[#F23F44] text-white font-extrabold text-[14px] flex items-center justify-center shrink-0">
                  PS
                </span>
                <span>
                  <span className="text-[14px] font-bold">Priya S.</span>
                  <br />
                  <span className="text-[12px] text-muted">Sales Associate</span>
                </span>
                <span className="ml-auto text-[11.5px] font-bold text-[#1FA463] bg-[#E8F6EE] px-[11px] py-[5px] rounded-full">
                  Top 8%
                </span>
              </div>
              <div className="px-[22px] pt-[14px] pb-5 flex flex-col gap-[11px]">
                {[
                  { l: "Customer Service", w: "94%", v: "94%" },
                  { l: "Sales Aptitude", w: "89%", v: "89%" },
                  { l: "Reliability", w: "86%", v: "86%" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-3">
                    <span className="text-[12.5px] font-semibold text-[#46383C] w-[120px] shrink-0">{s.l}</span>
                    <span className="flex-1 h-2 rounded-md bg-[#F4E7E8] overflow-hidden">
                      <i className={SCORE_BAR} style={{ width: s.w }} />
                    </span>
                    <span className="text-[13px] font-extrabold text-coral w-[34px] text-right shrink-0">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STAT BAND ============ */}
      <section className="bg-sand py-11">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="grid grid-cols-2 md:grid-cols-4">
            {[
              { n: 60, u: "%", comma: false, l: "annual retail staff turnover rate (BLS, 2025)" },
              { n: 75, u: "%", comma: false, l: "less screening time with skills-based tests" },
              { n: 3500, u: "+", comma: true, l: "validated tests ready to send today" },
              { n: 100, u: "+", comma: false, l: "native ATS & HRIS integrations" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`text-center px-[22px] py-1 ${i > 0 ? "md:border-l border-[#EFE3E4]" : ""}`}
              >
                <div className="text-[34px] font-bold tracking-[-1px] leading-none text-ink tabular-nums">
                  <StatNumber to={s.n} comma={s.comma} />
                  <span className="text-[#D98C8F] font-semibold">{s.u}</span>
                </div>
                <div className="text-[14px] text-[#6C5A5D] font-medium mt-[10px] leading-[1.45]">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ PROBLEM + CALCULATOR ============ */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7 grid md:grid-cols-2 gap-[60px] items-center">
          <Reveal>
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
              The problem<b className="text-coral">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-[14px] text-balance">
              Turnover quietly drains every store you run
            </h2>
            <p className="text-[15.5px] leading-[1.64] text-body mt-[14px]">
              Retail loses about 60% of its staff a year, and most quit within months. Every weak hire
              means lost sales, slower service, and another role to fill from scratch.
            </p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {[
                "You rehire the same store roles all year long.",
                "Seasonal peaks force fast hiring with no time to vet.",
                "Resumes hide who can actually serve and sell.",
              ].map((t) => (
                <div key={t} className="flex gap-[10px] items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                  <Check3 />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
          <TurnoverCalculator />
        </div>
      </section>

      {/* ============ WHY TESTLIFY + INSIGHT (flipped) ============ */}
      <section className="py-24 bg-sand">
        <div className="max-w-[1240px] mx-auto px-7 grid md:grid-cols-2 gap-[60px] items-center">
          <Reveal className="md:order-2">
            <div className="bg-white border border-warm rounded-[20px] p-[26px] shadow-[0_24px_50px_rgba(110,11,14,0.10)]">
              <div className="flex items-center gap-[10px] text-[12.5px] font-bold text-muted">
                <span>Candidate insight · Sales Associate</span>
                <span className="ml-auto text-[11.5px] font-bold text-[#1FA463] bg-[#E8F6EE] px-[11px] py-[5px] rounded-full">
                  Strong fit · Top 12%
                </span>
              </div>
              <div className="flex flex-col gap-[11px] pt-[18px] pb-1">
                {[
                  { l: "Customer service fit", w: "92%", v: "92" },
                  { l: "Sales & upselling", w: "88%", v: "88" },
                  { l: "Numeracy & cash", w: "81%", v: "81" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-3">
                    <span className="text-[12.5px] font-semibold text-[#46383C] w-[120px] shrink-0">{s.l}</span>
                    <span className="flex-1 h-2 rounded-md bg-[#F4E7E8] overflow-hidden">
                      <i className={SCORE_BAR} style={{ width: s.w }} />
                    </span>
                    <span className="text-[13px] font-extrabold text-coral w-[34px] text-right shrink-0">{s.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-[18px] border-t border-[#F4E7E8] text-[14.5px] leading-[1.5] text-[#46383C]">
                Likely to stay 6+ months <b className="text-[#1FA463]">84%</b>
              </div>
            </div>
          </Reveal>
          <Reveal className="md:order-1">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
              Why Testlify<b className="text-coral">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-[14px] text-balance">
              A skills test shows what a resume can&apos;t
            </h2>
            <p className="text-[15.5px] leading-[1.64] text-body mt-[14px]">
              Testlify puts every applicant through a short, retail-specific test, then ranks them on
              the skills that drive sales and retention. You see who can perform on the floor before you
              spend a minute interviewing.
            </p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {[
                "Measure customer service and sales with real store scenarios.",
                "Score reliability so you hire associates who stay through the season.",
                "Screen your whole applicant pool in one click, then rank by fit.",
              ].map((t) => (
                <div key={t} className="flex gap-[10px] items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                  <Check3 />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RETAIL ROLES ============ */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[720px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
              Retail roles<b className="text-coral">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-[14px] text-balance">
              Retail skills tests that predict store performance
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">
              Validated, pre-employment tests for every retail role. Score customer service, sales
              aptitude, upselling, product knowledge, and reliability.
            </p>
          </Reveal>
          <Reveal className="grid md:grid-cols-3 gap-5 mt-[46px]">
            {ROLES.map((r) => (
              <div
                key={r.title}
                className="group relative bg-white border border-warm rounded-[18px] px-[26px] py-7 shadow-[0_16px_30px_rgba(110,11,14,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_22px_44px_rgba(110,11,14,0.12)]"
              >
                <div className="flex items-center justify-between mb-[18px]">
                  <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center">
                    {r.icon}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-sand text-[#C9B9BC] flex items-center justify-center transition-[background,color,transform] duration-[250ms] group-hover:bg-coral group-hover:text-white group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                    <Arrow />
                  </span>
                </div>
                <h3 className="text-[18px] font-bold tracking-[-0.3px] mt-0 mb-[6px]">{r.title}</h3>
                <p className="text-[13.5px] leading-[1.5] text-[#6C5A5D] mt-0 mb-4">{r.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((tg) => (
                    <span key={tg} className="text-[12px] font-semibold text-[#5A4B4E] bg-sand border border-warm rounded-full px-3 py-[6px]">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <div className="text-center">
            <Reveal as="span" className="inline-block">
              <Link href={routes.testLibrary} className="inline-flex items-center gap-2 mt-[34px] text-coral font-bold text-[15.5px]">
                View all test library
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SAMPLE QUESTION (interactive) ============ */}
      <section className="py-24 bg-sand">
        <div className="max-w-[1240px] mx-auto px-7 grid md:grid-cols-2 gap-[60px] items-center">
          <SampleQuestionCopy />
          <SampleQuestion />
        </div>
      </section>

      {/* ============ CLIENT STORY (dark) ============ */}
      <section className="py-24 bg-ink">
        <div className="max-w-[960px] mx-auto px-7 text-center">
          <Reveal as="p" className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#C9B9BC] m-0">
            Client story<b className="text-coral">.</b>
          </Reveal>
          <Reveal as="p" delay={0.04} className="text-[26px] leading-[1.5] font-semibold text-white my-[18px] mb-[26px]">
            &quot;Every holiday season we were buried in applicants across 80 stores. Testlify cut our
            screening from <span className="text-[#FF7A52]">weeks to days</span>, and the associates we
            hire now actually stay past the season.&quot;
          </Reveal>
          <Reveal as="p" delay={0.08} className="text-white font-bold m-0">
            Maya Reyes
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-[#A9999C] text-[14px] mt-1 mb-10">
            VP Talent, Retail Company
          </Reveal>
          <Reveal delay={0.12} className="grid grid-cols-3 max-w-[680px] mx-auto">
            {[
              { n: 55, u: "%", l: "less time-to-hire" },
              { n: 6, u: "x", l: "recruiter efficiency" },
              { n: 94, u: "%", l: "candidate satisfaction" },
            ].map((s, i) => (
              <div key={s.l} className={`text-center px-[22px] py-1 ${i > 0 ? "border-l border-white/[0.14]" : ""}`}>
                <div className="text-[34px] font-bold tracking-[-1px] leading-none text-white tabular-nums">
                  <StatNumber to={s.n} />
                  <span className="text-[#FF9E7A] font-semibold">{s.u}</span>
                </div>
                <div className="text-[14px] text-[#C9B9BC] font-medium mt-[10px] leading-[1.45]">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section className="py-24 bg-sand">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[720px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
              Integrations<b className="text-coral">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-[14px] text-balance">
              Testlify integrates seamlessly with 100+ ATS tools
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">
              Streamline your hiring process from assessment to onboarding. Sync candidate data
              effortlessly, automate workflows, and gain deeper insights to make informed hiring
              decisions faster.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-11">
            {ATS.map((a) => (
              <div
                key={a.alt}
                className="bg-white border border-warm rounded-[14px] h-[84px] flex items-center justify-center p-[18px] shadow-[0_10px_22px_rgba(110,11,14,0.06)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_18px_34px_rgba(110,11,14,0.10)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt={a.alt} className="max-w-full max-h-[38px] object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal className="text-center mt-[34px]">
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-coral font-bold text-[15.5px]">
              View all ATS integration
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[720px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
              FAQ<b className="text-coral">.</b>
            </p>
            <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-[14px] text-balance">
              Frequently asked questions (FAQs)
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-body mt-5">
              Want to know more about Testlify? Here are answers to the most commonly asked questions
              about our company.
            </p>
          </Reveal>
          <div className="max-w-[820px] mx-auto mt-11">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        @keyframes rtfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .rt-float{animation:rtfloat 6s ease-in-out infinite;}
      `}</style>
    </>
  );
}
