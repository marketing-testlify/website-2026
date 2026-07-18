'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#DC3137;}
.rtw{max-width:1240px;margin:0 auto;padding:0 28px;}
.rtsec{padding:96px 0;}
.rtsand{background:#FBF3EE;}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0;}.eyebrow b{color:#F23F44;}
.rt-h1{font-size:52px;font-weight:800;letter-spacing:-1.6px;line-height:1.06;margin:16px 0 0;}
.rt-h2{font-size:34px;font-weight:800;letter-spacing:-.8px;line-height:1.16;margin:14px 0 0;}
.rt-lead{font-size:17.5px;line-height:1.6;color:#5A4B4E;margin:20px 0 0;}
.rt-p{font-size:15.5px;line-height:1.64;color:#5A4B4E;margin:14px 0 0;}
.rt-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;margin-bottom:18px;}.rt-crumb a{color:#8A7A7D;}.rt-crumb a:hover{color:#F23F44;}
.rt-hero{padding:74px 0 80px;background:linear-gradient(180deg,#FFF8F7 0%,#fff 82%);}
.rt-hgrid{display:grid;grid-template-columns:1.02fr .98fr;gap:56px;align-items:center;}
.rt-ticks{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;}
.rt-tick{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.rt-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.fin-hero-card{background:linear-gradient(180deg,#FFF1EF,#FFF8F7);border:1px solid #F6DAD9;border-radius:24px;padding:24px;box-shadow:0 40px 90px rgba(110,11,14,.14);animation:rtfloat 6s ease-in-out infinite;}
@keyframes rtfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.fin-pipe{position:relative;display:flex;justify-content:space-between;padding:12px 6px 24px;}
.fin-pipe::before{content:"";position:absolute;top:38px;left:36px;right:36px;height:2px;background:repeating-linear-gradient(90deg,#F0B9B9 0 6px,transparent 6px 12px);}
.fin-node{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:9px;flex:1;}
.fin-dot{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #F23F44;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 7px rgba(242,63,68,.07);}
.fin-dot i{width:15px;height:15px;border-radius:50%;background:#F23F44;display:block;}
.fin-node span{font-size:11px;font-weight:600;color:#6C5A5D;text-align:center;line-height:1.2;}
.fin-score{background:#fff;border-radius:16px;padding:18px 20px;box-shadow:0 12px 26px rgba(110,11,14,.08);}
.fin-score-top{display:flex;justify-content:space-between;align-items:baseline;font-size:13px;font-weight:600;color:#6C5A5D;margin-bottom:16px;}
.fin-score-top b{font-size:20px;font-weight:800;color:#F23F44;letter-spacing:-.5px;}
.rt-scores{display:flex;flex-direction:column;gap:11px;}
.rt-scr{display:flex;align-items:center;gap:12px;}
.rt-scl{font-size:12.5px;font-weight:600;color:#46383C;width:150px;flex:none;}
.rt-scbar{flex:1;height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.rt-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:0;animation:rtfill 1.4s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes rtfill{to{width:var(--w);}}
.rt-scv{font-size:13px;font-weight:800;color:#F23F44;width:34px;text-align:right;flex:none;}
.statrow{display:grid;grid-template-columns:repeat(4,1fr);}
.statrow3{grid-template-columns:repeat(3,1fr);}
.stat{text-align:center;padding:4px 22px;}
.stat + .stat{border-left:1px solid #EFE3E4;}
.statn{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#1A1014;font-variant-numeric:tabular-nums;}
.statn .u{color:#D98C8F;font-weight:600;}
.statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:10px;line-height:1.45;}
.rt-g2{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.rt-flip .rt-copy{order:2;}
.rt-chk{display:flex;flex-direction:column;gap:12px;margin-top:22px;}
.rt-ci{display:flex;gap:10px;align-items:flex-start;font-size:15px;line-height:1.5;color:#46383C;font-weight:500;}
.rt-ci svg{flex:none;margin-top:2px;color:#1FA463;width:20px;height:20px;stroke-width:3;}
.rt-shead{text-align:center;max-width:760px;margin:0 auto;}
.en-3col{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px;}
.en-lcard{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:34px 32px 32px;box-shadow:0 16px 30px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.en-lcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 22px 44px rgba(110,11,14,.12);}
.en-lhead{display:flex;align-items:center;gap:14px;margin-bottom:20px;}
.en-lic{width:48px;height:48px;border-radius:14px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;flex:none;}
.en-lnum{font-size:13px;font-weight:800;color:#E7C4C6;letter-spacing:.04em;}
.en-lcard h3{font-size:19px;font-weight:700;margin:0;letter-spacing:-.3px;line-height:1.28;}
.en-lcard p{font-size:14.5px;line-height:1.62;color:#6C5A5D;margin:14px 0 0;}
.rt-roles{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.rt-role{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.rt-role:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 22px 44px rgba(110,11,14,.12);}
.rt-role-h{display:flex;align-items:center;margin-bottom:18px;}
.rt-role-ic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.rt-role h3{font-size:18px;font-weight:700;margin:0 0 6px;letter-spacing:-.3px;}
.rt-role-d{font-size:13.5px;line-height:1.5;color:#6C5A5D;margin:0 0 16px;}
.rt-tags{display:flex;flex-wrap:wrap;gap:8px;}
.rt-tag{font-size:12px;font-weight:600;color:#B23A3F;background:#FDECEC;border:1px solid #F8DADA;border-radius:100px;padding:6px 12px;white-space:nowrap;}
.rt-viewall{display:inline-flex;align-items:center;gap:8px;margin-top:34px;color:#F23F44;font-weight:700;font-size:15.5px;}
.fin-card{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 24px 50px rgba(110,11,14,.10);overflow:hidden;}
.fin-card-bar{display:flex;align-items:center;gap:8px;padding:13px 20px;border-bottom:1px solid #F4E9E9;background:#FCF7F7;}
.fin-dots{display:flex;gap:6px;}
.fin-dots i{width:11px;height:11px;border-radius:50%;display:block;}
.fin-card-t{font-size:12.5px;font-weight:600;color:#8A7A7D;margin-left:6px;}
.fin-card-b{padding:22px 22px;}
.en-scorehead{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;}
.en-scorehead b{font-size:15.5px;font-weight:700;color:#1A1014;display:block;}
.en-scorehead .sub{font-size:12px;color:#8A7A7D;margin-top:2px;display:block;}
.en-bigscore{font-size:32px;font-weight:800;color:#F23F44;letter-spacing:-1px;line-height:1;flex:none;}
.en-bigscore i{font-size:14px;color:#C9B9BC;font-style:normal;font-weight:700;}
.en-mbmeta{font-size:12px;color:#8A7A7D;font-weight:600;margin:0 0 16px;}
.sa-al-row{display:flex;align-items:center;gap:12px;border:1px solid #EFE3E4;border-radius:14px;padding:14px 16px;margin-bottom:9px;background:#fff;}
.sa-al-nm{flex:1;}
.sa-al-nm b{font-size:14px;font-weight:700;color:#1A1014;display:block;}
.sa-al-nm span{font-size:11.5px;color:#8A7A7D;}
.en-min{font-size:11px;font-weight:700;color:#6C5A5D;background:#F5EFEF;border-radius:100px;padding:5px 11px;white-space:nowrap;}
.en-addmod{text-align:center;border:1.5px dashed #EADDDE;border-radius:12px;padding:12px;font-size:12.5px;font-weight:600;color:#A9999C;margin-top:2px;}
.en-mbfoot{display:flex;justify-content:space-between;align-items:center;margin-top:16px;font-size:12.5px;font-weight:600;color:#8A7A7D;}
.en-send{background:#F23F44;color:#fff;padding:9px 17px;border-radius:100px;font-size:12px;font-weight:700;}
.en-gt{width:100%;border-collapse:collapse;font-size:13px;}
.en-gt th{font-size:10.5px;font-weight:700;color:#8A7A7D;text-transform:uppercase;letter-spacing:.04em;text-align:left;padding:0 8px 12px;}
.en-gt th.r,.en-gt td.r{text-align:right;}
.en-gt td{padding:12px 8px;border-top:1px solid #F4ECEC;color:#46383C;font-weight:700;}
.en-gt td:first-child{color:#1A1014;}
.en-gt td.r{color:#6C5A5D;font-variant-numeric:tabular-nums;}
.en-badge{font-size:11px;font-weight:700;border-radius:100px;padding:5px 11px;white-space:nowrap;}
.en-adv{color:#1FA463;background:#E8F6EE;}
.en-below{color:#8A7A7D;background:#F1E9E9;}
.en-proc-t{font-size:10.5px;font-weight:700;color:#8A7A7D;letter-spacing:.05em;margin:0 0 6px;}
.en-proc-row{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-top:1px solid #F4ECEC;font-size:14px;color:#6C5A5D;font-weight:500;}
.en-proc-row b{color:#1FA463;font-weight:700;font-size:13.5px;display:inline-flex;align-items:center;gap:7px;}
.en-proc-row b svg{width:15px;height:15px;}
.sat-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:44px;}
.sat-card{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:38px 36px;}
.sat-stars{display:flex;gap:5px;margin-bottom:20px;}
.sat-stars svg{width:20px;height:20px;}
.sat-q{font-size:20px;line-height:1.5;font-style:italic;color:#2A1D21;margin:0 0 26px;text-wrap:pretty;}
.sat-nm{font-weight:700;font-size:17px;color:#1A1014;}
.sat-role{font-size:14.5px;color:#6C5A5D;margin-top:4px;}
.sat-badge{display:inline-block;white-space:nowrap;margin-top:20px;background:#FCE0DE;color:#F23F44;font-size:12.5px;font-weight:700;padding:7px 14px;border-radius:100px;}
.rt-ats{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.rt-atst{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .25s,box-shadow .25s,border-color .25s;}
.rt-atst:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.rt-atst img{max-width:100%;max-height:38px;object-fit:contain;}
.rt-atsmore{text-align:center;margin-top:34px;}
.rt-atsmore a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;}
.rt-faqw{max-width:820px;margin:44px auto 0;}
.rt-faq{border-bottom:1px solid #F0E2E3;padding:22px 2px;cursor:pointer;}
.rt-faqq{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:16.5px;font-weight:700;color:#1A1014;}
.rt-faqx{width:28px;height:28px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex:none;transition:transform .25s;}
.rt-faqa{display:none;font-size:15px;line-height:1.64;color:#5A4B4E;margin-top:12px;max-width:730px;}
.rt-open .rt-faqa{display:block;}.rt-open .rt-faqx{transform:rotate(45deg);}
@media(max-width:960px){.rt-hgrid,.rt-g2{grid-template-columns:1fr;gap:40px;}.rt-flip .rt-copy{order:1;}.statrow{grid-template-columns:1fr 1fr;row-gap:34px;}.statrow3{grid-template-columns:1fr 1fr;}.stat + .stat{border-left:none;}.rt-roles,.en-3col,.sat-grid{grid-template-columns:1fr;}.rt-ats{grid-template-columns:repeat(3,1fr);}.rt-h1{font-size:38px;}.rt-h2{font-size:27px;}.rtsec{padding:64px 0;}}
@media(max-width:560px){.rt-ats{grid-template-columns:repeat(2,1fr);}.statrow,.statrow3{grid-template-columns:1fr;}.fin-node span{font-size:9px;}.rt-scl{width:120px;}}
.fin-cmpw{margin:44px -40px -12px;overflow-x:auto;padding:16px 40px 44px;}
.fin-cmp{width:100%;border-collapse:collapse;background:#fff;border:1px solid #F0E2E3;border-radius:18px;overflow:hidden;min-width:720px;box-shadow:0 18px 40px rgba(110,11,14,.09);}
.fin-cmp th,.fin-cmp td{padding:16px 18px;text-align:left;font-size:14.5px;border-bottom:1px solid #F4ECEC;color:#6C5A5D;}
.fin-cmp thead th{font-size:13px;font-weight:700;color:#1A1014;background:#fff;}
.fin-cmp thead th.tl{color:#F23F44;}
.fin-cmp td.cap{font-weight:600;color:#1A1014;}
.fin-cmp td.tlcol{font-weight:700;color:#1A1014;background:#FFF8F7;}
.fin-cmp tbody tr:last-child td{border-bottom:none;}
.fin-yes{color:#1FA463;font-weight:700;}
.fin-no{color:#C79A9C;}
.re-marq-wrap{position:relative;max-width:1100px;margin:0 auto;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);}
.re-trust-l{text-align:center;font-size:13.5px;font-weight:600;letter-spacing:1.5px;color:#A9999C;text-transform:uppercase;margin:0 0 30px;}
.re-trust-l strong{color:#F23F44;font-weight:800;}
.re-marq{display:flex;width:max-content;gap:64px;animation:remarquee 30s linear infinite;align-items:center;}
.re-marq-i{font-size:24px;font-weight:700;color:#C9B9BC;letter-spacing:-.5px;white-space:nowrap;}
@keyframes remarquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
h1,h2,h3,h4,.rt-h1,.rt-h2,.eyebrow{text-wrap:balance;}p,li,.rt-p,.rt-lead{text-wrap:pretty;}
`;

const faqs = [
  { q: 'What should a real estate skills assessment cover?', a: 'A real estate skills assessment should cover role-specific competencies for the position you are hiring: negotiation, market knowledge, sales aptitude, communication and client handling for agents, plus fair housing, disclosure and compliance knowledge. It replaces resume screening with objective, scored evidence of who can actually do the job.' },
  { q: 'How do you assess property manager candidates before hiring?', a: 'Property manager candidates are assessed on operations knowledge, tenant and resident handling, compliance awareness and situational judgment. Testlify combines role-specific tests with cognitive and personality modules so you can see how a candidate handles the day-to-day realities of managing a portfolio.' },
  { q: 'What is the best pre-employment test for real estate agents?', a: 'The strongest agent assessment blends sales aptitude, negotiation and communication with a market-knowledge and fair-housing check. Testlify lets you combine these into one role-specific assessment and set a pass threshold, so only agents who can genuinely sell and stay compliant advance.' },
  { q: 'Can I screen real estate candidates for fair housing compliance?', a: 'Yes. Testlify includes fair housing, disclosure and agency-law modules validated for real estate roles. Set a minimum pass score on the compliance module so candidates who do not meet your standard are automatically flagged and do not advance to interview.' },
  { q: 'How long does a real estate pre-employment assessment take for candidates?', a: 'Most real estate assessments run between 20 and 40 minutes depending on the role and modules selected. Agent and leasing roles typically combine sales aptitude, communication and compliance; appraiser and analyst roles add numerical and reasoning modules. Candidates receive results immediately on completion.' },
  { q: 'Does Testlify integrate with real estate ATS systems?', a: 'Yes. Testlify has 100+ native ATS and HRIS integrations including Workday, SAP SuccessFactors, Greenhouse, BambooHR and Lever. Assessment results and candidate rankings sync directly into your existing hiring workflow without manual data transfer.' },
  { q: 'What is skills-based hiring in real estate and why does it matter?', a: 'Skills-based hiring means shortlisting on verified, job-relevant ability rather than resumes or interview charisma. In real estate — where a bad hire costs commissions, compliance exposure and reputation — it gives recruiters objective, scored proof of who can negotiate, price, sell and stay compliant before the first call.' },
];

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
);
const Star = () => (
  <svg viewBox="0 0 24 24" fill="#F23F44"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);

export default function RealEstateIndustryPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      <section className="rt-hero" data-screen-label="Hero"><div className="rtw rt-hgrid">
        <div className="rt-copy reveal">
          <div className="rt-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Industry / Real estate</span></div>
          <p className="eyebrow">For real estate teams<b>.</b></p>
          <h1 className="rt-h1">The real estate skills assessment built for how <span style={{ color: '#F23F44' }}>recruiters actually hire</span></h1>
          <p className="rt-lead">Screen agents, brokers, property managers and leasing consultants on negotiation, compliance and market knowledge — before your shortlist ever reaches the first call.</p>
          <div className="rt-ctas">
            <CtaButton label="Try for Free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="Book a Demo" href="/contact" variant="secondary" size="md" icon="play" />
          </div>
          <div className="rt-ticks">
            <span className="rt-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>7-day free trial</span>
            <span className="rt-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Unlimited assessments</span>
            <span className="rt-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card required</span>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-hero-card">
            <div className="fin-pipe">
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Role input</span></div>
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>AI builder</span></div>
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Skills test</span></div>
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Proctoring</span></div>
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Auto score</span></div>
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Ranked list</span></div>
            </div>
            <div className="fin-score">
              <div className="fin-score-top"><span>Candidate assessment score</span><b>92/100</b></div>
              <div className="rt-scores">
                <div className="rt-scr"><span className="rt-scl">Negotiation</span><span className="rt-scbar"><i style={{ ['--w' as string]: '96%' }}></i></span><span className="rt-scv">96</span></div>
                <div className="rt-scr"><span className="rt-scl">Market knowledge</span><span className="rt-scbar"><i style={{ ['--w' as string]: '88%' }}></i></span><span className="rt-scv">88</span></div>
                <div className="rt-scr"><span className="rt-scl">Fair housing law</span><span className="rt-scbar"><i style={{ ['--w' as string]: '90%' }}></i></span><span className="rt-scv">90</span></div>
                <div className="rt-scr"><span className="rt-scl">Communication</span><span className="rt-scbar"><i style={{ ['--w' as string]: '84%' }}></i></span><span className="rt-scv">84</span></div>
                <div className="rt-scr"><span className="rt-scl">Client handling</span><span className="rt-scbar"><i style={{ ['--w' as string]: '89%' }}></i></span><span className="rt-scv">89</span></div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand reveal" style={{ paddingTop: 40, paddingBottom: 48 }}><div className="rtw">
        <p className="re-trust-l">Trusted by <strong>1,500+</strong> hiring teams from fast-scaling startups to enterprise TA functions</p>
        <div className="re-marq-wrap">
          <div className="re-marq">
            <span className="re-marq-i">LTIMindtree</span><span className="re-marq-i">Veeam</span><span className="re-marq-i">Thales</span><span className="re-marq-i">Third Bridge</span><span className="re-marq-i">Sonatafy</span><span className="re-marq-i">NSE</span><span className="re-marq-i">Apollo</span><span className="re-marq-i">Solvay</span>
            <span className="re-marq-i">LTIMindtree</span><span className="re-marq-i">Veeam</span><span className="re-marq-i">Thales</span><span className="re-marq-i">Third Bridge</span><span className="re-marq-i">Sonatafy</span><span className="re-marq-i">NSE</span><span className="re-marq-i">Apollo</span><span className="re-marq-i">Solvay</span>
          </div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><h2 className="rt-h2">Rank shortlists before the first call</h2><p className="rt-lead">Assessment helps identify who can apply those skills in real-world scenarios.</p></div>
        <div className="en-3col reveal">
          <div className="en-lcard">
            <div className="en-lhead"><span className="en-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg></span></div>
            <h3>Early attrition is expensive</h3><p>A wrong hire in a commissioned role can sit for months without closing. Verified selling and market aptitude up front protects your pipeline and your ramp.</p>
          </div>
          <div className="en-lcard">
            <div className="en-lhead"><span className="en-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg></span></div>
            <h3>Compliance gaps become incidents</h3><p>Fair housing, disclosure and contract rules leave no room for guesswork. Assessment gives you scored proof a candidate knows the rules before day one.</p>
          </div>
          <div className="en-lcard">
            <div className="en-lhead"><span className="en-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></span></div>
            <h3>Interviews reward confidence, not competence</h3><p>Real estate interviews favor the smooth talker. Skills tests surface who can actually negotiate, price and close — not just who presents well.</p>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">Real estate roles<b>.</b></p><h2 className="rt-h2">Every position on your real estate team, assessed</h2><p className="rt-lead">From front-line agents to appraisers and property managers, map the right role-specific test to every hire in under 60 seconds.</p></div>
        <div className="rt-roles reveal">
          <div className="rt-role"><div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span></div><h3>Real Estate Agent</h3><p className="rt-role-d">Sales aptitude, negotiation and client communication for residential agents who list, show and close.</p><div className="rt-tags"><span className="rt-tag">Sales aptitude</span><span className="rt-tag">Negotiation</span><span className="rt-tag">Communication</span></div></div>
          <div className="rt-role"><div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M5 21V7l7-4 7 4v14"></path><line x1="9" y1="9" x2="9" y2="9.01"></line><line x1="9" y1="13" x2="9" y2="13.01"></line><line x1="15" y1="9" x2="15" y2="9.01"></line><line x1="15" y1="13" x2="15" y2="13.01"></line></svg></span></div><h3>Commercial Real Estate Agent</h3><p className="rt-role-d">Market analysis, financial reasoning and complex negotiation for office, retail and industrial deals.</p><div className="rt-tags"><span className="rt-tag">Market analysis</span><span className="rt-tag">Negotiation</span><span className="rt-tag">Financial reasoning</span></div></div>
          <div className="rt-role"><div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M9 22V12h6v10"></path></svg></span></div><h3>Property Manager</h3><p className="rt-role-d">Operations, tenant handling and compliance knowledge for managing portfolios and resident relations.</p><div className="rt-tags"><span className="rt-tag">Operations</span><span className="rt-tag">Tenant handling</span><span className="rt-tag">Compliance</span></div></div>
          <div className="rt-role"><div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span></div><h3>Real Estate Broker</h3><p className="rt-role-d">Leadership, deal structuring and market judgment for brokers who run teams and own outcomes.</p><div className="rt-tags"><span className="rt-tag">Leadership</span><span className="rt-tag">Deal structuring</span><span className="rt-tag">Market knowledge</span></div></div>
          <div className="rt-role"><div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span></div><h3>Leasing Consultant</h3><p className="rt-role-d">Customer service, sales and objection handling for consultants who tour, qualify and convert renters.</p><div className="rt-tags"><span className="rt-tag">Customer service</span><span className="rt-tag">Sales</span><span className="rt-tag">Objection handling</span></div></div>
          <div className="rt-role"><div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 15l2 2 4-4"></path></svg></span></div><h3>Real Estate Appraiser</h3><p className="rt-role-d">Valuation, numerical reasoning and attention to detail for appraisers who price property accurately.</p><div className="rt-tags"><span className="rt-tag">Valuation</span><span className="rt-tag">Numerical reasoning</span><span className="rt-tag">Attention to detail</span></div></div>
        </div>
        <div style={{ textAlign: 'center' }}><Link className="rt-viewall reveal" href="/test-library">View all test library<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">What it shows<b>.</b></p><h2 className="rt-h2">What the real estate skills assessment actually shows recruiters</h2><p className="rt-lead">Each feature below is built from what real estate teams told us was missing from the tools they already had.</p></div>
        <div className="rt-g2" style={{ marginTop: 56 }}>
          <div className="rt-copy reveal">
            <h2 className="rt-h2" style={{ marginTop: 0 }}>Per-skill scores, not just a single number to guess from</h2>
            <p className="rt-p">Every candidate gets a breakdown by skill area, not a single composite that hides who is actually job-ready.</p>
            <div className="rt-chk">
              <div className="rt-ci"><Check />Negotiation, market knowledge and communication scored separately</div>
              <div className="rt-ci"><Check />Fair housing and compliance knowledge verified, not assumed</div>
              <div className="rt-ci"><Check />Ranked against your own pass threshold per role</div>
            </div>
          </div>
          <div className="rt-media reveal">
            <div className="fin-card">
              <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">Candidate Scorecard · Real Estate Agent</span></div>
              <div className="fin-card-b">
                <div className="en-scorehead"><div><b>Maya Reyes</b><span className="sub">Real Estate Agent · Residential</span></div><span className="en-bigscore">92<i>/100</i></span></div>
                <div className="rt-scores" style={{ marginTop: 18 }}>
                  <div className="rt-scr"><span className="rt-scl">Negotiation</span><span className="rt-scbar"><i style={{ ['--w' as string]: '94%' }}></i></span><span className="rt-scv">94</span></div>
                  <div className="rt-scr"><span className="rt-scl">Market knowledge</span><span className="rt-scbar"><i style={{ ['--w' as string]: '88%' }}></i></span><span className="rt-scv">88</span></div>
                  <div className="rt-scr"><span className="rt-scl">Fair housing law</span><span className="rt-scbar"><i style={{ ['--w' as string]: '91%' }}></i></span><span className="rt-scv">91</span></div>
                  <div className="rt-scr"><span className="rt-scl">Communication</span><span className="rt-scbar"><i style={{ ['--w' as string]: '86%' }}></i></span><span className="rt-scv">86</span></div>
                  <div className="rt-scr"><span className="rt-scl">Client handling</span><span className="rt-scbar"><i style={{ ['--w' as string]: '93%' }}></i></span><span className="rt-scv">93</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw rt-g2 rt-flip">
        <div className="rt-copy reveal">
          <h2 className="rt-h2" style={{ marginTop: 0 }}>Ranked shortlists auto-delivered. No spreadsheet</h2>
          <p className="rt-p">The moment your final candidate is done, Testlify ranks the entire slate by overall score and per-skill performance. Share a ranked view with your hiring manager or export it as needed.</p>
          <div className="rt-chk">
            <div className="rt-ci"><Check />Full slate auto-ranked by objective criteria</div>
            <div className="rt-ci"><Check />Per-skill breakdown behind every candidate score</div>
            <div className="rt-ci"><Check />Below-threshold candidates flagged so recruiters focus their time</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-card">
            <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">Candidates · Real Estate Agent</span></div>
            <div className="fin-card-b">
              <table className="en-gt">
                <thead><tr><th>Candidate</th><th className="r">Overall</th><th className="r">Sales</th><th className="r">Cognitive</th><th className="r">Status</th></tr></thead>
                <tbody>
                  <tr><td>Maya R.</td><td className="r">94</td><td className="r">96</td><td className="r">90</td><td className="r"><span className="en-badge en-adv">Advance</span></td></tr>
                  <tr><td>Devin K.</td><td className="r">88</td><td className="r">85</td><td className="r">89</td><td className="r"><span className="en-badge en-adv">Advance</span></td></tr>
                  <tr><td>Tom H.</td><td className="r">68</td><td className="r">60</td><td className="r">74</td><td className="r"><span className="en-badge en-below">Below threshold</span></td></tr>
                  <tr><td>Aisha N.</td><td className="r">90</td><td className="r">92</td><td className="r">88</td><td className="r"><span className="en-badge en-adv">Advance</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw rt-g2">
        <div className="rt-copy reveal">
          <h2 className="rt-h2" style={{ marginTop: 0 }}>Know before you hire whether a candidate understands fair housing law</h2>
          <p className="rt-p">A single wrong call on fair housing, disclosure or agency law exposes your brokerage to real risk. Testlify&apos;s compliance modules give you scored proof of what each candidate knows before they ever speak to a client.</p>
          <div className="rt-chk">
            <div className="rt-ci"><Check />Fair housing, disclosure and agency-law modules validated for real estate</div>
            <div className="rt-ci"><Check />Set a minimum pass score so only compliant candidates advance</div>
            <div className="rt-ci"><Check />Exportable, timestamped scores for internal and audit review</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-card">
            <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">Compliance Scorecard · Maya R.</span></div>
            <div className="fin-card-b">
              <div className="en-scorehead"><div><b>Fair Housing &amp; Compliance</b><span className="sub">Real Estate Agent · Residential</span></div><span className="en-bigscore">93<i>/100</i></span></div>
              <div className="rt-scores" style={{ marginTop: 18 }}>
                <div className="rt-scr"><span className="rt-scl">Fair housing law</span><span className="rt-scbar"><i style={{ ['--w' as string]: '96%' }}></i></span><span className="rt-scv">96</span></div>
                <div className="rt-scr"><span className="rt-scl">Disclosure &amp; contracts</span><span className="rt-scbar"><i style={{ ['--w' as string]: '90%' }}></i></span><span className="rt-scv">90</span></div>
                <div className="rt-scr"><span className="rt-scl">Anti-discrimination</span><span className="rt-scbar"><i style={{ ['--w' as string]: '94%' }}></i></span><span className="rt-scv">94</span></div>
                <div className="rt-scr"><span className="rt-scl">Agency law</span><span className="rt-scbar"><i style={{ ['--w' as string]: '88%' }}></i></span><span className="rt-scv">88</span></div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">Why Testlify<b>.</b></p><h2 className="rt-h2">Why real estate recruiters move to Testlify</h2></div>
        <div className="fin-cmpw reveal">
          <table className="fin-cmp">
            <thead><tr><th className="cap">Capability</th><th className="tl">Testlify</th><th>Generic assessment tools</th><th>Manual interviews only</th></tr></thead>
            <tbody>
              <tr><td className="cap">Real estate–specific test library</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td>Limited</td><td><span className="fin-no">✗</span></td></tr>
              <tr><td className="cap">Fair housing &amp; compliance screening</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td><span className="fin-no">✗</span></td><td><span className="fin-no">✗</span></td></tr>
              <tr><td className="cap">Role-specific negotiation &amp; sales tests</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td>Partial</td><td><span className="fin-no">✗</span></td></tr>
              <tr><td className="cap">Auto-ranked shortlists</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td>Partial</td><td><span className="fin-no">✗</span></td></tr>
              <tr><td className="cap">Proctoring &amp; anti-cheating</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td>Partial</td><td><span className="fin-no">✗</span></td></tr>
              <tr><td className="cap">Cost per role at volume</td><td className="tlcol"><span className="fin-yes">✓</span> Low</td><td>Medium</td><td>High (time)</td></tr>
            </tbody>
          </table>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal" style={{ textAlign: 'left', maxWidth: 'none' }}><h2 className="rt-h2" style={{ fontSize: 44 }}>What real estate hiring teams say</h2></div>
        <div className="sat-grid reveal">
          <div className="sat-card">
            <div className="sat-stars"><Star /><Star /><Star /><Star /><Star /></div>
            <p className="sat-q">“We screen sales aptitude and client handling before we ever interview an agent. Close rates went up and we stopped losing a quarter to hires who could not actually sell.”</p>
            <div className="sat-nm">Head of Talent</div>
            <div className="sat-role">Residential brokerage, multi-office</div>
            <span className="sat-badge">G2 Verified</span>
          </div>
          <div className="sat-card">
            <div className="sat-stars"><Star /><Star /><Star /><Star /><Star /></div>
            <p className="sat-q">“Verifying fair housing and disclosure knowledge up front took real risk off the table. Every shortlist now comes with scored proof, not a gut feel.”</p>
            <div className="sat-nm">Recruitment Manager</div>
            <div className="sat-role">Property management group</div>
            <span className="sat-badge">G2 Verified</span>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">Integrations<b>.</b></p><h2 className="rt-h2">Testlify integrates seamlessly with 100+ ATS tools</h2><p className="rt-lead">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p></div>
        <div className="rt-ats reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png" alt="SAP SuccessFactors" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png" alt="Lever" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png" alt="Recruitee" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG Pro Recruiting" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rt-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png" alt="JazzHR" /></div>
        </div>
        <div className="rt-atsmore reveal"><Link href="/integrations">View all ATS integration<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">FAQ<b>.</b></p><h2 className="rt-h2">Frequently asked questions (FAQs)</h2><p className="rt-lead">Here are answers to the most commonly asked questions about Testlify&apos;s skills assessment for the real estate industry.</p></div>
        <div className="rt-faqw">
          {faqs.map((f, i) => (
            <div key={i} className={`rt-faq reveal ${open[i] ? 'rt-open' : ''}`} onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}>
              <div className="rt-faqq">{f.q}<span className="rt-faqx">+</span></div>
              <div className="rt-faqa">{f.a}</div>
            </div>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
