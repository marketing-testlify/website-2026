import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "From fast-growing startups to global enterprises — see how teams use Testlify to hire faster, fairer and with more confidence.",
};

type Story = {
  metric: string;
  logo: string;
  quote: string;
  initials: string;
  avBg: string;
  name: string;
  role: string;
  delay?: number;
  id?: string;
};

const STORIES: Story[] = [
  {
    metric: "↓ 58% time-to-hire",
    logo: "Lumen SaaS",
    quote:
      "“Our engineering shortlists are night-and-day better. Real coding challenges replaced gut-feel résumé reviews entirely.”",
    initials: "JK",
    avBg: "#2A6FDB",
    name: "Jonas Klein",
    role: "Head of Eng, Lumen",
    id: "voices",
  },
  {
    metric: "3.4× more qualified hires",
    logo: "Vela Health",
    quote:
      "“Compliance loved the audit trail, candidates loved the experience, and we filled 40 clinical roles in a quarter.”",
    initials: "MA",
    avBg: "#1F8A5B",
    name: "Maria Alvarez",
    role: "Talent Director, Vela",
    delay: 0.06,
  },
  {
    metric: "91% completion rate",
    logo: "Orbit Retail",
    quote:
      "“We hire seasonal staff at huge volume. Testlify scaled with us instantly — no extra recruiters needed.”",
    initials: "DC",
    avBg: "#B8521A",
    name: "Derek Cho",
    role: "People Ops, Orbit",
    delay: 0.12,
  },
  {
    metric: "↓ 44% cost per hire",
    logo: "Finovo",
    quote:
      "“Structured assessments removed bias from our first round and widened our candidate pool dramatically.”",
    initials: "SN",
    avBg: "#6B3FA0",
    name: "Sara Neeson",
    role: "CHRO, Finovo",
  },
  {
    metric: "8-day average fill",
    logo: "Kestrel",
    quote:
      "“From job post to signed offer in a week. The ranked shortlist means we never waste an interview slot.”",
    initials: "AB",
    avBg: "#C0242B",
    name: "Amir Banerjee",
    role: "Recruiting Lead, Kestrel",
    delay: 0.06,
  },
  {
    metric: "12 hrs saved / role",
    logo: "Atlas Agency",
    quote:
      "“White-labeled assessments make us look great to clients, and the scorecards close placements faster.”",
    initials: "LT",
    avBg: "#16607A",
    name: "Lena Tomas",
    role: "Founder, Atlas",
    delay: 0.12,
  },
];

export default function CustomersPage() {
  return (
    <>
      <SiteHeader
        announcement="Read how Northwind cut time-to-hire by 71%"
        announcementCta="Read story"
      />

      {/* Hero */}
      <section className="px-7 pt-16 pb-10 text-center bg-[radial-gradient(1100px_520px_at_50%_-10%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="max-w-[820px] mx-auto px-7">
          <Reveal
            as="p"
            className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] mb-[18px]"
          >
            Customers<b className="text-coral font-semibold">.</b>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.04}
            className="text-[62px] leading-[1.04] font-extrabold tracking-[-2px] text-ink m-0 max-[920px]:text-[42px] max-[920px]:tracking-[-1.4px]"
          >
            Hiring teams that
            <br />
            made the switch
          </Reveal>
          <Reveal
            as="p"
            delay={0.08}
            className="text-[19px] leading-[1.6] text-[#5A4B4E] font-normal mx-auto mt-[22px] max-w-[600px]"
          >
            From fast-growing startups to global enterprises — see how teams use
            Testlify to hire faster, fairer and with more confidence.
          </Reveal>
        </div>
      </section>

      {/* Featured story */}
      <section className="px-7 pt-5">
        <div className="max-w-[1240px] mx-auto px-7">
          <Reveal className="grid grid-cols-[1.05fr_0.95fr] gap-[46px] items-center bg-white border border-[#EFE2E3] rounded-[26px] p-11 shadow-[0_24px_60px_rgba(110,11,14,0.08)] max-[920px]:grid-cols-1 max-[920px]:p-[30px] max-[920px]:gap-7">
            <div>
              <div className="font-extrabold text-[22px] text-[#C0242B] mb-4">
                Northwind
              </div>
              <p className="text-[27px] leading-[1.4] font-semibold tracking-[-0.5px] text-ink m-0 mb-6 max-[920px]:text-[22px]">
                &quot;We went from{" "}
                <span className="text-coral">
                  drowning in 4,000 applications
                </span>{" "}
                to a ranked shortlist of 30 in a single afternoon. Testlify gave
                us our hiring quarter back.&quot;
              </p>
              <div className="flex items-center gap-[11px] mt-auto">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[14px] shrink-0 bg-coral">
                  RP
                </span>
                <div className="text-[13px] leading-[1.3]">
                  <div className="font-bold text-ink">Rhea Patel</div>
                  <div className="text-[#9A878A]">VP Talent, Northwind</div>
                </div>
              </div>
              <div className="flex gap-[34px] flex-wrap mt-[30px]">
                <div>
                  <div className="text-[40px] font-extrabold tracking-[-1.5px] text-coral leading-none">
                    71%
                  </div>
                  <p className="text-[13.5px] leading-[1.66] text-[#5A4B4E] mt-1.5 mb-0">
                    faster time-to-hire
                  </p>
                </div>
                <div>
                  <div className="text-[40px] font-extrabold tracking-[-1.5px] text-coral leading-none">
                    4,000
                  </div>
                  <p className="text-[13.5px] leading-[1.66] text-[#5A4B4E] mt-1.5 mb-0">
                    applicants screened
                  </p>
                </div>
                <div>
                  <div className="text-[40px] font-extrabold tracking-[-1.5px] text-coral leading-none">
                    12 hrs
                  </div>
                  <p className="text-[13.5px] leading-[1.66] text-[#5A4B4E] mt-1.5 mb-0">
                    saved per role
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[linear-gradient(160deg,#FFF4F3,#FBE9E9)] rounded-[20px] p-[34px] border border-[#F6DCDD]">
              <p className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] mb-3.5">
                The challenge<b className="text-coral font-semibold">.</b>
              </p>
              <p className="text-[14.5px] leading-[1.66] text-[#5A4B4E] m-0 mb-[22px]">
                A viral job post buried the recruiting team. Manual screening
                would have taken three weeks they didn&apos;t have.
              </p>
              <p className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] mb-3.5">
                The result<b className="text-coral font-semibold">.</b>
              </p>
              <p className="text-[14.5px] leading-[1.66] text-[#5A4B4E] m-0">
                Skills-first assessments ranked every applicant overnight. The
                team interviewed only the top 30 and closed the role in eight
                days.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Success stories grid */}
      <section className="px-7 py-[104px] max-[920px]:py-[72px] max-[920px]:px-[22px]">
        <div className="max-w-[1240px] mx-auto px-7">
          <div className="max-w-[640px] mx-auto mb-11 text-center">
            <Reveal
              as="p"
              className="text-[12.5px] font-semibold tracking-[0.14em] uppercase text-[#8A7A7D] mb-[18px]"
            >
              Success stories<b className="text-coral font-semibold">.</b>
            </Reveal>
            <Reveal
              as="h2"
              delay={0.04}
              className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] text-ink m-0 max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
            >
              Results across every industry
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1">
            {STORIES.map((s) => (
              <Reveal
                key={s.name}
                delay={s.delay}
                className="relative flex flex-col bg-white border border-[#EFE2E3] rounded-[20px] p-7 transition-[translate,transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(110,11,14,0.10)] hover:border-[#F4D2D3]"
              >
                {s.id && (
                  <span
                    id={s.id}
                    className="absolute -top-[120px]"
                    aria-hidden
                  />
                )}
                <span className="text-[12px] font-bold text-[#1FA463] bg-[#E9F7EF] px-2.5 py-[5px] rounded-full self-start mb-4">
                  {s.metric}
                </span>
                <div className="font-extrabold text-[18px] text-[#C0242B] mb-4">
                  {s.logo}
                </div>
                <p className="text-[15.5px] leading-[1.6] text-[#3A2C30] font-medium m-0 mb-5">
                  {s.quote}
                </p>
                <div className="flex items-center gap-[11px] mt-auto">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[14px] shrink-0"
                    style={{ background: s.avBg }}
                  >
                    {s.initials}
                  </span>
                  <div className="text-[13px] leading-[1.3]">
                    <div className="font-bold text-ink">{s.name}</div>
                    <div className="text-[#9A878A]">{s.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="px-7 py-[104px] bg-ink text-white text-center max-[920px]:py-[72px] max-[920px]:px-[22px]">
        <div className="max-w-[720px] mx-auto px-7">
          <Reveal
            as="h2"
            className="text-[43px] leading-[1.08] font-extrabold tracking-[-1.4px] text-white m-0 max-[920px]:text-[32px] max-[920px]:tracking-[-1px]"
          >
            Become the next success story
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="text-[19px] leading-[1.6] text-white/[0.78] mx-auto mt-[18px] mb-[30px] font-normal"
          >
            Join thousands of teams hiring on skill with Testlify. Start free or
            talk to our team.
          </Reveal>
          <Reveal
            delay={0.08}
            className="flex gap-3.5 justify-center flex-wrap"
          >
            <CtaButton
              label="Start free"
              href={routes.pricing}
              variant="light"
              size="md"
              icon="arrow"
            />
            <CtaButton
              label="Book a demo"
              href="#"
              variant="outline-light"
              size="md"
              icon="play"
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
