import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
.trait{margin-bottom:22px;}
.traith{display:flex;justify-content:space-between;font-size:14.5px;font-weight:700;color:#1A1014;margin-bottom:8px;}
.bar{height:10px;border-radius:100px;background:#F1E2E2;overflow:hidden;}
.barfill{height:100%;border-radius:100px;background:linear-gradient(90deg,#FF7A52,#F23F44);}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="See a full sample personality report" announcementCta="Try for free" homeHref="/" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Sample report<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Inside the personality report</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Every Smart Personality Assessment produces a clear, structured report you can act on — traits, strengths, and how to work with someone best.</p>
      </div></section>

      <section className="sec"><div className="wrap split">
        <div className="reveal" style={{ background: '#fff', border: '1px solid #F0E2E3', borderRadius: '22px', padding: '34px', boxShadow: '0 20px 44px rgba(110,11,14,.08)' }}>
          <p className="eyebrow" style={{ marginBottom: '20px' }}>Trait profile<b>.</b></p>
          <div className="trait"><div className="traith"><span>Conscientiousness</span><span>82</span></div><div className="bar"><div className="barfill" style={{ width: '82%' }}></div></div></div>
          <div className="trait"><div className="traith"><span>Openness</span><span>74</span></div><div className="bar"><div className="barfill" style={{ width: '74%' }}></div></div></div>
          <div className="trait"><div className="traith"><span>Extraversion</span><span>58</span></div><div className="bar"><div className="barfill" style={{ width: '58%' }}></div></div></div>
          <div className="trait"><div className="traith"><span>Agreeableness</span><span>69</span></div><div className="bar"><div className="barfill" style={{ width: '69%' }}></div></div></div>
          <div className="trait" style={{ marginBottom: '0' }}><div className="traith"><span>Emotional stability</span><span>77</span></div><div className="bar"><div className="barfill" style={{ width: '77%' }}></div></div></div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.08s' }}>
          <p className="eyebrow">What you get<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Clear, actionable insight</h2>
          <p className="body">The report translates scores into plain language: what each trait means for the role, where this person thrives, and how to bring out their best.</p>
          <ul className="chk" style={{ marginTop: '22px' }}>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Trait-by-trait breakdown with benchmarks</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Strengths and potential blind spots</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Interview questions tailored to the profile</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Tips for onboarding and management</li>
          </ul>
          <div style={{ marginTop: '26px' }}>
            <CtaButton label="How to get your report" href="/getting-your-smart-personality-assessment-report" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
