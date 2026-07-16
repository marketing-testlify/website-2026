"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";

type HeaderProps = {
  announcement?: string;
  announcementCta?: string;
  announcementHref?: string;
  loginHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  contactHref?: string;
  /** transparent-over-hero, solidifies on scroll (homepage only) */
  overlay?: boolean;
};

type PlatGroup = {
  id: string;
  /** dedicated page route (or external URL when `external`) */
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const PLAT: PlatGroup[] = [
  {
    id: "testlify-ai",
    href: routes.productTestlifyAi,
    icon: (
      <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" />
    ),
    title: "Testlify AI",
    desc: "The full hiring platform, end to end",
  },
  {
    id: "ai-resume-screener",
    href: routes.aiResumeScreener,
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
    title: "AI resume screener",
    desc: "Rank applicants by verified fit in seconds",
  },
  {
    id: "features",
    href: routes.productFeatures,
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </>
    ),
    title: "Features",
    desc: "Question types, proctoring, analytics & API",
  },
  {
    id: "video-interviewing",
    href: routes.productVideoInterviewing,
    icon: (
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    ),
    title: "Video interviewing",
    desc: "One-way & live two-way interviews",
  },
  {
    id: "science",
    href: routes.productScience,
    icon: (
      <>
        <path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3" />
        <path d="M8 3h8" />
      </>
    ),
    title: "Science behind tests",
    desc: "Validity, reliability & fairness",
  },
  {
    id: "live-demo",
    href: routes.productLiveDemo,
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </>
    ),
    title: "Live product demo",
    desc: "See the full workflow, end to end",
  },
  {
    id: "roadmap",
    href: "https://roadmap.testlify.com/",
    external: true,
    icon: (
      <>
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </>
    ),
    title: "Roadmap",
    desc: "See what we're building next",
  },
  {
    id: "ats-integrations",
    href: routes.integrations,
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
      </>
    ),
    title: "ATS integrations",
    desc: "Native two-way sync with 100+ ATS tools",
  },
];

type MenuTab = {
  name: string;
  tabDesc: string;
  /** where the tab row itself links */
  ctaHref: string;
  icon: React.ReactNode;
  subs: { label: string; d: string; href: string }[];
};

const SOL: MenuTab[] = [
  {
    name: "By industry type",
    tabDesc: "IT, SaaS, finance, healthcare & more",
    ctaHref: routes.solutions,
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </>
    ),
    subs: [
      { label: "Information & technology", d: "Developers, DevOps, data & security", href: "/solutions/it-industry" },
      { label: "SaaS & software", d: "GTM, product and engineering roles", href: routes.solutions },
      { label: "Financial services", d: "Analysts, ops & compliance roles", href: routes.solutions },
      { label: "Healthcare", d: "Clinical & administrative screening", href: routes.solutions },
      { label: "Retail & e-commerce", d: "High-volume frontline hiring", href: "/solutions/retail-industry" },
      { label: "BPO & services", d: "Multilingual, high-ramp hiring", href: routes.solutions },
      { label: "Logistics & supply chain", d: "Ops, warehouse & driver roles", href: routes.solutions },
      { label: "Energy, hospitality, edtech & more", d: "13 industries covered", href: routes.solutions },
    ],
  },
  {
    name: "By use case",
    tabDesc: "Volume, remote, campus, technical & more",
    ctaHref: routes.solutions,
    icon: (
      <>
        <path d="M12 2l10 5-10 5L2 7z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </>
    ),
    subs: [
      { label: "Volume hiring", d: "Screen thousands of applicants in hours", href: "/solutions/volume-hiring" },
      { label: "Remote hiring", d: "Hire anywhere with proctored tests", href: routes.solutions },
      { label: "Campus hiring", d: "Rank fresh graduates without resumes", href: routes.solutions },
      { label: "Technical hiring", d: "45+ coding languages with a live IDE", href: routes.solutions },
      { label: "Diversity & inclusion", d: "Bias-free, EEOC-defensible screening", href: routes.solutions },
      { label: "Lateral, sales, blue-collar & freelance", d: "10 use cases covered", href: routes.solutions },
    ],
  },
  {
    name: "By test type",
    tabDesc: "Coding, cognitive, personality & more",
    ctaHref: routes.solutions,
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    subs: [
      { label: "Coding tests", d: "Real-world dev challenges, 45+ languages", href: "/solutions/coding-tests" },
      { label: "Cognitive ability", d: "Reasoning & problem-solving", href: "/solutions/coding-tests" },
      { label: "Personality & culture", d: "Work style and culture fit", href: "/solutions/coding-tests" },
      { label: "Language & CEFR", d: "Proficiency across 16+ languages", href: "/solutions/coding-tests" },
      { label: "Role-specific & software skills", d: "4,500+ job-specific assessments", href: "/solutions/coding-tests" },
      { label: "Situational judgment & typing", d: "11 test types covered", href: "/solutions/coding-tests" },
    ],
  },
  {
    name: "By company type",
    tabDesc: "Startup to enterprise & public sector",
    ctaHref: routes.solutions,
    icon: (
      <>
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </>
    ),
    subs: [
      { label: "Startups", d: "Hire fast without a TA team", href: routes.solutions },
      { label: "SMBs", d: "Standardize hiring as you scale", href: routes.solutions },
      { label: "Enterprises", d: "SSO, compliance and audit trails", href: "/solutions/enterprise" },
      { label: "Non-profits", d: "Fair, defensible selection", href: routes.solutions },
      { label: "Public sector", d: "Transparent, auditable hiring", href: routes.solutions },
    ],
  },
];

const RES: MenuTab[] = [
  {
    name: "Learn",
    tabDesc: "Blog, guides, glossary & podcast",
    ctaHref: routes.blog,
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
    subs: [
      { label: "Blog", d: "Hiring science, playbooks & product news", href: routes.blog },
      { label: "Hiring guides", d: "Deep dives on skills-based hiring", href: routes.resourcesHiringGuides },
      { label: "HR glossary", d: "500+ hiring terms, defined", href: routes.resourcesGlossary },
      { label: "Ebooks", d: "Downloadable playbooks & reports", href: "#" },
      { label: "Podcast", d: "Conversations with talent leaders", href: "#" },
    ],
  },
  {
    name: "Tools & templates",
    tabDesc: "Calculators, JD templates & more",
    ctaHref: routes.resourcesTools,
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </>
    ),
    subs: [
      { label: "HR tools & calculators", d: "Cost per hire, time to hire & more", href: routes.resourcesTools },
      { label: "Job description templates", d: "Role-ready JDs in minutes", href: routes.resourcesJdTemplates },
      { label: "Customer success stories", d: "How 1,500+ teams hire on proof", href: routes.customers },
      { label: "Competitors", d: "How Testlify compares", href: routes.resourcesCompetitors },
    ],
  },
  {
    name: "Programs",
    tabDesc: "Referral, partnership & integrations",
    ctaHref: "#",
    icon: (
      <>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </>
    ),
    subs: [
      { label: "Referral program", d: "Refer a team, earn rewards", href: "#" },
      { label: "Partnership program", d: "Grow with Testlify", href: routes.partners },
      { label: "Integration program", d: "Build on the Testlify API", href: "#" },
      { label: "Sitemap", d: "Every page, in one place", href: routes.sitemap },
    ],
  },
];

type AboutLink = { label: string; href: string; external?: boolean };
type AboutColumn = { heading: string; links: AboutLink[] };

// About mega — two simple text-link columns (prototype `.mega.mend`)
const ABOUT: AboutColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "Our story", href: routes.about },
      { label: "Contact us", href: routes.contact },
      { label: "Our leadership", href: routes.about },
      { label: "Trust center", href: routes.trustCenter },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "Clients", href: routes.customers },
      { label: "Partners", href: routes.partners },
      { label: "Job openings", href: routes.careers },
      { label: "Write for us", href: "#" },
    ],
  },
];

type MobileLink = { label: string; d: string; href: string; external?: boolean };
type MobileSection = { key: string; label: string; links: MobileLink[] };

const MOBILE_SECTIONS: MobileSection[] = [
  {
    key: "product",
    label: "Product",
    links: [
      { label: "Testlify AI", d: "The full hiring platform, end to end", href: routes.productTestlifyAi },
      { label: "AI resume screener", d: "Rank applicants by verified fit in seconds", href: routes.aiResumeScreener },
      { label: "Features", d: "Question types, proctoring, analytics & API", href: routes.productFeatures },
      { label: "Video interviewing", d: "One-way & live two-way interviews", href: routes.productVideoInterviewing },
      { label: "Science behind tests", d: "Validity, reliability & fairness", href: routes.productScience },
      { label: "Live product demo", d: "See the full workflow, end to end", href: routes.productLiveDemo },
      { label: "Roadmap", d: "See what we're building next", href: "https://roadmap.testlify.com/", external: true },
      { label: "ATS integrations", d: "Native two-way sync with 100+ ATS tools", href: routes.integrations },
    ],
  },
  {
    key: "solutions",
    label: "Solutions",
    links: [
      { label: "By industry type", d: "IT, SaaS, finance, healthcare & more", href: routes.solutions },
      { label: "By use case", d: "Volume, remote, campus, technical & more", href: routes.solutions },
      { label: "By test type", d: "Coding, cognitive, personality & more", href: "/solutions/coding-tests" },
      { label: "By company type", d: "Startup to enterprise & public sector", href: routes.solutions },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    links: [
      { label: "Learn", d: "Blog, guides, glossary & podcast", href: routes.blog },
      { label: "Tools & templates", d: "Calculators, JD templates & more", href: routes.resourcesTools },
      { label: "Programs", d: "Referral, partnership & integrations", href: "#" },
    ],
  },
  {
    key: "about",
    label: "About",
    links: [
      { label: "Our story", d: "Why we built Testlify", href: routes.about },
      { label: "Contact us", d: "Talk to sales or support", href: routes.contact },
      { label: "Trust center", d: "SOC 2, ISO 27001, GDPR", href: routes.trustCenter },
      { label: "Clients", d: "Teams hiring with Testlify", href: routes.customers },
      { label: "Partners", d: "Refer, resell or build with us", href: routes.partners },
      { label: "Job openings", d: "Join the team behind Testlify", href: routes.careers },
    ],
  },
];

function MegaIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export default function SiteHeader({
  announcement = "Testlify AI is here — screen, interview & score candidates automatically.",
  announcementCta = "See what's new →",
  announcementHref = "#demo",
  loginHref = "#",
  ctaHref = "#",
  ctaLabel = "Try for free",
  contactHref = "#",
  overlay = false,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [mobExpand, setMobExpand] = useState("");
  const [solActive, setSolActive] = useState(0);
  const [resActive, setResActive] = useState(0);

  const closeDrawer = () => {
    setMobOpen(false);
    setMobExpand("");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = !overlay || scrolled;
  const collapsed = scrolled;
  const S = SOL[solActive] ?? SOL[0];
  const R = RES[resActive] ?? RES[0];

  const navLink =
    "text-[15px] font-medium text-[#46383C] hover:text-coral transition-colors";
  const megaPanel =
    "absolute top-[calc(100%+14px)] left-0 bg-white border border-[#F4E4E5] rounded-[18px] p-[18px] shadow-[0_30px_70px_rgba(110,11,14,0.16)] opacity-0 invisible translate-y-2 transition-all duration-200 z-[60] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0";
  // centered under its trigger (prototype .mega.mctr) — used by Resources
  const megaPanelCentered =
    "absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 bg-white border border-[#F4E4E5] rounded-[18px] p-[18px] shadow-[0_30px_70px_rgba(110,11,14,0.16)] opacity-0 invisible translate-y-2 transition-all duration-200 z-[60] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0";
  // right-aligned (prototype .mega.mend) — used by About
  const megaPanelEnd =
    "absolute top-[calc(100%+14px)] right-0 bg-white border border-[#F4E4E5] rounded-[18px] p-[18px] shadow-[0_30px_70px_rgba(110,11,14,0.16)] opacity-0 invisible translate-y-2 transition-all duration-200 z-[60] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[300] transition-[background,box-shadow] duration-300 border-b ${
          isSolid
            ? "bg-white/90 backdrop-blur-[14px] backdrop-saturate-[180%] shadow-[0_8px_30px_rgba(110,11,14,0.07)] border-[rgba(242,63,68,0.10)]"
            : "border-transparent"
        }`}
      >
        {/* ribbon */}
        <div
          className={`bg-ink text-[#D8C9CC] overflow-hidden transition-all duration-300 ${
            collapsed ? "max-h-0 opacity-0" : "max-h-[46px] opacity-100"
          }`}
        >
          <div className="max-w-[1240px] mx-auto px-7 h-[46px] flex items-center justify-between gap-[18px] text-[13px]">
            <div className="flex items-center gap-[11px] min-w-0">
              <span className="shrink-0 text-[10.5px] font-bold tracking-[0.08em] uppercase text-white bg-coral px-[9px] py-[3px] rounded-full">
                New
              </span>
              <p className="m-0 text-[#E7DADD] whitespace-nowrap overflow-hidden text-ellipsis max-[1080px]:hidden">
                {announcement}{" "}
                <a
                  href={announcementHref}
                  className="text-white font-semibold border-b border-white/35 pb-px whitespace-nowrap hover:border-white"
                >
                  {announcementCta}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-0.5 shrink-0">
              <a
                href={contactHref}
                className="inline-flex items-center gap-1.5 text-[#C2B1B5] px-3 py-1.5 rounded-lg font-medium hover:text-white hover:bg-white/[0.07] transition-colors whitespace-nowrap"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-75"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <span className="max-[720px]:hidden">EN</span>
              </a>
              <span className="w-px h-[15px] bg-white/15 mx-1" />
              <a
                href={contactHref}
                className="inline-flex items-center gap-1.5 text-[#C2B1B5] px-3 py-1.5 rounded-lg font-medium hover:text-white hover:bg-white/[0.07] transition-colors whitespace-nowrap"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-75"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22 6 12 13 2 6" /></svg>
                <span className="max-[720px]:hidden">Contact sales</span>
              </a>
            </div>
          </div>
        </div>

        {/* main bar */}
        <div className="max-w-[1240px] mx-auto px-7 py-4 flex items-center gap-[34px]">
          <Link href={routes.home} className="flex items-center" aria-label="Testlify home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/testlify-logo-main.svg" alt="Testlify" className="h-[22px] w-auto block" />
          </Link>

          <nav className="hidden min-[901px]:flex items-center gap-5 ml-1.5" aria-label="Primary">
            {/* Product mega */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#46383C] group-hover:text-coral transition-colors cursor-pointer bg-transparent border-0 py-1.5">
                Product<span className="text-[8px] opacity-60 transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>
              <div className={megaPanel}>
                <span className="absolute -top-[14px] left-0 right-0 h-[14px]" />
                <div className="flex">
                  {[
                    ["testlify-ai", "ai-resume-screener", "features", "video-interviewing"],
                    ["science", "live-demo", "roadmap", "ats-integrations"],
                  ].map((col, ci) => (
                    <div
                      key={ci}
                      className={`flex flex-col gap-0.5 min-w-[268px] ${ci === 0 ? "border-r border-[#F4E4E5] pr-3.5 mr-3.5" : "mr-3.5"}`}
                    >
                      {col.map((id) => {
                        const g = PLAT.find((x) => x.id === id)!;
                        const inner = (
                          <>
                            <span className="shrink-0 w-[34px] h-[34px] rounded-[9px] bg-rose-100 text-coral flex items-center justify-center mt-px">
                              <MegaIcon>{g.icon}</MegaIcon>
                            </span>
                            <span>
                              <span className="block text-[14px] font-semibold text-ink leading-[1.25]">{g.title}</span>
                              <span className="block text-[12px] text-[#9A878A] leading-[1.35] mt-0.5">{g.desc}</span>
                            </span>
                          </>
                        );
                        const cls =
                          "flex items-start gap-[11px] py-[9px] px-2.5 rounded-[11px] transition-colors hover:bg-[#FFF4F3]";
                        return g.external ? (
                          <a key={g.id} href={g.href} target="_blank" rel="noopener" className={cls}>
                            {inner}
                          </a>
                        ) : (
                          <Link key={g.id} href={g.href} className={cls}>
                            {inner}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                  <div className="w-[216px] bg-gradient-to-br from-[#FFF1F0] to-[#FFE7E4] rounded-[14px] p-[18px] flex flex-col justify-center gap-[7px]">
                    <p className="text-[15px] font-bold text-[#1A0E10] m-0">New · Testlify AI</p>
                    <p className="text-[12.5px] text-[#6B4F52] m-0 leading-[1.45]">Screen, interview and score candidates automatically with conversational AI.</p>
                    <Link href={routes.productTestlifyAi} className="text-[13px] font-bold text-coral mt-1">Explore Testlify AI →</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href={routes.testLibrary} className={navLink}>Test library</Link>

            <Link href={routes.libraryInterviews} className={navLink}>Interviews</Link>

            <Link href={routes.pricing} className={navLink}>Pricing</Link>

            {/* Solutions mega */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#46383C] group-hover:text-coral transition-colors cursor-pointer bg-transparent border-0 py-1.5">
                Solutions<span className="text-[8px] opacity-60 transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>
              <div className={megaPanelCentered}>
                <span className="absolute -top-[14px] left-0 right-0 h-[14px]" />
                <div className="flex">
                  <div className="flex flex-col gap-0.5 min-w-[268px] border-r border-[#F4E4E5] pr-3 mr-3.5">
                    {SOL.map((g, i) => (
                      <Link
                        key={g.name}
                        href={routes.solutions}
                        onMouseEnter={() => setSolActive(i)}
                        className={`flex items-start gap-[11px] py-[9px] px-2.5 rounded-[11px] transition-colors ${
                          solActive === i ? "bg-[#FFF4F3]" : "hover:bg-[#FFF4F3]"
                        }`}
                      >
                        <span className="shrink-0 w-[34px] h-[34px] rounded-[9px] bg-rose-100 text-coral flex items-center justify-center mt-px">
                          <MegaIcon>{g.icon}</MegaIcon>
                        </span>
                        <span>
                          <span className="block text-[14px] font-semibold text-ink leading-[1.25]">{g.name}</span>
                          <span className="block text-[12px] text-[#9A878A] leading-[1.35] mt-0.5">{g.tabDesc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-0.5 w-[290px] min-w-[290px] pt-0.5 mr-1.5">
                    <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#B59A9D] mb-2 px-2.5 mt-0.5">{S.name}</p>
                    {S.subs.map((s) => (
                      <Link key={s.label} href={s.href} className="flex flex-col gap-px py-[9px] px-3 rounded-[10px] hover:bg-rose-100 transition-colors">
                        <span className="text-[14px] font-semibold text-ink leading-[1.25]">{s.label}</span>
                        <span className="text-[12px] text-[#9A878A] leading-[1.35]">{s.d}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="w-[216px] bg-gradient-to-br from-[#FFF1F0] to-[#FFE7E4] rounded-[14px] p-[18px] flex flex-col justify-center gap-[7px]">
                    <p className="text-[15px] font-bold text-[#1A0E10] m-0">Not sure where to start?</p>
                    <p className="text-[12.5px] text-[#6B4F52] m-0 leading-[1.45]">Tell us how you hire — we&apos;ll map the right assessments to every role.</p>
                    <a href={contactHref} className="text-[13px] font-bold text-coral mt-1">Talk to sales →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources mega */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#46383C] group-hover:text-coral transition-colors cursor-pointer bg-transparent border-0 py-1.5">
                Resources<span className="text-[8px] opacity-60 transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>
              <div className={megaPanelCentered}>
                <span className="absolute -top-[14px] left-0 right-0 h-[14px]" />
                <div className="flex">
                  <div className="flex flex-col gap-0.5 min-w-[268px] border-r border-[#F4E4E5] pr-3 mr-3.5">
                    {RES.map((g, i) => (
                      <Link
                        key={g.name}
                        href={g.ctaHref}
                        onMouseEnter={() => setResActive(i)}
                        className={`flex items-start gap-[11px] py-[9px] px-2.5 rounded-[11px] transition-colors ${
                          resActive === i ? "bg-[#FFF4F3]" : "hover:bg-[#FFF4F3]"
                        }`}
                      >
                        <span className="shrink-0 w-[34px] h-[34px] rounded-[9px] bg-rose-100 text-coral flex items-center justify-center mt-px">
                          <MegaIcon>{g.icon}</MegaIcon>
                        </span>
                        <span>
                          <span className="block text-[14px] font-semibold text-ink leading-[1.25]">{g.name}</span>
                          <span className="block text-[12px] text-[#9A878A] leading-[1.35] mt-0.5">{g.tabDesc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-0.5 w-[290px] min-w-[290px] pt-0.5 mr-1.5">
                    <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#B59A9D] mb-2 px-2.5 mt-0.5">{R.name}</p>
                    {R.subs.map((s) => (
                      <Link key={s.label} href={s.href} className="flex flex-col gap-px py-[9px] px-3 rounded-[10px] hover:bg-rose-100 transition-colors">
                        <span className="text-[14px] font-semibold text-ink leading-[1.25]">{s.label}</span>
                        <span className="text-[12px] text-[#9A878A] leading-[1.35]">{s.d}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="w-[216px] bg-gradient-to-br from-[#FFF1F0] to-[#FFE7E4] rounded-[14px] p-[18px] flex flex-col justify-center gap-[7px]">
                    <p className="text-[15px] font-bold text-[#1A0E10] m-0">Free HR toolkit</p>
                    <p className="text-[12.5px] text-[#6B4F52] m-0 leading-[1.45]">Job descriptions, interview kits and calculators — ready to use.</p>
                    <Link href={routes.resourcesTools} className="text-[13px] font-bold text-coral mt-1">Browse free tools →</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* About mega (right-aligned) */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#46383C] group-hover:text-coral transition-colors cursor-pointer bg-transparent border-0 py-1.5">
                About<span className="text-[8px] opacity-60 transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>
              <div className={megaPanelEnd}>
                <span className="absolute -top-[14px] left-0 right-0 h-[14px]" />
                <div className="flex gap-5">
                  {ABOUT.map((col) => (
                    <div key={col.heading} className="min-w-[178px]">
                      <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#B59A9D] mb-2 px-2.5 mt-0.5">{col.heading}</p>
                      {col.links.map((l) => {
                        const cls =
                          "block text-[14px] font-medium text-[#2A1A1D] py-[9px] px-2.5 rounded-[9px] whitespace-nowrap transition-colors hover:bg-rose-100 hover:text-coral";
                        return l.external || l.href === "#" ? (
                          <a
                            key={l.label}
                            href={l.href}
                            {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
                            className={cls}
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link key={l.label} href={l.href} className={cls}>
                            {l.label}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-5">
            <a href={loginHref} className="text-[15px] font-semibold text-[#46383C] hover:text-coral transition-colors max-[560px]:hidden">Login</a>
            <a href={ctaHref} className="btn-sheen inline-flex items-center gap-[7px] bg-coral text-white font-semibold text-[15px] px-[22px] py-[11px] rounded-[13px] shadow-[0_10px_22px_rgba(242,63,68,0.32)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(242,63,68,0.42)] transition-all duration-300">
              {ctaLabel}<span className="text-[18px] leading-none">→</span>
            </a>
            <button
              onClick={() => setMobOpen(true)}
              aria-label="Open menu"
              className="hidden max-[900px]:inline-flex w-11 h-11 border border-[#F0E0E1] rounded-xl bg-white items-center justify-center cursor-pointer text-ink shrink-0"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* spacer to offset the fixed header (omitted in overlay mode) */}
      {!overlay && <div aria-hidden style={{ height: collapsed ? 72 : 118 }} />}

      {/* mobile drawer */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-[rgba(20,8,10,0.44)] z-[1190] transition-all duration-300 min-[901px]:hidden ${
          mobOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <nav
        aria-label="Mobile"
        className={`fixed top-0 right-0 bottom-0 w-[min(84vw,360px)] bg-white shadow-[-22px_0_60px_rgba(80,20,30,0.20)] z-[1200] transition-transform duration-300 pt-[74px] px-[26px] pb-[30px] overflow-y-auto min-[901px]:hidden ${
          mobOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
      >
        <button onClick={closeDrawer} aria-label="Close menu" className="absolute top-5 right-[22px] w-[42px] h-[42px] border-0 bg-[#FAF0F0] rounded-[11px] text-[20px] text-ink cursor-pointer leading-none">✕</button>
        <Link href={routes.home} onClick={closeDrawer} className="block text-[18px] font-semibold text-ink py-[15px] px-1.5 border-b border-[#F4E8E9] hover:text-coral">Home</Link>
        {MOBILE_SECTIONS.map((section) => {
          const open = mobExpand === section.key;
          const accordion = (
            <div key={section.key} className="border-b border-[#F4E8E9]">
              <button
                onClick={() => setMobExpand((cur) => (cur === section.key ? "" : section.key))}
                aria-expanded={open}
                className={`flex items-center justify-between w-full bg-transparent border-0 font-[inherit] text-[18px] font-semibold py-[15px] px-1.5 cursor-pointer text-left transition-colors ${
                  open ? "text-coral" : "text-ink"
                }`}
              >
                {section.label}
                <span
                  className={`w-[22px] h-[22px] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    open ? "rotate-180 text-coral" : "text-[#B59A9D]"
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-[360ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  open ? "max-h-[760px]" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-0.5 px-1 pt-0.5 pb-3.5">
                  {section.links.map((l) => {
                    const inner = (
                      <>
                        <span className="text-[15px] font-semibold text-ink">{l.label}</span>
                        <span className="text-[12.5px] text-[#8A7A7D] leading-[1.4]">{l.d}</span>
                      </>
                    );
                    const cls =
                      "flex flex-col gap-px py-2.5 px-3 rounded-[11px] hover:bg-[#FCF0F0] active:bg-[#FCF0F0] transition-colors";
                    return l.external ? (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener" onClick={closeDrawer} className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <Link key={l.label} href={l.href} onClick={closeDrawer} className={cls}>
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
          // Pricing is a direct link that sits between Product and Solutions.
          // Test library, Interviews and Pricing are direct links that sit
          // between the Product and Solutions accordions (design nav order).
          return section.key === "solutions" ? (
            <Fragment key={section.key}>
              <Link href={routes.testLibrary} onClick={closeDrawer} className="block text-[18px] font-semibold text-ink py-[15px] px-1.5 border-b border-[#F4E8E9] hover:text-coral">Test library</Link>
              <Link href={routes.libraryInterviews} onClick={closeDrawer} className="block text-[18px] font-semibold text-ink py-[15px] px-1.5 border-b border-[#F4E8E9] hover:text-coral">Interviews</Link>
              <Link href={routes.pricing} onClick={closeDrawer} className="block text-[18px] font-semibold text-ink py-[15px] px-1.5 border-b border-[#F4E8E9] hover:text-coral">Pricing</Link>
              {accordion}
            </Fragment>
          ) : (
            accordion
          );
        })}
        <span className="block text-[12px] font-bold tracking-[0.1em] uppercase text-[#B59A9D] mt-[22px] mx-1.5 mb-1">Account</span>
        <a href={loginHref} onClick={closeDrawer} className="block text-[18px] font-semibold text-ink py-[15px] px-1.5 border-b border-[#F4E8E9] hover:text-coral">Login</a>
        <a href={ctaHref} onClick={closeDrawer} className="block text-center bg-coral text-white font-bold text-[16px] py-[15px] rounded-[13px] mt-[22px] shadow-[0_12px_26px_rgba(242,63,68,0.3)]">{ctaLabel}</a>
      </nav>
    </>
  );
}
