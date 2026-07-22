import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
.rel{display:grid;grid-template-columns:150px 1fr;gap:30px;padding:30px 0;border-top:1px solid #F0E2E3;}
.reldate{font-size:14px;font-weight:700;color:#F23F44;}
.reltag{display:inline-block;font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A7A7D;background:#FBF3EE;border-radius:100px;padding:4px 12px;margin-bottom:12px;}
@media(max-width:720px){.rel{grid-template-columns:1fr;gap:8px;}}
`;

export default function WhatsNewPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader announcement="See the latest Testlify updates" announcementCta="What's new" />

      <section className="phero"><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">What&apos;s new<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Shipped, and<br />shipping fast</h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>We ship improvements every week. Here&apos;s a look at the newest features, upgrades and fixes across the Testlify platform.</p>
      </div></section>

      <section className="sec"><div className="wrap" style={{ maxWidth: '860px' }}>
        <div className="reveal">
          <div className="rel"><div><span className="reldate">Jul 2026</span></div><div><span className="reltag">New</span><h3 className="h3" style={{ fontSize: '19px', marginBottom: '8px' }}>Conversational AI interviews</h3><p className="body" style={{ fontSize: '14.5px' }}>Screen, interview and score candidates automatically with AI video, audio and chat — all on one platform.</p></div></div>
          <div className="rel"><div><span className="reldate">Jun 2026</span></div><div><span className="reltag">Improved</span><h3 className="h3" style={{ fontSize: '19px', marginBottom: '8px' }}>Faster, smarter test library</h3><p className="body" style={{ fontSize: '14.5px' }}>Redesigned search and filtering makes finding the right test across 3,500+ options quicker than ever.</p></div></div>
          <div className="rel"><div><span className="reldate">May 2026</span></div><div><span className="reltag">New</span><h3 className="h3" style={{ fontSize: '19px', marginBottom: '8px' }}>Expanded ATS integrations</h3><p className="body" style={{ fontSize: '14.5px' }}>Native two-way sync now supports 100+ ATS platforms on every paid plan.</p></div></div>
          <div className="rel"><div><span className="reldate">Apr 2026</span></div><div><span className="reltag">Improved</span><h3 className="h3" style={{ fontSize: '19px', marginBottom: '8px' }}>Advanced anti-cheat proctoring</h3><p className="body" style={{ fontSize: '14.5px' }}>New detection signals and reporting give you even more confidence in results.</p></div></div>
          <div className="rel"><div><span className="reldate">Mar 2026</span></div><div><span className="reltag">New</span><h3 className="h3" style={{ fontSize: '19px', marginBottom: '8px' }}>Multilingual candidate experience</h3><p className="body" style={{ fontSize: '14.5px' }}>The candidate UI now supports more languages, giving global applicants a smoother experience.</p></div></div>
        </div>
        <p className="body reveal" style={{ textAlign: 'center', marginTop: '34px' }}>Want the full roadmap? <a className="lnk" href="https://roadmap.testlify.com/" target="_blank" rel="noopener">See what&apos;s coming next →</a></p>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
