"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

/* ---------------- Turnover calculator ---------------- */
function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function TurnoverCalculator() {
  const [employees, setEmployees] = useState(500);
  const emp = employees < 0 ? 0 : employees;
  const loss = emp * 0.6 * 4000;
  const save = loss * 0.25;

  return (
    <Reveal className="rt-media">
      <div className="bg-ink rounded-[22px] p-8 text-white shadow-[0_30px_70px_rgba(110,11,14,0.18)]">
        <div className="flex justify-between items-center text-[12.5px] font-bold tracking-[0.12em] uppercase text-[#C9A9AB]">
          <span>What turnover costs you</span>
          <span className="text-[#FF9E7A]">Live estimate</span>
        </div>
        <div className="flex justify-between text-[15px] font-bold mt-5 mb-2">
          <span>Store employees</span>
          <span>{emp.toLocaleString("en-US")}</span>
        </div>
        <input
          type="range"
          min={10}
          max={5000}
          step={10}
          value={employees}
          onChange={(e) => setEmployees(Number(e.target.value))}
          className="rt-range w-full"
        />
        <div className="text-[52px] font-extrabold tracking-[-2px] leading-none mt-6 mb-1 bg-gradient-to-b from-white to-[#FFC9BD] bg-clip-text text-transparent">
          {money(loss)}
        </div>
        <div className="text-[13.5px] text-[#C2B1B4]">lost to turnover every year</div>
        <div className="mt-5 pt-[18px] border-t border-[#3A2529] text-[14.5px] leading-[1.5] text-[#F1E7E8]">
          Cut turnover just 25% with better hiring and save{" "}
          <b className="text-[#7FE0A6]">{money(save)}</b> a year.
        </div>
        <div className="text-[11.5px] text-muted mt-[14px] leading-[1.5]">
          Based on ~60% retail turnover (BLS) and $4,000 average replacement cost (McKinsey). Adjust the
          slider for your business.
        </div>
      </div>
      <style>{`
        .rt-range{-webkit-appearance:none;appearance:none;height:6px;border-radius:6px;background:#3A2529;outline:none;}
        .rt-range::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#F23F44;cursor:pointer;box-shadow:0 4px 12px rgba(242,63,68,.5);}
        .rt-range::-moz-range-thumb{width:22px;height:22px;border:none;border-radius:50%;background:#F23F44;cursor:pointer;}
      `}</style>
    </Reveal>
  );
}

/* ---------------- Sample question quiz ---------------- */
const OPTIONS = [
  { letter: "A", text: "Explain that online orders can only be refunded online." },
  { letter: "B", text: "Apologize, take ownership, and offer an immediate fix." },
  { letter: "C", text: "Call a manager and step away from the counter." },
  { letter: "D", text: "Walk them through the full return policy first." },
];

export function SampleQuestion() {
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <Reveal className="rt-media">
      <div className="bg-white border border-warm rounded-[22px] px-8 py-[30px] shadow-[0_24px_50px_rgba(110,11,14,0.10)]">
        <span className="text-[12px] font-bold tracking-[0.08em] uppercase text-coral">
          Customer Service Scenario · Sample question
        </span>
        <p className="text-[18px] font-bold leading-[1.4] mt-3 mb-5">
          A customer is upset that their online order arrived damaged and wants a refund on the spot.
          What is the best first move?
        </p>
        {OPTIONS.map((o) => {
          let stateCls = "border-[#EADDDE] bg-[#FCFAFA]";
          let letterCls = "bg-[#F1E2E2] text-body";
          if (picked) {
            if (o.letter === "B") {
              stateCls = "border-[#1FA463] bg-[#E8F6EE]";
              letterCls = "bg-[#1FA463] text-white";
            } else if (o.letter === picked) {
              stateCls = "border-[#E7B4B4] bg-[#FDECEC]";
            }
          }
          return (
            <button
              key={o.letter}
              type="button"
              onClick={() => setPicked(o.letter)}
              className={`flex gap-3 items-start w-full text-left border-[1.5px] rounded-xl px-4 py-[14px] text-[14.5px] font-medium text-ink cursor-pointer mb-[10px] transition-[border-color,background] duration-200 hover:border-rose-200 ${stateCls}`}
            >
              <span
                className={`w-6 h-6 rounded-[7px] font-extrabold text-[13px] flex items-center justify-center shrink-0 ${letterCls}`}
              >
                {o.letter}
              </span>
              <span>{o.text}</span>
            </button>
          );
        })}
        {picked && (
          <div className="mt-2 bg-[#E8F6EE] border border-[#C7E9D5] rounded-xl px-[18px] py-4 text-[14px] leading-[1.55] text-[#1A6B44]">
            ✓ Best answer: B. Strong associates de-escalate first, own the problem, and fix it fast.
            That&apos;s exactly what Testlify scores.
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ---------------- Copy column beside the quiz ---------------- */
const Check = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 mt-[3px] text-[#1FA463]"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function SampleQuestionCopy() {
  return (
    <Reveal className="rt-copy">
      <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-muted m-0">
        See it in action<b className="text-coral">.</b>
      </p>
      <h2 className="text-[34px] font-extrabold tracking-[-0.8px] leading-[1.16] mt-[14px] text-balance">
        Try a question your candidates would get
      </h2>
      <p className="text-[15.5px] leading-[1.64] text-body mt-[14px]">
        Real retail scenarios that reveal judgment and instinct, not a confident interview. Every
        question is validated and scored automatically.
      </p>
      <div className="flex flex-col gap-3 mt-[22px]">
        <div className="flex gap-[10px] items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
          <Check />
          Situational judgment tested with real store scenarios.
        </div>
        <div className="flex gap-[10px] items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
          <Check />
          Scored instantly — no grading, no subjectivity.
        </div>
        <div className="flex gap-[10px] items-start text-[15px] leading-[1.5] text-[#46383C] font-medium">
          <Check />
          One of thousands of retail questions in the Testlify library.
        </div>
      </div>
      <p className="text-[15.5px] leading-[1.64] mt-[14px] font-semibold text-ink">
        Plugs into your ATS. Live in days. SOC 2, GDPR &amp; ISO 27001 certified.
      </p>
      <Link
        className="inline-flex items-center gap-2 mt-6 text-coral font-bold text-[15.5px] group"
        href={routes.pricing}
      >
        Build a free assessment
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform group-hover:translate-x-1"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </Reveal>
  );
}

/* ---------------- Animated stat number (counts up on scroll into view) ---------------- */
export function StatNumber({ to, comma }: { to: number; comma?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (done.current) return;
      done.current = true;
      const dur = 1500;
      let st: number | null = null;
      const tick = (t: number) => {
        if (st === null) st = t;
        const p = Math.min(1, (t - st) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        setVal(to * e);
        if (p < 1) requestAnimationFrame(tick);
        else setVal(to);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting) {
            run();
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, comma]);

  return <span ref={ref}>{comma ? Math.round(val).toLocaleString("en-US") : Math.round(val)}</span>;
}
