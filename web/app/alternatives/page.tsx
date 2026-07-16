import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";
import { COMPETITORS } from "./[slug]/data";

export const metadata: Metadata = {
  title: "See how Testlify compares",
  description:
    "Honest, side-by-side comparisons of Testlify against the assessment platforms you're evaluating — library depth, interviews, pricing and integrations.",
};

/* ============================================================
   Comparison cards — ported verbatim from the
   resource-competitors.dc.html COMPARISONS array (category
   framing that implies competitors without naming them). Each
   card links ONLY if its slug has a real detail page in
   COMPETITORS; otherwise it renders as a non-linking card (no
   404s). The template ships one detail instance today.
   ============================================================ */
type Comparison = {
  name: string;
  initial: string;
  desc: string;
  /** matches a key in COMPETITORS when a detail page exists */
  slug?: string;
};

const COMPARISONS: Comparison[] = [
  {
    name: "legacy assessment suites",
    initial: "L",
    desc: "Modern, AI-native screening vs older test-only platforms with smaller libraries and rigid contracts.",
    slug: "legacy-assessment-suites",
  },
  {
    name: "coding-only platforms",
    initial: "C",
    desc: "One tool for coding, cognitive, personality and interviews — vs a developer-only point solution.",
  },
  {
    name: "video-only interview tools",
    initial: "V",
    desc: "Skills tests plus AI video, audio and chat interviews — vs a tool that only does interviews.",
  },
  {
    name: "general ATS testing add-ons",
    initial: "A",
    desc: "Purpose-built assessment depth and proctoring vs a light testing feature bolted onto an ATS.",
  },
  {
    name: "enterprise-only vendors",
    initial: "E",
    desc: "Transparent per-candidate pricing and self-serve onboarding vs annual contracts and long sales cycles.",
  },
  {
    name: "free quiz makers",
    initial: "F",
    desc: "Validated, EEOC-defensible, proctored assessments vs ungraded, unvalidated free quiz tools.",
  },
];

const REASONS = [
  {
    n: "3,500+",
    l: "Validated tests — roughly 10x the typical competitor library.",
  },
  { n: "$0", l: "Annual contract required — pay per candidate, cancel anytime." },
  {
    n: "100+",
    l: "Native ATS integrations on every paid plan, not just enterprise.",
  },
  { n: "3-in-1", l: "AI video, audio and chat interviews — all on one platform." },
];

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* Card inner markup — identical rest state for linking and
   non-linking cards; hover lift only exists on linking cards. */
function CardBody({ c }: { c: Comparison }) {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-10 h-10 rounded-[11px] bg-[linear-gradient(135deg,#FF7A52,#F23F44)] text-white font-extrabold text-[15px] flex items-center justify-center flex-none">
          T
        </span>
        <span className="text-[12px] font-bold text-[#B29A9E] tracking-[0.04em]">
          VS
        </span>
        <span className="w-10 h-10 rounded-[11px] bg-[#F2E6E7] text-[#8A7A7D] font-extrabold text-[15px] flex items-center justify-center flex-none">
          {c.initial}
        </span>
      </div>
      <p className="text-[18px] font-bold tracking-[-0.3px] m-0 mb-[7px] text-ink">
        Testlify vs {c.name}
      </p>
      <p className="text-[14.5px] leading-[1.55] text-muted2 m-0 mb-[18px]">
        {c.desc}
      </p>
    </>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Comparing assessment platforms? See how Testlify stacks up — no annual contract, 3,500+ tests"
        announcementCta="Compare now"
      />

      {/* HERO */}
      <section className="relative overflow-hidden px-7 pt-[62px] pb-[46px] text-center bg-[radial-gradient(1000px_460px_at_50%_-12%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff] max-[640px]:pt-11 max-[640px]:pb-[34px] max-[640px]:px-[22px]">
        <div className="max-w-[820px] mx-auto">
          <Reveal
            as="div"
            className="text-[13px] text-muted flex gap-2 items-center justify-center mb-[18px]"
          >
            <Link href={routes.blog} className="hover:text-coral">
              Resources
            </Link>
            <span>/</span>
            <span>Competitors</span>
          </Reveal>
          <Reveal
            as="p"
            className="text-[13px] font-bold tracking-[0.16em] uppercase text-coral m-0 mb-4"
          >
            Testlify vs the rest<b className="font-bold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="text-[52px] leading-[1.05] font-extrabold tracking-[-1.6px] m-0 text-ink max-[640px]:text-[36px]"
          >
            See how Testlify
            <br />
            <em className="not-italic text-coral">compares</em>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="text-[18px] leading-[1.6] text-body mt-[18px] mx-auto max-w-[600px]"
          >
            Honest, side-by-side comparisons against the platforms you&apos;re
            evaluating — so you can choose the assessment tool that actually fits
            how you hire.
          </Reveal>
        </div>
      </section>

      {/* WHY BAND */}
      <section className="px-7 py-[52px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="text-center max-w-[720px] mx-auto mb-[34px]">
            <h2 className="text-[30px] font-extrabold tracking-[-0.7px] m-0 text-ink">
              Why teams pick Testlify
            </h2>
            <p className="text-[16px] leading-[1.6] text-body2 mt-3 mb-0">
              The differences that show up on every comparison, whoever
              you&apos;re weighing us against.
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="grid grid-cols-4 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1"
          >
            {REASONS.map((r) => (
              <div
                key={r.n}
                className="bg-white border border-[#F0E2E3] rounded-2xl p-6 shadow-[0_16px_30px_rgba(110,11,14,0.06)]"
              >
                <div className="text-[30px] font-extrabold text-coral tracking-[-1px] leading-none">
                  {r.n}
                </div>
                <div className="text-[14px] leading-[1.5] text-body font-semibold mt-2.5">
                  {r.l}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* COMPARISON GRID */}
      <section className="px-7 pt-14 pb-[90px] bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-[34px]">
            <Reveal
              as="p"
              className="text-[13px] font-bold tracking-[0.16em] uppercase text-coral m-0 mb-4"
            >
              Comparisons<b className="font-bold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[30px] font-extrabold tracking-[-0.7px] m-0 text-ink"
            >
              Pick your comparison
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-[18px] max-[1000px]:grid-cols-1">
            {COMPARISONS.map((c) => {
              const hasDetail = !!(c.slug && COMPETITORS[c.slug]);
              const cardClass =
                "group flex flex-col bg-white border border-[#F2E6E7] rounded-[18px] px-7 py-[26px]";
              if (hasDetail) {
                return (
                  <Link
                    key={c.name}
                    href={`${routes.resourcesCompetitors}/${c.slug}`}
                    className={`${cardClass} transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]`}
                  >
                    <CardBody c={c} />
                    <span className="mt-auto inline-flex items-center gap-[7px] text-[14px] font-bold text-coral">
                      See the comparison
                      <span className="inline-flex transition-[translate] duration-[250ms] group-hover:translate-x-[3px]">
                        <ArrowIcon />
                      </span>
                    </span>
                  </Link>
                );
              }
              return (
                <div key={c.name} className={cardClass}>
                  <CardBody c={c} />
                  <span className="mt-auto inline-flex items-center gap-[7px] text-[13px] font-semibold text-faint">
                    Comparison coming soon
                  </span>
                </div>
              );
            })}
          </div>
          <Reveal
            as="p"
            className="max-w-[820px] mx-auto mt-[34px] text-center text-[13px] text-faint leading-[1.6]"
          >
            Comparison names shown are category placeholders. Specific
            platform comparisons are published as their detail pages go live.
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
