"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

/* ── small count-up that fires when scrolled into view ── */
function Count({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const dur = 1200;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(to * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setVal(to);
      };
      requestAnimationFrame(tick);
    };
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.94) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ── chart bar that grows to its target height when in view ── */
function GrowBar({
  h,
  delay = 0,
  gradient,
  cap = false,
}: {
  h: number;
  delay?: number;
  gradient: string;
  cap?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => setGrown(true);
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.94) {
      const t = setTimeout(run, delay * 1000);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(run, delay * 1000);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        position: cap ? "relative" : undefined,
        flex: 1,
        height: grown ? `${h}%` : 0,
        background: gradient,
        borderRadius: "8px 8px 4px 4px",
        transition: "height .9s cubic-bezier(.2,.7,.3,1)",
      }}
    >
      {cap && <span className="st-barcap" />}
    </div>
  );
}

/* divider eyebrow row before each template */
function TemplateLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1240px] mx-auto mt-16 px-7 flex items-center gap-[14px]">
      <span className="text-[12px] font-bold tracking-[1px] uppercase text-[#A91E23] bg-[#FFF0F0] px-[15px] py-[7px] rounded-full">
        {children}
      </span>
      <span className="flex-1 h-px bg-[#F2E1E2]" />
    </div>
  );
}

const arrowDown = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="6 13 12 19 18 13" />
  </svg>
);

const shifts = [
  { old: "Screening résumés", neu: "Validating real skills" },
  { old: "Gut-feel decisions", neu: "Evidence-based hiring" },
  { old: "Static credentials", neu: "Proven, AI-era capability" },
];

const testTypes = [
  {
    label: "Coding",
    tint: "#FFEDED",
    fg: "#F23F44",
    delay: "0s",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    label: "Cognitive",
    tint: "#EEEBFB",
    fg: "#6D5BD0",
    delay: "0.9s",
    icon: (
      <>
        <path d="M9.5 2a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-2.4-3.2A2.5 2.5 0 0 1 3.5 11a2.5 2.5 0 0 1 1.6-4.3A2.5 2.5 0 0 1 7 2.5 2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 2.4-3.2A2.5 2.5 0 0 0 20.5 11a2.5 2.5 0 0 0-1.6-4.3A2.5 2.5 0 0 0 17 2.5 2.5 2.5 0 0 0 14.5 2z" />
      </>
    ),
  },
  {
    label: "Language",
    tint: "#E6F0FD",
    fg: "#2A74E0",
    delay: "1.8s",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    label: "Role fit",
    tint: "#E3F5EE",
    fg: "#1F9D7A",
    delay: "2.7s",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  },
  {
    label: "Culture",
    tint: "#FCF1DC",
    fg: "#D69100",
    delay: "3.6s",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    label: "Software",
    tint: "#FFEDED",
    fg: "#F23F44",
    delay: "4.5s",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </>
    ),
  },
];

const launches = [
  {
    badge: "New",
    icColor: "#F23F44",
    icBg: "#FFEDED",
    title: "Multiple reviewer capability",
    desc: "Multiple interviewers evaluate candidates independently, with aggregated scoring and consolidated feedback for consistent, unbiased hiring decisions.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    badge: "New",
    icColor: "#2A74E0",
    icBg: "#EAF1FD",
    title: "Reference checks",
    desc: "Candidates submit professional references directly within the hiring flow, so you collect structured recommendations and validate suitability seamlessly.",
    icon: (
      <>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </>
    ),
  },
  {
    badge: "New",
    icColor: "#7A4FD0",
    icBg: "#F2ECFC",
    title: "Gamified assessments",
    desc: "Interactive, game-based assessments measure cognition, problem-solving, memory and decision-making — delivering validated insights and a better candidate experience.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    badge: "New",
    icColor: "#1F9D7A",
    icBg: "#E6F5EF",
    title: "360° feedback",
    desc: "Collect structured feedback from managers, peers, reports and self in one workflow — with competency insights, AI-powered summaries, and actionable recommendations.",
    icon: (
      <>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </>
    ),
  },
];

const features = [
  {
    title: "Anti-cheat proctoring",
    desc: "Webcam snapshots, tab tracking and plagiarism checks keep every result defensible.",
    icon: (
      <>
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </>
    ),
  },
  {
    title: "100+ ATS integrations",
    desc: "Native two-way sync with Workday, Greenhouse, Lever and 97 more.",
    icon: (
      <>
        <circle cx="7" cy="12" r="4" />
        <circle cx="17" cy="12" r="4" />
        <line x1="11" y1="12" x2="13" y2="12" />
      </>
    ),
  },
  {
    title: "White-label & API",
    desc: "Brand the candidate experience as your own and automate it end to end.",
    icon: (
      <>
        <line x1="4" y1="20" x2="4" y2="13" />
        <line x1="10" y1="20" x2="10" y2="8" />
        <line x1="16" y1="20" x2="16" y2="4" />
        <line x1="22" y1="20" x2="2" y2="20" />
      </>
    ),
  },
  {
    title: "AI interviewing",
    desc: "Conversational video, audio and chat interviews — auto-scored for relevance, communication and intent.",
    icon: (
      <>
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </>
    ),
  },
  {
    title: "9 languages",
    desc: "Assess candidates worldwide in English, German, Spanish, French, Dutch, Arabic, Italian, Japanese and Portuguese.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8M3.6 15h16.8" />
        <path d="M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18" />
      </>
    ),
  },
  {
    title: "Psychometric tests",
    desc: "Aptitude, personality and cognitive-ability assessments — build stronger, more cohesive teams.",
    icon: (
      <>
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M5 10v1a7 7 0 0 0 14 0v-1" />
        <path d="M12 19v3" />
      </>
    ),
  },
];

export default function SectionTemplatesClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const onPlayDemo = () => {
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    v.play().catch(() => {});
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* fixed background wash, matches the source's data-bgwash */}
      <div
        aria-hidden
        className="fixed inset-0 -z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 700px at 80% 12%,rgba(251,163,165,.16),transparent 60%),rgb(255,247,246)",
        }}
      />

      {/* scoped keyframes for the looping motion graphics */}
      <style>{`
        @keyframes st-scanmove{0%{top:-54px}100%{top:100%}}
        @keyframes st-sksheen{100%{transform:translateX(120%)}}
        @keyframes st-spin360{100%{transform:rotate(360deg)}}
        @keyframes st-rowglow{0%,100%{box-shadow:0 0 0 rgba(242,63,68,0);border-color:#FBD0D1}50%{box-shadow:0 10px 30px rgba(242,63,68,.22);border-color:#F23F44}}
        @keyframes st-ticyc{0%,74%,100%{transform:scale(1);box-shadow:0 0 0 rgba(242,63,68,0)}84%{transform:scale(1.16);box-shadow:0 8px 20px rgba(242,63,68,.32)}}
        @keyframes st-chartsheen{0%{left:-50%}60%,100%{left:130%}}
        @keyframes st-barcap{0%{box-shadow:0 0 0 0 rgba(242,63,68,.5)}70%,100%{box-shadow:0 0 0 12px rgba(242,63,68,0)}}
        @keyframes st-playring{0%{transform:scale(.7);opacity:0}14%{opacity:.7}100%{transform:scale(2.3);opacity:0}}
        .st-screencre{position:relative;overflow:hidden;border-radius:14px;}
        .st-scanbeam{position:absolute;left:0;right:0;height:54px;top:-54px;z-index:4;pointer-events:none;background:linear-gradient(180deg,rgba(242,63,68,0),rgba(242,63,68,.16) 45%,rgba(242,63,68,.16) 55%,rgba(242,63,68,0));animation:st-scanmove 3s ease-in-out infinite;}
        .st-scanbeam::after{content:"";position:absolute;left:0;right:0;top:50%;height:2px;background:linear-gradient(90deg,transparent,#F23F44,transparent);box-shadow:0 0 12px rgba(242,63,68,.6);}
        .st-skline{position:relative;overflow:hidden;}
        .st-skline::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent);transform:translateX(-100%);animation:st-sksheen 2s linear infinite;}
        .st-spin{display:inline-flex;animation:st-spin360 1.1s linear infinite;}
        .st-rowglow{animation:st-rowglow 3s ease-in-out infinite;}
        .st-ticyc{animation:st-ticyc 5.4s ease-in-out infinite;}
        .st-chartwrap{position:relative;overflow:hidden;border-radius:12px;}
        .st-chartwrap::after{content:"";position:absolute;top:0;bottom:0;width:40%;left:-50%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-16deg);animation:st-chartsheen 3.6s ease-in-out infinite;pointer-events:none;z-index:3;}
        .st-barcap{position:absolute;top:-7px;left:50%;width:12px;height:12px;margin-left:-6px;border-radius:50%;background:#F23F44;box-shadow:0 0 0 0 rgba(242,63,68,.5);animation:st-barcap 1.9s ease-out infinite;}
        .st-playpulse::before,.st-playpulse::after{content:"";position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;border-radius:50%;border:2px solid rgba(242,63,68,.55);animation:st-playring 2.4s ease-out infinite both;pointer-events:none;}
        .st-playpulse::after{animation-delay:1.2s;}
        @media(prefers-reduced-motion:reduce){
          .st-scanbeam,.st-skline::after,.st-spin,.st-rowglow,.st-ticyc,.st-chartwrap::after,.st-barcap,.st-playpulse::before,.st-playpulse::after{animation:none!important}
        }
      `}</style>

      <SiteHeader
        overlay
        announcement="Testlify AI is here — screen, interview & score candidates automatically."
        announcementCta="See what's new →"
        announcementHref="#demo"
      />

      {/* ── HERO ── */}
      <section
        className="px-7 pt-[150px] pb-[60px]"
        style={{
          background:
            "radial-gradient(1100px 520px at 78% 8%,#FCE0E1 0%,rgba(252,224,225,0) 58%),linear-gradient(180deg,#FFF8F7,#ffffff)",
        }}
      >
        <div className="max-w-[1100px] mx-auto text-center">
          <Reveal
            as="p"
            className="text-[14px] font-bold tracking-[1px] uppercase text-[#9A878A] m-0 mb-[14px]"
          >
            Section library<span className="text-coral">.</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="text-[clamp(34px,8vw,58px)] leading-[1.05] font-extrabold tracking-[-1.8px] m-0 text-ink"
          >
            Reusable page templates
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="text-[18px] leading-[1.6] text-body max-w-[600px] mx-auto mt-[22px]"
          >
            A library of pre-built sections moved off the homepage. Drop any of
            these into a new page as a starting point.
          </Reveal>
        </div>
      </section>

      {/* ── TEMPLATE · Watch / product video ── */}
      <TemplateLabel>Template · Watch / product video</TemplateLabel>
      <section id="watch" className="px-7 py-24 bg-white">
        <div className="max-w-[1040px] mx-auto">
          <div className="text-center max-w-[840px] mx-auto mb-10">
            <Reveal
              as="p"
              className="text-[14px] font-bold tracking-[1px] uppercase text-[#9A878A] m-0 mb-[14px]"
            >
              See Testlify in action<span className="text-coral">.</span>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.06}
              className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 text-ink"
            >
              Watch the whole funnel come together
            </Reveal>
          </div>
          <Reveal
            delay={0.1}
            className="relative rounded-[24px] overflow-hidden border border-warm shadow-[0_30px_70px_rgba(110,11,14,0.14)] bg-ink"
          >
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster="https://testlify.com/wp-content/uploads/2025/06/Featured-image-1.png"
              src="https://testlify.com/wp-content/uploads/2026/02/Product-overview-Testlify-Demo-January-2026-Updated-25mb.mp4"
              className="block w-full h-auto"
            />
            <button
              onClick={onPlayDemo}
              aria-label="Play product demo"
              className={`st-playpulse absolute inset-0 m-0 p-0 cursor-pointer flex flex-col items-center justify-center gap-[15px] bg-[linear-gradient(180deg,rgba(26,16,20,.32),rgba(26,16,20,.5))] transition-opacity duration-300 ${
                playing ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              <span className="w-[76px] h-[76px] rounded-full bg-coral flex items-center justify-center shadow-[0_16px_40px_rgba(242,63,68,0.5)]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  className="ml-[5px]"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-white text-[15px] font-semibold [text-shadow:0_1px_12px_rgba(0,0,0,.4)]">
                Watch the 2-minute product tour
              </span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* ── TEMPLATE · Manifesto / philosophy ── */}
      <TemplateLabel>Template · Manifesto / philosophy</TemplateLabel>
      <section id="manifesto" className="px-7 py-24 bg-transparent">
        <div className="max-w-[1180px] mx-auto">
          <Reveal
            as="p"
            className="text-[13px] font-bold tracking-[0.18em] uppercase text-[#9A878A] m-0 mb-[26px]"
          >
            The new era of work<span className="text-coral">.</span>
          </Reveal>
          <h2 className="text-[clamp(30px,4vw,52px)] font-extrabold tracking-[-0.03em] leading-[1.05] m-0 mb-[38px] max-w-[980px] text-ink">
            The future is <span className="text-coral">human plus AI.</span>
          </h2>
          <div className="text-[clamp(21px,2.3vw,33px)] font-semibold leading-[1.46] tracking-[-0.018em] max-w-[1000px] text-ink">
            <p className="m-0">
              AI isn&apos;t replacing people. It&apos;s redefining what great
              performance looks like. As work evolves, so do the skills that
              matter, the roles organizations hire for, and the way talent is
              discovered and developed.
            </p>
            <p className="m-0 mt-[0.7em]">
              Testlify is built for this new era — helping organizations identify
              human potential, validate AI-era skills, and make better hiring
              decisions with confidence.
            </p>
          </div>
          <div className="grid grid-cols-3 max-[760px]:grid-cols-1 gap-5 max-[760px]:gap-[14px] mt-[66px] max-[760px]:mt-12">
            {shifts.map((s, i) => (
              <Reveal
                key={s.old}
                delay={i * 0.08}
                className="bg-white border border-[#F4E4E5] rounded-[20px] px-7 pt-7 pb-[26px] shadow-[0_14px_38px_rgba(110,11,14,0.05)] transition-[translate,transform,box-shadow,border-color] duration-[250ms] hover:border-[#FBD0D1] hover:shadow-[0_22px_50px_rgba(110,11,14,0.10)]"
              >
                <span className="block text-[16px] text-[#A1908F] line-through decoration-[#E6CCCE]">
                  {s.old}
                </span>
                <span className="flex items-center text-coral my-3">
                  {arrowDown}
                </span>
                <span className="block text-[20px] font-bold text-ink tracking-[-0.35px] leading-[1.25]">
                  {s.neu}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEMPLATE · Test library showcase ── */}
      <TemplateLabel>Template · Test library showcase</TemplateLabel>
      <section id="library" className="px-7 py-24 bg-transparent">
        <div className="max-w-[1180px] mx-auto flex flex-col gap-[84px]">
          {/* Row 1 — Screen */}
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-[34px] items-center">
            <Reveal>
              <div className="text-[13px] font-bold tracking-[1px] uppercase text-[#9A878A] mb-[14px]">
                Screen<span className="text-coral">.</span>
              </div>
              <h3 className="text-[38px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 mb-4 text-ink">
                Cut the résumé pile by 80% — before lunch
              </h3>
              <p className="text-[17px] leading-[1.65] text-body m-0 mb-[22px]">
                Stop reading résumés top to bottom. Testlify&apos;s AI scores and
                ranks every applicant against the role, so your shortlist builds
                itself while you focus on people, not paperwork.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]"
              >
                Explore the screener<span>→</span>
              </a>
            </Reveal>
            <Reveal
              delay={0.1}
              className="max-[900px]:order-first bg-[#FFF8F8] border border-[#F4E4E5] rounded-[22px] p-6 shadow-[0_18px_44px_rgba(110,11,14,0.08)]"
            >
              <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#A91E23] bg-[#FFF0F0] border border-[#FBD0D1] px-[13px] py-[6px] rounded-full mb-[14px]">
                <span className="st-spin">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.2-8.5" />
                  </svg>
                </span>
                AI scanning 248 résumés…
              </div>
              <div className="st-screencre">
                <div className="st-scanbeam" />
                <div className="flex flex-col gap-3">
                  <Reveal
                    delay={0.15}
                    className="st-rowglow flex items-center gap-[13px] bg-white border-[1.5px] border-[#FBD0D1] rounded-[14px] p-[14px]"
                  >
                    <span className="w-10 h-10 rounded-[11px] bg-[linear-gradient(135deg,#F76A6E,#F23F44)]" />
                    <div className="flex-1">
                      <div className="st-skline h-[9px] w-[60%] bg-[#F1DEDF] rounded-[5px] mb-[7px]" />
                      <div className="st-skline h-2 w-[40%] bg-[#F6E9EA] rounded-[5px]" />
                    </div>
                    <span className="font-extrabold text-coral text-[18px]">
                      <Count to={94} />
                    </span>
                  </Reveal>
                  <Reveal
                    delay={0.28}
                    className="flex items-center gap-[13px] bg-white border border-warm rounded-[14px] p-[14px]"
                  >
                    <span className="w-10 h-10 rounded-[11px] bg-[linear-gradient(135deg,#FBA3A5,#F76A6E)]" />
                    <div className="flex-1">
                      <div className="st-skline h-[9px] w-[70%] bg-[#F1DEDF] rounded-[5px] mb-[7px]" />
                      <div className="st-skline h-2 w-[45%] bg-[#F6E9EA] rounded-[5px]" />
                    </div>
                    <span className="font-extrabold text-[#A91E23] text-[18px]">
                      <Count to={88} />
                    </span>
                  </Reveal>
                  <Reveal
                    delay={0.41}
                    className="flex items-center gap-[13px] bg-white border border-warm rounded-[14px] p-[14px] opacity-70"
                  >
                    <span className="w-10 h-10 rounded-[11px] bg-[linear-gradient(135deg,#FDD5D6,#FBA3A5)]" />
                    <div className="flex-1">
                      <div className="st-skline h-[9px] w-[52%] bg-[#F1DEDF] rounded-[5px] mb-[7px]" />
                      <div className="st-skline h-2 w-[38%] bg-[#F6E9EA] rounded-[5px]" />
                    </div>
                    <span className="font-extrabold text-[#C13238] text-[18px]">
                      <Count to={81} />
                    </span>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Row 2 — Assess (reversed) */}
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-[34px] items-center">
            <Reveal
              delay={0.1}
              className="max-[900px]:order-first bg-[#FFF8F8] border border-[#F4E4E5] rounded-[22px] p-6 shadow-[0_18px_44px_rgba(110,11,14,0.08)]"
            >
              <div className="grid grid-cols-3 gap-[11px]">
                {testTypes.map((t, i) => (
                  <Reveal
                    key={t.label}
                    delay={i * 0.05}
                    className="tt-tile bg-white border border-warm rounded-[13px] px-[10px] py-4 text-center transition-[translate,transform,box-shadow,border-color] duration-[260ms] hover:-translate-y-[5px] hover:shadow-[0_16px_30px_rgba(110,11,14,0.10)] hover:border-[#E7D7D9]"
                  >
                    <span
                      className="st-ticyc inline-flex items-center justify-center w-[38px] h-[38px] rounded-[11px] mb-[9px]"
                      style={{
                        background: t.tint,
                        color: t.fg,
                        animationDelay: t.delay,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {t.icon}
                      </svg>
                    </span>
                    <div className="text-[12.5px] font-semibold text-[#33282B]">
                      {t.label}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="text-[13px] font-bold tracking-[1px] uppercase text-[#9A878A] mb-[14px]">
                Assess<span className="text-coral">.</span>
              </div>
              <h3 className="text-[38px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 mb-4 text-ink">
                3,500+ tests, validated by experts
              </h3>
              <p className="text-[17px] leading-[1.65] text-body m-0 mb-[22px]">
                Mix and match skills, cognitive ability, language and personality
                into one fair assessment. Every test is built and reviewed by
                subject-matter experts — so a score actually means something.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]"
              >
                Browse the library<span>→</span>
              </a>
            </Reveal>
          </div>

          {/* Row 3 — Decide */}
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[900px]:gap-[34px] items-center">
            <Reveal>
              <div className="text-[13px] font-bold tracking-[1px] uppercase text-[#9A878A] mb-[14px]">
                Decide<span className="text-coral">.</span>
              </div>
              <h3 className="text-[38px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 mb-4 text-ink">
                Prove the impact to leadership
              </h3>
              <p className="text-[17px] leading-[1.65] text-body m-0 mb-[22px]">
                Track time-to-hire, funnel drop-off and quality of hire in one
                dashboard. Show exactly how skills-based hiring made your team
                faster, fairer and more diverse.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]"
              >
                See analytics<span>→</span>
              </a>
            </Reveal>
            <Reveal
              delay={0.1}
              className="max-[900px]:order-first bg-[#FFF8F8] border border-[#F4E4E5] rounded-[22px] p-6 shadow-[0_18px_44px_rgba(110,11,14,0.08)]"
            >
              <div className="st-chartwrap flex justify-between items-end gap-[10px] h-[150px] mb-4 px-1">
                <GrowBar
                  h={46}
                  gradient="linear-gradient(180deg,#FBA3A5,#F76A6E)"
                />
                <GrowBar
                  h={62}
                  delay={0.08}
                  gradient="linear-gradient(180deg,#FBA3A5,#F76A6E)"
                />
                <GrowBar
                  h={54}
                  delay={0.16}
                  gradient="linear-gradient(180deg,#FBA3A5,#F76A6E)"
                />
                <GrowBar
                  h={78}
                  delay={0.24}
                  gradient="linear-gradient(180deg,#F76A6E,#F23F44)"
                />
                <GrowBar
                  h={92}
                  delay={0.32}
                  gradient="linear-gradient(180deg,#F76A6E,#F23F44)"
                  cap
                />
              </div>
              <div className="grid grid-cols-2 gap-[11px]">
                <div className="bg-white border border-warm rounded-[13px] px-[15px] py-[13px]">
                  <div className="text-[22px] font-extrabold text-coral">
                    −<Count to={43} suffix="%" />
                  </div>
                  <div className="text-[12.5px] text-muted font-medium">
                    Time to hire
                  </div>
                </div>
                <div className="bg-white border border-warm rounded-[13px] px-[15px] py-[13px]">
                  <div className="text-[22px] font-extrabold text-coral">
                    <Count to={2.1} suffix="×" decimals={1} />
                  </div>
                  <div className="text-[12.5px] text-muted font-medium">
                    Shortlist diversity
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TEMPLATE · What's new / launches ── */}
      <TemplateLabel>Template · What&apos;s new / launches</TemplateLabel>
      <section id="whatsnew" className="px-7 py-24 bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center max-w-[820px] mx-auto mb-12">
            <Reveal
              as="p"
              className="text-[14px] font-bold tracking-[1px] uppercase text-[#9A878A] m-0 mb-[14px]"
            >
              Just shipped<span className="text-coral">.</span>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.06}
              className="text-[46px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 mb-4 text-ink"
            >
              New ways to hire with confidence
            </Reveal>
            <Reveal
              as="p"
              delay={0.1}
              className="text-[17px] leading-[1.6] text-[#6E5B5E] mx-auto max-w-[560px]"
            >
              The latest releases on Testlify — built to make every hiring
              decision more structured, fair, and informed.
            </Reveal>
          </div>
          <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-[22px]">
            {launches.map((l, i) => (
              <Reveal key={l.title} delay={0.06 + i * 0.06} className="flex">
                <Link
                  href={`${routes.home}#demo`}
                  className="relative flex flex-col items-start gap-[13px] w-full bg-white border border-[#F4E4E5] rounded-[22px] px-[30px] pt-[30px] pb-[26px] no-underline shadow-[0_12px_36px_rgba(110,11,14,0.05)] transition-[translate,transform,box-shadow,border-color] duration-[250ms] hover:border-[#FBD0D1] hover:shadow-[0_22px_50px_rgba(110,11,14,0.11)]"
                >
                  <span className="absolute top-[22px] right-[22px] text-[10.5px] font-bold tracking-[0.07em] uppercase text-coral bg-[#FFF0F0] px-[11px] py-[5px] rounded-full">
                    {l.badge}
                  </span>
                  <span
                    className="inline-flex w-12 h-12 rounded-[14px] items-center justify-center"
                    style={{ color: l.icColor, background: l.icBg }}
                  >
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {l.icon}
                    </svg>
                  </span>
                  <h3 className="text-[20px] font-extrabold tracking-[-0.4px] text-ink m-0 leading-[1.2]">
                    {l.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-[#6E5B5E] m-0">
                    {l.desc}
                  </p>
                  <span className="text-[13.5px] font-bold text-coral mt-auto pt-1">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEMPLATE · Feature grid ── */}
      <TemplateLabel>Template · Feature grid</TemplateLabel>
      <section id="everything" className="px-7 py-24 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[780px] mx-auto mb-[50px]">
            <Reveal
              as="p"
              className="text-[14px] font-bold tracking-[1px] uppercase text-[#9A878A] m-0 mb-[14px]"
            >
              And everything else<span className="text-coral">.</span>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.06}
              className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 text-ink"
            >
              Built for the way modern teams hire
            </Reveal>
          </div>
          <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-5">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={(i % 3) * 0.06}
                className="bg-white border border-[#F4E4E5] rounded-[20px] px-[26px] py-7 transition-[translate,transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(110,11,14,0.13)] hover:border-[#FBD0D1]"
              >
                <div className="w-[52px] h-[52px] rounded-[15px] bg-[#FFF0F0] flex items-center justify-center mb-[18px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F23F44"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3 className="text-[19px] font-bold m-0 mb-2 text-ink tracking-[-0.3px]">
                  {f.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-body m-0">
                  {f.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
