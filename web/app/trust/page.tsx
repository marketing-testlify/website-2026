import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

export default function TrustPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px rgba(242,63,68,.40);}
.btn-ghost{background:#fff;color:#1A1014;border:1.5px solid #EADDDE;}
.btn-ghost:hover{transform:translateY(-2px);border-color:#F2B7B9;box-shadow:0 10px 24px rgba(110,11,14,.08);}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.shero{padding:64px 28px 40px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.badgerow{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:34px;}
.cbadge{display:flex;flex-direction:column;align-items:center;gap:10px;background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:22px 28px;min-width:130px;transition:transform .2s ease, box-shadow .2s ease;}
.cbadge:hover{transform:translateY(-3px);box-shadow:0 16px 34px rgba(110,11,14,.08);}
.cbadgeic{width:50px;height:50px;border-radius:50%;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;}
.cbadget{font-size:13.5px;font-weight:700;color:#1A1014;}
.cbadges{font-size:11.5px;color:#A9999C;}
.secgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.seccard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:28px;transition:transform .25s ease, box-shadow .25s ease, border-color .25s;}
.seccard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.secic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.checklist{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:16px 40px;}
.checklist li{display:flex;align-items:flex-start;gap:12px;font-size:15px;color:#3A2C30;line-height:1.5;}
.checklist svg{flex:none;margin-top:2px;color:#1FA463;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .secgrid{grid-template-columns:1fr;}
  .checklist{grid-template-columns:1fr;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`,
        }}
      />
      <SiteHeader
        announcement="Testlify is SOC 2 Type II and ISO 27001 certified"
        announcementCta="View report"
      />
      <section className="shero">
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <p className="eyebrow reveal">
            Security &amp; trust<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Enterprise-grade
            <br />
            security by default
          </h1>
          <p
            className="lead reveal"
            style={{ margin: '22px auto 0', maxWidth: '600px', transitionDelay: '.08s' }}
          >
            Your candidate data is some of the most sensitive you handle. Testlify protects it with the
            same standards trusted by banks, hospitals and governments.
          </p>
          <div className="reveal badgerow" style={{ transitionDelay: '.12s' }}>
            <div className="cbadge">
              <span className="cbadgeic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </span>
              <span className="cbadget">SOC 2 Type II</span>
              <span className="cbadges">Audited annually</span>
            </div>
            <div className="cbadge">
              <span className="cbadgeic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </span>
              <span className="cbadget">ISO 27001</span>
              <span className="cbadges">Certified</span>
            </div>
            <div className="cbadge">
              <span className="cbadgeic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"></path>
                </svg>
              </span>
              <span className="cbadget">GDPR</span>
              <span className="cbadges">Compliant</span>
            </div>
            <div className="cbadge">
              <span className="cbadgeic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
              <span className="cbadget">CCPA</span>
              <span className="cbadges">Compliant</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" id="security" style={{ paddingTop: '84px' }}>
        <div className="wrap">
          <div style={{ maxWidth: '640px', margin: '0 auto 44px', textAlign: 'center' }}>
            <p className="eyebrow reveal">
              How we protect you<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Security at every layer
            </h2>
          </div>
          <div className="secgrid">
            <div className="seccard reveal">
              <span className="secic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Encryption everywhere
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Data is encrypted in transit with TLS 1.3 and at rest with AES-256. Keys are rotated and
                managed in a dedicated KMS.
              </p>
            </div>
            <div className="seccard reveal" style={{ transitionDelay: '.06s' }}>
              <span className="secic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4"></path>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3-3-2-3-2-1 3-3 3-3-2-3-2-2 3-2 3-3 1-3 3 3 2 3 2 1 3 3 3 3-2 3-2"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Access controls
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                Role-based permissions, SSO/SAML, SCIM provisioning and full audit logs keep access tight
                and traceable.
              </p>
            </div>
            <div className="seccard reveal" style={{ transitionDelay: '.12s' }}>
              <span className="secic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>
                Reliability &amp; uptime
              </h3>
              <p className="body" style={{ fontSize: '14px' }}>
                99.9% uptime SLA, multi-region redundancy, automated backups and continuous monitoring
                with on-call response.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap" style={{ maxWidth: '980px' }}>
          <div style={{ textAlign: 'center', margin: '0 auto 44px' }}>
            <p className="eyebrow reveal">
              Privacy &amp; compliance<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              Built for global hiring
            </h2>
          </div>
          <ul className="checklist reveal">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Data residency options in the EU and US
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Candidate right-to-erasure workflows
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Configurable data retention policies
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Signed Data Processing Agreements (DPA)
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Sub-processor transparency list
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              EEOC &amp; bias-audit aligned assessments
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Annual third-party penetration testing
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Responsible disclosure &amp; bug bounty
            </li>
          </ul>
        </div>
      </section>
      <section className="sec" style={{ background: '#1A1014', color: '#fff', textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal" style={{ color: '#fff' }}>
            Need our security documentation?
          </h2>
          <p
            className="lead reveal"
            style={{ color: 'rgba(255,255,255,.78)', margin: '18px auto 30px', transitionDelay: '.04s' }}
          >
            Access our SOC 2 report, penetration test summary and DPA through the Testlify Trust Center.
          </p>
          <div
            className="reveal"
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '.08s' }}
          >
            <Link className="btn" href="/company-trust-center" style={{ background: '#fff', color: '#C0242B' }}>
              Visit Trust Center
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </Link>
            <a
              className="btn"
              href="#"
              style={{ background: 'rgba(255,255,255,.14)', color: '#fff', border: '1.5px solid rgba(255,255,255,.4)' }}
            >
              Contact security team
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
