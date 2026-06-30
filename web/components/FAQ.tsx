"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <div>
      {items.map((it, i) => {
        const isOpen = !!open[i];
        return (
          <div key={it.q} className="border-b border-[#F1E2E3]">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen((s) => ({ ...s, [i]: !s[i] }));
                }
              }}
              className="cursor-pointer flex items-center justify-between gap-[22px] py-6 px-1"
            >
              <span className="text-[18.5px] font-semibold tracking-[-0.3px] text-ink">{it.q}</span>
              <span
                className="text-[26px] font-light text-coral transition-transform duration-300 leading-none shrink-0"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </div>
            <div
              className="overflow-hidden transition-[max-height,opacity] duration-[420ms] ease"
              style={{
                maxHeight: isOpen ? 800 : 0,
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p className="text-[16px] leading-[1.64] text-body m-0 mb-6 max-w-[780px]">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
