import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Compare plans — find a perfect plan that suits your need",
  description:
    "Go through the detailed plan comparison to find the perfect fit for your organization's talent assessment needs. All plans include a 7-day free trial, no credit card required.",
};

const FAQ_ITEMS = [
  {
    q: "What is Testlify's pricing model?",
    a: "Testlify offers a fixed monthly subscription model for its pricing. You can choose between yearly or monthly billing.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, Testlify provides a 7-day free trial for users to explore and experience the platform. No credit card is required during the trial period.",
  },
  {
    q: "Can I upgrade or downgrade my subscription plan?",
    a: "Yes, you can upgrade or downgrade your subscription plan at any time based on your changing needs. Testlify offers flexibility in adjusting your plan according to your requirements.",
  },
  {
    q: "Can I pay monthly or yearly?",
    a: "Yes, you can pay both monthly or annually for all the available plans.",
  },
  {
    q: "Does Testlify offer customer support for pricing-related queries?",
    a: "Yes, Testlify provides customer support to address any pricing-related queries or concerns you may have. You can reach out to our support team for assistance.",
  },
  {
    q: "What is the usage policy for unlimited candidate invites?",
    a: "Testlify's usage policy for unlimited candidate invites includes 1,000 invitations for the monthly plan and 10,000 invitations for the annual plan as part of the fair platform usage policy. Thereafter, every additional invite would cost $1.",
  },
];

const SCOPED_CSS = `
.cmproot .cmp-wrap{overflow-x:auto;border:1px solid #F0E2E3;border-radius:20px;background:#fff;box-shadow:0 30px 70px rgba(110,11,14,.10);}
.cmproot table.cmp{border-collapse:collapse;width:100%;min-width:900px;}
.cmproot table.cmp th,.cmproot table.cmp td{text-align:left;padding:16px 20px;font-size:14px;border-bottom:1px solid #F4ECEC;}
.cmproot table.cmp thead th{position:sticky;top:0;background:#fff;z-index:2;vertical-align:bottom;border-bottom:2px solid #F0E2E3;}
.cmproot .pl-name{font-size:17px;font-weight:800;color:#1A1014;letter-spacing:-.4px;}
.cmproot .pl-name.hot{color:#F23F44;}
.cmproot .pl-price{font-size:24px;font-weight:800;letter-spacing:-.8px;margin-top:6px;}
.cmproot .pl-per{font-size:12.5px;color:#8A7A7D;font-weight:500;}
.cmproot .pl-bill{font-size:11.5px;color:#A9999C;margin-top:2px;}
.cmproot .pl-cta{display:inline-block;margin-top:14px;font-size:13px;font-weight:700;padding:9px 16px;border-radius:11px;transition:transform .2s cubic-bezier(.2,.7,.3,1),box-shadow .25s ease,border-color .2s ease;}
.cmproot .cta-primary{background:#F23F44;color:#fff;box-shadow:0 10px 22px rgba(242,63,68,.28);}
.cmproot .cta-primary:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(242,63,68,.42);}
.cmproot .cta-ghost{border:1.5px solid #E7D3D4;color:#1A1014;}
.cmproot .cta-ghost:hover{transform:translateY(-2px);border-color:#F23F44;color:#F23F44;box-shadow:0 10px 22px rgba(110,11,14,.08);}
.cmproot table.cmp tbody tr:hover td{background:#FFF6F5;}
.cmproot table.cmp tbody tr:hover td.rowlabel{background:#FBEFEF;}
.cmproot table.cmp tbody tr:hover td.cell-hot{background:#FFE7E4;}
.cmproot table.cmp tbody tr.grp:hover td{background:#1A1014;}
.cmproot td.rowlabel{font-weight:600;color:#2A1A1D;background:#FDFAF8;}
.cmproot tr.grp td{background:#1A1014;color:#fff;font-weight:700;font-size:12px;letter-spacing:.08em;text-transform:uppercase;}
.cmproot .chk{color:#1F9D6B;font-weight:700;display:inline-flex;align-items:center;}
.cmproot .no{color:#C9B9BC;display:inline-flex;align-items:center;}
.cmproot .cell-hot{background:#FFF8F8;}
.cmproot .mini{font-size:12px;color:#8A7A7D;}
.cmproot .tag{display:inline-block;font-size:10.5px;font-weight:700;letter-spacing:.04em;padding:3px 8px;border-radius:99px;background:#FFF4E6;color:#C7791B;}
`;

const Chk = () => (
  <span className="chk">
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

const Included = () => <span className="chk">Included</span>;

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="tag">{children}</span>
);

type CellVal = React.ReactNode;

/** Standard row: Features label + Standard cell + highlighted Custom cell. */
function Row({
  label,
  std,
  custom,
  stdClassName,
}: {
  label: React.ReactNode;
  std: CellVal;
  custom: CellVal;
  stdClassName?: string;
}) {
  return (
    <tr>
      <td className="rowlabel">{label}</td>
      <td className={stdClassName}>{std}</td>
      <td className="cell-hot">{custom}</td>
    </tr>
  );
}

/** Price row: label + a single note cell spanning both plan columns. */
function PriceRow({
  label,
  note,
}: {
  label: React.ReactNode;
  note: React.ReactNode;
}) {
  return (
    <tr>
      <td className="rowlabel">{label}</td>
      <td colSpan={2}>{note}</td>
    </tr>
  );
}

function GroupRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="grp">
      <td colSpan={3}>{children}</td>
    </tr>
  );
}

/** All-checkmark row (both plans). */
function CheckRow({ label }: { label: React.ReactNode }) {
  return <Row label={label} std={<Chk />} custom={<Chk />} />;
}

/** Add-on (Standard) vs Included (Custom) row. */
function AddonRow({ label }: { label: React.ReactNode }) {
  return <Row label={label} std={<Tag>Add-on</Tag>} custom={<Included />} />;
}

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SCOPED_CSS }} />
      <SiteHeader
        announcement="Pay less per credit as your hiring volume grows — compare every plan."
        announcementCta="See pricing"
      />

      <div className="cmproot">
        {/* Hero */}
        <section className="pt-[72px] pb-10 px-7 text-center bg-[radial-gradient(1000px_480px_at_50%_0%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff] max-[960px]:pt-11 max-[960px]:pb-[30px] max-[960px]:px-[22px]">
          <div className="max-w-[860px] mx-auto">
            <Reveal
              as="p"
              className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-4"
            >
              Compare plans<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h1"
              delay={0.04}
              className="text-[52px] leading-[1.06] font-extrabold tracking-[-1.8px] m-0 text-ink max-[960px]:text-[38px] max-[960px]:tracking-[-1.2px]"
            >
              Compare and find a perfect
              <br />
              plan that <span className="text-coral">suits your need.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={0.08}
              className="text-[19px] leading-[1.6] text-body mt-5 mx-auto max-w-[660px]"
            >
              Go through the detailed plan comparison to find the perfect fit for
              your organization&apos;s talent assessment needs. Discover key features,
              pricing structures, and benefits to make an informed decision in
              unleashing your team&apos;s full potential.
            </Reveal>
            <Reveal delay={0.12}>
              <Link
                className="pl-cta cta-primary"
                style={{ marginTop: 24, fontSize: 15, padding: "14px 28px" }}
                href={routes.pricing}
              >
                View plans
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Comparison table */}
        <section className="pt-0 pb-20 px-7 max-[960px]:pb-[60px] max-[960px]:px-[22px]">
          <div className="max-w-[1240px] mx-auto">
            <Reveal className="cmp-wrap">
              <table className="cmp">
                <thead>
                  <tr>
                    <th style={{ minWidth: 340 }}>
                      <span className="mini">Features</span>
                    </th>
                    <th>
                      <div className="pl-name">Standard Plan</div>
                      <div className="pl-bill">
                        Everything you need to start hiring on skills
                      </div>
                      <Link className="pl-cta cta-ghost" href={routes.pricing}>
                        View plans
                      </Link>
                    </th>
                    <th className="cell-hot">
                      <div className="pl-name hot">Custom Plan</div>
                      <div className="pl-bill">
                        Tailored for scale, security &amp; compliance
                      </div>
                      <Link className="pl-cta cta-primary" href={routes.contact}>
                        Contact sales
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <GroupRow>Workspace features</GroupRow>
                  <Row label="Test library" std="3,500+" custom="3,500+" />
                  <Row
                    label="Tests per assessment"
                    std="Unlimited"
                    custom="Unlimited"
                  />
                  <Row label="AI resume screening" std="Free" custom="Free" />
                  <Row
                    label="Custom questions per assessment"
                    std="Unlimited"
                    custom="Unlimited"
                  />
                  <CheckRow label="Qualifying questions" />
                  <CheckRow label="Test recommendations based on job roles" />
                  <CheckRow label="Assessment templates based on job role" />
                  <CheckRow label="Build your own tests from scratch" />
                  <CheckRow label="Customize invitation and rejection emails" />
                  <Row label="Multilingual support" std="16+" custom="16+" />
                  <AddonRow label="White labeling" />
                  <AddonRow label="100+ ATS integrations" />
                  <AddonRow label="Additional user seats" />
                  <AddonRow label="SAML SSO & 2FA" />

                  <GroupRow>Testlify assessments</GroupRow>
                  <CheckRow label="Role-specific skill tests" />
                  <CheckRow label="Software skills tests" />
                  <CheckRow label="Programming skills tests" />
                  <CheckRow label="Situational judgment tests (SJTs)" />
                  <CheckRow label="Cognitive ability tests" />
                  <CheckRow label="Language proficiency tests" />
                  <CheckRow label="Engineering skills tests" />
                  <CheckRow label="Blue-collar tests" />
                  <CheckRow label="Personality & culture tests" />
                  <CheckRow label="Typing tests" />

                  <GroupRow>Testlify interviews</GroupRow>
                  <CheckRow label="One-way video interviews" />
                  <CheckRow label="One-way audio interviews" />
                  <CheckRow label="Two-way video interviews (Video AI)" />
                  <CheckRow label="Two-way audio interviews (Audio AI)" />
                  <CheckRow label="Two-way chat interviews (Chat AI)" />

                  <GroupRow>Testlify simulations</GroupRow>
                  <CheckRow label="MS Office (Excel, Word, PowerPoint)" />
                  <CheckRow label="Google Workspace (Sheets, Docs, Slides)" />
                  <CheckRow label="Live coding platform" />
                  <CheckRow label="Typing simulations" />
                  <CheckRow label="Conversational AI interviews" />

                  <GroupRow>Anti-cheating &amp; proctoring</GroupRow>
                  <CheckRow label="Full-screen mode" />
                  <CheckRow label="Live environment check" />
                  <CheckRow label="Mouse out tracking" />
                  <CheckRow label="Restrict multiple monitors" />
                  <CheckRow label="Session recording" />
                  <CheckRow label="Snapshot proctoring" />
                  <CheckRow label="Tab proctoring" />
                  <CheckRow label="Internet speed enforcement check" />
                  <CheckRow label="Face detection" />
                  <CheckRow label="Talking prohibition detection" />
                  <CheckRow label="AI assistance detection" />
                  <CheckRow label="Copy/paste tracking" />
                  <CheckRow label="Question-level activity logs" />
                  <CheckRow label="Focus Guard (Anti-Cheat Mode)" />
                  <CheckRow label="IP proctoring" />
                  <PriceRow
                    label="System requirement check"
                    note="$0.25 per system check"
                  />
                  <PriceRow
                    label="Photo ID verification"
                    note="$0.50 per attempt"
                  />
                  <PriceRow
                    label="Live video proctoring & screen recording"
                    note="$5 per attempt"
                  />

                  <GroupRow>White label</GroupRow>
                  <AddonRow label="Hide Testlify branding" />
                  <AddonRow label="Set up your SMTP" />
                  <AddonRow label="Use your custom domain" />
                  <AddonRow label="Custom support email and links" />

                  <GroupRow>Integrations</GroupRow>
                  <AddonRow label="API access" />
                  <AddonRow label="100+ ATS integrations" />
                  <AddonRow label="Webhooks" />

                  <GroupRow>Security, privacy &amp; compliance</GroupRow>
                  <CheckRow label="ISO 27001" />
                  <CheckRow label="SOC 2 Type II" />
                  <CheckRow label="GDPR compliant" />
                  <CheckRow label="CCPA compliant" />
                  <CheckRow label="Role-based access control" />

                  <GroupRow>Reporting &amp; analytics</GroupRow>
                  <CheckRow label="CSV and PDF downloads" />
                  <CheckRow label="Automated scoring" />
                  <CheckRow label="Global benchmarking" />
                  <CheckRow label="Assessment-level benchmarking" />
                  <CheckRow label="Shareable public link for candidate reports" />

                  <GroupRow>Customer support</GroupRow>
                  <CheckRow label="Help center" />
                  <CheckRow label="Chat support" />
                  <CheckRow label="Email support" />
                  <CheckRow label="Call support" />
                  <Row
                    label="Personalized onboarding"
                    std="Business & Premium only"
                    stdClassName="mini"
                    custom={<Chk />}
                  />
                  <Row
                    label="Dedicated customer success manager"
                    std="Business & Premium only"
                    stdClassName="mini"
                    custom={<Chk />}
                  />
                </tbody>
              </table>
            </Reveal>

            <Reveal className="text-center mt-[22px]">
              <p className="mini">
                All plans include a 7-day free trial — no credit card required ·{" "}
                <Link
                  href={routes.pricing}
                  className="text-coral font-semibold"
                >
                  See full pricing →
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Unlimited plan CTA (distinct from footer CTA) */}
        <section className="py-20 px-7 bg-sand max-[960px]:py-[60px] max-[960px]:px-[22px]">
          <div className="max-w-[1240px] mx-auto">
            <Reveal className="max-w-[900px] mx-auto flex flex-wrap gap-5 items-center justify-between bg-ink rounded-3xl px-11 py-10">
              <div className="max-w-[520px]">
                <h2 className="text-[28px] leading-[1.1] font-extrabold tracking-[-1.2px] text-white m-0">
                  Looking for an unlimited credit plan?
                </h2>
                <p className="text-[16px] leading-[1.66] text-[#C2B1B4] mt-3 mb-0">
                  For high-volume hiring, our unlimited plan gives you full
                  platform access with no per-credit limits. Talk to sales for a
                  custom quote.
                </p>
              </div>
              <Link
                className="pl-cta cta-primary"
                style={{ fontSize: 15, padding: "14px 26px" }}
                href={routes.contact}
              >
                Contact sales →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-7 max-[960px]:py-[60px] max-[960px]:px-[22px]">
          <div className="max-w-[840px] mx-auto">
            <div className="text-center mb-11">
              <Reveal
                as="p"
                className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-4"
              >
                FAQ<b className="text-coral font-semibold">.</b>
              </Reveal>
              <Reveal
                as="h2"
                delay={0.04}
                className="text-[38px] leading-[1.1] font-extrabold tracking-[-1.2px] m-0 text-ink max-[960px]:text-[28px]"
              >
                Pricing questions, answered
              </Reveal>
            </div>
            <Reveal>
              <FAQ items={FAQ_ITEMS} />
            </Reveal>
          </div>
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
