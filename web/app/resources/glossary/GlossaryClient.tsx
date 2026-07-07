"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import { TERMS, TOTAL, termSlug, GLOSSARY_SLUGS } from "./data";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const SearchIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function GlossaryClient() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const { groups, present, resultCount } = useMemo(() => {
    const filtered = q
      ? TERMS.filter(
          (t) =>
            t.term.toLowerCase().includes(q) ||
            t.short.toLowerCase().includes(q)
        )
      : TERMS;

    const byLetter: Record<string, typeof TERMS> = {};
    filtered.forEach((t) => {
      const L = t.term[0].toUpperCase();
      (byLetter[L] = byLetter[L] || []).push(t);
    });
    const letters = Object.keys(byLetter).sort();
    const groups = letters.map((L) => ({
      letter: L,
      anchor: `gl-${L}`,
      terms: byLetter[L],
    }));

    return {
      groups,
      present: new Set(letters),
      resultCount: filtered.length,
    };
  }, [q]);

  const totalLabel = q ? String(resultCount) : `${TOTAL}+`;
  const isEmpty = resultCount === 0;

  const jumpTo = (letter: string) => {
    const el = document.getElementById(`gl-${letter}`);
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <SiteHeader
        announcement="The HR Glossary — 500+ hiring & assessment terms, defined in plain English"
        announcementCta="Browse the A–Z"
        announcementHref={routes.resourcesGlossary}
      />

      {/* HERO */}
      <section
        className="relative overflow-hidden px-7 pt-[66px] pb-11 text-center max-[640px]:px-[22px] max-[640px]:pt-11 max-[640px]:pb-[34px]"
        style={{
          background:
            "radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff",
        }}
      >
        <div className="mx-auto max-w-[820px]">
          <div className="mb-[18px] flex items-center justify-center gap-2 text-[13px] text-[#8A7A7D]">
            <Link href={routes.resources} className="transition-colors hover:text-coral">
              Resources
            </Link>
            <span>/</span>
            <span>HR Glossary</span>
          </div>
          <Reveal
            as="p"
            className="m-0 mb-4 text-[13px] font-bold uppercase tracking-[0.16em] text-coral"
          >
            The HR Glossary<span className="text-coral">.</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="m-0 text-[54px] font-extrabold leading-[1.04] tracking-[-1.8px] text-ink max-[640px]:text-[36px]"
          >
            Every hiring term,
            <br />
            <em className="not-italic text-coral">defined in plain English</em>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="mx-auto mt-[18px] max-w-[600px] text-[18px] leading-[1.6] text-[#5A4B4E]"
          >
            From adverse impact to zero-based hiring — an A–Z reference for
            recruiters and HR leaders, written to be actually useful, not
            academic.
          </Reveal>
          <Reveal
            delay={0.17}
            className="mx-auto mt-[30px] flex max-w-[520px] items-center gap-[11px] rounded-[14px] border-[1.5px] border-warm bg-white px-[18px] py-[13px] shadow-[0_12px_30px_rgba(110,11,14,0.07)] transition-[border-color,box-shadow] duration-200 focus-within:border-[#FBD0D1] focus-within:shadow-[0_12px_34px_rgba(242,63,68,0.14)]"
          >
            <span className="flex flex-none text-[#B29A9E]">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 500+ terms…"
              className="w-full border-0 bg-transparent text-[16px] text-ink outline-none placeholder:text-[#B29A9E]"
            />
          </Reveal>
          <Reveal
            as="p"
            delay={0.21}
            className="m-0 mt-4 text-[13.5px] font-medium text-[#8A7A7D]"
          >
            Showing <b className="font-bold text-coral">{resultCount}</b> of{" "}
            {totalLabel} terms
          </Reveal>
        </div>
      </section>

      {/* ALPHABET BAR */}
      <div className="sticky top-[72px] z-20 border-y border-[#F4E7E8] bg-white/[0.92] py-3 backdrop-blur-[10px] max-[640px]:top-[72px]">
        <div className="mx-auto max-w-[1240px] px-7">
          <div className="flex flex-wrap justify-center gap-[5px]">
            {ALPHABET.map((L) => {
              const on = present.has(L);
              return (
                <button
                  key={L}
                  type="button"
                  onClick={on ? () => jumpTo(L) : undefined}
                  disabled={!on}
                  className={`flex h-[33px] w-[33px] items-center justify-center rounded-[9px] border border-transparent bg-none font-bold text-[13.5px] transition-all duration-150 ${
                    on
                      ? "cursor-pointer text-[#6C5A5D] hover:bg-[#FFF0EF] hover:text-coral"
                      : "cursor-default text-[#D9C9CB]"
                  }`}
                >
                  {L}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* BODY */}
      <section className="px-7 pb-24 pt-14 max-[640px]:px-[22px] max-[640px]:pb-16 max-[640px]:pt-10">
        <div className="mx-auto max-w-[1240px]">
          {isEmpty && (
            <div className="px-5 py-[60px] text-center text-[16px] text-[#8A7A7D]">
              No terms match &ldquo;<b className="text-ink">{query}</b>&rdquo;.
              Try another word, or{" "}
              <Link href={routes.contact} className="font-bold text-coral">
                suggest a term
              </Link>
              .
            </div>
          )}

          {groups.map((g) => (
            <div
              key={g.letter}
              id={g.anchor}
              className="mb-[46px] scroll-mt-[130px]"
            >
              <div className="mb-[22px] flex items-center gap-4">
                <b className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#FFF0EF] text-[30px] font-extrabold tracking-[-1px] text-coral">
                  {g.letter}
                </b>
                <span className="h-px flex-1 bg-warm" />
              </div>
              <div className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
                {g.terms.map((t) => {
                  const slug = termSlug(t.term);
                  const hasPage = GLOSSARY_SLUGS.includes(slug);
                  const inner = (
                    <>
                      <span className="mb-[7px] flex items-center justify-between gap-[10px] text-[16.5px] font-bold tracking-[-0.3px] text-ink">
                        {t.term}
                        {hasPage && (
                          <span className="flex flex-none text-[#E0B9BC] transition-[translate,color] duration-[250ms] group-hover:translate-x-[3px] group-hover:text-coral">
                            <ArrowIcon />
                          </span>
                        )}
                      </span>
                      <p className="m-0 line-clamp-2 text-[13.5px] leading-[1.55] text-muted2">
                        {t.short}
                      </p>
                    </>
                  );
                  return hasPage ? (
                    <Link
                      key={t.term}
                      href={`${routes.resourcesGlossary}/${slug}`}
                      className="group block rounded-[15px] border border-[#F2E6E7] bg-white px-[22px] py-5 transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div
                      key={t.term}
                      className="rounded-[15px] border border-[#F2E6E7] bg-white px-[22px] py-5"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* SUGGEST-A-TERM STRIP */}
          <Reveal className="mt-5 flex flex-wrap items-center justify-between gap-[30px] rounded-[22px] bg-sand p-11 max-[640px]:p-7">
            <div>
              <h3 className="m-0 mb-2 text-[24px] font-extrabold tracking-[-0.5px] text-ink">
                Can&apos;t find a term?
              </h3>
              <p className="m-0 max-w-[440px] text-[15px] leading-[1.55] text-[#6C5A5D]">
                The glossary grows every week. Tell us what you&apos;d like
                defined and we&apos;ll add it — with the same plain-English
                clarity.
              </p>
            </div>
            <CtaButton
              label="Suggest a term"
              href={routes.contact}
              variant="primary"
              size="md"
              icon="arrow"
              magnetic
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
