import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function DiscoverThePowerOfRapidTeamScaling() {
  return (
    <>
      <SiteHeader announcement="Scale hiring without losing quality" announcementCta="Try for free" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Rapid team scaling<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Scale your team,<br />keep your standards</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Hiring fast usually means cutting corners. Not here. Assess thousands of candidates objectively and fairly, and grow your team without lowering the bar.</p>
          <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
            <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Volume hiring" href="/volume-hiring" variant="secondary" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Scale with confidence<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Fast and fair at any volume</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Screen in bulk</h3>
              <p className="body" style={{ fontSize: '14px' }}>Invite thousands of candidates at once and auto-score every response.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Consistent quality</h3>
              <p className="body" style={{ fontSize: '14px' }}>Every candidate is measured against the same objective standard.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"></path><path d="M4 9h16M9 4v16"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Works with your ATS</h3>
              <p className="body" style={{ fontSize: '14px' }}>100+ integrations keep your growing pipeline flowing smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
