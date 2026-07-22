import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaButton from "@/components/CtaButton";
import CtaBand from "@/components/CtaBand";
import Recognition from "@/components/Recognition";

const css = `
/* Testlify shared base — tokens, layout, reveal. Poppins + coral system. */
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

export default function AwardsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Rated 4.7 on G2 by hiring teams worldwide" announcementCta="See reviews" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <p className="eyebrow reveal">Awards &amp; recognition<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".04s" }}>Recognized by the<br />people who use it</h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: "640px", transitionDelay: ".08s" }}>Testlify is consistently ranked among the top talent assessment platforms — by review sites, industry bodies and, most importantly, the recruiters who use it every day.</p>
        </div>
      </section>

      <section style={{ padding: "10px 28px 0" }}>
        <div className="wrap">
          <div className="statrow reveal">
            <div className="stat"><div className="statn">4.7</div><div className="statl">average on G2</div></div>
            <div className="stat"><div className="statn">50,000+</div><div className="statl">recruiters</div></div>
            <div className="stat"><div className="statn">Top 50</div><div className="statl">HR products</div></div>
            <div className="stat"><div className="statn">High</div><div className="statl">performer badges</div></div>
          </div>
        </div>
      </section>

      <Recognition />

      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Highlights<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>A few we&apos;re proud of</h2>
          </div>
          <div className="grid3">
            <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"></path></svg></span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>G2 High Performer</h3><p className="body" style={{ fontSize: "14px" }}>Awarded across multiple assessment and interviewing categories, quarter after quarter.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".06s" }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.9 5.7 21l2.3-7.1-6-4.5h7.6z"></path></svg></span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Founder Award, beelieve 2024</h3><p className="body" style={{ fontSize: "14px" }}>Recognized for visionary leadership shaping the future of the subscription industry.</p></div>
            <div className="card reveal" style={{ transitionDelay: ".12s" }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span><h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Backed by the best</h3><p className="body" style={{ fontSize: "14px" }}>SHRM Labs, Google for Startups, Microsoft for Startups and NVIDIA Inception.</p></div>
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: "720px" }}>
          <h2 className="h2 reveal">See why teams rate us</h2>
          <p className="lead reveal" style={{ margin: "18px auto 30px", transitionDelay: ".04s" }}>Read real reviews or try Testlify free and judge for yourself.</p>
          <div className="reveal btnrow" style={{ transitionDelay: ".08s" }}>
            <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Read stories" href="/customer-success-stories" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
