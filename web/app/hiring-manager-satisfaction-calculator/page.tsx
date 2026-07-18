'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

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
@media (max-width:820px){.tcalc{grid-template-columns:1fr;}.tsteps{grid-template-columns:1fr;}.th1{font-size:38px;}}
/*om-balance-rule*/
h1,h2,h3,h4,.th1,.th2,.eyebrow{text-wrap:balance;}
p,li,.tbody,.tlead,.trsub{text-wrap:pretty;}
`;

export default function HiringManagerSatisfactionCalculatorPage() {
  const [sat, setSat] = useState('17');
  const [tot, setTot] = useState('20');

  const num = (v: string) => {
    const n = parseFloat(v);
    return isNaN(n) || n < 0 ? 0 : n;
  };

  const nSat = num(sat);
  const nTot = Math.max(1, num(tot));
  const rate = Math.min(100, (nSat / nTot) * 100);
  const result = rate.toFixed(0) + '%';
  const note =
    rate >= 80
      ? 'Above the 80% benchmark — recruiting is delivering.'
      : 'Below 80% — tighten the shortlist with skills-based screening.';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Free HR tools — calculators, templates and interview kits." />

      <section className="tsec" style={{ background: 'radial-gradient(1000px 500px at 80% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff' }}>
        <div className="tw">
          <div className="tcrumb reveal">
            <Link href="/blog">Resources</Link><span>/</span>
            <Link href="/hr-tools">HR tools</Link><span>/</span>
            <span>Hiring manager satisfaction calculator</span>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow reveal">Hiring manager satisfaction<b>.</b></p>
            <h1 className="th1 reveal" style={{ transitionDelay: '.04s' }}>Measure hiring manager satisfaction</h1>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Are your hiring managers happy with the candidates they get? Enter your survey results to see your satisfaction score — a key signal of recruiting quality.</p>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE', paddingTop: 40 }}>
        <div className="tw">
          <div className="tcalc reveal">
            <div className="tcard">
              <p className="eyebrow" style={{ marginBottom: 22 }}>Your survey<b>.</b></p>
              <div className="tfield">
                <label>Satisfied respondents</label>
                <input className="tinput" type="number" min={0} value={sat} onInput={(e) => setSat((e.target as HTMLInputElement).value)} onChange={(e) => setSat(e.target.value)} />
              </div>
              <div className="tfield" style={{ marginBottom: 0 }}>
                <label>Total respondents</label>
                <input className="tinput" type="number" min={1} value={tot} onInput={(e) => setTot((e.target as HTMLInputElement).value)} onChange={(e) => setTot(e.target.value)} />
              </div>
            </div>
            <div className="tresult">
              <p className="trlabel">Satisfaction score</p>
              <p className="trbig">{result}</p>
              <p className="trsub">{note}</p>
              <div className="trbreak">
                <div className="trrow"><span>Satisfied</span><span>{sat}</span></div>
                <div className="trrow"><span>Total surveyed</span><span>{tot}</span></div>
                <div className="trrow"><span>Healthy benchmark</span><span>&gt; 80%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow reveal">How it works<b>.</b></p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Satisfaction, explained</h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Divide satisfied hiring managers by everyone surveyed. It&apos;s one of the clearest signals of whether recruiting is delivering the right candidates — and skills-based shortlists reliably raise it.</p>
          </div>
          <div className="tsteps">
            <div className="tstep reveal"><div className="tstepn">1</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>Survey your managers</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>Ask if they were satisfied with candidate quality.</p></div>
            <div className="tstep reveal" style={{ transitionDelay: '.06s' }}><div className="tstepn">2</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>Count the satisfied</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>How many responded positively out of the total.</p></div>
            <div className="tstep reveal" style={{ transitionDelay: '.12s' }}><div className="tstepn">3</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>See the score</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>Aim to stay above the 80% healthy benchmark.</p></div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
