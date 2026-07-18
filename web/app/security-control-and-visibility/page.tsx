import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";

const css = `
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
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.card{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.cic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{position:relative;padding-left:32px;font-size:15px;line-height:1.55;color:#5A4B4E;}
.chk li>svg{position:absolute;left:0;top:3px;color:#F23F44;}
.pill{font-size:14.5px;font-weight:600;color:#5A4B4E;background:#fff;border:1px solid #EADDDE;border-radius:100px;padding:11px 22px;}
.statrow{display:grid;grid-template-columns:repeat(4,1fr);}
.stat{text-align:center;padding:4px 22px;}
.stat + .stat{border-left:1px solid #EFE3E4;}
.statn{font-size:44px;font-weight:800;letter-spacing:-1.6px;line-height:1;color:#F23F44;font-variant-numeric:tabular-nums;}
.statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:12px;line-height:1.45;}
.darkcta{background:#1A1014;color:#fff;text-align:center;}
.darkcta .h2{color:#fff;}
.darkcta .lead{color:rgba(255,255,255,.78);}
.btnrow{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .grid2,.grid3,.grid4,.split{grid-template-columns:1fr;gap:34px;}
  .statrow{grid-template-columns:1fr 1fr;row-gap:34px;}
  .stat + .stat{border-left:none;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}
p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Control and visibility, built in" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <p className="eyebrow reveal">Security control &amp; visibility<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".04s" }}>Stay in control<br />of your account</h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: "640px", transitionDelay: ".08s" }}>Admin controls and audit logs give your team full visibility into who did what, when — so you can govern access with confidence.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Admin controls<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Govern access with ease</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Role-based access</h3>
              <p className="body" style={{ fontSize: "14px" }}>Assign granular permissions so people see only what they need to.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".06s" }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>SSO &amp; MFA</h3>
              <p className="body" style={{ fontSize: "14px" }}>Enforce single sign-on and multi-factor authentication across your team.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".12s" }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6M16 13H8M16 17H8"></path></svg></span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Audit logs</h3>
              <p className="body" style={{ fontSize: "14px" }}>A detailed activity trail shows every action for review and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FBF3EE", textAlign: "center" }}>
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <p className="eyebrow reveal">Enterprise ready<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: ".04s", marginBottom: "20px" }}>Governance that scales with you</h2>
          <p className="lead reveal" style={{ transitionDelay: ".08s", marginBottom: "28px" }}>From a small team to thousands of seats, keep control and visibility as you grow.</p>
          <div className="reveal btnrow" style={{ transitionDelay: ".12s" }}>
            <CtaButton label="Talk to sales" href="/contact" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Security overview" href="/security" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
