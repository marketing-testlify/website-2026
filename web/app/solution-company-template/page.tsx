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
.tsd-shot{background:#fff;border:1px solid #F0E2E3;border-radius:22px;padding:10px;box-shadow:0 40px 90px rgba(110,11,14,.14);}
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
.tsd-shot .tsd-slot{display:block;width:100%;height:360px;border-radius:14px;overflow:hidden;background:#FDECEA;}
@media(max-width:960px){.tsd-shot .tsd-slot{height:280px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const Check = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const Star = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 18.6 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8z"></path></svg>
);

const faqs = [
  { q: 'How does Testlify support global, multi-region hiring?', a: 'Assess candidates across regions from one platform, with role-based access, 16+ languages and global benchmarking so every team hires to the same bar.' },
  { q: 'Is Testlify secure and compliant enough for enterprise?', a: 'Yes. Testlify is SOC 2 Type II, ISO 27001, GDPR and CCPA compliant, with full audit trails and EEOC-defensible assessments.' },
  { q: 'Can it integrate with our existing HR stack?', a: '100+ native ATS integrations plus Slack and an open API mean scores flow into the systems your teams already use.' },
  { q: 'How does pricing scale for large teams?', a: 'Predictable, transparent pricing scales from 10 to 10,000+ candidates without per-seat surprises.' },
  { q: 'Can we brand the candidate experience?', a: 'Yes — white-label the entire assessment journey with your logo, colors and domain.' },
];

const testimonials = [
  { quote: 'We cut first-round screening from days to hours. The shortlist Testlify hands us is genuinely job-ready.', name: 'Priya Nair', role: 'Head of TA, Fintech scale-up', initials: 'PN' },
  { quote: 'Every applicant gets a fair, identical evaluation — no matter how many apply.', name: 'Marcus Bell', role: 'Talent Partner, SaaS', initials: 'MB' },
  { quote: 'The proctoring and reporting gave our hiring managers confidence to trust scores over gut feel.', name: 'Sofia Ramirez', role: 'Recruiting Lead, Retail', initials: 'SR' },
];

const atsLogos = ['Greenhouse', 'Lever', 'Workday', 'BambooHR', 'Zoho Recruit', 'SAP SuccessFactors', 'Ashby', 'JazzHR'];

const cards = [
  { title: 'Role-based access & permissions', desc: 'Give every team the right level of control across regions and business units.' },
  { title: 'Reduce cost-per-hire', desc: 'Automate screening so recruiters spend time only on qualified candidates.' },
  { title: 'Customizable workflow', desc: 'Map assessments to your existing hiring stages and approval flows.' },
  { title: 'Scale without overhead', desc: 'From 10 to 10,000 candidates on predictable, transparent pricing.' },
  { title: 'Enterprise-grade security', desc: 'SOC 2 Type II, ISO 27001 and GDPR, with full audit trails.' },
  { title: 'Advanced analytics & insights', desc: 'Benchmark talent globally and prove quality-of-hire to leadership.' },
];

const bullets = ['15+ question types', '3,500+ tests, 4,500+ roles', '45+ coding languages', 'Custom workflows', 'Global benchmarking', '100+ ATS, Slack & API'];

const Slot = () => <div className="tsd-slot" />;

export default function SolutionCompanyTemplatePage() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Testlify AI is here — screen, interview & score candidates automatically." announcementCta="See what's new →" />

      <section className="tsd-hero">
        <div className="tsdw tsd-hgrid">
          <div className="tsd-copy reveal">
            <div className="tsd-crumb"><Link href="/solution-index">Solutions</Link><span>/</span><span>Company / Enterprise</span></div>
            <p className="eyebrow">For enterprises<b>.</b></p>
            <h1 className="tsd-h1">One-stop solution for <span className="tac">global enterprise hiring</span></h1>
            <p className="tsd-lead">Volume, cross-functional and global hiring, internal mobility and senior roles — assess with accuracy, speed and scale, with zero guesswork.</p>
            <div className="tsd-stats">
              <span className="tsd-statc">3,500+ tests · 4,500+ roles</span>
              <span className="tsd-statc">SOC 2 · ISO 27001 · GDPR</span>
              <span className="tsd-statc">100+ ATS integrations</span>
            </div>
            <div className="tsd-ctas">
              <CtaButton label="Talk to sales" href="#demo" variant="primary" size="md" icon="arrow" magnetic />
              <CtaButton label="Book a demo" href="#demo" variant="secondary" size="md" icon="play" />
            </div>
            <div className="tsd-ticks"><span className="tsd-tick"><Check />No credit card required</span><span className="tsd-tick"><Check />7-day free trial</span></div>
          </div>
          <div className="tsd-media reveal"><div className="tsd-shot"><Slot /></div></div>
        </div>
        <div className="tsdw tsd-logos reveal">
          <p className="tsd-logos-l">Trusted by 1,500+ hiring teams</p>
          <div className="tsd-logos-r">
            <span className="tsd-logo">LTIMindtree</span>
            <span className="tsd-logo">Thales</span>
            <span className="tsd-logo">Third Bridge</span>
            <span className="tsd-logo">Schweiger</span>
            <span className="tsd-logo">Adium</span>
          </div>
        </div>
      </section>

      {/* Section 1 — split */}
      <section className="tsd-sec">
        <div className="tsdw">
          <div className="tsd-grid2">
            <div className="tsd-copy reveal">
              <span className="tsd-num">1</span>
              <h2 className="tsd-h2">A better way to assess enterprise talent</h2>
              <p className="tsd-p">Evaluate thousands of candidates across regions and roles from a single platform, with the controls and integrations large teams need.</p>
              <div className="tsd-bl">
                {bullets.map((b) => (
                  <div className="tsd-bi" key={b}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="tsd-bt">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="tsd-media reveal"><div className="tsd-shot"><Slot /></div></div>
          </div>
        </div>
      </section>

      {/* Section 2 — grid (sand) */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-shead reveal">
            <p className="eyebrow">Outcomes that matter<b>.</b></p>
            <h2 className="tsd-h2">More than features — outcomes that matter</h2>
            <p className="tsd-lead">Enterprise hiring is measured on cost, speed and defensibility. Testlify delivers on all three.</p>
          </div>
          <div className="tsd-fgrid">
            {cards.map((c, i) => (
              <div className="tsd-fcard reveal" key={c.title}>
                <div className="tsd-fn">{i + 1}</div>
                <p className="tsd-ct">{c.title}</p>
                <p className="tsd-cd">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — split flipped */}
      <section className="tsd-sec">
        <div className="tsdw">
          <div className="tsd-grid2 tsd-flip">
            <div className="tsd-copy reveal">
              <span className="tsd-num">2</span>
              <h2 className="tsd-h2">White-labeling &amp; employer branding</h2>
              <p className="tsd-p">Deliver a fully branded assessment experience end to end — your logo, your colors, your candidate journey.</p>
              <a className="tsd-link" href="#">Explore white-label<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
            </div>
            <div className="tsd-media reveal"><div className="tsd-shot"><Slot /></div></div>
          </div>
        </div>
      </section>

      {/* Section 4 — split (sand) */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-grid2">
            <div className="tsd-copy reveal">
              <span className="tsd-num">3</span>
              <h2 className="tsd-h2">A fully functional free trial</h2>
              <p className="tsd-p">Explore the full platform — candidate portal, evaluation cards, reporting and proctoring — with no credit card required. Rated 4.7 on G2 by enterprise recruiters.</p>
              <Link className="tsd-link" href="/pricing">See pricing<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
            </div>
            <div className="tsd-media reveal"><div className="tsd-shot"><Slot /></div></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="tsd-sec">
        <div className="tsdw">
          <div className="tsd-shead reveal"><p className="eyebrow">Loved by hiring teams<b>.</b></p><h2 className="tsd-h2">Recruiters who hire on proof</h2></div>
          <div className="tsd-tgrid">
            {testimonials.map((t) => (
              <div className="tsd-tcard reveal" key={t.name}>
                <div className="tsd-stars"><Star /><Star /><Star /><Star /><Star /></div>
                <p className="tsd-quote">{t.quote}</p>
                <div className="tsd-author"><span className="tsd-avatar">{t.initials}</span><span><span className="tsd-aname">{t.name}</span><span className="tsd-arole">{t.role}</span></span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS logos (sand) */}
      <section className="tsd-sec tsd-sand">
        <div className="tsdw">
          <div className="tsd-shead reveal"><p className="eyebrow">Fits your stack<b>.</b></p><h2 className="tsd-h2">Works with the ATS you already use</h2><p className="tsd-lead">Push assessment results straight into your workflow with 100+ native, two-way integrations.</p></div>
          <div className="tsd-atsgrid reveal">
            {atsLogos.map((a) => (<span className="tsd-atslogo" key={a}>{a}</span>))}
            <Link className="tsd-atsmore" href="/integrations">+100 more<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
          </div>
        </div>
      </section>

      {/* Trust */}
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
          <div className="tsd-shead reveal"><p className="eyebrow">FAQ<b>.</b></p><h2 className="tsd-h2">Frequently asked questions</h2></div>
          <div className="tsd-faqw">
            {faqs.map((f, i) => (
              <div className={`tsd-faq reveal ${open[i] ? 'tsd-open' : ''}`} key={f.q} onClick={() => toggle(i)}>
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
          <h2 className="tsd-h2">Standardize hiring across every team.</h2>
          <p className="tsd-lead">Give every requisition the same defensible, skills-based bar — and prove quality-of-hire to leadership. Talk to our enterprise team.</p>
          <div className="tsd-ctas">
            <CtaButton label="Talk to sales" href="#demo" variant="primary" size="lg" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="#" variant="light" size="lg" icon="play" />
          </div>
          <div className="tsd-ticks">
            {['Dedicated onboarding', 'SSO & audit trails', 'Volume pricing'].map((tk) => (
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
