import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function ReportingAnalyticsPage() {
  return (
    <>
      <SiteHeader announcement="Turn assessment data into decisions" announcementCta="Try for free" homeHref="/" />

      <section className="phero"><div className="wrap" style={{ maxWidth: 860 }}>
        <p className="eyebrow reveal">Reporting &amp; analytics<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>See exactly<br />who can do the job</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 640, transitionDelay: '.08s' }}>Rich reports and analytics turn every assessment into a clear, comparable picture of ability — so you shortlist faster and defend every hiring decision with data.</p>
        <div className="reveal btnrow" style={{ marginTop: 30, transitionDelay: '.12s' }}>
          <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" />
          <CtaButton label="Book a demo" href="/demo" variant="secondary" size="md" icon="none" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">What you get<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Insight at every level</h2>
        </div>
        <div className="grid3">
          <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9M13 17V5M8 17v-3"></path></svg></span><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Candidate scorecards</h3><p className="body" style={{ fontSize: 14 }}>Clear, benchmarked scores per skill make comparing candidates effortless.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></span><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Funnel analytics</h3><p className="body" style={{ fontSize: 14 }}>Track completion, pass rates and time-to-shortlist across every role.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path></svg></span><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Exportable reports</h3><p className="body" style={{ fontSize: 14 }}>Share results with stakeholders and keep an audit trail for compliance.</p></div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
