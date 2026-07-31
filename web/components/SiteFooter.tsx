import Link from 'next/link';

const css = `
/* ===========================================================
   Site Footer — single source of truth for the global footer.
   Drop on any page:  <dc-import name="component-site-footer"
       home-href="core-home.dc.html" hint-size="100%,560px"></dc-import>
   #anchors not present on the current page auto-redirect to home-href.
   =========================================================== */
.sf,.sf *{box-sizing:border-box;font-family:'Poppins',sans-serif;}
.sf a{text-decoration:none;}
.sf{background:#1A1014;color:#C9B9BC;padding:66px 28px 34px;}
.sf-in{max-width:1240px;margin:0 auto;}
.sf-backed{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;padding-bottom:36px;margin-bottom:40px;position:relative;}
.sf-backed::after{content:"";position:absolute;left:50%;bottom:0;width:100vw;margin-left:-50vw;border-bottom:1px solid #3A2D30;}
.sf-backed-l{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;}
.bpill{display:flex;align-items:center;justify-content:center;height:48px;padding:0 14px;border-radius:12px;background:#fff;box-shadow:0 6px 18px rgba(0,0,0,.16);}
.bpill img{max-height:24px;max-width:108px;object-fit:contain;}
.foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr 1fr 1fr;gap:40px;padding-bottom:48px;position:relative;}
.foot-grid::after{content:"";position:absolute;left:50%;bottom:0;width:100vw;margin-left:-50vw;border-bottom:1px solid #3A2D30;}
.sf-brand{display:block;}
.sf-brand img{height:30px;width:auto;display:block;}
.sf-tag{font-size:15px;line-height:1.6;margin:16px 0 22px;max-width:280px;color:#A9999C;}
.sf-soc{display:flex;gap:11px;}
.sf-soc a{width:38px;height:38px;border-radius:11px;background:#2B2023;display:flex;align-items:center;justify-content:center;color:#C9B9BC;font-size:13px;font-weight:600;transition:background .2s,color .2s;}
.sf-soc a:hover{background:#F23F44;color:#fff;}
.sf-h{font-weight:600;font-size:14px;color:#fff;margin-bottom:18px;letter-spacing:.3px;}
.sf-col{display:flex;flex-direction:column;gap:12px;font-size:14.5px;}
.flink{color:#A9999C;transition:color .2s;}
.flink:hover{color:#F23F44;}
.sf-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;padding-top:26px;font-size:13.5px;color:#8A7A7D;}
.sf-legal{display:flex;gap:24px;flex-wrap:wrap;}
.sf-legal .flink{color:#8A7A7D;}
@media(max-width:900px){.foot-grid{grid-template-columns:1fr 1fr;gap:30px;}.sf-backed{justify-content:flex-start;}}
@media(max-width:520px){.foot-grid{grid-template-columns:1fr 1fr;}}

/* ===== GLOBAL phone-tier responsive safety net (applies to every page via footer) ===== */
html,body{max-width:100%;}
body{overflow-x:hidden;}
img,svg,video,table{max-width:100%;height:auto;}
@media(max-width:640px){
  /* shared heading + section vocabulary used across recreated pages */
  .h1{font-size:34px !important;line-height:1.08 !important;letter-spacing:-1px !important;}
  .h2{font-size:27px !important;line-height:1.14 !important;letter-spacing:-.6px !important;}
  .sec{padding:56px 20px !important;}
  .wrap{padding-left:20px !important;padding-right:20px !important;}
  .lead{font-size:16px !important;}
  /* collapse common multi-column layouts */
  .split,.herogrid,.ptwo,.dwrap,.dashbody,.vs{grid-template-columns:1fr !important;}
  .cards3,.cards2,.val3,.stats,.atsgrid,.intg-grid,.ss-grid,.tsd-cards,.tsd-fgrid,.tsd-tgrid,.tsd-hgrid,.tsd-grid2,.skgrid,.foot-grid{grid-template-columns:1fr !important;}
  .atsgrid,.intg-grid,.stats,.ss-grid{grid-template-columns:repeat(2,1fr) !important;}
  .heroctas,.by-hbtns,.vi-hbtns,.tsd-ctas{flex-wrap:wrap !important;}
  .heroctas > *,.heroctas a{width:auto !important;}
  /* keep wide data tables scrollable rather than overflowing */
  .tblwrap{overflow-x:auto !important;-webkit-overflow-scrolling:touch;}
}
@media(max-width:400px){
  .h1{font-size:29px !important;}
  .atsgrid,.intg-grid,.stats,.ss-grid,.foot-grid{grid-template-columns:1fr !important;}
}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

/** Rewrite a design-file href ("<slug>.dc.html") to its Next.js route. */
function rw(href: string): string {
  if (/^(https?:|mailto:|tel:|#|\/)/.test(href)) return href;
  let slug = href.replace(/\.dc\.html$/, '').replace(/^core-/, '');
  if (slug === 'home' || slug === '') return '/';
  if (slug === 'compare') slug = 'compare-plans';
  return `/${slug}`;
}

type FootLink = { href: string; label: string };
type FootColumn = { heading: string; links: FootLink[] };

const columns: FootColumn[] = [
  {
    heading: 'Product',
    links: [
      { href: 'ai-powered-talent-assessment-platform.dc.html', label: 'Testlify AI' },
      { href: 'test-library.dc.html', label: 'Test library' },
      { href: 'integrations.dc.html', label: 'ATS integrations' },
      { href: 'science.dc.html', label: 'Science' },
      { href: 'reporting-analytics.dc.html', label: 'Analytics' },
      { href: 'api.dc.html', label: 'API' },
      { href: 'reseller-plan.dc.html', label: 'Reseller plan' },
      { href: 'features.dc.html', label: 'Features' },
      { href: 'whats-new.dc.html', label: 'What’s new' },
      { href: 'white-label.dc.html', label: 'White label' },
      { href: 'video-interviewing-tool.dc.html', label: 'Video interviewing' },
      { href: 'https://roadmap.testlify.com/', label: 'Product roadmap' },
    ],
  },
  {
    heading: 'Test type',
    links: [
      { href: 'role-specific-tests.dc.html', label: 'Role specific tests' },
      { href: 'language-tests.dc.html', label: 'Language tests' },
      { href: 'coding-tests.dc.html', label: 'Programming tests' },
      { href: 'software-skills-tests.dc.html', label: 'Software skills tests' },
      { href: 'cognitive-ability-tests.dc.html', label: 'Cognitive ability tests' },
      { href: 'situational-judgment.dc.html', label: 'Situational judgment' },
      { href: 'cefr-test.dc.html', label: 'CEFR test' },
      { href: 'typing-test.dc.html', label: 'Typing test' },
      { href: 'coding-tests.dc.html', label: 'Coding tests' },
      { href: 'psychometric-tests.dc.html', label: 'Psychometric tests' },
      { href: 'engineering-skills.dc.html', label: 'Engineering tests' },
      { href: 'solution-testtype-template.dc.html', label: 'Process knowledge tests' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: 'blog.dc.html', label: 'Blog' },
      { href: 'subject-matter-experts.dc.html', label: 'Join Testlify SME' },
      { href: 'integration-program.dc.html', label: 'Integration program' },
      { href: 'sitemap.dc.html', label: 'Sitemap' },
      { href: 'knowledge-base.dc.html', label: 'Knowledge base' },
      { href: 'podcast.dc.html', label: 'Podcast' },
      { href: 'referral-program.dc.html', label: 'Referral program' },
      { href: 'partnership.dc.html', label: 'Partnership program' },
      { href: 'customer-success-stories.dc.html', label: 'Success stories' },
      { href: 'alternatives.dc.html', label: 'Competitors' },
      { href: 'hiring-guides.dc.html', label: 'Hiring guides' },
      { href: 'hr-glossary.dc.html', label: 'HR glossary' },
      { href: 'hr-tools.dc.html', label: 'HR tools' },
    ],
  },
  {
    heading: 'Terms',
    links: [
      { href: 'privacy-policy.dc.html', label: 'Privacy policy' },
      { href: 'terms.dc.html', label: 'Terms & conditions' },
      { href: 'fair-refund-policy.dc.html', label: 'Refund policy' },
      { href: 'gdpr-compliance.dc.html', label: 'GDPR compliance' },
      { href: 'cookie-policy.dc.html', label: 'Cookie policy' },
      { href: 'security-practices.dc.html', label: 'Security practices' },
      { href: 'https://trust.testlify.com/', label: 'Security' },
      { href: 'data-processing-agreement.dc.html', label: 'Data processing agreement' },
      { href: 'data-privacy-framework.dc.html', label: 'Data privacy framework' },
      { href: 'ccpa.dc.html', label: 'CCPA' },
      { href: 'https://trust.testlify.com/', label: 'Trust center' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: 'about.dc.html', label: 'About us' },
      { href: 'careers.dc.html', label: 'Careers' },
      { href: 'subject-matter-experts.dc.html', label: 'For subject matter experts' },
      { href: 'customer-success-stories.dc.html', label: 'Clients' },
      { href: 'our-partners.dc.html', label: 'Our partners' },
      { href: 'press-room.dc.html', label: 'Press room' },
      { href: 'investors.dc.html', label: 'Investors' },
      { href: 'write-for-us.dc.html', label: 'Write for us' },
      { href: 'contact.dc.html', label: 'Contact us' },
      { href: 'https://help.testlify.com/', label: 'Help center' },
    ],
  },
];

const socials: { label: string; glyph: string }[] = [
  { label: 'LinkedIn', glyph: 'in' },
  { label: 'X', glyph: 'X' },
  { label: 'Facebook', glyph: 'f' },
  { label: 'YouTube', glyph: '▶' },
];

const backers: { src: string; alt: string }[] = [
  { src: 'https://testlify.com/wp-content/uploads/2023/12/image-2-1.png', alt: 'Google for Startups' },
  { src: 'https://testlify.com/wp-content/uploads/2023/12/image-1-1-1024x430.png', alt: 'Microsoft for Startups' },
  {
    src: 'https://testlify.com/wp-content/uploads/2023/12/NV_Inception_Program_Logo_NV_Inception_Logo_H_CMYK-1080x662.png.webp',
    alt: 'NVIDIA Inception',
  },
  { src: 'https://testlify.com/wp-content/uploads/2023/12/image-13.png', alt: 'SHRM Labs' },
];

const legal: FootLink[] = [
  { href: 'privacy-policy.dc.html', label: 'Privacy policy' },
  { href: 'terms.dc.html', label: 'Terms & conditions' },
  { href: 'https://trust.testlify.com/', label: 'Security' },
  { href: 'gdpr-compliance.dc.html', label: 'GDPR' },
  { href: 'cookie-policy.dc.html', label: 'Cookie policy' },
];

function FLink({ href, label }: FootLink) {
  const to = rw(href);
  if (/^https?:/.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener" className="flink">
        {label}
      </a>
    );
  }
  return (
    <Link href={to} className="flink">
      {label}
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <footer className="sf" style={{ paddingTop: '48px', paddingBottom: '24px' }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="sf-in">
        <div className="foot-grid">
          <div>
            <div className="sf-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/testlify-logo-white.svg" alt="Testlify" />
            </div>
            <p className="sf-tag">
              The AI-powered skills assessment and interviewing platform helping teams hire the best talent — quickly, fairly,
              efficiently.
            </p>
            <div className="sf-soc">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label}>
                  {s.glyph}
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <div className="sf-h">{col.heading}</div>
              <div className="sf-col">
                {col.links.map((l) => (
                  <FLink key={`${col.heading}-${l.label}`} href={l.href} label={l.label} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sf-backed" style={{ paddingTop: '24px', paddingBottom: '24px', marginBottom: '24px' }}>
          <span className="sf-backed-l">Backed by</span>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {backers.map((b) => (
              <span className="bpill" key={b.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} />
              </span>
            ))}
          </div>
        </div>

        <div className="sf-bottom" style={{ paddingTop: '0px' }}>
          <span>© 2026 Testlify. All rights reserved.</span>
          <div className="sf-legal">
            {legal.map((l) => (
              <FLink key={`legal-${l.label}`} href={l.href} label={l.label} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
