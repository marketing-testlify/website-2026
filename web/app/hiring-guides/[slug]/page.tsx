import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

type Block =
  | { kind: "p"; text: string }
  | { kind: "pull"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "callout"; strong: string; rest: string }
  | { kind: "list"; items: { strong: string; rest: string }[] };

type Related = { title: string; meta: string; gradient: string };

type Guide = {
  crumbLabel: string;
  title: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  readTime: string;
  date: string;
  heroGradient: string;
  announcement: string;
  announcementCta: string;
  blocks: Block[];
  related: Related[];
  ctaHeading: string;
  ctaSub: string;
  ctaLabel: string;
};

const GUIDES: Record<string, Guide> = {
  "skills-based-hiring-playbook": {
    crumbLabel: "Hiring strategy",
    title: "The 2026 skills-based hiring playbook",
    author: "Sneha Kulkarni",
    authorRole: "Co-founder & CPO",
    authorInitials: "SK",
    readTime: "12 min read",
    date: "June 2026",
    heroGradient: "linear-gradient(150deg,#F23F44,#7A1418)",
    announcement: "New guide · The 2026 skills-based hiring playbook",
    announcementCta: "Read now",
    blocks: [
      {
        kind: "p",
        text: "For most of the last century, the résumé was the hiring world's currency. A degree, a job title, a recognizable logo — these were the proxies we used to guess who could do the work. The problem is that proxies are exactly that: guesses. And they systematically miss great people.",
      },
      {
        kind: "p",
        text: 'Skills-based hiring flips the model. Instead of asking "who looks qualified?", it asks "who can actually do this job?" — and then measures it directly. This playbook walks through how to put that into practice, step by step.',
      },
      {
        kind: "pull",
        text: '"The best predictor of job performance isn\'t where someone worked — it\'s whether they can do the work in front of them."',
      },
      { kind: "h2", text: "1. Start with the work, not the wishlist" },
      {
        kind: "p",
        text: 'Before you write a single requirement, define the three to five outcomes this role must deliver in its first year. Every assessment you design should map back to one of them. If a "requirement" doesn\'t connect to an outcome, cut it — it\'s almost certainly filtering on background, not ability.',
      },
      { kind: "h2", text: "2. Replace screening filters with signals" },
      {
        kind: "p",
        text: "Keyword filters and degree requirements are blunt instruments. They reject qualified people for the wrong reasons and let unqualified people through for the right ones. Replace them with structured signals:",
      },
      {
        kind: "list",
        items: [
          { strong: "Work-sample tests", rest: " that mirror real tasks from the role." },
          { strong: "Cognitive and role-specific assessments", rest: " validated against performance." },
          { strong: "Structured, scored interviews", rest: " using the same rubric for every candidate." },
        ],
      },
      { kind: "h2", text: "3. Make the candidate experience worth it" },
      {
        kind: "p",
        text: "A skills-first process asks more of candidates, so it has to give more back. Keep assessments under 30 minutes, explain why each step matters, and give every applicant a result. Completion rates — and your employer brand — depend on it.",
      },
      {
        kind: "callout",
        strong: "Rule of thumb:",
        rest: " if your assessment takes longer than the first interview would have, it's too long. Aim for high signal per minute of candidate time.",
      },
      { kind: "h2", text: "4. Score consistently, decide together" },
      {
        kind: "p",
        text: "The whole point of structure is comparability. Use the same rubric and the same scale for every candidate, collect scores independently before discussion, and let the evidence — not the loudest voice in the room — drive the decision.",
      },
      {
        kind: "p",
        text: "Teams that adopt this approach consistently report faster hiring, stronger performance from new hires, and noticeably more diverse pipelines. Not because they lowered the bar — but because they finally measured the right thing.",
      },
    ],
    related: [
      { title: "How to write a job description that attracts skill", meta: "Aditya Rao · 7 min read", gradient: "linear-gradient(150deg,#2A6FDB,#16335E)" },
      { title: "Designing assessments candidates actually finish", meta: "Elena Costa · 6 min read", gradient: "linear-gradient(150deg,#1F8A5B,#0C3D29)" },
      { title: "Will AI make hiring fairer — or worse?", meta: "Daniel Mwangi · 9 min read", gradient: "linear-gradient(150deg,#6B3FA0,#2E1A4A)" },
    ],
    ctaHeading: "Put the playbook to work",
    ctaSub: "Run your first skills-based assessment free — set up in minutes.",
    ctaLabel: "Start free",
  },
};

export function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES[slug];
  if (!guide) return { title: "Hiring guide" };
  const firstPara = guide.blocks.find(
    (b): b is Extract<Block, { kind: "p" }> => b.kind === "p"
  );
  return {
    title: guide.title,
    description: firstPara?.text.slice(0, 155),
  };
}

const SHARE = ["in", "X", "f", "↗"];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = GUIDES[slug];
  if (!guide) notFound();

  return (
    <>
      <SiteHeader
        announcement={guide.announcement}
        announcementCta={guide.announcementCta}
      />

      <article className="max-w-[740px] mx-auto px-7">
        <Reveal as="p" className="text-[13px] text-[#9A878A] font-semibold mt-9 mb-[22px]">
          <Link href={routes.blog} className="text-coral">
            Blog
          </Link>
          &nbsp;·&nbsp; {guide.crumbLabel}
        </Reveal>
        <Reveal
          as="h1"
          className="text-[46px] max-[920px]:text-[34px] leading-[1.08] font-extrabold tracking-[-1.6px] max-[920px]:tracking-[-1px] m-0 mb-[22px] text-ink"
        >
          {guide.title}
        </Reveal>
        <Reveal className="flex items-center gap-3 text-[13.5px] text-[#9A878A] mb-[30px]">
          <span className="w-[42px] h-[42px] rounded-full bg-coral text-white flex items-center justify-center font-bold text-[15px]">
            {guide.authorInitials}
          </span>
          <div>
            <div className="font-bold text-ink text-[14px]">{guide.author}</div>
            <div>{guide.authorRole}</div>
          </div>
          <span>·</span>
          <span>{guide.readTime}</span>
          <span>·</span>
          <span>{guide.date}</span>
        </Reveal>
      </article>

      <div className="max-w-[740px] mx-auto px-7">
        <Reveal>
          <div className="h-[380px] max-[920px]:h-[220px] rounded-[22px] mb-11" style={{ background: guide.heroGradient }} />
        </Reveal>
      </div>

      <div className="max-w-[740px] mx-auto px-7">
        {guide.blocks.map((b, i) => {
          if (b.kind === "p")
            return (
              <Reveal
                key={i}
                as="p"
                className="text-[18px] max-[920px]:text-[16.5px] leading-[1.75] text-[#3A2C30] m-0 mb-6"
              >
                {b.text}
              </Reveal>
            );
          if (b.kind === "pull")
            return (
              <Reveal
                key={i}
                className="border-l-4 border-coral py-[6px] pl-6 my-8 text-[24px] leading-[1.45] font-semibold tracking-[-0.4px] text-ink"
              >
                {b.text}
              </Reveal>
            );
          if (b.kind === "h2")
            return (
              <Reveal
                key={i}
                as="h2"
                className="text-[30px] font-extrabold tracking-[-0.8px] mt-[46px] mb-[18px] text-ink"
              >
                {b.text}
              </Reveal>
            );
          if (b.kind === "callout")
            return (
              <Reveal
                key={i}
                className="bg-sand border border-[#F4E1D6] rounded-[18px] py-7 px-[30px] my-9"
              >
                <p className="m-0 text-[16px] leading-[1.65] text-[#3A2C30]">
                  <strong className="text-ink font-bold">{b.strong}</strong>
                  {b.rest}
                </p>
              </Reveal>
            );
          // list
          return (
            <Reveal key={i} as="ul" className="mt-0 mb-6 pl-6">
              {b.items.map((it) => (
                <li
                  key={it.strong}
                  className="text-[18px] max-[920px]:text-[16.5px] leading-[1.7] text-[#3A2C30] mb-2.5"
                >
                  <strong className="text-ink font-bold">{it.strong}</strong>
                  {it.rest}
                </li>
              ))}
            </Reveal>
          );
        })}

        <Reveal className="flex gap-2.5 items-center my-12 py-6 border-t border-b border-[#F1E6E7]">
          <span className="text-[13.5px] font-bold text-[#6A5A5D] mr-1.5">Share</span>
          {SHARE.map((s, i) => (
            <a
              key={i}
              href="#"
              className="w-[42px] h-[42px] rounded-[11px] border border-[#EFE2E3] flex items-center justify-center text-[#6A5A5D] font-bold text-[14px] transition-[translate,border-color,color] duration-200 hover:border-[#F2B7B9] hover:text-coral hover:-translate-y-0.5"
            >
              {s}
            </a>
          ))}
        </Reveal>
      </div>

      {/* related */}
      <section className="bg-sand px-7 py-[72px] mt-14">
        <div className="text-center max-w-[640px] mx-auto mb-9">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
            Keep reading<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal as="h2" className="text-[32px] font-extrabold tracking-[-1px] m-0 text-ink">
            Related articles
          </Reveal>
        </div>
        <Reveal className="grid grid-cols-3 max-[920px]:grid-cols-1 gap-[22px] max-w-[1100px] mx-auto">
          {guide.related.map((r) => (
            <Link
              key={r.title}
              href={routes.blog}
              className="bg-white border border-[#EFE2E3] rounded-[18px] overflow-hidden transition-[translate,box-shadow] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)]"
            >
              <div className="h-[140px]" style={{ background: r.gradient }} />
              <div className="p-5">
                <h3 className="text-[16px] font-bold leading-[1.35] m-0 mb-2 text-ink">{r.title}</h3>
                <p className="text-[12.5px] text-[#9A878A] m-0">{r.meta}</p>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* dark CTA */}
      <section className="bg-ink text-white text-center px-7 py-20">
        <div className="max-w-[640px] mx-auto">
          <Reveal as="h2" className="text-[38px] font-extrabold tracking-[-1.2px] text-white m-0">
            {guide.ctaHeading}
          </Reveal>
          <Reveal as="p" delay={0.04} className="text-[19px] text-white/[0.78] mx-auto mt-4 mb-7">
            {guide.ctaSub}
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href={routes.pricing}
              className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] py-[14px] px-[26px] rounded-[13px] bg-coral text-white shadow-[0_12px_26px_rgba(242,63,68,0.30)] transition-[translate,box-shadow] duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(242,63,68,0.40)]"
            >
              {guide.ctaLabel}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
