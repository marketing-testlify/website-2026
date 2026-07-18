import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
.tourrow{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;}
.tourrow.flip .tourtxt{order:2;}
.shot{border-radius:20px;border:1px solid #F0E2E3;background:linear-gradient(160deg,#FFF6F4,#FBEDEA);height:320px;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 30px rgba(110,11,14,.10);}
.shot span{font-size:14px;font-weight:600;color:#B4938F;}
@media(max-width:920px){.tourrow{grid-template-columns:1fr;gap:28px;}.tourrow.flip .tourtxt{order:0;}}
`;

export default function ProductTourPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Take the 2-minute product tour" announcementCta="Start free" />

      <section className="phero"><div className="wrap" style={{ maxWidth: 860 }}>
        <p className="eyebrow reveal">Product tour<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>See Testlify<br />in action</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: 640, transitionDelay: '.08s' }}>A quick walk through the platform — from building an assessment to reading a ranked, evidence-backed shortlist. No sign-up required.</p>
        <div className="reveal btnrow" style={{ marginTop: 30, transitionDelay: '.12s' }}>
          <CtaButton label="Try for free" href="#" variant="primary" size="md" icon="arrow" />
          <CtaButton label="Book a live demo" href="/demo" variant="secondary" size="md" icon="play" />
        </div>
      </div></section>

      <section className="sec"><div className="wrap tourrow reveal">
        <div className="tourtxt">
          <p className="eyebrow">Step 1<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: 18 }}>Build an assessment in minutes</h2>
          <p className="body">Start from 3,500+ validated tests or mix your own questions — coding, cognitive, personality, role-specific. Add AI video, audio or chat interviews with one click.</p>
        </div>
        <div className="shot"><span>Assessment builder</span></div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap tourrow flip reveal">
        <div className="tourtxt">
          <p className="eyebrow">Step 2<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: 18 }}>Invite candidates anywhere</h2>
          <p className="body">Share a link, upload a CSV or trigger invites straight from your ATS. Candidates take a clean, mobile-friendly assessment with anti-cheat proctoring built in.</p>
        </div>
        <div className="shot"><span>Candidate experience</span></div>
      </div></section>

      <section className="sec"><div className="wrap tourrow reveal">
        <div className="tourtxt">
          <p className="eyebrow">Step 3<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: 18 }}>Read a ranked shortlist</h2>
          <p className="body">Every response is scored objectively and benchmarked. Compare candidates like-for-like and move forward with evidence, not gut feel.</p>
        </div>
        <div className="shot"><span>Results dashboard</span></div>
      </div></section>

      <section className="sec darkcta"><div className="wrap" style={{ maxWidth: 720 }}>
        <h2 className="h2 reveal">Ready to try it yourself?</h2>
        <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Start free — no credit card. Run your first assessment in minutes.</p>
        <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
          <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
          <CtaButton label="See how it works" href="/how-testlify-works" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
