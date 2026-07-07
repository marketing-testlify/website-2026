import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import type {
  Bullet,
  CardsSection,
  ChipsSection,
  GridSection,
  Section,
  SplitSection,
  StepsSection,
} from "./data";

/* Shared class strings, matching the template CSS exactly. */
export const EYEBROW_CLASS =
  "text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0";
export const H2_CLASS =
  "text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-[14px] mb-0 max-[960px]:text-[27px]";
export const LEAD_CLASS = "text-[17.5px] leading-[1.6] text-body mt-5 mb-0";

const SHOT_SRC =
  "https://testlify.com/wp-content/uploads/2025/06/Featured-image-1.png";

/* .tsd-shot — framed product screenshot with the deep warm shadow. */
export function Shot({ alt }: { alt: string }) {
  return (
    <div className="bg-white border border-warm rounded-[22px] p-[10px] shadow-[0_40px_90px_rgba(110,11,14,0.14)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SHOT_SRC}
        alt={alt}
        className="block w-full h-[360px] max-[960px]:h-[280px] rounded-[14px] object-cover"
      />
    </div>
  );
}

/* .tsd-tick — check + short reassurance line. */
export function Tick({
  stroke,
  className,
  children,
}: {
  stroke: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`flex items-center gap-2 text-[13.5px] font-semibold ${className}`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {children}
    </span>
  );
}

/* Centered section head (.tsd-shead). */
function SHead({
  eyebrow,
  h2,
  intro,
}: {
  eyebrow?: string;
  h2: string;
  intro?: string;
}) {
  return (
    <Reveal className="text-center max-w-[720px] mx-auto">
      {eyebrow && (
        <p className={EYEBROW_CLASS}>
          {eyebrow}
          <b className="text-coral">.</b>
        </p>
      )}
      <h2 className={H2_CLASS}>{h2}</h2>
      {intro && <p className={LEAD_CLASS}>{intro}</p>}
    </Reveal>
  );
}

function BulletItem({ b }: { b: Bullet }) {
  return (
    <div className="flex gap-[10px] items-start">
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-none mt-[2px] text-[#1FA463]"
        aria-hidden
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="block text-[14.5px] font-semibold text-ink">
        {b.href ? (
          <Link
            href={b.href}
            className="text-ink border-b-[1.5px] border-rose-200 transition-colors hover:text-coral"
          >
            {b.label}
          </Link>
        ) : (
          b.label
        )}
        {b.desc && (
          <span className="block text-[13px] leading-[1.5] text-muted mt-[2px] font-normal">
            {b.desc}
          </span>
        )}
      </span>
    </div>
  );
}

const ARROW = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* .tsd-grid2 split — copy + framed screenshot, alternating sides. */
function SplitBlock({ s, flipped }: { s: SplitSection; flipped: boolean }) {
  const hasDesc = (s.bullets ?? []).some((b) => !!b.desc);
  const linkClass =
    "inline-flex items-center gap-[7px] mt-6 text-[15px] font-bold text-coral transition-colors hover:text-coral-deep";
  return (
    <div className="grid grid-cols-2 gap-16 items-center max-[960px]:grid-cols-1 max-[960px]:gap-10">
      <Reveal className={flipped ? "order-2 max-[960px]:order-1" : ""}>
        {s.num && (
          <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-rose-200 text-coral-deep text-[13px] font-extrabold mb-3">
            {s.num}
          </span>
        )}
        <h2 className={H2_CLASS}>{s.h2}</h2>
        {s.body.map((para) => (
          <p key={para} className="text-[15.5px] leading-[1.64] text-body mt-[14px] mb-0">
            {para}
          </p>
        ))}
        {s.bullets && s.bullets.length > 0 && (
          <div
            className={`grid gap-x-6 gap-y-3 mt-[22px] ${
              hasDesc ? "grid-cols-1" : "grid-cols-2 max-[960px]:grid-cols-1"
            }`}
          >
            {s.bullets.map((b) => (
              <BulletItem key={b.label} b={b} />
            ))}
          </div>
        )}
        {s.cta &&
          (s.cta.href.startsWith("#") ? (
            <a href={s.cta.href} className={linkClass}>
              {s.cta.label}
              {ARROW}
            </a>
          ) : (
            <Link href={s.cta.href} className={linkClass}>
              {s.cta.label}
              {ARROW}
            </Link>
          ))}
      </Reveal>
      <Reveal
        delay={0.08}
        className={flipped ? "order-1 max-[960px]:order-2" : ""}
      >
        <Shot alt={s.h2} />
      </Reveal>
    </div>
  );
}

/* .tsd-cards — three feature cards with rose icon chip. */
function CardsBlock({ s }: { s: CardsSection }) {
  return (
    <>
      <SHead eyebrow={s.eyebrow} h2={s.h2} intro={s.intro} />
      <div className="grid grid-cols-3 gap-[22px] mt-[46px] max-[960px]:grid-cols-1">
        {s.cards.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 3) * 0.06}
            className="bg-white border border-warm rounded-[18px] py-7 px-[26px] shadow-[0_16px_30px_rgba(110,11,14,0.10)]"
          >
            <div className="w-11 h-11 rounded-[13px] bg-rose-100 text-coral flex items-center justify-center mb-4">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>
            <p className="text-[17px] font-bold m-0">{c.title}</p>
            <p className="text-[14px] leading-[1.6] text-body2 mt-2 mb-0">{c.desc}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* .tsd-fgrid — numbered feature grid (ink number chip). */
function GridBlock({ s }: { s: GridSection }) {
  return (
    <>
      <SHead eyebrow={s.eyebrow} h2={s.h2} intro={s.intro} />
      <div className="grid grid-cols-3 gap-5 mt-[46px] max-[960px]:grid-cols-1">
        {s.cards.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 3) * 0.06}
            className="bg-white border border-warm rounded-2xl py-[26px] px-6"
          >
            <div className="w-8 h-8 rounded-[9px] bg-ink text-white flex items-center justify-center text-[13px] font-extrabold mb-[14px]">
              {i + 1}
            </div>
            <p className="text-[17px] font-bold m-0">{c.title}</p>
            <p className="text-[14px] leading-[1.6] text-body2 mt-2 mb-0">{c.desc}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* .tsd-steps — numbered process steps (coral number chip), 4-up. */
function StepsBlock({ s }: { s: StepsSection }) {
  return (
    <>
      <SHead eyebrow={s.eyebrow} h2={s.h2} />
      <div className="grid grid-cols-4 gap-5 mt-[46px] max-[960px]:grid-cols-2">
        {s.steps.map((st, i) => (
          <Reveal
            key={st.title}
            delay={(i % 4) * 0.06}
            className="bg-white border border-warm rounded-[18px] py-[26px] px-[22px] shadow-[0_16px_30px_rgba(110,11,14,0.10)]"
          >
            <div className="w-[34px] h-[34px] rounded-full bg-coral text-white flex items-center justify-center text-[14px] font-extrabold mb-[14px]">
              {i + 1}
            </div>
            <p className="text-[17px] font-bold m-0">{st.title}</p>
            <p className="text-[14px] leading-[1.6] text-body2 mt-2 mb-0">{st.desc}</p>
          </Reveal>
        ))}
      </div>
    </>
  );
}

/* .tsd-chips — centered pill cloud. */
function ChipsBlock({ s }: { s: ChipsSection }) {
  return (
    <>
      <Reveal className="text-center max-w-[720px] mx-auto">
        <h2 className={H2_CLASS}>{s.h2}</h2>
      </Reveal>
      <div className="flex gap-[10px] flex-wrap mt-7 justify-center">
        {s.chips.map((ch) => (
          <span
            key={ch}
            className="bg-white border border-warm2 rounded-full px-[18px] py-[9px] text-[13.5px] font-semibold text-body"
          >
            {ch}
          </span>
        ))}
      </div>
    </>
  );
}

/**
 * Renders the data-driven section list. Backgrounds alternate
 * white → sand per section index; split sections alternate media
 * side independently — both exactly as the template's logic class.
 */
export function SolutionSections({ sections }: { sections: Section[] }) {
  const rendered: ReactNode[] = [];
  let flip = false;
  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    let content: ReactNode;
    if (s.kind === "split") {
      content = <SplitBlock s={s} flipped={flip} />;
      flip = !flip;
    } else if (s.kind === "cards") {
      content = <CardsBlock s={s} />;
    } else if (s.kind === "grid") {
      content = <GridBlock s={s} />;
    } else if (s.kind === "steps") {
      content = <StepsBlock s={s} />;
    } else {
      content = <ChipsBlock s={s} />;
    }
    rendered.push(
      <section
        key={i}
        className={`py-24 max-[960px]:py-16 ${i % 2 === 1 ? "bg-sand" : ""}`}
      >
        <div className="max-w-[1240px] mx-auto px-7">{content}</div>
      </section>
    );
  }
  return <>{rendered}</>;
}
