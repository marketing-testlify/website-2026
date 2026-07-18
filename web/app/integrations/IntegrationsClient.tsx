"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

type Integration = {
  name: string;
  cat: string;
  tag: string;
  logo: string;
};

const B = "https://testlify.com/wp-content/uploads/";

const DATA: Integration[] = [
  { name: "Workday", cat: "ATS", tag: "Native", logo: B + "2023/01/Workday-230x230-1.png" },
  { name: "SAP SuccessFactors", cat: "ATS", tag: "Native", logo: B + "2023/01/SAP-SuccessFactors-230x230-1.png" },
  { name: "Lever", cat: "ATS", tag: "Native", logo: B + "2023/01/Lever.png" },
  { name: "Greenhouse", cat: "ATS", tag: "Native", logo: B + "2023/01/greenhouse-230x230-1.png" },
  { name: "BambooHR", cat: "ATS", tag: "Native", logo: B + "2023/01/BambooHR.png" },
  { name: "Workable", cat: "ATS", tag: "Native", logo: B + "2023/01/Workable.png" },
  { name: "UKG Pro Recruiting", cat: "ATS", tag: "Native", logo: B + "2023/01/UKG-Pro-Recruiting.png" },
  { name: "SmartRecruiters", cat: "ATS", tag: "Native", logo: B + "2023/01/SmartRecruiters.png" },
  { name: "Fountain", cat: "ATS", tag: "Native", logo: B + "2023/01/download-5.png" },
  { name: "Pinpoint", cat: "ATS", tag: "Native", logo: B + "2023/01/Pinpoint.png" },
  { name: "Teamtailor", cat: "ATS", tag: "Native", logo: B + "2023/01/Teamtailor.png" },
  { name: "Manatal", cat: "ATS", tag: "Native", logo: B + "2024/08/Manatal.png" },
  { name: "JazzHR", cat: "ATS", tag: "Native", logo: B + "2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr" },
  { name: "Zoho Recruit", cat: "ATS", tag: "Native", logo: B + "2024/08/zoho-recruit-logo-1.png" },
  { name: "Recruitee", cat: "ATS", tag: "Native", logo: B + "2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr" },
];

const PAGE = 8;

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
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE);
  const [loading, setLoading] = useState(false);

  const q = query.toLowerCase().trim();
  const filtered = q ? DATA.filter((d) => d.name.toLowerCase().includes(q)) : DATA;
  const shown = filtered.slice(0, limit);
  const hasMore = filtered.length > shown.length;

  function loadMore() {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setLimit((l) => l + PAGE);
      setLoading(false);
    }, 650);
  }

  return (
    <>
      <SiteHeader
        announcement="New · Native two-way sync with Workday"
        announcementCta="View integration"
      />

      {/* hero */}
      <section className="px-7 pt-16 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[860px] mx-auto">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted mb-[18px]">
            Integrations<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal as="h1" delay={0.04} className="text-[62px] leading-[1.04] font-extrabold tracking-[-2px] m-0 text-ink text-balance max-[920px]:text-[42px] max-[920px]:tracking-[-1.4px]">
            Testlify integration with third-party platforms
          </Reveal>
          <Reveal as="p" delay={0.08} className="text-[19px] leading-[1.6] text-body font-normal mx-auto mt-[22px] max-w-[640px]">
            Our platform is designed with integration in mind and can be seamlessly connected to a variety of third-party tools including applicant tracking, communications, email tools, and more.
          </Reveal>
          <Reveal delay={0.1} className="flex gap-3.5 justify-center flex-wrap mt-7">
            <CtaButton label="Book a demo" href={routes.contact} variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="API docs" href="#" variant="secondary" size="md" icon="none" />
          </Reveal>
          <Reveal delay={0.14} className="flex items-center gap-2.5 mt-7 bg-white border border-[#EFE2E3] rounded-[12px] px-4 py-3 shadow-[0_8px_20px_rgba(110,11,14,0.05)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-faint shrink-0" aria-hidden>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              placeholder="Search integrations"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setLimit(PAGE);
              }}
              className="border-none outline-none font-[inherit] text-[15px] text-ink flex-1 bg-transparent"
            />
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
                className="group flex flex-col bg-white border border-[#EFE2E3] rounded-[18px] p-[22px] transition-[transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
              >
                <span className="w-16 h-16 rounded-[14px] bg-sand flex items-center justify-center mb-4 overflow-hidden transition-[transform,background-color] duration-300 group-hover:scale-[1.06] group-hover:bg-[#FFF0EF]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.logo} alt={it.name} className="max-w-[44px] max-h-[44px] object-contain transition-transform duration-300" />
                </span>
                <span className="self-start inline-flex text-[11px] font-bold tracking-[0.04em] uppercase text-[#1F9D6B] bg-[#E7F6EE] px-2.5 py-[3px] rounded-full mb-2.5">
                  {it.tag}
                </span>
                <p className="text-[15.5px] font-bold m-0 mb-1 text-ink">{it.name}</p>
                <p className="text-[12px] text-faint font-semibold m-0 mb-3">{it.cat}</p>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-9">
              <button
                type="button"
                onClick={loadMore}
                className="inline-flex items-center gap-2.5 bg-white border-[1.5px] border-[#EADDDE] text-ink font-[inherit] font-semibold text-[15px] px-[26px] py-[13px] rounded-[13px] cursor-pointer transition-[transform,border-color,box-shadow] duration-[250ms] hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:shadow-[0_10px_24px_rgba(110,11,14,0.08)]"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-[#F4D2D3] border-t-coral animate-spin" />
                    Loading…
                  </>
                ) : (
                  "Load more integrations"
                )}
              </button>
            </div>
          )}

          <div className="text-center mt-[34px]">
            <Link href="#" className="inline-flex items-center gap-2 text-coral font-bold text-[15.5px]">
              Explore all 100+ native integrations<span>→</span>
            </Link>
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
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink text-balance max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
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
          <Reveal as="h2" className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-white text-balance max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
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
