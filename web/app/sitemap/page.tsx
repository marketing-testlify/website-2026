import Link from "next/link";

export const metadata = {
  title: "Testlify sitemap",
};

function href(slug: string): string {
  if (slug.startsWith("http")) return slug;
  let s = slug.replace(/\.dc\.html$/, "");
  if (s === "core-home") return "/";
  if (s.startsWith("core-")) s = s.slice(5);
  return "/" + s;
}

function Chip({
  to,
  dot,
  children,
  external,
}: {
  to: string;
  dot: "b" | "r" | "t" | "a" | "cm";
  children: React.ReactNode;
  external?: boolean;
}) {
  const dotClass = `sm-dot sm-d-${dot}`;
  if (external || to.startsWith("http")) {
    return (
      <a className="sm-chip" href={to} target="_blank" rel="noopener">
        <span className={dotClass} />
        {children}
      </a>
    );
  }
  return (
    <Link className="sm-chip" href={to}>
      <span className={dotClass} />
      {children}
    </Link>
  );
}

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
                <Chip to={href("core-home.dc.html")} dot="a">Home</Chip>
                <Chip to={href("test-library.dc.html")} dot="a">Test library</Chip>
                <Chip to={href("test-library-detail.dc.html")} dot="a">· detail</Chip>
                <Chip to={href("interviews.dc.html")} dot="a">Interviews</Chip>
                <Chip to={href("interviews-detail.dc.html")} dot="a">· detail</Chip>
                <Chip to={href("library-build-your-own.dc.html")} dot="a">Build your own</Chip>
                <Chip to={href("pricing.dc.html")} dot="a">Pricing</Chip>
                <Chip to={href("core-compare.dc.html")} dot="a">Compare plans</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Product menu <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· 8</span></h2>
              <div className="sm-sub">The Product mega-menu, in live order</div>
              <div className="sm-grp">
                <Chip to={href("ai-powered-talent-assessment-platform.dc.html")} dot="a">Testlify AI</Chip>
                <Chip to={href("ai-resume-screener.dc.html")} dot="a">AI resume screener</Chip>
                <Chip to={href("features.dc.html")} dot="a">Features</Chip>
                <Chip to={href("video-interviewing-tool.dc.html")} dot="a">Video interviewing</Chip>
                <Chip to={href("science.dc.html")} dot="a">Science behind tests</Chip>
                <Chip to={href("demo.dc.html")} dot="a">Live product demo</Chip>
                <Chip to="https://roadmap.testlify.com/" dot="a" external>Roadmap <span style={{ color: "#A9999C" }}>(ext)</span></Chip>
                <Chip to={href("integrations.dc.html")} dot="a">ATS integrations</Chip>
              </div>
              <div className="sm-glabel">Also live (not in Product menu)</div>
              <div className="sm-grp">
                <Chip to={href("product-skill-assessments.dc.html")} dot="b">Skill assessments</Chip>
                <Chip to={href("interviews.dc.html")} dot="a">AI interviews</Chip>
                <Chip to={href("product-features-detail.dc.html")} dot="r">Feature detail <span style={{ color: "#A9999C" }}>(template)</span></Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions menu <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· 4 groups</span></h2>
              <div className="sm-sub">Hub + 4 group tabs (full instance lists below)</div>
              <div className="sm-grp"><Chip to={href("solution-index.dc.html")} dot="b">Solutions hub</Chip></div>
              <div className="sm-glabel">Menu tabs → template</div>
              <div className="sm-grp">
                <Chip to={href("solution-industry-template.dc.html")} dot="r">By industry type <span style={{ color: "#A9999C" }}>(14)</span></Chip>
                <Chip to={href("solution-usecase-template.dc.html")} dot="r">By use case <span style={{ color: "#A9999C" }}>(10)</span></Chip>
                <Chip to={href("solution-testtype-template.dc.html")} dot="r">By test type <span style={{ color: "#A9999C" }}>(11)</span></Chip>
                <Chip to={href("solution-company-template.dc.html")} dot="r">By company type <span style={{ color: "#A9999C" }}>(5)</span></Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Resources menu <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· Learn · HR tools · Programs</span></h2>
              <div className="sm-sub">Mirrors the Resources mega-menu (HR-tool calculators listed below)</div>
              <div className="sm-glabel">Learn</div>
              <div className="sm-grp">
                <Chip to={href("blog.dc.html")} dot="a">Blog</Chip>
                <Chip to={href("blog-detail.dc.html")} dot="a">· detail</Chip>
                <Chip to={href("hiring-guides.dc.html")} dot="a">Hiring guides</Chip>
                <Chip to={href("hiring-guides-detail.dc.html")} dot="a">· detail</Chip>
                <Chip to={href("hr-glossary.dc.html")} dot="b">HR glossary</Chip>
                <Chip to={href("hr-glossary-detail.dc.html")} dot="a">· detail</Chip>
                <Chip to={href("knowledge-base.dc.html")} dot="a">Ebooks</Chip>
                <Chip to={href("podcast.dc.html")} dot="a">Podcasts</Chip>
                <Chip to={href("customer-success-stories.dc.html")} dot="a">Customer stories</Chip>
                <Chip to={href("job-description-templates.dc.html")} dot="a">JD templates</Chip>
                <Chip to={href("job-description-templates-detail.dc.html")} dot="a">· detail</Chip>
                <Chip to={href("alternatives.dc.html")} dot="a">Competitors</Chip>
                <Chip to={href("alternatives-detail.dc.html")} dot="a">· detail</Chip>
                <Chip to={href("sitemap.dc.html")} dot="a">Sitemap</Chip>
              </div>
              <div className="sm-glabel">HR tools</div>
              <div className="sm-grp">
                <Chip to={href("hr-tools.dc.html")} dot="b">HR tools landing</Chip>
                <Chip to={href("hr-tools-detail.dc.html")} dot="r">· detail template</Chip>
              </div>
              <div className="sm-glabel">Programs</div>
              <div className="sm-grp">
                <Chip to={href("referral-program.dc.html")} dot="cm">Referral program</Chip>
                <Chip to={href("partnership.dc.html")} dot="cm">Partnership program</Chip>
                <Chip to={href("integration-program.dc.html")} dot="cm">Integration program</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>About menu <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· Company · More</span></h2>
              <div className="sm-sub">Mirrors the About mega-menu (2 columns)</div>
              <div className="sm-glabel">Company</div>
              <div className="sm-grp">
                <Chip to={href("about.dc.html")} dot="a">Our story</Chip>
                <Chip to={href("contact.dc.html")} dot="a">Contact us</Chip>
                <Chip to={href("our-leadership.dc.html")} dot="a">Our leadership</Chip>
                <Chip to="https://trust.testlify.com/" dot="cm" external>Trust center <span style={{ color: "#A9999C" }}>(external redirect)</span></Chip>
              </div>
              <div className="sm-glabel">More</div>
              <div className="sm-grp">
                <Chip to={href("clients.dc.html")} dot="cm">Clients</Chip>
                <Chip to={href("our-partners.dc.html")} dot="cm">Partners</Chip>
                <Chip to={href("job-openings.dc.html")} dot="cm">Job openings</Chip>
                <Chip to={href("job-openings-detail.dc.html")} dot="cm">Job opening detail <span style={{ color: "#A9999C" }}>(template)</span></Chip>
                <Chip to={href("write-for-us.dc.html")} dot="cm">Write for us</Chip>
              </div>
              <div className="sm-glabel">Also under About / footer</div>
              <div className="sm-grp">
                <Chip to={href("customer-success-stories.dc.html")} dot="a">Customers</Chip>
                <Chip to={href("customer-success-stories-detail.dc.html")} dot="r">Case study detail</Chip>
                <Chip to={href("careers.dc.html")} dot="b">Careers</Chip>
              </div>
              <div className="sm-glabel">Trust center — subpages become tabs</div>
              <div className="sm-grp">
                <Chip to="https://trust.testlify.com/" dot="cm" external>Trust landing <span style={{ color: "#A9999C" }}>(deleted — external redirect)</span></Chip>
                <Chip to="https://trust.testlify.com/" dot="cm" external>Compliances <span style={{ color: "#A9999C" }}>(deleted — external redirect)</span></Chip>
                <Chip to="https://trust.testlify.com/" dot="cm" external>Trust center <span style={{ color: "#A9999C" }}>(deleted — external redirect)</span></Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Legal &amp; policy</h2>
              <div className="sm-sub">Full policy set + legal hub</div>
              <div className="sm-grp">
                <Chip to={href("company-legal.dc.html")} dot="b">Legal hub</Chip>
                <Chip to={href("terms.dc.html")} dot="cm">Terms</Chip>
                <Chip to={href("privacy-policy.dc.html")} dot="cm">Privacy policy</Chip>
                <Chip to={href("cookie-policy.dc.html")} dot="cm">Cookie policy</Chip>
                <Chip to={href("fair-refund-policy.dc.html")} dot="cm">Fair refund</Chip>
                <Chip to={href("candidate-honesty-policy-and-agreement.dc.html")} dot="cm">Candidate honesty</Chip>
                <Chip to={href("data-processing-agreement.dc.html")} dot="cm">DPA</Chip>
                <Chip to={href("service-level-agreement.dc.html")} dot="cm">SLA</Chip>
                <Chip to={href("gdpr-compliance.dc.html")} dot="cm">GDPR</Chip>
                <Chip to={href("gdpr-faqs.dc.html")} dot="cm">GDPR FAQs</Chip>
                <Chip to={href("ccpa.dc.html")} dot="cm">CCPA</Chip>
                <Chip to={href("data-privacy-framework.dc.html")} dot="cm">Data privacy framework</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Security &amp; trust</h2>
              <div className="sm-sub">Security suite (live-match)</div>
              <div className="sm-grp">
                <Chip to={href("security.dc.html")} dot="cm">Security</Chip>
                <Chip to={href("security-practices.dc.html")} dot="cm">Security practices</Chip>
                <Chip to={href("security-and-compliance.dc.html")} dot="cm">Security &amp; compliance</Chip>
                <Chip to={href("information-security.dc.html")} dot="cm">Information security</Chip>
                <Chip to={href("testlify-information-security-standards.dc.html")} dot="cm">InfoSec standards</Chip>
                <Chip to={href("data-residency.dc.html")} dot="cm">Data residency</Chip>
                <Chip to={href("architecture-overview.dc.html")} dot="cm">Architecture</Chip>
                <Chip to={href("security-control-and-visibility.dc.html")} dot="cm">Control &amp; visibility</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>About &amp; company <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Company pages now under the About menu</div>
              <div className="sm-grp">
                <Chip to={href("our-leadership.dc.html")} dot="a">Our leadership</Chip>
                <Chip to={href("clients.dc.html")} dot="cm">Clients</Chip>
                <Chip to={href("investors.dc.html")} dot="cm">Investors</Chip>
                <Chip to={href("job-openings.dc.html")} dot="cm">Job openings</Chip>
                <Chip to={href("write-for-us.dc.html")} dot="cm">Write for us</Chip>
                <Chip to={href("subject-matter-experts.dc.html")} dot="cm">SMEs</Chip>
                <Chip to={href("press-kit.dc.html")} dot="cm">Press kit</Chip>
                <Chip to={href("awards.dc.html")} dot="cm">Awards</Chip>
                <Chip to={href("brand.dc.html")} dot="cm">Brand</Chip>
                <Chip to={href("why-testlify.dc.html")} dot="cm">Why Testlify</Chip>
                <Chip to={href("how-testlify-works.dc.html")} dot="cm">How it works</Chip>
                <Chip to={href("product-tour.dc.html")} dot="cm">Product tour</Chip>
                <Chip to={href("responsible-hiring.dc.html")} dot="cm">Responsible hiring</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Product &amp; feature pages <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Feature landings + platform pages</div>
              <div className="sm-grp">
                <Chip to={href("whats-new.dc.html")} dot="cm">What&apos;s new</Chip>
                <Chip to={href("api.dc.html")} dot="cm">API</Chip>
                <Chip to={href("white-label.dc.html")} dot="cm">White label</Chip>
                <Chip to={href("reporting-analytics.dc.html")} dot="cm">Reporting &amp; analytics</Chip>
                <Chip to={href("reseller-plan.dc.html")} dot="cm">Reseller plan</Chip>
                <Chip to={href("multilingual-abilities.dc.html")} dot="cm">Multilingual</Chip>
                <Chip to={href("interview-as-a-service.dc.html")} dot="cm">Interview as a service</Chip>
                <Chip to={href("skills-assessment-platform.dc.html")} dot="cm">Skills assessment platform</Chip>
                <Chip to={href("skills-assessment-and-interviewing-platform.dc.html")} dot="cm">Assessment + interviewing</Chip>
                <Chip to={href("assess-and-develop-your-workplace-abilities.dc.html")} dot="cm">Workplace abilities</Chip>
                <Chip to={href("designed-for-high-completion-rate.dc.html")} dot="cm">High completion</Chip>
                <Chip to={href("unleash-your-brands-potential.dc.html")} dot="cm">Brand potential</Chip>
                <Chip to={href("discover-the-power-of-rapid-team-scaling.dc.html")} dot="cm">Rapid scaling</Chip>
                <Chip to={href("smart-personality-assessment.dc.html")} dot="cm">Smart personality</Chip>
                <Chip to={href("smart-personality-assessment-report.dc.html")} dot="cm">· report</Chip>
                <Chip to={href("getting-your-smart-personality-assessment-report.dc.html")} dot="cm">· get report</Chip>
                <Chip to={href("download-smart-personality-assessment-report.dc.html")} dot="cm">· download</Chip>
                <Chip to={href("system-compatibility-check-for-remote-asessments.dc.html")} dot="cm">System check</Chip>
                <Chip to={href("submit-rfp-for-skills-assessment-ai-interviews-proctoring.dc.html")} dot="cm">Submit RFP</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>HR tools <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· working calculators</span></h2>
              <div className="sm-sub">2 generators + 13 live calculators</div>
              <div className="sm-grp">
                <Chip to={href("ai-interview-question-generator.dc.html")} dot="cm">Interview Q generator</Chip>
                <Chip to={href("job-description-generator.dc.html")} dot="cm">JD generator</Chip>
                <Chip to={href("cost-per-hire-calculator.dc.html")} dot="cm">Cost per hire</Chip>
                <Chip to={href("attrition-rate-calculator.dc.html")} dot="cm">Attrition rate</Chip>
                <Chip to={href("free-employee-net-promoter-score-enps-calculator.dc.html")} dot="cm">eNPS</Chip>
                <Chip to={href("applicant-funnel-calculator.dc.html")} dot="cm">Applicant funnel</Chip>
                <Chip to={href("average-time-to-hire-calculator.dc.html")} dot="cm">Time to hire</Chip>
                <Chip to={href("cost-of-employee-turnover-calculator.dc.html")} dot="cm">Turnover cost</Chip>
                <Chip to={href("sourcing-channel-efficiency-calculator.dc.html")} dot="cm">Sourcing efficiency</Chip>
                <Chip to={href("remote-work-cost-savings-calculator.dc.html")} dot="cm">Remote savings</Chip>
                <Chip to={href("quality-of-hire-calculator.dc.html")} dot="cm">Quality of hire</Chip>
                <Chip to={href("interview-to-offer-ratio-calculator.dc.html")} dot="cm">Interview-to-offer</Chip>
                <Chip to={href("recruiting-conversion-rate-calculator.dc.html")} dot="cm">Conversion rate</Chip>
                <Chip to={href("job-offer-acceptance-rate-calculator.dc.html")} dot="cm">Offer acceptance</Chip>
                <Chip to={href("hiring-manager-satisfaction-calculator.dc.html")} dot="cm">HM satisfaction</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Case studies &amp; content <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Customer stories, blog posts, programs</div>
              <div className="sm-grp">
                <Chip to={href("case-study.dc.html")} dot="cm">Case studies hub</Chip>
                <Chip to={href("whire.dc.html")} dot="cm">Whire</Chip>
                <Chip to={href("udder.dc.html")} dot="cm">Udder</Chip>
                <Chip to={href("playroll.dc.html")} dot="cm">Playroll</Chip>
                <Chip to={href("comeet.dc.html")} dot="cm">Comeet</Chip>
                <Chip to={href("testlify-the-recruiter-who-never-sleeps.dc.html")} dot="cm">Blog · never sleeps</Chip>
                <Chip to={href("testlify-launches-conversational-ai-for-talent-assessment.dc.html")} dot="cm">Blog · conversational AI</Chip>
                <Chip to={href("knowledge-base.dc.html")} dot="a">Ebooks</Chip>
                <Chip to={href("podcast.dc.html")} dot="a">Podcast</Chip>
                <Chip to={href("referral-program.dc.html")} dot="cm">Referral program</Chip>
                <Chip to={href("partnership.dc.html")} dot="cm">Partnership program</Chip>
                <Chip to={href("integration-program.dc.html")} dot="cm">Integration program</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions · industries (14) <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Built from solution-industry-template</div>
              <div className="sm-grp">
                <Chip to={href("it-industry.dc.html")} dot="a">IT &amp; technology</Chip>
                <Chip to={href("logistics-supply-chain-industry.dc.html")} dot="a">Logistics &amp; supply chain</Chip>
                <Chip to={href("retail-industry.dc.html")} dot="a">Retail</Chip>
                <Chip to={href("recruitment-industry.dc.html")} dot="a">Recruitment</Chip>
                <Chip to={href("financial-industry.dc.html")} dot="a">Financial</Chip>
                <Chip to={href("saas-industry.dc.html")} dot="a">SaaS</Chip>
                <Chip to={href("energy-industry.dc.html")} dot="a">Energy</Chip>
                <Chip to={href("hospitality-industry.dc.html")} dot="a">Hospitality</Chip>
                <Chip to={href("health-care-industry.dc.html")} dot="a">Health care</Chip>
                <Chip to={href("bpo-industry.dc.html")} dot="a">BPO</Chip>
                <Chip to={href("edtech-industry.dc.html")} dot="a">Edtech</Chip>
                <Chip to={href("real-estate-industry.dc.html")} dot="a">Real estate</Chip>
                <Chip to={href("media-industry.dc.html")} dot="a">Media</Chip>
                <Chip to={href("blockchain-industry.dc.html")} dot="cm">Blockchain</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions · use cases (10) <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Built from solution-usecase-template</div>
              <div className="sm-grp">
                <Chip to={href("lateral-hiring.dc.html")} dot="a">Lateral hiring</Chip>
                <Chip to={href("diversity-and-inclusions.dc.html")} dot="a">Diversity &amp; inclusion</Chip>
                <Chip to={href("volume-hiring.dc.html")} dot="a">Volume hiring</Chip>
                <Chip to={href("remote-hiring.dc.html")} dot="a">Remote hiring</Chip>
                <Chip to={href("blue-collar-hiring.dc.html")} dot="a">Blue collar hiring</Chip>
                <Chip to={href("freelance-hiring.dc.html")} dot="a">Freelance hiring</Chip>
                <Chip to={href("campus-hiring.dc.html")} dot="a">Campus hiring</Chip>
                <Chip to={href("technical-hiring.dc.html")} dot="a">Technical hiring</Chip>
                <Chip to={href("sales-hiring.dc.html")} dot="a">Sales hiring</Chip>
                <Chip to={href("skills-validation.dc.html")} dot="a">Skills validation</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions · test types (11) <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Built from solution-testtype-template</div>
              <div className="sm-grp">
                <Chip to={href("role-specific-tests.dc.html")} dot="a">Role specific</Chip>
                <Chip to={href("language-tests.dc.html")} dot="a">Language</Chip>
                <Chip to={href("coding-tests.dc.html")} dot="a">Coding / Programming</Chip>
                <Chip to={href("software-skills-tests.dc.html")} dot="a">Software skills</Chip>
                <Chip to={href("psychometric-tests.dc.html")} dot="a">Personality &amp; culture</Chip>
                <Chip to={href("cognitive-ability-tests.dc.html")} dot="a">Cognitive ability</Chip>
                <Chip to={href("situational-judgment.dc.html")} dot="a">Situational judgment</Chip>
                <Chip to={href("cefr-test.dc.html")} dot="a">CEFR</Chip>
                <Chip to={href("typing-test.dc.html")} dot="a">Typing</Chip>
                <Chip to={href("engineering-skills.dc.html")} dot="a">Engineering</Chip>
                <Chip to={href("process-knowledge-tests.dc.html")} dot="a">Process knowledge</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Solutions · company size (5) <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· live-match</span></h2>
              <div className="sm-sub">Built from solution-company-template</div>
              <div className="sm-grp">
                <Chip to={href("for-startups.dc.html")} dot="a">For startups</Chip>
                <Chip to={href("small-medium-businesses.dc.html")} dot="a">SMBs</Chip>
                <Chip to={href("enterprise.dc.html")} dot="a">Enterprises</Chip>
                <Chip to={href("non-profits.dc.html")} dot="a">Non-profits</Chip>
                <Chip to={href("public-sector-talent-assessment-solution.dc.html")} dot="a">Public sector</Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Shared components <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· imported, not copied</span></h2>
              <div className="sm-sub">Reusable building blocks imported across pages via dc-import</div>
              <div className="sm-grp">
                <Chip to={href("component-site-header.dc.html")} dot="b">Site header <span style={{ color: "#A9999C" }}>(mega-menu)</span></Chip>
                <Chip to={href("component-site-footer.dc.html")} dot="b">Site footer</Chip>
                <Chip to={href("component-cta-button.dc.html")} dot="b">CTA button</Chip>
                <Chip to={href("component-faq.dc.html")} dot="b">FAQ accordion</Chip>
                <Chip to={href("component-security-section.dc.html")} dot="b">Security section</Chip>
                <Chip to={href("component-use-case-card.dc.html")} dot="b">Use-case card</Chip>
                <Chip to={href("component-cta-band.dc.html")} dot="b">CTA band</Chip>
                <Chip to={href("component-testimonials.dc.html")} dot="b">Testimonials</Chip>
                <Chip to={href("component-testimonials-cards.dc.html")} dot="b">Testimonials cards</Chip>
                <Chip to={href("component-recognition.dc.html")} dot="b">Recognition band</Chip>
                <Chip to={href("component-section-templates.dc.html")} dot="b">Section templates <span style={{ color: "#A9999C" }}>(dev reference)</span></Chip>
              </div>
            </div>

            <div className="sm-card">
              <h2>Page templates <span style={{ fontWeight: 500, fontSize: 12, color: "#A9999C" }}>· data-driven</span></h2>
              <div className="sm-sub">One template renders every instance in its family — edit data, not layout</div>
              <div className="sm-glabel">Product</div>
              <div className="sm-grp">
                <Chip to={href("product-features-detail.dc.html")} dot="r">Feature detail</Chip>
              </div>
              <div className="sm-glabel">Company</div>
              <div className="sm-grp">
                <Chip to={href("customer-success-stories-detail.dc.html")} dot="r">Case study</Chip>
              </div>
              <div className="sm-glabel">Solutions</div>
              <div className="sm-grp">
                <Chip to={href("solution-usecase-template.dc.html")} dot="r">Use-case</Chip>
                <Chip to={href("solution-industry-template.dc.html")} dot="r">Industry</Chip>
                <Chip to={href("solution-company-template.dc.html")} dot="r">Company size</Chip>
                <Chip to={href("solution-testtype-template.dc.html")} dot="r">Test type</Chip>
              </div>
              <div className="sm-glabel">Resources</div>
              <div className="sm-grp">
                <Chip to={href("resource-list-template.dc.html")} dot="r">List / index</Chip>
                <Chip to={href("resource-detail-template.dc.html")} dot="r">Article / detail</Chip>
                <Chip to={href("hiring-guides-detail.dc.html")} dot="a">Hiring guide detail</Chip>
                <Chip to={href("hr-tools-detail.dc.html")} dot="r">Tool / calculator</Chip>
                <Chip to={href("alternatives-detail.dc.html")} dot="a">Competitor</Chip>
                <Chip to={href("hr-glossary-detail.dc.html")} dot="a">Glossary term</Chip>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 26, background: "#fff", border: "1px solid #F0E2E3", borderRadius: 16, padding: "22px 24px", fontSize: 13, color: "#5A4B4E", lineHeight: 1.8 }}>
            <b style={{ color: "#1A1014" }}>Merges applied to the IA:</b>
            {" "}Testlify AI + platform hub · AI interviews + video interviewing · Science + Trust → &ldquo;Why it works&rdquo; · 27 feature pages → 1 Features page · About + leadership (13 → 1) · Trust subpages → tabs · 3 programs → Partners · ebooks + podcasts → Blog · contact + book-a-demo → 1.
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
