import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Security & trust — enterprise-grade security by default",
  description:
    "Your candidate data is some of the most sensitive you handle. Testlify protects it with SOC 2 Type II, ISO 27001, GDPR and CCPA standards trusted by banks, hospitals and governments.",
};

const BADGES = [
  {
    title: "SOC 2 Type II",
    sub: "Audited annually",
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
  },
  {
    title: "ISO 27001",
    sub: "Certified",
    icon: (
      <>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </>
    ),
  },
  {
    title: "GDPR",
    sub: "Compliant",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
      </>
    ),
  },
  {
    title: "CCPA",
    sub: "Compliant",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
];

const SECCARDS = [
  {
    title: "Encryption everywhere",
    body: "Data is encrypted in transit with TLS 1.3 and at rest with AES-256. Keys are rotated and managed in a dedicated KMS.",
    delay: 0,
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    title: "Access controls",
    body: "Role-based permissions, SSO/SAML, SCIM provisioning and full audit logs keep access tight and traceable.",
    delay: 0.06,
    icon: (
      <>
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c-1 0-3-1-3-3s2-3 3-3-3-2-3-2-1 3-3 3-3-2-3-2-2 3-2 3-3 1-3 3 3 2 3 2 1 3 3 3 3-2 3-2" />
      </>
    ),
  },
  {
    title: "Reliability & uptime",
    body: "99.9% uptime SLA, multi-region redundancy, automated backups and continuous monitoring with on-call response.",
    delay: 0.12,
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
];

const CHECKLIST = [
  "Data residency options in the EU and US",
  "Candidate right-to-erasure workflows",
  "Configurable data retention policies",
  "Signed Data Processing Agreements (DPA)",
  "Sub-processor transparency list",
  "EEOC & bias-audit aligned assessments",
  "Annual third-party penetration testing",
  "Responsible disclosure & bug bounty",
];

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Testlify is SOC 2 Type II and ISO 27001 certified"
        announcementCta="View report"
      />

      {/* Hero */}
      <section className="px-7 pt-16 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[820px] mx-auto">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
            Security &amp; trust<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[62px] leading-[1.04] font-extrabold tracking-[-2px] m-0 text-ink max-[920px]:text-[42px] max-[920px]:tracking-[-1.4px]"
          >
            Enterprise-grade
            <br />
            security by default
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-body font-normal mt-[22px] mx-auto max-w-[600px]"
          >
            Your candidate data is some of the most sensitive you handle. Testlify protects it with the same standards trusted by banks, hospitals and governments.
          </Reveal>
          <Reveal
            delay={0.12}
            className="flex gap-4 justify-center flex-wrap mt-[34px]"
          >
            {BADGES.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center gap-2.5 bg-white border border-[#EFE2E3] rounded-[18px] py-[22px] px-7 min-w-[130px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(110,11,14,0.08)]"
              >
                <span className="w-[50px] h-[50px] rounded-full bg-[#FFF0F0] text-coral flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {b.icon}
                  </svg>
                </span>
                <span className="text-[13.5px] font-bold text-ink">{b.title}</span>
                <span className="text-[11.5px] text-faint">{b.sub}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Security at every layer */}
      <section id="security" className="px-7 pt-[84px] pb-[104px] bg-white max-[920px]:px-[22px] max-[920px]:pb-[72px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              How we protect you<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
            >
              Security at every layer
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {SECCARDS.map((c) => (
              <Reveal
                key={c.title}
                delay={c.delay}
                className="bg-white border border-[#EFE2E3] rounded-[20px] p-7 transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
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
                    {c.icon}
                  </svg>
                </span>
                <h3 className="text-[18px] leading-[1.25] font-bold tracking-[-0.4px] m-0 mb-2 text-ink">
                  {c.title}
                </h3>
                <p className="text-[14px] leading-[1.66] text-body">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & compliance */}
      <section className="px-7 py-[104px] bg-sand max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mx-auto mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              Privacy &amp; compliance<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
            >
              Built for global hiring
            </Reveal>
          </div>
          <Reveal
            as="ul"
            className="list-none m-0 p-0 grid grid-cols-2 gap-x-10 gap-y-4 max-[920px]:grid-cols-1"
          >
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] text-[#3A2C30] leading-[1.5]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-none mt-0.5 text-[#1FA463]"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Trust Center CTA */}
      <section className="px-7 py-[104px] bg-ink text-white text-center max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[720px] mx-auto">
          <Reveal as="h2" className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-white max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
            Need our security documentation?
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="text-[19px] leading-[1.6] font-normal text-white/[0.78] mt-[18px] mx-auto mb-[30px]"
          >
            Access our SOC 2 report, penetration test summary and DPA through the Testlify Trust Center.
          </Reveal>
          <Reveal
            delay={0.08}
            className="flex gap-3.5 justify-center flex-wrap"
          >
            <Link
              href={routes.trustCenter}
              className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] py-3.5 px-[26px] rounded-[13px] transition-all duration-[250ms] cursor-pointer bg-white text-[#C0242B]"
            >
              Visit Trust Center
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] py-3.5 px-[26px] rounded-[13px] transition-all duration-[250ms] cursor-pointer bg-white/[0.14] text-white border-[1.5px] border-white/40"
            >
              Contact security team
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
