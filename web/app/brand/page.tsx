import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
.swatch{border-radius:16px;padding:20px;height:120px;display:flex;flex-direction:column;justify-content:flex-end;color:#fff;font-weight:600;font-size:13px;border:1px solid rgba(0,0,0,.05);}
.swcode{font-size:12px;opacity:.85;font-weight:500;}
.chk li>svg{position:absolute;left:0;top:2px;color:#22A05B;}
.dontlist{list-style:none;margin:20px 0 0;padding:0;display:flex;flex-direction:column;gap:14px;}
.dontlist li{position:relative;padding-left:32px;font-size:15px;line-height:1.55;color:#5A4B4E;}
.dontlist li>svg{position:absolute;left:0;top:2px;color:#F23F44;}
.instrcard{background:#fff;border:1px solid #F0E2E3;border-radius:14px;padding:16px 18px;display:flex;gap:12px;align-items:flex-start;box-shadow:0 16px 30px rgba(110,11,14,.10);margin-bottom:14px;}
.instrcard svg{flex:none;margin-top:2px;}
.instrcard p{margin:0;font-size:15px;line-height:1.55;color:#5A4B4E;}
.dontgrid{display:grid;grid-template-columns:1fr 1fr;gap:36px;}
.dontcol h3{font-size:15px;font-weight:700;margin:0 0 18px;}
.dontcard{background:#fff;border:1px solid #F0E2E3;border-radius:16px;overflow:hidden;box-shadow:0 16px 30px rgba(110,11,14,.10);margin-bottom:22px;}
.dontcard img{display:block;width:100%;height:150px;object-fit:contain;padding:14px;box-sizing:border-box;}
.dontcap{padding:0 16px 16px;font-size:13.5px;font-weight:600;color:#1A1014;display:flex;align-items:center;gap:8px;}
.dontcap svg{flex:none;}
.logostack{display:flex;flex-direction:column;gap:16px;}
.logobox{background:#fff;border:1px solid #EFE2E3;border-radius:16px;height:130px;display:flex;align-items:center;justify-content:center;}
.logobox.dark{background:#1A1014;}
.hero{padding:72px 28px 48px;background:radial-gradient(1100px 540px at 78% 6%,#FFF0EE 0%,rgba(255,240,238,0) 60%),#fff;position:relative;overflow:hidden;}
.herogrid{display:grid;grid-template-columns:1.02fr 1.1fr;gap:60px;align-items:center;}
.pill{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #F4D9DA;border-radius:999px;padding:7px 15px 7px 8px;font-size:13px;font-weight:600;color:#A8323A;box-shadow:0 6px 16px rgba(110,11,14,.08);}
.pilltag{background:#F23F44;color:#fff;font-size:11px;font-weight:700;letter-spacing:.04em;padding:3px 9px;border-radius:999px;}
.heroctas{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:30px;}
.trust{display:flex;align-items:center;gap:13px;flex-wrap:wrap;font-size:13.5px;color:#8A7A7D;font-weight:600;margin-top:26px;}
.herofig{border-radius:22px;overflow:hidden;box-shadow:0 30px 70px rgba(110,11,14,.14);border:1px solid #F0E2E3;}
.herofig img{display:block;width:100%;height:auto;}
@media(max-width:960px){.herogrid,.dontgrid{grid-template-columns:1fr!important;}}
`;

export default function BrandPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="Using the Testlify brand? Start here." announcementCta="Contact us" />

      <section className="hero" data-screen-label="Hero"><div className="wrap"><div className="herogrid">
        <div>
          <div className="reveal" style={{ transitionDelay: '.02s' }}><span className="pill"><span className="pilltag">BRAND GUIDELINES</span> Our brand, used well</span></div>
          <h1 className="h1 reveal" style={{ marginTop: '22px', transitionDelay: '.06s' }}>Our brand,<br /><span style={{ color: '#F23F44' }}>used well</span></h1>
          <p className="lead reveal" style={{ marginTop: '22px', maxWidth: '520px', transitionDelay: '.1s' }}>Welcome to the official Testlify Brand Guidelines. This document is designed to ensure that our brand is used consistently across all platforms and materials. Please follow these guidelines when using Testlify&apos;s logo, typography, colors, and other brand assets.</p>
        </div>
        <div className="herofig reveal" style={{ transitionDelay: '.1s' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand-hero-graphic.png" alt="Testlify brand mark: color palette, typography and logo" />
        </div>
      </div></div></section>

      <section className="sec"><div className="wrap split">
        <div className="reveal">
          <p className="eyebrow">Logo<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '16px' }}>Approved logo versions</h2>
          <p className="body">We offer two primary logo variations:</p>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><b>Full-color logo:</b> Use on white or light backgrounds for maximum visibility.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><b>Reversed/white logo:</b> Use on dark or colored backgrounds when the full-color logo doesn&apos;t contrast well.</li>
          </ul>
          <p className="body" style={{ marginTop: '14px' }}>Ensure the logo is used exactly as provided and avoid creating your own versions.</p>
          <div style={{ marginTop: '22px' }}><a className="lnk" href="https://testlify.com/wp-content/uploads/2026/05/Testlify-logo-files.zip" target="_blank" rel="noopener">Download logos →</a></div>
        </div>
        <div className="logostack reveal" style={{ transitionDelay: '.06s' }}>
          <div className="logobox" style={{ padding: '24px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://testlify.com/wp-content/uploads/2024/03/Testlify-Logo.png" alt="Testlify full-color logo" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </div>
          <div className="logobox dark" style={{ padding: '24px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/testlify-logo-white.svg" alt="Testlify reversed white logo" style={{ height: '40px', width: 'auto', display: 'block' }} />
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap split">
        <div className="figcard reveal" style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #F0E2E3', boxShadow: '0 16px 30px rgba(110,11,14,.10)', background: '#fff', padding: '30px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/Favicon.png" alt="Testlify favicon" style={{ display: 'block', width: '100%', maxWidth: '160px', margin: '0 auto' }} />
        </div>
        <div className="reveal" style={{ transitionDelay: '.06s' }}>
          <p className="eyebrow">Favicon<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '16px' }}>Favicon usage</h2>
          <p className="body">For small-scale uses like social media avatars or browser tabs, use the Testlify favicon or the simplified icon version of our logo. It should retain the logo&apos;s integrity at smaller sizes.</p>
          <div style={{ marginTop: '22px' }}><a className="lnk" href="https://testlify.com/wp-content/uploads/2026/05/Testlify-favicon-files.zip" target="_blank" rel="noopener">Download favicon →</a></div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head">
          <p className="eyebrow reveal">Wordmark<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Do&apos;s and don&apos;ts: wordmark</h2>
        </div>
        <div className="dontgrid reveal">
          <div className="dontcol">
            <h3 style={{ color: '#F23F44' }}>✕ Don&apos;t</h3>
            <div className="dontcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/dont-stretch.png" alt="Don't stretch or alter wordmark" />
              <div className="dontcap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>Don&apos;t stretch or alter the wordmark in any way</div>
            </div>
            <div className="dontcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/dont-favicon.png" alt="Don't use favicon as primary branding" />
              <div className="dontcap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>Don&apos;t use the favicon as the primary branding</div>
            </div>
            <div className="dontcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/dont-crop.png" alt="Don't crop wordmarks" />
              <div className="dontcap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>Don&apos;t crop wordmarks</div>
            </div>
          </div>
          <div className="dontcol">
            <h3 style={{ color: '#22A05B' }}>✓ Do</h3>
            <div className="dontcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/do-provided.png" alt="Use provided logo files without modification" />
              <div className="dontcap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Use the provided logo files without modification</div>
            </div>
            <div className="dontcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/do-contrast.png" alt="Ensure logo visible with good contrast" />
              <div className="dontcap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Ensure the logo is visible with good contrast</div>
            </div>
            <div className="dontcard">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/badges/do-spacing.png" alt="Use established spacing rules" />
              <div className="dontcap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Use the established spacing rules</div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap">
        <p className="eyebrow">Logo usage<b>.</b></p>
        <h2 className="h2" style={{ marginBottom: '36px' }}>How to use our logos</h2>
        <div className="split" style={{ alignItems: 'start' }}>
          <div className="reveal">
            <p className="body" style={{ fontWeight: 700, color: '#1A1014' }}>Do:</p>
            <div style={{ marginTop: '20px' }}>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><p>Use the provided logo files without modification (no stretching, distortion, or color changes).</p></div>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><p>Ensure the logo is clear and visible on backgrounds with sufficient contrast.</p></div>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><p>Use the logo consistently across all platforms and media.</p></div>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><p>Give the logo sufficient breathing room and place it in a prominent but balanced way.</p></div>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><p>Respect the clear-space and minimum size rules.</p></div>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22A05B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg><p>Use the reversed logo version on dark backgrounds for best visibility.</p></div>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '.06s' }}>
            <p className="body" style={{ fontWeight: 700, color: '#1A1014' }}>Don&apos;t:</p>
            <div style={{ marginTop: '20px' }}>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg><p>Don&apos;t stretch, distort, or rotate the logo.</p></div>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg><p>Don&apos;t change the logo&apos;s color or add effects like gradients or textures.</p></div>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg><p>Don&apos;t place the logo over busy images or backgrounds without sufficient clear space.</p></div>
              <div className="instrcard"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F23F44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"></path></svg><p>Don&apos;t use the logo as part of your own branding, unless authorized.</p></div>
            </div>
          </div>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="center-head" style={{ textAlign: 'left', maxWidth: 'none' }}>
          <p className="eyebrow reveal">Colour<b>.</b></p>
          <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Our palette</h2>
        </div>
        <div className="grid4 reveal">
          <div className="swatch" style={{ background: '#F23F44' }}>Primary<span className="swcode">#F23F44</span></div>
          <div className="swatch" style={{ background: '#A91E23' }}>Dark primary<span className="swcode">#A91E23</span></div>
          <div className="swatch" style={{ background: '#6E0B0E' }}>Darkest<span className="swcode">#6E0B0E</span></div>
          <div className="swatch" style={{ background: '#F76A6E' }}>Medium<span className="swcode">#F76A6E</span></div>
          <div className="swatch" style={{ background: '#FBA3A5', color: '#6E0B0E' }}>Light<span className="swcode">#FBA3A5</span></div>
          <div className="swatch" style={{ background: '#FDD5D6', color: '#A91E23' }}>Lighter<span className="swcode">#FDD5D6</span></div>
          <div className="swatch" style={{ background: '#FFF0F0', color: '#8A7A7D' }}>Lightest<span className="swcode">#FFF0F0</span></div>
          <div className="swatch" style={{ background: '#1A1014' }}>Ink<span className="swcode">#1A1014</span></div>
        </div>
        <ul className="chk" style={{ marginTop: '30px', maxWidth: '820px' }}>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>The primary color (#F23F44) should dominate brand visuals where you want a strong impact — logo, call-to-action buttons, key icons.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Use dark primary (#A91E23) for hover, active states, or when the primary color needs more depth.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Use darkest (#6E0B0E) sparingly for backgrounds or overlays that require bold contrast.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Use medium (#F76A6E) for secondary highlights, banners, or subtle dividers that complement the primary color.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Use light (#FBA3A5) and lighter (#FDD5D6) for softer backgrounds, cards, and accents when you want a subtle brand hint without overwhelming.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Use lightest (#FFF0F0) as a base background to maintain warmth and visual consistency across designs.</li>
          <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Reserve the bright primary for key touchpoints — avoid overusing it in large background areas unless balanced with neutral tones.</li>
        </ul>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap split">
        <div className="reveal">
          <p className="eyebrow">Partnerships<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '16px' }}>Co-branding and partnerships</h2>
          <p className="body">When partnering with other companies or brands:</p>
          <ul className="chk">
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Keep the Testlify logo balanced with partner logos, maintaining equal size and appropriate clear space.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Do not alter the logo in any way when used alongside other logos.</li>
            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Always submit co-branded materials for approval before public release.</li>
          </ul>
        </div>
        <div className="figcard reveal" style={{ transitionDelay: '.06s', borderRadius: '18px', overflow: 'hidden', border: '1px solid #F0E2E3', boxShadow: '0 16px 30px rgba(110,11,14,.10)', background: '#fff', padding: '20px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/Co-Branding-and-Partnerships-1024x223.png" alt="Co-branding and partnerships" style={{ display: 'block', width: '100%' }} />
        </div>
      </div></section>

      <section className="sec"><div className="wrap split">
        <div className="reveal">
          <p className="eyebrow">Typography<b>.</b></p>
          <h2 className="h2" style={{ marginBottom: '20px' }}>Poppins, everywhere</h2>
          <p className="body">Use Poppins for all headlines, sub-headings and body text. Avoid using more than one or two additional fonts. Keep Poppins as the anchor for consistency. Don&apos;t use decorative fonts for body text; maintain readability and clarity.</p>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontFamily: "'Poppins'", fontWeight: 800, fontSize: '42px', letterSpacing: '-1.4px', margin: 0 }}>Aa Bb Cc</p>
            <p style={{ fontFamily: "'Poppins'", fontWeight: 400, fontSize: '18px', color: '#5A4B4E', margin: '8px 0 0' }}>The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
        <div className="figcard reveal" style={{ transitionDelay: '.06s', borderRadius: '18px', overflow: 'hidden', border: '1px solid #F0E2E3', boxShadow: '0 16px 30px rgba(110,11,14,.10)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://testlify.com/wp-content/uploads/2025/10/Typography.png" alt="Typography" style={{ display: 'block', width: '100%' }} />
        </div>
      </div></section>

      <section className="sec" style={{ background: '#FBF3EE' }}><div className="wrap grid2" style={{ maxWidth: '900px' }}>
        <div className="card reveal">
          <h3 className="h3" style={{ fontSize: '18px', marginBottom: '10px' }}>Contact</h3>
          <p className="body" style={{ fontSize: '14.5px' }}>For support inquiries, reach us at <a className="lnk" href="mailto:support@testlify.com">support@testlify.com</a>. For sales or partnership discussions, contact <a className="lnk" href="mailto:sales@testlify.com">sales@testlify.com</a>. You can also reach us by phone at +1 (844) 755-8378. For permission to use our logos or questions about these guidelines, contact <a className="lnk" href="mailto:support@testlify.com">support@testlify.com</a>.</p>
        </div>
        <div className="card reveal" style={{ transitionDelay: '.05s' }}>
          <h3 className="h3" style={{ fontSize: '18px', marginBottom: '10px' }}>Press releases</h3>
          <p className="body" style={{ fontSize: '14.5px' }}>When mentioning our company in press materials, please identify Testlify as an AI-powered skills assessment and interviewing platform. Our mission is to help companies hire the best talent quickly, fairly, and efficiently. Questions beyond these cases: <a className="lnk" href="mailto:press@testlify.com">press@testlify.com</a> or +1 (844) 755-8378.</p>
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
