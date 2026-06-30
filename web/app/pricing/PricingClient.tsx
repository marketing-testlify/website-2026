"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";

/* ---- data (verbatim from the prototype logic class) ---- */

type Tier = {
  credits: string;
  name: string;
  yr?: number;
  mo?: number;
  custom?: boolean;
  users: number;
  extra?: number;
};

const ANNUAL_TIERS: Tier[] = [
  { credits: "100", name: "Starter", yr: 1663, users: 3, extra: 21 },
  { credits: "300", name: "Basic", yr: 3343, users: 5, extra: 11 },
  { credits: "1,000", name: "Business", yr: 8383, users: 10, extra: 10 },
  { credits: "3,000+", name: "Premium", custom: true, users: 20 },
];

const MONTHLY_TIERS: Tier[] = [
  { credits: "10", name: "Starter", mo: 198, users: 3, extra: 20 },
  { credits: "30", name: "Basic", mo: 398, users: 3, extra: 14 },
  { credits: "100", name: "Business", mo: 998, users: 5, extra: 10 },
  { credits: "300", name: "Premium", custom: true, users: 10 },
  { credits: "1,000", name: "Enterprise", custom: true, users: 20 },
  { credits: "2,500", name: "Enterprise Plus", custom: true, users: 30 },
];

const fmt = (n: number) => "$" + n.toLocaleString();

/* ---- icons ---- */

const Tick = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-none mt-px text-[#9A8A8D] bg-white border-[1.5px] border-[#E2D6D7] rounded-full w-5 h-5 p-[3.5px] box-border"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const QMark = ({ ml = true }: { ml?: boolean }) => (
  <span
    className={`inline-flex items-center justify-center w-[15px] h-[15px] border-[1.3px] border-[#DACDCE] rounded-full text-faint text-[9.5px] font-bold ${
      ml ? "ml-1.5" : ""
    } align-middle`}
  >
    ?
  </span>
);

/* feature labels with optional dashed tip + question mark */
const FeatLi = ({
  children,
  tip = false,
  qmk = false,
}: {
  children: React.ReactNode;
  tip?: boolean;
  qmk?: boolean;
}) => (
  <li className="flex items-start gap-3 text-[14.5px] text-[#33282B] font-medium leading-[1.5]">
    <Tick />
    <span className="text-[14.5px] text-[#33282B] font-medium leading-[1.5]">
      <span className={tip ? "border-b border-dashed border-[#C9B9BC]" : ""}>
        {children}
      </span>
      {qmk && <QMark />}
    </span>
  </li>
);

const STANDARD_FEATURES_STATIC = [
  "Unlimited assessments",
  "3,000+ science-backed tests",
  "180k+ validated questions",
  "150+ interview templates",
  "25+ custom question types",
  "Custom tests and coding challenges",
];

const CUSTOM_FEATURES = [
  "100+ ATS integrations",
  "API access and webhooks",
  "Advanced proctoring",
  "ID verification and system checks",
  "Enterprise-grade security controls",
  "Regional data storage options",
  "Single Sign-On (SSO)",
  "Guaranteed uptime SLA",
  "Priority support SLAs",
  "Remove Testlify branding",
  "Custom domain support and SMTP setup",
  "Custom reporting and analytics",
  "Onboarding and team training program",
  "White label and reseller setup",
  "Dedicated customer success manager",
];

export default function PricingClient() {
  const [annual, setAnnual] = useState(true);
  const [tier, setTier] = useState(0);

  const tiers = annual ? ANNUAL_TIERS : MONTHLY_TIERS;
  const i = Math.min(tier, tiers.length - 1);
  const t = tiers[i];

  const vals = useMemo(() => {
    const credLbl = annual ? "Credits per year" : "Credits per month";
    const f1 = t.credits + " credits";
    const f2 = t.users + " users";
    const credNum = parseInt(t.credits.replace(/[^0-9]/g, ""), 10);

    let stdPrice: string,
      stdPer: string,
      stdCta: string,
      stdCtaPrimary: boolean,
      perCredit: string,
      billRight: string,
      f3: string;

    if (t.custom) {
      stdPrice = "Custom";
      stdPer = "";
      billRight = annual ? "Billed annually · contact sales" : "Contact sales";
      perCredit = "Volume-based per-credit pricing.";
      stdCta = "Contact sales";
      stdCtaPrimary = false;
      f3 = "Volume per-credit pricing";
    } else if (annual) {
      stdPrice = fmt(Math.round(t.yr! / 12));
      stdPer = "/mo";
      billRight = "Billed at " + fmt(t.yr!) + "/year";
      perCredit = "$" + Math.round(t.yr! / credNum) + " per candidate credit.";
      f3 = fmt(t.extra!) + " per additional credits";
      stdCta = "Start 7 days free trial";
      stdCtaPrimary = true;
    } else {
      stdPrice = fmt(t.mo!);
      stdPer = "/mo";
      billRight = "Billed monthly";
      perCredit = "$" + Math.round(t.mo! / credNum) + " per candidate credit.";
      f3 = fmt(t.extra!) + " per additional credits";
      stdCta = "Start 7 days free trial";
      stdCtaPrimary = true;
    }

    return {
      credLbl,
      planName: t.name,
      f1,
      f2,
      f3,
      stdPrice,
      stdPer,
      stdCta,
      stdCtaPrimary,
      perCredit,
      billRight,
    };
  }, [annual, t]);

  const tierOpts = tiers.map((x, idx) => ({
    value: String(idx),
    label: x.credits + " credits",
  }));

  const topCtaClass = vals.stdCtaPrimary
    ? "btn-sheen bg-[linear-gradient(95deg,#FF7A52,#F23F44_62%)] text-white shadow-[0_12px_26px_rgba(242,63,68,.30)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(242,63,68,.40)]"
    : "bg-white text-ink border-[1.5px] border-warm2 hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:shadow-[0_10px_24px_rgba(110,11,14,.08)]";

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="px-7 pt-16 pb-[26px] bg-[radial-gradient(1100px_540px_at_50%_-8%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff] text-center">
        <div className="max-w-[1000px] mx-auto">
          <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-3.5">
            Pricing<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[62px] leading-[1.04] font-extrabold tracking-[-2px] m-0 text-ink max-[920px]:text-[42px] max-[920px]:tracking-[-1.4px]"
          >
            Pay only for what you use
          </Reveal>
          <Reveal as="p" delay={0.06} className="text-[19px] leading-[1.6] text-body font-normal mt-5 mx-auto max-w-[760px]">
            No annual contract, no per-seat fees — you only spend a credit when a
            candidate actually starts an assessment, so every dollar maps to real
            screening, not applicants who drop off.
          </Reveal>
          <Reveal delay={0.08}>
            <div className="inline-flex items-center flex-nowrap whitespace-nowrap justify-center gap-2.5 bg-[#FFF1F0] border border-[#F8D6D5] rounded-full px-6 py-[11px] mt-[26px] text-[14px] text-body font-medium">
              <b className="text-ink font-bold mr-1">How credits work</b>
              <span className="font-light">Used only when a candidate starts an assessment</span>
              <span className="text-[#E69A9C] font-bold">•</span>
              <span className="font-light">One credit per candidate</span>
              <span className="text-[#E69A9C] font-bold">•</span>
              <span className="font-light">Credits reset each cycle</span>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-[30px]">
              <div className="inline-flex items-center gap-1 bg-[#F4ECE9] border border-[#EADFDB] rounded-full p-[5px]">
                <button
                  type="button"
                  onClick={() => {
                    setAnnual(false);
                    setTier(2);
                  }}
                  className={`border-none font-[inherit] text-[14.5px] font-semibold px-5 py-[9px] rounded-full cursor-pointer transition-all duration-200 inline-flex items-center gap-2 ${
                    annual ? "bg-transparent text-muted" : "bg-ink text-white shadow-[0_4px_12px_rgba(26,16,20,.20)]"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAnnual(true);
                    setTier(0);
                  }}
                  className={`border-none font-[inherit] text-[14.5px] font-semibold px-5 py-[9px] rounded-full cursor-pointer transition-all duration-200 inline-flex items-center gap-2 ${
                    annual ? "bg-ink text-white shadow-[0_4px_12px_rgba(26,16,20,.20)]" : "bg-transparent text-muted"
                  }`}
                >
                  Annual{" "}
                  <span className="bg-coral text-white text-[11px] font-bold tracking-[0.02em] px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.16}
            className="text-[30px] leading-[1.08] font-extrabold tracking-[-1px] m-0 mt-[46px] text-ink"
          >
            Trusted by 1,500+ hiring teams
          </Reveal>
          <Reveal as="p" delay={0.18} className="text-[14px] font-medium text-muted mt-2.5">
            5M+ candidates assessed · 100+ ATS integrations on every plan · 4.7 on G2
          </Reveal>
        </div>
      </section>

      {/* ===== PLAN CARDS ===== */}
      <section className="px-7 pt-[34px] pb-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.15fr_1fr] gap-6 items-stretch max-w-[1180px] mx-auto max-[920px]:grid-cols-1">
            {/* Standard (featured) */}
            <Reveal
              delay={0.02}
              className="pcard feat group relative flex flex-col bg-white border border-coral rounded-[24px] px-8 py-[34px] transition-all duration-[250ms] shadow-[0_28px_60px_rgba(242,63,68,.16)] hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(110,11,14,.10)] hover:border-[#F4D2D3]"
            >
              <div className="flex items-center gap-[13px] mb-3.5">
                <span className="picon flex-none w-[46px] h-[46px] rounded-[13px] flex items-center justify-center text-white bg-[linear-gradient(135deg,#FF7A52,#F23F44)] shadow-[0_8px_18px_rgba(242,63,68,.28)] transition-all duration-[350ms]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
                  </svg>
                </span>
                <p className="text-[19px] font-bold tracking-[-0.3px] m-0">Standard</p>
                <span className="ml-auto text-[11.5px] font-bold text-coral bg-[#FFF0F0] border border-[#F8CFD0] rounded-full px-[11px] py-[5px]">
                  Most popular
                </span>
              </div>
              <p className="text-[13.6px] text-muted leading-[1.5] mt-2 mb-3.5 min-h-[62px]">
                A credit plan that scales with your hiring. The more you assess, the
                less each credit costs.
              </p>

              <div className="flex items-start justify-between gap-5">
                <div className="flex flex-col min-w-0">
                  <p className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-[#A9999C] m-0 mb-[7px]">
                    {vals.planName} plan
                  </p>
                  <div className="flex items-baseline gap-[5px]">
                    <span className="text-[48px] font-extrabold tracking-[-2px] leading-none">
                      {vals.stdPrice}
                    </span>
                    <span className="text-[14px] text-muted font-medium">{vals.stdPer}</span>
                  </div>
                  <p className="text-[12.5px] text-[#A9999C] mt-2 mb-0">{vals.billRight}</p>
                </div>
                <div className="flex-none w-[215px]">
                  <p className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-[#A9999C] m-0 mb-[7px]">
                    {vals.credLbl}
                  </p>
                  <div className="relative m-0">
                    <select
                      value={String(i)}
                      onChange={(e) => setTier(parseInt(e.target.value, 10))}
                      className="appearance-none w-full font-[inherit] text-[14.5px] font-bold text-ink bg-[#FBF3EE] border border-[#F1E2DC] rounded-[13px] py-[13px] pl-4 pr-[42px] cursor-pointer focus:outline-none focus:border-[#F2B7B9] focus:shadow-[0_0_0_3px_rgba(242,63,68,.12)]"
                    >
                      {tierOpts.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none text-muted flex">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-[12.5px] text-[#A9999C] mt-2 mb-0">{vals.perCredit}</p>
                </div>
              </div>

              <a className={`btn-base w-full justify-center mt-[22px] ${topCtaClass}`} href="#">
                {vals.stdCta}
              </a>

              <div className="h-px bg-[#F1E6E7] mt-[22px] mb-[18px]" />
              <p className="text-[13.5px] font-bold text-ink m-0 mb-4">
                Testlify interview assessments:
              </p>
              <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                <FeatLi tip qmk>{vals.f1}</FeatLi>
                <FeatLi tip qmk>{vals.f2}</FeatLi>
                <FeatLi tip qmk>{vals.f3}</FeatLi>
                {STANDARD_FEATURES_STATIC.map((f) => (
                  <FeatLi key={f}>{f}</FeatLi>
                ))}
                <FeatLi qmk>Role-based job simulations</FeatLi>
                <FeatLi qmk>AI video, audio, and phone interviews</FeatLi>
                <FeatLi qmk>AI resume scoring</FeatLi>
                <FeatLi>Secure proctoring</FeatLi>
                <FeatLi qmk>Custom brand appearance</FeatLi>
                <FeatLi>Email and chat support</FeatLi>
                <li className="flex items-center text-[13.5px] font-bold text-ink mt-[18px] mb-4 pt-[18px] border-t border-[#F1E6E7]">
                  Add-ons:
                  <QMark />
                </li>
                <FeatLi qmk>Integrations</FeatLi>
                <FeatLi qmk>White label</FeatLi>
                <FeatLi>User seats</FeatLi>
                <FeatLi>Analytics</FeatLi>
              </ul>
              <div className="mt-auto h-[22px]" />
              <a className="btn-base w-full justify-center bg-white text-ink border-[1.5px] border-warm2 hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:shadow-[0_10px_24px_rgba(110,11,14,.08)]" href="#">
                {vals.stdCta}
              </a>
            </Reveal>

            {/* Custom */}
            <Reveal
              delay={0.08}
              className="pcard group relative flex flex-col bg-white border border-[#EFE2E3] rounded-[24px] px-8 py-[34px] transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(110,11,14,.10)] hover:border-[#F4D2D3]"
            >
              <div className="flex items-center gap-[13px] mb-3.5">
                <span className="picon flex-none w-[46px] h-[46px] rounded-[13px] flex items-center justify-center text-white bg-[linear-gradient(135deg,#FF7A52,#F23F44)] shadow-[0_8px_18px_rgba(242,63,68,.28)] transition-all duration-[350ms]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
                  </svg>
                </span>
                <p className="text-[19px] font-bold tracking-[-0.3px] m-0">Custom</p>
                <span className="ml-auto text-[11.5px] font-semibold text-muted bg-[#F5EFEC] border border-[#ECE0DB] rounded-full px-[11px] py-[5px]">
                  Built for you
                </span>
              </div>
              <p className="text-[13.6px] text-muted leading-[1.5] mt-2 mb-3.5 min-h-[62px]">
                For organizations assessing 25,000+ candidates a year that need
                custom workflows and compliance.
              </p>
              <div className="flex flex-col">
                <p className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-[#A9999C] m-0 mb-[7px]">
                  Custom plan
                </p>
                <div className="flex items-baseline gap-[5px]">
                  <span className="text-[48px] font-extrabold tracking-[-2px] leading-none">
                    Custom
                  </span>
                </div>
              </div>
              <p className="text-[12.5px] text-[#A9999C] mt-2 mb-0">
                Tailored pricing for your volume.
              </p>
              <a className="btn-base w-full justify-center mt-[22px] bg-white text-ink border-[1.5px] border-warm2 hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:shadow-[0_10px_24px_rgba(110,11,14,.08)]" href="#">
                Contact sales
              </a>
              <div className="h-px bg-[#F1E6E7] mt-[22px] mb-[18px]" />
              <p className="text-[13.5px] font-bold text-ink m-0 mb-4">
                Everything from plans, and:
              </p>
              <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                {CUSTOM_FEATURES.map((f) => (
                  <FeatLi key={f}>{f}</FeatLi>
                ))}
              </ul>
              <div className="mt-auto h-[22px]" />
              <a className="btn-base w-full justify-center bg-white text-ink border-[1.5px] border-warm2 hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:shadow-[0_10px_24px_rgba(110,11,14,.08)]" href="#">
                Contact sales
              </a>
            </Reveal>
          </div>

          <Reveal className="flex items-center justify-between gap-5 flex-wrap bg-white border border-[#EFE2E3] rounded-[18px] px-7 py-[22px] mt-[30px] text-[16px] font-semibold text-ink max-w-[1180px] mx-auto">
            <span>Looking for an unlimited credit plan? We&apos;ve got you covered.</span>
            <a className="btn-base bg-white text-ink border-[1.5px] border-warm2 hover:-translate-y-0.5 hover:border-[#F2B7B9] hover:shadow-[0_10px_24px_rgba(110,11,14,.08)]" href="#">
              Contact sales
            </a>
          </Reveal>
          <Reveal as="p" className="text-center text-[#A9999C] text-[13.5px] mt-[22px] max-w-[1180px] mx-auto">
            No credit card required · Cancel anytime · Base plan pricing locked for 24
            months · 25% off for non-profits with code TESTLIFYCARES25
          </Reveal>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="px-7 py-[104px] pt-[84px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              Compare plans<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
              Standard vs Custom, side by side
            </Reveal>
          </div>
          <Reveal className="overflow-x-auto">
            <table className="ctbl w-full border-collapse">
              <thead>
                <tr>
                  <th style={{ width: "42%" }} />
                  <th className="feat">Standard</th>
                  <th>Custom</th>
                </tr>
              </thead>
              <tbody>
                <GroupRow>Workspace</GroupRow>
                <Row label="Test library" std="3,000+" custom="3,000+" />
                <Row label="Tests & custom questions per assessment" std="Unlimited" custom="Unlimited" />
                <Row label="AI resume screening" std="Free" custom="Free" />
                <Row label="Multilingual support" std="15+ languages" custom="15+ languages" />
                <Row label="White labeling" std={<Tag>Add-on</Tag>} custom={<Chk>✓ Included</Chk>} />
                <Row label="100+ ATS integrations" std={<Tag>Add-on</Tag>} custom={<Chk>✓ Included</Chk>} />
                <Row label="SAML SSO & 2FA" std={<Tag>Add-on</Tag>} custom={<Chk>✓ Included</Chk>} />
                <Row label="Additional user seats" std="$15 / seat" custom={<Chk>✓ Included</Chk>} />

                <GroupRow>Interviews &amp; simulations</GroupRow>
                <Row label="One-way video & audio interviews" std={<Chk>✓</Chk>} custom={<Chk>✓</Chk>} />
                <Row label="Two-way video, audio & chat AI interviews" std={<Chk>✓</Chk>} custom={<Chk>✓</Chk>} />
                <Row label="MS Office & Google Workspace simulations" std={<Chk>✓</Chk>} custom={<Chk>✓</Chk>} />
                <Row label="Live coding & typing simulations" std={<Chk>✓</Chk>} custom={<Chk>✓</Chk>} />

                <GroupRow>Proctoring &amp; anti-cheat</GroupRow>
                <Row label="Tab tracking, face detection & AI-assist detection" std={<Chk>✓</Chk>} custom={<Chk>✓</Chk>} />
                <Row label="Photo ID verification" std="$0.50 / attempt" custom="$0.50 / attempt" />
                <Row label="Live video proctoring & screen recording" std="$5 / attempt" custom="$5 / attempt" />

                <GroupRow>Security &amp; compliance</GroupRow>
                <Row label="SOC 2 Type II · ISO 27001 · GDPR · CCPA" std={<Chk>✓</Chk>} custom={<Chk>✓</Chk>} />
                <Row label="Role-based access control" std={<Chk>✓</Chk>} custom={<Chk>✓</Chk>} />

                <GroupRow>Support</GroupRow>
                <Row label="Help center, chat, email & call support" std={<Chk>✓</Chk>} custom={<Chk>✓</Chk>} />
                <Row label="Personalized onboarding" std={<Dash>—</Dash>} custom={<Chk>✓</Chk>} />
                <Row label="Dedicated customer success manager" std={<Dash>—</Dash>} custom={<Chk>✓</Chk>} />
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* scoped styles: running conic border + button base + table */}
      <style>{`
        @property --bang{syntax:"<angle>";initial-value:0deg;inherits:false;}
        @keyframes runborder{to{--bang:360deg;}}
        .pcard::before{content:"";position:absolute;inset:0;border-radius:24px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;opacity:0;transition:opacity .35s ease;pointer-events:none;}
        .pcard:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
        .pcard:hover .picon{transform:translateY(-2px) scale(1.08) rotate(-3deg);box-shadow:0 14px 26px rgba(242,63,68,.4);}
        .btn-base{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;cursor:pointer;border:none;position:relative;overflow:hidden;}
        .ctbl th,.ctbl td{padding:15px 18px;text-align:center;border-bottom:1px solid #F1E6E7;font-size:14px;}
        .ctbl th{font-size:14.5px;font-weight:700;color:#1A1014;}
        .ctbl td:first-child,.ctbl th:first-child{text-align:left;color:#46383C;font-weight:500;}
        .ctbl thead th{padding-top:0;}
        .ctbl thead .feat{color:#F23F44;}
        .ctbl .grp td{background:#FBF3EE;font-weight:700;color:#8A4A2A;font-size:12px;letter-spacing:.08em;text-transform:uppercase;text-align:left;}
        .ctbl .feat{color:#1A1014;}
        @media(max-width:920px){.ctbl th,.ctbl td{padding:13px 12px;font-size:13px;}}
      `}</style>
    </>
  );
}

/* ---- table helpers ---- */

function GroupRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="grp">
      <td colSpan={3}>{children}</td>
    </tr>
  );
}

function Row({
  label,
  std,
  custom,
}: {
  label: React.ReactNode;
  std: React.ReactNode;
  custom: React.ReactNode;
}) {
  return (
    <tr>
      <td>{label}</td>
      <td className="feat">{std}</td>
      <td>{custom}</td>
    </tr>
  );
}

const Chk = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#1FA463]">{children}</span>
);
const Dash = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#C9B6B8]">{children}</span>
);
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[12px] text-[#B98A5A] font-semibold">{children}</span>
);
