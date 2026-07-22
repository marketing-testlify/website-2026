'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.muted{color:#8A7A7D;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.btn-ghost{background:#fff;color:#1A1014;border:1.5px solid #EADDDE;}
.btn-ghost:hover{transform:translateY(-2px);border-color:#F2B7B9;box-shadow:0 10px 24px rgba(110,11,14,.08);}
.trust{display:flex;align-items:center;gap:14px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;}
.dot{width:4px;height:4px;border-radius:50%;background:#D9C7C9;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.shero{padding:64px 28px 40px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.ucgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.uccard{display:flex;flex-direction:column;background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:28px;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;scroll-margin-top:120px;text-decoration:none;color:inherit;}
.uccard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.ucic{width:48px;height:48px;border-radius:14px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.uctitle{font-size:18px;font-weight:700;letter-spacing:-.3px;margin:0 0 8px;}
.ucbody{font-size:14px;line-height:1.6;color:#6A5A5D;margin:0 0 16px;}
.uclink{font-size:13.5px;font-weight:700;color:#F23F44;margin-top:auto;display:inline-flex;align-items:center;gap:6px;}
.indgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.indpill{display:flex;align-items:center;gap:13px;background:#fff;border:1px solid #EFE2E3;border-radius:15px;padding:18px 20px;font-weight:600;font-size:15px;text-decoration:none;color:inherit;transition:transform .2s ease, box-shadow .2s ease, border-color .2s;}
.indpill:hover{transform:translateY(-3px);box-shadow:0 16px 34px rgba(110,11,14,.08);border-color:#F4D2D3;}
.indic{width:40px;height:40px;border-radius:11px;background:#FBF3EE;color:#C0242B;display:flex;align-items:center;justify-content:center;flex:none;}
.szgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.szcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:32px 28px;text-decoration:none;color:inherit;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;}
.szcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.statn{font-size:50px;font-weight:800;letter-spacing:-2px;color:#F23F44;line-height:1;}
.metricrow{display:grid;grid-template-columns:repeat(4,1fr);}
.metric{text-align:center;padding:4px 22px;}
.metric + .metric{border-left:1px solid rgba(255,255,255,.14);}
.metricnum{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#fff;font-variant-numeric:tabular-nums;}
.metricnum .u{color:#FF7A52;font-weight:600;}
.metriclbl{font-size:14px;color:rgba(255,255,255,.72);font-weight:500;margin-top:10px;line-height:1.45;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .ucgrid,.indgrid,.szgrid{grid-template-columns:1fr;}
  .statgrid{grid-template-columns:1fr 1fr !important;}
  .metricrow{grid-template-columns:repeat(2,1fr);row-gap:34px;}
  .metric + .metric{border-left:none;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function SolutionIndexPage() {
  useEffect(() => {
    const runCount = (el: HTMLElement) => {
      const to = +(el.dataset.to || '0');
      const comma = el.dataset.comma === '1';
      const dec = +(el.dataset.dec || '0');
      const dur = 1500;
      let st: number | null = null;
      const fmt = (n: number) => {
        if (dec) return (+n).toFixed(dec);
        n = Math.round(n);
        return comma ? n.toLocaleString('en-US') : String(n);
      };
      const tick = (t: number) => {
        if (st === null) st = t;
        const p = Math.min(1, (t - st) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * e);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(to);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          en.target.querySelectorAll<HTMLElement>('.v[data-to]').forEach(runCount);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.metricrow').forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="See how teams like yours hire with Testlify" announcementCta="Book a demo" />

      <section className="shero"><div className="wrap" style={{ maxWidth: '820px' }}>
        <p className="eyebrow reveal">Solutions<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>A hiring solution for<br />every kind of team</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '600px', transitionDelay: '.08s' }}>However you hire — high volume, fully remote, straight off campus — Testlify adapts to your workflow and surfaces the right people, faster.</p>
        <div className="reveal" style={{ marginTop: '30px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.12s' }}>
          <CtaButton label="Start free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
          <CtaButton label="Book a demo" href="#" variant="secondary" size="md" icon="play" />
        </div>
      </div></section>

      <section className="sec" id="usecases" style={{ paddingTop: '56px' }}><div className="wrap">
        <div style={{ maxWidth: '640px', margin: '0 auto 48px', textAlign: 'center' }}>
          <p className="eyebrow reveal">By use case<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Built for the way you hire</h2>
        </div>
        <div className="ucgrid">
          <Link href="/solution-usecase-template" className="uccard reveal" id="volume-hiring"><span className="ucic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span><h3 className="uctitle">Volume hiring</h3><p className="ucbody">Screen thousands of applicants without growing your team. Auto-rank every candidate and only interview the top few percent.</p><span className="uclink">Learn more →</span></Link>
          <Link href="/solution-usecase-template" className="uccard reveal" id="remote-hiring" style={{ transitionDelay: '.06s' }}><span className="ucic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span><h3 className="uctitle">Remote hiring</h3><p className="ucbody">Assess skills objectively across time zones with async tests and one-way video interviews — no scheduling gymnastics.</p><span className="uclink">Learn more →</span></Link>
          <Link href="/solution-usecase-template" className="uccard reveal" id="campus-hiring" style={{ transitionDelay: '.12s' }}><span className="ucic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></span><h3 className="uctitle">Campus hiring</h3><p className="ucbody">Run fair, scalable graduate drives. Test entire cohorts in one go and shortlist on merit, not pedigree.</p><span className="uclink">Learn more →</span></Link>
          <Link href="/solution-usecase-template" className="uccard reveal" id="diversity-hiring"><span className="ucic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></span><h3 className="uctitle">Diversity hiring</h3><p className="ucbody">Remove names, schools and bias from the first round. Structured, skills-first screening widens your funnel fairly.</p><span className="uclink">Learn more →</span></Link>
          <Link href="/solution-usecase-template" className="uccard reveal" id="technical-hiring" style={{ transitionDelay: '.06s' }}><span className="ucic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></span><h3 className="uctitle">Technical hiring</h3><p className="ucbody">Real-world coding challenges in 40+ languages with live playback. Hire engineers on what they can build.</p><span className="uclink">Learn more →</span></Link>
          <Link href="/solution-usecase-template" className="uccard reveal" id="agency-hiring" style={{ transitionDelay: '.12s' }}><span className="ucic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span><h3 className="uctitle">Staffing &amp; agencies</h3><p className="ucbody">Place candidates faster with white-labeled assessments and shareable scorecards your clients will trust.</p><span className="uclink">Learn more →</span></Link>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">By industry<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Tuned to your field</h2>
        </div>
        <div className="indgrid">
          <Link href="/solution-industry-template" className="indpill reveal"><span className="indic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span>IT &amp; technology</Link>
          <Link href="/solution-industry-template" className="indpill reveal" style={{ transitionDelay: '.04s' }}><span className="indic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg></span>SaaS &amp; software</Link>
          <Link href="/solution-industry-template" className="indpill reveal" style={{ transitionDelay: '.08s' }}><span className="indic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span>Financial services</Link>
          <Link href="/solution-industry-template" className="indpill reveal"><span className="indic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></span>Healthcare</Link>
          <Link href="/solution-industry-template" className="indpill reveal" style={{ transitionDelay: '.04s' }}><span className="indic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></span>Retail &amp; e-commerce</Link>
          <Link href="/solution-industry-template" className="indpill reveal" style={{ transitionDelay: '.08s' }}><span className="indic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span>BPO &amp; services</Link>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">By company size<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>From first hire to ten-thousandth</h2>
        </div>
        <div className="szgrid">
          <Link href="/solution-company-template" className="szcard reveal"><h3 className="h3" style={{ marginBottom: '10px' }}>Startups</h3><p className="body" style={{ fontSize: '14.5px' }}>Hire your first ten people right. Get a fair, structured process in place from day one — without a recruiting team.</p></Link>
          <Link href="/solution-company-template" className="szcard reveal" style={{ transitionDelay: '.06s' }}><h3 className="h3" style={{ marginBottom: '10px' }}>Mid-market</h3><p className="body" style={{ fontSize: '14.5px' }}>Standardize hiring across departments, plug into your ATS and cut time-to-hire as you scale headcount.</p></Link>
          <Link href="/solution-company-template" className="szcard reveal" style={{ transitionDelay: '.12s' }}><h3 className="h3" style={{ marginBottom: '10px' }}>Enterprise</h3><p className="body" style={{ fontSize: '14.5px' }}>Global, compliant, high-volume hiring with SSO, custom integrations, security review and a dedicated team.</p></Link>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#1A1014', color: '#fff' }}><div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 50px' }}>
          <p className="eyebrow reveal" style={{ color: '#C9A9AB' }}>The outcomes<b style={{ color: '#FF7A52' }}>.</b></p>
          <h2 className="h2 reveal" style={{ color: '#fff', transitionDelay: '.04s' }}>Results across every team</h2>
        </div>
        <div className="metricrow reveal">
          <div className="metric"><div className="metricnum"><span className="v" data-to="68">0</span><span className="u">%</span></div><div className="metriclbl">faster time-to-hire</div></div>
          <div className="metric"><div className="metricnum"><span className="v" data-to="3.2" data-dec="1">0</span><span className="u">×</span></div><div className="metriclbl">more qualified shortlists</div></div>
          <div className="metric"><div className="metricnum"><span className="v" data-to="91">0</span><span className="u">%</span></div><div className="metriclbl">candidate completion rate</div></div>
          <div className="metric"><div className="metricnum"><span className="v" data-to="40">0</span><span className="u">%</span></div><div className="metriclbl">lower cost per hire</div></div>
        </div>
      </div></section>

      <section className="sec" style={{ textAlign: 'center' }}><div className="wrap" style={{ maxWidth: '720px' }}>
        <h2 className="h2 reveal">Find your hiring solution</h2>
        <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Tell us how you hire and we&apos;ll show you the fastest path to better shortlists.</p>
        <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}>
          <CtaButton label="Start free" href="/pricing" variant="primary" size="md" icon="arrow" />
          <CtaButton label="Book a demo" href="#" variant="secondary" size="md" icon="play" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
