import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import { CALCULATORS, CALCULATOR_SLUGS } from "./calculators";
import CalculatorPanel from "./CalculatorPanel";

export function generateStaticParams() {
  return CALCULATOR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/resources/tools/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const cfg = CALCULATORS[slug];
  if (!cfg) return { title: "HR tools" };
  return { title: cfg.title, description: cfg.lead };
}

/* Small "grid" glyph reused by the related-tools cards (matches the source). */
const GridIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="11" x2="8" y2="11" />
    <line x1="12" y1="11" x2="12" y2="11" />
    <line x1="16" y1="11" x2="16" y2="11" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="12" y1="16" x2="12" y2="16" />
  </svg>
);

const EYEBROW =
  "text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4";
const H2 =
  "text-[34px] leading-[1.12] font-extrabold tracking-[-1px] text-ink m-0 max-[900px]:text-[28px]";
const LEAD = "text-[19px] leading-[1.6] text-body mt-4 mb-0";

export default async function Page(
  props: PageProps<"/resources/tools/[slug]">
) {
  const { slug } = await props.params;
  const cfg = CALCULATORS[slug];
  if (!cfg) notFound();

  return (
    <>
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits, ready to use."
        announcementCta="Browse tools"
        announcementHref={routes.resourcesTools}
      />

      {/* HERO */}
      <section
        className="py-[88px] px-7 max-[900px]:py-16 max-[900px]:px-[22px]"
        style={{
          background:
            "radial-gradient(1000px 500px at 80% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff",
        }}
      >
        <div className="max-w-[1180px] mx-auto">
          <Reveal
            as="div"
            className="flex items-center gap-[9px] text-[13px] font-semibold text-faint m-0 mb-[18px]"
          >
            <Link href={routes.blog} className="text-coral">
              Resources
            </Link>
            <span>/</span>
            <span>HR tools</span>
            <span>/</span>
            <span>{cfg.toolName}</span>
          </Reveal>
          <div className="max-w-[720px]">
            <Reveal as="p" className={EYEBROW}>
              {cfg.eyebrow}
              <b className="text-coral">.</b>
            </Reveal>
            <Reveal
              as="h1"
              delay={0.04}
              className="text-[52px] leading-[1.06] font-extrabold tracking-[-1.6px] text-ink m-0 max-[900px]:text-[38px] max-[900px]:tracking-[-1px]"
            >
              {cfg.title}
            </Reveal>
            <Reveal as="p" delay={0.08} className={LEAD}>
              {cfg.lead}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CALCULATOR (live) */}
      <section className="pt-10 pb-[88px] px-7 bg-sand max-[900px]:px-[22px] max-[900px]:pb-16">
        <div className="max-w-[1180px] mx-auto">
          <Reveal>
            <CalculatorPanel slug={slug} />
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-[88px] px-7 max-[900px]:py-16 max-[900px]:px-[22px]">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-[640px]">
            <Reveal as="p" className={EYEBROW}>
              How it works<b className="text-coral">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={H2}>
              {cfg.how.heading}
            </Reveal>
            <Reveal as="p" delay={0.08} className={LEAD}>
              {cfg.how.lead}
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-11 max-[900px]:grid-cols-1">
            {cfg.how.steps.map((step, i) => (
              <Reveal
                key={step.h}
                delay={i * 0.06}
                className="bg-white border border-warm3 rounded-[18px] p-[26px] transition-[transform,translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                <div className="w-[34px] h-[34px] rounded-[10px] bg-rose-100 text-coral font-extrabold flex items-center justify-center mb-[14px]">
                  {i + 1}
                </div>
                <h3 className="text-[19px] leading-[1.12] font-extrabold tracking-[-1px] text-ink m-0 mb-2">
                  {step.h}
                </h3>
                <p className="text-[14.5px] leading-[1.66] text-body m-0">
                  {step.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[88px] px-7 bg-sand max-[900px]:py-16 max-[900px]:px-[22px]">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center">
            <Reveal as="p" className={EYEBROW}>
              FAQ<b className="text-coral">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={H2}>
              {cfg.toolName.replace(/\s*calculator$/i, "")}, answered
            </Reveal>
          </div>
          <Reveal className="max-w-[820px] mx-auto mt-[34px]">
            <FAQ items={cfg.faq} />
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-[88px] px-7 max-[900px]:py-16 max-[900px]:px-[22px]">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-[640px]">
            <Reveal as="p" className={EYEBROW}>
              More free tools<b className="text-coral">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={H2}>
              Keep optimizing your hiring
            </Reveal>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-10 max-[900px]:grid-cols-2">
            {cfg.related.map((rt, i) => (
              <Reveal key={rt.t + i} delay={i * 0.06}>
                <Link
                  href={rt.href}
                  className="group block h-full bg-white border border-warm3 rounded-2xl p-[22px] transition-[transform,translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
                >
                  <div className="w-10 h-10 rounded-[11px] bg-rose-100 text-coral flex items-center justify-center mb-[14px]">
                    <GridIcon />
                  </div>
                  <p className="text-[15.5px] font-bold text-ink m-0 mb-1">
                    {rt.t}
                  </p>
                  <p className="text-[13px] text-muted m-0 leading-[1.45]">
                    {rt.d}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BLOCK (distinct from the global SiteFooter coral band) */}
      <section className="pb-[88px] px-7 max-[900px]:pb-16 max-[900px]:px-[22px]">
        <div className="max-w-[1180px] mx-auto">
          <Reveal
            className="rounded-[28px] px-12 py-16 text-center text-white"
            style={{
              background:
                "radial-gradient(900px 420px at 80% 0%,#FFE3DD 0%,rgba(255,227,221,0) 60%),linear-gradient(135deg,#F23F44,#C0242B)",
            }}
          >
            <h2 className="text-[38px] leading-[1.12] font-extrabold tracking-[-1px] text-white m-0 mx-auto mb-[14px] max-w-[560px]">
              {cfg.cta.heading}
            </h2>
            <p className="text-[18px] leading-[1.55] text-white/[0.92] max-w-[520px] mx-auto mb-[30px]">
              {cfg.cta.sub}
            </p>
            <div className="flex items-center justify-center gap-[14px] flex-wrap">
              <CtaButton
                label="Try for free"
                href={routes.pricing}
                variant="light"
                size="lg"
                icon="arrow"
              />
              <CtaButton
                label="Book a demo"
                href={routes.contact}
                variant="outline-light"
                size="lg"
                icon="play"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
