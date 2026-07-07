import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SecuritySection from "@/components/SecuritySection";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Compliance — prove it, not just promise it",
  description:
    "Every framework recruiters and legal teams ask about — SOC 2 Type II, ISO 27001, GDPR, CCPA, the EU–US Data Privacy Framework and EEOC-defensible assessments. Audited, certified and documented.",
};

type IconNode = React.ReactNode;

const ICON_SHIELD_CHECK = (
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </>
);
const ICON_MEDAL = (
  <>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </>
);
const ICON_GLOBE = (
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
  </>
);
const ICON_LOCK = (
  <>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </>
);
const ICON_EYE = (
  <>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </>
);
const ICON_SLIDERS = (
  <>
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
    <circle cx="8" cy="6" r="1.6" fill="currentColor" />
    <circle cx="16" cy="12" r="1.6" fill="currentColor" />
    <circle cx="10" cy="18" r="1.6" fill="currentColor" />
  </>
);

const CERTS: { name: string; tag: string; body: string; icon: IconNode }[] = [
  {
    name: "SOC 2 Type II",
    tag: "Audited annually",
    body: "An independent auditor evaluates our controls for security, availability and confidentiality over a continuous observation window — not a single point in time.",
    icon: ICON_SHIELD_CHECK,
  },
  {
    name: "ISO 27001",
    tag: "Certified",
    body: "Our information security management system (ISMS) is certified to the international standard for managing and continually improving security risk.",
    icon: ICON_MEDAL,
  },
  {
    name: "GDPR",
    tag: "Compliant",
    body: "Signed DPAs, EU Standard Contractual Clauses, lawful bases for processing and full candidate rights — access, portability and erasure — built into the product.",
    icon: ICON_GLOBE,
  },
  {
    name: "CCPA",
    tag: "Compliant",
    body: "California residents can exercise their rights to know, delete and opt out. We never sell personal information and honor consumer requests within statutory timelines.",
    icon: ICON_LOCK,
  },
  {
    name: "EU–US Data Privacy Framework",
    tag: "Self-certified",
    body: "A lawful, recognized mechanism for transferring personal data from the EU, UK and Switzerland to the United States, backed by enforceable commitments.",
    icon: ICON_EYE,
  },
  {
    name: "EEOC-defensible",
    tag: "Validated",
    body: "Assessments are validated to measure job-relevant skills and reduce adverse impact — giving your hiring decisions a defensible, audit-ready basis.",
    icon: ICON_SLIDERS,
  },
];

const PANELS: { title: string; body: string; icon: IconNode }[] = [
  {
    title: "Data privacy & residency",
    body: "Choose where candidate data lives with EU and US residency options. Signed DPAs, a transparent sub-processor list and configurable retention keep processing lawful across every region you hire in.",
    icon: ICON_GLOBE,
  },
  {
    title: "Fair, bias-audited assessments",
    body: "Assessments are validated for job relevance and reviewed for adverse impact, aligning with EEOC guidance. Standardized scoring gives every candidate the same, defensible evaluation.",
    icon: ICON_SLIDERS,
  },
];

const COMMITMENTS = [
  "Signed Data Processing Agreements (DPA)",
  "EU Standard Contractual Clauses",
  "EU & US data residency options",
  "Candidate right-to-erasure workflows",
  "Configurable data retention policies",
  "Transparent sub-processor list",
  "Immutable audit log of data access",
  "Annual third-party penetration testing",
];

const TABS: { label: string; href?: string }[] = [
  { label: "Compliances" },
  { label: "Security", href: routes.trustCenter },
  { label: "Data management", href: routes.trustCenter },
  { label: "Data requests", href: routes.trustCenter },
  { label: "Privacy", href: routes.trustCenter },
];

function CertIcon({ children, size }: { children: IconNode; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
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
        announcementCta="View trust center"
      />

      {/* Hero */}
      <section className="px-7 pt-14 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-12%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[860px] mx-auto">
          <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
            Trust center · Compliances<b className="text-coral font-bold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[56px] leading-[1.05] font-extrabold tracking-[-1.6px] m-0 text-ink max-[920px]:text-[40px] max-[920px]:tracking-[-1.2px]"
          >
            Compliance you can prove,
            <br />
            not just promise
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-body font-normal mt-[22px] mx-auto max-w-[640px]"
          >
            Every framework recruiters and legal teams ask about — audited,
            certified and documented. Candidate data handled to the standards
            trusted by banks, hospitals and governments.
          </Reveal>
          <Reveal delay={0.12} className="flex gap-2 justify-center flex-wrap mt-[34px]">
            {TABS.map((t) =>
              t.href ? (
                <Link
                  key={t.label}
                  href={t.href}
                  className="inline-flex items-center gap-[7px] text-[13.5px] font-semibold py-[9px] px-4 rounded-full border border-warm text-body2 bg-white transition-[border-color,color,box-shadow,translate] duration-200 hover:border-[#FBD0D1] hover:text-ink hover:-translate-y-px hover:shadow-[0_8px_18px_rgba(110,11,14,0.08)]"
                >
                  {t.label}
                </Link>
              ) : (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-[7px] text-[13.5px] font-semibold py-[9px] px-4 rounded-full bg-coral border border-coral text-white shadow-[0_10px_22px_rgba(242,63,68,0.28)]"
                >
                  {t.label}
                </span>
              )
            )}
          </Reveal>
        </div>
      </section>

      {/* Certifications & frameworks */}
      <section className="px-7 py-24 bg-sand max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[660px] mx-auto mb-[46px] text-center">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
              Certifications &amp; frameworks<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[40px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 text-ink max-[920px]:text-[30px] max-[920px]:tracking-[-0.9px]"
            >
              Independently verified
            </Reveal>
            <Reveal as="p" delay={0.08} className="text-[15.5px] leading-[1.64] text-body mt-4 mx-auto max-w-[560px]">
              Not self-attested. Each certification below is audited by an
              accredited third party and renewed on a fixed cadence.
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {CERTS.map((c, i) => (
              <Reveal
                key={c.name}
                delay={(i % 3) * 0.05}
                className="relative bg-white border border-[#F2E6E7] rounded-[20px] p-7 transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_40px_rgba(110,11,14,0.10)]"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="w-[52px] h-[52px] flex-none rounded-[14px] bg-[#FFF0F0] text-coral flex items-center justify-center">
                    <CertIcon size={26}>{c.icon}</CertIcon>
                  </span>
                  <div>
                    <h3 className="text-[18px] font-extrabold tracking-[-0.3px] text-ink m-0">
                      {c.name}
                    </h3>
                    <div className="text-[11.5px] font-bold tracking-[0.05em] uppercase text-[#1FA463] mt-[3px] flex items-center gap-[5px]">
                      <span className="w-[7px] h-[7px] rounded-full bg-[#1FA463] flex-none" />
                      {c.tag}
                    </div>
                  </div>
                </div>
                <p className="text-[15.5px] leading-[1.64] text-body m-0">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Certified & recognized"
        heading="The standards your legal team asks for"
        sub="Every badge below is backed by an independent audit or a formal compliance program — verifiable on request."
      />

      {/* Regional & regulatory */}
      <section className="px-7 py-24 bg-sand max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[660px] mx-auto mb-[46px] text-center">
            <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
              Regional &amp; regulatory<b className="text-coral font-bold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[40px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 text-ink max-[920px]:text-[30px] max-[920px]:tracking-[-0.9px]"
            >
              Built for global, defensible hiring
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-[22px] mb-6 max-[920px]:grid-cols-1">
            {PANELS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className="bg-white border border-[#F2E6E7] rounded-[20px] py-[30px] px-8 transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_40px_rgba(110,11,14,0.10)]"
              >
                <span className="w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center mb-[18px]">
                  <CertIcon size={22}>{p.icon}</CertIcon>
                </span>
                <h3 className="text-[18px] font-extrabold tracking-[-0.3px] text-ink m-0 mb-2.5">
                  {p.title}
                </h3>
                <p className="text-[15.5px] leading-[1.64] text-body m-0">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal
            delay={0.1}
            className="bg-white border border-[#F2E6E7] rounded-[20px] py-[30px] px-8 transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_18px_40px_rgba(110,11,14,0.10)]"
          >
            <h3 className="text-[18px] font-extrabold tracking-[-0.3px] text-ink m-0 mb-[22px]">
              What we commit to
            </h3>
            <ul className="list-none m-0 p-0 grid grid-cols-2 gap-x-10 gap-y-4 max-[920px]:grid-cols-1">
              {COMMITMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#3A2C30] leading-[1.5]">
                  <CheckMark />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="px-7 py-24 bg-ink text-white text-center max-[920px]:px-[22px] max-[920px]:py-[72px]">
        <div className="max-w-[720px] mx-auto">
          <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-faint2 m-0 mb-[18px]">
            Documentation<b className="text-coral font-bold">.</b>
          </Reveal>
          <Reveal as="h2" delay={0.04} className="text-[40px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 text-white max-[920px]:text-[30px] max-[920px]:tracking-[-0.9px]">
            Need our compliance reports?
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] font-normal text-white/[0.78] mt-[18px] mx-auto mb-1"
          >
            Access our SOC 2 report, ISO certificate, penetration-test summary and
            signed DPA through the Testlify Trust Center.
          </Reveal>
          <Reveal delay={0.12} className="flex gap-3.5 justify-center flex-wrap mt-[30px]">
            <CtaButton label="Visit Trust Center" href={routes.trustCenter} variant="light" size="md" icon="arrow" />
            <CtaButton label="Contact security team" href={routes.contact} variant="outline-light" size="md" icon="none" />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
