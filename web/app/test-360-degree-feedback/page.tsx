import Link from 'next/link';
import type { ReactNode } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import FAQ from '@/components/FAQ';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:#F23F44;}
a:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.hero{padding:52px 28px 70px;}
.herogrid{display:grid;grid-template-columns:1.05fr 1fr;gap:56px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#FFF0F0;color:#1A1014;font-size:13px;font-weight:600;padding:8px 16px 8px 8px;border-radius:999px;}
.pilltag{background:#F23F44;color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.04em;padding:5px 10px;border-radius:999px;}
.h1{font-size:50px;line-height:1.05;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h1 .acc{color:#F23F44;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.h2{font-size:34px;line-height:1.12;font-weight:800;letter-spacing:-1.2px;margin:0;color:#1A1014;}
.lead{font-size:18px;line-height:1.62;color:#5A4B4E;margin:0;}
.heroctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px;}
.trust{display:flex;align-items:center;gap:22px;flex-wrap:wrap;margin-top:22px;font-size:14px;color:#8A7A7D;font-weight:500;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.ft-panel{background:#fff;border:1px solid #EFE2E3;border-radius:20px;box-shadow:0 22px 50px rgba(110,11,14,.09);overflow:hidden;display:flex;align-items:center;justify-content:center;aspect-ratio:5/4;}
.ft-panelimg{width:100%;height:100%;display:block;object-fit:contain;padding:28px;background:#FBF3EE;}
.ft-sh{max-width:680px;margin:0 0 40px;}
.ft-sh.ctr{margin-left:auto;margin-right:auto;text-align:center;}
.ft-split{display:grid;grid-template-columns:1fr 1.05fr;gap:60px;align-items:center;}
.ft-split.rev .ft-splitcopy{order:2;}
.ft-chks{display:flex;flex-direction:column;gap:12px;margin-top:22px;}
.chk{display:flex;align-items:flex-start;gap:10px;font-size:15px;line-height:1.5;color:#46383C;font-weight:500;}
.chki{flex:none;width:20px;height:20px;color:#1FA463;margin-top:1px;}
.stepno{flex:none;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:10px;background:#F23F44;color:#fff;font-weight:800;font-size:15px;}
.stephead{display:flex;align-items:center;gap:14px;margin-bottom:14px;}
.ft-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.ft-card{background:#fff;border:1.4px solid #EFE1E2;border-radius:18px;padding:28px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s,border-color .3s;}
.ft-card:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.ft-cic{width:46px;height:46px;border-radius:12px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.ft-card h3{font-size:17.5px;font-weight:700;color:#1A1014;margin:0 0 8px;letter-spacing:-.3px;}
.ft-card p{font-size:14px;line-height:1.6;color:#6C5A5D;margin:0;}
.ft-acc{display:flex;flex-direction:column;gap:12px;max-width:860px;margin:0 auto;}
@media(max-width:960px){
  .herogrid,.ft-split{grid-template-columns:1fr;gap:38px;}
  .h1{font-size:38px;letter-spacing:-1.2px;}
  .h2{font-size:27px;}
  .sec{padding:64px 22px;}
  .hero{padding:40px 22px 50px;}
  .ft-split.rev .ft-splitcopy{order:0;}
  .ft-cards{grid-template-columns:1fr;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

function ChkIcon() {
  return (
    <svg className="chki" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
  );
}

const HERO_TICKS = ['Stronger leadership', 'Higher engagement', 'Better self-awareness'];

type Step = { n: string; title: string; points: string[]; img: string; alt: string };

const STEPS: Step[] = [
  {
    n: '1',
    title: 'Enable 360 feedback assessment',
    points: [
      'Turn any assessment into a 360 feedback test with a single toggle',
      'Add the built-in 360 Test from Personality & Culture',
      'Define reviewer roles like self, manager, peer, reportee, or custom roles',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/03/Current-location-pana.png',
    alt: 'Enable 360 feedback assessment',
  },
  {
    n: '2',
    title: 'Assign reviewers & send invites',
    points: [
      'Choose who will review whom',
      'Map each reviewer role to the person being reviewed',
      'Add multiple reviewers using their email addresses',
      'Send secure invites in minutes',
    ],
    img: 'https://testlify.com/wp-content/uploads/2023/06/Product-image-1-4-1024x741.png',
    alt: 'Assign reviewers and send invites',
  },
  {
    n: '3',
    title: 'Collect multi-source feedback',
    points: [
      'Reviewers complete the same 360 test from their perspective',
      'Track who has submitted feedback in real time',
      'Ensure all reviewers complete the assessment for report generation',
    ],
    img: 'https://testlify.com/wp-content/uploads/2022/11/Better-Skill-Set-Evaluation-Process.png',
    alt: 'Collect multi-source feedback',
  },
  {
    n: '4',
    title: 'Download comprehensive 360 feedback reports',
    points: [
      'Reports generate in real-time automatically once all feedback is submitted',
      'Download individual 360 feedback reports for each person reviewed',
      'Get consolidated insights from self, manager, peer, and reportee feedback in one report',
    ],
    img: 'https://testlify.com/wp-content/uploads/2024/02/How-to-simplify-candidate-screening-with-salesforce-test-1024x761.png',
    alt: 'Download comprehensive 360 feedback reports',
  },
];

type UseCase = { icon: ReactNode; title: string; desc: string };

const USE_CASES: UseCase[] = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z"></path></svg>,
    title: 'Training needs identification',
    desc: 'Spot hidden skill gaps and behavioral traits that traditional reviews miss.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"></circle><path d="M17 11l2 2 4-4"></path><path d="M1 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"></path></svg>,
    title: 'Manager effectiveness assessment',
    desc: 'Let teams anonymously evaluate managers to improve leadership quality.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M7 14l4-4 3 3 5-6"></path></svg>,
    title: 'Performance appraisals',
    desc: 'Get a complete, unbiased view of employee performance from every angle.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
    title: 'Succession planning',
    desc: 'Identify high-potential talent and build confident succession strategies backed by real feedback.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    title: 'Onboarding & probation reviews',
    desc: 'Understand how new hires are adapting from peer, manager, and team perspectives.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
    title: 'Leadership development',
    desc: 'Uncover growth opportunities and strengthen leadership effectiveness with multi-source insights.',
  },
];

const APART = [
  'Thoughtfully designed feedback flow for true multi-source evaluations',
  'Secure and consistent assessment experience for every reviewer',
  'Integrates with 100+ ATS platforms — no need for any additional tools',
  'Continuously improved based on real customer use cases',
];

const FAQ_ITEMS = [
  {
    q: 'What is the most important benefit of a 360 feedback review?',
    a: 'The most important benefit is increased self-awareness. By receiving feedback from managers, peers, direct reports, and themselves, individuals clearly see how their behavior and performance are perceived by others — revealing blind spots, validating strengths, and highlighting development areas traditional one-way reviews often miss.',
  },
  {
    q: 'How does the 360-degree evaluation method work?',
    a: 'A 360-degree evaluation collects performance feedback from multiple perspectives — the individual, their manager, peers, and direct reports — to provide a holistic view of strengths and development areas. Responses are aggregated into a consolidated report highlighting key patterns, perception gaps, and actionable insights.',
  },
  {
    q: 'What does a 360 survey measure?',
    a: "A 360 survey measures both behavioral competencies and performance perceptions from multiple sources, revealing how others experience an individual's actions and helping organizations identify strengths, gaps, and development opportunities.",
  },
  {
    q: 'Why should you use 360-degree feedback?',
    a: 'It provides a comprehensive, multi-source evaluation that uncovers blind spots traditional reviews often miss. It enhances self-awareness, supports professional growth, improves team collaboration, and strengthens leadership effectiveness.',
  },
  {
    q: 'Who should take part in a 360-degree feedback process?',
    a: 'The most effective process includes feedback from self, manager or supervisor, peers, direct reports or team members, and optional external stakeholders when relevant — ensuring diverse viewpoints and a balanced assessment.',
  },
  {
    q: 'Can Testlify 360 test be customized to our leadership model?',
    a: 'Yes. You can tailor reviewer roles (self, manager, peers, reportees), add custom questions aligned with your leadership competencies, and match the assessment to your internal leadership model.',
  },
  {
    q: 'Is the tool scientifically validated and enterprise-ready?',
    a: 'Yes. The Testlify 360 degree feedback tool is designed for enterprise use, with structured question formats and a role-based feedback flow aligned with assessment best practices.',
  },
];

export default function Test360DegreeFeedbackPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="New — 360 feedback reports now auto-generate in real time"
        announcementCta="See how it works"
        homeHref="/"
      />

      <section className="hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal in"><span className="pill"><span className="pilltag">360° FEEDBACK</span> Multi-source feedback, one clear report</span></div>
          <h1 className="h1 reveal in" style={{ marginTop: '22px' }}>Turn feedback into growth with <span className="acc">360 degree feedback test</span></h1>
          <p className="lead reveal in" style={{ marginTop: '22px', maxWidth: '520px' }}>Discover strengths, close skill gaps, and build smarter training programs with 360 tests.</p>
          <div className="reveal in" style={{ display: 'flex', gap: '10px', flexWrap: 'nowrap', marginTop: '22px' }}>
            {HERO_TICKS.map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fff', border: '1px solid #F0E2E3', borderRadius: '999px', padding: '8px 14px', fontSize: '13px', fontWeight: 600, color: '#46383C', whiteSpace: 'nowrap' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1FA463" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>{t}
              </span>
            ))}
          </div>
          <div className="heroctas reveal in">
            <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" magnetic={true} />
            <CtaButton label="Book a demo" href="/contact" variant="secondary" size="md" icon="play" />
          </div>
          <div className="trust reveal in"><span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Used by 40,000+ recruiters</span><span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}><span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>ISO certified · GDPR compliant</span></div>
        </div>
        <div className="ft-panel reveal in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ft-panelimg" src="https://testlify.com/wp-content/uploads/2026/01/Hire-the-Right-Candidates.png" alt="360 degree feedback tool" />
        </div>
      </div></div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="ft-sh ctr">
          <p className="eyebrow reveal">Overview<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>What is 360-degree feedback?</h2>
          <p className="lead reveal" style={{ transitionDelay: '.08s', marginTop: '16px' }}>A confidential, multi-source assessment method that gives a holistic view of employees by gathering performance, behavior, and competency input from managers, peers, subordinates, supervisors, and self-assessments.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '26px' }}>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 700, fontSize: '15px' }}>Connect with an expert <ArrowIcon /></Link>
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="ft-sh ctr"><p className="eyebrow reveal">How it works<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Testlify turns 360° feedback into a smooth flow</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {STEPS.map((s, i) => (
            <div className={i % 2 === 1 ? 'ft-split rev' : 'ft-split'} key={s.n}>
              <div className="reveal">
                <div className="stephead"><span className="stepno">{s.n}</span><h3 className="h2" style={{ fontSize: '22px' }}>{s.title}</h3></div>
                <div className="ft-chks">
                  {s.points.map((p) => (
                    <div className="chk" key={p}><ChkIcon />{p}</div>
                  ))}
                </div>
              </div>
              <div className="ft-panel reveal" style={{ transitionDelay: '.06s' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="ft-panelimg" src={s.img} alt={s.alt} />
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="ft-sh ctr"><p className="eyebrow reveal">Use cases<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Identify, develop, and elevate your workforce</h2></div>
        <div className="ft-cards reveal">
          {USE_CASES.map((c) => (
            <div className="ft-card" key={c.title}>
              <div className="ft-cic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="ft-split">
          <div className="ft-splitcopy">
            <p className="eyebrow reveal">Report<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>What you&apos;ll find inside your 360° feedback report</h2>
            <div className="ft-chks reveal" style={{ transitionDelay: '.08s' }}>
              <div className="chk"><ChkIcon /><span><b>Unified multi-source feedback</b> — all inputs from self, manager, peers, reportees, and custom roles in one clear report.</span></div>
              <div className="chk"><ChkIcon /><span><b>Visibility into perception gaps</b> — see how self-ratings compare with feedback from others.</span></div>
              <div className="chk"><ChkIcon /><span><b>Real-time reports</b> — auto-generated reports highlighting strengths and improvement areas.</span></div>
            </div>
          </div>
          <div className="ft-panel reveal" style={{ transitionDelay: '.06s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ft-panelimg" src="https://testlify.com/wp-content/uploads/2023/12/Diversity-is-Not-just-an-Ideal-1-1536x1536.png-3-1024x1024.webp" alt="360 feedback report" />
          </div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="ft-split">
          <div className="ft-splitcopy">
            <h2 className="h2 reveal">Built by experts. Loved by people</h2>
            <p className="lead reveal" style={{ transitionDelay: '.04s', marginTop: '16px' }}>Testlify&apos;s 360° Feedback Test is built to deliver structured, unbiased insights that help organizations strengthen leadership and make better people decisions.</p>
            <p className="reveal" style={{ transitionDelay: '.06s', fontWeight: 700, fontSize: '15px', margin: '22px 0 0', color: '#1A1014' }}>What sets it apart:</p>
            <div className="ft-chks reveal" style={{ transitionDelay: '.08s', marginTop: '12px' }}>
              {APART.map((a) => (
                <div className="chk" key={a}><ChkIcon />{a}</div>
              ))}
            </div>
            <div className="reveal" style={{ transitionDelay: '.1s', marginTop: '26px' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F23F44', fontWeight: 700, fontSize: '15px' }}>Get in touch <ArrowIcon /></Link>
            </div>
          </div>
          <div className="ft-panel reveal" style={{ transitionDelay: '.06s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="ft-panelimg" src="https://testlify.com/wp-content/uploads/2023/12/Diversity-is-Not-just-an-Ideal-1-1536x1536.png-3-1024x1024.webp" alt="Built by experts, loved by people" />
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="ft-sh ctr"><p className="eyebrow reveal">FAQ<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2></div>
        <div className="ft-acc">
          <FAQ items={FAQ_ITEMS} />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
