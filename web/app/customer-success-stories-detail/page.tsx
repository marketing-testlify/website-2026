import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
@property --bang{syntax:'<angle>';initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.wrap{max-width:1100px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.cs-hero{background:radial-gradient(1000px 520px at 80% -14%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;padding:48px 28px 0;}
.cs-crumb{font-size:13px;color:#9A878A;font-weight:600;margin:0 0 22px;}
.cs-eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#F23F44;margin:0 0 14px;}
.cs-h1{font-size:40px;line-height:1.14;font-weight:800;letter-spacing:-1.3px;margin:0;max-width:900px;}
.cs-snap{display:flex;flex-wrap:wrap;gap:0;margin:36px 0 0;border:1px solid #F0E2E3;border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 14px 30px rgba(110,11,14,.06);}
.cs-snap .s{flex:1;min-width:160px;padding:20px 24px;border-right:1px solid #F4E7E8;}
.cs-snap .s:last-child{border-right:0;}
.cs-snap .k{font-size:12px;color:#9A878A;font-weight:600;margin:0 0 6px;}
.cs-snap .v{font-size:15px;color:#1A1014;font-weight:700;line-height:1.35;}
.cs-heroimg{margin:40px 0 0;border-radius:22px 22px 0 0;overflow:hidden;aspect-ratio:16/7;background:#FBF3EE;}
.cs-heroimg img{width:100%;height:100%;object-fit:cover;display:block;}
.sec{padding:72px 28px;}
.sec.sand{background:#FBF3EE;}
.cs-cso{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.cs-csocard{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:28px 26px;box-shadow:0 16px 30px rgba(110,11,14,.06);}
.cs-csocard h3{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#F23F44;margin:0 0 14px;}
.cs-csocard p{font-size:15px;line-height:1.6;color:#5A4B4E;margin:0;}
.cs-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid #F0E2E3;border-radius:20px;overflow:hidden;background:#fff;box-shadow:0 20px 46px rgba(110,11,14,.08);}
.cs-metric{padding:36px 32px;border-right:1px solid #F4E7E8;}
.cs-metric:last-child{border-right:0;}
.cs-metric .n{font-size:46px;font-weight:800;letter-spacing:-1.6px;color:#F23F44;line-height:1;}
.cs-metric .l{font-size:14.5px;color:#5A4B4E;margin-top:12px;line-height:1.45;}
.cs-block{max-width:760px;margin:0 auto 40px;}
.cs-block:last-child{margin-bottom:0;}
.cs-block h2{font-size:27px;font-weight:800;letter-spacing:-.7px;color:#1A1014;margin:0 0 16px;}
.cs-kick{font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A7A7D;margin:0 0 6px;}
.cs-block p{font-size:16.5px;line-height:1.75;color:#4A3B3E;margin:0 0 16px;}
.cs-block p:last-child{margin-bottom:0;}
.cs-shead{max-width:720px;margin:0 auto 40px;text-align:center;}
.cs-h2{font-size:32px;font-weight:800;letter-spacing:-.9px;margin:0;color:#1A1014;}
.cs-caps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.cs-cap{background:#fff;border:1px solid #F0E2E3;border-radius:18px;padding:26px;}
.cs-capic{width:46px;height:46px;border-radius:13px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.cs-cap h3{font-size:16px;font-weight:700;margin:0 0 8px;color:#1A1014;}
.cs-cap p{font-size:14px;line-height:1.6;color:#6C5A5D;margin:0;}
.cs-relgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.cs-relcard{position:relative;background:#fff;border:1px solid #EFE2E3;border-radius:18px;overflow:hidden;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s;}
.cs-relcard::before{content:'';position:absolute;inset:0;border-radius:18px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;pointer-events:none;z-index:3;}
.cs-relcard:hover{transform:translateY(-4px);box-shadow:0 16px 34px rgba(110,11,14,.10);}
.cs-relcard:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.cs-relimg{aspect-ratio:16/10;overflow:hidden;background:#FBF3EE;}
.cs-relimg img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.2,.7,.3,1);}
.cs-relcard:hover .cs-relimg img{transform:scale(1.05);}
.cs-relbody{padding:20px 22px 24px;}
.cs-reltitle{font-size:15px;font-weight:700;line-height:1.4;margin:0;color:#1A1014;}
@media(max-width:920px){.cs-h1{font-size:31px;}.cs-cso,.cs-metrics,.cs-caps,.cs-relgrid{grid-template-columns:1fr;}.cs-metric{border-right:0;border-bottom:1px solid #F4E7E8;}.cs-metric:last-child{border-bottom:0;}.sec{padding:52px 22px;}}
h1,h2,h3,h4,.cs-h1,.cs-h2,.eyebrow{text-wrap:balance;}p,li,.cs-block p{text-wrap:pretty;}/*om-balance-rule*/
`;

const company = 'inDrive';
const announcement = 'How inDrive cut time-to-hire from 3 weeks to 1 week with Testlify';
const headline = 'How inDrive cut time-to-hire from 3 weeks to 1 week and increased L&D participation by 82% with Testlify';
const heroImg = 'https://testlify.com/wp-content/uploads/2025/11/female-driver-hand-holding-phone-with-interface-navigator-screen-1-scaled.jpg';

const facts = [
  { k: 'Company size', v: '1,001–5,000 employees' },
  { k: 'Headquarters', v: 'Mountain View, California' },
  { k: 'Industry', v: 'IT Services & IT Consulting' },
  { k: 'Use case', v: 'Global hiring' },
];

const challenge = 'Candidate evaluations were entirely manual, consuming 85% of hiring effort, with no shared standard for assessing English proficiency or skills across a globally distributed workforce.';
const solution = 'Testlify introduced structured assessments covering English proficiency, domain-specific skills and personality, with automated workflows handling invitations, tracking and reporting.';
const outcome = 'Time-to-hire dropped from 3 weeks to 1 week, recruiter efficiency improved 4x, and for the first time inDrive had real data to build its L&D programs around.';

const metrics = [
  { n: '67%', l: 'Faster time-to-hire: 3 weeks to 1 week' },
  { n: '82%', l: 'Increase in L&D participation' },
  { n: '4x', l: 'Improvement in recruiter efficiency' },
];

const story = [
  {
    kicker: 'Details',
    heading: 'A global workforce. No shared standard for hiring or development.',
    paras: [
      'inDrive was founded in 2013 in Yakutsk, Russia, and grew into a $1.23 billion platform with operations across Latin America, Africa, Central Asia and beyond. The company hires around 1,000 people each year across a workforce of over 5,000, with 350+ applicants per role on average. Every one of those candidates was being evaluated manually — no structured assessment, no consistent way to measure whether a candidate met the requirements of the role, and no shared standard for English proficiency across markets where language ability varied significantly.',
      'Candidate evaluations and skill assessments accounted for 85% of the hiring team’s total effort, and hiring a single role took three weeks on average. On the development side, the People team had no baseline data on the skills of employees already in the business — training programs were designed and run without knowing who actually needed them.',
    ],
  },
  {
    kicker: 'How Testlify was implemented',
    heading: 'Structured screening for candidates. A skills baseline for employees.',
    paras: [
      'For hiring, inDrive used Testlify to assess candidates on domain-specific skills; English proficiency using the CEFR international standard; and personality. Assessments were completed before any recruiter time was spent, and automated workflows handled invitations, tracked completions and surfaced results. Over 1,300 people were assessed for English proficiency alone, giving inDrive a consistent language standard across every market it hired in.',
      'For existing employees, Testlify gave the People team a structured way to identify skill gaps across Product, Marketing and Technology departments. With real data on where gaps existed, L&D programs could be targeted at the people who needed them rather than run as a broadcast — the shift that drove the 82% increase in participation.',
    ],
  },
  {
    kicker: 'Results',
    heading: 'Hiring that took 3 weeks now takes 1. Development programs that ran blind now run on data.',
    paras: [
      'The hiring team went from spending 85% of their effort on manual evaluations to running a fully automated screening process. Recruiters became 4x more efficient, and quality of hire improved by 40%, measured by better role fit among candidates who came through the structured process.',
      'On the L&D side, participation rose 82% as programs became targeted rather than generic, and employees engaged with development that was relevant to their actual gaps.',
    ],
  },
];

const capabilities = [
  { t: 'Role-specific evaluations', d: 'Tailored assessments across roles, ensuring candidates met both technical and cultural requirements for globally distributed teams.' },
  { t: 'Automated workflows', d: 'Candidate invitations, completion tracking and results reporting handled end-to-end without recruiter involvement.' },
  { t: 'Employee skill evaluation', d: 'Structured assessments used to identify skill gaps across existing teams, directing L&D investment where it was needed.' },
];

const related = [
  { title: 'How Eleserv delivered 1,000+ candidate assessments with near-zero technical errors', company: 'Eleserv', img: 'https://testlify.com/wp-content/uploads/2026/06/Eleserv-Talent-Solutions.png', href: 'https://testlify.com/customer-success-stories/eleserv/' },
  { title: 'How Procurement Garage transformed client skill evaluation with Testlify', company: 'Procurement Garage', img: 'https://testlify.com/wp-content/uploads/2025/11/Procurement-Garage-1024x683.png', href: 'https://testlify.com/customer-success-stories/procurement-garage/' },
  { title: 'How Hamat cut time-to-hire by 50% and brought hiring fully in-house with Testlify', company: 'Hamat', img: 'https://testlify.com/wp-content/uploads/2025/11/Hamat-1024x683.png', href: 'https://testlify.com/customer-success-stories/hamat/' },
];

const showRelated = true;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement={announcement} announcementCta="Read customer stories" homeHref="/" />

      <section className="cs-hero"><div className="wrap">
        <p className="cs-crumb reveal in"><Link href="/customer-success-stories">Customer success stories</Link> › {company}</p>
        <p className="cs-eyebrow reveal in">Customer story</p>
        <h1 className="cs-h1 reveal in">{headline}</h1>
        <div className="cs-snap reveal in">
          {facts.map((f, i) => (
            <div className="s" key={i}><p className="k">{f.k}</p><p className="v">{f.v}</p></div>
          ))}
        </div>
        <div className="cs-heroimg reveal in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImg} alt={company} loading="lazy" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="cs-cso">
          <div className="cs-csocard reveal"><h3>Challenge</h3><p>{challenge}</p></div>
          <div className="cs-csocard reveal"><h3>Solution</h3><p>{solution}</p></div>
          <div className="cs-csocard reveal"><h3>Outcome</h3><p>{outcome}</p></div>
        </div>
      </div></section>

      <section className="sec sand"><div className="wrap">
        <div className="cs-metrics reveal">
          {metrics.map((m, i) => (
            <div className="cs-metric" key={i}><div className="n">{m.n}</div><div className="l">{m.l}</div></div>
          ))}
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        {story.map((b, i) => (
          <div className="cs-block reveal" key={i}>
            <p className="cs-kick">{b.kicker}</p>
            <h2>{b.heading}</h2>
            {b.paras.map((p, j) => <p key={j}>{p}</p>)}
          </div>
        ))}
      </div></section>

      <section className="sec sand"><div className="wrap">
        <div className="cs-shead"><p className="eyebrow reveal">Capabilities<b>.</b></p><h2 className="cs-h2 reveal">What {company} used</h2></div>
        <div className="cs-caps">
          {capabilities.map((c, i) => (
            <div className="cs-cap reveal" key={i}>
              <div className="cs-capic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              </div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div></section>

      {showRelated && (
        <section className="sec"><div className="wrap">
          <div className="cs-shead"><p className="eyebrow reveal">More stories<b>.</b></p><h2 className="cs-h2 reveal">More success stories</h2></div>
          <div className="cs-relgrid">
            {related.map((r, i) => (
              <a className="cs-relcard reveal" href={r.href} key={i}>
                <div className="cs-relimg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={r.company} loading="lazy" />
                </div>
                <div className="cs-relbody"><h3 className="cs-reltitle">{r.title}</h3></div>
              </a>
            ))}
          </div>
        </div></section>
      )}

      <CtaBand />
      <SiteFooter />
    </>
  );
}
