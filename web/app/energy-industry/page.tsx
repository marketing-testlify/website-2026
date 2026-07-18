import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import FAQ from "@/components/FAQ";
import { routes } from "@/lib/routes";
import StatsBand from "./StatsBand";

export const metadata = {
  title: "Skills assessment for the energy industry",
  description:
    "Verify technical expertise, HSE knowledge, and situational judgment for every energy hire. One assessment platform covering oil and gas, utilities, and renewables.",
};

const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const star = (
  <svg viewBox="0 0 24 24" fill="#F23F44" className="w-5 h-5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Hero score bars
const heroScores = [
  { l: "HSE / OSHA knowledge", w: 94, d: 0.15 },
  { l: "Technical aptitude", w: 88, d: 0.28 },
  { l: "SCADA knowledge", w: 84, d: 0.41 },
  { l: "Situational judgment", w: 91, d: 0.54 },
  { l: "Cognitive aptitude", w: 86, d: 0.67 },
];

const scorecardScores = [
  { l: "OSHA / HSE knowledge", w: 94, d: 0.15 },
  { l: "Environmental compliance", w: 88, d: 0.28 },
  { l: "Situational judgment", w: 91, d: 0.41 },
  { l: "Incident reporting", w: 86, d: 0.54 },
  { l: "Risk identification", w: 93, d: 0.67 },
];

const identify = [
  {
    n: "01",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    h: "Verified safety knowledge, not listed training",
    p: "Energy operations demand that HSE and OSHA knowledge is confirmed, not assumed. Assessment gives you scored evidence of what each candidate actually knows before day one.",
  },
  {
    n: "02",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
        <line x1="19" y1="7" x2="19" y2="13" />
        <line x1="16" y1="10" x2="22" y2="10" />
      </svg>
    ),
    h: "Specialist roles are hard to fill and getting harder",
    p: "Wind turbine technicians, grid engineers, and SCADA operators are scarce. Manual screening slows decisions at precisely the moment speed matters most.",
  },
  {
    n: "03",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" />
        <polyline points="2 17 12 22 22 17" />
      </svg>
    ),
    h: "Technical depth varies widely across sub-sectors",
    p: "Oil and gas, solar, wind, and grid operations each require different competency stacks. Generic assessments do not capture what each role actually demands.",
  },
];

const roles = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    h: "Field & Rig Technician",
    d: "Mechanical aptitude, safety protocol awareness, attention to detail and situational judgment for field and rig operations.",
    tags: ["Mechanical aptitude", "HSE / OSHA", "SJT"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2" />
        <path d="M12.59 19.41A2 2 0 1 0 14 16H2" />
        <path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2" />
      </svg>
    ),
    h: "Wind Turbine Technician",
    d: "Electrical and mechanical knowledge, working-at-height safety awareness, and troubleshooting under remote conditions.",
    tags: ["Electrical aptitude", "Safety protocols", "Problem-solving"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
        <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
        <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
      </svg>
    ),
    h: "Solar Installation Technician",
    d: "Electrical systems knowledge, site safety compliance, and ability to follow technical installation procedures accurately.",
    tags: ["Electrical systems", "Technical reading", "HSE"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    h: "Grid & Plant Operator",
    d: "SCADA systems knowledge, control room procedures, and the cognitive aptitude to manage complex grid monitoring tasks.",
    tags: ["SCADA knowledge", "Cognitive aptitude", "Attention to detail"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
    h: "Project & Site Engineer",
    d: "Technical problem-solving, regulatory knowledge, and the project management judgment needed for energy construction and development roles.",
    tags: ["Technical reasoning", "Regulatory knowledge", "Critical thinking"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    h: "HSE Officer",
    d: "OSHA, environmental compliance, incident reporting procedures, and the decision-making skills to enforce safety standards under pressure.",
    tags: ["OSHA / HSE", "Environmental compliance", "SJT"],
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

const faqs = [
  { q: "What is a skills assessment for the energy industry?", a: "A skills assessment for the energy industry is a pre-employment test that verifies a candidate's technical expertise, safety knowledge, cognitive ability, and situational judgment before hiring. It covers role-specific competencies across oil and gas, renewable energy, and utilities, replacing resume screening with objective, scored evidence of job readiness." },
  { q: "Can Testlify assess HSE and safety knowledge for energy roles?", a: "Yes. Testlify includes validated HSE, OSHA, and safety protocol assessments for energy and utility roles. You can set minimum pass thresholds on safety modules so candidates who do not meet your required standard are automatically flagged and do not advance to interview." },
  { q: "Does Testlify include mechanical aptitude tests for energy hiring?", a: "Yes. Testlify's mechanical aptitude assessments evaluate how candidates interpret technical drawings, operate and troubleshoot equipment, and apply mechanical principles in realistic scenarios. They are validated for rig technicians, turbine technicians, plant maintenance workers, and field service roles." },
  { q: "Can Testlify assess SCADA and grid systems knowledge?", a: "Yes. Testlify includes assessments for SCADA systems, grid operations, control room procedures, and digital energy systems. These are used for grid operators, control engineers, and plant operators across utilities and renewables where operational accuracy is critical." },
  { q: "Which energy roles can I assess with Testlify?", a: "Testlify covers field and rig technicians, HSE officers, wind turbine technicians, solar installation technicians, grid and plant operators, utility worker assessment modules, and maintenance roles across oil and gas, renewable energy, and utilities. The AI test builder generates a role-specific energy industry assessment for any position in under 60 seconds." },
  { q: "How does skills-based hiring reduce risk in energy operations?", a: "In energy operations, verified competence matters from the first day on site. A rigorous energy skills assessment confirms technical readiness, safety knowledge, and situational judgment before the offer, giving teams objective, scored evidence to make confident hiring decisions across field, plant, and control room roles." },
  { q: "How long does an energy skills assessment take?", a: "Most energy assessments run between 30 and 45 minutes depending on the role and modules selected. Field and operational roles typically combine mechanical aptitude, safety knowledge, and situational judgment. Technical and engineering roles add knowledge-specific modules. Candidates receive instructions and results immediately on completion." },
  { q: "Does Testlify integrate with ATS systems used in energy hiring?", a: "Yes. Testlify has 100+ native ATS and HRIS integrations including Workday, SAP SuccessFactors, Greenhouse, BambooHR, and Lever. Assessment results and candidate rankings sync directly into your existing hiring workflow without manual data transfer." },
];

function ScoreBars({ scores, mt }: { scores: { l: string; w: number; d: number }[]; mt?: number }) {
  return (
    <div className="flex flex-col gap-[11px]" style={mt ? { marginTop: mt } : undefined}>
      {scores.map((s) => (
        <div key={s.l} className="flex items-center gap-3">
          <span className="text-[12.5px] font-semibold text-[#46383C] w-[150px] max-[560px]:w-[120px] flex-none">
            {s.l}
          </span>
          <span className="flex-1 h-2 rounded-md bg-[#F4E7E8] overflow-hidden">
            <i
              className="en-fill block h-full rounded-md"
              style={{ ["--w" as string]: `${s.w}%`, animationDelay: `${s.d}s` }}
            />
          </span>
          <span className="text-[13px] font-extrabold text-coral w-[34px] text-right flex-none">
            {s.w}
          </span>
        </div>
      ))}
    </div>
  );
}

function FinCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#F0E2E3] rounded-[20px] shadow-[0_24px_50px_rgba(110,11,14,0.10)] overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-[13px] border-b border-[#F4E9E9] bg-[#FCF7F7]">
        <span className="flex gap-1.5">
          <i className="w-[11px] h-[11px] rounded-full block bg-[#F26B6B]" />
          <i className="w-[11px] h-[11px] rounded-full block bg-[#F5B93F]" />
          <i className="w-[11px] h-[11px] rounded-full block bg-[#4CC38A]" />
        </span>
        <span className="text-[12.5px] font-semibold text-[#8A7A7D] ml-1.5">{title}</span>
      </div>
      <div className="p-[22px]">{children}</div>
    </div>
  );
}

export default function EnergyIndustryPage() {
  return (
    <>
      <style>{`
        @keyframes en-rtfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes en-rtfill{to{width:var(--w)}}
        .en-float{animation:en-rtfloat 6s ease-in-out infinite}
        .en-fill{width:0;background:linear-gradient(90deg,#FF7A52,#F23F44);animation:en-rtfill 1.4s cubic-bezier(.4,0,.2,1) forwards}
      `}</style>

      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      {/* HERO */}
      <section className="py-[74px] pb-20 bg-[linear-gradient(180deg,#FFF8F7_0%,#fff_82%)]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-[1.02fr_.98fr] gap-14 items-center max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <Reveal className="">
            <div className="flex gap-2 items-center text-[13px] text-[#8A7A7D] mb-[18px]">
              <Link href={routes.solutions} className="hover:text-coral">Solutions</Link>
              <span>/</span>
              <span>Industry / Energy</span>
            </div>
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">
              For energy teams<b className="text-coral">.</b>
            </p>
            <h1 className="text-[52px] max-[960px]:text-[38px] font-extrabold tracking-[-1.6px] leading-[1.06] mt-4">
              Skills assessment for the <span className="text-coral">energy industry</span>
            </h1>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">
              Verify technical expertise, HSE knowledge, and situational judgment for every energy hire. One renewable energy hiring assessment platform covering oil and gas, utilities, and every sub-sector in between.
            </p>
            <div className="flex gap-3.5 flex-wrap mt-[26px]">
              <CtaButton label="Try for Free" href={routes.pricing} variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a Demo" href={routes.contact} variant="secondary" size="md" icon="play" />
            </div>
            <div className="flex gap-[22px] flex-wrap mt-6">
              {["7-day free trial", "Unlimited assessments", "No credit card required"].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[13.5px] font-semibold text-[#6C5A5D]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="en-float bg-[linear-gradient(180deg,#FFF1EF,#FFF8F7)] border border-[#F6DAD9] rounded-[24px] p-6 shadow-[0_40px_90px_rgba(110,11,14,0.14)]">
              <div className="relative flex justify-between px-1.5 pt-3 pb-6">
                <span className="absolute top-[38px] left-9 right-9 h-0.5 bg-[repeating-linear-gradient(90deg,#F0B9B9_0_6px,transparent_6px_12px)]" />
                {["Role input", "AI builder", "Skills test", "Proctoring", "Auto score", "Ranked list"].map((n) => (
                  <div key={n} className="relative z-[1] flex flex-col items-center gap-[9px] flex-1">
                    <span className="w-[52px] h-[52px] rounded-full bg-white border-2 border-coral flex items-center justify-center shadow-[0_0_0_7px_rgba(242,63,68,0.07)]">
                      <i className="w-[15px] h-[15px] rounded-full bg-coral block" />
                    </span>
                    <span className="text-[11px] max-[560px]:text-[9px] font-semibold text-[#6C5A5D] text-center leading-[1.2]">{n}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl px-5 py-[18px] shadow-[0_12px_26px_rgba(110,11,14,0.08)]">
                <div className="flex justify-between items-baseline text-[13px] font-semibold text-[#6C5A5D] mb-4">
                  <span>Candidate assessment score</span>
                  <b className="text-xl font-extrabold text-coral tracking-[-0.5px]">91/100</b>
                </div>
                <ScoreBars scores={heroScores} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="bg-[#FBF3EE] py-11">
        <div className="max-w-[1240px] mx-auto px-7">
          <StatsBand />
        </div>
      </section>

      {/* IDENTIFY */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16]">Identify job-ready energy talent before you hire</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">Screen candidates for technical skills, safety compliance, and operational readiness with role-specific assessments.</p>
          </Reveal>
          <Reveal className="grid grid-cols-3 max-[960px]:grid-cols-1 gap-[22px] mt-[52px]">
            {identify.map((c) => (
              <div key={c.n} className="relative bg-white border border-[#F0E2E3] rounded-[20px] pt-[34px] px-8 pb-8 shadow-[0_16px_30px_rgba(110,11,14,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,0.12)]">
                <div className="flex items-center gap-3.5 mb-5">
                  <span className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center flex-none">{c.icon}</span>
                  <span className="text-[13px] font-extrabold text-[#E7C4C6] tracking-[0.04em]">{c.n}</span>
                </div>
                <h3 className="text-[19px] font-bold m-0 tracking-[-0.3px] leading-[1.28]">{c.h}</h3>
                <p className="text-[14.5px] leading-[1.62] text-[#6C5A5D] mt-3.5">{c.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-24 max-[960px]:py-16 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">Energy roles<b className="text-coral">.</b></p>
            <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5">Every energy sub-sector. One energy skills assessment platform</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">From oil and gas skills assessment to renewable technician screening and grid operator testing, map the right modules to each role in under 60 seconds.</p>
          </Reveal>
          <Reveal className="grid grid-cols-3 max-[960px]:grid-cols-1 gap-5 mt-[46px]">
            {roles.map((r) => (
              <div key={r.h} className="relative bg-white border border-[#F0E2E3] rounded-[18px] px-[26px] py-7 shadow-[0_16px_30px_rgba(110,11,14,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,0.12)]">
                <div className="flex items-center mb-[18px]">
                  <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center">{r.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold m-0 mb-1.5 tracking-[-0.3px]">{r.h}</h3>
                <p className="text-[13.5px] leading-[1.5] text-[#6C5A5D] m-0 mb-4">{r.d}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="text-[12px] font-semibold text-[#B23A3F] bg-[#FDECEC] border border-[#F8DADA] rounded-full px-3 py-1.5 whitespace-nowrap">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <div className="text-center">
            <Reveal as="span" delay={0.05}>
              <Link href={routes.testLibrary} className="inline-flex items-center gap-2 mt-[34px] text-coral font-bold text-[15.5px]">
                View all test library
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT IT COVERS — scorecard split */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">What it covers<b className="text-coral">.</b></p>
            <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5">What a skills assessment for the energy industry should actually cover</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">Every energy skills assessment is built around the actual competencies the role demands, not generic test templates.</p>
          </Reveal>
          <div className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-[60px] items-center mt-14">
            <Reveal>
              <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-0">Confirm safety readiness with scored evidence, not assumed credentials</h2>
              <p className="text-[15.5px] leading-[1.64] text-[#5A4B4E] mt-3.5">Set your own pass threshold per module. Only candidates who meet it advance automatically.</p>
              <div className="flex flex-col gap-3 mt-[22px]">
                {[
                  "OSHA, HSE, and environmental compliance modules validated for energy roles",
                  "Set minimum pass scores per module so only qualified candidates advance automatically",
                  "Situational judgment scenarios based on real field and site contexts",
                ].map((t) => (
                  <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                    <span className="flex-none mt-0.5 text-[#1FA463] w-5 h-5 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:[stroke-width:3]">{check}</span>
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <FinCard title="Candidate Scorecard · HSE Officer">
                <div className="flex justify-between items-start gap-3.5">
                  <div>
                    <b className="text-[15.5px] font-bold text-ink block">James Okafor</b>
                    <span className="text-[12px] text-[#8A7A7D] mt-0.5 block">HSE Officer · Oil and Gas</span>
                  </div>
                  <span className="text-[32px] font-extrabold text-coral tracking-[-1px] leading-none flex-none">91<i className="text-[14px] text-[#C9B9BC] not-italic font-bold">/100</i></span>
                </div>
                <ScoreBars scores={scorecardScores} mt={18} />
              </FinCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI TEST BUILDER — flip split */}
      <section className="py-24 max-[960px]:py-16 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-2 max-[960px]:grid-cols-1 gap-[60px] items-center">
          <Reveal className="max-[960px]:order-1 order-2">
            <FinCard title="AI Test Builder · Wind Turbine Technician">
              <p className="text-[12px] text-[#8A7A7D] font-semibold m-0 mb-4">Role: Wind Turbine Technician · Level: Mid-level · Sector: Renewables</p>
              {[
                { b: "Mechanical aptitude", s: "Technical", m: "20 min" },
                { b: "Electrical systems knowledge", s: "Technical", m: "15 min" },
                { b: "HSE and working at height", s: "Safety", m: "10 min" },
                { b: "Problem-solving and troubleshooting", s: "Cognitive", m: "10 min" },
                { b: "Situational judgment", s: "Behavioral", m: "10 min" },
              ].map((row) => (
                <div key={row.b} className="flex items-center gap-3 border border-[#EFE3E4] rounded-[14px] px-4 py-3.5 mb-[9px] bg-white">
                  <span className="flex-1">
                    <b className="text-[14px] font-bold text-ink block">{row.b}</b>
                    <span className="text-[11.5px] text-[#8A7A7D]">{row.s}</span>
                  </span>
                  <span className="text-[11px] font-bold text-[#6C5A5D] bg-[#F5EFEF] rounded-full px-[11px] py-[5px] whitespace-nowrap">{row.m}</span>
                </div>
              ))}
              <div className="text-center border-[1.5px] border-dashed border-[#EADDDE] rounded-xl p-3 text-[12.5px] font-semibold text-[#A9999C] mt-0.5">+ Add module from library</div>
              <div className="flex justify-between items-center mt-4 text-[12.5px] font-semibold text-[#8A7A7D]">
                <span>Total: 65 min · 5 modules</span>
                <span className="bg-coral text-white px-[17px] py-[9px] rounded-full text-[12px] font-bold">Send assessment</span>
              </div>
            </FinCard>
          </Reveal>
          <Reveal className="max-[960px]:order-1 order-1">
            <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-0">Verify the hands-on skills that field roles actually require</h2>
            <p className="text-[15.5px] leading-[1.64] text-[#5A4B4E] mt-3.5">Goes beyond theory. Candidates interpret real technical drawings, troubleshoot equipment, and apply mechanical principles in role-specific scenarios.</p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {[
                "Mechanical aptitude: equipment operation, troubleshooting, and technical drawings",
                "Electrical aptitude: wiring, systems knowledge, and safety standards",
                "Cognitive aptitude for engineering and supervisor-level roles",
              ].map((t) => (
                <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                  <span className="flex-none mt-0.5 text-[#1FA463] w-5 h-5 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:[stroke-width:3]">{check}</span>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID OPERATOR TABLE — split */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-2 max-[960px]:grid-cols-1 gap-[60px] items-center">
          <Reveal>
            <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-0">Validate the SCADA and grid knowledge that control room roles require</h2>
            <p className="text-[15.5px] leading-[1.64] text-[#5A4B4E] mt-3.5">For roles where a wrong input has immediate operational consequences, every hire needs a verified technical baseline before day one.</p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {[
                "SCADA systems, control room procedures, and grid monitoring knowledge",
                "Attention-to-detail and cognitive aptitude benchmarks for high-stakes operations roles",
                "Role-specific test modules for utilities, substations, and energy storage",
              ].map((t) => (
                <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                  <span className="flex-none mt-0.5 text-[#1FA463] w-5 h-5 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:[stroke-width:3]">{check}</span>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <FinCard title="Candidates · Grid Operator">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr>
                    <th className="text-[10.5px] font-bold text-[#8A7A7D] uppercase tracking-[0.04em] text-left px-2 pb-3">Candidate</th>
                    <th className="text-[10.5px] font-bold text-[#8A7A7D] uppercase tracking-[0.04em] text-right px-2 pb-3">Overall</th>
                    <th className="text-[10.5px] font-bold text-[#8A7A7D] uppercase tracking-[0.04em] text-right px-2 pb-3">SCADA</th>
                    <th className="text-[10.5px] font-bold text-[#8A7A7D] uppercase tracking-[0.04em] text-right px-2 pb-3">Cognitive</th>
                    <th className="text-[10.5px] font-bold text-[#8A7A7D] uppercase tracking-[0.04em] text-right px-2 pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { n: "Rajan P.", o: 93, s: 96, c: 90, adv: true },
                    { n: "Sarah M.", o: 87, s: 88, c: 86, adv: true },
                    { n: "Tom H.", o: 69, s: 61, c: 77, adv: false },
                    { n: "Anita V.", o: 89, s: 91, c: 87, adv: true },
                  ].map((row) => (
                    <tr key={row.n}>
                      <td className="px-2 py-3 border-t border-[#F4ECEC] text-ink font-bold">{row.n}</td>
                      <td className="px-2 py-3 border-t border-[#F4ECEC] text-right text-[#6C5A5D] font-bold tabular-nums">{row.o}</td>
                      <td className="px-2 py-3 border-t border-[#F4ECEC] text-right text-[#6C5A5D] font-bold tabular-nums">{row.s}</td>
                      <td className="px-2 py-3 border-t border-[#F4ECEC] text-right text-[#6C5A5D] font-bold tabular-nums">{row.c}</td>
                      <td className="px-2 py-3 border-t border-[#F4ECEC] text-right">
                        <span className={`text-[11px] font-bold rounded-full px-[11px] py-[5px] whitespace-nowrap ${row.adv ? "text-[#1FA463] bg-[#E8F6EE]" : "text-[#8A7A7D] bg-[#F1E9E9]"}`}>
                          {row.adv ? "Advance" : "Below threshold"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </FinCard>
          </Reveal>
        </div>
      </section>

      {/* PROCTORING — flip split */}
      <section className="py-24 max-[960px]:py-16 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-2 max-[960px]:grid-cols-1 gap-[60px] items-center">
          <Reveal className="max-[960px]:order-1 order-1">
            <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-0">Every score is earned. Every decision is defensible</h2>
            <p className="text-[15.5px] leading-[1.64] text-[#5A4B4E] mt-3.5">Every shortlisting decision is backed by a complete, exportable candidate log, ready for internal review or regulatory audit.</p>
            <div className="flex flex-col gap-3 mt-[22px]">
              {[
                "Webcam monitoring, tab-switch detection, and IP verification built in",
                "Timestamped candidate logs exportable on demand for internal and regulatory review",
                "SOC 2 Type 2 and ISO 27001 certified, GDPR and CCPA compliant",
              ].map((t) => (
                <div key={t} className="flex gap-2.5 items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                  <span className="flex-none mt-0.5 text-[#1FA463] w-5 h-5 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:[stroke-width:3]">{check}</span>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="max-[960px]:order-1 order-2">
            <FinCard title="Assessment Integrity · Rajan P.">
              <p className="text-[10.5px] font-bold text-[#8A7A7D] tracking-[0.05em] m-0 mb-1.5">PROCTORING SUMMARY</p>
              {[
                { l: "Webcam", v: "Active throughout" },
                { l: "IP consistency", v: "Single location" },
                { l: "Tab switching", v: "None detected" },
                { l: "Plagiarism check", v: "No match found" },
              ].map((row) => (
                <div key={row.l} className="flex justify-between items-center py-3.5 border-t border-[#F4ECEC] text-[14px] text-[#6C5A5D] font-medium">
                  <span>{row.l}</span>
                  <b className="text-[#1FA463] font-bold text-[13.5px] inline-flex items-center gap-[7px]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]"><path d="M20 6L9 17l-5-5" /></svg>
                    {row.v}
                  </b>
                </div>
              ))}
            </FinCard>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal>
            <h2 className="text-[44px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16]">What energy and utility hiring teams say</h2>
          </Reveal>
          <Reveal className="grid grid-cols-2 max-[960px]:grid-cols-1 gap-7 mt-11">
            {[
              {
                q: "“Testlify gave us an objective way to screen technical and safety knowledge for field roles before the first interview. We cut screening time significantly and stopped relying on certifications alone.”",
                nm: "Head of Talent Acquisition",
                role: "Energy operator, 1,000 to 5,000 employees",
              },
              {
                q: "“We were scaling up turbine technician hiring across multiple sites. Testlify let us run consistent assessments across every candidate and shortlist based on actual competency, not just availability.”",
                nm: "Recruitment Manager",
                role: "Renewable energy developer",
              },
            ].map((t) => (
              <div key={t.nm} className="bg-white border border-[#F0E2E3] rounded-[20px] px-9 py-[38px]">
                <div className="flex gap-[5px] mb-5">{[0, 1, 2, 3, 4].map((i) => <span key={i}>{star}</span>)}</div>
                <p className="text-[20px] leading-[1.5] italic text-[#2A1D21] m-0 mb-[26px]">{t.q}</p>
                <div className="font-bold text-[17px] text-ink">{t.nm}</div>
                <div className="text-[14.5px] text-[#6C5A5D] mt-1">{t.role}</div>
                <span className="inline-block whitespace-nowrap mt-5 bg-[#FCE0DE] text-coral text-[12.5px] font-bold px-3.5 py-[7px] rounded-full">G2 Verified</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 max-[960px]:py-16 bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">Integrations<b className="text-coral">.</b></p>
            <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5">Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p>
          </Reveal>
          <Reveal className="grid grid-cols-5 max-[960px]:grid-cols-3 max-[560px]:grid-cols-2 gap-4 mt-11">
            {atsLogos.map((logo) => (
              <div key={logo.alt} className="bg-white border border-[#F0E2E3] rounded-[14px] h-[84px] flex items-center justify-center p-[18px] shadow-[0_10px_22px_rgba(110,11,14,0.06)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_34px_rgba(110,11,14,0.10)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="max-w-full max-h-[38px] object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal className="text-center mt-[34px]">
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-coral font-bold text-[15.5px]">
              View all ATS integration
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto">
            <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0">FAQ<b className="text-coral">.</b></p>
            <h2 className="text-[34px] max-[960px]:text-[27px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-3.5">Frequently asked questions (FAQs)</h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5">Here are answers to the most commonly asked questions about Testlify&apos;s skills assessment for the energy industry.</p>
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
