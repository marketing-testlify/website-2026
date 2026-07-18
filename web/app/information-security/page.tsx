import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a.lnk{color:#F23F44;font-weight:600;}
a.lnk:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.phero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.center-head{max-width:660px;margin:0 auto 44px;text-align:center;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.card{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.cic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{position:relative;padding-left:32px;font-size:15px;line-height:1.55;color:#5A4B4E;}
.chk li>svg{position:absolute;left:0;top:3px;color:#F23F44;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .grid3,.split{grid-template-columns:1fr;gap:34px;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}
p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function InformationSecurityPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Our information security program" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Information security<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>A program, not<br />a checkbox</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Information security at Testlify is a continuous program governed by clear policies, ownership and independent audit — not a one-time exercise.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">Our program<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>How we govern security</h2>
        </div>
        <div className="grid3">
          <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Documented policies</h3><p className="body" style={{ fontSize: '14px' }}>A full set of security policies reviewed and updated on a regular cadence.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Clear ownership</h3><p className="body" style={{ fontSize: '14px' }}>A dedicated security function owns risk, controls and incident response.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M12 6v6l4 2"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Continuous audit</h3><p className="body" style={{ fontSize: '14px' }}>Independent audits, penetration tests and internal reviews keep us honest.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap split">
        <div className="reveal">
          <p className="eyebrow">Risk management<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '22px' }}>We manage risk proactively</h2>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Regular risk assessments across the business</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Vendor due diligence for every sub-processor</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Security training for all staff</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Tested business continuity and disaster recovery</li>
          </ul>
          <div style={{ marginTop: '26px' }}>
            <CtaButton label="See our standards" href="/testlify-information-security-standards" variant="ghost" size="md" icon="arrow" />
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: '24px', padding: '40px' }}>
          <p className="h3" style={{ fontSize: '22px', lineHeight: '1.4', fontWeight: 600 }}>Reviewing Testlify for your organisation? We&apos;re happy to walk your security team through the details.</p>
          <div style={{ marginTop: '24px' }}>
            <CtaButton label="Talk to security" href="/contact" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
