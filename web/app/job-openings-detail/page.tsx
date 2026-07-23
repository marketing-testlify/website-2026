import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const pd = {
  title: 'Integration Platform Reliability Engineer',
  employmentType: 'Full Time',
  location: 'Hybrid',
  workingHours: 'Standard business hours (occasional after-hours releases)',
  responsibilitiesLabel: 'Implementation management / change management',
  responsibilities: [
    'Assist users and Integration Specialists in the review of business requirements.',
    'Coordinate work with various functional staff to develop user acceptance test objectives, test plans and test scripts to verify and ensure that business requirements are achieved.',
    'Perform system tests and user acceptance tests of IT system changes as agreed with various functional staff in test plans.',
    'Maintain technical analysis documents, technical designs, test scripts and test results to verify Integration Platform requirements are understood and addressed completely, correctly, and consistently.',
    'Execute unit and integrated system test reviews as appropriate with IT staff.',
    'Apply established mechanisms for tracking business requirements throughout the life of IT projects.',
    'Work with functional and IT staff to apply established change management procedures for IT projects to control scope.',
    'Facilitate documentation and approval of requirements changes of either a business or technical nature during IT projects.',
    'Perform production implementations, some of which may require after-hour activities to complete.',
  ],
  hasOtherResp: true,
  otherResponsibilities: [
    'Timely and accurate time and status reporting.',
    'Adherence to security policies.',
    'Other duties as assigned.',
  ],
  requirementsLabel: 'Required skills',
  requirements: [
    '3-5 years experience maintaining an EDI / integration platform such as Axway B2Bi Express, MuleSoft, Sterling Integration Suite or similar (cloud or on-premise), including upgrades and patching.',
    'Experience with scripting languages and techniques (Python, *nix shell, PowerShell).',
    'Operator-level experience with either RedHat or SUSE Enterprise Linux.',
    'Operator-level experience with Windows Server.',
    'Understanding of networking concepts such as routing, DMZs and common network appliances (firewalls, load balancers).',
    'Demonstrable troubleshooting skills involving networking, server and application concepts.',
    'Knowledge of common file/data exchange protocols (FTP, SFTP, REST, web services).',
    'Knowledge of XML and JSON file types.',
    'Strong communication, collaboration, facilitation and negotiation skills.',
    'Ability to manage in a fast-paced environment and meet deadlines with minimal supervision.',
  ],
  provideLabel: 'Beneficial skills',
  provide: [
    'Knowledge of Axway products (B2Bi Express, Transfer CFT, Sentinel, API Manager/Amplify).',
    'Understanding of various file types and usage (X12, EDIFACT, flat files).',
    'EDI/integration translation and implementation background.',
    'EDI document background: 810, 850, 856, 210, 214.',
    'Knowledge of EDI-specific communication methods (Odette FTP, AS2).',
    'Experience automating tasks, plus basic knowledge of containerization and cloud computing (AWS or Azure preferred).',
    'Working knowledge of Jira and Confluence.',
  ],
  hasCompetencies: true,
  competencies: ['Results orientation', 'Agility', 'Initiative', 'Influence', 'Customer focus', 'Learn quickly', 'Recognize implications', 'Apply knowledge'],
  benefits: ['Flexible Working Style', 'Diversity and Inclusion', 'Learn And Grow', 'Balanced Working Life', 'Flexible work hours', 'Health Insurance'],
  equalOpportunity:
    "Testlify is deeply committed to creating a workplace and global community where inclusion is not only valued but prioritized. We're proud to be an equal-opportunity employer, seeking to create a welcoming and diverse environment. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, gender identity or expression, family status, marital status, sexual orientation, national origin, genetics, neurodiversity, disability, age, or any other non-merit-based or legally protected grounds.",
};

const css = `
.jdcrumb{font-size:13.5px;color:#8A7A7D;margin-bottom:22px;}
.jdcrumb a{color:#8A7A7D;}
.jdcrumb a:hover{color:#F23F44;}
.jdhero{padding:36px 28px 40px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;}
.jdmeta{display:flex;gap:28px;flex-wrap:wrap;margin-top:20px;}
.jdtag{display:flex;flex-direction:column;gap:4px;}
.jdtag-l{font-size:11.5px;font-weight:600;color:#A9999C;text-transform:uppercase;letter-spacing:.06em;}
.jdtag-v{font-size:14.5px;font-weight:700;color:#1A1014;}
.jdsplit{display:grid;grid-template-columns:1.4fr 1fr;gap:48px;align-items:start;}
.jdcard{background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:26px 28px;}
.jdcard + .jdcard{margin-top:20px;}
.jdcard h2{font-size:19px;font-weight:700;color:#1A1014;margin:0 0 14px;}
.jdform{position:sticky;top:24px;}
.jdfield{display:flex;flex-direction:column;gap:6px;margin-bottom:16px;}
.jdfield label{font-size:13px;font-weight:600;color:#5A4B4E;}
.jdinput{font-family:inherit;font-size:14.5px;padding:11px 14px;border:1.5px solid #EADDDE;border-radius:10px;color:#1A1014;background:#fff;}
.jdinput:focus{outline:none;border-color:#F23F44;}
.jdrow2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.jdupload{border:1.5px dashed #EADDDE;border-radius:12px;padding:22px;text-align:center;font-size:13.5px;color:#8A7A7D;}
.jdcard .chk li>svg{color:#1FA463;}
@media(max-width:920px){ .jdsplit{grid-template-columns:1fr;} .jdform{position:static;} .jdrow2{grid-template-columns:1fr;} }
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"></path>
  </svg>
);

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="We're hiring across product, engineering and GTM"
        announcementCta="See all roles"
        homeHref="/"
      />

      <section className="jdhero">
        <div className="wrap" style={{ maxWidth: '1100px' }}>
          <p className="jdcrumb reveal">
            <a href="/">Home</a> / <a href="/job-openings">Job openings</a> / {pd.title}
          </p>
          <h1 className="h1 reveal" style={{ fontSize: '44px', transitionDelay: '.04s' }}>
            {pd.title}
          </h1>
          <div className="jdmeta reveal" style={{ transitionDelay: '.08s' }}>
            <div className="jdtag">
              <span className="jdtag-l">Employment type</span>
              <span className="jdtag-v">{pd.employmentType}</span>
            </div>
            <div className="jdtag">
              <span className="jdtag-l">Location</span>
              <span className="jdtag-v">{pd.location}</span>
            </div>
            <div className="jdtag">
              <span className="jdtag-l">Working hours</span>
              <span className="jdtag-v">{pd.workingHours}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: '56px' }}>
        <div className="wrap" style={{ maxWidth: '1100px' }}>
          <div className="jdsplit">
            <div>
              <div className="jdcard reveal">
                <h2>{pd.responsibilitiesLabel}</h2>
                <ul className="chk">
                  {pd.responsibilities.map((item, i) => (
                    <li key={i}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {pd.hasOtherResp && (
                <div className="jdcard reveal">
                  <h2>Other responsibilities</h2>
                  <ul className="chk">
                    {pd.otherResponsibilities.map((item, i) => (
                      <li key={i}>
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="jdcard reveal" style={{ transitionDelay: '.04s' }}>
                <h2>{pd.requirementsLabel}</h2>
                <ul className="chk">
                  {pd.requirements.map((item, i) => (
                    <li key={i}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="jdcard reveal" style={{ transitionDelay: '.08s' }}>
                <h2>{pd.provideLabel}</h2>
                <ul className="chk">
                  {pd.provide.map((item, i) => (
                    <li key={i}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {pd.hasCompetencies && (
                <div className="jdcard reveal" style={{ transitionDelay: '.1s' }}>
                  <h2>Competencies required</h2>
                  <div className="jmeta" style={{ marginTop: 0 }}>
                    {pd.competencies.map((c, i) => (
                      <span className="jtag" key={i}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="jdcard reveal" style={{ transitionDelay: '.12s' }}>
                <h2>Benefits</h2>
                <div className="jmeta" style={{ marginTop: 0 }}>
                  {pd.benefits.map((b, i) => (
                    <span className="jtag" key={i}>
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="jdcard reveal" style={{ transitionDelay: '.16s' }}>
                <h2>Equal opportunities statement</h2>
                <p className="body" style={{ fontSize: '14.5px' }}>
                  {pd.equalOpportunity}
                </p>
              </div>
            </div>

            <div className="jdform reveal" style={{ transitionDelay: '.06s' }}>
              <div className="jdcard">
                <h2>Apply now</h2>
                <div className="jdrow2">
                  <div className="jdfield">
                    <label>First name *</label>
                    <input className="jdinput" type="text" placeholder="Jane" />
                  </div>
                  <div className="jdfield">
                    <label>Last name *</label>
                    <input className="jdinput" type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="jdfield">
                  <label>Email *</label>
                  <input className="jdinput" type="email" placeholder="jane@email.com" />
                </div>
                <div className="jdfield">
                  <label>Phone number *</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <select
                      className="jdinput"
                      defaultValue="+91"
                      style={{
                        flex: '0 0 84px',
                        paddingRight: '30px',
                        paddingLeft: '10px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        backgroundImage:
                          "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%238A7A7D%22 stroke-width=%222.4%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 8px center',
                        backgroundSize: '14px',
                      }}
                    >
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+61</option>
                      <option>+971</option>
                      <option>+65</option>
                    </select>
                    <input className="jdinput" style={{ flex: 1 }} type="tel" placeholder="555 000 0000" />
                  </div>
                </div>
                <div className="jdrow2">
                  <div className="jdfield">
                    <label>Current CTC *</label>
                    <input className="jdinput" type="text" placeholder="₹0" />
                  </div>
                  <div className="jdfield">
                    <label>Expected CTC *</label>
                    <input className="jdinput" type="text" placeholder="₹0" />
                  </div>
                </div>
                <div className="jdfield">
                  <label>Attachments *</label>
                  <div className="jdupload">
                    Drag &amp; drop your resume, or{' '}
                    <a className="lnk" href="#">
                      choose a file
                    </a>
                  </div>
                </div>
                <CtaButton label="Submit your application" href="#" variant="primary" size="md" icon="none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
