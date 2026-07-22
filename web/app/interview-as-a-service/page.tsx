import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function InterviewAsAServicePage() {
  return (
    <>
      <SiteHeader announcement="Let our experts run your interviews" announcementCta="Learn more" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Interview as a service<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Expert interviews,<br />on demand</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Short on interviewer time or specialist expertise? Testlify&apos;s vetted interviewers run structured technical and role-specific interviews for you — and hand back scored, evidence-backed reports.</p>
        <div className="reveal btnrow" style={{ marginTop: '30px', transitionDelay: '.12s' }}>
          <CtaButton label="Book a call" href="/contact" variant="primary" size="md" icon="arrow" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">Why teams use it<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Interview capacity, without the overhead</h2>
        </div>
        <div className="grid3">
          <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M12 6v6l4 2"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Save your team&apos;s time</h3><p className="body" style={{ fontSize: '14px' }}>Free your engineers and managers from first-round interviews without losing rigour.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Specialist expertise</h3><p className="body" style={{ fontSize: '14px' }}>Vetted interviewers assess niche and technical roles you can&apos;t always staff internally.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9M13 17V5M8 17v-3"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Consistent, scored reports</h3><p className="body" style={{ fontSize: '14px' }}>Every interview follows a structured rubric, so you get comparable, defensible results.</p></div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">How it works<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Three steps to scored interviews</h2>
        </div>
        <div className="grid3">
          <div className="card reveal"><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>1</div><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Tell us the role</h3><p className="body" style={{ fontSize: '14px' }}>Share the role and the skills you need assessed.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.06s' }}><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>2</div><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>We interview</h3><p className="body" style={{ fontSize: '14px' }}>Our experts run structured interviews with your candidates.</p></div>
          <div className="card reveal" style={{ transitionDelay: '.12s' }}><div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F23F44', color: '#fff', fontWeight: 800, fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>3</div><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>You decide</h3><p className="body" style={{ fontSize: '14px' }}>Get scored reports and move the strongest candidates forward.</p></div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
