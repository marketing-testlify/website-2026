import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Recruitment assessment tool",
  description:
    "Every applicant gets tested. You get a ranked shortlist. Skip the CV pile and go straight to candidates who can prove they can do the job.",
};

/* ---------- data (verbatim from the prototype logic class) ---------- */

const FAQ_ITEMS = [
  {
    q: "What is a recruitment assessment tool?",
    a: "A recruitment assessment tool helps employers evaluate candidates' skills, aptitude, and job readiness before interviews. It provides objective data so you can identify the most qualified candidates faster and make more confident hiring decisions.",
  },
  {
    q: "How is a recruitment skills test different from a traditional interview?",
    a: "A recruitment skills test measures what candidates can actually do, while interviews primarily assess communication and experience. Skills tests provide objective, comparable results, helping you shortlist candidates based on ability rather than impressions.",
  },
  {
    q: "How quickly can I set up and send my first assessment?",
    a: "You can create and send your first assessment in minutes using Testlify's ready-made test library or customize one to match your hiring needs — no technical expertise required.",
  },
  {
    q: "Does Testlify integrate with Workday, Greenhouse, or iCIMS?",
    a: "Yes. Testlify integrates with leading ATS platforms, including Workday, Greenhouse, iCIMS, Lever, SmartRecruiters, and many others, making it easy to fit into your existing hiring workflow.",
  },
  {
    q: "Is the pre-employment testing legally defensible and bias-free?",
    a: "Testlify is designed to support fair, skills-based hiring. Our assessments focus on job-relevant competencies, helping reduce unconscious bias and promote more consistent hiring decisions.",
  },
  {
    q: "Can I use Testlify for high-volume recruitment?",
    a: "Absolutely. Testlify is built to handle high-volume hiring, allowing you to assess thousands of candidates simultaneously while automatically ranking results to speed up screening.",
  },
  {
    q: "What does a “good” score look like on a candidate's assessment?",
    a: "There's no universal passing score. The right benchmark depends on the role, required skills, and your hiring criteria. Testlify helps you compare candidates and identify top performers based on your requirements.",
  },
  {
    q: "How much does Testlify cost? Is there a free plan?",
    a: "Testlify offers flexible pricing for businesses of all sizes, along with a free trial so you can explore the platform before choosing a plan. Contact our team for custom enterprise pricing.",
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

/* ---------- small inline icons ---------- */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0 text-balance">
      {children}
      <b className="text-coral">.</b>
    </p>
  );
}

function Check({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ---------- page ---------- */

export default function RecruitmentIndustryPage() {
  return (
    <>
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      {/* Hero */}
      <section
        className="py-[74px] pb-[92px] pt-[74px]"
        style={{ background: "radial-gradient(1100px 520px at 82% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff" }}
      >
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-[1.02fr_1.02fr] gap-[56px] items-center">
          <div>
            <Reveal as="p" delay={0.02} className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#8A7A7D] m-0 text-balance">
              For recruitment teams<b className="text-coral">.</b>
            </Reveal>
            <Reveal as="h1" delay={0.08} className="text-[38px] md:text-[52px] font-extrabold tracking-[-1px] md:tracking-[-1.6px] leading-[1.08] mt-4 text-balance">
              Recruitment assessment tool that turns applicants into a <span className="text-coral">ranked shortlist</span>
            </Reveal>
            <Reveal as="p" delay={0.14} className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-5 text-pretty">
              Every applicant gets tested. You get a ranked shortlist. Skip the CV pile and go straight to candidates who can prove they can do the job.
            </Reveal>
            <Reveal delay={0.2} className="flex gap-[14px] flex-wrap mt-7">
              <CtaButton label="Try for free" href={routes.pricing} variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a demo" href={routes.contact} variant="secondary" size="md" icon="play" />
            </Reveal>
            <Reveal delay={0.26} className="flex items-center gap-[18px] flex-nowrap mt-7 flex-wrap">
              <span className="inline-flex items-center gap-[7px] text-[14px] text-[#8A7A7D] font-medium whitespace-nowrap">
                <i className="text-coral font-bold text-[15px] not-italic">✓</i>
                <b className="text-ink font-extrabold">3,500+</b> ready-made tests
              </span>
              <span className="w-px h-4 bg-[#E8D8DA]" aria-hidden="true" />
              <span className="inline-flex items-center gap-[7px] text-[14px] text-[#8A7A7D] font-medium whitespace-nowrap">
                <i className="text-coral font-bold text-[15px] not-italic">✓</i>
                <b className="text-ink font-extrabold">4,500+</b> roles covered
              </span>
              <span className="w-px h-4 bg-[#E8D8DA]" aria-hidden="true" />
              <span className="inline-flex items-center gap-[7px] text-[14px] text-[#8A7A7D] font-medium whitespace-nowrap">
                <i className="text-coral font-bold text-[15px] not-italic">✓</i>
                <b className="text-ink font-extrabold">100+</b> ATS integrations
              </span>
            </Reveal>
          </div>

          {/* compare card */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1.12fr] items-stretch bg-white border border-[#F0E2E3] rounded-[22px] shadow-[0_40px_90px_rgba(110,11,14,0.15)] overflow-hidden">
              <div className="p-5 px-[18px] bg-[#FCF8F7]">
                <div className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-[#A9999C] mb-[14px]">Without Testlify</div>
                {[
                  { nm: "Alex M.", m: "3 yrs exp · BSc Comp Sci" },
                  { nm: "Priya S.", m: "5 yrs exp · Self-taught" },
                  { nm: "Ravi K.", m: "2 yrs exp · Top uni" },
                ].map((r) => (
                  <div key={r.nm} className="flex items-center gap-[10px] py-[10px] border-b border-dashed border-[#EFE1E2] last:border-b-0">
                    <span className="w-[30px] h-[30px] rounded-[7px] bg-[#F1E2E2] text-[#8A7A7D] text-[10px] font-extrabold flex items-center justify-center shrink-0">CV</span>
                    <span>
                      <span className="text-[13px] font-bold text-ink block leading-[1.3]">{r.nm}</span>
                      <span className="text-[11px] text-[#8A7A7D] block leading-[1.3]">{r.m}</span>
                    </span>
                    <span className="ml-auto text-[10.5px] font-bold text-[#B98A2E] bg-[#FBF0DC] px-[9px] py-[3px] rounded-full shrink-0">Maybe?</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center w-full sm:w-[44px] h-10 sm:h-auto bg-[#FCF8F7] text-[#C9B9BC] text-[20px] font-extrabold">→</div>
              <div className="p-5 px-[18px] border-t sm:border-t-0 sm:border-l border-[#F4E9E9]">
                <div className="text-[11.5px] font-bold tracking-[0.04em] uppercase text-[#1FA463] mb-[14px]">With Testlify — ranked by skills</div>
                {[
                  { av: "PS", role: "Frontend Engineer", nm: "Priya S.", score: "94%", cls: "", pick: true },
                  { av: "RK", role: "Frontend Engineer", nm: "Ravi K.", score: "71%", cls: "c", pick: false },
                  { av: "AM", role: "Frontend Engineer", nm: "Alex M.", score: "55%", cls: "b", pick: false },
                ].map((r) => (
                  <div key={r.av} className="flex items-center gap-[10px] py-[10px] border-b border-[#F4ECEC] last:border-b-0">
                    <span
                      className="w-[30px] h-[30px] rounded-full text-white text-[11px] font-extrabold flex items-center justify-center shrink-0"
                      style={{
                        background:
                          r.cls === "b"
                            ? "linear-gradient(135deg,#6E62F2,#9A8BFF)"
                            : r.cls === "c"
                            ? "linear-gradient(135deg,#2AA6F2,#67C9FF)"
                            : "linear-gradient(135deg,#FF7A52,#F23F44)",
                      }}
                    >
                      {r.av}
                    </span>
                    <span>
                      <span className="text-[13px] font-bold text-ink block leading-[1.3]">{r.nm}</span>
                      <span className="text-[11px] text-[#8A7A7D] block leading-[1.3]">{r.role}</span>
                    </span>
                    <span className="ml-auto text-[14px] font-extrabold text-ink shrink-0 tabular-nums">{r.score}</span>
                    {r.pick && <span className="text-[10px] font-bold text-[#1FA463] bg-[#E8F6EE] px-2 py-[3px] rounded-full shrink-0">Top pick</span>}
                  </div>
                ))}
                <div className="mt-[14px] text-[12.5px] font-bold text-[#1FA463] text-center">↓ Shortlist ready in hours</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat band */}
      <section className="bg-[#FBF3EE] py-11">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="grid grid-cols-2 md:grid-cols-3 gap-y-8">
            {[
              { n: "4.8", u: "/5", l: "G2 rating across 538 verified reviews" },
              { n: "3,500", u: "+", l: "pre-built assessments for every role, ready to send" },
              { n: "4,500", u: "+", l: "roles covered by our employment assessments library" },
            ].map((s, i) => (
              <div key={s.l} className={`text-center px-[26px] py-[6px] ${i > 0 ? "md:border-l md:border-[#EFE3E4]" : ""}`}>
                <div className="text-[34px] font-bold tracking-[-1px] leading-none text-ink tabular-nums">
                  {s.n}
                  <span className="text-[#D98C8F] font-semibold">{s.u}</span>
                </div>
                <div className="text-[14px] text-[#6C5A5D] font-medium mt-3 leading-[1.45]">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Problem vs */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="max-w-[820px] mx-auto mb-12 text-center">
            <Eyebrow>The screening tax</Eyebrow>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.9px] leading-[1.16] mt-[14px] text-balance">
              You&apos;re spending 60% of recruiter time on people you&apos;ll never hire
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-4 text-pretty">
              CV screening, scheduling calls, interviewing candidates who sounded good on paper. It&apos;s the most expensive part of recruitment. Assessment tools for recruitment and selection eliminate it.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[24px] px-8 py-9 bg-transparent border border-transparent">
              <div className="flex items-center gap-3 mb-[22px]">
                <span className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-base font-bold shrink-0 bg-[#F0E4E5] text-[#8A7A7D]">✕</span>
                <span className="text-[13px] font-bold tracking-[0.04em] uppercase text-[#8A7A7D]">Traditional candidate screening</span>
              </div>
              {[
                "Hundreds of CVs with no comparable signal on actual ability.",
                "Strong candidates drop off while phone-screen scheduling drags for weeks.",
                "Every recruiter and hiring manager runs a different gut-feel filter.",
                "Interviews reward confident talkers, not proven performers.",
                "Bad hires cost $15,000–$50,000 each by the time they're out the door.",
              ].map((t) => (
                <div key={t} className="flex gap-[13px] items-start text-[15.5px] leading-[1.45] py-[13px] border-t border-[#F1E2E3] text-[#46383C] first:border-t-0">
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] shrink-0 mt-px bg-[#EADDDE] text-[#8A7A7D]">✕</span>
                  {t}
                </div>
              ))}
            </div>
            <div
              className="relative rounded-[24px] px-8 py-9 border-[1.5px] border-[#F7B4B6]"
              style={{
                background: "linear-gradient(160deg,#FFF0F0,#FFF8F6)",
                boxShadow: "0 24px 50px rgba(242,63,68,.18),0 0 0 4px rgba(242,63,68,.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-[22px]">
                <span className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-base font-bold shrink-0 bg-coral text-white">✓</span>
                <span className="text-[13px] font-bold tracking-[0.04em] uppercase text-coral">Skills-based hiring with Testlify</span>
              </div>
              {[
                "Pre-employment skills tests rank every candidate on the same objective criteria.",
                "Auto-scored assessments turn a full inbox into a ranked shortlist in hours, not weeks.",
                "One consistent evaluation bar across every recruiter and every role.",
                "Competency-based scores surface real ability before the first interview call.",
                "Documented, defensible decisions you can stand behind with any stakeholder.",
              ].map((t) => (
                <div key={t} className="flex gap-[13px] items-start text-[15.5px] leading-[1.45] py-[13px] border-t border-[#F1E2E3] text-[#46383C] first:border-t-0">
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] shrink-0 mt-px bg-coral text-white">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use-case cards */}
      <section className="bg-[#FBF3EE] py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto mb-[52px]">
            <Eyebrow>Every workflow</Eyebrow>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.9px] leading-[1.16] mt-[14px] text-balance">
              Every recruiter uses it differently. The outcome is the same
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-4 text-pretty">
              Whether you&apos;re drowning in applications, running a high-volume campaign, or defending every shortlist decision to a hiring manager — Testlify&apos;s recruitment assessment tool gives you objective data where you had gut feel.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" /></svg>
                ),
                t: "High-volume intake hiring",
                d: "200 applicants for one role. You need 10 interviews by Friday. One assessment link, auto-scored overnight, ranked list in the morning.",
                b: ["Send to all applicants in one click via your ATS", "Ranked shortlist ready before your next standup", "No manual sifting, no scheduling 40 phone screens"],
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                ),
                t: "Recruitment agencies & RPO",
                d: "Your clients measure you on shortlist quality and speed. Deliver skills-verified, scored candidate profiles — not CVs with a cover note.",
                b: ["Pre-employment testing built into your delivery workflow", "Reduce time-to-present without reducing quality", "White-label the candidate assessment experience"],
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                ),
                t: "Lean TA teams & growing companies",
                d: "No dedicated HR team. One person making five hires this quarter. The online assessment tool that has you live in 10 minutes, free to start.",
                b: ["Pick from 3,500+ pre-built employment assessments", "Send a link — candidates complete on any device", "Free plan available, no commitment to start"],
              },
            ].map((c) => (
              <div key={c.t} className="bg-white border border-[#F0E2E3] rounded-[18px] px-7 py-[30px] shadow-[0_16px_30px_rgba(110,11,14,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_22px_44px_rgba(110,11,14,0.12)]">
                <div className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[18px]">{c.icon}</div>
                <p className="text-[18px] font-bold m-0 mb-2 tracking-[-0.3px]">{c.t}</p>
                <p className="text-[14px] leading-[1.6] text-[#6C5A5D] m-0 mb-4">{c.d}</p>
                <div className="flex flex-col gap-[9px] border-t border-[#F4ECEC] pt-4">
                  {c.b.map((bi) => (
                    <div key={bi} className="flex gap-[9px] items-start text-[13.5px] leading-[1.45] text-[#46383C]">
                      <span className="shrink-0 mt-[2px] text-[#1FA463]"><Check size={15} /></span>
                      {bi}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Low drop-off stat band */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto mb-[52px]">
            <Eyebrow>Low drop-off</Eyebrow>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.9px] leading-[1.16] mt-[14px] text-balance">
              Short enough that candidates actually complete it
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-4 text-pretty">
              The biggest fear with online assessment tools for recruitment is drop-off. Here&apos;s why it doesn&apos;t happen with Testlify.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
            {[
              { n: "15", u: " min", l: "Average time to complete a skills assessment test" },
              { n: "78", u: "%", l: "Average candidate completion rate" },
              { n: "Any device", u: "", l: "No app, no account — mobile or desktop" },
              { n: "30", u: "+", l: "Multilingual: candidates assessed in their own language" },
            ].map((s, i) => (
              <div key={s.l} className={`text-center px-[26px] py-[6px] ${i > 0 ? "lg:border-l lg:border-[#EFE3E4]" : ""}`}>
                <div className="text-[34px] font-bold tracking-[-1px] leading-none text-ink tabular-nums">
                  {s.n}
                  <span className="text-[#D98C8F] font-semibold">{s.u}</span>
                </div>
                <div className="text-[14px] text-[#6C5A5D] font-medium mt-3 leading-[1.45]">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What actually changes — benefit rows */}
      <section className="bg-[#FBF3EE] py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto mb-[52px]">
            <Eyebrow>What actually changes</Eyebrow>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.9px] leading-[1.16] mt-[14px] text-balance">
              Three things that get measurably better with the right recruitment assessment tool
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-4 text-pretty">
              Not a product tour. A description of the three most expensive problems in your current recruitment process — and exactly what changes.
            </p>
          </Reveal>

          {/* Row 1 */}
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.06fr] gap-[56px] items-center mt-[52px]">
            <div>
              <h3 className="text-[26px] font-extrabold tracking-[-0.6px] leading-[1.2] m-0">You open a ranked list of 10, not 200 unfiltered applications</h3>
              <div className="flex flex-col gap-3 mt-[22px]">
                {["Auto-scored the moment a candidate submits", "Ranked by fit, not by who applied first", "Top performers flagged automatically"].map((b) => (
                  <div key={b} className="flex gap-[11px] items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                    <span className="shrink-0 mt-[3px] text-[#1FA463]"><Check size={16} /></span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#F0E2E3] rounded-[18px] shadow-[0_30px_60px_rgba(110,11,14,0.12)] overflow-hidden">
              <div className="px-[18px] py-[14px] border-b border-[#F4ECEC] bg-[#FCF8F7] text-[12.5px] font-bold text-[#6C5A5D] flex items-center justify-between">
                <span>Senior Product Manager · 22 candidates</span>
                <span className="text-[#A9999C] font-semibold">↓ Score</span>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {["Candidate", "Score", "Percentile", "Action"].map((h) => (
                      <th key={h} className="text-[11px] font-bold text-[#A9999C] uppercase tracking-[0.05em] text-left px-[18px] pt-3 pb-[10px]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { av: "PR", cls: "", nm: "Priya Ramanathan", sub: "Completed 2h ago", sc: "94%", pct: "Top 4%", act: "Shortlist", g: false },
                    { av: "DL", cls: "b", nm: "David Lim", sub: "Completed 4h ago", sc: "87%", pct: "Top 11%", act: "Review", g: true },
                    { av: "SK", cls: "c", nm: "Sara Kowalski", sub: "Completed 6h ago", sc: "79%", pct: "Top 19%", act: "Review", g: true },
                  ].map((r) => (
                    <tr key={r.av}>
                      <td className="px-[18px] py-3 border-t border-[#F4ECEC] text-[13px] text-[#46383C]">
                        <div className="flex items-center gap-[10px]">
                          <span
                            className="w-[30px] h-[30px] rounded-full text-white text-[11px] font-extrabold flex items-center justify-center shrink-0"
                            style={{
                              background:
                                r.cls === "b"
                                  ? "linear-gradient(135deg,#6E62F2,#9A8BFF)"
                                  : r.cls === "c"
                                  ? "linear-gradient(135deg,#2AA6F2,#67C9FF)"
                                  : "linear-gradient(135deg,#FF7A52,#F23F44)",
                            }}
                          >
                            {r.av}
                          </span>
                          <span>
                            <span className="font-bold text-ink block leading-[1.3]">{r.nm}</span>
                            <span className="text-[11px] text-[#A9999C] block">{r.sub}</span>
                          </span>
                        </div>
                      </td>
                      <td className="px-[18px] py-3 border-t border-[#F4ECEC] font-extrabold text-ink">{r.sc}</td>
                      <td className="px-[18px] py-3 border-t border-[#F4ECEC]"><span className="text-[11px] font-bold text-[#1FA463] bg-[#E8F6EE] px-2 py-[3px] rounded-full">{r.pct}</span></td>
                      <td className={`px-[18px] py-3 border-t border-[#F4ECEC] text-[12px] font-bold ${r.g ? "text-[#8A7A7D]" : "text-coral"}`}>{r.act}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Row 2 (flip) */}
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.06fr] gap-[56px] items-center mt-[70px]">
            <div className="lg:order-2">
              <h3 className="text-[26px] font-extrabold tracking-[-0.6px] leading-[1.2] m-0">Every interview is with someone you already know can do the job</h3>
              <div className="flex flex-col gap-3 mt-[22px]">
                {["Per-skill breakdown visible before you call", "AI-generated follow-up questions from their gaps", "Candidate report ready for the debrief"].map((b) => (
                  <div key={b} className="flex gap-[11px] items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                    <span className="shrink-0 mt-[3px] text-[#1FA463]"><Check size={16} /></span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-1 bg-white border border-[#F0E2E3] rounded-[18px] shadow-[0_30px_60px_rgba(110,11,14,0.12)] overflow-hidden">
              <div className="px-[18px] py-[14px] border-b border-[#F4ECEC] bg-[#FCF8F7] text-[12.5px] font-bold text-[#6C5A5D] flex items-center justify-between">
                <span>Priya Ramanathan · Result summary</span>
                <span className="text-[#A9999C] font-semibold">Senior PM · Top 4%</span>
              </div>
              <div className="px-6 py-[22px]">
                <div className="flex justify-between items-baseline mb-[6px]">
                  <span className="text-[14px] font-bold text-ink">Overall score</span>
                  <span className="text-[12px] text-[#8A7A7D] font-semibold">across every skill the role needs</span>
                </div>
                <div className="text-[44px] font-extrabold tracking-[-1.5px] text-coral leading-none mt-[2px] mb-[18px]">94%</div>
                {[
                  { l: "Product thinking", w: "96%", v: "96" },
                  { l: "Stakeholder management", w: "91%", v: "91" },
                  { l: "Data analysis", w: "72%", v: "72" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-3 mb-[13px]">
                    <span className="text-[12.5px] font-semibold text-[#46383C] w-[150px] shrink-0">{s.l}</span>
                    <span className="flex-1 h-2 rounded-[6px] bg-[#F4E7E8] overflow-hidden">
                      <i className="block h-full rounded-[6px]" style={{ background: "linear-gradient(90deg,#FF7A52,#F23F44)", width: s.w }} />
                    </span>
                    <span className="text-[12.5px] font-extrabold text-ink w-[30px] text-right shrink-0">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Row 3 */}
          <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.06fr] gap-[56px] items-center mt-[70px]">
            <div>
              <h3 className="text-[26px] font-extrabold tracking-[-0.6px] leading-[1.2] m-0">Every rejection has a timestamped, auditable reason behind it</h3>
              <div className="flex flex-col gap-3 mt-[22px]">
                {["Timestamped, auditable record for every candidate", "Psychometrically validated, bias-audited scoring", "SOC 2 Type II, GDPR & ISO 27001 compliant"].map((b) => (
                  <div key={b} className="flex gap-[11px] items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
                    <span className="shrink-0 mt-[3px] text-[#1FA463]"><Check size={16} /></span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#F0E2E3] rounded-[18px] shadow-[0_30px_60px_rgba(110,11,14,0.12)] overflow-hidden">
              <div className="px-[18px] py-[14px] border-b border-[#F4ECEC] bg-[#FCF8F7] text-[12.5px] font-bold text-[#6C5A5D] flex items-center justify-between">
                <span>Assessment integrity · Audit log</span>
              </div>
              <div className="px-[22px] py-5">
                <div className="flex gap-[7px] flex-wrap mb-4">
                  {["SOC 2 Type II", "GDPR", "ISO 27001", "EEO-compliant"].map((b) => (
                    <span key={b} className="text-[10.5px] font-bold text-[#1A6B44] bg-[#E8F6EE] border border-[#C7E9D5] px-[10px] py-1 rounded-full">{b}</span>
                  ))}
                </div>
                {[
                  { t: "Assessment completed", s: "Priya R. · Jun 12 at 2:34 PM · 18 min duration" },
                  { t: "Score calculated & ranked", s: "Objective criteria · No human intervention" },
                  { t: "Shortlist decision logged", s: "Criteria: score ≥ 80% · Advanced to interview stage" },
                  { t: "Adverse impact report generated", s: "Gender, age & ethnicity parity check · Passed" },
                ].map((a) => (
                  <div key={a.t} className="flex gap-3 py-3 border-t border-[#F4ECEC] first:border-t-0">
                    <span className="w-[9px] h-[9px] rounded-full bg-[#1FA463] mt-[5px] shrink-0" />
                    <span>
                      <span className="text-[13px] font-bold text-ink block leading-[1.35]">{a.t}</span>
                      <span className="text-[11.5px] text-[#8A7A7D] block mt-px">{a.s}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dark testimonial */}
      <section className="bg-[#1A1014] text-white py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal as="p" className="text-[13px] font-bold tracking-[0.16em] uppercase text-center text-[#C9B9BC] m-0 text-balance">
            What teams say<b className="text-coral">.</b>
          </Reveal>
          <Reveal as="p" className="text-[24px] leading-[1.5] font-semibold text-white max-w-[900px] mx-auto mt-[22px] text-center text-pretty">
            &quot;We were spending 60% of recruiter time on screening calls that told us nothing a skills test couldn&apos;t have. Testlify cut that to near zero. Our shortlists are faster, and the people we interview are genuinely strong — not just confident on paper.&quot;
          </Reveal>
          <Reveal className="text-center mt-6">
            <b className="block text-white font-bold text-[15px]">Head of Talent</b>
            <span className="text-[#A9999C] text-[13.5px]">Logistics Company</span>
          </Reveal>
          <Reveal className="grid grid-cols-1 md:grid-cols-3 max-w-[720px] mx-auto mt-12 gap-y-8">
            {[
              { n: "80", u: "%", l: "faster time-to-shortlist" },
              { n: "3", u: "×", l: "faster time-to-hire" },
              { n: "40", u: "%", l: "lower 90-day attrition" },
            ].map((s, i) => (
              <div key={s.l} className={`text-center px-[22px] py-1 ${i > 0 ? "md:border-l md:border-white/[0.14]" : ""}`}>
                <div className="text-[42px] font-extrabold tracking-[-1.4px] leading-none text-white tabular-nums">
                  {s.n}
                  <span className="text-[#FF9E7A]">{s.u}</span>
                </div>
                <div className="text-[13.5px] text-[#C9B9BC] font-medium mt-3 leading-[1.45]">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-[#FBF3EE] py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto mb-[52px]">
            <Eyebrow>Integrations</Eyebrow>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.9px] leading-[1.16] mt-[14px] text-balance">
              Testlify integrates seamlessly with 100+ ATS tools
            </h2>
            <p className="text-[17.5px] leading-[1.6] text-[#5A4B4E] mt-4 text-pretty">
              Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-11">
            {ATS.map((logo) => (
              <div key={logo.alt} className="bg-white border border-[#F0E2E3] rounded-[14px] h-[84px] flex items-center justify-center p-[18px] shadow-[0_10px_22px_rgba(110,11,14,0.06)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_34px_rgba(110,11,14,0.10)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="max-w-full max-h-[38px] object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal className="text-center mt-[34px]">
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-coral font-bold text-[15.5px]">
              View all ATS integrations
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[760px] mx-auto mb-[52px]">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-[27px] md:text-[34px] font-extrabold tracking-[-0.9px] leading-[1.16] mt-[14px] text-balance">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="max-w-[820px] mx-auto">
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
