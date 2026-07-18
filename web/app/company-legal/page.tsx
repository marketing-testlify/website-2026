'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15.5px;padding:14px 26px;border-radius:13px;transition:transform .25s ease, box-shadow .25s ease;cursor:pointer;border:none;}
.btn-primary{background:#F23F44;color:#fff;box-shadow:0 12px 26px rgba(242,63,68,.30);}
.lhero{background:radial-gradient(1000px 440px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;padding:54px 28px 30px;text-align:center;}
.ltitle{font-size:46px;line-height:1.06;font-weight:800;letter-spacing:-1.6px;margin:6px 0 12px;}
.lupd{font-size:13.5px;color:#9A878A;font-weight:600;}
.legalgrid{display:grid;grid-template-columns:230px 1fr;gap:54px;max-width:1100px;margin:0 auto;padding:54px 28px 96px;}
.lnav{position:sticky;top:130px;align-self:start;display:flex;flex-direction:column;gap:4px;}
.lnavbtn{text-align:left;border:none;background:none;font-family:inherit;font-size:15px;font-weight:600;color:#6A5A5D;padding:11px 14px;border-radius:11px;cursor:pointer;transition:all .2s ease;}
.lnavbtn:hover{background:#FBF3EE;}
.lnavbtn.on{background:#FFF0F0;color:#F23F44;}
.ldoc h2{font-size:28px;font-weight:800;letter-spacing:-.8px;margin:0 0 10px;}
.ldoc h3{font-size:18px;font-weight:700;letter-spacing:-.3px;margin:30px 0 10px;color:#1A1014;}
.ldoc p{font-size:16px;line-height:1.72;color:#3A2C30;margin:0 0 16px;}
.ldoc ul{margin:0 0 18px;padding-left:22px;}
.ldoc li{font-size:16px;line-height:1.7;color:#3A2C30;margin-bottom:8px;}
.ldoc .intro{font-size:17px;color:#5A4B4E;margin-bottom:26px;}
@media(max-width:920px){
  .ltitle{font-size:34px;letter-spacing:-1px;}
  .legalgrid{grid-template-columns:1fr;gap:28px;}
  .lnav{position:static;flex-direction:row;flex-wrap:wrap;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type Doc = 'privacy' | 'terms' | 'gdpr';

export default function CompanyLegalPage() {
  const [doc, setDoc] = useState<Doc>('privacy');

  const titles: Record<Doc, string> = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    gdpr: 'GDPR Compliance',
  };

  const go = (d: Doc) => {
    setDoc(d);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader />
      <section className="lhero">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <p className="eyebrow">Legal<b>.</b></p>
          <h1 className="ltitle">{titles[doc]}</h1>
          <p className="lupd">Last updated · June 1, 2026</p>
        </div>
      </section>
      <div className="legalgrid">
        <nav className="lnav">
          <button className={`lnavbtn ${doc === 'privacy' ? 'on' : ''}`} onClick={() => go('privacy')}>Privacy Policy</button>
          <button className={`lnavbtn ${doc === 'terms' ? 'on' : ''}`} onClick={() => go('terms')}>Terms &amp; Conditions</button>
          <button className={`lnavbtn ${doc === 'gdpr' ? 'on' : ''}`} onClick={() => go('gdpr')}>GDPR</button>
        </nav>
        <div className="ldoc">
          {doc === 'privacy' && (
            <div>
              <p className="intro">This Privacy Policy explains how Testlify collects, uses and protects personal information when you use our skills assessment and interviewing platform. We&apos;ve written it to be readable — if anything is unclear, contact privacy@testlify.com.</p>
              <h3>Information we collect</h3>
              <p>We collect information you provide directly — such as your name, email and company details when you create an account — and information generated as you use Testlify, including assessment results, usage logs and device data.</p>
              <h3>How we use information</h3>
              <ul><li>To provide, maintain and improve the Testlify platform.</li><li>To deliver assessment results and analytics to authorized users.</li><li>To communicate with you about your account and our services.</li><li>To detect, prevent and address security and integrity issues.</li></ul>
              <h3>Candidate data</h3>
              <p>When you take an assessment, the hiring organization is the controller of your data and Testlify acts as a processor on their behalf. You may request access to or deletion of your data at any time via the controls in your account or by contacting us.</p>
              <h3>Data retention &amp; security</h3>
              <p>We retain personal data only as long as necessary to provide our services and meet legal obligations. Data is encrypted in transit and at rest, and access is strictly controlled and logged.</p>
              <h3>Your rights</h3>
              <p>Depending on your location, you may have rights to access, correct, delete or port your personal data, and to object to or restrict certain processing. We honor these requests in line with applicable law.</p>
            </div>
          )}
          {doc === 'terms' && (
            <div>
              <p className="intro">These Terms &amp; Conditions govern your access to and use of Testlify. By creating an account or using the platform, you agree to these terms.</p>
              <h3>Your account</h3>
              <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must provide accurate information and keep it up to date.</p>
              <h3>Acceptable use</h3>
              <ul><li>Do not use Testlify for any unlawful or discriminatory purpose.</li><li>Do not attempt to disrupt, reverse-engineer or gain unauthorized access to the platform.</li><li>Do not misuse candidate data or violate applicable employment and privacy laws.</li></ul>
              <h3>Subscriptions &amp; billing</h3>
              <p>Paid plans are billed in advance on a monthly or annual basis and renew automatically unless cancelled. Fees are non-refundable except where required by law. We may change pricing with reasonable notice.</p>
              <h3>Intellectual property</h3>
              <p>Testlify and its content, including the test library, remain the property of Testlify and its licensors. You retain ownership of the data you submit, and grant us a limited license to process it to provide the service.</p>
              <h3>Limitation of liability</h3>
              <p>Testlify is provided &quot;as is&quot;. To the maximum extent permitted by law, Testlify is not liable for indirect, incidental or consequential damages arising from your use of the platform.</p>
            </div>
          )}
          {doc === 'gdpr' && (
            <div>
              <p className="intro">Testlify is committed to compliance with the EU General Data Protection Regulation (GDPR). This section explains how we meet those obligations as both a controller and a processor.</p>
              <h3>Roles</h3>
              <p>For our customers&apos; candidate data, the hiring organization is the data controller and Testlify is the data processor. For account and billing data of our direct customers, Testlify is the controller.</p>
              <h3>Lawful basis</h3>
              <p>We process personal data on the basis of contract performance, legitimate interests, legal obligation, or consent — as appropriate to each processing activity.</p>
              <h3>Data Processing Agreement</h3>
              <p>We offer a GDPR-compliant Data Processing Agreement (DPA) to all customers, available on request or through your account settings. Our DPA includes the EU Standard Contractual Clauses for international transfers.</p>
              <h3>Sub-processors</h3>
              <p>We maintain a current list of sub-processors and provide notice of changes. All sub-processors are bound by data protection obligations consistent with this policy.</p>
              <h3>Data subject requests</h3>
              <ul><li>Right of access, rectification and erasure.</li><li>Right to restrict or object to processing.</li><li>Right to data portability.</li><li>Right to lodge a complaint with a supervisory authority.</li></ul>
              <p>To exercise any of these rights, contact dpo@testlify.com and we&apos;ll respond within the statutory timeframe.</p>
            </div>
          )}
        </div>
      </div>
      <section style={{ background: '#1A1014', color: '#fff', textAlign: 'center', padding: '72px 28px' }}>
        <div className="wrap" style={{ maxWidth: '640px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-1px', color: '#fff', margin: '0 0 14px' }}>Questions about our policies?</h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,.78)', margin: '0 0 26px' }}>Our team is happy to help. Reach us at legal@testlify.com.</p>
          <CtaButton label="Contact us" href="#" variant="light" size="md" icon="arrow" />
        </div>
      </section>
      <CtaBand />
      <SiteFooter />
    </>
  );
}
