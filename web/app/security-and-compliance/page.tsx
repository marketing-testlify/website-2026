import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function SecurityAndCompliancePage() {
  return (
    <>
      <SiteHeader announcement="Security & compliance you can prove" announcementCta="Trust center" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Security &amp; compliance<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Compliance that<br />stands up to scrutiny</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>From data protection to defensible hiring, Testlify gives you the certifications, controls and audit trail your legal and security teams expect.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Covered<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The standards we meet</h2>
          </div>
          <div className="grid3">
            <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>SOC 2 Type II &amp; ISO 27001</h3><p className="body" style={{ fontSize: '14px' }}>Independently audited controls for security, availability and confidentiality.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>GDPR &amp; CCPA</h3><p className="body" style={{ fontSize: '14px' }}>Full data-protection compliance with DPAs, SCCs and data-subject rights support.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>EEOC-defensible hiring</h3><p className="body" style={{ fontSize: '14px' }}>Structured, consistent assessment with a full audit trail for every decision.</p></div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Documentation<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '22px' }}>Everything your team needs to sign off</h2>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><Link className="lnk" href="/data-processing-agreement">Data Processing Agreement</Link></li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><Link className="lnk" href="/security-practices">Security Practices</Link></li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><Link className="lnk" href="/data-privacy-framework">Data Privacy Framework</Link></li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><Link className="lnk" href="/service-level-agreement">Service Level Agreement</Link></li>
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: '24px', padding: '40px' }}>
            <p className="h3" style={{ fontSize: '22px', lineHeight: 1.4, fontWeight: 600 }}>Need SOC 2 or ISO reports for a security review? Our team can share them under NDA.</p>
            <div style={{ marginTop: '24px' }}>
              <CtaButton label="Request reports" href="/contact" variant="primary" size="md" icon="arrow" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
