import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';

const css = `
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
.whero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.vs{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
.vscard{border-radius:20px;padding:32px 28px;}
.vsold{background:#fff;border:1px solid #EFE2E3;}
.vsnew{background:linear-gradient(160deg,#FFF4F3,#FBE9E9);border:1px solid #F6DCDD;}
.vsh{font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin:0 0 18px;}
.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{position:relative;padding-left:32px;font-size:15px;line-height:1.5;color:#5A4B4E;}
.chk li svg{position:absolute;left:0;top:2px;}
.wgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.wcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.wcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.wic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .split,.vs,.wgrid{grid-template-columns:1fr;gap:34px;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function WhyTestlifyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="See why 1,500+ teams switched to Testlify" announcementCta="Compare plans" />

      <section className="whero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Why Testlify<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Stop guessing.<br />Start proving.</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Resumes tell you what someone claims. Testlify shows you what they can actually do — so you hire on verified skill, not gut feel, and never second-guess a shortlist again.</p>
        <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px', transitionDelay: '.12s' }}>
          <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" />
          <CtaButton label="Book a demo" href="/demo" variant="ghost" size="md" icon="none" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: '660px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">The old way vs. Testlify<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Two ways to fill a role</h2>
        </div>
        <div className="vs reveal">
          <div className="vscard vsold">
            <p className="vsh" style={{ color: '#8A7A7D' }}>Resume-first hiring</p>
            <ul className="chk">
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B4A3A6" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>Hours lost to phone screens that go nowhere</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B4A3A6" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>Great candidates filtered out by keywords</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B4A3A6" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>Gut-feel decisions you can&apos;t defend</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B4A3A6" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>Bias creeping into every stage</li>
            </ul>
          </div>
          <div className="vscard vsnew">
            <p className="vsh" style={{ color: '#F23F44' }}>Skills-first with Testlify</p>
            <ul className="chk">
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Up to 75% less time spent screening</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Every candidate proves ability up front</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Objective, EEOC-defensible shortlists</li>
              <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Structured scoring that removes bias</li>
            </ul>
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div style={{ maxWidth: '660px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">The difference<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>What sets Testlify apart</h2>
        </div>
        <div className="wgrid">
          <div className="wcard reveal"><span className="wic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>3,500+ validated tests</h3><p className="body" style={{ fontSize: '14px' }}>10x the library of most competitors — role-specific, cognitive, coding, personality and more, built by SMEs.</p></div>
          <div className="wcard reveal" style={{ transitionDelay: '.06s' }}><span className="wic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.9 5.7 21l2.3-7.1-6-4.5h7.6z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>AI interviews, three ways</h3><p className="body" style={{ fontSize: '14px' }}>Video, audio and chat interviews — automated, scored and consistent — all on one platform.</p></div>
          <div className="wcard reveal" style={{ transitionDelay: '.12s' }}><span className="wic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>No annual lock-in</h3><p className="body" style={{ fontSize: '14px' }}>Pay per candidate, not per seat. 100+ ATS integrations included on every paid plan.</p></div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap split">
        <div className="reveal">
          <p className="eyebrow">Proven results<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Numbers hiring teams feel</h2>
          <p className="body">Teams that switch to Testlify don&apos;t just save time — they hire better. The proof shows up in every stage of the funnel.</p>
          <div style={{ marginTop: '26px' }}>
            <CtaButton label="See how it works" href="/how-testlify-works" variant="ghost" size="md" icon="arrow" />
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
          <div style={{ background: '#fff', border: '1px solid #EFE2E3', borderRadius: '18px', padding: '26px' }}><div style={{ fontSize: '38px', fontWeight: 800, color: '#F23F44', letterSpacing: '-1.4px' }}>6x</div><p className="body" style={{ fontSize: '13.5px', marginTop: '8px' }}>recruiter efficiency</p></div>
          <div style={{ background: '#fff', border: '1px solid #EFE2E3', borderRadius: '18px', padding: '26px' }}><div style={{ fontSize: '38px', fontWeight: 800, color: '#F23F44', letterSpacing: '-1.4px' }}>55%</div><p className="body" style={{ fontSize: '13.5px', marginTop: '8px' }}>less time-to-hire</p></div>
          <div style={{ background: '#fff', border: '1px solid #EFE2E3', borderRadius: '18px', padding: '26px' }}><div style={{ fontSize: '38px', fontWeight: 800, color: '#F23F44', letterSpacing: '-1.4px' }}>94%</div><p className="body" style={{ fontSize: '13.5px', marginTop: '8px' }}>candidate satisfaction</p></div>
          <div style={{ background: '#fff', border: '1px solid #EFE2E3', borderRadius: '18px', padding: '26px' }}><div style={{ fontSize: '38px', fontWeight: 800, color: '#F23F44', letterSpacing: '-1.4px' }}>75%</div><p className="body" style={{ fontSize: '13.5px', marginTop: '8px' }}>less screening</p></div>
        </div>
      </div></section>

      <Testimonials />

      <section className="sec" style={{ background: '#1A1014', color: '#fff', textAlign: 'center' }}><div className="wrap" style={{ maxWidth: '720px' }}>
        <h2 className="h2 reveal" style={{ color: '#fff' }}>See the difference for yourself</h2>
        <p className="lead reveal" style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 30px', transitionDelay: '.04s' }}>Start free — no credit card. Run your first skills-based assessment in minutes.</p>
        <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}>
          <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
          <CtaButton label="Compare plans" href="/pricing" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
