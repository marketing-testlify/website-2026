import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

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
    metric: "↓ 41% time to activation",
    logo: "Xneelo",
    quote:
      "“We filled key sales and marketing roles in under a month and cut time to activation by 41% with Testlify.”",
    initials: "CB",
    avBg: "#2A6FDB",
    name: "Chrissie Blom",
    role: "Head of Talent, Xneelo",
    id: "voices",
  },
  {
    metric: "96% hiring effectiveness",
    logo: "Virtual Gurus",
    quote:
      "“White-label assessments cut our phone-interview time by 93% and pushed hiring effectiveness to 96%.”",
    initials: "AB",
    avBg: "#1F8A5B",
    name: "Abby Belin",
    role: "Virtual Gurus",
    delay: 0.06,
  },
  {
    metric: "↓ 35% poor hiring fits",
    logo: "Kimp",
    quote:
      "“Skill-based assessments reduced poor hiring fits by 35% and cut turnover by 20%.”",
    initials: "SV",
    avBg: "#B8521A",
    name: "Senthu Velnayagam",
    role: "Kimp",
    delay: 0.12,
  },
  {
    metric: "83% hiring effectiveness",
    logo: "Endiprev",
    quote:
      "“Skills assessments cut our blue-collar turnover and improved hiring effectiveness by 83%.”",
    initials: "DS",
    avBg: "#6B3FA0",
    name: "Daniela Santos",
    role: "Endiprev",
  },
  {
    metric: "116 hires in 45 days",
    logo: "Gorin Systems",
    quote:
      "“We hired 116 fresh graduates in 45 days using Testlify's campus recruitment assessments.”",
    initials: "GS",
    avBg: "#C0242B",
    name: "Gorin Systems",
    role: "Software Development",
    delay: 0.06,
  },
  {
    metric: "↓ 75% candidate drop-offs",
    logo: "Unity Communications",
    quote:
      "“Testlify cut candidate drop-offs by 75% and improved new-hire retention by 30%.”",
    initials: "UC",
    avBg: "#16607A",
    name: "Unity Communications",
    role: "Outsourcing & Offshoring",
    delay: 0.12,
  },
];

export default function CustomersPage() {
  return (
    <>
      <SiteHeader
        announcement="Read how inDrive cut time-to-hire from 3 weeks to 1 week"
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
          <Reveal className="grid grid-cols-[1.05fr_0.95fr] gap-[46px] items-start bg-white border border-[#EFE2E3] rounded-[26px] p-11 shadow-[0_24px_60px_rgba(110,11,14,0.08)] max-[920px]:grid-cols-1 max-[920px]:p-[30px] max-[920px]:gap-7">
            <div>
              <div className="font-extrabold text-[22px] text-[#C0242B] mb-4">
                inDrive
              </div>
              <p className="text-[27px] leading-[1.4] font-semibold tracking-[-0.5px] text-ink m-0 mb-6 max-[920px]:text-[22px]">
                &quot;The biggest change was moving from a process we were
                managing to a{" "}
                <span className="text-coral">system we could trust</span>. Now we
                hire faster, develop smarter, and make decisions backed by real
                data.&quot;
              </p>
              <div className="flex items-center gap-[11px] mt-auto">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[14px] shrink-0 bg-coral">
                  AI
                </span>
                <div className="text-[13px] leading-[1.3]">
                  <div className="font-bold text-ink">Andrei Ivanov</div>
                  <div className="text-[#9A878A]">
                    Training Co-ordinator, inDrive
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-[18px] mt-[30px]">
                <div>
                  <div className="text-[36px] font-extrabold tracking-[-1.5px] text-coral leading-none">
                    67%
                  </div>
                  <p className="text-[13.5px] leading-[1.66] text-[#5A4B4E] mt-1.5 mb-0">
                    faster time-to-hire
                  </p>
                </div>
                <div>
                  <div className="text-[36px] font-extrabold tracking-[-1.5px] text-coral leading-none">
                    82%
                  </div>
                  <p className="text-[13.5px] leading-[1.66] text-[#5A4B4E] mt-1.5 mb-0">
                    more L&amp;D participation
                  </p>
                </div>
                <div>
                  <div className="text-[36px] font-extrabold tracking-[-1.5px] text-coral leading-none">
                    4×
                  </div>
                  <p className="text-[13.5px] leading-[1.66] text-[#5A4B4E] mt-1.5 mb-0">
                    recruiter efficiency
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[linear-gradient(160deg,#FFF4F3,#FBE9E9)] rounded-[20px] p-[34px] border border-[#F6DCDD]">
              <p className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-[#C0242B] mb-3">
                The challenge
              </p>
              <p className="text-[14.5px] leading-[1.66] text-[#5A4B4E] m-0 mb-[22px]">
                Hiring was mostly manual, and assessing English and role skills
                consistently across global teams was a constant challenge.
              </p>
              <p className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-[#C0242B] mt-[22px] mb-3">
                The result
              </p>
              <p className="text-[14.5px] leading-[1.66] text-[#5A4B4E] m-0">
                Skills assessments and AI interviews brought consistency to
                hiring, cut time-to-hire from three weeks to one, and lifted L&amp;D
                participation by 82%.
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

      <SiteFooter />
    </>
  );
}
