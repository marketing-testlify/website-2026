import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const title = 'Human resource management system';
const titleLower = title.charAt(0).toLowerCase() + title.slice(1);

const intro = [
  'A Human Resource Management System (HRMS) is a comprehensive software system that enables organisations to manage their human resources operations more effectively. It operates as a centralised platform for integrating diverse HR tasks, improving operations and increasing overall efficiency.',
  'An HRMS includes capabilities like employee information management, which allows for the secure storing and retrieval of staff data. It simplifies recruitment and onboarding by assisting organisations in quickly sourcing, screening, and hiring new personnel. Time and attendance tracking ensures that employee work hours are accurately recorded, assisting with payroll accuracy and compliance.',
  'The payroll administration section of the system automates salary computations, tax deductions, and direct deposits, eliminating errors and administrative workload. Employees can enrol in and administer company-provided benefits such as health insurance and retirement plans through benefits administration.',
  'Goal setting, regular feedback, and performance reviews are made easier with performance management systems, fostering employee growth and engagement. Learning and development elements aid in the identification of skill gaps and the delivery of training programmes.',
];
const introRest = intro.slice(1);

const benefits = [
  'A Human Resource Management System (HRMS) provides various advantages to businesses. It improves productivity and accuracy in operations such as personnel data management, payroll processing, and benefits administration by streamlining HR processes. Employee self-service portals enable employees to update information, access pay stubs, and request time off, thereby decreasing administrative burdens.',
  'HRMS improves compliance by automating labour rules, tax regulations, and reporting activities. It centralises employee data, improving data security and reducing errors. Employee growth and engagement are fostered through performance management tools that allow for fair evaluation and feedback.',
  'Analytics can help with strategic decision-making by providing insights into workforce patterns. Data consistency is ensured through integration with other systems such as payroll and accounting. Remote work assistance and mobile accessibility enable modern work environments.',
];

const features = [
  'Employee information management, recruitment and onboarding tools, time and attendance tracking, and payroll management are all components of a Human Resource Management System (HRMS). It includes modules for benefit administration, performance management, and learning and development. Employee self-service portals enable employees to access personal information and request time off.',
  'HRMS helps to ensure compliance by automating activities linked to labour laws and regulations. Document management guarantees the safe keeping of critical HR documents. Analytics provide information on worker trends and performance indicators.',
  'Data consistency is ensured through integration with other corporate systems. Mobile access and remote work support are designed to meet the needs of modern workplaces. Through complete solutions for personnel management, engagement, and compliance, an HRMS centralises HR operations, improves data accuracy, reduces administrative strain, and supports strategic decision-making.',
];

const vendorHeading = 'Top 10 Human resource (HR) software — 2025 pricing & comparison';

const vendors = [
  { name: 'Rippling', logo: 'https://testlify.com/wp-content/uploads/2023/08/rippling.webp', pricing: '$125/month per user', free: 'Yes', suitable: 'Small / medium businesses', paras: [
    'Rippling offers a consolidated hub for businesses to manage HR, IT, and Finance on a global scale. It unifies various workforce systems that are typically dispersed within a company, including payroll, expenses, benefits, and technology resources.',
    'Using Rippling, you can hire a new employee across the globe and swiftly establish their payroll, corporate card, computer setup, benefits, and integrate third-party apps like Slack and Microsoft 365 — in under 90 seconds.',
  ] },
  { name: 'BambooHR', logo: 'https://testlify.com/wp-content/uploads/2023/08/bamboohr.jpg', pricing: '$8.75/month per user', free: 'Yes', suitable: 'Small / medium businesses', paras: [
    'BambooHR ensures a unified and streamlined experience that eliminates inefficiencies. It automates crucial functions, tasks, and integrations, using a singular data source.',
    'It consolidates employee, payroll, time, and benefit data into a centralized platform, ensuring precise information, security, and effective coordination.',
  ] },
  { name: 'Paylocity', logo: 'https://testlify.com/wp-content/uploads/2023/08/paylocity-removebg-preview.jpg', pricing: 'Contact Paylocity for pricing', free: 'Yes', suitable: 'Small / medium businesses', paras: [
    'A comprehensive software platform that gives HR professionals a convenient way to handle daily responsibilities in payroll, benefits, talent, and workforce management, backed by a dedicated company culture.',
  ] },
  { name: 'ADP Workforce Now', logo: 'https://testlify.com/wp-content/uploads/2023/08/adp-workforce-now-removebg-preview.jpg', pricing: 'Contact ADP for pricing', free: 'Yes', suitable: 'Medium businesses', paras: [
    'A cloud HR suite built on a unified database, encompassing HR, Payroll, Benefits, Talent Management, Time & Labor, Learning, and Analytics — flexible enough to add features as your organization grows.',
  ] },
  { name: 'isolved', logo: 'https://testlify.com/wp-content/uploads/2023/08/isolved-svg.jpeg', pricing: 'Contact isolved for pricing', free: 'Yes', suitable: 'Small / medium businesses', paras: [
    'A leader in HCM technology serving People Heroes across HR, payroll, and benefits, disseminated to over 6 million employees and 168,000 employers across all 50 states.',
  ] },
  { name: 'Paycom', logo: 'https://testlify.com/wp-content/uploads/2023/08/paycom-removebg-preview.jpg', pricing: 'Contact Paycom for pricing', free: 'Yes', suitable: 'Small / medium businesses', paras: [
    'User-friendly HR and payroll technology empowering employees with direct access to their data, including Beti®, letting employees manage and correct their own payroll before submission.',
  ] },
  { name: 'Personio', logo: 'https://testlify.com/wp-content/uploads/2023/08/personio-svg.jpg', pricing: '€95/user/month', free: 'Yes', suitable: 'Medium / large businesses', paras: [
    'The People Operating System for SMEs of 10–2,000 employees, supporting over 8,000 clients across Europe with HR, recruitment, and payroll in one platform.',
  ] },
  { name: 'Workday HCM', logo: 'https://testlify.com/wp-content/uploads/2023/08/workday-hcm-removebg-preview.jpg', pricing: 'Contact Workday for pricing', free: 'Yes', suitable: 'Medium / large businesses', paras: [
    'A unified cloud system for workforce planning, talent management, and payroll, built on AI and machine learning, used by over 10,000 enterprises including more than half of the Fortune 500.',
  ] },
  { name: 'HROne', logo: 'https://testlify.com/wp-content/uploads/2023/08/uneecops-hrone-svg.jpg', pricing: 'Contact HROne for pricing', free: 'Yes', suitable: 'Small / medium businesses', paras: [
    'A forward-looking HCM suite that automates HR procedures and generates actionable insights, saving time for over 900 enterprises across 20+ industries.',
  ] },
  { name: 'PeopleForce', logo: 'https://testlify.com/wp-content/uploads/2023/10/PeopleForce-1024x769.png', pricing: 'Contact PeopleForce for pricing', free: 'Free 14-day trial', suitable: 'Small / medium businesses', paras: [
    'An all-in-one HR platform streamlining leave management, self-service, recruiting, and workflow automation — chosen by over 700 companies worldwide.',
  ] },
];

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.hct-wrap{max-width:1200px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.hct-hero{padding:44px 28px 30px;background:radial-gradient(900px 420px at 50% -18%,#FFF0EE 0%,rgba(255,240,238,0) 64%),#fff;}
.hct-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.hct-back svg{transition:transform .2s;}
.hct-back:hover svg{transform:translateX(-3px);}
.hct-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.hct-eyebrow b{color:#F23F44;font-weight:700;}
.hct-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;max-width:820px;}
.hct-sub{font-size:18px;line-height:1.6;color:#5A4B4E;margin:18px 0 0;max-width:720px;}
.hct-body{padding:36px 28px 40px;}
.hct-main{max-width:800px;margin:0 auto;min-width:0;}
.hct-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 18px;}
.hct-sec{scroll-margin-top:110px;margin-bottom:34px;}
.hct-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:0 0 16px;color:#1A1014;}
.hct-chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.hct-chk li{display:flex;align-items:flex-start;gap:14px;font-size:15px;line-height:1.62;color:#5A4B4E;}
.hct-chk svg{color:#F23F44;flex:none;margin-top:2px;}
.vrank{display:flex;flex-direction:column;gap:20px;}
.vcard{position:relative;background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:28px;box-shadow:0 14px 30px rgba(110,11,14,.05);transition:transform .25s,box-shadow .25s,border-color .25s;}
.vcard:hover{transform:translateY(-3px);box-shadow:0 18px 38px rgba(110,11,14,.09);border-color:#F4D2D3;}
.vlogowrap{width:56px;height:56px;border-radius:12px;border:1px solid #F0E2E3;overflow:hidden;flex:none;}
.vlogowrap img{width:100%;height:100%;object-fit:cover;}
.vhead{display:flex;align-items:center;gap:14px;margin-bottom:18px;}
.vhead h3{font-size:20px;font-weight:800;letter-spacing:-.4px;margin:0;color:#1A1014;}
.vmeta{display:flex;flex-wrap:wrap;margin-bottom:18px;border:1px solid #F0E2E3;border-radius:12px;overflow:hidden;}
.vpill{flex:1;min-width:120px;padding:10px 16px;border-right:1px solid #F0E2E3;background:#FBF3EE;font-size:13px;color:#1A1014;font-weight:600;}
.vpill:last-child{border-right:0;}
.vpill b{display:block;color:#8A7A7D;font-weight:700;text-transform:uppercase;font-size:10px;letter-spacing:.05em;margin-bottom:3px;}
.vcard p{font-size:14.5px;line-height:1.68;color:#5A4B4E;margin:0 0 10px;}
.vcard p:last-child{margin-bottom:0;}
.hct-more{border-top:1px solid #F0E2E3;padding-top:26px;}
.hct-more h3{font-size:20px;font-weight:800;letter-spacing:-.4px;margin:0 0 8px;}
.hct-more p{font-size:15px;line-height:1.6;color:#5A4B4E;margin:0 0 14px;}
.hct-link{display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:700;color:#F23F44;}
.hct-link svg{transition:transform .2s;}
.hct-link:hover svg{transform:translateX(3px);}
@media(max-width:600px){.vcard{grid-template-columns:1fr;}.vlogowrap{width:64px;height:64px;}}
@media(max-width:860px){.hct-h1{font-size:32px;letter-spacing:-1px;}}
h1,h2,h3,h4,.hct-h1,.hct-h2,.hct-eyebrow{text-wrap:balance;}p,li,.hct-p,.hct-sub{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Free HR tools — calculators, templates and category guides, ready to use."
        announcementCta="Browse tools"
        homeHref="/"
      />

      <section className="hct-hero">
        <div className="hct-wrap">
          <a className="hct-back reveal in" href="/hr-tools">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
            Back to HR tools
          </a>
          <p className="hct-eyebrow reveal">HR software guide<b>.</b></p>
          <h1 className="hct-h1 reveal">{title}</h1>
          <p className="hct-sub reveal">{intro[0]}</p>
        </div>
      </section>

      <div className="hct-body">
        <div className="hct-wrap">
          <div className="hct-main">
            {introRest.map((p, i) => (
              <p className="hct-p reveal" key={i}>{p}</p>
            ))}

            <div className="hct-sec" id="benefits">
              <h2 className="hct-h2 reveal">Benefits of {titleLower}</h2>
              <ul className="hct-chk reveal">
                {benefits.map((p, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hct-sec" id="features">
              <h2 className="hct-h2 reveal">Features of {titleLower}</h2>
              <ul className="hct-chk reveal">
                {features.map((p, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hct-sec" id="vendors">
              <h2 className="hct-h2 reveal">{vendorHeading}</h2>
              <div className="vrank">
                {vendors.map((v) => (
                  <div className="vcard reveal" key={v.name}>
                    <div className="vhead">
                      <div className="vlogowrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={v.logo} alt={v.name} loading="lazy" />
                      </div>
                      <h3>{v.name}</h3>
                    </div>
                    <div className="vmeta">
                      <span className="vpill"><b>Pricing</b>{v.pricing}</span>
                      <span className="vpill"><b>Free</b>{v.free}</span>
                      <span className="vpill"><b>Best for</b>{v.suitable}</span>
                    </div>
                    {v.paras.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="hct-more reveal">
              <h3>Looking for more HR tools?</h3>
              <p>Explore calculators, templates, and category guides across the full HR toolkit.</p>
              <a className="hct-link" href="/hr-tools">Browse all HR tools
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
