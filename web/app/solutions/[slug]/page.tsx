import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SecuritySection from "@/components/SecuritySection";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import { SOLUTIONS, SOLUTION_SLUGS, DEFAULT_TESTIMONIALS } from "./data";
import {
  SolutionSections,
  TestimonialsBand,
  AtsBand,
  AwardsBand,
  Shot,
  Tick,
  EYEBROW_CLASS,
  H2_CLASS,
  LEAD_CLASS,
} from "./sections";
import FaqList from "./FaqList";

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/solutions/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const d = SOLUTIONS[slug];
  if (!d) return { title: "Solutions" };
  return { title: d.title, description: d.lead };
}

export default async function Page(props: PageProps<"/solutions/[slug]">) {
  const { slug } = await props.params;
  const d = SOLUTIONS[slug];
  if (!d) notFound();

  return (
    <>
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      {/* HERO */}
      <section className="pt-[74px] pb-24 bg-[linear-gradient(180deg,#FFF8F7_0%,#fff_82%)]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-[1.04fr_0.96fr] gap-[60px] items-center max-[960px]:grid-cols-1 max-[960px]:gap-10">
          <Reveal>
            <div className="text-[13px] text-muted flex gap-2 items-center mb-[18px]">
              <Link
                href={routes.solutions}
                className="text-muted transition-colors hover:text-coral"
              >
                Solutions
              </Link>
              <span>/</span>
              <span>{d.crumb}</span>
            </div>
            <p className={EYEBROW_CLASS}>
              {d.eyebrow}
              <b className="text-coral">.</b>
            </p>
            <h1 className="text-[52px] font-extrabold tracking-[-1.4px] leading-[1.08] mt-4 mb-0 max-[960px]:text-[38px]">
              {d.title}
            </h1>
            <p className={LEAD_CLASS}>{d.lead}</p>
            {d.stats.length > 0 && (
              <div className="flex gap-[10px] flex-wrap mt-[26px]">
                {d.stats.map((st) => (
                  <span
                    key={st.t}
                    className="bg-white border border-warm rounded-full px-4 py-2 text-[13px] font-semibold text-ink shadow-[0_8px_18px_rgba(110,11,14,0.06)]"
                  >
                    {st.t}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-[14px] flex-wrap mt-[26px]">
              <CtaButton
                label={d.ctaLabel}
                href={d.ctaHref}
                variant="primary"
                size="md"
                icon="arrow"
              />
              <CtaButton
                label="Book a demo"
                href="#demo"
                variant="secondary"
                size="md"
                icon="play"
              />
            </div>
            <div className="flex gap-[22px] flex-wrap mt-6">
              <Tick stroke="#F23F44" className="text-body2">
                No credit card required
              </Tick>
              <Tick stroke="#F23F44" className="text-body2">
                7-day free trial
              </Tick>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Shot alt={`${d.title} — Testlify platform`} />
          </Reveal>
        </div>
        {d.logos && d.logos.length > 0 && (
          <Reveal delay={0.05} className="max-w-[1240px] mx-auto px-7 mt-10">
            <p className="text-[12.5px] font-bold tracking-[0.12em] uppercase text-faint m-0 mb-[14px]">
              Trusted by 1,500+ hiring teams
            </p>
            <div className="flex gap-3 flex-wrap">
              {d.logos.map((lg) => (
                <span
                  key={lg}
                  className="bg-white border border-warm rounded-[10px] px-4 py-2 text-[14px] font-bold text-muted"
                >
                  {lg}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* DATA-DRIVEN SECTIONS (split / cards / grid / chips) */}
      <SolutionSections sections={d.sections} />

      {/* ATS INTEGRATIONS */}
      <AtsBand />

      {/* SECURITY & COMPLIANCE */}
      <SecuritySection sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections." />

      {/* TESTIMONIALS */}
      <TestimonialsBand items={d.testimonials ?? DEFAULT_TESTIMONIALS} />

      {/* AWARDS & RECOGNITION */}
      <AwardsBand />

      {/* FAQ */}
      <section className="py-24 max-[960px]:py-16">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="text-center max-w-[720px] mx-auto">
            <p className={EYEBROW_CLASS}>
              FAQ<b className="text-coral">.</b>
            </p>
            <h2 className={H2_CLASS}>
              {d.faqTitle ?? "Frequently asked questions"}
            </h2>
          </Reveal>
          <FaqList items={d.faqs} />
        </div>
      </section>

      {/* DARK CTA */}
      <section id="demo" className="bg-ink text-white py-[100px] text-center">
        <Reveal className="max-w-[1240px] mx-auto px-7">
          <p className="text-[13px] font-bold tracking-[0.16em] uppercase m-0 text-coral-bright2">
            {d.ctaEyebrow ?? "Get started"}
            <b className="text-coral">.</b>
          </p>
          <h2 className="text-[42px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-[14px] mb-0 text-white max-[960px]:text-[27px]">
            {d.ctaTitle ?? "Cut through the noise. Hire with clarity."}
          </h2>
          <p className="text-[17.5px] leading-[1.6] text-faint2 max-w-[640px] mx-auto mt-5 mb-0">
            {d.ctaBody ?? "Resumes don't tell you everything. Prove who can actually do the job — start assessing talent in minutes."}
          </p>
          <div className="flex gap-[14px] flex-wrap justify-center mt-[30px]">
            <CtaButton
              label={d.ctaLabel}
              href={d.ctaHref}
              variant="primary"
              size="lg"
              icon="arrow"
            />
            <CtaButton
              label="Book a demo"
              href="#"
              variant="light"
              size="lg"
              icon="play"
            />
          </div>
          <div className="flex gap-[22px] flex-wrap justify-center mt-[26px]">
            {(d.ctaTicks ?? ["No credit card required", "7-day free trial", "Cancel anytime"]).map((tk) => (
              <Tick key={tk} stroke="#F76A6E" className="text-faint2">
                {tk}
              </Tick>
            ))}
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </>
  );
}
