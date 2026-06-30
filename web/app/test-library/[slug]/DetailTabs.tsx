"use client";

import { useState, type ReactNode } from "react";

type Skill = { title: string; sub: string; icon: ReactNode };
type Sample = { num: string; q: ReactNode; a: ReactNode };

export type DetailTabContent = {
  measures: string[];
  whoFor: string;
  skills: Skill[];
  samples: Sample[];
};

type Tab = "over" | "skills" | "sample";

export default function DetailTabs({ content }: { content: DetailTabContent }) {
  const [tab, setTab] = useState<Tab>("over");

  const tabBtn = (key: Tab, label: string) => (
    <button
      type="button"
      onClick={() => setTab(key)}
      className={`border-0 bg-none font-[inherit] text-[15px] font-semibold px-1.5 py-3.5 -mb-px border-b-2 cursor-pointer transition-all duration-200 ${
        tab === key
          ? "text-coral border-coral"
          : "text-[#9A878A] border-transparent"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-[840px] mx-auto">
      <div className="flex gap-2 border-b border-[#F1E6E7] mb-[30px] flex-wrap">
        {tabBtn("over", "Overview")}
        {tabBtn("skills", "Skills covered")}
        {tabBtn("sample", "Sample questions")}
      </div>

      {tab === "over" && (
        <div>
          <h2 className="text-[34px] leading-[1.1] font-extrabold tracking-[-1.2px] text-ink m-0 mb-4 max-[920px]:text-[27px]">
            What this test measures
          </h2>
          {content.measures.map((p, i) => (
            <p key={i} className="text-[16px] leading-[1.66] text-body mb-3.5">
              {p}
            </p>
          ))}
          <h2 className="text-[34px] leading-[1.1] font-extrabold tracking-[-1.2px] text-ink mt-9 mb-4 max-[920px]:text-[27px]">
            Who it&apos;s for
          </h2>
          <p className="text-[16px] leading-[1.66] text-body m-0">{content.whoFor}</p>
        </div>
      )}

      {tab === "skills" && (
        <div>
          <h2 className="text-[34px] leading-[1.1] font-extrabold tracking-[-1.2px] text-ink m-0 mb-[22px] max-[920px]:text-[27px]">
            Skills covered
          </h2>
          <div className="grid grid-cols-2 gap-3.5 max-[920px]:grid-cols-1">
            {content.skills.map((s) => (
              <div
                key={s.title}
                className="flex items-center gap-3 bg-white border border-[#EFE2E3] rounded-[14px] px-[18px] py-4"
              >
                <span className="shrink-0 w-[38px] h-[38px] rounded-[10px] bg-sand text-[#C0242B] flex items-center justify-center">
                  {s.icon}
                </span>
                <div>
                  <div className="font-bold text-[14.5px] text-ink">{s.title}</div>
                  <div className="text-[12.5px] text-[#9A878A]">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "sample" && (
        <div>
          <h2 className="text-[34px] leading-[1.1] font-extrabold tracking-[-1.2px] text-ink m-0 mb-[22px] max-[920px]:text-[27px]">
            Sample questions
          </h2>
          {content.samples.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-[#EFE2E3] rounded-2xl p-6 mb-3.5"
            >
              <p className="text-[12px] font-bold tracking-[0.08em] text-[#D98A8D] m-0 mb-2">
                {s.num}
              </p>
              <p className="text-[18px] leading-[1.25] font-bold tracking-[-0.3px] text-ink m-0 mb-1.5">
                {s.q}
              </p>
              <p className="text-[14px] leading-[1.66] text-body m-0">{s.a}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
