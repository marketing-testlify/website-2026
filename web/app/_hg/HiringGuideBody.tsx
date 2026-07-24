import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import { HIRING_GUIDE_TABS, type HiringGuideData } from './data';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.hg-wrap{max-width:820px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.hg-hero{padding:44px 28px 26px;}
.hg-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.hg-back svg{transition:transform .2s;}
.hg-back:hover svg{transform:translateX(-3px);}
.hg-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;}
.hg-intro{font-size:17px;line-height:1.7;color:#5A4B4E;margin:22px 0 0;}
.hg-tabsbar{position:sticky;top:64px;z-index:20;background:rgba(255,255,255,.94);backdrop-filter:blur(10px);border-bottom:1px solid #F0E2E3;}
.hg-tabs{display:flex;flex-wrap:wrap;gap:6px 20px;padding:16px 0;}
.hg-tab{font-size:14px;font-weight:600;color:#6C5A5D;white-space:nowrap;}
.hg-tab:hover{color:#F23F44;}
.hg-body{padding:40px 28px 30px;}
.hg-sec{scroll-margin-top:132px;margin-bottom:20px;}
.hg-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:44px 0 16px;color:#1A1014;}
.hg-h3{font-size:18px;font-weight:700;letter-spacing:-.2px;margin:26px 0 10px;color:#1A1014;}
.hg-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 16px;}
.hg-p a,.hg-li a,.hg-ul a{color:#F23F44;font-weight:600;}
.hg-ol,.hg-ul{margin:0 0 18px;padding-left:22px;}
.hg-ol li,.hg-ul li{font-size:16px;line-height:1.7;color:#4A3B3E;margin-bottom:12px;}
.hg-ol li b,.hg-ul li b{color:#1A1014;font-weight:700;}
.hg-jdrow{font-size:16px;line-height:1.7;color:#4A3B3E;margin:0 0 6px;}
.hg-jdrow b{color:#1A1014;font-weight:700;}
.hg-tlabel{font-size:16px;font-weight:700;color:#1A1014;margin:22px 0 8px;}
.hg-pre{font-size:15.5px;line-height:1.72;color:#4A3B3E;margin:0 0 16px;white-space:pre-line;}
.hg-qq{font-size:16px;font-weight:700;color:#1A1014;margin:22px 0 8px;}
.hg-qlbl{font-weight:700;color:#1A1014;}
.hg-faq .hg-h3{margin:22px 0 8px;}
@media(max-width:820px){.hg-h1{font-size:32px;letter-spacing:-1px;}.hg-tabsbar{top:56px;}.hg-body{padding:32px 22px 24px;}}
h1,h2,h3,h4,.hg-h1,.hg-h2,.hg-h3{text-wrap:balance;}p,li,.hg-p,.hg-intro,.hg-pre{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function HiringGuideBody({ d }: { d: HiringGuideData }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Free hiring guides — job descriptions, interview questions & skills to test for 90+ roles"
        announcementCta="Browse guides"
        homeHref="/"
      />

      <section className="hg-hero"><div className="hg-wrap">
        <Link className="hg-back" href="/hiring-guides"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>Back to Hiring guides</Link>
        <h1 className="hg-h1 reveal">{d.role} hiring guide</h1>
        <p className="hg-intro reveal">{d.intro}</p>
      </div></section>

      <div className="hg-tabsbar"><div className="hg-wrap"><div className="hg-tabs">
        {HIRING_GUIDE_TABS.map((t) => (
          <a key={t.anchor} className="hg-tab" href={t.anchor}>{t.label}</a>
        ))}
      </div></div></div>

      <div className="hg-body"><div className="hg-wrap">

        <div className="hg-sec" id="howto">
          <h2 className="hg-h2 reveal">How to hire {d.roleArticle}</h2>
          {d.howtoLead.map((p, i) => (
            <p key={i} className="hg-p reveal">{p}</p>
          ))}
          <h3 className="hg-h3 reveal">Key steps in hiring {d.roleArticle}</h3>
          <ol className="hg-ol reveal">
            {d.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <h3 className="hg-h3 reveal">Pro tips for hiring {d.roleArticle}</h3>
          <ol className="hg-ol reveal">
            {d.protips.map((p, i) => (
              <li key={i}><b>{p.title}</b> {p.body}</li>
            ))}
          </ol>
        </div>

        <div className="hg-sec" id="jd">
          <h2 className="hg-h2 reveal">Job description template for {d.roleArticle}</h2>
          <p className="hg-jdrow reveal"><b>Title:</b> {d.jd.title}</p>
          <p className="hg-jdrow reveal"><b>Location:</b> {d.jd.location}</p>
          <h3 className="hg-h3 reveal">Overview</h3>
          <p className="hg-p reveal">{d.jd.overview}</p>
          <h3 className="hg-h3 reveal">Requirements</h3>
          <ul className="hg-ul reveal">
            {d.jd.requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <h3 className="hg-h3 reveal">Responsibilities</h3>
          <ul className="hg-ul reveal">
            {d.jd.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <h3 className="hg-h3 reveal">Benefits</h3>
          <ul className="hg-ul reveal">
            {d.jd.benefits.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="hg-sec" id="jobboards">
          <h2 className="hg-h2 reveal">Job boards to source the best candidates</h2>
          <ol className="hg-ol reveal">
            {d.jobboards.map((b, i) => (
              <li key={i}><b>{b.name}:</b> {b.desc}</li>
            ))}
          </ol>
        </div>

        <div className="hg-sec" id="social">
          <h2 className="hg-h2 reveal">Social media shoutout templates</h2>
          {d.social.map((s) => (
            <p key={s.n} className="hg-p reveal"><b>Template {s.n}:</b> {s.text}</p>
          ))}
        </div>

        <div className="hg-sec" id="emails">
          <h2 className="hg-h2 reveal">Outreach email templates to attract candidates</h2>
          {d.emails.map((e) => (
            <div key={e.n} className="reveal">
              <p className="hg-tlabel">Template {e.n}</p>
              <p className="hg-jdrow"><b>Subject:</b> {e.subject}</p>
              <p className="hg-pre">{e.body}</p>
            </div>
          ))}
        </div>

        <div className="hg-sec" id="assessment">
          <h2 className="hg-h2 reveal">Relevant assessment tests</h2>
          <ul className="hg-ul reveal">
            {d.tests.map((t, i) => (
              <li key={i}><Link href={t.url}>{t.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="hg-sec" id="genq">
          <h2 className="hg-h2 reveal">5 general interview questions</h2>
          {d.genq.map((q, i) => (
            <div key={i} className="reveal">
              <p className="hg-qq">{q.q}</p>
              <p className="hg-p"><span className="hg-qlbl">Why this question matters:</span> {q.why}</p>
              <p className="hg-p"><span className="hg-qlbl">What to listen for:</span> {q.listen}</p>
            </div>
          ))}
        </div>

        <div className="hg-sec" id="techq">
          <h2 className="hg-h2 reveal">5 technical interview questions</h2>
          {d.techq.map((q, i) => (
            <div key={i} className="reveal">
              <p className="hg-qq">{q.q}</p>
              <p className="hg-p"><span className="hg-qlbl">Why this question matters:</span> {q.why}</p>
              <p className="hg-p"><span className="hg-qlbl">What to listen for:</span> {q.listen}</p>
            </div>
          ))}
        </div>

        <div className="hg-sec" id="rejection">
          <h2 className="hg-h2 reveal">Rejection email templates</h2>
          {d.rejection.map((r) => (
            <div key={r.n} className="reveal">
              <p className="hg-tlabel">Template {r.n}</p>
              <p className="hg-pre">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="hg-sec hg-faq" id="faqs">
          <h2 className="hg-h2 reveal">Frequently asked questions</h2>
          {d.faqs.map((f, i) => (
            <div key={i} className="reveal">
              <h3 className="hg-h3">{f.q}</h3>
              <p className="hg-p">{f.a}</p>
            </div>
          ))}
        </div>

      </div></div>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
