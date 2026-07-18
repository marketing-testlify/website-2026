import Reveal from "@/components/Reveal";

const BADGES: [string, string][] = [
  ["https://testlify.com/wp-content/uploads/2023/03/SOC-2-Type-2.png", "SOC 2 Type 2"],
  ["https://testlify.com/wp-content/uploads/2023/03/ISO.png", "ISO 27001"],
  ["https://testlify.com/wp-content/uploads/2023/12/logo.svg", "EEOC-defensible"],
  ["https://testlify.com/wp-content/uploads/2023/03/CCPA.png", "CCPA"],
  ["https://testlify.com/wp-content/uploads/2023/06/GDPR-1-1.png", "GDPR"],
];

type Props = {
  eyebrow?: string;
  heading?: string;
  sub?: string;
};

export default function SecuritySection({
  eyebrow = "Security & compliance",
  heading = "Built to keep your organization secure",
  sub = "Audited controls, strong data governance and privacy protections — every assessment validated and EEOC-defensible.",
}: Props) {
  return (
    <section className="px-7 py-24 bg-white">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center max-w-[840px] mx-auto mb-11">
          <Reveal as="p" className="text-[14px] font-bold tracking-[1px] text-[#9A878A] uppercase m-0 mb-3.5">
            {eyebrow}
            <b className="text-coral font-bold">.</b>
          </Reveal>
          <Reveal as="h2" delay={0.06} className="text-[42px] leading-[1.1] font-extrabold tracking-[-1.3px] m-0 mb-3.5 text-ink max-[760px]:text-[32px]">
            {heading}
          </Reveal>
          <Reveal as="p" delay={0.12} className="text-[17px] leading-[1.6] text-body m-0 mx-auto max-w-[600px]">
            {sub}
          </Reveal>
        </div>
        <Reveal delay={0.16} className="grid grid-cols-5 gap-3.5 max-[760px]:grid-cols-2">
          {BADGES.map(([src, label]) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-[13px] h-[158px] bg-white border border-warm3 rounded-[18px] p-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={label} className="max-h-[74px] max-w-[108px] object-contain" />
              <span className="text-[13.5px] font-semibold text-body">{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
