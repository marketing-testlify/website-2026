'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const CSS = `
:root{--ink:#1A1014;--body:#5A4B4E;--muted:#8A7A7D;--coral:#F23F44;}
.tsec{padding:96px 0;}
.tw{max-width:1240px;margin:0 auto;padding:0 28px;}
.tcrumb{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--muted);margin-bottom:28px;}
.tcrumb a{color:var(--muted);text-decoration:none;}
.tcrumb a:hover{color:var(--coral);}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;}
.eyebrow b{color:var(--coral);}
.th1{font-size:54px;font-weight:800;letter-spacing:-1.4px;line-height:1.05;color:var(--ink);margin:14px 0 0;}
.th2{font-size:32px;font-weight:800;letter-spacing:-.6px;color:var(--ink);margin:14px 0 0;}
.tlead{font-size:18px;line-height:1.6;color:var(--body);margin:18px 0 0;}
.tbody{font-size:15px;line-height:1.6;color:var(--body);}
.tcalc{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
.tcard{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:34px;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.tfield{margin-bottom:20px;}
.tfield label{display:block;font-size:14px;font-weight:600;color:var(--ink);margin-bottom:8px;}
.tinput{width:100%;font-family:inherit;font-size:16px;color:var(--ink);padding:13px 16px;border:1px solid #EADDDE;border-radius:12px;background:#FBF3EE;outline:none;transition:border-color .2s;}
.tinput:focus{border-color:var(--coral);background:#fff;}
.tresult{background:linear-gradient(160deg,#1A1014,#2A1D22);border-radius:20px;padding:34px;color:#fff;box-shadow:0 16px 30px rgba(110,11,14,.16);}
.trlabel{font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#C9B9BC;margin:0;}
.trbig{font-size:64px;font-weight:800;letter-spacing:-1.5px;line-height:1;margin:10px 0 0;color:#FF7A52;}
.trsub{font-size:14.5px;line-height:1.55;color:#C9B9BC;margin:14px 0 0;}
.trbreak{margin-top:26px;border-top:1px solid rgba(255,255,255,.12);padding-top:20px;display:flex;flex-direction:column;gap:12px;}
.trrow{display:flex;align-items:center;justify-content:space-between;font-size:14.5px;}
.trrow span:first-child{color:#C9B9BC;}
.trrow span:last-child{font-weight:700;color:#fff;}
.tsteps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:44px;}
.tstep{background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:26px;}
.tstepn{width:38px;height:38px;border-radius:100px;background:#FFF0EF;color:var(--coral);font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.chk{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:18px 32px;}
.chk li{display:flex;align-items:flex-start;gap:12px;font-size:15px;line-height:1.6;color:var(--body);}
.chk li svg{flex:none;margin-top:2px;color:var(--coral);}
.chk li b{color:var(--ink);}
@media (max-width:820px){.tcalc{grid-template-columns:1fr;}.tsteps{grid-template-columns:1fr;}.chk{grid-template-columns:1fr;}.th1{font-size:38px;}}
/*om-balance-rule*/
h1,h2,h3,h4,.th1,.th2,.eyebrow{text-wrap:balance;}
p,li,.tbody,.tlead,.trsub{text-wrap:pretty;}
`;

const FAQ_ITEMS = [
  { q: 'How do you calculate recruiting conversion rate?', a: 'Divide the number of hires by total vacancies and multiply by 100%. Example: 8 hires / 10 vacancies × 100% = 80%.' },
  { q: 'What is a good conversion rate for recruitment?', a: 'A good rate varies by industry, but 70–90% is generally strong, showing most vacancies are filled efficiently.' },
  { q: 'Is 20% a good conversion rate?', a: 'For recruitment, 20% is low and may signal sourcing issues, long hiring cycles, or misaligned candidate screening.' },
  { q: 'What is the formula for conversion rate?', a: 'Conversion rate = (Conversions ÷ Total Opportunities) × 100%. In recruitment, this means hires ÷ vacancies × 100%.' },
];

export default function RecruitingConversionRateCalculatorPage() {
  const [appl, setAppl] = useState('500');
  const [hire, setHire] = useState('6');

  const num = (v: string) => {
    const n = parseFloat(v);
    return isNaN(n) || n < 0 ? 0 : n;
  };

  const applNum = Math.max(1, num(appl));
  const hireNum = num(hire);
  const conv = (hireNum / applNum) * 100;
  const result = conv.toFixed(1) + '%';
  const perHire = hireNum ? Math.round(applNum / hireNum) : '—';
  const note = 'The share of applicants who became hires this period.';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Free HR tools — calculators, templates and interview kits." announcementCta="Browse tools" />

      <section className="tsec" style={{ background: 'radial-gradient(1000px 500px at 80% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff' }}>
        <div className="tw">
          <div className="tcrumb reveal">
            <Link href="/blog">Resources</Link><span>/</span>
            <Link href="/hr-tools">HR tools</Link><span>/</span>
            <span>Recruiting conversion rate calculator</span>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow reveal">Recruiting conversion rate<b>.</b></p>
            <h1 className="th1 reveal" style={{ transitionDelay: '.04s' }}>Calculate your recruiting conversion rate</h1>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>See what share of applicants convert into hires. A stronger conversion rate means less wasted effort and a more qualified top of funnel.</p>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE', paddingTop: 40 }}>
        <div className="tw">
          <div className="tcalc reveal">
            <div className="tcard">
              <p className="eyebrow" style={{ marginBottom: 22 }}>Your numbers<b>.</b></p>
              <div className="tfield">
                <label>Total applicants</label>
                <input className="tinput" type="number" min="1" value={appl} onInput={(e) => setAppl((e.target as HTMLInputElement).value)} />
              </div>
              <div className="tfield" style={{ marginBottom: 0 }}>
                <label>Total hires</label>
                <input className="tinput" type="number" min="0" value={hire} onInput={(e) => setHire((e.target as HTMLInputElement).value)} />
              </div>
            </div>
            <div className="tresult">
              <p className="trlabel">Conversion rate</p>
              <p className="trbig">{result}</p>
              <p className="trsub">{note}</p>
              <div className="trbreak">
                <div className="trrow"><span>Applicants</span><span>{appl}</span></div>
                <div className="trrow"><span>Hires</span><span>{hire}</span></div>
                <div className="trrow"><span>Applicants per hire</span><span>{perHire}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow reveal">How it works<b>.</b></p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Conversion rate, explained</h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Conversion rate is hires divided by applicants, as a percentage. A very low rate can mean a poorly targeted top of funnel — sharper sourcing and skills screening lift it.</p>
          </div>
          <div className="tsteps">
            <div className="tstep reveal"><div className="tstepn">1</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>Total applicants</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>Everyone who applied in the period.</p></div>
            <div className="tstep reveal" style={{ transitionDelay: '.06s' }}><div className="tstepn">2</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>Total hires</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>The number you actually hired.</p></div>
            <div className="tstep reveal" style={{ transitionDelay: '.12s' }}><div className="tstepn">3</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>See conversion</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>Hires ÷ applicants, expressed as a percentage.</p></div>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE' }}>
        <div className="tw">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow reveal">Why it matters<b>.</b></p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Why use a recruiting conversion rate calculator?</h2>
          </div>
          <ul className="chk reveal" style={{ marginTop: 30, maxWidth: 760 }}>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><b>Clear performance insight:</b> understand the true success rate of your hiring efforts in one easy-to-read percentage.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><b>Process optimization:</b> identify funnel stages that need improvement to boost overall hiring success.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><b>Goal setting:</b> use real data to set realistic targets for recruiters and hiring managers.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><b>Talent strategy alignment:</b> ensure sourcing, screening, and interview methods align with business hiring goals.</li>
          </ul>
        </div>
      </section>

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow reveal">FAQ<b>.</b></p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2>
          </div>
          <div className="reveal" style={{ maxWidth: 820, margin: '34px auto 0' }}>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
