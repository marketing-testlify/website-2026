import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Partner program",
  description:
    "Refer clients, resell Testlify or build on our API. Whichever way you partner, you get recurring revenue, co-marketing and a product 1,500+ hiring teams already trust.",
};

const STATS = [
  { n: "1,500+", l: "hiring teams on Testlify" },
  { n: "100+", l: "native ATS integrations" },
  { n: "50+", l: "industries served" },
  { n: "4.7", l: "rating on G2" },
];

const TRACKS = [
  {
    name: "Affiliate partner",
    for: "Creators · consultants · communities",
    desc: "Share Testlify with your audience and earn recurring commission on every customer you refer.",
    points: [
      "Recurring revenue share on paid plans",
      "Tracked links & a real-time dashboard",
      "Ready-made creative & copy",
    ],
    linkLabel: "Join as an affiliate",
    href: routes.contact,
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    name: "Solutions partner",
    for: "Agencies · resellers · RPOs",
    desc: "Resell Testlify or bundle it into your hiring services with partner pricing and full enablement.",
    points: [
      "Margin on every deal you close",
      "Sales enablement & deal support",
      "White-label options on request",
    ],
    linkLabel: "Become a reseller",
    href: routes.contact,
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
    name: "Technology partner",
    for: "ATS · HR tech · integrations",
    desc: "Build a native integration with our API and reach recruiters through our 100+ integration marketplace.",
    points: [
      "Open API, webhooks & docs",
      "A listing in our integration directory",
      "Joint go-to-market & co-marketing",
    ],
    linkLabel: "Build an integration",
    href: routes.integrations,
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19" />
      </>
    ),
  },
];

const BENEFITS = [
  {
    title: "Recurring revenue",
    desc: "Earn on the initial sale and every renewal. As your clients grow their hiring, your share grows with them.",
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
  {
    title: "Co-marketing support",
    desc: "Joint webinars, case studies and campaigns. We help you put your partnership in front of the right buyers.",
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    title: "3,500+ ready assessments",
    desc: "Sell into any role from day one with expert-validated tests across 4,500+ jobs and 50+ industries.",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
  {
    title: "Enterprise-grade trust",
    desc: "SOC 2 Type II, ISO 27001, GDPR and CCPA compliance clear procurement and security review with ease.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "A dedicated partner manager",
    desc: "Onboarding, training and a real person on the other end of the line — so every deal has backup.",
    icon: (
      <>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </>
    ),
  },
  {
    title: "Open, documented API",
    desc: "Well-documented endpoints, webhooks and sandbox access make integrations quick to build and easy to maintain.",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
];

const STEPS = [
  { n: "1", t: "Apply", d: "Tell us how you work and which track fits. Approval usually takes a couple of days." },
  { n: "2", t: "Onboard", d: "Get your portal, tracked links, enablement materials and a dedicated partner manager." },
  { n: "3", t: "Refer or build", d: "Send referrals, close deals or ship your integration — with our team supporting you." },
  { n: "4", t: "Earn", d: "Track performance in real time and get paid recurring commission on every active account." },
];

const EYEBROW =
  "text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]";
const H2 =
  "text-[40px] max-[920px]:text-[30px] leading-[1.1] font-extrabold tracking-[-1.2px] max-[920px]:tracking-[-0.9px] m-0 text-ink";
const BODY = "text-[15.5px] leading-[1.64] text-body";

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Refer Testlify and earn recurring revenue on every deal"
        announcementCta="Become a partner"
      />

      {/* hero */}
      <section className="px-7 pt-14 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-12%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="mx-auto max-w-[880px]">
          <Reveal as="p" className={EYEBROW}>
            Partner program<b className="text-coral font-bold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[56px] max-[920px]:text-[40px] leading-[1.05] font-extrabold tracking-[-1.6px] max-[920px]:tracking-[-1.2px] m-0 text-ink"
          >
            Grow with the platform
            <br />
            that hires on proof
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-body font-normal mx-auto mt-[22px] max-w-[640px]"
          >
            Refer clients, resell Testlify or build on our API. Whichever way you
            partner, you get recurring revenue, co-marketing and a product 1,500+
            hiring teams already trust.
          </Reveal>
          <Reveal delay={0.12} className="flex gap-[14px] justify-center flex-wrap mt-[30px]">
            <CtaButton label="Become a partner" href={routes.contact} variant="primary" size="md" icon="arrow" />
            <CtaButton label="Talk to partnerships" href={routes.contact} variant="secondary" size="md" icon="none" />
          </Reveal>
          <Reveal delay={0.16} className="flex gap-[42px] max-[560px]:gap-7 justify-center flex-wrap mt-[46px]">
            {STATS.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-[34px] font-extrabold tracking-[-1px] text-coral leading-none">{s.n}</div>
                <div className="text-[13.5px] text-muted mt-2 font-medium">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* three ways to partner */}
      <section className="px-7 py-24 max-[920px]:px-[22px] max-[920px]:py-[72px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[660px] mx-auto mb-[46px] text-center">
            <Reveal as="p" className={EYEBROW}>
              Three ways to partner<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={H2}>
              Pick the track that fits you
            </Reveal>
            <Reveal as="p" delay={0.08} className={`${BODY} mx-auto mt-4 max-w-[560px]`}>
              One program, three routes — whether you send referrals, sell on our
              behalf or build integrations.
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-3 max-[920px]:grid-cols-1 gap-[18px]">
            {TRACKS.map((t) => (
              <div
                key={t.name}
                className="group flex flex-col bg-white border border-[#F2E6E7] rounded-[20px] p-[30px] px-7 transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_40px_rgba(110,11,14,0.10)]"
              >
                <span className="w-[52px] h-[52px] rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-5">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {t.icon}
                  </svg>
                </span>
                <p className="text-[20px] font-extrabold tracking-[-0.4px] text-ink m-0 mb-1">{t.name}</p>
                <p className="text-[12.5px] font-bold tracking-[0.05em] uppercase text-[#B59A9D] m-0 mb-[14px]">{t.for}</p>
                <p className={BODY}>{t.desc}</p>
                <ul className="list-none my-4 mb-[22px] p-0 flex flex-col gap-[11px]">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-[10px] text-[14.5px] text-[#3A2C30] leading-[1.45]">
                      <svg className="flex-none mt-0.5 text-[#1FA463]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={t.href}
                  className="mt-auto text-[14.5px] font-bold text-coral inline-flex items-center gap-[7px] transition-[gap,color] duration-200 group-hover:gap-[11px] group-hover:text-coral-deep"
                >
                  {t.linkLabel}
                  <span>→</span>
                </Link>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* why partner */}
      <section className="px-7 py-24 max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[660px] mx-auto mb-[46px] text-center">
            <Reveal as="p" className={EYEBROW}>
              Why partner with us<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={H2}>
              A product worth putting your name on
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-3 max-[920px]:grid-cols-1 gap-[18px]">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-[#F2E6E7] rounded-[18px] p-[26px] transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                <span className="w-11 h-11 rounded-[12px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {b.icon}
                  </svg>
                </span>
                <h3 className="text-[17px] font-bold tracking-[-0.2px] m-0 mb-2 text-ink">{b.title}</h3>
                <p className={BODY}>{b.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* how it works */}
      <section className="px-7 py-24 max-[920px]:px-[22px] max-[920px]:py-[72px] bg-sand">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[660px] mx-auto mb-[46px] text-center">
            <Reveal as="p" className={EYEBROW}>
              How it works<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={H2}>
              Live in four steps
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-4 max-[920px]:grid-cols-2 max-[560px]:grid-cols-1 gap-[18px]">
            {STEPS.map((s) => (
              <div key={s.n} className="relative bg-white border border-[#F2E6E7] rounded-[18px] p-7 px-6">
                <div className="w-[38px] h-[38px] rounded-[11px] bg-coral text-white font-extrabold text-[16px] flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="text-[16px] font-bold m-0 mb-[7px] text-ink">{s.t}</h3>
                <p className={BODY}>{s.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* dark CTA */}
      <section className="px-7 py-24 max-[920px]:px-[22px] max-[920px]:py-[72px] bg-ink text-white text-center">
        <div className="max-w-[720px] mx-auto">
          <Reveal as="p" className={`${EYEBROW} text-[#C9B9BC]`}>
            Let&apos;s grow together<b className="text-coral font-bold">.</b>
          </Reveal>
          <Reveal as="h2" delay={0.04} className={`${H2} text-white`}>
            Ready to become a partner?
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-white/[0.78] mx-auto mt-[18px] mb-1"
          >
            Apply in minutes and a partnerships specialist will map the right track
            to how you work.
          </Reveal>
          <Reveal delay={0.12} className="flex gap-[14px] justify-center flex-wrap mt-[30px]">
            <CtaButton label="Apply to partner" href={routes.contact} variant="light" size="md" icon="arrow" />
            <CtaButton label="Talk to partnerships" href={routes.contact} variant="outline-light" size="md" icon="none" />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
