"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

/* ---------- data (verbatim from the prototype logic class) ---------- */

const faqItems = [
  {
    q: "What types of questions can I use with this feature?",
    a: "You can input any open-ended, single-select and video questions relevant to your hiring needs, allowing candidates to provide detailed responses for evaluation.",
  },
  {
    q: "What customisation options are available for skills assessments?",
    a: "Choose from a range of question types, select the number of questions, and save valuable time and resources in the assessment-creation process.",
  },
  {
    q: "In which languages is the AI-powered custom assessment available?",
    a: "The feature is available in 9 languages: English, Arabic, French, Dutch, Spanish, Japanese, Italian and Portuguese.",
  },
  {
    q: "How does the AI chat-simulation feature transform recruitment?",
    a: "Chat simulation streamlines recruitment by facilitating lifelike conversations and auto-evaluating candidate responses, ensuring consistent and objective assessments.",
  },
  {
    q: "How does AI-driven assessment creation cater to specific roles?",
    a: "By providing key information such as preferred skills, experience level and desired question types, our AI crafts assessments tailored to the specific needs of the role you're hiring for.",
  },
  {
    q: "How accurate is the AI evaluation of candidate responses?",
    a: "Our AI is trained to accurately evaluate candidate responses, providing consistent and objective assessments to help you make informed, defensible hiring decisions.",
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

const AWARDS = [
  "Leader · Talent Assessment",
  "High Performer · Enterprise",
  "High Performer · Mid-Market",
  "Best Relationship",
  "Users Most Likely to Recommend",
  "Best Meets Requirements",
];

/* scoring-feed audio wave bars: [height px, bright?] — exact heights/colors from the prototype */
const WAVE: [number, boolean][] = [
  [9, false], [20, true], [13, false], [26, true], [11, false], [18, true],
];

/* ---------- shared class strings (colour left to each call site to avoid utility clashes) ---------- */

const H2 =
  "text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 max-[960px]:text-[33px] max-[960px]:tracking-[-1px]";
const LEAD = "text-[19px] leading-[1.6] font-normal";
const H3 = "text-[22px] leading-[1.25] font-bold tracking-[-0.4px] m-0";
const PLABEL = "text-[11px] font-bold uppercase";
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

function Chk({ children, small = false }: { children: ReactNode; small?: boolean }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="flex-none w-6 h-6 rounded-[7px] bg-coral flex items-center justify-center mt-px">
        <CheckIcon />
      </span>
      <p className={`${small ? "text-[14.5px]" : "text-[16px]"} leading-[1.66] text-body m-0`}>{children}</p>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" />
    </svg>
  );
}

function Mock({ bar, children }: { bar: string; children: ReactNode }) {
  return (
    <div className="bg-white border border-warm rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
      <div className="flex items-center gap-2 py-[13px] px-4 border-b border-[#F4ECEC] bg-[#FCFAFA]">
        <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
        <span className="ml-3 flex-1 h-[26px] rounded-lg bg-[#F3EAEA] flex items-center px-3 text-[11.5px] text-faint font-medium">
          {bar}
        </span>
      </div>
      {children}
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 1.8l3 6.8 7.2.7-5.4 4.9 1.6 7.1L12 17.6l-6.4 3.7 1.6-7.1L1.8 9.3 9 8.6z" />
    </svg>
  );
}

/* ---------- page ---------- */

export default function TestlifyAiClient() {
  /* Hero H1 scramble-in: cycle random glyphs, settle left-to-right, then reveal
     the final text. Respects prefers-reduced-motion (final text stays put). */
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".js-scramble");
    if (!el) return;

    const nodes: { node: Text; text: string; prev?: string }[] = [];
    const walk = (n: Node) => {
      n.childNodes.forEach((c) => {
        if (c.nodeType === 3) {
          if ((c.textContent ?? "").trim().length) {
            nodes.push({ node: c as Text, text: c.textContent ?? "" });
          }
        } else {
          walk(c);
        }
      });
    };
    walk(el);
    if (!nodes.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chars = "!<>-_\\/[]{}=+*^?#________";
    const rnd = () => chars[Math.floor(Math.random() * chars.length)];
    const total = nodes.reduce((a, n) => a + n.text.length, 0);
    let revealed = 0;
    let frame = 0;
    let raf = 0;
    let last = 0;

    const run = (t: number) => {
      // ~30ms/frame settle
      if (t - last >= 30) {
        last = t;
        frame++;
        revealed = Math.min(total, revealed + total / 26);
        let acc = 0;
        nodes.forEach((n) => {
          let out = "";
          for (let i = 0; i < n.text.length; i++) {
            const gi = acc + i;
            if (n.text[i] === " ") out += " ";
            else if (gi < revealed) out += n.text[i];
            else if (frame % 2 === 0 && Math.random() < 0.55) out += rnd();
            else out += (n.prev && n.prev[i]) || rnd();
          }
          n.prev = out;
          n.node.textContent = out;
          acc += n.text.length;
        });
      }
      if (revealed < total) {
        raf = requestAnimationFrame(run);
      } else {
        nodes.forEach((n) => {
          n.node.textContent = n.text;
        });
      }
    };

    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(run);
    }, 200);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      // restore final text if unmounted mid-animation
      nodes.forEach((n) => {
        n.node.textContent = n.text;
      });
    };
  }, []);

  return (
    <>
      <SiteHeader
        announcement="New — AI chat-simulation interviews are live. Assess real judgement, not just answers."
        announcementCta="See how"
        announcementHref="#chat"
      />

      {/* 1 · HERO */}
      <section
        className="relative overflow-hidden px-7 pt-[70px] pb-[90px] max-[960px]:px-[22px] max-[960px]:pt-11 max-[960px]:pb-16"
        style={{ background: "radial-gradient(1100px 540px at 78% 6%, #FFF0EE 0%, rgba(255,240,238,0) 60%), #fff" }}
      >
        <div className={WRAP}>
          <div className="relative grid grid-cols-1 min-[961px]:grid-cols-[1.02fr_1.08fr] gap-11 min-[961px]:gap-[60px] items-center">
            <div>
              <Reveal delay={0.02}>
                <span className="inline-flex items-center gap-[9px] bg-white border border-[#F4D9DA] rounded-full py-[7px] pr-[15px] pl-2 text-[13px] font-semibold text-[#A8323A] shadow-[0_6px_16px_rgba(110,11,14,0.06)]">
                  <span className="bg-coral text-white text-[11px] font-bold tracking-[0.04em] py-[3px] px-[9px] rounded-full">
                    AI ASSESSMENT
                  </span>
                  Skills-based hiring, proven
                </span>
              </Reveal>
              <Reveal
                as="h1"
                delay={0.06}
                className="js-scramble mt-[22px] mb-0 text-[62px] leading-[1.04] font-extrabold tracking-[-2px] text-ink max-[960px]:text-[44px] max-[960px]:tracking-[-1.4px]"
              >
                The AI talent
                <br />
                assessment platform
                <br />
                for <span className="text-coral">smarter hiring.</span>
              </Reveal>
              <Reveal as="p" delay={0.1} className={`${LEAD} text-body mt-[22px] mb-0 max-w-[520px]`}>
                Finding the right skills in a competitive market — bias-free and fast — is hard. Testlify gives you the
                tools and insight to make data-driven hiring decisions, every time.
              </Reveal>
              <Reveal delay={0.14} className="flex items-center gap-3.5 flex-wrap mt-8">
                {/* transparent border equalizes height with the bordered secondary (prototype .ctabtn overrides) */}
                <CtaButton
                  label="Try for free"
                  href={routes.pricing}
                  variant="primary"
                  size="md"
                  icon="arrow"
                  className="border-[1.5px] border-transparent"
                />
                {/* prototype shrinks the play circle to 24px so both hero buttons are 55px tall */}
                <CtaButton
                  label="Book a demo"
                  href="#"
                  variant="secondary"
                  size="md"
                  icon="play"
                  className="[&>span:first-child]:w-6 [&>span:first-child]:h-6"
                />
              </Reveal>
              <Reveal delay={0.18} className="flex items-center gap-[18px] flex-wrap text-[14.5px] text-muted font-medium mt-[26px]">
                <span className="inline-flex items-center gap-[7px]"><span className="text-coral font-bold">&#10003;</span>7-day free trial</span>
                <span className="inline-flex items-center gap-[7px]"><span className="text-coral font-bold">&#10003;</span>No credit card required</span>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="relative top-5">
              <div className="absolute -top-4 left-6 z-[4] flex items-center gap-2 bg-ink text-white text-[12.5px] font-semibold py-[9px] px-[15px] rounded-xl shadow-[0_16px_34px_rgba(26,16,20,0.30)]">
                <i className="inline-block w-[7px] h-[7px] rounded-full bg-[#3DDC84] shadow-[0_0_0_4px_rgba(61,220,132,0.2)]" />
                Auto-scored — 0 manual review
              </div>
              <Mock bar="app.testlify.com/report/senior-pm">
                <div className="p-5">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-[74px] h-[74px] flex-none rounded-full flex items-center justify-center"
                      style={{ background: "conic-gradient(#F23F44 0deg 331deg, #F7E1E2 331deg 360deg)" }}
                    >
                      <div className="w-[58px] h-[58px] rounded-full bg-white flex flex-col items-center justify-center">
                        <div className="text-[20px] font-extrabold text-ink">92</div>
                        <div className="text-[8px] font-bold tracking-[0.1em] uppercase text-faint">Fit</div>
                      </div>
                    </div>
                    <div>
                      <div className={`${H3} text-[17px] text-ink`}>Amara Okoye</div>
                      <div className="text-[13px] leading-[1.66] text-body mt-0.5">
                        Senior Product Manager · verified assessment
                      </div>
                      <div className="inline-flex items-center gap-1.5 mt-[7px] bg-[#FFF0F0] text-coral text-[11px] font-bold tracking-[0.04em] py-[3px] px-[9px] rounded-full">
                        TOP 4%
                      </div>
                    </div>
                  </div>
                  {[
                    ["Product strategy", "Expert", "94%"],
                    ["Stakeholder judgement", "Strong", "86%"],
                    ["Data & analytics", "Proven", "81%"],
                  ].map(([skill, level, w]) => (
                    <div key={skill} className="mb-[13px]">
                      <div className="flex justify-between text-[12.5px] font-semibold mb-1.5">
                        <span className="text-muted">{skill}</span>
                        <span>{level}</span>
                      </div>
                      <div className="h-[7px] rounded-full bg-warm overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: w, background: "linear-gradient(90deg, #F23F44, #FF7A52)" }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 py-[13px] px-[15px] rounded-xl bg-[#FCF3F2] border border-[#F4E0E0] text-[12.5px] text-body leading-[1.5]">
                    <b className="text-coral">AI summary:</b> Consistent, evidence-backed reasoning under ambiguity.
                    Chat-simulation flagged strong prioritisation instincts.
                  </div>
                </div>
              </Mock>
              <div className="absolute -bottom-[18px] right-[26px] z-[4] flex items-center gap-[11px] bg-white border border-warm rounded-[14px] py-3 px-4 shadow-[0_20px_40px_rgba(110,11,14,0.14)]">
                <span className="text-[22px] font-extrabold tracking-[-1px] text-coral">
                  30<span className="text-[12px]">min</span>
                </span>
                <div className="text-[12px] font-semibold leading-[1.3]">
                  typical
                  <br />
                  assessment
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 · CUSTOM ASSESSMENTS (sand) */}
      <section className={`bg-sand ${SEC}`}>
        <div className={WRAP}>
          <div className={SPLIT}>
            <Reveal>
              <Eyebrow>Custom assessments</Eyebrow>
              <h2 className={`${H2} text-ink mb-5`}>Effortlessly build custom assessments with AI</h2>
              <p className={`${LEAD} text-body mt-0 mb-[22px]`}>
                Create AI-driven assessments tailored to the exact role you&apos;re hiring for. Give it the skills,
                experience level and question types you want — and let Testlify handle the rest.
              </p>
              <div className="flex flex-col gap-[15px]">
                <Chk>
                  <b className="text-ink">Intuitive prompts</b> — describe the role, get a ready assessment in seconds.
                </Chk>
                <Chk>
                  <b className="text-ink">Smart suggestions</b> — question types and difficulty matched to the job.
                </Chk>
                <Chk>
                  <b className="text-ink">9 languages</b> — build and deliver assessments in your candidates&apos;
                  language.
                </Chk>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <Mock bar="AI assessment builder">
                <div className="p-5">
                  <div className="bg-[#FCFAFA] border border-[#F1E6E7] rounded-[13px] py-3.5 px-4 flex gap-[11px] items-start mb-4">
                    <span className="flex-none w-7 h-7 rounded-lg bg-coral flex items-center justify-center">
                      <SparkIcon />
                    </span>
                    <div className="text-[13.5px] text-[#46383C] leading-[1.5]">
                      Mid-level React developer — TypeScript, testing, accessibility. 30 minutes, mixed question types.
                    </div>
                  </div>
                  <div className={`${PLABEL} tracking-[0.08em] text-faint mb-[11px]`}>Generated · 14 questions</div>
                  <div className="flex flex-col gap-[9px]">
                    {(
                      [
                        ["Q1", "Refactor a component to eliminate re-renders", "CODE", false],
                        ["Q2", "Explain a tricky useEffect dependency bug", "OPEN", false],
                        ["Q3", "Prioritise accessibility fixes before launch", "MCQ", true],
                      ] as [string, string, string, boolean][]
                    ).map(([q, text, tag, dim]) => (
                      <div
                        key={q}
                        className={`flex items-center gap-[11px] py-3 px-3.5 border border-[#F1E6E7] rounded-[11px] ${
                          dim ? "opacity-60" : ""
                        }`.trim()}
                      >
                        <span className="text-[11px] text-coral font-bold">{q}</span>
                        <span className="text-[13.5px] flex-1">{text}</span>
                        <span
                          className={`text-[10.5px] font-bold py-[3px] px-2 rounded-md ${
                            dim ? "text-muted bg-[#F3EAEA]" : "text-coral bg-[#FFF0F0]"
                          }`}
                        >
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Mock>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 · CHAT SIMULATION (white) */}
      <section id="chat" className={`bg-white ${SEC}`}>
        <div className={WRAP}>
          <div className={SPLIT}>
            <Reveal className="order-2">
              <Eyebrow>Chat simulation</Eyebrow>
              <h2 className={`${H2} text-ink mb-5`}>Go beyond conventional tests with chat simulation</h2>
              <p className={`${LEAD} text-body mt-0 mb-[22px]`}>
                Create lifelike scenarios and virtual interviews by inputting questions and prompts. Testlify engages
                candidates in realistic conversations and auto-evaluates their responses — consistent, objective, at
                any scale.
              </p>
              <div className="flex flex-col gap-[15px]">
                <Chk>
                  <b className="text-ink">Realistic role-play</b> — simulate on-the-job situations, not trivia.
                </Chk>
                <Chk>
                  <b className="text-ink">Auto-evaluated</b> — every response scored against a consistent rubric.
                </Chk>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="order-1">
              <Mock bar="Chat simulation · Customer Success">
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex gap-2.5 items-start">
                    <span className="flex-none w-[30px] h-[30px] rounded-[9px] bg-coral flex items-center justify-center">
                      <SparkIcon />
                    </span>
                    <div className="bg-[#FCFAFA] border border-[#F1E6E7] rounded-[4px_13px_13px_13px] py-[11px] px-3.5 text-[13.5px] leading-[1.5] max-w-[80%]">
                      A key account threatens to churn over a missed SLA. They&apos;re on the phone now. What&apos;s
                      your first move?
                    </div>
                  </div>
                  <div className="flex flex-row-reverse gap-2.5 items-start">
                    <span className="flex-none w-[30px] h-[30px] rounded-[9px] bg-ink text-coral-bright flex items-center justify-center font-bold text-[12px]">
                      RS
                    </span>
                    <div className="bg-ink text-[#F1E7E8] rounded-[13px_4px_13px_13px] py-[11px] px-3.5 text-[13.5px] leading-[1.5] max-w-[80%]">
                      Acknowledge the miss directly, own it, and get the facts before promising anything. I&apos;d
                      confirm impact, then offer a concrete recovery timeline.
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-2.5 py-3 px-3.5 rounded-xl bg-[#F1FBF4] border border-[#CBEBD5]">
                    <span className="flex-none w-[26px] h-[26px] rounded-full bg-[#3DDC84] flex items-center justify-center">
                      <CheckIcon size={14} stroke="#0A3D22" />
                    </span>
                    <div className="flex-1 text-[12.5px] text-[#1F7A46] font-semibold">
                      Empathy + ownership + action detected
                    </div>
                    <span className="text-[18px] font-extrabold text-[#1F7A46]">9.1</span>
                  </div>
                </div>
              </Mock>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 · AUTOMATED SCORING (sand) */}
      <section className={`bg-sand ${SEC}`}>
        <div className={WRAP}>
          <div className={`${SPLIT} items-center`}>
            <Reveal>
              <Eyebrow>Automated scoring</Eyebrow>
              <h2 className={`${H2} text-ink mb-[18px]`}>Score every answer format — automatically</h2>
              <p className={`${LEAD} text-body mt-0 mb-[26px] max-w-[460px]`}>
                AI-driven analysis eliminates tedious manual scoring — consistent, objective, bias-free results across
                text, video and audio, with manual override whenever you want it.
              </p>
              <div className="flex flex-col gap-4 max-w-[440px]">
                {(
                  [
                    ["Open-ended & written", " — deep, consistent insight on free-text responses, no manual reading."],
                    ["Video interviews", " — one-way and live, auto-scored instantly with manual scoring on tap."],
                    ["Audio questions", " — clarity, fluency and linguistic proficiency, scored objectively."],
                  ] as [string, string][]
                ).map(([bold, rest]) => (
                  <div key={bold} className="flex gap-[13px] items-start">
                    <span className="flex-none w-[26px] h-[26px] rounded-lg bg-rose-100 text-coral flex items-center justify-center mt-px">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <p className="text-[16px] leading-[1.66] text-body m-0">
                      <b className="text-ink">{bold}</b>
                      {rest}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-white border border-warm rounded-[18px] overflow-hidden shadow-[0_16px_30px_rgba(110,11,14,0.10)] transition-[translate,border-color] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-[5px] hover:border-[#FBD0D1]">
                {/* header */}
                <div className="flex items-center justify-between py-4 px-5 border-b border-warm">
                  <span className="text-[13.5px] font-bold text-ink">Scoring feed · Marketing Lead</span>
                  <span className="inline-flex items-center gap-[7px] text-[11px] font-bold tracking-[0.04em] text-coral">
                    <span className="w-[7px] h-[7px] rounded-full bg-[#3DDC84] shadow-[0_0_0_4px_rgba(61,220,132,0.18)]" />
                    AUTO-SCORING
                  </span>
                </div>
                {/* open-ended row */}
                <div className="flex items-center gap-[15px] py-[18px] px-5 border-b border-[#F4ECEC]">
                  <span className="flex-none w-10 h-10 rounded-xl bg-rose-100 text-coral flex items-center justify-center">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M4 6h16M4 12h16M4 18h11" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-bold text-ink mb-[7px]">Open-ended question</div>
                    <div className="h-[5px] rounded-full bg-[#F4E7E8] mb-1.5 overflow-hidden">
                      <div className="w-[88%] h-full bg-coral-bright" />
                    </div>
                    <div className="h-[5px] rounded-full bg-[#F4E7E8] w-[70%] overflow-hidden">
                      <div className="w-[76%] h-full bg-coral" />
                    </div>
                  </div>
                  <span className="flex-none text-[20px] font-extrabold text-coral tracking-[-0.5px]">8.6</span>
                </div>
                {/* video row */}
                <div className="flex items-center gap-[15px] py-[18px] px-5 border-b border-[#F4ECEC]">
                  <span className="flex-none w-14 h-10 rounded-[9px] flex items-center justify-center relative" style={{ background: "linear-gradient(135deg,#FFF0EF,#FCE0DE)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F23F44" aria-hidden>
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-bold text-ink mb-[3px]">Video interview</div>
                    <div className={`${PLABEL} tracking-[0.04em] text-muted`}>02:14 · communication &amp; structure</div>
                  </div>
                  <span className="flex-none text-[20px] font-extrabold text-coral tracking-[-0.5px]">9.0</span>
                </div>
                {/* audio row */}
                <div className="flex items-center gap-[15px] py-[18px] px-5">
                  <div className="flex-none w-14 flex items-center gap-[3px] h-[34px]">
                    {WAVE.map(([h, bright], i) => (
                      <div key={i} className={`w-[3px] rounded-[2px] ${bright ? "bg-coral-bright" : "bg-[#E7D3D5]"}`} style={{ height: h }} />
                    ))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-bold text-ink mb-[3px]">Audio question</div>
                    <div className={`${PLABEL} tracking-[0.04em] text-muted`}>Clarity · fluency · pronunciation</div>
                  </div>
                  <span className="flex-none text-[20px] font-extrabold text-coral tracking-[-0.5px]">8.4</span>
                </div>
                {/* overall footer */}
                <div className="flex items-center justify-between py-3.5 px-5 bg-sand border-t border-warm">
                  <span className={`${PLABEL} tracking-[0.04em] text-muted`}>Overall · weighted</span>
                  <span className="flex items-center gap-2.5">
                    <span className="text-[11px] font-bold text-muted">Manual override available</span>
                    <span className="text-[15px] font-extrabold text-coral bg-[#FFE7E6] rounded-lg py-1 px-[11px]">8.7</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 · FAIR BY DESIGN (white) */}
      <section className={`bg-white ${SEC}`}>
        <div className={WRAP}>
          <div className={SPLIT}>
            <Reveal delay={0.08}>
              <Mock bar="Bias controls · Marketing Lead">
                <div className="py-2">
                  {(
                    [
                      [
                        "eye",
                        "Names, photos & schools hidden",
                        "Blind screening · applied to all",
                        "ON",
                        "text-[#1F9D6B]",
                        true,
                      ],
                      [
                        "check",
                        "Same rubric, every candidate",
                        "318 assessed · consistent criteria",
                        "DONE",
                        "text-[#1F9D6B]",
                        true,
                      ],
                      ["file", "Audit trail exported", "EEOC-defensible · PDF", "PDF", "text-muted", false],
                    ] as [string, string, string, string, string, boolean][]
                  ).map(([icon, title, sub, tag, tagColor, border]) => (
                    <div
                      key={title}
                      className={`flex items-center gap-3 py-[15px] px-5 ${border ? "border-b border-[#F4ECEC]" : ""}`.trim()}
                    >
                      <span className="flex-none w-8 h-8 rounded-[9px] bg-[#FFF0F0] flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2" aria-hidden>
                          {icon === "eye" && (
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          )}
                          {icon === "check" && (
                            <>
                              <path d="M9 11l3 3L22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </>
                          )}
                          {icon === "file" && (
                            <>
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <path d="M14 2v6h6" />
                            </>
                          )}
                        </svg>
                      </span>
                      <div className="flex-1">
                        <div className="text-[13.5px] font-semibold">{title}</div>
                        <div className={`${PLABEL} tracking-[0.04em] text-faint`}>{sub}</div>
                      </div>
                      <span className={`text-[11px] font-bold ${tagColor}`}>{tag}</span>
                    </div>
                  ))}
                </div>
              </Mock>
            </Reveal>
            <Reveal className="order-2">
              <Eyebrow>Fair by design</Eyebrow>
              <h2 className={`${H2} text-ink mb-5`}>Reduce bias with AI-driven assessments</h2>
              <p className={`${LEAD} text-body mt-0 mb-[22px]`}>
                Mitigate bias to create equitable opportunity for every candidate. Attract diverse top talent that
                aligns with your culture — and prove it with a defensible audit trail.
              </p>
              <div className="grid grid-cols-2 gap-[13px]">
                <Chk small>Identify &amp; address bias effectively</Chk>
                <Chk small>Build a diverse, inclusive workplace</Chk>
                <Chk small>Ensure regulatory compliance</Chk>
                <Chk small>Strengthen teams with fresh perspectives</Chk>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 · INTEGRATIONS (sand) */}
      <section id="platform" className={`bg-sand ${SEC}`}>
        <div className={WRAP}>
          <div className="text-center max-w-[680px] mx-auto mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
              Integrations<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.06} className={`${H2} text-ink`}>
              Connected to 100+ ATS tools
            </Reveal>
            <Reveal as="p" delay={0.12} className={`${LEAD} text-body mt-3.5 mb-0`}>
              Native two-way sync with Workday, Greenhouse, Lever and 97 more — no middleware, no data mapping.
            </Reveal>
          </div>
          <Reveal delay={0.16} className="grid grid-cols-3 min-[961px]:grid-cols-5 gap-3.5">
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
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]">
              View all integrations<span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7 · SECURITY & COMPLIANCE (white, shared component) */}
      <SecuritySection
        eyebrow="Security & compliance"
        heading="Built to keep your organisation secure"
        sub="Top-tier admin controls, strong data governance and comprehensive compliance audits — every assessment protected and EEOC-defensible."
      />

      {/* 8 · TESTIMONIAL (sand) */}
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
            &quot;We replaced three rounds of gut-feel screening with one Testlify assessment. The AI scoring is
            consistent, the audit trail keeps us defensible, and our shortlists are measurably stronger.&quot;
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

      {/* 9 · RECOGNITION (white) */}
      <section className={`bg-white ${SEC}`}>
        <div className={WRAP}>
          <div className="text-center max-w-[640px] mx-auto mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
              Recognition<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              Awarded by the people who use it
            </Reveal>
          </div>
          <Reveal className="flex flex-wrap gap-3.5 justify-center">
            {AWARDS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 bg-white border border-warm rounded-xl py-[13px] px-[18px] text-[13.5px] font-semibold text-ink shadow-[0_8px_18px_rgba(110,11,14,0.05)]"
              >
                <b className="text-coral font-bold text-[13px]">G2</b> {label}
              </span>
            ))}
          </Reveal>
          <Reveal as="p" className={`${PLABEL} tracking-[0.12em] text-faint text-center mt-9 mb-0`}>
            Backed by SHRM Labs · Google for Startups · Microsoft for Startups · NVIDIA Inception
          </Reveal>
        </div>
      </section>

      {/* 10 · FAQ (sand) */}
      <section className={`bg-sand ${SEC}`}>
        <div className="max-w-[840px] mx-auto px-7">
          <div className="text-center mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
              FAQ<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              Frequently asked questions
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
