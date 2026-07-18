'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
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
h1,h2,h3,h4,.rt-h1,.rt-h2,.eyebrow{text-wrap:balance;}p,li,.rt-p,.rt-lead{text-wrap:pretty;}/*om-balance-rule*/
`;

const faqs = [
  { q: 'What is a skills assessment for the energy industry?', a: 'A skills assessment for the energy industry is a pre-employment test that verifies a candidate’s technical expertise, safety knowledge, cognitive ability, and situational judgment before hiring. It covers role-specific competencies across oil and gas, renewable energy, and utilities, replacing resume screening with objective, scored evidence of job readiness.' },
  { q: 'Can Testlify assess HSE and safety knowledge for energy roles?', a: 'Yes. Testlify includes validated HSE, OSHA, and safety protocol assessments for energy and utility roles. You can set minimum pass thresholds on safety modules so candidates who do not meet your required standard are automatically flagged and do not advance to interview.' },
  { q: 'Does Testlify include mechanical aptitude tests for energy hiring?', a: 'Yes. Testlify’s mechanical aptitude assessments evaluate how candidates interpret technical drawings, operate and troubleshoot equipment, and apply mechanical principles in realistic scenarios. They are validated for rig technicians, turbine technicians, plant maintenance workers, and field service roles.' },
  { q: 'Can Testlify assess SCADA and grid systems knowledge?', a: 'Yes. Testlify includes assessments for SCADA systems, grid operations, control room procedures, and digital energy systems. These are used for grid operators, control engineers, and plant operators across utilities and renewables where operational accuracy is critical.' },
  { q: 'Which energy roles can I assess with Testlify?', a: 'Testlify covers field and rig technicians, HSE officers, wind turbine technicians, solar installation technicians, grid and plant operators, utility worker assessment modules, and maintenance roles across oil and gas, renewable energy, and utilities. The AI test builder generates a role-specific energy industry assessment for any position in under 60 seconds.' },
  { q: 'How does skills-based hiring reduce risk in energy operations?', a: 'In energy operations, verified competence matters from the first day on site. A rigorous energy skills assessment confirms technical readiness, safety knowledge, and situational judgment before the offer, giving teams objective, scored evidence to make confident hiring decisions across field, plant, and control room roles.' },
  { q: 'How long does an energy skills assessment take?', a: 'Most energy assessments run between 30 and 45 minutes depending on the role and modules selected. Field and operational roles typically combine mechanical aptitude, safety knowledge, and situational judgment. Technical and engineering roles add knowledge-specific modules. Candidates receive instructions and results immediately on completion.' },
  { q: 'Does Testlify integrate with ATS systems used in energy hiring?', a: 'Yes. Testlify has 100+ native ATS and HRIS integrations including Workday, SAP SuccessFactors, Greenhouse, BambooHR, and Lever. Assessment results and candidate rankings sync directly into your existing hiring workflow without manual data transfer.' },
];

function Counter({ to, comma }: { to: number; comma?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const fmt = (n: number) => {
      n = Math.round(n);
      return comma ? n.toLocaleString('en-US') : String(n);
    };
    const runCount = () => {
      const dur = 1500;
      let st: number | null = null;
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
          if (en.isIntersecting && !done) {
            done = true;
            runCount();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, comma]);
  return <span className="v" ref={ref}>0</span>;
}

const chk = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
);

const star = (
  <svg viewBox="0 0 24 24" fill="#F23F44"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);

export default function EnergyIndustryPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      <section className="rt-hero" data-screen-label="Hero"><div className="rtw rt-hgrid">
        <div className="rt-copy reveal">
          <div className="rt-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Industry / Energy</span></div>
          <p className="eyebrow">For energy teams<b>.</b></p>
          <h1 className="rt-h1">Skills assessment for the <span style={{ color: '#F23F44' }}>energy industry</span></h1>
          <p className="rt-lead">Verify technical expertise, HSE knowledge, and situational judgment for every energy hire. One renewable energy hiring assessment platform covering oil and gas, utilities, and every sub-sector in between.</p>
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
              <div className="fin-score-top"><span>Candidate assessment score</span><b>91/100</b></div>
              <div className="rt-scores">
                <div className="rt-scr"><span className="rt-scl">HSE / OSHA knowledge</span><span className="rt-scbar"><i style={{ ['--w' as string]: '94%', animationDelay: '.15s' }}></i></span><span className="rt-scv">94</span></div>
                <div className="rt-scr"><span className="rt-scl">Technical aptitude</span><span className="rt-scbar"><i style={{ ['--w' as string]: '88%', animationDelay: '.28s' }}></i></span><span className="rt-scv">88</span></div>
                <div className="rt-scr"><span className="rt-scl">SCADA knowledge</span><span className="rt-scbar"><i style={{ ['--w' as string]: '84%', animationDelay: '.41s' }}></i></span><span className="rt-scv">84</span></div>
                <div className="rt-scr"><span className="rt-scl">Situational judgment</span><span className="rt-scbar"><i style={{ ['--w' as string]: '91%', animationDelay: '.54s' }}></i></span><span className="rt-scv">91</span></div>
                <div className="rt-scr"><span className="rt-scl">Cognitive aptitude</span><span className="rt-scbar"><i style={{ ['--w' as string]: '86%', animationDelay: '.67s' }}></i></span><span className="rt-scv">86</span></div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand" style={{ paddingTop: 44, paddingBottom: 44 }}><div className="rtw">
        <div className="statrow statrow3 reveal">
          <div className="stat"><div className="statn"><Counter to={3500} comma /><span className="u">+</span></div><div className="statl">Ready-made validated tests</div></div>
          <div className="stat"><div className="statn"><Counter to={4500} comma /><span className="u">+</span></div><div className="statl">Job roles covered</div></div>
          <div className="stat"><div className="statn"><Counter to={100} /><span className="u">+</span></div><div className="statl">Native ATS integrations</div></div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><h2 className="rt-h2">Identify job-ready energy talent before you hire</h2><p className="rt-lead">Screen candidates for technical skills, safety compliance, and operational readiness with role-specific assessments.</p></div>
        <div className="en-3col reveal">
          <div className="en-lcard">
            <div className="en-lhead"><span className="en-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg></span><span className="en-lnum">01</span></div>
            <h3>Verified safety knowledge, not listed training</h3><p>Energy operations demand that HSE and OSHA knowledge is confirmed, not assumed. Assessment gives you scored evidence of what each candidate actually knows before day one.</p>
          </div>
          <div className="en-lcard">
            <div className="en-lhead"><span className="en-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path><line x1="19" y1="7" x2="19" y2="13"></line><line x1="16" y1="10" x2="22" y2="10"></line></svg></span><span className="en-lnum">02</span></div>
            <h3>Specialist roles are hard to fill and getting harder</h3><p>Wind turbine technicians, grid engineers, and SCADA operators are scarce. Manual screening slows decisions at precisely the moment speed matters most.</p>
          </div>
          <div className="en-lcard">
            <div className="en-lhead"><span className="en-lic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg></span><span className="en-lnum">03</span></div>
            <h3>Technical depth varies widely across sub-sectors</h3><p>Oil and gas, solar, wind, and grid operations each require different competency stacks. Generic assessments do not capture what each role actually demands.</p>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">Energy roles<b>.</b></p><h2 className="rt-h2">Every energy sub-sector. One energy skills assessment platform</h2><p className="rt-lead">From oil and gas skills assessment to renewable technician screening and grid operator testing, map the right modules to each role in under 60 seconds.</p></div>
        <div className="rt-roles reveal">
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg></span></div>
            <h3>Field &amp; Rig Technician</h3><p className="rt-role-d">Mechanical aptitude, safety protocol awareness, attention to detail and situational judgment for field and rig operations.</p>
            <div className="rt-tags"><span className="rt-tag">Mechanical aptitude</span><span className="rt-tag">HSE / OSHA</span><span className="rt-tag">SJT</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"></path><path d="M12.59 19.41A2 2 0 1 0 14 16H2"></path><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"></path></svg></span></div>
            <h3>Wind Turbine Technician</h3><p className="rt-role-d">Electrical and mechanical knowledge, working-at-height safety awareness, and troubleshooting under remote conditions.</p>
            <div className="rt-tags"><span className="rt-tag">Electrical aptitude</span><span className="rt-tag">Safety protocols</span><span className="rt-tag">Problem-solving</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"></line><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"></line><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"></line></svg></span></div>
            <h3>Solar Installation Technician</h3><p className="rt-role-d">Electrical systems knowledge, site safety compliance, and ability to follow technical installation procedures accurately.</p>
            <div className="rt-tags"><span className="rt-tag">Electrical systems</span><span className="rt-tag">Technical reading</span><span className="rt-tag">HSE</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></span></div>
            <h3>Grid &amp; Plant Operator</h3><p className="rt-role-d">SCADA systems knowledge, control room procedures, and the cognitive aptitude to manage complex grid monitoring tasks.</p>
            <div className="rt-tags"><span className="rt-tag">SCADA knowledge</span><span className="rt-tag">Cognitive aptitude</span><span className="rt-tag">Attention to detail</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></span></div>
            <h3>Project &amp; Site Engineer</h3><p className="rt-role-d">Technical problem-solving, regulatory knowledge, and the project management judgment needed for energy construction and development roles.</p>
            <div className="rt-tags"><span className="rt-tag">Technical reasoning</span><span className="rt-tag">Regulatory knowledge</span><span className="rt-tag">Critical thinking</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span></div>
            <h3>HSE Officer</h3><p className="rt-role-d">OSHA, environmental compliance, incident reporting procedures, and the decision-making skills to enforce safety standards under pressure.</p>
            <div className="rt-tags"><span className="rt-tag">OSHA / HSE</span><span className="rt-tag">Environmental compliance</span><span className="rt-tag">SJT</span></div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}><Link className="rt-viewall reveal" href="/test-library">View all test library<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">What it covers<b>.</b></p><h2 className="rt-h2">What a skills assessment for the energy industry should actually cover</h2><p className="rt-lead">Every energy skills assessment is built around the actual competencies the role demands, not generic test templates.</p></div>
        <div className="rt-g2" style={{ marginTop: 56 }}>
          <div className="rt-copy reveal">
            <h2 className="rt-h2" style={{ marginTop: 0 }}>Confirm safety readiness with scored evidence, not assumed credentials</h2>
            <p className="rt-p">Set your own pass threshold per module. Only candidates who meet it advance automatically.</p>
            <div className="rt-chk">
              <div className="rt-ci">{chk}OSHA, HSE, and environmental compliance modules validated for energy roles</div>
              <div className="rt-ci">{chk}Set minimum pass scores per module so only qualified candidates advance automatically</div>
              <div className="rt-ci">{chk}Situational judgment scenarios based on real field and site contexts</div>
            </div>
          </div>
          <div className="rt-media reveal">
            <div className="fin-card">
              <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">Candidate Scorecard · HSE Officer</span></div>
              <div className="fin-card-b">
                <div className="en-scorehead"><div><b>James Okafor</b><span className="sub">HSE Officer · Oil and Gas</span></div><span className="en-bigscore">91<i>/100</i></span></div>
                <div className="rt-scores" style={{ marginTop: 18 }}>
                  <div className="rt-scr"><span className="rt-scl">OSHA / HSE knowledge</span><span className="rt-scbar"><i style={{ ['--w' as string]: '94%', animationDelay: '.15s' }}></i></span><span className="rt-scv">94</span></div>
                  <div className="rt-scr"><span className="rt-scl">Environmental compliance</span><span className="rt-scbar"><i style={{ ['--w' as string]: '88%', animationDelay: '.28s' }}></i></span><span className="rt-scv">88</span></div>
                  <div className="rt-scr"><span className="rt-scl">Situational judgment</span><span className="rt-scbar"><i style={{ ['--w' as string]: '91%', animationDelay: '.41s' }}></i></span><span className="rt-scv">91</span></div>
                  <div className="rt-scr"><span className="rt-scl">Incident reporting</span><span className="rt-scbar"><i style={{ ['--w' as string]: '86%', animationDelay: '.54s' }}></i></span><span className="rt-scv">86</span></div>
                  <div className="rt-scr"><span className="rt-scl">Risk identification</span><span className="rt-scbar"><i style={{ ['--w' as string]: '93%', animationDelay: '.67s' }}></i></span><span className="rt-scv">93</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw rt-g2 rt-flip">
        <div className="rt-copy reveal">
          <h2 className="rt-h2" style={{ marginTop: 0 }}>Verify the hands-on skills that field roles actually require</h2>
          <p className="rt-p">Goes beyond theory. Candidates interpret real technical drawings, troubleshoot equipment, and apply mechanical principles in role-specific scenarios.</p>
          <div className="rt-chk">
            <div className="rt-ci">{chk}Mechanical aptitude: equipment operation, troubleshooting, and technical drawings</div>
            <div className="rt-ci">{chk}Electrical aptitude: wiring, systems knowledge, and safety standards</div>
            <div className="rt-ci">{chk}Cognitive aptitude for engineering and supervisor-level roles</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-card">
            <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">AI Test Builder · Wind Turbine Technician</span></div>
            <div className="fin-card-b">
              <p className="en-mbmeta">Role: Wind Turbine Technician · Level: Mid-level · Sector: Renewables</p>
              <div className="sa-al-row"><span className="sa-al-nm"><b>Mechanical aptitude</b><span>Technical</span></span><span className="en-min">20 min</span></div>
              <div className="sa-al-row"><span className="sa-al-nm"><b>Electrical systems knowledge</b><span>Technical</span></span><span className="en-min">15 min</span></div>
              <div className="sa-al-row"><span className="sa-al-nm"><b>HSE and working at height</b><span>Safety</span></span><span className="en-min">10 min</span></div>
              <div className="sa-al-row"><span className="sa-al-nm"><b>Problem-solving and troubleshooting</b><span>Cognitive</span></span><span className="en-min">10 min</span></div>
              <div className="sa-al-row"><span className="sa-al-nm"><b>Situational judgment</b><span>Behavioral</span></span><span className="en-min">10 min</span></div>
              <div className="en-addmod">+ Add module from library</div>
              <div className="en-mbfoot"><span>Total: 65 min · 5 modules</span><span className="en-send">Send assessment</span></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw rt-g2">
        <div className="rt-copy reveal">
          <h2 className="rt-h2" style={{ marginTop: 0 }}>Validate the SCADA and grid knowledge that control room roles require</h2>
          <p className="rt-p">For roles where a wrong input has immediate operational consequences, every hire needs a verified technical baseline before day one.</p>
          <div className="rt-chk">
            <div className="rt-ci">{chk}SCADA systems, control room procedures, and grid monitoring knowledge</div>
            <div className="rt-ci">{chk}Attention-to-detail and cognitive aptitude benchmarks for high-stakes operations roles</div>
            <div className="rt-ci">{chk}Role-specific test modules for utilities, substations, and energy storage</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-card">
            <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">Candidates · Grid Operator</span></div>
            <div className="fin-card-b">
              <table className="en-gt">
                <thead><tr><th>Candidate</th><th className="r">Overall</th><th className="r">SCADA</th><th className="r">Cognitive</th><th className="r">Status</th></tr></thead>
                <tbody>
                  <tr><td>Rajan P.</td><td className="r">93</td><td className="r">96</td><td className="r">90</td><td className="r"><span className="en-badge en-adv">Advance</span></td></tr>
                  <tr><td>Sarah M.</td><td className="r">87</td><td className="r">88</td><td className="r">86</td><td className="r"><span className="en-badge en-adv">Advance</span></td></tr>
                  <tr><td>Tom H.</td><td className="r">69</td><td className="r">61</td><td className="r">77</td><td className="r"><span className="en-badge en-below">Below threshold</span></td></tr>
                  <tr><td>Anita V.</td><td className="r">89</td><td className="r">91</td><td className="r">87</td><td className="r"><span className="en-badge en-adv">Advance</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw rt-g2 rt-flip">
        <div className="rt-copy reveal">
          <h2 className="rt-h2" style={{ marginTop: 0 }}>Every score is earned. Every decision is defensible</h2>
          <p className="rt-p">Every shortlisting decision is backed by a complete, exportable candidate log, ready for internal review or regulatory audit.</p>
          <div className="rt-chk">
            <div className="rt-ci">{chk}Webcam monitoring, tab-switch detection, and IP verification built in</div>
            <div className="rt-ci">{chk}Timestamped candidate logs exportable on demand for internal and regulatory review</div>
            <div className="rt-ci">{chk}SOC 2 Type 2 and ISO 27001 certified, GDPR and CCPA compliant</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="fin-card">
            <div className="fin-card-bar"><span className="fin-dots"><i style={{ background: '#F26B6B' }}></i><i style={{ background: '#F5B93F' }}></i><i style={{ background: '#4CC38A' }}></i></span><span className="fin-card-t">Assessment Integrity · Rajan P.</span></div>
            <div className="fin-card-b">
              <p className="en-proc-t">PROCTORING SUMMARY</p>
              <div className="en-proc-row"><span>Webcam</span><b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Active throughout</b></div>
              <div className="en-proc-row"><span>IP consistency</span><b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Single location</b></div>
              <div className="en-proc-row"><span>Tab switching</span><b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>None detected</b></div>
              <div className="en-proc-row"><span>Plagiarism check</span><b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>No match found</b></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal" style={{ textAlign: 'left', maxWidth: 'none' }}><h2 className="rt-h2" style={{ fontSize: 44 }}>What energy and utility hiring teams say</h2></div>
        <div className="sat-grid reveal">
          <div className="sat-card">
            <div className="sat-stars">{star}{star}{star}{star}{star}</div>
            <p className="sat-q">&ldquo;Testlify gave us an objective way to screen technical and safety knowledge for field roles before the first interview. We cut screening time significantly and stopped relying on certifications alone.&rdquo;</p>
            <div className="sat-nm">Head of Talent Acquisition</div>
            <div className="sat-role">Energy operator, 1,000 to 5,000 employees</div>
            <span className="sat-badge">G2 Verified</span>
          </div>
          <div className="sat-card">
            <div className="sat-stars">{star}{star}{star}{star}{star}</div>
            <p className="sat-q">&ldquo;We were scaling up turbine technician hiring across multiple sites. Testlify let us run consistent assessments across every candidate and shortlist based on actual competency, not just availability.&rdquo;</p>
            <div className="sat-nm">Recruitment Manager</div>
            <div className="sat-role">Renewable energy developer</div>
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
        <div className="rt-shead reveal"><p className="eyebrow">FAQ<b>.</b></p><h2 className="rt-h2">Frequently asked questions (FAQs)</h2><p className="rt-lead">Here are answers to the most commonly asked questions about Testlify&rsquo;s skills assessment for the energy industry.</p></div>
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
