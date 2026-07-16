import Reveal from './Reveal';

const BADGES: [string, string][] = [
  ['SOC 2 Type 2', '#1b7f4b'],
  ['ISO 27001', '#b5740f'],
  ['EEOC-defensible', '#f23f44'],
  ['CCPA', '#2a6fdb'],
  ['GDPR', '#0ea5a4'],
];

type Props = {
  eyebrow?: string;
  heading?: string;
  sub?: string;
};

export default function SecuritySection({
  eyebrow = 'Security & compliance',
  heading = 'Built to keep your organization secure',
  sub = 'Audited controls, strong data governance and privacy protections — every assessment validated and EEOC-defensible.',
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
          {BADGES.map(([label, color]) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-[13px] h-[158px] bg-white border border-warm3 rounded-[18px] p-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
            >
              <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center" style={{ background: color + '18' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-[13.5px] font-semibold text-body">{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
