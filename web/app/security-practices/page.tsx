import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

export default function SecurityPracticesPage() {
  return (
    <>
      <SiteHeader announcement="How we keep your data safe" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Security practices<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>The controls<br />behind the platform</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>A closer look at the technical and organisational measures that keep Testlify secure — from infrastructure to people.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid2" style={{ gap: '22px' }}>
            <div className="card reveal"><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Infrastructure</h3><p className="body" style={{ fontSize: '14.5px' }}>Hosted on leading cloud providers with isolated environments, automated backups and disaster recovery.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.05s' }}><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Encryption</h3><p className="body" style={{ fontSize: '14.5px' }}>TLS 1.2+ in transit and AES-256 at rest, with managed key rotation.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.1s' }}><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Access management</h3><p className="body" style={{ fontSize: '14.5px' }}>Least-privilege access, SSO, MFA and role-based permissions across the organisation.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.15s' }}><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Monitoring &amp; response</h3><p className="body" style={{ fontSize: '14.5px' }}>Continuous logging, alerting and an incident-response process rehearsed regularly.</p></div>
            <div className="card reveal"><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Secure development</h3><p className="body" style={{ fontSize: '14.5px' }}>Code review, dependency scanning and regular penetration testing in the SDLC.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.05s' }}><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>People &amp; process</h3><p className="body" style={{ fontSize: '14.5px' }}>Background checks, security training and vendor due diligence for everyone with access.</p></div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Certifications<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Independently audited</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <span className="pill">SOC 2 Type II</span>
            <span className="pill">ISO 27001</span>
            <span className="pill">GDPR</span>
            <span className="pill">CCPA</span>
            <span className="pill">EEOC-defensible</span>
          </div>
          <p className="body reveal" style={{ textAlign: 'center', marginTop: '24px' }}>Need our audit reports? <Link className="lnk" href="/contact">Request them from our team.</Link></p>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
