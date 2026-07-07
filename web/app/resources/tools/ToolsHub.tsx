"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

type Kind = "all" | "calc" | "gen";

type Tool = {
  slug: string;
  title: string;
  tag: string;
  kind: "calc" | "gen";
  desc: string;
  cta: string;
};

/* Verbatim from the prototype logic class (TOOLS array), plus a route slug. */
const TOOLS: Tool[] = [
  { slug: "cost-per-hire-calculator", title: "Cost per hire calculator", tag: "Calculator", kind: "calc", desc: "Add up every recruiting cost from job posting to onboarding and get your true cost per hire.", cta: "Calculate" },
  { slug: "time-to-hire-calculator", title: "Time to hire calculator", tag: "Calculator", kind: "calc", desc: "Measure the average days from a role opening to an accepted offer, and spot the bottlenecks.", cta: "Calculate" },
  { slug: "quality-of-hire-calculator", title: "Quality of hire calculator", tag: "Calculator", kind: "calc", desc: "Score new hires on performance and retention to prove the value each one adds.", cta: "Calculate" },
  { slug: "attrition-rate-calculator", title: "Attrition rate calculator", tag: "Calculator", kind: "calc", desc: "Track the percentage of employees leaving over any time frame to catch turnover early.", cta: "Calculate" },
  { slug: "enps-calculator", title: "eNPS calculator", tag: "Calculator", kind: "calc", desc: "Measure employee satisfaction and engagement to gauge workplace morale at a glance.", cta: "Calculate" },
  { slug: "applicant-funnel-calculator", title: "Applicant funnel calculator", tag: "Calculator", kind: "calc", desc: "See candidate progress through each stage and optimise your conversion rates.", cta: "Calculate" },
  { slug: "offer-acceptance-rate-calculator", title: "Offer acceptance rate calculator", tag: "Calculator", kind: "calc", desc: "Measure the percentage of candidates who accept your offers and improve close rates.", cta: "Calculate" },
  { slug: "sourcing-channel-efficiency", title: "Sourcing channel efficiency", tag: "Calculator", kind: "calc", desc: "Find which recruitment channels bring in the highest-quality candidates for the spend.", cta: "Calculate" },
  { slug: "recruiting-conversion-rate", title: "Recruiting conversion rate", tag: "Calculator", kind: "calc", desc: "Track how effectively candidates move through each step of your hiring pipeline.", cta: "Calculate" },
  { slug: "ai-job-description-generator", title: "AI job description generator", tag: "Generator", kind: "gen", desc: "Create detailed, inclusive job listings in seconds with the right keywords and responsibilities.", cta: "Generate" },
  { slug: "interview-question-generator", title: "Interview question generator", tag: "Generator", kind: "gen", desc: "Get structured, scorable questions mapped to the exact skills a role requires.", cta: "Generate" },
  { slug: "interview-scorecard-builder", title: "Interview scorecard builder", tag: "Generator", kind: "gen", desc: "Build a consistent rating scale and scorecard so every candidate is judged the same way.", cta: "Build" },
];

const TITLE_MAP: Record<Kind, string> = {
  all: "All HR tools",
  calc: "HR calculators",
  gen: "Generators & builders",
};
const INTRO_MAP: Record<Kind, string> = {
  all: "Every free calculator, generator and template in one place. Pick a tool and get an answer in under a minute.",
  calc: "Plug in your numbers and benchmark the metrics that decide how fast and how well you hire.",
  gen: "Generate role-ready job descriptions, interview kits and scorecards in seconds.",
};

const TABS: { id: Kind; label: string }[] = [
  { id: "all", label: "All tools" },
  { id: "calc", label: "Calculators" },
  { id: "gen", label: "Generators" },
];

const ClipboardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="12" y2="14" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-[transform,translate] duration-[250ms] group-hover:translate-x-[3px]">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function ToolsHub() {
  const [filter, setFilter] = useState<Kind>("all");
  const tools = filter === "all" ? TOOLS : TOOLS.filter((t) => t.kind === filter);

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-center px-7 pt-[62px] pb-[46px] max-[640px]:px-[22px] max-[640px]:pt-11 max-[640px]:pb-[34px]"
        style={{
          background:
            "radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff",
        }}
      >
        <div className="max-w-[820px] mx-auto">
          <div className="flex gap-2 items-center justify-center text-[13px] text-muted mb-[18px]">
            <Link href={routes.blog} className="transition-colors hover:text-coral">
              Resources
            </Link>
            <span>/</span>
            <span>HR tools</span>
          </div>
          <Reveal
            as="p"
            className="text-[13px] font-bold tracking-[0.16em] uppercase text-coral m-0 mb-4"
          >
            Free HR tools<span className="text-coral">.</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="text-[52px] leading-[1.05] font-extrabold tracking-[-1.6px] text-ink m-0 max-[640px]:text-[36px]"
          >
            Stop guessing your
            <br />
            <em className="not-italic text-coral">hiring numbers</em>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="text-[18px] leading-[1.6] text-body max-w-[600px] mx-auto mt-[18px] mb-0"
          >
            Free calculators and templates to measure, benchmark and improve
            every stage of your hiring — no sign-up, no catch. Simplify and
            automate your most complex HR tasks.
          </Reveal>
          <Reveal delay={0.17} className="flex gap-[9px] justify-center flex-wrap mt-[30px]">
            {TABS.map((tab) => {
              const on = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`rounded-full px-[18px] py-[9px] text-[13.5px] font-semibold font-[inherit] cursor-pointer border transition-all duration-[180ms] ${
                    on
                      ? "bg-coral text-white border-coral"
                      : "bg-white text-[#6A5A5D] border-[#EFE2E3] hover:border-[#FBD0D1] hover:text-coral"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="pt-14 pb-10 px-7 max-[640px]:px-[22px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[760px] mb-[30px]">
            <h2 className="text-[27px] font-extrabold tracking-[-0.6px] text-ink m-0">
              {TITLE_MAP[filter]}
            </h2>
            <p className="text-[15.5px] leading-[1.55] text-body2 mt-[10px] mb-0">
              {INTRO_MAP[filter]}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
            {tools.map((t, i) => {
              const live = t.kind === "calc";
              const cardInner = (
                <>
                  <div className="w-[46px] h-[46px] rounded-[13px] bg-rose-100 text-coral flex items-center justify-center mb-4">
                    <ClipboardIcon />
                  </div>
                  <p className="text-[10.5px] font-bold tracking-[0.06em] uppercase text-faint m-0 mb-2">
                    {t.tag}
                  </p>
                  <p className="text-[17px] font-bold tracking-[-0.3px] text-ink m-0 mb-[7px]">
                    {t.title}
                  </p>
                  <p className="text-[14px] leading-[1.55] text-muted2 m-0 mb-[18px]">
                    {t.desc}
                  </p>
                  <span className={`mt-auto inline-flex items-center gap-[7px] text-[14px] font-bold ${live ? "text-coral" : "text-faint"}`}>
                    {live ? t.cta : "Coming soon"}
                    {live && <ArrowIcon />}
                  </span>
                </>
              );
              return (
                <Reveal key={t.slug} delay={(i % 3) * 0.06}>
                  {live ? (
                    <Link
                      href={`${routes.resourcesTools}/${t.slug}`}
                      className="group flex flex-col h-full bg-white border border-[#F2E6E7] rounded-[18px] px-6 pt-6 pb-[22px] transition-[transform,translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
                    >
                      {cardInner}
                    </Link>
                  ) : (
                    <div className="flex flex-col h-full bg-white border border-[#F2E6E7] rounded-[18px] px-6 pt-6 pb-[22px]">
                      {cardInner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
