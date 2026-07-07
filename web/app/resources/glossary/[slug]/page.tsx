import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import { GLOSSARY, GLOSSARY_SLUGS, termSlug } from "../data";

export function generateStaticParams() {
  return GLOSSARY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/resources/glossary/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const d = GLOSSARY[slug];
  if (!d) return { title: "HR Glossary" };
  return {
    title: `${d.term} — HR Glossary`,
    description: `${d.term} ${d.oneLiner}`,
  };
}

const CheckIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M5 12l5 5L20 6" />
  </svg>
);

const ArrowIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
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

export default async function Page(
  props: PageProps<"/resources/glossary/[slug]">
) {
  const { slug } = await props.params;
  const d = GLOSSARY[slug];
  if (!d) notFound();

  return (
    <>
      <SiteHeader
        announcement="The HR Glossary — 500+ hiring & assessment terms, defined in plain English"
        announcementCta="Browse the A–Z"
        announcementHref={routes.resourcesGlossary}
      />

      {/* HERO */}
      <section
        className="border-b border-[#F4E7E8] px-7 pb-10 pt-[60px] max-[960px]:px-[22px] max-[960px]:pt-11 max-[960px]:pb-[34px]"
        style={{
          background:
            "radial-gradient(900px 420px at 20% -14%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff",
        }}
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-[18px] flex flex-wrap items-center gap-2 text-[13px] text-[#8A7A7D]">
            <Link href={routes.resources} className="transition-colors hover:text-coral">
              Resources
            </Link>
            <span>/</span>
            <Link
              href={routes.resourcesGlossary}
              className="transition-colors hover:text-coral"
            >
              HR Glossary
            </Link>
            <span>/</span>
            <span>{d.letter}</span>
          </div>
          <Reveal
            as="p"
            className="m-0 mb-[14px] text-[13px] font-bold uppercase tracking-[0.16em] text-coral"
          >
            HR Glossary<span className="text-coral">.</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="m-0 max-w-[820px] text-[48px] font-extrabold leading-[1.05] tracking-[-1.5px] text-ink max-[960px]:text-[36px]"
          >
            {d.term}
          </Reveal>
          <Reveal
            as="p"
            delay={0.11}
            className="m-0 mt-5 max-w-[760px] text-[20px] font-medium leading-[1.55] text-[#3C2C2F]"
          >
            <b className="font-bold text-coral">{d.term}</b> {d.oneLiner}
          </Reveal>
        </div>
      </section>

      {/* BODY LAYOUT */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1fr_300px] items-start gap-14 px-7 pb-[90px] pt-14 max-[960px]:grid-cols-1 max-[960px]:gap-0 max-[960px]:px-[22px] max-[960px]:pb-16 max-[960px]:pt-10">
        {/* MAIN */}
        <div className="min-w-0">
          <Reveal className="mb-[38px]">
            <h2 className="m-0 mb-[14px] text-[26px] font-extrabold tracking-[-0.6px] text-ink">
              What is {d.term}?
            </h2>
            {d.definition.map((para, i) => (
              <p
                key={i}
                className="m-0 mb-4 text-[16.5px] leading-[1.7] text-[#4C3C3F] last:mb-0"
              >
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal className="my-[26px] rounded-[0_14px_14px_0] border-l-[3px] border-coral bg-sand px-[26px] py-[22px]">
            <p className="m-0 text-[16px] italic leading-[1.65] text-[#3C2C2F]">
              {d.callout}
            </p>
          </Reveal>

          <Reveal className="mb-[38px]">
            <h2 className="m-0 mb-[14px] text-[26px] font-extrabold tracking-[-0.6px] text-ink">
              Why {d.term} matters
            </h2>
            <ul className="m-0 flex list-none flex-col gap-[13px] p-0">
              {d.whyPoints.map((w, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[16px] leading-[1.55] text-[#4C3C3F]"
                >
                  <span className="mt-px flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#FFF0EF] text-coral">
                    <CheckIcon />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mb-[38px]">
            <h2 className="m-0 mb-[14px] text-[26px] font-extrabold tracking-[-0.6px] text-ink">
              {d.howTitle}
            </h2>
            <div className="flex flex-col gap-[14px]">
              {d.howSteps.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[15px] rounded-[15px] border border-[#F2E6E7] bg-white px-5 py-[18px]"
                >
                  <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-coral text-[13px] font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <b className="mb-[3px] mt-0.5 block text-[15.5px] font-bold text-ink">
                      {s.title}
                    </b>
                    <span className="text-[14px] leading-[1.55] text-[#7C6A6D]">
                      {s.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ASIDE */}
        <aside className="sticky top-[88px] flex flex-col gap-[18px] max-[960px]:static max-[960px]:mt-11">
          <Reveal className="rounded-[18px] border border-[#F2E6E7] bg-white px-[22px] pb-6 pt-[22px]">
            <p className="m-0 mb-[14px] text-[12px] font-bold uppercase tracking-[0.1em] text-faint">
              Related terms
            </p>
            <div className="flex flex-col gap-[3px]">
              {d.related.map((r) => (
                <Link
                  key={r}
                  href={`${routes.resourcesGlossary}/${termSlug(r)}`}
                  className="group flex items-center justify-between gap-[10px] border-b border-[#F7EDEE] py-[10px] text-[14.5px] font-semibold text-[#2A1A1D] transition-colors duration-200 last:border-b-0 hover:text-coral"
                >
                  {r}
                  <span className="flex flex-none text-[#E0B9BC] transition-[translate,color] duration-[250ms] group-hover:translate-x-[3px] group-hover:text-coral">
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="rounded-[18px] px-[22px] pb-6 pt-[22px]"
            style={{
              background:
                "radial-gradient(600px 300px at 50% 0%,#2A1417,#1A1014)",
            }}
          >
            <p className="m-0 mb-[14px] text-[12px] font-bold uppercase tracking-[0.1em] text-[#C9A9AC]">
              See it in practice
            </p>
            <h4 className="m-0 mb-2 text-[19px] font-extrabold leading-[1.25] tracking-[-0.4px] text-white">
              {d.ctaTitle}
            </h4>
            <p className="m-0 mb-[18px] text-[14px] leading-[1.55] text-[#D8C5C8]">
              {d.ctaBody}
            </p>
            <CtaButton
              label="Try for free"
              href={routes.pricing}
              variant="light"
              size="md"
              icon="arrow"
              magnetic
            />
          </Reveal>
        </aside>
      </div>

      <SiteFooter />
    </>
  );
}
