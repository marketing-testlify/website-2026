import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import SecuritySection from "@/components/SecuritySection";
import { routes } from "@/lib/routes";
import { FEATURES, FEATURE_SLUGS } from "./data";
import { featureIcon } from "./icons";
import FeatureFaq from "./FeatureFaq";

export function generateStaticParams() {
  return FEATURE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/product/features/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const d = FEATURES[slug];
  if (!d) return { title: "Features" };
  return { title: d.title, description: d.lede };
}

/* Shared class strings, matching the template CSS exactly. */
const EYEBROW = "text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0";
const H2 =
  "text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] m-0 text-ink max-[920px]:text-[27px]";
const LEAD = "text-[18px] leading-[1.62] text-body m-0";

/* .ft-mockslot / .ft-panelslot placeholder — sand box with caption. */
function Slot({ label, ratio }: { label: string; ratio: string }) {
  return (
    <div
      className="bg-sand w-full flex items-center justify-center p-6"
      style={{ aspectRatio: ratio }}
    >
      <span className="text-[13px] font-semibold text-faint text-center max-w-[70%] leading-[1.5]">
        {label}
      </span>
    </div>
  );
}

/* Traffic-light window chrome bar. */
function MockTop() {
  return (
    <div className="flex items-center gap-[7px] px-[18px] py-[14px] border-b border-[#F4ECEC] bg-[#FDFAF9]">
      <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
      <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
      <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
    </div>
  );
}

/* .chk — coral check chip + point text (split sections). */
function Chk({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-[10px] text-[14.5px] leading-[1.45] text-[#46383C] font-medium">
      <span className="flex-none w-[22px] h-[22px] rounded-[7px] bg-coral flex items-center justify-center mt-px">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {children}
    </div>
  );
}

export default async function Page(
  props: PageProps<"/product/features/[slug]">
) {
  const { slug } = await props.params;
  const d = FEATURES[slug];
  if (!d) notFound();

  return (
    <>
      <SiteHeader
        announcement={d.announcement}
        announcementCta="See all features"
        announcementHref={routes.productFeatures}
      />

      {/* HERO */}
      <section className="px-7 pt-[46px] pb-20 bg-[radial-gradient(1000px_520px_at_82%_-12%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal
            as="p"
            className="text-[13px] text-[#9A878A] font-semibold m-0 mb-[26px] flex items-center gap-[9px] flex-wrap"
          >
            <Link href={routes.productFeatures} className="hover:text-coral">
              Features
            </Link>
            <span className="text-[#D6C4C7]">&rsaquo;</span>
            <span>{d.category}</span>
            <span className="text-[#D6C4C7]">&rsaquo;</span>
            <span>{d.title}</span>
          </Reveal>
          <div className="grid grid-cols-[1.05fr_1fr] gap-14 items-center max-[920px]:grid-cols-1 max-[920px]:gap-[38px]">
            <div>
              <Reveal
                as="span"
                className="inline-flex items-center gap-[7px] bg-[#FFF0F0] text-[#C0242B] text-[12px] font-bold tracking-[0.04em] px-[13px] py-[6px] rounded-full"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {d.tag}
              </Reveal>
              <Reveal
                as="h1"
                delay={0.04}
                className="text-[50px] leading-[1.04] font-extrabold tracking-[-2px] mt-[17px] mb-[18px] max-[920px]:text-[36px] max-[920px]:tracking-[-1.2px]"
              >
                {d.title}
              </Reveal>
              <Reveal
                as="p"
                delay={0.08}
                className="text-[18.5px] leading-[1.6] text-body m-0 max-w-[560px]"
              >
                {d.lede}
              </Reveal>
              <Reveal
                delay={0.12}
                className="flex gap-3 flex-wrap mt-[34px]"
              >
                <CtaButton
                  label="Try for free"
                  href={routes.pricing}
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  magnetic
                />
                <CtaButton
                  label="Book a demo"
                  href={routes.contact}
                  variant="secondary"
                  size="lg"
                  icon="none"
                />
              </Reveal>
              <Reveal
                delay={0.16}
                className="flex items-center gap-6 flex-wrap mt-[22px] text-[14.5px] text-muted font-medium"
              >
                <span className="inline-flex items-center gap-[7px]">
                  <TickMini />
                  Free 7-day trial
                </span>
                <span className="inline-flex items-center gap-[7px]">
                  <TickMini />
                  No credit card required
                </span>
              </Reveal>
            </div>
            <Reveal
              delay={0.06}
              className="bg-white border border-[#EFE2E3] rounded-[22px] shadow-[0_30px_70px_rgba(110,11,14,0.14)] overflow-hidden"
            >
              <MockTop />
              <Slot label={d.heroShot} ratio="4/3" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px-7 py-24 max-[920px]:py-16 bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mb-10">
            <Reveal as="p" className={EYEBROW}>
              {d.capsEyebrow}
              <b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} mt-4`}>
              {d.capsHeading}
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {d.capabilities.map((c) => (
              <div
                key={c.name}
                className="bg-white border-[1.4px] border-[#EFE1E2] rounded-[18px] px-[26px] py-7 transition-[translate,box-shadow,border-color] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                <span className="w-[46px] h-[46px] rounded-xl bg-[#FFF0F0] text-coral flex items-center justify-center mb-4">
                  {featureIcon(c.ic)}
                </span>
                <h3 className="text-[17.5px] font-bold text-ink m-0 mb-2 tracking-[-0.3px]">
                  {c.name}
                </h3>
                <p className="text-[14px] leading-[1.6] text-body2 m-0">
                  {c.desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SPLIT A */}
      <section className="px-7 py-24 max-[920px]:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1fr_1.05fr] gap-[60px] items-center max-[920px]:grid-cols-1 max-[920px]:gap-[38px]">
            <div>
              <Reveal as="p" className={EYEBROW}>
                {d.splitAEyebrow}
                <b className="text-coral font-bold">.</b>
              </Reveal>
              <Reveal as="h2" delay={0.04} className={`${H2} mt-4`}>
                {d.splitAHeading}
              </Reveal>
              <Reveal as="p" delay={0.08} className={`${LEAD} mt-[18px]`}>
                {d.splitABody}
              </Reveal>
              <Reveal
                delay={0.12}
                className="grid grid-cols-2 gap-[13px] mt-6 max-[920px]:grid-cols-1"
              >
                {d.splitAPoints.map((p) => (
                  <Chk key={p}>{p}</Chk>
                ))}
              </Reveal>
            </div>
            <Reveal
              delay={0.06}
              className="bg-white border border-[#EFE2E3] rounded-[20px] shadow-[0_22px_50px_rgba(110,11,14,0.09)] overflow-hidden"
            >
              <Slot label={d.splitAShot} ratio="5/4" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="px-7 py-24 max-[920px]:py-16 text-white bg-[radial-gradient(900px_480px_at_50%_-10%,#2A1417_0%,#1A1014_62%)]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center mb-10">
            <Reveal as="p" className={`${EYEBROW} text-[#FF9C7A]`}>
              {d.statEyebrow}
              <b className="text-coral-bright font-bold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] mt-4 mb-0 text-white max-[920px]:text-[27px]"
            >
              {d.statHeading}
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-4 gap-6 max-[920px]:grid-cols-2 max-[920px]:gap-y-8">
            {d.stats.map((s) => (
              <div key={s.l}>
                <div className="text-[44px] font-extrabold tracking-[-1.5px] text-coral-bright leading-none">
                  {s.n}
                </div>
                <div className="text-[14px] text-white/[0.72] mt-3 leading-[1.45]">
                  {s.l}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SPLIT B (reversed: copy right, panel left) */}
      <section className="px-7 py-24 max-[920px]:py-16 bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1fr_1.05fr] gap-[60px] items-center max-[920px]:grid-cols-1 max-[920px]:gap-[38px]">
            <div className="order-2 max-[920px]:order-none">
              <Reveal as="p" className={EYEBROW}>
                {d.splitBEyebrow}
                <b className="text-coral font-bold">.</b>
              </Reveal>
              <Reveal as="h2" delay={0.04} className={`${H2} mt-4`}>
                {d.splitBHeading}
              </Reveal>
              <Reveal as="p" delay={0.08} className={`${LEAD} mt-[18px]`}>
                {d.splitBBody}
              </Reveal>
              <Reveal
                delay={0.12}
                className="grid grid-cols-2 gap-[13px] mt-6 max-[920px]:grid-cols-1"
              >
                {d.splitBPoints.map((p) => (
                  <Chk key={p}>{p}</Chk>
                ))}
              </Reveal>
            </div>
            <Reveal
              delay={0.06}
              className="order-1 bg-white border border-[#EFE2E3] rounded-[20px] shadow-[0_22px_50px_rgba(110,11,14,0.09)] overflow-hidden"
            >
              <Slot label={d.splitBShot} ratio="5/4" />
            </Reveal>
          </div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Security & compliance"
        heading="Enterprise-grade security by default"
        sub="SOC 2 Type II, ISO 27001 and GDPR compliance, granular admin controls and a full audit trail — so every assessment is defensible."
      />

      {/* FAQ */}
      {d.showFaq && (
        <section className="px-7 py-24 max-[920px]:py-16 bg-sand">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-[680px] mx-auto mb-10">
              <Reveal as="p" className={EYEBROW}>
                FAQ<b className="text-coral font-bold">.</b>
              </Reveal>
              <Reveal as="h2" delay={0.04} className={`${H2} mt-4`}>
                Frequently asked questions
              </Reveal>
            </div>
            <FeatureFaq items={d.faq} />
          </div>
        </section>
      )}

      {/* RELATED */}
      {d.showRelated && (
        <section className="px-7 py-24 max-[920px]:py-16 bg-white">
          <div className="max-w-[1240px] mx-auto">
            <div className="text-center max-w-[680px] mx-auto mb-10">
              <Reveal as="p" className={EYEBROW}>
                More features<b className="text-coral font-bold">.</b>
              </Reveal>
              <Reveal as="h2" delay={0.04} className={`${H2} mt-4`}>
                Explore the rest of the platform
              </Reveal>
            </div>
            <Reveal className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
              {d.related.map((r) => (
                <Link
                  key={r.name}
                  href={r.href}
                  className="block bg-white border border-[#EFE2E3] rounded-[18px] p-[26px] transition-[translate,box-shadow,border-color] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
                >
                  <span className="w-[44px] h-[44px] rounded-[11px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-4">
                    {featureIcon(r.ic)}
                  </span>
                  <h3 className="text-[16.5px] font-bold text-ink m-0 mb-1.5 tracking-[-0.2px]">
                    {r.name}
                  </h3>
                  <p className="text-[13.5px] leading-[1.55] text-body2 m-0">
                    {r.desc}
                  </p>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <SiteFooter />
    </>
  );
}

/* Small coral check for the hero reassurance ticks (SVG, not a glyph). */
function TickMini() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F23F44"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
