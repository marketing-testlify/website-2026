'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
::selection{background:#F23F44;color:#fff;}
.tw{max-width:1180px;margin:0 auto;padding:0 28px;}
.tsec{padding:88px 28px;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;}
.th1{font-size:52px;line-height:1.06;font-weight:800;letter-spacing:-1.6px;margin:0;color:#1A1014;}
.th2{font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1px;margin:0;color:#1A1014;}
.tlead{font-size:19px;line-height:1.6;color:#5A4B4E;margin:16px 0 0;}
.tbody{font-size:16px;line-height:1.66;color:#5A4B4E;}
.reveal{opacity:0;transform:translateY(26px);}
.tcrumb{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;color:#A9999C;margin:0 0 18px;}
.tcrumb a{color:#F23F44;}
.tcalc{display:grid;grid-template-columns:1.05fr 1fr;gap:28px;align-items:stretch;}
.tcard{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:32px;box-shadow:0 20px 44px rgba(110,11,14,.08);}
.tfield{margin-bottom:20px;}
.tfield label{display:block;font-size:13.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.tfield .thint{font-weight:500;color:#8A7A7D;font-size:12px;margin-left:6px;}
.tinput{width:100%;height:50px;border:1.5px solid #EADDDE;border-radius:12px;padding:0 16px;font-family:inherit;font-size:16px;font-weight:600;color:#1A1014;background:#FCFAFA;transition:border-color .2s,box-shadow .2s;}
.tinput:focus{outline:none;border-color:#F23F44;box-shadow:0 0 0 4px rgba(242,63,68,.12);background:#fff;}
.tprefix{position:relative;}
.tprefix .tsym{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-weight:700;color:#A9999C;font-size:15px;}
.tprefix .tinput{padding-left:32px;}
.tresult{background:linear-gradient(160deg,#1A1014,#2A1418);border-radius:22px;padding:34px;color:#fff;display:flex;flex-direction:column;justify-content:center;}
.trlabel{font-size:12.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#C9A9AB;margin:0;}
.trbig{font-size:64px;font-weight:800;letter-spacing:-2px;line-height:1;margin:12px 0 0;background:linear-gradient(180deg,#fff,#FFC9BD);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.trsub{font-size:14.5px;color:#C2B1B4;margin:14px 0 0;line-height:1.5;}
.trbreak{margin-top:22px;padding-top:20px;border-top:1px solid #3A2529;display:flex;flex-direction:column;gap:10px;}
.trrow{display:flex;align-items:center;justify-content:space-between;font-size:13.5px;}
.trrow span:first-child{color:#A38E92;}
.trrow span:last-child{font-weight:700;color:#F1E7E8;}
.tsteps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px;}
.tstep{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tstep:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tstepn{width:34px;height:34px;border-radius:10px;background:#FFF0F0;color:#F23F44;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.tctablock{background:radial-gradient(900px 420px at 80% 0%,#FFE3DD 0%,rgba(255,227,221,0) 60%),linear-gradient(135deg,#F23F44,#C0242B);border-radius:28px;padding:64px 48px;text-align:center;color:#fff;}
.trelgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:40px;}
.trelcard{background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:22px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.trelcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.trelic{width:40px;height:40px;border-radius:11px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.trelt{font-size:15.5px;font-weight:700;color:#1A1014;margin:0 0 4px;}
.treld{font-size:13px;color:#8A7A7D;margin:0;line-height:1.45;}
.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.chk svg{color:#F23F44;flex:none;margin-top:2px;}
@media(max-width:900px){.tcalc{grid-template-columns:1fr;}.th1{font-size:38px;letter-spacing:-1px;}.th2{font-size:28px;}.tsec{padding:64px 22px;}.tsteps{grid-template-columns:1fr;}.trelgrid{grid-template-columns:1fr 1fr;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const relatedTools = [
  { t: 'Time to hire calculator', d: 'Measure your average time to fill', href: '/hr-tools' },
  { t: 'Attrition rate calculator', d: 'Track turnover and its real cost', href: '/hr-tools' },
  { t: 'eNPS calculator', d: 'Gauge employee sentiment', href: '/hr-tools' },
  { t: 'Hiring ROI calculator', d: 'Prove the value of better hiring', href: '/hr-tools' },
];

const faqItems = [
  { q: 'What are the factors that affect cost-per-hire?', a: 'Position level (senior roles often have higher CPH due to more complex interview processes), type of position (high-demand roles like engineers or data scientists can raise CPH), and recruitment strategy (more intensive strategies for senior or specialized roles increase CPH).' },
  { q: 'How does employee turnover impact cost-per-hire calculations?', a: 'Turnover significantly raises CPH — replacing an employee can cost half to twice their salary. A high turnover rate means more frequent hiring, which directly increases CPH through recurring job-posting, recruiting event, training and onboarding costs.' },
  { q: 'What are the components of cost-per-hire?', a: 'External costs: recruitment events, job advertising, background screening, candidate travel and lodging, agency and search firm fees. Internal costs: interviewing time, recruitment training, internal systems, employee referral bonuses, and recruiter salaries.' },
];

function num(v: string | number): number {
  const n = parseFloat(String(v));
  return isNaN(n) || n < 0 ? 0 : n;
}
function money(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export default function CostPerHireCalculatorPage() {
  const [internal, setInternal] = useState<string | number>(12000);
  const [external, setExternal] = useState<string | number>(8000);
  const [hires, setHires] = useState<string | number>(6);

  const internalN = num(internal);
  const externalN = num(external);
  const hiresN = Math.max(1, Math.round(num(hires)) || 1);
  const total = internalN + externalN;
  const cph = total / hiresN;
  const note = cph <= 4700
    ? 'Below the ~$4,700 industry benchmark — efficient hiring.'
    : 'Above the ~$4,700 industry benchmark — room to optimize.';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and interview kits, ready to use."
        announcementCta="Browse tools"
        homeHref="/"
      />

      <section className="tsec" style={{ background: 'radial-gradient(1000px 500px at 80% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff' }}><div className="tw">
        <div className="tcrumb reveal"><Link href="/blog">Resources</Link><span>/</span><span>HR tools</span><span>/</span><span>Cost per hire calculator</span></div>
        <div style={{ maxWidth: '720px' }}>
          <p className="eyebrow reveal">Cost per hire calculator<b>.</b></p>
          <h1 className="th1 reveal" style={{ transitionDelay: '.04s' }}>Cost per hire (CPH) calculator</h1>
          <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Discover the true cost of recruitment with our cost-per-hire (CPH) calculator, aligned with the CPHC Standard. It breaks down internal and external recruitment costs for better-informed hiring decisions.</p>
        </div>
      </div></section>

      <section className="tsec" style={{ background: '#FBF3EE', paddingTop: '40px' }}><div className="tw">
        <div className="tcalc reveal">
          <div className="tcard">
            <p className="eyebrow" style={{ marginBottom: '22px' }}>Your numbers<b>.</b></p>
            <div className="tfield"><label>Internal recruiting cost <span className="thint">salaries, referrals, tools</span></label><div className="tprefix"><span className="tsym">$</span><input className="tinput" type="number" min="0" value={internal} onChange={(e) => setInternal(e.target.value)} /></div></div>
            <div className="tfield"><label>External recruiting cost <span className="thint">agencies, job boards, ads</span></label><div className="tprefix"><span className="tsym">$</span><input className="tinput" type="number" min="0" value={external} onChange={(e) => setExternal(e.target.value)} /></div></div>
            <div className="tfield" style={{ marginBottom: '0' }}><label>Total hires <span className="thint">in the period</span></label><input className="tinput" type="number" min="1" value={hires} onChange={(e) => setHires(e.target.value)} /></div>
          </div>
          <div className="tresult">
            <p className="trlabel">Cost per hire</p>
            <p className="trbig">{money(cph)}</p>
            <p className="trsub">{note}</p>
            <div className="trbreak">
              <div className="trrow"><span>Total recruiting spend</span><span>{money(total)}</span></div>
              <div className="trrow"><span>Total hires</span><span>{hires}</span></div>
              <div className="trrow"><span>Industry benchmark</span><span>$4,700</span></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="tsec"><div className="tw">
        <div style={{ maxWidth: '640px' }}>
          <p className="eyebrow reveal">How it works<b>.</b></p>
          <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Cost per hire, explained</h2>
          <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Cost per hire adds up everything you spend to fill a role — internal and external — and divides it by the number of hires. Lower it by screening on skill earlier and cutting time-to-shortlist.</p>
        </div>
        <div className="tsteps">
          <div className="tstep reveal"><div className="tstepn">1</div><h3 className="th2" style={{ fontSize: '19px', marginBottom: '8px' }}>Input internal recruitment costs</h3><p className="tbody" style={{ margin: '0', fontSize: '14.5px' }}>Fill in internal hiring expenses — consulting services, sourcing, operational costs, bonuses and more.</p></div>
          <div className="tstep reveal" style={{ transitionDelay: '.06s' }}><div className="tstepn">2</div><h3 className="th2" style={{ fontSize: '19px', marginBottom: '8px' }}>Enter external recruitment costs</h3><p className="tbody" style={{ margin: '0', fontSize: '14.5px' }}>Add external expenses like agency commissions and job-board spend for a comprehensive total.</p></div>
          <div className="tstep reveal" style={{ transitionDelay: '.12s' }}><div className="tstepn">3</div><h3 className="th2" style={{ fontSize: '19px', marginBottom: '8px' }}>Add the total number of hires</h3><p className="tbody" style={{ margin: '0', fontSize: '14.5px' }}>Specify how many employees you hired during the chosen timeframe.</p></div>
          <div className="tstep reveal" style={{ transitionDelay: '.18s' }}><div className="tstepn">4</div><h3 className="th2" style={{ fontSize: '19px', marginBottom: '8px' }}>Hit calculate for your result</h3><p className="tbody" style={{ margin: '0', fontSize: '14.5px' }}>See your cost per hire within seconds, benchmarked against the industry average.</p></div>
        </div>
      </div></section>

      <section className="tsec" style={{ background: '#FBF3EE' }}><div className="tw">
        <div style={{ maxWidth: '720px' }}>
          <p className="eyebrow reveal">Definition<b>.</b></p>
          <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>What is cost-per-hire (CPH)?</h2>
          <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>Cost-per-hire (CPH) is a key recruiting metric that tracks the total cost of hiring a new employee — including advertising costs, recruitment agency fees, employee referrals, and the salaries of HR staff involved in the hiring process.</p>
        </div>
      </div></section>

      <section className="tsec"><div className="tw">
        <div style={{ maxWidth: '720px' }}>
          <p className="eyebrow reveal">The formula<b>.</b></p>
          <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>How does the cost-per-hire calculator work?</h2>
          <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>CPH = (External costs + Internal costs) ÷ Total number of hires in a period.</p>
          <p className="tbody reveal" style={{ transitionDelay: '.1s' }}><b>External recruitment costs:</b> expenses from outside sources — recruitment agency fees, advertising, recruitment technology, candidate travel, and pre-employment screening.</p>
          <p className="tbody reveal" style={{ transitionDelay: '.14s', marginTop: '14px' }}><b>Internal recruitment costs:</b> expenses from within the company — HR/recruiter salaries, internal job boards, referral rewards, interview costs, and recruiter travel.</p>
          <p className="tbody reveal" style={{ transitionDelay: '.18s', marginTop: '14px' }}>For instance, if a company spends $40,000 recruiting and hiring ten employees, the cost-per-hire is $4,000. Monitoring CPH over time helps identify trends and areas for improvement.</p>
        </div>
      </div></section>

      <section className="tsec" style={{ background: '#FBF3EE' }}><div className="tw">
        <div style={{ maxWidth: '640px' }}>
          <p className="eyebrow reveal">Why it matters<b>.</b></p>
          <h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Why use a cost-per-hire calculator?</h2>
          <p className="tlead reveal" style={{ transitionDelay: '.08s' }}>A cost-per-hire calculator is a strategic tool that improves hiring efficiency and supports informed decision-making in HR practices.</p>
        </div>
        <ul className="chk reveal" style={{ marginTop: '30px', maxWidth: '760px' }}>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Better tracking:</b> Track all recruitment costs, including hidden ones, for clearer budgeting and resource planning.</span></li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Benchmarking:</b> Compare your hiring costs with industry standards or competitors to assess recruitment efficiency.</span></li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Continuous improvement:</b> Regular CPH measurements help HR teams evaluate and refine hiring strategies over time.</span></li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Budget planning:</b> Knowing your average cost per hire makes predicting recruitment expenses and financial planning easier.</span></li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><span><b>Identifying improvement areas:</b> Analyzing CPH highlights high-cost areas, helping refine recruitment and cut unnecessary spend.</span></li>
        </ul>
      </div></section>

      <section className="tsec"><div className="tw">
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}><p className="eyebrow reveal">FAQ<b>.</b></p><h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2></div>
        <div className="reveal" style={{ maxWidth: '820px', margin: '34px auto 0' }}><FAQ items={faqItems} /></div>
      </div></section>

      <section className="tsec"><div className="tw">
        <div style={{ maxWidth: '640px' }}><p className="eyebrow reveal">More free tools<b>.</b></p><h2 className="th2 reveal" style={{ transitionDelay: '.04s' }}>Keep optimizing your hiring</h2></div>
        <div className="trelgrid reveal">
          {relatedTools.map((rt, i) => (
            <Link key={i} className="trelcard" href={rt.href}><div className="trelic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="11" x2="8" y2="11"></line><line x1="12" y1="11" x2="12" y2="11"></line><line x1="16" y1="11" x2="16" y2="11"></line><line x1="8" y1="16" x2="8" y2="16"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg></div><p className="trelt">{rt.t}</p><p className="treld">{rt.d}</p></Link>
          ))}
        </div>
      </div></section>

      <section className="tsec" style={{ paddingTop: '0' }}><div className="tw"><div className="tctablock reveal">
        <h2 className="th2" style={{ color: '#fff', fontSize: '38px', margin: '0 auto 14px', maxWidth: '560px' }}>Cut your cost per hire with skills-based screening</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.55', color: 'rgba(255,255,255,.92)', maxWidth: '520px', margin: '0 auto 30px' }}>Shortlist on verified skill in minutes — fewer agency fees, fewer bad hires, faster fills.</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}><CtaButton label="Try for free" href="/pricing" variant="light" size="lg" icon="arrow" magnetic /><CtaButton label="Book a demo" href="#" variant="outline-light" size="lg" icon="play" /></div>
      </div></div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
