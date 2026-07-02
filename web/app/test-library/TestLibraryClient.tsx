"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import TestIcon, { type TestIconKey } from "@/components/TestIcon";
import { routes } from "@/lib/routes";
import {
  TESTS,
  TEST_TYPES,
  TYPE_LABEL,
  DIFFICULTIES,
  DIFFICULTY_CLASSES,
  testSlug,
  type Difficulty,
  type TestEntry,
} from "@/lib/testLibraryData";

/** Page-scoped keyframes/effects, following this codebase's per-page <style> convention. */
const KEYFRAMES = `
@keyframes tlib-herograd{0%{background-position:0% 0%}50%{background-position:100% 100%}100%{background-position:0% 0%}}
@keyframes tlib-blob{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-26px) scale(1.12)}66%{transform:translate(-26px,22px) scale(.93)}}
@keyframes tlib-floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes tlib-floaty2{0%,100%{transform:translateY(0)}50%{transform:translateY(12px)}}
@property --tlib-cardbang{syntax:"<angle>";initial-value:0deg;inherits:false;}
@keyframes tlib-cardrun{to{--tlib-cardbang:360deg;}}
.tlib-card{position:relative;overflow:hidden;}
.tlib-card::after{content:"";position:absolute;inset:0;border-radius:16px;padding:1.8px;background:conic-gradient(from var(--tlib-cardbang),transparent 0deg,var(--tlib-cbc,#F23F44) 55deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;opacity:0;transition:opacity .35s ease;pointer-events:none;z-index:1;}
.tlib-card:hover::after{opacity:1;animation:tlib-cardrun 2.4s linear infinite;}
.tlib-cbc-beg{--tlib-cbc:#8FD9AE;}
.tlib-cbc-int{--tlib-cbc:#F4C36A;}
.tlib-cbc-adv{--tlib-cbc:#F39BA0;}
.tlib-facet-scroll::-webkit-scrollbar{width:6px;}
.tlib-facet-scroll::-webkit-scrollbar-thumb{background:#EAD7D9;border-radius:100px;}
`;

const CBC_CLASS: Record<Difficulty, string> = {
  Beginner: "tlib-cbc-beg",
  Intermediate: "tlib-cbc-int",
  Advanced: "tlib-cbc-adv",
};

type DurKey = "short" | "mid" | "long";
const DUR_DEFS: [DurKey, string][] = [
  ["short", "Under 10 min"],
  ["mid", "10–20 min"],
  ["long", "20+ min"],
];
const DUR_LABEL: Record<DurKey, string> = DUR_DEFS.reduce((m, [k, l]) => {
  m[k] = l;
  return m;
}, {} as Record<DurKey, string>);
function durBucket(m: number): DurKey {
  return m <= 10 ? "short" : m <= 20 ? "mid" : "long";
}

const SORTS: { key: "popular" | "az" | "dur"; label: string }[] = [
  { key: "popular", label: "Most popular" },
  { key: "az", label: "Name (A–Z)" },
  { key: "dur", label: "Shortest first" },
];

const SHOWCASE: {
  icon: TestIconKey;
  grad: string;
  name: string;
  meta: string;
}[] = [
  { icon: "cognitive", grad: "linear-gradient(135deg,#F76A6E,#F23F44)", name: "Numerical Reasoning", meta: "Cognitive · 20 Q · 15 min" },
  { icon: "programming", grad: "linear-gradient(135deg,#7C5CFF,#5B7BFF)", name: "JavaScript (Coding)", meta: "Coding · 8 Q · 30 min" },
  { icon: "role", grad: "linear-gradient(135deg,#1FB57A,#12A063)", name: "HR Manager", meta: "Role specific · 20 Q · 15 min" },
  { icon: "language", grad: "linear-gradient(135deg,#FF9F43,#F76A2E)", name: "Business English", meta: "Language · 20 Q · 25 min" },
];

const ArrowRight = ({ w = 16, sw = 2.4 }: { w?: number; sw?: number }) => (
  <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12l5 5L20 6" />
  </svg>
);
const Caret = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={`transition-transform duration-200 ${open ? "rotate-180 text-coral" : "text-[#B79DA0]"}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const XIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

type FacetItem = { key: string; label: string; count: number; on: boolean; onToggle: () => void };

function FacetGroup({
  title,
  items,
  scroll,
  first,
}: {
  title: string;
  items: FacetItem[];
  scroll?: boolean;
  first?: boolean;
}) {
  return (
    <div
      className={
        first
          ? "max-[860px]:flex-1 max-[860px]:min-w-[160px]"
          : "border-t border-[#F4E7E8] pt-3 mt-1 max-[860px]:border-t-0 max-[860px]:pt-0 max-[860px]:mt-0 max-[860px]:flex-1 max-[860px]:min-w-[160px]"
      }
    >
      <div className="text-[13.5px] font-bold text-ink px-1.5 pb-1.5">{title}</div>
      <div className={`flex flex-col gap-px ${scroll ? "tlib-facet-scroll max-h-[250px] overflow-y-auto max-[860px]:max-h-none" : ""}`}>
        {items.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={f.onToggle}
            className="flex items-center gap-2.5 w-full text-left bg-transparent border-0 px-2 py-[7px] rounded-[9px] cursor-pointer transition-colors duration-150 hover:bg-[#FFF6F5]"
          >
            <span
              className={`shrink-0 w-[18px] h-[18px] rounded-[6px] border-[1.7px] flex items-center justify-center transition-all duration-150 ${
                f.on ? "bg-coral border-coral text-white" : "border-[#E2D0D2] text-transparent"
              }`}
            >
              <CheckIcon />
            </span>
            <span className={`text-[14px] leading-[1.2] ${f.on ? "font-semibold text-ink" : "font-medium text-[#3C2C2F]"}`}>{f.label}</span>
            <span className={`ml-auto text-[12px] font-semibold ${f.on ? "text-coral" : "text-[#B29A9E]"}`}>{f.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function toggleArr<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
}

export default function TestLibraryClient() {
  const [query, setQuery] = useState("");
  const [cats, setCats] = useState<TestIconKey[]>([]);
  const [levels, setLevels] = useState<Difficulty[]>([]);
  const [durs, setDurs] = useState<DurKey[]>([]);
  const [sort, setSort] = useState<"popular" | "az" | "dur">("popular");
  const [srtOpen, setSrtOpen] = useState(false);

  const q = query.trim().toLowerCase();

  const data = useMemo(() => {
    const matches = (t: TestEntry, ignore?: "cat" | "lvl" | "dur") => {
      if (ignore !== "cat" && cats.length && !cats.includes(t.type)) return false;
      if (ignore !== "lvl" && levels.length && !levels.includes(t.level)) return false;
      if (ignore !== "dur" && durs.length && !durs.includes(durBucket(t.dur))) return false;
      if (q) {
        const hay = `${t.name} ${t.desc} ${TYPE_LABEL[t.type]}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    };

    let list = TESTS.filter((t) => matches(t));
    if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "dur") list = [...list].sort((a, b) => a.dur - b.dur);

    const catFacets: FacetItem[] = TEST_TYPES.map((ty) => ({
      key: ty.key,
      label: ty.label,
      count: TESTS.filter((t) => t.type === ty.key && matches(t, "cat")).length,
      on: cats.includes(ty.key),
      onToggle: () => setCats((a) => toggleArr(a, ty.key)),
    }));
    const levelFacets: FacetItem[] = DIFFICULTIES.map((lv) => ({
      key: lv,
      label: lv,
      count: TESTS.filter((t) => t.level === lv && matches(t, "lvl")).length,
      on: levels.includes(lv),
      onToggle: () => setLevels((a) => toggleArr(a, lv)),
    }));
    const durFacets: FacetItem[] = DUR_DEFS.map(([k, l]) => ({
      key: k,
      label: l,
      count: TESTS.filter((t) => durBucket(t.dur) === k && matches(t, "dur")).length,
      on: durs.includes(k),
      onToggle: () => setDurs((a) => toggleArr(a, k)),
    }));

    const chips = [
      ...cats.map((c) => ({ key: `c-${c}`, label: TYPE_LABEL[c], onRemove: () => setCats((a) => toggleArr(a, c)) })),
      ...levels.map((l) => ({ key: `l-${l}`, label: l, onRemove: () => setLevels((a) => toggleArr(a, l)) })),
      ...durs.map((d) => ({ key: `d-${d}`, label: DUR_LABEL[d], onRemove: () => setDurs((a) => toggleArr(a, d)) })),
    ];

    return { list, catFacets, levelFacets, durFacets, chips };
  }, [cats, levels, durs, q, sort]);

  const hasActive = !!(q || cats.length || levels.length || durs.length);
  const clearAll = () => {
    setQuery("");
    setCats([]);
    setLevels([]);
    setDurs([]);
  };
  const sortLabel = SORTS.find((s) => s.key === sort)!.label;

  return (
    <>
      <style>{KEYFRAMES}</style>

      <SiteHeader
        announcement="3,500+ skills tests — every one validated by subject-matter experts"
        announcementCta="Browse library"
        announcementHref={routes.testLibrary}
      />

      {/* hero */}
      <section
        className="relative overflow-hidden px-7 pt-[78px] pb-14 max-[760px]:px-[22px] max-[760px]:pt-[44px] max-[760px]:pb-[30px]"
        style={{
          background:
            "radial-gradient(1100px 520px at 82% 4%,#FCE0E1 0%,rgba(252,224,225,0) 58%),radial-gradient(900px 540px at 4% 62%,#FFEDED 0%,rgba(255,237,237,0) 52%),linear-gradient(180deg,#FFF8F7 0%,#FFFBFA 72%,#fff 100%)",
          backgroundSize: "170% 170%",
          animation: "tlib-herograd 30s ease-in-out infinite",
        }}
      >
        <div
          className="absolute -bottom-[140px] -left-[90px] w-[380px] h-[380px] rounded-full opacity-[0.16] blur-[34px] pointer-events-none"
          style={{
            background: "radial-gradient(circle at 60% 40%,#FDD5D6,#FBA3A5)",
            animation: "tlib-blob 22s ease-in-out infinite reverse",
          }}
        />
        <div className="relative max-w-[1240px] mx-auto px-7">
          <div className="grid grid-cols-[1.06fr_0.94fr] gap-14 items-center max-[960px]:grid-cols-1 max-[960px]:gap-11">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-[9px] bg-white border border-[#FBD0D1] px-4 py-2 rounded-full shadow-[0_6px_18px_rgba(242,63,68,0.10)]">
                  <span className="w-2 h-2 rounded-full bg-coral" />
                  <span className="text-[13.5px] font-semibold text-coral-deep tracking-[0.2px]">The largest library of validated skills tests</span>
                </div>
              </Reveal>
              <Reveal as="h1" delay={0.08} className="text-[52px] leading-[1.05] font-extrabold tracking-[-1.4px] m-0 max-w-[780px] mt-[22px] max-[760px]:text-[36px]">
                3,500+ tests for&nbsp;
                <br />
                <em className="not-italic text-coral">every role you hire.</em>
              </Reveal>
              <Reveal as="p" delay={0.15} className="text-[18px] leading-[1.62] text-body mt-5 max-w-[600px]">
                The widest catalog of expert-validated assessments anywhere — coding, cognitive, role-specific, language and personality. Combine any of them into one job-ready test in minutes.
              </Reveal>
              <Reveal delay={0.19} className="flex gap-[34px] mt-[30px]">
                {[
                  ["3,500+", "Validated tests"],
                  ["4,500+", "Job roles"],
                  ["50+", "Industries"],
                ].map(([b, lab]) => (
                  <div key={lab} className="flex flex-col gap-0.5">
                    <b className="text-[28px] font-extrabold tracking-[-1px] text-coral leading-none">{b}</b>
                    <span className="text-[13.5px] font-medium text-muted">{lab}</span>
                  </div>
                ))}
              </Reveal>
              <Reveal delay={0.23} className="flex flex-wrap gap-[14px] mt-[34px]">
                <CtaButton label="Try for free" href={routes.pricing} variant="primary" size="lg" icon="arrow" magnetic />
                <CtaButton label="Book a demo" href="#" variant="secondary" size="lg" icon="play" />
              </Reveal>
              <Reveal delay={0.27} className="flex items-center gap-[26px] flex-wrap mt-[18px] text-[14.5px] text-muted font-medium">
                <span className="inline-flex items-center gap-[7px]"><b className="text-coral font-bold">✓</b> 7-day free trial</span>
                <span className="inline-flex items-center gap-[7px]"><b className="text-coral font-bold">✓</b> No credit card required</span>
              </Reveal>
            </div>

            <Reveal delay={0.18} className="relative max-[960px]:max-w-[460px] max-[960px]:mx-auto max-[960px]:w-full">
              <div className="relative bg-white rounded-3xl shadow-[0_30px_70px_rgba(110,11,14,0.18)] p-[18px] border border-rose-250 z-[2]">
                <div className="flex items-center gap-[7px] px-0.5 pb-[14px] border-b border-[#F4E7E8] mb-[14px]">
                  <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#FEBC2E" }} />
                  <span className="w-[10px] h-[10px] rounded-full" style={{ background: "#28C840" }} />
                  <span className="ml-[10px] text-[12px] text-faint font-medium bg-[#FBF3F3] px-3 py-1 rounded-lg flex-1">testlify.com/test-library</span>
                </div>
                <div className="flex items-center gap-[9px] border-[1.5px] border-[#F0DEDF] rounded-[11px] px-[14px] py-[11px] text-[#B79EA1] text-[13.5px] font-medium mb-3">
                  <span className="text-coral shrink-0 flex">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                  </span>
                  <span>Search 3,500+ tests…</span>
                </div>
                <div className="flex gap-2 mb-[14px]">
                  <span className="text-[12px] font-semibold px-[13px] py-[5px] rounded-full bg-coral text-white border border-coral">All</span>
                  {["Cognitive", "Coding", "Role"].map((c) => (
                    <span key={c} className="text-[12px] font-semibold text-muted bg-[#FBF3F3] border border-[#F2E4E5] px-[13px] py-[5px] rounded-full">{c}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-[9px]">
                  {SHOWCASE.map((s, i) => (
                    <div
                      key={s.name}
                      className={`flex items-center gap-3 border-[1.5px] rounded-[13px] px-[13px] py-[11px] ${
                        i === 0 ? "bg-[#FFF6F6] border-[#FBD0D1]" : "border-[#F2E6E7]"
                      }`}
                    >
                      <span className="w-[38px] h-[38px] rounded-[11px] flex items-center justify-center shrink-0 text-white" style={{ background: s.grad }}>
                        <TestIcon name={s.icon} size={17} />
                      </span>
                      <div className="flex-1 flex flex-col gap-[3px] min-w-0">
                        <span className="text-[14.5px] font-bold text-ink tracking-[-0.2px]">{s.name}</span>
                        <span className="text-[12px] text-muted font-medium">{s.meta}</span>
                      </div>
                      <span className="text-[10.5px] font-bold tracking-[0.03em] uppercase text-[#1F9D6B] bg-[#E7F6EE] px-[9px] py-1 rounded-full shrink-0">Validated</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="absolute bg-white rounded-2xl shadow-[0_18px_40px_rgba(110,11,14,0.16)] px-[17px] py-[13px] flex items-center gap-3 border border-rose-250 z-[3]"
                style={{ top: -26, right: 14, animation: "tlib-floaty 6s ease-in-out infinite" }}
              >
                <span
                  className="w-[38px] h-[38px] rounded-[11px] flex items-center justify-center text-white font-bold text-[12.5px]"
                  style={{ background: "linear-gradient(135deg,#F76A6E,#F23F44)" }}
                >
                  {TEST_TYPES.length}
                </span>
                <div>
                  <div className="text-[12px] text-muted font-medium">Test categories</div>
                  <div className="text-[15.5px] font-bold text-ink">Role · Coding · more</div>
                </div>
              </div>
              <div
                className="absolute bg-white rounded-2xl shadow-[0_18px_40px_rgba(110,11,14,0.16)] px-[17px] py-[13px] flex items-center gap-3 border border-rose-250 z-[3]"
                style={{ bottom: -24, left: -30, animation: "tlib-floaty2 7s ease-in-out infinite" }}
              >
                <span className="w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold" style={{ background: "#E7F6EE", color: "#1F9D6B" }}>✓</span>
                <div>
                  <div className="text-[12px] text-muted font-medium">Every test</div>
                  <div className="text-[15.5px] font-bold text-ink">Expert-validated</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* browse the library */}
      <section className="px-7 pt-14 pb-2">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="mb-[22px]">
            <h2 className="text-[30px] font-extrabold tracking-[-0.8px] m-0 max-[760px]:text-[25px]">Browse the library</h2>
            <p className="text-[15px] text-muted2 mt-1.5 mb-0">Filter 3,500+ expert-validated tests to build your perfect assessment.</p>
          </Reveal>

          <Reveal delay={0.13} className="grid grid-cols-[264px_1fr] gap-[34px] items-start max-[860px]:grid-cols-1 max-[860px]:gap-[22px]">
            {/* filter rail */}
            <aside className="sticky top-24 flex flex-col gap-2 bg-white border-[1.4px] border-warm rounded-[18px] px-[18px] py-5 shadow-[0_16px_34px_rgba(110,11,14,0.06)] max-[860px]:static max-[860px]:flex-row max-[860px]:flex-wrap max-[860px]:gap-x-[26px] max-[860px]:gap-y-[18px]">
              <div className="flex items-center justify-between text-[12px] font-bold tracking-[0.14em] uppercase text-[#8A767A] px-1.5 pb-1 max-[860px]:w-full">
                <span className="inline-flex items-center">
                  Filters
                  <span className="ml-[9px] text-[11px] font-bold normal-case text-coral bg-rose-100 border border-[#F8CFD0] px-[9px] py-0.5 rounded-full">{data.list.length}</span>
                </span>
                {hasActive && (
                  <button type="button" onClick={clearAll} className="text-[12px] font-semibold normal-case text-coral bg-transparent border-0 cursor-pointer hover:underline">
                    Clear all
                  </button>
                )}
              </div>
              <FacetGroup title="Category" items={data.catFacets} scroll first />
              <FacetGroup title="Difficulty" items={data.levelFacets} />
              <FacetGroup title="Duration" items={data.durFacets} />
            </aside>

            {/* main */}
            <div>
              <div className="flex items-center justify-end gap-x-5 gap-y-3.5 flex-wrap mb-5">
                <div className="flex items-center gap-4 flex-1 min-w-[220px] justify-end max-[860px]:min-w-0 max-[860px]:w-full">
                  <div className="relative max-w-[420px] w-full min-w-[180px] flex-1">
                    <span className="absolute left-[17px] top-1/2 -translate-y-1/2 text-[#C0989B] flex">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
                    </span>
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search tests…"
                      className="w-full border-[1.6px] border-[#F0DBDC] rounded-[14px] py-[15px] pr-[18px] pl-[48px] text-[15px] text-ink bg-white transition-[border-color,box-shadow] duration-200 outline-none placeholder:text-[#B79DA0] focus:border-coral focus:shadow-[0_12px_40px_rgba(242,63,68,0.12)]"
                    />
                  </div>
                  <div className="relative inline-flex items-center gap-2.5 max-[860px]:w-full">
                    <button
                      type="button"
                      onClick={() => setSrtOpen((o) => !o)}
                      className={`inline-flex items-center gap-4 justify-between min-w-[172px] font-semibold text-[15px] text-[#46383C] bg-white border-[1.6px] rounded-[14px] px-4 py-[15px] cursor-pointer transition-all duration-150 whitespace-nowrap max-[860px]:min-w-0 max-[860px]:w-full ${
                        srtOpen ? "border-coral" : "border-[#F0DBDC] hover:border-[#F4B9BB]"
                      }`}
                    >
                      <span>{sortLabel}</span>
                      <Caret open={srtOpen} />
                    </button>
                    {srtOpen && (
                      <>
                        <div className="fixed inset-0 z-[55]" onClick={() => setSrtOpen(false)} />
                        <div className="absolute top-[calc(100%+8px)] right-0 min-w-[190px] bg-white border border-[#F4E4E5] rounded-[14px] p-1.5 shadow-[0_26px_54px_rgba(110,11,14,0.16)] z-[60] flex flex-col gap-0.5">
                          {SORTS.map((o) => (
                            <button
                              key={o.key}
                              type="button"
                              onClick={() => {
                                setSort(o.key);
                                setSrtOpen(false);
                              }}
                              className={`flex items-center w-full text-left font-semibold text-[14px] px-[13px] py-2.5 rounded-[10px] cursor-pointer transition-colors duration-150 ${
                                sort === o.key ? "bg-[#FFF4F3] text-coral" : "text-[#2A1A1D] bg-transparent hover:bg-[#FFF0F0] hover:text-coral"
                              }`}
                            >
                              {o.label}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {data.chips.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {data.chips.map((c) => (
                    <button
                      key={c.key}
                      type="button"
                      onClick={c.onRemove}
                      className="inline-flex items-center gap-[7px] text-[13px] font-semibold text-[#C0242B] bg-rose-100 border border-[#F8CFD0] pl-[13px] pr-2 py-1.5 rounded-full cursor-pointer transition-colors duration-150 hover:bg-[#FCE0DE]"
                    >
                      {c.label}
                      <span className="flex w-[17px] h-[17px] rounded-full bg-coral text-white items-center justify-center">
                        <XIcon />
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {data.list.length > 0 ? (
                <div className="grid grid-cols-3 gap-[18px] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
                  {data.list.map((t) => {
                    const dc = DIFFICULTY_CLASSES[t.level];
                    return (
                      <Link
                        key={t.name}
                        href={`${routes.testLibrary}/${testSlug(t.name)}`}
                        className={`tlib-card ${CBC_CLASS[t.level]} group flex flex-col bg-white border-[1.4px] border-[#EFE1E2] rounded-2xl px-[22px] pt-[22px] pb-[18px] transition-all duration-300 relative hover:border-transparent hover:shadow-[0_22px_46px_rgba(110,11,14,0.12)] hover:-translate-y-1`}
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
                  <h3 className="text-[20px] font-bold mt-3.5 mb-1.5">No tests matched your filters</h3>
                  <p className="text-[15px] text-muted2 m-0 mb-5">Try a different keyword or clear your filters to see the full library.</p>
                  <button onClick={clearAll} className="inline-flex items-center gap-2.5 font-bold text-[15px] rounded-xl px-6 py-3.5 cursor-pointer border-0 bg-white text-ink border-[1.5px] border-warm2 hover:border-coral hover:text-coral transition-all">
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </Reveal>
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
          <a href="#" className="btn-sheen inline-flex items-center gap-2.5 font-bold text-[15px] rounded-xl px-6 py-3.5 bg-coral text-white shadow-[0_12px_28px_rgba(242,63,68,0.28)] hover:bg-coral-hover hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(242,63,68,0.36)] transition-all">
            Request a test<ArrowRight />
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
