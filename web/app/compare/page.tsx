import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Compare plans — find the plan that fits how you hire",
  description:
    "A detailed comparison of every Testlify plan — features, credits and limits side by side. All plans include a 7-day free trial, no credit card required.",
};

const FAQ_ITEMS = [
  {
    q: "How does Testlify's credit-based pricing work?",
    a: "You pick a plan by the number of credits and user seats you need. One credit is spent only when a candidate actually starts an assessment — so you pay for real usage, not seats.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade at any time; billing is prorated automatically so you only pay for what you use.",
  },
  {
    q: "Do credits roll over?",
    a: "Credits do not roll over and expire at the end of the billing cycle. If you expect lower usage, you can adjust your plan to match.",
  },
  {
    q: "Can I pay monthly or annually?",
    a: "Both. Every plan supports monthly or annual billing, and annual billing saves roughly 20% versus paying month to month.",
  },
  {
    q: "What add-ons are available?",
    a: "Integrations and white-label features, extra user seats ($15/seat/month), advanced analytics, and proctoring options like ID verification and live video proctoring.",
  },
  {
    q: "How can I pay?",
    a: "By credit or debit card on file, or by wire transfer. Additional candidate usage is billed monthly to the card on file.",
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
.cmproot .chk{color:#1F9D6B;font-weight:700;display:inline-flex;}
.cmproot .no{color:#C9B9BC;display:inline-flex;}
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

const Dash = () => (
  <span className="no">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      aria-hidden
    >
      <line x1="6" y1="12" x2="18" y2="12" />
    </svg>
  </span>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="tag">{children}</span>
);

type CellVal = React.ReactNode;

function FourRow({
  label,
  a,
  b,
  c,
  d,
}: {
  label: React.ReactNode;
  a: CellVal;
  b: CellVal;
  c: CellVal;
  d: CellVal;
}) {
  return (
    <tr>
      <td className="rowlabel">{label}</td>
      <td>{a}</td>
      <td>{b}</td>
      <td className="cell-hot">{c}</td>
      <td>{d}</td>
    </tr>
  );
}

function NoteRow({
  label,
  note,
}: {
  label: React.ReactNode;
  note: React.ReactNode;
}) {
  return (
    <tr>
      <td className="rowlabel">{label}</td>
      <td colSpan={4}>{note}</td>
    </tr>
  );
}

function GroupRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="grp">
      <td colSpan={5}>{children}</td>
    </tr>
  );
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
              Find the plan that fits
              <br />
              how you <span className="text-coral">hire.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={0.08}
              className="text-[19px] leading-[1.6] text-body mt-5 mx-auto max-w-[640px]"
            >
              A detailed comparison of every Testlify plan — features, credits
              and limits side by side — so you can choose the right fit for your
              team. All plans include a 7-day free trial, no credit card
              required.
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
                    <th style={{ minWidth: 230 }}>
                      <span className="mini">Billed annually · save ~20%</span>
                    </th>
                    <th>
                      <div className="pl-name">Starter</div>
                      <div className="pl-price">
                        $139<span className="pl-per">/mo</span>
                      </div>
                      <div className="pl-bill">$1,663 / year</div>
                      <Link className="pl-cta cta-ghost" href={routes.pricing}>
                        Start free trial
                      </Link>
                    </th>
                    <th>
                      <div className="pl-name">Basic</div>
                      <div className="pl-price">
                        $279<span className="pl-per">/mo</span>
                      </div>
                      <div className="pl-bill">$3,343 / year</div>
                      <Link className="pl-cta cta-ghost" href={routes.pricing}>
                        Start free trial
                      </Link>
                    </th>
                    <th className="cell-hot">
                      <div className="pl-name hot">
                        Business <Tag>Popular</Tag>
                      </div>
                      <div className="pl-price">
                        $699<span className="pl-per">/mo</span>
                      </div>
                      <div className="pl-bill">$8,383 / year</div>
                      <Link className="pl-cta cta-primary" href={routes.pricing}>
                        Start free trial
                      </Link>
                    </th>
                    <th>
                      <div className="pl-name">Premium</div>
                      <div className="pl-price">Custom</div>
                      <div className="pl-bill">Volume pricing</div>
                      <Link className="pl-cta cta-ghost" href={routes.contact}>
                        Contact sales
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <GroupRow>Plan basics</GroupRow>
                  <FourRow
                    label="Candidate credits / year"
                    a="100"
                    b="300"
                    c="1,000"
                    d="3,000+"
                  />
                  <FourRow
                    label="User seats included"
                    a="3"
                    b="5"
                    c="10"
                    d="20+"
                  />
                  <FourRow
                    label="Additional credit price"
                    a="$21"
                    b="$11"
                    c="$10"
                    d="Volume-based"
                  />
                  <NoteRow
                    label="Additional user seat"
                    note="$15 / seat / month on every plan"
                  />
                  <FourRow
                    label="Free trial"
                    a="7 days"
                    b="7 days"
                    c="7 days"
                    d="7 days"
                  />

                  <GroupRow>Assessments</GroupRow>
                  <FourRow
                    label="3,500+ test library"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="Unlimited assessments & questions"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="All 19 question types"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="Custom questions & tests"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="Role-based job simulations"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />

                  <GroupRow>Interviews & AI</GroupRow>
                  <FourRow
                    label="AI video, audio & chat interviews"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="AI resume screening"
                    a={<Dash />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <NoteRow
                    label="Phone interviews"
                    note="$0.18 / minute on every plan"
                  />

                  <GroupRow>Proctoring & anti-cheat</GroupRow>
                  <FourRow
                    label="Tab tracking, face & AI-assist detection"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <NoteRow
                    label="Photo ID verification"
                    note="$0.50 / attempt on every plan"
                  />
                  <NoteRow
                    label="Live video proctoring & screen recording"
                    note="$5 / attempt on every plan"
                  />

                  <GroupRow>Integrations & branding</GroupRow>
                  <FourRow
                    label="100+ ATS integrations"
                    a={<Tag>Add-on</Tag>}
                    b={<Tag>Add-on</Tag>}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="White-label & custom branding"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="API & webhooks"
                    a={<Dash />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />

                  <GroupRow>Security & support</GroupRow>
                  <FourRow
                    label="SOC 2 · ISO 27001 · GDPR · CCPA"
                    a={<Chk />}
                    b={<Chk />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="SAML SSO & 2FA"
                    a={<Tag>Add-on</Tag>}
                    b={<Tag>Add-on</Tag>}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="Regional data storage"
                    a={<Dash />}
                    b={<Dash />}
                    c={<Chk />}
                    d={<Chk />}
                  />
                  <FourRow
                    label="Support"
                    a="Email & chat"
                    b="Email & chat"
                    c="Priority"
                    d="Dedicated CSM"
                  />
                </tbody>
              </table>
            </Reveal>

            <Reveal className="text-center mt-[22px]">
              <p className="mini">
                Base plan pricing locked for 24 months · 25% off for non-profits
                with code TESTLIFYCARES25 ·{" "}
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
