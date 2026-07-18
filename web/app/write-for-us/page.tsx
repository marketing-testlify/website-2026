import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
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
.wfhero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.wfgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.wfcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.wfcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.wfic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.topics{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}
.topic{font-size:14.5px;font-weight:600;color:#5A4B4E;background:#fff;border:1px solid #EADDDE;border-radius:100px;padding:11px 22px;transition:border-color .25s,color .25s,transform .25s;}
.topic:hover{border-color:#FBD0D1;color:#1A1014;transform:translateY(-2px);}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.step{position:relative;}
.stepn{width:44px;height:44px;border-radius:12px;background:#F23F44;color:#fff;font-weight:800;font-size:18px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{position:relative;padding-left:34px;font-size:15.5px;line-height:1.55;color:#5A4B4E;}
.chk li svg{position:absolute;left:0;top:2px;color:#F23F44;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .wfgrid{grid-template-columns:1fr;}
  .steps{grid-template-columns:1fr 1fr;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function WriteForUsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Share your HR expertise with 50,000+ recruiters" />

      <section className="wfhero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Write for us<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Got a hiring insight<br />worth sharing?</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>The Testlify blog reaches 50,000+ recruiters and hiring leaders every month. If you have a fresh take on skills-based hiring, recruiting or the future of work, we want to publish it.</p>
        <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px', transitionDelay: '.12s' }}>
          <CtaButton label="Pitch your idea" href="/contact" variant="primary" size="md" icon="arrow" />
          <CtaButton label="See the blog" href="/blog" variant="ghost" size="md" icon="none" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">Why contribute<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Reach the people shaping hiring</h2>
        </div>
        <div className="wfgrid">
          <div className="wfcard reveal"><span className="wfic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>A real audience</h3><p className="body" style={{ fontSize: '14px' }}>Get in front of 50,000+ recruiters, TA leaders and HR professionals actively looking to hire better.</p></div>
          <div className="wfcard reveal" style={{ transitionDelay: '.06s' }}><span className="wfic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16l8-4 8 4V4a2 2 0 0 0-2-2z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>A byline that counts</h3><p className="body" style={{ fontSize: '14px' }}>Every published piece carries your name, bio and links — building your authority in the HR space.</p></div>
          <div className="wfcard reveal" style={{ transitionDelay: '.12s' }}><span className="wfic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Editorial support</h3><p className="body" style={{ fontSize: '14px' }}>Our editors work with you on structure, clarity and SEO so your piece lands its point.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ maxWidth: '820px', textAlign: 'center' }}>
        <p className="eyebrow reveal">What we publish<b>.</b></p>
        <h2 className="h2 reveal" style={{ transitionDelay: '.04s', marginBottom: '30px' }}>Topics we love</h2>
        <div className="topics reveal" style={{ transitionDelay: '.08s' }}>
          <span className="topic">Skills-based hiring</span>
          <span className="topic">Candidate experience</span>
          <span className="topic">Recruiting operations</span>
          <span className="topic">Diversity &amp; inclusion</span>
          <span className="topic">Talent assessment</span>
          <span className="topic">Remote hiring</span>
          <span className="topic">HR technology</span>
          <span className="topic">Interviewing</span>
          <span className="topic">Employer branding</span>
          <span className="topic">Future of work</span>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
          <p className="eyebrow reveal">How it works<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>From pitch to published</h2>
        </div>
        <div className="steps reveal">
          <div className="step"><div className="stepn">1</div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '8px' }}>Pitch your idea</h3><p className="body" style={{ fontSize: '14px' }}>Send us a short outline and the angle you want to take.</p></div>
          <div className="step"><div className="stepn">2</div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '8px' }}>Get the go-ahead</h3><p className="body" style={{ fontSize: '14px' }}>We reply within 5 business days with feedback and a green light.</p></div>
          <div className="step"><div className="stepn">3</div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '8px' }}>Write &amp; submit</h3><p className="body" style={{ fontSize: '14px' }}>Draft your 1,000–1,800 word piece; our editors refine it with you.</p></div>
          <div className="step"><div className="stepn">4</div><h3 className="h3" style={{ fontSize: '17px', marginBottom: '8px' }}>Go live</h3><p className="body" style={{ fontSize: '14px' }}>We publish, credit you, and share it across our channels.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div className="reveal">
          <p className="eyebrow">Submission guidelines<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '22px' }}>Before you hit send</h2>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Original, unpublished work — no AI-spun or syndicated content.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>1,000–1,800 words, practical and specific, with real examples.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Claims backed by data or credible sources — never invented stats.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>A short author bio (50 words) and one relevant link.</li>
          </ul>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: '24px', padding: '40px' }}>
          <p className="h3" style={{ fontSize: '22px', lineHeight: '1.4', fontWeight: 600 }}>Ready to pitch? Tell us your topic, angle and why it matters to hiring teams — we&apos;ll take it from there.</p>
          <div style={{ marginTop: '24px' }}>
            <CtaButton label="Submit your pitch" href="/contact" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
