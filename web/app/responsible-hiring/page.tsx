import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import CtaBand from '@/components/CtaBand';

export default function ResponsibleHiringPage() {
  return (
    <>
      <SiteHeader announcement="Hiring should be fair by design" announcementCta="How we do it" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Responsible hiring<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Fair by design,<br />not by accident</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Skills-based assessment isn&apos;t just faster — it&apos;s fairer. Testlify is built to remove bias, give every candidate an equal shot, and keep your hiring defensible at every step.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Our commitments<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>How we keep hiring fair</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Remove unconscious bias</h3>
              <p className="body" style={{ fontSize: '14px' }}>Structured, anonymised assessment focuses on ability — not name, school or background.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>EEOC-defensible</h3>
              <p className="body" style={{ fontSize: '14px' }}>Consistent scoring and a full audit trail keep every hiring decision defensible.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Equal opportunity</h3>
              <p className="body" style={{ fontSize: '14px' }}>Every candidate gets the same fair chance to prove what they can do.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Validity you can trust<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '22px' }}>Assessments built to a scientific standard</h2>
            <ul className="chk">
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Developed to BPS guidelines grounded in the EFPA review model</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>QA by I/O psychologists and industry experts</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Peer-reviewed and calibrated on real test-taker data</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Continuously refined for reliability and validity</li>
            </ul>
            <div style={{ marginTop: '26px' }}>
              <CtaButton label="The science behind our tests" href="/science" variant="ghost" size="md" icon="arrow" />
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: '24px', padding: '40px' }}>
            <p className="h3" style={{ fontSize: '24px', lineHeight: 1.4, fontWeight: 600 }}>&ldquo;Give all applicants an equal, unbiased opportunity to showcase their talent — and find hidden gems from underrepresented backgrounds.&rdquo;</p>
            <p className="body" style={{ fontSize: '14px', marginTop: '20px', fontWeight: 600, color: '#1A1014' }}>— The Testlify approach to fair hiring</p>
          </div>
        </div>
      </section>

      <SecuritySection eyebrow="Trust &amp; compliance" heading="Secure, compliant, and built for scale" sub="Your data and your candidates' data are protected by enterprise-grade security and privacy standards." />

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">Hire fairer, starting today</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Start free — and give every candidate a fair shot to prove what they can do.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Trust center" href="/trust" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
