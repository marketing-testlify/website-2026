import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact us — let's talk about how you hire",
  description:
    "Whether you have a question, want a hands-on demo, or need help choosing a plan — our team is a message away. No bots, no cold replies.",
};

const FAQ_ITEMS = [
  {
    q: "How quickly will I hear back?",
    a: "Our team typically responds within one business day. For urgent questions, chat support is the fastest way to reach us.",
  },
  {
    q: "Can I get a demo tailored to my roles?",
    a: "Yes — book a 30-minute demo and a product specialist will walk you through Testlify on the exact roles you're hiring for.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. Every plan starts with a 7-day free trial and no credit card is required during the trial period.",
  },
  {
    q: "Can Testlify integrate with our ATS?",
    a: "Yes — Testlify offers native two-way sync with 100+ ATS platforms including Greenhouse, Lever and Workday, plus a full API.",
  },
  {
    q: "Can I customise assessments to our needs?",
    a: "Testlify is fully customisable — tailor assessments, add custom questions, and white-label the candidate experience to match your brand.",
  },
];

const check = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 mt-0.5 text-[#FF7A52]"
    aria-hidden
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DemoCheck = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-[11px] items-start mt-[14px]">
    {check}
    <span className="text-[16px] leading-[1.66] text-[#E7DADD] m-0">
      {children}
    </span>
  </div>
);

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Get a personalised walkthrough — see Testlify on your own roles."
        announcementCta="Book a demo"
      />

      {/* Hero */}
      <section className="pt-[72px] pb-5 px-7 bg-[radial-gradient(1000px_480px_at_22%_0%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff] max-[960px]:pt-11 max-[960px]:pb-2.5 max-[960px]:px-[22px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[720px]">
            <Reveal
              as="p"
              className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-4"
            >
              Contact us<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h1"
              delay={0.04}
              className="text-[52px] leading-[1.06] font-extrabold tracking-[-1.8px] m-0 text-ink max-[960px]:text-[38px] max-[960px]:tracking-[-1.2px]"
            >
              Let&apos;s talk about
              <br />
              how you <span className="text-coral">hire.</span>
            </Reveal>
            <Reveal
              as="p"
              delay={0.08}
              className="text-[19px] leading-[1.6] text-body mt-5 max-w-[560px]"
            >
              Whether you have a question, want a hands-on demo, or need help
              choosing a plan — our team is a message away. No bots, no cold
              replies.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact grid: form + info */}
      <section className="pt-11 pb-20 px-7 max-[960px]:pb-14 max-[960px]:px-[22px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-[1.05fr_1fr] gap-14 items-start max-[960px]:grid-cols-1 max-[960px]:gap-10">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.08}>
              {/* Demo card */}
              <div className="bg-ink text-[#F1E7E8] rounded-[22px] p-[34px]">
                <p className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-[#C9A9AB] m-0 mb-4">
                  Prefer a live walkthrough
                  <b className="text-[#FF7A52] font-semibold">.</b>
                </p>
                <h3 className="text-[20px] leading-[1.25] font-bold tracking-[-0.4px] text-white m-0">
                  Book a 30-minute demo
                </h3>
                <p className="text-[16px] leading-[1.66] text-[#C2B1B4] mt-2.5 mb-0">
                  See Testlify on your own roles and get your questions answered
                  by a product specialist.
                </p>
                <DemoCheck>A walkthrough tailored to your hiring</DemoCheck>
                <DemoCheck>Improve shortlist quality and speed</DemoCheck>
                <DemoCheck>No credit card · used by 1,500+ teams</DemoCheck>
                <div className="mt-[22px]">
                  <CtaButton
                    label="Book a demo"
                    href="#"
                    variant="light"
                    size="md"
                    icon="arrow"
                  />
                </div>
              </div>

              {/* Channels */}
              <div className="mt-[22px]">
                <a
                  href="#"
                  className="flex gap-4 items-start p-5 border border-[#F2E6E7] rounded-2xl mb-[14px] transition-[translate,border-color,box-shadow] duration-[280ms] ease-[ease] hover:-translate-y-[3px] hover:border-[#FBD0D1] hover:shadow-[0_14px_30px_rgba(110,11,14,0.09)]"
                >
                  <span className="flex-none w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <span>
                    <span className="text-[16px] font-bold tracking-[-0.4px] text-ink">
                      Chat support
                    </span>
                    <span className="block text-[13.5px] leading-[1.66] text-body mt-[3px]">
                      Quick questions answered in real time.
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:hello@testlify.com"
                  className="flex gap-4 items-start p-5 border border-[#F2E6E7] rounded-2xl mb-[14px] transition-[translate,border-color,box-shadow] duration-[280ms] ease-[ease] hover:-translate-y-[3px] hover:border-[#FBD0D1] hover:shadow-[0_14px_30px_rgba(110,11,14,0.09)]"
                >
                  <span className="flex-none w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22 6 12 13 2 6" />
                    </svg>
                  </span>
                  <span>
                    <span className="text-[16px] font-bold tracking-[-0.4px] text-ink">
                      Email us
                    </span>
                    <span className="block text-[13.5px] leading-[1.66] text-body mt-[3px]">
                      hello@testlify.com · sales@testlify.com
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+18447558378"
                  className="flex gap-4 items-start p-5 border border-[#F2E6E7] rounded-2xl mb-[14px] transition-[translate,border-color,box-shadow] duration-[280ms] ease-[ease] hover:-translate-y-[3px] hover:border-[#FBD0D1] hover:shadow-[0_14px_30px_rgba(110,11,14,0.09)]"
                >
                  <span className="flex-none w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] text-coral flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>
                    <span className="text-[16px] font-bold tracking-[-0.4px] text-ink">
                      Call us
                    </span>
                    <span className="block text-[13.5px] leading-[1.66] text-body mt-[3px]">
                      +1 (844) 755 8378
                    </span>
                  </span>
                </a>

                {/* Address (non-link) */}
                <div className="flex gap-[14px] items-start text-[14.5px] text-body leading-[1.6] p-5">
                  <span className="flex-none w-[46px] h-[46px] rounded-[13px] bg-[#FFF0F0] flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F23F44"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>
                    <span className="text-[16px] font-bold tracking-[-0.4px] text-ink block">
                      Visit us
                    </span>
                    <span className="block mt-[3px]">
                      Testlify, Inc.
                      <br />
                      2823 Oakley Ave, Bensalem, PA 19020
                      <br />
                      United States
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-7 bg-sand max-[960px]:py-14 max-[960px]:px-[22px]">
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
              className="text-[34px] leading-[1.12] font-extrabold tracking-[-1.1px] m-0 text-ink max-[960px]:text-[27px]"
            >
              Common questions
            </Reveal>
          </div>
          <Reveal>
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
