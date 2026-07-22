'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

type JD = { role: string; cat: string; desc: string };

const JDS: JD[] = [
  { role: 'Software Engineer', cat: 'Engineering', desc: 'Responsibilities, must-have skills and seniority variants for backend, frontend and full-stack.' },
  { role: 'DevOps Engineer', cat: 'Engineering', desc: 'CI/CD, cloud and reliability responsibilities with a skills-first requirements section.' },
  { role: 'QA Engineer', cat: 'Engineering', desc: 'Manual and automation testing duties, tools and the quality skills to screen for.' },
  { role: 'Product Manager', cat: 'Product', desc: 'Ownership, prioritisation and cross-functional responsibilities, ready to customise.' },
  { role: 'Data Analyst', cat: 'Data', desc: 'SQL, reporting and stakeholder duties with a clear required-skills list.' },
  { role: 'Data Scientist', cat: 'Data', desc: 'Modelling, experimentation and communication responsibilities for data hires.' },
  { role: 'UX Designer', cat: 'Design', desc: 'Research, interaction and prototyping duties with portfolio expectations.' },
  { role: 'Graphic Designer', cat: 'Design', desc: 'Brand, layout and production responsibilities, plus the craft skills to test.' },
  { role: 'Digital Marketer', cat: 'Marketing', desc: 'Channels, analytics and campaign ownership in a copy-ready JD.' },
  { role: 'Content Writer', cat: 'Marketing', desc: 'Editorial, SEO and voice responsibilities with a writing-skills checklist.' },
  { role: 'Sales Representative', cat: 'Sales', desc: 'Pipeline, quota and closing responsibilities, ready to tailor to your motion.' },
  { role: 'Customer Success Manager', cat: 'Sales', desc: 'Onboarding, retention and expansion duties with the CS skills to screen for.' },
  { role: 'HR Manager', cat: 'Operations', desc: 'People-ops, compliance and culture responsibilities in a structured template.' },
  { role: 'Administrative Assistant', cat: 'Operations', desc: 'Scheduling, coordination and communication duties, ready to publish.' },
  { role: 'Virtual Assistant', cat: 'Operations', desc: 'Remote support responsibilities with a clear, inclusive requirements section.' },
];

const CAT_NAMES = ['All', 'Engineering', 'Product', 'Data', 'Design', 'Marketing', 'Sales', 'Operations'];

const css = `
*{box-sizing:border-box;}
.jd-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.jd-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 16px;}
.jd-eyebrow .dot{color:#F23F44;}
.jd-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:18px;}
.jd-crumb a:hover{color:#F23F44;}
.jd-hero{position:relative;overflow:hidden;padding:62px 28px 44px;background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.jd-h1{font-size:52px;line-height:1.05;font-weight:800;letter-spacing:-1.6px;margin:0;}
.jd-h1 em{font-style:normal;color:#F23F44;}
.jd-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px auto 0;max-width:600px;}
.jd-search{display:flex;align-items:center;gap:11px;max-width:520px;margin:28px auto 0;background:#fff;border:1.5px solid #F0E2E3;border-radius:14px;padding:13px 18px;box-shadow:0 12px 30px rgba(110,11,14,.07);transition:border-color .2s,box-shadow .2s;}
.jd-search:focus-within{border-color:#FBD0D1;box-shadow:0 12px 34px rgba(242,63,68,.14);}
.jd-search svg{color:#B29A9E;flex:none;}
.jd-search input{border:0;outline:0;font-family:inherit;font-size:16px;color:#1A1014;background:transparent;width:100%;}
.jd-search input::placeholder{color:#B29A9E;}
.jd-tabs{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:22px;}
.jd-tab{border:1px solid #EFE2E3;background:#fff;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;color:#6A5A5D;cursor:pointer;font-family:inherit;transition:all .18s;}
.jd-tab:hover{border-color:#FBD0D1;color:#F23F44;}
.jd-tab.on{background:#F23F44;color:#fff;border-color:#F23F44;}
/* how strip */
.jd-strip{background:#FBF3EE;padding:34px 28px;}
.jd-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;max-width:1000px;margin:0 auto;}
.jd-step{display:flex;gap:14px;align-items:flex-start;}
.jd-sn{flex:none;width:32px;height:32px;border-radius:50%;background:#F23F44;color:#fff;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;}
.jd-step b{display:block;font-size:15px;font-weight:700;margin:3px 0 3px;}
.jd-step span{font-size:13.5px;line-height:1.5;color:#7C6A6D;}
.jd-sec{padding:52px 28px 90px;}
.jd-count{font-size:13.5px;color:#8A7A7D;font-weight:500;margin:0 0 22px;text-align:center;}
.jd-count b{color:#F23F44;font-weight:700;}
.jd-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.jd-card{display:flex;flex-direction:column;background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.jd-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.jd-doc{width:44px;height:44px;border-radius:12px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.jd-cat{font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#A9999C;margin:0 0 6px;}
.jd-ct{font-size:17px;font-weight:700;letter-spacing:-.3px;margin:0 0 7px;}
.jd-cd{font-size:14px;line-height:1.55;color:#7C6A6D;margin:0 0 16px;}
.jd-go{margin-top:auto;display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:#F23F44;}
.jd-go svg{transition:transform .25s;}
.jd-card:hover .jd-go svg{transform:translateX(3px);}
.jd-empty{text-align:center;padding:60px 20px;color:#8A7A7D;font-size:16px;}
.jd-empty b{color:#1A1014;}
@media(max-width:1000px){.jd-grid{grid-template-columns:repeat(2,1fr);}.jd-steps{grid-template-columns:1fr;gap:16px;}}
@media(max-width:640px){.jd-h1{font-size:36px;}.jd-grid{grid-template-columns:1fr;}.jd-hero{padding:44px 22px 34px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function JobDescriptionTemplatesPage() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const q = query.trim().toLowerCase();
  let list = JDS;
  if (cat !== 'All') list = list.filter((j) => j.cat === cat);
  if (q)
    list = list.filter(
      (j) =>
        j.role.toLowerCase().includes(q) ||
        j.desc.toLowerCase().includes(q) ||
        j.cat.toLowerCase().includes(q)
    );
  const jds = list;
  const resultCount = jds.length;
  const totalLabel = q || cat !== 'All' ? String(jds.length) : '90+';
  const isEmpty = jds.length === 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Free job description templates — copy-ready JDs for 90+ roles, then screen for the skills" announcementCta="Browse templates" />

      <section className="jd-hero">
        <div className="jd-wrap" style={{ maxWidth: '820px' }}>
          <div className="jd-crumb">
            <Link href="/blog">Resources</Link>
            <span>/</span>
            <span>Job description templates</span>
          </div>
          <p className="jd-eyebrow" data-reveal="">
            JD templates<span className="dot">.</span>
          </p>
          <h1 className="jd-h1" data-reveal="" data-delay="60">
            Role-ready job descriptions,<br />
            <em>in minutes</em>
          </h1>
          <p className="jd-sub" data-reveal="" data-delay="120">
            Copy-ready, inclusive job descriptions for 90+ roles — structured to attract the right
            people and mapped to the skills you&apos;ll actually test for.
          </p>
          <div className="jd-search" data-reveal="" data-delay="170">
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Search 90+ JD templates…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="jd-tabs" data-reveal="" data-delay="210">
            {CAT_NAMES.map((c) => (
              <button
                key={c}
                className={`jd-tab ${cat === c ? 'on' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="jd-strip" data-reveal="">
        <div className="jd-wrap">
          <div className="jd-steps">
            <div className="jd-step">
              <span className="jd-sn">1</span>
              <div>
                <b>Pick a template</b>
                <span>Choose the role and copy the full, structured JD.</span>
              </div>
            </div>
            <div className="jd-step">
              <span className="jd-sn">2</span>
              <div>
                <b>Make it yours</b>
                <span>Swap in your company, perks and must-have skills.</span>
              </div>
            </div>
            <div className="jd-step">
              <span className="jd-sn">3</span>
              <div>
                <b>Screen for the skills</b>
                <span>Turn the JD&apos;s skills into a Testlify assessment in one click.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="jd-sec">
        <div className="jd-wrap">
          <p className="jd-count" data-reveal="">
            Showing <b>{resultCount}</b> of {totalLabel} templates
          </p>
          {isEmpty && (
            <div className="jd-empty">
              No templates match “<b>{query}</b>”. Try another role or{' '}
              <Link href="/contact" style={{ color: '#F23F44', fontWeight: 700 }}>
                request one
              </Link>
              .
            </div>
          )}
          <div className="jd-grid">
            {jds.map((j) => (
              <Link className="jd-card" href="/resource-detail-template" key={j.role}>
                <div className="jd-doc">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="8" y1="13" x2="16" y2="13"></line>
                    <line x1="8" y1="17" x2="13" y2="17"></line>
                  </svg>
                </div>
                <p className="jd-cat">{j.cat}</p>
                <p className="jd-ct">{j.role} JD</p>
                <p className="jd-cd">{j.desc}</p>
                <span className="jd-go">
                  Copy template
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
