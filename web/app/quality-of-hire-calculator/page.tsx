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
.tprefix{position:relative;}
.tprefix .tsym{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-weight:700;color:#A9999C;font-size:15px;}
.tprefix .tinput{padding-left:32px;}
.tprefix.suf .tsym{left:auto;right:14px;}
.tprefix.suf .tinput{padding-left:16px;padding-right:34px;}
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

export default function QualityOfHireCalculatorPage() {
  const [perf, setPerf] = useState('82');
  const [ramp, setRamp] = useState('75');
  const [ret, setRet] = useState('88');

  const num = (v: string) => {
    let n = parseFloat(v);
    if (isNaN(n) || n < 0) n = 0;
    if (n > 100) n = 100;
    return n;
  };

  const nPerf = num(perf), nRamp = num(ramp), nRet = num(ret);
  const idx = Math.round((nPerf + nRamp + nRet) / 3);
  let note = 'Solid quality of hire.';
  if (idx >= 85) note = 'Excellent — your hiring is producing high performers.';
  else if (idx < 60) note = 'Room to improve — assess skills more rigorously up front.';
  const result = idx + '/100';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Free HR tools — calculators, templates and interview kits." />

      <section className="tsec" style={{ background: 'radial-gradient(1000px 500px at 80% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff' }}>
        <div className="tw">
          <div className="tcrumb reveal">
            <Link href="/blog">Resources</Link><span>/</span>
            <Link href="/hr-tools">HR tools</Link><span>/</span>
            <span>Quality of hire calculator</span>
          </div>
          <div style={{ maxWidth: 720 }}>
            <p className="eyebrow reveal">Quality of hire calculator<b>.</b></p>
            <h1 className="th1 reveal" style={{ transitionDelay: '.04s' }}>Measure your quality of hire</h1>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Score new hires on performance, ramp speed and retention to get a single quality-of-hire index — the metric that proves whether your hiring is actually working.</p>
          </div>
        </div>
      </section>

      <section className="tsec" style={{ background: '#FBF3EE', paddingTop: 40 }}>
        <div className="tw">
          <div className="tcalc reveal">
            <div className="tcard">
              <p className="eyebrow" style={{ marginBottom: 22 }}>Rate each factor <span style={{ fontWeight: 500, color: '#8A7A7D', textTransform: 'none', letterSpacing: 0 }}>(0–100)</span></p>
              <div className="tfield"><label>Job performance</label><div className="tprefix suf"><span className="tsym">/100</span><input className="tinput" type="number" min="0" max="100" value={perf} onInput={(e) => setPerf((e.target as HTMLInputElement).value)} /></div></div>
              <div className="tfield"><label>Ramp-up speed</label><div className="tprefix suf"><span className="tsym">/100</span><input className="tinput" type="number" min="0" max="100" value={ramp} onInput={(e) => setRamp((e.target as HTMLInputElement).value)} /></div></div>
              <div className="tfield" style={{ marginBottom: 0 }}><label>Retention / engagement</label><div className="tprefix suf"><span className="tsym">/100</span><input className="tinput" type="number" min="0" max="100" value={ret} onInput={(e) => setRet((e.target as HTMLInputElement).value)} /></div></div>
            </div>
            <div className="tresult">
              <p className="trlabel">Quality of hire index</p>
              <p className="trbig">{result}</p>
              <p className="trsub">{note}</p>
              <div className="trbreak">
                <div className="trrow"><span>Job performance</span><span>{perf}</span></div>
                <div className="trrow"><span>Ramp-up speed</span><span>{ramp}</span></div>
                <div className="trrow"><span>Retention</span><span>{ret}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tsec">
        <div className="tw">
          <div style={{ maxWidth: 640 }}>
            <p className="eyebrow reveal">How it works<b>.</b></p>
            <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Quality of hire, explained</h2>
            <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Quality of hire blends how well new hires perform, how quickly they ramp, and how long they stay. Averaging these gives a single index you can track over time — and skills-based hiring is proven to lift it.</p>
          </div>
          <div className="tsteps">
            <div className="tstep reveal"><div className="tstepn">1</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>Score performance</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>How well new hires deliver against role expectations.</p></div>
            <div className="tstep reveal" style={{ transitionDelay: '.06s' }}><div className="tstepn">2</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>Score ramp &amp; retention</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>How fast they got productive and whether they stay engaged.</p></div>
            <div className="tstep reveal" style={{ transitionDelay: '.12s' }}><div className="tstepn">3</div><h3 className="th2" style={{ fontSize: 19, marginBottom: 8 }}>Get your index</h3><p className="tbody" style={{ margin: 0, fontSize: 14.5 }}>The average is your quality-of-hire index out of 100.</p></div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
