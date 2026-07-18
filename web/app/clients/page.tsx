import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';

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
.clhero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.clstat{display:grid;grid-template-columns:repeat(4,1fr);}
.cst{text-align:center;padding:4px 22px;}
.cst + .cst{border-left:1px solid #EFE3E4;}
.cstn{font-size:44px;font-weight:800;letter-spacing:-1.6px;line-height:1;color:#F23F44;font-variant-numeric:tabular-nums;}
.cstl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:12px;line-height:1.45;}
.logogrid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;}
.logocell{height:96px;border:1px solid #F0E2E3;border-radius:16px;display:flex;align-items:center;justify-content:center;background:#fff;font-size:19px;font-weight:800;letter-spacing:-.4px;color:#B4A3A6;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s,color .3s;}
.logocell:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);color:#7A686B;}
.indgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.indcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.indcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.indic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .clstat{grid-template-columns:1fr 1fr;row-gap:34px;}
  .cst + .cst{border-left:none;}
  .logogrid{grid-template-columns:repeat(3,1fr);}
  .indgrid{grid-template-columns:1fr;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function ClientsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteHeader announcement="1,500+ hiring teams assess with Testlify" announcementCta="Read their stories" homeHref="/" />

      <section className="clhero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Our clients<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Trusted by teams<br />who hire on proof</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>From fast-scaling startups to global enterprises, 1,500+ hiring teams use Testlify to replace resume guesswork with verified skill — across 50+ industries and 150+ countries.</p>
        </div>
      </section>

      <section style={{ padding: '10px 28px 0' }}>
        <div className="wrap">
          <div className="clstat reveal">
            <div className="cst"><div className="cstn">1,500+</div><div className="cstl">hiring teams</div></div>
            <div className="cst"><div className="cstn">50,000+</div><div className="cstl">recruiters onboard</div></div>
            <div className="cst"><div className="cstn">5M+</div><div className="cstl">candidates assessed</div></div>
            <div className="cst"><div className="cstn">4.7</div><div className="cstl">average rating on G2</div></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
            <p className="eyebrow reveal">In good company<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The brands that hire with Testlify</h2>
          </div>
          <div className="logogrid reveal">
            <div className="logocell">Xneelo</div>
            <div className="logocell">Kimp</div>
            <div className="logocell">Endiprev</div>
            <div className="logocell">Virtual Gurus</div>
            <div className="logocell">Playroll</div>
            <div className="logocell">Comeet</div>
            <div className="logocell">Whire</div>
            <div className="logocell">Udder</div>
            <div className="logocell">HROne</div>
            <div className="logocell">Arch Advisory</div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div style={{ maxWidth: '660px', margin: '0 auto 44px', textAlign: 'center' }}>
            <p className="eyebrow reveal">Why they choose us<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>One platform, every hiring need</h2>
          </div>
          <div className="indgrid">
            <div className="indcard reveal"><span className="indic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Screen faster</h3><p className="body" style={{ fontSize: '14px' }}>Teams cut screening time by up to 75% and shortlist on verified skill, not gut feel.</p></div>
            <div className="indcard reveal" style={{ transitionDelay: '.06s' }}><span className="indic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Hire fairly</h3><p className="body" style={{ fontSize: '14px' }}>Structured, EEOC-defensible assessments give every candidate an equal, unbiased shot.</p></div>
            <div className="indcard reveal" style={{ transitionDelay: '.12s' }}><span className="indic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Scale with confidence</h3><p className="body" style={{ fontSize: '14px' }}>3,500+ validated tests, 100+ ATS integrations and enterprise-grade security on every plan.</p></div>
          </div>
        </div>
      </section>

      <Testimonials eyebrow="Client stories" heading="Don't take our word for it" />
      <Recognition bg="#FBF3EE" />

      <section className="sec" style={{ background: '#1A1014', color: '#fff', textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal" style={{ color: '#fff' }}>Join 1,500+ teams hiring on proof</h2>
          <p className="lead reveal" style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 30px', transitionDelay: '.04s' }}>Start free — no credit card. See why the best hiring teams switched to Testlify.</p>
          <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}>
            <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Read success stories" href="/customer-success-stories" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
