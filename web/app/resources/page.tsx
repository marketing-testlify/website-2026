import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Resources — everything you need to hire better",
  description:
    "Guides, glossaries, templates and tools — free, practical and built by hiring people for hiring people.",
};

const TYPES = [
  {
    title: "Blog",
    desc: "Research, opinion and practical playbooks on skills-based hiring.",
    link: "Read articles →",
    href: routes.blog,
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
  },
  {
    title: "Guides & ebooks",
    desc: "In-depth, downloadable guides to master every part of hiring.",
    link: "Get the guides →",
    href: "#guides",
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    title: "HR glossary",
    desc: "Plain-English definitions of the hiring and HR terms that matter.",
    link: "Browse terms →",
    href: "#glossary",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </>
    ),
  },
  {
    title: "Templates & tools",
    desc: "Ready-to-use job descriptions, interview kits and calculators.",
    link: "Use the tools →",
    href: "#tools",
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
];

const GUIDES = [
  {
    title: "The skills-based hiring playbook",
    desc: "A 40-page field guide to building a fair, predictive process.",
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
  },
  {
    title: "Hiring with AI, responsibly",
    desc: "How to use AI in hiring without amplifying bias or risk.",
    icon: <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" />,
  },
  {
    title: "The cost-per-hire calculator",
    desc: "Quantify what your current process really costs you.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </>
    ),
  },
];

const GLOSSARY = [
  {
    term: "Skills-based hiring",
    def: "A hiring approach that evaluates candidates on demonstrated abilities rather than credentials like degrees or job titles.",
  },
  {
    term: "Work-sample test",
    def: "An assessment that asks candidates to perform tasks closely resembling the actual job — the strongest predictor of performance.",
  },
  {
    term: "Structured interview",
    def: "An interview where every candidate is asked the same questions and scored against the same rubric, reducing bias.",
  },
  {
    term: "Adverse impact",
    def: "When a hiring practice disproportionately screens out a protected group, even unintentionally — a key fairness metric.",
  },
  {
    term: "Time-to-hire",
    def: "The number of days between a candidate entering your pipeline and accepting an offer. A core recruiting efficiency metric.",
  },
  {
    term: "Quality of hire",
    def: "A measure of how much value a new hire contributes, typically based on performance, ramp time and retention.",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Free templates · Job descriptions, interview kits & more"
        announcementCta="Browse all"
      />

      {/* hero */}
      <section className="px-7 pt-[60px] pb-[30px] text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="mx-auto max-w-[820px]">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
            Resources<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[58px] max-[920px]:text-[40px] leading-[1.05] font-extrabold tracking-[-2px] max-[920px]:tracking-[-1.4px] m-0 text-ink"
          >
            Everything you need
            <br />
            to hire better
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-body font-normal mx-auto mt-5 max-w-[560px]"
          >
            Guides, glossaries, templates and tools — free, practical and built by
            hiring people for hiring people.
          </Reveal>
        </div>
      </section>

      {/* resource type grid */}
      <section className="px-7 pt-10 pb-[88px] max-[920px]:px-[22px] max-[920px]:pb-[64px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-4 max-[1080px]:grid-cols-2 max-[920px]:grid-cols-1 gap-[18px]">
            {TYPES.map((t, i) => {
              const inner = (
                <>
                  <span className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[18px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {t.icon}
                    </svg>
                  </span>
                  <h3 className="text-[18px] font-bold tracking-[-0.3px] m-0 mb-2 text-ink">{t.title}</h3>
                  <p className="text-[13.5px] leading-[1.55] text-[#6A5A5D] m-0 mb-4">{t.desc}</p>
                  <span className="text-[13px] font-bold text-coral mt-auto">{t.link}</span>
                </>
              );
              const cls =
                "flex flex-col bg-white border border-[#EFE2E3] rounded-[20px] p-7 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3] scroll-mt-[120px]";
              return (
                <Reveal key={t.title} delay={i * 0.05}>
                  {t.href.startsWith("#") ? (
                    <a href={t.href} className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={t.href} className={cls}>
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* featured guides */}
      <section id="guides" className="px-7 py-[88px] max-[920px]:px-[22px] max-[920px]:py-[64px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              Featured guides<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[38px] max-[920px]:text-[30px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 text-ink"
            >
              Go deep on hiring
            </Reveal>
          </div>
          <div className="grid grid-cols-3 max-[920px]:grid-cols-1 gap-[18px]">
            {GUIDES.map((g, i) => (
              <Reveal
                key={g.title}
                delay={i * 0.06}
                className="flex gap-3.5 items-start bg-white border border-[#EFE2E3] rounded-[18px] p-6 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(110,11,14,0.08)] hover:border-[#F4D2D3]"
              >
                <span className="flex-none w-11 h-11 rounded-[12px] bg-sand text-[#C0242B] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {g.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="text-[16px] font-bold m-0 mb-1.5 text-ink">{g.title}</h3>
                  <p className="text-[13.5px] leading-[1.66] text-body m-0">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HR glossary */}
      <section id="glossary" className="px-7 py-[88px] max-[920px]:px-[22px] max-[920px]:py-[64px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="mx-auto mb-11 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              HR glossary<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[38px] max-[920px]:text-[30px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 text-ink"
            >
              Hiring terms, explained
            </Reveal>
          </div>
          <div className="grid grid-cols-2 max-[920px]:grid-cols-1 gap-4">
            {GLOSSARY.map((g, i) => (
              <Reveal
                key={g.term}
                delay={(i % 3) * 0.04}
                className="bg-white border border-[#EFE2E3] rounded-[16px] p-6 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(110,11,14,0.08)] hover:border-[#F4D2D3]"
              >
                <p className="text-[16.5px] font-bold m-0 mb-1.5 text-ink">{g.term}</p>
                <p className="text-[14px] text-[#6A5A5D] leading-[1.55] m-0">{g.def}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="text-center mt-7">
            <a href="#" className="text-coral font-bold text-[14.5px]">
              Browse the full glossary →
            </a>
          </Reveal>
        </div>
      </section>

      {/* dark tools CTA (distinct from footer's coral band) */}
      <section id="tools" className="px-7 py-[88px] max-[920px]:px-[22px] max-[920px]:py-[64px] bg-ink text-white text-center">
        <div className="max-w-[720px] mx-auto">
          <Reveal as="h2" className="text-[38px] max-[920px]:text-[30px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 text-white">
            Free hiring tools &amp; templates
          </Reveal>
          <Reveal as="p" delay={0.04} className="text-[19px] leading-[1.6] text-white/[0.78] mx-auto mt-[18px] mb-[30px]">
            Job description generators, interview scorecards, and ROI calculators —
            no signup required.
          </Reveal>
          <Reveal delay={0.08} className="flex gap-3.5 justify-center flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] px-[26px] py-[14px] rounded-[13px] cursor-pointer border-none bg-white text-[#C0242B] transition-all duration-[250ms] hover:-translate-y-0.5"
            >
              Explore tools
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link
              href={routes.testLibrary}
              className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] px-[26px] py-[14px] rounded-[13px] cursor-pointer bg-white/[0.14] text-white border-[1.5px] border-white/40 transition-all duration-[250ms] hover:-translate-y-0.5"
            >
              Browse test library
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
