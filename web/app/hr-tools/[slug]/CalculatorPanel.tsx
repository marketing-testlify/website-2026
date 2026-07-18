"use client";

import { useState } from "react";
import { CALCULATORS } from "./calculators";

/**
 * Live HR calculator. Reproduces the prototype's input→output behaviour:
 * every keystroke updates state and recomputes the result + breakdown rows
 * synchronously (compute() is a pure function on the current field values).
 */
export default function CalculatorPanel({ slug }: { slug: string }) {
  const cfg = CALCULATORS[slug];

  // Seed state from each field's default value (as strings, like <input> values).
  const [vals, setVals] = useState<Record<string, string>>(() =>
    Object.fromEntries(cfg.fields.map((f) => [f.key, String(f.value)]))
  );

  const set = (key: string, v: string) =>
    setVals((prev) => ({ ...prev, [key]: v }));

  const result = cfg.compute(vals);

  return (
    <div className="grid grid-cols-[1.05fr_1fr] gap-7 items-stretch max-[900px]:grid-cols-1">
      {/* Inputs */}
      <div className="bg-white border border-[#F0E2E3] rounded-[22px] p-8 shadow-[0_20px_44px_rgba(110,11,14,0.08)]">
        <p className="text-[12.5px] font-bold tracking-[0.16em] uppercase text-muted m-0 mb-[22px]">
          Your numbers<b className="text-coral">.</b>
        </p>
        {cfg.fields.map((f, i) => (
          <div
            key={f.key}
            className={i === cfg.fields.length - 1 ? "mb-0" : "mb-5"}
          >
            <label
              htmlFor={`f-${f.key}`}
              className="block text-[13.5px] font-bold text-ink mb-2"
            >
              {f.label}
              {f.hint && (
                <span className="font-medium text-muted text-[12px] ml-[6px]">
                  {f.hint}
                </span>
              )}
            </label>
            <div className={f.prefix ? "relative" : undefined}>
              {f.prefix && (
                <span className="absolute left-[14px] top-1/2 -translate-y-1/2 font-bold text-faint text-[15px]">
                  {f.prefix}
                </span>
              )}
              <input
                id={`f-${f.key}`}
                type="number"
                min={f.min}
                value={vals[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                className={`w-full h-[50px] border-[1.5px] border-warm2 rounded-xl ${
                  f.prefix ? "pl-8 pr-4" : "px-4"
                } font-[inherit] text-[16px] font-semibold text-ink bg-[#FCFAFA] transition-[border-color,box-shadow] duration-200 outline-none focus:border-coral focus:shadow-[0_0_0_4px_rgba(242,63,68,0.12)] focus:bg-white`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="rounded-[22px] p-[34px] text-white flex flex-col justify-center bg-[linear-gradient(160deg,#1A1014,#2A1418)]">
        <p className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-[#C9A9AB] m-0">
          {cfg.resultLabel}
        </p>
        <p
          className="text-[64px] font-extrabold tracking-[-2px] leading-none mt-3 mb-0 bg-clip-text text-transparent bg-[linear-gradient(180deg,#fff,#FFC9BD)] [-webkit-text-fill-color:transparent]"
        >
          {result.value}
        </p>
        <p className="text-[14.5px] text-[#C2B1B4] mt-[14px] mb-0 leading-[1.5]">
          {result.note}
        </p>
        <div className="mt-[22px] pt-5 border-t border-[#3A2529] flex flex-col gap-[10px]">
          {result.rows.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between text-[13.5px]"
            >
              <span className="text-[#A38E92]">{r.label}</span>
              <span className="font-bold text-[#F1E7E8]">{r.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
