import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import TestIcon, { type TestIconKey } from "@/components/TestIcon";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import {
  TESTS,
  TYPE_LABEL,
  DIFFICULTY_CLASSES,
  testSlug,
  type TestEntry,
} from "@/lib/testLibraryData";
import Accordion, { type AccordionItem } from "./DetailTabs";

const LEVEL_SHORT: Record<TestEntry["level"], string> = {
  Beginner: "Beginner",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
};

/** Default test, used when a slug does not resolve to a real entry. */
const DEFAULT_TEST: TestEntry =
  TESTS.find((t) => t.name === "Attention to Detail (Textual)") ?? TESTS[0];

function findTest(slug: string): TestEntry {
  return TESTS.find((t) => testSlug(t.name) === slug) ?? DEFAULT_TEST;
}

export async function generateMetadata(
  props: PageProps<"/test-library/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const test = findTest(slug);
  return {
    title: `${test.name} test — ${TYPE_LABEL[test.type]}`,
    description: test.desc,
  };
}

const Check = ({ size = 18, strokeWidth = 2.6 }: { size?: number; strokeWidth?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const CalendarIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const ClockIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const QuestionsIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const BadgeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8 2 9.4h7.6z" />
  </svg>
);

const CheckCircle = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const SmallArrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const AI_TOOLS: { name: string; src: string }[] = [
  { name: "ChatGPT", src: "/logos/chatgpt.png" },
  { name: "Perplexity", src: "/logos/perplexity.png" },
  { name: "Gemini", src: "/logos/gemini.png" },
  { name: "Grok", src: "/logos/grok.png" },
  { name: "Claude", src: "/logos/claude.png" },
];

const LANGUAGES = ["English", "Dutch", "French", "German", "Spanish"];

/** Generic role-title suggestions per test category, used to fill the "Relevant for" chips. */
const ROLE_SUGGESTIONS: Record<TestIconKey, string[]> = {
  role: ["Specialist", "Coordinator", "Manager", "Team Lead", "Analyst"],
  cognitive: ["Graduate Hire", "Analyst", "Associate", "Generalist Role", "Early-Career Hire"],
  software: ["Operations Specialist", "Administrator", "Coordinator", "Support Specialist"],
  programming: ["Developer", "Software Engineer", "Full Stack Developer", "Backend Developer", "Frontend Developer"],
  coding: ["Software Engineer", "Backend Engineer", "Full Stack Engineer", "Systems Engineer"],
  engineering: ["Engineer", "Design Engineer", "Technical Specialist", "R&D Engineer"],
  personality: ["Any Hiring Role", "People Manager", "Team Member", "Leadership Hire"],
  language: ["Customer-Facing Role", "Support Specialist", "Sales Representative", "International Hire"],
  situational: ["Team Lead", "Customer Support Rep", "Sales Representative", "Manager"],
  typing: ["Data Entry Specialist", "Administrative Assistant", "Support Specialist"],
  bluecollar: ["Warehouse Associate", "Operations Staff", "Technician"],
  simulation: ["Support Representative", "Customer Success Associate", "Sales Representative"],
};

function buildRoles(test: TestEntry): string[] {
  const base = ROLE_SUGGESTIONS[test.type];
  if (test.type === "programming" || test.type === "coding" || test.type === "engineering") {
    return base.map((r) => `${test.name} ${r}`);
  }
  return base;
}

/** Skills measured — generic, type-agnostic sub-skills scored independently. */
function buildSkills(test: TestEntry): { name: string; desc: string }[] {
  const label = TYPE_LABEL[test.type].toLowerCase();
  return [
    {
      name: `${test.name} fundamentals`,
      desc: `Core concepts and terminology every practitioner needs to work confidently in ${label}.`,
    },
    {
      name: "Applied problem solving",
      desc: `Using ${test.name} to solve realistic, job-relevant problems rather than reciting theory.`,
    },
    {
      name: "Best practices",
      desc: "Following established conventions and avoiding the common mistakes that hurt quality in real work.",
    },
    {
      name: "Tooling & workflow",
      desc: "Working efficiently with the tools, shortcuts and processes professionals use day to day.",
    },
    {
      name: "Accuracy under time pressure",
      desc: `Performing reliably within a realistic ${test.dur}-minute window, the way the role actually demands.`,
    },
    {
      name: "Communicating results",
      desc: "Explaining decisions and outcomes clearly enough for teammates and stakeholders to trust them.",
    },
  ];
}

function buildInterview(test: TestEntry): { q: string; why: string; listen: string }[] {
  const label = TYPE_LABEL[test.type].toLowerCase();
  return [
    {
      q: `Walk me through a recent project where you used ${test.name}.`,
      why: "Tests practical, applied experience beyond textbook knowledge.",
      listen: "Specific examples, clear decisions and outcomes — not vague generalities.",
    },
    {
      q: `How do you stay current with best practices in ${label}?`,
      why: "Shows whether a candidate keeps their skills sharp on their own initiative.",
      listen: "Concrete habits — communities, docs, practice projects — not just “I read about it.”",
    },
    {
      q: `Describe a time you had to troubleshoot a difficult ${label} problem.`,
      why: "Reveals how a candidate reasons under pressure and diagnoses root causes.",
      listen: "A structured approach: isolating the problem, testing hypotheses, verifying the fix.",
    },
    {
      q: `How would you explain a core ${test.name} concept to a non-technical stakeholder?`,
      why: "Tests depth of understanding — you only explain something simply once you truly know it.",
      listen: "A clear, jargon-free explanation that still captures the important nuance.",
    },
    {
      q: `What trade-offs do you consider when applying ${test.name} to a real project?`,
      why: "Separates candidates who follow recipes from those who understand why.",
      listen: "Awareness of cost, time, maintainability or risk trade-offs, not a single “correct” answer.",
    },
  ];
}

function buildFaqTest(test: TestEntry, roles: string[]): { q: string; a: string }[] {
  const label = TYPE_LABEL[test.type].toLowerCase();
  return [
    {
      q: `What is the ${test.name} assessment?`,
      a: `A skill-evaluation test that measures a candidate's proficiency in ${test.name}.`,
    },
    {
      q: "How do I use it for hiring?",
      a: "Use it as a screening step: send it to candidates early to gauge ability and make informed, skills-first shortlisting decisions.",
    },
    {
      q: "What roles can I use it for?",
      a: `${roles.slice(0, 4).join(", ")} and other ${label} roles, among others.`,
    },
    {
      q: "What does the test cover?",
      a: test.desc,
    },
    {
      q: "Why is this assessment important?",
      a: `It identifies candidates with the real skills to excel in ${label} roles, so you hire people who contribute effectively from day one.`,
    },
  ];
}

const FAQ_PLATFORM: { q: string; a: string }[] = [
  { q: "Can I try a sample test first?", a: "Yes — start a free trial to explore the platform hands-on and see how Testlify simplifies your hiring process." },
  { q: "How do I choose tests from the library?", a: "Browse the Test Library by category — role-specific, language, programming, software skills, cognitive, situational judgment and more — or search by name." },
  { q: "What are ready-to-go tests?", a: "Pre-built assessments ready for immediate use, no customization needed, spanning thousands of skills across every category." },
  { q: "Can you integrate with our ATS?", a: "Yes — Testlify offers native integrations with popular ATS platforms like Lever, BambooHR, Greenhouse and JazzHR. Contact us for a specific ATS." },
  { q: "Are your tests valid and reliable?", a: "Yes — tests are built by subject-matter experts and reviewed by I/O psychologists to ensure strong validity and reliability, with accurate results." },
];

export default async function Page(props: PageProps<"/test-library/[slug]">) {
  const { slug } = await props.params;
  const test = findTest(slug);
  const dc = DIFFICULTY_CLASSES[test.level];

  const roles = buildRoles(test);
  const skills = buildSkills(test);
  const interview = buildInterview(test);
  const faqTest = buildFaqTest(test, roles);

  const interviewItems: AccordionItem[] = interview.map((q, i) => ({
    num: String(i + 1).padStart(2, "0"),
    q: q.q,
    content: (
      <>
        <div>
          <h4 className="text-[11.5px] font-bold tracking-[0.09em] uppercase text-[#C0242B] m-0 mb-[5px]">
            Why this matters
          </h4>
          <p className="m-0 text-[15px] leading-[1.64] text-body">{q.why}</p>
        </div>
        <div className="mt-[15px]">
          <h4 className="text-[11.5px] font-bold tracking-[0.09em] uppercase text-[#C0242B] m-0 mb-[5px]">
            What to listen for
          </h4>
          <p className="m-0 text-[15px] leading-[1.64] text-body">{q.listen}</p>
        </div>
      </>
    ),
  }));

  const faqTestItems: AccordionItem[] = faqTest.map((f) => ({
    q: f.q,
    content: <p className="m-0 text-[15px] leading-[1.64] text-body">{f.a}</p>,
  }));
  const faqPlatformItems: AccordionItem[] = FAQ_PLATFORM.map((f) => ({
    q: f.q,
    content: <p className="m-0 text-[15px] leading-[1.64] text-body">{f.a}</p>,
  }));

  // A few related tests of distinct types (excluding the current one).
  const related: TestEntry[] = [];
  const seenTypes = new Set([test.type]);
  for (const t of TESTS) {
    if (t.name === test.name || seenTypes.has(t.type)) continue;
    seenTypes.add(t.type);
    related.push(t);
    if (related.length === 3) break;
  }

  return (
    <>
      <SiteHeader
        announcement="Every test peer-reviewed by subject-matter experts"
        announcementCta="How we build tests"
      />

      {/* detail hero */}
      <section className="px-7 pt-11 pb-[74px] bg-[radial-gradient(1000px_520px_at_82%_-12%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[1240px] mx-auto">
          <p className="reveal is-in text-[13px] text-[#9A878A] font-semibold m-0 mb-7 flex items-center gap-[9px] flex-wrap">
            <Link href={routes.testLibrary} className="text-coral">
              Test library
            </Link>
            <span className="text-[#D6C4C7]">&rsaquo;</span>
            <span>{TYPE_LABEL[test.type]}</span>
            <span className="text-[#D6C4C7]">&rsaquo;</span>
            <span>{test.name}</span>
          </p>

          <div className="grid grid-cols-[1fr_384px] gap-[52px] items-start max-[920px]:grid-cols-1 max-[920px]:gap-9">
            <div>
              <span className="reveal is-in inline-flex items-center gap-[7px] bg-[#FFF0F0] text-[#C0242B] text-[12px] font-bold tracking-[0.04em] px-[13px] py-1.5 rounded-full">
                <Check size={14} strokeWidth={2.4} />
                {TYPE_LABEL[test.type]}
              </span>
              <h1 className="reveal is-in text-[46px] leading-[1.05] font-extrabold tracking-[-1.8px] mt-[17px] mb-4 max-[920px]:text-[34px] max-[920px]:tracking-[-1px]">
                {test.name}
              </h1>
              <p className="reveal is-in text-[18px] leading-[1.62] text-body m-0 max-w-[600px]">
                {test.desc} Built and peer-reviewed by subject-matter experts to
                predict on-the-job performance.
              </p>

              <div className="reveal is-in flex items-center gap-2 flex-wrap mt-[26px]">
                <span className="text-[12.5px] text-[#9A878A] font-semibold mr-0.5">
                  Available in
                </span>
                {LANGUAGES.map((lang) => (
                  <span
                    key={lang}
                    className="text-[12.5px] font-semibold text-[#46383C] bg-white border border-[#EFDDDE] px-3 py-[5px] rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <div className="reveal is-in flex items-center gap-3 flex-nowrap overflow-x-auto mt-6">
                <span className="text-[12px] text-[#A9999C] font-medium whitespace-nowrap">
                  Summarize this test with
                </span>
                {AI_TOOLS.map((tool) => (
                  <Image
                    key={tool.name}
                    src={tool.src}
                    alt={tool.name}
                    width={24}
                    height={24}
                    className="rounded-[6px] bg-white object-contain shrink-0"
                  />
                ))}
              </div>

              <div className="reveal is-in flex gap-3 flex-wrap mt-9">
                <CtaButton label="Try for free" href="#" variant="primary" size="lg" icon="arrow" magnetic />
                <CtaButton label="View sample questions" href="#" variant="secondary" size="lg" icon="none" />
              </div>
              <div className="flex items-center gap-[26px] flex-wrap mt-[18px] text-[14.5px] text-[#8A7A7D] font-medium">
                <span className="inline-flex items-center gap-[7px]">
                  <b className="text-coral font-bold">✓</b>7-day free trial
                </span>
                <span className="inline-flex items-center gap-[7px]">
                  <b className="text-coral font-bold">✓</b>No credit card required
                </span>
              </div>
            </div>

            {/* card */}
            <div className="reveal is-in sticky top-[120px] bg-white border border-[#EFE2E3] rounded-[22px] p-[26px] shadow-[0_24px_60px_rgba(110,11,14,0.10)] max-[920px]:static">
              <div className="flex items-center justify-between gap-2.5 mb-1">
                <span className="text-[13px] text-[#9A878A] font-semibold">Ready to use</span>
                <span className={`text-[11px] font-bold tracking-[0.05em] uppercase px-[11px] py-1 rounded-full ${dc.bg} ${dc.fg}`}>
                  {test.level}
                </span>
              </div>
              <ul className="list-none mt-0 mb-[22px] p-0">
                <li className="flex items-center justify-between gap-3 py-3 border-b border-[#F4E7E8] text-sm">
                  <span className="text-[#8A7A7D] font-medium inline-flex items-center gap-[9px]">
                    <span className="text-[#C0989B] shrink-0"><CalendarIcon /></span>
                    Test type
                  </span>
                  <span className="text-ink font-bold text-right">{TYPE_LABEL[test.type]}</span>
                </li>
                <li className="flex items-center justify-between gap-3 py-3 border-b border-[#F4E7E8] text-sm">
                  <span className="text-[#8A7A7D] font-medium inline-flex items-center gap-[9px]">
                    <span className="text-[#C0989B] shrink-0"><ClockIcon /></span>
                    Duration
                  </span>
                  <span className="text-ink font-bold text-right">{test.dur} min</span>
                </li>
                <li className="flex items-center justify-between gap-3 py-3 border-b border-[#F4E7E8] text-sm">
                  <span className="text-[#8A7A7D] font-medium inline-flex items-center gap-[9px]">
                    <span className="text-[#C0989B] shrink-0"><QuestionsIcon /></span>
                    Questions
                  </span>
                  <span className="text-ink font-bold text-right">{test.questions}</span>
                </li>
                <li className="flex items-center justify-between gap-3 py-3 text-sm">
                  <span className="text-[#8A7A7D] font-medium inline-flex items-center gap-[9px]">
                    <span className="text-[#C0989B] shrink-0"><BadgeIcon /></span>
                    Skills measured
                  </span>
                  <span className="text-ink font-bold text-right">{skills.length}</span>
                </li>
              </ul>
              <ul className="list-none mt-5 mb-0 pt-4 border-t border-[#F4E7E8] flex flex-col gap-[10px]">
                {[
                  "Auto-graded with instant, objective scoring",
                  "Anti-cheat & full-screen proctoring",
                  "Mix with any of 3,500+ tests",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-[9px] text-[13px] text-[#46383C] leading-[1.4]">
                    <span className="shrink-0 mt-px text-[#1FA463]">
                      <Check size={17} />
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* skills measured */}
      <section className="px-7 py-[84px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mb-9">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Skills measured<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              {skills.length} skills, each scored independently
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[960px]:grid-cols-2 max-[640px]:grid-cols-1">
            {skills.map((s, i) => (
              <Reveal
                key={s.name}
                delay={(i % 3) * 0.06}
                className="bg-white border-[1.4px] border-[#EFE1E2] rounded-2xl px-6 pt-6 pb-[22px] shadow-[0_16px_30px_rgba(110,11,14,0.05)] transition-[translate,transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#F4C7C8] hover:shadow-[0_16px_30px_rgba(110,11,14,0.10)]"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[10px] bg-[#FFF0EF] text-coral text-[13px] font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] font-bold text-ink m-0 tracking-[-0.3px]">{s.name}</h3>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-[#6C5A5D] m-0">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* overview */}
      <section className="px-7 py-[84px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mb-9">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Overview<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              What this test measures
            </Reveal>
          </div>
          <Reveal className="max-w-[760px]">
            <p className="text-[16px] leading-[1.72] text-body m-0 mb-4">
              This {LEVEL_SHORT[test.level].toLowerCase()} {test.name} assessment
              evaluates whether a candidate can apply real {TYPE_LABEL[test.type].toLowerCase()}{" "}
              skills — not just recite theory. It blends applied, job-relevant
              questions to give a rounded picture of ability.
            </p>
            <p className="text-[16px] leading-[1.72] text-body m-0">
              Candidates work through {test.questions} questions across roughly{" "}
              {test.dur} minutes. Every response is scored against an objective
              rubric, so results are consistent and instant for every applicant.
            </p>
          </Reveal>
          <div className="mt-11">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-3">
              Relevant for<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal className="flex flex-wrap gap-[9px] mt-2">
              {roles.map((r) => (
                <span
                  key={r}
                  className="text-sm font-semibold text-[#46383C] bg-white border border-[#EFDDDE] px-4 py-[9px] rounded-full transition-colors duration-150 hover:border-[#F4B9BB] hover:text-[#C0242B]"
                >
                  {r}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* built by experts */}
      <section className="px-7 py-[84px] bg-sand">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[1fr_420px] gap-11 items-center max-[920px]:grid-cols-1 max-[920px]:gap-[30px]">
          <div>
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Built by experts<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              Every test is written and peer-reviewed by subject-matter experts
            </Reveal>
            <Reveal as="p" delay={0.08} className="text-[16px] leading-[1.66] text-body mt-4 max-w-[520px]">
              Testlify&apos;s skill tests are designed by experienced SMEs,
              evaluated on expertise, capability and market reputation. Before
              publishing, each test is peer-reviewed by other experts and
              calibrated against a large pool of skilled test-takers — then
              continuously refined by built-in feedback systems.
            </Reveal>
            <Reveal delay={0.12}>
              <Link
                href={routes.security}
                className="group inline-flex items-center gap-[7px] mt-[22px] text-[15px] font-bold text-coral"
              >
                See the science behind our tests
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <SmallArrow />
                </span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.06} className="bg-white border border-[#EFE2E3] rounded-[20px] p-[30px] shadow-[0_18px_40px_rgba(110,11,14,0.07)]">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.04em] text-[#1FA463] bg-[#E8F6EE] px-[13px] py-1.5 rounded-full mb-4">
              <CheckCircle />
              Validity assured
            </span>
            <p className="text-[14.5px] leading-[1.62] text-body m-0">
              These assessments are developed in strict adherence to BPS
              (British Psychological Society) guidelines, grounded in the EFPA
              (European Federation of Psychologists&apos; Associations) review
              model — so every result is defensible and fair.
            </p>
          </Reveal>
        </div>
      </section>

      {/* interview kit */}
      <section className="px-7 py-[84px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mb-9">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Interview kit<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              Top hard-skill interview questions
            </Reveal>
            <Reveal as="p" delay={0.08} className="text-[16px] leading-[1.66] text-body mt-3">
              Pair the assessment with these expert questions to dig deeper in
              the interview.
            </Reveal>
          </div>
          <Accordion items={interviewItems} />
        </div>
      </section>

      {/* faq */}
      <section className="px-7 py-[84px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mx-auto mb-9 text-center">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              FAQ<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              Frequently asked questions
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-7 items-start max-[920px]:grid-cols-1 max-[920px]:gap-4">
            <div>
              <Reveal as="h3" className="text-[15px] font-bold tracking-[0.02em] text-ink m-0 mb-3.5">
                About this test
              </Reveal>
              <Accordion items={faqTestItems} iconSize={19} />
            </div>
            <div>
              <Reveal as="h3" className="text-[15px] font-bold tracking-[0.02em] text-ink m-0 mb-3.5">
                About Testlify
              </Reveal>
              <Accordion items={faqPlatformItems} iconSize={19} />
            </div>
          </div>
        </div>
      </section>

      {/* related tests */}
      <section className="px-7 py-[84px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mx-auto mb-9 text-center">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Related tests<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              Build a complete assessment
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {related.map((r, i) => (
              <Reveal key={r.name} delay={0.06 * i}>
                <Link
                  href={`${routes.testLibrary}/${testSlug(r.name)}`}
                  className="group block bg-white border border-[#EFE2E3] rounded-[18px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="w-[42px] h-[42px] rounded-[11px] bg-[#FFF0F0] text-coral flex items-center justify-center">
                      <TestIcon name={r.type} size={20} />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.03em] px-2.5 py-1 rounded-full bg-[#F7ECEC] text-[#8A767A]">
                      {TYPE_LABEL[r.type]}
                    </span>
                  </div>
                  <h3 className="text-[17px] leading-[1.25] font-bold tracking-[-0.3px] text-ink m-0 mb-1.5">
                    {r.name}
                  </h3>
                  <p className="text-[13.5px] leading-[1.66] text-body m-0">
                    {r.desc.replace(/\.$/, "")} &middot; {r.dur} min
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
