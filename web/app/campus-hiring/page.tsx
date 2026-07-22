"use client";

import { useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import SecuritySection from "@/components/SecuritySection";
import Testimonials from "@/components/Testimonials";
import Recognition from "@/components/Recognition";
import CtaBand from "@/components/CtaBand";

const css = `
body{margin:0;font-family:'Poppins',sans-serif;color:#1A1014;background:#fff;}
.tsdw{max-width:1240px;margin:0 auto;padding:0 28px;}
.tsd-sec{padding:96px 0;}
.tsd-sand{background:#FBF3EE;}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0;}.eyebrow b{color:#F23F44;}
.tsd-h1{font-size:52px;font-weight:800;letter-spacing:-1.4px;line-height:1.08;margin:16px 0 0;}.tsd-h1 .tac{color:#F23F44;}
.tsd-h2{font-size:34px;font-weight:800;letter-spacing:-.8px;line-height:1.16;margin:14px 0 0;}
.tsd-lead{font-size:17.5px;line-height:1.6;color:#5A4B4E;margin:20px 0 0;}
.tsd-p{font-size:15.5px;line-height:1.64;color:#5A4B4E;margin:14px 0 0;}
.tsd-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;margin-bottom:18px;}.tsd-crumb a{color:#8A7A7D;text-decoration:none;}.tsd-crumb a:hover{color:#F23F44;}
.tsd-hero{padding:74px 0 96px;background:linear-gradient(180deg,#FFF8F7 0%,#fff 82%);}
.tsd-hgrid{display:grid;grid-template-columns:1.04fr .96fr;gap:60px;align-items:center;}
.tsd-ticks{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;}
.tsd-tick{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.tsd-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px;}
.tsd-stats{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px;}
.tsd-statc{background:#fff;border:1px solid #F0E2E3;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;color:#1A1014;box-shadow:0 8px 18px rgba(110,11,14,.06);}
.tsd-shot{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:0;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;}
.tsd-shot image-slot{display:block;width:100%;height:360px;border-radius:14px;overflow:hidden;}
.tsd-shotimg{display:block;width:100%;height:360px;background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#fff;border-radius:14px;}
.tsd-logos{margin-top:40px;}
/* animated IT hero graphic */
.ithero-wrap{position:relative;}
.ithero-card{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;animation:itfloat 6s ease-in-out infinite;}
@keyframes itfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.ithero-top{display:flex;align-items:center;gap:7px;padding:14px 18px;border-bottom:1px solid #F4E9E9;background:#FCF6F5;}
.ithero-dot{width:11px;height:11px;border-radius:50%;}.ithero-dot.r{background:#FF5F57;}.ithero-dot.y{background:#FEBC2E;}.ithero-dot.g{background:#28C840;}
.ithero-file{font-size:12.5px;color:#8A7A7D;font-weight:600;margin-left:8px;}
.ithero-live{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;}
.ithero-code{padding:18px 20px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px;line-height:1.9;background:#1A1014;}
.ithero-code .cl{color:#E8D6D8;white-space:pre;}
.ithero-code .ln{display:inline-block;width:20px;color:#6B565A;}
.ithero-code .kw{color:#F76A6E;}.ithero-code .fn{color:#7FC7FF;}.ithero-code .nm{color:#F7B955;}
.ithero-cursor{display:inline-block;width:7px;height:14px;background:#F23F44;margin-left:2px;vertical-align:middle;animation:itblink 1s step-end infinite;}
@keyframes itblink{0%,100%{opacity:1}50%{opacity:0}}
.ithero-scores{padding:18px 20px 22px;display:flex;flex-direction:column;gap:13px;}
.ithero-scr{display:flex;align-items:center;gap:12px;}
.ithero-scl{font-size:12.5px;font-weight:600;color:#46383C;width:104px;flex:none;}
.ithero-scbar{flex:1;height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.ithero-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:0;animation:itfill 1.5s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes itfill{to{width:var(--w);}}
.ithero-scv{font-size:13px;font-weight:800;color:#F23F44;width:26px;text-align:right;flex:none;}
.ithero-badge{position:absolute;display:inline-flex;align-items:center;gap:7px;background:#fff;border:1px solid #F0E2E3;border-radius:12px;padding:9px 14px;font-size:12.5px;font-weight:700;color:#1A1014;box-shadow:0 14px 30px rgba(110,11,14,.14);}
.ithero-badge svg{color:#1FA463;}
.ithero-badge.b1{top:26px;right:-14px;animation:itfloat 5s ease-in-out infinite;}
.ithero-badge.b2{bottom:-20px;right:36px;animation:itfloat 5.6s ease-in-out .4s infinite;}
.rt-cand{display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid #F4E9E9;}
.rt-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#FF7A52,#F23F44);color:#fff;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;flex:none;}
.rt-ci{display:flex;flex-direction:column;}
.rt-nm{font-size:15px;font-weight:700;color:#1A1014;}
.rt-role{font-size:12.5px;color:#8A7A7D;font-weight:500;}
.rt-fit{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:5px 11px;border-radius:100px;}
/* real-logo ATS grid */
.itats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.itats-tile{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;}
.itats-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.itats-tile img{max-width:100%;max-height:38px;object-fit:contain;}
.itats-more{text-align:center;margin-top:34px;}
.itats-more a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;text-decoration:none;}
.tsm-sec{background:#FBF3EE!important;}
@media(max-width:960px){.ithero-badge.b1{right:6px;}.ithero-badge.b2{right:6px;left:auto;}.itats-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:560px){.itats-grid{grid-template-columns:repeat(2,1fr);}}
.tsd-trust{padding:40px 0 56px;}
.tsd-trust-l{text-align:center;font-size:13.5px;font-weight:600;letter-spacing:1.5px;color:#A9999C;text-transform:uppercase;margin:0 0 30px;}
.tsd-trust-l strong{color:#F23F44;font-weight:800;}
.tsd-marq-wrap{position:relative;max-width:1100px;margin:0 auto;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);}
.tsd-marq{display:flex;width:max-content;gap:64px;animation:marquee 30s linear infinite;align-items:center;}
.tsd-marq-i{font-size:24px;font-weight:700;color:#C9B9BC;letter-spacing:-.5px;white-space:nowrap;}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.tsd-grid2{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
.tsd-solo{display:block;max-width:860px;}
.tsd-midcta{position:relative;background:#1A1014;color:#fff;padding:78px 28px;text-align:center;overflow:hidden;}
.tsd-midcta .tsd-h2{margin:0 auto;color:#fff;max-width:760px;position:relative;z-index:1;}
.tsd-midcta .tsd-p{margin:16px auto 0;max-width:640px;color:rgba(255,255,255,.92);position:relative;z-index:1;}
.tsd-midcta .tsd-ctas{justify-content:center;margin-top:30px;position:relative;z-index:1;}
.tsd-midcta-bg{position:absolute;inset:0;pointer-events:none;overflow:hidden;}
.tsd-secflush{padding:0!important;}
.tsd-flip .tsd-copy{order:2;}.tsd-flip .tsd-media{order:1;}
.tsd-num{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#FCE0DE;color:#A91E23;font-size:13px;font-weight:800;margin-bottom:12px;}
.tsd-bl{display:grid;grid-template-columns:1fr 1fr;gap:12px 24px;margin-top:22px;}
.tsd-bl1{grid-template-columns:1fr;}
.tsd-bi{display:flex;gap:10px;align-items:flex-start;}
.tsd-bi svg{flex:none;margin-top:2px;color:#1FA463;}
.tsd-bt{font-size:14.5px;font-weight:600;color:#1A1014;display:block;}
.tsd-bt a{color:#1A1014;text-decoration:none;border-bottom:1.5px solid #FCE0DE;}.tsd-bt a:hover{color:#F23F44;}
.tsd-bd{display:block;font-size:13px;line-height:1.5;color:#8A7A7D;margin-top:2px;font-weight:400;}
.tsd-link{display:inline-flex;align-items:center;gap:7px;margin-top:24px;font-size:15px;font-weight:700;color:#F23F44;text-decoration:none;}.tsd-link:hover{color:#A91E23;}
.tsd-shead{text-align:center;max-width:720px;margin:0 auto;}
.tsd-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:46px;}
.tsd-card{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tsd-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tsd-ic{width:44px;height:44px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.tsd-ct{font-size:17px;font-weight:700;margin:0;}
.tsd-cd{font-size:14px;line-height:1.6;color:#6C5A5D;margin:8px 0 0;}
.tsd-fgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.tsd-fcard{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:26px 24px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tsd-fcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tsd-fn{width:32px;height:32px;border-radius:9px;background:#1A1014;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;margin-bottom:14px;}
.tsd-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:46px;}
.tsd-step{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:26px 22px;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.tsd-sn{width:34px;height:34px;border-radius:50%;background:#F23F44;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;margin-bottom:14px;}
.tsd-chips{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px;}
.tsd-chip{background:#fff;border:1px solid #EADDDE;border-radius:999px;padding:9px 18px;font-size:13.5px;font-weight:600;color:#5A4B4E;}
.tsd-trust{border-top:1px solid #F0E2E3;border-bottom:1px solid #F0E2E3;padding:40px 0;background:#fff;}
.tsd-trow{display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;}
.tsd-badges{display:flex;gap:10px;flex-wrap:wrap;}
.tsd-badge{border:1.5px solid #1A1014;border-radius:999px;padding:7px 15px;font-size:12px;font-weight:700;letter-spacing:.03em;color:#1A1014;}
.tsd-g2{display:flex;align-items:center;gap:12px;}
.tsd-g2n{font-size:34px;font-weight:800;color:#F23F44;letter-spacing:-1px;}
.tsd-g2l{font-size:13px;font-weight:600;color:#6C5A5D;line-height:1.4;}
.tsd-faqw{max-width:820px;margin:44px auto 0;}
.tsd-faq{border-bottom:1px solid #F0E2E3;padding:22px 2px;cursor:pointer;}
.tsd-faqq{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:16.5px;font-weight:700;color:#1A1014;}
.tsd-faqx{width:28px;height:28px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex:none;transition:transform .25s;}
.tsd-faqa{display:none;font-size:15px;line-height:1.64;color:#5A4B4E;margin-top:12px;max-width:720px;}
.tsd-open .tsd-faqa{display:block;}
.tsd-open .tsd-faqx{transform:rotate(45deg);}
.tsd-cta{background:#1A1014;color:#fff;padding:100px 0;text-align:center;}
.tsd-cta .tsd-h2{color:#fff;font-size:42px;}
.tsd-cta .tsd-lead{color:#C9B9BC;max-width:640px;margin:20px auto 0;}
.tsd-cta .tsd-tick{color:#C9B9BC;}
.tsd-cta .tsd-ctas{justify-content:center;margin-top:30px;}
.tsd-cta .tsd-ticks{justify-content:center;margin-top:26px;}
.tsd-tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:46px;}
.tsd-tcard{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.10);display:flex;flex-direction:column;}
.tsd-stars{display:flex;gap:3px;color:#F23F44;margin-bottom:14px;}
.tsd-quote{font-size:15.5px;line-height:1.6;color:#3A2C30;margin:0 0 20px;}
.tsd-author{display:flex;align-items:center;gap:12px;margin-top:auto;}
.tsd-avatar{width:42px;height:42px;border-radius:50%;background:#FCE0DE;color:#A91E23;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;flex:none;}
.tsd-aname{font-size:14.5px;font-weight:700;color:#1A1014;display:block;}
.tsd-arole{font-size:12.5px;color:#8A7A7D;display:block;}
.tsd-atsgrid{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:40px;}
.tsd-atslogo{background:#fff;border:1px solid #F0E2E3;border-radius:12px;padding:14px 22px;font-size:15px;font-weight:700;color:#6C5A5D;box-shadow:0 8px 18px rgba(110,11,14,.06);}
.tsd-atsmore{background:#FFF0EF;border:1px solid #FCE0DE;color:#F23F44;border-radius:12px;padding:14px 22px;font-size:15px;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:6px;}.tsd-atsmore:hover{background:#FCE0DE;}
.tsd-awgrid{display:flex;gap:16px;flex-wrap:wrap;justify-content:center;margin-top:40px;}
.tsd-award{display:flex;flex-direction:column;align-items:center;gap:10px;background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:22px 26px;min-width:150px;box-shadow:0 12px 26px rgba(110,11,14,.08);}
.tsd-awic{width:44px;height:44px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.tsd-awt{font-size:13.5px;font-weight:700;color:#1A1014;text-align:center;}
.tsd-aws{font-size:11.5px;color:#8A7A7D;}
.reveal{opacity:0;transform:translateY(26px);}
.reveal.in{opacity:1;transform:none;}
@media(max-width:960px){.tsd-hgrid,.tsd-grid2{grid-template-columns:1fr;gap:40px;}.tsd-flip .tsd-copy{order:1;}.tsd-flip .tsd-media{order:2;}.tsd-cards,.tsd-fgrid,.tsd-tgrid{grid-template-columns:1fr;}.tsd-steps{grid-template-columns:1fr 1fr;}.tsd-h1{font-size:38px;}.tsd-h2{font-size:27px;}.tsd-sec{padding:64px 0;}.tsd-bl{grid-template-columns:1fr;}.tsd-shot image-slot{height:280px;}.tsd-shotimg{height:280px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const cards = [
  { title: "Unlimited users", iconD: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", desc: "Testlify allows for unlimited users, which is especially helpful for campus hiring, as there may be a large number of candidates to assess." },
  { title: "Multiple formats", iconD: "M4 5h16v10H4zM2 19h20M9 9l2 2 4-4", desc: "Testlify offers various assessment formats, including multiple-choice questions, coding assessments, and video-based assessments." },
  { title: "Comprehensive test library", iconD: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z", desc: "Testlify has an extensive test library that covers a wide range of topics and skills, including aptitude, technical skills, language proficiency, and personality traits." },
  { title: "Difficulty level", iconD: "M12 20V10M18 20V4M6 20v-4", desc: "Testlify's assessments come with varying levels of difficulty, allowing recruiters to evaluate candidates at different proficiency levels." },
  { title: "Objective test administration", iconD: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", desc: "Testlify's assessments are administered objectively, ensuring that all candidates are assessed under the same conditions." },
  { title: "Reports and insights", iconD: "M9 17v-6M12 17V7M15 17v-4M21 21H5a2 2 0 0 1-2-2V3", desc: "Testlify provides detailed reports and insights on candidates' performance, which help recruiters make informed decisions." },
];

const faqs = [
  { q: "Can Testlify be used for campus hiring?", a: "Yes, Testlify is highly beneficial for campus hiring, as it offers varying difficulty levels, a comprehensive test library, objective test administration, and detailed reports." },
  { q: "How does Testlify ensure fairness in the assessment process?", a: "Testlify's assessments are administered objectively, ensuring to eliminate any potential biases in the assessment process." },
  { q: "Why should businesses use our campus hiring platform?", a: "Businesses should use our campus hiring platform because it offers a streamlined and objective evaluation process to find highly skilled candidates efficiently." },
  { q: "What kind of assessments does your platform offer for campus hiring?", a: "Our platform offers a diverse test library covering various skills essential to campus recruitment, including aptitude tests, case studies, and customized assessments." },
  { q: "How does your platform help businesses find the right talent from campuses?", a: "Our platform helps businesses find the right talent from campuses through objective, skills-based assessments that quickly surface the most capable candidates for every role." },
];

export default function CampusHiringPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      <section className="tsd-hero" data-screen-label="Hero"><div className="tsdw tsd-hgrid">
        <div className="tsd-copy reveal">
          <div className="tsd-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Use case / Campus hiring</span></div>
          <p className="eyebrow">For campus hiring<b>.</b></p>
          <h1 className="tsd-h1"><span className="tac">Campus hiring</span> made easy with our platform</h1>
          <p className="tsd-lead">Are you a company looking to hire the best talent from universities and colleges? Look no further than our campus hiring platform! We understand the challenges of finding and recruiting top talent from campuses, which is why we offer a platform that streamlines the campus hiring process for businesses.</p>
          <div className="tsd-stats">
            <span className="tsd-statc">3,500+ validated tests</span>
            <span className="tsd-statc">Unlimited users</span>
            <span className="tsd-statc">Aptitude &amp; role tests</span>
          </div>
          <div className="tsd-ctas">
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
          </div>
          <div className="tsd-ticks"><span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card required</span><span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>7-day free trial</span></div>
        </div>
        <div className="tsd-media"><div className="ithero-wrap">
          <div className="ithero-card">
            <div className="ithero-top"><span className="ithero-dot r"></span><span className="ithero-dot y"></span><span className="ithero-dot g"></span><span className="ithero-file">candidate-report</span><span className="ithero-live">Match 91%</span></div>
            <div className="rt-cand"><span className="rt-av">PS</span><div className="rt-ci"><span className="rt-nm">Priya Sharma</span><span className="rt-role">Graduate Trainee · Campus</span></div><span className="rt-fit">High potential</span></div>
            <div className="ithero-scores">
              <div className="ithero-scr"><span className="ithero-scl">Aptitude</span><span className="ithero-scbar"><i style={{ ["--w" as string]: "92%", animationDelay: ".15s" }}></i></span><span className="ithero-scv">92</span></div>
              <div className="ithero-scr"><span className="ithero-scl">Communication</span><span className="ithero-scbar"><i style={{ ["--w" as string]: "88%", animationDelay: ".3s" }}></i></span><span className="ithero-scv">88</span></div>
              <div className="ithero-scr"><span className="ithero-scl">Learning agility</span><span className="ithero-scbar"><i style={{ ["--w" as string]: "85%", animationDelay: ".45s" }}></i></span><span className="ithero-scv">85</span></div>
              <div className="ithero-scr"><span className="ithero-scl">Problem solving</span><span className="ithero-scbar"><i style={{ ["--w" as string]: "82%", animationDelay: ".6s" }}></i></span><span className="ithero-scv">82</span></div>
            </div>
          </div>
          <div className="ithero-badge b1"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Job-ready</div>
          <div className="ithero-badge b2"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>AI-scored</div>
        </div></div>
      </div></section>

      {/* Section 0 — split, sand, shotBg #F3F6F9 */}
      <section className="tsd-sec tsd-sand"><div className="tsdw">
        <div className="tsd-grid2">
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">Make hiring structured</h2>
            <p className="tsd-p">A structured recruitment process is essential for ensuring the hiring process is efficient, effective, and objective. With Testlify&apos;s pre-hiring assessments, recruiters can standardize the recruitment process, making it more structured and objective.</p>
            <p className="tsd-p">These assessments evaluate candidates based on a predetermined set of criteria, providing recruiters with objective and consistent results. This helps recruiters to compare candidates more objectively and make more informed hiring decisions. Additionally, a structured recruitment process improves the candidate experience, giving candidates a fair chance to showcase their skills and abilities.</p>
          </div>
          <div className="tsd-media reveal"><div className="tsd-shot" style={{ background: "#F3F6F9" }}><div className="tsd-shotimg" style={{ backgroundColor: "#F3F6F9", backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/10/Make-hiring-structured.png")' }}></div></div></div>
        </div>
      </div></section>

      {/* Section 1 — split flip, white, shotBg #FFF */}
      <section className="tsd-sec"><div className="tsdw">
        <div className="tsd-grid2 tsd-flip">
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">Find the right talent in competition</h2>
            <p className="tsd-p">In today&apos;s highly competitive job market, finding the right talent can be a daunting task for recruiters. The traditional recruitment process can be time-consuming and inefficient, making it challenging to find the right candidate in a pool of many applicants. Testlify&apos;s pre-hiring assessments help to identify the right talent quickly and efficiently.</p>
            <p className="tsd-p">These assessments are designed to evaluate candidates&apos; skills, knowledge, and expertise, giving recruiters a clear insight into the candidates&apos; abilities. This enables recruiters to select the right talent in a highly competitive job market and ensures the success of their recruitment efforts.</p>
          </div>
          <div className="tsd-media reveal"><div className="tsd-shot" style={{ background: "#FFF" }}><div className="tsd-shotimg" style={{ backgroundColor: "#FFF", backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/10/Find-the-right-talent-in-competition.png")' }}></div></div></div>
        </div>
      </div></section>

      {/* Section 2 — split, sand, shotBg #F3F6F9 */}
      <section className="tsd-sec tsd-sand"><div className="tsdw">
        <div className="tsd-grid2">
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">Reduce turnover rates</h2>
            <p className="tsd-p">One of the biggest challenges faced by companies during the recruitment process is hiring the right candidate. High employee turnover rates can be costly and disruptive for businesses. However, with Testlify, pre-hiring assessments can help reduce turnover rates by evaluating candidates&apos; skills and abilities accurately.</p>
            <p className="tsd-p">These assessments can predict the candidates&apos; job performance, giving recruiters the chance to choose the best-suited candidate for the role. By using Testlify&apos;s pre-hiring assessments, recruiters can avoid hiring the wrong candidate and significantly reduce turnover rates.</p>
          </div>
          <div className="tsd-media reveal"><div className="tsd-shot" style={{ background: "#F3F6F9" }}><div className="tsd-shotimg" style={{ backgroundColor: "#F3F6F9", backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/10/Reduce-turnover-rates.png")' }}></div></div></div>
        </div>
      </div></section>

      {/* Section 3 — midcta, dark */}
      <section className="tsd-midsec"><div className="tsd-midcta reveal">
        <div className="tsd-midcta-bg"><svg width="100%" height="100%" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1060" cy="70" r="150" stroke="rgba(255,255,255,.16)" strokeWidth="2" /><circle cx="1060" cy="70" r="96" stroke="rgba(255,255,255,.14)" strokeWidth="2" /><circle cx="1060" cy="70" r="46" stroke="rgba(255,255,255,.12)" strokeWidth="2" /><g fill="rgba(255,255,255,.18)"><circle cx="70" cy="250" r="4" /><circle cx="110" cy="250" r="4" /><circle cx="150" cy="250" r="4" /><circle cx="70" cy="288" r="4" /><circle cx="110" cy="288" r="4" /><circle cx="150" cy="288" r="4" /><circle cx="70" cy="212" r="4" /><circle cx="110" cy="212" r="4" /><circle cx="150" cy="212" r="4" /></g></svg></div>
        <h2 className="tsd-h2">How to get started with campus hiring?</h2>
        <p className="tsd-p">Getting started with campus hiring is easy. First, create an account on our platform, select the criteria that match your hiring needs, and begin evaluating candidates&apos; skills and aptitude. Our platform is designed to simplify the hiring process and help businesses find the best-suited candidates from campuses.</p>
        <div className="tsd-ctas"><CtaButton label="Book a demo" href="/contact" variant="light" size="md" icon="arrow" /></div>
      </div></section>

      {/* Section 4 — split flip, sand, shotBg #F3F6F9 */}
      <section className="tsd-sec tsd-sand"><div className="tsdw">
        <div className="tsd-grid2 tsd-flip">
          <div className="tsd-copy reveal">
            <h2 className="tsd-h2">Customized campus hiring</h2>
            <p className="tsd-p">Our talent assessment platform offers customization options that enable companies to tailor their campus hiring process to meet their specific needs. We provide companies with the flexibility to design their campus recruitment program, including scheduling campus visits, conducting pre-placement talks, and selecting specific assessment modules. This customization allows businesses to create a more engaging and personalized campus hiring experience for candidates and helps to improve candidate engagement and retention.</p>
          </div>
          <div className="tsd-media reveal"><div className="tsd-shot" style={{ background: "#F3F6F9" }}><div className="tsd-shotimg" style={{ backgroundColor: "#F3F6F9", backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/10/Customized-campus-hiring.png")' }}></div></div></div>
        </div>
      </div></section>

      {/* Section 5 — cards, white */}
      <section className="tsd-sec"><div className="tsdw">
        <div className="tsd-shead reveal"><p className="eyebrow">Why Testlify<b>.</b></p><h2 className="tsd-h2">Why use our campus hiring platform?</h2><p className="tsd-lead">Our campus hiring platform is tailored to meet the specific needs of businesses looking to hire the best talent from universities and colleges. Our talent assessment tool offers a variety of features that are beneficial for campus hiring. Here are some of the most helpful features that Testlify provides:</p></div>
        <div className="tsd-cards">
          {cards.map((c, i) => (
            <div className="tsd-card reveal" key={i}>
              <div className="tsd-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c.iconD}></path></svg></div>
              <p className="tsd-ct">{c.title}</p>
              <p className="tsd-cd">{c.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="tsd-sec tsd-sand"><div className="tsdw">
        <div className="tsd-shead reveal"><p className="eyebrow">Integrations<b>.</b></p><h2 className="tsd-h2">Testlify integrates seamlessly with 100+ ATS tools</h2><p className="tsd-lead">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p></div>
        <div className="itats-grid reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png" alt="SAP SuccessFactors" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png" alt="Lever" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png" alt="Recruitee" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG Pro Recruiting" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="itats-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png" alt="JazzHR" /></div>
        </div>
        <div className="itats-more reveal"><Link href="/integrations">View all ATS integrations{arrow}</Link></div>
      </div></section>

      <SecuritySection eyebrow="Security" heading="Built to keep your organization secure" sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections." />

      <Testimonials eyebrow="Testimonials" heading="What our customers are saying about Testlify" />

      <Recognition bg="#fff" />

      <section className="tsd-sec tsd-sand"><div className="tsdw">
        <div className="tsd-shead reveal"><p className="eyebrow">FAQ<b>.</b></p><h2 className="tsd-h2">Frequently asked questions (FAQs)</h2></div>
        <div className="tsd-faqw">
          {faqs.map((f, i) => (
            <div className={"tsd-faq reveal" + (open[i] ? " tsd-open" : "")} key={i} onClick={() => toggle(i)}>
              <div className="tsd-faqq">{f.q}<span className="tsd-faqx">+</span></div>
              <div className="tsd-faqa">{f.a}</div>
            </div>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
