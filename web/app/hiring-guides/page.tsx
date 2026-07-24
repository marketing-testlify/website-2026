import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.hg-wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
@property --bang{syntax:"<angle>";initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.hg-eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;}
.hg-eyebrow b{color:#F23F44;font-weight:700;}
.hg-btn{display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:15px;padding:14px 28px;border-radius:13px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;cursor:pointer;border:none;font-family:inherit;}
.hg-hero{position:relative;overflow:hidden;padding:64px 28px 46px;background:radial-gradient(1000px 460px at 50% -12%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.hg-h1{font-size:52px;line-height:1.06;font-weight:800;letter-spacing:-1.6px;margin:0;}
.hg-h1 .acc{color:#F23F44;}
.hg-sub{font-size:18px;line-height:1.62;color:#5A4B4E;margin:20px auto 0;max-width:680px;}
.hg-herobtns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:30px;}
.hg-sec{padding:60px 28px 92px;background:#FBF3EE;}
.hg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.hg-card{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #F2E6E7;border-radius:18px;overflow:hidden;transition:box-shadow .3s,border-color .3s;}
.hg-card::before{content:"";position:absolute;inset:0;border-radius:18px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .3s;pointer-events:none;z-index:3;}
.hg-card:hover{border-color:#FBD0D1;box-shadow:0 20px 42px rgba(110,11,14,.10);}
.hg-card:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.hg-cimg{position:relative;aspect-ratio:16/9;overflow:hidden;background:#F3F7F9;}
.hg-cmask{position:absolute;width:13%;height:23%;background:#F3F7F9;z-index:2;pointer-events:none;}
.hg-cmask.tl{top:0;left:0;}
.hg-cmask.br{bottom:0;right:0;}
.hg-cimg img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .55s cubic-bezier(.2,.7,.3,1);}
.hg-card:hover .hg-cimg img{transform:scale(1.06);}
.hg-cbody{padding:22px 24px 24px;display:flex;flex-direction:column;flex:1;}
.hg-crole{font-size:18px;font-weight:700;letter-spacing:-.3px;line-height:1.3;margin:0 0 10px;color:#1A1014;}
.hg-cdesc{font-size:14px;line-height:1.58;color:#6C5A5D;margin:0 0 18px;}
.hg-cmore{margin-top:auto;font-size:14px;font-weight:600;color:#F23F44;display:inline-flex;align-items:center;gap:7px;transition:gap .2s;}
.hg-card:hover .hg-cmore{gap:11px;}
@media(max-width:1000px){.hg-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.hg-h1{font-size:36px;letter-spacing:-1px;}.hg-hero{padding:46px 22px 34px;}.hg-grid{grid-template-columns:1fr;}}
h1,h2,h3,h4,.hg-eyebrow,.hg-h1,.hg-crole{text-wrap:balance;}p,li,.hg-sub,.hg-cdesc{text-wrap:pretty;}/*om-balance-rule*/
`;

const U = 'https://testlify.com/wp-content/uploads/';

const RAW: [string, string, string][] = [
  ['Digital Marketing Manager', '2024/01/Hr-tool-1.png', 'The Digital Marketing Manager Hiring Guide offers resources such as job descriptions and interview questions to streamline your hiring process.'],
  ['Administrative Assistant', '2024/01/Hr-tool-2-1024x576.png', 'The Administrative Assistant Hiring Guide provides valuable tools and templates to simplify your hiring process, including job descriptions.'],
  ['Data Analyst', '2024/01/Hr-tool-3.png', 'The Data Analyst Hiring Guide equips you with essential resources like job descriptions and interview questions to streamline your hiring process.'],
  ['Data Scientist', '2024/01/Hr-tool-4-1024x576.png', 'The Data Scientist Hiring Guide offers job descriptions and interview questions. Find the perfect data scientist to leverage data-driven insights.'],
  ['Virtual Assistant', '2024/01/Hr-tool-5-1024x576.png', 'The Virtual Assistant Hiring Guide provides job descriptions and interview questions. Discover the perfect virtual assistant to enhance efficiency.'],
  ['Graphic Designer', '2024/01/Hr-tool-6-1024x576.png', 'The Graphic Designer Hiring Guide offers job descriptions and interview questions. Find the graphic designer to bring creativity and visual excellence.'],
  ['Social Media Manager', '2024/01/Hr-tool-7-1024x576.png', 'The Social Media Manager Hiring Guide offers job descriptions and interview questions. Find the social media manager to boost your online presence.'],
  ['Copywriter', '2024/01/Hr-tool-8-1024x576.png', 'The Copywriter Hiring Guide offers job descriptions and interview questions. Find the copywriter, who crafts compelling and persuasive content.'],
  ['Customer Service Representative', '2024/01/Hr-tool-10-1024x576.png', 'The Customer Service Representative Hiring Guide offers job descriptions and interview questions. Find a skilled customer service representative today.'],
  ['Financial Planner', '2024/01/Hr-tool-11-1024x576.png', 'The Financial Planner Hiring Guide offers job descriptions and interview questions. Find the best financial planner with proper skills.'],
  ['Product Manager', '2024/01/12.png', 'Looking for a Product Manager? Delve into our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Brand Ambassador', '2024/01/13.png', 'Searching for Brand Ambassadors? Explore our comprehensive hiring guide featuring job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Executive Assistant', '2024/01/14.png', 'In need of an Executive Assistant? Discover our hiring guide with job descriptions, top job boards, interview queries, and rejection letter templates.'],
  ['Financial Analyst', '2024/01/15.png', 'Looking for a Financial Analyst? Explore our hiring guide containing job descriptions, interview queries, and rejection letter templates.'],
  ['Financial Advisor', '2024/01/16.png', 'On the hunt for a Financial Advisor? Dive into our hiring guide featuring job descriptions, interview questions, and rejection letter templates.'],
  ['Receptionist', '2024/01/17.png', 'Looking for a Receptionist? Dive into our hiring guide, including job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Translator', '2024/01/18.png', 'In search of a Translator? Explore our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Pharmacy Technician', '2024/01/Hiring-guides-HR-tools-design.png', 'In need of a Pharmacy Technician? Our hiring guide features job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Bookkeeper', '2024/01/20.png', 'Looking for a Bookkeeper? Check out our hiring guide, complete with job descriptions, interview questions, and rejection letter templates.'],
  ['Tax Preparer', '2024/01/21.png', 'Looking for a Tax Preparer? Explore our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Medical Coder', '2024/01/22.png', 'In search of a Medical Coder? Dive into our hiring guide, featuring job descriptions, top job boards and rejection letter templates.'],
  ['Account Manager', '2024/01/23.png', 'On the hunt for an account manager? Explore our hiring guide, complete with job descriptions, interview questions, and rejection letter templates.'],
  ['Freight Forwarder', '2024/01/24.png', 'Seeking a Freight Forwarder? Look at our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Operations Manager', '2024/01/25.png', 'Looking for an Operations Manager? Get our hiring guide featuring job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Business Consultant', '2024/01/27.png', 'Hiring a Business Consultant? Explore our comprehensive hiring guide, featuring job descriptions, interview questions, and rejection letters.'],
  ['Account Executive', '2024/01/28.png', 'Seeking an Account Executive? Delve into our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Creative Director', '2024/01/29.png', 'On the lookout for a Creative Director? Discover our hiring guide with job descriptions, top job boards, and rejection letter templates.'],
  ['Marketing Manager', '2024/01/Hiring-guides-HR-tools-design-1.png', 'In search of a Marketing Manager/Director? Dive into our hiring guide, complete with job descriptions, interview questions, and rejection letter templates.'],
  ['Sales Representative', '2024/01/31.png', 'Looking for a Sales Representative? Explore our hiring guide, complete with job descriptions, interview questions, and rejection letters.'],
  ['Data Entry Clerk', '2024/01/32.png', 'Seeking a Data Entry Clerk? Delve into our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Event Planner', '2024/01/33.png', 'On the hunt for an Event Planner? Discover our hiring guide featuring job descriptions, top job boards, interview questions, and rejection letters.'],
  ['Personal Assistant', '2024/01/34.png', 'In need of a Personal Assistant? Dive into our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Database Administrator', '2024/01/35.png', 'Looking for a Database Administrator? Explore our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Loan Officer', '2024/01/36.png', 'On the hunt for a Loan Officer? Check our hiring guide featuring job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Medical Transcriptionist', '2024/01/37.png', 'In search of a Medical Transcriptionist? Dive into our hiring guide, featuring job descriptions, interview questions, and rejection letter templates.'],
  ['Technical Writer', '2024/01/38.png', 'Seeking a Technical Writer? Delve into our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Legal Assistant', '2024/01/39.png', 'Looking for a Legal Assistant? Explore our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Maintenance Technician', '2024/02/40.png', 'In need of a Maintenance Technician? Dive into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Security Officer', '2024/01/41.png', 'Seeking a Security Officer? Delve into our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Office Administrator', '2024/01/42.png', 'On the hunt for an Office Administrator? Discover our hiring guide featuring job descriptions, interview questions, and rejection letter templates.'],
  ['System Administrator', '2024/01/43.png', 'Looking for a System Administrator? Explore our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Office Manager', '2024/02/44.png', 'Seeking an Office Manager? Delve into our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Business Development Manager', '2024/01/46.png', 'In need of a Business Development Manager? Dive into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Event coordinator', '2024/01/47.png', 'Looking for an Event Coordinator? Explore our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Network Administrator', '2024/01/48.png', 'Seeking a Network Administrator? Delve into our hiring guide with job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['SEO Specialist', '2024/01/49.png', 'On the hunt for an SEO Specialist? Discover our hiring guide featuring job descriptions, top job boards, interview questions, and rejection letter templates.'],
  ['Talent Acquisition Specialist', '2024/01/50.png', 'In need of a Talent Acquisition Specialist? Dive into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Market Research Analyst', '2024/01/51.png', 'Looking for a Market Research Analyst? Explore our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Office Assistant', '2024/01/52.png', 'Seeking an Office Assistant? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Java Developer', '2024/02/54.png', 'Seeking a Java Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['TypeScript Developer', '2024/02/55.png', 'Looking for a TypeScript Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Django Developer', '2024/02/56.png', 'Seeking a Django Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['SQL Developer', '2024/02/58.png', 'Seeking an SQL Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['React Developer', '2024/02/59.png', 'Looking for a React Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['PHP Developer', '2024/02/60.png', 'Looking for a PHP Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Node.js Developer', '2024/02/61.png', 'Looking for a Node.js Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['React Native Developer', '2024/02/62.png', 'Looking for a React Native Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Python Developer', '2024/02/63.png', 'Looking for a Python Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Back-End Developer', '2024/02/64.png', 'Looking for a Back-End Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Mobile Developer', '2024/02/65.png', 'Looking for a Mobile Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['DevOps Engineer', '2024/02/66.png', 'Looking for a DevOps Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Machine Learning Engineer', '2024/02/67.png', 'Looking for a Machine Learning Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Security Engineer', '2024/02/68.png', 'Looking for a Security Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Web Developer', '2024/02/72.png', 'Looking for a Web Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['User Interface Designer', '2024/02/Hiring-guides-HR-tools-design.png', 'Looking for a User Interface Designer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['User Experience Designer', '2024/02/parkeamo.png', 'Looking for a User Experience Designer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Back-End Engineer', '2024/02/71-png.png', 'Looking for a Back-end engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Front-End Engineer', '2024/02/75.png', 'Looking for a Front-End Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Full-Stack Developer', '2024/02/89.png', 'Looking for a Full-Stack Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Content Management System Developer', '2024/02/79.png', 'Looking for a Content Management System Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Ecommerce Developer', '2024/02/Hiring-guides-HR-tools-design-2.png', 'Looking for an Ecommerce Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Business Intelligence Analyst', '2024/02/76.png', 'Looking for a Business Intelligence Analyst? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Data Engineer', '2024/02/77.png', 'Looking for a Data Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Network Security Engineer', '2024/02/Hiring-guides-HR-tools-design-1-1.png', 'Looking for a Network Security Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Cybersecurity Analyst', '2024/02/88.png', 'Looking for a Cybersecurity Analyst? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Penetration Tester', '2024/02/899.png', 'Looking for a Penetration Tester? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Security Architect', '2024/02/90.png', 'Looking for a Security Architect? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Incident Responder', '2024/02/81.png', 'Looking for an Incident Responder? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Cloud Engineer', '2024/02/71.png', 'Looking for a Cloud Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['AWS Solutions Architect', '2024/02/AWS.png', 'Looking for an AWS Solutions Architect? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Wireless Network Engineer', '2024/02/83.png', 'Looking for a Wireless Network Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Blockchain Developer', '2024/02/84.png', 'Looking for a Blockchain Developer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['IT Support Specialist', '2024/02/85.png', 'Looking for an IT Support Specialist? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['QA Engineer', '2024/02/86.png', 'Looking for a QA Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Natural Language Processing Engineer', '2024/02/87.png', 'Looking for a Natural Language Processing Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
  ['Big Data Engineer', '2024/02/88-1.png', 'Looking for a Big Data Engineer? Delve into our hiring guide with job descriptions, interview questions, and rejection letter templates.'],
];

const SLUGS: Record<string, string> = {
  "Digital Marketing Manager": "digital-marketing-manager-hiring-guide",
  "Administrative Assistant": "administrative-assistant-hiring-guide",
  "Data Analyst": "data-analyst-hiring-guide",
  "Data Scientist": "data-scientist-hiring-guide",
  "Virtual Assistant": "virtual-assistant-hiring-guide",
  "Graphic Designer": "graphic-designer-hiring-guide",
  "Social Media Manager": "social-media-manager-hiring-guide",
  "Copywriter": "copywriter-hiring-guide",
  "Customer Service Representative": "customer-service-representative-hiring-guide",
  "Financial Planner": "financial-planner-hiring-guide",
  "Product Manager": "product-manager-hiring-guide",
  "Brand Ambassador": "brand-ambassador-hiring-guide",
  "Executive Assistant": "executive-assistant-hiring-guide",
  "Financial Analyst": "financial-analyst-hiring-guide",
  "Financial Advisor": "financial-advisor-hiring-guide",
  "Receptionist": "receptionist-hiring-guide",
  "Translator": "translator-hiring-guide",
  "Pharmacy Technician": "pharmacy-technician-hiring-guide",
  "Bookkeeper": "bookkeeper-hiring-guide",
  "Tax Preparer": "tax-preparer-hiring-guide",
  "Medical Coder": "medical-coder-hiring-guide",
  "Account Manager": "account-manager-hiring-guide",
  "Freight Forwarder": "freight-forwarder-hiring-guide",
  "Operations Manager": "operations-manager-hiring-guide",
  "Business Consultant": "business-consultant-hiring-guide",
  "Account Executive": "account-executive-hiring-guide",
  "Creative Director": "creative-director-hiring-guide",
  "Marketing Manager": "marketing-manager-hiring-guide",
  "Sales Representative": "sales-representative-hiring-guide",
  "Data Entry Clerk": "data-entry-clerk-hiring-guide",
  "Event Planner": "event-planner-hiring-guide",
  "Personal Assistant": "personal-assistant-hiring-guide",
  "Database Administrator": "database-administrator-hiring-guide",
  "Loan Officer": "loan-officer-hiring-guide",
  "Medical Transcriptionist": "medical-transcriptionist-hiring-guide",
  "Technical Writer": "technical-writer-hiring-guide",
  "Legal Assistant": "legal-assistant-hiring-guide",
  "Maintenance Technician": "maintenance-technician-hiring-guide",
  "Security Officer": "security-officer-hiring-guide",
  "Office Administrator": "office-administrator-hiring-guide",
  "System Administrator": "system-administrator-hiring-guide",
  "Office Manager": "office-manager-hiring-guide",
  "Business Development Manager": "business-development-manager-guide",
  "Event coordinator": "event-coordinator-hiring-guide",
  "Network Administrator": "network-administrator-hiring-guide",
  "SEO Specialist": "seo-specialist-hiring-guide",
  "Talent Acquisition Specialist": "talent-acquisition-specialist-hiring",
  "Market Research Analyst": "market-research-analyst-hiring-guide",
  "Office Assistant": "office-assistant-hiring-guide",
  "Java Developer": "java-developer-hiring-guide",
  "TypeScript Developer": "typescript-developer-hiring-guide",
  "Django Developer": "django-developer-hiring-guide",
  "SQL Developer": "sql-developer-hiring-guide",
  "React Developer": "react-developer-hiring-guide",
  "PHP Developer": "php-developer-hiring-guide",
  "Node.js Developer": "node-js-hiring-guide",
  "React Native Developer": "react-native-developer-hiring-guide",
  "Python Developer": "python-developer-hiring-guide",
  "Back-End Developer": "back-end-developer-hiring-guide",
  "Mobile Developer": "mobile-developer-hiring-guide",
  "DevOps Engineer": "devops-engineer-hiring-guide",
  "Security Engineer": "security-engineer-hiring-guide",
  "Web Developer": "web-developer-hiring-guide",
  "User Interface Designer": "user-interface-designer-hiring-guide",
  "User Experience Designer": "user-experience-designer-hiring-guide",
  "Back-End Engineer": "back-end-engineer-hiring-guide",
  "Front-End Engineer": "front-end-engineer-hiring-guide",
  "Full-Stack Developer": "full-stack-developer-hiring-guide",
  "Content Management System Developer": "content-management-system-developer",
  "Ecommerce Developer": "ecommerce-developer-hiring-guide",
  "Business Intelligence Analyst": "business-intelligence-analyst-hiring",
  "Data Engineer": "data-engineer-hiring-guide",
  "Network Security Engineer": "network-security-engineer-hiring-guide",
  "Cybersecurity Analyst": "cybersecurity-analyst-hiring-guide",
  "Penetration Tester": "penetration-tester-hiring-guide",
  "Security Architect": "security-architect-hiring-guide",
  "Incident Responder": "incident-responder-hiring-guide",
  "Cloud Engineer": "cloud-engineer-hiring-guide",
  "AWS Solutions Architect": "aws-solutions-architect-hiring-guide",
  "Wireless Network Engineer": "wireless-network-engineer-hiring-guide",
  "Blockchain Developer": "blockchain-developer-hiring-guide",
  "IT Support Specialist": "it-support-specialist-hiring-guide",
  "QA Engineer": "qa-engineer-hiring-guide",
  "Natural Language Processing Engineer": "natural-language-processing-engineer-hiring-guide",
  "Big Data Engineer": "big-data-engineer-hiring-guide",
  "Machine Learning Engineer": "machine-learning-engineer-hiring-guide",
};

const GUIDES = RAW.map(([role, img, desc]) => ({ role, img: U + img, desc })).sort((a, b) =>
  a.role.localeCompare(b.role, 'en', { sensitivity: 'base' })
);

export default function HiringGuidesPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader
        announcement="Free hiring guides — job descriptions, interview questions & skills to test for 90+ roles"
        announcementCta="Browse guides"
      />

      <section className="hg-hero">
        <div className="hg-wrap" style={{ maxWidth: '840px' }}>
          <p className="hg-eyebrow reveal">
            Hiring guides<b>.</b>
          </p>
          <h1 className="hg-h1 reveal" style={{ transitionDelay: '.04s' }}>
            Role-specific <span className="acc">hiring guides</span> for recruiters
          </h1>
          <p className="hg-sub reveal" style={{ transitionDelay: '.08s' }}>
            Dive into our comprehensive hiring guides tailored for recruiters, each meticulously crafted to
            streamline the hiring process for diverse roles. Elevate your recruitment strategy with expert insights,
            role-specific tips, and best practices to ensure successful candidate acquisition in any industry.
          </p>
          <div className="hg-herobtns reveal" style={{ transitionDelay: '.12s' }}>
            <CtaButton label="Try for free" href="/pricing" variant="primary" size="md" icon="arrow" magnetic />
            <CtaButton label="Book a demo" href="/demo" variant="secondary" size="md" icon="play" />
          </div>
        </div>
      </section>

      <section className="hg-sec">
        <div className="hg-wrap">
          <div className="hg-grid reveal">
            {GUIDES.map((g) => (
              <a className="hg-card" href={`/hiring-guides/${SLUGS[g.role]}`} key={g.role}>
                <div className="hg-cimg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.img} alt={`${g.role} hiring guide`} loading="lazy" />
                  <span className="hg-cmask tl"></span>
                  <span className="hg-cmask br"></span>
                </div>
                <div className="hg-cbody">
                  <h3 className="hg-crole">{g.role}</h3>
                  <p className="hg-cdesc">{g.desc}</p>
                  <span className="hg-cmore">
                    Read more <span aria-hidden="true">→</span>
                  </span>
                </div>
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
