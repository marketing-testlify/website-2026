import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SecuritySection from "@/components/SecuritySection";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — pay only for what you use",
  description:
    "No annual contract, no per-seat fees. You only spend a credit when a candidate actually starts an assessment, so every dollar maps to real screening.",
};

const FAQ_ITEMS = [
  {
    q: "How does Testlify's pricing work?",
    a: "Testlify uses flexible credit-based and unlimited plans. You pick a plan by the number of credits and user seats you need. A credit is only spent when a qualified candidate starts an assessment — one credit per candidate. Need more features like ATS integrations or white-labeling? Reach out to sales for a custom plan.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes — every plan starts with a 7-day free trial so you can explore the full platform. No credit card is required during the trial period.",
  },
  {
    q: "Will my pricing change after I sign up?",
    a: "No. Your base plan pricing is locked for 24 months from your original purchase date, with no changes during this period. After 24 months your plan transitions to the then-current pricing unless agreed otherwise. New add-ons, features, upgrades or additional usage are billed at the applicable rates at the time.",
  },
  {
    q: "What happens if I don't use all my credits?",
    a: "Credits do not roll over and expire at the end of the billing cycle. If you expect lower usage going forward, you can adjust your plan to better match your needs — or buy additional credits any time if you run out.",
  },
  {
    q: "Can I pay monthly or yearly?",
    a: "Yes — you can pay monthly or annually on every available plan. Annual billing saves you roughly 20% versus paying month to month.",
  },
  {
    q: "How can I pay?",
    a: "You can pay directly via credit or debit card by adding your card on file. Wire transfer is also available as a payment option. Additional candidate usage is billed monthly to the card on file.",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="New · Pay less per credit as your hiring volume grows"
        announcementCta="Talk to sales"
      />

      {/* Interactive hero + plan cards + comparison table */}
      <PricingClient />

      {/* Guarantee */}
      <section className="px-7 py-[74px] bg-sand">
        <div className="max-w-[1240px] mx-auto px-0">
          <Reveal className="relative max-w-[1180px] mx-auto">
            <div
              className="absolute inset-x-[-12px] inset-y-[-56px] pointer-events-none overflow-hidden z-0"
              aria-hidden="true"
            >
              <span className="absolute rounded-full w-[360px] h-[360px] left-[-70px] top-[-50px] bg-[radial-gradient(circle,rgba(242,63,68,.13),transparent_68%)] [animation:gxfloat_14s_ease-in-out_infinite]" />
              <span className="absolute rounded-full w-[320px] h-[320px] right-[1%] bottom-[-90px] bg-[radial-gradient(circle,rgba(255,122,82,.14),transparent_70%)] [animation:gxfloat2_17s_ease-in-out_infinite]" />
              <span className="gx-rings absolute right-[6%] top-1/2 w-[380px] h-[380px] mt-[-190px] rounded-full border-[1.6px] border-dashed border-[rgba(242,63,68,.15)] [animation:gxspin_75s_linear_infinite]" />
            </div>
            <div className="relative z-[1] flex items-center gap-10 px-1.5 py-2 max-[920px]:flex-col-reverse max-[920px]:items-start max-[920px]:gap-6">
              <div className="flex-1">
                <span className="inline-flex items-center gap-[7px] text-[11.5px] font-bold tracking-[0.1em] uppercase text-coral bg-[#FFF0F0] border border-[#FBD0D1] px-[13px] py-1.5 rounded-full mb-4">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Risk-free
                </span>
                <h2 className="text-[31px] font-extrabold tracking-[-1px] m-0 text-ink leading-[1.06]">
                  Try Testlify risk-free for 30 days
                </h2>
                <p className="text-[16px] leading-[1.62] text-body mt-3.5 max-w-[560px]">
                  Run real assessments, shortlist real candidates, and see the
                  hiring-quality difference for yourself. If Testlify isn&apos;t
                  right for your team, we&apos;ll refund your first 30 days in full.
                </p>
                <p className="mt-[18px] text-[14.5px] font-semibold text-ink">
                  No questions asked. Cancel anytime.
                </p>
              </div>
              <div className="flex-none w-[158px] h-[158px] rounded-full bg-[radial-gradient(circle_at_50%_32%,#F76A6E,#C0242B)] text-white flex flex-col items-center justify-center shadow-[0_22px_46px_rgba(192,36,43,.34)] relative before:content-[''] before:absolute before:inset-[9px] before:rounded-full before:border-2 before:border-dashed before:border-[rgba(255,255,255,.5)]">
                <b className="text-[52px] font-extrabold leading-[.9] tracking-[-2.5px]">30</b>
                <span className="text-[13px] font-bold tracking-[0.22em] mt-0.5">DAYS</span>
                <i className="not-italic text-[11px] font-semibold opacity-[.88] mt-[5px] tracking-[0.04em]">
                  money-back
                </i>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`
          @keyframes gxfloat{0%,100%{transform:translate(0,0)}50%{transform:translate(22px,-16px)}}
          @keyframes gxfloat2{0%,100%{transform:translate(0,0)}50%{transform:translate(-24px,16px)}}
          @keyframes gxspin{to{transform:rotate(360deg)}}
          @media(prefers-reduced-motion:reduce){.gx-rings{animation:none!important;}}
          .gx-rings::before{content:"";position:absolute;inset:40px;border-radius:50%;border:1.4px dashed rgba(255,122,82,.13);}
          .gx-rings::after{content:"";position:absolute;inset:84px;border-radius:50%;border:1.2px dashed rgba(242,63,68,.1);}
        `}</style>
      </section>

      {/* FAQ */}
      <section className="px-7 py-[88px] bg-sand">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mx-auto mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]">
              Questions<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]">
              Pricing FAQ
            </Reveal>
          </div>
          <Reveal>
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      {/* Security */}
      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your hiring data secure"
        sub="Your candidate and recruitment data is protected by independently audited controls and global privacy compliance."
      />

      <SiteFooter />
    </>
  );
}
