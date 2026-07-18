import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const css = `
.jrow{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center;background:#fff;border:1px solid #EFE2E3;border-radius:16px;padding:24px 28px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.jrow:hover{transform:translateY(-3px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.jmeta{display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;}
.jtag{font-size:12.5px;font-weight:600;color:#8A7A7D;background:#FBF3EE;border-radius:100px;padding:5px 12px;}
.japply{font-size:14px;font-weight:700;color:#F23F44;white-space:nowrap;}
`;

const roles = [
  { title: 'Senior Product Designer', dept: 'Design' },
  { title: 'Full-Stack Engineer', dept: 'Engineering' },
  { title: 'AI/ML Engineer', dept: 'Engineering' },
  { title: 'Account Executive', dept: 'Sales' },
  { title: 'Customer Success Manager', dept: 'Customer Success' },
  { title: 'Content Marketer', dept: 'Marketing' },
];

export default function JobOpeningsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteHeader
        announcement="We're hiring across product, engineering and GTM"
        announcementCta="See all roles"
        homeHref="/"
      />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Job openings<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Build the future<br />of hiring with us
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>
            We&apos;re a remote-first team of 100+ on a mission to make hiring fair. If you want your work to reach millions of candidates, there&apos;s a seat for you here.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: '900px' }}>
          <div className="center-head">
            <p className="eyebrow reveal">Open roles<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Find your team</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {roles.map((r) => (
              <div className="jrow" key={r.title}>
                <div>
                  <h3 className="h3" style={{ fontSize: '18px' }}>{r.title}</h3>
                  <div className="jmeta">
                    <span className="jtag">{r.dept}</span>
                    <span className="jtag">Remote</span>
                    <span className="jtag">Full-time</span>
                  </div>
                </div>
                <span className="japply">Apply →</span>
              </div>
            ))}
          </div>
          <p className="body reveal" style={{ textAlign: 'center', marginTop: '28px' }}>
            Don&apos;t see your role? <Link className="lnk" href="/contact">Introduce yourself</Link> — we&apos;re always meeting great people.
          </p>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Life at Testlify<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Why people stay</h2>
          </div>
          <div className="grid3">
            <div className="card reveal">
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Remote-first, always</h3>
              <p className="body" style={{ fontSize: '14px' }}>Work from anywhere. We hire for talent, not postcode — and practise the fairness we sell.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.06s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Real ownership</h3>
              <p className="body" style={{ fontSize: '14px' }}>Small teams, big scope. Your work ships fast and reaches millions of candidates.</p>
            </div>
            <div className="card reveal" style={{ transitionDelay: '.12s' }}>
              <span className="cic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></span>
              <h3 className="h3" style={{ fontSize: '18px', marginBottom: '8px' }}>Grow fast</h3>
              <p className="body" style={{ fontSize: '14px' }}>A fast-scaling company means room to learn, stretch and build your career.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec darkcta">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <h2 className="h2 reveal">Come build with us</h2>
          <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Learn more about our team, values and how we work.</p>
          <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
            <CtaButton label="Meet the team" href="/our-leadership" variant="light" size="md" icon="arrow" />
            <CtaButton label="Our story" href="/about" variant="outline-light" size="md" icon="none" />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
