import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import FAQ from '@/components/FAQ';
import CtaBand from '@/components/CtaBand';

const CSS = `
@property --bang{syntax:'<angle>';initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.ep{position:relative;display:flex;flex-direction:column;background:#fff;border:1px solid #EFE2E3;border-radius:18px;overflow:hidden;}
.ep::before{content:'';position:absolute;inset:0;border-radius:18px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;pointer-events:none;z-index:3;}
.ep:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.epart{width:100%;aspect-ratio:16/10;overflow:hidden;background:#FBF3EE;}
.epart img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s cubic-bezier(.2,.7,.3,1);}
.ep:hover .epart img{transform:scale(1.04);}
.epbody{padding:22px 24px 24px;display:flex;flex-direction:column;flex:1;}
.epplay{position:absolute;top:14px;right:14px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.92);color:#F23F44;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(110,11,14,.18);transition:background .2s,color .2s;}
.ep:hover .epplay{background:#F23F44;color:#fff;}
.epdate{font-size:12.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A7A7D;}
@media(max-width:640px){.epart{aspect-ratio:16/9;}}
.subplats{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;}
.subplats img{height:44px;}
.wcard{background:#fff;border:1px solid #EFE2E3;border-radius:18px;padding:28px 26px;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.wcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.wcard .cic{width:48px;height:48px;border-radius:12px;background:#FFF0EF;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.wcard h3{font-size:18px;font-weight:700;margin:0 0 8px;}
.wcard p{font-size:14.5px;color:#6C5A5D;line-height:1.6;margin:0;}
.eplisten{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:#F23F44;margin-top:8px;}
.ep:hover .eplisten svg{transform:translateX(3px);}
.eplisten svg{transition:transform .2s;}
`;

const episodes = [
  { img: 'https://testlify.com/wp-content/uploads/2022/10/Benjamin-Marsili.png', date: 'October 26, 2022', title: 'Modernize and scale recruitment', desc: 'Finding the right balance between digital and traditional channels is key to accomplishing recruitment in the age of AI.', url: 'https://testlify.com/podcast/modernize-and-scale-recruitment/' },
  { img: 'https://testlify.com/wp-content/uploads/2022/10/Yoel-Israel.png', date: 'October 25, 2022', title: 'Find hidden talent on LinkedIn', desc: '77% of recruiters use LinkedIn as their primary hiring channel — the secrets to hiring quality talent there.', url: 'https://testlify.com/podcast/find-hidden-talent-on-linkedin/' },
  { img: 'https://testlify.com/wp-content/uploads/2022/10/Tripti-Somani.png', date: 'October 18, 2022', title: 'Unlock the mystery of LinkedIn', desc: 'The social selling roadmap that helps generate a consistent flow of leads and customers you can handle.', url: 'https://testlify.com/podcast/unlock-the-mystery-of-linkedin/' },
  { img: 'https://testlify.com/wp-content/uploads/2022/10/William-Tincup.png', date: 'October 12, 2022', title: 'Effective talent assessment strategy', desc: 'A good talent assessment strategy optimizes company performance by offering the right resources to the right people.', url: 'https://testlify.com/podcast/effective-talent-assessment-strategy/' },
  { img: 'https://testlify.com/wp-content/uploads/2022/09/Template-PodcastSpeakers-800-%C3%97-600-px.png', date: 'September 23, 2022', title: 'Hire quality talent faster', desc: 'Filling positions with the best talent is challenging, especially for highly technical roles — how to speed it up.', url: 'https://testlify.com/podcast/hire-quality-talent-faster-tod/' },
  { img: 'https://testlify.com/wp-content/uploads/2022/09/Template-PodcastSpeakers-800-%C3%97-600-px-1.png', date: 'September 9, 2022', title: 'Employer branding 101', desc: '86% of applicants research company reviews and ratings when deciding where to apply — how to shape that story.', url: 'https://testlify.com/podcast/employer-branding-101/' },
  { img: 'https://testlify.com/wp-content/uploads/2022/09/Template-PodcastSpeakers-800-%C3%97-600-px-2.png', date: 'September 4, 2022', title: 'The future of hiring', desc: 'Ten key trends that will impact the workplace and HR for the next ten years.', url: 'https://testlify.com/podcast/first-podcast-demo/' },
];

const faqs = [
  { q: 'What is the format for each episode?', a: 'In each episode, Pratik Thakker, Testlify’s Founder, chats with a different guest on a range of Human Resources topics — uncovering stories about the guest’s career, role, and how things get done in their company.' },
  { q: 'Who are the guests?', a: 'Our guests are all HR Operations leaders and Founders within their organization or field.' },
  { q: 'Where can I find the episodes?', a: 'All episodes can be watched via Testlify’s YouTube channel or listened to on all major podcasting platforms including Spotify, Google Podcasts and Apple Podcasts.' },
  { q: 'How long are the episodes?', a: 'On average, episodes run 50–65 minutes.' },
  { q: 'Can I be a guest on the podcast?', a: 'We’re quite booked for the upcoming months, but feel free to reach out to us and we’ll keep you in mind for future episodes.' },
];

export default function PodcastPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="The Testlify podcast — hiring, unfiltered" announcementCta="Listen now" homeHref="/" />

      <section className="phero">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Podcast<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>A <span style={{ color: '#F23F44' }}>podcast by Testlify</span></h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>We interview top people strategy leaders to unveil how things get done in their organizations. Access exclusive AMA sessions with our guests through our Slack community.</p>
          <div className="reveal" style={{ marginTop: '32px' }}>
            <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A7A7D', margin: '0 0 16px' }}>Subscribe and listen on your favorite platforms</p>
            <div className="subplats">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://testlify.com/wp-content/uploads/2022/09/spotify-podcast-badge-wht-grn-165x40-1.svg" alt="Spotify" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://testlify.com/wp-content/uploads/2022/09/EN_Google_Podcasts_Badge.svg" alt="Google podcasts" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://testlify.com/wp-content/uploads/2022/09/US_UK_Apple_Podcasts_Listen_Badge_RGB.svg" alt="Apple podcasts" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Learn from the best<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>What you&apos;ll hear in the People Over Perks podcast</h2>
          </div>
          <div className="grid3 reveal">
            <div className="wcard">
              <div className="cic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
              <h3>Senior HR leaders</h3>
              <p>Our guests are the senior people strategy leaders within their organization and share their intimate knowledge of &quot;how things get done&quot;.</p>
            </div>
            <div className="wcard">
              <div className="cic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
              <h3>Actionable advice</h3>
              <p>We dive into how our guests approach their roles, the processes they&apos;ve built, the structure of their teams, and much more.</p>
            </div>
            <div className="wcard">
              <div className="cic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div>
              <h3>Useful resources</h3>
              <p>Our guests share the books, tools, training, and other resources that help them as individuals, and their teams, perform their best.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center-head">
            <p className="eyebrow reveal">Latest episodes<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Catch up with the episodes</h2>
          </div>
          <div className="grid3 reveal">
            {episodes.map((ep, i) => (
              <a className="ep" href={ep.url} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="epart">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ep.img} alt={ep.title} />
                </div>
                <span className="epplay"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>
                <div className="epbody">
                  <span className="epdate">{ep.date}</span>
                  <h3 className="h3" style={{ fontSize: '18px', margin: '6px 0 0' }}>{ep.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6C5A5D', margin: '6px 0 14px' }}>{ep.desc}</p>
                  <span className="eplisten" style={{ marginTop: 'auto' }}>Listen<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: '#FBF3EE' }}>
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <div className="center-head">
            <p className="eyebrow reveal">FAQs<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Frequently asked questions</h2>
          </div>
          <div className="reveal">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
