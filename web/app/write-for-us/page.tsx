import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import SecuritySection from '@/components/SecuritySection';
import Testimonials from '@/components/Testimonials';
import Recognition from '@/components/Recognition';
import CtaBand from '@/components/CtaBand';

const css = `
/* Testlify shared base — tokens, layout, reveal. Poppins + coral system. */
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
a.lnk{color:#F23F44;font-weight:600;}
a.lnk:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.phero{padding:70px 28px 44px;background:radial-gradient(1100px 520px at 50% -10%,#FFF0EE 0%,rgba(255,240,238,0) 62%),#fff;text-align:center;}
.center-head{max-width:660px;margin:0 auto 44px;text-align:center;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}
.card{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.card:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.cic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.chk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.chk li{position:relative;padding-left:32px;font-size:15px;line-height:1.55;color:#5A4B4E;}
.chk li>svg{position:absolute;left:0;top:3px;color:#F23F44;}
.pill{font-size:14.5px;font-weight:600;color:#5A4B4E;background:#fff;border:1px solid #EADDDE;border-radius:100px;padding:11px 22px;}
.statrow{display:grid;grid-template-columns:repeat(4,1fr);}
.stat{text-align:center;padding:4px 22px;}
.stat + .stat{border-left:1px solid #EFE3E4;}
.statn{font-size:44px;font-weight:800;letter-spacing:-1.6px;line-height:1;color:#F23F44;font-variant-numeric:tabular-nums;}
.statl{font-size:14px;color:#6C5A5D;font-weight:500;margin-top:12px;line-height:1.45;}
.darkcta{background:#1A1014;color:#fff;text-align:center;}
.darkcta .h2{color:#fff;}
.darkcta .lead{color:rgba(255,255,255,.78);}
.btnrow{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .grid2,.grid3,.grid4,.split{grid-template-columns:1fr;gap:34px;}
  .statrow{grid-template-columns:1fr 1fr;row-gap:34px;}
  .stat + .stat{border-left:none;}
}

/* page-specific */
.wfhero{position:relative;overflow:hidden;padding:96px 28px 70px;background:radial-gradient(1100px 560px at 50% -12%,#FFE9E7 0%,rgba(255,240,238,0) 60%),#fff;text-align:center;}
.wfhero-in{position:relative;z-index:2;max-width:860px;margin:0 auto;}
.wfblob{position:absolute;border-radius:50%;filter:blur(46px);opacity:.55;z-index:0;pointer-events:none;}
.wfblob.b1{width:400px;height:400px;background:radial-gradient(circle,#FF7A52,rgba(255,122,82,0));top:-120px;left:-80px;animation:wfblur 9s ease-in-out infinite;}
.wfblob.b2{width:360px;height:360px;background:radial-gradient(circle,#F23F44,rgba(242,63,68,0));top:-10px;right:-90px;animation:wfblur 12s ease-in-out infinite 1s;}
@keyframes wfblur{0%,100%{filter:blur(40px);opacity:.42;transform:scale(1);}50%{filter:blur(84px);opacity:.7;transform:scale(1.16);}}
.intg-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;}
.intg-tile{display:flex;align-items:center;justify-content:center;height:88px;background:#fff;border:1px solid #F2E6E7;border-radius:16px;padding:16px 20px;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease;}
.intg-tile:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.intg-tile img{max-width:100%;max-height:40px;object-fit:contain;}
.wfform{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:34px;}
.wffield{display:flex;flex-direction:column;gap:6px;margin-bottom:16px;}
.wffield label{font-size:13px;font-weight:600;color:#5A4B4E;}
.wfinput{font-family:inherit;font-size:14.5px;padding:11px 14px;border:1.5px solid #EADDDE;border-radius:10px;color:#1A1014;background:#fff;}
.wfinput:focus{outline:none;border-color:#F23F44;}
.wfupload{border:1.5px dashed #EADDDE;border-radius:12px;padding:22px;text-align:center;font-size:13.5px;color:#8A7A7D;}
.wf-floatwrap image-slot::part(ring),#wf-why-img::part(ring){display:none;}
.tsm-sec{background:#FBF3EE!important;}
@keyframes wffloaty{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
.wftopic{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #EFE2E3;border-radius:14px;padding:16px 18px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.wftopic:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(110,11,14,.10);border-color:#FBD0D1;}
.wftopicic{width:38px;height:38px;border-radius:11px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;flex:none;}
.wfbadge{position:absolute;bottom:-16px;left:-16px;background:#1A1014;color:#fff;border-radius:14px;padding:12px 18px;display:flex;align-items:center;gap:10px;box-shadow:0 14px 30px rgba(26,16,20,.24);z-index:2;}
.wfbadge b{color:#FF7A52;}
.wftopicgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;}
.wfgpanel{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 28px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.wfgpanel:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.wfgpanel .gic{width:44px;height:44px;border-radius:13px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
@media(max-width:920px){
  .intg-grid{grid-template-columns:repeat(3,1fr);}
  .wftopicgrid{grid-template-columns:1fr 1fr;}
  .wf-floatwrap{display:none;}
}
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function WriteForUsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Share your HR expertise with 1M+ readers"
        announcementCta="Pitch a topic"
      />

      <section className="wfhero">
        <div className="wfblob b1" />
        <div className="wfblob b2" />
        <div className="wfhero-in wrap" style={{ maxWidth: '960px' }}>
          <p className="eyebrow reveal">Write for us<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Got&nbsp;<span style={{ color: 'rgb(242, 63, 68)' }}>ideas&nbsp;</span>on talent assessment, interviews, <br />or HR Tech?
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '600px', transitionDelay: '.08s' }}>
            If you&apos;re passionate about HR, workforce development, or hiring, share your knowledge and insights with our growing community. Get a chance to be read by 1M+ visitors.
          </p>
          <div className="reveal" style={{ marginTop: '28px', transitionDelay: '.12s' }}>
            <CtaButton label="Explore our blogs" href="/blog" variant="primary" size="md" icon="arrow" />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap" style={{ maxWidth: '1080px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: '52px', alignItems: 'center' }}>
            <div>
              <h2 className="h2 reveal">Why contribute to Testlify?</h2>
              <p className="body reveal" style={{ marginTop: '18px', fontSize: '17px', transitionDelay: '.04s' }}>
                At Testlify, we believe in the power of shared knowledge. Your insights can help HR professionals and hiring teams stay ahead of the curve. By writing for us, you&apos;ll contribute to shaping the future of recruitment and talent assessment.
              </p>
              <p className="body reveal" style={{ marginTop: '18px', transitionDelay: '.08s' }}>
                We&apos;re looking for well-researched, engaging articles on topics related to talent assessment and recruitment. Here are a few areas that interest us:
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://testlify.com/wp-content/uploads/2024/03/IMG_1459-1536x1152.jpg-1024x768.webp"
                alt="Writer at work"
                style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 44px rgba(110,11,14,.14)' }}
              />
              <div className="wfbadge reveal" style={{ transitionDelay: '.16s' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                <span style={{ fontSize: '13.5px', fontWeight: 600 }}>Guest authors reach <b>1M+</b> HR readers</span>
              </div>
            </div>
          </div>
          <div className="wftopicgrid reveal" style={{ marginTop: '32px', transitionDelay: '.12s' }}>
            <div className="wftopic"><span className="wftopicic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>Hiring &amp; recruitment</div>
            <div className="wftopic"><span className="wftopicic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>Interviews</div>
            <div className="wftopic"><span className="wftopicic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg></span>Talent acquisition</div>
            <div className="wftopic"><span className="wftopicic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg></span>Skills assessment</div>
            <div className="wftopic"><span className="wftopicic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg></span>Employer branding</div>
            <div className="wftopic"><span className="wftopicic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg></span>Candidate experience</div>
            <div className="wftopic"><span className="wftopicic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9z" /></svg></span>Workforce development</div>
          </div>
          <p className="body reveal" style={{ marginTop: '24px', transitionDelay: '.16s' }}>
            If you have fresh, valuable perspectives on any of these topics (or something related), we&apos;d love to hear from you! No AI-generated content, please.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: '1000px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div className="wfgpanel reveal">
            <span className="gic" style={{ background: '#E9F8F0', color: '#1FA463' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
            <h2 className="h3" style={{ fontSize: '22px' }}>Submission guidelines</h2>
            <ul className="chk" style={{ marginTop: '18px' }}>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><b>Original &amp; well-researched:</b> fresh, informative content not copied from other sources. AI content will not be tolerated.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><b>Audience-focused:</b> write with HR professionals, recruiters, and talent managers in mind.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><b>Length:</b> articles should be between 1,200 and 1,500 words.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><b>Formatting:</b> clear headings (H1, H2), structured well for easy readability.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><b>External link:</b> include one relevant link to a credible external source.</li>
            </ul>
          </div>
          <div className="wfgpanel reveal" style={{ transitionDelay: '.06s' }}>
            <span className="gic" style={{ background: '#FFF0F0', color: '#F23F44' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg></span>
            <h2 className="h3" style={{ fontSize: '22px' }}>What we don&apos;t accept</h2>
            <ul className="chk" style={{ marginTop: '18px' }}>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg><b>Salesy content:</b> should inform and educate, not just promote products or services.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg><b>Plain AI content:</b> AI-generated and humanized AI content will not be considered.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg><b>Plagiarism:</b> only original content that hasn&apos;t been published elsewhere.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg><b>Inaccurate or misleading info:</b> fact-check everything; all data must be accurate and reliable.</li>
              <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg><b>Overly technical or too simple:</b> keep it relevant to HR professionals, talent managers, and recruiters.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FFF8F7' }}>
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <div style={{ textAlign: 'center', marginBottom: '34px' }}>
            <h2 className="h2 reveal" style={{ fontSize: '34px' }}>How to submit</h2>
            <p className="body reveal" style={{ marginTop: '16px', transitionDelay: '.04s' }}>
              Interested in writing for us? Great! Fill out the form below with your ideas, and we&apos;ll get back to you. If you&apos;re not sure what to write, feel free to share a few topics you&apos;re passionate about. We aim to respond within 2-3 days, so hang tight!
            </p>
          </div>
          <div className="wfform reveal" style={{ transitionDelay: '.08s' }}>
            <div className="wffield"><label>Name</label><input className="wfinput" type="text" placeholder="Your name" /></div>
            <div className="wffield"><label>Email *</label><input className="wfinput" type="email" placeholder="you@email.com" /></div>
            <div className="wffield"><label>File upload</label><div className="wfupload">Drag &amp; drop files, or <a className="lnk" href="#">choose files</a> to upload</div></div>
            <div className="wffield"><label>Message</label><textarea className="wfinput" rows={4} placeholder="Tell us about your idea..." /></div>
            <CtaButton label="Submit" href="#" variant="primary" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section id="integrations" className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap" style={{ maxWidth: '1180px' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 44px' }}>
            <p className="eyebrow reveal">Integrations<b>.</b></p>
            <h2 className="h2 reveal" style={{ fontSize: '38px', transitionDelay: '.04s' }}>Testlify integrates seamlessly with 100+ ATS tools</h2>
            <p className="lead reveal" style={{ marginTop: '14px', transitionDelay: '.08s' }}>
              Streamline your hiring process from assessment to onboarding. Sync candidate data effortlessly, automate workflows, and gain deeper insights to make informed hiring decisions faster.
            </p>
          </div>
          <div className="intg-grid reveal" style={{ transitionDelay: '.12s' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/Workday_Inc.-Logo.wine_-1-2048x1365-2.png" alt="Workday" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2023/03/629a0bbcb04c5ae587c411c2-1-1.png" alt="Greenhouse" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Lever_Employ_Logo_Horizontal_Turquoise_Black-300x43-1.png?wsr" alt="Lever" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/SR-SAP-Logo.svg" alt="SmartRecruiters" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/09/BambooHR-Logo-1-2048x1152-2.png" alt="BambooHR" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/Successfactors-Logo-Vector.svg-.png?wsr" alt="SuccessFactors" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/logo.svg" alt="UKG" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/681b1f74457e6f968fdaaa8d_MASTER_RECRUITEE_COLOUR_PREFERRED-LOGO-TO-USE-1024x313.png?wsr" alt="Recruitee" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2024/08/zoho-recruit-logo-1.png" alt="Zoho Recruit" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="intg-tile"><img src="https://testlify.com/wp-content/uploads/2025/10/JazzHR_Employ_Logo_Horizontal_Purple_Black-1024x131.png?wsr" alt="JazzHR" /></div>
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: '26px', transitionDelay: '.16s' }}>
            <a className="lnk" href="/product-integrations" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>View all ATS integrations<span>→</span></a>
          </div>
        </div>
      </section>

      <section id="security">
        <SecuritySection
          eyebrow="Security & compliance"
          heading="Built to keep your organization secure"
          sub="Audited controls, strong data governance and privacy protections — every assessment validated and EEOC-defensible."
        />
      </section>

      <Testimonials />

      <section id="awards">
        <Recognition bg="#fff" />
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
