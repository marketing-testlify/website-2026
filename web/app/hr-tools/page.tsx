'use client';

import { useState } from 'react';
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
.ht-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.ht-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#F23F44;margin:0 0 16px;}
.ht-eyebrow .dot{color:#F23F44;}
.ht-crumb{font-size:13px;color:#8A7A7D;display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:18px;}
.ht-crumb a:hover{color:#F23F44;}
.ht-hero{position:relative;overflow:hidden;padding:62px 28px 46px;background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.ht-h1{font-size:52px;line-height:1.05;font-weight:800;letter-spacing:-1.6px;margin:0;}
.ht-h1 em{font-style:normal;color:#F23F44;}
.ht-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px auto 0;max-width:600px;}
.ht-tabs{display:flex;gap:9px;justify-content:center;flex-wrap:wrap;margin-top:30px;}
.ht-tab{border:1px solid #EFE2E3;background:#fff;border-radius:999px;padding:9px 18px;font-size:13.5px;font-weight:600;color:#6A5A5D;cursor:pointer;font-family:inherit;transition:all .18s;}
.ht-tab:hover{border-color:#FBD0D1;color:#F23F44;}
.ht-tab.on{background:#F23F44;color:#fff;border-color:#F23F44;}
.ht-sec{padding:56px 28px 40px;}
.ht-sec.sand{background:#FBF3EE;}
.ht-shead{margin:0 auto 30px;max-width:760px;}
.ht-h2{font-size:27px;font-weight:800;letter-spacing:-.6px;margin:0;}
.ht-h2p{font-size:15.5px;line-height:1.55;color:#6C5A5D;margin:10px 0 0;}
.ht-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.ht-card{display:flex;flex-direction:column;background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:24px 24px 22px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.ht-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.ht-ic{width:46px;height:46px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.ht-tag{font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#A9999C;margin:0 0 8px;}
.ht-ct{font-size:17px;font-weight:700;letter-spacing:-.3px;margin:0 0 7px;}
.ht-cd{font-size:14px;line-height:1.55;color:#7C6A6D;margin:0 0 18px;}
.ht-go{margin-top:auto;display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:#F23F44;}
.ht-go svg{transition:transform .25s;}
.ht-card:hover .ht-go svg{transform:translateX(3px);}
.ht-band{background:radial-gradient(900px 400px at 50% 0%,#2A1417,#1A1014);color:#fff;padding:70px 28px;text-align:center;}
.ht-band h2{font-size:32px;font-weight:800;letter-spacing:-.8px;margin:0;}
.ht-band p{font-size:16px;line-height:1.6;color:#D8C5C8;margin:16px auto 26px;max-width:520px;}
@media(max-width:1000px){.ht-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.ht-h1{font-size:36px;}.ht-grid{grid-template-columns:1fr;}.ht-hero{padding:44px 22px 34px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type Kind = 'calc' | 'gen';
type Tool = { title: string; tag: string; kind: Kind; desc: string; cta: string };

const TOOLS: Tool[] = [
  { title: 'Cost per hire calculator', tag: 'Calculator', kind: 'calc', desc: 'Add up every recruiting cost from job posting to onboarding and get your true cost per hire.', cta: 'Calculate' },
  { title: 'Time to hire calculator', tag: 'Calculator', kind: 'calc', desc: 'Measure the average days from a role opening to an accepted offer, and spot the bottlenecks.', cta: 'Calculate' },
  { title: 'Quality of hire calculator', tag: 'Calculator', kind: 'calc', desc: 'Score new hires on performance and retention to prove the value each one adds.', cta: 'Calculate' },
  { title: 'Attrition rate calculator', tag: 'Calculator', kind: 'calc', desc: 'Track the percentage of employees leaving over any time frame to catch turnover early.', cta: 'Calculate' },
  { title: 'eNPS calculator', tag: 'Calculator', kind: 'calc', desc: 'Measure employee satisfaction and engagement to gauge workplace morale at a glance.', cta: 'Calculate' },
  { title: 'Applicant funnel calculator', tag: 'Calculator', kind: 'calc', desc: 'See candidate progress through each stage and optimise your conversion rates.', cta: 'Calculate' },
  { title: 'Offer acceptance rate calculator', tag: 'Calculator', kind: 'calc', desc: 'Measure the percentage of candidates who accept your offers and improve close rates.', cta: 'Calculate' },
  { title: 'Sourcing channel efficiency', tag: 'Calculator', kind: 'calc', desc: 'Find which recruitment channels bring in the highest-quality candidates for the spend.', cta: 'Calculate' },
  { title: 'Recruiting conversion rate', tag: 'Calculator', kind: 'calc', desc: 'Track how effectively candidates move through each step of your hiring pipeline.', cta: 'Calculate' },
  { title: 'AI job description generator', tag: 'Generator', kind: 'gen', desc: 'Create detailed, inclusive job listings in seconds with the right keywords and responsibilities.', cta: 'Generate' },
  { title: 'Interview question generator', tag: 'Generator', kind: 'gen', desc: 'Get structured, scorable questions mapped to the exact skills a role requires.', cta: 'Generate' },
  { title: 'Interview scorecard builder', tag: 'Generator', kind: 'gen', desc: 'Build a consistent rating scale and scorecard so every candidate is judged the same way.', cta: 'Build' },
];

const titleMap: Record<string, string> = { all: 'All HR tools', calc: 'HR calculators', gen: 'Generators & builders' };
const introMap: Record<string, string> = {
  all: 'Every free calculator, generator and template in one place. Pick a tool and get an answer in under a minute.',
  calc: 'Plug in your numbers and benchmark the metrics that decide how fast and how well you hire.',
  gen: 'Generate role-ready job descriptions, interview kits and scorecards in seconds.',
};

export default function HrToolsPage() {
  const [filter, setFilter] = useState<'all' | Kind>('all');
  const tools = filter === 'all' ? TOOLS : TOOLS.filter((t) => t.kind === filter);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Free HR calculators & tools — cost-per-hire, time-to-hire, quality of hire and more" />

      <section className="ht-hero">
        <div className="ht-wrap" style={{ maxWidth: 820 }}>
          <div className="ht-crumb">
            <Link href="/blog">Resources</Link>
            <span>/</span>
            <span>HR tools</span>
          </div>
          <p className="ht-eyebrow reveal">
            Free HR tools<span className="dot">.</span>
          </p>
          <h1 className="ht-h1 reveal">
            Stop guessing your
            <br />
            <em>hiring numbers</em>
          </h1>
          <p className="ht-sub reveal">
            Free calculators and templates to measure, benchmark and improve every stage of your hiring — no sign-up, no catch. Simplify and automate your most complex HR tasks.
          </p>
          <div className="ht-tabs reveal">
            <button className={`ht-tab ${filter === 'all' ? 'on' : ''}`} onClick={() => setFilter('all')}>All tools</button>
            <button className={`ht-tab ${filter === 'calc' ? 'on' : ''}`} onClick={() => setFilter('calc')}>Calculators</button>
            <button className={`ht-tab ${filter === 'gen' ? 'on' : ''}`} onClick={() => setFilter('gen')}>Generators</button>
          </div>
        </div>
      </section>

      <section className="ht-sec">
        <div className="ht-wrap">
          <div className="ht-shead">
            <h2 className="ht-h2">{titleMap[filter]}</h2>
            <p className="ht-h2p">{introMap[filter]}</p>
          </div>
          <div className="ht-grid">
            {tools.map((t) => (
              <Link className="ht-card" href="/hr-tools-detail" key={t.title}>
                <div className="ht-ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                    <line x1="8" y1="6" x2="16" y2="6"></line>
                    <line x1="8" y1="10" x2="16" y2="10"></line>
                    <line x1="8" y1="14" x2="12" y2="14"></line>
                  </svg>
                </div>
                <p className="ht-tag">{t.tag}</p>
                <p className="ht-ct">{t.title}</p>
                <p className="ht-cd">{t.desc}</p>
                <span className="ht-go">
                  {t.cta}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-band">
        <div className="ht-wrap">
          <h2>Numbers point the way. Testlify gets you there.</h2>
          <p>Calculators show the gap. Skills-based assessments close it — screen faster, shortlist better and cut cost per hire for real.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CtaButton label="Try for free" href="/pricing" variant="light" size="lg" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="/contact" variant="ghost" size="lg" icon="play" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
