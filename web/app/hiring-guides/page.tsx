'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.hg-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.hg-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 16px;}
.hg-eyebrow .dot{color:#F23F44;}
.hg-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:18px;}
.hg-crumb a:hover{color:#F23F44;}
.hg-hero{position:relative;overflow:hidden;padding:62px 28px 44px;background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.hg-h1{font-size:52px;line-height:1.05;font-weight:800;letter-spacing:-1.6px;margin:0;}
.hg-h1 em{font-style:normal;color:#F23F44;}
.hg-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px auto 0;max-width:600px;}
.hg-search{display:flex;align-items:center;gap:11px;max-width:520px;margin:28px auto 0;background:#fff;border:1.5px solid #F0E2E3;border-radius:14px;padding:13px 18px;box-shadow:0 12px 30px rgba(110,11,14,.07);transition:border-color .2s,box-shadow .2s;}
.hg-search:focus-within{border-color:#FBD0D1;box-shadow:0 12px 34px rgba(242,63,68,.14);}
.hg-search svg{color:#B29A9E;flex:none;}
.hg-search input{border:0;outline:0;font-family:inherit;font-size:16px;color:#1A1014;background:transparent;width:100%;}
.hg-search input::placeholder{color:#B29A9E;}
.hg-tabs{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:22px;}
.hg-tab{border:1px solid #EFE2E3;background:#fff;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;color:#6A5A5D;cursor:pointer;font-family:inherit;transition:all .18s;}
.hg-tab:hover{border-color:#FBD0D1;color:#F23F44;}
.hg-tab.on{background:#F23F44;color:#fff;border-color:#F23F44;}
.hg-sec{padding:52px 28px 90px;}
.hg-count{font-size:13.5px;color:#8A7A7D;font-weight:500;margin:0 0 22px;text-align:center;}
.hg-count b{color:#F23F44;font-weight:700;}
.hg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.hg-card{display:flex;flex-direction:column;background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.hg-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.hg-top{display:flex;align-items:center;gap:13px;margin-bottom:14px;}
.hg-ic{width:44px;height:44px;border-radius:12px;color:#fff;display:flex;align-items:center;justify-content:center;flex:none;font-weight:800;font-size:16px;}
.hg-cat{font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#A9999C;margin:0;}
.hg-ct{font-size:17px;font-weight:700;letter-spacing:-.3px;margin:2px 0 0;}
.hg-cd{font-size:14px;line-height:1.55;color:#7C6A6D;margin:0 0 16px;}
.hg-meta{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto;}
.hg-chip{font-size:11.5px;font-weight:600;color:#6C5A5D;background:#FBF3EE;border-radius:100px;padding:5px 11px;}
.hg-empty{text-align:center;padding:60px 20px;color:#8A7A7D;font-size:16px;}
.hg-empty b{color:#1A1014;}
@media(max-width:1000px){.hg-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.hg-h1{font-size:36px;}.hg-grid{grid-template-columns:1fr;}.hg-hero{padding:44px 22px 34px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const C: Record<string, string> = {
  Tech: 'linear-gradient(135deg,#7C5CFF,#5B7BFF)',
  Data: 'linear-gradient(135deg,#1FB57A,#12A063)',
  Marketing: 'linear-gradient(135deg,#FF9F43,#F76A2E)',
  Design: 'linear-gradient(135deg,#F76A6E,#F23F44)',
  Sales: 'linear-gradient(135deg,#3BC9DB,#2A9DB5)',
  Ops: 'linear-gradient(135deg,#B084F2,#8A5CF0)',
};

const GUIDES = [
  { role: 'Software Engineer', cat: 'Tech', desc: 'Hire developers who can actually build — with a JD, coding-focused questions and skills to test.' },
  { role: 'Data Analyst', cat: 'Data', desc: 'Everything to hire an analyst: JD, SQL and reasoning questions, and the skills that matter.' },
  { role: 'Data Scientist', cat: 'Data', desc: 'Find data scientists who turn data into decisions, with ready JDs and interview prompts.' },
  { role: 'Product Manager', cat: 'Tech', desc: 'Assess prioritisation, judgment and execution with a full PM hiring guide.' },
  { role: 'Graphic Designer', cat: 'Design', desc: 'Hire for craft and creativity with JDs, portfolio prompts and a skills checklist.' },
  { role: 'UX Designer', cat: 'Design', desc: 'Screen for research, interaction and visual skills with a structured guide.' },
  { role: 'Social Media Manager', cat: 'Marketing', desc: 'Boost your presence — JD, interview questions and skills to test for social roles.' },
  { role: 'Content Writer', cat: 'Marketing', desc: 'Hire writers who can inform and convert, with prompts and a skills rubric.' },
  { role: 'Digital Marketer', cat: 'Marketing', desc: 'Assess channels, analytics and campaign thinking with a complete guide.' },
  { role: 'Sales Representative', cat: 'Sales', desc: 'Find closers with role-play prompts, JD and the exact selling skills to test.' },
  { role: 'Customer Success Manager', cat: 'Sales', desc: 'Hire for retention and empathy with a structured CSM interview guide.' },
  { role: 'Administrative Assistant', cat: 'Ops', desc: 'Simplify hiring with JDs, organisation and communication questions, and skills to test.' },
  { role: 'Virtual Assistant', cat: 'Ops', desc: 'Find reliable VAs with a ready JD, screening questions and a skills checklist.' },
  { role: 'HR Manager', cat: 'Ops', desc: 'Assess people-ops judgment and process skills with a full HR hiring guide.' },
  { role: 'DevOps Engineer', cat: 'Tech', desc: 'Screen for CI/CD, cloud and reliability skills with a technical hiring guide.' },
];

const CAT_NAMES = ['All', 'Tech', 'Data', 'Marketing', 'Design', 'Sales', 'Ops'];

function initials(role: string) {
  return role.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export default function HiringGuidesPage() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const q = query.trim().toLowerCase();
  let list = GUIDES;
  if (cat !== 'All') list = list.filter((g) => g.cat === cat);
  if (q) list = list.filter((g) => g.role.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q) || g.cat.toLowerCase().includes(q));

  const guides = list.map((g) => ({
    role: g.role,
    cat: g.cat,
    desc: g.desc,
    color: C[g.cat] || C.Tech,
    initials: initials(g.role),
    href: '/hiring-guides-detail',
  }));

  const resultCount = guides.length;
  const totalLabel = q || cat !== 'All' ? String(guides.length) : '90+';
  const isEmpty = guides.length === 0;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Free hiring guides — job descriptions, interview questions & skills to test for 90+ roles"
      />

      <section className="hg-hero">
        <div className="hg-wrap" style={{ maxWidth: '820px' }}>
          <div className="hg-crumb">
            <Link href="/blog">Resources</Link>
            <span>/</span>
            <span>Hiring guides</span>
          </div>
          <p className="hg-eyebrow">Hiring guides<span className="dot">.</span></p>
          <h1 className="hg-h1">Everything you need<br /><em>to hire any role</em></h1>
          <p className="hg-sub">Role-by-role guides with ready-to-use job descriptions, interview questions and the exact skills to test for — so you hire on proof, not gut feel.</p>
          <div className="hg-search">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
            <input type="text" placeholder="Search 90+ role guides…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="hg-tabs">
            {CAT_NAMES.map((c) => (
              <button key={c} className={`hg-tab ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="hg-sec">
        <div className="hg-wrap">
          <p className="hg-count">Showing <b>{resultCount}</b> of {totalLabel} guides</p>
          {isEmpty && (
            <div className="hg-empty">No guides match “<b>{query}</b>”. Try another role or <Link href="/contact" style={{ color: '#F23F44', fontWeight: 700 }}>request one</Link>.</div>
          )}
          <div className="hg-grid">
            {guides.map((g) => (
              <Link key={g.role} className="hg-card" href={g.href}>
                <div className="hg-top">
                  <span className="hg-ic" style={{ background: g.color }}>{g.initials}</span>
                  <div>
                    <p className="hg-cat">{g.cat}</p>
                    <p className="hg-ct">{g.role}</p>
                  </div>
                </div>
                <p className="hg-cd">{g.desc}</p>
                <div className="hg-meta">
                  <span className="hg-chip">Job description</span>
                  <span className="hg-chip">Interview questions</span>
                  <span className="hg-chip">Skills to test</span>
                </div>
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
