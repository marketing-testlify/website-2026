"use client";

import { useEffect, useState } from "react";
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
  name: string;
  id: string;
  cta: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  subs: { label: string; d: string }[];
  /** dedicated page route; falls back to /product#<id> */
  href?: string;
};

const PLAT: PlatGroup[] = [
  {
    name: "Testlify AI",
    id: "testlify-ai",
    href: routes.productTestlifyAi,
    cta: "Explore Testlify AI →",
    icon: (
      <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" />
    ),
    title: "Testlify AI",
    desc: "The full hiring platform, end to end",
    subs: [
      { label: "AI screening", d: "Auto-screen every applicant" },
      { label: "AI interviewer", d: "Conversational, adaptive interviews" },
      { label: "Auto-scoring", d: "Objective scores in seconds" },
      { label: "The full workflow", d: "Screen → assess → interview → hire" },
    ],
  },
  {
    name: "Skill assessments",
    id: "skill-assessments",
    href: routes.productSkillAssessments,
    cta: "Browse skill assessments →",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    title: "Skill assessments",
    desc: "3,500+ expert-validated tests across every role",
    subs: [
      { label: "Test library", d: "3,500+ tests across roles" },
      { label: "Coding tests", d: "Real-world dev challenges" },
      { label: "Cognitive ability", d: "Aptitude & reasoning" },
      { label: "Personality & culture", d: "Behavioural fit" },
    ],
  },
  {
    name: "AI resume screener",
    id: "ai-resume-screener",
    href: routes.aiResumeScreener,
    cta: "See the screener →",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
    title: "AI resume screener",
    desc: "Rank applicants by verified fit in seconds",
    subs: [
      { label: "Bulk ranking", d: "Sort thousands instantly" },
      { label: "Fit scoring", d: "Evidence-based match scores" },
      { label: "Bias controls", d: "Structured, fair shortlists" },
      { label: "ATS sync", d: "Push results back to your ATS" },
    ],
  },
  {
    name: "AI interviews",
    id: "ai-interviews",
    href: routes.libraryInterviews,
    cta: "Browse interviews →",
    icon: (
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    ),
    title: "AI interviews",
    desc: "Video, audio & chat — AI-scored, structured",
    subs: [
      { label: "Video interviews", d: "Async & live, AI-scored" },
      { label: "Audio interviews", d: "Voice-first, structured" },
      { label: "Chat interviews", d: "Written scenario scoring" },
      { label: "Interview library", d: "Role-ready, AI-scored interviews" },
    ],
  },
  {
    name: "Video interviewing",
    id: "video-interviewing",
    href: routes.productVideoInterviewing,
    cta: "See video interviewing →",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
    title: "Video interviewing",
    desc: "One-way & live interviews, auto-scored",
    subs: [
      { label: "One-way async", d: "Recorded on the candidate’s time" },
      { label: "Live two-way", d: "Real-time calls in-platform" },
      { label: "Auto-scoring", d: "Relevance & verbal-cue scores" },
      { label: "Recordings & transcripts", d: "Download, review & share" },
    ],
  },
  {
    name: "ATS integrations",
    id: "ats-integrations",
    href: routes.integrations,
    cta: "View integrations →",
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
      </>
    ),
    title: "ATS integrations",
    desc: "Native two-way sync with 100+ ATS tools",
    subs: [
      { label: "100+ integrations", d: "Greenhouse, Lever, Workday…" },
      { label: "Two-way sync", d: "Keep both systems in step" },
      { label: "API & webhooks", d: "Build your own flows" },
      { label: "Zapier", d: "No-code automations" },
    ],
  },
  {
    name: "Why it works",
    id: "science",
    href: routes.productScience,
    cta: "See the proof →",
    icon: (
      <>
        <path d="M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3" />
        <path d="M8 3h8" />
      </>
    ),
    title: "Why it works",
    desc: "Science, validity, fairness & security",
    subs: [
      { label: "Validity & reliability", d: "Psychometrically sound tests" },
      { label: "Bias testing", d: "Fair, EEOC-defensible by design" },
      { label: "Expert-built", d: "Reviewed by subject-matter experts" },
      { label: "Security & trust", d: "SOC 2, ISO 27001, GDPR" },
    ],
  },
  {
    name: "Features",
    id: "features",
    href: routes.productFeatures,
    cta: "See all features →",
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
    subs: [
      { label: "Question types", d: "13+ formats, from coding to video" },
      { label: "Anti-cheating & proctoring", d: "Webcam, tab & plagiarism checks" },
      { label: "Reporting & analytics", d: "Benchmarks and score insights" },
      { label: "API & white label", d: "Build it into your own flow" },
    ],
  },
  {
    name: "Live product demo",
    id: "live-demo",
    href: routes.productLiveDemo,
    cta: "Watch the demo →",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </>
    ),
    title: "Live product demo",
    desc: "See the full workflow, end to end",
    subs: [
      { label: "Guided walkthrough", d: "The full workflow, end to end" },
      { label: "Screen & rank", d: "From application to shortlist" },
      { label: "Interview & score", d: "Auto-scored, rubric-based" },
      { label: "Book a live demo", d: "See it on your roles" },
    ],
  },
];

type LibraryRow = { label: string; d: string; href: string; icon: React.ReactNode };

const LIBRARY: LibraryRow[] = [
  {
    label: "Test library",
    d: "3,500+ validated tests across every role",
    href: routes.testLibrary,
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
  {
    label: "Interview library",
    d: "AI video, audio & chat interviews by role",
    href: routes.libraryInterviews,
    icon: (
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    ),
  },
  {
    label: "Build your own",
    d: "Custom tests & questions, SME-reviewed",
    href: routes.libraryBuildYourOwn,
    icon: <path d="M12 5v14M5 12h14" />,
  },
];

type MenuTab = {
  name: string;
  tabDesc: string;
  cta: string;
  ctaHref: string;
  icon: React.ReactNode;
  subs: { label: string; d: string; href: string }[];
};

const SOL: MenuTab[] = [
  {
    name: "By use case",
    tabDesc: "Volume, remote, campus, technical & more",
    cta: "Explore all solutions →",
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
      { label: "Remote hiring", d: "Hire anywhere with proctored assessments", href: `${routes.solutions}#remote-hiring` },
      { label: "Campus hiring", d: "Rank fresh graduates without resumes", href: `${routes.solutions}#campus-hiring` },
      { label: "Diversity & inclusion", d: "Bias-free, EEOC-defensible screening", href: `${routes.solutions}#diversity-hiring` },
      { label: "Technical hiring", d: "45+ coding languages with a live IDE", href: `${routes.solutions}#technical-hiring` },
      { label: "Staffing & agencies", d: "Vet candidates before you submit them", href: `${routes.solutions}#agency-hiring` },
    ],
  },
  {
    name: "By industry",
    tabDesc: "IT, SaaS, finance, healthcare & more",
    cta: "See industry solutions →",
    ctaHref: routes.solutions,
    icon: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </>
    ),
    subs: [
      { label: "IT & technology", d: "Developers, DevOps, data & security", href: "/solutions/it-technology" },
      { label: "SaaS & software", d: "GTM, product and engineering roles", href: routes.solutions },
      { label: "Financial services", d: "Analysts, ops and compliance-heavy roles", href: routes.solutions },
      { label: "Healthcare", d: "Clinical & administrative screening", href: routes.solutions },
      { label: "Retail & e-commerce", d: "High-volume frontline hiring", href: routes.solutions },
      { label: "BPO & services", d: "Multilingual, high-ramp hiring", href: routes.solutions },
    ],
  },
  {
    name: "By company size",
    tabDesc: "Startup to enterprise & public sector",
    cta: "Find your fit →",
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
      { label: "Mid-market", d: "Standardize hiring as you scale", href: routes.solutions },
      { label: "Enterprise", d: "SSO, compliance and audit trails", href: "/solutions/enterprise" },
      { label: "Non-profits & public sector", d: "Fair, defensible selection", href: routes.solutions },
    ],
  },
  {
    name: "By test type",
    tabDesc: "Coding, cognitive, personality & more",
    cta: "Browse the test library →",
    ctaHref: routes.testLibrary,
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    subs: [
      { label: "Coding tests", d: "Real-world dev challenges, 45+ languages", href: "/solutions/coding-tests" },
      { label: "Cognitive ability", d: "Reasoning & problem-solving", href: "/solutions/coding-tests" },
      { label: "Personality & behavioral", d: "Work style and culture fit", href: "/solutions/coding-tests" },
      { label: "Language & communication", d: "Proficiency across 16+ languages", href: "/solutions/coding-tests" },
      { label: "Role-based tests", d: "4,500+ job-specific assessments", href: "/solutions/coding-tests" },
    ],
  },
];

const RES: MenuTab[] = [
  {
    name: "Learn",
    tabDesc: "Blog, ebooks, glossary & podcast",
    cta: "Browse all resources →",
    ctaHref: routes.blog,
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
    subs: [
      { label: "Blog", d: "Hiring science, playbooks and product news", href: routes.blog },
      { label: "Ebooks & guides", d: "Deep dives on skills-based hiring", href: routes.blog },
      { label: "HR glossary", d: "500+ hiring terms, defined", href: routes.resourcesGlossary },
      { label: "Podcast", d: "Conversations with talent leaders", href: routes.blog },
      { label: "FAQ", d: "Quick answers on plans and platform", href: routes.blog },
    ],
  },
  {
    name: "Templates & tools",
    tabDesc: "Ready-to-use hiring assets",
    cta: "Get free HR tools →",
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
      { label: "Test library", d: "3,500+ validated tests across roles", href: routes.testLibrary },
      { label: "HR tools & calculators", d: "Cost per hire, time to hire & more", href: routes.resourcesTools },
      { label: "Job description templates", d: "Role-ready JDs in minutes", href: routes.resourcesJdTemplates },
      { label: "Interview question kits", d: "Structured, scorable prompts", href: routes.resourcesTools },
      { label: "Skills mapping", d: "Map roles to measurable skills", href: routes.resourcesTools },
    ],
  },
  {
    name: "Company",
    tabDesc: "Customers, trust, careers & about",
    cta: "Read success stories →",
    ctaHref: routes.customers,
    icon: (
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </>
    ),
    subs: [
      { label: "Success stories", d: "How 1,500+ teams hire on proof", href: routes.customers },
      { label: "Integrations", d: "100+ native ATS connections", href: routes.integrations },
      { label: "Trust center", d: "SOC 2, ISO 27001, GDPR", href: routes.security },
      { label: "Partners", d: "Refer, resell or build with us", href: routes.partners },
      { label: "About us", d: "Why we built Testlify", href: routes.about },
      { label: "Careers", d: "Join the team behind Testlify", href: routes.careers },
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
  const [solActive, setSolActive] = useState(0);
  const [resActive, setResActive] = useState(0);

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
                    ["testlify-ai", "ai-resume-screener", "skill-assessments", "ai-interviews"],
                    ["features", "ats-integrations", "science", "live-demo"],
                  ].map((col, ci) => (
                    <div
                      key={ci}
                      className={`flex flex-col gap-0.5 min-w-[268px] ${ci === 0 ? "border-r border-[#F4E4E5] pr-3.5 mr-3.5" : "mr-3.5"}`}
                    >
                      {col.map((id) => {
                        const g = PLAT.find((x) => x.id === id)!;
                        return (
                          <Link
                            key={g.id}
                            href={g.href ?? routes.productFeatures}
                            className="flex items-start gap-[11px] py-[9px] px-2.5 rounded-[11px] transition-colors hover:bg-[#FFF4F3]"
                          >
                            <span className="shrink-0 w-[34px] h-[34px] rounded-[9px] bg-rose-100 text-coral flex items-center justify-center mt-px">
                              <MegaIcon>{g.icon}</MegaIcon>
                            </span>
                            <span>
                              <span className="block text-[14px] font-semibold text-ink leading-[1.25]">{g.title}</span>
                              <span className="block text-[12px] text-[#9A878A] leading-[1.35] mt-0.5">{g.desc}</span>
                            </span>
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

            {/* Library mega */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#46383C] group-hover:text-coral transition-colors cursor-pointer bg-transparent border-0 py-1.5">
                Library<span className="text-[8px] opacity-60 transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>
              <div className={megaPanel}>
                <span className="absolute -top-[14px] left-0 right-0 h-[14px]" />
                <div className="flex">
                  <div className="flex flex-col gap-0.5 min-w-[300px] pt-0.5 mr-3.5">
                    <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#B59A9D] mb-2 px-2.5 mt-0.5">Browse the library</p>
                    {LIBRARY.map((g) => (
                      <Link
                        key={g.label}
                        href={g.href}
                        className="flex items-start gap-[11px] py-[9px] px-2.5 rounded-[11px] transition-colors hover:bg-[#FFF4F3]"
                      >
                        <span className="shrink-0 w-[34px] h-[34px] rounded-[9px] bg-rose-100 text-coral flex items-center justify-center mt-px">
                          <MegaIcon>{g.icon}</MegaIcon>
                        </span>
                        <span>
                          <span className="block text-[14px] font-semibold text-ink leading-[1.25]">{g.label}</span>
                          <span className="block text-[12px] text-[#9A878A] leading-[1.35] mt-0.5">{g.d}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="w-[216px] bg-gradient-to-br from-[#FFF1F0] to-[#FFE7E4] rounded-[14px] p-[18px] flex flex-col justify-center gap-[7px]">
                    <p className="text-[15px] font-bold text-[#1A0E10] m-0">One test, tests + interviews</p>
                    <p className="text-[12.5px] text-[#6B4F52] m-0 leading-[1.45]">Mix any assessment with an AI interview to build one job-ready evaluation.</p>
                    <Link href={routes.testLibrary} className="text-[13px] font-bold text-coral mt-1">Browse the library →</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions mega */}
            <div className="relative group">
              <button className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#46383C] group-hover:text-coral transition-colors cursor-pointer bg-transparent border-0 py-1.5">
                Solutions<span className="text-[8px] opacity-60 transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>
              <div className={megaPanel}>
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
                    <Link href={S.ctaHref} className="mt-1.5 text-[13px] font-bold text-coral px-3 py-2 hover:text-coral-deep">{S.cta}</Link>
                  </div>
                  <div className="w-[216px] bg-gradient-to-br from-[#FFF1F0] to-[#FFE7E4] rounded-[14px] p-[18px] flex flex-col justify-center gap-[7px]">
                    <p className="text-[15px] font-bold text-[#1A0E10] m-0">Not sure where to start?</p>
                    <p className="text-[12.5px] text-[#6B4F52] m-0 leading-[1.45]">Tell us how you hire — we&apos;ll map the right assessments to every role.</p>
                    <a href={contactHref} className="text-[13px] font-bold text-coral mt-1">Talk to sales →</a>
                  </div>
                </div>
              </div>
            </div>

            <Link href={routes.pricing} className={navLink}>Pricing</Link>

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
                    <Link href={R.ctaHref} className="mt-1.5 text-[13px] font-bold text-coral px-3 py-2 hover:text-coral-deep">{R.cta}</Link>
                  </div>
                  <div className="w-[216px] bg-gradient-to-br from-[#FFF1F0] to-[#FFE7E4] rounded-[14px] p-[18px] flex flex-col justify-center gap-[7px]">
                    <p className="text-[15px] font-bold text-[#1A0E10] m-0">Free HR toolkit</p>
                    <p className="text-[12.5px] text-[#6B4F52] m-0 leading-[1.45]">Job descriptions, interview kits and skills maps — ready to use.</p>
                    <Link href={routes.resourcesTools} className="text-[13px] font-bold text-coral mt-1">Browse free tools →</Link>
                  </div>
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
        onClick={() => setMobOpen(false)}
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
        <button onClick={() => setMobOpen(false)} aria-label="Close menu" className="absolute top-5 right-[22px] w-[42px] h-[42px] border-0 bg-[#FAF0F0] rounded-[11px] text-[20px] text-ink cursor-pointer leading-none">✕</button>
        {[
          ["Home", routes.home],
          ["Product", routes.productTestlifyAi],
          ["Library", routes.testLibrary],
          ["Solutions", routes.solutions],
          ["Pricing", routes.pricing],
          ["Resources", routes.blog],
        ].map(([label, href]) => (
          <Link key={label} href={href} onClick={() => setMobOpen(false)} className="block text-[18px] font-semibold text-ink py-[15px] px-1.5 border-b border-[#F4E8E9] hover:text-coral">{label}</Link>
        ))}
        <span className="block text-[12px] font-bold tracking-[0.1em] uppercase text-[#B59A9D] mt-[22px] mx-1.5 mb-1">Account</span>
        <a href={loginHref} onClick={() => setMobOpen(false)} className="block text-[18px] font-semibold text-ink py-[15px] px-1.5 border-b border-[#F4E8E9] hover:text-coral">Login</a>
        <a href={ctaHref} onClick={() => setMobOpen(false)} className="block text-center bg-coral text-white font-bold text-[16px] py-[15px] rounded-[13px] mt-[22px] shadow-[0_12px_26px_rgba(242,63,68,0.3)]">{ctaLabel}</a>
      </nav>
    </>
  );
}
