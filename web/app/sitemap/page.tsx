'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

// Rewrite a design href ("<slug>.dc.html") to its Next.js route.
// - strip .dc.html and a leading "core-"; core-home -> "/"
// - core-compare is the compare-plans page
function rw(href: string): string {
  if (!href) return '#';
  if (href.startsWith('http') || href.startsWith('#') || href.startsWith('/')) return href;
  let slug = href.replace(/\.dc\.html$/, '');
  if (slug === 'core-home') return '/';
  if (slug === 'core-compare') return '/compare-plans';
  if (slug.startsWith('core-')) slug = slug.slice(5);
  return '/' + slug;
}

type PageEntry = { slug: string; title: string };

const SITEMAP_PAGES: PageEntry[] = [
  { slug: 'about', title: 'About' },
  { slug: 'ai-interview-question-generator', title: 'AI Interview Question Generator' },
  { slug: 'ai-powered-talent-assessment-platform', title: 'AI Powered Talent Assessment Platform' },
  { slug: 'ai-resume-screener', title: 'AI Resume Screener' },
  { slug: 'alternatives', title: 'Alternatives' },
  { slug: 'alternatives-detail', title: 'Alternatives Detail' },
  { slug: 'api', title: 'API' },
  { slug: 'applicant-funnel-calculator', title: 'Applicant Funnel Calculator' },
  { slug: 'architecture-overview', title: 'Architecture Overview' },
  { slug: 'assess-and-develop-your-workplace-abilities', title: 'Assess And Develop Your Workplace Abilities' },
  { slug: 'attrition-rate-calculator', title: 'Attrition Rate Calculator' },
  { slug: 'average-time-to-hire-calculator', title: 'Average Time To Hire Calculator' },
  { slug: 'awards', title: 'Awards' },
  { slug: 'blockchain-industry', title: 'Blockchain Industry' },
  { slug: 'blog', title: 'Blog' },
  { slug: 'blog-detail', title: 'Blog Detail' },
  { slug: 'blue-collar-hiring', title: 'Blue Collar Hiring' },
  { slug: 'book-a-demo', title: 'Book A Demo' },
  { slug: 'bpo-industry', title: 'BPO Industry' },
  { slug: 'brand', title: 'Brand' },
  { slug: 'campus-hiring', title: 'Campus Hiring' },
  { slug: 'candidate-honesty-policy-and-agreement', title: 'Candidate Honesty Policy And Agreement' },
  { slug: 'careers', title: 'Careers' },
  { slug: 'case-study', title: 'Case Study' },
  { slug: 'ccpa', title: 'CCPA' },
  { slug: 'cefr-test', title: 'CEFR Test' },
  { slug: 'chat-ai-interviews', title: 'Chat AI Interviews' },
  { slug: 'clients', title: 'Clients' },
  { slug: 'coding-tests', title: 'Coding Tests' },
  { slug: 'cognitive-ability-tests', title: 'Cognitive Ability Tests' },
  { slug: 'comeet', title: 'Comeet' },
  { slug: 'company-legal', title: 'Company Legal' },
  { slug: 'contact', title: 'Contact' },
  { slug: 'cookie-policy', title: 'Cookie Policy' },
  { slug: 'core-compare', title: 'Core Compare' },
  { slug: 'cost-of-employee-turnover-calculator', title: 'Cost Of Employee Turnover Calculator' },
  { slug: 'cost-per-hire-calculator', title: 'Cost Per Hire Calculator' },
  { slug: 'customer-success-stories', title: 'Customer Success Stories' },
  { slug: 'customer-success-stories-detail', title: 'Customer Success Stories Detail' },
  { slug: 'data-privacy-framework', title: 'Data Privacy Framework' },
  { slug: 'data-processing-agreement', title: 'Data Processing Agreement' },
  { slug: 'data-residency', title: 'Data Residency' },
  { slug: 'demo', title: 'Demo' },
  { slug: 'designed-for-high-completion-rate', title: 'Designed For High Completion Rate' },
  { slug: 'discover-the-power-of-rapid-team-scaling', title: 'Discover The Power Of Rapid Team Scaling' },
  { slug: 'diversity-and-inclusions', title: 'Diversity And Inclusions' },
  { slug: 'download-smart-personality-assessment-report', title: 'Download SMART Personality Assessment Report' },
  { slug: 'edtech-industry', title: 'Edtech Industry' },
  { slug: 'energy-industry', title: 'Energy Industry' },
  { slug: 'engineering-skills', title: 'Engineering Skills' },
  { slug: 'enterprise', title: 'Enterprise' },
  { slug: 'fair-refund-policy', title: 'Fair Refund Policy' },
  { slug: 'features', title: 'Features' },
  { slug: 'financial-industry', title: 'Financial Industry' },
  { slug: 'for-startups', title: 'For Startups' },
  { slug: 'free-employee-net-promoter-score-enps-calculator', title: 'Free Employee Net Promoter Score eNPS Calculator' },
  { slug: 'freelance-hiring', title: 'Freelance Hiring' },
  { slug: 'gdpr-compliance', title: 'GDPR Compliance' },
  { slug: 'gdpr-faqs', title: 'GDPR FAQs' },
  { slug: 'getting-your-smart-personality-assessment-report', title: 'Getting Your SMART Personality Assessment Report' },
  { slug: 'health-care-industry', title: 'Health Care Industry' },
  { slug: 'hiring-guides', title: 'Hiring Guides' },
  { slug: 'hiring-guides-detail', title: 'Hiring Guides Detail' },
  { slug: 'hiring-manager-satisfaction-calculator', title: 'Hiring Manager Satisfaction Calculator' },
  { slug: 'hospitality-industry', title: 'Hospitality Industry' },
  { slug: 'how-testlify-works', title: 'How Testlify Works' },
  { slug: 'hr-glossary', title: 'HR Glossary' },
  { slug: 'hr-glossary-detail', title: 'HR Glossary Detail' },
  { slug: 'hr-tools', title: 'HR Tools' },
  { slug: 'hr-tools-applicant-tracking-systems', title: 'HR Tools Applicant Tracking Systems' },
  { slug: 'hr-tools-category-detail', title: 'HR Tools Category Detail' },
  { slug: 'hr-tools-detail', title: 'HR Tools Detail' },
  { slug: 'information-security', title: 'Information Security' },
  { slug: 'integration-program', title: 'Integration Program' },
  { slug: 'integrations', title: 'Integrations' },
  { slug: 'integrations-detail', title: 'Integrations Detail' },
  { slug: 'interview-as-a-service', title: 'Interview As A Service' },
  { slug: 'interview-to-offer-ratio-calculator', title: 'Interview To Offer Ratio Calculator' },
  { slug: 'interviews', title: 'Interviews' },
  { slug: 'interviews-detail', title: 'Interviews Detail' },
  { slug: 'investors', title: 'Investors' },
  { slug: 'it-industry', title: 'It Industry' },
  { slug: 'job-description-generator', title: 'Job Description Generator' },
  { slug: 'job-description-templates', title: 'Job Description Templates' },
  { slug: 'job-description-templates-detail', title: 'Job Description Templates Detail' },
  { slug: 'job-offer-acceptance-rate-calculator', title: 'Job Offer Acceptance Rate Calculator' },
  { slug: 'job-openings', title: 'Job Openings' },
  { slug: 'job-openings-detail', title: 'Job Openings Detail' },
  { slug: 'knowledge-base', title: 'Knowledge Base' },
  { slug: 'language-tests', title: 'Language Tests' },
  { slug: 'lateral-hiring', title: 'Lateral Hiring' },
  { slug: 'library-build-your-own', title: 'Library Build Your Own' },
  { slug: 'logistics-supply-chain-industry', title: 'Logistics Supply Chain Industry' },
  { slug: 'media-industry', title: 'Media Industry' },
  { slug: 'multilingual-abilities', title: 'Multilingual Abilities' },
  { slug: 'non-profits', title: 'Non Profits' },
  { slug: 'our-leadership', title: 'Our Leadership' },
  { slug: 'our-partners', title: 'Our Partners' },
  { slug: 'partnership', title: 'Partnership' },
  { slug: 'playroll', title: 'Playroll' },
  { slug: 'podcast', title: 'Podcast' },
  { slug: 'press-kit', title: 'Press Kit' },
  { slug: 'press-room', title: 'Press Room' },
  { slug: 'pricing', title: 'Pricing' },
  { slug: 'privacy-policy', title: 'Privacy Policy' },
  { slug: 'process-knowledge-tests', title: 'Process Knowledge Tests' },
  { slug: 'anti-cheating-and-proctoring', title: 'Anti-cheating & proctoring' },
  { slug: 'product-features-detail', title: 'Product Features Detail' },
  { slug: 'product-skill-assessments', title: 'Product Skill Assessments' },
  { slug: 'product-tour', title: 'Product Tour' },
  { slug: 'psychometric-tests', title: 'Psychometric Tests' },
  { slug: 'public-sector-talent-assessment-solution', title: 'Public Sector Talent Assessment Solution' },
  { slug: 'quality-of-hire-calculator', title: 'Quality Of Hire Calculator' },
  { slug: 'real-estate-industry', title: 'Real Estate Industry' },
  { slug: 'recruiting-conversion-rate-calculator', title: 'Recruiting Conversion Rate Calculator' },
  { slug: 'recruitment-industry', title: 'Recruitment Industry' },
  { slug: 'referral-program', title: 'Referral Program' },
  { slug: 'remote-hiring', title: 'Remote Hiring' },
  { slug: 'remote-work-cost-savings-calculator', title: 'Remote Work Cost Savings Calculator' },
  { slug: 'reporting-analytics', title: 'Reporting Analytics' },
  { slug: 'reseller-plan', title: 'Reseller Plan' },
  { slug: 'resource-detail-template', title: 'Resource Detail Template' },
  { slug: 'resource-list-template', title: 'Resource List Template' },
  { slug: 'responsible-hiring', title: 'Responsible Hiring' },
  { slug: 'retail-industry', title: 'Retail Industry' },
  { slug: 'role-specific-tests', title: 'Role Specific Tests' },
  { slug: 'saas-industry', title: 'SaaS Industry' },
  { slug: 'sales-hiring', title: 'Sales Hiring' },
  { slug: 'science', title: 'Science' },
  { slug: 'security', title: 'Security' },
  { slug: 'security-and-compliance', title: 'Security And Compliance' },
  { slug: 'security-control-and-visibility', title: 'Security Control And Visibility' },
  { slug: 'security-practices', title: 'Security Practices' },
  { slug: 'service-level-agreement', title: 'Service Level Agreement' },
  { slug: 'situational-judgment', title: 'Situational Judgment' },
  { slug: 'skills-assessment-and-interviewing-platform', title: 'Skills Assessment And Interviewing Platform' },
  { slug: 'skills-assessment-platform', title: 'Skills Assessment Platform' },
  { slug: 'skills-validation', title: 'Skills Validation' },
  { slug: 'small-medium-businesses', title: 'Small Medium Businesses' },
  { slug: 'smart-personality-assessment', title: 'SMART Personality Assessment' },
  { slug: 'smart-personality-assessment-report', title: 'SMART Personality Assessment Report' },
  { slug: 'software-skills-tests', title: 'Software Skills Tests' },
  { slug: 'solution-company-template', title: 'Solution Company Template' },
  { slug: 'solution-index', title: 'Solution Index' },
  { slug: 'solution-industry-template', title: 'Solution Industry Template' },
  { slug: 'solution-testtype-template', title: 'Solution Testtype Template' },
  { slug: 'solution-usecase-template', title: 'Solution Usecase Template' },
  { slug: 'sourcing-channel-efficiency-calculator', title: 'Sourcing Channel Efficiency Calculator' },
  { slug: 'subject-matter-experts', title: 'Subject Matter Experts' },
  { slug: 'submit-rfp-for-skills-assessment-ai-interviews-proctoring', title: 'Submit RFP For Skills Assessment AI Interviews Proctoring' },
  { slug: 'system-compatibility-check-for-remote-asessments', title: 'System Compatibility Check For Remote Asessments' },
  { slug: 'technical-hiring', title: 'Technical Hiring' },
  { slug: 'terms', title: 'Terms' },
  { slug: 'test-360-degree-feedback', title: 'Test 360 Degree Feedback' },
  { slug: 'test-library', title: 'Test Library' },
  { slug: 'test-library/attention-to-detail-visual', title: 'Test detail (Attention to Detail)' },
  { slug: 'testlify-information-security-standards', title: 'Testlify Information Security Standards' },
  { slug: 'testlify-launches-conversational-ai-for-talent-assessment', title: 'Testlify Launches Conversational AI For Talent Assessment' },
  { slug: 'testlify-pioneers-the-future-with-full-ai-integration-in-talentassessment-revolution', title: 'Testlify Pioneers The Future With Full AI Integration In Talentassessment Revolution' },
  { slug: 'testlify-the-recruiter-who-never-sleeps', title: 'Testlify The Recruiter Who Never Sleeps' },
  { slug: 'tools', title: 'Tools' },
  { slug: 'typing-test', title: 'Typing Test' },
  { slug: 'udder', title: 'Udder' },
  { slug: 'unleash-your-brands-potential', title: 'Unleash Your Brands Potential' },
  { slug: 'video-interviewing-tool', title: 'Video Interviewing Tool' },
  { slug: 'volume-hiring', title: 'Volume Hiring' },
  { slug: 'whats-new', title: 'Whats New' },
  { slug: 'whire', title: 'Whire' },
  { slug: 'white-label', title: 'White Label' },
  { slug: 'why-testlify', title: 'Why Testlify' },
  { slug: 'write-for-us', title: 'Write For Us' },
];

const CSS = `
*{box-sizing:border-box;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:#F23F44;}
a:hover{color:#DC3137;}
.wrap{max-width:1100px;margin:0 auto;padding:0 28px;}
.hero{padding:56px 28px 32px;text-align:center;}
.eyebrow{font-size:12.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 14px;}
.eyebrow b{color:#F23F44;font-weight:700;}
.h1{font-size:44px;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;text-wrap:balance;}
.lead{font-size:16.5px;color:#5A4B4E;margin:16px auto 0;max-width:560px;line-height:1.6;text-wrap:pretty;}
.sm-sec{padding:8px 28px 96px;}
.sm-jump{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:0 0 56px;}
.sm-jump a{font-size:13px;font-weight:600;color:#5A4B4E;background:#FBF3EE;border:1px solid #F0E2E3;border-radius:999px;padding:7px 14px;}
.sm-jump a:hover{color:#F23F44;border-color:#FBD0D1;}
.sm-group{margin-bottom:48px;scroll-margin-top:24px;}
.sm-h{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1A1014;border-bottom:1px solid #F0E2E3;padding-bottom:12px;margin:0 0 18px;display:flex;align-items:baseline;gap:10px;}
.sm-h span{font-size:12px;font-weight:600;color:#A9999C;text-transform:none;letter-spacing:0;}
.sm-grid{columns:3;column-gap:32px;}
.sm-item{break-inside:avoid;margin-bottom:11px;}
.sm-item a{font-size:14.5px;color:#5A4B4E;font-weight:500;}
.sm-item a:hover{color:#F23F44;}
.sm-tools{display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;margin:0 0 40px;}
.sm-search{flex:1 1 320px;max-width:380px;position:relative;}
.sm-search input{width:100%;font-family:inherit;font-size:14.5px;color:#1A1014;background:#fff;border:1px solid #EADDDE;border-radius:999px;padding:11px 16px 11px 40px;outline:none;transition:border-color .2s;}
.sm-search input:focus{border-color:#F23F44;}
.sm-search svg{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#A9999C;}
.sm-sortbtn{display:inline-flex;align-items:center;gap:7px;font-family:inherit;font-size:13.5px;font-weight:600;color:#5A4B4E;background:#fff;border:1px solid #EADDDE;border-radius:999px;padding:10px 16px;cursor:pointer;}
.sm-sortbtn:hover{border-color:#F23F44;color:#F23F44;}
.sm-count{font-size:13px;color:#A9999C;text-align:center;margin:0 0 24px;}
@media(max-width:800px){
  .sm-grid{columns:2;}
  .h1{font-size:32px;}
}
@media(max-width:520px){
  .sm-grid{columns:1;}
}
`;

export default function SitemapPage() {
  const [query, setQuery] = useState('');
  const [sortDesc, setSortDesc] = useState(false);

  const pages = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = SITEMAP_PAGES.filter((p) => !q || p.title.toLowerCase().includes(q));
    return filtered
      .slice()
      .sort((a, b) => (sortDesc ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title)));
  }, [query, sortDesc]);

  const sortLabel = sortDesc ? 'Z–A' : 'A–Z';
  const visibleCount = pages.length;
  const totalCount = SITEMAP_PAGES.length;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader homeHref="/" />

      <section className="hero"><div className="wrap">
        <p className="eyebrow">Sitemap<b>.</b></p>
        <h1 className="h1">All Testlify pages in one place</h1>
        <p className="lead">Browse every page on our site, organized alphabetically for quick navigation.</p>
      </div></section>

      <section className="sm-sec"><div className="wrap">
        <div className="sm-tools">
          <div className="sm-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
            <input type="text" placeholder="Search pages…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <button className="sm-sortbtn" onClick={() => setSortDesc((s) => !s)}>Sort: {sortLabel}</button>
        </div>
        <p className="sm-count">{visibleCount} of {totalCount} pages</p>
        <div className="sm-group">
          <div className="sm-grid">
            {pages.map((p) => (
              <div className="sm-item" key={p.slug}>
                <Link href={rw(p.slug + '.dc.html')}>{p.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
