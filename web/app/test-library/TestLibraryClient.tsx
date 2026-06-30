"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TestIcon, { type TestIconKey } from "@/components/TestIcon";
import { routes } from "@/lib/routes";
import {
  TESTS,
  TEST_TYPES,
  TYPE_LABEL,
  DIFFICULTIES,
  POPULAR,
  DIFFICULTY_CLASSES,
  testSlug,
  type Difficulty,
} from "@/lib/testLibraryData";

const ArrowRight = ({ w = 16, sw = 2.4 }: { w?: number; sw?: number }) => (
  <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function TestLibraryClient() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<TestIconKey | null>(null);
  const [level, setLevel] = useState<Difficulty | null>(null);

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return TESTS.filter((t) => {
      if (type && t.type !== type) return false;
      if (level && t.level !== level) return false;
      if (q) {
        const hay = `${t.name} ${t.desc} ${TYPE_LABEL[t.type]}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [type, level, q]);

  const hasActive = !!(type || level || q);
  const clearAll = () => {
    setQuery("");
    setType(null);
    setLevel(null);
  };

  return (
    <>
      <SiteHeader
        announcement="3,000+ skills tests — every one validated by subject-matter experts"
        announcementCta="Browse library"
        announcementHref={routes.testLibrary}
      />

      {/* hero */}
      <section className="px-7 pt-[66px] pb-10 bg-[radial-gradient(1100px_540px_at_82%_-10%,#FCE0DE_0%,rgba(252,224,222,0)_56%),linear-gradient(180deg,#FFF8F7,#fff)]">
        <div className="max-w-[1240px] mx-auto px-7">
          <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-coral mb-4">
            Test library<span className="text-[#CBB6B9]">.</span>
          </p>
          <h1 className="text-[52px] leading-[1.05] font-extrabold tracking-[-1.4px] m-0 max-w-[780px] max-[760px]:text-[36px]">
            3,184+ skills tests, <em className="not-italic text-coral">validated by experts</em>
          </h1>
          <p className="text-[18px] leading-[1.62] text-body mt-5 max-w-[600px]">
            Browse role-specific, cognitive, coding, language and personality assessments — each built by subject-matter experts and calibrated on real candidate data.
          </p>

          {/* search */}
          <div className="relative max-w-[600px] mt-[30px]">
            <span className="absolute left-[19px] top-1/2 -translate-y-1/2 text-[#C0989B] flex">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 3,184+ tests by skill, role or topic"
              className="w-full border-[1.6px] border-[#F0DBDC] rounded-[15px] py-[18px] pr-[18px] pl-[52px] text-[16px] text-ink bg-white shadow-[0_12px_36px_rgba(110,11,14,0.06)] transition-[border-color,box-shadow] duration-200 outline-none placeholder:text-[#B79DA0] focus:border-coral focus:shadow-[0_12px_40px_rgba(242,63,68,0.12)]"
            />
          </div>

          {/* popular chips */}
          <div className="flex items-center gap-[9px] flex-wrap mt-[18px]">
            <span className="text-[13px] text-[#8A767A] font-medium mr-0.5">Popular:</span>
            {POPULAR.map((name) => (
              <button
                key={name}
                onClick={() => setQuery(name)}
                className="text-[13.5px] font-semibold text-[#46383C] bg-white border border-[#EFDDDE] px-3.5 py-[7px] rounded-full cursor-pointer transition-all duration-150 hover:border-coral hover:text-coral hover:bg-[#FFF4F3]"
              >
                {name}
              </button>
            ))}
          </div>

          {/* stats */}
          <div className="flex items-center gap-[30px] flex-wrap mt-[34px] pt-[30px] border-t border-warm3">
            {[
              ["3,184+", "Ready-to-use tests"],
              ["12", "Test categories"],
              ["40+", "Languages supported"],
              ["900+", "Subject-matter experts"],
            ].map(([num, lab], i) => (
              <div key={lab} className="contents">
                {i > 0 && <span className="w-px h-[38px] bg-[#EEDFE0] max-[760px]:hidden" />}
                <div>
                  <div className="text-[30px] font-extrabold tracking-[-0.5px] text-ink">{num}</div>
                  <div className="text-[13.5px] text-muted2 font-medium mt-px">{lab}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* category tiles */}
      <section className="px-7 pt-[62px] pb-2">
        <div className="max-w-[1240px] mx-auto px-7">
          <div className="flex items-end justify-between gap-5 flex-wrap mb-[26px]">
            <div>
              <h2 className="text-[30px] font-extrabold tracking-[-0.8px] m-0 max-[760px]:text-[25px]">Browse by category</h2>
              <p className="text-[15px] text-muted2 mt-1.5 mb-0">Pick a category to filter the library, or search above.</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3.5 max-[960px]:grid-cols-3 max-[760px]:grid-cols-2">
            {TEST_TYPES.map((c) => {
              const on = type === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setType(on ? null : c.key)}
                  className={`flex items-center gap-[13px] text-left bg-white border-[1.4px] rounded-[14px] px-4 py-[15px] cursor-pointer transition-all duration-150 group ${
                    on
                      ? "border-coral bg-[#FFF6F5] shadow-[0_12px_26px_rgba(242,63,68,0.12)]"
                      : "border-warm hover:border-[#F4B9BB] hover:shadow-[0_12px_26px_rgba(110,11,14,0.08)] hover:-translate-y-0.5"
                  }`}
                >
                  <span className={`shrink-0 w-[42px] h-[42px] rounded-[11px] flex items-center justify-center transition-all duration-150 ${on ? "bg-coral text-white" : "bg-rose-100 text-coral"}`}>
                    <TestIcon name={c.key} />
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-semibold text-[#27181B] leading-[1.25]">{c.label}</span>
                    <span className="block text-[12.5px] text-[#9A868A] font-medium mt-0.5">{c.count.toLocaleString()} tests</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* results */}
      <section className="px-7 pt-10 pb-[30px]">
        <div className="max-w-[1240px] mx-auto px-7">
          {/* toolbar */}
          <div className="flex items-center justify-between gap-[18px] flex-wrap pb-[22px] border-b border-warm3 mb-[30px] max-[760px]:flex-col max-[760px]:items-start">
            <div className="flex items-center gap-3.5 flex-wrap">
              <span className="text-[13px] font-semibold text-[#8A767A]">Difficulty</span>
              <div className="inline-flex bg-[#F7ECEC] rounded-[11px] p-1 gap-[3px]">
                {DIFFICULTIES.map((lv) => {
                  const on = level === lv;
                  return (
                    <button
                      key={lv}
                      onClick={() => setLevel(on ? null : lv)}
                      className={`border-0 font-semibold text-[13.5px] px-[15px] py-2 rounded-lg cursor-pointer transition-all duration-150 ${
                        on
                          ? "bg-white text-coral shadow-[0_2px_8px_rgba(110,11,14,0.1)]"
                          : "bg-transparent text-[#6A585B] hover:text-coral"
                      }`}
                    >
                      {lv}
                    </button>
                  );
                })}
              </div>
              {type && (
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-coral bg-rose-100 border border-[#F8CFD0] pl-[13px] pr-2 py-[7px] rounded-full">
                  {TYPE_LABEL[type]}
                  <button
                    onClick={() => setType(null)}
                    aria-label="Clear category"
                    className="w-[18px] h-[18px] rounded-full bg-coral text-white border-0 cursor-pointer flex items-center justify-center text-[11px] leading-none"
                  >
                    ✕
                  </button>
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[14px] text-[#6A585B] font-medium">
                <b className="text-ink font-bold">{filtered.length}</b> tests
              </span>
              {hasActive && (
                <button onClick={clearAll} className="text-[13.5px] font-semibold text-[#8A767A] bg-none border-0 cursor-pointer underline underline-offset-[3px] hover:text-coral">
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* grid / empty */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-3 gap-[18px] max-[960px]:grid-cols-2 max-[760px]:grid-cols-1">
              {filtered.map((t) => {
                const dc = DIFFICULTY_CLASSES[t.level];
                return (
                  <Link
                    key={t.name}
                    href={`${routes.testLibrary}/${testSlug(t.name)}`}
                    className="tcard group flex flex-col bg-white border-[1.4px] border-[#EFE1E2] rounded-2xl px-[22px] pt-[22px] pb-[18px] transition-all duration-200 relative overflow-hidden hover:border-[#F4B9BB] hover:shadow-[0_18px_40px_rgba(110,11,14,0.1)] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between gap-2.5 mb-[15px]">
                      <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#7A686B]">
                        <span className="w-[30px] h-[30px] rounded-lg bg-rose-100 text-coral flex items-center justify-center shrink-0">
                          <TestIcon name={t.type} />
                        </span>
                        {TYPE_LABEL[t.type]}
                      </span>
                      <span className={`text-[11px] font-bold tracking-[0.03em] px-2.5 py-1 rounded-full shrink-0 ${dc.bg} ${dc.fg}`}>
                        {t.level}
                      </span>
                    </div>
                    <h3 className="text-[18.5px] font-bold tracking-[-0.3px] text-ink m-0 mb-2 leading-[1.25]">{t.name}</h3>
                    <p className="text-[14px] leading-[1.55] text-body2 m-0 mb-[18px] flex-1">{t.desc}</p>
                    <div className="flex items-center gap-4 pt-[15px] border-t border-[#F4E7E8]">
                      <span className="flex items-center gap-1.5 text-[12.5px] text-muted2 font-medium">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[#C0989B] shrink-0" aria-hidden><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                        {t.questions} questions
                      </span>
                      <span className="flex items-center gap-1.5 text-[12.5px] text-muted2 font-medium">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[#C0989B] shrink-0" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                        {t.dur} min
                      </span>
                      <span className="flex items-center gap-1.5 ml-auto text-[13px] font-bold text-coral opacity-0 -translate-x-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                        View<ArrowRight w={15} sw={2.4} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 px-5 border-[1.5px] border-dashed border-[#EAD7D9] rounded-[18px] bg-[#FDF7F6]">
              <span className="w-[54px] h-[54px] rounded-[14px] bg-rose-100 text-coral inline-flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
              </span>
              <h3 className="text-[20px] font-bold mt-3.5 mb-1.5">No tests matched your search</h3>
              <p className="text-[15px] text-muted2 m-0 mb-5">Try a different keyword or clear your filters to see the full library.</p>
              <button onClick={clearAll} className="inline-flex items-center gap-2.5 font-bold text-[15px] rounded-xl px-6 py-3.5 cursor-pointer border-0 bg-white text-ink border-[1.5px] border-warm2 hover:border-coral hover:text-coral transition-all">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* request band */}
      <section className="px-7 py-10">
        <div className="max-w-[1240px] mx-auto bg-sand border border-[#F1E0DC] rounded-[22px] px-11 py-10 flex items-center justify-between gap-[30px] flex-wrap max-[760px]:px-[26px] max-[760px]:py-[30px]">
          <div>
            <h3 className="text-[24px] font-extrabold tracking-[-0.5px] m-0 mb-[7px]">Can&apos;t find the test you need?</h3>
            <p className="text-[15px] text-body2 m-0 max-w-[520px] leading-[1.55]">
              Request a custom assessment and our subject-matter experts will build it for your role — peer-reviewed and validated before it ships.
            </p>
          </div>
          <a href="#" className="btn-sheen inline-flex items-center gap-2.5 font-bold text-[15px] rounded-xl px-6 py-3.5 bg-coral text-white shadow-[0_12px_28px_rgba(242,63,68,0.28)] hover:bg-coral-hover hover:-translate-y-0.5 transition-all">
            Request a test<ArrowRight />
          </a>
        </div>
      </section>

      {/* dark cta band */}
      <section className="px-7 py-[90px] bg-[radial-gradient(900px_460px_at_50%_0%,#2A1417_0%,#1A1014_60%)] text-white text-center">
        <h2 className="text-[40px] font-extrabold tracking-[-1px] m-0 mx-auto mb-4 max-w-[680px] leading-[1.1] max-[760px]:text-[30px]">
          Replace gut instinct with verified skills
        </h2>
        <p className="text-[17px] text-[#D8C5C8] m-0 mx-auto mb-[30px] max-w-[560px] leading-[1.6]">
          Your next great hire is in your pipeline right now. Surface them in 30 minutes — no resume bias, no bad-hire regret.
        </p>
        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <a href="#" className="btn-sheen inline-flex items-center gap-2.5 font-bold text-[15px] rounded-xl px-6 py-3.5 bg-coral text-white shadow-[0_12px_28px_rgba(242,63,68,0.28)] hover:bg-coral-hover hover:-translate-y-0.5 transition-all">
            Try for free<ArrowRight />
          </a>
          <a href="#" className="inline-flex items-center gap-2.5 font-bold text-[15px] rounded-xl px-6 py-3.5 bg-white text-ink border-[1.5px] border-warm2 hover:border-coral hover:text-coral transition-all">
            Book a demo
          </a>
        </div>
        <div className="flex items-center justify-center gap-[22px] flex-wrap mt-6 text-[13.5px] text-[#B7A4A7]">
          {["7-day free trial", "Unlimited assessments", "No credit card"].map((t) => (
            <span key={t} className="inline-flex items-center gap-[7px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7BE0A6" strokeWidth="2.6" strokeLinecap="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
              {t}
            </span>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
