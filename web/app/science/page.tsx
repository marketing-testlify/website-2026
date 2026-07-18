import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "The science behind every Testlify test",
  description:
    "Reliable, valid, bias-tested assessments — built and reviewed by subject-matter experts and grounded in psychometric best practice, so every score holds up to scrutiny.",
};

/* ---------- data (verbatim from the prototype logic class) ---------- */

const FAQ_ITEMS = [
  {
    q: "What is the purpose of talent assessments?",
    a: "Talent assessments help organizations find the best people by providing insights into candidates’ technical skills and aptitudes to predict their chances of success in a job.",
  },
  {
    q: "Are talent assessments reliable?",
    a: "Our talent assessments are developed by experts using proven frameworks and are constantly monitored for effectiveness, making them reliable and trustworthy.",
  },
  {
    q: "How are talent assessments designed for diversity?",
    a: "Our platform is designed with diversity in mind and allows organizations to hide details like gender, age, or race to ensure equal opportunities for all candidates.",
  },
  {
    q: "What kind of insights do talent assessments provide?",
    a: "After candidates complete their assessments, reports, and insights are generated to help organizations better understand each individual’s strengths and weaknesses and select the best talent.",
  },
  {
    q: "How do talent assessments benefit recruiters?",
    a: "Talent assessments are a powerful tool for recruiters as they provide insights into candidates’ skills and aptitudes, making it easier to evaluate and compare individuals and select the best fit for a job.",
  },
];

/* Integrations — logos hot-linked from testlify.com, exactly as the prototype */
const INTEGRATIONS: [string, string][] = [
  ["https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png", "Workday"],
  ["https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png", "Greenhouse"],
  ["https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr", "Lever"],
  ["https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg", "SmartRecruiters"],
  ["https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png", "BambooHR"],
  ["https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr", "SuccessFactors"],
  ["https://testlify.com/wp-content/uploads/2025/10/logo.svg", "UKG"],
  ["https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr", "Recruitee"],
  ["https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png", "Zoho Recruit"],
  ["https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr", "JazzHR"],
];

const AWARDS = [
  "Leader · Talent Assessment",
  "High Performer · Enterprise",
  "High Performer · Mid-Market",
  "Best Relationship",
  "Users Most Likely to Recommend",
  "Best Meets Requirements",
];

/* Hero report skill bars: [skill, level, width] — exact widths from the prototype */
const SKILLS: [string, string, string][] = [
  ["Product strategy", "Expert", "94%"],
  ["Stakeholder judgement", "Strong", "86%"],
  ["Data & analytics", "Proven", "81%"],
];

/* ---------- shared class strings ---------- */

const H2 =
  "text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] m-0 max-[960px]:text-[33px] max-[960px]:tracking-[-1px]";
const H3 = "text-[22px] leading-[1.25] font-bold tracking-[-0.4px] m-0";
const LEAD = "text-[19px] leading-[1.6] font-normal";
const PLABEL = "text-[11px] font-bold uppercase";
const SEC = "px-7 py-24 max-[960px]:px-[22px] max-[960px]:py-[72px]";
const WRAP = "max-w-[1240px] mx-auto px-7";
const SPLIT =
  "grid grid-cols-1 min-[961px]:grid-cols-[1.02fr_1fr] gap-11 min-[961px]:gap-16 items-center";
const LEARN_LINK = "inline-flex items-center gap-2 text-coral font-semibold text-[16px] mt-[26px]";

/* ---------- small shared pieces ---------- */

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px] ${className}`.trim()}>
      {children}
      <b className="text-coral font-semibold">.</b>
    </p>
  );
}

function CheckIcon({ size = 13, stroke = "#fff" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Chk({ children, small = false }: { children: ReactNode; small?: boolean }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="flex-none w-6 h-6 rounded-[7px] bg-coral flex items-center justify-center mt-px">
        <CheckIcon />
      </span>
      <p className={`${small ? "text-[14.5px]" : "text-[16px]"} leading-[1.66] text-body m-0`}>{children}</p>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 1.8l3 6.8 7.2.7-5.4 4.9 1.6 7.1L12 17.6l-6.4 3.7 1.6-7.1L1.8 9.3 9 8.6z" />
    </svg>
  );
}

/** Browser-chrome mock window: traffic lights + address bar (hero report) */
function Mock({ bar, children }: { bar: string; children: ReactNode }) {
  return (
    <div className="bg-white border border-warm rounded-[20px] shadow-[0_40px_90px_rgba(110,11,14,0.16)] overflow-hidden">
      <div className="flex items-center gap-2 py-[13px] px-4 border-b border-[#F4ECEC] bg-[#FCFAFA]">
        <span className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
        <span className="ml-3 flex-1 h-[26px] rounded-lg bg-[#F3EAEA] flex items-center px-3 text-[11.5px] text-faint font-medium">
          {bar}
        </span>
      </div>
      {children}
    </div>
  );
}

/** Rounded, shadowed image panel — matches the prototype's split-section frame */
function ImagePanel({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-[20px] overflow-hidden border border-warm shadow-[0_30px_60px_rgba(110,11,14,0.12)] bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

/* ---------- page ---------- */

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="New — AI chat-simulation interviews are live. Assess real judgement, not just answers."
        announcementCta="See how"
        announcementHref="#chat"
      />

      {/* 1 · HERO (white, radial rose wash) */}
      <section
        className="relative overflow-hidden px-7 pt-[70px] pb-[90px] max-[960px]:px-[22px] max-[960px]:pt-11 max-[960px]:pb-16"
        style={{ background: "radial-gradient(1100px 540px at 78% 6%, #FFF0EE 0%, rgba(255,240,238,0) 60%), #fff" }}
      >
        <div className={WRAP}>
          <div className="relative grid grid-cols-1 min-[961px]:grid-cols-[1.02fr_1.08fr] gap-11 min-[961px]:gap-[60px] items-center">
            <div>
              <Reveal delay={0.02}>
                <span className="inline-flex items-center gap-[9px] bg-white border border-[#F4D9DA] rounded-full py-[7px] pr-[15px] pl-2 text-[13px] font-semibold text-[#A8323A] shadow-[0_6px_16px_rgba(110,11,14,0.06)]">
                  <span className="bg-coral text-white text-[11px] font-bold tracking-[0.04em] py-[3px] px-[9px] rounded-full">
                    THE SCIENCE
                  </span>
                  Validity you can defend
                </span>
              </Reveal>
              <Reveal
                as="h1"
                delay={0.06}
                className="mt-[22px] mb-0 text-[62px] leading-[1.04] font-extrabold tracking-[-2px] text-ink max-[960px]:text-[44px] max-[960px]:tracking-[-1.4px]"
              >
                Made for people,
                <br />
                built on <span className="text-coral">science.</span>
              </Reveal>
              <Reveal as="p" delay={0.1} className={`${LEAD} text-body mt-[22px] mb-0 max-w-[520px]`}>
                The purpose of our talent assessments is to help organisations find the best people — an enjoyable
                experience for candidates and simple for recruiters to evaluate and compare individuals.
              </Reveal>
              <Reveal delay={0.14} className="flex items-center gap-3.5 flex-wrap mt-8">
                {/* transparent border equalizes height with the bordered secondary (prototype .ctabtn.v-primary override) */}
                <CtaButton
                  label="Try for free"
                  href={routes.pricing}
                  variant="primary"
                  size="md"
                  icon="arrow"
                  className="border-[1.5px] border-transparent"
                />
                {/* prototype shrinks the play circle to 24px so both hero buttons share the same 55px box */}
                <CtaButton
                  label="Book a demo"
                  href="#"
                  variant="secondary"
                  size="md"
                  icon="play"
                  className="[&>span:first-child]:w-6 [&>span:first-child]:h-6"
                />
              </Reveal>
              <Reveal delay={0.18} className="flex items-center gap-[13px] flex-wrap text-[13.5px] text-muted font-semibold mt-[26px]">
                <span className="inline-flex items-center gap-[7px]">
                  <span className="text-coral font-bold">✓</span>7-day free trial
                </span>
                <span className="inline-flex items-center gap-[7px]">
                  <span className="text-coral font-bold">✓</span>No credit card required
                </span>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="relative">
              <div className="absolute -top-4 left-6 z-[4] flex items-center gap-2 bg-ink text-white text-[12.5px] font-semibold py-[9px] px-[15px] rounded-xl shadow-[0_16px_34px_rgba(26,16,20,0.30)]">
                <i className="inline-block w-[7px] h-[7px] rounded-full bg-[#3DDC84] shadow-[0_0_0_4px_rgba(61,220,132,0.2)]" />
                Auto-scored — 0 manual review
              </div>
              <Mock bar="app.testlify.com/report/senior-pm">
                <div className="p-5">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-[74px] h-[74px] flex-none rounded-full flex items-center justify-center"
                      style={{ background: "conic-gradient(#F23F44 0deg 331deg, #F7E1E2 331deg 360deg)" }}
                    >
                      <div className="w-[58px] h-[58px] rounded-full bg-white flex flex-col items-center justify-center">
                        <div className="text-[20px] font-extrabold text-ink">92</div>
                        <div className="text-[8px] font-bold tracking-[0.1em] uppercase text-faint">Fit</div>
                      </div>
                    </div>
                    <div>
                      <div className={`${H3} text-[17px] text-ink`}>Amara Okoye</div>
                      <div className="text-[13px] leading-[1.66] text-body mt-0.5">
                        Senior Product Manager · verified assessment
                      </div>
                      <div className="inline-flex items-center gap-1.5 mt-[7px] bg-[#FFF0F0] text-coral text-[11px] font-bold tracking-[0.04em] py-[3px] px-[9px] rounded-full">
                        TOP 4%
                      </div>
                    </div>
                  </div>
                  {SKILLS.map(([skill, level, w]) => (
                    <div key={skill} className="mb-[13px]">
                      <div className="flex justify-between text-[12.5px] font-semibold mb-1.5">
                        <span className="text-muted">{skill}</span>
                        <span>{level}</span>
                      </div>
                      <div className="h-[7px] rounded-full bg-warm overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: w, background: "linear-gradient(90deg, #F23F44, #FF7A52)" }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 py-[13px] px-[15px] rounded-xl bg-[#FCF3F2] border border-[#F4E0E0] text-[12.5px] text-body leading-[1.5]">
                    <b className="text-coral">AI summary:</b> Consistent, evidence-backed reasoning under ambiguity.
                    Chat-simulation flagged strong prioritisation instincts.
                  </div>
                </div>
              </Mock>
              <div className="absolute -bottom-[18px] right-[26px] z-[4] flex items-center gap-[11px] bg-white border border-warm rounded-[14px] py-3 px-4 shadow-[0_20px_40px_rgba(110,11,14,0.14)]">
                <span className="text-[22px] font-extrabold tracking-[-1px] text-coral">
                  30<span className="text-[12px]">min</span>
                </span>
                <div className="text-[12px] font-semibold leading-[1.3]">
                  typical
                  <br />
                  assessment
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 · DEVELOPED BY EXPERTS (sand) — text left, image right */}
      <section className={`bg-sand ${SEC}`}>
        <div className={WRAP}>
          <div className={SPLIT}>
            <Reveal>
              <Eyebrow>Developed by experts</Eyebrow>
              <h2 className={`${H2} text-ink mb-5`}>Developed by experts</h2>
              <p className={`${LEAD} text-body mt-0 mb-[18px]`}>
                Our process of creating tests is guided by proven frameworks to maintain the highest standards
                possible. These frameworks guide how all our tests are written, reviewed, and approved.
              </p>
              <div className="flex flex-col gap-[13px]">
                <Chk>Subject-matter experts develop and structure questions for each area of expertise.</Chk>
                <Chk>Guided by our testing team at every step.</Chk>
                <Chk>Each test is further reviewed by experts before it goes live.</Chk>
              </div>
              <Link href={routes.productFeatures} className={LEARN_LINK}>
                Learn more<span>→</span>
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <ImagePanel
                src="https://testlify.com/wp-content/uploads/2024/10/Developed-by-experts.png"
                alt="Developed by experts"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 · INTELLIGENT MONITORING (white) — image left, text right */}
      <section id="chat" className={`bg-white ${SEC}`}>
        <div className={WRAP}>
          <div className={SPLIT}>
            <Reveal delay={0.08}>
              <ImagePanel
                src="https://testlify.com/wp-content/uploads/2024/10/Intelligent-monitoring.png"
                alt="Intelligent monitoring"
              />
            </Reveal>
            <Reveal className="order-2">
              <Eyebrow>Intelligent monitoring</Eyebrow>
              <h2 className={`${H2} text-ink mb-5`}>Intelligent monitoring</h2>
              <p className={`${LEAD} text-body mt-0 mb-[18px]`}>
                Even after our tests are published, we monitor their effectiveness. We use intelligent data
                monitoring to constantly assess and identify test performance.
              </p>
              <div className="flex flex-col gap-[13px]">
                <Chk>We gather feedback from customers on the candidates they hire and how they perform on the job.</Chk>
                <Chk>Constant review and refining delivers advanced, accurate skills assessments you can depend upon.</Chk>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 · DESIGNED FOR DIVERSITY (sand) — text left, image right */}
      <section className={`bg-sand ${SEC}`}>
        <div className={WRAP}>
          <div className={SPLIT}>
            <Reveal>
              <Eyebrow>Designed for diversity</Eyebrow>
              <h2 className={`${H2} text-ink mb-5`}>Designed for diversity</h2>
              <p className={`${LEAD} text-body mt-0 mb-[18px]`}>
                Diversity in the workplace is a priority more than ever. Our platform is engineered from the ground
                up with diversity in mind. This ensures that every candidate is evaluated on their merits.
              </p>
              <div className="flex flex-col gap-[13px]">
                <Chk>Constantly updated and refined to meet the needs of organizations committed to workplace diversity.</Chk>
                <Chk>Hide details like gender, age or race so every candidate gets an equal chance at opportunities.</Chk>
              </div>
              <Link href={routes.solutions} className={LEARN_LINK}>
                More on diversity<span>→</span>
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <ImagePanel
                src="https://testlify.com/wp-content/uploads/2024/10/Designed-for-diversity.png"
                alt="Designed for diversity"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 · INSIGHTS THAT COUNT (white) — image left, text right */}
      <section className={`bg-white ${SEC}`}>
        <div className={WRAP}>
          <div className={SPLIT}>
            <Reveal delay={0.08}>
              <ImagePanel
                src="https://testlify.com/wp-content/uploads/2024/10/Insights-that-count.png"
                alt="Insights that count"
              />
            </Reveal>
            <Reveal className="order-2">
              <Eyebrow>Insights that count</Eyebrow>
              <h2 className={`${H2} text-ink mb-5`}>Insights that count</h2>
              <p className={`${LEAD} text-body mt-0 mb-[18px]`}>
                Our insights are accurate and reliable. After candidates complete their assessments, effortlessly
                generate reports and insights. These insights help you and your team better understand each
                individual&rsquo;s strengths and weaknesses.
              </p>
              <div className="flex flex-col gap-[13px]">
                <Chk>Understand each individual&rsquo;s strengths and weaknesses by skill.</Chk>
                <Chk>Select the candidates that best meet your requirements to shortlist the best talent.</Chk>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 · INTEGRATIONS (sand) */}
      <section id="platform" className={`bg-sand ${SEC}`}>
        <div className={WRAP}>
          <div className="text-center max-w-[680px] mx-auto mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
              Integrations<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.06} className={`${H2} text-ink`}>
              Testlify integrates seamlessly with 100+ ATS tools
            </Reveal>
            <Reveal as="p" delay={0.12} className={`${LEAD} text-body mt-3.5 mb-0`}>
              Native integrations with Workday, Greenhouse, Lever, iCIMS and 97 more ATS platforms — no middleware,
              no data mapping required.
            </Reveal>
          </div>
          <Reveal delay={0.16} className="grid grid-cols-3 min-[961px]:grid-cols-5 gap-3.5">
            {INTEGRATIONS.map(([src, alt]) => (
              <div
                key={alt}
                className="flex items-center justify-center h-[88px] bg-white border border-warm3 rounded-2xl py-4 px-5 transition-[translate,box-shadow,border-color] duration-[280ms] ease-[ease] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={alt} className="max-w-full max-h-10 object-contain" />
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="text-center mt-[26px]">
            <Link href={routes.integrations} className="inline-flex items-center gap-2 text-coral font-semibold text-[16px]">
              View all ATS integrations<span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 7 · SECURITY & COMPLIANCE (white, shared component) */}
      <SecuritySection
        eyebrow="Security & compliance"
        heading="Built to keep your organisation secure"
        sub="Top-tier admin controls, strong data governance and comprehensive compliance audits — every assessment protected and EEOC-defensible."
      />

      {/* 8 · TESTIMONIAL (sand) */}
      <section className={`bg-sand ${SEC}`}>
        <Reveal className="max-w-[900px] mx-auto px-7 text-center">
          <div className="flex items-center justify-center gap-[3px] text-[13px] font-bold tracking-[0.1em] text-coral mb-6">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <span className="ml-2">G2 · 4.7 / 5</span>
          </div>
          <p className="text-[31px] leading-[1.38] font-semibold tracking-[-0.6px] text-ink mt-0 mb-[30px]">
            &quot;We replaced three rounds of gut-feel screening with one Testlify assessment. The AI scoring is
            consistent, the audit trail keeps us defensible, and our shortlists are measurably stronger.&quot;
          </p>
          <div className="inline-flex items-center gap-[13px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2026/03/Xneelo-Chrissie-Blom.png"
              alt="Chrissie Blom"
              className="w-[52px] h-[52px] rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-bold text-[15px]">Chrissie Blom</div>
              <div className="text-muted text-[13.5px] mt-0.5">Head of Talent · Xneelo</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 9 · RECOGNITION (white) */}
      <section className={`bg-white ${SEC}`}>
        <div className={WRAP}>
          <div className="text-center max-w-[640px] mx-auto mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
              Recognition<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              Awarded by the people who use it
            </Reveal>
          </div>
          <Reveal className="flex flex-wrap gap-3.5 justify-center">
            {AWARDS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 bg-white border border-warm rounded-xl py-[13px] px-[18px] text-[13.5px] font-semibold text-ink shadow-[0_8px_18px_rgba(110,11,14,0.05)]"
              >
                <b className="text-coral font-bold text-[13px]">G2</b> {label}
              </span>
            ))}
          </Reveal>
          <Reveal as="p" className={`${PLABEL} tracking-[0.12em] text-faint text-center mt-9 mb-0`}>
            Backed by SHRM Labs · Google for Startups · Microsoft for Startups · NVIDIA Inception
          </Reveal>
        </div>
      </section>

      {/* 10 · FAQ (sand) */}
      <section className={`bg-sand ${SEC}`}>
        <div className="max-w-[840px] mx-auto px-7">
          <div className="text-center mb-11">
            <Reveal as="p" className="text-[12.5px] font-semibold tracking-[0.16em] uppercase text-muted m-0 mb-[18px]">
              FAQ<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal as="h2" delay={0.04} className={`${H2} text-ink`}>
              Frequently asked questions (FAQs)
            </Reveal>
            <Reveal as="p" delay={0.08} className={`${LEAD} text-body mt-3.5 mb-0`}>
              Want to know more about Testlify? Here are answers to the most commonly asked questions about our
              company.
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
