import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import { COMPETITORS, type Row } from "./data";

export function generateStaticParams() {
  return Object.keys(COMPETITORS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = COMPETITORS[slug];
  if (!d) return { title: "Competitor comparison" };
  return {
    title: `Testlify vs ${d.name}: ${d.tagline}`,
    description: d.intro,
  };
}

/* Shared class strings matching the template CSS exactly. */
const EYEBROW =
  "text-[13px] font-bold tracking-[0.16em] uppercase text-coral m-0";
const H2 = "text-[32px] font-extrabold tracking-[-0.8px] m-0 text-ink";
const H2P = "text-[16px] leading-[1.6] text-body2 mt-3 mb-0";

/* .ct-yes — green check chip (used for Testlify + competitor "yes"). */
function Yes() {
  return (
    <span className="w-[26px] h-[26px] rounded-full bg-[#E7F6EE] text-[#1F9D6B] flex items-center justify-center">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12l5 5L20 6" />
      </svg>
    </span>
  );
}

/* .ct-no — rose X chip (competitor "no"). */
function No() {
  return (
    <span className="w-[26px] h-[26px] rounded-full bg-[#F7ECED] text-[#C98A8D] flex items-center justify-center">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </svg>
    </span>
  );
}

/* Testlify column cell. */
function UsCell({ r }: { r: Row }) {
  if (r.usYes) return <Yes />;
  if (typeof r.us === "string")
    return (
      <span className="text-[13px] font-semibold text-[#2A1A1D] text-center">
        {r.us}
      </span>
    );
  return null;
}

/* Competitor column cell. */
function ThemCell({ r }: { r: Row }) {
  if (r.themYes) return <Yes />;
  if (r.themNo) return <No />;
  if (r.themPart)
    return (
      <span className="text-[12.5px] font-bold text-[#C08A3B] bg-[#FBF0E0] px-[10px] py-1 rounded-[100px]">
        Limited
      </span>
    );
  if (typeof r.them === "string")
    return (
      <span className="text-[13px] font-medium text-muted text-center">
        {r.them}
      </span>
    );
  return null;
}

/* Verdict list check / cross icons. */
function VerdictCheck() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12l5 5L20 6" />
    </svg>
  );
}

function VerdictCross() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function ReasonIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = COMPETITORS[slug];
  if (!d) notFound();

  const BADGES = [
    "SOC 2 TYPE II",
    "ISO 27001",
    "GDPR",
    "CCPA",
    "100+ ATS INTEGRATIONS",
  ];

  return (
    <>
      <SiteHeader
        announcement="Comparing assessment platforms? See how Testlify stacks up — no annual contract, 3,500+ tests"
        announcementCta="Compare now"
        announcementHref={routes.resourcesCompetitors}
      />

      {/* HERO */}
      <section className="px-7 pt-[60px] pb-[46px] text-center bg-[radial-gradient(1000px_460px_at_50%_-12%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[1080px] mx-auto">
          <Reveal
            as="div"
            className="text-[13px] text-muted flex gap-2 items-center justify-center mb-[18px] flex-wrap"
          >
            <Link href={routes.blog} className="hover:text-coral">
              Resources
            </Link>
            <span>/</span>
            <Link
              href={routes.resourcesCompetitors}
              className="hover:text-coral"
            >
              Competitors
            </Link>
            <span>/</span>
            <span>Testlify vs {d.name}</span>
          </Reveal>
          <Reveal as="p" className={`${EYEBROW} mb-[14px]`}>
            Comparison<b className="font-bold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="text-[46px] leading-[1.06] font-extrabold tracking-[-1.4px] m-0 text-ink max-[760px]:text-[34px]"
          >
            Testlify vs {d.name}:
            <br />
            <em className="not-italic text-coral">{d.tagline}</em>
          </Reveal>
          <Reveal
            as="p"
            delay={0.11}
            className="text-[18px] leading-[1.6] text-body mt-[18px] mx-auto max-w-[600px]"
          >
            {d.intro}
          </Reveal>
          <Reveal
            delay={0.16}
            className="flex gap-[14px] justify-center flex-wrap mt-7"
          >
            <CtaButton
              label="Try Testlify free"
              href={routes.pricing}
              variant="primary"
              size="lg"
              icon="arrow"
            />
            <CtaButton
              label="Book a demo"
              href={routes.contact}
              variant="secondary"
              size="lg"
              icon="play"
            />
          </Reveal>

          {/* Verdict */}
          <Reveal
            delay={0.2}
            className="grid grid-cols-2 gap-[18px] max-w-[900px] mx-auto mt-11 max-[760px]:grid-cols-1"
          >
            {/* Testlify — win card */}
            <div className="rounded-[18px] px-7 py-[26px] text-left bg-[radial-gradient(600px_300px_at_30%_0%,#2A1417,#1A1014)] text-white">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-[17px] mb-[14px] bg-[linear-gradient(135deg,#FF7A52,#F23F44)] text-white">
                T
              </div>
              <p className="text-[18px] font-extrabold tracking-[-0.3px] m-0 mb-3">
                Testlify
              </p>
              <ul className="list-none m-0 p-0 flex flex-col gap-[9px]">
                {d.ourWins.map((w) => (
                  <li
                    key={w}
                    className="flex gap-[9px] items-start text-[14px] leading-[1.5] text-[#E8D8DA]"
                  >
                    <span className="flex-none w-5 h-5 rounded-full flex items-center justify-center mt-px bg-[rgba(255,122,82,0.22)] text-[#FF9F7A]">
                      <VerdictCheck />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            {/* Competitor — other card */}
            <div className="rounded-[18px] px-7 py-[26px] text-left bg-white border border-[#F0E2E3]">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-[17px] mb-[14px] bg-[#F2E6E7] text-[#8A7A7D]">
                {d.initial}
              </div>
              <p className="text-[18px] font-extrabold tracking-[-0.3px] m-0 mb-3 text-ink">
                {d.name}
              </p>
              <ul className="list-none m-0 p-0 flex flex-col gap-[9px]">
                {d.theirLimits.map((l) => (
                  <li
                    key={l}
                    className="flex gap-[9px] items-start text-[14px] leading-[1.5] text-body2"
                  >
                    <span className="flex-none w-5 h-5 rounded-full flex items-center justify-center mt-px bg-[#F4E7E8] text-[#B29A9E]">
                      <VerdictCross />
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURE-BY-FEATURE TABLE */}
      <section className="px-7 py-20 bg-sand max-[760px]:py-14 max-[760px]:px-[22px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-10">
            <Reveal as="p" className={EYEBROW}>
              Feature by feature<b className="font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} mt-3`}>
              The full comparison
            </Reveal>
            <Reveal as="p" delay={0.08} className={H2P}>
              Where the two platforms line up — and where they don&apos;t.
            </Reveal>
          </div>
          <Reveal
            delay={0.1}
            className="bg-white border border-[#F0E2E3] rounded-[20px] overflow-hidden shadow-[0_20px_44px_rgba(110,11,14,0.08)]"
          >
            {/* head */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr] max-[760px]:grid-cols-[1.3fr_.85fr_.85fr] bg-ink text-white">
              <div className="px-[22px] py-[18px] text-[14px] font-bold tracking-[-0.2px] flex items-center max-[760px]:px-3 max-[760px]:py-[13px] max-[760px]:text-[13px]">
                Feature
              </div>
              <div className="px-[22px] py-[18px] text-[14px] font-bold tracking-[-0.2px] flex items-center justify-center bg-[linear-gradient(135deg,#F23F44,#DC3137)] max-[760px]:px-3 max-[760px]:py-[13px] max-[760px]:text-[13px]">
                Testlify
              </div>
              <div className="px-[22px] py-[18px] text-[14px] font-bold tracking-[-0.2px] flex items-center justify-center text-[#C9B9BC] max-[760px]:px-3 max-[760px]:py-[13px] max-[760px]:text-[13px]">
                {d.name}
              </div>
            </div>
            {/* rows */}
            {d.rows.map((r) => (
              <div
                key={r.feature}
                className="grid grid-cols-[1.4fr_1fr_1fr] max-[760px]:grid-cols-[1.3fr_.85fr_.85fr] border-t border-[#F4E7E8]"
              >
                <div className="px-[22px] py-4 text-[14.5px] flex items-center font-semibold text-[#2A1A1D] max-[760px]:px-3 max-[760px]:py-[13px] max-[760px]:text-[13px]">
                  {r.feature}
                </div>
                <div className="px-[22px] py-4 text-[14.5px] flex items-center justify-center bg-[#FFF8F7] max-[760px]:px-3 max-[760px]:py-[13px] max-[760px]:text-[13px]">
                  <UsCell r={r} />
                </div>
                <div className="px-[22px] py-4 text-[14.5px] flex items-center justify-center text-muted max-[760px]:px-3 max-[760px]:py-[13px] max-[760px]:text-[13px]">
                  <ThemCell r={r} />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY SWITCH */}
      <section className="px-7 py-20 bg-white max-[760px]:py-14 max-[760px]:px-[22px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-10">
            <Reveal as="p" className={EYEBROW}>
              Why switch<b className="font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} mt-3`}>
              Why teams choose Testlify
            </Reveal>
            <Reveal as="p" delay={0.08} className={H2P}>
              The reasons hiring teams move from {d.name} — and stay.
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
            {d.whySwitch.map((r) => (
              <div
                key={r.t}
                className="bg-white border border-[#F0E2E3] rounded-[18px] p-[26px] shadow-[0_16px_30px_rgba(110,11,14,0.08)]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFF0EF] text-coral flex items-center justify-center mb-4">
                  <ReasonIcon />
                </div>
                <p className="text-[17px] font-bold m-0 mb-2 text-ink">{r.t}</p>
                <p className="text-[14px] leading-[1.6] text-body2 m-0">{r.d}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="flex items-center justify-center gap-[30px] flex-wrap mt-11 pt-[34px] border-t border-[#F0E2E3]">
            <div className="flex items-center gap-3">
              <span className="text-[34px] font-extrabold text-coral tracking-[-1px]">
                4.7
              </span>
              <span className="text-[13px] font-semibold text-body2 leading-[1.4]">
                Rated 4.7 on G2
                <br />
                by 1,000+ reviewers
              </span>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="border-[1.5px] border-ink rounded-[999px] px-[15px] py-[7px] text-[12px] font-bold tracking-[0.03em] text-ink"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-7 py-20 bg-sand max-[760px]:py-14 max-[760px]:px-[22px]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-10">
            <Reveal as="p" className={EYEBROW}>
              Questions<b className="font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} mt-3`}>
              Switching to Testlify, answered
            </Reveal>
          </div>
          <Reveal delay={0.1} className="max-w-[820px] mx-auto">
            <FAQ items={d.faqs.map((f) => ({ q: f.q, a: f.a }))} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
