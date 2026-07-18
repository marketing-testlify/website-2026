'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
body{margin:0;font-family:'Poppins',sans-serif;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}a:hover{color:#F23F44;}
::selection{background:#F23F44;color:#fff;}
.rcw{max-width:1240px;margin:0 auto;padding:0 28px;}
.rc-sec{padding:96px 0;}
.rc-sand{background:#FBF3EE;}
.rc-dark{background:#1A1014;color:#fff;}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0;}.eyebrow b{color:#F23F44;}
.rc-h1{font-size:52px;font-weight:800;letter-spacing:-1.6px;line-height:1.08;margin:16px 0 0;}
.rc-acc{color:#F23F44;}
.rc-h2{font-size:34px;font-weight:800;letter-spacing:-.9px;line-height:1.16;margin:0;}
.rc-lead{font-size:17.5px;line-height:1.6;color:#5A4B4E;margin:20px 0 0;}
.rc-shead{text-align:center;max-width:760px;margin:0 auto 52px;}
.rc-shead .rc-lead{margin-top:16px;}
/* hero */
.rc-hero{padding:74px 0 92px;background:radial-gradient(1100px 520px at 82% 4%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;}
.rc-hgrid{display:grid;grid-template-columns:1.02fr 1.02fr;gap:56px;align-items:center;}
.rc-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px;}
.rc-hstats{display:flex;align-items:center;gap:18px;flex-wrap:nowrap;margin-top:28px;}
.rc-hstat{display:inline-flex;align-items:center;gap:7px;font-size:14px;color:#8A7A7D;font-weight:500;white-space:nowrap;}
.rc-hstat i{color:#F23F44;font-weight:700;font-size:15px;font-style:normal;}
.rc-hstat b{color:#1A1014;font-weight:800;}
.rc-hdiv{width:1px;height:16px;background:#E8D8DA;}
/* hero compare card */
.rc-compare{display:grid;grid-template-columns:1fr auto 1.12fr;gap:0;align-items:stretch;background:#fff;border:1px solid #F0E2E3;border-radius:22px;box-shadow:0 40px 90px rgba(110,11,14,.15);overflow:hidden;}
.rc-cbefore{padding:20px 18px;background:#FCF8F7;}
.rc-cafter{padding:20px 18px;border-left:1px solid #F4E9E9;}
.rc-clabel{font-size:11.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#A9999C;margin-bottom:14px;}
.rc-clabel.on{color:#1FA463;}
.rc-cvrow{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px dashed #EFE1E2;}
.rc-cvrow:last-of-type{border-bottom:none;}
.rc-cvic{width:30px;height:30px;border-radius:7px;background:#F1E2E2;color:#8A7A7D;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex:none;}
.rc-cvnm{font-size:13px;font-weight:700;color:#1A1014;display:block;line-height:1.3;}
.rc-cvm{font-size:11px;color:#8A7A7D;display:block;line-height:1.3;}
.rc-cvtag{margin-left:auto;font-size:10.5px;font-weight:700;color:#B98A2E;background:#FBF0DC;padding:3px 9px;border-radius:99px;flex:none;}
.rc-cdiv{display:flex;align-items:center;justify-content:center;width:44px;background:#FCF8F7;color:#C9B9BC;font-size:20px;font-weight:800;}
.rc-rankrow{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #F4ECEC;}
.rc-av{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#FF7A52,#F23F44);color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex:none;}
.rc-av.b{background:linear-gradient(135deg,#6E62F2,#9A8BFF);}.rc-av.c{background:linear-gradient(135deg,#2AA6F2,#67C9FF);}
.rc-score{margin-left:auto;font-size:14px;font-weight:800;color:#1A1014;flex:none;font-variant-numeric:tabular-nums;}
.rc-pick{font-size:10px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:3px 8px;border-radius:99px;flex:none;}
.rc-cready{margin-top:14px;font-size:12.5px;font-weight:700;color:#1FA463;text-align:center;}
/* trust marquee */
.rc-trust{padding:44px 0 58px;}
.rc-trust-l{text-align:center;font-size:13px;font-weight:600;letter-spacing:1px;color:#A9999C;text-transform:uppercase;margin:0 0 28px;}
.rc-trust-l strong{color:#F23F44;font-weight:800;}
.rc-marqw{position:relative;max-width:1100px;margin:0 auto;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);}
.rc-marq{display:flex;width:max-content;gap:60px;animation:rcmarq 32s linear infinite;align-items:center;}
.rc-marq-i{font-size:23px;font-weight:700;color:#C9B9BC;letter-spacing:-.5px;white-space:nowrap;}
@keyframes rcmarq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
/* stat band */
.rc-statband{display:grid;grid-template-columns:repeat(3,1fr);}
.rc-statband.four{grid-template-columns:repeat(4,1fr);}
.rc-stat{text-align:center;padding:6px 26px;}
.rc-stat + .rc-stat{border-left:1px solid #EFE3E4;}
.rc-statn{font-size:44px;font-weight:800;letter-spacing:-1.6px;line-height:1;color:#F23F44;font-variant-numeric:tabular-nums;}
.rc-statn.ink{font-size:34px;color:#1A1014;font-weight:700;letter-spacing:-1px;}
.rc-statn .u{color:#D98C8F;font-weight:600;}
.rc-statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:12px;line-height:1.45;}
/* problem vs */
.rc-phead{max-width:820px;margin:0 auto 48px;text-align:center;}
.rc-vs{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
.rc-vscol{border-radius:24px;padding:36px 32px;}
.rc-bad{background:transparent;border:1px solid transparent;}
.rc-good{position:relative;background:linear-gradient(160deg,#FFF0F0,#FFF8F6);border:1.5px solid #F7B4B6;box-shadow:0 24px 50px rgba(242,63,68,.18),0 0 0 4px rgba(242,63,68,.06);}
.rc-vshead{display:flex;align-items:center;gap:12px;margin-bottom:22px;}
.rc-vsicon{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex:none;}
.rc-vstag{font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;}
.rc-vsi{display:flex;gap:13px;align-items:flex-start;font-size:15.5px;line-height:1.45;padding:13px 0;border-top:1px solid #F1E2E3;color:#46383C;}
.rc-vsi:first-of-type{border-top:0;}
.rc-vsmark{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;flex:none;margin-top:1px;}
/* use-case cards */
.rc-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.rc-card{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:30px 28px;box-shadow:0 16px 30px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.rc-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 22px 44px rgba(110,11,14,.12);}
.rc-cic2{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.rc-ct{font-size:18px;font-weight:700;margin:0 0 8px;letter-spacing:-.3px;}
.rc-cd{font-size:14px;line-height:1.6;color:#6C5A5D;margin:0 0 16px;}
.rc-cbul{display:flex;flex-direction:column;gap:9px;border-top:1px solid #F4ECEC;padding-top:16px;}
.rc-cbi{display:flex;gap:9px;align-items:flex-start;font-size:13.5px;line-height:1.45;color:#46383C;}
.rc-cbi svg{flex:none;margin-top:2px;color:#1FA463;}
/* benefit rows */
.rc-brow{display:grid;grid-template-columns:1fr 1.06fr;gap:56px;align-items:center;margin-top:70px;}
.rc-brow:first-of-type{margin-top:52px;}
.rc-brow.flip .rc-bcopy{order:2;}
.rc-bh{font-size:26px;font-weight:800;letter-spacing:-.6px;line-height:1.2;margin:0;}
.rc-bbul{display:flex;flex-direction:column;gap:12px;margin-top:22px;}
.rc-bbi{display:flex;gap:11px;align-items:flex-start;font-size:15px;line-height:1.5;color:#46383C;font-weight:500;}
.rc-bbi svg{flex:none;margin-top:3px;color:#1FA463;}
/* mockups */
.rc-mock{background:#fff;border:1px solid #F0E2E3;border-radius:18px;box-shadow:0 30px 60px rgba(110,11,14,.12);overflow:hidden;}
.rc-mockhead{padding:14px 18px;border-bottom:1px solid #F4ECEC;background:#FCF8F7;font-size:12.5px;font-weight:700;color:#6C5A5D;display:flex;align-items:center;justify-content:space-between;}
.rc-mockhead .rc-mh-sort{color:#A9999C;font-weight:600;}
.rc-tbl{width:100%;border-collapse:collapse;}
.rc-tbl th{font-size:11px;font-weight:700;color:#A9999C;text-transform:uppercase;letter-spacing:.05em;text-align:left;padding:12px 18px 10px;}
.rc-tbl td{padding:12px 18px;border-top:1px solid #F4ECEC;font-size:13px;color:#46383C;}
.rc-tbl .rc-tav{display:flex;align-items:center;gap:10px;}
.rc-tnm{font-weight:700;color:#1A1014;display:block;line-height:1.3;}
.rc-tsub{font-size:11px;color:#A9999C;display:block;}
.rc-tsc{font-weight:800;color:#1A1014;}
.rc-pct{font-size:11px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:3px 8px;border-radius:99px;}
.rc-tact{font-size:12px;font-weight:700;color:#F23F44;}
.rc-tact.g{color:#8A7A7D;}
/* score breakdown mock */
.rc-brk{padding:22px 24px;}
.rc-brk-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;}
.rc-brk-t{font-size:14px;font-weight:700;color:#1A1014;}
.rc-brk-p{font-size:12px;color:#8A7A7D;font-weight:600;}
.rc-brk-big{font-size:44px;font-weight:800;letter-spacing:-1.5px;color:#F23F44;line-height:1;margin:2px 0 18px;}
.rc-scr{display:flex;align-items:center;gap:12px;margin-bottom:13px;}
.rc-scl{font-size:12.5px;font-weight:600;color:#46383C;width:150px;flex:none;}
.rc-scbar{flex:1;height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.rc-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:var(--w);}
.rc-scv{font-size:12.5px;font-weight:800;color:#1A1014;width:30px;text-align:right;flex:none;}
/* audit log mock */
.rc-audit{padding:20px 22px;}
.rc-abadges{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:16px;}
.rc-abadge{font-size:10.5px;font-weight:700;color:#1A6B44;background:#E8F6EE;border:1px solid #C7E9D5;padding:4px 10px;border-radius:99px;}
.rc-alog{display:flex;gap:12px;padding:12px 0;border-top:1px solid #F4ECEC;}
.rc-alog:first-of-type{border-top:none;}
.rc-adot{width:9px;height:9px;border-radius:50%;background:#1FA463;margin-top:5px;flex:none;}
.rc-at{font-size:13px;font-weight:700;color:#1A1014;display:block;line-height:1.35;}
.rc-as{font-size:11.5px;color:#8A7A7D;display:block;margin-top:1px;}
/* dark testimonial */
.rc-tquote{font-size:24px;line-height:1.5;font-weight:600;color:#fff;max-width:900px;margin:22px auto 0;text-align:center;}
.rc-tby{text-align:center;margin-top:24px;}
.rc-tby b{display:block;color:#fff;font-weight:700;font-size:15px;}
.rc-tby span{color:#A9999C;font-size:13.5px;}
.rc-tstats{display:grid;grid-template-columns:repeat(3,1fr);max-width:720px;margin:48px auto 0;}
.rc-tstat{text-align:center;padding:4px 22px;}
.rc-tstat + .rc-tstat{border-left:1px solid rgba(255,255,255,.14);}
.rc-tstatn{font-size:42px;font-weight:800;letter-spacing:-1.4px;line-height:1;color:#fff;font-variant-numeric:tabular-nums;}
.rc-tstatn .u{color:#FF9E7A;}
.rc-tstatl{font-size:13.5px;color:#C9B9BC;font-weight:500;margin-top:12px;line-height:1.45;}
/* integrations */
.rc-atsgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.rc-atst{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .25s,box-shadow .25s,border-color .25s;}
.rc-atst:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.rc-atst img{max-width:100%;max-height:38px;object-fit:contain;}
.rc-atsmore{text-align:center;margin-top:34px;}
.rc-atsmore a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;}
/* faq */
.rc-faqw{max-width:820px;margin:0 auto;}
.rc-faq{border-bottom:1px solid #F0E2E3;padding:22px 2px;cursor:pointer;}
.rc-faqq{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:16.5px;font-weight:700;color:#1A1014;}
.rc-faqx{width:28px;height:28px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex:none;transition:transform .25s;}
.rc-faqa{display:none;font-size:15px;line-height:1.64;color:#5A4B4E;margin-top:12px;max-width:730px;}
.rc-open .rc-faqa{display:block;}.rc-open .rc-faqx{transform:rotate(45deg);}
.reveal{opacity:0;transform:translateY(26px);}
.reveal.in{opacity:1;transform:none;}
@media(max-width:960px){
  .rc-hgrid,.rc-vs,.rc-cards,.rc-brow{grid-template-columns:1fr;gap:36px;}
  .rc-brow.flip .rc-bcopy{order:1;}
  .rc-h1{font-size:38px;letter-spacing:-1px;}
  .rc-h2{font-size:27px;}
  .rc-sec{padding:64px 0;}
  .rc-statband,.rc-statband.four{grid-template-columns:1fr 1fr;row-gap:34px;}
  .rc-stat:nth-child(odd){border-left:none;}
  .rc-tstats{grid-template-columns:1fr;row-gap:30px;}
  .rc-tstat + .rc-tstat{border-left:none;}
  .rc-atsgrid{grid-template-columns:repeat(3,1fr);}
}
@media(max-width:560px){.rc-atsgrid{grid-template-columns:repeat(2,1fr);}.rc-compare{grid-template-columns:1fr;}.rc-cdiv{width:auto;height:40px;}.rc-cafter{border-left:none;border-top:1px solid #F4E9E9;}}
h1,h2,h3,h4,.rc-h1,.rc-h2,.rc-bh,.rc-vsh,.eyebrow{text-wrap:balance;}p,li,.rc-lead,.rc-cd{text-wrap:pretty;}/*om-balance-rule*/
`;

const FAQS = [
  { q: 'What is a recruitment assessment tool?', a: "A recruitment assessment tool helps employers evaluate candidates' skills, aptitude, and job readiness before interviews. It provides objective data so you can identify the most qualified candidates faster and make more confident hiring decisions." },
  { q: 'How is a recruitment skills test different from a traditional interview?', a: 'A recruitment skills test measures what candidates can actually do, while interviews primarily assess communication and experience. Skills tests provide objective, comparable results, helping you shortlist candidates based on ability rather than impressions.' },
  { q: 'How quickly can I set up and send my first assessment?', a: "You can create and send your first assessment in minutes using Testlify's ready-made test library or customize one to match your hiring needs — no technical expertise required." },
  { q: 'Does Testlify integrate with Workday, Greenhouse, or iCIMS?', a: 'Yes. Testlify integrates with leading ATS platforms, including Workday, Greenhouse, iCIMS, Lever, SmartRecruiters, and many others, making it easy to fit into your existing hiring workflow.' },
  { q: 'Is the pre-employment testing legally defensible and bias-free?', a: 'Testlify is designed to support fair, skills-based hiring. Our assessments focus on job-relevant competencies, helping reduce unconscious bias and promote more consistent hiring decisions.' },
  { q: 'Can I use Testlify for high-volume recruitment?', a: 'Absolutely. Testlify is built to handle high-volume hiring, allowing you to assess thousands of candidates simultaneously while automatically ranking results to speed up screening.' },
  { q: 'What does a “good” score look like on a candidate’s assessment?', a: "There's no universal passing score. The right benchmark depends on the role, required skills, and your hiring criteria. Testlify helps you compare candidates and identify top performers based on your requirements." },
  { q: 'How much does Testlify cost? Is there a free plan?', a: 'Testlify offers flexible pricing for businesses of all sizes, along with a free trial so you can explore the platform before choosing a plan. Contact our team for custom enterprise pricing.' },
];

const CheckSm = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const CheckMd = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

export default function RecruitmentIndustryPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      <section className="rc-hero"><div className="rcw rc-hgrid">
        <div className="rc-copy">
          <p className="eyebrow reveal" style={{ transitionDelay: '.02s' }}>For recruitment teams<b>.</b></p>
          <h1 className="rc-h1 reveal" style={{ transitionDelay: '.08s' }}>Recruitment assessment tool that turns applicants into a <span className="rc-acc">ranked shortlist</span></h1>
          <p className="rc-lead reveal" style={{ transitionDelay: '.14s' }}>Every applicant gets tested. You get a ranked shortlist. Skip the CV pile and go straight to candidates who can prove they can do the job.</p>
          <div className="rc-ctas reveal" style={{ transitionDelay: '.2s' }}>
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
          </div>
          <div className="rc-hstats reveal" style={{ transitionDelay: '.26s' }}>
            <span className="rc-hstat"><i>✓</i><b>3,500+</b> ready-made tests</span>
            <span className="rc-hdiv" aria-hidden="true" />
            <span className="rc-hstat"><i>✓</i><b>4,500+</b> roles covered</span>
            <span className="rc-hdiv" aria-hidden="true" />
            <span className="rc-hstat"><i>✓</i><b>100+</b> ATS integrations</span>
          </div>
        </div>
        <div className="rc-media reveal">
          <div className="rc-compare">
            <div className="rc-cbefore">
              <div className="rc-clabel">Without Testlify</div>
              <div className="rc-cvrow"><span className="rc-cvic">CV</span><span><span className="rc-cvnm">Alex M.</span><span className="rc-cvm">3 yrs exp · BSc Comp Sci</span></span><span className="rc-cvtag">Maybe?</span></div>
              <div className="rc-cvrow"><span className="rc-cvic">CV</span><span><span className="rc-cvnm">Priya S.</span><span className="rc-cvm">5 yrs exp · Self-taught</span></span><span className="rc-cvtag">Maybe?</span></div>
              <div className="rc-cvrow"><span className="rc-cvic">CV</span><span><span className="rc-cvnm">Ravi K.</span><span className="rc-cvm">2 yrs exp · Top uni</span></span><span className="rc-cvtag">Maybe?</span></div>
            </div>
            <div className="rc-cdiv">→</div>
            <div className="rc-cafter">
              <div className="rc-clabel on">With Testlify — ranked by skills</div>
              <div className="rc-rankrow"><span className="rc-av">PS</span><span><span className="rc-cvnm">Priya S.</span><span className="rc-cvm">Frontend Engineer</span></span><span className="rc-score">94%</span><span className="rc-pick">Top pick</span></div>
              <div className="rc-rankrow"><span className="rc-av c">RK</span><span><span className="rc-cvnm">Ravi K.</span><span className="rc-cvm">Frontend Engineer</span></span><span className="rc-score">71%</span></div>
              <div className="rc-rankrow"><span className="rc-av b">AM</span><span><span className="rc-cvnm">Alex M.</span><span className="rc-cvm">Frontend Engineer</span></span><span className="rc-score">55%</span></div>
              <div className="rc-cready">↓ Shortlist ready in hours</div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rc-sec rc-sand" style={{ padding: '44px 0' }}><div className="rcw">
        <div className="rc-statband rc-cnt reveal">
          <div className="rc-stat"><div className="rc-statn ink">4.8<span className="u">/5</span></div><div className="rc-statl">G2 rating across 538 verified reviews</div></div>
          <div className="rc-stat"><div className="rc-statn ink">3,500<span className="u">+</span></div><div className="rc-statl">pre-built assessments for every role, ready to send</div></div>
          <div className="rc-stat"><div className="rc-statn ink">4,500<span className="u">+</span></div><div className="rc-statl">roles covered by our employment assessments library</div></div>
        </div>
      </div></section>

      <section className="rc-sec"><div className="rcw">
        <div className="rc-phead reveal">
          <p className="eyebrow">The screening tax<b>.</b></p>
          <h2 className="rc-h2" style={{ marginTop: '14px' }}>You&apos;re spending 60% of recruiter time on people you&apos;ll never hire</h2>
          <p className="rc-lead">CV screening, scheduling calls, interviewing candidates who sounded good on paper. It&apos;s the most expensive part of recruitment. Assessment tools for recruitment and selection eliminate it.</p>
        </div>
        <div className="rc-vs reveal">
          <div className="rc-vscol rc-bad">
            <div className="rc-vshead"><span className="rc-vsicon" style={{ background: '#F0E4E5', color: '#8A7A7D' }}>✕</span><span className="rc-vstag" style={{ color: '#8A7A7D' }}>Traditional candidate screening</span></div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#EADDDE', color: '#8A7A7D' }}>✕</span>Hundreds of CVs with no comparable signal on actual ability.</div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#EADDDE', color: '#8A7A7D' }}>✕</span>Strong candidates drop off while phone-screen scheduling drags for weeks.</div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#EADDDE', color: '#8A7A7D' }}>✕</span>Every recruiter and hiring manager runs a different gut-feel filter.</div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#EADDDE', color: '#8A7A7D' }}>✕</span>Interviews reward confident talkers, not proven performers.</div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#EADDDE', color: '#8A7A7D' }}>✕</span>Bad hires cost $15,000–$50,000 each by the time they&apos;re out the door.</div>
          </div>
          <div className="rc-vscol rc-good">
            <div className="rc-vshead"><span className="rc-vsicon" style={{ background: '#F23F44', color: '#fff' }}>✓</span><span className="rc-vstag" style={{ color: '#F23F44' }}>Skills-based hiring with Testlify</span></div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#F23F44', color: '#fff' }}>✓</span>Pre-employment skills tests rank every candidate on the same objective criteria.</div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#F23F44', color: '#fff' }}>✓</span>Auto-scored assessments turn a full inbox into a ranked shortlist in hours, not weeks.</div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#F23F44', color: '#fff' }}>✓</span>One consistent evaluation bar across every recruiter and every role.</div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#F23F44', color: '#fff' }}>✓</span>Competency-based scores surface real ability before the first interview call.</div>
            <div className="rc-vsi"><span className="rc-vsmark" style={{ background: '#F23F44', color: '#fff' }}>✓</span>Documented, defensible decisions you can stand behind with any stakeholder.</div>
          </div>
        </div>
      </div></section>

      <section className="rc-sec rc-sand"><div className="rcw">
        <div className="rc-shead reveal">
          <p className="eyebrow">Every workflow<b>.</b></p>
          <h2 className="rc-h2" style={{ marginTop: '14px' }}>Every recruiter uses it differently. The outcome is the same</h2>
          <p className="rc-lead">Whether you&apos;re drowning in applications, running a high-volume campaign, or defending every shortlist decision to a hiring manager — Testlify&apos;s recruitment assessment tool gives you objective data where you had gut feel.</p>
        </div>
        <div className="rc-cards reveal">
          <div className="rc-card">
            <div className="rc-cic2"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" /></svg></div>
            <p className="rc-ct">High-volume intake hiring</p>
            <p className="rc-cd">200 applicants for one role. You need 10 interviews by Friday. One assessment link, auto-scored overnight, ranked list in the morning.</p>
            <div className="rc-cbul">
              <div className="rc-cbi"><CheckSm />Send to all applicants in one click via your ATS</div>
              <div className="rc-cbi"><CheckSm />Ranked shortlist ready before your next standup</div>
              <div className="rc-cbi"><CheckSm />No manual sifting, no scheduling 40 phone screens</div>
            </div>
          </div>
          <div className="rc-card">
            <div className="rc-cic2"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
            <p className="rc-ct">Recruitment agencies &amp; RPO</p>
            <p className="rc-cd">Your clients measure you on shortlist quality and speed. Deliver skills-verified, scored candidate profiles — not CVs with a cover note.</p>
            <div className="rc-cbul">
              <div className="rc-cbi"><CheckSm />Pre-employment testing built into your delivery workflow</div>
              <div className="rc-cbi"><CheckSm />Reduce time-to-present without reducing quality</div>
              <div className="rc-cbi"><CheckSm />White-label the candidate assessment experience</div>
            </div>
          </div>
          <div className="rc-card">
            <div className="rc-cic2"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div>
            <p className="rc-ct">Lean TA teams &amp; growing companies</p>
            <p className="rc-cd">No dedicated HR team. One person making five hires this quarter. The online assessment tool that has you live in 10 minutes, free to start.</p>
            <div className="rc-cbul">
              <div className="rc-cbi"><CheckSm />Pick from 3,500+ pre-built employment assessments</div>
              <div className="rc-cbi"><CheckSm />Send a link — candidates complete on any device</div>
              <div className="rc-cbi"><CheckSm />Free plan available, no commitment to start</div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rc-sec"><div className="rcw">
        <div className="rc-shead reveal">
          <p className="eyebrow">Low drop-off<b>.</b></p>
          <h2 className="rc-h2" style={{ marginTop: '14px' }}>Short enough that candidates actually complete it</h2>
          <p className="rc-lead">The biggest fear with online assessment tools for recruitment is drop-off. Here&apos;s why it doesn&apos;t happen with Testlify.</p>
        </div>
        <div className="rc-statband four rc-cnt reveal">
          <div className="rc-stat"><div className="rc-statn ink">15<span className="u"> min</span></div><div className="rc-statl">Average time to complete a skills assessment test</div></div>
          <div className="rc-stat"><div className="rc-statn ink">78<span className="u">%</span></div><div className="rc-statl">Average candidate completion rate</div></div>
          <div className="rc-stat"><div className="rc-statn ink">Any device</div><div className="rc-statl">No app, no account — mobile or desktop</div></div>
          <div className="rc-stat"><div className="rc-statn ink">30<span className="u">+</span></div><div className="rc-statl">Multilingual: candidates assessed in their own language</div></div>
        </div>
      </div></section>

      <section className="rc-sec rc-sand"><div className="rcw">
        <div className="rc-shead reveal">
          <p className="eyebrow">What actually changes<b>.</b></p>
          <h2 className="rc-h2" style={{ marginTop: '14px' }}>Three things that get measurably better with the right recruitment assessment tool</h2>
          <p className="rc-lead">Not a product tour. A description of the three most expensive problems in your current recruitment process — and exactly what changes.</p>
        </div>

        <div className="rc-brow reveal">
          <div className="rc-bcopy">
            <h3 className="rc-bh">You open a ranked list of 10, not 200 unfiltered applications</h3>
            <div className="rc-bbul">
              <div className="rc-bbi"><CheckMd />Auto-scored the moment a candidate submits</div>
              <div className="rc-bbi"><CheckMd />Ranked by fit, not by who applied first</div>
              <div className="rc-bbi"><CheckMd />Top performers flagged automatically</div>
            </div>
          </div>
          <div className="rc-mock">
            <div className="rc-mockhead"><span>Senior Product Manager · 22 candidates</span><span className="rc-mh-sort">↓ Score</span></div>
            <table className="rc-tbl">
              <thead><tr><th>Candidate</th><th>Score</th><th>Percentile</th><th>Action</th></tr></thead>
              <tbody>
                <tr><td><div className="rc-tav"><span className="rc-av">PR</span><span><span className="rc-tnm">Priya Ramanathan</span><span className="rc-tsub">Completed 2h ago</span></span></div></td><td className="rc-tsc">94%</td><td><span className="rc-pct">Top 4%</span></td><td className="rc-tact">Shortlist</td></tr>
                <tr><td><div className="rc-tav"><span className="rc-av b">DL</span><span><span className="rc-tnm">David Lim</span><span className="rc-tsub">Completed 4h ago</span></span></div></td><td className="rc-tsc">87%</td><td><span className="rc-pct">Top 11%</span></td><td className="rc-tact g">Review</td></tr>
                <tr><td><div className="rc-tav"><span className="rc-av c">SK</span><span><span className="rc-tnm">Sara Kowalski</span><span className="rc-tsub">Completed 6h ago</span></span></div></td><td className="rc-tsc">79%</td><td><span className="rc-pct">Top 19%</span></td><td className="rc-tact g">Review</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rc-brow flip reveal">
          <div className="rc-bcopy">
            <h3 className="rc-bh">Every interview is with someone you already know can do the job</h3>
            <div className="rc-bbul">
              <div className="rc-bbi"><CheckMd />Per-skill breakdown visible before you call</div>
              <div className="rc-bbi"><CheckMd />AI-generated follow-up questions from their gaps</div>
              <div className="rc-bbi"><CheckMd />Candidate report ready for the debrief</div>
            </div>
          </div>
          <div className="rc-mock">
            <div className="rc-mockhead"><span>Priya Ramanathan · Result summary</span><span className="rc-mh-sort">Senior PM · Top 4%</span></div>
            <div className="rc-brk">
              <div className="rc-brk-top"><span className="rc-brk-t">Overall score</span><span className="rc-brk-p">across every skill the role needs</span></div>
              <div className="rc-brk-big">94%</div>
              <div className="rc-scr"><span className="rc-scl">Product thinking</span><span className="rc-scbar"><i style={{ ['--w' as string]: '96%' }} /></span><span className="rc-scv">96</span></div>
              <div className="rc-scr"><span className="rc-scl">Stakeholder management</span><span className="rc-scbar"><i style={{ ['--w' as string]: '91%' }} /></span><span className="rc-scv">91</span></div>
              <div className="rc-scr"><span className="rc-scl">Data analysis</span><span className="rc-scbar"><i style={{ ['--w' as string]: '72%' }} /></span><span className="rc-scv">72</span></div>
            </div>
          </div>
        </div>

        <div className="rc-brow reveal">
          <div className="rc-bcopy">
            <h3 className="rc-bh">Every rejection has a timestamped, auditable reason behind it</h3>
            <div className="rc-bbul">
              <div className="rc-bbi"><CheckMd />Timestamped, auditable record for every candidate</div>
              <div className="rc-bbi"><CheckMd />Psychometrically validated, bias-audited scoring</div>
              <div className="rc-bbi"><CheckMd />SOC 2 Type II, GDPR &amp; ISO 27001 compliant</div>
            </div>
          </div>
          <div className="rc-mock">
            <div className="rc-mockhead"><span>Assessment integrity · Audit log</span></div>
            <div className="rc-audit">
              <div className="rc-abadges"><span className="rc-abadge">SOC 2 Type II</span><span className="rc-abadge">GDPR</span><span className="rc-abadge">ISO 27001</span><span className="rc-abadge">EEO-compliant</span></div>
              <div className="rc-alog"><span className="rc-adot" /><span><span className="rc-at">Assessment completed</span><span className="rc-as">Priya R. · Jun 12 at 2:34 PM · 18 min duration</span></span></div>
              <div className="rc-alog"><span className="rc-adot" /><span><span className="rc-at">Score calculated &amp; ranked</span><span className="rc-as">Objective criteria · No human intervention</span></span></div>
              <div className="rc-alog"><span className="rc-adot" /><span><span className="rc-at">Shortlist decision logged</span><span className="rc-as">Criteria: score ≥ 80% · Advanced to interview stage</span></span></div>
              <div className="rc-alog"><span className="rc-adot" /><span><span className="rc-at">Adverse impact report generated</span><span className="rc-as">Gender, age &amp; ethnicity parity check · Passed</span></span></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rc-sec rc-dark"><div className="rcw">
        <p className="eyebrow reveal" style={{ textAlign: 'center', color: '#C9B9BC' }}>What teams say<b>.</b></p>
        <p className="rc-tquote reveal">&quot;We were spending 60% of recruiter time on screening calls that told us nothing a skills test couldn&apos;t have. Testlify cut that to near zero. Our shortlists are faster, and the people we interview are genuinely strong — not just confident on paper.&quot;</p>
        <div className="rc-tby reveal"><b>Head of Talent</b><span>Logistics Company</span></div>
        <div className="rc-tstats rc-cnt reveal">
          <div className="rc-tstat"><div className="rc-tstatn">80<span className="u">%</span></div><div className="rc-tstatl">faster time-to-shortlist</div></div>
          <div className="rc-tstat"><div className="rc-tstatn">3<span className="u">×</span></div><div className="rc-tstatl">faster time-to-hire</div></div>
          <div className="rc-tstat"><div className="rc-tstatn">40<span className="u">%</span></div><div className="rc-tstatl">lower 90-day attrition</div></div>
        </div>
      </div></section>

      <section className="rc-sec rc-sand"><div className="rcw">
        <div className="rc-shead reveal"><p className="eyebrow">Integrations<b>.</b></p><h2 className="rc-h2" style={{ marginTop: '14px' }}>Testlify integrates seamlessly with 100+ ATS tools</h2><p className="rc-lead">Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.</p></div>
        <div className="rc-atsgrid reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png" alt="SAP SuccessFactors" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png" alt="Lever" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png" alt="Recruitee" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG Pro Recruiting" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="rc-atst"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png" alt="JazzHR" /></div>
        </div>
        <div className="rc-atsmore reveal"><Link href="/integrations">View all ATS integrations<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></Link></div>
      </div></section>

      <section className="rc-sec"><div className="rcw">
        <div className="rc-shead reveal"><p className="eyebrow">FAQ<b>.</b></p><h2 className="rc-h2" style={{ marginTop: '14px' }}>Frequently asked questions</h2></div>
        <div className="rc-faqw">
          {FAQS.map((f, i) => (
            <div key={i} className={`rc-faq reveal ${open[i] ? 'rc-open' : ''}`} onClick={() => toggle(i)}>
              <div className="rc-faqq">{f.q}<span className="rc-faqx">+</span></div>
              <div className="rc-faqa">{f.a}</div>
            </div>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
