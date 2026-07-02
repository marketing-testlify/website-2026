"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

type Job = {
  title: string;
  dept: string;
  group: "eng" | "prod" | "gtm";
  loc: string;
  type: string;
};

const JOBS: Job[] = [
  { title: "Senior Frontend Engineer", dept: "Engineering", group: "eng", loc: "Remote (global)", type: "Full-time" },
  { title: "Backend Engineer, Platform", dept: "Engineering", group: "eng", loc: "Remote (EU)", type: "Full-time" },
  { title: "Machine Learning Engineer", dept: "Engineering", group: "eng", loc: "Remote (global)", type: "Full-time" },
  { title: "Senior Product Designer", dept: "Product & Design", group: "prod", loc: "Remote (global)", type: "Full-time" },
  { title: "Product Manager, Assessments", dept: "Product & Design", group: "prod", loc: "Remote (US)", type: "Full-time" },
  { title: "Account Executive, Mid-Market", dept: "Go-to-market", group: "gtm", loc: "Remote (US)", type: "Full-time" },
  { title: "Customer Success Manager", dept: "Go-to-market", group: "gtm", loc: "Remote (EU)", type: "Full-time" },
  { title: "Content Marketing Lead", dept: "Go-to-market", group: "gtm", loc: "Remote (global)", type: "Full-time" },
];

const DEPTS: { key: "all" | "eng" | "prod" | "gtm"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "eng", label: "Engineering" },
  { key: "prod", label: "Product & Design" },
  { key: "gtm", label: "Go-to-market" },
];

const PERKS = [
  {
    title: "Remote-first",
    desc: "Work from anywhere. We're built for distributed teams from the ground up.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
      </>
    ),
  },
  {
    title: "Real equity",
    desc: "Meaningful ownership for everyone. When Testlify wins, you win.",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    title: "Flexible time off",
    desc: "Unlimited PTO with a 3-week minimum — because rest isn't optional.",
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
  {
    title: "Growth budget",
    desc: "An annual learning stipend and real time to use it.",
    icon: <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" />,
  },
];

export default function CareersClient() {
  const [dept, setDept] = useState<"all" | "eng" | "prod" | "gtm">("all");
  const jobs = dept === "all" ? JOBS : JOBS.filter((j) => j.group === dept);

  return (
    <>
      <SiteHeader
        announcement="Remote-first · 4-day onboarding · Real ownership"
        announcementCta="Why Testlify"
      />

      {/* hero */}
      <section className="px-7 pt-16 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="mx-auto max-w-[840px]">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
            Careers<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[62px] max-[920px]:text-[42px] leading-[1.04] font-extrabold tracking-[-2px] max-[920px]:tracking-[-1.4px] m-0 text-ink"
          >
            Do the best work
            <br />
            of your career
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-body font-normal mx-auto mt-[22px] max-w-[600px]"
          >
            We&apos;re a remote-first team building the platform that makes hiring
            fair for everyone. Big problems, real ownership, and people who care.
          </Reveal>
          <Reveal className="mt-[30px]" delay={0.12}>
            <CtaButton
              label="See open roles"
              href="#openings"
              variant="primary"
              size="md"
              icon="arrow"
              magnetic
            />
          </Reveal>
        </div>
      </section>

      {/* perks */}
      <section className="px-7 py-[104px] max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              Life at Testlify<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] max-[920px]:text-[32px] leading-[1.08] font-extrabold tracking-[-1.4px] max-[920px]:tracking-[-1px] m-0 text-ink"
            >
              Perks that actually matter
            </Reveal>
          </div>
          <div className="grid grid-cols-4 max-[920px]:grid-cols-2 gap-4">
            {PERKS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.05}
                className="bg-white border border-[#EFE2E3] rounded-[18px] p-6 transition-all duration-[220ms] hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(110,11,14,0.08)] hover:border-[#F4D2D3]"
              >
                <span className="w-11 h-11 rounded-[12px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[14px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <h3 className="text-[16.5px] leading-[1.25] font-bold tracking-[-0.4px] m-0 mb-1.5 text-ink">
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-[1.66] text-body m-0">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* openings */}
      <section id="openings" className="px-7 py-[104px] max-[920px]:px-[22px] max-[920px]:py-[72px] bg-sand">
        <div className="max-w-[900px] mx-auto">
          <div className="mx-auto mb-10 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              Open roles<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] max-[920px]:text-[32px] leading-[1.08] font-extrabold tracking-[-1.4px] max-[920px]:tracking-[-1px] m-0 text-ink"
            >
              Find your seat
            </Reveal>
          </div>
          <Reveal className="flex gap-2.5 justify-center flex-wrap mb-8">
            {DEPTS.map((d) => (
              <button
                key={d.key}
                onClick={() => setDept(d.key)}
                className={`rounded-full px-[18px] py-[9px] text-[13.5px] font-semibold cursor-pointer transition-all duration-200 font-[inherit] ${
                  dept === d.key
                    ? "bg-coral text-white border border-coral"
                    : "bg-white text-[#6A5A5D] border border-[#EFE2E3]"
                }`}
              >
                {d.label}
              </button>
            ))}
          </Reveal>
          <Reveal>
            {jobs.map((j) => (
              <div
                key={j.title}
                className="flex items-center justify-between gap-5 max-[920px]:flex-col max-[920px]:items-start max-[920px]:gap-3 bg-white border border-[#EFE2E3] rounded-[16px] px-[26px] py-[22px] mb-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(110,11,14,0.08)] hover:border-[#F4D2D3]"
              >
                <div>
                  <p className="text-[17px] font-bold m-0 mb-[5px] text-ink">{j.title}</p>
                  <div className="text-[13px] text-[#9A878A] flex gap-2 flex-wrap items-center">
                    <span className="bg-sand text-[#8A4A2A] text-[11px] font-bold px-[9px] py-[3px] rounded-full">
                      {j.dept}
                    </span>
                    <span>{j.loc}</span>
                    <span>·</span>
                    <span>{j.type}</span>
                  </div>
                </div>
                <a href="#" className="flex-none text-[13.5px] font-bold text-coral inline-flex items-center gap-1.5">
                  Apply →
                </a>
              </div>
            ))}
          </Reveal>
          <Reveal as="p" className="text-center text-[#A9999C] text-[14px] mt-6">
            Don&apos;t see your role?{" "}
            <a href="#" className="text-coral font-bold">
              Send us an open application →
            </a>
          </Reveal>
        </div>
      </section>

      {/* dark CTA (distinct from footer's coral band) */}
      <section className="px-7 py-[104px] max-[920px]:px-[22px] max-[920px]:py-[72px] bg-ink text-white text-center">
        <div className="max-w-[720px] mx-auto">
          <Reveal as="h2" className="text-[43px] max-[920px]:text-[32px] leading-[1.08] font-extrabold tracking-[-1.4px] max-[920px]:tracking-[-1px] m-0 text-white">
            We hire the way we build
          </Reveal>
          <Reveal as="p" delay={0.04} className="text-[19px] leading-[1.6] text-white/[0.78] mx-auto mt-[18px] mb-[30px]">
            Skills-first, structured and fair — you&apos;ll experience our own
            product as a candidate.
          </Reveal>
          <Reveal delay={0.08} className="flex gap-3.5 justify-center flex-wrap">
            <CtaButton
              label="Browse roles"
              href="#openings"
              variant="light"
              size="md"
              icon="arrow"
            />
            <CtaButton
              label="About Testlify"
              href={routes.about}
              variant="outline-light"
              size="md"
              icon="none"
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
