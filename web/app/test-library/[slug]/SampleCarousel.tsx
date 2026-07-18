"use client";

import { useRef } from "react";

export type SampleOpt = { text: string; correct?: boolean };
export type SampleQ = {
  title: string;
  multi: boolean;
  ask: string;
  opts: SampleOpt[];
};

const ChevronLeft = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const CheckMark = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/**
 * Sample-questions carousel — a horizontally scroll-snapping track of
 * question cards with prev/next controls, ported from the prototype's
 * `.sqtrack`/`.sqcard`/`.sqctrl` pattern (correct answer highlighted green).
 */
export default function SampleCarousel({ samples }: { samples: SampleQ[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (el)
      el.scrollBy({
        left: dir * Math.round(el.clientWidth * 0.85),
        behavior: "smooth",
      });
  };

  return (
    <>
      <div className="flex gap-[10px] justify-end mb-[22px]">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous questions"
          className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#EADDDE] bg-white text-ink flex items-center justify-center cursor-pointer transition-[border-color,color,box-shadow,transform,translate] duration-200 hover:border-[#F4B9BB] hover:text-coral hover:shadow-[0_8px_20px_rgba(110,11,14,0.08)] hover:-translate-y-px"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next questions"
          className="w-[46px] h-[46px] rounded-full border-[1.5px] border-[#EADDDE] bg-white text-ink flex items-center justify-center cursor-pointer transition-[border-color,color,box-shadow,transform,translate] duration-200 hover:border-[#F4B9BB] hover:text-coral hover:shadow-[0_8px_20px_rgba(110,11,14,0.08)] hover:-translate-y-px"
        >
          <ChevronRight />
        </button>
      </div>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pt-1.5 px-0.5 pb-3.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {samples.map((s, i) => (
          <div
            key={i}
            className="flex-[0_0_384px] snap-start flex flex-col bg-white border-[1.4px] border-[#F1DADB] rounded-[18px] p-[26px] shadow-[0_18px_40px_rgba(110,11,14,0.08)] max-[640px]:flex-[0_0_84%]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="w-[34px] h-[34px] rounded-[10px] bg-[#FFF0EF] text-coral text-[13px] font-bold flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#8A767A] bg-sand px-[11px] py-[5px] rounded-full">
                {s.multi ? "Select all that apply" : "Select one"}
              </span>
            </div>
            <p className="text-[12.5px] font-bold tracking-[0.08em] uppercase text-[#C0242B] m-0 mb-2">
              {s.title}
            </p>
            <p className="text-[16px] leading-[1.45] font-bold tracking-[-0.2px] text-ink m-0 mb-[18px]">
              {s.ask}
            </p>
            <div className="flex flex-col gap-[10px] mt-auto">
              {s.opts.map((o, j) => (
                <div
                  key={j}
                  className={`flex items-center gap-[11px] text-[13.5px] leading-[1.4] rounded-[11px] px-[13px] py-[11px] ${
                    o.correct
                      ? "bg-[#EAF7EF] border border-[#9FDDB6] text-[#136B3E] font-semibold"
                      : "bg-[#FDFAF9] border border-[#F0E6E4] text-[#46383C]"
                  }`}
                >
                  <span
                    className={`flex-none w-6 h-6 rounded-[7px] text-[12px] font-bold flex items-center justify-center ${
                      o.correct ? "bg-[#1FA463] text-white" : "bg-[#FBF1F0] text-[#C0242B]"
                    }`}
                  >
                    {o.correct ? <CheckMark /> : String.fromCharCode(65 + j)}
                  </span>
                  <span>{o.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
