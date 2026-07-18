'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import Recognition from '@/components/Recognition';
import CtaBand from '@/components/CtaBand';

const CSS = `
body{margin:0;font-family:'Poppins',sans-serif;color:#1A1014;background:#fff;}
.tsdw{max-width:1240px;margin:0 auto;padding:0 28px;}
.tsd-sec{padding:96px 0;}
.tsd-sand{background:#FBF3EE;}
.eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0;}.eyebrow b{color:#F23F44;}
.tsd-h1{font-size:52px;font-weight:800;letter-spacing:-1.4px;line-height:1.08;margin:16px 0 0;}
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
.tsd-shot{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:10px;box-shadow:0 40px 90px rgba(110,11,14,.14);}
.tsd-shot image-slot{display:block;width:100%;height:360px;border-radius:14px;overflow:hidden;}
.tsd-shotimg{display:block;width:100%;height:360px;background-size:contain;background-repeat:no-repeat;background-position:center;background-color:#fff;border-radius:14px;}
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

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const Bullet = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 2"></path></svg>
);
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);
const Star = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 18.6 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8z"></path></svg>
);
const Stars = () => (
  <div className="tsd-stars"><Star /><Star /><Star /><Star /><Star /></div>
);

const stats = ['3,500+ validated tests', '13+ question formats', '100+ ATS integrations'];
const logos = ['Xneelo', 'Kimp', 'Endiprev', 'Virtual Gurus', 'HROne'];

const cards = [
  { title: 'Validated by experts', desc: 'Tests built and peer-reviewed by subject-matter experts.' },
  { title: 'Objective scoring', desc: 'Consistent, benchmarked scoring for every candidate.' },
  { title: 'Anti-cheat proctoring', desc: 'Webcam, full-screen and plagiarism detection keep results honest.' },
  { title: 'Enterprise security & compliance', desc: 'SOC 2 Type II, ISO 27001 and GDPR compliant.' },
  { title: 'Multilingual', desc: "Assess candidates in the language they're most comfortable in." },
  { title: 'Fully integratable', desc: '100+ native ATS integrations plus an open API.' },
];

const bullets1 = [
  'Standard operating procedures',
  'Compliance & regulatory steps',
  'Quality & safety processes',
  'Workflow & handoff knowledge',
  'Documentation standards',
  'Continuous improvement',
];
const bullets2 = [
  'Scenario-based questions',
  '13+ question formats',
  'Role-specific process libraries',
  'Auto-ranking by performance',
];

const testimonials = [
  { quote: 'We cut first-round screening from days to hours. The shortlist Testlify hands us is genuinely job-ready.', name: 'Priya Nair', role: 'Head of TA, Fintech scale-up', initials: 'PN' },
  { quote: 'Every applicant gets a fair, identical evaluation — no matter how many apply.', name: 'Marcus Bell', role: 'Talent Partner, SaaS', initials: 'MB' },
  { quote: 'The proctoring and reporting gave our hiring managers confidence to trust scores over gut feel.', name: 'Sofia Ramirez', role: 'Recruiting Lead, Retail', initials: 'SR' },
];

const atsLogos = ['Greenhouse', 'Lever', 'Workday', 'BambooHR', 'Zoho Recruit', 'SAP SuccessFactors', 'Ashby', 'JazzHR'];

const faqs = [
  { q: 'What is a process knowledge test?', a: 'It measures how well a candidate understands the procedures, standards and workflows a role depends on — tested through realistic, scenario-based questions.' },
  { q: 'Which roles is it best for?', a: 'Operations, manufacturing, finance, quality, compliance and any role where following the right process matters.' },
  { q: 'How is candidate data secured?', a: 'All data is encrypted in transit and at rest with strict access controls. Testlify is SOC 2 Type II, ISO 27001 and GDPR compliant.' },
  { q: 'Does Testlify integrate with our ATS?', a: 'Yes — 100+ native ATS integrations plus an open API, on every paid plan.' },
  { q: 'Can tests be customized?', a: 'Yes. Tailor process tests to your specific procedures, standards and role requirements.' },
  { q: 'Can it handle high-volume hiring?', a: 'Yes. Screen large candidate pools in hours without compromising quality.' },
];

const ctaTicks = ['7-day free trial', '45+ languages', 'Cancel anytime'];

export default function ProcessKnowledgeTestsPage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview &amp; score candidates automatically." />

      <section className="tsd-hero">
        <div className="tsdw tsd-hgrid">
          <div className="tsd-copy reveal">
            <div className="tsd-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Test type / Process knowledge tests</span></div>
            <p className="eyebrow">Process knowledge tests<b>.</b></p>
            <h1 className="tsd-h1">Process knowledge tests to hire people who know the how</h1>
            <p className="tsd-lead">Assess whether candidates understand the processes, standards and workflows a role depends on — before they start, not after.</p>
            <div className="tsd-stats">
              {stats.map((t) => (
                <span className="tsd-statc" key={t}>{t}</span>
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
            <div className="tsd-shot"><div className="tsd-shotimg"></div></div>
          </div>
        </div>
        <div className="tsdw tsd-logos reveal">
          <p className="tsd-logos-l">Trusted by 1,500+ hiring teams</p>
          <div className="tsd-logos-r">
            {logos.map((lg) => (
              <span className="tsd-logo" key={lg}>{lg}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: split — num 1, bullets, cta */}
      <section className="tsd-sec ">
        <div className="tsdw">
          <div className="tsd-grid2 ">
            <div className="tsd-copy reveal">
              <span className="tsd-num">1</span>
              <h2 className="tsd-h2">Test real process understanding</h2>
              <p className="tsd-p">Process knowledge tests measure how well candidates understand the standard procedures, compliance steps and workflows their role relies on — from operations to finance to quality.</p>
              <div className="tsd-bl">
                {bullets1.map((label) => (
                  <div className="tsd-bi" key={label}><Bullet /><span className="tsd-bt">{label}</span></div>
                ))}
              </div>
              <Link className="tsd-link" href="/test-library">Browse the test library<ArrowIcon /></Link>
            </div>
            <div className="tsd-media reveal">
              <div className="tsd-shot"><div className="tsd-shotimg"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: split — num 2, bullets, flipped */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-grid2 tsd-flip">
            <div className="tsd-copy reveal">
              <span className="tsd-num">2</span>
              <h2 className="tsd-h2">Assess with realistic, scenario-based questions</h2>
              <p className="tsd-p">Go beyond recall. Scenario-based questions test whether candidates can apply the right process in real situations, and auto-rank them by accuracy.</p>
              <div className="tsd-bl">
                {bullets2.map((label) => (
                  <div className="tsd-bi" key={label}><Bullet /><span className="tsd-bt">{label}</span></div>
                ))}
              </div>
            </div>
            <div className="tsd-media reveal">
              <div className="tsd-shot"><div className="tsd-shotimg"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: cards */}
      <section className="tsd-sec ">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Why Testlify<b>.</b></p>
            <h2 className="tsd-h2">Reliable, fair and built to scale</h2>
            <p className="tsd-lead">Everything you need to assess process knowledge with confidence.</p>
          </div>
          <div className="tsd-cards">
            {cards.map((c) => (
              <div className="tsd-card reveal" key={c.title}>
                <div className="tsd-ic"><ClockIcon /></div>
                <p className="tsd-ct">{c.title}</p>
                <p className="tsd-cd">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: split — num 3, cta, sand */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-grid2 ">
            <div className="tsd-copy reveal">
              <span className="tsd-num">3</span>
              <h2 className="tsd-h2">Cost-effective at scale</h2>
              <p className="tsd-p">Screen for process knowledge early to reduce mis-hires and onboarding time, with transparent pricing that scales with you.</p>
              <Link className="tsd-link" href="/pricing">See pricing<ArrowIcon /></Link>
            </div>
            <div className="tsd-media reveal">
              <div className="tsd-shot"><div className="tsd-shotimg"></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="tsd-sec">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Loved by hiring teams<b>.</b></p>
            <h2 className="tsd-h2">Recruiters who hire on proof</h2>
          </div>
          <div className="tsd-tgrid">
            {testimonials.map((t) => (
              <div className="tsd-tcard reveal" key={t.name}>
                <Stars />
                <p className="tsd-quote">{t.quote}</p>
                <div className="tsd-author">
                  <span className="tsd-avatar">{t.initials}</span>
                  <span><span className="tsd-aname">{t.name}</span><span className="tsd-arole">{t.role}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS grid */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Fits your stack<b>.</b></p>
            <h2 className="tsd-h2">Works with the ATS you already use</h2>
            <p className="tsd-lead">Push assessment results straight into your workflow with 100+ native, two-way integrations.</p>
          </div>
          <div className="tsd-atsgrid reveal">
            {atsLogos.map((a) => (
              <span className="tsd-atslogo" key={a}>{a}</span>
            ))}
            <Link className="tsd-atsmore" href="/integrations">+100 more<ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="tsd-trust">
        <div className="tsdw tsd-trow reveal">
          <div className="tsd-g2"><span className="tsd-g2n">4.7</span><span className="tsd-g2l">Rated 4.7 on G2<br />by 1,000+ reviewers</span></div>
          <div className="tsd-badges"><span className="tsd-badge">SOC 2 TYPE II</span><span className="tsd-badge">ISO 27001</span><span className="tsd-badge">GDPR</span><span className="tsd-badge">CCPA</span><span className="tsd-badge">100+ ATS INTEGRATIONS</span></div>
        </div>
      </section>

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
          <h2 className="tsd-h2">Hire people who know the process.</h2>
          <p className="tsd-lead">Prove who understands the how before day one — start assessing process knowledge in minutes.</p>
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
