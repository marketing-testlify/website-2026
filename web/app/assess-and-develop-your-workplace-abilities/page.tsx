import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function AssessAndDevelopYourWorkplaceAbilitiesPage() {
  return (
    <>
      <SiteHeader announcement="Assess and develop workplace abilities" />

      <section className="phero"><div className="wrap" style={{ maxWidth: 860 }}>
        <p className="eyebrow reveal">Workplace abilities<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Assess and develop<br />real workplace skills</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 640, transitionDelay: '.08s' }}>Go beyond the resume. Measure the abilities that actually predict on-the-job success — and use the insights to hire, onboard and grow your people.</p>
        <div className="reveal btnrow" style={{ marginTop: 30, transitionDelay: '.12s' }}>
          <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" />
          <CtaButton label="Browse tests" href="/test-library" variant="secondary" size="md" icon="none" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">What you can measure<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The abilities that matter</h2>
        </div>
        <div className="grid3">
          <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1M12 17v4M5 12H4M20 12h-1"></path><circle cx="12" cy="12" r="4"></circle></svg></span><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Cognitive ability</h3><p className="body" style={{ fontSize: 14 }}>Problem-solving, reasoning and learning agility that predict performance.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></span><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Personality &amp; culture</h3><p className="body" style={{ fontSize: 14 }}>How a person works, collaborates and fits with your team and values.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></span><h3 className="h3" style={{ fontSize: 18, marginBottom: 8 }}>Role-specific skills</h3><p className="body" style={{ fontSize: 14 }}>Hands-on tests for the exact skills each role demands.</p></div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
