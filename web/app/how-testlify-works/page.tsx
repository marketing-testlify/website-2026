import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a.lnk{color:#F23F44;}a.lnk:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.hwhero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.flow{display:flex;flex-direction:column;gap:22px;max-width:920px;margin:0 auto;}
.frow{display:grid;grid-template-columns:64px 1fr;gap:26px;align-items:start;background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 32px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.frow:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.fnum{width:56px;height:56px;border-radius:16px;background:linear-gradient(150deg,#F23F44,#FF7A52);color:#fff;font-weight:800;font-size:24px;display:flex;align-items:center;justify-content:center;}
.pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.pcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.pcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.pic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .frow{grid-template-columns:1fr;gap:16px;}
  .pgrid{grid-template-columns:1fr;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function HowTestlifyWorksPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="From role to hire in four simple steps" />

      <section className="hwhero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">How Testlify works<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>From open role<br />to confident hire</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>No consultants, no setup fees, no learning curve. Build an assessment, invite candidates, and let verified skill data build your shortlist — in four steps.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="flow">
          <div className="frow reveal"><div className="fnum">1</div><div><h3 className="h3" style={{ marginBottom: '8px' }}>Pick your assessment</h3><p className="body">Choose from 3,500+ validated tests or build your own with role-specific, coding, cognitive and personality questions. Add AI video, audio or chat interviews in a click.</p></div></div>
          <div className="frow reveal" style={{ transitionDelay: '.05s' }}><div className="fnum">2</div><div><h3 className="h3" style={{ marginBottom: '8px' }}>Invite candidates</h3><p className="body">Share a link, upload a CSV, or trigger invites straight from your ATS. Candidates take the assessment on any device with a clean, mobile-friendly experience.</p></div></div>
          <div className="frow reveal" style={{ transitionDelay: '.1s' }}><div className="fnum">3</div><div><h3 className="h3" style={{ marginBottom: '8px' }}>Let Testlify score it</h3><p className="body">Every response is scored automatically and objectively. Anti-cheat proctoring flags anomalies, and results are benchmarked so you can compare candidates like-for-like.</p></div></div>
          <div className="frow reveal" style={{ transitionDelay: '.15s' }}><div className="fnum">4</div><div><h3 className="h3" style={{ marginBottom: '8px' }}>Shortlist with confidence</h3><p className="body">Review a ranked shortlist backed by evidence — not gut feel. Move the strongest candidates forward and defend every decision with data.</p></div></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div style={{ maxWidth: '660px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">Built in<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Everything the process needs</h2>
        </div>
        <div className="pgrid">
          <div className="pcard reveal"><span className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Anti-cheat proctoring</h3><p className="body" style={{ fontSize: '14px' }}>Webcam snapshots, full-screen detection and plagiarism checks keep results honest.</p></div>
          <div className="pcard reveal" style={{ transitionDelay: '.06s' }}><span className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9M13 17V5M8 17v-3"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Benchmarked scoring</h3><p className="body" style={{ fontSize: '14px' }}>Compare every candidate against the same objective standard and role benchmark.</p></div>
          <div className="pcard reveal" style={{ transitionDelay: '.12s' }}><span className="pic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"></path><path d="M4 9h16M9 4v16"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>100+ ATS integrations</h3><p className="body" style={{ fontSize: '14px' }}>Native two-way sync keeps candidate data flowing between Testlify and your stack.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#1A1014', color: '#fff', textAlign: 'center' }}><div className="wrap" style={{ maxWidth: '720px' }}>
        <h2 className="h2 reveal" style={{ color: '#fff' }}>Run your first assessment today</h2>
        <p className="lead reveal" style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 30px', transitionDelay: '.04s' }}>Set it up in minutes. Start free — no credit card required.</p>
        <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}>
          <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
          <CtaButton label="Book a demo" href="/demo" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
