export const metadata = {
  title: "Testlify sitemap",
};

export default function SitemapPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
body{margin:0;background:#FDF8F4;}
.sm-chip{display:inline-flex;align-items:center;gap:6px;background:#FDFAF8;border:1px solid #F0E2E3;border-radius:999px;padding:3px 12px 3px 9px;font-size:12.5px;color:#1A1014;white-space:nowrap;}
.sm-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.sm-d-b{background:#2A6FDB;}.sm-d-r{background:#8A5A3C;}.sm-d-t{background:#E14B50;}.sm-d-a{background:#22A05B;}.sm-d-cm{background:#E08A1E;}
.sm-grp{display:flex;flex-wrap:wrap;gap:6px;align-items:center;}
.sm-glabel{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;margin:12px 0 6px;}
.sm-card{background:#fff;border:1px solid #F0E2E3;border-radius:16px;padding:22px 24px;}
.sm-card h2{font-size:16px;font-weight:700;margin:0 0 4px;color:#F23F44;}
.sm-card .sm-sub{font-size:12px;color:#A9999C;margin-bottom:12px;}
a.sm-chip{text-decoration:none;cursor:pointer;transition:border-color .15s,box-shadow .15s,transform .15s;}
a.sm-chip:hover{border-color:#FBD0D1;box-shadow:0 6px 16px rgba(110,11,14,.08);transform:translateY(-1px);}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`,
        }}
      />
      <div style={{ fontFamily: "'Poppins',sans-serif", color: "#1A1014", minHeight: "100vh" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 40px 80px" }}>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".16em", color: "#8A7A7D", textTransform: "uppercase", marginBottom: 8 }}>
              Site structure · restructured IA<span style={{ color: "#F23F44" }}>.</span>
            </div>
            <h1 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 8px", lineHeight: 1.1, letterSpacing: "-1px" }}>Testlify sitemap</h1>
            <p style={{ fontSize: 15, color: "#5A4B4E", margin: "0 0 4px", maxWidth: 720 }}>
              Matches the live 7-item nav — <b>Product · Test library · Interviews · Pricing · Solutions · Resources · About</b>. Company pages live under the <b>About</b> menu.
            </p>
          </div>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", margin: "14px 0 26px" }}>
            <div><span style={{ fontSize: 22, fontWeight: 800, color: "#1A1014" }}>176</span><span style={{ fontSize: 12, color: "#5A4B4E", marginLeft: 6 }}>pages built</span></div>
            <div><span style={{ fontSize: 22, fontWeight: 800, color: "#B9A7AA" }}>15</span><span style={{ fontSize: 12, color: "#5A4B4E", marginLeft: 6 }}>templates (data-driven)</span></div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 20, fontSize: 12.5, color: "#5A4B4E", alignItems: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span className="sm-dot sm-d-b" />Built</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span className="sm-dot sm-d-r" />Template (data-driven)</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span className="sm-dot sm-d-t" />Pending</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span className="sm-dot sm-d-a" />Audited</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span className="sm-dot sm-d-cm" />Content mapped</span>
            <span style={{ color: "#8A7A7D" }}>— every chip links to its live page</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr))", gap: 16, alignItems: "start" }}>

            <div className="sm-card">
              <h2>Top nav <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· 7 items</span></h2>
              <div className="sm-sub">Product · Test library · Interviews · Pricing · Solutions · Resources · About</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/"><span className="sm-dot sm-d-a" />Home</a>
                <a className="sm-chip" href="/test-library"><span className="sm-dot sm-d-a" />Test library</a>
                <a className="sm-chip" href="/test-library-detail"><span className="sm-dot sm-d-a" />· detail</a>
                <a className="sm-chip" href="/interviews"><span className="sm-dot sm-d-a" />Interviews</a>
                <a className="sm-chip" href="/interviews-detail"><span className="sm-dot sm-d-a" />· detail</a>
                <a className="sm-chip" href="/library-build-your-own"><span className="sm-dot sm-d-a" />Build your own</a>
                <a className="sm-chip" href="/pricing"><span className="sm-dot sm-d-a" />Pricing</a>
                <a className="sm-chip" href="/compare"><span className="sm-dot sm-d-a" />Compare plans</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Product menu <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· 8</span></h2>
              <div className="sm-sub">The Product mega-menu, in live order</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/ai-powered-talent-assessment-platform"><span className="sm-dot sm-d-a" />Testlify AI</a>
                <a className="sm-chip" href="/ai-resume-screener"><span className="sm-dot sm-d-a" />AI resume screener</a>
                <a className="sm-chip" href="/features"><span className="sm-dot sm-d-a" />Features</a>
                <a className="sm-chip" href="/video-interviewing-tool"><span className="sm-dot sm-d-a" />Video interviewing</a>
                <a className="sm-chip" href="/science"><span className="sm-dot sm-d-a" />Science behind tests</a>
                <a className="sm-chip" href="/demo"><span className="sm-dot sm-d-a" />Live product demo</a>
                <a className="sm-chip" href="https://roadmap.testlify.com/" target="_blank" rel="noopener"><span className="sm-dot sm-d-a" />Roadmap <span style={{ color: "#A9999C" }}>(ext)</span></a>
                <a className="sm-chip" href="/integrations"><span className="sm-dot sm-d-a" />ATS integrations</a>
              </div>
              <div className="sm-glabel">Also live (not in Product menu)</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/product-skill-assessments"><span className="sm-dot sm-d-b" />Skill assessments</a>
                <a className="sm-chip" href="/interviews"><span className="sm-dot sm-d-a" />AI interviews</a>
                <a className="sm-chip" href="/product-features-detail"><span className="sm-dot sm-d-r" />Feature detail <span style={{ color: "#A9999C" }}>(template)</span></a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions menu <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· 4 groups</span></h2>
              <div className="sm-sub">Hub + 4 group tabs (full instance lists below)</div>
              <div className="sm-grp"><a className="sm-chip" href="/solution-index"><span className="sm-dot sm-d-b" />Solutions hub</a></div>
              <div className="sm-glabel">Menu tabs → template</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/solution-industry-template"><span className="sm-dot sm-d-r" />By industry type <span style={{ color: "#A9999C" }}>(14)</span></a>
                <a className="sm-chip" href="/solution-usecase-template"><span className="sm-dot sm-d-r" />By use case <span style={{ color: "#A9999C" }}>(10)</span></a>
                <a className="sm-chip" href="/solution-testtype-template"><span className="sm-dot sm-d-r" />By test type <span style={{ color: "#A9999C" }}>(11)</span></a>
                <a className="sm-chip" href="/solution-company-template"><span className="sm-dot sm-d-r" />By company type <span style={{ color: "#A9999C" }}>(5)</span></a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Resources menu <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· Learn · HR tools · Programs</span></h2>
              <div className="sm-sub">Mirrors the Resources mega-menu (HR-tool calculators listed below)</div>
              <div className="sm-glabel">Learn</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/blog"><span className="sm-dot sm-d-a" />Blog</a>
                <a className="sm-chip" href="/blog-detail"><span className="sm-dot sm-d-a" />· detail</a>
                <a className="sm-chip" href="/hiring-guides"><span className="sm-dot sm-d-b" />Hiring guides</a>
                <a className="sm-chip" href="/hiring-guides-detail"><span className="sm-dot sm-d-r" />· detail</a>
                <a className="sm-chip" href="/hr-glossary"><span className="sm-dot sm-d-b" />HR glossary</a>
                <a className="sm-chip" href="/hr-glossary-detail"><span className="sm-dot sm-d-r" />· detail</a>
                <a className="sm-chip" href="/knowledge-base"><span className="sm-dot sm-d-cm" />Ebooks</a>
                <a className="sm-chip" href="/podcast"><span className="sm-dot sm-d-cm" />Podcasts</a>
                <a className="sm-chip" href="/customer-success-stories"><span className="sm-dot sm-d-a" />Customer stories</a>
                <a className="sm-chip" href="/job-description-templates"><span className="sm-dot sm-d-b" />JD templates</a>
                <a className="sm-chip" href="/alternatives"><span className="sm-dot sm-d-b" />Competitors</a>
                <a className="sm-chip" href="/alternatives-detail"><span className="sm-dot sm-d-r" />· detail</a>
                <a className="sm-chip" href="/sitemap"><span className="sm-dot sm-d-a" />Sitemap</a>
              </div>
              <div className="sm-glabel">HR tools</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/hr-tools"><span className="sm-dot sm-d-b" />HR tools landing</a>
                <a className="sm-chip" href="/hr-tools-detail"><span className="sm-dot sm-d-r" />· detail template</a>
              </div>
              <div className="sm-glabel">Programs</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/referral-program"><span className="sm-dot sm-d-cm" />Referral program</a>
                <a className="sm-chip" href="/partnership"><span className="sm-dot sm-d-cm" />Partnership program</a>
                <a className="sm-chip" href="/integration-program"><span className="sm-dot sm-d-cm" />Integration program</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>About menu <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· Company · More</span></h2>
              <div className="sm-sub">Mirrors the About mega-menu (2 columns)</div>
              <div className="sm-glabel">Company</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/about"><span className="sm-dot sm-d-a" />Our story</a>
                <a className="sm-chip" href="/contact"><span className="sm-dot sm-d-a" />Contact us</a>
                <a className="sm-chip" href="/our-leadership"><span className="sm-dot sm-d-a" />Our leadership</a>
                <a className="sm-chip" href="https://trust.testlify.com/" target="_blank" rel="noopener"><span className="sm-dot sm-d-cm" />Trust center <span style={{ color: "#A9999C" }}>(external redirect)</span></a>
              </div>
              <div className="sm-glabel">More</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/clients"><span className="sm-dot sm-d-cm" />Clients</a>
                <a className="sm-chip" href="/our-partners"><span className="sm-dot sm-d-cm" />Partners</a>
                <a className="sm-chip" href="/job-openings"><span className="sm-dot sm-d-cm" />Job openings</a>
                <a className="sm-chip" href="/job-openings-detail"><span className="sm-dot sm-d-cm" />Job opening detail <span style={{ color: "#A9999C" }}>(template)</span></a>
                <a className="sm-chip" href="/write-for-us"><span className="sm-dot sm-d-cm" />Write for us</a>
              </div>
              <div className="sm-glabel">Also under About / footer</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/customer-success-stories"><span className="sm-dot sm-d-a" />Customers</a>
                <a className="sm-chip" href="/customer-success-stories-detail"><span className="sm-dot sm-d-r" />Case study detail</a>
                <a className="sm-chip" href="/careers"><span className="sm-dot sm-d-b" />Careers</a>
              </div>
              <div className="sm-glabel">Trust center — subpages become tabs</div>
              <div className="sm-grp">
                <a className="sm-chip" href="https://trust.testlify.com/" target="_blank" rel="noopener"><span className="sm-dot sm-d-cm" />Trust landing <span style={{ color: "#A9999C" }}>(deleted — external redirect)</span></a>
                <a className="sm-chip" href="https://trust.testlify.com/" target="_blank" rel="noopener"><span className="sm-dot sm-d-cm" />Compliances <span style={{ color: "#A9999C" }}>(deleted — external redirect)</span></a>
                <a className="sm-chip" href="https://trust.testlify.com/" target="_blank" rel="noopener"><span className="sm-dot sm-d-cm" />Trust center <span style={{ color: "#A9999C" }}>(deleted — external redirect)</span></a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Legal &amp; policy</h2>
              <div className="sm-sub">Full policy set + legal hub</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/company-legal"><span className="sm-dot sm-d-b" />Legal hub</a>
                <a className="sm-chip" href="/terms"><span className="sm-dot sm-d-cm" />Terms</a>
                <a className="sm-chip" href="/privacy-policy"><span className="sm-dot sm-d-cm" />Privacy policy</a>
                <a className="sm-chip" href="/cookie-policy"><span className="sm-dot sm-d-cm" />Cookie policy</a>
                <a className="sm-chip" href="/fair-refund-policy"><span className="sm-dot sm-d-cm" />Fair refund</a>
                <a className="sm-chip" href="/candidate-honesty-policy-and-agreement"><span className="sm-dot sm-d-cm" />Candidate honesty</a>
                <a className="sm-chip" href="/data-processing-agreement"><span className="sm-dot sm-d-cm" />DPA</a>
                <a className="sm-chip" href="/service-level-agreement"><span className="sm-dot sm-d-cm" />SLA</a>
                <a className="sm-chip" href="/gdpr-compliance"><span className="sm-dot sm-d-cm" />GDPR</a>
                <a className="sm-chip" href="/gdpr-faqs"><span className="sm-dot sm-d-cm" />GDPR FAQs</a>
                <a className="sm-chip" href="/ccpa"><span className="sm-dot sm-d-cm" />CCPA</a>
                <a className="sm-chip" href="/data-privacy-framework"><span className="sm-dot sm-d-cm" />Data privacy framework</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Security &amp; trust</h2>
              <div className="sm-sub">Security suite (live-match)</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/security"><span className="sm-dot sm-d-cm" />Security</a>
                <a className="sm-chip" href="/security-practices"><span className="sm-dot sm-d-cm" />Security practices</a>
                <a className="sm-chip" href="/security-and-compliance"><span className="sm-dot sm-d-cm" />Security &amp; compliance</a>
                <a className="sm-chip" href="/information-security"><span className="sm-dot sm-d-cm" />Information security</a>
                <a className="sm-chip" href="/testlify-information-security-standards"><span className="sm-dot sm-d-cm" />InfoSec standards</a>
                <a className="sm-chip" href="/data-residency"><span className="sm-dot sm-d-cm" />Data residency</a>
                <a className="sm-chip" href="/architecture-overview"><span className="sm-dot sm-d-cm" />Architecture</a>
                <a className="sm-chip" href="/security-control-and-visibility"><span className="sm-dot sm-d-cm" />Control &amp; visibility</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>About &amp; company <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Company pages now under the About menu</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/our-leadership"><span className="sm-dot sm-d-a" />Our leadership</a>
                <a className="sm-chip" href="/clients"><span className="sm-dot sm-d-cm" />Clients</a>
                <a className="sm-chip" href="/investors"><span className="sm-dot sm-d-cm" />Investors</a>
                <a className="sm-chip" href="/job-openings"><span className="sm-dot sm-d-cm" />Job openings</a>
                <a className="sm-chip" href="/write-for-us"><span className="sm-dot sm-d-cm" />Write for us</a>
                <a className="sm-chip" href="/subject-matter-experts"><span className="sm-dot sm-d-cm" />SMEs</a>
                <a className="sm-chip" href="/press-kit"><span className="sm-dot sm-d-cm" />Press kit</a>
                <a className="sm-chip" href="/awards"><span className="sm-dot sm-d-cm" />Awards</a>
                <a className="sm-chip" href="/brand"><span className="sm-dot sm-d-cm" />Brand</a>
                <a className="sm-chip" href="/why-testlify"><span className="sm-dot sm-d-cm" />Why Testlify</a>
                <a className="sm-chip" href="/how-testlify-works"><span className="sm-dot sm-d-cm" />How it works</a>
                <a className="sm-chip" href="/product-tour"><span className="sm-dot sm-d-cm" />Product tour</a>
                <a className="sm-chip" href="/responsible-hiring"><span className="sm-dot sm-d-cm" />Responsible hiring</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Product &amp; feature pages <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Feature landings + platform pages</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/whats-new"><span className="sm-dot sm-d-cm" />What&apos;s new</a>
                <a className="sm-chip" href="/api"><span className="sm-dot sm-d-cm" />API</a>
                <a className="sm-chip" href="/white-label"><span className="sm-dot sm-d-cm" />White label</a>
                <a className="sm-chip" href="/reporting-analytics"><span className="sm-dot sm-d-cm" />Reporting &amp; analytics</a>
                <a className="sm-chip" href="/reseller-plan"><span className="sm-dot sm-d-cm" />Reseller plan</a>
                <a className="sm-chip" href="/multilingual-abilities"><span className="sm-dot sm-d-cm" />Multilingual</a>
                <a className="sm-chip" href="/interview-as-a-service"><span className="sm-dot sm-d-cm" />Interview as a service</a>
                <a className="sm-chip" href="/skills-assessment-platform"><span className="sm-dot sm-d-cm" />Skills assessment platform</a>
                <a className="sm-chip" href="/skills-assessment-and-interviewing-platform"><span className="sm-dot sm-d-cm" />Assessment + interviewing</a>
                <a className="sm-chip" href="/assess-and-develop-your-workplace-abilities"><span className="sm-dot sm-d-cm" />Workplace abilities</a>
                <a className="sm-chip" href="/designed-for-high-completion-rate"><span className="sm-dot sm-d-cm" />High completion</a>
                <a className="sm-chip" href="/unleash-your-brands-potential"><span className="sm-dot sm-d-cm" />Brand potential</a>
                <a className="sm-chip" href="/discover-the-power-of-rapid-team-scaling"><span className="sm-dot sm-d-cm" />Rapid scaling</a>
                <a className="sm-chip" href="/smart-personality-assessment"><span className="sm-dot sm-d-cm" />Smart personality</a>
                <a className="sm-chip" href="/smart-personality-assessment-report"><span className="sm-dot sm-d-cm" />· report</a>
                <a className="sm-chip" href="/getting-your-smart-personality-assessment-report"><span className="sm-dot sm-d-cm" />· get report</a>
                <a className="sm-chip" href="/download-smart-personality-assessment-report"><span className="sm-dot sm-d-cm" />· download</a>
                <a className="sm-chip" href="/system-compatibility-check-for-remote-asessments"><span className="sm-dot sm-d-cm" />System check</a>
                <a className="sm-chip" href="/submit-rfp-for-skills-assessment-ai-interviews-proctoring"><span className="sm-dot sm-d-cm" />Submit RFP</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>HR tools <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· working calculators</span></h2>
              <div className="sm-sub">2 generators + 13 live calculators</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/ai-interview-question-generator"><span className="sm-dot sm-d-cm" />Interview Q generator</a>
                <a className="sm-chip" href="/job-description-generator"><span className="sm-dot sm-d-cm" />JD generator</a>
                <a className="sm-chip" href="/cost-per-hire-calculator"><span className="sm-dot sm-d-cm" />Cost per hire</a>
                <a className="sm-chip" href="/attrition-rate-calculator"><span className="sm-dot sm-d-cm" />Attrition rate</a>
                <a className="sm-chip" href="/free-employee-net-promoter-score-enps-calculator"><span className="sm-dot sm-d-cm" />eNPS</a>
                <a className="sm-chip" href="/applicant-funnel-calculator"><span className="sm-dot sm-d-cm" />Applicant funnel</a>
                <a className="sm-chip" href="/average-time-to-hire-calculator"><span className="sm-dot sm-d-cm" />Time to hire</a>
                <a className="sm-chip" href="/cost-of-employee-turnover-calculator"><span className="sm-dot sm-d-cm" />Turnover cost</a>
                <a className="sm-chip" href="/sourcing-channel-efficiency-calculator"><span className="sm-dot sm-d-cm" />Sourcing efficiency</a>
                <a className="sm-chip" href="/remote-work-cost-savings-calculator"><span className="sm-dot sm-d-cm" />Remote savings</a>
                <a className="sm-chip" href="/quality-of-hire-calculator"><span className="sm-dot sm-d-cm" />Quality of hire</a>
                <a className="sm-chip" href="/interview-to-offer-ratio-calculator"><span className="sm-dot sm-d-cm" />Interview-to-offer</a>
                <a className="sm-chip" href="/recruiting-conversion-rate-calculator"><span className="sm-dot sm-d-cm" />Conversion rate</a>
                <a className="sm-chip" href="/job-offer-acceptance-rate-calculator"><span className="sm-dot sm-d-cm" />Offer acceptance</a>
                <a className="sm-chip" href="/hiring-manager-satisfaction-calculator"><span className="sm-dot sm-d-cm" />HM satisfaction</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Case studies &amp; content <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Customer stories, blog posts, programs</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/case-study"><span className="sm-dot sm-d-cm" />Case studies hub</a>
                <a className="sm-chip" href="/whire"><span className="sm-dot sm-d-cm" />Whire</a>
                <a className="sm-chip" href="/udder"><span className="sm-dot sm-d-cm" />Udder</a>
                <a className="sm-chip" href="/playroll"><span className="sm-dot sm-d-cm" />Playroll</a>
                <a className="sm-chip" href="/comeet"><span className="sm-dot sm-d-cm" />Comeet</a>
                <a className="sm-chip" href="/testlify-the-recruiter-who-never-sleeps"><span className="sm-dot sm-d-cm" />Blog · never sleeps</a>
                <a className="sm-chip" href="/testlify-launches-conversational-ai-for-talent-assessment"><span className="sm-dot sm-d-cm" />Blog · conversational AI</a>
                <a className="sm-chip" href="/knowledge-base"><span className="sm-dot sm-d-cm" />Ebooks</a>
                <a className="sm-chip" href="/podcast"><span className="sm-dot sm-d-cm" />Podcast</a>
                <a className="sm-chip" href="/referral-program"><span className="sm-dot sm-d-cm" />Referral program</a>
                <a className="sm-chip" href="/partnership"><span className="sm-dot sm-d-cm" />Partnership program</a>
                <a className="sm-chip" href="/integration-program"><span className="sm-dot sm-d-cm" />Integration program</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions · industries (14) <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Built from solution-industry-template</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/it-industry"><span className="sm-dot sm-d-a" />IT &amp; technology</a>
                <a className="sm-chip" href="/logistics-supply-chain-industry"><span className="sm-dot sm-d-a" />Logistics &amp; supply chain</a>
                <a className="sm-chip" href="/retail-industry"><span className="sm-dot sm-d-a" />Retail</a>
                <a className="sm-chip" href="/recruitment-industry"><span className="sm-dot sm-d-a" />Recruitment</a>
                <a className="sm-chip" href="/financial-industry"><span className="sm-dot sm-d-a" />Financial</a>
                <a className="sm-chip" href="/saas-industry"><span className="sm-dot sm-d-a" />SaaS</a>
                <a className="sm-chip" href="/energy-industry"><span className="sm-dot sm-d-a" />Energy</a>
                <a className="sm-chip" href="/hospitality-industry"><span className="sm-dot sm-d-a" />Hospitality</a>
                <a className="sm-chip" href="/health-care-industry"><span className="sm-dot sm-d-a" />Health care</a>
                <a className="sm-chip" href="/bpo-industry"><span className="sm-dot sm-d-a" />BPO</a>
                <a className="sm-chip" href="/edtech-industry"><span className="sm-dot sm-d-a" />Edtech</a>
                <a className="sm-chip" href="/real-estate-industry"><span className="sm-dot sm-d-a" />Real estate</a>
                <a className="sm-chip" href="/media-industry"><span className="sm-dot sm-d-a" />Media</a>
                <a className="sm-chip" href="/blockchain-industry"><span className="sm-dot sm-d-cm" />Blockchain</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions · use cases (10) <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Built from solution-usecase-template</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/lateral-hiring"><span className="sm-dot sm-d-a" />Lateral hiring</a>
                <a className="sm-chip" href="/diversity-and-inclusions"><span className="sm-dot sm-d-a" />Diversity &amp; inclusion</a>
                <a className="sm-chip" href="/volume-hiring"><span className="sm-dot sm-d-a" />Volume hiring</a>
                <a className="sm-chip" href="/remote-hiring"><span className="sm-dot sm-d-a" />Remote hiring</a>
                <a className="sm-chip" href="/blue-collar-hiring"><span className="sm-dot sm-d-a" />Blue collar hiring</a>
                <a className="sm-chip" href="/freelance-hiring"><span className="sm-dot sm-d-a" />Freelance hiring</a>
                <a className="sm-chip" href="/campus-hiring"><span className="sm-dot sm-d-a" />Campus hiring</a>
                <a className="sm-chip" href="/technical-hiring"><span className="sm-dot sm-d-a" />Technical hiring</a>
                <a className="sm-chip" href="/sales-hiring"><span className="sm-dot sm-d-a" />Sales hiring</a>
                <a className="sm-chip" href="/skills-validation"><span className="sm-dot sm-d-a" />Skills validation</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions · test types (11) <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Built from solution-testtype-template</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/role-specific-tests"><span className="sm-dot sm-d-a" />Role specific</a>
                <a className="sm-chip" href="/language-tests"><span className="sm-dot sm-d-a" />Language</a>
                <a className="sm-chip" href="/coding-tests"><span className="sm-dot sm-d-a" />Coding / Programming</a>
                <a className="sm-chip" href="/software-skills-tests"><span className="sm-dot sm-d-a" />Software skills</a>
                <a className="sm-chip" href="/psychometric-tests"><span className="sm-dot sm-d-a" />Personality &amp; culture</a>
                <a className="sm-chip" href="/cognitive-ability-tests"><span className="sm-dot sm-d-a" />Cognitive ability</a>
                <a className="sm-chip" href="/situational-judgment"><span className="sm-dot sm-d-a" />Situational judgment</a>
                <a className="sm-chip" href="/cefr-test"><span className="sm-dot sm-d-a" />CEFR</a>
                <a className="sm-chip" href="/typing-test"><span className="sm-dot sm-d-a" />Typing</a>
                <a className="sm-chip" href="/engineering-skills"><span className="sm-dot sm-d-a" />Engineering</a>
                <a className="sm-chip" href="/process-knowledge-tests"><span className="sm-dot sm-d-a" />Process knowledge</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions · company size (5) <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Built from solution-company-template</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/for-startups"><span className="sm-dot sm-d-a" />For startups</a>
                <a className="sm-chip" href="/small-medium-businesses"><span className="sm-dot sm-d-a" />SMBs</a>
                <a className="sm-chip" href="/enterprise"><span className="sm-dot sm-d-a" />Enterprises</a>
                <a className="sm-chip" href="/non-profits"><span className="sm-dot sm-d-a" />Non-profits</a>
                <a className="sm-chip" href="/public-sector-talent-assessment-solution"><span className="sm-dot sm-d-a" />Public sector</a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Shared components <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· imported, not copied</span></h2>
              <div className="sm-sub">Reusable building blocks imported across pages via dc-import</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/component-site-header"><span className="sm-dot sm-d-b" />Site header <span style={{ color: "#A9999C" }}>(mega-menu)</span></a>
                <a className="sm-chip" href="/component-site-footer"><span className="sm-dot sm-d-b" />Site footer</a>
                <a className="sm-chip" href="/component-cta-button"><span className="sm-dot sm-d-b" />CTA button</a>
                <a className="sm-chip" href="/component-faq"><span className="sm-dot sm-d-b" />FAQ accordion</a>
                <a className="sm-chip" href="/component-security-section"><span className="sm-dot sm-d-b" />Security section</a>
                <a className="sm-chip" href="/component-use-case-card"><span className="sm-dot sm-d-b" />Use-case card</a>
                <a className="sm-chip" href="/component-cta-band"><span className="sm-dot sm-d-b" />CTA band</a>
                <a className="sm-chip" href="/component-testimonials"><span className="sm-dot sm-d-b" />Testimonials</a>
                <a className="sm-chip" href="/component-testimonials-cards"><span className="sm-dot sm-d-b" />Testimonials cards</a>
                <a className="sm-chip" href="/component-recognition"><span className="sm-dot sm-d-b" />Recognition band</a>
                <a className="sm-chip" href="/component-section-templates"><span className="sm-dot sm-d-b" />Section templates <span style={{ color: "#A9999C" }}>(dev reference)</span></a>
              </div>
            </div>

            <div className="sm-card">
              <h2>Page templates <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· data-driven</span></h2>
              <div className="sm-sub">One template renders every instance in its family — edit data, not layout</div>
              <div className="sm-glabel">Product</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/product-features-detail"><span className="sm-dot sm-d-r" />Feature detail</a>
              </div>
              <div className="sm-glabel">Company</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/customer-success-stories-detail"><span className="sm-dot sm-d-r" />Case study</a>
              </div>
              <div className="sm-glabel">Solutions</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/solution-usecase-template"><span className="sm-dot sm-d-r" />Use-case</a>
                <a className="sm-chip" href="/solution-industry-template"><span className="sm-dot sm-d-r" />Industry</a>
                <a className="sm-chip" href="/solution-company-template"><span className="sm-dot sm-d-r" />Company size</a>
                <a className="sm-chip" href="/solution-testtype-template"><span className="sm-dot sm-d-r" />Test type</a>
              </div>
              <div className="sm-glabel">Resources</div>
              <div className="sm-grp">
                <a className="sm-chip" href="/resource-list-template"><span className="sm-dot sm-d-r" />List / index</a>
                <a className="sm-chip" href="/resource-detail-template"><span className="sm-dot sm-d-r" />Article / detail</a>
                <a className="sm-chip" href="/hiring-guides-detail"><span className="sm-dot sm-d-r" />Hiring guide detail</a>
                <a className="sm-chip" href="/hr-tools-detail"><span className="sm-dot sm-d-r" />Tool / calculator</a>
                <a className="sm-chip" href="/alternatives-detail"><span className="sm-dot sm-d-r" />Competitor</a>
                <a className="sm-chip" href="/hr-glossary-detail"><span className="sm-dot sm-d-r" />Glossary term</a>
              </div>
            </div>

          </div>

          <div style={{ marginTop: 26, background: "#fff", border: "1px solid #F0E2E3", borderRadius: 16, padding: "22px 24px", fontSize: 13, color: "#5A4B4E", lineHeight: 1.8 }}>
            <b style={{ color: "#1A1014" }}>Merges applied to the IA:</b>
            {" "}Testlify AI + platform hub · AI interviews + video interviewing · Science + Trust → “Why it works” · 27 feature pages → 1 Features page · About + leadership (13 → 1) · Trust subpages → tabs · 3 programs → Partners · ebooks + podcasts → Blog · contact + book-a-demo → 1.
            <br /><br />
            <b style={{ color: "#1A1014" }}>Header &amp; footer now match this IA.</b> Pre-change versions saved to <code>backup pages/Site Header -pre-IA-.dc.html</code> and <code>Site Footer -pre-IA-.dc.html</code>.
            <br /><br />
            <b style={{ color: "#1A1014" }}>Naming convention.</b> Every detail/template page keeps its landing&apos;s full name + <code>-detail</code> — <code>library-tests</code> → <code>library-tests-detail</code>, <code>product-features</code> → <code>product-features-detail</code>, <code>company-customers</code> → <code>company-customers-detail</code>, and so on — so the parent-child relation reads at a glance. The multi-category <code>solution-*-template</code> pages and the generic <code>resource-list-template</code> / <code>resource-detail-template</code> keep their own names (they aren&apos;t single-landing details).
          </div>

        </div>
      </div>
    </>
  );
}
