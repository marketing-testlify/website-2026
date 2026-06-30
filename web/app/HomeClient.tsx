"use client";

import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import UseCaseCard from "@/components/UseCaseCard";
import SecuritySection from "@/components/SecuritySection";
import MagneticButtons from "@/components/MagneticButtons";
import StatsNetCanvas from "@/components/StatsNetCanvas";

/* ---------- data ---------- */

const HERO_WORDS = ["skill", "talent", "ability", "proof", "potential", "fit"];

const MARQUEE = [
  "Solvay",
  "Airtel",
  "inDrive",
  "Northeastern University",
  "Doctors Without Borders",
  "Agilisium",
  "Netconomy",
  "Xneelo",
];

const STEPS = [
  {
    n: "1",
    title: "Build the assessment",
    desc: "Pick from 3,500+ ready tests or let AI generate a custom one from your job description in under a minute.",
  },
  {
    n: "2",
    title: "Invite candidates",
    desc: "Share one link or sync from your ATS. Candidates complete a fair, proctored experience on any device.",
  },
  {
    n: "3",
    title: "Compare & shortlist",
    desc: "Get an objective, ranked leaderboard. Move the strongest people forward in 30 minutes — bias left behind.",
  },
];

type DemoTab = { id: number; label: string };
const DEMO_TABS: DemoTab[] = [
  { id: 1, label: "Test library" },
  { id: 2, label: "Video interview" },
  { id: 0, label: "AI resume screener" },
];

const TESTIMONIALS = [
  {
    img: "https://testlify.com/wp-content/uploads/2026/03/Xneelo-Chrissie-Blom.png",
    name: "Chrissie Blom",
    role: "Technical Talent Specialist, Xneelo",
    quote:
      "We cut screening time by two-thirds. The ranked shortlist is the first thing my hiring managers open every morning.",
  },
  {
    img: "https://testlify.com/wp-content/uploads/2026/03/Kimp-Senthu-Velnayagam.png",
    name: "Senthu Velnayagam",
    role: "People Ops, Kimp",
    quote:
      "Skills-based assessments doubled our shortlist diversity and our offer-acceptance rate. The data finally backs every decision.",
  },
  {
    img: "https://testlify.com/wp-content/uploads/2026/03/Endiprev-Daniela-Santos.png",
    name: "Daniela Santos",
    role: "HR Lead, Endiprev",
    quote:
      "Setup took an afternoon. Within a week we'd replaced three rounds of phone screens with one fair assessment.",
  },
  {
    img: "https://testlify.com/wp-content/uploads/2026/03/Virtual-Gurus-Abby-Belin.png",
    name: "Abby Belin",
    role: "Recruiting, Virtual Gurus",
    quote:
      "Candidates actually thank us for the experience. It feels fair, it's fast, and our drop-off fell off a cliff.",
  },
];

const VS_OLD = [
  "Hours lost manually reading resumes for every role",
  "Keyword matching misses people who can really do the job",
  "Unconscious bias creeps into every shortlist",
  "A single mis-hire costs months of salary and momentum",
  "No defensible audit trail when decisions are questioned",
];

const VS_NEW = [
  "Screen a full pipeline in 30 minutes, not days",
  "Verified skills that genuinely predict on-the-job performance",
  "Bias-controlled and EEOC-defensible by design",
  "Up to 75% less screening time, with higher quality of hire",
  "Every decision scored, documented and fair",
];

const USE_CASES = [
  { icon: "chart" as const, tint: "#FFEDED", ink: "#F23F44", title: "Volume hiring", desc: "Screen thousands of applicants automatically and surface the top few in minutes." },
  { icon: "globe" as const, tint: "#E6F0FD", ink: "#2A74E0", title: "Remote & global", desc: "Assess candidates anywhere, in 9 languages, with a consistent, fair experience." },
  { icon: "cap" as const, tint: "#E3F5EE", ink: "#1F9D7A", title: "Campus & early talent", desc: "Evaluate potential and aptitude at scale — no experience required to shine." },
  { icon: "users" as const, tint: "#FCF1DC", ink: "#D69100", title: "Diversity & inclusion", desc: "Remove bias from screening and build teams on merit, not pedigree." },
  { icon: "code" as const, tint: "#EEEBFB", ink: "#6D5BD0", title: "Technical & coding", desc: "Live coding, real-world dev tasks and auto-scored challenges across 50+ stacks." },
  { icon: "headset" as const, tint: "#FFEDED", ink: "#F23F44", title: "Sales & customer-facing", desc: "Role-play simulations and situational judgement tests that mirror the real job." },
  { icon: "compass" as const, tint: "#E6F0FD", ink: "#2A74E0", title: "Leadership & psychometric", desc: "Personality, aptitude and cognitive insight to build cohesive, high-trust teams." },
  { icon: "bolt" as const, tint: "#E3F5EE", ink: "#1F9D7A", title: "Lateral & specialist", desc: "Validate deep, role-specific expertise before you commit to a senior hire." },
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

const MEDALS: [string, string][] = [
  ["https://testlify.com/wp-content/uploads/2026/03/TalentAssessment_Leader_Leader.png", "G2 Leader"],
  ["https://testlify.com/wp-content/uploads/2026/03/TalentAssessment_HighPerformer_Enterprise_HighPerformer.png", "G2 High Performer Enterprise"],
  ["https://testlify.com/wp-content/uploads/2026/03/TalentAssessment_HighPerformer_Mid-Market_HighPerformer.png", "G2 High Performer Mid-Market"],
  ["https://testlify.com/wp-content/uploads/2026/03/TechnicalSkillsScreening_BestRelationship_Total.png", "G2 Best Relationship"],
  ["https://testlify.com/wp-content/uploads/2026/03/TechnicalSkillsScreening_BestMeetsRequirements_Mid-Market_MeetsRequirements.png", "G2 Best Meets Requirements"],
  ["https://testlify.com/wp-content/uploads/2026/03/TechnicalSkillsScreening_UsersMostLikelyToRecommend_Mid-Market_Nps.png", "G2 Most Likely to Recommend"],
];

const FAQ_ITEMS = [
  { q: "What is Testlify?", a: "Testlify is a skills assessment and interviewing platform that helps companies hire top talent quickly, accurately and affordably. We take the stress out of finding the best candidates with deep analysis that's accurate, automated and unbiased." },
  { q: "How does Testlify help in my hiring process?", a: "Testlify's AI-powered pre-hire assessments measure the skills and job fitment of a candidate. These tests allow for quick screening, eliminate bias in hiring, and increase the productivity of recruiters and hiring managers — a proven solution against high employee turnover." },
  { q: "How are the pre-employment tests created?", a: "Tests are built by subject-matter experts and I/O psychologists, validated psychometrically to accurately measure skills and predict job performance. Randomized question banks prevent answer sharing, while bias reviews ensure every candidate is assessed purely on merit." },
  { q: "How is Testlify different from other tools?", a: "Our assessments are validated by I/O psychologists and built to withstand EEOC scrutiny. We prioritize on-the-job skills over trick questions, use non-googleable questions with advanced proctoring, and keep tests low-stress and adaptive — just 30 minutes, with minimal drop-off." },
  { q: "What types of questions can I ask?", a: "Depending on the role: multiple choice, descriptive, video and audio questions, open-ended, typing tests, file upload, Google Docs/Sheets/Slides questions, programming questions and live coding challenges." },
];

const STATS = [
  { count: 1500, suffix: "+", label: "Talent teams hiring smarter" },
  { count: 3500, suffix: "+", label: "Expert-validated tests" },
  { count: 94, suffix: "%", label: "Candidate satisfaction" },
  { count: 55, suffix: "%", label: "Faster time to hire" },
];

/* ---------- small helpers ---------- */

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const dur = 1500;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e).toLocaleString("en-US") + suffix;
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && run()),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, suffix]);
  return <span ref={ref}>0</span>;
}

export default function HomeClient() {
  const [tab, setTab] = useState(1);
  const [stage, setStage] = useState(0);
  const [slide, setSlide] = useState(0);
  const [statActive, setStatActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  /* hero word swap */
  const wordRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % HERO_WORDS.length;
      const start = performance.now();
      const out = (t: number) => {
        const p = Math.min((t - start) / 180, 1);
        el.style.opacity = String(1 - p);
        el.style.transform = `translateY(${(-6 * p).toFixed(1)}px)`;
        if (p < 1) requestAnimationFrame(out);
        else {
          el.textContent = HERO_WORDS[i];
          const s2 = performance.now();
          const inn = (t2: number) => {
            const q = Math.min((t2 - s2) / 240, 1);
            el.style.opacity = String(q);
            el.style.transform = `translateY(${(6 * (1 - q)).toFixed(1)}px)`;
            if (q < 1) requestAnimationFrame(inn);
            else {
              el.style.opacity = "1";
              el.style.transform = "none";
            }
          };
          requestAnimationFrame(inn);
        }
      };
      requestAnimationFrame(out);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  /* "how it works" auto-cycle */
  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % STEPS.length), 3200);
    return () => clearInterval(id);
  }, []);

  /* testimonial carousel — advance with seamless loop via clone */
  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => setSlide((s) => s + 1), 4800);
    return () => clearInterval(id);
  }, [hovering]);

  // seamless loop: when we land on the clone (index === length), snap back to 0 without transition
  const realCount = TESTIMONIALS.length;
  const [noTransition, setNoTransition] = useState(false);
  useEffect(() => {
    if (slide === realCount) {
      const id = setTimeout(() => {
        setNoTransition(true);
        setSlide(0);
      }, 620);
      return () => clearTimeout(id);
    }
    if (noTransition) {
      const id = requestAnimationFrame(() => setNoTransition(false));
      return () => cancelAnimationFrame(id);
    }
  }, [slide, realCount, noTransition]);

  const goPrev = () =>
    setSlide((s) => (s <= 0 ? realCount - 1 : s - 1));
  const goNext = () => setSlide((s) => s + 1);
  const activeDot = slide % realCount;

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <style>{KEYFRAMES}</style>

      {/* fixed background wash */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          background:
            "radial-gradient(1200px 700px at 80% 12%,rgba(251,163,165,.16),transparent 60%),rgb(255,247,246)",
        }}
      />

      <SiteHeader
        overlay
        announcement="Testlify AI is here — screen, interview & score candidates automatically."
        announcementCta="See what's new →"
        announcementHref="#demo"
      />

      {/* ============ HERO ============ */}
      <MagneticButtons scopeRef={heroRef} />
      <section
        ref={heroRef}
        id="top"
        className="px-7"
        style={{
          position: "relative",
          padding: "206px 28px 92px",
          background:
            "radial-gradient(1100px 520px at 78% 8%,#FCE0E1 0%,rgba(252,224,225,0) 58%),radial-gradient(900px 540px at 6% 60%,#FFEDED 0%,rgba(255,237,237,0) 52%),linear-gradient(180deg,#FFF8F7 0%,#FFFBFA 70%,#ffffff 100%)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -130,
            left: -90,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 60% 40%,#FDD5D6,#FBA3A5)",
            filter: "blur(30px)",
            opacity: 0.16,
            animation: "tl-blob 22s ease-in-out infinite reverse",
          }}
        />

        <div
          className="max-[900px]:grid-cols-1! max-[900px]:gap-12!"
          style={{
            position: "relative",
            maxWidth: 1240,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* left */}
          <div>
            <Reveal
              className="inline-flex items-center gap-[9px] bg-white border border-[#FBD0D1] px-4 py-2 rounded-full shadow-[0_6px_18px_rgba(242,63,68,0.10)]"
            >
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              <span className="text-[13.5px] font-semibold text-coral-deep tracking-[0.2px]">
                AI-powered skills assessment
              </span>
            </Reveal>
            <Reveal
              as="h1"
              delay={0.08}
              className="h1-big text-[74px] leading-[1.0] font-extrabold tracking-[-2.4px] mt-[22px] mb-0 text-ink max-[900px]:text-[50px]! max-[900px]:leading-[1.04]!"
            >
              Hire on{" "}
              <span style={{ color: "#F23F44", position: "relative", whiteSpace: "nowrap", display: "inline-block" }}>
                <span ref={wordRef} className="tl-shimmer">
                  skill
                </span>
                <span aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: 7, height: 13, background: "#FDD5D6", zIndex: -1, borderRadius: 7 }} />
              </span>
              ,
              <br />
              not on <span style={{ color: "#1A1014" }}>a r&eacute;sum&eacute;</span>.
            </Reveal>
            <Reveal
              as="p"
              delay={0.16}
              className="text-[19px] leading-[1.6] text-body max-w-[500px] mt-6 font-normal"
            >
              Your next great hire is already in your pipeline. Testlify surfaces them in 30 minutes with validated assessments — no resume bias, no gut-check interviews, no bad-hire regret.
            </Reveal>
            <Reveal
              delay={0.24}
              className="flex flex-wrap gap-3.5 mt-[34px]"
            >
              <a
                href="#"
                data-magnetic
                className="btn-sheen inline-flex items-center gap-[9px] bg-coral text-white font-semibold text-[17px] px-[30px] py-4 rounded-[15px] shadow-[0_14px_30px_rgba(242,63,68,0.35)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(242,63,68,0.45)]"
              >
                Try for free
                <span className="text-[19px]">→</span>
              </a>
              <a
                href="#"
                data-magnetic
                className="inline-flex items-center gap-2.5 bg-white text-ink font-semibold text-[17px] px-7 py-4 rounded-[15px] border-[1.5px] border-[#F0D9DA] transition-all duration-300 hover:border-coral"
              >
                <span className="w-[30px] h-[30px] rounded-full bg-[#FFF0F0] inline-flex items-center justify-center text-coral text-[11px]">
                  ▶
                </span>
                Book a demo
              </a>
            </Reveal>
            <Reveal
              delay={0.28}
              className="flex items-center gap-3.5 mt-[18px] flex-wrap text-[13.5px] text-muted font-semibold tracking-[0.2px]"
            >
              <span>No credit card required</span>
              <span className="w-1 h-1 rounded-full bg-[#D9C7C9]" />
              <span>Free 7-day trial</span>
            </Reveal>
            <Reveal
              delay={0.32}
              className="flex items-center gap-[22px] mt-[30px] flex-wrap"
            >
              <div className="flex items-center">
                {[
                  { t: "AK", g: "linear-gradient(135deg,#F76A6E,#F23F44)", ml: 0 },
                  { t: "RM", g: "linear-gradient(135deg,#FBA3A5,#F76A6E)", ml: -12 },
                  { t: "SJ", g: "linear-gradient(135deg,#A91E23,#F23F44)", ml: -12 },
                  { t: "+", g: "linear-gradient(135deg,#6E0B0E,#A91E23)", ml: -12 },
                ].map((a, i) => (
                  <span
                    key={i}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: a.g,
                      border: "2.5px solid #fff",
                      marginLeft: a.ml,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {a.t}
                  </span>
                ))}
              </div>
              <div className="text-[14px] text-body leading-[1.4]">
                <strong className="text-ink">1,500+ talent teams</strong>
                <br />
                hire faster with Testlify
              </div>
            </Reveal>
          </div>

          {/* right — ranked shortlist card with globe backdrop approximation */}
          <Reveal delay={0.18} className="relative">
            <div
              aria-hidden
              className="tl-globe-spin"
              style={{
                position: "absolute",
                top: "48%",
                left: "52%",
                width: 660,
                height: 660,
                transform: "translate(-50%,-50%)",
                zIndex: 0,
                pointerEvents: "none",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 50% 50%,rgba(242,63,68,0.10) 0%,rgba(242,63,68,0.05) 38%,rgba(242,63,68,0) 62%)",
              }}
            >
              <GlobeSvg />
            </div>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -30,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(242,63,68,.10),transparent 70%)",
              }}
            />
            <div
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: 24,
                boxShadow: "0 30px 70px rgba(110,11,14,.18)",
                padding: 22,
                border: "1px solid #FBE4E5",
              }}
            >
              <div className="flex items-center gap-2 mb-[18px]">
                <span className="w-[11px] h-[11px] rounded-full bg-[#FBA3A5]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#FDD5D6]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[#FFE9EA]" />
              </div>
              <div className="text-[13px] font-semibold text-muted mb-3.5 tracking-[0.3px]">
                SENIOR FRONTEND ENGINEER · 248 ASSESSED
              </div>
              <div className="flex flex-col gap-[11px]">
                {[
                  { av: "PA", g: "linear-gradient(135deg,#F76A6E,#F23F44)", name: "Priya A.", pct: "96%", pc: "#F23F44", w: 96, sel: true, bar: "linear-gradient(90deg,#F76A6E,#F23F44)", track: "#FDE3E4" },
                  { av: "DT", g: "linear-gradient(135deg,#FBA3A5,#F76A6E)", name: "David T.", pct: "89%", pc: "#A91E23", w: 89, sel: false, bar: "linear-gradient(90deg,#FBA3A5,#F76A6E)", track: "#F4EBEC" },
                  { av: "MK", g: "linear-gradient(135deg,#FDD5D6,#FBA3A5)", name: "Maya K.", pct: "82%", pc: "#C13238", w: 82, sel: false, bar: "linear-gradient(90deg,#FDD5D6,#FBA3A5)", track: "#F4EBEC", inkAv: true },
                ].map((r) => (
                  <div
                    key={r.av}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 13,
                      background: r.sel ? "#FFF6F6" : "#fff",
                      border: r.sel ? "1.5px solid #FBD0D1" : "1.5px solid #F2E6E7",
                      borderRadius: 15,
                      padding: "13px 15px",
                    }}
                  >
                    <span
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: r.g,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: r.inkAv ? "#A91E23" : "#fff",
                        fontWeight: 600,
                        fontSize: 15,
                        flexShrink: 0,
                      }}
                    >
                      {r.av}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="flex justify-between items-center mb-[7px]">
                        <span className="font-semibold text-[15px] text-ink">{r.name}</span>
                        <span className="font-bold text-[15px]" style={{ color: r.pc }}>{r.pct}</span>
                      </div>
                      <div style={{ height: 7, background: r.track, borderRadius: 6, overflow: "hidden" }}>
                        <div
                          style={{
                            width: `${r.w}%`,
                            height: "100%",
                            background: r.bar,
                            borderRadius: 6,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* float card top */}
            <div
              style={{
                position: "absolute",
                top: -30,
                right: 20,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 18px 40px rgba(110,11,14,.16)",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                animation: "tl-floaty 6s ease-in-out infinite",
                border: "1px solid #FBE4E5",
              }}
            >
              <span
                style={{
                  position: "relative",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#E7F6EE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid #1F9D6B",
                    animation: "tl-pulsering 2s ease-out infinite",
                  }}
                />
                <span style={{ fontWeight: 700, color: "#1F9D6B", fontSize: 15 }}>✓</span>
              </span>
              <div>
                <div className="text-[12px] text-muted font-medium">Top match found</div>
                <div className="text-[16px] font-bold text-ink">96% skill fit</div>
              </div>
            </div>
            {/* float card bottom */}
            <div
              style={{
                position: "absolute",
                bottom: -24,
                left: -30,
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 18px 40px rgba(110,11,14,.16)",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 12,
                animation: "tl-floaty2 7s ease-in-out infinite",
                border: "1px solid #FBE4E5",
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 11,
                  background: "linear-gradient(135deg,#F76A6E,#F23F44)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                28′
              </span>
              <div>
                <div className="text-[12px] text-muted font-medium">Time to shortlist</div>
                <div className="text-[16px] font-bold text-ink">28 minutes</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section style={{ padding: "44px 28px 54px", background: "transparent" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: 13.5,
            fontWeight: 600,
            letterSpacing: "1.5px",
            color: "#A9999C",
            textTransform: "uppercase",
            margin: "0 0 30px",
          }}
        >
          Trusted by leading talent teams worldwide
        </p>
        <div
          style={{
            position: "relative",
            maxWidth: 1100,
            margin: "0 auto",
            overflow: "hidden",
            WebkitMaskImage:
              "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
            maskImage:
              "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              gap: 64,
              animation: "tl-marquee 28s linear infinite",
              alignItems: "center",
            }}
          >
            {[...MARQUEE, ...MARQUEE].map((name, i) => (
              <span
                key={i}
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#C9B9BC",
                  letterSpacing: "-.5px",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section id="how" className="px-7" style={{ padding: "96px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto 56px" }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              How it works<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[46px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink">
              From open role to offer, watch it build
            </Reveal>
          </div>
          <div
            className="how-grid max-[900px]:grid-cols-1!"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}
          >
            <div className="how-visual max-[900px]:static!" style={{ position: "sticky", top: 110 }}>
              <div
                style={{
                  position: "relative",
                  height: 600,
                  background: "#fff",
                  border: "1px solid #F4E4E5",
                  borderRadius: 24,
                  boxShadow: "0 26px 60px rgba(110,11,14,.12)",
                  overflow: "hidden",
                }}
              >
                <HowStage active={stage === 0}>
                  <div className="text-[12px] font-bold text-muted tracking-[0.4px] mb-[18px]">AI ASSESSMENT BUILDER</div>
                  <div className="flex items-center gap-[11px] bg-[#FFF8F8] border border-[#F4E4E5] rounded-[13px] p-3.5 mb-3.5">
                    <span className="w-[34px] h-[34px] rounded-[9px] bg-[#FFF0F0] flex items-center justify-center text-coral">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" /><circle cx="18.5" cy="17.5" r="1.5" /><circle cx="5" cy="16" r="1" /></svg>
                    </span>
                    <div className="text-[14px] text-body">Generating from <strong className="text-ink">&quot;Senior Frontend Engineer&quot;</strong>…</div>
                  </div>
                  <div className="flex flex-wrap gap-[9px] mb-[18px]">
                    {["React", "TypeScript", "CSS systems", "Problem solving", "Accessibility"].map((t) => (
                      <span key={t} className="text-[13px] font-semibold text-coral-deep bg-[#FFF0F0] border border-[#FBD0D1] px-[13px] py-[7px] rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="text-[12.5px] font-semibold text-muted mb-2">Building 18 questions…</div>
                  <div className="h-[9px] bg-[#F4EBEC] rounded-md overflow-hidden">
                    <div style={{ width: "72%", height: "100%", background: "linear-gradient(90deg,#F76A6E,#F23F44)", borderRadius: 6 }} />
                  </div>
                </HowStage>

                <HowStage active={stage === 1}>
                  <div className="text-[12px] font-bold text-muted tracking-[0.4px] mb-[18px]">CANDIDATES INVITED · 248</div>
                  <div className="flex flex-col gap-[11px]">
                    {[
                      { av: "JL", g: "linear-gradient(135deg,#F76A6E,#F23F44)", name: "Jordan L.", st: "Completed", c: "#1B8A5A", bg: "#E7F6EF", inkAv: false },
                      { av: "AM", g: "linear-gradient(135deg,#FBA3A5,#F76A6E)", name: "Aisha M.", st: "In progress", c: "#A36A00", bg: "#FBEFD9", inkAv: false },
                      { av: "RK", g: "linear-gradient(135deg,#FDD5D6,#FBA3A5)", name: "Rahul K.", st: "Invited", c: "#8A7A7D", bg: "#F1ECED", inkAv: true },
                      { av: "SN", g: "linear-gradient(135deg,#F23F44,#A91E23)", name: "Sana N.", st: "Completed", c: "#1B8A5A", bg: "#E7F6EF", inkAv: false },
                    ].map((r) => (
                      <div key={r.av} className="flex items-center gap-3 bg-[#FFF8F8] border border-[#F4E4E5] rounded-[13px] px-[15px] py-[13px]">
                        <span style={{ width: 36, height: 36, borderRadius: 10, background: r.g, color: r.inkAv ? "#A91E23" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 13 }}>{r.av}</span>
                        <div className="flex-1 font-semibold text-[14.5px]">{r.name}</div>
                        <span className="text-[12px] font-semibold px-[11px] py-[5px] rounded-lg" style={{ color: r.c, background: r.bg }}>{r.st}</span>
                      </div>
                    ))}
                  </div>
                </HowStage>

                <HowStage active={stage === 2}>
                  <div className="flex justify-between items-center mb-[18px]">
                    <span className="text-[12px] font-bold text-muted tracking-[0.4px]">RANKED LEADERBOARD</span>
                    <span className="text-[12px] font-bold text-white bg-coral px-3 py-[5px] rounded-lg">Shortlist top 5</span>
                  </div>
                  <div className="flex flex-col gap-[11px]">
                    {[
                      { rank: "1", rc: "#F23F44", av: "JL", g: "linear-gradient(135deg,#F76A6E,#F23F44)", name: "Jordan L.", sc: "94", sel: true },
                      { rank: "2", rc: "#A91E23", av: "SN", g: "linear-gradient(135deg,#F23F44,#A91E23)", name: "Sana N.", sc: "91", sel: false },
                      { rank: "3", rc: "#C13238", av: "AM", g: "linear-gradient(135deg,#FBA3A5,#F76A6E)", name: "Aisha M.", sc: "88", sel: false },
                    ].map((r) => (
                      <div key={r.rank} className="flex items-center gap-[13px] rounded-[14px] px-[15px] py-[13px]" style={{ background: r.sel ? "#FFF6F6" : "#fff", border: r.sel ? "1.5px solid #FBD0D1" : "1px solid #F2E6E7" }}>
                        <span className="font-extrabold text-[15px] w-[18px]" style={{ color: r.rc }}>{r.rank}</span>
                        <span style={{ width: 38, height: 38, borderRadius: 11, background: r.g, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 13 }}>{r.av}</span>
                        <div className="flex-1 font-semibold text-[14.5px]">{r.name}</div>
                        <span className="font-extrabold text-[17px]" style={{ color: r.rc }}>{r.sc}</span>
                      </div>
                    ))}
                  </div>
                </HowStage>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {STEPS.map((s, i) => {
                const on = stage === i;
                return (
                  <div
                    key={s.n}
                    onClick={() => setStage(i)}
                    onMouseEnter={() => setStage(i)}
                    style={{
                      cursor: "pointer",
                      background: on ? "#fff" : "#FFF9F9",
                      border: on ? "1.5px solid #F23F44" : "1.5px solid #F2E6E7",
                      borderRadius: 18,
                      padding: "24px 26px",
                      boxShadow: on ? "0 16px 40px rgba(110,11,14,.12)" : "none",
                      transition: "border-color .3s ease, box-shadow .3s ease, background .3s ease",
                    }}
                  >
                    <div className="flex items-center gap-3.5 mb-2.5">
                      <span
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: on ? "#F23F44" : "#FDD5D6",
                          color: on ? "#fff" : "#A91E23",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          fontSize: 18,
                          transition: "all .3s ease",
                          transform: on ? "scale(1.12)" : "scale(1)",
                        }}
                      >
                        {s.n}
                      </span>
                      <h3 className="text-[21px] font-bold m-0 text-ink tracking-[-0.4px]">{s.title}</h3>
                    </div>
                    <p className="text-[15.5px] leading-[1.6] text-body m-0 mb-3 pl-[54px]">{s.desc}</p>
                    <div className="h-[3px] bg-[#F4EBEC] rounded-[3px] ml-[54px] overflow-hidden">
                      <div style={{ width: on ? "100%" : "0%", height: "100%", background: "#F23F44", borderRadius: 3, transition: "width .4s ease" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS INTELLIGENCE ============ */}
      <section id="intelligence" className="px-7" style={{ padding: "96px 28px", background: "transparent" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            className="dwrap max-[900px]:grid-cols-1!"
            style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 54, alignItems: "center" }}
          >
            <div>
              <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
                Skills intelligence<span className="text-coral">.</span>
              </Reveal>
              <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 text-ink">
                From application to ranked shortlist — automatically
              </Reveal>
              <Reveal as="p" delay={0.1} className="text-[17.5px] leading-[1.6] text-body mt-[22px] mb-0">
                Every candidate is scored the moment they finish. Testlify validates skills, weighs them against the role, and surfaces your strongest people — no spreadsheets, no bias, no waiting.
              </Reveal>
              <Reveal delay={0.16} className="flex flex-col gap-3.5 mt-7">
                {[
                  "Objective, role-weighted skill scoring",
                  "Automatic, bias-controlled ranking",
                  "Shortlist-ready in minutes, not days",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <span className="w-[30px] h-[30px] rounded-[9px] bg-[#FFF0F0] border border-[#FBD0D1] flex items-center justify-center text-coral text-[14px] font-bold shrink-0">✓</span>
                    <span className="text-[15.5px] font-medium text-[#33282B]">{t}</span>
                  </div>
                ))}
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <Dashboard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT DEMO TABS ============ */}
      <section id="demo" className="px-7" style={{ padding: "96px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 40px" }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              See it in action<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[46px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink">
              One platform, the whole funnel
            </Reveal>
          </div>
          <Reveal delay={0.1} className="demo-tabs flex justify-center gap-3 mb-[34px] max-[900px]:flex-wrap">
            {DEMO_TABS.map((t) => {
              const on = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className="font-semibold text-[15.5px] px-[22px] py-3 rounded-[13px] cursor-pointer transition-all duration-300"
                  style={{
                    border: on ? "1.5px solid #F23F44" : "1.5px solid #F0D9DA",
                    background: on ? "#F23F44" : "#fff",
                    color: on ? "#fff" : "#1A1014",
                    boxShadow: on ? "0 10px 24px rgba(242,63,68,.3)" : "none",
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </Reveal>

          <div
            style={{
              position: "relative",
              background: "#fff",
              border: "1px solid #F2E6E7",
              borderRadius: 26,
              boxShadow: "0 26px 60px rgba(110,11,14,.10)",
              padding: 30,
              minHeight: 380,
            }}
          >
            <DemoPanel active={tab === 0}>
              <PanelGrid>
                <div>
                  <PanelPill>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
                    Screens 248 resumes in 11 seconds
                  </PanelPill>
                  <h3 className="text-[27px] font-bold tracking-[-0.6px] m-0 mb-3 text-ink">AI reads every résumé so you don&apos;t have to</h3>
                  <p className="text-[16px] leading-[1.6] text-body m-0 mb-[18px]">Every applicant is scored against the role&apos;s must-have skills and ranked instantly — surfacing real signal long before the first interview.</p>
                  <div className="flex flex-col gap-2.5">
                    <PanelCheck>Knockout questions &amp; must-have filters</PanelCheck>
                    <PanelCheck>Bias-controlled, explainable scoring</PanelCheck>
                  </div>
                </div>
                <div className="bg-[#FFF8F8] border border-[#F4E4E5] rounded-[18px] p-[18px]">
                  <div className="flex justify-between items-center mb-3.5">
                    <span className="text-[13px] font-bold text-muted tracking-[0.3px]">SCREENING QUEUE</span>
                    <span className="text-[12px] font-semibold text-coral bg-white border border-[#FBD0D1] px-2.5 py-1 rounded-lg">
                      <span className="tl-livedot" />Live
                    </span>
                  </div>
                  <div className="tl-screencre">
                    <div className="tl-scanbeam" />
                    <div className="flex flex-col gap-[9px]">
                      {[
                        { av: "JL", g: "linear-gradient(135deg,#F76A6E,#F23F44)", name: "Jordan L.", meta: "React · TypeScript · 6 yrs", sc: "94", sc_c: "#F23F44", inkAv: false },
                        { av: "AM", g: "linear-gradient(135deg,#FBA3A5,#F76A6E)", name: "Aisha M.", meta: "Vue · CSS · 4 yrs", sc: "88", sc_c: "#A91E23", inkAv: false },
                        { av: "RK", g: "linear-gradient(135deg,#FDD5D6,#FBA3A5)", name: "Rahul K.", meta: "Angular · 5 yrs", sc: "81", sc_c: "#C13238", inkAv: true },
                      ].map((r) => (
                        <div key={r.av} className="flex items-center gap-[11px] bg-white border border-[#F2E6E7] rounded-xl px-[13px] py-[11px]">
                          <span style={{ width: 34, height: 34, borderRadius: 9, background: r.g, color: r.inkAv ? "#A91E23" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 13 }}>{r.av}</span>
                          <div className="flex-1">
                            <div className="font-semibold text-[14px]">{r.name}</div>
                            <div className="text-[12px] text-muted">{r.meta}</div>
                          </div>
                          <span className="font-bold text-[15px]" style={{ color: r.sc_c }}>{r.sc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PanelGrid>
            </DemoPanel>

            <DemoPanel active={tab === 1}>
              <PanelGrid>
                <div>
                  <PanelPill>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                    3,500+ expert-validated tests
                  </PanelPill>
                  <h3 className="text-[27px] font-bold tracking-[-0.6px] m-0 mb-3 text-ink">A test for every role, skill and level</h3>
                  <p className="text-[16px] leading-[1.6] text-body m-0 mb-[18px]">Role-specific, cognitive, coding, language and personality assessments — or let AI generate a custom one from your job description in under a minute.</p>
                  <div className="flex flex-wrap gap-[9px]">
                    {["Coding", "Cognitive", "Language", "Personality", "Situational"].map((t) => (
                      <span key={t} className="text-[13.5px] font-semibold text-coral-deep bg-[#FFF0F0] border border-[#FBD0D1] px-[13px] py-[7px] rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-[#FFF8F8] border border-[#F4E4E5] rounded-[18px] p-5">
                  <div className="text-[12px] font-bold text-muted tracking-[0.3px] mb-3">SAMPLE QUESTION · JAVASCRIPT</div>
                  <div className="text-[15.5px] font-semibold text-ink leading-[1.5] mb-4">
                    What does <span className="font-mono bg-[#FFF0F0] text-coral-deep px-[7px] py-0.5 rounded-md">Array.prototype.flat()</span> return on a nested array by default?
                  </div>
                  <div className="flex flex-col gap-[9px]">
                    <div className="tl-optglow flex items-center gap-[11px] bg-white border-[1.5px] border-[#FBD0D1] rounded-[11px] px-3.5 py-3 text-[14.5px] font-medium">
                      <span className="w-[22px] h-[22px] rounded-full bg-coral text-white flex items-center justify-center text-[12px] font-bold">A</span>
                      Flattens one level deep
                      <span className="tl-okbadge ml-auto inline-flex items-center gap-[5px] text-[11.5px] font-bold text-[#1F8A5B] bg-[#E3F5EE] px-[9px] py-1 rounded-md">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        Correct
                      </span>
                    </div>
                    <div className="flex items-center gap-[11px] bg-white border border-[#F2E6E7] rounded-[11px] px-3.5 py-3 text-[14.5px] font-medium text-body">
                      <span className="w-[22px] h-[22px] rounded-full bg-[#F4EBEC] text-muted flex items-center justify-center text-[12px] font-bold">B</span>
                      Flattens infinitely
                    </div>
                    <div className="flex items-center gap-[11px] bg-white border border-[#F2E6E7] rounded-[11px] px-3.5 py-3 text-[14.5px] font-medium text-body">
                      <span className="w-[22px] h-[22px] rounded-full bg-[#F4EBEC] text-muted flex items-center justify-center text-[12px] font-bold">C</span>
                      Throws a TypeError
                    </div>
                  </div>
                </div>
              </PanelGrid>
            </DemoPanel>

            <DemoPanel active={tab === 2}>
              <PanelGrid>
                <div>
                  <PanelPill>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
                    One-way &amp; live interviews
                  </PanelPill>
                  <h3 className="text-[27px] font-bold tracking-[-0.6px] m-0 mb-3 text-ink">Structured interviews everyone scores fairly</h3>
                  <p className="text-[16px] leading-[1.6] text-body m-0 mb-[18px]">Async and live video with shared scorecards, so every reviewer judges the same things the same way — and bias has nowhere to hide.</p>
                  <div className="flex flex-col gap-2.5">
                    <PanelCheck>Pre-set questions &amp; rating rubrics</PanelCheck>
                    <PanelCheck>Side-by-side candidate comparison</PanelCheck>
                  </div>
                </div>
                <div className="bg-[#FFF8F8] border border-[#F4E4E5] rounded-[18px] p-[18px]">
                  <div
                    className="tl-stripemove"
                    style={{
                      position: "relative",
                      borderRadius: 14,
                      overflow: "hidden",
                      background: "repeating-linear-gradient(135deg,#FBE4E5,#FBE4E5 12px,#FDD5D6 12px,#FDD5D6 24px)",
                      height: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <span className="tl-playpulse" style={{ position: "relative", width: 54, height: 54, borderRadius: "50%", background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F23F44", fontSize: 18, boxShadow: "0 8px 22px rgba(110,11,14,.18)" }}>▶</span>
                    <span style={{ position: "absolute", top: 10, right: 12, background: "rgba(26,16,20,.78)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 9px", borderRadius: 7 }}>
                      <span className="tl-recdot" />REC
                    </span>
                    <span style={{ position: "absolute", bottom: 10, left: 12, background: "rgba(26,16,20,.78)", color: "#fff", fontSize: 11.5, fontWeight: 600, padding: "4px 10px", borderRadius: 7 }}>Q2 · Tell us about a tradeoff you made</span>
                  </div>
                  <div className="text-[12px] font-bold text-muted tracking-[0.3px] mb-[9px]">SCORECARD</div>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "Communication", filled: 5 },
                      { label: "Problem solving", filled: 4 },
                      { label: "Culture add", filled: 5 },
                    ].map((r) => (
                      <div key={r.label} className="flex justify-between items-center text-[14px]">
                        <span className="text-[#33282B]">{r.label}</span>
                        <span className="tl-starseq text-coral tracking-[1px]">
                          {[0, 1, 2, 3, 4].map((s) => (
                            <i key={s} style={{ fontStyle: "normal", opacity: s < r.filled ? undefined : 0.28 }}>★</i>
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </PanelGrid>
            </DemoPanel>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section id="voices" className="px-7" style={{ padding: "96px 28px", background: "#FBF3EE" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
            Loved by HR teams<span className="text-coral">.</span>
          </Reveal>
          <Reveal as="h2" delay={0.06} className="text-[46px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 mb-11 text-ink">
            Hiring managers don&apos;t go back
          </Reveal>
          <Reveal delay={0.1} className="relative max-w-[1060px] mx-auto">
            <div
              className="rounded-[26px] overflow-hidden"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div
                ref={trackRef}
                className="flex"
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                  transition: noTransition ? "none" : "transform .62s cubic-bezier(.22,.61,.36,1)",
                }}
              >
                {[...TESTIMONIALS, TESTIMONIALS[0]].map((t, i) => (
                  <div key={i} style={{ flex: "0 0 100%", padding: 6 }}>
                    <div className="tl-tcard2">
                      <div className="tl-tphoto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.img} alt={t.name} draggable={false} />
                        <span className="tl-g2badge"><b>G2</b>5.0 ★</span>
                      </div>
                      <div className="tl-tcontent">
                        <div className="tl-tquotemark">&quot;</div>
                        <div className="tl-tstars">★★★★★</div>
                        <p className="tl-tquote2">{t.quote}</p>
                        <div>
                          <div className="tl-tname2">{t.name}</div>
                          <div className="tl-trole2">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={goPrev} aria-label="Previous" className="tl-tnav" style={{ left: -22 }}>‹</button>
            <button onClick={goNext} aria-label="Next" className="tl-tnav" style={{ right: -22 }}>›</button>
          </Reveal>
          <div className="flex justify-center gap-[9px] mt-[26px]">
            {TESTIMONIALS.map((_, i) => (
              <span
                key={i}
                onClick={() => setSlide(i)}
                style={{
                  width: activeDot === i ? 26 : 9,
                  height: 9,
                  borderRadius: 6,
                  background: activeDot === i ? "#F23F44" : "#FBD0D1",
                  cursor: "pointer",
                  transition: "all .3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY / PROOF vs RESUMES ============ */}
      <section id="why" className="px-7" style={{ padding: "96px 28px", background: "transparent" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, margin: "0 0 8px" }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              Why Testlify<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-3.5 text-ink">
              Stop screening on resumes. Start hiring on proof.
            </Reveal>
            <Reveal as="p" delay={0.12} className="text-[17px] leading-[1.6] text-body m-0">
              Resumes tell you where someone has been — not what they can actually do. Testlify replaces guesswork with verified, job-relevant evidence.
            </Reveal>
          </div>
          <div className="vs grid grid-cols-2 gap-[18px] mt-[46px] max-[900px]:grid-cols-1">
            <Reveal className="rounded-[24px] px-8 py-9 bg-[#FBF4F4] border border-[#F0E4E5]">
              <div className="flex items-center gap-3 mb-[22px]">
                <span className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-[16px] font-bold bg-[#F0E4E5] text-muted">✕</span>
                <span className="text-[13px] font-bold tracking-[0.04em] uppercase text-muted">Resume-first hiring</span>
              </div>
              {VS_OLD.map((t) => (
                <div key={t} className="flex items-start gap-[13px] py-[13px] text-[15.5px] leading-[1.45] border-t border-[#F1E2E3] first-of-type:border-t-0 text-[#46383C]">
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] shrink-0 mt-px bg-[#EADDDE] text-muted">✕</span>
                  <span>{t}</span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.1} className="rounded-[24px] px-8 py-9 border border-[#FBD0D1]" style={{ background: "linear-gradient(160deg,#FFF0F0,#FFF8F6)" }}>
              <div className="flex items-center gap-3 mb-[22px]">
                <span className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-[16px] font-bold bg-coral text-white">✓</span>
                <span className="text-[13px] font-bold tracking-[0.04em] uppercase text-coral">Skills-first with Testlify</span>
              </div>
              {VS_NEW.map((t) => (
                <div key={t} className="flex items-start gap-[13px] py-[13px] text-[15.5px] leading-[1.45] border-t border-[#F1E2E3] first-of-type:border-t-0">
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] shrink-0 mt-px bg-coral text-white">✓</span>
                  <span className="text-ink font-medium">{t}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section id="usecases" className="px-7" style={{ padding: "96px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, margin: "0 0 8px" }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              Built for every hiring scenario<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-3.5 text-ink">
              One platform, every way you hire
            </Reveal>
            <Reveal as="p" delay={0.12} className="text-[17px] leading-[1.6] text-body m-0">
              From high-volume frontline roles to senior leadership, teams use Testlify to hire fairly and fast across every function and region.
            </Reveal>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-[46px] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
            {USE_CASES.map((u, i) => (
              <Reveal key={u.title} delay={(i % 4) * 0.06}>
                <UseCaseCard icon={u.icon} title={u.title} desc={u.desc} href="#" tint={u.tint} ink={u.ink} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section id="integrations" className="px-7" style={{ padding: "96px 28px", background: "transparent" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 44px" }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              Integrations<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-3.5 text-ink">
              Connected to 100+ ATS tools
            </Reveal>
            <Reveal as="p" delay={0.12} className="text-[17px] leading-[1.6] text-body m-0">
              Native two-way sync with Workday, Greenhouse, Lever and 97 more — no middleware, no data mapping.
            </Reveal>
          </div>
          <Reveal delay={0.16} className="grid grid-cols-5 gap-3.5 max-[900px]:grid-cols-3">
            {INTEGRATIONS.map(([src, alt]) => (
              <div key={alt} className="tl-intg-tile">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} />
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="text-center mt-[26px]">
            <a href="#" className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]">
              View all integrations<span>→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ SECURITY ============ */}
      <section id="security">
        <SecuritySection
          eyebrow="Security & compliance"
          heading="Built to keep your organization secure"
          sub="Audited controls, strong data governance and privacy protections — every assessment validated and EEOC-defensible."
        />
      </section>

      {/* ============ STATS BAND ============ */}
      <section id="stats" style={{ padding: 0, background: "#FFF8F7" }}>
        <div style={{ maxWidth: "100%", margin: 0 }}>
          <div
            style={{
              position: "relative",
              borderRadius: 0,
              overflow: "hidden",
              padding: "74px 40px 92px",
              background: "linear-gradient(165deg,#2A0E10 0%,#1A0A0C 60%,#12080A 100%)",
              border: "1px solid transparent",
              boxShadow: "0 30px 70px rgba(0,0,0,.18)",
            }}
          >
            {/* animated canvas backdrop (per-stat visualization) */}
            <StatsNetCanvas active={statActive} />
            {/* fade overlay */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                pointerEvents: "none",
                background: "linear-gradient(180deg,#160A0C 0%,rgba(18,8,10,0) 32%)",
              }}
            />

            <div style={{ position: "relative", zIndex: 3, textAlign: "center", maxWidth: 1180, margin: "0 auto", pointerEvents: "none" }}>
              <Reveal
                as="p"
                className="text-[14px] font-bold tracking-[1px] uppercase m-0 mb-3.5"
                style={{ color: "#B5A4A7" }}
              >
                Global reach<span style={{ color: "#F23F44" }}>.</span>
              </Reveal>
              <Reveal
                as="h2"
                delay={0.06}
                className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] mx-auto mb-3 max-w-[1000px] text-white"
              >
                Find the best talent anywhere in the world
              </Reveal>
              <Reveal
                as="p"
                delay={0.1}
                className="text-[16.5px] leading-[1.6] mx-auto mb-[50px] max-w-[540px]"
                style={{ color: "rgba(255,255,255,.66)" }}
              >
                A smooth, simple hiring experience that candidates and hiring teams love every step of the way.
              </Reveal>
              <Reveal delay={0.14} className="grid grid-cols-4 gap-6 text-center max-[900px]:grid-cols-2">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    onMouseEnter={() => setStatActive(i)}
                    className={`gr2stat${statActive === i ? " active" : ""}`}
                    style={{ pointerEvents: "auto", cursor: "pointer" }}
                  >
                    <div className="text-[52px] font-extrabold tracking-[-2px] leading-none text-white">
                      <CountUp target={s.count} suffix={s.suffix} />
                    </div>
                    <div className="text-[14.5px] font-medium mt-2.5" style={{ color: "rgba(255,255,255,.6)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AWARDS ============ */}
      <section id="awards" className="px-7" style={{ padding: "96px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
            Awards &amp; recognition<span className="text-coral">.</span>
          </Reveal>
          <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-11 text-ink">
            Recognized by the people who use it
          </Reveal>
          <Reveal delay={0.12} className="flex items-center justify-center flex-wrap gap-6">
            {MEDALS.map(([src, alt]) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={alt} className="tl-medal" src={src} alt={alt} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="px-7" style={{ padding: "96px 28px", background: "transparent" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <div style={{ textAlign: "center", margin: "0 auto 38px" }}>
            <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
              FAQ<span className="text-coral">.</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 text-ink">
              Questions, answered
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ---------- sub-components ---------- */

function HowStage({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: 34,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        opacity: active ? 1 : 0,
        transition: "opacity .4s ease, transform .4s ease",
        transform: active ? "translateY(0)" : "translateY(10px)",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
}

function PanelGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid grid-cols-2 gap-[26px] items-center max-[900px]:grid-cols-1"
      style={{ alignItems: "center" }}
    >
      {children}
    </div>
  );
}

function DemoPanel({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: active ? "block" : "none",
        animation: active ? "tl-fadein .35s ease" : undefined,
      }}
    >
      {children}
    </div>
  );
}

function PanelPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#FFF0F0] text-coral-deep font-semibold text-[13px] px-3.5 py-[7px] rounded-full mb-4">
      {children}
    </div>
  );
}

function PanelCheck({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[15px] text-[#33282B]">
      <span className="w-[22px] h-[22px] rounded-full bg-[#FFF0F0] text-coral flex items-center justify-center text-[12px] font-bold">✓</span>
      {children}
    </div>
  );
}

/* Skills-intelligence dashboard with looping rAF animation */
function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    const gfill = panel.querySelector<SVGCircleElement>("[data-gfill]");
    const gv = panel.querySelector<HTMLElement>("[data-gauge]");
    const scan = panel.querySelector<HTMLElement>("[data-dscan]");
    const sks = Array.from(panel.querySelectorAll<HTMLElement>("[data-sk]"));
    const skvs = Array.from(panel.querySelectorAll<HTMLElement>("[data-skv]"));
    const rows = Array.from(panel.querySelectorAll<HTMLElement>("[data-rank]"));
    if (!gfill) return;
    const C = 2 * Math.PI * 52;
    gfill.style.strokeDasharray = String(C);
    gfill.style.strokeDashoffset = String(C);
    const target = 94;
    const cycle = 7600;
    const ease = (p: number) => (p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.pow(1 - p, 3));
    const seg = (t: number, a: number, b: number) => ease(Math.min(Math.max((t - a) / (b - a), 0), 1));
    let raf = 0;
    const tick = (now: number) => {
      const t = (now % cycle) / cycle;
      const gp = seg(t, 0.1, 0.46);
      gfill.style.strokeDashoffset = String(C * (1 - gp * (target / 100)));
      if (gv) gv.textContent = String(Math.round(target * gp));
      sks.forEach((el, i) => {
        const v = parseFloat(el.getAttribute("data-sk") || "0");
        const sp = seg(t, 0.22 + i * 0.05, 0.55 + i * 0.05);
        el.style.width = v * sp + "%";
        if (skvs[i]) skvs[i].textContent = Math.round(v * sp) + "%";
      });
      rows.forEach((el) => {
        const idx = parseInt(el.getAttribute("data-rank") || "1", 10) - 1;
        const rp = seg(t, 0.04 + idx * 0.08, 0.3 + idx * 0.08);
        el.style.opacity = String(rp);
        if (el.getAttribute("data-rank") === "1") {
          const won = t > 0.52;
          el.classList.toggle("won", won);
          const pop = won ? 1 + 0.025 * Math.max(0, 1 - (t - 0.52) / 0.12) : 1;
          el.style.transform = `translateX(${((1 - rp) * 26).toFixed(1)}px) scale(${pop.toFixed(3)})`;
        } else {
          el.style.transform = `translateX(${((1 - rp) * 26).toFixed(1)}px)`;
        }
      });
      if (scan) {
        const sp = (t % 0.5) / 0.5;
        scan.style.transform = `translateY(${(sp * 460).toFixed(0)}px)`;
        scan.style.opacity = String(t < 0.5 ? 0.6 * (1 - sp) : 0);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        background: "#fff",
        border: "1px solid #F2E6E7",
        borderRadius: 22,
        overflow: "hidden",
        boxShadow: "0 30px 70px rgba(110,11,14,.14)",
      }}
    >
      <div data-dscan style={{ position: "absolute", left: 0, right: 0, top: 0, height: 120, background: "linear-gradient(180deg,rgba(242,63,68,.14),transparent)", pointerEvents: "none", opacity: 0.7 }} />
      <div className="flex items-center gap-2 px-[18px] py-3.5" style={{ boxShadow: "inset 0 -1px 0 #F4E4E5" }}>
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: "#FEBC2E" }} />
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: "#28C840" }} />
        <span className="text-[13px] font-semibold text-muted ml-2">Testlify · Assessment results</span>
        <span className="ml-auto text-[11px] font-bold tracking-[0.04em] text-coral inline-flex items-center gap-1.5">
          <i className="tl-dashlive" />Live scoring
        </span>
      </div>
      <div className="grid items-center gap-[26px] p-[26px] max-[900px]:grid-cols-1" style={{ gridTemplateColumns: "auto 1fr" }}>
        <div style={{ position: "relative", width: 148, height: 148, flex: "none" }}>
          <svg viewBox="0 0 120 120" style={{ width: 148, height: 148, transform: "rotate(-90deg)" }}>
            <defs>
              <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#F23F44" />
                <stop offset="1" stopColor="#FF8A6B" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="52" fill="none" stroke="#F4E4E5" strokeWidth="9" />
            <circle data-gfill cx="60" cy="60" r="52" fill="none" stroke="url(#gg)" strokeWidth="9" strokeLinecap="round" />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div className="text-[38px] font-extrabold text-ink tracking-[-0.03em] leading-none">
              <span data-gauge>0</span>
              <i style={{ fontSize: 18, fontStyle: "normal", color: "#F23F44", marginLeft: 1 }}>%</i>
            </div>
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-muted mt-1.5">Skill match</div>
          </div>
        </div>
        <div className="flex flex-col gap-[13px]">
          {[
            ["JavaScript", 92],
            ["Problem solving", 88],
            ["Communication", 95],
            ["Cognitive ability", 90],
          ].map(([label, v]) => (
            <div key={label as string} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[13px] font-semibold text-body">
                <span>{label}</span>
                <b data-skv className="text-ink font-bold">0%</b>
              </div>
              <div className="h-[7px] rounded-[7px] bg-[#F4EBEC] overflow-hidden">
                <div data-sk={v} className="h-full rounded-[7px]" style={{ width: 0, background: "linear-gradient(90deg,#F23F44,#FF8A6B)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[9px] px-[26px] pb-[26px]">
        {[
          { r: "1", av: "AK", g: "linear-gradient(135deg,#F23F44,#FF7A52)", name: "Aanya Kapoor", role: "Senior Frontend Engineer", sc: "94", badge: true },
          { r: "2", av: "DM", g: "linear-gradient(135deg,#7C3AED,#F23F44)", name: "Diego Morales", role: "Senior Frontend Engineer", sc: "87", badge: false },
          { r: "3", av: "LC", g: "linear-gradient(135deg,#0EA5A4,#2A6FDB)", name: "Lin Chen", role: "Senior Frontend Engineer", sc: "82", badge: false },
        ].map((r) => (
          <div key={r.r} data-rank={r.r} className="tl-rankrow flex items-center gap-3 px-3 py-2.5 rounded-xl">
            <span className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0" style={{ background: r.g }}>{r.av}</span>
            <div>
              <div className="text-[14px] font-semibold text-ink">{r.name}</div>
              <div className="text-[11.5px] text-muted">{r.role}</div>
            </div>
            {r.badge && <span className="tl-rankbadge">Top match</span>}
            <span className="tl-rankscore ml-auto text-[15px] font-extrabold text-ink tracking-[-0.02em]">{r.sc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Hero globe — animated SVG approximation of the wireframe network globe */
function GlobeSvg() {
  return (
    <svg viewBox="0 0 660 660" width="660" height="660" style={{ display: "block" }} aria-hidden>
      <g fill="none" stroke="#F23F44" strokeWidth="1">
        {[0.34, 0.62, 0.86, 1].map((rr, i) => (
          <circle key={i} cx="330" cy="330" r={257 * rr} opacity={0.14 - i * 0.025} />
        ))}
        {[0, 30, 60, 90, 120, 150].map((deg) => (
          <ellipse key={deg} cx="330" cy="330" rx="257" ry={257 * Math.abs(Math.cos((deg * Math.PI) / 180)) * 0.95 + 12} transform={`rotate(${deg} 330 330)`} opacity={0.1} />
        ))}
      </g>
      {Array.from({ length: 90 }).map((_, i) => {
        const a = (i / 90) * Math.PI * 2 * 3;
        const r = 60 + (i / 90) * 195;
        const x = 330 + Math.cos(a) * r;
        const y = 330 + Math.sin(a) * r;
        return <circle key={i} cx={x} cy={y} r={1 + (i % 5 === 0 ? 1.3 : 0.5)} fill={i % 9 === 0 ? "#F76A6E" : "#F23F44"} opacity={0.18 + (i / 90) * 0.5} />;
      })}
    </svg>
  );
}

/* ---------- scoped keyframes / classes ---------- */

const KEYFRAMES = `
@keyframes tl-floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
@keyframes tl-floaty2{0%,100%{transform:translateY(0)}50%{transform:translateY(13px)}}
@keyframes tl-marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes tl-blob{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-26px) scale(1.12)}66%{transform:translate(-26px,22px) scale(.93)}}
@keyframes tl-pulsering{0%{transform:scale(.75);opacity:.65}100%{transform:scale(1.7);opacity:0}}
@keyframes tl-shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}
@keyframes tl-fadein{0%{opacity:0;transform:translateY(6px)}100%{opacity:1;transform:none}}
@keyframes tl-globespin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
.tl-globe-spin{animation:tl-globespin 60s linear infinite;}
.gr2stat{position:relative;transition:opacity .3s;}
.gr2stat.active::after{content:'';position:absolute;left:50%;bottom:-14px;transform:translateX(-50%);width:30px;height:3px;border-radius:2px;background:#F23F44;box-shadow:0 0 10px rgba(242,63,68,.7);}
.tl-shimmer{background:linear-gradient(100deg,#F23F44 0%,#FF7A52 30%,#A91E23 52%,#FF7A52 74%,#F23F44 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:tl-shimmer 5s linear infinite;display:inline-block;}

/* screening scan beam */
.tl-screencre{position:relative;overflow:hidden;border-radius:14px;}
.tl-scanbeam{position:absolute;left:0;right:0;height:54px;top:-54px;z-index:4;pointer-events:none;background:linear-gradient(180deg,rgba(242,63,68,0),rgba(242,63,68,.16) 45%,rgba(242,63,68,.16) 55%,rgba(242,63,68,0));animation:tl-scanmove 3s ease-in-out infinite;}
.tl-scanbeam::after{content:"";position:absolute;left:0;right:0;top:50%;height:2px;background:linear-gradient(90deg,transparent,#F23F44,transparent);box-shadow:0 0 12px rgba(242,63,68,.6);}
@keyframes tl-scanmove{0%{top:-54px}100%{top:100%}}

.tl-livedot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#F23F44;margin-right:6px;vertical-align:middle;animation:tl-livepulse 1.5s ease-in-out infinite;}
@keyframes tl-livepulse{0%,100%{box-shadow:0 0 0 0 rgba(242,63,68,.5);opacity:1}50%{box-shadow:0 0 0 5px rgba(242,63,68,0);opacity:.45}}

.tl-optglow{animation:tl-optglow 3.8s ease-in-out infinite;}
@keyframes tl-optglow{0%,60%,100%{border-color:#FBD0D1;box-shadow:0 0 0 rgba(242,63,68,0)}74%{border-color:#F23F44;box-shadow:0 10px 24px rgba(242,63,68,.22)}}
.tl-okbadge{animation:tl-okbadge 3.8s ease-in-out infinite;}
@keyframes tl-okbadge{0%,62%,100%{opacity:0;transform:translateY(5px)}76%,93%{opacity:1;transform:translateY(0)}}

.tl-playpulse::before,.tl-playpulse::after{content:"";position:absolute;left:50%;top:50%;width:54px;height:54px;margin:-27px 0 0 -27px;border-radius:50%;border:2px solid rgba(242,63,68,.55);animation:tl-playring 2.4s ease-out infinite both;pointer-events:none;}
.tl-playpulse::after{animation-delay:1.2s;}
@keyframes tl-playring{0%{transform:scale(.7);opacity:0}14%{opacity:.7}100%{transform:scale(2.3);opacity:0}}
.tl-recdot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF5A5F;margin-right:6px;vertical-align:middle;animation:tl-recblink 1.1s steps(1) infinite;}
@keyframes tl-recblink{0%,50%{opacity:1}51%,100%{opacity:.25}}
.tl-stripemove{animation:tl-stripeslide 2.6s linear infinite;}
@keyframes tl-stripeslide{0%{background-position:0 0}100%{background-position:34px 0}}
.tl-starseq i{display:inline-block;}

.tl-dashlive{width:7px;height:7px;border-radius:50%;background:#F23F44;font-style:normal;animation:tl-pulse 1.8s ease-out infinite;}
@keyframes tl-pulse{0%{box-shadow:0 0 0 0 rgba(242,63,68,.5)}70%{box-shadow:0 0 0 8px rgba(242,63,68,0)}100%{box-shadow:0 0 0 0 rgba(242,63,68,0)}}
.tl-rankrow{background:#FFF8F8;border:1px solid #F4E4E5;transition:background .4s,border-color .4s,box-shadow .4s;}
.tl-rankrow.won{background:linear-gradient(90deg,#FFE4E4,#FFF3F3);border-color:#F23F44;box-shadow:0 8px 22px rgba(242,63,68,.18);}
.tl-rankrow.won .tl-rankscore{color:#F23F44;}
.tl-rankbadge{font-size:10px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:#18A957;padding:4px 9px;border-radius:100px;opacity:0;transition:opacity .4s;}
.tl-rankrow.won .tl-rankbadge{opacity:1;}

/* integration tile */
.tl-intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease, box-shadow .28s ease, border-color .28s ease;}
.tl-intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tl-intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}

.tl-medal{height:122px;width:auto;object-fit:contain;transition:transform .3s ease;}
.tl-medal:hover{transform:translateY(-8px) scale(1.05);}

/* testimonial card */
.tl-tcard2{display:grid;grid-template-columns:300px 1fr;gap:0;background:#fff;border:1px solid #F4E4E5;border-radius:26px;overflow:hidden;box-shadow:0 24px 60px rgba(110,11,14,.10);text-align:left;}
.tl-tphoto{position:relative;background:linear-gradient(160deg,#F76A6E,#A91E23);overflow:hidden;min-height:340px;}
.tl-tphoto img{width:100%;height:100%;object-fit:cover;object-position:center 18%;}
.tl-g2badge{position:absolute;left:18px;bottom:18px;display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.94);border-radius:100px;padding:7px 13px;font-size:12.5px;font-weight:700;color:#1A1014;box-shadow:0 6px 16px rgba(0,0,0,.18);}
.tl-g2badge b{color:#FF492C;font-size:13px;letter-spacing:.5px;}
.tl-tcontent{padding:46px 48px;display:flex;flex-direction:column;justify-content:center;}
.tl-tquotemark{font-family:Georgia,serif;font-size:66px;line-height:.5;color:#FBD0D1;height:30px;}
.tl-tstars{color:#F23F44;font-size:17px;letter-spacing:3px;margin-bottom:16px;}
.tl-tquote2{font-size:24px;line-height:1.5;color:#1A1014;font-weight:600;letter-spacing:-.4px;margin:0 0 26px;}
.tl-tname2{font-weight:700;font-size:16px;color:#1A1014;}
.tl-trole2{font-size:14px;color:#8A7A7D;margin-top:2px;}
.tl-tnav{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:50%;background:#fff;border:1px solid #F0D9DA;color:#F23F44;font-size:18px;cursor:pointer;box-shadow:0 10px 26px rgba(110,11,14,.14);display:flex;align-items:center;justify-content:center;transition:transform .2s ease, background .2s ease, color .2s ease;z-index:3;}
.tl-tnav:hover{transform:translateY(-50%) scale(1.1);background:#F23F44;color:#fff;}
@media(max-width:760px){.tl-tcard2{grid-template-columns:1fr;}.tl-tphoto{min-height:240px;}.tl-tcontent{padding:30px 26px;}.tl-tquote2{font-size:20px;}}

@media(prefers-reduced-motion:reduce){
  .tl-scanbeam,.tl-livedot,.tl-optglow,.tl-okbadge,.tl-playpulse::before,.tl-playpulse::after,.tl-recdot,.tl-stripemove,.tl-dashlive,.tl-globe-spin,.tl-shimmer{animation:none!important}
}
`;
