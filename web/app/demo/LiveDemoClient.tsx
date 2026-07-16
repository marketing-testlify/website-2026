"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

/* ---------- data ---------- */

const faqItems = [
  {
    q: "What is Testlify?",
    a: "Testlify is an advanced talent assessment tool designed to help organizations identify and hire top talent efficiently. It utilizes AI-powered algorithms and comprehensive data analysis to make informed hiring decisions.",
  },
  {
    q: "Is Testlify an all-in-one talent assessment tool?",
    a: "Yes, Testlify is a comprehensive solution that covers various aspects of talent assessment, from skills evaluation to personality profiling. It streamlines the entire hiring process, providing valuable insights to make informed decisions.",
  },
  {
    q: "Is Testlify suitable for SMBs and enterprise organizations?",
    a: "Absolutely! Testlify caters to businesses of all sizes. Whether you're a growing startup or a well-established enterprise, our tool is designed to fit seamlessly into your talent acquisition process.",
  },
  {
    q: "How does Testlify compare to other talent assessment tools?",
    a: "Testlify stands out with its cutting-edge AI-driven assessments, intuitive interface, and customizable solutions. Our platform offers unique insights and efficiency, setting it apart from traditional assessment tools.",
  },
  {
    q: "Can I try Testlify for free?",
    a: "Yes, we offer a free 7 days trial where you can experience our platform's capabilities firsthand. Sign up now to see how our tool can revolutionize your hiring process.",
  },
  {
    q: "Does Testlify support remote hiring?",
    a: "Absolutely! Testlify is optimized for remote hiring, allowing you to assess candidates from anywhere in the world. Collaborate with your team and find the perfect fit regardless of geographical constraints.",
  },
  {
    q: "Is Testlify user-friendly for both recruiters and candidates?",
    a: "Our platform is designed to be user-friendly for both recruiters and candidates. Intuitive interfaces and clear instructions ensure a smooth experience for all users.",
  },
];

const INTEGRATIONS: [string, string][] = [
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

/* icon + copy for the "Everything included" feature grid */
const FEATURES: { icon: ReactNode; title: string; desc: string; href: string }[] = [
  {
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    title: "Live coding tests",
    desc: "Real-time IDE across 45+ programming languages.",
    href: routes.productFeatures,
  },
  {
    icon: (
      <>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </>
    ),
    title: "White label",
    desc: "Your brand on every candidate touchpoint.",
    href: routes.productFeatures,
  },
  {
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
      </>
    ),
    title: "Integrations",
    desc: "100+ native two-way ATS syncs.",
    href: routes.integrations,
  },
  {
    icon: (
      <>
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </>
    ),
    title: "Multiple question types",
    desc: "13+ formats — MCQ, coding, video and more.",
    href: routes.productFeatures,
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    title: "Multilingual support",
    desc: "Assess candidates in 16+ languages.",
    href: routes.productFeatures,
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: "Anti cheating features",
    desc: "20+ proctoring and integrity measures.",
    href: routes.productFeatures,
  },
  {
    icon: (
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </>
    ),
    title: "Video interview questions",
    desc: "Async and live interviews, auto-scored.",
    href: routes.productFeatures,
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
    title: "Psychometric tests",
    desc: "Personality, culture and judgement insight.",
    href: routes.productFeatures,
  },
];

/* ---------- shared class strings ---------- */

const H2 =
  "text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 max-[960px]:text-[33px] max-[960px]:tracking-[-1px]";
const LEAD = "text-[19px] leading-[1.6] font-normal";
const SEC = "px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[72px]";
const WRAP = "max-w-[1240px] mx-auto px-7";
const SPLIT =
  "grid grid-cols-1 min-[961px]:grid-cols-[1.02fr_1fr] gap-11 min-[961px]:gap-16 items-center";

/* ---------- small shared pieces ---------- */

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px] ${className}`.trim()}>
      {children}
      <b className="text-coral font-semibold">.</b>
    </p>
  );
}

function CheckIcon({ size = 13, stroke = "#fff" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Chk({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="flex-none w-6 h-6 rounded-[7px] bg-coral flex items-center justify-center mt-px">
        <CheckIcon />
      </span>
      <p className="text-[16px] leading-[1.66] text-body m-0">{children}</p>
    </div>
  );
}

function TextLink({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]">
      {label}
      <span>→</span>
    </Link>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 1.8l3 6.8 7.2.7-5.4 4.9 1.6 7.1L12 17.6l-6.4 3.7 1.6-7.1L1.8 9.3 9 8.6z" />
    </svg>
  );
}

/* image/text split used by the five overview sections */
function Split({
  eyebrow,
  heading,
  lead,
  body,
  checks,
  linkLabel,
  linkHref,
  img,
  imgAlt,
  imageFirst = false,
  sand = false,
}: {
  eyebrow: string;
  heading: string;
  lead: string;
  body?: string;
  checks?: string[];
  linkLabel: string;
  linkHref: string;
  img: string;
  imgAlt: string;
  imageFirst?: boolean;
  sand?: boolean;
}) {
  const Text = (
    <Reveal className={imageFirst ? "order-2" : undefined}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`${H2} text-ink mb-5`}>{heading}</h2>
      <p className={`${LEAD} text-body mt-0 ${body ? "mb-4" : "mb-[22px]"}`}>{lead}</p>
      {body && <p className="text-[16px] leading-[1.66] text-body mt-0 mb-[26px]">{body}</p>}
      {checks && (
        <div className="flex flex-col gap-3.5 mb-[26px]">
          {checks.map((c) => (
            <Chk key={c}>{c}</Chk>
          ))}
        </div>
      )}
      <TextLink label={linkLabel} href={linkHref} />
    </Reveal>
  );

  const Image = (
    <Reveal delay={0.08}>
      <div className="rounded-[20px] overflow-hidden border border-warm shadow-[0_30px_60px_rgba(110,11,14,0.12)] bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={imgAlt} className="w-full h-auto block" />
      </div>
    </Reveal>
  );

  return (
    <section className={`${sand ? "bg-sand" : "bg-white"} ${SEC}`}>
      <div className={WRAP}>
        <div className={SPLIT}>
          {imageFirst ? (
            <>
              {Image}
              {Text}
            </>
          ) : (
            <>
              {Text}
              {Image}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* hero product video with an overlaid play button that hides on play */
function VideoEmbed() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative rounded-[20px] overflow-hidden border border-warm bg-black shadow-[0_40px_90px_rgba(110,11,14,0.16)]">
      <video
        ref={ref}
        controls
        preload="metadata"
        poster="https://testlify.com/wp-content/uploads/2023/06/May-2023-App-Sumo-Final-1280-%C3%97-720-px-1.png"
        src="https://testlify.com/wp-content/uploads/2026/02/Product-overview-Testlify-Demo-January-2026-Updated-25mb.mp4"
        className="w-full block"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>
      <button
        type="button"
        aria-label="Play demo video"
        onClick={() => ref.current?.play()}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[86px] h-[86px] rounded-full bg-coral border-0 cursor-pointer flex items-center justify-center shadow-[0_16px_40px_rgba(242,63,68,0.45)] transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:scale-[1.14] ${
          playing ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff" className="ml-[5px]" aria-hidden>
          <polygon points="6 4 20 12 6 20 6 4" />
        </svg>
      </button>
    </div>
  );
}

/* ---------- page ---------- */

export default function LiveDemoClient() {
  return (
    <>
      <SiteHeader
        announcement="Watch the demo — see skills-based hiring end to end in 3 minutes."
        announcementCta="Watch now"
      />

      {/* 1 · HERO — centered, with product video */}
      <section
        className="relative overflow-hidden px-7 pt-[70px] pb-[90px] max-[960px]:px-[22px] max-[960px]:pt-11 max-[960px]:pb-16"
        style={{ background: "radial-gradient(1100px 540px at 78% 6%, #FFF0EE 0%, rgba(255,240,238,0) 60%), #fff" }}
      >
        <div className="max-w-[900px] mx-auto px-7 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-[9px] bg-white border border-[#F4D9DA] rounded-full py-[7px] pr-[15px] pl-2 text-[13px] font-semibold text-[#A8323A] shadow-[0_6px_16px_rgba(110,11,14,0.06)]">
              <span className="bg-coral text-white text-[11px] font-bold tracking-[0.04em] py-[3px] px-[9px] rounded-full">
                LIVE DEMO
              </span>
              See it in action
            </span>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="mt-[22px] mb-0 mx-auto max-w-[820px] text-[62px] leading-[1.04] font-extrabold tracking-[-2px] text-ink max-[960px]:text-[44px] max-[960px]:tracking-[-1.4px]"
          >
            Experience Testlify with a demo
          </Reveal>
          <Reveal as="p" delay={0.1} className={`${LEAD} text-body mt-[22px] mb-0 mx-auto max-w-[660px]`}>
            See how Testlify helps 1,500+ teams hire with confidence using skills-based assessments, structured
            interviews, and advanced proctoring, all in one platform.
          </Reveal>
          <Reveal delay={0.14} className="flex items-center justify-center gap-3.5 flex-wrap mt-8">
            <CtaButton
              label="Try for free"
              href={routes.pricing}
              variant="primary"
              size="md"
              icon="arrow"
              className="border-[1.5px] border-transparent"
            />
            <CtaButton
              label="Book a demo"
              href={routes.contact}
              variant="secondary"
              size="md"
              icon="play"
              className="[&>span:first-child]:w-6 [&>span:first-child]:h-6"
            />
          </Reveal>
        </div>
        <div className="max-w-[960px] mx-auto px-7 mt-[52px]">
          <Reveal>
            <VideoEmbed />
          </Reveal>
          <Reveal as="p" className="text-center text-[12.5px] text-muted max-w-[660px] mx-auto mt-4">
            By booking a demo with us, you agree to receive SMS and email updates from Testlify about demos and hiring
            solutions. You can opt out anytime.
          </Reveal>
        </div>
      </section>

      {/* 2 · EVERYTHING INCLUDED (sand) */}
      <section className={`bg-sand ${SEC}`}>
        <div className={WRAP}>
          <div className="text-center max-w-[680px] mx-auto mb-11">
            <Reveal>
              <Eyebrow className="justify-center">Everything included</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              All the best features you need
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-2 min-[861px]:grid-cols-4 gap-[18px]">
            {FEATURES.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group relative flex flex-col gap-3 bg-white border border-warm3 rounded-[18px] py-[26px] px-[22px] transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-[5px] hover:border-[#FBD0D1] hover:shadow-[0_18px_38px_rgba(110,11,14,0.12)]"
              >
                <span className="flex-none w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center transition-[background-color,color,transform] duration-300 group-hover:bg-coral group-hover:text-white group-hover:-translate-y-0.5">
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {f.icon}
                  </svg>
                </span>
                <h3 className="text-[16px] font-bold text-ink tracking-[-0.3px] m-0">{f.title}</h3>
                <p className="text-[13px] leading-[1.5] text-[#6C5A5D] m-0">{f.desc}</p>
                <span className="mt-auto pt-1 text-coral font-semibold text-[13px] inline-flex items-center gap-1.5 opacity-0 -translate-x-1 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 3 · KNOW CANDIDATES BETTER (white) */}
      <Split
        eyebrow="Know candidates better"
        heading="Know candidates better"
        lead="Reduce time evaluating job applicants with our comprehensive library of technical tests, that cover coding, software, languages, job skills, and cognitive ability to ensure you choose the right people for your company, every time."
        checks={[
          "Assess technical, functional, and communication skills in a single go.",
          "Understand the intricacies of personality traits with our psychometric tests.",
          "Use typing tests and Google Sheets/Doc/Slides questions, ensuring a hands-on evaluation of candidates’ capabilities.",
        ]}
        linkLabel="Explore test library"
        linkHref={routes.testLibrary}
        img="https://testlify.com/wp-content/uploads/2024/09/Know-candidates-better-1024x736.png"
        imgAlt="Know candidates better"
      />

      {/* 4 · HIRE WITHOUT COMPROMISE (sand, image left) */}
      <Split
        sand
        imageFirst
        eyebrow="Hire without compromise"
        heading="Hire without compromise"
        lead="Hiring the right talent can make or break your business. Testlify helps corporate businesses scale their workforce without compromising on the quality of the people they hire."
        checks={[
          "Automate assessments for multiple roles.",
          "Analyze candidate results with your team.",
          "Shortlist the best-fit candidates fast.",
        ]}
        linkLabel="Features"
        linkHref={routes.productFeatures}
        img="https://testlify.com/wp-content/uploads/2024/08/Hire-without-compromise-4.jpg"
        imgAlt="Hire without compromise"
      />

      {/* 5 · GROW A DIVERSE WORKFORCE (white) */}
      <Split
        eyebrow="Grow a diverse workforce"
        heading="Grow a diverse workforce"
        lead="Applying your diversity and inclusion policies to your hiring process isn’t easy. Testlify gives you the ability to integrate fair hiring practices into your screening process without the need for complex solutions."
        checks={[
          "Hide sensitive information that could influence decisions.",
          "Increase the depth of diversity in your workplace.",
          "Set the standard for fair and unbiased hiring.",
        ]}
        linkLabel="Learn more"
        linkHref={routes.productFeatures}
        img="https://testlify.com/wp-content/uploads/2024/09/Grow-a-diverse-workforce.jpg"
        imgAlt="Grow a diverse workforce"
      />

      {/* 6 · ATS INTEGRATION (sand, image left) */}
      <Split
        sand
        imageFirst
        eyebrow="ATS integration"
        heading="Make your job easier by integrating Testlify with your ATS"
        lead="No more manual data entry or juggling between multiple platforms, import candidates’ profiles and assessment results directly into your existing ATS system."
        checks={[
          "Seamless data sync and customizable workflows.",
          "Candidate ranking and comparison.",
          "Make collaboration and communication easier.",
        ]}
        linkLabel="ATS integrations"
        linkHref={routes.integrations}
        img="https://testlify.com/wp-content/uploads/2024/08/Make-your-job-easier-by-integrating-Testlify-with-your-ATS-2.jpg"
        imgAlt="Make your job easier by integrating Testlify with your ATS"
      />

      {/* 7 · CANDIDATE EXPERIENCE (white) */}
      <Split
        eyebrow="Candidate experience"
        heading="Deliver memorable hiring experiences"
        lead="First impressions last, but most companies fail to make a positive impression on candidates and establish a strong reputation as a favorable employer."
        body="Testlify delivers an enjoyable and highly engaging assessment experience for candidates that ensures a high completion rate to compare, rank and select the best applicants."
        linkLabel="Explore white label features"
        linkHref={routes.productFeatures}
        img="https://testlify.com/wp-content/uploads/2024/09/Deliver-memorable-hiring-experiences.png"
        imgAlt="Deliver memorable hiring experiences"
      />

      {/* 8 · JOIN BAND (dark) */}
      <section className={`bg-ink ${SEC}`}>
        <div className="max-w-[760px] mx-auto px-7 text-center">
          <Reveal as="h2" className={`${H2} text-white`}>
            Join leading companies who trust Testlify for skill assessments
          </Reveal>
          <Reveal as="p" delay={0.06} className={`${LEAD} text-[#D3C3C6] mt-[18px] mb-[30px] mx-auto`}>
            Great talent is the key to your company&rsquo;s lasting success. Join industry leaders who have already
            experienced the power of Testlify&rsquo;s talent assessment tool. Embrace the future of recruitment and
            unleash your organization&rsquo;s full potential.
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <CtaButton label="Try for free" href={routes.pricing} variant="primary" size="md" icon="arrow" />
          </Reveal>
        </div>
      </section>

      {/* 9 · INTEGRATIONS (sand) */}
      <section id="platform" className={`bg-sand ${SEC}`}>
        <div className={WRAP}>
          <div className="text-center max-w-[720px] mx-auto mb-11">
            <Reveal>
              <Eyebrow className="justify-center">Integrations</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={0.06} className={`${H2} text-ink`}>
              Testlify integrates seamlessly with 100+ ATS tools
            </Reveal>
            <Reveal as="p" delay={0.12} className={`${LEAD} text-body mt-3.5 mb-0`}>
              Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate
              workflows, and gain deeper insights to make informed hiring decisions faster.
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-3 min-[961px]:grid-cols-5 gap-3.5">
            {INTEGRATIONS.map(([src, alt]) => (
              <div
                key={alt}
                className="flex items-center justify-center h-[88px] bg-white border border-warm3 rounded-2xl py-4 px-5 transition-[translate,box-shadow,border-color] duration-[280ms] ease-[ease] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="max-w-full max-h-10 object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="text-center mt-[26px]">
            <TextLink label="View all ATS integrations" href={routes.integrations} />
          </Reveal>
        </div>
      </section>

      {/* 10 · SECURITY & COMPLIANCE (white, shared component) */}
      <SecuritySection
        eyebrow="Security & compliance"
        heading="Built to keep your organization secure"
        sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections."
      />

      {/* 11 · TESTIMONIAL (sand) */}
      <section className={`bg-sand ${SEC}`}>
        <Reveal className="max-w-[900px] mx-auto px-7 text-center">
          <div className="flex items-center justify-center gap-[3px] text-[13px] font-bold tracking-[0.1em] text-coral mb-6">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <span className="ml-2">G2 · 4.7 / 5</span>
          </div>
          <p className="text-[31px] leading-[1.38] font-semibold tracking-[-0.6px] text-ink mt-0 mb-[30px]">
            &ldquo;We replaced three rounds of gut-feel screening with one Testlify assessment. The AI scoring is
            consistent, the audit trail keeps us defensible, and our shortlists are measurably stronger.&rdquo;
          </p>
          <div className="inline-flex items-center gap-[13px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2026/03/Xneelo-Chrissie-Blom.png"
              alt="Chrissie Blom"
              className="w-[52px] h-[52px] rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-bold text-[15px]">Chrissie Blom</div>
              <div className="text-muted text-[13.5px] mt-0.5">Head of Talent · Xneelo</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 12 · FAQ (white) */}
      <section className={`bg-white ${SEC}`}>
        <div className="max-w-[840px] mx-auto px-7">
          <div className="text-center mb-11">
            <Reveal>
              <Eyebrow className="justify-center">FAQ</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              Frequently asked questions (FAQs)
            </Reveal>
            <Reveal as="p" delay={0.08} className={`${LEAD} text-body mt-3.5 mb-0`}>
              Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.
            </Reveal>
          </div>
          <Reveal>
            <FAQ items={faqItems} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
