'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';

const CSS = `
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
/* 3-col identify cards */
.en-3col{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px;}
.en-lcard{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:34px 32px 32px;box-shadow:0 16px 30px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.en-lcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 22px 44px rgba(110,11,14,.12);}
.en-lhead{display:flex;align-items:center;gap:14px;margin-bottom:20px;}
.en-lic{width:48px;height:48px;border-radius:14px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;flex:none;}
.en-lnum{font-size:13px;font-weight:800;color:#E7C4C6;letter-spacing:.04em;}
.en-lcard h3{font-size:19px;font-weight:700;margin:0;letter-spacing:-.3px;line-height:1.28;}
.en-lcard p{font-size:14.5px;line-height:1.62;color:#6C5A5D;margin:14px 0 0;}
/* role cards */
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
/* scorecard */
.en-scorehead{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;}
.en-scorehead b{font-size:15.5px;font-weight:700;color:#1A1014;display:block;}
.en-scorehead .sub{font-size:12px;color:#8A7A7D;margin-top:2px;display:block;}
.en-bigscore{font-size:32px;font-weight:800;color:#F23F44;letter-spacing:-1px;line-height:1;flex:none;}
.en-bigscore i{font-size:14px;color:#C9B9BC;font-style:normal;font-weight:700;}
/* module builder */
.en-mbmeta{font-size:12px;color:#8A7A7D;font-weight:600;margin:0 0 16px;}
.sa-al-row{display:flex;align-items:center;gap:12px;border:1px solid #EFE3E4;border-radius:14px;padding:14px 16px;margin-bottom:9px;background:#fff;}
.sa-al-nm{flex:1;}
.sa-al-nm b{font-size:14px;font-weight:700;color:#1A1014;display:block;}
.sa-al-nm span{font-size:11.5px;color:#8A7A7D;}
.en-min{font-size:11px;font-weight:700;color:#6C5A5D;background:#F5EFEF;border-radius:100px;padding:5px 11px;white-space:nowrap;}
.en-addmod{text-align:center;border:1.5px dashed #EADDDE;border-radius:12px;padding:12px;font-size:12.5px;font-weight:600;color:#A9999C;margin-top:2px;}
.en-mbfoot{display:flex;justify-content:space-between;align-items:center;margin-top:16px;font-size:12.5px;font-weight:600;color:#8A7A7D;}
.en-send{background:#F23F44;color:#fff;padding:9px 17px;border-radius:100px;font-size:12px;font-weight:700;}
/* grid operator table */
.en-gt{width:100%;border-collapse:collapse;font-size:13px;}
.en-gt th{font-size:10.5px;font-weight:700;color:#8A7A7D;text-transform:uppercase;letter-spacing:.04em;text-align:left;padding:0 8px 12px;}
.en-gt th.r,.en-gt td.r{text-align:right;}
.en-gt td{padding:12px 8px;border-top:1px solid #F4ECEC;color:#46383C;font-weight:700;}
.en-gt td:first-child{color:#1A1014;}
.en-gt td.r{color:#6C5A5D;font-variant-numeric:tabular-nums;}
.en-badge{font-size:11px;font-weight:700;border-radius:100px;padding:5px 11px;white-space:nowrap;}
.en-adv{color:#1FA463;background:#E8F6EE;}
.en-below{color:#8A7A7D;background:#F1E9E9;}
/* proctoring */
.en-proc-t{font-size:10.5px;font-weight:700;color:#8A7A7D;letter-spacing:.05em;margin:0 0 6px;}
.en-proc-row{display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-top:1px solid #F4ECEC;font-size:14px;color:#6C5A5D;font-weight:500;}
.en-proc-row b{color:#1FA463;font-weight:700;font-size:13.5px;display:inline-flex;align-items:center;gap:7px;}
.en-proc-row b svg{width:15px;height:15px;}
/* testimonials cards local */
.sat-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:44px;}
.sat-card{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:38px 36px;}
.sat-stars{display:flex;gap:5px;margin-bottom:20px;}
.sat-stars svg{width:20px;height:20px;}
.sat-q{font-size:20px;line-height:1.5;font-style:italic;color:#2A1D21;margin:0 0 26px;text-wrap:pretty;}
.sat-nm{font-weight:700;font-size:17px;color:#1A1014;}
.sat-role{font-size:14.5px;color:#6C5A5D;margin-top:4px;}
.sat-badge{display:inline-block;white-space:nowrap;margin-top:20px;background:#FCE0DE;color:#F23F44;font-size:12.5px;font-weight:700;padding:7px 14px;border-radius:100px;}
/* integrations */
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
.lg-funh{font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#8A7A7D;display:flex;justify-content:space-between;margin:0 0 14px;}
.lg-funrow{display:flex;align-items:center;gap:10px;margin-bottom:9px;}
.lg-funrow .lbl{font-size:11.5px;color:#6C5A5D;font-weight:600;width:70px;flex:none;text-align:right;}
.lg-funbar{height:26px;border-radius:7px;background:linear-gradient(90deg,#FF7A52,#F23F44);display:flex;align-items:center;padding:0 11px;color:#fff;font-size:12px;font-weight:800;min-width:44px;}
.lg-skillcard{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:32px 30px;box-shadow:0 16px 30px rgba(110,11,14,.08);}
.lg-skhead{display:flex;align-items:center;gap:13px;margin-bottom:4px;}
.lg-skic{width:44px;height:44px;border-radius:12px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;flex:none;}
.lg-skhead h3{font-size:18px;font-weight:700;margin:0;letter-spacing:-.3px;}
.lg-sksub{font-size:13px;color:#8A7A7D;margin:0 0 22px;}
.lg-certgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.lg-cert{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.lg-cert:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 22px 44px rgba(110,11,14,.12);}
.lg-cert .cf{font-size:11.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#F23F44;margin:0 0 10px;}
.lg-cert h3{font-size:17.5px;font-weight:700;margin:0 0 16px;letter-spacing:-.3px;}
.lg-cert .ci{display:flex;gap:9px;align-items:flex-start;font-size:14px;line-height:1.45;color:#46383C;font-weight:500;padding:7px 0;}
.lg-cert .ci svg{flex:none;margin-top:2px;color:#1FA463;width:18px;height:18px;stroke-width:3;}
.lg-dark{background:#1A1014;}
.lg-dq{font-size:26px;line-height:1.5;font-weight:600;color:#fff;margin:18px 0 26px;text-wrap:pretty;}
.lg-dark .statn{color:#fff;}.lg-dark .stat + .stat{border-left-color:rgba(255,255,255,.14);}.lg-dark .statl{color:#C9B9BC;}
.lg-2col{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:46px;}
@media(max-width:960px){.lg-2col,.lg-certgrid{grid-template-columns:1fr;}}
h1,h2,h3,h4,.rt-h1,.rt-h2,.eyebrow{text-wrap:balance;}p,li,.rt-p,.rt-lead{text-wrap:pretty;}/*om-balance-rule*/
`;

const FAQS = [
  {
    q: 'What are logistics and supply chain skill tests?',
    a: "Logistics and supply chain skill tests are pre-hire assessments that measure a candidate's ability to perform the actual tasks required in logistics, warehousing, procurement and planning roles. Unlike resumes, they give objective, role-specific data on skills like ERP proficiency, data analysis, safety awareness and demand forecasting before a single interview.",
  },
  {
    q: 'How do I screen warehouse applicants at high volume without slowing down?',
    a: 'Send one assessment link to your entire applicant pool and Testlify auto-scores and ranks every candidate on operational aptitude, attention to detail and safety. During peak season you get a job-fit shortlist within hours instead of manually reviewing thousands of resumes.',
  },
  {
    q: 'Which skills should I test for logistics and supply chain roles?',
    a: 'Frontline roles need attention to detail, workplace safety, numerical reasoning and situational judgment. Strategic roles need Excel and analytics, ERP/SAP knowledge, SQL, demand forecasting and procurement skills. Testlify maps validated tests to both so every hire is measured on what the role actually demands.',
  },
  {
    q: 'Can logistics skill tests reduce warehouse turnover?',
    a: 'Yes. Hiring on verified reliability, safety awareness and operational aptitude — rather than availability alone — means new hires are better matched to the job and stay longer. Teams using skills-based screening report meaningfully lower early attrition on frontline roles.',
  },
  {
    q: 'Do the assessments work for nearshoring and cross-border supply chain roles?',
    a: 'Yes. Testlify includes tests for trade compliance, customs and documentation, network design and cross-border operations, so you can screen for the strategic and regulatory skills that nearshoring and network redesign require.',
  },
  {
    q: 'How do the assessments fit into our ATS and HRIS?',
    a: 'Testlify has 100+ native ATS and HRIS integrations including Workday, SAP SuccessFactors, Greenhouse, BambooHR and Lever. Assessments fire automatically and ranked results sync straight into your existing hiring workflow without manual data transfer.',
  },
  {
    q: "Are Testlify's supply chain skill tests valid and bias free?",
    a: 'Every test is built by subject-matter experts and I/O psychologists, validated for reliability and reviewed for adverse impact. Objective, consistent scoring gives every candidate the same fair evaluation and produces a defensible, documented hiring decision.',
  },
  {
    q: 'How fast can we launch assessments for a peak season hiring surge?',
    a: 'Minutes. Pick a role-specific logistics assessment or build your own from the test library, set your pass threshold, and send one link to your whole applicant pool. Candidates are scored and ranked automatically as they complete, so your shortlist builds in real time.',
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const FRONTLINE_SCORES = [
  { l: 'Attention to detail', w: '89%', v: '89' },
  { l: 'Workplace safety', w: '92%', v: '92' },
  { l: 'Numerical reasoning', w: '82%', v: '82' },
  { l: 'Reliability & punctuality', w: '86%', v: '86' },
  { l: 'Spatial reasoning', w: '79%', v: '79' },
  { l: 'Situational judgement', w: '90%', v: '90' },
];

const STRATEGIC_SCORES = [
  { l: 'Excel & Analytics', w: '91%', v: '91' },
  { l: 'ERP / SAP / Oracle', w: '86%', v: '86' },
  { l: 'SQL & Reporting', w: '77%', v: '77' },
  { l: 'Demand forecasting', w: '84%', v: '84' },
  { l: 'Procurement & sourcing', w: '81%', v: '81' },
  { l: 'Supply chain analytics', w: '88%', v: '88' },
];

const ROLES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    h: 'Peak season volume hiring',
    d: 'Screen thousands of warehouse and fulfilment applicants in days, not weeks. Auto-rank candidates and shortlist the job-fit ones before your competitors do.',
    tags: ['High-volume', 'Warehouse', 'Frontline', 'Seasonal'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    h: 'Distribution centre buildout',
    d: 'Rapidly assess and hire forklift operators, shift leads and logistics coordinators across multiple sites with one consistent skills benchmark.',
    tags: ['High-volume', 'Warehouse', 'Frontline'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    h: 'Nearshoring & network redesign',
    d: 'As supply chains restructure, test candidates for strategic network design, trade compliance and cross-border operations the skills nearshoring demands.',
    tags: ['Strategic', 'Compliance', 'Cross-border'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    h: 'Planning & analytics team growth',
    d: 'Validate Excel, SQL, ERP and forecasting proficiency for demand planners, supply-chain analysts and operations roles before the first interview.',
    tags: ['Planners', 'Analysts', 'ERP', 'SQL'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    h: 'Fleet & driver hiring',
    d: 'Assess route logic, safety awareness and service quality across a high-volume applicant pool. Reduce risky hires before they get behind the wheel.',
    tags: ['Drivers', 'Fleet', 'Safety', 'High-volume'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6" />
      </svg>
    ),
    h: 'Sustainability & compliance hiring',
    d: 'Test for Scope 3 emissions awareness, supplier governance and ESG reporting skills as sustainability regulations reshape supply chain hiring.',
    tags: ['ESG', 'Compliance', 'Procurement', 'Governance'],
  },
];

const CERTS = [
  {
    cf: 'APICS / ASCM',
    h: 'CSCP & CPIM aligned',
    items: ['Demand & supply planning', 'Inventory optimization', 'Distribution & logistics management'],
  },
  {
    cf: 'Lean / Six Sigma',
    h: 'Process improvement skills',
    items: ['DMAIC process knowledge', 'Waste identification', 'KPI measurement & analysis'],
  },
  {
    cf: 'WMS / TMS platforms',
    h: 'Tech stack proficiency',
    items: ['SAP, Oracle & Blue Yonder', 'WMS operations & workflows', 'TMS reporting & routing'],
  },
  {
    cf: 'Trade & compliance',
    h: 'Regulatory & legal knowledge',
    items: ['Customs & import/export rules', 'Incoterms & documentation', 'Tariff classification basics'],
  },
  {
    cf: 'RFP / CPIM aligned',
    h: 'Procurement & sourcing',
    items: ['Supplier evaluation & bid', 'Category management', 'Contract & negotiation skills'],
  },
  {
    cf: 'Safety & OSHA',
    h: 'Workplace safety compliance',
    items: ['OSHA standards & regulations', 'Forklift & equipment safety', 'Hazmat awareness & protocols'],
  },
];

const ATS = [
  { src: 'https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png', alt: 'Workday' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png', alt: 'SAP SuccessFactors' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png', alt: 'Lever' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg', alt: 'SmartRecruiters' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png', alt: 'Recruitee' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/logo.svg', alt: 'UKG Pro Recruiting' },
  { src: 'https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png', alt: 'BambooHR' },
  { src: 'https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png', alt: 'Greenhouse' },
  { src: 'https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png', alt: 'Zoho Recruit' },
  { src: 'https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png', alt: 'JazzHR' },
];

export default function Page() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const runCount = (el: HTMLElement) => {
      const to = +(el.dataset.to || '0');
      const comma = el.dataset.comma === '1';
      const dur = 1500;
      let st: number | null = null;
      const fmt = (n: number) => {
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
    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        (ents) => {
          ents.forEach((en) => {
            if (en.isIntersecting) {
              en.target.querySelectorAll<HTMLElement>('.v[data-to]').forEach(runCount);
              io?.unobserve(en.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      root.querySelectorAll('.statrow').forEach((el) => io?.observe(el));
    } catch {
      /* noop */
    }
    return () => io?.disconnect();
  }, []);

  const toggleFaq = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <div ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." homeHref="/" />

      <section className="rt-hero" data-screen-label="Hero">
        <div className="rtw rt-hgrid">
          <div className="rt-copy reveal">
            <div className="rt-crumb">
              <Link href="/solution-index">Solutions</Link>
              <span>/</span>
              <span>Industry / Logistics &amp; supply chain</span>
            </div>
            <p className="eyebrow">
              For logistics &amp; supply chain teams<b>.</b>
            </p>
            <h1 className="rt-h1">
              Logistics and supply chain skill tests for <span style={{ color: '#F23F44' }}>every role you hire</span>
            </h1>
            <p className="rt-lead">
              Assess warehouse, driver, planner and analyst candidates on the skills that predict performance. Screen applicants at volume, shortlist in days, and stop losing new hires.
            </p>
            <div className="rt-ctas">
              <CtaButton label="Try for Free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic={true} />
              <CtaButton label="Book a Demo" href="/contact" variant="secondary" size="md" icon="play" />
            </div>
            <div className="rt-ticks">
              <span className="rt-tick">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                7-day free trial
              </span>
              <span className="rt-tick">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Unlimited assessments
              </span>
              <span className="rt-tick">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                No credit card required
              </span>
            </div>
          </div>
          <div className="rt-media reveal">
            <div className="fin-hero-card">
              <div className="lg-funh">
                <span>Frontline applicant funnel</span>
                <span>Peak season</span>
              </div>
              <div className="lg-funrow">
                <span className="lbl">Applicants</span>
                <span className="lg-funbar" style={{ width: '100%' }}>
                  3,499
                </span>
              </div>
              <div className="lg-funrow">
                <span className="lbl">Assessed</span>
                <span className="lg-funbar" style={{ width: '70%' }}>
                  1,780
                </span>
              </div>
              <div className="lg-funrow">
                <span className="lbl">Job-fit</span>
                <span className="lg-funbar" style={{ width: '40%' }}>
                  820
                </span>
              </div>
              <div className="lg-funrow">
                <span className="lbl">Shortlist</span>
                <span className="lg-funbar" style={{ width: '15%' }}>
                  28
                </span>
              </div>
              <div className="fin-score" style={{ marginTop: '20px' }}>
                <div className="en-scorehead">
                  <div>
                    <b>Rohan M.</b>
                    <span className="sub">Demand Planner</span>
                  </div>
                  <span className="en-bigscore" style={{ fontSize: '19px' }}>
                    Top 6%
                  </span>
                </div>
                <div className="rt-scores" style={{ marginTop: '14px' }}>
                  <div className="rt-scr">
                    <span className="rt-scl" style={{ width: '168px' }}>
                      Excel &amp; Data Analysis
                    </span>
                    <span className="rt-scbar">
                      <i style={{ ['--w' as string]: '92%' } as React.CSSProperties} />
                    </span>
                    <span className="rt-scv">92</span>
                  </div>
                  <div className="rt-scr">
                    <span className="rt-scl" style={{ width: '168px' }}>
                      Supply Chain Analytics
                    </span>
                    <span className="rt-scbar">
                      <i style={{ ['--w' as string]: '88%' } as React.CSSProperties} />
                    </span>
                    <span className="rt-scv">88</span>
                  </div>
                  <div className="rt-scr">
                    <span className="rt-scl" style={{ width: '168px' }}>
                      ERP / SAP knowledge
                    </span>
                    <span className="rt-scbar">
                      <i style={{ ['--w' as string]: '87%' } as React.CSSProperties} />
                    </span>
                    <span className="rt-scv">87</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rtsec rtsand" style={{ paddingTop: '44px', paddingBottom: '44px' }}>
        <div className="rtw">
          <div className="statrow reveal">
            <div className="stat">
              <div className="statn">
                <span className="v" data-to="22">
                  0
                </span>
                <span className="u">%</span>
              </div>
              <div className="statl">YoY growth in supply chain roles since 2020, with no sign of slowing</div>
            </div>
            <div className="stat">
              <div className="statn">
                <span className="v" data-to="35">
                  0
                </span>
                <span className="u">%</span>
              </div>
              <div className="statl">of companies rank talent shortage as a top supply chain challenge</div>
            </div>
            <div className="stat">
              <div className="statn">
                <span className="v" data-to="17">
                  0
                </span>
                <span className="u">%</span>
              </div>
              <div className="statl">projected employment growth for logistics 2024–2034, far above average</div>
            </div>
            <div className="stat">
              <div className="statn">
                1.9<span className="u">M</span>
              </div>
              <div className="statl">US supply chain jobs projected to go unfilled by 2030</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rtsec">
        <div className="rtw">
          <div className="rt-shead reveal">
            <h2 className="rt-h2">Exactly which skills do your logistics and supply chain roles need?</h2>
            <p className="rt-lead">
              Testlify&apos;s validated skill library maps to both frontline and strategic logistics roles, so every test predicts on-the-job performance.
            </p>
          </div>
          <div className="lg-2col reveal">
            <div className="lg-skillcard">
              <div className="lg-skhead">
                <span className="lg-skic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </span>
                <h3>Frontline &amp; Operational skills</h3>
              </div>
              <p className="lg-sksub">Warehouse, floor, forklift and fleet roles</p>
              <div className="rt-scores">
                {FRONTLINE_SCORES.map((s) => (
                  <div className="rt-scr" key={s.l}>
                    <span className="rt-scl" style={{ width: '168px' }}>
                      {s.l}
                    </span>
                    <span className="rt-scbar">
                      <i style={{ ['--w' as string]: s.w } as React.CSSProperties} />
                    </span>
                    <span className="rt-scv">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg-skillcard">
              <div className="lg-skhead">
                <span className="lg-skic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </span>
                <h3>Strategic &amp; Professional skills</h3>
              </div>
              <p className="lg-sksub">Analyst, planner, procurement and ops manager</p>
              <div className="rt-scores">
                {STRATEGIC_SCORES.map((s) => (
                  <div className="rt-scr" key={s.l}>
                    <span className="rt-scl" style={{ width: '168px' }}>
                      {s.l}
                    </span>
                    <span className="rt-scbar">
                      <i style={{ ['--w' as string]: s.w } as React.CSSProperties} />
                    </span>
                    <span className="rt-scv">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link className="rt-viewall reveal" href="/test-library">
              Browse the full test library
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="rtsec rtsand">
        <div className="rtw">
          <div className="rt-shead reveal">
            <p className="eyebrow">
              How teams hire<b>.</b>
            </p>
            <h2 className="rt-h2">Built for how logistics teams actually hire</h2>
            <p className="rt-lead">Whether you&apos;re ramping for peak season or building a planning team, Testlify fits the way your work works.</p>
          </div>
          <div className="rt-roles reveal">
            {ROLES.map((r) => (
              <div className="rt-role" key={r.h}>
                <div className="rt-role-h">
                  <span className="rt-role-ic">{r.icon}</span>
                </div>
                <h3>{r.h}</h3>
                <p className="rt-role-d">{r.d}</p>
                <div className="rt-tags">
                  {r.tags.map((t) => (
                    <span className="rt-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link className="rt-viewall reveal" href="/test-library">
              See volume hiring solutions
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="rtsec">
        <div className="rtw">
          <div className="rt-shead reveal">
            <p className="eyebrow">
              Certifications<b>.</b>
            </p>
            <h2 className="rt-h2">Test for the certifications your industry values most</h2>
            <p className="rt-lead">
              Testlify&apos;s logistics and supply chain skill tests cover the knowledge frameworks behind the most in-demand industry credentials.
            </p>
          </div>
          <div className="lg-certgrid reveal">
            {CERTS.map((c) => (
              <div className="lg-cert" key={c.h}>
                <p className="cf">{c.cf}</p>
                <h3>{c.h}</h3>
                {c.items.map((it) => (
                  <div className="ci" key={it}>
                    <Check />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rtsec lg-dark" data-screen-label="Client story">
        <div className="rtw" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <p className="eyebrow reveal" style={{ color: '#C9B9BC' }}>
            Client story<b>.</b>
          </p>
          <p className="lg-dq reveal">
            &quot;We were drowning in warehouse applicants every peak season. Testlify cut our screening from{' '}
            <span style={{ color: '#FF7A52' }}>weeks to days</span>, and the people we hire now actually stay past 90 days.&quot;
          </p>
          <p className="reveal" style={{ color: '#fff', fontWeight: 700, margin: 0 }}>
            Head of Talent
          </p>
          <p className="reveal" style={{ color: '#A9999C', fontSize: '14px', margin: '4px 0 40px' }}>
            Logistics Company
          </p>
          <div className="statrow reveal" style={{ gridTemplateColumns: 'repeat(3,1fr)', maxWidth: '720px', margin: '0 auto' }}>
            <div className="stat">
              <div className="statn">
                <span className="v" data-to="80">
                  0
                </span>
                <span className="u">%</span>
              </div>
              <div className="statl">faster time to shortlist</div>
            </div>
            <div className="stat">
              <div className="statn">
                <span className="v" data-to="3">
                  0
                </span>
                <span className="u">×</span>
              </div>
              <div className="statl">faster time-to-hire</div>
            </div>
            <div className="stat">
              <div className="statn">
                <span className="v" data-to="40">
                  0
                </span>
                <span className="u">%</span>
              </div>
              <div className="statl">lower 90-day attrition</div>
            </div>
          </div>
        </div>
      </section>

      <section className="rtsec rtsand">
        <div className="rtw">
          <div className="rt-shead reveal">
            <p className="eyebrow">
              Integrations<b>.</b>
            </p>
            <h2 className="rt-h2">Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="rt-lead">
              Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.
            </p>
          </div>
          <div className="rt-ats reveal">
            {ATS.map((a) => (
              <div className="rt-atst" key={a.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt={a.alt} />
              </div>
            ))}
          </div>
          <div className="rt-atsmore reveal">
            <Link href="/integrations">
              View all ATS integration
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections."
      />
      <Testimonials eyebrow="Testimonials" heading="What our customers are saying about Testlify" />
      <Recognition bg="#fff" />

      <section className="rtsec rtsand">
        <div className="rtw">
          <div className="rt-shead reveal">
            <p className="eyebrow">
              FAQ<b>.</b>
            </p>
            <h2 className="rt-h2">Frequently asked questions (FAQs)</h2>
            <p className="rt-lead">
              Here are answers to the most commonly asked questions about Testlify&apos;s logistics and supply chain skill tests.
            </p>
          </div>
          <div className="rt-faqw">
            {FAQS.map((f, i) => (
              <div className={`rt-faq reveal ${open[i] ? 'rt-open' : ''}`} key={i} onClick={() => toggleFaq(i)}>
                <div className="rt-faqq">
                  {f.q}
                  <span className="rt-faqx">+</span>
                </div>
                <div className="rt-faqa">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
