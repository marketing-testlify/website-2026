'use client';

import { useEffect, useRef } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
a{text-decoration:none;color:inherit;}
@keyframes byHeroGrad{0%{background-position:0% 0%}50%{background-position:100% 100%}100%{background-position:0% 0%}}
@keyframes byBlob{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-26px) scale(1.12)}66%{transform:translate(-26px,22px) scale(.93)}}
@keyframes byFloaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
@keyframes byFloaty2{0%,100%{transform:translateY(0)}50%{transform:translateY(11px)}}
@property --bybang{syntax:"<angle>";initial-value:0deg;inherits:false;}
@keyframes byRun{to{--bybang:360deg;}}
.ctabtn .cta-play{width:24px!important;height:24px!important;}
.ctabtn.v-primary,.ctabtn.v-light{border:1.5px solid transparent!important;}
.by-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
[data-reveal]{opacity:0;transform:translateY(28px);}
.by-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 16px;}
.by-eyebrow .dot{color:#F23F44;}
/* hero */
.by-hero{position:relative;overflow:hidden;padding:78px 28px 68px;background:radial-gradient(1100px 520px at 82% 4%,#FCE0E1 0%,rgba(252,224,225,0) 58%),radial-gradient(900px 540px at 4% 62%,#FFEDED 0%,rgba(255,237,237,0) 52%),linear-gradient(180deg,#FFF8F7 0%,#FFFBFA 72%,#fff 100%);background-size:170% 170%;animation:byHeroGrad 30s ease-in-out infinite;}
.by-blob{position:absolute;bottom:-140px;left:-90px;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle at 60% 40%,#FDD5D6,#FBA3A5);filter:blur(34px);opacity:.16;animation:byBlob 22s ease-in-out infinite reverse;pointer-events:none;}
.by-hgrid{position:relative;display:grid;grid-template-columns:1.04fr .96fr;gap:56px;align-items:center;}
.by-badge{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #FBD0D1;padding:8px 16px;border-radius:100px;box-shadow:0 6px 18px rgba(242,63,68,.10);}
.by-badge .d{width:8px;height:8px;border-radius:50%;background:#F23F44;}
.by-badge .t{font-size:13.5px;font-weight:600;color:#A91E23;letter-spacing:.2px;}
.by-h1{font-size:52px;line-height:1.05;font-weight:800;letter-spacing:-1.4px;margin:22px 0 0;max-width:640px;}
.by-h1 em{font-style:normal;color:#F23F44;}
.by-sub{font-size:18px;line-height:1.62;color:#5A4B4E;margin:20px 0 0;max-width:560px;}
.by-hbtns{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px;}
.by-trust{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin-top:20px;font-size:14.5px;color:#8A7A7D;font-weight:500;}
.by-trust span{display:inline-flex;align-items:center;gap:7px;}
.by-trust b{color:#F23F44;font-weight:700;}
/* hero builder visual */
.by-vis{position:relative;}
.by-vcard{position:relative;background:#fff;border-radius:24px;box-shadow:0 30px 70px rgba(110,11,14,.18);padding:18px;border:1px solid #FBE4E5;z-index:2;}
.by-vbrowser{display:flex;align-items:center;gap:7px;padding:0 2px 14px;border-bottom:1px solid #F4E7E8;margin-bottom:14px;}
.by-vdot{width:10px;height:10px;border-radius:50%;}
.by-vurl{margin-left:10px;font-size:12px;color:#A9999C;font-weight:500;background:#FBF3F3;padding:4px 12px;border-radius:8px;flex:1;}
.by-vhead{display:flex;align-items:center;justify-content:space-between;margin-bottom:13px;}
.by-vtitle{font-size:14.5px;font-weight:700;color:#1A1014;letter-spacing:-.2px;}
.by-vpill{font-size:11px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#1F9D6B;background:#E7F6EE;padding:4px 10px;border-radius:100px;}
.by-vlist{display:flex;flex-direction:column;gap:9px;}
.by-vrow{display:flex;align-items:center;gap:12px;border:1.5px solid #F2E6E7;border-radius:13px;padding:11px 13px;background:#fff;transition:border-color .25s,box-shadow .25s;}
.by-vrow.on{background:#FFF6F6;border-color:#FBD0D1;}
.by-vgrip{color:#D9C4C6;display:flex;flex:none;cursor:grab;}
.by-vico{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex:none;color:#fff;}
.by-vinfo{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;}
.by-vnm{font-size:14px;font-weight:700;color:#1A1014;letter-spacing:-.2px;}
.by-vmeta{font-size:11.5px;color:#8A7A7D;font-weight:500;}
.by-vqn{font-size:11.5px;font-weight:700;color:#B29A9E;flex:none;}
.by-vadd{display:flex;align-items:center;justify-content:center;gap:9px;border:1.6px dashed #F4C7C8;border-radius:13px;padding:12px;margin-top:11px;color:#F23F44;font-size:13.5px;font-weight:700;background:#FFFAFA;}
.by-float{position:absolute;background:#fff;border-radius:16px;box-shadow:0 18px 40px rgba(110,11,14,.16);padding:12px 16px;display:flex;align-items:center;gap:12px;border:1px solid #FBE4E5;z-index:3;}
.by-float .fl{font-size:11.5px;color:#8A7A7D;font-weight:500;}
.by-float .fv{font-size:15px;font-weight:700;color:#1A1014;}
.by-f1{top:-24px;right:16px;animation:byFloaty 6s ease-in-out infinite;}
.by-f2{bottom:-22px;left:-28px;animation:byFloaty2 7s ease-in-out infinite;}
/* section shell */
.by-sec{padding:96px 28px;}
.by-sec.sand{background:#FBF3EE;}
.by-sec.dark{background:radial-gradient(900px 460px at 50% 0%,#2A1417 0%,#1A1014 60%);color:#fff;}
.by-shead{max-width:720px;margin:0 auto 52px;text-align:center;}
.by-shead .by-eyebrow{margin-bottom:14px;}
.by-h2{font-size:38px;font-weight:800;letter-spacing:-1px;margin:0;line-height:1.1;}
.by-h2p{font-size:17px;line-height:1.6;color:#6C5A5D;margin:16px 0 0;}
.dark .by-h2p{color:#D8C5C8;}
/* steps */
.by-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.by-step{background:#fff;border:1.4px solid #F0E2E3;border-radius:18px;padding:26px 24px;position:relative;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.by-step:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.by-stepn{font-size:13px;font-weight:800;color:#F23F44;letter-spacing:.02em;margin-bottom:16px;}
.by-stepico{width:46px;height:46px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.by-step h3{font-size:18px;font-weight:700;letter-spacing:-.3px;margin:0 0 8px;}
.by-step p{font-size:14.5px;line-height:1.55;color:#6C5A5D;margin:0;}
/* format grid */
.by-fmts{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.by-fmt{display:flex;align-items:flex-start;gap:15px;background:#fff;border:1.4px solid #F0E2E3;border-radius:16px;padding:20px 22px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.by-fmt:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.by-fmtico{width:42px;height:42px;border-radius:12px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;flex:none;}
.by-fmt h3{font-size:16px;font-weight:700;letter-spacing:-.2px;margin:2px 0 5px;}
.by-fmt p{font-size:13.5px;line-height:1.5;color:#7C6A6D;margin:0;}
/* feature rows */
.by-rows{display:flex;flex-direction:column;gap:40px;}
.by-row{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
.by-row.flip .by-rvis{order:-1;}
.by-reyebrow{font-size:12.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#F23F44;margin:0 0 12px;}
.by-row h3{font-size:28px;font-weight:800;letter-spacing:-.6px;margin:0 0 14px;line-height:1.14;}
.by-row p{font-size:16px;line-height:1.62;color:#5A4B4E;margin:0 0 18px;max-width:480px;}
.by-rlist{display:flex;flex-direction:column;gap:11px;margin:0;padding:0;list-style:none;}
.by-rlist li{display:flex;align-items:flex-start;gap:11px;font-size:15px;font-weight:500;color:#3C2C2F;line-height:1.45;}
.by-rlist .ck{flex:none;width:22px;height:22px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.by-rvis{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:22px;box-shadow:0 16px 34px rgba(110,11,14,.08);}
.by-rvhead{display:flex;align-items:center;gap:10px;padding-bottom:14px;border-bottom:1px solid #F4E7E8;margin-bottom:14px;}
.by-rvdot{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;flex:none;}
.by-rvt{font-size:14.5px;font-weight:700;letter-spacing:-.2px;}
.by-rvs{font-size:12px;color:#8A7A7D;font-weight:500;}
.by-mrow{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #F7EDEE;}
.by-mrow:last-child{border-bottom:0;}
.by-mrow .ml{flex:1;font-size:14px;font-weight:600;color:#2A1A1D;}
.by-mrow .mr{font-size:12.5px;font-weight:700;}
.by-bar{height:8px;border-radius:100px;background:#F4E7E8;overflow:hidden;flex:1;max-width:120px;}
.by-bar>span{display:block;height:100%;border-radius:100px;background:linear-gradient(90deg,#FF7A52,#F23F44);}
.by-brand{display:flex;flex-direction:column;gap:12px;}
.by-brandtop{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1.4px solid #F2E6E7;border-radius:13px;}
.by-logo{width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#FF7A52,#F23F44);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:17px;flex:none;}
.by-swatches{display:flex;gap:9px;}
.by-sw{width:34px;height:34px;border-radius:9px;border:2px solid #fff;box-shadow:0 2px 8px rgba(110,11,14,.12);}
/* stats band */
.by-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:960px;margin:0 auto;}
.by-stat{text-align:center;}
.by-stat b{display:block;font-size:44px;font-weight:800;letter-spacing:-1.5px;color:#FF7A52;line-height:1;}
.by-stat span{display:block;font-size:14.5px;color:#D8C5C8;font-weight:500;margin-top:10px;}
/* faq */
.by-faq{max-width:820px;margin:0 auto;}
@media(max-width:1000px){.by-steps{grid-template-columns:repeat(2,1fr);}.by-fmts{grid-template-columns:repeat(2,1fr);}.by-hgrid{grid-template-columns:1fr;gap:44px;}.by-vis{max-width:460px;}.by-row,.by-row.flip .by-rvis{grid-template-columns:1fr;order:0;}.by-row{gap:30px;}.by-stats{grid-template-columns:repeat(2,1fr);gap:34px 20px;}}
@media(max-width:640px){.by-h1{font-size:36px;}.by-hero{padding:44px 22px 40px;}.by-sec{padding:64px 22px;}.by-h2{font-size:28px;}.by-steps,.by-fmts{grid-template-columns:1fr;}.by-stats{grid-template-columns:1fr;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  { q: 'Do I need any coding or setup to build a test?', a: 'No. The builder is fully drag-and-drop. You add questions, set time limits and scoring in the interface — nothing to install and no code required.' },
  { q: 'Can I combine my own questions with tests from the library?', a: 'Yes. Start from a blank canvas or any of 3,500+ validated tests, then add your own questions and even an AI interview into a single job-ready assessment.' },
  { q: 'How does scoring work for open-ended questions?', a: 'Auto-scorable formats like MCQ, coding and spreadsheets are graded instantly. For essays, video and file uploads you score against a rubric, and results roll up into one ranked shortlist.' },
  { q: 'Are custom questions reviewed for quality?', a: 'They can be. Send any custom question for peer review and our subject-matter experts validate difficulty, fairness and scoring before it goes live — the same rigour as our validated library.' },
  { q: 'Can I brand the assessment as my own?', a: 'Yes. Add your logo, colours and welcome message on every plan. Paid plans add white-labelling and a custom domain so the whole candidate experience is yours.' },
  { q: 'What plan do I need to build my own tests?', a: 'Building custom tests is available across paid plans. Start a 7-day free trial with no credit card to try the full builder before you decide.' },
];

export default function LibraryBuildYourOwnPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const base = rootRef.current;
    const root: ParentNode = base || document;
    const animateReveal = (el: HTMLElement, delay: number) => {
      const dur = 640, startY = 28;
      let start: number | null = null;
      const tick = (t: number) => {
        if (start === null) start = t;
        const p = Math.min(1, (t - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.style.opacity = String(e);
        el.style.transform = 'translateY(' + (startY * (1 - e)).toFixed(2) + 'px)';
        if (p < 1) requestAnimationFrame(tick);
        else { el.style.opacity = '1'; el.style.transform = 'none'; }
      };
      setTimeout(() => requestAnimationFrame(tick), delay);
    };
    const run = () => {
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
        animateReveal(el, parseInt(el.getAttribute('data-delay') || '0', 10));
      });
    };
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Build a custom assessment in minutes — add your own questions, no code needed" announcementCta="Start building" />

      <section className="by-hero" ref={rootRef}><div className="by-blob"></div><div className="by-wrap"><div className="by-hgrid">
        <div>
          <div className="by-badge" data-reveal=""><span className="d"></span><span className="t">Build your own · custom tests &amp; questions</span></div>
          <h1 className="by-h1" data-reveal="" data-delay="80">Your role. Your questions.<br /><em>Your assessment.</em></h1>
          <p className="by-sub" data-reveal="" data-delay="150">Start from a blank canvas or any of 3,500+ validated tests, add your own questions in 13+ formats, and combine everything into one job-ready assessment — no code, ready in minutes.</p>
          <div className="by-hbtns" data-reveal="" data-delay="220"><CtaButton label="Try for free" href="/pricing" variant="primary" size="lg" icon="arrow" magnetic /><CtaButton label="Book a demo" href="/contact" variant="secondary" size="lg" icon="play" /></div>
          <div className="by-trust" data-reveal="" data-delay="270"><span><b>&#10003;</b> 7-day free trial</span><span><b>&#10003;</b> No credit card required</span></div>
        </div>
        <div className="by-vis" data-reveal="" data-delay="180">
          <div className="by-vcard">
            <div className="by-vbrowser"><span className="by-vdot" style={{ background: '#FF5F57' }}></span><span className="by-vdot" style={{ background: '#FEBC2E' }}></span><span className="by-vdot" style={{ background: '#28C840' }}></span><span className="by-vurl">app.testlify.com/build</span></div>
            <div className="by-vhead"><span className="by-vtitle">Senior Product Designer</span><span className="by-vpill">Draft</span></div>
            <div className="by-vlist">
              <div className="by-vrow on"><span className="by-vgrip"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="6" r="1"></circle><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="18" r="1"></circle><circle cx="15" cy="6" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="18" r="1"></circle></svg></span><span className="by-vico" style={{ background: 'linear-gradient(135deg,#7C5CFF,#5B7BFF)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8M12 17v4"></path></svg></span><div className="by-vinfo"><span className="by-vnm">Portfolio walkthrough</span><span className="by-vmeta">Video response · custom</span></div><span className="by-vqn">3 Q</span></div>
              <div className="by-vrow"><span className="by-vgrip"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="6" r="1"></circle><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="18" r="1"></circle><circle cx="15" cy="6" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="18" r="1"></circle></svg></span><span className="by-vico" style={{ background: 'linear-gradient(135deg,#1FB57A,#12A063)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M4 20l8-8"></path><path d="M14 6l4 4L8 20H4v-4z"></path></svg></span><div className="by-vinfo"><span className="by-vnm">Figma auto-layout</span><span className="by-vmeta">From library · validated</span></div><span className="by-vqn">18 Q</span></div>
              <div className="by-vrow"><span className="by-vgrip"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="6" r="1"></circle><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="18" r="1"></circle><circle cx="15" cy="6" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="18" r="1"></circle></svg></span><span className="by-vico" style={{ background: 'linear-gradient(135deg,#FF9F43,#F76A2E)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h10"></path></svg></span><div className="by-vinfo"><span className="by-vnm">Design critique essay</span><span className="by-vmeta">Long answer · custom</span></div><span className="by-vqn">1 Q</span></div>
            </div>
            <div className="by-vadd"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"></path></svg>Add question or test</div>
          </div>
          <div className="by-float by-f1"><span style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg,#F76A6E,#F23F44)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '12.5px' }}>13+</span><div><div className="fl">Question formats</div><div className="fv">MCQ · video · code</div></div></div>
          <div className="by-float by-f2"><span style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#E7F6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1F9D6B', fontWeight: 700 }}>&#10003;</span><div><div className="fl">Every custom test</div><div className="fv">SME-reviewed</div></div></div>
        </div>
      </div></div></section>

      <section className="by-sec sand"><div className="by-wrap">
        <div className="by-shead" data-reveal=""><div className="by-eyebrow">How it works<span className="dot">.</span></div><h2 className="by-h2">From blank canvas to shortlist in four steps</h2><p className="by-h2p">A drag-and-drop builder does the heavy lifting. You bring the questions that matter for the role.</p></div>
        <div className="by-steps" data-reveal="" data-delay="120">
          <div className="by-step"><div className="by-stepn">STEP 01</div><div className="by-stepico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"></path></svg></div><h3>Start from scratch or a template</h3><p>Open a blank assessment or duplicate any of 3,500+ validated tests as your starting point.</p></div>
          <div className="by-step"><div className="by-stepn">STEP 02</div><div className="by-stepico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"></path></svg></div><h3>Add your own questions</h3><p>Write questions in 13+ formats — MCQ, coding, video, essay, spreadsheet, file upload and more.</p></div>
          <div className="by-step"><div className="by-stepn">STEP 03</div><div className="by-stepico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect></svg></div><h3>Combine tests &amp; interviews</h3><p>Mix multiple tests plus an AI interview into one evaluation, then set weighting and pass marks.</p></div>
          <div className="by-step"><div className="by-stepn">STEP 04</div><div className="by-stepico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4z"></path></svg></div><h3>Publish &amp; invite candidates</h3><p>Share a link or sync to your ATS. Auto-scored results and a ranked shortlist land in your dashboard.</p></div>
        </div>
      </div></section>

      <section className="by-sec"><div className="by-wrap">
        <div className="by-shead" data-reveal=""><div className="by-eyebrow">Question formats<span className="dot">.</span></div><h2 className="by-h2">13+ ways to ask what actually matters</h2><p className="by-h2p">Go beyond multiple choice. Every format is auto-scored where it can be, and rubric-scored where it can&apos;t.</p></div>
        <div className="by-fmts" data-reveal="" data-delay="120">
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span><div><h3>Multiple choice</h3><p>Single or multi-select, shuffled options, instant auto-scoring.</p></div></div>
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path></svg></span><div><h3>Coding challenge</h3><p>In-browser IDE, 45+ languages, hidden test cases and live coding.</p></div></div>
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8M12 17v4"></path></svg></span><div><h3>Video response</h3><p>Ask candidates to record an answer on camera, review async.</p></div></div>
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h10"></path></svg></span><div><h3>Essay &amp; long answer</h3><p>Free-text with word limits and rubric-based scoring.</p></div></div>
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M3 15h18M9 3v18"></path></svg></span><div><h3>Spreadsheet</h3><p>Live Excel/Sheets-style tasks scored on the final output.</p></div></div>
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5M12 15V3"></path></svg></span><div><h3>File upload</h3><p>Portfolios, designs or documents submitted for review.</p></div></div>
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span><div><h3>Case &amp; scenario</h3><p>Situational judgment prompts with weighted response options.</p></div></div>
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span><div><h3>Fill in the blank</h3><p>Precise recall and terminology checks, auto-graded.</p></div></div>
          <div className="by-fmt"><span className="by-fmtico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"></path></svg></span><div><h3>&amp; more formats</h3><p>Audio, image-based, typing, slider and matching questions too.</p></div></div>
        </div>
      </div></section>

      <section className="by-sec sand"><div className="by-wrap">
        <div className="by-shead" data-reveal=""><div className="by-eyebrow">Why build with Testlify<span className="dot">.</span></div><h2 className="by-h2">Custom, but never guesswork</h2><p className="by-h2p">Your questions get the same rigour, fairness and scoring science as our validated library.</p></div>
        <div className="by-rows">
          <div className="by-row" data-reveal="">
            <div>
              <div className="by-reyebrow">SME review on request</div>
              <h3>Write it yourself — or have an expert pressure-test it</h3>
              <p>Draft custom questions in minutes. Need extra confidence? Send them for peer review and our subject-matter experts validate difficulty, fairness and scoring before you go live.</p>
              <ul className="by-rlist"><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>Difficulty calibrated to the role</li><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>Bias and readability checks</li><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>Model answers &amp; scoring rubrics</li></ul>
            </div>
            <div className="by-rvis">
              <div className="by-rvhead"><span className="by-rvdot" style={{ background: 'linear-gradient(135deg,#7C5CFF,#5B7BFF)' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span><div><div className="by-rvt">Review report</div><div className="by-rvs">3 custom questions checked</div></div></div>
              <div className="by-mrow"><span className="ml">Role relevance</span><span className="by-bar"><span style={{ width: '94%' }}></span></span><span className="mr" style={{ color: '#1F9D6B' }}>94%</span></div>
              <div className="by-mrow"><span className="ml">Difficulty fit</span><span className="by-bar"><span style={{ width: '88%' }}></span></span><span className="mr" style={{ color: '#1F9D6B' }}>88%</span></div>
              <div className="by-mrow"><span className="ml">Fairness &amp; bias</span><span className="by-bar"><span style={{ width: '97%' }}></span></span><span className="mr" style={{ color: '#1F9D6B' }}>Pass</span></div>
            </div>
          </div>
          <div className="by-row flip" data-reveal="">
            <div>
              <div className="by-reyebrow">Fair &amp; cheat-resistant</div>
              <h3>Every custom test comes proctored by default</h3>
              <p>Question shuffling, time limits, webcam snapshots, tab-switch detection and plagiarism checks apply to your own questions automatically — so scores stay trustworthy.</p>
              <ul className="by-rlist"><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>Randomised order per candidate</li><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>Webcam &amp; tab-switch monitoring</li><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>Plagiarism &amp; AI-answer detection</li></ul>
            </div>
            <div className="by-rvis">
              <div className="by-rvhead"><span className="by-rvdot" style={{ background: 'linear-gradient(135deg,#1FB57A,#12A063)' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span><div><div className="by-rvt">Integrity checks</div><div className="by-rvs">Live during the assessment</div></div></div>
              <div className="by-mrow"><span className="ml">Question shuffle</span><span className="mr" style={{ color: '#1F9D6B' }}>On</span></div>
              <div className="by-mrow"><span className="ml">Webcam proctoring</span><span className="mr" style={{ color: '#1F9D6B' }}>On</span></div>
              <div className="by-mrow"><span className="ml">Tab-switch detection</span><span className="mr" style={{ color: '#1F9D6B' }}>On</span></div>
              <div className="by-mrow"><span className="ml">Plagiarism scan</span><span className="mr" style={{ color: '#1F9D6B' }}>On</span></div>
            </div>
          </div>
          <div className="by-row" data-reveal="">
            <div>
              <div className="by-reyebrow">Make it yours</div>
              <h3>Brand the whole candidate experience</h3>
              <p>Add your logo, colours and a custom welcome message. On paid plans, white-label the assessment and send it from your own domain for a seamless candidate journey.</p>
              <ul className="by-rlist"><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>Logo, colours &amp; welcome copy</li><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>White-label &amp; custom domain</li><li><span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>16+ candidate languages</li></ul>
            </div>
            <div className="by-rvis">
              <div className="by-rvhead"><span className="by-rvdot" style={{ background: 'linear-gradient(135deg,#FF9F43,#F76A2E)' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="8.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="12.5" r="2.5"></circle><path d="M12 2a10 10 0 1 0 0 20c1 0 1.5-.8 1.5-1.5 0-.4-.2-.8-.5-1a1.5 1.5 0 0 1 1-2.6H16a4 4 0 0 0 4-4 8 8 0 0 0-8-8z"></path></svg></span><div><div className="by-rvt">Candidate view</div><div className="by-rvs">Your brand, front and centre</div></div></div>
              <div className="by-brand">
                <div className="by-brandtop"><span className="by-logo">A</span><div><div className="by-rvt">Acme Corp assessment</div><div className="by-rvs">assess.acme.com</div></div></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2px' }}><span className="by-rvs" style={{ fontWeight: 600 }}>Brand colours</span><span className="by-swatches"><span className="by-sw" style={{ background: '#F23F44' }}></span><span className="by-sw" style={{ background: '#1A1014' }}></span><span className="by-sw" style={{ background: '#FF9F43' }}></span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="by-sec dark"><div className="by-wrap">
        <div className="by-shead" data-reveal=""><div className="by-eyebrow" style={{ color: '#FF7A52' }}>Built on proven science<span className="dot" style={{ color: '#FF7A52' }}>.</span></div><h2 className="by-h2" style={{ color: '#fff' }}>Custom questions, credible signals</h2></div>
        <div className="by-stats" data-reveal="" data-delay="120">
          <div className="by-stat"><b>13+</b><span>Question formats</span></div>
          <div className="by-stat"><b>45+</b><span>Coding languages</span></div>
          <div className="by-stat"><b>3,500+</b><span>Tests to start from</span></div>
          <div className="by-stat"><b>16+</b><span>Candidate languages</span></div>
        </div>
      </div></section>

      <section className="by-sec sand"><div className="by-wrap">
        <div className="by-shead" data-reveal=""><div className="by-eyebrow">Questions<span className="dot">.</span></div><h2 className="by-h2">Build-your-own, answered</h2></div>
        <div className="by-faq" data-reveal="" data-delay="120"><FAQ items={faqItems} /></div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
