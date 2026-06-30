import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "The 2026 skills-based hiring playbook",
  description:
    "The complete framework for designing a skills-first hiring process — from job design to scorecards — that actually predicts performance.",
};

const RELATED = [
  {
    title: "How to write a job description that attracts skill",
    meta: "Aditya Rao · 7 min read",
    bg: "linear-gradient(150deg,#2A6FDB,#16335E)",
    delay: 0,
  },
  {
    title: "Designing assessments candidates actually finish",
    meta: "Elena Costa · 6 min read",
    bg: "linear-gradient(150deg,#1F8A5B,#0C3D29)",
    delay: 0.06,
  },
  {
    title: "Will AI make hiring fairer — or worse?",
    meta: "Daniel Mwangi · 9 min read",
    bg: "linear-gradient(150deg,#6B3FA0,#2E1A4A)",
    delay: 0.12,
  },
];

export default async function Page(props: PageProps<"/blog/[slug]">) {
  // The slug makes the route dynamic; the single designed article is rendered.
  await props.params;

  return (
    <>
      <SiteHeader
        announcement="New guide · The 2026 skills-based hiring playbook"
        announcementCta="Read now"
        announcementHref={routes.blogArticle}
      />

      {/* Article head — above-fold, no reveal needed */}
      <article className="mx-auto max-w-[740px] px-7">
        <p className="m-0 mb-[22px] mt-9 text-[13px] font-semibold text-[#9A878A]">
          <Link href={routes.blog} className="text-coral">
            Blog
          </Link>
          {" "}&nbsp;·&nbsp; Hiring strategy
        </p>
        <h1 className="m-0 mb-[22px] text-[46px] font-extrabold leading-[1.08] tracking-[-1.6px] text-ink max-[920px]:text-[34px] max-[920px]:tracking-[-1px]">
          The 2026 skills-based hiring playbook
        </h1>
        <div className="mb-[30px] flex items-center gap-3 text-[13.5px] text-[#9A878A]">
          <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-full bg-coral text-[15px] font-bold text-white">
            SK
          </span>
          <div>
            <div className="text-[14px] font-bold text-ink">Sneha Kulkarni</div>
            <div>Co-founder &amp; CPO</div>
          </div>
          <span>·</span>
          <span>12 min read</span>
          <span>·</span>
          <span>June 2026</span>
        </div>
      </article>

      {/* Hero band */}
      <div className="mx-auto max-w-[740px] px-7">
        <div
          className="mb-11 h-[380px] rounded-[22px] max-[920px]:h-[220px]"
          style={{ background: "linear-gradient(150deg,#F23F44,#7A1418)" }}
        />
      </div>

      {/* Prose body */}
      <div className="mx-auto max-w-[740px] px-7">
        <Reveal as="p" className="m-0 mb-6 text-[18px] leading-[1.75] text-[#3A2C30] max-[920px]:text-[16.5px]">
          For most of the last century, the r&eacute;sum&eacute; was the hiring
          world&apos;s currency. A degree, a job title, a recognizable logo —
          these were the proxies we used to guess who could do the work. The
          problem is that proxies are exactly that: guesses. And they
          systematically miss great people.
        </Reveal>
        <Reveal as="p" className="m-0 mb-6 text-[18px] leading-[1.75] text-[#3A2C30] max-[920px]:text-[16.5px]">
          Skills-based hiring flips the model. Instead of asking &quot;who looks
          qualified?&quot;, it asks &quot;who can actually do this job?&quot; —
          and then measures it directly. This playbook walks through how to put
          that into practice, step by step.
        </Reveal>

        {/* Pull quote */}
        <Reveal className="my-8 border-l-4 border-coral py-[6px] pl-6 text-[24px] font-semibold leading-[1.45] tracking-[-0.4px] text-ink">
          &quot;The best predictor of job performance isn&apos;t where someone
          worked — it&apos;s whether they can do the work in front of them.&quot;
        </Reveal>

        <Reveal as="h2" className="mb-[18px] mt-[46px] text-[30px] font-extrabold tracking-[-0.8px] text-ink">
          1. Start with the work, not the wishlist
        </Reveal>
        <Reveal as="p" className="m-0 mb-6 text-[18px] leading-[1.75] text-[#3A2C30] max-[920px]:text-[16.5px]">
          Before you write a single requirement, define the three to five
          outcomes this role must deliver in its first year. Every assessment
          you design should map back to one of them. If a &quot;requirement&quot;
          doesn&apos;t connect to an outcome, cut it — it&apos;s almost certainly
          filtering on background, not ability.
        </Reveal>

        <Reveal as="h2" className="mb-[18px] mt-[46px] text-[30px] font-extrabold tracking-[-0.8px] text-ink">
          2. Replace screening filters with signals
        </Reveal>
        <Reveal as="p" className="m-0 mb-6 text-[18px] leading-[1.75] text-[#3A2C30] max-[920px]:text-[16.5px]">
          Keyword filters and degree requirements are blunt instruments. They
          reject qualified people for the wrong reasons and let unqualified
          people through for the right ones. Replace them with structured
          signals:
        </Reveal>
        <Reveal as="ul" className="m-0 mb-6 pl-6">
          <li className="mb-[10px] text-[18px] leading-[1.7] text-[#3A2C30] max-[920px]:text-[16.5px]">
            <strong className="font-bold text-ink">Work-sample tests</strong>{" "}
            that mirror real tasks from the role.
          </li>
          <li className="mb-[10px] text-[18px] leading-[1.7] text-[#3A2C30] max-[920px]:text-[16.5px]">
            <strong className="font-bold text-ink">
              Cognitive and role-specific assessments
            </strong>{" "}
            validated against performance.
          </li>
          <li className="mb-[10px] text-[18px] leading-[1.7] text-[#3A2C30] max-[920px]:text-[16.5px]">
            <strong className="font-bold text-ink">
              Structured, scored interviews
            </strong>{" "}
            using the same rubric for every candidate.
          </li>
        </Reveal>

        <Reveal as="h2" className="mb-[18px] mt-[46px] text-[30px] font-extrabold tracking-[-0.8px] text-ink">
          3. Make the candidate experience worth it
        </Reveal>
        <Reveal as="p" className="m-0 mb-6 text-[18px] leading-[1.75] text-[#3A2C30] max-[920px]:text-[16.5px]">
          A skills-first process asks more of candidates, so it has to give more
          back. Keep assessments under 30 minutes, explain why each step
          matters, and give every applicant a result. Completion rates — and
          your employer brand — depend on it.
        </Reveal>

        {/* Callout */}
        <Reveal className="my-9 rounded-[18px] border border-[#F4E1D6] bg-[#FBF3EE] px-[30px] py-7">
          <p className="m-0 text-[16px] leading-[1.65] text-[#3A2C30]">
            <strong className="font-bold text-ink">Rule of thumb:</strong> if
            your assessment takes longer than the first interview would have,
            it&apos;s too long. Aim for high signal per minute of candidate
            time.
          </p>
        </Reveal>

        <Reveal as="h2" className="mb-[18px] mt-[46px] text-[30px] font-extrabold tracking-[-0.8px] text-ink">
          4. Score consistently, decide together
        </Reveal>
        <Reveal as="p" className="m-0 mb-6 text-[18px] leading-[1.75] text-[#3A2C30] max-[920px]:text-[16.5px]">
          The whole point of structure is comparability. Use the same rubric and
          the same scale for every candidate, collect scores independently
          before discussion, and let the evidence — not the loudest voice in the
          room — drive the decision.
        </Reveal>
        <Reveal as="p" className="m-0 mb-6 text-[18px] leading-[1.75] text-[#3A2C30] max-[920px]:text-[16.5px]">
          Teams that adopt this approach consistently report faster hiring,
          stronger performance from new hires, and noticeably more diverse
          pipelines. Not because they lowered the bar — but because they finally
          measured the right thing.
        </Reveal>

        {/* Share bar */}
        <Reveal className="my-12 flex items-center gap-[10px] border-y border-[#F1E6E7] py-6">
          <span className="mr-[6px] text-[13.5px] font-bold text-[#6A5A5D]">
            Share
          </span>
          {(["in", "X", "f", "↗"] as const).map((s) => (
            <a
              key={s}
              href="#"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-[11px] border border-[#EFE2E3] text-[14px] font-bold text-[#6A5A5D] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:text-coral"
            >
              {s}
            </a>
          ))}
        </Reveal>
      </div>

      {/* Related articles */}
      <section className="mt-14 bg-[#FBF3EE] px-7 py-[72px]">
        <div className="mx-auto mb-9 max-w-[640px] text-center">
          <Reveal
            as="p"
            className="m-0 mb-[18px] text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#8A7A7D]"
          >
            Keep reading<b className="font-semibold text-coral">.</b>
          </Reveal>
          <Reveal
            as="h2"
            className="m-0 text-[32px] font-extrabold tracking-[-1px] text-ink"
          >
            Related articles
          </Reveal>
        </div>
        <div className="mx-auto grid max-w-[1100px] grid-cols-3 gap-[22px] max-[920px]:grid-cols-1">
          {RELATED.map((r) => (
            <Reveal key={r.title} delay={r.delay}>
              <Link
                href={routes.blogArticle}
                className="block overflow-hidden rounded-[18px] border border-[#EFE2E3] bg-white transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)]"
              >
                <div className="h-[140px]" style={{ background: r.bg }} />
                <div className="p-5">
                  <h3 className="m-0 mb-2 text-[16px] font-bold leading-[1.35] text-ink">
                    {r.title}
                  </h3>
                  <p className="m-0 text-[12.5px] text-[#9A878A]">{r.meta}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Page-level dark CTA (distinct from global coral band in SiteFooter) */}
      <section
        className="px-7 py-20 text-center text-white"
        style={{ background: "#1A1014" }}
      >
        <div className="mx-auto max-w-[640px]">
          <Reveal
            as="h2"
            className="m-0 text-[38px] font-extrabold tracking-[-1.2px] text-white"
          >
            Put the playbook to work
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="mx-auto mb-7 mt-4 text-[19px] leading-[1.6] text-white/[0.78]"
          >
            Run your first skills-based assessment free — set up in minutes.
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href={routes.pricing}
              className="inline-flex items-center gap-[9px] rounded-[13px] bg-coral px-[26px] py-[14px] text-[15.5px] font-semibold text-white shadow-[0_12px_26px_rgba(242,63,68,0.30)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(242,63,68,0.40)]"
            >
              Start free
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
