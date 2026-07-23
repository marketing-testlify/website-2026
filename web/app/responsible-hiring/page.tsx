import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import SecuritySection from "@/components/SecuritySection";
import CtaBand from "@/components/CtaBand";

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:96px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.acc{color:#F23F44;}
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
.darkcta{background:#1A1014;color:#fff;text-align:center;}
.darkcta .h2{color:#fff;}
.darkcta .lead{color:rgba(255,255,255,.78);}
.btnrow{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .grid3,.split{grid-template-columns:1fr;gap:34px;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}
p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function ResponsibleHiringPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Hiring should be fair by design" announcementCta="How we do it" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <p className="eyebrow reveal">Responsible hiring<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".04s" }}>
            <span className="acc">Fair by design</span>,<br />not by accident
          </h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: "640px", transitionDelay: ".08s" }}>
            Skills-based assessment isn&apos;t just faster — it&apos;s fairer. Testlify is built to remove bias, give every candidate an equal shot, and keep your hiring defensible at every step.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Our commitments<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>How we keep hiring fair</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Remove unconscious bias</h3>
              <p className="body" style={{ fontSize: "14px" }}>Structured, anonymised assessment focuses on ability — not name, school or background.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".06s" }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>EEOC-defensible</h3>
              <p className="body" style={{ fontSize: "14px" }}>Consistent scoring and a full audit trail keep every hiring decision defensible.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: ".12s" }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Equal opportunity</h3>
              <p className="body" style={{ fontSize: "14px" }}>Every candidate gets the same fair chance to prove what they can do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Validity you can trust<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: "22px" }}>Assessments built to a scientific standard</h2>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Developed to BPS guidelines grounded in the EFPA review model</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>QA by I/O psychologists and industry experts</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Peer-reviewed and calibrated on real test-taker data</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Continuously refined for reliability and validity</li>
            </ul>
            <div style={{ marginTop: "26px" }}>
              <CtaButton label="The science behind our tests" href="/science" variant="ghost" size="md" icon="arrow" />
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: ".08s", background: "linear-gradient(160deg,#FFF4F3,#FBE9E9)", border: "1px solid #F6DCDD", borderRadius: "24px", padding: "40px" }}>
            <p className="h3" style={{ fontSize: "24px", lineHeight: 1.4, fontWeight: 600 }}>&quot;Give all applicants an equal, unbiased opportunity to showcase their talent — and find hidden gems from underrepresented backgrounds.&quot;</p>
            <p className="body" style={{ fontSize: "14px", marginTop: "20px", fontWeight: 600, color: "#1A1014" }}>— The Testlify approach to fair hiring</p>
          </div>
        </div>
      </section>

      <SecuritySection
        eyebrow="Trust & compliance"
        heading="Secure, compliant, and built for scale"
        sub="Your data and your candidates' data are protected by enterprise-grade security and privacy standards."
      />

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <h2 className="h2 reveal">Hire fairer, starting today</h2>
          <p className="lead reveal" style={{ margin: "18px auto 30px", transitionDelay: ".04s" }}>Start free — and give every candidate a fair shot to prove what they can do.</p>
          <div className="reveal btnrow" style={{ transitionDelay: ".08s" }}>
            <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Trust center" href="/security" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
