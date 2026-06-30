import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import TestIcon from "@/components/TestIcon";
import { routes } from "@/lib/routes";
import {
  TESTS,
  TYPE_LABEL,
  testSlug,
  type TestEntry,
} from "@/lib/testLibraryData";
import DetailTabs, { type DetailTabContent } from "./DetailTabs";

const LEVEL_SHORT: Record<TestEntry["level"], string> = {
  Beginner: "Beginner",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
};

/** Default test, used when a slug doesn't resolve to a real entry. */
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

const Check = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const ArrowRight = ({ size = 17 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** Tab content, structured after the prototype's Overview / Skills / Sample copy. */
function buildTabContent(test: TestEntry): DetailTabContent {
  const label = TYPE_LABEL[test.type].toLowerCase();
  return {
    measures: [
      `This ${LEVEL_SHORT[test.level].toLowerCase()} ${test.name} assessment evaluates whether a candidate can apply ${label} skills to real, on-the-job situations — not just recall facts. It blends focused questions with applied scenarios to give a rounded picture of ability.`,
      `Candidates work through ${test.questions} questions across roughly ${test.dur} minutes. Each item is calibrated on real candidate data and graded objectively, so scoring is consistent and instant for every applicant.`,
    ],
    whoFor: `Ideal for screening candidates where ${label} ability genuinely predicts performance. Pair it with a cognitive ability test or a culture-add assessment for a complete, skills-first first round.`,
    skills: [
      {
        title: "Applied accuracy",
        sub: "Spotting errors and inconsistencies",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        ),
      },
      {
        title: "Speed under pressure",
        sub: "Holding quality against the clock",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
      {
        title: "Structured reasoning",
        sub: "Breaking problems into steps",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 7V4h16v3" />
            <path d="M9 20h6M12 4v16" />
          </svg>
        ),
      },
      {
        title: "Real-world judgement",
        sub: "Choosing the right response",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        ),
      },
      {
        title: "Attention to detail",
        sub: "Catching what others miss",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" />
          </svg>
        ),
      },
      {
        title: "Consistency",
        sub: "Reliable performance across items",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        ),
      },
    ],
    samples: [
      {
        num: "QUESTION 01 · MULTIPLE CHOICE",
        q: (
          <>
            Which of the four records below contains a value that is{" "}
            <code className="bg-sand px-1.5 py-0.5 rounded-[5px] text-[15px]">
              inconsistent
            </code>{" "}
            with the rest of the row?
          </>
        ),
        a: "Tests the candidate's ability to cross-check data and spot the single field that doesn't reconcile.",
      },
      {
        num: "QUESTION 02 · MATCHING",
        q: "Match each entry to its corrected version",
        a: "Candidates pair flawed records with the version that fixes every error — graded against an exact key.",
      },
      {
        num: "QUESTION 03 · SCENARIO",
        q: "Identify every discrepancy before the deadline",
        a: "An applied scenario that scores both accuracy and the number of issues caught within the time limit.",
      },
    ],
  };
}

const FAQ_ITEMS = [
  {
    q: "How is this test scored?",
    a: "Every question is auto-graded against a calibrated key, so candidates receive an objective score instantly. There is no manual marking and no reviewer bias — the same standard is applied to every applicant.",
  },
  {
    q: "Can I customise or combine it with other tests?",
    a: "Yes. Mix this test with any of our 3,500+ assessments to build a single, role-specific evaluation. You can add your own questions, set the pass mark and reorder sections in minutes.",
  },
  {
    q: "Is the test protected against cheating?",
    a: "Full-screen detection, copy-paste monitoring, webcam proctoring and randomised question pools are all available. Anti-cheat is included on every paid plan, not sold as an add-on.",
  },
  {
    q: "How do you know the test is valid?",
    a: "Each test is built and peer-reviewed by subject-matter experts, then calibrated on real candidate data and monitored for adverse impact. Tests are revalidated on a recurring schedule to keep them defensible.",
  },
  {
    q: "Which plans include this test?",
    a: "This test is available on Starter, Scale and Enterprise. Your plan covers unlimited assessments, so you can run it for as many candidates as you need.",
  },
];

export default async function Page(props: PageProps<"/test-library/[slug]">) {
  const { slug } = await props.params;
  const test = findTest(slug);
  const tabContent = buildTabContent(test);

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
      <section className="px-7 pt-[46px] pb-0 bg-[radial-gradient(1000px_480px_at_80%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_60%),#fff]">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[13px] text-[#9A878A] font-semibold m-0 mb-[26px]">
            <Link href={routes.testLibrary} className="text-coral">
              Test library
            </Link>
            <span>&nbsp;·&nbsp;</span>
            {TYPE_LABEL[test.type]}
            <span>&nbsp;·&nbsp;</span>
            {test.name}
          </p>

          <div className="grid grid-cols-[1fr_360px] gap-12 items-start max-[920px]:grid-cols-1">
            <div>
              <span className="inline-flex items-center gap-[7px] bg-[#FFF0F0] text-[#C0242B] text-[12px] font-bold tracking-[0.04em] px-[13px] py-1.5 rounded-full">
                <span className="flex">
                  <TestIcon name={test.type} size={14} />
                </span>
                {TYPE_LABEL[test.type]}
              </span>
              <h1 className="text-[44px] leading-[1.06] font-extrabold tracking-[-1.6px] mt-4 mb-4 max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
                {test.name}
              </h1>
              <p className="text-[18px] leading-[1.6] text-body m-0">
                {test.desc} Built and peer-reviewed by subject-matter experts to
                predict on-the-job performance.
              </p>
              <div className="flex gap-7 flex-wrap mt-[26px]">
                <div className="text-[13px] text-muted2 font-semibold">
                  Duration
                  <b className="block text-[20px] text-ink font-extrabold tracking-[-0.5px] mt-0.5">
                    {test.dur} min
                  </b>
                </div>
                <div className="text-[13px] text-muted2 font-semibold">
                  Questions
                  <b className="block text-[20px] text-ink font-extrabold tracking-[-0.5px] mt-0.5">
                    {test.questions}
                  </b>
                </div>
                <div className="text-[13px] text-muted2 font-semibold">
                  Level
                  <b className="block text-[20px] text-ink font-extrabold tracking-[-0.5px] mt-0.5">
                    {test.level}
                  </b>
                </div>
                <div className="text-[13px] text-muted2 font-semibold">
                  Type
                  <b className="block text-[20px] text-ink font-extrabold tracking-[-0.5px] mt-0.5">
                    {TYPE_LABEL[test.type]}
                  </b>
                </div>
              </div>
            </div>

            {/* buybox */}
            <div className="sticky top-[130px] bg-white border border-[#EFE2E3] rounded-[22px] p-7 shadow-[0_24px_60px_rgba(110,11,14,0.10)] max-[920px]:static">
              <p className="text-[13px] text-muted2 font-semibold m-0">Included on</p>
              <p className="text-[20px] leading-[1.25] font-bold tracking-[-0.3px] text-ink mt-1 mb-0">
                Starter, Scale &amp; Enterprise
              </p>
              <ul className="list-none mt-[18px] mb-[22px] p-0 flex flex-col gap-[11px]">
                {[
                  "Auto-graded with instant scoring",
                  "Anti-cheat & full-screen proctoring",
                  "Customize or mix with other tests",
                  "Calibrated on real candidate data",
                ].map((li) => (
                  <li
                    key={li}
                    className="flex items-start gap-[9px] text-[13.5px] text-[#46383C] leading-[1.4]"
                  >
                    <span className="shrink-0 mt-0.5 text-[#1FA463]">
                      <Check />
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="btn-sheen flex items-center justify-center gap-2.5 w-full font-semibold text-[15.5px] px-[26px] py-3.5 rounded-[13px] bg-coral text-white shadow-[0_12px_26px_rgba(242,63,68,0.30)] hover:bg-coral-hover hover:-translate-y-0.5 transition-all mb-2.5"
              >
                Use this test free
                <ArrowRight />
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2.5 w-full font-semibold text-[15.5px] px-[26px] py-3.5 rounded-[13px] bg-white text-ink border-[1.5px] border-warm2 hover:border-[#F2B7B9] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(110,11,14,0.08)] transition-all"
              >
                Preview questions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* tabbed content */}
      <section className="px-7 pt-16 pb-[88px]">
        <DetailTabs content={tabContent} />
      </section>

      {/* validation / SME note */}
      <section className="px-7 py-[88px] bg-white">
        <div className="max-w-[840px] mx-auto bg-[#FFF8F7] border border-warm rounded-[22px] p-9 max-[760px]:p-6">
          <Reveal
            as="p"
            className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-coral m-0 mb-[18px]"
          >
            How we build tests<span className="text-faint2">.</span>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.04}
            className="text-[34px] leading-[1.1] font-extrabold tracking-[-1.2px] text-ink m-0 mb-3.5 max-[920px]:text-[27px]"
          >
            Peer-reviewed by subject-matter experts
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[16px] leading-[1.66] text-body m-0"
          >
            Every Testlify test is authored by practitioners in the field, then
            independently reviewed by a second expert before it ships. Items are
            calibrated on real candidate data, screened for adverse impact and
            revalidated on a recurring schedule — so the scores you act on are
            objective, fair and EEOC-defensible.
          </Reveal>
        </div>
      </section>

      {/* related tests */}
      <section className="px-7 py-[88px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-10 text-center">
            <Reveal
              as="p"
              className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-coral m-0 mb-[18px]"
            >
              Related tests<span className="text-faint2">.</span>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[34px] leading-[1.1] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]"
            >
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
                  <span className="w-[42px] h-[42px] rounded-[11px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-3.5">
                    <TestIcon name={r.type} size={20} />
                  </span>
                  <h3 className="text-[17px] leading-[1.25] font-bold tracking-[-0.3px] text-ink m-0 mb-1.5">
                    {r.name}
                  </h3>
                  <p className="text-[13.5px] leading-[1.66] text-body m-0">
                    {TYPE_LABEL[r.type]} · {r.dur} min
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-7 py-[88px] bg-white">
        <div className="max-w-[840px] mx-auto">
          <div className="mb-10">
            <Reveal
              as="p"
              className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-coral m-0 mb-[18px]"
            >
              Questions<span className="text-faint2">.</span>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[34px] leading-[1.1] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]"
            >
              Everything you need to know
            </Reveal>
          </div>
          <FAQ items={FAQ_ITEMS} />
        </div>
      </section>

      {/* page CTA — distinct dark band (not the coral footer band) */}
      <section className="px-7 py-[88px] bg-[#1A1014] text-white text-center">
        <div className="max-w-[720px] mx-auto">
          <Reveal
            as="h2"
            className="text-[40px] leading-[1.1] font-extrabold tracking-[-1.2px] text-white m-0 max-[920px]:text-[30px]"
          >
            Add this test to your next role
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="text-[19px] leading-[1.6] text-white/[0.78] mt-[18px] mx-auto mb-[30px]"
          >
            Combine it with any of 3,500+ tests and start screening candidates in
            minutes.
          </Reveal>
          <Reveal
            delay={0.08}
            className="flex gap-3.5 justify-center flex-wrap"
          >
            <a
              href="#"
              className="btn-sheen inline-flex items-center gap-2.5 font-semibold text-[15.5px] px-[26px] py-3.5 rounded-[13px] bg-white text-[#C0242B] hover:-translate-y-0.5 transition-all"
            >
              Use this test free
              <ArrowRight />
            </a>
            <Link
              href={routes.testLibrary}
              className="inline-flex items-center gap-2.5 font-semibold text-[15.5px] px-[26px] py-3.5 rounded-[13px] bg-white/[0.14] text-white border-[1.5px] border-white/40 hover:-translate-y-0.5 transition-all"
            >
              Browse all tests
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
