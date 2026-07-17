"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

/* Count-up stat band, ported from the prototype's `.statrow` counters
   (data-to / data-comma). Values animate from 0 once scrolled into view. */
type Stat = { to: number; comma?: boolean; unit: string; label: string };

const STATS: Stat[] = [
  { to: 3500, comma: true, unit: "+", label: "Ready-made validated tests" },
  { to: 4500, comma: true, unit: "+", label: "Job roles covered" },
  { to: 100, unit: "+", label: "Native ATS integrations" },
];

function CountUp({ to, comma }: { to: number; comma?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const fmt = (n: number) => {
      const r = Math.round(n);
      return comma ? r.toLocaleString("en-US") : String(r);
    };
    const run = () => {
      if (started) return;
      started = true;
      const dur = 1500;
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * e);
        if (p < 1) raf = requestAnimationFrame(step);
        else el.textContent = fmt(to);
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && run()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, comma]);
  return <span ref={ref}>0</span>;
}

export default function StatsBand() {
  return (
    <Reveal className="grid grid-cols-3 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1 max-[960px]:gap-y-[34px]">
      {STATS.map((s, i) => (
        <div
          key={s.label}
          className={`text-center px-[22px] py-1 ${
            i > 0 ? "border-l border-[#EFE3E4] max-[960px]:border-l-0" : ""
          }`}
        >
          <div className="text-[34px] font-bold tracking-[-1px] leading-none text-ink tabular-nums">
            <CountUp to={s.to} comma={s.comma} />
            <span className="text-[#D98C8F] font-semibold">{s.unit}</span>
          </div>
          <p className="text-[14px] text-[#6C5A5D] font-medium mt-[10px] leading-[1.45]">
            {s.label}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
