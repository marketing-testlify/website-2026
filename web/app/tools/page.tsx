import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
.hero{padding:72px 28px 88px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.06);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.acc{color:#F23F44;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.mock{background:#fff;border:1px solid #F0E2E3;border-radius:20px;box-shadow:0 40px 90px rgba(110,11,14,.16);overflow:hidden;}
.mocktop{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid #F4ECEC;background:#FCFAFA;}
.mc{width:11px;height:11px;border-radius:50%;}
.mockbar{margin-left:12px;flex:1;height:26px;border-radius:8px;background:#F3EAEA;display:flex;align-items:center;padding:0 12px;font-size:11.5px;color:#A9999C;font-weight:500;}
.tool-body{padding:18px;display:flex;flex-direction:column;gap:11px;}
.tool-row{display:flex;align-items:center;gap:13px;padding:12px 14px;border:1px solid #F1E6E7;border-radius:14px;background:#fff;transition:transform .2s;}
.tool-row.hot{border-color:#FBC9CB;box-shadow:0 14px 30px rgba(242,63,68,.12);background:linear-gradient(180deg,#FFF8F8,#fff);}
.tool-ic{width:38px;height:38px;border-radius:11px;flex:none;display:flex;align-items:center;justify-content:center;color:#fff;}
.tool-nm{font-size:13.5px;font-weight:700;color:#1A1014;line-height:1.2;}
.tool-sub{font-size:11.5px;color:#9A878A;font-weight:500;}
.tool-val{margin-left:auto;font-size:15px;font-weight:800;color:#F23F44;}
@media(max-width:960px){.herogrid{grid-template-columns:1fr !important;gap:44px;}.hero{padding:44px 22px 60px;}}
.tl-card{display:flex;flex-direction:column;height:100%;text-decoration:none;position:relative;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.tl-card:hover{transform:translateY(-4px);box-shadow:0 16px 34px rgba(110,11,14,.10);}
.tl-card p.body{flex:1;}
.tl-cta{margin-top:16px;display:inline-flex;align-items:center;gap:7px;color:#F23F44;font-weight:700;font-size:14.5px;text-decoration:none;}
@property --bang{syntax:'<angle>';initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.tl-card::before{content:'';position:absolute;inset:0;border-radius:20px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;pointer-events:none;}
.tl-card:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
`;

const tools = [
  { title: 'AI Job description generator', desc: 'An AI job descriptor uses artificial intelligence to automatically create detailed job listings by including relevant keywords and responsibilities.', href: '/job-description-generator', cta: 'Generate now', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' },
  { title: 'Cost per hire calculator', desc: 'A cost per hire calculator calculates the total expenses involved in hiring, from job posting to onboarding.', href: '/cost-per-hire-calculator', cta: 'Calculate now', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
  { title: 'Attrition rate calculator', desc: 'An attrition rate calculator helps track the percentage of employees leaving the organization over a specific time frame.', href: '/attrition-rate-calculator', cta: 'Calculate now', icon: 'M3 3v18h18M18 17V9M13 17V5M8 17v-4' },
  { title: 'Employee NPS calculator', desc: 'An eNPS calculator measures employee satisfaction and engagement, helping gauge workplace morale.', href: '/free-employee-net-promoter-score-enps-calculator', cta: 'Calculate now', icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' },
  { title: 'Applicant funnel calculator', desc: 'An applicant funnel calculator measures candidate progress through each stage of the hiring process, helping optimize conversion rates.', href: '/applicant-funnel-calculator', cta: 'Calculate now', icon: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z' },
  { title: 'Average time-to-hire', desc: 'An average time-to-hire calculator tracks the time it takes to fill a position from posting to offer acceptance.', href: '/average-time-to-hire-calculator', cta: 'Calculate now', icon: 'M12 8v4l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z' },
  { title: 'Employee turnover calculator', desc: 'An employee turnover calculator measures the rate at which employees leave the company, helping assess retention efforts.', href: '/cost-of-employee-turnover-calculator', cta: 'Calculate now', icon: 'M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3' },
  { title: 'Sourcing channel efficiency', desc: 'A sourcing channel efficiency calculator analyzes which recruitment channels bring in the highest-quality candidates.', href: '/sourcing-channel-efficiency-calculator', cta: 'Calculate now', icon: 'M18 20V10M12 20V4M6 20v-6' },
  { title: 'Quality of hire', desc: 'A quality of hire calculator evaluates the success of new hires based on their performance and retention.', href: '/quality-of-hire-calculator', cta: 'Calculate now', icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8l2.8-2.8M17 7l2.8-2.8' },
  { title: 'Interview-to-hire offer', desc: 'An interview-to-hire offer calculator tracks the conversion rate from interview stage to job offer, revealing hiring efficiency.', href: '/interview-to-offer-ratio-calculator', cta: 'Calculate now', icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11' },
  { title: 'Recruiting conversion rate', desc: 'A recruiting conversion rate calculator tracks the success of moving candidates through the hiring pipeline.', href: '/recruiting-conversion-rate-calculator', cta: 'Calculate now', icon: 'M23 6l-9.5 9.5-5-5L1 18' },
  { title: 'Job offer acceptance rate', desc: 'A job offer acceptance rate calculator measures the percentage of candidates who accept your job offers.', href: '/job-offer-acceptance-rate-calculator', cta: 'Calculate now', icon: 'M20 6L9 17l-5-5' },
  { title: 'Hiring manager satisfaction', desc: 'A hiring manager satisfaction calculator measures how satisfied hiring managers are with the recruitment process.', href: '/hiring-manager-satisfaction-calculator', cta: 'Calculate now', icon: 'M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3' },
];

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Free HR calculators & generators — no signup required" announcementCta="Browse tools" homeHref="/" />

      <section className="hero">
        <div className="wrap">
          <div className="herogrid">
            <div>
              <div className="reveal" data-reveal style={{ transitionDelay: '.02s' }}>
                <span className="pill">
                  <span className="pilltag">TOOLS</span> 13 free calculators &amp; generators
                </span>
              </div>
              <h1 className="h1 reveal" data-reveal style={{ marginTop: '22px', transitionDelay: '.06s' }}>
                Free HR tools to <span className="acc">generate letters</span>
              </h1>
              <p className="lead reveal" data-reveal style={{ marginTop: '22px', maxWidth: '500px', transitionDelay: '.1s' }}>
                Many times, it&apos;s time-consuming to generate letters in bulk or track your ROI in real-time! From now on — simplify and automate your every complex HR task.
              </p>
              <div className="heroctas reveal" data-reveal style={{ transitionDelay: '.14s' }}>
                <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
                <CtaButton label="Browse tools" href="#tools" variant="secondary" size="md" icon="arrow" />
              </div>
              <div className="trust reveal" data-reveal style={{ transitionDelay: '.18s' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>No signup required
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: '#F23F44', fontWeight: 700 }}>✓</span>Instant results
                </span>
              </div>
            </div>
            <div className="reveal" data-reveal style={{ transitionDelay: '.12s' }}>
              <div className="mock">
                <div className="mocktop">
                  <span className="mc" style={{ background: '#FF5F57' }}></span>
                  <span className="mc" style={{ background: '#FEBC2E' }}></span>
                  <span className="mc" style={{ background: '#28C840' }}></span>
                  <span className="mockbar">tools.testlify.com</span>
                </div>
                <div className="tool-body">
                  <div className="tool-row hot">
                    <span className="tool-ic" style={{ background: 'linear-gradient(135deg,#F23F44,#FF7A52)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="tool-nm">Cost per hire</div>
                      <div className="tool-sub">Calculator</div>
                    </div>
                    <span className="tool-val">$1,750</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-ic" style={{ background: 'linear-gradient(135deg,#6E62F2,#9A8BFF)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8v4l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="tool-nm">Time to hire</div>
                      <div className="tool-sub">Calculator</div>
                    </div>
                    <span className="tool-val">21d</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-ic" style={{ background: 'linear-gradient(135deg,#2AA6F2,#67C9FF)' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </span>
                    <div>
                      <div className="tool-nm">Job description</div>
                      <div className="tool-sub">AI generator</div>
                    </div>
                    <span className="tool-val">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="tools" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal" data-reveal>
              All tools<b>.</b>
            </p>
            <h2 className="h2 reveal" data-reveal style={{ transitionDelay: '.04s' }}>
              13 free calculators &amp; generators
            </h2>
          </div>
          <div className="grid3 reveal" data-reveal style={{ marginTop: '32px' }}>
            {tools.map((t) => (
              <a className="card tl-card" href={t.href} key={t.href}>
                <span className="cic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d={t.icon}></path>
                  </svg>
                </span>
                <h3 className="h3" style={{ fontSize: '18px', color: '#1A1014', marginBottom: '8px' }}>
                  {t.title}
                </h3>
                <p className="body" style={{ fontSize: '14px' }}>
                  {t.desc}
                </p>
                <span className="tl-cta">
                  {t.cta}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
