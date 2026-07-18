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
  title: "Skill Assessments — assess real skills, not résumés",
  description:
    "Measure what candidates can actually do with 3,500+ expert-validated tests across every role — from coding and cognitive ability to personality and role-specific skills.",
};

/* ---------------------------------------------------------------- */
/* FAQ data — verbatim from the prototype logic class               */
/* ---------------------------------------------------------------- */

const FAQ_ITEMS = [
  {
    q: "What is a Testlify skill assessment?",
    a: "Testlify assessments measure what candidates can actually do — with 3,500+ expert-validated tests across coding, cognitive ability, personality, language and role-specific skills.",
  },
  {
    q: "How many tests are in the library?",
    a: "3,500+ validated tests across 4,500+ job roles and 50+ industries, each built and reviewed by subject-matter experts.",
  },
  {
    q: "Can I combine multiple tests in one assessment?",
    a: "Yes. Mix cognitive, role-specific, coding and personality tests into a single assessment, set duration and passing scores, and weight sections to match the role.",
  },
  {
    q: "Are the tests validated and bias-free?",
    a: "Every test is expert-validated for reliability and fairness, and assessments apply the same criteria to every candidate for consistent, EEOC-defensible results.",
  },
  {
    q: "Can candidates take assessments in their language?",
    a: "Yes. The candidate experience is available in 9 languages, so assessments can be delivered in your candidates’ language.",
  },
  {
    q: "How long does a typical assessment take?",
    a: "Most assessments run about 30 minutes, with a 94% candidate satisfaction rate.",
  },
];

/* ---------------------------------------------------------------- */
/* Integrations — logos hot-linked from testlify.com (prototype)    */
/* ---------------------------------------------------------------- */

const INTG_LOGOS: [string, string][] = [
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

/* ---------------------------------------------------------------- */
/* Small building blocks (server components)                        */
/* ---------------------------------------------------------------- */

/** Browser-chrome mock window: traffic lights + address bar + body */
function MockWindow({ bar, bodyClassName = "p-5", children }: { bar: string; bodyClassName?: string; children: ReactNode }) {
  return (
    <div className="bg-white border border-warm rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-[13px] border-b border-[#F4ECEC] bg-[#FCFAFA]">
        <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
        <span className="ml-3 flex-1 h-[26px] rounded-lg bg-[#F3EAEA] flex items-center px-3 text-[11.5px] text-faint font-medium">
          {bar}
        </span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

const FIT_STYLES: Record<string, string> = {
  hi: "bg-[#EAF8F0] text-[#1F9D6B]",
  md: "bg-[#FFF4E6] text-[#C7791B]",
  lo: "bg-[#F3EAEA] text-[#9A878A]",
};

/** Ranked-candidate row inside a mock window */
function CandidateRow({
  initials,
  gradient,
  name,
  role,
  fit,
  fitLabel,
  score,
  scoreColor,
  top = false,
  className = "",
}: {
  initials: string;
  gradient: string;
  name: string;
  role: string;
  fit: "hi" | "md" | "lo";
  fitLabel: string;
  score: string;
  scoreColor: string;
  top?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-[13px] py-3 px-3.5 border rounded-[14px] mb-2.5 ${
        top
          ? "border-[#FBC9CB] shadow-[0_14px_30px_rgba(242,63,68,0.12)] [background:linear-gradient(180deg,#FFF8F8,#fff)]"
          : "border-[#F1E6E7] bg-white"
      } ${className}`.trim()}
    >
      <span
        className="w-[38px] h-[38px] rounded-full flex-none flex items-center justify-center font-bold text-[14px] text-white"
        style={{ background: gradient }}
      >
        {initials}
      </span>
      <div>
        <div className="text-[14px] font-bold text-ink leading-[1.2]">{name}</div>
        <div className="text-[11.5px] text-[#9A878A] font-medium">{role}</div>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <span className={`text-[10.5px] font-bold tracking-[0.05em] px-[9px] py-1 rounded-full ${FIT_STYLES[fit]}`}>
          {fitLabel}
        </span>
        <span className="text-[18px] font-extrabold tracking-[-0.5px]" style={{ color: scoreColor }}>
          {score}
        </span>
      </div>
    </div>
  );
}

/** Automation rule row (step 2 mock) */
function RuleRow({ ok, children, tagClass, tag, className = "" }: { ok: boolean; children: ReactNode; tagClass: string; tag: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 py-3.5 px-4 border border-[#F1E6E7] rounded-[13px] mb-2.5 text-[13.5px] ${className}`.trim()}>
      <span className={`flex-none w-[30px] h-[30px] rounded-[9px] flex items-center justify-center ${ok ? "bg-[#EAF8F0]" : "bg-[#F3EAEA]"}`}>
        {ok ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9A878A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </span>
      <span>{children}</span>
      <span className={`ml-auto text-[10.5px] font-bold tracking-[0.05em] px-2.5 py-1 rounded-full ${tagClass}`}>{tag}</span>
    </div>
  );
}

/** Sync-log row (step 3 mock) */
function SyncRow({ icon, title, sub, tag, last = false }: { icon: ReactNode; title: string; sub: string; tag: string; last?: boolean }) {
  return (
    <div className={`flex items-center gap-3 py-[15px] px-5 ${last ? "" : "border-b border-[#F4ECEC]"}`.trim()}>
      <span className="flex-none w-8 h-8 rounded-[9px] bg-[#FFF0F0] flex items-center justify-center">{icon}</span>
      <div className="flex-1">
        <div className="text-[13.5px] font-semibold">{title}</div>
        <div className="text-[11px] font-bold tracking-[0.04em] uppercase text-faint">{sub}</div>
      </div>
      <span className="text-[10.5px] font-bold tracking-[0.05em] px-2.5 py-1 rounded-full bg-[#EAF8F0] text-[#1F9D6B]">{tag}</span>
    </div>
  );
}

/* Shared class fragments */
const EYEBROW = "text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]";
const H2 = "text-[42px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 max-[960px]:text-[32px] max-[960px]:tracking-[-1px]";
const H3 = "text-[22px] leading-[1.25] font-bold tracking-[-0.4px] m-0 text-ink";
const LEAD = "text-[19px] leading-[1.6] font-normal";
const SEC = "py-24 px-7 max-[960px]:py-[70px] max-[960px]:px-[22px]";
const WRAP = "max-w-[1240px] mx-auto px-7";
const SPLIT = "grid grid-cols-[1.02fr_1.05fr] gap-16 items-center max-[960px]:grid-cols-1 max-[960px]:gap-11";
/* non-link card hover: lift + warm shadow. Tailwind v4 gotcha — -translate-y-*
   sets the CSS `translate` property, so the arbitrary transition list includes it. */
const BCARD_HOVER =
  "[transition:translate_.3s_cubic-bezier(.2,.7,.3,1),border-color_.3s,box-shadow_.3s] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]";
const TILE_HOVER =
  "[transition:translate_.28s_ease,box-shadow_.28s_ease,border-color_.28s_ease] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]";

/* coral-check chip + body text — the .chk / .chki pattern used in split lists */
function CheckItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="flex-none w-6 h-6 rounded-[7px] bg-coral flex items-center justify-center mt-px">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="text-[16px] leading-[1.66] text-body">{children}</span>
    </div>
  );
}

/* Browser-chrome mock whose body is a sand image-slot placeholder */
function FeatureMock({ bar, label }: { bar: string; label: string }) {
  return (
    <div className="bg-white border border-warm rounded-[20px] shadow-[0_30px_70px_rgba(110,11,14,0.14)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-[13px] border-b border-[#F4ECEC] bg-[#FCFAFA]">
        <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
        <span className="ml-3 flex-1 h-[26px] rounded-lg bg-[#F3EAEA] flex items-center px-3 text-[11.5px] text-faint font-medium">
          {bar}
        </span>
      </div>
      <div className="bg-sand w-full h-[340px] flex items-center justify-center p-6">
        <span className="text-[13px] font-semibold text-faint text-center max-w-[70%] leading-[1.5]">{label}</span>
      </div>
    </div>
  );
}

/* Split feature: eyebrow + h2 + lead + coral-check list beside a mock panel.
   `sand` toggles the band bg; `reverse` puts the mock on the left (desktop). */
function SplitFeature({
  sand = false,
  reverse = false,
  eyebrow,
  heading,
  lead,
  points,
  bar,
  slotLabel,
}: {
  sand?: boolean;
  reverse?: boolean;
  eyebrow: string;
  heading: string;
  lead: string;
  points: string[];
  bar: string;
  slotLabel: string;
}) {
  return (
    <section className={`${SEC}${sand ? " bg-sand" : ""}`}>
      <div className={WRAP}>
        <div className={SPLIT}>
          <Reveal className={reverse ? "order-2" : undefined}>
            <p className={EYEBROW}>
              {eyebrow}
              <b className="text-coral font-semibold">.</b>
            </p>
            <h2 className={`${H2} text-ink mb-5`}>{heading}</h2>
            <p className={`${LEAD} text-body m-0 mb-[26px]`}>{lead}</p>
            <div className="flex flex-col gap-3.5">
              {points.map((p) => (
                <CheckItem key={p}>{p}</CheckItem>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className={reverse ? "order-1" : undefined}>
            <FeatureMock bar={bar} label={slotLabel} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                              */
/* ---------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="New — AI résumé screening now syncs match scores straight back to your ATS."
        announcementCta="See how"
      />

      {/* Prototype parity: shrink the play icon on the demo CTA so both hero
          buttons share the same 55px box (.ctabtn .cta-play override). */}
      <style>{`.ska-demo > span:first-child{width:24px;height:24px;}`}</style>

      {/* ============ 1. HERO ============ */}
      <section className="pt-[72px] pb-[88px] px-7 max-[960px]:pt-11 max-[960px]:pb-[60px] max-[960px]:px-[22px] relative overflow-hidden [background:radial-gradient(1100px_540px_at_78%_6%,#FFF0EE_0%,rgba(255,240,238,0)_60%),#fff]">
        <div className={WRAP}>
          <div className="grid grid-cols-[1.02fr_1.1fr] gap-[60px] items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <div>
              <Reveal delay={0.02}>
                <span className="inline-flex items-center gap-[9px] bg-white border border-[#F4D9DA] rounded-full py-[7px] pl-2 pr-[15px] text-[13px] font-semibold text-[#A8323A] shadow-[0_6px_16px_rgba(110,11,14,0.06)]">
                  <span className="bg-coral text-white text-[11px] font-bold tracking-[0.04em] px-[9px] py-[3px] rounded-full">
                    SKILL ASSESSMENTS
                  </span>
                  3,500+ validated tests
                </span>
              </Reveal>
              <Reveal
                as="h1"
                delay={0.06}
                className="text-[60px] leading-[1.05] font-extrabold tracking-[-2px] text-ink m-0 mt-[22px] max-[960px]:text-[42px] max-[960px]:tracking-[-1.2px]"
              >
                Assess real skills,
                <br />
                not <span className="text-coral">r&eacute;sum&eacute;s.</span>
              </Reveal>
              <Reveal as="p" delay={0.1} className={`${LEAD} text-body m-0 mt-[22px] max-w-[520px]`}>
                Measure what candidates can actually do with 3,500+ expert-validated tests across every role — from
                coding and cognitive ability to personality and role-specific skills.
              </Reveal>
              <Reveal delay={0.14} className="flex items-center gap-3.5 flex-wrap mt-[30px]">
                <CtaButton
                  label="Try for free"
                  href={routes.pricing}
                  variant="primary"
                  size="md"
                  icon="arrow"
                  className="border-[1.5px] border-transparent"
                />
                <CtaButton label="Book a demo" href="#" variant="secondary" size="md" icon="play" className="ska-demo" />
              </Reveal>
              <Reveal delay={0.18} className="flex items-center gap-[13px] flex-wrap text-[13.5px] text-muted font-semibold mt-[26px]">
                <span className="inline-flex items-center gap-[7px]">
                  <span className="text-coral font-bold">&#10003;</span>7-day free trial
                </span>
                <span className="inline-flex items-center gap-[7px]">
                  <span className="text-coral font-bold">&#10003;</span>No credit card required
                </span>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="relative">
              <div className="absolute -top-3.5 right-[30px] bg-ink text-white text-[12.5px] font-semibold px-[15px] py-[9px] rounded-xl shadow-[0_16px_34px_rgba(26,16,20,0.30)] flex items-center gap-2 z-[4]">
                <span className="w-[7px] h-[7px] rounded-full bg-[#3DDC84] inline-block shadow-[0_0_0_4px_rgba(61,220,132,0.2)]" />
                412 r&eacute;sum&eacute;s &middot; ranked in under 2 min
              </div>
              <MockWindow bar="app.testlify.com/screening/senior-frontend">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[16px] leading-[1.25] font-bold tracking-[-0.4px] text-ink">Ranked shortlist</div>
                  <div className="text-[12px] leading-[1.66] text-body">Job-fit scoring &middot; role-specific criteria</div>
                </div>
                <CandidateRow
                  top
                  initials="AR"
                  gradient="linear-gradient(135deg,#F23F44,#FF7A52)"
                  name="Amelia Rao"
                  role="Senior Frontend Engineer · 7 yrs"
                  fit="hi"
                  fitLabel="HIGH FIT"
                  score="96"
                  scoreColor="#1F9D6B"
                />
                <CandidateRow
                  initials="DS"
                  gradient="linear-gradient(135deg,#6E62F2,#9A8BFF)"
                  name="Daniel Singh"
                  role="Frontend Engineer · 5 yrs"
                  fit="hi"
                  fitLabel="HIGH FIT"
                  score="91"
                  scoreColor="#1A1014"
                />
                <CandidateRow
                  initials="MK"
                  gradient="linear-gradient(135deg,#2AA6F2,#67C9FF)"
                  name="Mei Kawano"
                  role="UI Engineer · 6 yrs"
                  fit="md"
                  fitLabel="MEDIUM"
                  score="74"
                  scoreColor="#1A1014"
                />
                <CandidateRow
                  className="opacity-[.62]"
                  initials="JP"
                  gradient="linear-gradient(135deg,#B59A9D,#D9C7C9)"
                  name="James Park"
                  role="Web Developer · 4 yrs"
                  fit="lo"
                  fitLabel="LOW"
                  score="48"
                  scoreColor="#A9999C"
                />
              </MockWindow>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 2. THE OLD WAY (white) ============ */}
      <section className={SEC}>
        <div className={WRAP}>
          <div className="max-w-[660px] mx-auto mb-[52px] text-center">
            <Reveal as="p" className={EYEBROW}>
              The old way<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              R&eacute;sum&eacute;s are broken. Gut-feel hiring is outdated.
            </Reveal>
          </div>
          <div className="grid grid-cols-[1.02fr_1.05fr] gap-16 items-stretch max-[960px]:grid-cols-1 max-[960px]:gap-11">
            {/* Left — sand card: the pain */}
            <Reveal className="bg-sand border border-warm rounded-[20px] py-[38px] px-9">
              <p className="text-[16px] leading-[1.66] text-body m-0 mb-3.5">
                R&eacute;sum&eacute;s tell half the story, interviews are inconsistent, and manual screening slows
                everything down.
              </p>
              <p className="text-[16px] leading-[1.66] text-body m-0 mb-3.5">
                Recruiters waste hours screening r&eacute;sum&eacute;s that don&rsquo;t reflect actual skills — leading
                to mis-hires and overlooked top performers.
              </p>
              <p className="text-[16px] leading-[1.66] text-body m-0 mb-[26px]">
                Most platforms lean on generic, one-size-fits-all quizzes that never reflect real on-the-job scenarios.
              </p>
              <div className="flex flex-col gap-3">
                {["Biased hiring", "Lengthy interview process", "Lack of hiring data"].map((t) => (
                  <div key={t} className="flex gap-3 items-start">
                    <span className="flex-none w-6 h-6 rounded-[7px] bg-warm2 flex items-center justify-center mt-px">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9A878A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.66] text-muted font-semibold">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            {/* Right — dark card: the Testlify way */}
            <Reveal delay={0.08} className="bg-ink rounded-[20px] py-[38px] px-9">
              <h3 className="text-[22px] leading-[1.25] font-bold tracking-[-0.4px] text-white m-0 mb-[22px]">
                Hire smarter with Testlify&rsquo;s assessment &amp; interview tools
              </h3>
              <div className="flex flex-col gap-3.5">
                {[
                  "Identify top talent",
                  "Reduce mis-hires",
                  "Shorten time-to-hire by 55%",
                  "Bias-free, data-backed hiring decisions",
                  "Improve recruiter efficiency by 6x",
                  "Boost candidate satisfaction to 94%",
                ].map((t) => (
                  <div key={t} className="flex gap-3 items-start">
                    <span className="flex-none w-6 h-6 rounded-[7px] bg-[rgba(242,63,68,0.16)] flex items-center justify-center mt-px">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FF7A52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-[16px] leading-[1.66] text-[#F1E7E8]">{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 3. BENEFITS (sand) ============ */}
      <section className={`${SEC} bg-sand`}>
        <div className={WRAP}>
          <div className="max-w-[660px] mx-auto mb-[52px] text-center">
            <Reveal as="p" className={EYEBROW}>
              Why skills-based<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              Hire on proven ability, not guesswork
            </Reveal>
            <Reveal as="p" delay={0.08} className={`${LEAD} text-body m-0 mt-4`}>
              Measure the skills the role actually needs, standardise evaluation and make faster, evidence-based
              hiring decisions — across every role you hire for.
            </Reveal>
          </div>
          {/* reveal on the container so per-card hover lifts aren't blocked */}
          <Reveal className="grid grid-cols-4 gap-5 max-[960px]:grid-cols-2">
            {[
              {
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </>
                ),
                title: "Save time & effort",
                desc: "Automate screening and cut manual shortlisting by up to 70% — freeing recruiters for high-value hiring work.",
              },
              {
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                  </>
                ),
                title: "Hire the right candidates",
                desc: "Objective, skills-based scoring surfaces the candidates who can actually do the job — improving the quality of every shortlist.",
              },
              {
                icon: (
                  <>
                    <path d="M12 3v18" />
                    <path d="M5 7l7-2 7 2" />
                    <path d="M5 7l-2.5 6a4 4 0 0 0 5 0z" />
                    <path d="M19 7l2.5 6a4 4 0 0 1-5 0z" />
                  </>
                ),
                title: "Standardise & reduce bias",
                desc: "Apply consistent, role-specific criteria across every candidate and team for fair, objective evaluation.",
              },
              {
                icon: (
                  <>
                    <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
                    <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
                  </>
                ),
                title: "Seamless ATS integration",
                desc: "Match scores and assessment results sync straight back to your ATS for a fully automated workflow.",
              },
            ].map((b) => (
              <div key={b.title} className={`bg-white border border-[#F2E6E7] rounded-[18px] py-7 px-6 ${BCARD_HOVER}`}>
                <div className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {b.icon}
                  </svg>
                </div>
                <h3 className="text-[18px] leading-[1.25] font-bold tracking-[-0.4px] text-ink m-0 mb-[9px]">{b.title}</h3>
                <p className="text-[14.5px] leading-[1.66] text-body m-0">{b.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ 4. THREE STEPS (white) ============ */}
      <section className={SEC}>
        <div className={WRAP}>
          <div className="max-w-[640px] mx-auto mb-14 text-center">
            <Reveal as="p" className={EYEBROW}>
              How it works<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              From test to shortlist in three steps
            </Reveal>
            <Reveal as="p" delay={0.08} className={`${LEAD} text-body m-0 mt-4`}>
              Testlify turns skills testing into a quick, accurate, automated process — so you rank candidates on real
              ability, fast.
            </Reveal>
          </div>

          <div className="flex flex-col gap-16">
            {/* Step 1 */}
            <div className={SPLIT}>
              <Reveal>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <span className="flex-none inline-flex items-center justify-center w-[34px] h-[34px] rounded-[10px] bg-coral text-white font-extrabold text-[15px]">
                    1
                  </span>
                  <h3 className={H3}>Pick or build your assessment</h3>
                </div>
                <p className={"text-[17px] leading-[1.6] font-normal text-body m-0"}>
                  Choose from 3,500+ expert-validated tests across 4,500+ roles, or generate a custom assessment with
                  AI. Combine tests, set weights, timing and passing scores in minutes.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <MockWindow bar="Assessment results · Senior Frontend">
                  <CandidateRow
                    top
                    initials="AR"
                    gradient="linear-gradient(135deg,#F23F44,#FF7A52)"
                    name="Amelia Rao"
                    role="React · TypeScript · Accessibility"
                    fit="hi"
                    fitLabel="HIGH"
                    score="96"
                    scoreColor="#1F9D6B"
                  />
                  <CandidateRow
                    initials="MK"
                    gradient="linear-gradient(135deg,#2AA6F2,#67C9FF)"
                    name="Mei Kawano"
                    role="UI Engineer · 6 yrs"
                    fit="md"
                    fitLabel="MEDIUM"
                    score="74"
                    scoreColor="#1A1014"
                  />
                  <CandidateRow
                    className="mb-0"
                    initials="JP"
                    gradient="linear-gradient(135deg,#B59A9D,#D9C7C9)"
                    name="James Park"
                    role="Web Developer · 4 yrs"
                    fit="lo"
                    fitLabel="LOW"
                    score="48"
                    scoreColor="#A9999C"
                  />
                  <div className="mt-4 py-[13px] px-[15px] rounded-xl bg-[#FCF3F2] border border-[#F4E0E0] text-[12.5px] text-body leading-[1.5]">
                    <b className="text-coral">Why 96:</b> 7 yrs React, design-system rebuild in portfolio, open-source
                    a11y contributor.
                  </div>
                </MockWindow>
              </Reveal>
            </div>

            {/* Step 2 (media left, copy right on desktop) */}
            <div className={SPLIT}>
              <Reveal className="order-2">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <span className="flex-none inline-flex items-center justify-center w-[34px] h-[34px] rounded-[10px] bg-coral text-white font-extrabold text-[15px]">
                    2
                  </span>
                  <h3 className={H3}>Invite candidates at any scale</h3>
                </div>
                <p className={"text-[17px] leading-[1.6] font-normal text-body m-0"}>
                  Send a branded assessment link to one candidate or your whole pipeline. They take it on any device,
                  with proctoring and anti-cheating built in — no scheduling required.
                </p>
              </Reveal>
              <Reveal delay={0.08} className="order-1">
                <MockWindow bar="Automation rules · Senior Frontend">
                  <RuleRow ok tag="AUTO" tagClass="bg-[#EAF8F0] text-[#1F9D6B]">
                    If job-fit <b>&ge; 80</b> &rarr; invite to assessment
                  </RuleRow>
                  <RuleRow ok tag="AUTO" tagClass="bg-[#EAF8F0] text-[#1F9D6B]">
                    If <b>50&ndash;79</b> &rarr; send to reviewer queue
                  </RuleRow>
                  <RuleRow ok={false} tag="AUTO" tagClass="bg-[#F3EAEA] text-[#9A878A]" className="mb-0">
                    If <b>&lt; 50</b> &rarr; reject with feedback
                  </RuleRow>
                </MockWindow>
              </Reveal>
            </div>

            {/* Step 3 */}
            <div className={SPLIT}>
              <Reveal>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <span className="flex-none inline-flex items-center justify-center w-[34px] h-[34px] rounded-[10px] bg-coral text-white font-extrabold text-[15px]">
                    3
                  </span>
                  <h3 className={H3}>Auto-scored results, synced to your ATS</h3>
                </div>
                <p className={"text-[17px] leading-[1.6] font-normal text-body m-0"}>
                  Every submission is scored instantly with per-skill breakdowns and benchmarks. Ranked results and
                  reports flow back to your ATS automatically — a single view of candidate ability where your team
                  already works.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <MockWindow bar="Sync log · Greenhouse" bodyClassName="py-2">
                  <SyncRow
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2">
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                    }
                    title="Assessment scores pushed to Greenhouse"
                    sub="318 candidates · 09:16"
                    tag="SYNCED"
                  />
                  <SyncRow
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                      </svg>
                    }
                    title="Assessment results attached"
                    sub="Complete candidate profile · 09:18"
                    tag="SYNCED"
                  />
                  <SyncRow
                    last
                    icon={
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
                        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
                      </svg>
                    }
                    title="Two-way connection live"
                    sub="No middleware · no data mapping"
                    tag="ON"
                  />
                </MockWindow>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. TEST LIBRARY (sand) ============ */}
      <SplitFeature
        sand
        eyebrow="Test library"
        heading="Test real-world skills, not résumés"
        lead="Build role-specific assessments in minutes from our validated library, or customise your own to fit any role — from engineering to sales and beyond."
        points={[
          "3,500+ ready-to-use tests across 4,500+ job roles",
          "Audio and video interview tools built in",
          "Scientifically designed and validated by subject-matter experts",
          "Multi-language support in 16+ languages with custom branding",
          "13+ advanced anti-cheating and proctoring features",
        ]}
        bar="Assessment library"
        slotLabel="Test library / assessment builder screenshot"
      />

      {/* ============ 6. REAL-WORLD SIMULATIONS (white) ============ */}
      <SplitFeature
        reverse
        eyebrow="Real-world simulations"
        heading="Test both hard and soft skills in real-world scenarios"
        lead="With Testlify's job-specific simulations, you see how candidates actually perform before you make a hire."
        points={[
          "Interactive, role-based tasks that mirror real job responsibilities",
          "Live coding tests in 45+ programming languages",
          "Simulations using Microsoft Excel, Google Sheets, Word and G-Suite tools",
          "Communication and problem-solving evaluations tailored to each role",
          "Instant scoring and detailed reports to benchmark performance",
        ]}
        bar="Live coding simulation"
        slotLabel="Coding / Excel simulation screenshot"
      />

      {/* ============ 7. AI INTERVIEWS (sand) ============ */}
      <SplitFeature
        sand
        eyebrow="AI interviews"
        heading="Smarter interviews. Less effort. More insight."
        lead="Testlify offers one-way and two-way interviewing powered by AI — assess communication, confidence and critical thinking at scale."
        points={[
          "AI video interviews with dynamic, job-relevant questions",
          "Two-way live interviews to connect with candidates in-platform",
          "Bulk audio screening to evaluate large candidate volumes fast",
          "One-way async responses to screen candidates without scheduling",
          "Recordings and insights auto-saved and shareable for collaborative decisions",
        ]}
        bar="AI interview · review"
        slotLabel="AI video interview screenshot"
      />

      {/* ============ 8. DARK BAND ============ */}
      <section className={`${SEC} bg-ink text-[#F1E7E8]`}>
        <div className={WRAP}>
          <div className={SPLIT}>
            <Reveal>
              <p className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-[#C9A9AB] m-0 mb-[18px]">
                Built for your workflow<b className="text-coral-bright font-semibold">.</b>
              </p>
              <h2 className={`${H2} text-white mb-5`}>Need a custom assessment for your roles?</h2>
              <p className={`${LEAD} text-[#D3C3C6] m-0 mb-7`}>
                Talk to our team to build role-specific assessments mapped to the exact skills you hire for — backed
                by expert validation and built to scale with your team.
              </p>
              <CtaButton label="Talk to sales" href="#" variant="light" size="md" icon="arrow" className="border-[1.5px] border-transparent" />
            </Reveal>
            <Reveal delay={0.08} className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: (
                    <>
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M17 7h4v4" />
                    </>
                  ),
                  title: "Validated test library",
                  desc: "3,500+ expert-built tests across 4,500+ roles — or create your own with AI.",
                },
                {
                  icon: (
                    <>
                      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
                      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
                    </>
                  ),
                  title: "Seamless ATS integration",
                  desc: "Match scores and assessment results sync automatically, keeping your hiring workflow smooth.",
                },
                {
                  icon: (
                    <>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </>
                  ),
                  title: "Expert support",
                  desc: "We guide implementation, provide training and ensure adoption across your teams.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-[#241417] border border-[#3A2529] rounded-2xl p-6 [transition:translate_.3s_cubic-bezier(.2,.7,.3,1),border-color_.3s] hover:-translate-y-1 hover:border-coral"
                >
                  <div className="flex gap-4 items-start">
                    <span className="flex-none w-11 h-11 rounded-xl bg-[rgba(242,63,68,0.14)] text-coral-bright flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {v.icon}
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-[17px] leading-[1.25] font-bold tracking-[-0.4px] m-0 mb-1.5 text-white">{v.title}</h3>
                      <p className="text-[14px] leading-[1.66] text-[#C2B1B4] m-0">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 9. INTEGRATIONS (sand) ============ */}
      <section className={`${SEC} bg-sand`}>
        <div className={WRAP}>
          <div className="text-center max-w-[680px] mx-auto mb-11">
            <Reveal as="p" className={EYEBROW}>
              Integrations<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.06} className={`${H2} text-ink`}>
              Connected to 100+ ATS tools
            </Reveal>
            <Reveal as="p" delay={0.12} className={`${LEAD} text-body m-0 mt-3.5`}>
              Native two-way sync with Workday, Greenhouse, Lever and 97 more — no middleware, no data mapping.
            </Reveal>
          </div>
          <Reveal delay={0.16} className="grid grid-cols-5 gap-3.5 max-[960px]:grid-cols-3">
            {INTG_LOGOS.map(([src, alt]) => (
              <div
                key={alt}
                className={`flex items-center justify-center h-[88px] bg-white border border-[#F2E6E7] rounded-2xl py-4 px-5 ${TILE_HOVER}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="max-w-full max-h-10 object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="text-center mt-[26px]">
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]">
              View all integrations<span>&rarr;</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ 10. SECURITY + FAQ ============ */}
      <SecuritySection
        eyebrow="Security & compliance"
        heading="Built to keep your organisation secure"
        sub="Top-tier admin controls, strong data governance and comprehensive compliance audits — your recruitment data stays protected and EEOC-defensible at every step."
      />

      <section className={`${SEC} bg-sand`}>
        <div className="max-w-[840px] mx-auto px-7">
          <div className="text-center mb-11">
            <Reveal as="p" className={EYEBROW}>
              FAQ<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
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
