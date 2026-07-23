import Link from 'next/link';

const css = `
/* ===========================================================
   Site Footer — single source of truth for the global footer.
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
            <p className="sf-tag">The AI-powered skills assessment and interviewing platform helping teams hire the best talent — quickly, fairly, efficiently.</p>
            <div className="sf-soc"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="X">X</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="YouTube">▶</a></div>
          </div>
          <div><div className="sf-h">Product</div><div className="sf-col">
            <Link href="/ai-powered-talent-assessment-platform" className="flink">Testlify AI</Link>
            <Link href="/test-library" className="flink">Test library</Link>
            <Link href="/integrations" className="flink">ATS integrations</Link>
            <Link href="/science" className="flink">Science</Link>
            <Link href="/features#reporting" className="flink">Analytics</Link>
            <Link href="/features#developers" className="flink">API</Link>
            <Link href="/pricing" className="flink">Reseller plan</Link>
            <Link href="/features" className="flink">Features</Link>
            <a href="https://roadmap.testlify.com/" target="_blank" rel="noopener" className="flink">What&apos;s new</a>
            <Link href="/features" className="flink">White label</Link>
            <Link href="/video-interviewing-tool" className="flink">Video interviewing</Link>
            <a href="https://roadmap.testlify.com/" target="_blank" rel="noopener" className="flink">Product roadmap</a>
          </div></div>
          <div><div className="sf-h">Test type</div><div className="sf-col">
            <Link href="/role-specific-tests" className="flink">Role specific tests</Link>
            <Link href="/language-tests" className="flink">Language tests</Link>
            <Link href="/coding-tests" className="flink">Programming tests</Link>
            <Link href="/software-skills-tests" className="flink">Software skills tests</Link>
            <Link href="/cognitive-ability-tests" className="flink">Cognitive ability tests</Link>
            <Link href="/situational-judgment" className="flink">Situational judgment</Link>
            <Link href="/cefr-test" className="flink">CEFR test</Link>
            <Link href="/typing-test" className="flink">Typing test</Link>
            <Link href="/coding-tests" className="flink">Coding tests</Link>
            <Link href="/psychometric-tests" className="flink">Psychometric tests</Link>
            <Link href="/engineering-skills" className="flink">Engineering tests</Link>
            <Link href="/solution-testtype-template" className="flink">Process knowledge tests</Link>
          </div></div>
          <div><div className="sf-h">Resources</div><div className="sf-col">
            <Link href="/blog" className="flink">Blog</Link>
            <Link href="/careers" className="flink">Join Testlify SME</Link>
            <Link href="/our-partners" className="flink">Integration program</Link>
            <Link href="/sitemap" className="flink">Sitemap</Link>
            <Link href="/blog" className="flink">Knowledge base</Link>
            <Link href="/blog" className="flink">Podcast</Link>
            <Link href="/our-partners" className="flink">Referral program</Link>
            <Link href="/our-partners" className="flink">Partnership program</Link>
            <Link href="/customer-success-stories" className="flink">Success stories</Link>
            <Link href="/alternatives" className="flink">Competitors</Link>
            <Link href="/hiring-guides" className="flink">Hiring guides</Link>
            <Link href="/hr-glossary" className="flink">HR glossary</Link>
            <Link href="/hr-tools" className="flink">HR tools</Link>
          </div></div>
          <div><div className="sf-h">Terms</div><div className="sf-col">
            <Link href="/company-legal" className="flink">Privacy policy</Link>
            <Link href="/company-legal" className="flink">Terms &amp; conditions</Link>
            <Link href="/company-legal" className="flink">Refund policy</Link>
            <Link href="/company-legal" className="flink">GDPR compliance</Link>
            <Link href="/company-legal" className="flink">Cookie policy</Link>
            <Link href="/company-legal" className="flink">Security practices</Link>
            <Link href="/security" className="flink">Security</Link>
            <Link href="/company-legal" className="flink">Data processing agreement</Link>
            <Link href="/company-legal" className="flink">Data privacy framework</Link>
            <Link href="/company-legal" className="flink">CCPA</Link>
            <Link href="/security" className="flink">Trust center</Link>
          </div></div>
          <div><div className="sf-h">Company</div><div className="sf-col">
            <Link href="/about" className="flink">About us</Link>
            <Link href="/careers" className="flink">Careers</Link>
            <Link href="/careers" className="flink">For subject matter experts</Link>
            <Link href="/customer-success-stories" className="flink">Clients</Link>
            <Link href="/our-partners" className="flink">Our partners</Link>
            <Link href="/about" className="flink">Press room</Link>
            <Link href="/about" className="flink">Investors</Link>
            <Link href="/careers" className="flink">Write for us</Link>
            <Link href="/contact" className="flink">Contact us</Link>
            <a href="https://help.testlify.com/" target="_blank" rel="noopener" className="flink">Help center</a>
          </div></div>
        </div>
        <div className="sf-backed" style={{ paddingTop: '24px', paddingBottom: '24px', marginBottom: '24px' }}>
          <span className="sf-backed-l">Backed by</span>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="bpill"><img src="https://testlify.com/wp-content/uploads/2023/12/image-2-1.png" alt="Google for Startups" /></span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="bpill"><img src="https://testlify.com/wp-content/uploads/2023/12/image-1-1-1024x430.png" alt="Microsoft for Startups" /></span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="bpill"><img src="https://testlify.com/wp-content/uploads/2023/12/NV_Inception_Program_Logo_NV_Inception_Logo_H_CMYK-1080x662.png.webp" alt="NVIDIA Inception" /></span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="bpill"><img src="https://testlify.com/wp-content/uploads/2023/12/image-13.png" alt="SHRM Labs" /></span>
          </div>
        </div>
        <div className="sf-bottom" style={{ paddingTop: '0px' }}>
          <span>© 2026 Testlify. All rights reserved.</span>
          <div className="sf-legal"><Link href="/company-legal" className="flink">Privacy policy</Link><Link href="/company-legal" className="flink">Terms &amp; conditions</Link><Link href="/security" className="flink">Security</Link><Link href="/company-legal" className="flink">GDPR</Link><Link href="/company-legal" className="flink">Cookie policy</Link></div>
        </div>
      </div>
    </footer>
  );
}
