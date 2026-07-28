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
.cs-snap{display:flex;flex-wrap:wrap;gap:0;margin:36px 0 0;border:1px solid #F0E2E3;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 14px 30px rgba(110,11,14,.06);}
.cs-snap .s{flex:1;min-width:160px;padding:20px 24px;border-right:1px solid #F4E7E8;}
.cs-snap .s:last-child{border-right:0;}
.cs-snap .khead{display:flex;align-items:center;gap:9px;margin:0 0 6px;}
.cs-snap .ic{flex:none;width:28px;height:28px;border-radius:8px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.cs-snap .ic svg{width:15px;height:15px;}
.cs-snap .k{font-size:11.5px;color:#9A878A;font-weight:700;letter-spacing:.05em;text-transform:uppercase;margin:0;line-height:1.2;}
.cs-snap .v{font-size:15px;color:#1A1014;font-weight:700;line-height:1.25;margin:0;}
@media(max-width:920px){.cs-snap{flex-direction:column;}.cs-snap .s{border-right:0;border-bottom:1px solid #F4E7E8;}.cs-snap .s:last-child{border-bottom:0;}}
.cs-heroimg{margin:40px 0 0;border-radius:22px 22px 0 0;overflow:hidden;aspect-ratio:16/7;background:#FBF3EE center/cover no-repeat;}
.cs-heroimg img{width:100%;height:100%;object-fit:cover;display:block;}
.sec{padding:72px 28px;}
.sec.sand{background:#FBF3EE;}
.cs-cso{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.cs-csocard{position:relative;overflow:hidden;background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:34px 30px;box-shadow:0 20px 40px rgba(110,11,14,.08);}
.cs-csocard::before{content:'';position:absolute;top:0;left:30px;right:30px;height:3px;border-radius:0 0 3px 3px;background:linear-gradient(90deg,#FF7A52,#F23F44);}
.cs-csoglyph{position:absolute;right:-14px;bottom:-22px;width:104px;height:104px;color:#FBEAEA;z-index:0;}
.cs-csocard h3,.cs-csocard p{position:relative;z-index:1;}
.cs-csocard h3{font-size:13.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#F23F44;margin:0 0 16px;}
.cs-csocard p{font-size:18px;line-height:1.5;color:#1A1014;font-weight:600;letter-spacing:-.2px;margin:0;}
.cs-metrics{display:grid;grid-template-columns:repeat(3,1fr);}
.cs-metric{text-align:center;padding:4px 22px;}
.cs-metric+.cs-metric{border-left:1px solid #EFE3E4;}
.cs-metric .n{font-size:34px;font-weight:700;letter-spacing:-1px;line-height:1;color:#1A1014;font-variant-numeric:tabular-nums;}
.cs-metric .l{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:10px;line-height:1.45;}
@media(max-width:960px){.cs-metrics{grid-template-columns:1fr 1fr;row-gap:34px;}.cs-metric+.cs-metric{border-left:none;}}
@media(max-width:560px){.cs-metrics{grid-template-columns:1fr;}}
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
.cs-relimg{aspect-ratio:16/10;overflow:hidden;background:#FBF3EE center/cover no-repeat;transition:transform .5s cubic-bezier(.2,.7,.3,1);}
.cs-relcard:hover .cs-relimg{transform:scale(1.05);}
.cs-relbody{padding:20px 22px 24px;}
.cs-reltitle{font-size:15px;font-weight:700;line-height:1.4;margin:0;color:#1A1014;}
@media(max-width:920px){.cs-h1{font-size:31px;}.cs-cso,.cs-metrics,.cs-caps,.cs-relgrid{grid-template-columns:1fr;}.cs-metric{border-right:0;border-bottom:1px solid #F4E7E8;}.cs-metric:last-child{border-bottom:0;}.sec{padding:52px 22px;}}
h1,h2,h3,h4,.cs-h1,.cs-h2,.eyebrow{text-wrap:balance;}p,li,.cs-block p{text-wrap:pretty;}/*om-balance-rule*/
`;

const FACT_ICONS: Record<string, React.ReactNode> = {
  'Company size': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M10 12h4" />
    </svg>
  ),
  'Headquarters': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  'Industry': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V9l6-4v16" /><path d="M9 21V13h12v8" /><path d="M13 17h4" />
    </svg>
  ),
  'Use case': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
};

const CAP_ICONS: React.ReactNode[] = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18" /><path d="M8 14h4" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.77z" />
    </svg>
  ),
];

const data = {
  announcement: 'How Ashesi University built one objective bar for graduate admissions with Testlify',
  company: 'Ashesi University',
  headline: 'How Ashesi University built one objective bar for graduate admissions with Testlify',
  heroImg: 'https://testlify.com/wp-content/uploads/2026/07/medium-shot-graduate-student-scaled.jpg',
  facts: [
    { k: 'Company size', v: '501-1,000 employees' },
    { k: 'Headquarters', v: 'Berekuso, Ghana' },
    { k: 'Industry', v: 'Higher education' },
    { k: 'Use case', v: 'Graduate admissions screening' },
  ],
  challenge:
    'Graduate applicants arrive from many countries and universities, so transcripts, degrees, and interviews could not be compared to one fair, objective standard.',
  solution:
    'A standard battery of Testlify assessments — cognitive skills, English, critical thinking, and aptitude — that every applicant sits before a decision is made.',
  outcome:
    'Six ready-made Testlify libraries build one rigorous aptitude, English, and reasoning screen that every graduate applicant sits, with no test-writing from scratch.',
  metrics: [
    { n: '122', l: 'Graduate applicants invited to assess' },
    { n: '90%', l: 'Completed their assessment (110 of 122)' },
    { n: '7,900+', l: 'Scored responses across the applicant pool' },
  ],
  story: [
    {
      heading: 'A values-driven university, and no fair way to compare applicants',
      paras: [
        'Ashesi University is one of Africa’s most respected private universities. Based in Berekuso, Ghana, it is known for a liberal-arts education built around ethics, leadership, and entrepreneurship, and it draws students from across the continent. Its graduate programs, led by the Ashesi MBA, attract applicants from many countries and undergraduate institutions.',
        'That diversity is the hard part of admissions. A transcript from one country does not mean the same thing as a transcript from another, degrees and grading scales differ, and an interview rewards the confident applicant more than the capable one. The admissions team had no objective, consistent way to judge the aptitude, English, and critical thinking a graduate program actually demands, so strong applicants were hard to tell apart from well-presented ones.',
      ],
    },
    {
      heading: 'One assessment every applicant sits',
      paras: [
        'Ashesi’s Graduate Admissions team built a standard set of assessments on Testlify and asks every applicant to sit them. Rather than reading documents that do not compare, admissions now sees each candidate answer the same cognitive, English, critical-thinking, analytical, and quantitative-aptitude questions, then compares people on the same objective evidence.',
        'The team assembled that screen from six ready-made Testlify libraries, from Critical Thinking and Analytical Skills to Quantitative Aptitude, Logical Reasoning, and English, so it did not have to write a graduate entrance exam from scratch. Because Ashesi runs on .edu.gh addresses, Testlify’s engineering team also adapted onboarding for education-domain sign-ups. What matters to admissions is simpler: one repeatable bar, applied the same way to every applicant.',
      ],
    },
    {
      heading: 'A repeatable admissions standard, now expanding',
      paras: [
        'The standard holds because applicants actually complete it. Of 122 graduate applicants invited, 110 finished their assessment, a 90% completion rate, and the pool logged roughly 7,900 scored responses. Near-universal follow-through means admissions decisions rest on complete, comparable evidence rather than on who submitted the most polished file.',
        'The clearest proof the approach works is that Ashesi keeps building on it. The university renewed its subscription into another year, and in mid-2026 its admissions team began setting up a new Testlify assessment — a timed multiple-choice section, a written error-spotting exercise, and an essay — to screen applicants for a new graduate Law program. What began as one MBA admissions screen is becoming Ashesi’s standard way to evaluate graduate applicants across programs.',
      ],
    },
  ],
  capabilities: [
    { t: 'Standardized assessment battery', d: 'Every graduate applicant sits the same tests, so admissions compares candidates like for like.' },
    { t: 'Ready-made skill libraries', d: 'Six Testlify libraries build a rigorous aptitude, English, and reasoning screen with no test-writing from scratch.' },
    { t: 'Custom assessment setup', d: 'Testlify support helps the team build program-specific assessments for new intakes like the graduate Law program.' },
  ],
  related: [
    { title: 'How Infojini built one technical screening standard for every candidate submittal', company: 'Infojini', img: 'https://testlify.com/wp-content/uploads/2026/07/Infojini.png', href: '/customer-success-stories' },
    { title: 'How Benore Logistics built one hiring standard, from the dispatch desk to the executive suite', company: 'Benore Logistics', img: 'https://testlify.com/wp-content/uploads/2026/07/Benore-logistic.png', href: '/customer-success-stories' },
    { title: 'How World Connection standardized bilingual screening across client programs', company: 'World Connection', img: 'https://testlify.com/wp-content/uploads/2026/07/World-connection.png', href: '/customer-success-stories' },
  ],
  showRelated: true,
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement={data.announcement} announcementCta="Read customer stories" homeHref="/" />

      <section className="cs-hero">
        <div className="wrap">
          <p className="cs-crumb reveal in">
            <Link href="/">Home</Link> / <Link href="/customer-success-stories">Success Story</Link> / {data.headline}
          </p>
          <p className="cs-eyebrow reveal in">Customer story</p>
          <h1 className="cs-h1 reveal in">{data.headline}</h1>
          <div className="cs-snap reveal in">
            {data.facts.map((f) => (
              <div className="s" key={f.k}>
                <div className="khead">
                  <span className="ic">{FACT_ICONS[f.k] || FACT_ICONS['Use case']}</span>
                  <p className="k">{f.k}</p>
                </div>
                <p className="v">{f.v}</p>
              </div>
            ))}
          </div>
          <div className="cs-heroimg reveal in" role="img" aria-label={data.company} style={{ backgroundImage: `url("${data.heroImg}")` }} />
        </div>
      </section>

      <section className="sec sand">
        <div className="wrap">
          <div className="cs-cso">
            <div className="cs-csocard reveal">
              <svg className="cs-csoglyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <circle cx="12" cy="12" r="9"></circle><line x1="12" y1="8" x2="12" y2="13"></line><circle cx="12" cy="16.2" r=".2" fill="currentColor" stroke="none"></circle>
              </svg>
              <h3>Challenge</h3>
              <p>{data.challenge}</p>
            </div>
            <div className="cs-csocard reveal">
              <svg className="cs-csoglyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
              </svg>
              <h3>Solution</h3>
              <p>{data.solution}</p>
            </div>
            <div className="cs-csocard reveal">
              <svg className="cs-csoglyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
                <path d="M3 3v18h18"></path><path d="M7 15l4-6 4 3 5-8"></path>
              </svg>
              <h3>Outcome</h3>
              <p>{data.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 44, paddingBottom: 44 }}>
        <div className="wrap">
          <div className="cs-metrics reveal">
            {data.metrics.map((m) => (
              <div className="cs-metric" key={m.l}>
                <div className="n">{m.n}</div>
                <div className="l">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {data.story.map((b) => (
            <div className="cs-block reveal" key={b.heading}>
              <h2>{b.heading}</h2>
              {b.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="sec sand">
        <div className="wrap">
          <div className="cs-shead">
            <p className="eyebrow reveal">
              Capabilities<b>.</b>
            </p>
            <h2 className="cs-h2 reveal">What {data.company} used</h2>
          </div>
          <div className="cs-caps">
            {data.capabilities.map((c, i) => (
              <div className="cs-cap reveal" key={c.t}>
                <div className="cs-capic">{CAP_ICONS[i % CAP_ICONS.length]}</div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.showRelated && (
        <section className="sec">
          <div className="wrap">
            <div className="cs-shead">
              <p className="eyebrow reveal">
                More stories<b>.</b>
              </p>
              <h2 className="cs-h2 reveal">More success stories</h2>
            </div>
            <div className="cs-relgrid">
              {data.related.map((r) => (
                <Link className="cs-relcard reveal" href={r.href} key={r.title}>
                  <div className="cs-relimg" role="img" aria-label={r.company} style={{ backgroundImage: `url("${r.img}")` }} />
                  <div className="cs-relbody">
                    <h3 className="cs-reltitle">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <SiteFooter />
    </>
  );
}
