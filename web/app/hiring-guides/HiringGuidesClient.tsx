"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

const CAT_COLORS: Record<string, string> = {
  Tech: "linear-gradient(135deg,#7C5CFF,#5B7BFF)",
  Data: "linear-gradient(135deg,#1FB57A,#12A063)",
  Marketing: "linear-gradient(135deg,#FF9F43,#F76A2E)",
  Design: "linear-gradient(135deg,#F76A6E,#F23F44)",
  Sales: "linear-gradient(135deg,#3BC9DB,#2A9DB5)",
  Ops: "linear-gradient(135deg,#B084F2,#8A5CF0)",
};

type Guide = { role: string; cat: string; desc: string };

const GUIDES: Guide[] = [
  { role: "Software Engineer", cat: "Tech", desc: "Hire developers who can actually build — with a JD, coding-focused questions and skills to test." },
  { role: "Data Analyst", cat: "Data", desc: "Everything to hire an analyst: JD, SQL and reasoning questions, and the skills that matter." },
  { role: "Data Scientist", cat: "Data", desc: "Find data scientists who turn data into decisions, with ready JDs and interview prompts." },
  { role: "Product Manager", cat: "Tech", desc: "Assess prioritisation, judgment and execution with a full PM hiring guide." },
  { role: "Graphic Designer", cat: "Design", desc: "Hire for craft and creativity with JDs, portfolio prompts and a skills checklist." },
  { role: "UX Designer", cat: "Design", desc: "Screen for research, interaction and visual skills with a structured guide." },
  { role: "Social Media Manager", cat: "Marketing", desc: "Boost your presence — JD, interview questions and skills to test for social roles." },
  { role: "Content Writer", cat: "Marketing", desc: "Hire writers who can inform and convert, with prompts and a skills rubric." },
  { role: "Digital Marketer", cat: "Marketing", desc: "Assess channels, analytics and campaign thinking with a complete guide." },
  { role: "Sales Representative", cat: "Sales", desc: "Find closers with role-play prompts, JD and the exact selling skills to test." },
  { role: "Customer Success Manager", cat: "Sales", desc: "Hire for retention and empathy with a structured CSM interview guide." },
  { role: "Administrative Assistant", cat: "Ops", desc: "Simplify hiring with JDs, organisation and communication questions, and skills to test." },
  { role: "Virtual Assistant", cat: "Ops", desc: "Find reliable VAs with a ready JD, screening questions and a skills checklist." },
  { role: "HR Manager", cat: "Ops", desc: "Assess people-ops judgment and process skills with a full HR hiring guide." },
  { role: "DevOps Engineer", cat: "Tech", desc: "Screen for CI/CD, cloud and reliability skills with a technical hiring guide." },
];

const CATS = ["All", "Tech", "Data", "Marketing", "Design", "Sales", "Ops"];

// The prototype's slug() returns the single article for every card.
const DETAIL_HREF = `${routes.resourcesHiringGuides}/skills-based-hiring-playbook`;

function initials(role: string) {
  return role
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function HiringGuidesClient() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let l = GUIDES;
    if (cat !== "All") l = l.filter((g) => g.cat === cat);
    if (q)
      l = l.filter(
        (g) =>
          g.role.toLowerCase().includes(q) ||
          g.desc.toLowerCase().includes(q) ||
          g.cat.toLowerCase().includes(q)
      );
    return l;
  }, [query, cat]);

  const q = query.trim();
  const active = q !== "" || cat !== "All";
  const totalLabel = active ? String(list.length) : "90+";
  const isEmpty = list.length === 0;

  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden px-7 pt-[62px] pb-11 max-[640px]:px-[22px] max-[640px]:pt-11 max-[640px]:pb-[34px] text-center bg-[radial-gradient(1000px_460px_at_50%_-12%,#FFF0EE_0%,rgba(255,240,238,0)_62%),#fff]">
        <div className="mx-auto max-w-[820px]">
          <div className="text-[13px] text-muted flex gap-2 items-center justify-center mb-[18px]">
            <Link href={routes.blog} className="hover:text-coral">
              Resources
            </Link>
            <span>/</span>
            <span>Hiring guides</span>
          </div>
          <Reveal
            as="p"
            className="text-[13px] font-bold tracking-[0.16em] uppercase text-coral m-0 mb-4"
          >
            Hiring guides<span className="text-coral">.</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="text-[52px] max-[640px]:text-[36px] leading-[1.05] font-extrabold tracking-[-1.6px] m-0 text-ink"
          >
            Everything you need
            <br />
            <em className="not-italic text-coral">to hire any role</em>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="text-[18px] leading-[1.6] text-body mx-auto mt-[18px] max-w-[600px]"
          >
            Role-by-role guides with ready-to-use job descriptions, interview
            questions and the exact skills to test for — so you hire on proof, not
            gut feel.
          </Reveal>
          <Reveal
            delay={0.17}
            className="flex items-center gap-[11px] max-w-[520px] mx-auto mt-7 bg-white border-[1.5px] border-warm rounded-[14px] py-[13px] px-[18px] shadow-[0_12px_30px_rgba(110,11,14,0.07)] transition-[border-color,box-shadow] duration-200 focus-within:border-[#FBD0D1] focus-within:shadow-[0_12px_34px_rgba(242,63,68,0.14)]"
          >
            <svg className="text-[#B29A9E] flex-none" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search 90+ role guides…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 outline-0 font-[inherit] text-[16px] text-ink bg-transparent w-full placeholder:text-[#B29A9E]"
            />
          </Reveal>
          <Reveal delay={0.21} className="flex gap-2 justify-center flex-wrap mt-[22px]">
            {CATS.map((c) => {
              const on = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full py-2 px-4 text-[13px] font-semibold cursor-pointer font-[inherit] border transition-all duration-[180ms] ${
                    on
                      ? "bg-coral text-white border-coral"
                      : "bg-white text-[#6A5A5D] border-[#EFE2E3] hover:border-[#FBD0D1] hover:text-coral"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* results */}
      <section className="px-7 pt-[52px] pb-[90px] max-[640px]:px-[22px]">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[13.5px] text-muted font-medium m-0 mb-[22px] text-center">
            Showing <b className="text-coral font-bold">{list.length}</b> of {totalLabel} guides
          </p>
          {isEmpty && (
            <div className="text-center py-[60px] px-5 text-muted text-[16px]">
              No guides match “<b className="text-ink">{q}</b>”. Try another role or{" "}
              <Link href={routes.contact} className="text-coral font-bold">
                request one
              </Link>
              .
            </div>
          )}
          <Reveal className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1 gap-[18px]">
            {list.map((g) => (
              <Link
                key={g.role}
                href={DETAIL_HREF}
                className="flex flex-col bg-white border border-[#F2E6E7] rounded-[18px] p-6 transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                <div className="flex items-center gap-[13px] mb-[14px]">
                  <span
                    className="w-11 h-11 rounded-[12px] text-white flex items-center justify-center flex-none font-extrabold text-[16px]"
                    style={{ background: CAT_COLORS[g.cat] || CAT_COLORS.Tech }}
                  >
                    {initials(g.role)}
                  </span>
                  <div>
                    <p className="text-[10.5px] font-bold tracking-[0.06em] uppercase text-faint m-0">{g.cat}</p>
                    <p className="text-[17px] font-bold tracking-[-0.3px] m-0 mt-0.5 text-ink">{g.role}</p>
                  </div>
                </div>
                <p className="text-[14px] leading-[1.55] text-[#7C6A6D] m-0 mb-4">{g.desc}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {["Job description", "Interview questions", "Skills to test"].map((chip) => (
                    <span key={chip} className="text-[11.5px] font-semibold text-body2 bg-sand rounded-[100px] py-[5px] px-[11px]">
                      {chip}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
