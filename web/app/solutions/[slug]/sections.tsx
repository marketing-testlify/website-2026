import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";
import { ATS_LOGOS, AWARDS } from "./data";
import type {
  Bullet,
  BulletsSection,
  CardsSection,
  ChipsSection,
  GridSection,
  Section,
  SplitSection,
  StepsSection,
  Testimonial,
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
export function Shot({ alt, src }: { alt: string; src?: string }) {
  return (
    <div className="bg-white border border-warm rounded-[22px] p-[10px] shadow-[0_40px_90px_rgba(110,11,14,0.14)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src ?? SHOT_SRC}
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
  const oneCol = s.blOneCol || (s.bullets ?? []).some((b) => !!b.desc);
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
              oneCol ? "grid-cols-1" : "grid-cols-2 max-[960px]:grid-cols-1"
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
        <Shot alt={s.h2} src={s.img} />
      </Reveal>
    </div>
  );
}

/* .tsd-bullets — copy + eyebrow with an inline bullet list (no media). */
function BulletsBlock({ s }: { s: BulletsSection }) {
  const oneCol = s.blOneCol || s.bullets.some((b) => !!b.desc);
  const linkClass =
    "inline-flex items-center gap-[7px] mt-6 text-[15px] font-bold text-coral transition-colors hover:text-coral-deep";
  return (
    <Reveal className="max-w-[820px] mx-auto text-center">
      {s.eyebrow && (
        <p className={EYEBROW_CLASS}>
          {s.eyebrow}
          <b className="text-coral">.</b>
        </p>
      )}
      <h2 className={H2_CLASS}>{s.h2}</h2>
      {s.body.map((para) => (
        <p key={para} className="text-[15.5px] leading-[1.64] text-body mt-[14px] mb-0">
          {para}
        </p>
      ))}
      <div
        className={`grid gap-x-6 gap-y-3 mt-[26px] text-left ${
          oneCol ? "grid-cols-1 max-w-[520px] mx-auto" : "grid-cols-2 max-[960px]:grid-cols-1"
        }`}
      >
        {s.bullets.map((b) => (
          <BulletItem key={b.label} b={b} />
        ))}
      </div>
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
    } else if (s.kind === "bullets") {
      content = <BulletsBlock s={s} />;
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

/* Initials from a full name, e.g. "Priya Nair" → "PN". */
function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const STAR = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 18.6 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8z" />
  </svg>
);

/* .tsd-sec testimonials band — three review cards on white. */
export function TestimonialsBand({ items }: { items: Testimonial[] }) {
  return (
    <section className="py-24 max-[960px]:py-16">
      <div className="max-w-[1240px] mx-auto px-7">
        <Reveal className="text-center max-w-[720px] mx-auto">
          <p className={EYEBROW_CLASS}>
            Loved by hiring teams<b className="text-coral">.</b>
          </p>
          <h2 className={H2_CLASS}>Recruiters who hire on proof</h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-[22px] mt-[46px] max-[960px]:grid-cols-1">
          {items.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 0.06}
              className="flex flex-col bg-white border border-warm rounded-[18px] py-7 px-[26px] shadow-[0_16px_30px_rgba(110,11,14,0.10)]"
            >
              <div className="flex gap-[3px] text-coral mb-[14px]">
                {STAR}
                {STAR}
                {STAR}
                {STAR}
                {STAR}
              </div>
              <p className="text-[15.5px] leading-[1.6] text-[#3A2C30] m-0 mb-5">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <span className="w-[42px] h-[42px] rounded-full bg-rose-200 text-coral-deep flex items-center justify-center font-extrabold text-[15px] flex-none">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-[14.5px] font-bold text-ink">
                    {t.name}
                  </span>
                  <span className="block text-[12.5px] text-muted">{t.role}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* .tsd-sec.tsd-sand ATS band — logo pills + "+100 more". */
export function AtsBand() {
  return (
    <section className="py-24 max-[960px]:py-16 bg-sand">
      <div className="max-w-[1240px] mx-auto px-7">
        <SHead
          eyebrow="Fits your stack"
          h2="Works with the ATS you already use"
          intro="Push assessment results straight into your workflow with 100+ native, two-way integrations."
        />
        <Reveal className="flex gap-3 flex-wrap justify-center mt-10">
          {ATS_LOGOS.map((a) => (
            <span
              key={a}
              className="bg-white border border-warm rounded-[12px] px-[22px] py-[14px] text-[15px] font-bold text-body2 shadow-[0_8px_18px_rgba(110,11,14,0.06)]"
            >
              {a}
            </span>
          ))}
          <Link
            href={routes.integrations}
            className="bg-rose-100 border border-rose-200 text-coral rounded-[12px] px-[22px] py-[14px] text-[15px] font-bold inline-flex items-center gap-[6px] transition-colors hover:bg-rose-200"
          >
            +100 more
            {ARROW}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* .tsd-sec.tsd-sand awards band — recognition cards. */
export function AwardsBand() {
  return (
    <section className="py-24 max-[960px]:py-16 bg-sand">
      <div className="max-w-[1240px] mx-auto px-7">
        <SHead
          eyebrow="Awards & recognition"
          h2="Recognized by the people who use it"
        />
        <Reveal className="flex gap-4 flex-wrap justify-center mt-10">
          {AWARDS.map((aw) => (
            <div
              key={aw.t}
              className="flex flex-col items-center gap-[10px] bg-white border border-warm rounded-[16px] py-[22px] px-[26px] min-w-[150px] shadow-[0_12px_26px_rgba(110,11,14,0.08)]"
            >
              <span className="w-11 h-11 rounded-full bg-rose-100 text-coral flex items-center justify-center">
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
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
                </svg>
              </span>
              <span className="text-[13.5px] font-bold text-ink text-center">
                {aw.t}
              </span>
              <span className="text-[11.5px] text-muted">{aw.s}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
