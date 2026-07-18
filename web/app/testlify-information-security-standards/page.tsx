import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.grid2{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;}
.card{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .grid2{grid-template-columns:1fr;gap:16px;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}
p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function InformationSecurityStandardsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Our information security standards" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <p className="eyebrow reveal">Information security standards<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".04s" }}>The standards<br />we hold ourselves to</h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: "640px", transitionDelay: ".08s" }}>A summary of the frameworks, controls and commitments that define information security at Testlify.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid2" style={{ gap: "22px" }}>
            <div className="card reveal"><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>SOC 2 Type II</h3><p className="body" style={{ fontSize: "14.5px" }}>Audited controls for security, availability, and confidentiality, reviewed annually.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".05s" }}><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>ISO/IEC 27001</h3><p className="body" style={{ fontSize: "14.5px" }}>A certified information security management system (ISMS) governing our controls.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".1s" }}><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Data protection</h3><p className="body" style={{ fontSize: "14.5px" }}>GDPR and CCPA compliance with DPAs and approved transfer mechanisms.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".15s" }}><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Encryption standards</h3><p className="body" style={{ fontSize: "14.5px" }}>TLS 1.2+ in transit, AES-256 at rest, with managed key rotation.</p></div>
            <div className="card reveal"><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Access &amp; identity</h3><p className="body" style={{ fontSize: "14.5px" }}>SSO, MFA, least-privilege access and periodic access reviews.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".05s" }}><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Resilience</h3><p className="body" style={{ fontSize: "14.5px" }}>Automated backups, tested disaster recovery and high-availability architecture.</p></div>
          </div>
          <p className="body reveal" style={{ textAlign: "center", marginTop: "30px" }}>For the full standards documentation, <Link className="lnk" href="/contact">contact our security team.</Link></p>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
