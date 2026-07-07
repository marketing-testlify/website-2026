import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import {
  INTERVIEWS,
  AI_TOOLS,
  FAQ_PLATFORM,
  buildDetail,
  findInterview,
  interviewSlug,
  type RelatedItem,
} from "../interviewData";
import Accordion, { type AccordionItem } from "./Accordion";

export function generateStaticParams() {
  return INTERVIEWS.map((t) => ({ slug: interviewSlug(t.name) }));
}

export async function generateMetadata(
  props: PageProps<"/library/interviews/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const iv = findInterview(slug);
  if (!iv) return { title: "Interview not found" };
  const detail = buildDetail(iv);
  return {
    title: `${detail.title} — ${detail.category}`,
    description: detail.lede,
  };
}

/* ---- icons ---- */
const Check = ({ size = 18, strokeWidth = 2.6 }: { size?: number; strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const ModeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
  </svg>
);
const ClockIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const QuestionsIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
const StarIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8 2 9.4h7.6z" />
  </svg>
);
const CheckCircle = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
const SmallArrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const RELATED_ICON: Record<RelatedItem["ic"], ReactNode> = {
  code: (
    <>
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </>
  ),
  server: (
    <>
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <path d="M6 7h.01M6 17h.01" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2l9 5-9 5-9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
};

export default async function Page(props: PageProps<"/library/interviews/[slug]">) {
  const { slug } = await props.params;
  const iv = findInterview(slug);
  if (!iv) notFound();

  const t = buildDetail(iv);

  const interviewItems: AccordionItem[] = t.interview.map((q, i) => ({
    num: String(i + 1).padStart(2, "0"),
    q: q.q,
    content: (
      <>
        <div>
          <h4 className="text-[11.5px] font-bold tracking-[0.09em] uppercase text-[#C0242B] m-0 mb-[5px]">Why this matters</h4>
          <p className="m-0 text-[15px] leading-[1.64] text-body">{q.why}</p>
        </div>
        <div className="mt-[15px]">
          <h4 className="text-[11.5px] font-bold tracking-[0.09em] uppercase text-[#C0242B] m-0 mb-[5px]">What the AI scores</h4>
          <p className="m-0 text-[15px] leading-[1.64] text-body">{q.listen}</p>
        </div>
      </>
    ),
  }));

  const faqTestItems: AccordionItem[] = t.faqTest.map((f) => ({
    q: f.q,
    content: <p className="m-0 text-[15px] leading-[1.64] text-body">{f.a}</p>,
  }));
  const faqPlatformItems: AccordionItem[] = FAQ_PLATFORM.map((f) => ({
    q: f.q,
    content: <p className="m-0 text-[15px] leading-[1.64] text-body">{f.a}</p>,
  }));

  return (
    <>
      <SiteHeader
        announcement="AI interviews — same questions, same rubric, for every candidate"
        announcementCta="See how it works"
      />

      {/* detail hero */}
      <section className="px-7 pt-11 pb-[74px] bg-[radial-gradient(1000px_520px_at_82%_-12%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[1240px] mx-auto">
          <p className="reveal is-in text-[13px] text-[#9A878A] font-semibold m-0 mb-7 flex items-center gap-[9px] flex-wrap">
            <Link href={routes.libraryInterviews} className="text-coral">
              Interview library
            </Link>
            <span className="text-[#D6C4C7]">&rsaquo;</span>
            <span>{t.category}</span>
            <span className="text-[#D6C4C7]">&rsaquo;</span>
            <span>{t.title}</span>
          </p>

          <div className="grid grid-cols-[1fr_384px] gap-[52px] items-start max-[920px]:grid-cols-1 max-[920px]:gap-9">
            <div>
              <span className="reveal is-in inline-flex items-center gap-[7px] bg-[#FFF0F0] text-[#C0242B] text-[12px] font-bold tracking-[0.04em] px-[13px] py-1.5 rounded-full">
                <Check size={14} strokeWidth={2.4} />
                {t.tag}
              </span>
              <h1 className="reveal is-in text-[46px] leading-[1.05] font-extrabold tracking-[-1.8px] mt-[17px] mb-4 max-[920px]:text-[34px] max-[920px]:tracking-[-1px]">
                {t.title}
              </h1>
              <p className="reveal is-in text-[18px] leading-[1.62] text-body m-0 max-w-[600px]">{t.lede}</p>

              <div className="reveal is-in flex items-center gap-2 flex-wrap mt-[26px]">
                <span className="text-[12.5px] text-[#9A878A] font-semibold mr-0.5">Available in</span>
                {t.languages.map((lang) => (
                  <span key={lang} className="text-[12.5px] font-semibold text-[#46383C] bg-white border border-[#EFDDDE] px-3 py-[5px] rounded-full">
                    {lang}
                  </span>
                ))}
              </div>

              <div className="reveal is-in flex items-center gap-3 flex-nowrap overflow-x-auto mt-6">
                <span className="text-[12px] text-[#A9999C] font-medium whitespace-nowrap">Summarize this interview with</span>
                {AI_TOOLS.map((tool) => (
                  <Image key={tool.name} src={tool.src} alt={tool.name} width={24} height={24} className="rounded-[6px] bg-white object-contain shrink-0" />
                ))}
              </div>

              <div className="reveal is-in flex gap-3 flex-wrap mt-9">
                <CtaButton label="Try for free" href="#" variant="primary" size="lg" icon="arrow" magnetic />
                <CtaButton label="View sample questions" href="#inside-the-interview" variant="secondary" size="lg" icon="none" />
              </div>
              <div className="flex items-center gap-[26px] flex-wrap mt-[18px] text-[14.5px] text-[#8A7A7D] font-medium">
                <span className="inline-flex items-center gap-[7px]"><b className="text-coral font-bold">✓</b>7-day free trial</span>
                <span className="inline-flex items-center gap-[7px]"><b className="text-coral font-bold">✓</b>No credit card required</span>
              </div>
            </div>

            {/* action card */}
            <div className="reveal is-in sticky top-[120px] bg-white border border-[#EFE2E3] rounded-[22px] p-[26px] shadow-[0_24px_60px_rgba(110,11,14,0.10)] max-[920px]:static">
              <div className="flex items-center justify-between gap-2.5 mb-1">
                <span className="text-[13px] text-[#9A878A] font-semibold">Ready to use</span>
                <span className="text-[11px] font-bold tracking-[0.05em] uppercase px-[11px] py-1 rounded-full bg-[#FFF3E0] text-[#B5740F]">{t.level}</span>
              </div>
              <ul className="list-none mt-0 mb-[22px] p-0">
                <li className="flex items-center justify-between gap-3 py-3 border-b border-[#F4E7E8] text-sm">
                  <span className="text-[#8A7A7D] font-medium inline-flex items-center gap-[9px]">
                    <span className="text-[#C0989B] shrink-0"><ModeIcon /></span>
                    Interview mode
                  </span>
                  <span className="text-ink font-bold text-right">{t.type}</span>
                </li>
                <li className="flex items-center justify-between gap-3 py-3 border-b border-[#F4E7E8] text-sm">
                  <span className="text-[#8A7A7D] font-medium inline-flex items-center gap-[9px]">
                    <span className="text-[#C0989B] shrink-0"><ClockIcon /></span>
                    Duration
                  </span>
                  <span className="text-ink font-bold text-right">{t.duration}</span>
                </li>
                <li className="flex items-center justify-between gap-3 py-3 border-b border-[#F4E7E8] text-sm">
                  <span className="text-[#8A7A7D] font-medium inline-flex items-center gap-[9px]">
                    <span className="text-[#C0989B] shrink-0"><QuestionsIcon /></span>
                    Questions
                  </span>
                  <span className="text-ink font-bold text-right">{t.questions}</span>
                </li>
                <li className="flex items-center justify-between gap-3 py-3 text-sm">
                  <span className="text-[#8A7A7D] font-medium inline-flex items-center gap-[9px]">
                    <span className="text-[#C0989B] shrink-0"><StarIcon /></span>
                    Competencies scored
                  </span>
                  <span className="text-ink font-bold text-right">{t.skills.length}</span>
                </li>
              </ul>
              <ul className="list-none mt-5 mb-0 pt-4 border-t border-[#F4E7E8] flex flex-col gap-[10px]">
                {["AI-scored with full transcript & recording", "Anti-cheat & full-screen proctoring", "Combine with any of 3,500+ skills tests"].map((li) => (
                  <li key={li} className="flex items-start gap-[9px] text-[13px] text-[#46383C] leading-[1.4]">
                    <span className="shrink-0 mt-px text-[#1FA463]">
                      <Check size={17} />
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* competencies scored */}
      <section className="px-7 py-[84px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mb-9">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Competencies scored<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              {t.skills.length} competencies, each scored independently
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[960px]:grid-cols-2 max-[640px]:grid-cols-1">
            {t.skills.map((s, i) => (
              <Reveal
                key={s.name}
                delay={(i % 3) * 0.06}
                className="bg-white border-[1.4px] border-[#EFE1E2] rounded-2xl px-6 pt-6 pb-[22px] shadow-[0_16px_30px_rgba(110,11,14,0.05)] transition-[translate,transform,box-shadow,border-color] duration-[250ms] ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#F4C7C8] hover:shadow-[0_16px_30px_rgba(110,11,14,0.10)]"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[10px] bg-[#FFF0EF] text-coral text-[13px] font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] font-bold text-ink m-0 tracking-[-0.3px]">{s.name}</h3>
                </div>
                <p className="text-[13.5px] leading-[1.6] text-[#6C5A5D] m-0">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* overview */}
      <section className="px-7 py-[84px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mb-9">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Overview<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              What this interview measures
            </Reveal>
          </div>
          <Reveal className="max-w-[760px]">
            {t.summary.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.72] text-body m-0 mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </Reveal>
          <div className="mt-11">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-3">
              Relevant for<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal className="flex flex-wrap gap-[9px] mt-2">
              {t.roles.map((r) => (
                <span
                  key={r}
                  className="text-sm font-semibold text-[#46383C] bg-white border border-[#EFDDDE] px-4 py-[9px] rounded-full transition-colors duration-150 hover:border-[#F4B9BB] hover:text-[#C0242B]"
                >
                  {r}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* built by experts / SME */}
      <section className="px-7 py-[84px] bg-sand">
        <div className="max-w-[1240px] mx-auto grid grid-cols-[1fr_420px] gap-11 items-center max-[920px]:grid-cols-1 max-[920px]:gap-[30px]">
          <div>
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Built by experts<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              Every interview is structured, consistent and fair
            </Reveal>
            <Reveal as="p" delay={0.08} className="text-[16px] leading-[1.66] text-body mt-4 max-w-[520px]">
              Every candidate gets the same questions in the same order, with AI follow-ups that probe depth — not vibes. Answers are scored against a role-specific rubric, so you compare candidates on evidence, not on who interviewed them or when.
            </Reveal>
            <Reveal delay={0.12}>
              <Link href={routes.trustCenter} className="group inline-flex items-center gap-[7px] mt-[22px] text-[15px] font-bold text-coral">
                See the science behind our tests
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <SmallArrow />
                </span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.06} className="bg-white border border-[#EFE2E3] rounded-[20px] p-[30px] shadow-[0_18px_40px_rgba(110,11,14,0.07)]">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.04em] text-[#1FA463] bg-[#E8F6EE] px-[13px] py-1.5 rounded-full mb-4">
              <CheckCircle />
              Fairness assured
            </span>
            <p className="text-[14.5px] leading-[1.62] text-body m-0">
              AI scoring is calibrated against expert human ratings and continuously audited for consistency and adverse impact — so every interview result is structured, defensible and fair to every candidate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* inside the interview */}
      <section id="inside-the-interview" className="px-7 py-[84px] scroll-mt-[92px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mb-9">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Inside the interview<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              Sample questions &amp; AI follow-ups
            </Reveal>
            <Reveal as="p" delay={0.08} className="text-[16px] leading-[1.66] text-body mt-3">
              A preview of the structured questions candidates answer — each scored against explicit criteria.
            </Reveal>
          </div>
          <Accordion items={interviewItems} />
        </div>
      </section>

      {/* faq */}
      <section className="px-7 py-[84px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mx-auto mb-9 text-center">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              FAQ<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              Frequently asked questions
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-7 items-start max-[920px]:grid-cols-1 max-[920px]:gap-4">
            <div>
              <Reveal as="h3" className="text-[15px] font-bold tracking-[0.02em] text-ink m-0 mb-3.5">
                About this interview
              </Reveal>
              <Accordion items={faqTestItems} iconSize={19} />
            </div>
            <div>
              <Reveal as="h3" className="text-[15px] font-bold tracking-[0.02em] text-ink m-0 mb-3.5">
                About Testlify
              </Reveal>
              <Accordion items={faqPlatformItems} iconSize={19} />
            </div>
          </div>
        </div>
      </section>

      {/* related */}
      <section className="px-7 py-[84px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[680px] mx-auto mb-9 text-center">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-4">
              Pair it with<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.2px] text-ink m-0 max-[920px]:text-[27px]">
              Build a complete hiring flow
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {t.related.map((r, i) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="w-[42px] h-[42px] rounded-[11px] bg-[#FFF0F0] text-coral flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        {RELATED_ICON[r.ic]}
                      </svg>
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.03em] px-2.5 py-1 rounded-full bg-[#F7ECEC] text-[#8A767A]">{r.tag}</span>
                  </div>
                  <h3 className="text-[17px] leading-[1.25] font-bold tracking-[-0.3px] text-ink m-0 mb-1.5">{r.name}</h3>
                  <p className="text-[13.5px] leading-[1.66] text-body m-0">{r.meta}</p>
                </>
              );
              const cls =
                "group block bg-white border border-[#EFE2E3] rounded-[18px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]";
              return (
                <Reveal key={r.name} delay={0.06 * i}>
                  {r.slug ? (
                    <Link href={`${routes.libraryInterviews}/${r.slug}`} className={cls}>
                      {inner}
                    </Link>
                  ) : (
                    <Link href={routes.testLibrary} className={cls}>
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
