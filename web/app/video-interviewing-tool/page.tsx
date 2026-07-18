import React from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
@keyframes viHeroGrad{0%{background-position:0% 0%}50%{background-position:100% 100%}100%{background-position:0% 0%}}
@keyframes viBlob{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(40px,-26px) scale(1.12)}66%{transform:translate(-26px,22px) scale(.93)}}
@keyframes viFloaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
@keyframes viFloaty2{0%,100%{transform:translateY(0)}50%{transform:translateY(11px)}}
@keyframes viPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.14);opacity:.7}}
.ctabtn .cta-play{width:24px!important;height:24px!important;}
.ctabtn.v-primary,.ctabtn.v-light{border:1.5px solid transparent!important;}
.vi-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
[data-reveal]{opacity:0;transform:translateY(28px);}
[data-reveal].in{opacity:1;transform:none;}
.vi-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.vi-eyebrow .dot{color:#F23F44;}
/* hero */
.vi-hero{position:relative;overflow:hidden;padding:78px 28px 68px;background:radial-gradient(1100px 520px at 82% 4%,#FCE0E1 0%,rgba(252,224,225,0) 58%),radial-gradient(900px 540px at 4% 62%,#FFEDED 0%,rgba(255,237,237,0) 52%),linear-gradient(180deg,#FFF8F7 0%,#FFFBFA 72%,#fff 100%);background-size:170% 170%;animation:viHeroGrad 30s ease-in-out infinite;}
.vi-blob{position:absolute;bottom:-140px;left:-90px;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle at 60% 40%,#FDD5D6,#FBA3A5);filter:blur(34px);opacity:.16;animation:viBlob 22s ease-in-out infinite reverse;pointer-events:none;}
.vi-hgrid{position:relative;display:grid;grid-template-columns:1.04fr .96fr;gap:56px;align-items:center;}
.vi-badge{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #FBD0D1;padding:8px 16px;border-radius:100px;box-shadow:0 6px 18px rgba(242,63,68,.10);}
.vi-badge .d{width:8px;height:8px;border-radius:50%;background:#F23F44;}
.vi-badge .t{font-size:13.5px;font-weight:600;color:#A91E23;letter-spacing:.2px;}
.vi-h1{font-size:52px;line-height:1.05;font-weight:800;letter-spacing:-1.4px;margin:22px 0 0;max-width:640px;}
.vi-h1 em{font-style:normal;color:#F23F44;}
.vi-sub{font-size:18px;line-height:1.62;color:#5A4B4E;margin:20px 0 0;max-width:560px;}
.vi-hbtns{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px;}
.vi-trust{display:flex;align-items:center;gap:24px;flex-wrap:wrap;margin-top:20px;font-size:14.5px;color:#8A7A7D;font-weight:500;}
.vi-trust span{display:inline-flex;align-items:center;gap:7px;}
.vi-trust b{color:#F23F44;font-weight:700;}
/* hero player visual */
.vi-vis{position:relative;}
.vi-vcard{position:relative;background:#fff;border-radius:24px;box-shadow:0 30px 70px rgba(110,11,14,.18);padding:18px;border:1px solid #FBE4E5;z-index:2;}
.vi-vbrowser{display:flex;align-items:center;gap:7px;padding:0 2px 14px;border-bottom:1px solid #F4E7E8;margin-bottom:14px;}
.vi-vdot{width:10px;height:10px;border-radius:50%;}
.vi-vurl{margin-left:10px;font-size:12px;color:#A9999C;font-weight:500;background:#FBF3F3;padding:4px 12px;border-radius:8px;flex:1;}
.vi-player{position:relative;border-radius:14px;overflow:hidden;background:linear-gradient(155deg,#241318,#3A1E24);aspect-ratio:16/10;display:flex;align-items:flex-end;padding:14px;}
.vi-recdot{position:absolute;top:13px;left:13px;display:inline-flex;align-items:center;gap:7px;background:rgba(26,16,20,.55);backdrop-filter:blur(4px);color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:5px 11px;border-radius:100px;}
.vi-recdot .rd{width:7px;height:7px;border-radius:50%;background:#FF5F57;animation:viPulse 1.6s ease-in-out infinite;}
.vi-qbadge{position:absolute;top:13px;right:13px;background:rgba(255,255,255,.16);backdrop-filter:blur(4px);color:#fff;font-size:11px;font-weight:600;padding:5px 11px;border-radius:100px;}
.vi-avatar{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;}
.vi-avatar>span{width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#F76A6E,#F23F44);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:34px;box-shadow:0 12px 30px rgba(0,0,0,.35);}
.vi-playbtn{position:relative;z-index:1;width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;color:#F23F44;box-shadow:0 8px 20px rgba(0,0,0,.3);}
.vi-scrub{position:relative;z-index:1;flex:1;height:5px;border-radius:100px;background:rgba(255,255,255,.28);margin:0 12px;overflow:hidden;}
.vi-scrub>span{display:block;height:100%;width:42%;background:#fff;border-radius:100px;}
.vi-time{position:relative;z-index:1;color:#fff;font-size:12px;font-weight:600;}
.vi-vq{font-size:13px;font-weight:600;color:#3C2C2F;margin:14px 2px 12px;line-height:1.4;}
.vi-vq span{color:#A9999C;font-weight:700;font-size:11px;display:block;margin-bottom:4px;letter-spacing:.04em;text-transform:uppercase;}
.vi-scores{display:flex;gap:9px;}
.vi-schip{flex:1;border:1.4px solid #F2E6E7;border-radius:11px;padding:9px 11px;text-align:center;}
.vi-schip b{display:block;font-size:17px;font-weight:800;color:#F23F44;letter-spacing:-.5px;}
.vi-schip span{display:block;font-size:10.5px;color:#8A7A7D;font-weight:600;margin-top:2px;}
.vi-float{position:absolute;background:#fff;border-radius:16px;box-shadow:0 18px 40px rgba(110,11,14,.16);padding:12px 16px;display:flex;align-items:center;gap:12px;border:1px solid #FBE4E5;z-index:3;}
.vi-float .fl{font-size:11.5px;color:#8A7A7D;font-weight:500;}
.vi-float .fv{font-size:15px;font-weight:700;color:#1A1014;}
.vi-f1{top:-24px;right:16px;animation:viFloaty 6s ease-in-out infinite;}
.vi-f2{bottom:-22px;left:-28px;animation:viFloaty2 7s ease-in-out infinite;}
/* section shell */
.vi-sec{padding:96px 28px;}
.vi-sec.sand{background:#FBF3EE;}
.vi-sec.dark{background:radial-gradient(900px 460px at 50% 0%,#2A1417 0%,#1A1014 60%);color:#fff;}
.vi-shead{max-width:720px;margin:0 auto 52px;text-align:center;}
.vi-shead .vi-eyebrow{margin-bottom:14px;}
.vi-h2{font-size:38px;font-weight:800;letter-spacing:-1px;margin:0;line-height:1.1;}
.vi-h2p{font-size:17px;line-height:1.6;color:#6C5A5D;margin:16px 0 0;}
.dark .vi-h2p{color:#D8C5C8;}
/* steps */
.vi-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.vi-step{background:#fff;border:1.4px solid #F0E2E3;border-radius:18px;padding:26px 24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.vi-step:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.vi-stepn{font-size:13px;font-weight:800;color:#F23F44;letter-spacing:.02em;margin-bottom:16px;}
.vi-stepico{width:46px;height:46px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.vi-step h3{font-size:18px;font-weight:700;letter-spacing:-.3px;margin:0 0 8px;}
.vi-step p{font-size:14.5px;line-height:1.55;color:#6C5A5D;margin:0;}
/* feature grid */
.vi-fmts{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.vi-fmt{background:#fff;border:1.4px solid #F0E2E3;border-radius:16px;padding:24px 24px 22px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.vi-fmt:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.vi-fmtico{width:46px;height:46px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.vi-fmt h3{font-size:17px;font-weight:700;letter-spacing:-.2px;margin:0 0 8px;}
.vi-fmt p{font-size:14px;line-height:1.55;color:#7C6A6D;margin:0;}
/* feature rows */
.vi-rows{display:flex;flex-direction:column;gap:40px;}
.vi-row{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
.vi-row.flip .vi-rvis{order:-1;}
.vi-reyebrow{font-size:12.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#F23F44;margin:0 0 12px;}
.vi-row h3{font-size:28px;font-weight:800;letter-spacing:-.6px;margin:0 0 14px;line-height:1.14;}
.vi-row p{font-size:16px;line-height:1.62;color:#5A4B4E;margin:0 0 18px;max-width:480px;}
.vi-rlist{display:flex;flex-direction:column;gap:11px;margin:0;padding:0;list-style:none;}
.vi-rlist li{display:flex;align-items:flex-start;gap:11px;font-size:15px;font-weight:500;color:#3C2C2F;line-height:1.45;}
.vi-rlist .ck{flex:none;width:22px;height:22px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.vi-rvis{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:22px;box-shadow:0 16px 34px rgba(110,11,14,.08);}
.vi-rvhead{display:flex;align-items:center;gap:10px;padding-bottom:14px;border-bottom:1px solid #F4E7E8;margin-bottom:14px;}
.vi-rvdot{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;flex:none;}
.vi-rvt{font-size:14.5px;font-weight:700;letter-spacing:-.2px;}
.vi-rvs{font-size:12px;color:#8A7A7D;font-weight:500;}
.vi-mrow{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #F7EDEE;}
.vi-mrow:last-child{border-bottom:0;}
.vi-mrow .ml{flex:1;font-size:14px;font-weight:600;color:#2A1A1D;}
.vi-mrow .mr{font-size:12.5px;font-weight:700;}
.vi-bar{height:8px;border-radius:100px;background:#F4E7E8;overflow:hidden;flex:1;max-width:120px;}
.vi-bar>span{display:block;height:100%;border-radius:100px;background:linear-gradient(90deg,#FF7A52,#F23F44);}
.vi-mode{display:flex;flex-direction:column;gap:11px;}
.vi-moderow{display:flex;align-items:center;gap:12px;padding:13px 15px;border:1.4px solid #F2E6E7;border-radius:13px;}
.vi-moderow.on{border-color:#FBD0D1;background:#FFF6F6;}
.vi-modeic{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;flex:none;}
.vi-modeinfo{flex:1;min-width:0;}
.vi-modeinfo .mt{font-size:14px;font-weight:700;color:#1A1014;}
.vi-modeinfo .md{font-size:11.5px;color:#8A7A7D;font-weight:500;}
.vi-modetag{font-size:10.5px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#1F9D6B;background:#E7F6EE;padding:4px 9px;border-radius:100px;flex:none;}
/* stats band */
.vi-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:960px;margin:0 auto;}
.vi-stat{text-align:center;}
.vi-stat b{display:block;font-size:44px;font-weight:800;letter-spacing:-1.5px;color:#FF7A52;line-height:1;}
.vi-stat span{display:block;font-size:14.5px;color:#D8C5C8;font-weight:500;margin-top:10px;}
/* faq */
.vi-faq{max-width:820px;margin:0 auto;}
.tsm-sec{background:#FBF3EE !important;}
@media(max-width:1000px){.vi-steps{grid-template-columns:repeat(2,1fr);}.vi-fmts{grid-template-columns:repeat(2,1fr);}.vi-hgrid{grid-template-columns:1fr;gap:44px;}.vi-vis{max-width:460px;}.vi-row,.vi-row.flip .vi-rvis{grid-template-columns:1fr;order:0;}.vi-row{gap:30px;}.vi-stats{grid-template-columns:repeat(2,1fr);gap:34px 20px;}}
@media(max-width:640px){.vi-h1{font-size:36px;}.vi-hero{padding:44px 22px 40px;}.vi-sec{padding:64px 22px;}.vi-h2{font-size:28px;}.vi-steps,.vi-fmts{grid-template-columns:1fr;}.vi-stats{grid-template-columns:1fr;}}

.vsplit{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.vsplit.flip .vsimg{order:-1;}
.vsimg{border-radius:20px;overflow:hidden;border:1px solid #F0E2E3;box-shadow:0 30px 60px rgba(110,11,14,.12);background:#fff;position:relative;}
.vsimg img{width:100%;height:auto;display:block;}
.vplay{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:72px;height:72px;border-radius:50%;background:#F23F44;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 40px rgba(242,63,68,.45);transition:transform .28s cubic-bezier(.2,.7,.3,1);}
.vsimg:hover .vplay{transform:translate(-50%,-50%) scale(1.12);}
.vchk{display:flex;flex-direction:column;gap:12px;margin:22px 0 0;padding:0;list-style:none;}
.vchk li{display:flex;gap:11px;align-items:flex-start;font-size:15px;color:#3C2C2F;font-weight:500;line-height:1.5;}
.vchk .ck{flex:none;width:24px;height:24px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-top:1px;}
.dark .vchk li{color:#E8DADC;}
.dark .vchk .ck{background:rgba(242,63,68,.18);color:#FF7A52;}
.vcmp{max-width:900px;margin:0 auto;border:1px solid #F0E2E3;border-radius:18px;overflow:hidden;box-shadow:0 18px 40px rgba(110,11,14,.09);background:#fff;}
.vcmp table{width:100%;border-collapse:collapse;}
.vcmp th,.vcmp td{padding:13px 20px;text-align:left;font-size:14.5px;border-bottom:1px solid #F4ECEC;color:#3C2C2F;}
.vcmp th{background:#1A1014;color:#fff;font-weight:700;}
.vcmp th:not(:first-child),.vcmp td:not(:first-child){text-align:center;width:160px;}
.vcmp td.us{color:#1F9D6B;font-weight:700;}
.vcmp .no{color:#C9B9BC;}
.vcmp tr:last-child td{border-bottom:0;}
.vintg{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;max-width:1000px;margin:0 auto;}
.vintg .t{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s,box-shadow .28s,border-color .28s;}
.vintg .t:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.vintg .t img{max-width:100%;max-height:40px;object-fit:contain;}
.vintglink{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:600;font-size:16px;margin-top:26px;}
@media(max-width:1000px){.vsplit{grid-template-columns:1fr;gap:34px;}.vsplit.flip .vsimg{order:0;}.vintg{grid-template-columns:repeat(3,1fr);}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqItems = [
  { q: 'What types of questions can I ask in a video interview on Testlify?', a: 'You can ask questions related to personal description, work experience, aspirations, strengths and weaknesses, and challenging work scenarios.' },
  { q: 'Can I customize the video interviews to fit specific job roles?', a: 'Yes, you can customize the questions to fit the job roles to assess the candidate\'s skills and competencies.' },
  { q: 'How long can the candidate take to answer a video interview on Testlify?', a: 'The time limit is customizable, and you can set a limit on how long the candidate has to respond.' },
  { q: 'How can I ensure the video interview is a fair evaluation of the candidate\'s abilities?', a: 'You can create standardized questions to ensure all candidates receive the same evaluation and eliminate bias.' },
  { q: 'Can I integrate Testlify\'s video interview questions with my existing hiring process?', a: 'Yes, Testlify\'s video interviews can seamlessly integrate with your existing ATS to streamline the hiring process.' },
];

const cmpRows = [
  'One-way video interviews',
  'Two-way video interviews',
  'AI-powered question randomization',
  'Live interview scheduling',
  'Custom question bank (MCQ, Video, etc.)',
  'Asynchronous video responses',
  'Time-limited answers',
  'Automatic candidate recording',
  'Real-time candidate monitoring',
  'Plagiarism & cheating detection',
  'Multi-language support',
  'Mobile-friendly interview experience',
  'Candidate ranking & reports',
  'Shareable interview links',
  'Team collaboration',
  'Custom branding',
  'Autograded or weighted scores',
  'ATS integration ready',
  'Global candidate access',
];

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F9D6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg>
);

const Ck = () => (
  <span className="ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6"></path></svg></span>
);

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Effortless hiring — automated video interviews, powerful analytics, seamless ATS sync."
        announcementCta="See how it works"
        homeHref="/"
      />

      <section className="vi-hero"><div className="vi-blob"></div><div className="vi-wrap"><div className="vi-hgrid">
        <div>
          <div className="vi-badge reveal"><span className="d"></span><span className="t">Video interviewing · one-way &amp; live two-way</span></div>
          <h1 className="vi-h1 reveal">See beyond the resume.<br /><em>Watch them answer.</em></h1>
          <p className="vi-sub reveal">Send one-way video interviews candidates record on their own schedule, or host live two-way calls in the platform. Set your questions, auto-score every response and reduce scheduling to zero.</p>
          <div className="vi-hbtns reveal"><CtaButton label="Try for free" href="/pricing" variant="primary" size="lg" icon="arrow" magnetic /><CtaButton label="Book a demo" href="/contact" variant="secondary" size="lg" icon="play" /></div>
          <div className="vi-trust reveal"><span><b>&#10003;</b> 7-day free trial</span><span><b>&#10003;</b> No credit card required</span></div>
        </div>
        <div className="vi-vis reveal">
          <div className="vi-vcard">
            <div className="vi-vbrowser"><span className="vi-vdot" style={{ background: '#FF5F57' }}></span><span className="vi-vdot" style={{ background: '#FEBC2E' }}></span><span className="vi-vdot" style={{ background: '#28C840' }}></span><span className="vi-vurl">app.testlify.com/interviews/review</span></div>
            <div className="vi-player">
              <span className="vi-recdot"><span className="rd"></span>REC 00:47</span>
              <span className="vi-qbadge">Question 2 of 5</span>
              <span className="vi-avatar"><span>SD</span></span>
              <span className="vi-playbtn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"></path></svg></span>
              <span className="vi-scrub"><span></span></span>
              <span className="vi-time">0:47 / 1:30</span>
            </div>
            <div className="vi-vq"><span>Prompt</span>Tell us about a time you turned around an unhappy customer.</div>
            <div className="vi-scores">
              <div className="vi-schip"><b>8.6</b><span>Relevance</span></div>
              <div className="vi-schip"><b>9.1</b><span>Communication</span></div>
              <div className="vi-schip"><b>8.4</b><span>Confidence</span></div>
            </div>
          </div>
          <div className="vi-float vi-f1"><span style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg,#F76A6E,#F23F44)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '11.5px' }}>AI</span><div><div className="fl">Auto-scored</div><div className="fv">In seconds</div></div></div>
          <div className="vi-float vi-f2"><span style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#E7F6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1F9D6B', fontWeight: 700 }}>&#10003;</span><div><div className="fl">Zero scheduling</div><div className="fv">Answered on their time</div></div></div>
        </div>
      </div></div></section>

      <section className="vi-sec sand"><div className="vi-wrap">
        <div className="vi-shead reveal"><div className="vi-eyebrow">See how video AI works<span className="dot">.</span></div><h2 className="vi-h2">See how video AI works</h2><p className="vi-h2p">Conduct async video interviews to evaluate communication skills, confidence, and presence. Watch responses at your convenience and reduce scheduling hassle.</p></div>
        <div style={{ maxWidth: '860px', margin: '0 auto' }} className="reveal"><a href="https://youtu.be/nFsnsuHiq04" target="_blank" rel="noopener" className="vsimg" style={{ display: 'block' }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2026/03/Video-AI.png" alt="Video AI" /><span className="vplay"><svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg></span></a></div>
      </div></section>

      <section className="vi-sec"><div className="vi-wrap"><div className="vsplit">
        <div className="vsimg">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/Choose-or-create-interview-questions-1-1024x878.jpg" alt="Choose or create interview questions" /></div>
        <div className="reveal"><div className="vi-eyebrow">Question sets<span className="dot">.</span></div><h2 className="vi-h2" style={{ fontSize: '32px' }}>Choose or create interview questions</h2><p className="vi-h2p">Tailor your interviews effortlessly. Select from Testlify's curated question sets or create your own dialogue to align perfectly with role-specific requirements.</p><ul className="vchk"><li><Ck />Past experiences and actions</li><li><Ck />Job-specific questions</li><li><Ck />Problem-solving scenarios</li><li><Ck />11+ parameters to prevent cheating</li></ul></div>
      </div></div></section>

      <section className="vi-sec sand"><div className="vi-wrap"><div className="vsplit">
        <div className="reveal"><div className="vi-eyebrow">Automated evaluation<span className="dot">.</span></div><h2 className="vi-h2" style={{ fontSize: '32px' }}>Automated evaluation for faster and accurate insights</h2><p className="vi-h2p">Testlify provides instant, precise auto-scoring of video interviews, with the option for manual review.</p><ul className="vchk"><li><Ck />Get instant scores based on answer relevance, and verbal cues</li><li><Ck />Review video responses effortlessly</li><li><Ck />Access detailed automated scoring insights for comprehensive analysis</li></ul><Link href="/features" className="vintglink">Learn more<span>&#8594;</span></Link></div>
        <div className="vsimg">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/Automated-evaluation-for-faster-and-accurate-insights.jpg" alt="Automated evaluation for faster and accurate insights" /></div>
      </div></div></section>

      <section className="vi-sec"><div className="vi-wrap"><div className="vsplit">
        <div className="vsimg">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/Creating-a-positive-candidate-journey-1-1024x657.jpg" alt="Creating a positive candidate journey" /></div>
        <div className="reveal"><div className="vi-eyebrow">Candidate journey<span className="dot">.</span></div><h2 className="vi-h2" style={{ fontSize: '32px' }}>Creating a positive candidate journey</h2><p className="vi-h2p">Create a seamless and engaging candidate journey with video interviews. Offer flexibility by allowing candidates to complete interviews on their own schedule, and ensure a professional experience with clear instructions and timely feedback.</p><p className="vi-h2p">Enhance your employer brand by demonstrating a modern, respectful, and efficient hiring process that values candidates' time and effort.</p></div>
      </div></div></section>

      <section className="vi-sec sand"><div className="vi-wrap"><div className="vsplit">
        <div className="reveal"><div className="vi-eyebrow">Multilingual<span className="dot">.</span></div><h2 className="vi-h2" style={{ fontSize: '32px' }}>Global reach with multilingual support</h2><p className="vi-h2p">With Testlify's multilingual support, you can effortlessly assess candidates from diverse backgrounds. Conduct interviews in multiple languages to ensure clear communication and equitable evaluation.</p><p className="vi-h2p">Engage top talent globally while breaking down language barriers, all through Testlify's inclusive and seamless interview process.</p></div>
        <div className="vsimg">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/Global-reach-with-multilingual-support-6.jpg" alt="Global reach with multilingual support" /></div>
      </div></div></section>

      <section className="vi-sec dark"><div className="vi-wrap"><div className="vsplit">
        <div className="vsimg">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="https://testlify.com/wp-content/uploads/2024/08/What-more-advantages-do-video-interviews-offer-4-1024x589.jpg" alt="What more advantages do video interviews offer" /></div>
        <div className="reveal"><div className="vi-eyebrow" style={{ color: '#FF7A52' }}>The advantages<span className="dot" style={{ color: '#FF7A52' }}>.</span></div><h2 className="vi-h2" style={{ fontSize: '32px', color: '#fff' }}>What more advantages do video interviews offer?</h2><ul className="vchk"><li><Ck />Conduct interviews anytime, anywhere</li><li><Ck />Reduce travel and logistics</li><li><Ck />Standardize evaluation across candidates</li><li><Ck />Evaluate communication and personality</li><li><Ck />Access interviews anytime, anyplace</li></ul></div>
      </div></div></section>

      <section className="vi-sec"><div className="vi-wrap">
        <div className="vi-shead reveal"><div className="vi-eyebrow">Testlify video interview features<span className="dot">.</span></div><h2 className="vi-h2">How Testlify beats other tools</h2></div>
        <div className="vcmp reveal"><table><thead><tr><th>Feature</th><th>Testlify</th><th>Others</th></tr></thead><tbody>
          <tr><td>Cost per interview</td><td className="us">Transparent pricing</td><td className="no">&mdash;</td></tr>
          {cmpRows.map((r) => (
            <tr key={r}><td>{r}</td><td className="us"><Check /></td><td className="no">&mdash;</td></tr>
          ))}
        </tbody></table></div>
      </div></section>

      <section className="vi-sec sand"><div className="vi-wrap">
        <div className="vi-shead reveal"><div className="vi-eyebrow">Integrations<span className="dot">.</span></div><h2 className="vi-h2">Testlify integrates seamlessly with 100+ ATS tools</h2><p className="vi-h2p">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p></div>
        <div className="vintg reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr" alt="Lever" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr" alt="SuccessFactors" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr" alt="Recruitee" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="t"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr" alt="JazzHR" /></div>
        </div>
        <div style={{ textAlign: 'center' }} className="reveal"><Link href="/integrations" className="vintglink">View all ATS integrations<span>&#8594;</span></Link></div>
      </div></section>

      <SecuritySection
        eyebrow="Security & compliance"
        heading="Built to keep your organization secure"
        sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections."
      />

      <Testimonials
        eyebrow="Customer satisfaction"
        heading="What our customers are saying about Testlify"
      />

      <Recognition />

      <section className="vi-sec sand"><div className="vi-wrap">
        <div className="vi-shead reveal"><div className="vi-eyebrow">FAQ<span className="dot">.</span></div><h2 className="vi-h2">Frequently asked questions (FAQs)</h2><p className="vi-h2p">Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.</p></div>
        <div className="vi-faq reveal"><FAQ items={faqItems} /></div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
