"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

type Post = {
  title: string;
  cat: string;
  group: "hiring" | "assess" | "ai" | "dei";
  excerpt: string;
  author: string;
  read: string;
  bg: string;
};

const DATA: Post[] = [
  {
    title: "How to write a job description that attracts skill",
    cat: "Hiring strategy",
    group: "hiring",
    excerpt:
      "Stop listing years of experience. Start describing the work — and watch your candidate quality jump.",
    author: "Aditya Rao",
    read: "7 min read",
    bg: "linear-gradient(150deg,#2A6FDB,#16335E)",
  },
  {
    title: "Designing assessments candidates actually finish",
    cat: "Assessments",
    group: "assess",
    excerpt:
      "Completion rates make or break your funnel. Six research-backed ways to keep candidates engaged.",
    author: "Elena Costa",
    read: "6 min read",
    bg: "linear-gradient(150deg,#1F8A5B,#0C3D29)",
  },
  {
    title: "Will AI make hiring fairer — or worse?",
    cat: "AI & hiring",
    group: "ai",
    excerpt:
      "A clear-eyed look at where AI helps remove bias, where it can amplify it, and how to stay in control.",
    author: "Daniel Mwangi",
    read: "9 min read",
    bg: "linear-gradient(150deg,#6B3FA0,#2E1A4A)",
  },
  {
    title: "The real cost of a bad hire (and how to avoid it)",
    cat: "Hiring strategy",
    group: "hiring",
    excerpt:
      "A bad hire can cost 30% of salary or more. Skills-first screening is the cheapest insurance you can buy.",
    author: "Sara Neeson",
    read: "5 min read",
    bg: "linear-gradient(150deg,#B8521A,#5A2208)",
  },
  {
    title: "Structured interviews: the playbook",
    cat: "Assessments",
    group: "assess",
    excerpt:
      "Unstructured interviews predict performance barely better than chance. Here is how to fix yours.",
    author: "Sneha Kulkarni",
    read: "8 min read",
    bg: "linear-gradient(150deg,#16607A,#08303D)",
  },
  {
    title: "Widen your funnel without lowering the bar",
    cat: "Diversity",
    group: "dei",
    excerpt:
      "Diversity and quality are not a trade-off. Skills-based hiring is how you get both at once.",
    author: "Maria Alvarez",
    read: "6 min read",
    bg: "linear-gradient(150deg,#C0242B,#6E0B0E)",
  },
];

const TAGS: { label: string; key: "all" | Post["group"] }[] = [
  { label: "All", key: "all" },
  { label: "Hiring strategy", key: "hiring" },
  { label: "Assessments", key: "assess" },
  { label: "AI & hiring", key: "ai" },
  { label: "Diversity", key: "dei" },
];

export default function BlogClient() {
  const [tag, setTag] = useState<"all" | Post["group"]>("all");

  const posts = useMemo(
    () => (tag === "all" ? DATA : DATA.filter((p) => p.group === tag)),
    [tag]
  );

  return (
    <>
      <SiteHeader
        announcement="New guide · The 2026 skills-based hiring playbook"
        announcementCta="Read now"
        announcementHref={routes.blogArticle}
      />

      {/* hero */}
      <section
        className="px-7 pt-[60px] pb-[30px] text-center"
        style={{
          background:
            "radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff",
        }}
      >
        <div className="mx-auto max-w-[820px]">
          <Reveal
            as="p"
            className="m-0 mb-[18px] text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#8A7A7D]"
          >
            The Testlify blog<b className="font-semibold text-coral">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="m-0 text-[56px] font-extrabold leading-[1.05] tracking-[-2px] text-ink max-[920px]:text-[40px] max-[920px]:tracking-[-1.4px]"
          >
            Ideas for hiring on skill
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="mx-auto mt-5 max-w-[560px] text-[19px] font-normal leading-[1.6] text-[#5A4B4E]"
          >
            Research, playbooks and practical guides for building a fairer,
            faster hiring process.
          </Reveal>
          <Reveal
            delay={0.12}
            className="mt-6 flex flex-wrap justify-center gap-[10px]"
          >
            {TAGS.map((t) => {
              const on = tag === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTag(t.key)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                    on
                      ? "border-coral bg-coral text-white"
                      : "border-[#EFE2E3] bg-white text-[#6A5A5D]"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* featured */}
      <section className="px-7 pt-6">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
          <Link
            href={routes.blogArticle}
            className="grid grid-cols-[1.1fr_1fr] overflow-hidden rounded-[24px] border border-[#EFE2E3] bg-white shadow-[0_24px_60px_rgba(110,11,14,0.08)] max-[920px]:grid-cols-1"
          >
            <div
              className="flex min-h-[340px] items-end p-7 text-white max-[920px]:min-h-[200px]"
              style={{ background: "linear-gradient(150deg,#F23F44,#7A1418)" }}
            >
              <span className="rounded-full bg-black/[0.28] px-[11px] py-[5px] text-[11px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-[4px]">
                Featured · Hiring strategy
              </span>
            </div>
            <div className="flex flex-col p-10 max-[920px]:p-7">
              <h2 className="m-0 mb-[14px] text-[30px] font-extrabold leading-[1.1] tracking-[-1.2px] text-ink">
                The 2026 skills-based hiring playbook
              </h2>
              <p className="text-[15.5px] leading-[1.66] text-[#5A4B4E]">
                Degrees are fading as a hiring signal. Here&apos;s the complete
                framework for designing a skills-first process — from job design
                to scorecards — that actually predicts performance.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[12.5px] text-[#9A878A]">
                <span>Sneha Kulkarni</span>
                <span>·</span>
                <span>12 min read</span>
                <span>·</span>
                <span>Jun 2026</span>
              </div>
            </div>
          </Link>
          </Reveal>
        </div>
      </section>

      {/* post grid */}
      <section className="px-7 py-20 max-[920px]:py-[60px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-3 gap-[22px] max-[920px]:grid-cols-1">
            {posts.map((p) => (
              <Link
                key={p.title}
                href={routes.blogArticle}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[#EFE2E3] bg-white transition-all duration-[250ms] hover:-translate-y-1 hover:border-[#F4D2D3] hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)]"
              >
                <div
                  className="flex h-[180px] items-end p-[18px]"
                  style={{ background: p.bg }}
                >
                  <span className="rounded-full bg-black/[0.28] px-[11px] py-[5px] text-[11px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-[4px]">
                    {p.cat}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-[22px]">
                  <h3 className="m-0 mb-[10px] text-[18px] font-bold leading-[1.3] tracking-[-0.3px] text-ink">
                    {p.title}
                  </h3>
                  <p className="m-0 mb-[18px] text-[14px] leading-[1.55] text-[#6A5A5D]">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[12.5px] text-[#9A878A]">
                    <span>{p.author}</span>
                    <span>·</span>
                    <span>{p.read}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* newsletter */}
      <section className="bg-ink px-7 py-20 text-center text-white max-[920px]:py-[60px]">
        <div className="mx-auto max-w-[640px]">
          <Reveal
            as="h2"
            className="m-0 text-[38px] font-extrabold leading-[1.1] tracking-[-1.2px] text-white max-[920px]:text-[30px]"
          >
            Get the best of Testlify
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="mx-auto mb-7 mt-4 text-[19px] leading-[1.6] text-white/[0.78]"
          >
            One practical hiring idea in your inbox, every other week. No fluff.
          </Reveal>
          <Reveal delay={0.08}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-[440px] flex-wrap justify-center gap-[10px]"
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="min-w-[220px] flex-1 rounded-[12px] border-[1.5px] border-white/25 bg-white/[0.08] px-[18px] py-[14px] text-[15px] text-white placeholder:text-white/60"
            />
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center gap-[9px] rounded-[13px] border-none bg-coral px-[26px] py-[14px] text-[15.5px] font-semibold text-white shadow-[0_12px_26px_rgba(242,63,68,0.30)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(242,63,68,0.40)]"
            >
              Subscribe
            </button>
          </form>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
