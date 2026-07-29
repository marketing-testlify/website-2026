import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

const css = `
.presstabs{display:flex;justify-content:center;gap:8px;margin:0 0 30px;}
.presstab{font-size:14px;font-weight:600;color:#8A7A7D;text-decoration:none;padding:9px 18px;border-radius:999px;}
.presstab.on{background:#fff;color:#1A1014;box-shadow:0 4px 14px rgba(110,11,14,.10);}
.badgegrid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
.badgecard{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:22px 18px;text-align:center;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.badgecard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.12);}
.badgecard img{max-width:100%;max-height:140px;object-fit:contain;margin-bottom:14px;}
.badgecard p{font-size:13.5px;font-weight:600;color:#1A1014;margin:0;line-height:1.4;}
@media(max-width:960px){.badgegrid{grid-template-columns:repeat(2,1fr)!important;}}
`;

export default function AwardsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Rated 4.7 on G2 by hiring teams worldwide" announcementCta="See reviews" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <div className="presstabs reveal">
            <Link className="presstab" href="/press-room">Latest press</Link>
            <Link className="presstab on" href="/awards">Awards and recognition</Link>
            <Link className="presstab" href="/press-kit">Press kit</Link>
          </div>
          <p className="eyebrow reveal" style={{ transitionDelay: ".04s" }}>Awards &amp; recognition<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: ".08s" }}>Celebrating the <span style={{ color: "#F23F44" }}>milestones</span> that drive us forward</h1>
          <p className="lead reveal" style={{ margin: "22px auto 0", maxWidth: "640px", transitionDelay: ".12s" }}>Every recognition reflects the trust our customers place in Testlify and our commitment to building a better hiring experience for teams worldwide.</p>
          <div className="reveal" style={{ marginTop: "36px", transitionDelay: ".16s", maxWidth: "420px", marginLeft: "auto", marginRight: "auto" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://testlify.com/wp-content/uploads/2026/05/Celebrating-the-milestones-that-drive-us-forward-1-867x1024.png"
              alt="Celebrating the milestones that drive us forward"
              style={{ width: "100%", borderRadius: "16px", boxShadow: "0 16px 30px rgba(110,11,14,.10)" }}
            />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Recognition<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Industry recognition</h2>
          </div>
          <div className="badgegrid reveal">
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/badge1.png" alt="High performer enterprise badge" />
              <p>Spring 2026 — High performer enterprise</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/badge2.png" alt="High performer badge" />
              <p>Spring 2026 — High performer</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/badge3.png" alt="Leader badge" />
              <p>Spring 2026 — Leader</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/badge4.png" alt="Users most likely to recommend badge" />
              <p>Spring 2026 — Users most likely to recommend</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/trust1.png" alt="Trust Radius Buyer's choice badge" />
              <p>Trust Radius — Buyer&apos;s choice 2025</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/trust2.png" alt="Trust Radius Top rated badge" />
              <p>Trust Radius — Top rated 2025</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/g2best1.png" alt="Best meets requirement G2 badge" />
              <p>Spring 2026 — Best meets requirement G2</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/g2best2.png" alt="Best relationship G2 badge" />
              <p>Spring 2026 — Best relationship G2</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "#FBF3EE" }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Recognition<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Partnerships &amp; leadership recognition</h2>
          </div>
          <div className="badgegrid reveal">
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/shrm.png" alt="SHRM Labs badge" />
              <p>SHRM Labs workplace innovator program</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/google.png" alt="Google for Startups badge" />
              <p>Google for startups</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/ms.png" alt="Microsoft for Startups badge" />
              <p>Microsoft for startups</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/nvidia.png" alt="NVIDIA Inception badge" />
              <p>NVIDIA inception program</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/chargebee.png" alt="Chargebee Founder Award" />
              <p>Chargebee founder award</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/mompreneur.png" alt="Mompreneur Award" />
              <p>Mompreneur award</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Recognition<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: ".04s" }}>Workplace &amp; certification recognition</h2>
          </div>
          <div className="badgegrid reveal" style={{ gridTemplateColumns: "repeat(2,minmax(0,260px))", justifyContent: "center" }}>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/workday.png" alt="Workday integration partner badge" />
              <p>Innovation partner &amp; certified integration partner with Workday</p>
            </div>
            <div className="badgecard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/sap.png" alt="SAP partner badge" />
              <p>SAP partner</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
