"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { routes } from "@/lib/routes";

type Jd = { role: string; cat: string; desc: string };

// Extracted verbatim from resource-jd-templates.dc.html (JDS array).
const JDS: Jd[] = [
  { role: "Software Engineer", cat: "Engineering", desc: "Responsibilities, must-have skills and seniority variants for backend, frontend and full-stack." },
  { role: "DevOps Engineer", cat: "Engineering", desc: "CI/CD, cloud and reliability responsibilities with a skills-first requirements section." },
  { role: "QA Engineer", cat: "Engineering", desc: "Manual and automation testing duties, tools and the quality skills to screen for." },
  { role: "Product Manager", cat: "Product", desc: "Ownership, prioritisation and cross-functional responsibilities, ready to customise." },
  { role: "Data Analyst", cat: "Data", desc: "SQL, reporting and stakeholder duties with a clear required-skills list." },
  { role: "Data Scientist", cat: "Data", desc: "Modelling, experimentation and communication responsibilities for data hires." },
  { role: "UX Designer", cat: "Design", desc: "Research, interaction and prototyping duties with portfolio expectations." },
  { role: "Graphic Designer", cat: "Design", desc: "Brand, layout and production responsibilities, plus the craft skills to test." },
  { role: "Digital Marketer", cat: "Marketing", desc: "Channels, analytics and campaign ownership in a copy-ready JD." },
  { role: "Content Writer", cat: "Marketing", desc: "Editorial, SEO and voice responsibilities with a writing-skills checklist." },
  { role: "Sales Representative", cat: "Sales", desc: "Pipeline, quota and closing responsibilities, ready to tailor to your motion." },
  { role: "Customer Success Manager", cat: "Sales", desc: "Onboarding, retention and expansion duties with the CS skills to screen for." },
  { role: "HR Manager", cat: "Operations", desc: "People-ops, compliance and culture responsibilities in a structured template." },
  { role: "Administrative Assistant", cat: "Operations", desc: "Scheduling, coordination and communication duties, ready to publish." },
  { role: "Virtual Assistant", cat: "Operations", desc: "Remote support responsibilities with a clear, inclusive requirements section." },
];

const CATS = ["All", "Engineering", "Product", "Data", "Design", "Marketing", "Sales", "Operations"];

const STEPS = [
  { n: "1", title: "Pick a template", desc: "Choose the role and copy the full, structured JD." },
  { n: "2", title: "Make it yours", desc: "Swap in your company, perks and must-have skills." },
  { n: "3", title: "Screen for the skills", desc: "Turn the JD's skills into a Testlify assessment in one click." },
];

// The prototype links every card to resource-detail-template.dc.html (one shared
// template). No dedicated JD-detail route exists, so cards resolve to the hub.
const CARD_HREF = routes.resourcesJdTemplates;

export default function JdTemplatesClient() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let l = JDS;
    if (cat !== "All") l = l.filter((j) => j.cat === cat);
    if (q)
      l = l.filter(
        (j) =>
          j.role.toLowerCase().includes(q) ||
          j.desc.toLowerCase().includes(q) ||
          j.cat.toLowerCase().includes(q)
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
            <span>Job description templates</span>
          </div>
          <Reveal
            as="p"
            className="text-[13px] font-bold tracking-[0.16em] uppercase text-coral m-0 mb-4"
          >
            JD templates<span className="text-coral">.</span>
          </Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            className="text-[52px] max-[640px]:text-[36px] leading-[1.05] font-extrabold tracking-[-1.6px] m-0 text-ink"
          >
            Role-ready job descriptions,
            <br />
            <em className="not-italic text-coral">in minutes</em>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="text-[18px] leading-[1.6] text-body mx-auto mt-[18px] max-w-[600px]"
          >
            Copy-ready, inclusive job descriptions for 90+ roles — structured to
            attract the right people and mapped to the skills you&apos;ll actually
            test for.
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
              placeholder="Search 90+ JD templates…"
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

      {/* how it works strip */}
      <section className="bg-sand py-[34px] px-7 max-[640px]:px-[22px]">
        <Reveal className="grid grid-cols-3 max-[1000px]:grid-cols-1 gap-[22px] max-[1000px]:gap-4 max-w-[1000px] mx-auto">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-[14px] items-start">
              <span className="flex-none w-8 h-8 rounded-full bg-coral text-white text-[13px] font-extrabold flex items-center justify-center">
                {s.n}
              </span>
              <div>
                <b className="block text-[15px] font-bold mt-[3px] mb-[3px] text-ink">{s.title}</b>
                <span className="text-[13.5px] leading-[1.5] text-muted2">{s.desc}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* results */}
      <section className="px-7 pt-[52px] pb-[90px] max-[640px]:px-[22px]">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[13.5px] text-muted font-medium m-0 mb-[22px] text-center">
            Showing <b className="text-coral font-bold">{list.length}</b> of {totalLabel} templates
          </p>
          {isEmpty && (
            <div className="text-center py-[60px] px-5 text-muted text-[16px]">
              No templates match “<b className="text-ink">{q}</b>”. Try another role or{" "}
              <Link href={routes.contact} className="text-coral font-bold">
                request one
              </Link>
              .
            </div>
          )}
          <Reveal className="grid grid-cols-3 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1 gap-[18px]">
            {list.map((j) => (
              <Link
                key={j.role}
                href={CARD_HREF}
                className="group flex flex-col bg-white border border-[#F2E6E7] rounded-[18px] p-6 transition-[translate,border-color,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.3,1)] hover:-translate-y-1 hover:border-[#FBD0D1] hover:shadow-[0_16px_34px_rgba(110,11,14,0.10)]"
              >
                <div className="w-11 h-11 rounded-[12px] bg-[#FFF0EF] text-coral flex items-center justify-center mb-[14px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="8" y1="13" x2="16" y2="13" />
                    <line x1="8" y1="17" x2="13" y2="17" />
                  </svg>
                </div>
                <p className="text-[10.5px] font-bold tracking-[0.06em] uppercase text-faint m-0 mb-[6px]">{j.cat}</p>
                <p className="text-[17px] font-bold tracking-[-0.3px] m-0 mb-[7px] text-ink">{j.role} JD</p>
                <p className="text-[14px] leading-[1.55] text-muted2 m-0 mb-4">{j.desc}</p>
                <span className="mt-auto inline-flex items-center gap-[7px] text-[14px] font-bold text-coral">
                  Copy template
                  <svg className="transition-transform duration-[250ms] group-hover:translate-x-[3px]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
