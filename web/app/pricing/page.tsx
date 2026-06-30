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

      {/* Interactive hero + plan cards + guarantee + comparison table */}
      <PricingClient />

      {/* FAQ (sand bg, after comparison table) */}
      <section className="px-7 py-[88px] bg-[#FBF3EE]">
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mx-auto mb-11">
            <Reveal
              as="p"
              className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-muted m-0 mb-[18px]"
            >
              Questions<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 text-ink max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
            >
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
