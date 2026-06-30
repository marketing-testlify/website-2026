import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Solutions — a hiring solution for every kind of team",
  description:
    "However you hire — high volume, fully remote, straight off campus — Testlify adapts to your workflow and surfaces the right people, faster.",
};

const ArrowRight = ({ w = 17, sw = 2.4 }: { w?: number; sw?: number }) => (
  <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

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

const INDUSTRIES: { label: string; delay: number; icon: React.ReactNode }[] = [
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

const SIZES: { title: string; desc: string; delay: number }[] = [
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

const OUTCOMES: { stat: string; label: string; delay: number }[] = [
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

      {/* hero */}
      <section className="px-7 pt-16 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[820px] mx-auto">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted mb-[18px]">
            Solutions<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal as="h1" delay={0.04} className="text-[62px] leading-[1.04] font-extrabold tracking-[-2px] m-0 text-ink max-[920px]:text-[42px] max-[920px]:tracking-[-1.4px]">
            A hiring solution for
            <br />
            every kind of team
          </Reveal>
          <Reveal as="p" delay={0.08} className="text-[19px] leading-[1.6] text-body font-normal mx-auto mt-[22px] max-w-[600px]">
            However you hire — high volume, fully remote, straight off campus — Testlify adapts to your workflow and surfaces the right people, faster.
          </Reveal>
          <Reveal delay={0.12} className="mt-[30px] flex gap-3.5 justify-center flex-wrap">
            <a className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] px-[26px] py-3.5 rounded-[13px] bg-coral text-white shadow-[0_12px_26px_rgba(242,63,68,0.30)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(242,63,68,0.40)]" href="#">
              Start free
              <ArrowRight />
            </a>
            <a className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] px-[26px] py-3.5 rounded-[13px] bg-white text-ink border-[1.5px] border-warm2 transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:shadow-[0_10px_24px_rgba(110,11,14,0.08)]" href="#">
              Book a demo
            </a>
          </Reveal>
        </div>
      </section>

      {/* by use case */}
      <section id="usecases" className="px-7 pt-14 pb-[104px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-12 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted mb-[18px]">
              By use case<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
              Built for the way you hire
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {USE_CASES.map((u) => (
              <Reveal
                key={u.id}
                delay={u.delay}
                className="group relative flex flex-col bg-white border border-[#EFE2E3] rounded-[20px] p-7 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
              >
                <span id={u.id} className="absolute -top-[120px]" aria-hidden />
                <span className="w-12 h-12 rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[18px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {u.icon}
                  </svg>
                </span>
                <h3 className="text-[18px] font-bold tracking-[-0.3px] m-0 mb-2">{u.title}</h3>
                <p className="text-[14px] leading-[1.6] text-[#6A5A5D] m-0 mb-4">{u.desc}</p>
                <span className="text-[13.5px] font-bold text-coral mt-auto inline-flex items-center gap-1.5">
                  Learn more →
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* by industry */}
      <section className="px-7 py-[104px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted mb-[18px]">
              By industry<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
              Tuned to your field
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-3.5 max-[920px]:grid-cols-1">
            {INDUSTRIES.map((ind) => (
              <Reveal
                key={ind.label}
                delay={ind.delay}
                className="flex items-center gap-[13px] bg-white border border-[#EFE2E3] rounded-[15px] px-5 py-[18px] font-semibold text-[15px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(110,11,14,0.08)] hover:border-[#F4D2D3]"
              >
                <span className="w-10 h-10 rounded-[11px] bg-sand text-[#C0242B] flex items-center justify-center flex-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {ind.icon}
                  </svg>
                </span>
                {ind.label}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* by company size */}
      <section className="px-7 py-[104px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted mb-[18px]">
              By company size<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
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
                <h3 className="text-[22px] leading-[1.25] font-bold tracking-[-0.4px] m-0 mb-2.5 text-ink">{s.title}</h3>
                <p className="text-[14.5px] leading-[1.66] text-body">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* outcomes */}
      <section className="px-7 py-[104px] bg-ink text-white">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-[50px]">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase mb-[18px] text-[#C9A9AB]">
              The outcomes<b className="text-coral-bright font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-white max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
              Results across every team
            </Reveal>
          </div>
          <div className="grid grid-cols-4 gap-5 text-center max-[920px]:grid-cols-2">
            {OUTCOMES.map((o) => (
              <Reveal key={o.label} delay={o.delay}>
                <div className="text-[50px] font-extrabold tracking-[-2px] text-coral leading-none">{o.stat}</div>
                <p className="text-[14px] mt-2.5 text-white/70">{o.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* final CTA */}
      <section className="px-7 py-[104px] text-center">
        <div className="max-w-[720px] mx-auto">
          <Reveal as="h2" className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
            Find your hiring solution
          </Reveal>
          <Reveal as="p" delay={0.04} className="text-[19px] leading-[1.6] text-body mx-auto mt-[18px] mb-[30px]">
            Tell us how you hire and we&apos;ll show you the fastest path to better shortlists.
          </Reveal>
          <Reveal delay={0.08} className="flex gap-3.5 justify-center flex-wrap">
            <a className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] px-[26px] py-3.5 rounded-[13px] bg-coral text-white shadow-[0_12px_26px_rgba(242,63,68,0.30)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(242,63,68,0.40)]" href="#">
              Start free
              <ArrowRight />
            </a>
            <a className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] px-[26px] py-3.5 rounded-[13px] bg-white text-ink border-[1.5px] border-warm2 transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:shadow-[0_10px_24px_rgba(110,11,14,0.08)]" href="#">
              Book a demo
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
