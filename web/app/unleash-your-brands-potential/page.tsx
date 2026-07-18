import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
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
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.card{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.cic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.btnrow{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .grid3{grid-template-columns:1fr;gap:34px;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.eyebrow{text-wrap:balance;}
p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function UnleashYourBrandsPotentialPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Make every assessment on-brand" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Employer branding<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Unleash your<br />brand&apos;s potential</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>The assessment is often a candidate&apos;s first real interaction with your company. Make it count — with a branded, polished experience that reflects who you are.</p>
        <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
          <CtaButton label="Explore white label" href="/white-label" variant="primary" size="md" icon="arrow" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">Make it yours<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>A first impression worth making</h2>
        </div>
        <div className="grid3">
          <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.9 5.7 21l2.3-7.1-6-4.5h7.6z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>On-brand experience</h3><p className="body" style={{ fontSize: '14px' }}>Your logo, colours and voice across the entire candidate journey.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Your own domain</h3><p className="body" style={{ fontSize: '14px' }}>Assessments hosted on your domain keep the experience seamless.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Better candidate NPS</h3><p className="body" style={{ fontSize: '14px' }}>A professional experience earns goodwill, even from candidates you don&apos;t hire.</p></div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
