import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Our partners",
  description:
    "Whether you resell, refer, or integrate, Testlify's partner programs help you add value for your clients and unlock new revenue — with the fastest-growing skills assessment platform behind you.",
};

const EYEBROW =
  "text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] m-0 mb-[18px]";
const H2 =
  "text-[43px] max-[920px]:text-[32px] leading-[1.08] font-extrabold tracking-[-1.4px] max-[920px]:tracking-[-1px] m-0 text-[#1A1014]";

const PROGRAMS = [
  {
    title: "Referral program",
    desc: "Refer hiring teams to Testlify and earn recurring commission for every account you bring in.",
    linkLabel: "Explore referrals",
    href: "#",
    delay: 0,
    icon: (
      <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    ),
  },
  {
    title: "Partnership program",
    desc: "Consultancies, agencies and HR platforms: resell Testlify and deliver assessment to your clients.",
    linkLabel: "Explore partnerships",
    href: "#",
    delay: 0.06,
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Integration program",
    desc: "Build a native integration with Testlify and reach 50,000+ recruiters through our marketplace.",
    linkLabel: "Explore integrations",
    href: "#",
    delay: 0.12,
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 9h16M9 4v16" />
      </>
    ),
  },
];

const BENEFITS = [
  "3,500+ validated tests and AI interviews on one platform",
  "100+ ATS integrations included on every paid plan",
  "Transparent, per-candidate pricing with no annual lock-in",
  "Dedicated partner support and co-marketing",
];

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Grow with Testlify — partner programs now open"
        announcementCta="Become a partner"
      />

      {/* hero */}
      <section className="px-7 pt-[70px] pb-11 text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="mx-auto max-w-[860px]">
          <Reveal as="p" className={EYEBROW}>
            Our partners<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[62px] max-[920px]:text-[42px] leading-[1.04] font-extrabold tracking-[-2px] max-[920px]:tracking-[-1.4px] m-0 text-[#1A1014]"
          >
            Let&apos;s grow
            <br />
            hiring together
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-[#5A4B4E] font-normal mx-auto mt-[22px] max-w-[640px]"
          >
            Whether you resell, refer, or integrate, Testlify&apos;s partner
            programs help you add value for your clients and unlock new revenue —
            with the fastest-growing skills assessment platform behind you.
          </Reveal>
        </div>
      </section>

      {/* choose your program */}
      <section className="px-7 py-[104px] max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[660px] mx-auto mb-11 text-center">
            <Reveal as="p" className={EYEBROW}>
              Ways to partner<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={H2}>
              Choose your program
            </Reveal>
          </div>
          <div className="grid grid-cols-3 max-[920px]:grid-cols-1 gap-[18px] max-[920px]:gap-[34px]">
            {PROGRAMS.map((p) => (
              <Reveal
                key={p.title}
                delay={p.delay}
                className="bg-white border border-[#EFE2E3] rounded-[20px] p-[30px] px-[26px] transition-[transform,box-shadow,border-color] duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
              >
                <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[18px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {p.icon}
                  </svg>
                </span>
                <h3 className="text-[18px] leading-[1.25] font-bold tracking-[-0.4px] m-0 mb-2 text-[#1A1014]">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[1.66] text-[#5A4B4E]">{p.desc}</p>
                <Link
                  href={p.href}
                  className="inline-block mt-[14px] text-[14px] font-semibold text-coral hover:text-coral-hover"
                >
                  {p.linkLabel} &rarr;
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why partner with us */}
      <section className="px-7 py-[104px] max-[920px]:px-[22px] max-[920px]:py-[72px] bg-[#FBF3EE]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 max-[920px]:grid-cols-1 gap-[60px] max-[920px]:gap-[34px] items-center">
          <Reveal>
            <p className={EYEBROW}>
              Why partner with us<b className="text-coral font-semibold">.</b>
            </p>
            <h2 className={`${H2} mb-[22px]`}>A platform your clients will love</h2>
            <ul className="list-none m-0 p-0 flex flex-col gap-[14px]">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="relative pl-8 text-[15px] leading-[1.55] text-[#5A4B4E]"
                >
                  <svg className="absolute left-0 top-[3px] text-coral" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={0.08}
            className="bg-[linear-gradient(160deg,#FFF4F3,#FBE9E9)] border border-[#F6DCDD] rounded-[24px] p-10"
          >
            <p className="text-[22px] leading-[1.4] font-semibold text-[#1A1014] m-0">
              Ready to build something together? Tell us how you&apos;d like to
              partner and we&apos;ll get you set up.
            </p>
            <div className="mt-6">
              <CtaButton
                label="Become a partner"
                href={routes.contact}
                variant="primary"
                size="md"
                icon="arrow"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
