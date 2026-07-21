import Link from 'next/link';

const css = `
body{margin:0;background:#FDF8F4;}
.chip{display:inline-flex;align-items:center;gap:6px;background:#FDFAF8;border:1px solid #F0E2E3;border-radius:999px;padding:3px 12px 3px 9px;font-size:12.5px;color:#1A1014;white-space:nowrap;}
.dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.d-b{background:#2A6FDB;}.d-r{background:#8A5A3C;}.d-t{background:#E14B50;}.d-a{background:#22A05B;}.d-cm{background:#E08A1E;}
.grp{display:flex;flex-wrap:wrap;gap:6px;align-items:center;}
.glabel{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;margin:12px 0 6px;}
.card{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:22px 24px;}
.card h2{font-size:16px;font-weight:700;margin:0 0 4px;color:#F23F44;}
.card .sub{font-size:12px;color:#A9999C;margin-bottom:12px;}
a.chip{text-decoration:none;cursor:pointer;transition:border-color .15s,box-shadow .15s,transform .15s;}
a.chip:hover{border-color:#FBD0D1;box-shadow:0 6px 16px rgba(110,11,14,.08);transform:translateY(-1px);}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

function route(h: string): string {
  if (h === 'core-home.dc.html') return '/';
  let s = h.replace(/\.dc\.html$/, '');
  s = s.replace(/^core-/, '');
  return '/' + s;
}

function Chip({ href, dot, children }: { href: string; dot: string; children?: React.ReactNode }) {
  return (
    <Link className="chip" href={route(href)}>
      <span className={`dot ${dot}`}></span>
      {children}
    </Link>
  );
}

export default function SitemapPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div style={{ fontFamily: "'Poppins',sans-serif", color: '#1A1014', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 40px 80px' }}>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.16em', color: '#8A7A7D', textTransform: 'uppercase', marginBottom: '8px' }}>Site structure · restructured IA<span style={{ color: '#F23F44' }}>.</span></div>
            <h1 style={{ fontSize: '34px', fontWeight: 800, margin: '0 0 8px', lineHeight: 1.1, letterSpacing: '-1px' }}>Testlify sitemap</h1>
            <p style={{ fontSize: '15px', color: '#5A4B4E', margin: '0 0 4px', maxWidth: '720px' }}>Matches the live 7-item nav — <b>Product · Test library · Interviews · Pricing · Solutions · Resources · About</b>. Company pages live under the <b>About</b> menu.</p>
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', margin: '14px 0 26px' }}>
            <div><span style={{ fontSize: '22px', fontWeight: 800, color: '#1A1014' }}>176</span><span style={{ fontSize: '12px', color: '#5A4B4E', marginLeft: '6px' }}>pages built</span></div>
            <div><span style={{ fontSize: '22px', fontWeight: 800, color: '#B9A7AA' }}>15</span><span style={{ fontSize: '12px', color: '#5A4B4E', marginLeft: '6px' }}>templates (data-driven)</span></div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px', fontSize: '12.5px', color: '#5A4B4E', alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><span className="dot d-b"></span>Built</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><span className="dot d-r"></span>Template (data-driven)</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><span className="dot d-t"></span>Pending</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><span className="dot d-a"></span>Audited</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><span className="dot d-cm"></span>Content mapped</span>
            <span style={{ color: '#8A7A7D' }}>— every chip links to its live page</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(360px,1fr))', gap: '16px', alignItems: 'start' }}>

            <div className="card">
              <h2>Top nav <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· 7 items</span></h2>
              <div className="sub">Product · Test library · Interviews · Pricing · Solutions · Resources · About</div>
              <div className="grp">
                <Chip href="core-home.dc.html" dot="d-a">Home</Chip>
                <Chip href="test-library.dc.html" dot="d-a">Test library</Chip>
                <Chip href="test-library-detail.dc.html" dot="d-a">· detail</Chip>
                <Chip href="interviews.dc.html" dot="d-a">Interviews</Chip>
                <Chip href="interviews-detail.dc.html" dot="d-a">· detail</Chip>
                <Chip href="library-build-your-own.dc.html" dot="d-a">Build your own</Chip>
                <Chip href="pricing.dc.html" dot="d-a">Pricing</Chip>
                <Chip href="core-compare.dc.html" dot="d-a">Compare plans</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Product menu <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· 8</span></h2>
              <div className="sub">The Product mega-menu, in live order</div>
              <div className="grp">
                <Chip href="ai-powered-talent-assessment-platform.dc.html" dot="d-a">Testlify AI</Chip>
                <Chip href="ai-resume-screener.dc.html" dot="d-a">AI resume screener</Chip>
                <Chip href="features.dc.html" dot="d-a">Features</Chip>
                <Chip href="video-interviewing-tool.dc.html" dot="d-a">Video interviewing</Chip>
                <Chip href="science.dc.html" dot="d-a">Science behind tests</Chip>
                <Chip href="demo.dc.html" dot="d-a">Live product demo</Chip>
                <a className="chip" href="https://roadmap.testlify.com/" target="_blank" rel="noopener"><span className="dot d-a"></span>Roadmap <span style={{ color: '#A9999C' }}>(ext)</span></a>
                <Chip href="integrations.dc.html" dot="d-a">ATS integrations</Chip>
              </div>
              <div className="glabel">Also live (not in Product menu)</div>
              <div className="grp">
                <Chip href="product-skill-assessments.dc.html" dot="d-b">Skill assessments</Chip>
                <Chip href="interviews.dc.html" dot="d-a">AI interviews</Chip>
                <Chip href="product-features-detail.dc.html" dot="d-r">Feature detail <span style={{ color: '#A9999C' }}>(template)</span></Chip>
              </div>
            </div>

            <div className="card">
              <h2>Solutions menu <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· 4 groups</span></h2>
              <div className="sub">Hub + 4 group tabs (full instance lists below)</div>
              <div className="grp"><Chip href="solution-index.dc.html" dot="d-b">Solutions hub</Chip></div>
              <div className="glabel">Menu tabs → template</div>
              <div className="grp">
                <Chip href="solution-industry-template.dc.html" dot="d-r">By industry type <span style={{ color: '#A9999C' }}>(14)</span></Chip>
                <Chip href="solution-usecase-template.dc.html" dot="d-r">By use case <span style={{ color: '#A9999C' }}>(10)</span></Chip>
                <Chip href="solution-testtype-template.dc.html" dot="d-r">By test type <span style={{ color: '#A9999C' }}>(11)</span></Chip>
                <Chip href="solution-company-template.dc.html" dot="d-r">By company type <span style={{ color: '#A9999C' }}>(5)</span></Chip>
              </div>
            </div>

            <div className="card">
              <h2>Resources menu <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· Learn · HR tools · Programs</span></h2>
              <div className="sub">Mirrors the Resources mega-menu (HR-tool calculators listed below)</div>
              <div className="glabel">Learn</div>
              <div className="grp">
                <Chip href="blog.dc.html" dot="d-b">Blog</Chip>
                <Chip href="blog-detail.dc.html" dot="d-r">· detail</Chip>
                <Chip href="hiring-guides.dc.html" dot="d-b">Hiring guides</Chip>
                <Chip href="hiring-guides-detail.dc.html" dot="d-r">· detail</Chip>
                <Chip href="hr-glossary.dc.html" dot="d-b">HR glossary</Chip>
                <Chip href="hr-glossary-detail.dc.html" dot="d-r">· detail</Chip>
                <Chip href="knowledge-base.dc.html" dot="d-cm">Ebooks</Chip>
                <Chip href="podcast.dc.html" dot="d-cm">Podcasts</Chip>
                <Chip href="customer-success-stories.dc.html" dot="d-a">Customer stories</Chip>
                <Chip href="job-description-templates.dc.html" dot="d-b">JD templates</Chip>
                <Chip href="alternatives.dc.html" dot="d-b">Competitors</Chip>
                <Chip href="alternatives-detail.dc.html" dot="d-r">· detail</Chip>
                <Chip href="sitemap.dc.html" dot="d-a">Sitemap</Chip>
              </div>
              <div className="glabel">HR tools</div>
              <div className="grp">
                <Chip href="hr-tools.dc.html" dot="d-b">HR tools landing</Chip>
                <Chip href="hr-tools-detail.dc.html" dot="d-r">· detail template</Chip>
              </div>
              <div className="glabel">Programs</div>
              <div className="grp">
                <Chip href="referral-program.dc.html" dot="d-cm">Referral program</Chip>
                <Chip href="partnership.dc.html" dot="d-cm">Partnership program</Chip>
                <Chip href="integration-program.dc.html" dot="d-cm">Integration program</Chip>
              </div>
            </div>

            <div className="card">
              <h2>About menu <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· Company · More</span></h2>
              <div className="sub">Mirrors the About mega-menu (2 columns)</div>
              <div className="glabel">Company</div>
              <div className="grp">
                <Chip href="about.dc.html" dot="d-b">Our story</Chip>
                <Chip href="contact.dc.html" dot="d-b">Contact us</Chip>
                <Chip href="our-leadership.dc.html" dot="d-cm">Our leadership</Chip>
                <Chip href="trust.dc.html" dot="d-b">Trust center</Chip>
              </div>
              <div className="glabel">More</div>
              <div className="grp">
                <Chip href="clients.dc.html" dot="d-cm">Clients</Chip>
                <Chip href="our-partners.dc.html" dot="d-b">Partners</Chip>
                <Chip href="job-openings.dc.html" dot="d-cm">Job openings</Chip>
                <Chip href="write-for-us.dc.html" dot="d-cm">Write for us</Chip>
              </div>
              <div className="glabel">Also under About / footer</div>
              <div className="grp">
                <Chip href="customer-success-stories.dc.html" dot="d-a">Customers</Chip>
                <Chip href="customer-success-stories-detail.dc.html" dot="d-r">Case study detail</Chip>
                <Chip href="careers.dc.html" dot="d-b">Careers</Chip>
              </div>
              <div className="glabel">Trust center — subpages become tabs</div>
              <div className="grp">
                <Chip href="trust.dc.html" dot="d-b">Trust landing</Chip>
                <Chip href="company-trust-compliances.dc.html" dot="d-b">Compliances</Chip>
                <Chip href="company-trust-center.dc.html" dot="d-b">Trust center <span style={{ color: '#A9999C' }}>(Data · Privacy · Security tabs)</span></Chip>
              </div>
            </div>

            <div className="card">
              <h2>Legal &amp; policy</h2>
              <div className="sub">Full policy set + legal hub</div>
              <div className="grp">
                <Chip href="company-legal.dc.html" dot="d-b">Legal hub</Chip>
                <Chip href="terms.dc.html" dot="d-cm">Terms</Chip>
                <Chip href="privacy-policy.dc.html" dot="d-cm">Privacy policy</Chip>
                <Chip href="cookie-policy.dc.html" dot="d-cm">Cookie policy</Chip>
                <Chip href="fair-refund-policy.dc.html" dot="d-cm">Fair refund</Chip>
                <Chip href="candidate-honesty-policy-and-agreement.dc.html" dot="d-cm">Candidate honesty</Chip>
                <Chip href="data-processing-agreement.dc.html" dot="d-cm">DPA</Chip>
                <Chip href="service-level-agreement.dc.html" dot="d-cm">SLA</Chip>
                <Chip href="gdpr-compliance.dc.html" dot="d-cm">GDPR</Chip>
                <Chip href="gdpr-faqs.dc.html" dot="d-cm">GDPR FAQs</Chip>
                <Chip href="ccpa.dc.html" dot="d-cm">CCPA</Chip>
                <Chip href="data-privacy-framework.dc.html" dot="d-cm">Data privacy framework</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Security &amp; trust</h2>
              <div className="sub">Security suite (live-match)</div>
              <div className="grp">
                <Chip href="security.dc.html" dot="d-cm">Security</Chip>
                <Chip href="security-practices.dc.html" dot="d-cm">Security practices</Chip>
                <Chip href="security-and-compliance.dc.html" dot="d-cm">Security &amp; compliance</Chip>
                <Chip href="information-security.dc.html" dot="d-cm">Information security</Chip>
                <Chip href="testlify-information-security-standards.dc.html" dot="d-cm">InfoSec standards</Chip>
                <Chip href="data-residency.dc.html" dot="d-cm">Data residency</Chip>
                <Chip href="architecture-overview.dc.html" dot="d-cm">Architecture</Chip>
                <Chip href="security-control-and-visibility.dc.html" dot="d-cm">Control &amp; visibility</Chip>
              </div>
            </div>

            <div className="card">
              <h2>About &amp; company <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· live-match</span></h2>
              <div className="sub">Company pages now under the About menu</div>
              <div className="grp">
                <Chip href="our-leadership.dc.html" dot="d-cm">Our leadership</Chip>
                <Chip href="clients.dc.html" dot="d-cm">Clients</Chip>
                <Chip href="investors.dc.html" dot="d-cm">Investors</Chip>
                <Chip href="job-openings.dc.html" dot="d-cm">Job openings</Chip>
                <Chip href="write-for-us.dc.html" dot="d-cm">Write for us</Chip>
                <Chip href="subject-matter-experts.dc.html" dot="d-cm">SMEs</Chip>
                <Chip href="press-kit.dc.html" dot="d-cm">Press kit</Chip>
                <Chip href="awards.dc.html" dot="d-cm">Awards</Chip>
                <Chip href="brand.dc.html" dot="d-cm">Brand</Chip>
                <Chip href="why-testlify.dc.html" dot="d-cm">Why Testlify</Chip>
                <Chip href="how-testlify-works.dc.html" dot="d-cm">How it works</Chip>
                <Chip href="product-tour.dc.html" dot="d-cm">Product tour</Chip>
                <Chip href="responsible-hiring.dc.html" dot="d-cm">Responsible hiring</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Product &amp; feature pages <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· live-match</span></h2>
              <div className="sub">Feature landings + platform pages</div>
              <div className="grp">
                <Chip href="whats-new.dc.html" dot="d-cm">What&apos;s new</Chip>
                <Chip href="api.dc.html" dot="d-cm">API</Chip>
                <Chip href="white-label.dc.html" dot="d-cm">White label</Chip>
                <Chip href="reporting-analytics.dc.html" dot="d-cm">Reporting &amp; analytics</Chip>
                <Chip href="reseller-plan.dc.html" dot="d-cm">Reseller plan</Chip>
                <Chip href="multilingual-abilities.dc.html" dot="d-cm">Multilingual</Chip>
                <Chip href="interview-as-a-service.dc.html" dot="d-cm">Interview as a service</Chip>
                <Chip href="skills-assessment-platform.dc.html" dot="d-cm">Skills assessment platform</Chip>
                <Chip href="skills-assessment-and-interviewing-platform.dc.html" dot="d-cm">Assessment + interviewing</Chip>
                <Chip href="assess-and-develop-your-workplace-abilities.dc.html" dot="d-cm">Workplace abilities</Chip>
                <Chip href="designed-for-high-completion-rate.dc.html" dot="d-cm">High completion</Chip>
                <Chip href="unleash-your-brands-potential.dc.html" dot="d-cm">Brand potential</Chip>
                <Chip href="discover-the-power-of-rapid-team-scaling.dc.html" dot="d-cm">Rapid scaling</Chip>
                <Chip href="smart-personality-assessment.dc.html" dot="d-cm">Smart personality</Chip>
                <Chip href="smart-personality-assessment-report.dc.html" dot="d-cm">· report</Chip>
                <Chip href="getting-your-smart-personality-assessment-report.dc.html" dot="d-cm">· get report</Chip>
                <Chip href="download-smart-personality-assessment-report.dc.html" dot="d-cm">· download</Chip>
                <Chip href="system-compatibility-check-for-remote-asessments.dc.html" dot="d-cm">System check</Chip>
                <Chip href="submit-rfp-for-skills-assessment-ai-interviews-proctoring.dc.html" dot="d-cm">Submit RFP</Chip>
              </div>
            </div>

            <div className="card">
              <h2>HR tools <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· working calculators</span></h2>
              <div className="sub">2 generators + 13 live calculators</div>
              <div className="grp">
                <Chip href="ai-interview-question-generator.dc.html" dot="d-cm">Interview Q generator</Chip>
                <Chip href="job-description-generator.dc.html" dot="d-cm">JD generator</Chip>
                <Chip href="cost-per-hire-calculator.dc.html" dot="d-cm">Cost per hire</Chip>
                <Chip href="attrition-rate-calculator.dc.html" dot="d-cm">Attrition rate</Chip>
                <Chip href="free-employee-net-promoter-score-enps-calculator.dc.html" dot="d-cm">eNPS</Chip>
                <Chip href="applicant-funnel-calculator.dc.html" dot="d-cm">Applicant funnel</Chip>
                <Chip href="average-time-to-hire-calculator.dc.html" dot="d-cm">Time to hire</Chip>
                <Chip href="cost-of-employee-turnover-calculator.dc.html" dot="d-cm">Turnover cost</Chip>
                <Chip href="sourcing-channel-efficiency-calculator.dc.html" dot="d-cm">Sourcing efficiency</Chip>
                <Chip href="remote-work-cost-savings-calculator.dc.html" dot="d-cm">Remote savings</Chip>
                <Chip href="quality-of-hire-calculator.dc.html" dot="d-cm">Quality of hire</Chip>
                <Chip href="interview-to-offer-ratio-calculator.dc.html" dot="d-cm">Interview-to-offer</Chip>
                <Chip href="recruiting-conversion-rate-calculator.dc.html" dot="d-cm">Conversion rate</Chip>
                <Chip href="job-offer-acceptance-rate-calculator.dc.html" dot="d-cm">Offer acceptance</Chip>
                <Chip href="hiring-manager-satisfaction-calculator.dc.html" dot="d-cm">HM satisfaction</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Case studies &amp; content <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· live-match</span></h2>
              <div className="sub">Customer stories, blog posts, programs</div>
              <div className="grp">
                <Chip href="case-study.dc.html" dot="d-cm">Case studies hub</Chip>
                <Chip href="whire.dc.html" dot="d-cm">Whire</Chip>
                <Chip href="udder.dc.html" dot="d-cm">Udder</Chip>
                <Chip href="playroll.dc.html" dot="d-cm">Playroll</Chip>
                <Chip href="comeet.dc.html" dot="d-cm">Comeet</Chip>
                <Chip href="testlify-the-recruiter-who-never-sleeps.dc.html" dot="d-cm">Blog · never sleeps</Chip>
                <Chip href="testlify-launches-conversational-ai-for-talent-assessment.dc.html" dot="d-cm">Blog · conversational AI</Chip>
                <Chip href="knowledge-base.dc.html" dot="d-cm">Ebooks</Chip>
                <Chip href="podcast.dc.html" dot="d-cm">Podcast</Chip>
                <Chip href="referral-program.dc.html" dot="d-cm">Referral program</Chip>
                <Chip href="partnership.dc.html" dot="d-cm">Partnership program</Chip>
                <Chip href="integration-program.dc.html" dot="d-cm">Integration program</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Solutions · industries (14) <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· live-match</span></h2>
              <div className="sub">Built from solution-industry-template</div>
              <div className="grp">
                <Chip href="it-industry.dc.html" dot="d-a">IT &amp; technology</Chip>
                <Chip href="logistics-supply-chain-industry.dc.html" dot="d-a">Logistics &amp; supply chain</Chip>
                <Chip href="retail-industry.dc.html" dot="d-a">Retail</Chip>
                <Chip href="recruitment-industry.dc.html" dot="d-a">Recruitment</Chip>
                <Chip href="financial-industry.dc.html" dot="d-a">Financial</Chip>
                <Chip href="saas-industry.dc.html" dot="d-a">SaaS</Chip>
                <Chip href="energy-industry.dc.html" dot="d-a">Energy</Chip>
                <Chip href="hospitality-industry.dc.html" dot="d-a">Hospitality</Chip>
                <Chip href="health-care-industry.dc.html" dot="d-a">Health care</Chip>
                <Chip href="bpo-industry.dc.html" dot="d-a">BPO</Chip>
                <Chip href="edtech-industry.dc.html" dot="d-a">Edtech</Chip>
                <Chip href="real-estate-industry.dc.html" dot="d-a">Real estate</Chip>
                <Chip href="media-industry.dc.html" dot="d-a">Media</Chip>
                <Chip href="blockchain-industry.dc.html" dot="d-cm">Blockchain</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Solutions · use cases (10) <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· live-match</span></h2>
              <div className="sub">Built from solution-usecase-template</div>
              <div className="grp">
                <Chip href="lateral-hiring.dc.html" dot="d-a">Lateral hiring</Chip>
                <Chip href="diversity-and-inclusions.dc.html" dot="d-a">Diversity &amp; inclusion</Chip>
                <Chip href="volume-hiring.dc.html" dot="d-a">Volume hiring</Chip>
                <Chip href="remote-hiring.dc.html" dot="d-a">Remote hiring</Chip>
                <Chip href="blue-collar-hiring.dc.html" dot="d-a">Blue collar hiring</Chip>
                <Chip href="freelance-hiring.dc.html" dot="d-a">Freelance hiring</Chip>
                <Chip href="campus-hiring.dc.html" dot="d-a">Campus hiring</Chip>
                <Chip href="technical-hiring.dc.html" dot="d-a">Technical hiring</Chip>
                <Chip href="sales-hiring.dc.html" dot="d-a">Sales hiring</Chip>
                <Chip href="skills-validation.dc.html" dot="d-a">Skills validation</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Solutions · test types (11) <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· live-match</span></h2>
              <div className="sub">Built from solution-testtype-template</div>
              <div className="grp">
                <Chip href="role-specific-tests.dc.html" dot="d-a">Role specific</Chip>
                <Chip href="language-tests.dc.html" dot="d-a">Language</Chip>
                <Chip href="coding-tests.dc.html" dot="d-a">Coding / Programming</Chip>
                <Chip href="software-skills-tests.dc.html" dot="d-a">Software skills</Chip>
                <Chip href="psychometric-tests.dc.html" dot="d-a">Personality &amp; culture</Chip>
                <Chip href="cognitive-ability-tests.dc.html" dot="d-a">Cognitive ability</Chip>
                <Chip href="situational-judgment.dc.html" dot="d-a">Situational judgment</Chip>
                <Chip href="cefr-test.dc.html" dot="d-a">CEFR</Chip>
                <Chip href="typing-test.dc.html" dot="d-a">Typing</Chip>
                <Chip href="engineering-skills.dc.html" dot="d-a">Engineering</Chip>
                <Chip href="process-knowledge-tests.dc.html" dot="d-cm">Process knowledge</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Solutions · company size (5) <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· live-match</span></h2>
              <div className="sub">Built from solution-company-template</div>
              <div className="grp">
                <Chip href="for-startups.dc.html" dot="d-cm">For startups</Chip>
                <Chip href="small-medium-businesses.dc.html" dot="d-cm">SMBs</Chip>
                <Chip href="enterprise.dc.html" dot="d-cm">Enterprises</Chip>
                <Chip href="non-profits.dc.html" dot="d-cm">Non-profits</Chip>
                <Chip href="public-sector-talent-assessment-solution.dc.html" dot="d-cm">Public sector</Chip>
              </div>
            </div>

            <div className="card">
              <h2>Shared components <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· imported, not copied</span></h2>
              <div className="sub">Reusable building blocks imported across pages via dc-import</div>
              <div className="grp">
                <Chip href="component-site-header.dc.html" dot="d-b">Site header <span style={{ color: '#A9999C' }}>(mega-menu)</span></Chip>
                <Chip href="component-site-footer.dc.html" dot="d-b">Site footer</Chip>
                <Chip href="component-cta-button.dc.html" dot="d-b">CTA button</Chip>
                <Chip href="component-faq.dc.html" dot="d-b">FAQ accordion</Chip>
                <Chip href="component-security-section.dc.html" dot="d-b">Security section</Chip>
                <Chip href="component-use-case-card.dc.html" dot="d-b">Use-case card</Chip>
                <Chip href="component-cta-band.dc.html" dot="d-b">CTA band</Chip>
                <Chip href="component-testimonials.dc.html" dot="d-b">Testimonials</Chip>
                <Chip href="component-testimonials-cards.dc.html" dot="d-b">Testimonials cards</Chip>
                <Chip href="component-recognition.dc.html" dot="d-b">Recognition band</Chip>
                <Chip href="component-section-templates.dc.html" dot="d-b">Section templates <span style={{ color: '#A9999C' }}>(dev reference)</span></Chip>
              </div>
            </div>

            <div className="card">
              <h2>Page templates <span style={{ fontWeight: 500, fontSize: '12px', color: '#A9999C' }}>· data-driven</span></h2>
              <div className="sub">One template renders every instance in its family — edit data, not layout</div>
              <div className="glabel">Product</div>
              <div className="grp">
                <Chip href="product-features-detail.dc.html" dot="d-r">Feature detail</Chip>
              </div>
              <div className="glabel">Company</div>
              <div className="grp">
                <Chip href="customer-success-stories-detail.dc.html" dot="d-r">Case study</Chip>
              </div>
              <div className="glabel">Solutions</div>
              <div className="grp">
                <Chip href="solution-usecase-template.dc.html" dot="d-r">Use-case</Chip>
                <Chip href="solution-industry-template.dc.html" dot="d-r">Industry</Chip>
                <Chip href="solution-company-template.dc.html" dot="d-r">Company size</Chip>
                <Chip href="solution-testtype-template.dc.html" dot="d-r">Test type</Chip>
              </div>
              <div className="glabel">Resources</div>
              <div className="grp">
                <Chip href="resource-list-template.dc.html" dot="d-r">List / index</Chip>
                <Chip href="resource-detail-template.dc.html" dot="d-r">Article / detail</Chip>
                <Chip href="hiring-guides-detail.dc.html" dot="d-r">Hiring guide detail</Chip>
                <Chip href="hr-tools-detail.dc.html" dot="d-r">Tool / calculator</Chip>
                <Chip href="alternatives-detail.dc.html" dot="d-r">Competitor</Chip>
                <Chip href="hr-glossary-detail.dc.html" dot="d-r">Glossary term</Chip>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '26px', background: '#fff', border: '1px solid #F0E2E3', borderRadius: '16px', padding: '22px 24px', fontSize: '13px', color: '#5A4B4E', lineHeight: 1.8 }}>
            <b style={{ color: '#1A1014' }}>Merges applied to the IA:</b>
            {' '}Testlify AI + platform hub · AI interviews + video interviewing · Science + Trust → “Why it works” · 27 feature pages → 1 Features page · About + leadership (13 → 1) · Trust subpages → tabs · 3 programs → Partners · ebooks + podcasts → Blog · contact + book-a-demo → 1.
            <br /><br />
            <b style={{ color: '#1A1014' }}>Header &amp; footer now match this IA.</b> Pre-change versions saved to <code>backup pages/Site Header -pre-IA-.dc.html</code> and <code>Site Footer -pre-IA-.dc.html</code>.
            <br /><br />
            <b style={{ color: '#1A1014' }}>Naming convention.</b> Every detail/template page keeps its landing&apos;s full name + <code>-detail</code> — <code>library-tests</code> → <code>library-tests-detail</code>, <code>product-features</code> → <code>product-features-detail</code>, <code>company-customers</code> → <code>company-customers-detail</code>, and so on — so the parent-child relation reads at a glance. The multi-category <code>solution-*-template</code> pages and the generic <code>resource-list-template</code> / <code>resource-detail-template</code> keep their own names (they aren&apos;t single-landing details).
          </div>

        </div>
      </div>
    </>
  );
}
