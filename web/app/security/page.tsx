import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';
import SecuritySection from '@/components/SecuritySection';

export default function SecurityPage() {
  return (
    <>
      <SiteHeader announcement="SOC 2 Type II · ISO 27001 · GDPR · CCPA" announcementCta="Trust center" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Security<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Enterprise-grade<br />security, by default</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Your data and your candidates&apos; data deserve the highest protection. Testlify is built on independently audited controls — encryption, access management and continuous monitoring — on every plan.</p>
          <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
            <CtaButton label="Visit trust center" href="/trust" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Security practices" href="/security-practices" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section style={{ padding: '10px 28px 0' }}>
        <div className="wrap">
          <div className="statrow reveal">
            <div className="stat"><div className="statn" style={{ fontSize: '30px' }}>SOC 2</div><div className="statl">Type II certified</div></div>
            <div className="stat"><div className="statn" style={{ fontSize: '30px' }}>ISO 27001</div><div className="statl">certified</div></div>
            <div className="stat"><div className="statn" style={{ fontSize: '30px' }}>GDPR</div><div className="statl">compliant</div></div>
            <div className="stat"><div className="statn" style={{ fontSize: '30px' }}>CCPA</div><div className="statl">compliant</div></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">How we protect you<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Security at every layer</h2>
          </div>
          <div className="grid3">
            <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Encryption everywhere</h3><p className="body" style={{ fontSize: '14px' }}>Data is encrypted in transit (TLS 1.2+) and at rest (AES-256) across the platform.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Access controls</h3><p className="body" style={{ fontSize: '14px' }}>Role-based permissions, SSO and least-privilege access keep data in the right hands.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Continuous monitoring</h3><p className="body" style={{ fontSize: '14px' }}>24/7 monitoring, logging and alerting detect and respond to threats fast.</p></div>
          </div>
        </div>
      </section>

      <SecuritySection eyebrow="Trust &amp; compliance" heading="Secure, compliant, and built for scale" sub="Enterprise-grade security and privacy controls, independently audited and available on every plan." />

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">Dig into the details</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Explore our practices, standards and architecture — or request our reports.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Security practices" href="/security-practices" variant="light" size="md" icon="arrow" />
            <CtaButton label="Trust center" href="/trust" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
