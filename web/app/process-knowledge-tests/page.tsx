'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import Testimonials from '@/components/Testimonials';
import SecuritySection from '@/components/SecuritySection';
import Recognition from '@/components/Recognition';
import CtaBand from '@/components/CtaBand';

const CSS = `
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
.tsd-shotimg{display:block;width:100%;height:380px;background-size:contain;background-repeat:no-repeat;background-position:center;}
.tsd-shot.tsd-plain{background:transparent !important;border:0;box-shadow:none;}
.tsd-shot.tsd-plain .tsd-shotimg{background-color:transparent !important;}
.tsd-shot image-slot{display:block;width:100%;height:360px;border-radius:14px;overflow:hidden;}
.tsd-logos{margin-top:40px;}
.tsd-logos-l{font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#A9999C;margin:0 0 14px;}
.tsd-logos-r{display:flex;gap:12px;flex-wrap:wrap;}
.tsd-logo{background:#fff;border:1px solid #F0E2E3;border-radius:10px;padding:8px 16px;font-size:14px;font-weight:700;color:#8A7A7D;}
.tsd-grid2{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;}
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
.tsd-card{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.tsd-ic{width:44px;height:44px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.tsd-ct{font-size:17px;font-weight:700;margin:0;}
.tsd-cd{font-size:14px;line-height:1.6;color:#6C5A5D;margin:8px 0 0;}
.tsd-card,.tsd-fcard,.tsd-step,.tsd-tcard{transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tsd-card:hover,.tsd-fcard:hover,.tsd-step:hover,.tsd-tcard:hover{transform:translateY(-4px)!important;border-color:#FBD0D1;box-shadow:0 20px 40px rgba(110,11,14,.12);}
.tsd-fgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.tsd-fcard{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:26px 24px;}
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
@media(max-width:960px){.tsd-hgrid,.tsd-grid2{grid-template-columns:1fr;gap:40px;}.tsd-flip .tsd-copy{order:1;}.tsd-flip .tsd-media{order:2;}.tsd-cards,.tsd-fgrid,.tsd-tgrid{grid-template-columns:1fr;}.tsd-steps{grid-template-columns:1fr 1fr;}.tsd-h1{font-size:38px;}.tsd-h2{font-size:27px;}.tsd-sec{padding:64px 0;}.tsd-bl{grid-template-columns:1fr;}.tsd-shot image-slot{height:280px;}}
.ttp-herocard{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;animation:ttpfloat 6s ease-in-out infinite;}
@keyframes ttpfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.ttp-hc-top{display:flex;align-items:center;gap:7px;padding:14px 18px;border-bottom:1px solid #F4E9E9;background:#FCF6F5;}
.ttp-dot{width:11px;height:11px;border-radius:50%;background:#FF5F57;}.ttp-dot.y{background:#FEBC2E;}.ttp-dot.g{background:#28C840;}
.ttp-hc-title{font-size:12.5px;color:#8A7A7D;font-weight:600;margin-left:8px;}
.ttp-hc-live{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;}
.ttp-hc-body{padding:22px 22px 6px;display:flex;flex-direction:column;gap:17px;}
.ttp-hc-row{display:flex;align-items:center;gap:14px;}
.ttp-hc-av{flex:none;width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,#FF7A52,#F23F44);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;}
.ttp-hc-av.b{background:linear-gradient(135deg,#6E62F2,#9A8BFF);}.ttp-hc-av.c{background:linear-gradient(135deg,#2AA6F2,#67C9FF);}
.ttp-hc-meta{flex:1;}
.ttp-hc-nm{font-size:13.5px;font-weight:700;color:#1A1014;display:block;margin-bottom:7px;}
.ttp-bar{height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.ttp-bar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);}
.ttp-hc-sc{font-size:15px;font-weight:800;color:#F23F44;width:32px;text-align:right;flex:none;}
.ttp-hc-badge{margin:12px 22px 22px;display:inline-flex;align-items:center;gap:8px;background:#E8F6EE;color:#1FA463;font-weight:700;font-size:13px;padding:10px 15px;border-radius:12px;}
.tsd-mtrust{padding:44px 0 58px;}
.tsd-trust-l{text-align:center;font-size:13.5px;font-weight:600;letter-spacing:1.5px;color:#A9999C;text-transform:uppercase;margin:0 0 30px;}
.tsd-trust-l strong{color:#F23F44;font-weight:800;}
.tsd-marq-wrap{position:relative;max-width:1100px;margin:0 auto;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);}
.tsd-marq{display:flex;width:max-content;gap:64px;animation:marquee 30s linear infinite;align-items:center;}
.tsd-marq-i{font-size:24px;font-weight:700;color:#C9B9BC;letter-spacing:-.5px;white-space:nowrap;}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.itats-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.itats-tile{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .3s,border-color .3s,box-shadow .3s;}
.itats-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.itats-tile img{max-width:100%;max-height:38px;object-fit:contain;}
.itats-more{text-align:center;margin-top:34px;}
.itats-more a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;text-decoration:none;}
@media(max-width:960px){.itats-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:560px){.itats-grid{grid-template-columns:repeat(2,1fr);}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const Check = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const stats = [
  { t: '20–30 min completion' },
  { t: 'AI-generated from your SOPs' },
  { t: 'Real-time results' },
];

const logos = ['Xneelo', 'Kimp', 'Endiprev', 'Virtual Gurus', 'HROne'];

const cards = [
  { title: 'Comprehensive assessment', icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11', desc: "Evaluates employee's understanding of specific processes, workflows, and procedures." },
  { title: 'Real-time feedback', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', desc: 'Provides immediate results and insights, allowing for quick identification of knowledge gaps.' },
  { title: 'Compliance monitoring', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', desc: 'Ensures adherence to industry standards and regulations by assessing knowledge of necessary protocols.' },
  { title: 'Better learning opportunities', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z', desc: 'Identify areas of development and provide support for further education and skill-building.' },
  { title: 'Performance tracking', icon: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6', desc: 'Monitor employee progress over time, measure improvements, and adjust training programs as needed.' },
  { title: 'Niche-specific content', icon: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', desc: 'Tailored to industry standards and best practices, these tests ensure employees grasp essential aspects of their work environment.' },
];

const bullets1 = [
  'Identify knowledge gaps',
  'Minimize errors in processes',
  'Informed training decisions',
  'Superior performance',
  'Boost employee satisfaction',
];

const faqs = [
  { q: 'What are process knowledge tests?', a: 'Process knowledge tests (PKT) are performance review tests for existing employees. It is performed to analyze their understanding of specific workflows or processes ideal to their role or industry. In some cases, like lateral entry, process knowledge tests are conducted by employers to gauge new hires.' },
  { q: 'What is an example of a knowledge test?', a: 'For instance, a manufacturing company uses a compliance protocol knowledge test to ensure employees are well-versed in safety regulations and procedures. The test covers emergency procedures, industry regulatory standards, and reporting requirements. By analyzing the results, the company can pinpoint if the employees need further training or promotion, identify skill or knowledge gaps, and update safety protocols as needed to enhance overall workplace safety.' },
  { q: 'How do I customize tests?', a: 'Assessments can be customized by including any skill tests from our extensive library. Choose from a range of options like aptitude, language, programming, software, or role-specific skills to create a combination that fits your needs.' },
  { q: "Why test a candidate's process knowledge?", a: 'Process knowledge testing of employees is crucial to understand and bridge any potential knowledge gaps. Companies will be able to assess and evaluate staff better and provide them with the opportunity for learning and development.' },
  { q: 'How accurate are process knowledge tests?', a: "Process knowledge tests are highly accurate, providing a precise assessment of employees' understanding of specific processes and procedures. They are designed to reflect real-world scenarios and deliver reliable insights into knowledge gaps and training needs." },
  { q: 'What is the duration of process knowledge tests?', a: 'The completion time for a knowledge test is approximately 20-30 minutes. Following this, the results will be available to the employer in real time.' },
];

const ctaTicks = ['7-day free trial', 'AI-generated questions', 'Cancel anytime'];

export default function ProcessKnowledgeTestsPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview &amp; score candidates automatically." />

      {/* Hero */}
      <section className="tsd-hero">
        <div className="tsdw tsd-hgrid">
          <div className="tsd-copy reveal">
            <div className="tsd-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Test type / Process knowledge tests</span></div>
            <p className="eyebrow">Process knowledge tests<b>.</b></p>
            <h1 className="tsd-h1">Assess employee competence with <span className="tac">process knowledge tests</span></h1>
            <p className="tsd-lead">Identify knowledge gaps in your team and enhance skillsets with our process knowledge tests. Developed by industry experts and scientifically validated, this test helps reduce turnover, boost job satisfaction, and save valuable time and resources.</p>
            <div className="tsd-stats">
              {stats.map((st) => (
                <span className="tsd-statc" key={st.t}>{st.t}</span>
              ))}
            </div>
            <div className="tsd-ctas">
              <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a demo" href="#demo" variant="secondary" size="md" icon="play" />
            </div>
            <div className="tsd-ticks">
              <span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>No credit card required</span>
              <span className="tsd-tick"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>7-day free trial</span>
            </div>
          </div>
          <div className="tsd-media reveal">
            <div className="ttp-herocard">
              <div className="ttp-hc-top"><span className="ttp-dot"></span><span className="ttp-dot y"></span><span className="ttp-dot g"></span><span className="ttp-hc-title">Assessment report</span><span className="ttp-hc-live">● Live</span></div>
              <div className="ttp-hc-body">
                <div className="ttp-hc-row"><span className="ttp-hc-av">A</span><div className="ttp-hc-meta"><span className="ttp-hc-nm">Core competency</span><div className="ttp-bar"><i style={{ width: '94%' }}></i></div></div><span className="ttp-hc-sc">94</span></div>
                <div className="ttp-hc-row"><span className="ttp-hc-av b">M</span><div className="ttp-hc-meta"><span className="ttp-hc-nm">Applied knowledge</span><div className="ttp-bar"><i style={{ width: '88%' }}></i></div></div><span className="ttp-hc-sc">88</span></div>
                <div className="ttp-hc-row"><span className="ttp-hc-av c">S</span><div className="ttp-hc-meta"><span className="ttp-hc-nm">Accuracy &amp; compliance</span><div className="ttp-bar"><i style={{ width: '76%' }}></i></div></div><span className="ttp-hc-sc">76</span></div>
              </div>
              <div className="ttp-hc-badge"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Shortlist ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust marquee */}
      <section className="tsd-mtrust reveal">
        <div className="tsdw">
          <p className="tsd-trust-l">Trusted by <strong>1,500+</strong> hiring teams worldwide</p>
          <div className="tsd-marq-wrap">
            <div className="tsd-marq">
              {logos.map((lg) => (<span className="tsd-marq-i" key={'a' + lg}>{lg}</span>))}
              {logos.map((lg) => (<span className="tsd-marq-i" key={'b' + lg}>{lg}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: split — bullets + cta (shotBg #F3F6F9) */}
      <section className="tsd-sec ">
        <div className="tsdw">
          <div className="tsd-grid2 ">
            <div className="tsd-copy reveal">
              <h2 className="tsd-h2">Why use process knowledge tests?</h2>
              <p className="tsd-p">Gain a comprehensive view of your team with process knowledge tests to identify and address skill gaps confidently. Real-time feedback helps enhance performance and drive continuous employee development.</p>
              <div className="tsd-bl">
                {bullets1.map((label) => (
                  <div className="tsd-bi" key={label}><Check /><span className="tsd-bt">{label}</span></div>
                ))}
              </div>
              <Link className="tsd-link" href="/how-testlify-works">Read more<Arrow /></Link>
            </div>
            <div className="tsd-media reveal">
              <div className="tsd-shot " style={{ background: '#F3F6F9' }}>
                <div className="tsd-shotimg" style={{ backgroundColor: '#F3F6F9', backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/10/Why-use-process-knowledge-tests.png")' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: split — cta only, flipped, sand (shotBg #FFF) */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-grid2 tsd-flip">
            <div className="tsd-copy reveal">
              <h2 className="tsd-h2">How to create process knowledge tests?</h2>
              <p className="tsd-p">Simply upload your SOP document, and the system will analyze the details to generate custom questions specifically designed for your processes and workflows.</p>
              <p className="tsd-p">Our cutting-edge AI technology ensures that each process knowledge test is tailored to match your unique operational needs.</p>
              <Link className="tsd-link" href="/pricing">Try for free<Arrow /></Link>
            </div>
            <div className="tsd-media reveal">
              <div className="tsd-shot " style={{ background: '#FFF' }}>
                <div className="tsd-shotimg" style={{ backgroundColor: '#FFF', backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/10/How-to-create-process-knowledge-tests.png")' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: cards */}
      <section className="tsd-sec ">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Key features<b>.</b></p>
            <h2 className="tsd-h2">Key features of process knowledge tests</h2>
            <p className="tsd-lead">Explore the critical components that make process knowledge tests reliable and comprehensive.</p>
          </div>
          <div className="tsd-cards">
            {cards.map((c) => (
              <div className="tsd-card reveal" key={c.title}>
                <div className="tsd-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon}></path></svg></div>
                <p className="tsd-ct">{c.title}</p>
                <p className="tsd-cd">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: split — cta only, sand (shotBg #FFF) */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-grid2 ">
            <div className="tsd-copy reveal">
              <h2 className="tsd-h2">Measure skill gaps and ensure better operational efficiency</h2>
              <p className="tsd-p">Testlify&apos;s process knowledge tests empower you to identify areas for improvement, optimizing your workforce&apos;s capabilities into becoming valuable assets.</p>
              <p className="tsd-p">Our tests provide actionable insights to enhance team performance and maintain industry standards efficiently.</p>
              <Link className="tsd-link" href="/test-library">Browse the test library<Arrow /></Link>
            </div>
            <div className="tsd-media reveal">
              <div className="tsd-shot " style={{ background: '#FFF' }}>
                <div className="tsd-shotimg" style={{ backgroundColor: '#FFF', backgroundImage: 'url("https://testlify.com/wp-content/uploads/2024/10/Measure-skill-gaps-and-ensure-better-operational-efficiency-1.png")' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials eyebrow="Loved by hiring teams" heading="Recruiters who hire on proof" />

      {/* ATS integrations */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Fits your stack<b>.</b></p>
            <h2 className="tsd-h2">Works with the ATS you already use</h2>
            <p className="tsd-lead">Push assessment results straight into your workflow with 100+ native, two-way integrations.</p>
          </div>
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
          <div className="itats-more reveal"><Link href="/integrations">View all ATS integrations<Arrow /></Link></div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Security"
        heading="Built to keep your organization secure"
        sub="Ensure the security of your recruitment data with top-tier admin management, enhanced security integrations, stringent data governance, comprehensive compliance audits, and strong privacy protections."
      />

      <Recognition bg="#FBF3EE" />

      {/* FAQ */}
      <section className="tsd-sec">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">FAQ<b>.</b></p>
            <h2 className="tsd-h2">Frequently asked questions</h2>
          </div>
          <div className="tsd-faqw">
            {faqs.map((f, i) => (
              <div className={'tsd-faq reveal ' + (open[i] ? 'tsd-open' : '')} onClick={() => toggle(i)} key={i}>
                <div className="tsd-faqq">{f.q}<span className="tsd-faqx">+</span></div>
                <div className="tsd-faqa">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="tsd-cta" id="demo">
        <div className="tsdw reveal">
          <p className="eyebrow" style={{ color: '#F76A6E' }}>Get started<b style={{ color: '#F23F44' }}>.</b></p>
          <h2 className="tsd-h2">Assess competence. Close the gaps.</h2>
          <p className="tsd-lead">Upload your SOPs and start assessing process knowledge in minutes — with real-time results and actionable insights.</p>
          <div className="tsd-ctas">
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="lg" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="#" variant="light" size="lg" icon="play" />
          </div>
          <div className="tsd-ticks">
            {ctaTicks.map((tk) => (
              <span className="tsd-tick" key={tk}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F76A6E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>{tk}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
