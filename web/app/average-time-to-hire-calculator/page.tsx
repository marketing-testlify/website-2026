'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.atth-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.atth-hero{padding:44px 28px 30px;background:radial-gradient(900px 420px at 50% -18%,#FFF0EE 0%,rgba(255,240,238,0) 64%),#fff;}
.atth-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.atth-back svg{transition:transform .2s;}
.atth-back:hover svg{transform:translateX(-3px);}
.atth-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.atth-eyebrow b{color:#F23F44;font-weight:700;}
.atth-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;max-width:820px;}
.atth-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px 0 0;max-width:720px;}
.atth-body{padding:36px 28px 40px;}
.atth-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.atth-sec{scroll-margin-top:110px;margin-bottom:34px;}
.atth-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:0 0 16px;color:#1A1014;}
.atth-calc{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:34px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.atth-row{display:grid;grid-template-columns:1fr 1fr 120px 40px;gap:14px;align-items:end;margin-bottom:14px;}
.atth-field label{display:block;font-size:12.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.atth-field input{width:100%;border:1.5px solid #EADDDE;border-radius:10px;padding:11px 14px;font-family:inherit;font-size:14.5px;font-weight:600;color:#1A1014;background:#FCFAFA;}
.atth-field input:focus{outline:none;border-color:#F23F44;background:#fff;}
.atth-days{font-size:14.5px;font-weight:700;color:#F23F44;padding:11px 0;text-align:center;}
.atth-rm{width:36px;height:36px;border-radius:9px;border:1.5px solid #EADDDE;background:#fff;color:#8A7A7D;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:border-color .2s,color .2s;}
.atth-rm:hover{border-color:#F23F44;color:#F23F44;}
.atth-addrow{display:flex;gap:14px;align-items:center;margin:8px 0 24px;}
.atth-add{background:#fff;border:1.5px dashed #F0B9BA;color:#F23F44;border-radius:11px;padding:11px 20px;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;}
.atth-add:hover{background:#FFF4F3;}
.atth-hiresfield{max-width:220px;margin-bottom:24px;}
.atth-calcbtn{background:#F23F44;color:#fff;border:0;border-radius:11px;padding:13px 24px;font-family:inherit;font-size:14.5px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s;}
.atth-calcbtn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(242,63,68,.28);}
.atth-result{margin-top:26px;border-top:1px solid #F0E2E3;padding-top:22px;text-align:center;}
.atth-rlabel{font-size:13.5px;font-weight:700;color:#8A7A7D;margin:0 0 8px;}
.atth-rbig{font-size:52px;font-weight:800;color:#F23F44;margin:0;letter-spacing:-1px;}
.atth-rsub{font-size:14.5px;color:#6C5A5D;margin:8px 0 0;}
.atth-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
.atth-step{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.atth-step:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.atth-stepno{width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.atth-step h3{font-size:17px;font-weight:700;letter-spacing:-.2px;margin:0 0 8px;}
.atth-step p{font-size:14.5px;line-height:1.62;color:#5A4B4E;margin:0;}
.atth-formula{background:#FBF3EE;border:1px solid #F0E2E3;border-radius:14px;padding:20px 24px;font-size:16px;font-weight:600;color:#1A1014;margin:0 0 16px;}
.atth-chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.atth-chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.atth-chk svg{color:#F23F44;flex:none;margin-top:2px;}
@media(max-width:860px){.atth-h1{font-size:32px;letter-spacing:-1px;}.atth-row{grid-template-columns:1fr;}.atth-steps{grid-template-columns:1fr;}}
h1,h2,h3,h4,h5,.atth-h1,.atth-h2,.atth-eyebrow{text-wrap:balance;}p,li,.atth-p,.atth-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  { q: 'How long does the average job take to hire?', a: 'The average time to hire varies, but it typically takes around 30-45 days. This can differ depending on the role, industry, and how quickly candidates are evaluated.' },
  { q: 'How do you calculate time to recruit?', a: 'Time to recruit is calculated by measuring the days from when a job is posted to when an offer is accepted, helping to track the efficiency of your recruitment process.' },
  { q: 'What is the time to hire KPI?', a: 'The time to hire KPI is a key metric used to measure the time taken to fill a position, from job posting to candidate acceptance. It indicates the efficiency of your hiring process.' },
  { q: 'How to improve time-to-hire?', a: 'To improve time-to-hire, streamline your recruitment process, use technology for faster candidate screening, maintain a strong talent pool, and communicate clearly with both candidates and hiring managers.' },
  { q: 'What is the average time-to-hire?', a: 'According to SHRM, the average time to hire is 24 days between screening candidates and accepting a job offer.' },
];

interface Row {
  id: number;
  applied: string;
  accepted: string;
}

function daysBetween(a: string, b: string): number {
  if (!a || !b) return 0;
  const d1 = new Date(a);
  const d2 = new Date(b);
  const diff = Math.round((d2.getTime() - d1.getTime()) / 86400000);
  return diff > 0 ? diff : 0;
}

export default function AverageTimeToHireCalculatorPage() {
  const [rows, setRows] = useState<Row[]>([{ id: 1, applied: '', accepted: '' }]);
  const [nextId, setNextId] = useState(2);
  const [hires, setHires] = useState<string | number>(1);
  const [calculated, setCalculated] = useState(false);

  const addRow = () => {
    setRows((prev) => [...prev, { id: nextId, applied: '', accepted: '' }]);
    setNextId((n) => n + 1);
  };

  const removeRow = (id: number) => {
    setRows((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== id) : prev));
  };

  const updateRow = (id: number, field: 'applied' | 'accepted', value: string) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const totalDays = rows.reduce((sum, r) => sum + daysBetween(r.applied, r.accepted), 0);
  const hiresNum = parseFloat(String(hires)) || rows.length;
  const avg = hiresNum ? Math.round(totalDays / hiresNum) : 0;
  const result = calculated ? avg : 0;
  const note = calculated
    ? avg <= 36
      ? 'Faster than the ~36-day industry benchmark.'
      : 'Slower than the ~36-day benchmark — room to speed up.'
    : 'Enter dates and click Calculate.';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits."
        announcementCta="Browse tools"
        homeHref="/"
      />

      <section className="atth-hero">
        <div className="atth-wrap">
          <Link className="atth-back" href="/hr-tools">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
            Back to HR tools
          </Link>
          <p className="atth-eyebrow reveal">Average time to hire calculator<b>.</b></p>
          <h1 className="atth-h1 reveal">Average time-to-hire calculator</h1>
          <p className="atth-sub reveal">Use this free average time to hire calculator to determine the average time it takes to fill a position. No sign-up is required.</p>
        </div>
      </section>

      <section style={{ background: '#FBF3EE', padding: '36px 28px' }}>
        <div className="atth-wrap">
          <div className="atth-calc reveal">
            <p className="atth-eyebrow" style={{ marginBottom: 22 }}>Time to hire for each candidate<b>.</b></p>
            {rows.map((row) => (
              <div className="atth-row" key={row.id}>
                <div className="atth-field">
                  <label>Date of application</label>
                  <input
                    type="date"
                    value={row.applied}
                    onChange={(e) => updateRow(row.id, 'applied', e.target.value)}
                  />
                </div>
                <div className="atth-field">
                  <label>Date of offer acceptance</label>
                  <input
                    type="date"
                    value={row.accepted}
                    onChange={(e) => updateRow(row.id, 'accepted', e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#1A1014', marginBottom: 8 }}>Time to hire</label>
                  <div className="atth-days">{daysBetween(row.applied, row.accepted)}</div>
                </div>
                <button className="atth-rm" onClick={() => removeRow(row.id)} aria-label="Remove candidate">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            ))}
            <div className="atth-addrow">
              <button className="atth-add" onClick={addRow}>+ Add candidate</button>
            </div>
            <div className="atth-hiresfield atth-field">
              <label>Number of hires</label>
              <input
                type="number"
                min={1}
                value={hires}
                onChange={(e) => setHires(e.target.value)}
              />
            </div>
            <button className="atth-calcbtn" onClick={() => setCalculated(true)}>Calculate average time-to-hire</button>
            <div className="atth-result">
              <p className="atth-rlabel">Average time to hire is</p>
              <p className="atth-rbig">{result}<span style={{ fontSize: 22, fontWeight: 700, color: '#1A1014' }}> days</span></p>
              <p className="atth-rsub">{note}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="atth-body">
        <div className="atth-wrap">
          <div>
            <div className="atth-sec">
              <h2 className="atth-h2 reveal">What is average time to hire?</h2>
              <p className="atth-p reveal">The average time to hire is an important recruitment metric that measures the total time it takes to fill a job, from when the job opening is posted to when a candidate accepts the job offer. It helps analyze the efficiency of the hiring process.</p>
              <p className="atth-p reveal">A shorter time to hire indicates an efficient hiring process, while a longer duration indicates potential challenges or bottlenecks in the recruitment workflow.</p>
            </div>

            <div className="atth-sec" id="how-it-works">
              <h2 className="atth-h2 reveal">How does average time to hire calculator work?</h2>
              <div className="atth-steps reveal">
                <div className="atth-step"><div className="atth-stepno">1</div><h3>Data collection</h3><p>The calculator needs information on the time it takes to fill each position, from the time the job is posted to the time a candidate accepts the offer.</p></div>
                <div className="atth-step"><div className="atth-stepno">2</div><h3>Calculation process</h3><p>Sum the total days it took to fill all positions and divide by the number of positions to calculate the average time to hire.</p></div>
                <div className="atth-step"><div className="atth-stepno">3</div><h3>Output</h3><p>The calculator provides the average time to hire, helping organizations understand how quickly they can attract and secure talent.</p></div>
              </div>
            </div>

            <div className="atth-sec">
              <h2 className="atth-h2 reveal">Average time to hire calculator formula</h2>
              <p className="atth-p reveal">Average time to hire = (Total days to hire for all positions) / (Number of positions filled)</p>
              <div className="atth-formula reveal">For example: 20 + 30 + 40 days across 3 hires = 90 days ÷ 3 = <b>30 days average time to hire</b>.</div>
            </div>

            <div className="atth-sec">
              <h2 className="atth-h2 reveal">Why should you use an average time to hire calculator?</h2>
              <ul className="atth-chk reveal">
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Improved efficiency:</b> identify bottlenecks in the hiring process and streamline recruitment stages to reduce delays.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Better candidate experience:</b> a shorter time-to-hire means transparent communication and swift hiring decisions candidates prefer.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Data-driven decision-making:</b> compare hiring times across roles and adjust your hiring strategies strategically.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Resource allocation:</b> know which roles take longer to fill so HR teams can plan support accordingly.</span></li>
                <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Talent retention:</b> shorten a lengthy hiring process to secure top candidates before they accept other offers.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section style={{ background: '#FBF3EE', padding: '96px 28px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p className="atth-eyebrow reveal">FAQ<b>.</b></p>
          <h2 className="atth-h2 reveal">Frequently asked questions</h2>
        </div>
        <div className="reveal" style={{ maxWidth: 820, margin: '34px auto 0' }}>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
