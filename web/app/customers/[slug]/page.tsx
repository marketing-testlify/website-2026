import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import { STORIES, STORY_SLUGS } from "./data";

export function generateStaticParams() {
  return STORY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/customers/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const d = STORIES[slug];
  if (!d) return { title: "Customer story" };
  return { title: `${d.company} — customer story`, description: d.subhead };
}

export default async function Page(props: PageProps<"/customers/[slug]">) {
  const { slug } = await props.params;
  const d = STORIES[slug];
  if (!d) notFound();

  return (
    <>
      <SiteHeader
        announcement={d.announcement}
        announcementCta="Read customer stories"
        announcementHref={routes.customers}
      />

      {/* HERO */}
      <section className="px-7 pt-[46px] bg-[radial-gradient(1000px_520px_at_80%_-14%,#FFF0EE_0%,rgba(255,240,238,0)_60%),#fff]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal
            as="p"
            className="text-[13px] text-[#9A878A] font-semibold m-0 mb-[30px] flex items-center gap-[9px] flex-wrap"
          >
            <Link href={routes.customers} className="text-coral hover:text-coral-hover">
              Customers
            </Link>
            <span className="text-[#D6C4C7]">&rsaquo;</span>
            <span>{d.industry}</span>
            <span className="text-[#D6C4C7]">&rsaquo;</span>
            <span>{d.company}</span>
          </Reveal>

          <Reveal className="w-[150px] h-[52px] mb-6 flex items-center">
            <span className="text-[26px] font-extrabold tracking-[-0.8px] text-coral leading-none">
              {d.company.split(" ")[0]}
            </span>
          </Reveal>

          <Reveal
            as="h1"
            delay={0.04}
            className="text-[44px] leading-[1.1] font-extrabold tracking-[-1.6px] text-ink m-0 max-w-[820px] max-[920px]:text-[33px] max-[920px]:tracking-[-1px]"
          >
            {d.headline}
          </Reveal>

          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.55] text-body m-0 mt-5 max-w-[680px]"
          >
            {d.subhead}
          </Reveal>

          <Reveal
            delay={0.12}
            className="grid grid-cols-3 gap-0 mt-12 border border-warm rounded-[20px] overflow-hidden bg-white shadow-[0_20px_46px_rgba(110,11,14,0.08)] max-[920px]:grid-cols-1"
          >
            {d.metrics.map((m, i) => (
              <div
                key={m.l}
                className={`p-[30px] border-r border-[#F4E7E8] max-[920px]:border-r-0 max-[920px]:border-b max-[920px]:border-b-[#F4E7E8] ${
                  i === d.metrics.length - 1
                    ? "border-r-0 max-[920px]:border-b-0"
                    : ""
                }`}
              >
                <div className="text-[40px] font-extrabold tracking-[-1.4px] text-coral leading-none">
                  {m.n}
                </div>
                <div className="text-[14px] text-body2 mt-[11px] leading-[1.45]">
                  {m.l}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* STORY BODY */}
      <section className="px-7 py-[88px] max-[920px]:py-[60px] max-[920px]:px-[22px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1fr_336px] gap-16 items-start max-[920px]:grid-cols-1 max-[920px]:gap-10">
            {/* Left column: narrative */}
            <div>
              {d.story.map((b) => (
                <Reveal key={b.heading} className="mb-[44px]">
                  <h2 className="text-[24px] font-extrabold tracking-[-0.6px] text-ink m-0 mb-4">
                    {b.heading}
                  </h2>
                  {b.paras.map((p, i) => (
                    <p
                      key={i}
                      className="text-[16.5px] leading-[1.72] text-body m-0 mb-[15px] last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </Reveal>
              ))}

              <Reveal className="bg-sand rounded-[20px] px-10 py-[38px] mt-2 mb-[44px]">
                <p className="text-[23px] leading-[1.42] font-semibold tracking-[-0.4px] text-ink m-0 mb-[22px]">
                  {d.quote}
                </p>
                <div className="flex items-center gap-[14px]">
                  <span className="w-12 h-12 rounded-full shrink-0 bg-coral text-white font-bold text-[15px] flex items-center justify-center">
                    {d.quoteInitials}
                  </span>
                  <span>
                    <span className="block text-[15px] font-bold text-ink">
                      {d.quoteName}
                    </span>
                    <span className="block text-[13.5px] text-muted">
                      {d.quoteRole}
                    </span>
                  </span>
                </div>
              </Reveal>

              {d.storyAfter.map((b) => (
                <Reveal key={b.heading} className="mb-[44px] last:mb-0">
                  <h2 className="text-[24px] font-extrabold tracking-[-0.6px] text-ink m-0 mb-4">
                    {b.heading}
                  </h2>
                  {b.paras.map((p, i) => (
                    <p
                      key={i}
                      className="text-[16.5px] leading-[1.72] text-body m-0 mb-[15px] last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>

            {/* Right column: sticky snapshot */}
            <Reveal className="sticky top-[120px] bg-white border border-[#EFE2E3] rounded-[20px] p-7 shadow-[0_22px_50px_rgba(110,11,14,0.09)] max-[920px]:static">
              <h3 className="text-[12px] font-bold tracking-[0.1em] uppercase text-muted m-0 mb-[18px]">
                Company snapshot
              </h3>
              <ul className="list-none m-0 mb-[22px] p-0">
                {d.facts.map((f) => (
                  <li
                    key={f.k}
                    className="py-[13px] border-b border-[#F4E7E8] last:border-b-0"
                  >
                    <div className="text-[12.5px] text-[#9A878A] font-medium mb-[3px]">
                      {f.k}
                    </div>
                    <div className="text-[15px] text-ink font-bold">{f.v}</div>
                  </li>
                ))}
              </ul>
              <div className="text-[12.5px] text-[#9A878A] font-medium mb-2.5">
                Products used
              </div>
              <div className="flex flex-wrap gap-2">
                {d.products.map((p) => (
                  <span
                    key={p}
                    className="text-[12.5px] font-semibold text-[#46383C] bg-rose-100 border border-rose-200 px-3 py-1.5 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-[22px]">
                <CtaButton
                  label="Start your free trial"
                  href={routes.pricing}
                  variant="primary"
                  size="md"
                  icon="arrow"
                  className="w-full justify-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED STORIES */}
      {d.showRelated && (
        <section className="px-7 py-[88px] bg-sand max-[920px]:py-[60px] max-[920px]:px-[22px]">
          <div className="max-w-[1240px] mx-auto">
            <div className="max-w-[640px] mx-auto mb-10 text-center">
              <Reveal
                as="p"
                className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0"
              >
                More stories<b className="text-coral font-bold">.</b>
              </Reveal>
              <Reveal
                as="h2"
                delay={0.04}
                className="text-[32px] leading-[1.14] font-extrabold tracking-[-1px] text-ink mt-4 mb-0 max-[920px]:text-[26px]"
              >
                Teams hiring smarter with Testlify
              </Reveal>
            </div>
            <Reveal className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
              {d.related.map((r) => (
                <Link
                  key={r.company}
                  href={r.href}
                  className="block bg-white border border-[#EFE2E3] rounded-[18px] p-[26px] transition-[translate,box-shadow,border-color] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
                >
                  <div className="text-[22px] font-extrabold tracking-[-0.6px] text-coral mb-3">
                    {r.metric}
                  </div>
                  <div className="text-[14px] font-bold text-ink mb-2">
                    {r.company}
                  </div>
                  <p className="text-[13.5px] leading-[1.55] text-body2 m-0">
                    {r.quote}
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
