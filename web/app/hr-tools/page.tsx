import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { routes } from "@/lib/routes";
import ToolsHub from "./ToolsHub";

export const metadata: Metadata = {
  title: "Free HR tools & calculators",
  description:
    "Free calculators and templates to measure, benchmark and improve every stage of your hiring — cost per hire, time to hire, quality of hire, attrition, eNPS and more. No sign-up.",
};

export default function Page() {
  return (
    <>
      <SiteHeader
        announcement="Free HR calculators & tools — cost-per-hire, time-to-hire, quality of hire and more"
        announcementCta="Browse tools"
        announcementHref={routes.resourcesTools}
      />

      <ToolsHub />

      {/* Dark CTA band (distinct from the global SiteFooter coral band) */}
      <section
        className="px-7 py-[70px] text-center text-white"
        style={{
          background:
            "radial-gradient(900px 400px at 50% 0%,#2A1417,#1A1014)",
        }}
      >
        <div className="max-w-[1240px] mx-auto">
          <Reveal
            as="h2"
            className="text-[32px] font-extrabold tracking-[-0.8px] text-white m-0"
          >
            Numbers point the way. Testlify gets you there.
          </Reveal>
          <Reveal
            as="p"
            delay={0.04}
            className="text-[16px] leading-[1.6] text-[#D8C5C8] max-w-[520px] mx-auto mt-4 mb-[26px]"
          >
            Calculators show the gap. Skills-based assessments close it — screen
            faster, shortlist better and cut cost per hire for real.
          </Reveal>
          <Reveal
            delay={0.08}
            className="flex gap-[14px] justify-center flex-wrap"
          >
            <CtaButton
              label="Try for free"
              href={routes.pricing}
              variant="light"
              size="lg"
              icon="arrow"
            />
            <CtaButton
              label="Book a demo"
              href={routes.contact}
              variant="outline-light"
              size="lg"
              icon="play"
            />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
