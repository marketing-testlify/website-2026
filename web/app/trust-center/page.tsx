import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Trust center — security, data and privacy in one place",
  description:
    "Candidate data is some of the most sensitive you handle. See exactly how Testlify secures it, where it lives, and the rights every candidate keeps — SOC 2 Type II, ISO 27001, GDPR and CCPA.",
};

type IconNode = React.ReactNode;

const BADGES: { title: string; sub: string; icon: IconNode }[] = [
  {
    title: "SOC 2 Type II",
    sub: "Audited annually",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
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

const ICON_LOCK = (
  <>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </>
);
const ICON_CHECK_CIRCLE_A = (
  <>
    <path d="M20 6L9 17l-5-5" />
    <circle cx="12" cy="12" r="10" />
  </>
);
const ICON_UPTIME = (
  <>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </>
);
const ICON_CHECK_CIRCLE_B = (
  <>
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="10" />
  </>
);
const ICON_GLOBE = (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
  </>
);
const ICON_TRASH = (
  <>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </>
);
const ICON_USERS = (
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
  </>
);
const ICON_FILE = (
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </>
);

type Section = {
  eyebrow: string;
  heading: string;
  sub: React.ReactNode;
  sand?: boolean;
  cards: { title: string; body: string; icon: IconNode }[];
  checks: string[];
};

const SECTIONS: Section[] = [
  {
    eyebrow: "How we protect you",
    heading: "Security at every layer",
    sub: "Defense in depth, from the network edge to the database — audited by independent third parties every year.",
    cards: [
      {
        title: "Encryption everywhere",
        body: "Data is encrypted in transit with TLS 1.3 and at rest with AES-256. Keys are rotated and managed in a dedicated KMS.",
        icon: ICON_LOCK,
      },
      {
        title: "Access controls",
        body: "Role-based permissions, SSO/SAML, SCIM provisioning and full audit logs keep access tight and traceable.",
        icon: ICON_CHECK_CIRCLE_A,
      },
      {
        title: "Reliability & uptime",
        body: "99.9% uptime SLA, multi-region redundancy, automated backups and continuous monitoring with on-call response.",
        icon: ICON_UPTIME,
      },
    ],
    checks: [
      "Annual third-party penetration testing",
      "24/7 monitoring & anomaly detection",
      "Documented incident response plan",
      "Secure SDLC with mandatory code review",
      "Responsible disclosure & bug bounty",
      "Vendor & sub-processor security review",
    ],
  },
  {
    eyebrow: "Your data, your control",
    heading: "You own your candidate data",
    sub: (
      <>
        Testlify is the processor, never the owner. You decide where data lives,
        how long it&apos;s kept and when it&apos;s gone.
      </>
    ),
    sand: true,
    cards: [
      {
        title: "You own it, always",
        body: "Your candidate data belongs to you. We process it on your instructions and never sell or repurpose it.",
        icon: ICON_CHECK_CIRCLE_B,
      },
      {
        title: "Data residency",
        body: "Choose where candidate data is stored, with hosting regions in the EU and the US to meet local requirements.",
        icon: ICON_GLOBE,
      },
      {
        title: "Retention & deletion",
        body: "Set configurable retention windows and trigger permanent deletion on request or on schedule.",
        icon: ICON_TRASH,
      },
    ],
    checks: [
      "Automated, encrypted daily backups",
      "Multi-region redundancy & failover",
      "Logically isolated tenant data",
      "Export your data any time",
      "Published sub-processor list",
      "Data minimization by default",
    ],
  },
  {
    eyebrow: "Privacy by design",
    heading: "Every candidate keeps their rights",
    sub: (
      <>
        Compliance isn&apos;t a checkbox — it&apos;s built into how assessments
        are designed, delivered and stored.
      </>
    ),
    cards: [
      {
        title: "Global compliance",
        body: "GDPR, CCPA and EEOC-aligned by design, so you can hire across regions without compliance gaps.",
        icon: ICON_GLOBE,
      },
      {
        title: "Candidate rights",
        body: "Built-in workflows for access, portability and right-to-erasure requests keep every candidate in control.",
        icon: ICON_USERS,
      },
      {
        title: "Clear agreements",
        body: "Signed Data Processing Agreements and a transparent sub-processor list, ready for your legal team.",
        icon: ICON_FILE,
      },
    ],
    checks: [
      "Signed Data Processing Agreements (DPA)",
      "Explicit candidate consent capture",
      "Bias-audit aligned assessments",
      "Right-to-erasure & access workflows",
      "Transparent sub-processor disclosures",
      "Plain-language privacy policy",
    ],
  },
];

function CardIcon({ children }: { children: IconNode }) {
  return (
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
        {children}
      </svg>
    </span>
  );
}

function CheckMark() {
  return (
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
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Testlify is SOC 2 Type II and ISO 27001 certified"
        announcementCta="View report"
      />

      {/* Hero */}
      <section className="px-7 pt-16 pb-[30px] text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[840px] mx-auto">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
            Trust center<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[60px] leading-[1.04] font-extrabold tracking-[-2px] m-0 text-ink max-[920px]:text-[40px] max-[920px]:tracking-[-1.2px]"
          >
            Security, data and
            <br />
            privacy — in one place
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-body font-normal mt-[22px] mx-auto max-w-[620px]"
          >
            Candidate data is some of the most sensitive you handle. Here&apos;s
            exactly how Testlify secures it, where it lives, and the rights every
            candidate keeps.
          </Reveal>
          <Reveal delay={0.12} className="flex gap-3.5 justify-center flex-wrap mt-8">
            {BADGES.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center gap-[9px] bg-white border border-[#EFE2E3] rounded-2xl py-[18px] px-6 min-w-[118px] transition-[translate,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(110,11,14,0.08)]"
              >
                <span className="w-11 h-11 rounded-full bg-[#FFF0F0] text-coral flex items-center justify-center">
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
                    {b.icon}
                  </svg>
                </span>
                <span className="text-[13px] font-bold text-ink">{b.title}</span>
                <span className="text-[11px] text-[#A9999C]">{b.sub}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Trust pillars */}
      {SECTIONS.map((sec) => (
        <section
          key={sec.heading}
          className={`px-7 pt-[56px] pb-[88px] max-[920px]:px-[22px] max-[920px]:pb-16 ${
            sec.sand ? "bg-sand" : "bg-white"
          }`}
        >
          <div className="max-w-[1240px] mx-auto">
            <div className="max-w-[660px] mx-auto mb-[42px] text-center">
              <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
                {sec.eyebrow}
                <b className="text-coral font-semibold">.</b>
              </Reveal>
              <Reveal
                as="h2"
                delay={0.04}
                className="text-[38px] leading-[1.08] font-extrabold tracking-[-1.2px] m-0 text-ink max-[920px]:text-[30px] max-[920px]:tracking-[-0.8px]"
              >
                {sec.heading}
              </Reveal>
              <Reveal as="p" delay={0.08} className="text-[16px] leading-[1.62] text-body mt-3.5">
                {sec.sub}
              </Reveal>
            </div>
            <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
              {sec.cards.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 0.06}
                  className="bg-white border border-[#EFE2E3] rounded-[20px] p-7 transition-[translate,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
                >
                  <CardIcon>{c.icon}</CardIcon>
                  <h3 className="text-[18px] leading-[1.25] font-bold tracking-[-0.3px] m-0 mb-2 text-ink">
                    {c.title}
                  </h3>
                  <p className="text-[14px] leading-[1.62] text-body m-0">{c.body}</p>
                </Reveal>
              ))}
            </div>
            <Reveal
              as="ul"
              className="list-none mt-10 mb-0 p-0 grid grid-cols-2 gap-x-10 gap-y-4 max-w-[980px] mx-auto max-[920px]:grid-cols-1"
            >
              {sec.checks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#3A2C30] leading-[1.5]">
                  <CheckMark />
                  {item}
                </li>
              ))}
            </Reveal>
          </div>
        </section>
      ))}

      {/* Documentation CTA */}
      <section className="px-7 py-[88px] bg-ink text-white text-center max-[920px]:px-[22px] max-[920px]:py-16">
        <div className="max-w-[720px] mx-auto">
          <Reveal as="h2" className="text-[38px] leading-[1.08] font-extrabold tracking-[-1.2px] m-0 text-white max-[920px]:text-[30px] max-[920px]:tracking-[-0.8px]">
            Need our documentation?
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="text-[19px] leading-[1.6] font-normal text-white/[0.78] mt-[18px] mx-auto mb-[30px]"
          >
            Access our SOC 2 report, compliance certificates and DPA, or reach the
            security team directly.
          </Reveal>
          <Reveal delay={0.08} className="flex gap-3.5 justify-center flex-wrap">
            <Link
              href={routes.compliance}
              className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] py-3.5 px-[26px] rounded-[13px] transition-[translate,box-shadow] duration-[250ms] bg-white text-[#C0242B]"
            >
              View compliances
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
            <Link
              href={routes.contact}
              className="inline-flex items-center gap-[9px] font-semibold text-[15.5px] py-3.5 px-[26px] rounded-[13px] transition-[translate,box-shadow] duration-[250ms] bg-white/[0.14] text-white border-[1.5px] border-white/40"
            >
              Contact security team
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
