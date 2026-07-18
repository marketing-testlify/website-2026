"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

/* Animated outcome metrics — ported from solution-index.dc.html's `.metricrow`.
   Each value counts up from 0 (with optional decimals) once scrolled into view,
   with column dividers and an orange unit suffix. */
type Metric = { to: number; dec?: number; unit: string; label: string };

const METRICS: Metric[] = [
  { to: 68, unit: "%", label: "faster time-to-hire" },
  { to: 3.2, dec: 1, unit: "×", label: "more qualified shortlists" },
  { to: 91, unit: "%", label: "candidate completion rate" },
  { to: 40, unit: "%", label: "lower cost per hire" },
];

function CountUp({ to, dec = 0 }: { to: number; dec?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let started = false;
    const fmt = (n: number) => (dec ? n.toFixed(dec) : String(Math.round(n)));
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
  }, [to, dec]);
  return <span ref={ref}>0</span>;
}

export default function OutcomesMetrics() {
  return (
    <Reveal className="grid grid-cols-4 max-[920px]:grid-cols-2 max-[920px]:gap-y-[34px]">
      {METRICS.map((m, i) => (
        <div
          key={m.label}
          className={`text-center px-[22px] py-1 ${
            i > 0 ? "border-l border-white/[0.14] max-[920px]:border-l-0" : ""
          }`}
        >
          <div className="text-[34px] font-bold tracking-[-1px] leading-none text-white tabular-nums">
            <CountUp to={m.to} dec={m.dec} />
            <span className="text-[#FF7A52] font-semibold">{m.unit}</span>
          </div>
          <p
            className="text-[14px] font-medium leading-[1.45] m-0"
            style={{ marginTop: 10, color: "rgba(255,255,255,0.72)" }}
          >
            {m.label}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
