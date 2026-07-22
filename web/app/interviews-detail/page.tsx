'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:84px 28px;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.h2{font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1.2px;margin:0;color:#1A1014;}
.h3{font-size:20px;line-height:1.25;font-weight:700;letter-spacing:-.3px;margin:0;color:#1A1014;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-weight:600;font-size:15.5px;font-family:inherit;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease, border-color .2s;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
/* hero */
.dhero{background:radial-gradient(1000px 520px at 82% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;padding:44px 28px 74px;}
.crumb{font-size:13px;color:#9A878A;font-weight:600;margin:0 0 22px;display:flex;align-items:center;gap:9px;flex-wrap:wrap;}
.crumb a{color:#F23F44;}
.crumb .sep{color:#D6C4C7;}
.backlink{display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:600;color:#F23F44;margin-bottom:18px;}
.backlink svg{transition:transform .2s;}
.backlink:hover svg{transform:translateX(-3px);}
.dtitle{font-size:46px;line-height:1.05;font-weight:800;letter-spacing:-1.8px;margin:0 0 16px;}
.dlede{font-size:18px;line-height:1.62;color:#5A4B4E;margin:0;max-width:820px;}
/* media grid */
.dmedia{display:grid;grid-template-columns:1.4fr 1fr;gap:46px;align-items:start;margin-top:40px;}
.dcam{position:relative;background:#EBE6E6;border-radius:18px;min-height:430px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px;overflow:hidden;}
.dcamic{color:#B4A8A8;margin-bottom:8px;}
.dcamt{font-size:30px;font-weight:800;letter-spacing:-.6px;color:#3A2E30;margin:0 0 10px;}
.dcams{font-size:15px;line-height:1.55;color:#6C5A5D;margin:0;max-width:430px;}
.dcam-ctrls{position:absolute;bottom:24px;left:0;right:0;display:flex;justify-content:center;gap:16px;}
.dctrl{width:50px;height:50px;border-radius:50%;background:#fff;box-shadow:0 6px 16px rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;color:#1A1014;}
.ddevsel{display:flex;gap:12px;margin-top:16px;flex-wrap:wrap;}
.ddev-pill{flex:1;min-width:165px;display:flex;align-items:center;gap:9px;font-family:inherit;font-size:13.5px;font-weight:500;color:#6C5A5D;background:#fff;border:1.4px solid #EFDDDE;border-radius:100px;padding:11px 15px;cursor:pointer;transition:border-color .16s;}
.ddev-pill:hover{border-color:#F4B9BB;}
.ddev-pill .pico{color:#8A7A7D;flex:none;display:flex;}
.ddev-pill .pchev{margin-left:auto;color:#B79DA0;flex:none;display:flex;}
.dmedia-r{padding-top:6px;}
.dstart-h{font-size:24px;font-weight:800;letter-spacing:-.5px;color:#1A1014;margin:0 0 22px;}
.dpts{list-style:none;margin:0 0 30px;padding:0;display:flex;flex-direction:column;gap:15px;}
.dpts li{display:flex;align-items:flex-start;gap:12px;font-size:16px;line-height:1.5;color:#3C2C2F;}
.dpts li::before{content:"";flex:none;width:6px;height:6px;border-radius:50%;background:#F23F44;margin-top:9px;}
.dhspec{display:flex;gap:40px;margin:0 0 24px;padding:20px 0;border-top:1px solid #EADFDF;border-bottom:1px solid #EADFDF;}
.dhspec-i .k{display:block;font-size:12.5px;color:#8A7A7D;font-weight:600;margin-bottom:4px;}
.dhspec-i .v{font-size:19px;font-weight:800;color:#1A1014;letter-spacing:-.3px;}
/* skills + spec */
.td-sh{max-width:720px;margin:0 0 32px;}
.td-sh.ctr{margin-left:auto;margin-right:auto;text-align:center;}
.skmgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.skmcard{display:flex;align-items:center;gap:15px;background:#fff;border:1.4px solid #EFE1E2;border-radius:16px;padding:20px 22px;box-shadow:0 10px 24px rgba(110,11,14,.05);transition:transform .25s cubic-bezier(.2,.7,.3,1),box-shadow .25s,border-color .25s;}
.skmcard:hover{transform:translateY(-4px);border-color:#F4C7C8;box-shadow:0 16px 32px rgba(110,11,14,.10);}
.skmnum{flex:none;width:42px;height:42px;border-radius:12px;background:#FFF0EF;color:#F23F44;font-size:15px;font-weight:800;display:flex;align-items:center;justify-content:center;}
.skmname{font-size:16px;font-weight:700;color:#1A1014;letter-spacing:-.3px;line-height:1.3;}
.dspecrow{display:flex;gap:48px;margin-top:34px;padding-top:26px;border-top:1px solid #EADFDF;}
.dspecitem .k{display:block;font-size:13px;color:#8A7A7D;font-weight:600;margin-bottom:5px;}
.dspecitem .v{font-size:22px;font-weight:800;color:#1A1014;letter-spacing:-.4px;}
@media(max-width:960px){.skmgrid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.skmgrid{grid-template-columns:1fr;}}
/* prose + why */
.prose p{font-size:16px;line-height:1.72;color:#5A4B4E;margin:0 0 16px;}
.prose{max-width:820px;}
.smelink{display:inline-flex;align-items:center;gap:7px;margin-top:20px;font-size:15px;font-weight:700;color:#F23F44;}
.smelink svg{transition:transform .2s;}
.smelink:hover svg{transform:translateX(4px);}
.whygrid{display:grid;grid-template-columns:1fr 1.05fr;gap:48px;align-items:start;}
.featgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
.feattile{display:flex;flex-direction:column;gap:12px;background:#fff;border:1.4px solid #EFE1E2;border-radius:14px;padding:18px 16px;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease;}
.feattile:hover{transform:translateY(-3px);border-color:#F4C7C8;box-shadow:0 14px 28px rgba(110,11,14,.08);}
.featic{width:38px;height:38px;border-radius:10px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.featlbl{font-size:14px;font-weight:600;color:#27181B;line-height:1.35;}
@media(max-width:960px){.whygrid{grid-template-columns:1fr;gap:32px;}}
@media(max-width:560px){.featgrid{grid-template-columns:repeat(2,1fr);}}
/* faq tabs (global tabset + sliding indicator) */
.faqcols{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start;}
.faqcol h3{font-size:15px;font-weight:700;letter-spacing:.02em;color:#1A1014;margin:0 0 14px;}
.tabset{position:relative;display:inline-flex;align-items:center;gap:4px;background:#F3E9E9;border:1px solid #EADDDE;border-radius:100px;padding:5px;}
.tabslider{position:absolute;top:5px;bottom:5px;left:0;width:0;background:#fff;border-radius:100px;box-shadow:0 2px 8px rgba(110,11,14,.14);transition:transform .32s cubic-bezier(.4,0,.2,1),width .32s cubic-bezier(.4,0,.2,1);z-index:0;}
.tabbtn{position:relative;z-index:1;font-family:inherit;font-size:14.5px;font-weight:600;color:#6A585B;background:transparent;border:0;padding:10px 22px;border-radius:100px;cursor:pointer;transition:color .2s ease;}
.tabbtn:hover{color:#1A1014;}
.tabbtn.on{color:#1A1014;}
.faqwrap{max-width:820px;margin:0 auto;}
@media(max-width:920px){
  .dtitle{font-size:34px;letter-spacing:-1px;}
  .h2{font-size:27px;}
  .sec{padding:60px 22px;}
  .dmedia{grid-template-columns:1fr;gap:30px;}
  .dcam{min-height:300px;}
  .dspecrow{gap:32px;}
  .faqcols{grid-template-columns:1fr;gap:16px;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const evalPoints = [
  'Evaluate narrative style and storytelling skills',
  'Assess character development and originality',
  'Measure creativity under real pitch conditions',
  'Identify writers with industry-ready potential',
];

const skills = [
  'Criminal Record Analysis',
  'Employment History Verification',
  'Education and Credentials Validation',
  'Reference Check Process',
  'Risk Assessment',
];

const features = [
  'Chat simulation',
  '3000+ tests',
  'White label',
  'Typing tests',
  'ATS integrations',
  'Custom questions',
  'Live coding tests',
  'Multilingual tests',
  'Personality & Culture',
];

const faqTest = [
  { q: 'What exactly does a background check include when conducted by an employer?', a: 'A background check typically includes verification of employment history, education credentials, criminal record checks, driving record, credit history (for certain roles) and identity verification.' },
  { q: 'How long does a background check usually take to complete?', a: 'The timeframe varies by scope and geography, but standard employment background checks are often completed within 1–3 business days for simple checks, and 3–5 business days (or longer) for more extensive or international screenings.' },
  { q: 'Do candidates need to give consent before an employer can run a background check?', a: 'Yes — in many jurisdictions (such as the U.S.) employers must obtain written or electronic consent from the candidate before initiating a check, especially when involving consumer-reporting agencies.' },
  { q: 'How far back do background checks typically go in terms of history?', a: 'The "look-back" period depends on local laws and employer policy, but a common standard is 7–10 years for criminal history or employment verifications, especially for higher-risk roles.' },
  { q: 'Is a drug test always part of a background check?', a: "No — drug testing is not inherently part of a standard background check; it's often a separate screening service that may be required depending on industry, role or company policy." },
];

const faqPlatform = [
  { q: 'Can I try a sample interview?', a: 'Yes. Launch a guided sample to see how candidates experience Testlify interviews end-to-end.' },
  { q: 'How do I pick the right interview?', a: 'Share the role and seniority with us and we will match the best AI interview templates or build one with you.' },
  { q: 'Do you offer ready-to-go interview libraries?', a: 'We maintain curated interview libraries for 300+ roles so you can launch in minutes.' },
  { q: 'Can Testlify plug into my ATS?', a: 'Yes. Native integrations and Zapier connectors push scores, videos, and notes directly into your ATS.' },
  { q: 'What are the technical requirements?', a: 'A modern browser (Chrome, Edge, Safari) and a stable internet connection are enough for candidates to join.' },
  { q: 'How reliable are the evaluations?', a: 'Each interview is calibrated with SMEs, structured rubrics, and AI scoring to keep results consistent.' },
];

function featIcon(label: string) {
  const s = label.toLowerCase();
  const svgProps = { width: 19, height: 19, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (s.includes('chat')) return <svg {...svgProps}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
  if (s.includes('coding')) return <svg {...svgProps}><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></svg>;
  if (s.includes('typing')) return <svg {...svgProps}><rect x="2" y="6" width="20" height="12" rx="2" /><line x1="6" y1="10" x2="6.1" y2="10" /><line x1="10" y1="10" x2="10.1" y2="10" /><line x1="14" y1="10" x2="14.1" y2="10" /><line x1="18" y1="10" x2="18.1" y2="10" /><line x1="7" y1="14" x2="17" y2="14" /></svg>;
  if (s.includes('ats') || s.includes('integration')) return <svg {...svgProps}><path d="M9 2v6" /><path d="M15 2v6" /><path d="M6 8h12v3a6 6 0 0 1-12 0z" /><path d="M12 17v5" /></svg>;
  if (s.includes('custom')) return <svg {...svgProps}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z" /></svg>;
  if (s.includes('white label')) return <svg {...svgProps}><path d="M20.6 13.4l-8.2 8.2a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4a2 2 0 0 1 2-2h8.6a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8z" /><line x1="7.5" y1="7.5" x2="7.51" y2="7.5" /></svg>;
  if (s.includes('multilingual') || s.includes('language')) return <svg {...svgProps}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" /></svg>;
  if (s.includes('personality') || s.includes('culture')) return <svg {...svgProps}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (s.includes('test')) return <svg {...svgProps}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>;
  return <svg {...svgProps}><path d="M20 6L9 17l-5-5" /></svg>;
}

export default function InterviewsDetailPage() {
  const [faqTab, setFaqTab] = useState(0);
  const tabsetRef = useRef<HTMLDivElement>(null);

  const positionSlider = () => {
    const root = tabsetRef.current;
    if (!root) return;
    const btns = root.querySelectorAll('.tabbtn');
    const sl = root.querySelector<HTMLElement>('.tabslider');
    const a = btns[faqTab] as HTMLElement | undefined;
    if (a && sl) {
      sl.style.width = a.offsetWidth + 'px';
      sl.style.transform = 'translateX(' + a.offsetLeft + 'px)';
    }
  };

  useEffect(() => {
    positionSlider();
    const onResize = () => positionSlider();
    window.addEventListener('resize', onResize);
    const timers = [0, 60, 200, 500, 900].map((t) => setTimeout(positionSlider, t));
    return () => {
      window.removeEventListener('resize', onResize);
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faqTab]);

  const activeFaq = faqTab === 0 ? faqTest : faqPlatform;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="AI interviews — same questions, same rubric, for every candidate" announcementCta="Browse interviews" />

      <section className="dhero"><div className="wrap">
        <p className="crumb reveal in"><Link href="/">Home</Link><span className="sep">/</span><Link href="/interviews">Interviews</Link><span className="sep">/</span><span>Background Check</span></p>
        <Link className="backlink reveal in" href="/interviews"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>Back to interviews</Link>
        <h1 className="dtitle reveal in">Background Check Interview</h1>
        <p className="dlede reveal in">The Background Check test conducts a thorough AI interview to verify a candidate&apos;s personal identification, work history, education, certifications, references, and eligibility to work.</p>
        <div className="dmedia reveal in">
          <div className="dmedia-l">
            <div className="dcam">
              <span className="dcamic"><svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" /><path d="M10 6h4a2 2 0 0 1 2 2v2" /><path d="M22 8l-6 4 6 4V8z" /><line x1="2" y1="2" x2="22" y2="22" /></svg></span>
              <p className="dcamt">Media unavailable</p>
              <p className="dcams">Permission denied. Enable camera/microphone in browser settings.</p>
              <div className="dcam-ctrls">
                <span className="dctrl"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" /><path d="M12 17v4" /></svg></span>
                <span className="dctrl"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg></span>
              </div>
            </div>
            <div className="ddevsel">
              <button type="button" className="ddev-pill"><span className="pico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0" /><path d="M12 17v4" /></svg></span>Select device<span className="pchev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></button>
              <button type="button" className="ddev-pill"><span className="pico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /></svg></span>Select device<span className="pchev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></button>
              <button type="button" className="ddev-pill"><span className="pico"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6" /><path d="M20.5 15a9 9 0 1 1-2.1-9.4L23 10" /></svg></span>Select device<span className="pchev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></button>
            </div>
          </div>
          <div className="dmedia-r">
            <h2 className="dstart-h">Start now or return when you&apos;re ready</h2>
            <ul className="dpts">
              {evalPoints.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
            <div className="dhspec">
              <div className="dhspec-i"><span className="k">Test type</span><span className="v">Intermediate</span></div>
              <div className="dhspec-i"><span className="k">Duration</span><span className="v">15 mins</span></div>
            </div>
            <button className="btn btn-primary" type="button"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,.22)" /><path d="M10 8l6 4-6 4z" fill="#fff" /></svg>Start Interview</button>
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="td-sh"><p className="eyebrow reveal">Skills measured<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>5 skills measured</h2></div>
        <div className="skmgrid reveal">
          {skills.map((s, i) => (
            <div className="skmcard" key={i}><span className="skmnum">{String(i + 1).padStart(2, '0')}</span><span className="skmname">{s}</span></div>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="td-sh"><p className="eyebrow reveal">Overview<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>What recruiters can expect</h2></div>
        <div className="prose reveal" style={{ transitionDelay: '.06s' }}><p>Expect candidates to have a strong grasp of thorough background checks, focusing on verifying criminal records, employment history, and educational credentials. Proficiency in risk assessment and the ability to communicate findings clearly are essential, ensuring a complete and accurate verification process for hiring decisions.</p></div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="whygrid">
          <div>
            <p className="eyebrow reveal">Why Testlify<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Why choose Testlify</h2>
            <p className="body reveal" style={{ transitionDelay: '.06s', marginTop: '16px', maxWidth: '520px' }}>Elevate your recruitment process with Testlify, the finest talent assessment tool. With a diverse test library boasting 3000+ tests, and features such as custom questions, typing test, live coding challenges, Google Suite questions, and psychometric tests, finding the perfect candidate is effortless. Enjoy seamless ATS integrations, white-label features, and multilingual support, all in one platform. Simplify candidate skill evaluation and make informed hiring decisions with Testlify.</p>
            <Link className="smelink reveal" href="/features" style={{ transitionDelay: '.08s' }}>View all features<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
          </div>
          <div className="featgrid reveal" style={{ transitionDelay: '.06s' }}>
            {features.map((f, i) => (
              <div className="feattile" key={i}><span className="featic">{featIcon(f)}</span><span className="featlbl">{f}</span></div>
            ))}
          </div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="td-sh ctr"><p className="eyebrow reveal">FAQ<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2></div>
        <div className="reveal" style={{ textAlign: 'center', margin: '0 0 28px' }}>
          <div className="tabset" ref={tabsetRef}>
            <span className="tabslider" />
            <button type="button" className={'tabbtn ' + (faqTab === 0 ? 'on' : '')} onClick={() => setFaqTab(0)}>About this interview</button>
            <button type="button" className={'tabbtn ' + (faqTab === 1 ? 'on' : '')} onClick={() => setFaqTab(1)}>About Testlify</button>
          </div>
        </div>
        <div className="faqwrap reveal"><FAQ items={activeFaq} /></div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
