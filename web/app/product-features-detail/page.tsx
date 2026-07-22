'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:#F23F44;}
a:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.h2{font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1.2px;margin:0;color:#1A1014;}
.h3{font-size:20px;line-height:1.25;font-weight:700;letter-spacing:-.3px;margin:0;color:#1A1014;}
.lead{font-size:18px;line-height:1.62;color:#5A4B4E;margin:0;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-weight:600;font-size:15.5px;font-family:inherit;padding:15px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease, border-color .2s;cursor:pointer;border:none;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.ft-hero{background:radial-gradient(1000px 520px at 82% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;padding:46px 28px 80px;}
.ft-crumb{font-size:13px;color:#9A878A;font-weight:600;margin:0 0 26px;display:flex;align-items:center;gap:9px;flex-wrap:wrap;}
.ft-crumb .sep{color:#D6C4C7;}
.ft-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:56px;align-items:center;}
.ft-tag{display:inline-flex;align-items:center;gap:7px;background:#FFF0F0;color:#C0242B;font-size:12px;font-weight:700;letter-spacing:.04em;padding:6px 13px;border-radius:999px;}
.ft-title{font-size:50px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:17px 0 18px;}
.ft-lede{font-size:18.5px;line-height:1.6;color:#5A4B4E;margin:0;max-width:560px;}
.ft-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px;}
.ft-ticks{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin-top:22px;font-size:14.5px;color:#8A7A7D;font-weight:500;}
.ft-ticks .tick{display:inline-flex;align-items:center;gap:7px;}
.ft-ticks .tk{color:#F23F44;font-weight:700;}
.ft-mock{background:#fff;border:1px solid #EFE2E3;border-radius:22px;box-shadow:0 30px 70px rgba(110,11,14,.14);overflow:hidden;}
.ft-mocktop{display:flex;align-items:center;gap:7px;padding:14px 18px;border-bottom:1px solid #F4ECEC;background:#FDFAF9;}
.ft-mc{width:11px;height:11px;border-radius:50%;}
.ft-mockslot{aspect-ratio:4/3;background:#FBF3EE;}
.ft-sh{max-width:680px;margin:0 0 40px;}
.ft-sh.ctr{margin-left:auto;margin-right:auto;text-align:center;}
.ft-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.ft-card{background:#fff;border:1.4px solid #EFE1E2;border-radius:18px;padding:28px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s,border-color .3s;}
.ft-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.ft-cic{width:46px;height:46px;border-radius:12px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.ft-card h3{font-size:17.5px;font-weight:700;color:#1A1014;margin:0 0 8px;letter-spacing:-.3px;}
.ft-card p{font-size:14px;line-height:1.6;color:#6C5A5D;margin:0;}
.ft-split{display:grid;grid-template-columns:1fr 1.05fr;gap:60px;align-items:center;}
.ft-split.rev .ft-splitcopy{order:2;}
.ft-chks{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:24px;}
.chk{display:flex;align-items:flex-start;gap:10px;font-size:14.5px;line-height:1.45;color:#46383C;font-weight:500;}
.chki{flex:none;width:22px;height:22px;border-radius:7px;background:transparent !important;display:flex;align-items:center;justify-content:center;margin-top:1px;}.chki svg{stroke:#1FA463;}
.ft-panel{background:#fff;border:1px solid #EFE2E3;border-radius:20px;box-shadow:0 22px 50px rgba(110,11,14,.09);overflow:hidden;}
.ft-panelslot{aspect-ratio:5/4;background:#FBF3EE;}
.ft-statband{background:radial-gradient(900px 480px at 50% -10%,#2A1417 0%,#1A1014 62%);color:#fff;}
.ft-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
.ft-stat .n{font-size:44px;font-weight:800;letter-spacing:-1.5px;color:#FF7A52;line-height:1;}
.ft-stat .l{font-size:14px;color:rgba(255,255,255,.72);margin-top:12px;line-height:1.45;}
.ft-relgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.ft-relcard{background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s,border-color .3s;display:block;}
.ft-relcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.ft-relic{width:44px;height:44px;border-radius:11px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.ft-relcard h3{font-size:16.5px;font-weight:700;color:#1A1014;margin:0 0 6px;letter-spacing:-.2px;}
.ft-relcard p{font-size:13.5px;line-height:1.55;color:#6C5A5D;margin:0;}
.ft-acc{display:flex;flex-direction:column;gap:12px;max-width:860px;margin:0 auto;}
.ft-ai{background:#fff;border:1.4px solid #EFE1E2;border-radius:16px;overflow:hidden;transition:box-shadow .2s,border-color .2s;}
.ft-ai.on{border-color:#F4C7C8;box-shadow:0 14px 30px rgba(110,11,14,.07);}
.ft-ah{display:flex;align-items:center;gap:15px;width:100%;background:none;border:0;font-family:inherit;cursor:pointer;padding:20px 22px;text-align:left;}
.ft-ah:hover{background:#FFFAF9;}
.ft-at{font-size:16px;font-weight:700;color:#1A1014;letter-spacing:-.2px;}
.ft-acar{margin-left:auto;color:#C0989B;display:flex;transition:transform .24s cubic-bezier(.2,.7,.3,1);}
.ft-ai.on .ft-acar{transform:rotate(180deg);color:#F23F44;}
.ft-ab{padding:0 22px 22px 22px;}
.ft-ab p{margin:0;font-size:15px;line-height:1.64;color:#5A4B4E;}
@media(max-width:920px){
  .ft-title{font-size:36px;letter-spacing:-1.2px;}
  .h2{font-size:27px;}
  .sec{padding:64px 22px;}
  .ft-grid,.ft-split{grid-template-columns:1fr;gap:38px;}
  .ft-split.rev .ft-splitcopy{order:0;}
  .ft-cards,.ft-relgrid{grid-template-columns:1fr;}
  .ft-stats{grid-template-columns:1fr 1fr;gap:32px 20px;}
  .ft-chks{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const svg = (
  ch: React.ReactNode,
) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    {ch}
  </svg>
);

const ICONS: Record<string, React.ReactNode> = {
  monitor: svg(<><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>),
  camera: svg(<><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></>),
  copy: svg(<><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>),
  search: svg(<><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></>),
  globe: svg(<><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" /></>),
  clock: svg(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  file: svg(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></>),
  chart: svg(<><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></>),
  plug: svg(<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5" />),
};

const capabilities = [
  { ic: 'monitor', name: 'Full-screen detection', desc: 'Candidates are locked to the assessment window. Every tab switch or exit is timestamped and surfaced in the report.' },
  { ic: 'camera', name: 'Webcam snapshots', desc: 'Periodic image capture verifies the person taking the test is the person you invited — no intrusive video streaming required.' },
  { ic: 'copy', name: 'Copy-paste blocking', desc: 'Paste is disabled on open-ended and coding questions, and pasted content is flagged when it does slip through.' },
  { ic: 'search', name: 'Plagiarism detection', desc: 'Free-text and code answers are compared against a large corpus and each other to catch copied or AI-generated work.' },
  { ic: 'globe', name: 'IP & location logging', desc: 'Multiple candidates from one IP, or unexpected locations, are highlighted so you can investigate volume fraud.' },
  { ic: 'clock', name: 'Question timers', desc: 'Per-question and full-test limits keep everyone on a level field and make lookup-heavy answers obvious.' },
];

const splitAPoints = ['Single integrity score per candidate', 'Timestamped event timeline', 'Snapshot gallery inline', 'Exportable for compliance review'];
const splitBPoints = ['No plugin or download to install', 'Works on any modern browser', 'Clear consent before the test', '94% candidate satisfaction'];

const stats = [
  { n: '5M+', l: 'candidates assessed under proctoring' },
  { n: 'SOC 2', l: 'Type II certified data handling' },
  { n: '13+', l: 'question formats, all proctorable' },
  { n: 'EEOC', l: 'defensible, consistent criteria' },
];

const faq = [
  { q: 'Does proctoring slow candidates down?', a: 'No. Detection runs quietly in the browser with no plugin or download. Candidates take the test as normal; the signals are collected in the background and surfaced only to you.' },
  { q: 'Is webcam monitoring required?', a: 'It is optional and configurable per assessment. You can run snapshot-based verification, disable the camera entirely, or require it only for high-stakes roles.' },
  { q: 'How does plagiarism detection work?', a: 'Open-ended and coding answers are compared against a large reference corpus and against other candidates in your pipeline, with likely AI-generated text flagged for review.' },
  { q: 'Is this compliant with hiring regulations?', a: 'Yes. Proctoring applies the same criteria to every candidate and produces an exportable audit trail, keeping decisions EEOC-defensible and GDPR-compliant.' },
  { q: 'Can I turn specific checks off?', a: 'Every layer — full-screen lock, snapshots, copy-paste blocking, IP logging and timers — is toggled independently per assessment so integrity matches the stakes of the role.' },
];

const related = [
  { ic: 'file', name: 'Custom question types', desc: '13+ formats from coding to video, so every skill is measured the right way.' },
  { ic: 'chart', name: 'Reporting & analytics', desc: 'Benchmarked scorecards and pipeline insights that make shortlisting objective.' },
  { ic: 'plug', name: 'ATS integrations', desc: '100+ native connections so results flow straight into your existing workflow.' },
];

const Check = () => (
  <span className="chki">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

export default function ProductFeaturesDetailPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="New — real-time proctoring flags on every assessment" announcementCta="See all features" />

      <section className="ft-hero"><div className="wrap">
        <p className="ft-crumb reveal in"><Link href="/features">Features</Link><span className="sep">›</span><span>Assessment integrity</span><span className="sep">›</span><span>Anti-cheating &amp; proctoring</span></p>
        <div className="ft-grid">
          <div>
            <span className="ft-tag reveal in"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Integrity &amp; proctoring</span>
            <h1 className="ft-title reveal in">Anti-cheating &amp; proctoring</h1>
            <p className="ft-lede reveal in">Keep every assessment fair and defensible. Full-screen detection, webcam snapshots, plagiarism checks and IP logging catch dishonesty in real time — so the scores you shortlist on are the scores you can trust.</p>
            <div className="ft-cta reveal in">
              <CtaButton label="Try for free" href="#" variant="primary" size="lg" icon="arrow" magnetic />
              <CtaButton label="Book a demo" href="/contact" variant="secondary" size="lg" icon="none" />
            </div>
            <div className="ft-ticks reveal in"><span className="tick"><b className="tk">✓</b>Free 7-day trial</span><span className="tick"><b className="tk">✓</b>No credit card required</span></div>
          </div>
          <div className="ft-mock reveal in">
            <div className="ft-mocktop"><span className="ft-mc" style={{ background: '#FF5F57' }}></span><span className="ft-mc" style={{ background: '#FEBC2E' }}></span><span className="ft-mc" style={{ background: '#28C840' }}></span></div>
            <div className="ft-mockslot"></div>
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="ft-sh"><p className="eyebrow reveal">What you get<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Six layers of integrity, on by default</h2></div>
        <div className="ft-cards">
          {capabilities.map((c, i) => (
            <div className="ft-card reveal" key={i}><span className="ft-cic">{ICONS[c.ic]}</span><h3>{c.name}</h3><p>{c.desc}</p></div>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="ft-split">
          <div className="ft-splitcopy">
            <p className="eyebrow reveal">In the report<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Every flag, in plain English</h2>
            <p className="lead reveal" style={{ transitionDelay: '.08s', marginTop: '18px' }}>You don&apos;t get a wall of raw logs. Testlify rolls proctoring signals into a single integrity summary per candidate — green, amber or red — with the evidence one click away, so recruiters act fast and defensibly.</p>
            <div className="ft-chks reveal" style={{ transitionDelay: '.12s' }}>
              {splitAPoints.map((p, i) => (<div className="chk" key={i}><Check />{p}</div>))}
            </div>
          </div>
          <div className="ft-panel reveal" style={{ transitionDelay: '.06s' }}><div className="ft-panelslot"></div></div>
        </div>
      </div></section>

      <section className="sec ft-statband"><div className="wrap">
        <div className="ft-sh ctr" style={{ maxWidth: '640px' }}><p className="eyebrow reveal" style={{ color: '#FF9C7A' }}>Proven at scale<b style={{ color: '#FF7A52' }}>.</b></p><h2 className="h2 reveal" style={{ color: '#fff', transitionDelay: '.04s' }}>Integrity you can defend to legal</h2></div>
        <div className="ft-stats">
          {stats.map((s, i) => (
            <div className="ft-stat reveal" key={i}><div className="n">{s.n}</div><div className="l">{s.l}</div></div>
          ))}
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="ft-split rev">
          <div className="ft-splitcopy">
            <p className="eyebrow reveal">Candidate-friendly<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Fair without feeling like surveillance</h2>
            <p className="lead reveal" style={{ transitionDelay: '.08s', marginTop: '18px' }}>Heavy-handed proctoring wrecks completion rates. Testlify keeps integrity lightweight — no downloads, no screen-share demands — so candidates finish and you keep a 94% satisfaction score while still catching bad actors.</p>
            <div className="ft-chks reveal" style={{ transitionDelay: '.12s' }}>
              {splitBPoints.map((p, i) => (<div className="chk" key={i}><Check />{p}</div>))}
            </div>
          </div>
          <div className="ft-panel reveal" style={{ transitionDelay: '.06s' }}><div className="ft-panelslot"></div></div>
        </div>
      </div></section>

      <SecuritySection eyebrow="Security & compliance" heading="Enterprise-grade security by default" sub="SOC 2 Type II, ISO 27001 and GDPR compliance, granular admin controls and a full audit trail — so every assessment is defensible." />

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="ft-sh ctr"><p className="eyebrow reveal">FAQ<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2></div>
        <div className="ft-acc">
          {faq.map((f, i) => {
            const isOpen = !!open[i];
            return (
              <div className={`ft-ai ${isOpen ? 'on' : ''} reveal`} key={i}>
                <button className="ft-ah" onClick={() => toggle(i)}><span className="ft-at">{f.q}</span><span className="ft-acar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></button>
                {isOpen && <div className="ft-ab"><p>{f.a}</p></div>}
              </div>
            );
          })}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="ft-sh ctr"><p className="eyebrow reveal">More features<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Explore the rest of the platform</h2></div>
        <div className="ft-relgrid">
          {related.map((r, i) => (
            <Link className="ft-relcard reveal" href="/product-features-detail" key={i}><span className="ft-relic">{ICONS[r.ic]}</span><h3>{r.name}</h3><p>{r.desc}</p></Link>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
