import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function MultilingualAbilitiesPage() {
  return (
    <>
      <SiteHeader announcement="Assess candidates in their language" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Multilingual abilities<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Hire globally,<br />fairly, in any language</h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Testlify supports 16+ languages across the platform and 9 in the candidate UI — so applicants everywhere can show what they can do without a language barrier getting in the way.</p>
        </div>
      </section>

      <section style={{ padding: '10px 28px 0' }}>
        <div className="wrap">
          <div className="statrow reveal">
            <div className="stat"><div className="statn">16+</div><div className="statl">platform languages</div></div>
            <div className="stat"><div className="statn">9</div><div className="statl">candidate UI languages</div></div>
            <div className="stat"><div className="statn">150+</div><div className="statl">countries served</div></div>
            <div className="stat"><div className="statn">5M+</div><div className="statl">candidates assessed</div></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Why it matters<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Language shouldn&apos;t decide the hire</h2>
          </div>
          <div className="grid3">
            <div className="card reveal"><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>A fair global experience</h3><p className="body" style={{ fontSize: '14px' }}>Candidates take assessments in a language they&apos;re comfortable in, so results reflect skill, not fluency.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Wider talent pools</h3><p className="body" style={{ fontSize: '14px' }}>Open roles to qualified candidates across regions without excluding great people.</p></div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}><span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path></svg></span><h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Dedicated language tests</h3><p className="body" style={{ fontSize: '14px' }}>Where language IS the skill, assess it directly with CEFR and language-specific tests.</p></div>
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">Hire without borders</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Give every candidate a fair chance, wherever they are. Start free today.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
            <CtaButton label="Language tests" href="/language-tests" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
