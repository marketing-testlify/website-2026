import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "About",
  description:
    "We started Testlify because the best person for a job is so often missed. We're building the platform that puts proven ability first.",
};

const VALUES = [
  {
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
    title: "Fairness first",
    desc: "Every product decision starts with one question: does this make hiring more fair?",
    delay: 0,
  },
  {
    icon: (
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
    title: "Evidence over opinion",
    desc: "We trust data, run the experiment, and let results — not hierarchy — win the argument.",
    delay: 0.06,
  },
  {
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9z" />,
    title: "Move with urgency",
    desc: "Hiring teams can't wait. We ship fast, learn faster, and obsess over our customers' time.",
    delay: 0.12,
  },
];

const TEAM = [
  { initials: "AR", bg: "#F23F44", name: "Aditya Rao", role: "Co-founder & CEO", delay: 0 },
  { initials: "SK", bg: "#2A6FDB", name: "Sneha Kulkarni", role: "Co-founder & CPO", delay: 0.05 },
  { initials: "DM", bg: "#1F8A5B", name: "Daniel Mwangi", role: "VP Engineering", delay: 0.1 },
  { initials: "EL", bg: "#6B3FA0", name: "Elena Costa", role: "VP Customer Success", delay: 0.15 },
];

const TIMELINE = [
  {
    year: "2019",
    text: "Testlify is founded with a simple test library and a big belief: skills should come first.",
  },
  {
    year: "2021",
    text: "We cross 1,000 customers and launch coding assessments and anti-cheat proctoring.",
  },
  {
    year: "2023",
    text: "Video interviewing and our first AI scoring models ship; the library passes 3,000 tests.",
  },
  {
    year: "2025",
    text: "Testlify AI launches — conversational screening and interviewing that reads every applicant.",
  },
];

const eyebrow =
  "text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] mb-[18px]";
const h2 =
  "text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] text-ink m-0 max-[920px]:text-[32px] max-[920px]:tracking-[-1px]";
const body = "text-[16px] leading-[1.66] text-[#5A4B4E]";

export default function AboutPage() {
  return (
    <>
      <SiteHeader
        announcement="We're hiring across product, engineering and GTM"
        announcementCta="See openings"
      />

      {/* Hero */}
      <section className="px-7 pt-16 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[840px] mx-auto px-7">
          <Reveal as="p" className={eyebrow}>
            About us<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[62px] leading-[1.04] font-extrabold tracking-[-2px] text-ink m-0 max-[920px]:text-[42px] max-[920px]:tracking-[-1.4px]"
          >
            Hiring should be
            <br />
            about skill, not luck
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-[#5A4B4E] font-normal mx-auto mt-[22px] max-w-[620px]"
          >
            We started Testlify because the best person for a job is so often
            missed — filtered out by a keyword, a school, or a gut feeling.
            We&apos;re building the platform that puts proven ability first.
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-7 pt-[30px]">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="grid grid-cols-4 gap-5 text-center max-[920px]:grid-cols-2">
            {[
              ["12,000+", "teams hiring with us"],
              ["3,500+", "validated tests"],
              ["8M+", "assessments taken"],
              ["120+", "countries served"],
            ].map(([n, label]) => (
              <div key={label}>
                <div className="text-[52px] font-extrabold tracking-[-2px] text-coral leading-none">
                  {n}
                </div>
                <p className="text-[14px] leading-[1.66] text-[#5A4B4E] mt-2.5 mb-0">
                  {label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="px-7 py-[104px] max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[1240px] mx-auto px-7 grid grid-cols-2 gap-[60px] items-center max-[920px]:grid-cols-1">
          <Reveal>
            <p className={eyebrow}>
              Our mission<b className="text-coral font-semibold">.</b>
            </p>
            <h2 className={`${h2} mb-5`}>
              Open the door to opportunity for everyone
            </h2>
            <p className={body}>
              Talent is everywhere — opportunity isn&apos;t. Traditional hiring
              rewards the candidates who look right on paper and quietly
              overlooks millions of others.
            </p>
            <p className={`${body} mt-3.5`}>
              Testlify replaces guesswork with evidence. By measuring what people
              can actually do, we help companies find better hires while giving
              every candidate a fair shot, regardless of background.
            </p>
          </Reveal>
          <Reveal
            delay={0.08}
            className="bg-[linear-gradient(160deg,#FFF4F3,#FBE9E9)] border border-[#F6DCDD] rounded-[24px] p-10"
          >
            <p className="text-[24px] leading-[1.4] font-semibold tracking-[-0.4px] text-ink m-0">
              &quot;The question was never &apos;who has the best résumé?&apos;
              It was always &apos;who can do the job best?&apos; We built Testlify
              to finally answer it.&quot;
            </p>
            <p className="text-[14px] leading-[1.66] mt-5 font-semibold text-ink">
              — The Testlify founders
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-7 py-[104px] bg-sand max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[1240px] mx-auto px-7">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal as="p" className={eyebrow}>
              Our values<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={h2}>
              What we stand for
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {VALUES.map((v) => (
              <Reveal
                key={v.title}
                delay={v.delay}
                className="bg-white border border-[#EFE2E3] rounded-[20px] px-[26px] py-[30px] transition-[translate,transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
              >
                <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[18px]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {v.icon}
                  </svg>
                </span>
                <h3 className="text-[18px] leading-[1.25] font-bold tracking-[-0.4px] text-ink m-0 mb-2">
                  {v.title}
                </h3>
                <p className="text-[14px] leading-[1.66] text-[#5A4B4E]">
                  {v.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-7 py-[104px] max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[1240px] mx-auto px-7">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal as="p" className={eyebrow}>
              Leadership<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={h2}>
              The team behind Testlify
            </Reveal>
          </div>
          <div className="grid grid-cols-4 gap-[18px] max-[920px]:grid-cols-2">
            {TEAM.map((m) => (
              <Reveal key={m.name} delay={m.delay} className="text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-3.5 flex items-center justify-center text-white font-extrabold text-[30px]"
                  style={{ background: m.bg }}
                >
                  {m.initials}
                </div>
                <p className="text-[16px] font-bold m-0">{m.name}</p>
                <p className="text-[13px] text-[#9A878A] mt-1 mb-0">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="px-7 py-[104px] bg-sand max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[760px] mx-auto px-7">
          <div className="mx-auto mb-11 text-center">
            <Reveal as="p" className={eyebrow}>
              Our journey<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={h2}>
              From idea to 12,000 teams
            </Reveal>
          </div>
          <Reveal className="relative pl-[30px] border-l-2 border-[#F1DDDE] flex flex-col gap-[30px]">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[39px] top-0.5 w-4 h-4 rounded-full bg-coral border-4 border-white shadow-[0_0_0_2px_#F4D2D3]" />
                <p className="text-[14px] font-extrabold text-coral m-0 mb-1">
                  {t.year}
                </p>
                <p className="text-[15px] leading-[1.66] text-[#5A4B4E]">
                  {t.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="px-7 py-[104px] bg-ink text-white text-center max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[720px] mx-auto px-7">
          <Reveal
            as="h2"
            className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] text-white m-0 max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
          >
            Come build the future of hiring
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="text-[19px] leading-[1.6] text-white/[0.78] mx-auto mt-[18px] mb-[30px] font-normal"
          >
            We&apos;re a remote-first team on a mission to make hiring fair.
            We&apos;d love to meet you.
          </Reveal>
          <Reveal delay={0.08} className="flex gap-3.5 justify-center flex-wrap">
            <CtaButton
              label="View open roles"
              href={routes.careers}
              variant="light"
              size="md"
              icon="arrow"
            />
            <CtaButton
              label="Contact us"
              href="#"
              variant="outline-light"
              size="md"
              icon="none"
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
