'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import TestimonialsCards from '@/components/TestimonialsCards';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#DC3137;}
.rtw{max-width:1240px;margin:0 auto;padding:0 28px;}
.rtsec{padding:96px 0;}
.rtsand{background:#FBF3EE;}
.rtrose{background:#FFF0EF;}
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
/* hero pipeline + score card */
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
.rt-scl{font-size:12.5px;font-weight:600;color:#46383C;width:132px;flex:none;}
.rt-scbar{flex:1;height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.rt-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:0;animation:rtfill 1.4s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes rtfill{to{width:var(--w);}}
.rt-scv{font-size:13px;font-weight:800;color:#F23F44;width:34px;text-align:right;flex:none;}
/* stat band */
.statrow{display:grid;grid-template-columns:repeat(4,1fr);}
.stat{text-align:center;padding:4px 22px;}
.stat + .stat{border-left:1px solid #EFE3E4;}
.statn{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#1A1014;font-variant-numeric:tabular-nums;}
.statn .u{color:#D98C8F;font-weight:600;}
.statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:10px;line-height:1.45;}
/* grid2 */
.rt-g2{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.rt-flip .rt-copy{order:2;}
.rt-chk{display:flex;flex-direction:column;gap:12px;margin-top:22px;}
.rt-ci{display:flex;gap:10px;align-items:flex-start;font-size:15px;line-height:1.5;color:#46383C;font-weight:500;}
.rt-ci svg{flex:none;margin-top:2px;color:#1FA463;width:20px;height:20px;stroke-width:3;}
.rt-shead{text-align:center;max-width:760px;margin:0 auto;}
/* liability 3-card */
.fin-cards3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.fin-lcard{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:30px 28px;box-shadow:0 16px 30px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.fin-lcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 22px 44px rgba(110,11,14,.12);}
.fin-lic{width:48px;height:48px;border-radius:14px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.fin-lcard h3{font-size:19px;font-weight:700;margin:0 0 12px;letter-spacing:-.3px;line-height:1.28;}
.fin-lcard p{font-size:14.5px;line-height:1.6;color:#6C5A5D;margin:0;}
/* role cards */
.rt-roles{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:46px;}
.rt-role{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.08);transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.rt-role:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 22px 44px rgba(110,11,14,.12);}
.rt-role-h{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;}
.rt-role-ic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.rt-role-ar{width:32px;height:32px;border-radius:50%;background:#FBF3EE;color:#C9B9BC;display:flex;align-items:center;justify-content:center;transition:background .25s,color .25s,transform .25s;}
.rt-role:hover .rt-role-ar{background:#F23F44;color:#fff;transform:translate(2px,-2px);}
.rt-role h3{font-size:18px;font-weight:700;margin:0 0 6px;letter-spacing:-.3px;}
.rt-role-d{font-size:13.5px;line-height:1.5;color:#6C5A5D;margin:0 0 16px;}
.rt-tags{display:flex;flex-wrap:wrap;gap:8px;}
.rt-tag{font-size:12px;font-weight:600;color:#B23A3F;background:#FDECEC;border:1px solid #F8DADA;border-radius:100px;padding:6px 12px;white-space:nowrap;}
.rt-viewall{display:inline-flex;align-items:center;gap:8px;margin-top:34px;color:#F23F44;font-weight:700;font-size:15.5px;}
.rt-tert{display:inline-flex;align-items:center;gap:8px;margin-top:24px;color:#F23F44;font-weight:700;font-size:15.5px;}
.rt-tert svg{transition:transform .2s;}.rt-tert:hover svg{transform:translateX(4px);}
/* generic mac card */
.fin-card{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 24px 50px rgba(110,11,14,.10);overflow:hidden;}
.fin-card-bar{display:flex;align-items:center;gap:8px;padding:13px 20px;border-bottom:1px solid #F4E9E9;background:#FCF7F7;}
.fin-dots{display:flex;gap:6px;}
.fin-dots i{width:11px;height:11px;border-radius:50%;display:block;}
.fin-card-t{font-size:12.5px;font-weight:600;color:#8A7A7D;margin-left:6px;}
.fin-card-b{padding:22px 24px;}
/* colored scorecard rows */
.fin-scr-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;}
.fin-scr-name{font-size:17px;font-weight:800;color:#1A1014;margin:0;}
.fin-scr-role{font-size:12.5px;color:#8A7A7D;margin:2px 0 0;}
.fin-scr-big{font-size:30px;font-weight:800;color:#F23F44;line-height:1;letter-spacing:-1px;}
.fin-scr-out{font-size:11.5px;color:#8A7A7D;text-align:right;}
.fin-srow{display:flex;align-items:center;gap:12px;margin-bottom:13px;}
.fin-sl{font-size:12.5px;font-weight:600;color:#46383C;width:150px;flex:none;}
.fin-sbar{flex:1;height:8px;border-radius:6px;background:#EFE7E7;overflow:hidden;}
.fin-sbar i{display:block;height:100%;border-radius:6px;}
.fin-sv{font-size:13px;font-weight:800;width:32px;text-align:right;flex:none;color:#1A1014;}
.fin-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px;}
.fin-chip{font-size:12px;font-weight:700;border-radius:9px;padding:9px 13px;}
.fin-chip.ok{background:#E8F6EE;color:#1A6B44;}
.fin-chip.warn{background:#FDF3E0;color:#9A6B12;}
.fin-chip.mv{background:#FDECEC;color:#B23A3F;}
/* module builder */
.fin-mhead{font-size:12px;color:#8A7A7D;margin:0 0 14px;font-weight:600;}
.fin-mod{display:flex;align-items:center;gap:12px;border:1px solid #EFE3E4;border-radius:12px;padding:13px 15px;margin-bottom:9px;background:#fff;}
.fin-mgrip{color:#D8C7C9;font-size:13px;letter-spacing:1px;line-height:.7;}
.fin-mname{font-size:14px;font-weight:600;color:#1A1014;}
.fin-mbadge{margin-left:auto;font-size:11px;font-weight:700;border-radius:100px;padding:4px 10px;}
.fin-b-tech{background:#FFF0EF;color:#F23F44;}
.fin-b-cog{background:#EEF1FE;color:#5B6BD6;}
.fin-b-comp{background:#E8F6EE;color:#1FA463;}
.fin-b-beh{background:#FDF3E0;color:#9A6B12;}
.fin-mmin{font-size:12px;color:#8A7A7D;width:44px;text-align:right;flex:none;}
.fin-madd{border:1px dashed #E0CFD0;border-radius:12px;padding:14px;text-align:center;color:#A9999C;font-size:13.5px;font-weight:600;}
.fin-mfoot{display:flex;justify-content:space-between;align-items:center;margin-top:16px;}
.fin-mtot{font-size:13px;color:#8A7A7D;font-weight:600;}
.fin-msend{background:#F23F44;color:#fff;font-weight:700;font-size:13.5px;border-radius:10px;padding:11px 18px;}
/* candidates table */
.fin-ctbl{width:100%;border-collapse:collapse;font-size:13.5px;}
.fin-ctbl th{font-size:11.5px;font-weight:700;color:#8A7A7D;text-align:left;padding:10px 6px;border-bottom:1px solid #F0E2E3;}
.fin-ctbl td{padding:13px 6px;border-bottom:1px solid #F6EDED;}
.fin-cname{font-weight:700;color:#1A1014;}
.fin-cdot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:7px;}
.fin-badge-adv{color:#1FA463;background:#E8F6EE;font-size:11px;font-weight:700;border-radius:100px;padding:4px 11px;white-space:nowrap;}
.fin-badge-bel{color:#B23A3F;background:#FDECEC;font-size:11px;font-weight:700;border-radius:100px;padding:4px 11px;white-space:nowrap;}
.fin-ctnote{font-size:12px;color:#8A7A7D;margin-top:14px;line-height:1.5;}
/* integrity */
.fin-integ-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;}
.fin-integ-top h4{font-size:18px;font-weight:800;margin:0;}
.fin-flag{font-size:12px;font-weight:700;color:#9A6B12;background:#FBEFD3;border-radius:8px;padding:6px 12px;}
.fin-igrid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.fin-itile{border:1px solid #EFE3E4;border-radius:14px;padding:16px 18px;}
.fin-itl{font-size:12.5px;color:#8A7A7D;margin:0 0 8px;}
.fin-iv{font-size:15px;font-weight:700;margin:0;}
.fin-iv.g{color:#1FA463;}.fin-iv.w{color:#C77A16;}
/* comparison table — matches features .cmp */
.fin-cmpw{margin:44px -24px -48px;overflow-x:auto;padding:24px 24px 48px;}
.fin-cmp{width:100%;border-collapse:collapse;background:#fff;border:1px solid #F0E2E3;border-radius:18px;overflow:hidden;min-width:720px;box-shadow:0 18px 40px rgba(110,11,14,.09);}
.fin-cmp th,.fin-cmp td{padding:16px 18px;text-align:left;font-size:14.5px;border-bottom:1px solid #F4ECEC;color:#6C5A5D;}
.fin-cmp thead th{font-size:13px;font-weight:700;color:#1A1014;background:#FBF3EE;}
.fin-cmp thead th.tl{color:#F23F44;}
.fin-cmp td.cap{font-weight:600;color:#1A1014;}
.fin-cmp td.tlcol{font-weight:700;color:#1A1014;background:#FFF8F7;}
.fin-cmp tbody tr:last-child td{border-bottom:none;}
.fin-yes{color:#1FA463;font-weight:700;}
.fin-no{color:#C79A9C;}
/* testimonial cards */
.fin-tgrid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:44px;}
.fin-tcard{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:30px 32px;box-shadow:0 16px 30px rgba(110,11,14,.08);}
.fin-stars{color:#F23F44;letter-spacing:4px;font-size:15px;}
.fin-tq{font-size:17px;line-height:1.55;color:#1A1014;font-style:italic;margin:16px 0 20px;}
.fin-tn{font-weight:700;font-size:15.5px;}
.fin-tr{font-size:13.5px;color:#8A7A7D;margin-top:2px;}
.fin-g2{display:inline-block;margin-top:16px;font-size:12px;font-weight:700;color:#F23F44;background:#FFF0EF;border-radius:100px;padding:6px 12px;}
/* ATS */
.rt-ats{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:44px;}
.rt-atst{background:#fff;border:1px solid #F0E2E3;border-radius:14px;height:84px;display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 10px 22px rgba(110,11,14,.06);transition:transform .25s,box-shadow .25s,border-color .25s;}
.rt-atst:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 18px 34px rgba(110,11,14,.10);}
.rt-atst img{max-width:100%;max-height:38px;object-fit:contain;}
.rt-atsmore{text-align:center;margin-top:34px;}
.rt-atsmore a{display:inline-flex;align-items:center;gap:8px;color:#F23F44;font-weight:700;font-size:15.5px;}
/* faq */
.rt-faqw{max-width:820px;margin:44px auto 0;}
.rt-faq{border-bottom:1px solid #F0E2E3;padding:22px 2px;cursor:pointer;}
.rt-faqq{display:flex;justify-content:space-between;align-items:center;gap:20px;font-size:16.5px;font-weight:700;color:#1A1014;}
.rt-faqx{width:28px;height:28px;border-radius:50%;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex:none;transition:transform .25s;}
.rt-faqa{display:none;font-size:15px;line-height:1.64;color:#5A4B4E;margin-top:12px;max-width:730px;}
.rt-open .rt-faqa{display:block;}.rt-open .rt-faqx{transform:rotate(45deg);}
@media(max-width:960px){.rt-hgrid,.rt-g2{grid-template-columns:1fr;gap:40px;}.rt-flip .rt-copy{order:1;}.statrow{grid-template-columns:1fr 1fr;row-gap:34px;}.stat + .stat{border-left:none;}.rt-roles,.fin-cards3,.fin-tgrid{grid-template-columns:1fr;}.rt-ats{grid-template-columns:repeat(3,1fr);}.rt-h1{font-size:38px;}.rt-h2{font-size:27px;}.rtsec{padding:64px 0;}}
@media(max-width:560px){.rt-ats{grid-template-columns:repeat(2,1fr);}.statrow{grid-template-columns:1fr;}.fin-node span{font-size:9px;}}
.tsm-sec{background:#FBF3EE!important;}
h1,h2,h3,h4,.rt-h1,.rt-h2,.eyebrow{text-wrap:balance;}p,li,.rt-p,.rt-lead{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqs = [
  { q: 'What is a finance skills assessment?', a: "A finance skills assessment is a structured pre-employment test that verifies a candidate's financial ability, including modeling, accounting, numerical reasoning, and regulatory knowledge. It replaces resume screening with objective, scored evidence of what a candidate can actually do before you extend an offer." },
  { q: 'Does Testlify include numerical reasoning tests for finance roles?', a: 'Yes. Numerical reasoning modules test data interpretation across tables, charts, and quantitative inference — the fast, accurate analysis finance roles demand. You can add them to any assessment in a click.' },
  { q: 'How does Testlify test financial modeling and Excel skills?', a: 'Candidates build and solve directly in a real Excel environment — three-statement models, DCF exercises, and formula-based tasks. Testlify auto-scores the output and returns a ranked, skill-by-skill breakdown, not just a pass or fail.' },
  { q: 'Can Testlify screen for AML, KYC, and regulatory knowledge?', a: 'Yes. Compliance modules cover AML, KYC, GDPR, and situational judgment in regulatory contexts. Set minimum pass thresholds so only candidates who meet your compliance standard advance automatically.' },
  { q: 'How long does a finance skills assessment take?', a: 'Most finance assessments run about 30 to 70 minutes depending on the modules you include. You control the mix and time limit for every role.' },
  { q: 'Can I set minimum pass scores for compliance-critical roles?', a: 'Yes. Set custom pass thresholds per module so candidates below your bar on AML, KYC, or any compliance test do not advance to interview automatically.' },
  { q: 'Which finance and accounting roles can I assess?', a: 'Financial analysts, accountants and controllers, risk and compliance officers, auditors, bankers and wealth advisors, and finance operations or bookkeeping roles — with test types mapped to each role and seniority.' },
  { q: 'Is Testlify secure and compliant enough for financial services?', a: 'Yes. Testlify is SOC 2 Type II, ISO 27001, GDPR, and CCPA compliant, with webcam and tab-switch proctoring, IP monitoring, plagiarism detection, and timestamped, exportable audit logs for every candidate.' },
];

function useCountUp(to: number, comma: boolean) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const fmt = (n: number) => {
      n = Math.round(n);
      return comma ? n.toLocaleString('en-US') : String(n);
    };
    const run = () => {
      let st: number | null = null;
      const dur = 1500;
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
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting && !started) {
            started = true;
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, comma]);
  return ref;
}

const checkSvg = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function FinancialIndustryPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  const c1 = useCountUp(4500, true);
  const c2 = useCountUp(3500, true);
  const c3 = useCountUp(100, false);
  const c4 = useCountUp(200, false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      <section className="rt-hero" data-screen-label="Hero"><div className="rtw rt-hgrid">
        <div className="rt-copy reveal">
          <div className="rt-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Industry / Financial</span></div>
          <p className="eyebrow">For finance teams<b>.</b></p>
          <h1 className="rt-h1">Finance skills assessment that <span style={{ color: '#F23F44' }}>proves the numbers</span></h1>
          <p className="rt-lead">Testlify verifies modeling, Excel, numerical reasoning, and regulatory knowledge before the offer. Give every finance hire an audit-ready foundation from day one.</p>
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
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Excel task</span></div>
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Compliance</span></div>
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Auto score</span></div>
              <div className="fin-node"><span className="fin-dot"><i></i></span><span>Ranked list</span></div>
            </div>
            <div className="fin-score">
              <div className="fin-score-top"><span>Candidate assessment score</span><b>88/100</b></div>
              <div className="rt-scores">
                <div className="rt-scr"><span className="rt-scl">Financial modeling</span><span className="rt-scbar"><i style={{ '--w': '93%', animationDelay: '.15s' } as React.CSSProperties}></i></span><span className="rt-scv">93</span></div>
                <div className="rt-scr"><span className="rt-scl">Excel</span><span className="rt-scbar"><i style={{ '--w': '90%', animationDelay: '.28s' } as React.CSSProperties}></i></span><span className="rt-scv">90</span></div>
                <div className="rt-scr"><span className="rt-scl">Numerical reasoning</span><span className="rt-scbar"><i style={{ '--w': '95%', animationDelay: '.41s' } as React.CSSProperties}></i></span><span className="rt-scv">95</span></div>
                <div className="rt-scr"><span className="rt-scl">AML / KYC</span><span className="rt-scbar"><i style={{ '--w': '86%', animationDelay: '.54s' } as React.CSSProperties}></i></span><span className="rt-scv">86</span></div>
                <div className="rt-scr"><span className="rt-scl">Cognitive aptitude</span><span className="rt-scbar"><i style={{ '--w': '89%', animationDelay: '.67s' } as React.CSSProperties}></i></span><span className="rt-scv">89</span></div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand" style={{ paddingTop: 44, paddingBottom: 44 }}><div className="rtw">
        <div className="statrow reveal">
          <div className="stat"><div className="statn"><span className="v" ref={c1}>0</span><span className="u">+</span></div><div className="statl">job roles you can assess</div></div>
          <div className="stat"><div className="statn"><span className="v" ref={c2}>0</span><span className="u">+</span></div><div className="statl">validated, ready-to-use tests</div></div>
          <div className="stat"><div className="statn"><span className="v" ref={c3}>0</span><span className="u">+</span></div><div className="statl">native ATS integrations</div></div>
          <div className="stat"><div className="statn"><span className="v" ref={c4}>0</span><span className="u">+</span></div><div className="statl">finance and accounting roles covered</div></div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">The stakes<b>.</b></p><h2 className="rt-h2">In finance, a wrong hire is a liability. Not just a setback</h2><p className="rt-lead">Resumes show titles and certifications. They cannot show who actually reconciles cleanly, models accurately, or stays compliant under pressure.</p></div>
        <div className="fin-cards3 reveal">
          <div className="fin-lcard"><span className="fin-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg></span><h3>Credentials do not prove competence</h3><p>A CPA or CFA designation tells you what someone studied. It does not tell you how they perform under a real deadline with a three-statement model open.</p></div>
          <div className="fin-lcard"><span className="fin-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span><h3>Compliance errors cost more than the hire</h3><p>Replacing a mis-hire costs 30%+ of first-year salary. In financial services, the wrong compliance or risk hire adds regulatory fines and audit exposure on top.</p></div>
          <div className="fin-lcard"><span className="fin-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span><h3>Skilled finance talent does not wait</h3><p>Quantitative analysts, controllers, and risk officers are scarce. Manual screening loses them to faster competitors before you reach the interview stage.</p></div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">Finance roles<b>.</b></p><h2 className="rt-h2">Every finance and accounting role. One platform</h2><p className="rt-lead">Map the right test types to each role in minutes. Mix technical, numerical, compliance, and behavioral modules on a single assessment.</p></div>
        <div className="rt-roles reveal">
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span></div>
            <h3>Financial Analyst</h3><p className="rt-role-d">Model accuracy, data interpretation, and financial statement analysis under realistic conditions.</p>
            <div className="rt-tags"><span className="rt-tag">3-statement modeling</span><span className="rt-tag">DCF</span><span className="rt-tag">Numerical reasoning</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></span></div>
            <h3>Accountant / Controller</h3><p className="rt-role-d">GAAP and IFRS knowledge, reconciliation accuracy, and journal entry mechanics at role seniority.</p>
            <div className="rt-tags"><span className="rt-tag">GAAP / IFRS</span><span className="rt-tag">Excel</span><span className="rt-tag">Reconciliation</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span></div>
            <h3>Risk and Compliance Officer</h3><p className="rt-role-d">AML, KYC, situational judgment, and regulatory scenario testing before any offer is extended.</p>
            <div className="rt-tags"><span className="rt-tag">AML / KYC</span><span className="rt-tag">SJT</span><span className="rt-tag">Regulatory knowledge</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span></div>
            <h3>Internal / External Auditor</h3><p className="rt-role-d">Audit methodology, risk identification, and attention to detail across financial documentation.</p>
            <div className="rt-tags"><span className="rt-tag">Audit process</span><span className="rt-tag">Risk assessment</span><span className="rt-tag">IFRS</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></span></div>
            <h3>Banker / Wealth Advisor</h3><p className="rt-role-d">Client communication, portfolio analysis, and product knowledge for retail and private banking roles.</p>
            <div className="rt-tags"><span className="rt-tag">Client communication</span><span className="rt-tag">Portfolio analysis</span><span className="rt-tag">Product knowledge</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="12" y2="14"></line></svg></span></div>
            <h3>Finance Operations / Bookkeeper</h3><p className="rt-role-d">Speed and accuracy across high-volume transaction processing, reconciliation, and Excel data tasks.</p>
            <div className="rt-tags"><span className="rt-tag">Excel</span><span className="rt-tag">Bookkeeping</span><span className="rt-tag">Numerical accuracy</span></div>
          </div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">The platform<b>.</b></p><h2 className="rt-h2">What finance teams actually need in an assessment platform</h2><p className="rt-lead">From real spreadsheet simulations to compliance screening and behavioral depth. All in one workflow.</p></div>
        <div className="rt-g2" style={{ marginTop: 56 }}>
          <div className="rt-copy reveal">
            <h2 className="rt-h2" style={{ marginTop: 0 }}>Real spreadsheet tasks. Not guessable multiple choice</h2>
            <p className="rt-p">Candidates build and solve directly in Excel, completing DCF models, three-statement exercises, and formula-based tasks. Testlify auto-scores the output and returns a ranked, skill-by-skill scorecard.</p>
            <div className="rt-chk">
              <div className="rt-ci">{checkSvg}Three-statement model and DCF exercises in a real Excel environment</div>
              <div className="rt-ci">{checkSvg}Auto-scored with per-skill breakdown, not just a total</div>
              <div className="rt-ci">{checkSvg}Comparable scorecards across every candidate for fast shortlisting</div>
            </div>
          </div>
          <div className="rt-media reveal">
            <div className="fin-card">
              <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">Candidate Scorecard: Financial Analyst</span></div>
              <div className="fin-card-b">
                <div className="fin-scr-head"><div><p className="fin-scr-name">Priya Mehta</p><p className="fin-scr-role">Financial Analyst · Senior</p></div><div><div className="fin-scr-big">87</div><div className="fin-scr-out">out of 100</div></div></div>
                <div className="fin-srow"><span className="fin-sl">Financial modeling</span><span className="fin-sbar"><i style={{ width: '92%', background: '#1FA463' }}></i></span><span className="fin-sv">92</span></div>
                <div className="fin-srow"><span className="fin-sl">Excel proficiency</span><span className="fin-sbar"><i style={{ width: '88%', background: '#1FA463' }}></i></span><span className="fin-sv">88</span></div>
                <div className="fin-srow"><span className="fin-sl">GAAP / IFRS</span><span className="fin-sbar"><i style={{ width: '80%', background: '#E5484D' }}></i></span><span className="fin-sv">80</span></div>
                <div className="fin-srow"><span className="fin-sl">Numerical reasoning</span><span className="fin-sbar"><i style={{ width: '91%', background: '#1FA463' }}></i></span><span className="fin-sv">91</span></div>
                <div className="fin-srow"><span className="fin-sl">DCF analysis</span><span className="fin-sbar"><i style={{ width: '74%', background: '#F5A623' }}></i></span><span className="fin-sv">74</span></div>
                <div className="fin-chips"><span className="fin-chip ok">Strong shortlist</span><span className="fin-chip warn">DCF: review in interview</span><span className="fin-chip mv">Move to next stage</span></div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw rt-g2 rt-flip">
        <div className="rt-copy reveal">
          <h2 className="rt-h2" style={{ marginTop: 0 }}>Test how candidates think under pressure. Not just what they know</h2>
          <p className="rt-p">Finance roles at every level demand fast, accurate data interpretation and problem-solving under time pressure. Testlify&rsquo;s numerical reasoning and cognitive aptitude modules measure the thinking skills that predict performance, not just prior experience.</p>
          <div className="rt-chk">
            <div className="rt-ci">{checkSvg}Numerical reasoning: data tables, charts, and quantitative inference</div>
            <div className="rt-ci">{checkSvg}Cognitive aptitude: pattern recognition, abstract reasoning, and processing speed</div>
            <div className="rt-ci">{checkSvg}Validated for finance analyst, operations, and banking roles</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-card">
            <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">AI Test Builder: Finance Analyst</span></div>
            <div className="fin-card-b">
              <p className="fin-mhead">Role: Financial Analyst · Seniority: Mid-level · Focus: Modeling + Compliance</p>
              <div className="fin-mod"><span className="fin-mgrip">⁚⁚</span><span className="fin-mname">Financial modeling (3-statement)</span><span className="fin-mbadge fin-b-tech">Technical</span><span className="fin-mmin">20 min</span></div>
              <div className="fin-mod"><span className="fin-mgrip">⁚⁚</span><span className="fin-mname">Numerical reasoning</span><span className="fin-mbadge fin-b-cog">Cognitive</span><span className="fin-mmin">15 min</span></div>
              <div className="fin-mod"><span className="fin-mgrip">⁚⁚</span><span className="fin-mname">Excel proficiency</span><span className="fin-mbadge fin-b-tech">Technical</span><span className="fin-mmin">15 min</span></div>
              <div className="fin-mod"><span className="fin-mgrip">⁚⁚</span><span className="fin-mname">AML / KYC knowledge</span><span className="fin-mbadge fin-b-comp">Compliance</span><span className="fin-mmin">10 min</span></div>
              <div className="fin-mod"><span className="fin-mgrip">⁚⁚</span><span className="fin-mname">Situational judgment</span><span className="fin-mbadge fin-b-beh">Behavioral</span><span className="fin-mmin">10 min</span></div>
              <div className="fin-madd">+ Add module from library</div>
              <div className="fin-mfoot"><span className="fin-mtot">Total: 70 min · 5 modules</span><span className="fin-msend">Send assessment</span></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw rt-g2">
        <div className="rt-copy reveal">
          <h2 className="rt-h2" style={{ marginTop: 0 }}>Screen for compliance knowledge before the first interview. Not after</h2>
          <p className="rt-p">Verify AML, KYC, and regulatory judgment as part of the standard hiring workflow. Set minimum pass thresholds on compliance modules so only candidates who meet your standard advance automatically.</p>
          <div className="rt-chk">
            <div className="rt-ci">{checkSvg}AML, KYC, GDPR, and situational judgment in compliance contexts</div>
            <div className="rt-ci">{checkSvg}Custom pass thresholds per module for compliance-critical roles</div>
            <div className="rt-ci">{checkSvg}Per-module score breakdown visible to hiring managers, not just totals</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-card">
            <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">Candidates: Risk and Compliance Officer</span></div>
            <div className="fin-card-b">
              <table className="fin-ctbl">
                <thead><tr><th>Candidate</th><th>Overall</th><th>AML/KYC</th><th>SJT</th><th>Status</th></tr></thead>
                <tbody>
                  <tr><td className="fin-cname">Arjun S.</td><td><span className="fin-cdot" style={{ background: '#1FA463' }}></span>91</td><td>94</td><td>88</td><td><span className="fin-badge-adv">Advance</span></td></tr>
                  <tr><td className="fin-cname">Fatima K.</td><td><span className="fin-cdot" style={{ background: '#1FA463' }}></span>86</td><td>89</td><td>82</td><td><span className="fin-badge-adv">Advance</span></td></tr>
                  <tr><td className="fin-cname">Marcus L.</td><td><span className="fin-cdot" style={{ background: '#F5A623' }}></span>71</td><td>63</td><td>79</td><td><span className="fin-badge-bel">Below threshold</span></td></tr>
                  <tr><td className="fin-cname">Neha R.</td><td><span className="fin-cdot" style={{ background: '#1FA463' }}></span>88</td><td>91</td><td>85</td><td><span className="fin-badge-adv">Advance</span></td></tr>
                </tbody>
              </table>
              <p className="fin-ctnote">AML/KYC pass threshold set to 70. Marcus did not advance automatically.</p>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw rt-g2 rt-flip">
        <div className="rt-copy reveal">
          <h2 className="rt-h2" style={{ marginTop: 0 }}>Every assessment is defensible to risk, audit, and regulators</h2>
          <p className="rt-p">Finance hiring decisions get scrutinized. Testlify keeps a complete audit trail, including webcam snapshots, IP monitoring, plagiarism detection, and timestamp-stamped score breakdowns, for every candidate across every role.</p>
          <div className="rt-chk">
            <div className="rt-ci">{checkSvg}Webcam monitoring, tab-switch detection, and IP verification</div>
            <div className="rt-ci">{checkSvg}Timestamped candidate logs exportable on demand for compliance review</div>
            <div className="rt-ci">{checkSvg}Role-based access, IP logging, and exportable candidate logs on demand</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-card"><div className="fin-card-b">
            <div className="fin-integ-top"><h4>Assessment integrity</h4><span className="fin-flag">1 flag</span></div>
            <div className="fin-igrid">
              <div className="fin-itile"><p className="fin-itl">Webcam active</p><p className="fin-iv g">Active throughout</p></div>
              <div className="fin-itile"><p className="fin-itl">IP consistency</p><p className="fin-iv g">Single location</p></div>
              <div className="fin-itile"><p className="fin-itl">Tab switching</p><p className="fin-iv w">2 switches detected</p></div>
              <div className="fin-itile"><p className="fin-itl">Plagiarism check</p><p className="fin-iv g">No match found</p></div>
            </div>
          </div></div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">Why Testlify<b>.</b></p><h2 className="rt-h2">Testlify vs. the usual ways finance teams screen</h2></div>
        <div className="fin-cmpw reveal">
          <table className="fin-cmp">
            <thead><tr><th className="cap">Capability</th><th className="tl">Testlify</th><th>Manual screening</th><th>Generic test tools</th><th>Staffing agency</th></tr></thead>
            <tbody>
              <tr><td className="cap">Numerical reasoning and cognitive aptitude</td><td className="tlcol"><span className="fin-yes">✓</span> Built in</td><td><span className="fin-no">✗</span> No</td><td>Partial</td><td><span className="fin-no">✗</span> No</td></tr>
              <tr><td className="cap">AML, KYC, and compliance screening</td><td className="tlcol"><span className="fin-yes">✓</span> Built in</td><td><span className="fin-no">✗</span> No</td><td><span className="fin-no">✗</span> No</td><td>Varies</td></tr>
              <tr><td className="cap">Custom pass thresholds per module</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td><span className="fin-no">✗</span> No</td><td>Rarely</td><td><span className="fin-no">✗</span> No</td></tr>
              <tr><td className="cap">Proctoring with full audit trail</td><td className="tlcol"><span className="fin-yes">✓</span> Yes</td><td><span className="fin-no">✗</span> No</td><td>Partial</td><td><span className="fin-no">✗</span> No</td></tr>
              <tr><td className="cap">Native ATS and HRIS integration</td><td className="tlcol"><span className="fin-yes">✓</span> 100+ native</td><td><span className="fin-no">✗</span> No</td><td>Webhooks only</td><td><span className="fin-no">✗</span> No</td></tr>
            </tbody>
          </table>
        </div>
      </div></section>

      <TestimonialsCards
        bg="#FBF3EE"
        heading="What finance and talent leaders say"
        q1="“We verify modeling, Excel, and numerical reasoning before the interview now, so every finance hire is audit-ready from day one.”"
        name1="Head of Talent"
        role1="Financial services, 500+ employees"
        badge1="G2 High Performer"
        q2="“Skills testing cut mis-hires on the analyst team and gave compliance a clean, defensible paper trail.”"
        name2="VP, People"
        role2="Fintech, high-growth"
        badge2="G2 Leader"
      />

      <section className="rtsec"><div className="rtw">
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

      <section className="rtsec rtsand"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">FAQ<b>.</b></p><h2 className="rt-h2">Frequently asked questions (FAQs)</h2><p className="rt-lead">Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.</p></div>
        <div className="rt-faqw">
          {faqs.map((f, i) => (
            <div className={`rt-faq reveal ${open[i] ? 'rt-open' : ''}`} key={i} onClick={() => toggle(i)}>
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
