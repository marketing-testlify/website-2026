import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function DataResidencyPage() {
  return (
    <>
      <SiteHeader announcement="Know where your data lives" announcementCta="Trust center" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Data residency<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Your data,<br />where you need it</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Testlify gives you clarity and control over where your data is stored and processed, with regional hosting options and approved transfer safeguards.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">How it works<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Control over location</h2>
          </div>
          <div className="grid3">
            <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Regional hosting</h3><p className="body" style={{ fontSize: '14px' }}>Enterprise customers can select a hosting region to meet residency requirements.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Protected transfers</h3><p className="body" style={{ fontSize: '14px' }}>Cross-border transfers use Standard Contractual Clauses and equivalent safeguards.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Transparency</h3><p className="body" style={{ fontSize: '14px' }}>A clear sub-processor list tells you exactly who processes data and where.</p></div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE', textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <p className="eyebrow reveal">Need specifics?<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s', marginBottom: '20px' }}>Let&apos;s map it to your requirements</h2>
          <p className="lead reveal" style={{ transitionDelay: '.08s', marginBottom: '28px' }}>Tell us your residency needs and we&apos;ll walk you through the options for your organisation.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.12s' }}>
            <CtaButton label="Talk to our team" href="/contact" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Data privacy framework" href="/data-privacy-framework" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
