import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Solutions — a hiring solution for every kind of team",
  description:
    "However you hire — high volume, fully remote, straight off campus — Testlify adapts to your workflow and surfaces the right people, faster.",
};

type UseCase = {
  id: string;
  title: string;
  desc: string;
  delay: number;
  icon: React.ReactNode;
};

const USE_CASES: UseCase[] = [
  {
    id: "volume-hiring",
    title: "Volume hiring",
    desc: "Screen thousands of applicants without growing your team. Auto-rank every candidate and only interview the top few percent.",
    delay: 0,
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    id: "remote-hiring",
    title: "Remote hiring",
    desc: "Assess skills objectively across time zones with async tests and one-way video interviews — no scheduling gymnastics.",
    delay: 0.06,
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
  {
    id: "campus-hiring",
    title: "Campus hiring",
    desc: "Run fair, scalable graduate drives. Test entire cohorts in one go and shortlist on merit, not pedigree.",
    delay: 0.12,
    icon: (
      <>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </>
    ),
  },
  {
    id: "diversity-hiring",
    title: "Diversity hiring",
    desc: "Remove names, schools and bias from the first round. Structured, skills-first screening widens your funnel fairly.",
    delay: 0,
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    id: "technical-hiring",
    title: "Technical hiring",
    desc: "Real-world coding challenges in 40+ languages with live playback. Hire engineers on what they can build.",
    delay: 0.06,
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    id: "agency-hiring",
    title: "Staffing & agencies",
    desc: "Place candidates faster with white-labeled assessments and shareable scorecards your clients will trust.",
    delay: 0.12,
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
];

type Industry = {
  label: string;
  delay: number;
  icon: React.ReactNode;
};

const INDUSTRIES: Industry[] = [
  {
    label: "IT & technology",
    delay: 0,
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    label: "SaaS & software",
    delay: 0.04,
    icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
  },
  {
    label: "Financial services",
    delay: 0.08,
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
  {
    label: "Healthcare",
    delay: 0,
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    label: "Retail & e-commerce",
    delay: 0.04,
    icon: (
      <>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
  },
  {
    label: "BPO & services",
    delay: 0.08,
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
];

type Size = {
  title: string;
  desc: string;
  delay: number;
};

const SIZES: Size[] = [
  {
    title: "Startups",
    desc: "Hire your first ten people right. Get a fair, structured process in place from day one — without a recruiting team.",
    delay: 0,
  },
  {
    title: "Mid-market",
    desc: "Standardize hiring across departments, plug into your ATS and cut time-to-hire as you scale headcount.",
    delay: 0.06,
  },
  {
    title: "Enterprise",
    desc: "Global, compliant, high-volume hiring with SSO, custom integrations, security review and a dedicated team.",
    delay: 0.12,
  },
];

type Outcome = {
  stat: string;
  label: string;
  delay: number;
};

const OUTCOMES: Outcome[] = [
  { stat: "68%", label: "faster time-to-hire", delay: 0 },
  { stat: "3.2×", label: "more qualified shortlists", delay: 0.05 },
  { stat: "91%", label: "candidate completion rate", delay: 0.1 },
  { stat: "40%", label: "lower cost per hire", delay: 0.15 },
];

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="See how teams like yours hire with Testlify"
        announcementCta="Book a demo"
      />

      {/* Hero */}
      <section
        className="text-center"
        style={{
          padding: "64px 28px 40px",
          background:
            "radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] m-0 mb-[18px]">
            Solutions<b className="text-[#F23F44] font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[62px] leading-[1.04] font-extrabold tracking-[-2px] m-0 text-[#1A1014] max-[920px]:text-[42px] max-[920px]:tracking-[-1.4px]"
          >
            A hiring solution for
            <br />
            every kind of team
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-[#5A4B4E] font-normal mx-auto m-0 max-w-[600px]"
            style={{ marginTop: 22 }}
          >
            However you hire — high volume, fully remote, straight off campus — Testlify adapts to your workflow and surfaces the right people, faster.
          </Reveal>
          <Reveal
            delay={0.12}
            className="flex gap-[14px] justify-center flex-wrap"
            style={{ marginTop: 30 }}
          >
            <CtaButton
              label="Start free"
              href={routes.pricing}
              variant="primary"
              size="md"
              icon="arrow"
              magnetic
            />
            <CtaButton
              label="Book a demo"
              href="#"
              variant="secondary"
              size="md"
              icon="play"
            />
          </Reveal>
        </div>
      </section>

      {/* By Use Case */}
      <section
        id="usecases"
        style={{ padding: "56px 28px 104px" }}
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center" style={{ marginBottom: 48 }}>
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] m-0 mb-[18px]">
              By use case<b className="text-[#F23F44] font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-[#1A1014] max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
            >
              Built for the way you hire
            </Reveal>
          </div>

          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {USE_CASES.map((uc) => (
              <div key={uc.id} id={uc.id} style={{ scrollMarginTop: 120 }}>
              <Reveal
                delay={uc.delay}
                className="flex flex-col bg-white border border-[#EFE2E3] rounded-[20px] p-7 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
              >
                <span className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-[#F23F44] flex items-center justify-center mb-[18px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {uc.icon}
                  </svg>
                </span>
                <h3 className="text-[18px] font-bold tracking-[-0.3px] m-0 mb-2 text-[#1A1014]">
                  {uc.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#6A5A5D] m-0 mb-4">{uc.desc}</p>
                <span className="text-[13.5px] font-bold text-[#F23F44] mt-auto inline-flex items-center gap-[6px]">
                  Learn more →
                </span>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="px-7 py-[104px] bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center" style={{ marginBottom: 44 }}>
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] m-0 mb-[18px]">
              By industry<b className="text-[#F23F44] font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-[#1A1014] max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
            >
              Tuned to your field
            </Reveal>
          </div>

          <div className="grid grid-cols-3 gap-[14px] max-[920px]:grid-cols-1">
            {INDUSTRIES.map((ind) => (
              <Reveal
                key={ind.label}
                delay={ind.delay}
                className="flex items-center gap-[13px] bg-white border border-[#EFE2E3] rounded-[15px] px-5 py-[18px] font-semibold text-[15px] text-[#1A1014] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(110,11,14,0.08)] hover:border-[#F4D2D3]"
              >
                <span className="w-10 h-10 rounded-[11px] bg-[#FBF3EE] text-[#C0242B] flex items-center justify-center flex-none">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {ind.icon}
                  </svg>
                </span>
                {ind.label}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* By Company Size */}
      <section className="px-7 py-[104px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center" style={{ marginBottom: 44 }}>
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] m-0 mb-[18px]">
              By company size<b className="text-[#F23F44] font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-[#1A1014] max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
            >
              From first hire to ten-thousandth
            </Reveal>
          </div>

          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {SIZES.map((s) => (
              <Reveal
                key={s.title}
                delay={s.delay}
                className="bg-white border border-[#EFE2E3] rounded-[20px] px-7 py-8 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
              >
                <h3 className="text-[22px] leading-[1.25] font-bold tracking-[-0.4px] m-0 text-[#1A1014]" style={{ marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-[1.66] text-[#5A4B4E] m-0">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-7 py-[104px] bg-[#1A1014] text-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto" style={{ marginBottom: 50 }}>
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase m-0 mb-[18px] text-[#C9A9AB]">
              The outcomes<b className="text-[#FF7A52] font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-white max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
            >
              Results across every team
            </Reveal>
          </div>

          <div
            className="grid gap-5 text-center max-[920px]:grid-cols-2"
            style={{ gridTemplateColumns: "repeat(4,1fr)" }}
          >
            {OUTCOMES.map((o) => (
              <Reveal key={o.label} delay={o.delay}>
                <div className="text-[50px] font-extrabold tracking-[-2px] text-[#F23F44] leading-none">
                  {o.stat}
                </div>
                <p className="text-[14px] m-0 text-white/70" style={{ marginTop: 10 }}>
                  {o.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-7 py-[104px] text-center">
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <Reveal
            as="h2"
            className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-[#1A1014] max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
          >
            Find your hiring solution
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="text-[19px] leading-[1.6] text-[#5A4B4E]"
            style={{ margin: "18px auto 30px" }}
          >
            Tell us how you hire and we&apos;ll show you the fastest path to better shortlists.
          </Reveal>
          <Reveal
            delay={0.08}
            className="flex gap-[14px] justify-center flex-wrap"
          >
            <CtaButton
              label="Start free"
              href={routes.pricing}
              variant="primary"
              size="md"
              icon="arrow"
            />
            <CtaButton
              label="Book a demo"
              href="#"
              variant="secondary"
              size="md"
              icon="play"
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
