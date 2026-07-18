'use client';

import { useState, useEffect } from 'react';
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
.rtw{max-width:1240px;margin:0 auto;padding:0 28px;}
.rtsec{padding:96px 0;}
.rtsand{background:#FBF3EE;}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0;}.eyebrow b{color:#F23F44;}
.rt-h1{font-size:52px;font-weight:800;letter-spacing:-1.6px;line-height:1.06;margin:16px 0 0;}
.rt-h2{font-size:34px;font-weight:800;letter-spacing:-.8px;line-height:1.16;margin:14px 0 0;}
.rt-lead{font-size:17.5px;line-height:1.6;color:#5A4B4E;margin:20px 0 0;}
.rt-p{font-size:15.5px;line-height:1.64;color:#5A4B4E;margin:14px 0 0;}
.rt-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;margin-bottom:18px;}.rt-crumb a{color:#8A7A7D;}.rt-crumb a:hover{color:#F23F44;}
.rt-hero{padding:74px 0 88px;background:linear-gradient(180deg,#FFF8F7 0%,#fff 82%);}
.rt-hgrid{display:grid;grid-template-columns:1.02fr .98fr;gap:60px;align-items:center;}
.rt-ticks{display:flex;gap:22px;flex-wrap:wrap;margin-top:24px;}
.rt-tick{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#6C5A5D;}
.rt-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
/* hero funnel card */
.rt-fcard{background:#fff;border:1px solid #F0E2E3;border-radius:22px;box-shadow:0 40px 90px rgba(110,11,14,.14);overflow:hidden;animation:rtfloat 6s ease-in-out infinite;}
@keyframes rtfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.rt-ftop{display:flex;align-items:baseline;justify-content:space-between;padding:18px 22px 8px;}
.rt-ftt{font-size:14px;font-weight:800;color:#1A1014;}
.rt-fts{font-size:12px;font-weight:600;color:#F23F44;background:#FFF0EF;border-radius:100px;padding:4px 11px;}
.rt-funnel{padding:6px 22px 16px;display:flex;flex-direction:column;gap:9px;}
.rt-frow{display:flex;align-items:center;gap:12px;}
.rt-fbar{height:34px;border-radius:9px;background:linear-gradient(90deg,#FF7A52,#F23F44);display:flex;align-items:center;padding:0 12px;color:#fff;font-size:12.5px;font-weight:700;white-space:nowrap;box-shadow:0 6px 14px rgba(242,63,68,.22);}
.rt-cand{display:flex;align-items:center;gap:12px;padding:14px 22px;border-top:1px solid #F4E9E9;background:#FCF6F5;}
.rt-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#FF7A52,#F23F44);color:#fff;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;flex:none;}
.rt-cn{font-size:14px;font-weight:700;}.rt-cr{font-size:12px;color:#8A7A7D;}
.rt-top8{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:5px 11px;border-radius:100px;}
.rt-scores{padding:14px 22px 20px;display:flex;flex-direction:column;gap:11px;}
.rt-scr{display:flex;align-items:center;gap:12px;}
.rt-scl{font-size:12.5px;font-weight:600;color:#46383C;width:120px;flex:none;}
.rt-scbar{flex:1;height:8px;border-radius:6px;background:#F4E7E8;overflow:hidden;}
.rt-scbar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#FF7A52,#F23F44);width:0;animation:rtfill 1.4s cubic-bezier(.4,0,.2,1) forwards;}
@keyframes rtfill{to{width:var(--w);}}
.rt-scv{font-size:13px;font-weight:800;color:#F23F44;width:34px;text-align:right;flex:none;}
/* trust strip */
.rt-trust{padding:38px 0 8px;}
.rt-trust-l{text-align:center;font-size:13.5px;font-weight:600;color:#8A7A7D;margin:0 0 22px;}.rt-trust-l strong{color:#F23F44;font-weight:800;}
.rt-marqw{position:relative;max-width:1100px;margin:0 auto;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);}
.rt-marq{display:flex;width:max-content;gap:60px;animation:rtmarquee 30s linear infinite;align-items:center;}
.rt-marq-i{font-size:22px;font-weight:700;color:#C9B9BC;letter-spacing:-.4px;white-space:nowrap;}
@keyframes rtmarquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
/* stat band — matches features .metricrow strip below hero */
.statrow{display:grid;grid-template-columns:repeat(4,1fr);}
.stat{text-align:center;padding:4px 22px;}
.stat + .stat{border-left:1px solid #EFE3E4;}
.statn{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#1A1014;font-variant-numeric:tabular-nums;}
.statn .u{color:#D98C8F;font-weight:600;}
.statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:10px;line-height:1.45;}
/* generic grid2 */
.rt-g2{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.rt-flip .rt-copy{order:2;}
.rt-chk{display:flex;flex-direction:column;gap:12px;margin-top:22px;}
.rt-ci{display:flex;gap:10px;align-items:flex-start;font-size:15px;line-height:1.5;color:#46383C;font-weight:500;}
.rt-ci svg{flex:none;margin-top:3px;color:#1FA463;}
/* turnover calculator */
.rt-calc{background:#1A1014;border-radius:22px;padding:32px;color:#fff;box-shadow:0 30px 70px rgba(110,11,14,.18);}
.rt-calc-l{font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#C9A9AB;display:flex;justify-content:space-between;align-items:center;}
.rt-calc-lv{color:#FF9E7A;}
.rt-calc-emp{font-size:15px;font-weight:700;margin:20px 0 8px;display:flex;justify-content:space-between;}
.rt-range{width:100%;-webkit-appearance:none;appearance:none;height:6px;border-radius:6px;background:#3A2529;outline:none;}
.rt-range::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#F23F44;cursor:pointer;box-shadow:0 4px 12px rgba(242,63,68,.5);}
.rt-range::-moz-range-thumb{width:22px;height:22px;border:none;border-radius:50%;background:#F23F44;cursor:pointer;}
.rt-calc-big{font-size:52px;font-weight:800;letter-spacing:-2px;line-height:1;margin:24px 0 4px;background:linear-gradient(180deg,#fff,#FFC9BD);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
.rt-calc-sub{font-size:13.5px;color:#C2B1B4;}
.rt-calc-save{margin-top:20px;padding-top:18px;border-top:1px solid #3A2529;font-size:14.5px;line-height:1.5;color:#F1E7E8;}
.rt-calc-save b{color:#7FE0A6;}
.rt-calc-note{font-size:11.5px;color:#8A7A7D;margin-top:14px;line-height:1.5;}
/* insight card */
.rt-insight{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:26px;box-shadow:0 24px 50px rgba(110,11,14,.10);}
.rt-in-top{display:flex;align-items:center;gap:10px;font-size:12.5px;font-weight:700;color:#8A7A7D;}
.rt-in-badge{margin-left:auto;font-size:11.5px;font-weight:700;color:#1FA463;background:#E8F6EE;padding:5px 11px;border-radius:100px;}
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
.rt-tag{font-size:12px;font-weight:600;color:#5A4B4E;background:#FBF3EE;border:1px solid #F0E2E3;border-radius:100px;padding:6px 12px;}
.rt-viewall{display:inline-flex;align-items:center;gap:8px;margin-top:34px;color:#F23F44;font-weight:700;font-size:15.5px;}
/* sample question */
.rt-q{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:30px 32px;box-shadow:0 24px 50px rgba(110,11,14,.10);}
.rt-q-tag{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#F23F44;}
.rt-q-q{font-size:18px;font-weight:700;line-height:1.4;margin:12px 0 20px;}
.rt-opt{display:flex;gap:12px;align-items:flex-start;width:100%;text-align:left;border:1.5px solid #EADDDE;background:#FCFAFA;border-radius:12px;padding:14px 16px;font-family:inherit;font-size:14.5px;font-weight:500;color:#1A1014;cursor:pointer;margin-bottom:10px;transition:border-color .2s,background .2s;}
.rt-opt:hover{border-color:#FBD0D1;}
.rt-opt .rt-ol{width:24px;height:24px;border-radius:7px;background:#F1E2E2;color:#6C5A5D;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center;flex:none;}
.rt-opt.ok{border-color:#1FA463;background:#E8F6EE;}
.rt-opt.ok .rt-ol{background:#1FA463;color:#fff;}
.rt-opt.no{border-color:#E7B4B4;background:#FDECEC;}
.rt-reveal{display:none;margin-top:8px;background:#E8F6EE;border:1px solid #C7E9D5;border-radius:12px;padding:16px 18px;font-size:14px;line-height:1.55;color:#1A6B44;}
.rt-reveal.on{display:block;}
.rt-q-note{font-size:13px;font-weight:600;color:#8A7A7D;text-align:center;margin-top:22px;}
/* client story — dark centered (matches features) */
.rt-dquote{font-size:26px;line-height:1.5;font-weight:600;color:#fff;margin:18px 0 26px;}
.rt-dstat .stat + .stat{border-left-color:rgba(255,255,255,.14);}
.rt-dstat .statn{color:#fff;}
.rt-dstat .statn .u{color:#FF9E7A;}
.rt-dstat .statl{color:#C9B9BC;}
/* tertiary button */
.rt-tert{display:inline-flex;align-items:center;gap:8px;margin-top:24px;color:#F23F44;font-weight:700;font-size:15.5px;}
.rt-tert svg{transition:transform .2s;}
.rt-tert:hover svg{transform:translateX(4px);}
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
.rt-shead{text-align:center;max-width:720px;margin:0 auto;}
@media(max-width:960px){.rt-hgrid,.rt-g2,.rt-cl{grid-template-columns:1fr;gap:40px;}.rt-flip .rt-copy{order:1;}.statrow{grid-template-columns:1fr 1fr;row-gap:34px;}.stat + .stat{border-left:none;}.rt-roles{grid-template-columns:1fr;}.rt-ats{grid-template-columns:repeat(3,1fr);}.rt-h1{font-size:38px;}.rt-h2{font-size:27px;}.rtsec{padding:64px 0;}}
@media(max-width:560px){.rt-ats{grid-template-columns:repeat(2,1fr);}.statrow{grid-template-columns:1fr;}}
h1,h2,h3,h4,.rt-h1,.rt-h2,.eyebrow{text-wrap:balance;}p,li,.rt-p,.rt-lead{text-wrap:pretty;}/*om-balance-rule*/
`;

const Check = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

const FAQS = [
  { q: 'What is a retail skills assessment test?', a: 'A short, validated test that scores a candidate on the skills a retail job needs: customer service, sales, numeracy, and reliability. It predicts on-the-job performance better than a resume.' },
  { q: 'Which tests should I use to hire a retail sales associate?', a: 'Combine a customer service test, a sales aptitude test, and a reliability check. For store managers, add cognitive aptitude and leadership.' },
  { q: 'How do I hire seasonal staff fast without lowering quality?', a: 'Send one link to your applicant pool. Get a ranked shortlist in hours. Managers review only candidates who already clear the bar.' },
  { q: 'Can a skills test really reduce retail turnover?', a: 'Retail turnover runs near 60% a year, and replacing one hire costs $2,000 to $10,000. Hiring for reliability and fit keeps more people past 90 days.' },
  { q: 'Do store managers need training to use it?', a: 'No. Managers send a link and read a ranked shortlist. Tests are pre-built, so there is nothing to set up or grade.' },
  { q: 'How does it fit our ATS?', a: 'Testlify connects to major ATS and HRIS tools, plus an open API. Tests fire automatically and results sync back.' },
  { q: 'Are the tests valid and fair across stores?', a: 'Yes. Standardized, science-backed scoring judges every candidate at every location on the same criteria.' },
];

const OPTS = [
  { letter: 'A', text: 'Explain that online orders can only be refunded online.' },
  { letter: 'B', text: 'Apologize, take ownership, and offer an immediate fix.' },
  { letter: 'C', text: 'Call a manager and step away from the counter.' },
  { letter: 'D', text: 'Walk them through the full return policy first.' },
];

export default function RetailIndustryPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [employees, setEmployees] = useState(500);
  const [picked, setPicked] = useState<string | null>(null);

  useEffect(() => {
    const runCount = (el: HTMLElement) => {
      const to = +(el.dataset.to || '0');
      const comma = el.dataset.comma === '1';
      const dur = 1500;
      let st: number | null = null;
      const fmt = (n: number) => { n = Math.round(n); return comma ? n.toLocaleString('en-US') : String(n); };
      const tick = (t: number) => {
        if (st === null) st = t;
        const p = Math.min(1, (t - st) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(to * e);
        if (p < 1) requestAnimationFrame(tick); else el.textContent = fmt(to);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          en.target.querySelectorAll<HTMLElement>('.v[data-to]').forEach(runCount);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.statrow').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const emp = employees < 0 ? 0 : employees;
  const loss = emp * 0.60 * 4000;
  const save = loss * 0.25;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." />

      <section className="rt-hero"><div className="rtw rt-hgrid">
        <div className="rt-copy reveal">
          <div className="rt-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Industry / Retail</span></div>
          <p className="eyebrow">For retail teams<b>.</b></p>
          <h1 className="rt-h1">Hire retail staff who <span style={{ color: '#F23F44' }}>keep customers coming back</span></h1>
          <p className="rt-lead">Skills tests show you who can perform before you hire them. Fill stores faster, cut turnover, and keep your best people longer.</p>
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
          <div className="rt-fcard">
            <div className="rt-ftop"><span className="rt-ftt">Store applicant funnel</span><span className="rt-fts">Holiday season</span></div>
            <div className="rt-funnel">
              <div className="rt-frow"><span className="rt-fbar" style={{ width: '100%' }}>3,200 applicants</span></div>
              <div className="rt-frow"><span className="rt-fbar" style={{ width: '78%' }}>2,400 assessed</span></div>
              <div className="rt-frow"><span className="rt-fbar" style={{ width: '52%' }}>1,050 job-fit</span></div>
              <div className="rt-frow"><span className="rt-fbar" style={{ width: '30%' }}>280 shortlist</span></div>
            </div>
            <div className="rt-cand"><span className="rt-av">PS</span><span><span className="rt-cn">Priya S.</span><br /><span className="rt-cr">Sales Associate</span></span><span className="rt-top8">Top 8%</span></div>
            <div className="rt-scores">
              <div className="rt-scr"><span className="rt-scl">Customer Service</span><span className="rt-scbar"><i style={{ ['--w' as string]: '94%', animationDelay: '.15s' } as React.CSSProperties}></i></span><span className="rt-scv">94%</span></div>
              <div className="rt-scr"><span className="rt-scl">Sales Aptitude</span><span className="rt-scbar"><i style={{ ['--w' as string]: '89%', animationDelay: '.3s' } as React.CSSProperties}></i></span><span className="rt-scv">89%</span></div>
              <div className="rt-scr"><span className="rt-scl">Reliability</span><span className="rt-scbar"><i style={{ ['--w' as string]: '86%', animationDelay: '.45s' } as React.CSSProperties}></i></span><span className="rt-scv">86%</span></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand" style={{ paddingTop: '44px', paddingBottom: '44px' }}><div className="rtw">
        <div className="statrow reveal">
          <div className="stat"><div className="statn"><span className="v" data-to="60">0</span><span className="u">%</span></div><div className="statl">annual retail staff turnover rate (BLS, 2025)</div></div>
          <div className="stat"><div className="statn"><span className="v" data-to="75">0</span><span className="u">%</span></div><div className="statl">less screening time with skills-based tests</div></div>
          <div className="stat"><div className="statn"><span className="v" data-to="3500" data-comma="1">0</span><span className="u">+</span></div><div className="statl">validated tests ready to send today</div></div>
          <div className="stat"><div className="statn"><span className="v" data-to="100">0</span><span className="u">+</span></div><div className="statl">native ATS &amp; HRIS integrations</div></div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw rt-g2">
        <div className="rt-copy reveal">
          <p className="eyebrow">The problem<b>.</b></p>
          <h2 className="rt-h2">Turnover quietly drains every store you run</h2>
          <p className="rt-p">Retail loses about 60% of its staff a year, and most quit within months. Every weak hire means lost sales, slower service, and another role to fill from scratch.</p>
          <div className="rt-chk">
            <div className="rt-ci"><Check />You rehire the same store roles all year long.</div>
            <div className="rt-ci"><Check />Seasonal peaks force fast hiring with no time to vet.</div>
            <div className="rt-ci"><Check />Resumes hide who can actually serve and sell.</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="rt-calc">
            <div className="rt-calc-l"><span>What turnover costs you</span><span className="rt-calc-lv">Live estimate</span></div>
            <div className="rt-calc-emp"><span>Store employees</span><span>{emp.toLocaleString('en-US')}</span></div>
            <input className="rt-range" type="range" min="10" max="5000" step="10" value={employees} onChange={(e) => setEmployees(+e.target.value)} />
            <div className="rt-calc-big">{money(loss)}</div>
            <div className="rt-calc-sub">lost to turnover every year</div>
            <div className="rt-calc-save">Cut turnover just 25% with better hiring and save <b>{money(save)}</b> a year.</div>
            <div className="rt-calc-note">Based on ~60% retail turnover (BLS) and $4,000 average replacement cost (McKinsey). Adjust the slider for your business.</div>
          </div>
        </div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw rt-g2 rt-flip">
        <div className="rt-copy reveal">
          <p className="eyebrow">Why Testlify<b>.</b></p>
          <h2 className="rt-h2">A skills test shows what a resume can't</h2>
          <p className="rt-p">Testlify puts every applicant through a short, retail-specific test, then ranks them on the skills that drive sales and retention. You see who can perform on the floor before you spend a minute interviewing.</p>
          <div className="rt-chk">
            <div className="rt-ci"><Check />Measure customer service and sales with real store scenarios.</div>
            <div className="rt-ci"><Check />Score reliability so you hire associates who stay through the season.</div>
            <div className="rt-ci"><Check />Screen your whole applicant pool in one click, then rank by fit.</div>
          </div>
        </div>
        <div className="rt-media reveal">
          <div className="rt-insight">
            <div className="rt-in-top"><span>Candidate insight · Sales Associate</span><span className="rt-in-badge">Strong fit · Top 12%</span></div>
            <div className="rt-scores" style={{ padding: '18px 0 4px' }}>
              <div className="rt-scr"><span className="rt-scl">Customer service fit</span><span className="rt-scbar"><i style={{ ['--w' as string]: '92%', animationDelay: '.15s' } as React.CSSProperties}></i></span><span className="rt-scv">92</span></div>
              <div className="rt-scr"><span className="rt-scl">Sales &amp; upselling</span><span className="rt-scbar"><i style={{ ['--w' as string]: '88%', animationDelay: '.3s' } as React.CSSProperties}></i></span><span className="rt-scv">88</span></div>
              <div className="rt-scr"><span className="rt-scl">Numeracy &amp; cash</span><span className="rt-scbar"><i style={{ ['--w' as string]: '81%', animationDelay: '.45s' } as React.CSSProperties}></i></span><span className="rt-scv">81</span></div>
            </div>
            <div className="rt-calc-save" style={{ borderTop: '1px solid #F4E7E8', color: '#46383C' }}>Likely to stay 6+ months <b style={{ color: '#1FA463' }}>84%</b></div>
          </div>
        </div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">Retail roles<b>.</b></p><h2 className="rt-h2">Retail skills tests that predict store performance</h2><p className="rt-lead">Validated, pre-employment tests for every retail role. Score customer service, sales aptitude, upselling, product knowledge, and reliability.</p></div>
        <div className="rt-roles reveal">
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span></div>
            <h3>Sales Associate</h3><p className="rt-role-d">Sell, serve, and hit floor targets.</p>
            <div className="rt-tags"><span className="rt-tag">Customer service</span><span className="rt-tag">Upselling</span><span className="rt-tag">Product knowledge</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg></span></div>
            <h3>Cashier</h3><p className="rt-role-d">Fast, accurate checkout and service.</p>
            <div className="rt-tags"><span className="rt-tag">Numeracy</span><span className="rt-tag">Attention</span><span className="rt-tag">Service</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span></div>
            <h3>Store Manager</h3><p className="rt-role-d">Lead the team and own store KPIs.</p>
            <div className="rt-tags"><span className="rt-tag">Cognitive aptitude</span><span className="rt-tag">Leadership</span><span className="rt-tag">KPIs</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></span></div>
            <h3>Visual Merchandiser</h3><p className="rt-role-d">Bring the brand to life in-store.</p>
            <div className="rt-tags"><span className="rt-tag">Creativity</span><span className="rt-tag">Brand</span><span className="rt-tag">Organization</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></span></div>
            <h3>Stock / Inventory</h3><p className="rt-role-d">Keep shelves accurate and stocked.</p>
            <div className="rt-tags"><span className="rt-tag">Accuracy</span><span className="rt-tag">Speed</span><span className="rt-tag">Organization</span></div>
          </div>
          <div className="rt-role">
            <div className="rt-role-h"><span className="rt-role-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span></div>
            <h3>Customer Service Rep</h3><p className="rt-role-d">Resolve issues with empathy and speed.</p>
            <div className="rt-tags"><span className="rt-tag">Communication</span><span className="rt-tag">Empathy</span><span className="rt-tag">Problem-solving</span></div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}><Link className="rt-viewall reveal" href="/test-library">View all test library<Arrow /></Link></div>
      </div></section>

      <section className="rtsec rtsand"><div className="rtw rt-g2">
        <div className="rt-copy reveal">
          <p className="eyebrow">See it in action<b>.</b></p>
          <h2 className="rt-h2">Try a question your candidates would get</h2>
          <p className="rt-p">Real retail scenarios that reveal judgment and instinct, not a confident interview. Every question is validated and scored automatically.</p>
          <div className="rt-chk">
            <div className="rt-ci"><Check />Situational judgment tested with real store scenarios.</div>
            <div className="rt-ci"><Check />Scored instantly — no grading, no subjectivity.</div>
            <div className="rt-ci"><Check />One of thousands of retail questions in the Testlify library.</div>
          </div>
          <p className="rt-p" style={{ fontWeight: 600, color: '#1A1014' }}>Plugs into your ATS. Live in days. SOC 2, GDPR &amp; ISO 27001 certified.</p>
          <Link className="rt-tert reveal" href="/pricing">Build a free assessment<Arrow /></Link>
        </div>
        <div className="rt-media reveal">
          <div className="rt-q">
            <span className="rt-q-tag">Customer Service Scenario · Sample question</span>
            <p className="rt-q-q">A customer is upset that their online order arrived damaged and wants a refund on the spot. What is the best first move?</p>
            {OPTS.map((o) => {
              let cls = '';
              if (picked) { if (o.letter === 'B') cls = 'ok'; else if (o.letter === picked) cls = 'no'; }
              return (
                <button key={o.letter} className={`rt-opt ${cls}`} onClick={() => setPicked(o.letter)}><span className="rt-ol">{o.letter}</span><span>{o.text}</span></button>
              );
            })}
            <div className={`rt-reveal ${picked ? 'on' : ''}`}>✓ Best answer: B. Strong associates de-escalate first, own the problem, and fix it fast. That's exactly what Testlify scores.</div>
          </div>
        </div>
      </div></section>

      <section className="rtsec" style={{ background: '#1A1014' }}><div className="rtw" style={{ maxWidth: '960px', textAlign: 'center' }}>
        <p className="eyebrow reveal" style={{ color: '#C9B9BC' }}>Client story<b>.</b></p>
        <p className="rt-dquote reveal" style={{ transitionDelay: '.04s' }}>&quot;Every holiday season we were buried in applicants across 80 stores. Testlify cut our screening from <span style={{ color: '#FF7A52' }}>weeks to days</span>, and the associates we hire now actually stay past the season.&quot;</p>
        <p className="reveal" style={{ color: '#fff', fontWeight: 700, margin: 0, transitionDelay: '.08s' }}>Maya Reyes</p>
        <p className="reveal" style={{ color: '#A9999C', fontSize: '14px', margin: '4px 0 40px', transitionDelay: '.1s' }}>VP Talent, Retail Company</p>
        <div className="statrow rt-dstat reveal" style={{ gridTemplateColumns: 'repeat(3,1fr)', maxWidth: '680px', margin: '0 auto', transitionDelay: '.12s' }}>
          <div className="stat"><div className="statn"><span className="v" data-to="55">0</span><span className="u">%</span></div><div className="statl">less time-to-hire</div></div>
          <div className="stat"><div className="statn"><span className="v" data-to="6">0</span><span className="u">x</span></div><div className="statl">recruiter efficiency</div></div>
          <div className="stat"><div className="statn"><span className="v" data-to="94">0</span><span className="u">%</span></div><div className="statl">candidate satisfaction</div></div>
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
        <div className="rt-atsmore reveal"><Link href="/integrations">View all ATS integration<Arrow /></Link></div>
      </div></section>

      <section className="rtsec"><div className="rtw">
        <div className="rt-shead reveal"><p className="eyebrow">FAQ<b>.</b></p><h2 className="rt-h2">Frequently asked questions (FAQs)</h2><p className="rt-lead">Want to know more about Testlify? Here are answers to the most commonly asked questions about our company.</p></div>
        <div className="rt-faqw">
          {FAQS.map((f, i) => (
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
