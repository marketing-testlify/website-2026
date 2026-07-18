import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

export default function InvestorsPage() {
  return (
    <>
      <SiteHeader
        announcement="Backed by SHRM Labs, Google, Microsoft &amp; NVIDIA"
        announcementCta="Read our story"
        homeHref="/"
      />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Investors<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Building the proof<br />layer for hiring
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>
            Testlify is an AI-native, skills-based assessment platform on a mission to replace resume guesswork with verified skill — backed by some of the most respected names in tech and HR.
          </p>
        </div>
      </section>

      <section style={{ padding: '10px 28px 0' }}>
        <div className="wrap">
          <div className="statrow reveal">
            <div className="stat"><div className="statn">2021</div><div className="statl">founded</div></div>
            <div className="stat"><div className="statn">1,500+</div><div className="statl">hiring teams</div></div>
            <div className="stat"><div className="statn">5M+</div><div className="statl">candidates assessed</div></div>
            <div className="stat"><div className="statn">50+</div><div className="statl">industries served</div></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">The opportunity<b>.</b></p>
            <h2 className="h2" style={{ marginBottom: '20px' }}>A category being rebuilt</h2>
            <p className="body">Hiring is a trillion-dollar problem still run on resumes and gut feel. Testlify is rebuilding it around evidence — measuring what candidates can actually do at the speed and scale modern teams need.</p>
            <p className="body" style={{ marginTop: '14px' }}>With 3,500+ validated tests, AI interviews and 100+ ATS integrations, we&apos;ve become the platform of record for skills-based hiring across 150+ countries.</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '.08s', background: 'linear-gradient(160deg,#FFF4F3,#FBE9E9)', border: '1px solid #F6DCDD', borderRadius: '24px', padding: '40px' }}>
            <p className="h3" style={{ fontSize: '24px', lineHeight: 1.4, fontWeight: 600 }}>&quot;The winners in hiring won&apos;t be the platforms with the most resumes — they&apos;ll be the ones with the best proof. That&apos;s what we&apos;re building.&quot;</p>
            <p className="body" style={{ fontSize: '14px', marginTop: '20px', fontWeight: 600, color: '#1A1014' }}>— Abhishek Shah, Founder &amp; CEO</p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Our backers<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>In good company</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
            <span className="pill">SHRM Labs</span>
            <span className="pill">Google for Startups</span>
            <span className="pill">Microsoft for Startups</span>
            <span className="pill">NVIDIA Inception</span>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Why now<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>The tailwinds behind us</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18"></path><path d="M17 6h6v6"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Skills-based hiring is the norm</h3>
              <p className="body" style={{ fontSize: '14px' }}>Employers are dropping degree requirements and screening on ability — the shift Testlify was built for.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M12 6v6l4 2"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>AI makes it possible at scale</h3>
              <p className="body" style={{ fontSize: '14px' }}>Automated scoring and AI interviews turn deep assessment from a bottleneck into an advantage.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Compliance is non-negotiable</h3>
              <p className="body" style={{ fontSize: '14px' }}>EEOC-defensible, structured assessment is now a requirement — and a moat we&apos;ve invested in deeply.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">Let&apos;s talk</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>For investor relations, partnership or press enquiries, our team is one message away.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Contact us" href="/contact" variant="light" size="md" icon="arrow" />
            <CtaButton label="Our story" href="/about" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
