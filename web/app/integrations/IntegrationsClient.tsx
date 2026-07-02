"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";

type Integration = {
  name: string;
  cat: string;
  group: "ats" | "hris" | "comms" | "auto";
  mark: string;
  desc: string;
};

const DATA: Integration[] = [
  { name: "Greenhouse", cat: "ATS", group: "ats", mark: "GH", desc: "Sync candidates and push assessment scores straight into Greenhouse." },
  { name: "Lever", cat: "ATS", group: "ats", mark: "L", desc: "Trigger Testlify assessments from any Lever pipeline stage." },
  { name: "Workday", cat: "ATS", group: "ats", mark: "W", desc: "Enterprise two-way sync for candidates, stages and results." },
  { name: "SmartRecruiters", cat: "ATS", group: "ats", mark: "SR", desc: "Add skills screening to your SmartRecruiters workflow." },
  { name: "Ashby", cat: "ATS", group: "ats", mark: "A", desc: "Native integration for modern, data-driven recruiting teams." },
  { name: "BambooHR", cat: "HRIS", group: "hris", mark: "B", desc: "Move new hires from assessment to onboarding seamlessly." },
  { name: "Workable", cat: "ATS", group: "ats", mark: "Wk", desc: "Send tests and receive scorecards without leaving Workable." },
  { name: "SAP SuccessFactors", cat: "HRIS", group: "hris", mark: "SF", desc: "Connect Testlify to your global SuccessFactors instance." },
  { name: "Slack", cat: "Communication", group: "comms", mark: "Sl", desc: "Get notified the moment a candidate completes an assessment." },
  { name: "Microsoft Teams", cat: "Communication", group: "comms", mark: "T", desc: "Share results and collaborate on shortlists inside Teams." },
  { name: "Zapier", cat: "Automation", group: "auto", mark: "Z", desc: "Connect Testlify to 6,000+ apps with no-code automations." },
  { name: "Gmail", cat: "Communication", group: "comms", mark: "G", desc: "Invite candidates and send reminders from your own inbox." },
];

const FILTERS: { key: "all" | Integration["group"]; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ats", label: "ATS" },
  { key: "hris", label: "HRIS" },
  { key: "comms", label: "Communication" },
  { key: "auto", label: "Automation" },
];

const FEATURES: { title: string; desc: string; delay: number; icon: React.ReactNode }[] = [
  {
    title: "Two-way sync",
    desc: "Candidates, stages and scores flow both ways automatically — no copy-paste, no stale data.",
    delay: 0,
    icon: (
      <>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </>
    ),
  },
  {
    title: "Set up in minutes",
    desc: "Authenticate once and you're live. Most integrations connect in under five minutes, no engineering needed.",
    delay: 0.06,
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9z" />,
  },
  {
    title: "Open API & webhooks",
    desc: "Build exactly the workflow you need with a fully documented REST API and real-time event webhooks.",
    delay: 0.12,
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
];

export default function IntegrationsClient() {
  const [cat, setCat] = useState<"all" | Integration["group"]>("all");
  const shown = cat === "all" ? DATA : DATA.filter((d) => d.group === cat);

  return (
    <>
      <SiteHeader
        announcement="New · Native two-way sync with Workday"
        announcementCta="View integration"
      />

      {/* hero */}
      <section className="px-7 pt-16 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[820px] mx-auto">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted mb-[18px]">
            Integrations<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal as="h1" delay={0.04} className="text-[62px] leading-[1.04] font-extrabold tracking-[-2px] m-0 text-ink max-[920px]:text-[42px] max-[920px]:tracking-[-1.4px]">
            Testlify works with
            <br />
            your whole stack
          </Reveal>
          <Reveal as="p" delay={0.08} className="text-[19px] leading-[1.6] text-body font-normal mx-auto mt-[22px] max-w-[600px]">
            Connect Testlify to your ATS, HRIS and the tools your team already uses. 100+ native integrations, plus an open API and webhooks for everything else.
          </Reveal>
          <Reveal delay={0.12} className="flex gap-2.5 justify-center flex-wrap mt-3.5">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setCat(f.key)}
                className={`rounded-full px-[18px] py-[9px] text-[13.5px] font-semibold cursor-pointer transition-all duration-200 border font-[inherit] ${
                  cat === f.key
                    ? "bg-coral text-white border-coral"
                    : "bg-white text-[#6A5A5D] border-[#EFE2E3]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* integrations grid */}
      <section className="px-7 pt-[18px] pb-0">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-4 gap-4 max-[1080px]:grid-cols-2 max-[920px]:grid-cols-2">
            {shown.map((it) => (
              <div
                key={it.name}
                className="flex flex-col bg-white border border-[#EFE2E3] rounded-[18px] p-[22px] transition-[translate,transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
              >
                <span className="w-[46px] h-[46px] rounded-[12px] bg-sand flex items-center justify-center font-extrabold text-[18px] text-[#C0242B] mb-3.5">
                  {it.mark}
                </span>
                <p className="text-[15.5px] font-bold m-0 mb-1">{it.name}</p>
                <p className="text-[12px] text-faint font-semibold m-0 mb-3">{it.cat}</p>
                <p className="text-[13px] text-[#6A5A5D] leading-[1.5] m-0 mb-3.5">{it.desc}</p>
                <span className="text-[12.5px] font-bold text-coral mt-auto">Connect →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why it matters */}
      <section className="px-7 pt-[84px] pb-[104px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted mb-[18px]">
              Why it matters<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
              One source of truth for hiring
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {FEATURES.map((f) => (
              <Reveal
                key={f.title}
                delay={f.delay}
                className="bg-white border border-[#EFE2E3] rounded-[20px] px-[26px] py-[30px]"
              >
                <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[18px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {f.icon}
                  </svg>
                </span>
                <h3 className="text-[18px] leading-[1.25] font-bold tracking-[-0.4px] m-0 mb-2 text-ink">{f.title}</h3>
                <p className="text-[14px] leading-[1.66] text-body">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-7 py-[104px] bg-ink text-white text-center">
        <div className="max-w-[720px] mx-auto">
          <Reveal as="h2" className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-white max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
            Don&apos;t see your tool?
          </Reveal>
          <Reveal as="p" delay={0.04} className="text-[19px] leading-[1.6] text-white/[0.78] mx-auto mt-[18px] mb-[30px]">
            Our API connects Testlify to anything. Tell us what you use and we&apos;ll help you wire it up.
          </Reveal>
          <Reveal delay={0.08} className="flex gap-3.5 justify-center flex-wrap">
            <CtaButton label="Read API docs" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Request an integration" href="#" variant="outline-light" size="md" icon="none" />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
