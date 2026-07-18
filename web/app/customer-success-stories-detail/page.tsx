import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:#F23F44;}
a:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:88px 28px;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.h2{font-size:32px;line-height:1.14;font-weight:800;letter-spacing:-1px;margin:0;color:#1A1014;}
.lead{font-size:18px;line-height:1.62;color:#5A4B4E;margin:0;}
.cs-hero{background:radial-gradient(1000px 520px at 80% -14%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;padding:46px 28px 0;}
.cs-crumb{font-size:13px;color:#9A878A;font-weight:600;margin:0 0 30px;display:flex;align-items:center;gap:9px;flex-wrap:wrap;}
.cs-crumb .sep{color:#D6C4C7;}
.cs-logo{width:150px;height:52px;margin-bottom:24px;}
.cs-h1{font-size:44px;line-height:1.1;font-weight:800;letter-spacing:-1.6px;margin:0;max-width:820px;}
.cs-sub{font-size:19px;line-height:1.55;color:#5A4B4E;margin:20px 0 0;max-width:680px;}
.cs-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:48px;border:1px solid #F0E2E3;border-radius:20px;overflow:hidden;background:#fff;box-shadow:0 20px 46px rgba(110,11,14,.08);}
.cs-metric{padding:30px 30px;border-right:1px solid #F4E7E8;}
.cs-metric:last-child{border-right:0;}
.cs-metric .n{font-size:40px;font-weight:800;letter-spacing:-1.4px;color:#F23F44;line-height:1;}
.cs-metric .l{font-size:14px;color:#6C5A5D;margin-top:11px;line-height:1.45;}
.cs-body{display:grid;grid-template-columns:1fr 336px;gap:64px;align-items:start;}
.cs-block{margin-bottom:44px;}
.cs-block:last-child{margin-bottom:0;}
.cs-block h2{font-size:24px;font-weight:800;letter-spacing:-.6px;color:#1A1014;margin:0 0 16px;}
.cs-block p{font-size:16.5px;line-height:1.72;color:#5A4B4E;margin:0 0 15px;}
.cs-block p:last-child{margin-bottom:0;}
.cs-quote{background:#FBF3EE;border-radius:20px;padding:38px 40px;margin:8px 0 44px;}
.cs-quote p{font-size:23px;line-height:1.42;font-weight:600;letter-spacing:-.4px;color:#1A1014;margin:0 0 22px;}
.cs-qby{display:flex;align-items:center;gap:14px;}
.cs-qav{width:48px;height:48px;border-radius:50%;overflow:hidden;flex:none;background:#F0E2E3;}
.cs-qn{font-size:15px;font-weight:700;color:#1A1014;}
.cs-qr{font-size:13.5px;color:#8A7A7D;}
.cs-card{position:sticky;top:120px;background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:28px;box-shadow:0 22px 50px rgba(110,11,14,.09);}
.cs-card h3{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.cs-facts{list-style:none;margin:0 0 22px;padding:0;}
.cs-facts li{padding:13px 0;border-bottom:1px solid #F4E7E8;}
.cs-facts li:last-child{border-bottom:0;}
.cs-facts .k{font-size:12.5px;color:#9A878A;font-weight:500;margin-bottom:3px;}
.cs-facts .v{font-size:15px;color:#1A1014;font-weight:700;}
.cs-prod{display:flex;flex-wrap:wrap;gap:8px;}
.cs-prodchip{font-size:12.5px;font-weight:600;color:#46383C;background:#FFF0EF;border:1px solid #FCE0DE;padding:6px 12px;border-radius:100px;}
.cs-card .btn{margin-top:22px;}
.cs-relgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.cs-relcard{background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s,border-color .3s;display:block;}
.cs-relcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.cs-relmetric{font-size:22px;font-weight:800;letter-spacing:-.6px;color:#F23F44;margin-bottom:12px;}
.cs-rellogo{font-size:14px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.cs-relcard p{font-size:13.5px;line-height:1.55;color:#6C5A5D;margin:0;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.cs-sh{max-width:640px;margin:0 auto 40px;text-align:center;}
@media(max-width:920px){
  .cs-h1{font-size:33px;letter-spacing:-1px;}
  .h2{font-size:26px;}
  .sec{padding:60px 22px;}
  .cs-metrics{grid-template-columns:1fr;}
  .cs-metric{border-right:0;border-bottom:1px solid #F4E7E8;}
  .cs-metric:last-child{border-bottom:0;}
  .cs-body{grid-template-columns:1fr;gap:40px;}
  .cs-card{position:static;}
  .cs-relgrid{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const metrics = [
  { n: '58%', l: 'less time-to-hire' },
  { n: '3.4×', l: 'more qualified candidates shortlisted' },
  { n: '92%', l: 'assessment completion rate' },
];

const facts = [
  { k: 'Industry', v: 'Professional services' },
  { k: 'Company size', v: '50–200 employees' },
  { k: 'Location', v: 'Cape Town, South Africa' },
  { k: 'Use case', v: 'Volume + specialist hiring' },
];

const products = ['Skill assessments', 'AI resume screener', 'Video interviews'];

const story = [
  {
    heading: 'The challenge',
    paras: [
      'Arch Advisory Group hires across finance, consulting and operations, where a single wrong hire costs months of billable momentum. Their recruiters were manually reading hundreds of résumés per role, then running back-to-back phone screens to sort the pile.',
      'The process was slow, subjective and impossible to defend. Two recruiters could rank the same candidate completely differently, and there was no consistent record of why anyone advanced.',
    ],
  },
  {
    heading: 'The solution',
    paras: [
      'The team moved screening to the front of the funnel. Every applicant now takes a role-specific Testlify assessment before a human ever reads a résumé, and the AI resume screener ranks the rest against the same structured skill profile.',
      'Recruiters review a single ranked shortlist with the evidence attached — scores, skill breakdowns and integrity flags — instead of a stack of PDFs. High-stakes roles add a short async video interview, scored against the same rubric.',
    ],
  },
];

const storyAfter = [
  {
    heading: 'The results',
    paras: [
      'Within a quarter, time-to-hire dropped 58% and recruiters were shortlisting 3.4× more candidates who actually cleared later stages. Completion rates held at 92% because the assessments stayed short and candidate-friendly.',
      'Most importantly, hiring managers stopped second-guessing the pipeline. Consistent, EEOC-defensible scoring meant every shortlist could be explained — to a hiring manager, to legal, or to the candidate.',
    ],
  },
];

const related = [
  { metric: '↓ 44% cost per hire', company: 'Finovo', quote: 'Structured assessments removed bias from our first round and widened our funnel.' },
  { metric: '91% completion rate', company: 'Orbit Retail', quote: 'We hire seasonal staff at huge volume — Testlify keeps quality high without slowing us down.' },
  { metric: '3.4× qualified hires', company: 'Vela Health', quote: 'Compliance loved the audit trail; recruiters loved the time it gave back.' },
];

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="See how Arch Advisory Group cut time-to-hire by 58%" />

      <section className="cs-hero"><div className="wrap">
        <p className="cs-crumb reveal in"><Link href="/customer-success-stories">Customers</Link><span className="sep">›</span><span>Professional services</span><span className="sep">›</span><span>Arch Advisory Group</span></p>
        <div className="cs-logo reveal in"><div style={{ width: '100%', height: '100%', background: '#F0E2E3', borderRadius: 8 }} /></div>
        <h1 className="cs-h1 reveal in">How Arch Advisory Group replaced gut-feel screening with verified skills</h1>
        <p className="cs-sub reveal in">A lean advisory team was spending days on phone screens and still mis-hiring. With Testlify, they built a skills-first shortlist in hours — and made every hire defensible.</p>
        <div className="cs-metrics reveal in">
          {metrics.map((m, i) => (
            <div className="cs-metric" key={i}><div className="n">{m.n}</div><div className="l">{m.l}</div></div>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="cs-body">
          <div>
            {story.map((b, i) => (
              <div className="cs-block reveal" key={i}><h2>{b.heading}</h2>{b.paras.map((p, j) => <p key={j}>{p}</p>)}</div>
            ))}
            <div className="cs-quote reveal">
              <p>{'“We replaced three rounds of gut-feel screening with one Testlify assessment. The AI shortlist is genuinely better than what we were producing by hand — and now every decision has evidence behind it.”'}</p>
              <div className="cs-qby"><span className="cs-qav" /><span><span className="cs-qn">Chrissie Blom</span><br /><span className="cs-qr">Head of Talent, Arch Advisory Group</span></span></div>
            </div>
            {storyAfter.map((b, i) => (
              <div className="cs-block reveal" key={i}><h2>{b.heading}</h2>{b.paras.map((p, j) => <p key={j}>{p}</p>)}</div>
            ))}
          </div>
          <aside className="cs-card reveal">
            <h3>Company snapshot</h3>
            <ul className="cs-facts">
              {facts.map((f, i) => (
                <li key={i}><div className="k">{f.k}</div><div className="v">{f.v}</div></li>
              ))}
            </ul>
            <div className="k" style={{ fontSize: '12.5px', color: '#9A878A', fontWeight: 500, marginBottom: 10 }}>Products used</div>
            <div className="cs-prod">{products.map((p, i) => <span className="cs-prodchip" key={i}>{p}</span>)}</div>
            <CtaButton label="Start your free trial" href="#" variant="primary" size="md" icon="arrow" />
          </aside>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="cs-sh"><p className="eyebrow reveal">More stories<b>.</b></p><h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Teams hiring smarter with Testlify</h2></div>
        <div className="cs-relgrid">
          {related.map((r, i) => (
            <Link className="cs-relcard reveal" href="/customer-success-stories-detail" key={i}><div className="cs-relmetric">{r.metric}</div><div className="cs-rellogo">{r.company}</div><p>{r.quote}</p></Link>
          ))}
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
