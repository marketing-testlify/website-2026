import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const role = 'Account Executive';
const roleArticle = 'an account executive';
const intro =
  "Our account executive hiring guide is a comprehensive resource designed to assist businesses in finding talented professionals who can drive sales, build strong client relationships, and contribute to revenue growth. Inside this guide, you’ll discover meticulously crafted job descriptions aimed at attracting candidates with exceptional sales skills, a deep understanding of the industry, and a track record of meeting or exceeding targets.";

const howtoLead = [
  'To hire an account executive, define job requirements, conduct interviews, assess skills, and offer competitive compensation.',
  'Hiring the right account executive ensures effective sales, client retention, and revenue growth. Challenges include finding candidates with the right skills and cultural fit. Our hiring guide offers strategies to overcome these obstacles and build a successful sales team.',
];

const steps = [
  'Craft a detailed job description outlining responsibilities, required skills (sales, communication), and expectations (meeting targets, and fostering client relationships).',
  'Showcase your vibrant company culture, unique perks (flexible hours, performance bonuses), and exciting opportunities for growth and impact in the role.',
  'Utilize top job boards (LinkedIn, Indeed), professional networks (sales forums, industry events), and employee referrals to attract qualified candidates.',
  'Conduct initial phone screens and skills assessments to identify candidates with relevant experience and capabilities in account management and sales strategies.',
  'Pose tailored questions during interviews to assess candidates’ sales acumen, client relationship-building skills, and cultural alignment with your team.',
  'Evaluate candidates based on their track record in achieving sales targets, experience in the industry, and their performance during interviews.',
  'Offer competitive compensation aligned with market rates, supplemented by additional benefits such as healthcare coverage and professional development opportunities.',
  'Provide comprehensive training and ongoing support to ensure a smooth transition and enable new hires to excel in their roles from day one.',
];

const protips = [
  { title: 'Look for proven sales success:', body: 'Seek candidates with a track record of exceeding sales targets and fostering long-term client relationships. Ask for specific examples of deals closed and revenue generated.' },
  { title: 'Assess communication skills:', body: 'Account executives need strong verbal and written communication abilities. Evaluate candidates through role-playing scenarios or written assignments to gauge how they articulate ideas and negotiate.' },
  { title: 'Prioritize relationship building:', body: 'Emphasize building rapport with clients. Look for candidates who demonstrate empathy, active listening, and a consultative approach to sales.' },
  { title: 'Test strategic thinking:', body: 'Present candidates with hypothetical scenarios and ask how they would approach them, evaluating their problem-solving skills and strategic thinking.' },
  { title: 'Utilize a job role assessment test:', body: 'Implement a customized account executive assessment tailored to the role — including scenarios simulating client interactions, sales pitches, and strategic planning exercises.' },
];

const jd = {
  title: 'Account Executive',
  location: '[City, State]',
  overview:
    'We are looking for an Account Executive to play a crucial role in business growth. As an Account Executive, you will be responsible for acquiring and managing client accounts, building strong relationships, and proposing tailored solutions. Your efforts will contribute to our continued success.',
  requirements: [
    'Proven experience in sales or account management.',
    'Strong communication and negotiation skills.',
    'Ability to understand and articulate complex solutions.',
    'Excellent problem-solving and analytical skills.',
    'Self-motivated and driven to meet and exceed sales targets.',
  ],
  responsibilities: [
    'Achieve and exceed monthly and quarterly sales targets.',
    'Identify and acquire new client accounts.',
    'Build and maintain strong relationships with existing clients.',
    'Collaborate with the team to provide feedback for improvements.',
    'Stay updated on industry trends and competitors.',
  ],
  benefits: [
    'Competitive salary and commission structure.',
    'Opportunity to work with a dynamic and innovative team.',
    'Access to professional development courses.',
    'Flexible work environment.',
    'Healthcare and retirement benefits.',
  ],
};

const jobboards = [
  { name: 'LinkedIn', desc: 'Connect with skilled account executives globally through targeted job postings and professional networking tailored to the sales and account management industry.' },
  { name: 'Indeed', desc: 'Post listings to access a diverse pool of candidates and use advanced search filters for efficient sourcing within the sales and client management sector.' },
  { name: 'Glassdoor', desc: 'Attract experienced account executives by showcasing your commitment to client satisfaction and revenue growth, with employer-branding tools for visibility.' },
  { name: 'Monster', desc: 'Find qualified candidates through a vast database and customizable job-posting options tailored to your specific sales and account management needs.' },
  { name: 'CareerBuilder', desc: 'Reach top-tier talent with advanced search capabilities and AI-driven candidate matching specialized for the sales and client-services field.' },
  { name: 'Salesforce Job Search', desc: 'Source candidates efficiently with targeted job postings on a platform dedicated to sales professionals for optimal recruitment outcomes.' },
];

const social = [
  { n: 1, text: '“We’re hiring an Account Executive! Are you a sales superstar? Join our team and drive success with us. Apply now! #AccountExecutive #SalesJobs”' },
  { n: 2, text: '“Calling all Account Executives! We want YOU to be part of our dynamic team. If you’re passionate about sales and exceeding targets, apply today! #Hiring #SalesCareer”' },
  { n: 3, text: '“Ready to elevate your career? We’re looking for an Account Executive to join our ranks. Competitive package and growth opportunities await! Apply now. #JobOpportunity #SalesRole”' },
  { n: 4, text: '“Join us as an Account Executive and be the driving force behind our sales success. If you’re a solution-oriented professional, we want to hear from you! Apply today. #SalesJobs #NowHiring”' },
  { n: 5, text: '“Shape the future of sales with us! We’re hiring an Account Executive. If you’re motivated, excel in client relationships, and seek a rewarding career, apply now! #SalesCareer #JobOpening”' },
];

const emails = [
  {
    n: 1,
    subject: 'Exciting Opportunity: Account Executive Position',
    body: "Dear [Candidate’s Name],\n\nI hope this email finds you well. We are thrilled to announce an exciting opportunity to join our team as an Account Executive. Your skills and experience have caught our attention, and we believe you could be a valuable addition to our organization.\n\nAs an Account Executive with us, you will play a crucial role in acquiring and managing client accounts, building strong relationships, and driving revenue growth. You will have the chance to work on diverse accounts and make a tangible impact on our success.\n\nIf you are a driven sales professional with strong communication skills and a passion for building client relationships, we encourage you to apply. Please click the link below to apply and find more details about the role.\n\n[Link to Application]\n\nThank you for considering this opportunity, and we look forward to hearing from you soon.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Name]",
  },
  {
    n: 2,
    subject: 'Interview Invitation: Account Executive Position',
    body: "Dear [Candidate’s Name],\n\nI hope you are doing well. We wanted to express our appreciation for your application for the Account Executive position at [Company Name]. Your qualifications and experience have impressed us, and we would like to invite you for an interview to discuss your candidacy further.\n\nDuring the interview, we will explore your sales approach, client relationship management, and how your experience aligns with our company’s values and goals.\n\nThe interview will be held on [Date] at [Time], via [Zoom/In-person] at our [Location]. Please confirm your availability by [Confirmation Deadline], and we will send the details.\n\nWe look forward to meeting you and exploring the possibility of you joining our team.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Name]",
  },
  {
    n: 3,
    subject: 'Job Offer: Account Executive Position',
    body: 'Dear [Candidate’s Name],\n\nI am delighted to extend an offer to you for the position of Account Executive at [Company Name]. Your experience, skills, and enthusiasm for driving sales have impressed our team, and we believe you are an excellent fit for this role.\n\nHere are some key details about the offer:\n\n- Position: Account Executive\n- Start Date: [Start Date]\n- Salary: [Salary Offer]\n- Benefits: [List of Benefits]\n- Location: [Work Location]\n\nPlease review the attached formal offer letter for full details on your compensation, benefits, and terms of employment. To accept this offer, please sign and return the letter by [Offer Acceptance Deadline].\n\nWe are excited about the prospect of you joining our team and look forward to your positive response.\n\nBest regards,\n[Your Name]\n[Your Title]\n[Company Name]',
  },
];

const tests = [
  { name: 'Sales aptitude test', url: '/library-tests' },
  { name: 'Customer relationship management test', url: '/library-tests' },
  { name: 'B2B telesales test', url: '/library-tests' },
  { name: 'Negotiation test', url: '/library-tests' },
  { name: 'Communication test', url: '/library-tests' },
  { name: 'Product management test', url: '/library-tests' },
  { name: 'Time management test', url: '/library-tests' },
];

const genq = [
  { q: 'Can you describe your approach to identifying and acquiring new clients?', why: 'This assesses the candidate’s sales strategy and their ability to generate new business — a critical aspect of the role.', listen: 'Their methods for lead generation, understanding of target markets, and ability to initiate and nurture client relationships.' },
  { q: 'How do you handle objections and rejections in a sales context?', why: 'It evaluates resilience and problem-solving skills, since dealing with objections and rejection is common in sales.', listen: 'Effective objection handling, turning objections into opportunities, and maintaining a positive attitude through challenges.' },
  { q: 'Can you share an example of a successful deal you closed and the strategies you used?', why: 'It provides insight into the candidate’s sales track record and their ability to close deals — a key performance indicator.', listen: 'Specifics of the deal, the candidate’s role, negotiation tactics, and how they secured the agreement.' },
  { q: 'How do you prioritize and manage your sales pipeline and daily tasks?', why: 'It assesses organizational and time-management skills, crucial for managing multiple accounts and leads.', listen: 'Their approach to prioritization, use of CRM systems, and how they ensure no opportunities slip through the cracks.' },
  { q: 'Describe a challenging client or sales scenario. How did you handle it, and what was the outcome?', why: 'This evaluates the ability to handle difficult situations and maintain relationships under pressure.', listen: 'Effective problem-solving, communication skills, and commitment to a positive client experience.' },
];

const techq = [
  { q: 'Which CRM software have you used, and how did you leverage it?', why: 'Account executives rely on CRM tools for managing client information, tracking leads, and forecasting sales.', listen: 'Specific platforms (Salesforce, HubSpot) and how they used them for lead management, communication, and reporting.' },
  { q: 'Can you describe your experience with sales analytics or reporting tools?', why: 'Analytics tools help track performance and make data-driven decisions.', listen: 'Tools such as Tableau or Google Analytics, and how they monitored metrics, spotted trends, and adjusted strategy.' },
  { q: 'Have you worked with lead generation or prospecting software?', why: 'Lead-gen tools are valuable for identifying and nurturing potential clients.', listen: 'Tools like LinkedIn Sales Navigator or ZoomInfo, and how they used them to find and engage prospects.' },
  { q: 'Have you used email marketing or marketing automation software for outreach?', why: 'Automation tools streamline client communication and outreach.', listen: 'Platforms like Mailchimp or HubSpot Marketing, and how they automated campaigns and personalized messages.' },
  { q: 'Are you familiar with any sales enablement tools or platforms?', why: 'Enablement tools help deliver effective sales presentations and collateral.', listen: 'Tools like Seismic or Highspot, and how they used them to share materials, track engagement, and improve pitches.' },
];

const rejection = [
  { n: 1, body: 'Dear [Candidate],\n\nThank you for applying for the Account Executive role at [Company]. We appreciate the time and effort you took to apply and submit your materials.\n\nAfter careful consideration, we have decided to move forward with other candidates who more closely meet the specific needs of this role. We encourage you to keep an eye on our website and social channels for future openings that may be a better fit.\n\nThank you again for considering [Company] as a potential employer. We wish you the best in your job search.\n\nSincerely,\n[Your Name]' },
  { n: 2, body: 'Dear [Candidate],\n\nThank you for applying for the Account Executive role at [Company]. We appreciate the time you took to apply.\n\nAfter careful review of all applicants, we have decided to move forward with candidates whose experience more closely matches the requirements of the role. While we were impressed by your skills, we believe another candidate is a better fit for this particular position.\n\nWe encourage you to check our website and social channels for future openings that may suit your background and interests.\n\nSincerely,\n[Your Name]' },
  { n: 3, body: 'Dear [Candidate],\n\nThank you for applying for the Account Executive role at [Company]. We appreciate the effort you put into your application.\n\nAfter reviewing all candidates, we have decided to proceed with others who more closely match the qualifications for this role. We were impressed by your experience, but ultimately determined another candidate to be a better fit.\n\nWe wish you the very best in your job search and hope you’ll consider future opportunities with us.\n\nSincerely,\n[Your Name]' },
];

const faqs = [
  { q: 'What type of questions are asked in account executive interviews?', a: '“Questions often focus on sales experience, client relationship management, negotiation skills, teamwork, problem-solving, and industry knowledge — e.g. “Describe your previous sales experience,” “How do you approach prospecting?” and “Share an example of a deal you closed.”' },
  { q: 'What are the hard skills of an account executive?', a: 'Prospecting, lead generation, negotiation, closing deals, account management, CRM software proficiency, product knowledge, and industry-specific expertise.' },
  { q: 'How do you check the resume of an account executive?', a: 'Look for relevant sales experience, quantifiable achievements, industry knowledge, CRM proficiency, communication skills, and evidence of successful client relationships or revenue generation.' },
  { q: 'How do you hire an account executive?', a: 'Define your requirements, advertise on job boards and social media, screen resumes for relevant experience, conduct structured interviews to assess fit and skills, check references, and negotiate terms of employment.' },
];

const tabs = [
  { label: 'How to hire', anchor: '#howto' },
  { label: 'Job description', anchor: '#jd' },
  { label: 'Job boards', anchor: '#jobboards' },
  { label: 'Social media outreach', anchor: '#social' },
  { label: 'Email templates', anchor: '#emails' },
  { label: 'Skills assessment', anchor: '#assessment' },
  { label: 'General interview questions', anchor: '#genq' },
  { label: 'Technical interview questions', anchor: '#techq' },
  { label: 'Rejection email', anchor: '#rejection' },
];

export default function HiringGuidesDetailPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a:hover{color:#F23F44;}
.hg-wrap{max-width:820px;margin:0 auto;padding:0 28px;}
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
/* hero */
.hg-hero{padding:44px 28px 26px;}
.hg-back{display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:#F23F44;margin-bottom:22px;}
.hg-back svg{transition:transform .2s;}
.hg-back:hover svg{transform:translateX(-3px);}
.hg-h1{font-size:44px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;}
.hg-intro{font-size:17px;line-height:1.7;color:#5A4B4E;margin:22px 0 0;}
/* tab list */
.hg-tabsbar{position:sticky;top:64px;z-index:20;background:rgba(255,255,255,.94);backdrop-filter:blur(10px);border-bottom:1px solid #F0E2E3;}
.hg-tabs{display:flex;flex-wrap:wrap;gap:6px 20px;padding:16px 0;}
.hg-tab{font-size:14px;font-weight:600;color:#6C5A5D;white-space:nowrap;}
.hg-tab:hover{color:#F23F44;}
/* body prose */
.hg-body{padding:40px 28px 30px;}
.hg-sec{scroll-margin-top:132px;margin-bottom:20px;}
.hg-h2{font-size:26px;font-weight:800;letter-spacing:-.5px;margin:44px 0 16px;color:#1A1014;}
.hg-h3{font-size:18px;font-weight:700;letter-spacing:-.2px;margin:26px 0 10px;color:#1A1014;}
.hg-p{font-size:16px;line-height:1.72;color:#4A3B3E;margin:0 0 16px;}
.hg-p a,.hg-li a,.hg-ul a{color:#F23F44;font-weight:600;}
.hg-ol,.hg-ul{margin:0 0 18px;padding-left:22px;}
.hg-ol li,.hg-ul li{font-size:16px;line-height:1.7;color:#4A3B3E;margin-bottom:12px;}
.hg-ol li b,.hg-ul li b{color:#1A1014;font-weight:700;}
.hg-jdrow{font-size:16px;line-height:1.7;color:#4A3B3E;margin:0 0 6px;}
.hg-jdrow b{color:#1A1014;font-weight:700;}
.hg-tlabel{font-size:16px;font-weight:700;color:#1A1014;margin:22px 0 8px;}
.hg-pre{font-size:15.5px;line-height:1.72;color:#4A3B3E;margin:0 0 16px;white-space:pre-line;}
.hg-qq{font-size:16px;font-weight:700;color:#1A1014;margin:22px 0 8px;}
.hg-qlbl{font-weight:700;color:#1A1014;}
.hg-faq .hg-h3{margin:22px 0 8px;}
@media(max-width:820px){.hg-h1{font-size:32px;letter-spacing:-1px;}.hg-tabsbar{top:56px;}.hg-body{padding:32px 22px 24px;}}
h1,h2,h3,h4,.hg-h1,.hg-h2,.hg-h3{text-wrap:balance;}p,li,.hg-p,.hg-intro,.hg-pre{text-wrap:pretty;}/*om-balance-rule*/
` }} />
      <SiteHeader
        announcement="Free hiring guides — job descriptions, interview questions & skills to test for 90+ roles"
        announcementCta="Browse guides"
        homeHref="/"
      />

      <section className="hg-hero"><div className="hg-wrap">
        <Link className="hg-back" href="/hiring-guides"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>Back to Hiring guides</Link>
        <h1 className="hg-h1 reveal">{role} hiring guide</h1>
        <p className="hg-intro reveal">{intro}</p>
      </div></section>

      <div className="hg-tabsbar"><div className="hg-wrap"><div className="hg-tabs">
        {tabs.map((t) => (
          <a key={t.anchor} className="hg-tab" href={t.anchor}>{t.label}</a>
        ))}
      </div></div></div>

      <div className="hg-body"><div className="hg-wrap">

        <div className="hg-sec" id="howto">
          <h2 className="hg-h2 reveal">How to hire {roleArticle}</h2>
          {howtoLead.map((p, i) => (
            <p key={i} className="hg-p reveal">{p}</p>
          ))}
          <h3 className="hg-h3 reveal">Key steps in hiring {roleArticle}</h3>
          <ol className="hg-ol reveal">
            {steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <h3 className="hg-h3 reveal">Pro tips for hiring {roleArticle}</h3>
          <ol className="hg-ol reveal">
            {protips.map((p, i) => (
              <li key={i}><b>{p.title}</b> {p.body}</li>
            ))}
          </ol>
        </div>

        <div className="hg-sec" id="jd">
          <h2 className="hg-h2 reveal">Job description template for {roleArticle}</h2>
          <p className="hg-jdrow reveal"><b>Title:</b> {jd.title}</p>
          <p className="hg-jdrow reveal"><b>Location:</b> {jd.location}</p>
          <h3 className="hg-h3 reveal">Overview</h3>
          <p className="hg-p reveal">{jd.overview}</p>
          <h3 className="hg-h3 reveal">Requirements</h3>
          <ul className="hg-ul reveal">
            {jd.requirements.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <h3 className="hg-h3 reveal">Responsibilities</h3>
          <ul className="hg-ul reveal">
            {jd.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <h3 className="hg-h3 reveal">Benefits</h3>
          <ul className="hg-ul reveal">
            {jd.benefits.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="hg-sec" id="jobboards">
          <h2 className="hg-h2 reveal">Job boards to source the best candidates</h2>
          <ol className="hg-ol reveal">
            {jobboards.map((b, i) => (
              <li key={i}><b>{b.name}:</b> {b.desc}</li>
            ))}
          </ol>
        </div>

        <div className="hg-sec" id="social">
          <h2 className="hg-h2 reveal">Social media shoutout templates</h2>
          {social.map((s) => (
            <p key={s.n} className="hg-p reveal"><b>Template {s.n}:</b> {s.text}</p>
          ))}
        </div>

        <div className="hg-sec" id="emails">
          <h2 className="hg-h2 reveal">Outreach email templates to attract candidates</h2>
          {emails.map((e) => (
            <div key={e.n} className="reveal">
              <p className="hg-tlabel">Template {e.n}</p>
              <p className="hg-jdrow"><b>Subject:</b> {e.subject}</p>
              <p className="hg-pre">{e.body}</p>
            </div>
          ))}
        </div>

        <div className="hg-sec" id="assessment">
          <h2 className="hg-h2 reveal">Relevant assessment tests</h2>
          <ul className="hg-ul reveal">
            {tests.map((t, i) => (
              <li key={i}><Link href={t.url}>{t.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="hg-sec" id="genq">
          <h2 className="hg-h2 reveal">5 general interview questions</h2>
          {genq.map((q, i) => (
            <div key={i} className="reveal">
              <p className="hg-qq">{q.q}</p>
              <p className="hg-p"><span className="hg-qlbl">Why this question matters:</span> {q.why}</p>
              <p className="hg-p"><span className="hg-qlbl">What to listen for:</span> {q.listen}</p>
            </div>
          ))}
        </div>

        <div className="hg-sec" id="techq">
          <h2 className="hg-h2 reveal">5 technical interview questions</h2>
          {techq.map((q, i) => (
            <div key={i} className="reveal">
              <p className="hg-qq">{q.q}</p>
              <p className="hg-p"><span className="hg-qlbl">Why this question matters:</span> {q.why}</p>
              <p className="hg-p"><span className="hg-qlbl">What to listen for:</span> {q.listen}</p>
            </div>
          ))}
        </div>

        <div className="hg-sec" id="rejection">
          <h2 className="hg-h2 reveal">Rejection email templates</h2>
          {rejection.map((r) => (
            <div key={r.n} className="reveal">
              <p className="hg-tlabel">Template {r.n}</p>
              <p className="hg-pre">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="hg-sec hg-faq" id="faqs">
          <h2 className="hg-h2 reveal">Frequently asked questions</h2>
          {faqs.map((f, i) => (
            <div key={i} className="reveal">
              <h3 className="hg-h3">{f.q}</h3>
              <p className="hg-p">{f.a}</p>
            </div>
          ))}
        </div>

      </div></div>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
