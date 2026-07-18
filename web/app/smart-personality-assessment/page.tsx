import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function SmartPersonalityAssessmentPage() {
  return (
    <>
      <SiteHeader announcement="Understand people beyond the resume" announcementCta="Try for free" homeHref="/" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Smart personality assessment<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>See how people<br />really work</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>The Smart Personality Assessment reveals traits, motivations and working styles that a resume can&apos;t — helping you hire for fit and build stronger teams, fairly and scientifically.</p>
        <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
          <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" />
          <CtaButton label="See a sample report" href="/smart-personality-assessment-report" variant="ghost" size="md" icon="none" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">What it measures<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The traits behind performance</h2>
        </div>
        <div className="grid3">
          <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M8 12h8M12 8v8"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Working style</h3><p className="body" style={{ fontSize: '14px' }}>How someone plans, prioritises and gets things done day to day.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Collaboration</h3><p className="body" style={{ fontSize: '14px' }}>How they communicate, handle conflict and work within a team.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Motivation</h3><p className="body" style={{ fontSize: '14px' }}>What drives them, and the environments where they do their best work.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap split">
        <div className="reveal">
          <p className="eyebrow">Built on science<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '22px' }}>Valid, reliable and fair</h2>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Developed to BPS guidelines and the EFPA review model</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Reviewed by I/O psychologists and industry experts</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Designed to reduce bias, not reinforce it</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Clear, actionable reports for hiring and development</li>
          </ul>
          <div style={{ marginTop: '26px' }}>
            <CtaButton label="The science behind our tests" href="/science" variant="ghost" size="md" icon="arrow" />
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: '24px', padding: '40px' }}>
          <p className="h3" style={{ fontSize: '22px', lineHeight: 1.4, fontWeight: 600 }}>Curious what a report looks like? See a full sample, then run your own.</p>
          <div style={{ marginTop: '24px' }}>
            <CtaButton label="View the report" href="/smart-personality-assessment-report" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
