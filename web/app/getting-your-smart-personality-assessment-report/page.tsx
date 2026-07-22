import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function GettingYourSmartPersonalityAssessmentReport() {
  return (
    <>
      <SiteHeader announcement="Get your personality report in three steps" announcementCta="Try for free" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Getting your report<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Your report,<br />in three steps</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Completing the Smart Personality Assessment and getting your report takes minutes. Here&apos;s exactly what to expect.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="grid3">
          <div className="card reveal"><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>1</div><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Take the assessment</h3><p className="body" style={{ fontSize: '14px' }}>Answer a short set of questions honestly — it takes about 15 minutes, on any device.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>2</div><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>We score it</h3><p className="body" style={{ fontSize: '14px' }}>Your responses are scored instantly against validated benchmarks.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>3</div><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Get your report</h3><p className="body" style={{ fontSize: '14px' }}>Receive a clear, structured report you can read online or download as a PDF.</p></div>
        </div>
      </div></section>

      <section className="sec darkcta"><div className="wrap" style={{ maxWidth: '720px' }}>
        <h2 className="h2 reveal">Ready when you are</h2>
        <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Start the assessment now, or download a completed sample report to see what you&apos;ll get.</p>
        <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
          <CtaButton label="Start the assessment" href="#" variant="light" size="md" icon="arrow" />
          <CtaButton label="Download sample" href="/download-smart-personality-assessment-report" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
