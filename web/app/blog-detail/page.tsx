import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.artwrap{max-width:740px;margin:0 auto;padding:0 28px;}
.crumb{font-size:13px;color:#9A878A;font-weight:600;margin:36px 0 22px;}
.crumb a{color:#F23F44;}
.arttitle{font-size:46px;line-height:1.08;font-weight:800;letter-spacing:-1.6px;margin:0 0 22px;}
.artmeta{display:flex;align-items:center;gap:12px;font-size:13.5px;color:#9A878A;margin-bottom:30px;}
.artav{width:42px;height:42px;border-radius:50%;background:#F23F44;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;}
.artname{font-weight:700;color:#1A1014;font-size:14px;}
.arthero{height:380px;border-radius:22px;background:linear-gradient(150deg,#F23F44,#7A1418);margin-bottom:44px;}
.prose p{font-size:18px;line-height:1.75;color:#3A2C30;margin:0 0 24px;}
.prose h2{font-size:30px;font-weight:800;letter-spacing:-.8px;margin:46px 0 18px;color:#1A1014;}
.prose h3{font-size:22px;font-weight:700;letter-spacing:-.4px;margin:34px 0 12px;color:#1A1014;}
.prose ul{margin:0 0 24px;padding-left:24px;}
.prose li{font-size:18px;line-height:1.7;color:#3A2C30;margin-bottom:10px;}
.prose strong{color:#1A1014;font-weight:700;}
.pull{border-left:4px solid #F23F44;padding:6px 0 6px 24px;margin:32px 0;font-size:24px;line-height:1.45;font-weight:600;letter-spacing:-.4px;color:#1A1014;}
.callout{background:#FBF3EE;border:1px solid #F4E1D6;border-radius:18px;padding:28px 30px;margin:36px 0;}
.callout p{margin:0;font-size:16px;line-height:1.65;color:#3A2C30;}
.share{display:flex;gap:10px;align-items:center;margin:48px 0;padding:24px 0;border-top:1px solid #F1E6E7;border-bottom:1px solid #F1E6E7;}
.sbtn{width:42px;height:42px;border-radius:11px;border:1px solid #EFE2E3;display:flex;align-items:center;justify-content:center;color:#6A5A5D;font-weight:700;font-size:14px;transition:all .2s ease;}
.sbtn:hover{border-color:#F2B7B9;color:#F23F44;transform:translateY(-2px);}
.related{background:#FBF3EE;padding:72px 28px;margin-top:56px;}
.relgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;max-width:1100px;margin:0 auto;}
.relcard{background:#fff;border:1px solid #EFE2E3;border-radius:18px;overflow:hidden;transition:transform .25s ease, box-shadow .25s ease;}
.relcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);}
.relimg{height:140px;}
.relbody{padding:20px;}
.reltitle{font-size:16px;font-weight:700;line-height:1.35;margin:0 0 8px;}
.relmeta{font-size:12.5px;color:#9A878A;}
@media(max-width:920px){
  .arttitle{font-size:34px;letter-spacing:-1px;}
  .arthero{height:220px;}
  .prose p,.prose li{font-size:16.5px;}
  .relgrid{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function BlogDetailPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="New guide · The 2026 skills-based hiring playbook" announcementCta="Read now" />
      <article className="artwrap">
        <p className="crumb reveal in"><Link href="/blog">Blog</Link> &nbsp;·&nbsp; Hiring strategy</p>
        <h1 className="arttitle reveal in">The 2026 skills-based hiring playbook</h1>
        <div className="artmeta reveal in"><span className="artav">SK</span><div><div className="artname">Sneha Kulkarni</div><div>Co-founder &amp; CPO</div></div><span>·</span><span>12 min read</span><span>·</span><span>June 2026</span></div>
      </article>
      <div className="artwrap reveal in"><div className="arthero"></div></div>
      <div className="artwrap prose">
        <p className="reveal in">For most of the last century, the résumé was the hiring world&apos;s currency. A degree, a job title, a recognizable logo — these were the proxies we used to guess who could do the work. The problem is that proxies are exactly that: guesses. And they systematically miss great people.</p>
        <p className="reveal in">Skills-based hiring flips the model. Instead of asking &quot;who looks qualified?&quot;, it asks &quot;who can actually do this job?&quot; — and then measures it directly. This playbook walks through how to put that into practice, step by step.</p>
        <div className="pull reveal in">&quot;The best predictor of job performance isn&apos;t where someone worked — it&apos;s whether they can do the work in front of them.&quot;</div>
        <h2 className="reveal in">1. Start with the work, not the wishlist</h2>
        <p className="reveal in">Before you write a single requirement, define the three to five outcomes this role must deliver in its first year. Every assessment you design should map back to one of them. If a &quot;requirement&quot; doesn&apos;t connect to an outcome, cut it — it&apos;s almost certainly filtering on background, not ability.</p>
        <h2 className="reveal in">2. Replace screening filters with signals</h2>
        <p className="reveal in">Keyword filters and degree requirements are blunt instruments. They reject qualified people for the wrong reasons and let unqualified people through for the right ones. Replace them with structured signals:</p>
        <ul className="reveal in">
          <li><strong>Work-sample tests</strong> that mirror real tasks from the role.</li>
          <li><strong>Cognitive and role-specific assessments</strong> validated against performance.</li>
          <li><strong>Structured, scored interviews</strong> using the same rubric for every candidate.</li>
        </ul>
        <h2 className="reveal in">3. Make the candidate experience worth it</h2>
        <p className="reveal in">A skills-first process asks more of candidates, so it has to give more back. Keep assessments under 30 minutes, explain why each step matters, and give every applicant a result. Completion rates — and your employer brand — depend on it.</p>
        <div className="callout reveal in"><p><strong>Rule of thumb:</strong> if your assessment takes longer than the first interview would have, it&apos;s too long. Aim for high signal per minute of candidate time.</p></div>
        <h2 className="reveal in">4. Score consistently, decide together</h2>
        <p className="reveal in">The whole point of structure is comparability. Use the same rubric and the same scale for every candidate, collect scores independently before discussion, and let the evidence — not the loudest voice in the room — drive the decision.</p>
        <p className="reveal in">Teams that adopt this approach consistently report faster hiring, stronger performance from new hires, and noticeably more diverse pipelines. Not because they lowered the bar — but because they finally measured the right thing.</p>
        <div className="share reveal in"><span style={{ fontSize: '13.5px', fontWeight: 700, color: '#6A5A5D', marginRight: '6px' }}>Share</span><a className="sbtn" href="#">in</a><a className="sbtn" href="#">X</a><a className="sbtn" href="#">f</a><a className="sbtn" href="#">↗</a></div>
      </div>
      <section className="related"><div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px' }}><p className="eyebrow reveal">Keep reading<b>.</b></p><h2 className="reveal" style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-1px', margin: 0 }}>Related articles</h2></div>
        <div className="relgrid">
          <Link className="relcard reveal" href="/blog-detail"><div className="relimg" style={{ background: 'linear-gradient(150deg,#2A6FDB,#16335E)' }}></div><div className="relbody"><h3 className="reltitle">How to write a job description that attracts skill</h3><p className="relmeta">Aditya Rao · 7 min read</p></div></Link>
          <Link className="relcard reveal" style={{ transitionDelay: '.06s' }} href="/blog-detail"><div className="relimg" style={{ background: 'linear-gradient(150deg,#1F8A5B,#0C3D29)' }}></div><div className="relbody"><h3 className="reltitle">Designing assessments candidates actually finish</h3><p className="relmeta">Elena Costa · 6 min read</p></div></Link>
          <Link className="relcard reveal" style={{ transitionDelay: '.12s' }} href="/blog-detail"><div className="relimg" style={{ background: 'linear-gradient(150deg,#6B3FA0,#2E1A4A)' }}></div><div className="relbody"><h3 className="reltitle">Will AI make hiring fairer — or worse?</h3><p className="relmeta">Daniel Mwangi · 9 min read</p></div></Link>
        </div>
      </section>
      <section style={{ background: '#1A1014', color: '#fff', textAlign: 'center', padding: '80px 28px' }}><div className="wrap" style={{ maxWidth: '640px' }}>
        <h2 className="reveal" style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-1.2px', color: '#fff', margin: 0 }}>Put the playbook to work</h2>
        <p className="reveal" style={{ fontSize: '19px', color: 'rgba(255,255,255,.78)', margin: '16px auto 28px', transitionDelay: '.04s' }}>Run your first skills-based assessment free — set up in minutes.</p>
        <Link className="btn btn-primary reveal" href="/pricing" style={{ transitionDelay: '.08s' }}>Start free<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></Link>
      </div></section>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
