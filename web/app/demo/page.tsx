'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import FAQ from '@/components/FAQ';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
::selection{background:#F23F44;color:#fff;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.muted{color:#8A7A7D;}
.acc{color:#F23F44;}
.plabel{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A9999C;}
.reveal{opacity:0;transform:translateY(28px);}
@keyframes marquee{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
.mqword{font-size:24px;font-weight:700;color:#C9B9BC;letter-spacing:-.5px;white-space:nowrap;}
/* hero */
.hero{padding:70px 28px 90px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.08fr;gap:60px;align-items:center;position:relative;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:32px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.dot{width:4px;height:4px;border-radius:50%;background:#D9C7C9;}
/* mock */
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.mockbody{padding:20px;}
.ring{width:74px;height:74px;flex:none;border-radius:50%;background:conic-gradient(#F23F44 0deg 331deg,#F7E1E2 331deg 360deg);display:flex;align-items:center;justify-content:center;}
.ringin{width:58px;height:58px;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;}
.skrow{margin-bottom:13px;}
.skhead{display:flex;justify-content:space-between;font-size:12.5px;font-weight:600;margin-bottom:6px;}
.bar{height:7px;border-radius:99px;background:#F0E2E3;overflow:hidden;}
.barf{height:100%;background:linear-gradient(90deg,#F23F44,#FF7A52);border-radius:99px;}
.matchtag{position:absolute;top:-16px;left:24px;background:#1A1014;color:#fff;font-size:12.5px;font-weight:600;padding:9px 15px;border-radius:12px;box-shadow:0 16px 34px rgba(26,16,20,.30);display:flex;align-items:center;gap:8px;z-index:4;}
.matchtag i{width:7px;height:7px;border-radius:50%;background:#3DDC84;display:inline-block;box-shadow:0 0 0 4px rgba(61,220,132,.2);}
.floattag{position:absolute;bottom:-18px;right:26px;background:#fff;border:1px solid #F0E2E3;border-radius:14px;padding:12px 16px;box-shadow:0 20px 40px rgba(110,11,14,.14);display:flex;align-items:center;gap:11px;z-index:4;}
/* logos */
.logos{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:46px;}
.logos img{height:26px;filter:grayscale(1);opacity:.62;}
/* generic */
.split{display:grid;grid-template-columns:1.02fr 1fr;gap:64px;align-items:center;}
.chk{display:flex;gap:12px;align-items:flex-start;}
.chki{flex:none;width:24px;height:24px;border-radius:7px;background:#F23F44;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.dark{background:#1A1014;color:#F1E7E8;}
.dark .h2{color:#fff;}
.dark .h3{color:#fff;}
.dark .lead{color:#D3C3C6;}
.dark .body{color:#C2B1B4;}
.dark .eyebrow{color:#C9A9AB;}
.dark .eyebrow b{color:#FF7A52;}
/* dark cards */
.dcard{background:#241417;border:1px solid #3A2529;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s;}
.dcard:hover{transform:translateY(-5px);border-color:#F23F44;}
.dsicon{width:46px;height:46px;border-radius:12px;background:rgba(242,63,68,.14);color:#FF7A52;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.minibox{background:#1A1014;border:1px solid #3A2529;border-radius:12px;}
.wave{display:flex;align-items:center;gap:3px;height:34px;}
.wbar{width:3px;border-radius:2px;background:#5A3A3E;}
/* ats */
.atsgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.atscell{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:82px;display:flex;align-items:center;justify-content:center;padding:16px;transition:transform .25s,box-shadow .25s,border-color .25s;}
.atscell:hover{transform:translateY(-3px);box-shadow:0 14px 28px rgba(110,11,14,.10);border-color:#FBC9CB;}
.atscell img{max-height:30px;max-width:120px;filter:grayscale(1);opacity:.66;}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
.intglink{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:600;font-size:16px;}
.ctabtn .cta-play{width:24px !important;height:24px !important;}
.ctabtn.v-primary,.ctabtn.v-light{border:1.5px solid transparent !important;}
/* security */
.badgerow{display:flex;flex-wrap:wrap;gap:12px;}
.badge{display:inline-flex;align-items:center;gap:9px;background:#241417;border:1px solid #3A2529;border-radius:12px;padding:12px 18px;font-size:14px;font-weight:600;color:#F1E7E8;}
.badge svg{color:#FF7A52;}
.statcard{background:#241417;border:1px solid #3A2529;border-radius:16px;padding:26px;}
.statn{font-size:52px;font-weight:800;letter-spacing:-2px;line-height:1;background:linear-gradient(180deg,#fff,#FFC9BD);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
/* awards */
.award{display:inline-flex;align-items:center;gap:10px;background:#fff;border:1px solid #F0E2E3;border-radius:12px;padding:13px 18px;font-size:13.5px;font-weight:600;color:#1A1014;box-shadow:0 8px 18px rgba(110,11,14,.05);}
.award b{color:#F23F44;font-weight:700;font-size:13px;}
/* cta */
.ctablock{background:radial-gradient(900px 420px at 80% 0%,#FFE3DD 0%,rgba(255,227,221,0) 60%),linear-gradient(135deg,#F23F44,#C0242B);border-radius:30px;padding:76px 56px;text-align:center;position:relative;overflow:hidden;color:#fff;}
@media(max-width:960px){
  .herogrid,.split{grid-template-columns:1fr !important;gap:44px;}
  .h1{font-size:44px;letter-spacing:-1.4px;}
  .h2{font-size:33px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .hero{padding:44px 22px 64px;}
  .atsgrid,.intg-grid{grid-template-columns:repeat(3,1fr);}
  .cards3{grid-template-columns:1fr !important;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
.vidwrap{border-radius:20px;overflow:hidden;border:1px solid #F0E2E3;box-shadow:0 40px 90px rgba(110,11,14,.16);background:#000;position:relative;}
.vidplay{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:86px;height:86px;border-radius:50%;background:#F23F44;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 40px rgba(242,63,68,.45);transition:transform .28s cubic-bezier(.2,.7,.3,1),box-shadow .28s ease,opacity .25s ease;z-index:2;}
.vidwrap:hover .vidplay{transform:translate(-50%,-50%) scale(1.14);box-shadow:0 24px 56px rgba(242,63,68,.55);}
.vidplay svg{margin-left:5px;}
.vidwrap.playing .vidplay{opacity:0;pointer-events:none;}
.vidwrap video{width:100%;display:block;}
.imgcard{border-radius:20px;overflow:hidden;border:1px solid #F0E2E3;box-shadow:0 30px 60px rgba(110,11,14,.12);background:#fff;}
.imgcard img{width:100%;height:auto;display:block;}
.featgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.featcard{position:relative;display:flex;flex-direction:column;gap:12px;background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:26px 22px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.featcard:hover{transform:translateY(-5px);border-color:#FBD0D1;box-shadow:0 18px 38px rgba(110,11,14,.12);}
@property --bang{syntax:"<angle>";initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.featcard::before{content:"";position:absolute;inset:0;border-radius:18px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;pointer-events:none;}
.featcard:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.featcard .fa{flex:none;width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;transition:background .3s ease,color .3s ease,transform .3s ease;}
.featcard:hover .fa{background:#F23F44;color:#fff;transform:translateY(-2px);}
.featcard h3{font-size:16px;font-weight:700;margin:0;color:#1A1014;letter-spacing:-.3px;}
.featcard p{font-size:13px;line-height:1.5;color:#6C5A5D;margin:0;}
.featcard .fgo{margin-top:auto;padding-top:4px;color:#F23F44;font-weight:600;font-size:13px;display:inline-flex;align-items:center;gap:6px;opacity:0;transform:translateX(-4px);transition:opacity .3s ease,transform .3s ease;}
.featcard:hover .fgo{opacity:1;transform:none;}
.tsm-sec{background:#FBF3EE !important;}
@media(max-width:860px){.featgrid{grid-template-columns:repeat(2,1fr);}}
.joinband{background:#1A1014;color:#fff;text-align:center;}
.joinband .h2{color:#fff;}
`;

const arrowGo = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const chk = (text: React.ReactNode) => (
  <div className="chk"><span className="chki"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><p className="body" style={{ margin: 0 }}>{text}</p></div>
);

const faqItems = [
  { q: 'What is Testlify?', a: 'Testlify is an advanced talent assessment tool designed to help organizations identify and hire top talent efficiently. It utilizes AI-powered algorithms and comprehensive data analysis to make informed hiring decisions.' },
  { q: 'Is Testlify an all-in-one talent assessment tool?', a: 'Yes, Testlify is a comprehensive solution that covers various aspects of talent assessment, from skills evaluation to personality profiling. It streamlines the entire hiring process, providing valuable insights to make informed decisions.' },
  { q: 'Is Testlify suitable for SMBs and enterprise organizations?', a: "Absolutely! Testlify caters to businesses of all sizes. Whether you're a growing startup or a well-established enterprise, our tool is designed to fit seamlessly into your talent acquisition process." },
  { q: 'How does Testlify compare to other talent assessment tools?', a: 'Testlify stands out with its cutting-edge AI-driven assessments, intuitive interface, and customizable solutions. Our platform offers unique insights and efficiency, setting it apart from traditional assessment tools.' },
  { q: 'Can I try Testlify for free?', a: "Yes, we offer a free 7 days trial where you can experience our platform's capabilities firsthand. Sign up now to see how our tool can revolutionize your hiring process." },
  { q: 'Does Testlify support remote hiring?', a: 'Absolutely! Testlify is optimized for remote hiring, allowing you to assess candidates from anywhere in the world. Collaborate with your team and find the perfect fit regardless of geographical constraints.' },
  { q: 'Is Testlify user-friendly for both recruiters and candidates?', a: 'Our platform is designed to be user-friendly for both recruiters and candidates. Intuitive interfaces and clear instructions ensure a smooth experience for all users.' },
];

export default function DemoPage() {
  const vidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = vidRef.current;
    if (!w) return;
    const v = w.querySelector('video');
    const b = w.querySelector('.vidplay');
    if (!v || !b) return;
    const onPlayBtn = () => { v.play(); };
    const onPlay = () => w.classList.add('playing');
    const onPause = () => w.classList.remove('playing');
    b.addEventListener('click', onPlayBtn);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      b.removeEventListener('click', onPlayBtn);
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Watch the demo — see skills-based hiring end to end in 3 minutes." announcementCta="Watch now" homeHref="core-home.dc.html" />

      <section className="hero"><div className="wrap" style={{ textAlign: 'center', maxWidth: '900px' }}>
        <div className="reveal"><span className="pill"><span className="pilltag">LIVE DEMO</span> See it in action</span></div>
        <h1 className="h1 reveal" style={{ margin: '22px auto 0', maxWidth: '820px', transitionDelay: '.06s' }}>Experience Testlify with a demo</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '660px', transitionDelay: '.1s' }}>See how Testlify helps 1,500+ teams hire with confidence using skills-based assessments, structured interviews, and advanced proctoring, all in one platform.</p>
        <div className="heroctas reveal" style={{ justifyContent: 'center', transitionDelay: '.14s' }}><CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic /><CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" /></div>
      </div>
      <div className="wrap" style={{ maxWidth: '960px', marginTop: '52px' }}>
        <div className="reveal vidwrap" ref={vidRef}><video controls preload="metadata" poster="https://testlify.com/wp-content/uploads/2023/06/May-2023-App-Sumo-Final-1280-%C3%97-720-px-1.png" src="https://testlify.com/wp-content/uploads/2026/02/Product-overview-Testlify-Demo-January-2026-Updated-25mb.mp4">Your browser does not support the video tag.</video><button className="vidplay" aria-label="Play demo video"><svg width="34" height="34" viewBox="0 0 24 24" fill="#fff"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg></button></div>
        <p className="reveal" style={{ textAlign: 'center', fontSize: '12.5px', color: '#8A7A7D', maxWidth: '660px', margin: '16px auto 0' }}>By booking a demo with us, you agree to receive SMS and email updates from Testlify about demos and hiring solutions. You can opt out anytime.</p>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Everything included<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>All the best features you need</h2>
        </div>
        <div className="featgrid">
          <Link className="featcard reveal" href="/coding-tests"><span className="fa"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></span><h3>Live coding tests</h3><p>Real-time IDE across 45+ programming languages.</p><span className="fgo">Explore{arrowGo}</span></Link>
          <Link className="featcard reveal" href="/white-label"><span className="fa"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg></span><h3>White label</h3><p>Your brand on every candidate touchpoint.</p><span className="fgo">Explore{arrowGo}</span></Link>
          <Link className="featcard reveal" href="/integrations"><span className="fa"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7L12 19"></path></svg></span><h3>Integrations</h3><p>100+ native two-way ATS syncs.</p><span className="fgo">Explore{arrowGo}</span></Link>
          <Link className="featcard reveal" href="/features"><span className="fa"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></span><h3>Multiple question types</h3><p>13+ formats — MCQ, coding, video and more.</p><span className="fgo">Explore{arrowGo}</span></Link>
          <Link className="featcard reveal" href="/multilingual-abilities"><span className="fa"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span><h3>Multilingual support</h3><p>Assess candidates in 16+ languages.</p><span className="fgo">Explore{arrowGo}</span></Link>
          <Link className="featcard reveal" href="/features"><span className="fa"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span><h3>Anti cheating features</h3><p>20+ proctoring and integrity measures.</p><span className="fgo">Explore{arrowGo}</span></Link>
          <Link className="featcard reveal" href="/features"><span className="fa"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg></span><h3>Video interview questions</h3><p>Async and live interviews, auto-scored.</p><span className="fgo">Explore{arrowGo}</span></Link>
          <Link className="featcard reveal" href="/situational-judgment"><span className="fa"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span><h3>Psychometric tests</h3><p>Personality, culture and judgement insight.</p><span className="fgo">Explore{arrowGo}</span></Link>
        </div>
      </div></section>

      <section className="sec"><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">Know candidates better<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Know candidates better</h2>
          <p className="lead" style={{ marginBottom: '22px' }}>Reduce time evaluating job applicants with our comprehensive library of technical tests, that cover coding, software, languages, job skills, and cognitive ability to ensure you choose the right people for your company, every time.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '26px' }}>{chk('Assess technical, functional, and communication skills in a single go.')}{chk('Understand the intricacies of personality traits with our psychometric tests.')}{chk('Use typing tests and Google Sheets/Doc/Slides questions, ensuring a hands-on evaluation of candidates’ capabilities.')}</div>
          <Link href="/test-library" className="intglink">Explore test library<span>→</span></Link>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div className="imgcard">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/09/Know-candidates-better-1024x736.png" alt="Know candidates better" /></div></div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap"><div className="split">
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div className="imgcard">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/Hire-without-compromise-4.jpg" alt="Hire without compromise" /></div></div>
        <div className="reveal" style={{ order: 2 }}>
          <p className="eyebrow">Hire without compromise<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Hire without compromise</h2>
          <p className="lead" style={{ marginBottom: '22px' }}>Hiring the right talent can make or break your business. Testlify helps corporate businesses scale their workforce without compromising on the quality of the people they hire.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '26px' }}>{chk('Automate assessments for multiple roles.')}{chk('Analyze candidate results with your team.')}{chk('Shortlist the best-fit candidates fast.')}</div>
          <Link href="/features" className="intglink">Features<span>→</span></Link>
        </div>
      </div></div></section>

      <section className="sec"><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">Grow a diverse workforce<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Grow a diverse workforce</h2>
          <p className="lead" style={{ marginBottom: '22px' }}>Applying your diversity and inclusion policies to your hiring process isn’t easy. Testlify gives you the ability to integrate fair hiring practices into your screening process without the need for complex solutions.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '26px' }}>{chk('Hide sensitive information that could influence decisions.')}{chk('Increase the depth of diversity in your workplace.')}{chk('Set the standard for fair and unbiased hiring.')}</div>
          <Link href="/diversity-and-inclusions" className="intglink">Learn more<span>→</span></Link>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div className="imgcard">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/09/Grow-a-diverse-workforce.jpg" alt="Grow a diverse workforce" /></div></div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap"><div className="split">
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div className="imgcard">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/Make-your-job-easier-by-integrating-Testlify-with-your-ATS-2.jpg" alt="Make your job easier by integrating Testlify with your ATS" /></div></div>
        <div className="reveal" style={{ order: 2 }}>
          <p className="eyebrow">ATS integration<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Make your job easier by integrating Testlify with your ATS</h2>
          <p className="lead" style={{ marginBottom: '22px' }}>No more manual data entry or juggling between multiple platforms, import candidates’ profiles and assessment results directly into your existing ATS system.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '26px' }}>{chk('Seamless data sync and customizable workflows.')}{chk('Candidate ranking and comparison.')}{chk('Make collaboration and communication easier.')}</div>
          <Link href="/integrations" className="intglink">ATS integrations<span>→</span></Link>
        </div>
      </div></div></section>

      <section className="sec"><div className="wrap"><div className="split">
        <div className="reveal">
          <p className="eyebrow">Candidate experience<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Deliver memorable hiring experiences</h2>
          <p className="lead" style={{ marginBottom: '16px' }}>First impressions last, but most companies fail to make a positive impression on candidates and establish a strong reputation as a favorable employer.</p>
          <p className="body" style={{ marginBottom: '26px' }}>Testlify delivers an enjoyable and highly engaging assessment experience for candidates that ensures a high completion rate to compare, rank and select the best applicants.</p>
          <Link href="/white-label" className="intglink">Explore white label features<span>→</span></Link>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s' }}><div className="imgcard">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/09/Deliver-memorable-hiring-experiences.png" alt="Deliver memorable hiring experiences" /></div></div>
      </div></div></section>

      <section className="sec joinband"><div className="wrap" style={{ maxWidth: '760px' }}>
        <h2 className="h2 reveal">Join leading companies who trust Testlify for skill assessments</h2>
        <p className="lead reveal" style={{ color: '#D3C3C6', margin: '18px auto 30px', transitionDelay: '.06s' }}>Great talent is the key to your company’s lasting success. Join industry leaders who have already experienced the power of Testlify’s talent assessment tool. Embrace the future of recruitment and unleash your organization’s full potential.</p>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', transitionDelay: '.1s' }}><CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic /></div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }} id="platform"><div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 44px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Integrations<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.06s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
          <p className="lead reveal" style={{ marginTop: '14px', transitionDelay: '.12s' }}>Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p>
        </div>
        <div className="reveal intg-grid" style={{ transitionDelay: '.16s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr" alt="Lever" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr" alt="SuccessFactors" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr" alt="Recruitee" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr" alt="JazzHR" /></div>
        </div>
        <div className="reveal" style={{ textAlign: 'center', marginTop: '26px', transitionDelay: '.2s' }}><Link href="/integrations" className="intglink">View all ATS integrations<span>→</span></Link></div>
      </div></section>

      <SecuritySection eyebrow="Security & compliance" heading="Built to keep your organization secure" sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections." />

      <Testimonials eyebrow="Customer satisfaction" heading="What our customers are saying about Testlify" />

      <Recognition />

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>FAQ<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions (FAQs)</h2>
          <p className="lead reveal" style={{ marginTop: '14px', transitionDelay: '.08s' }}>Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.</p>
        </div>
        <div className="reveal">
          <FAQ items={faqItems} />
        </div>
      </div></section>

      <CtaBand />

      <SiteFooter />
    </>
  );
}
