import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function SkillsAssessmentAndInterviewingPlatform() {
  return (
    <>
      <SiteHeader announcement="Assessment + interviews, one platform" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">
            Assessment &amp; interviewing<b>.</b>
          </p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Screen and interview,<br />in one flow
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>
            Stop stitching tools together. Testlify combines skills assessment and AI interviewing on a single platform — so candidates move from test to interview to shortlist without friction.
          </p>
          <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
            <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Book a demo" href="/demo" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">
              One platform<b>.</b>
            </p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>
              From application to offer
            </h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Assess skills</h3>
              <p className="body" style={{ fontSize: '14px' }}>Start with a validated test to verify ability before anyone spends time interviewing.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2"></rect>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Interview with AI</h3>
              <p className="body" style={{ fontSize: '14px' }}>Automated video, audio and chat interviews score candidates consistently.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"></path>
                  <path d="M18 17V9M13 17V5M8 17v-3"></path>
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Shortlist with evidence</h3>
              <p className="body" style={{ fontSize: '14px' }}>See test and interview results side by side and decide with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">One platform, better hires</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>
            Assess and interview in one flow. Start free — no credit card.
          </p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Interviews" href="/interviews" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
