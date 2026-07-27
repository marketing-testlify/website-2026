import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaButton from '@/components/CtaButton';
import CtaBand from '@/components/CtaBand';

const CSS = `
@property --bang{syntax:'<angle>';initial-value:0deg;inherits:false;}
@keyframes runborder{to{--bang:360deg;}}
.ebook{position:relative;background:#fff;border:1px solid #EFE2E3;border-radius:20px;overflow:hidden;}
.ebook::before{content:'';position:absolute;inset:0;border-radius:20px;padding:1.8px;background:conic-gradient(from var(--bang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;pointer-events:none;}
.ebook:hover::before{opacity:1;animation:runborder 2.4s linear infinite;}
.ecover{height:180px;display:flex;align-items:flex-end;padding:22px;color:#fff;font-weight:700;font-size:18px;line-height:1.25;}
.ebody{padding:22px 24px 26px;}
.etag{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#F23F44;}
.ecover img{width:100%;height:100%;object-fit:cover;display:block;}
.tabset{display:inline-flex;align-items:center;gap:4px;background:#F3E9E9;border:1px solid #EADDDE;border-radius:100px;padding:5px;position:relative;}
.tabbtn{font-family:inherit;font-size:14.5px;font-weight:600;color:#6A585B;background:transparent;border:0;padding:10px 22px;border-radius:100px;cursor:pointer;transition:color .2s;position:relative;z-index:1;}
.tabbtn:hover{color:#1A1014;}
.tabbtn.on{color:#1A1014;}
.tabslider{position:absolute;top:5px;bottom:5px;background:#fff;border-radius:100px;box-shadow:0 2px 8px rgba(110,11,14,.14);transition:transform .32s cubic-bezier(.4,0,.2,1),width .32s;}
`;

const ITEMS = [
  {
    tag: 'White paper',
    title: 'High cost of hiring mistakes in volume recruiting',
    desc: 'Breaks down the true cost of hiring mistakes in volume recruiting — reduce risk, improve quality and hire at scale without sacrificing accuracy.',
    cta: 'Download the white paper',
    href: 'https://testlify.com/knowledge-base/cost-of-hiring-mistakes-volume-recruiting/',
    img: 'https://testlify.com/wp-content/uploads/2025/05/Hiring-mistakes-in-volume-recruiting-Whitepaper-scaled.png',
  },
  {
    tag: 'White paper',
    title: 'Your guide to a modern enterprise hiring stack',
    desc: 'A comprehensive guide to building a modern hiring stack for enterprises — from ATS to analytics, optimize every layer of your recruitment infrastructure.',
    cta: 'Download the white paper',
    href: 'https://testlify.com/knowledge-base/enterprise-hiring-stack-guide/',
    img: 'https://testlify.com/wp-content/uploads/2025/05/Enterprise-hiring-stack-Whitepaper-scaled.png',
  },
  {
    tag: 'White paper',
    title: 'Why your hiring funnel is leaking talent—and how to fix it',
    desc: 'Uncovers why your hiring funnel is losing top talent — identify gaps and implement strategies that boost hiring efficiency.',
    cta: 'Download the white paper',
    href: 'https://testlify.com/knowledge-base/hiring-funnel-leaking-talent/',
    img: 'https://testlify.com/wp-content/uploads/2025/05/Hiring-funnel-Whitepaper-scaled.png',
  },
  {
    tag: 'White paper',
    title: 'Skills-based hiring: The key to building a future-ready workforce',
    desc: 'Practical steps to shift from resumes to real capabilities — attract top talent, reduce bias and future-proof your workforce.',
    cta: 'Download the white paper',
    href: 'https://testlify.com/knowledge-base/skills-based-hiring-future-ready-workforce/',
    img: 'https://testlify.com/wp-content/uploads/2025/05/Skills-Based-Hiring-Whitepaper-scaled.png',
  },
  {
    tag: "Buyer's guide",
    title: 'Buyer’s guide to AI-powered skills assessment tools',
    desc: 'How to choose the right AI assessment platform, with expert insights, feature comparisons and practical evaluation tips.',
    cta: 'Download the guide',
    href: 'https://testlify.com/knowledge-base/buyers-guide/',
    img: 'https://testlify.com/wp-content/uploads/2025/04/Testlify-Buyers-Guide-scaled.png',
  },
];

export default function KnowledgeBasePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SiteHeader announcement="Free ebooks &amp; guides for hiring teams" announcementCta="Browse all" homeHref="/" />

      <section className="phero" style={{ background: 'radial-gradient(1100px 560px at 50% -12%,#FFE9E7 0%,rgba(255,240,238,0) 60%),#fff', paddingTop: '96px' }}><div className="wrap" style={{ maxWidth: '860px' }}>
        <p className="eyebrow reveal">Knowledge base<b>.</b></p>
        <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>Ebooks, <span style={{ color: '#F23F44' }}>guides &amp; whitepapers</span></h1>
        <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Explore our curated library of ebooks, whitepapers, buyer's guides and reports — key trends, strategies and resources to enhance your hiring process.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="grid3">
          {ITEMS.map((it) => (
            <div className="ebook reveal" key={it.href}>
              <div className="ecover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.img} alt={it.title} />
              </div>
              <div className="ebody">
                <span className="etag">{it.tag}</span>
                <p className="body" style={{ fontSize: '14.5px', margin: '8px 0 4px', fontWeight: 700, color: '#1A1014' }}>{it.title}</p>
                <p className="body" style={{ fontSize: '14.5px', margin: '0 0 16px' }}>{it.desc}</p>
                <a className="lnk" href={it.href} style={{ fontSize: '14px' }}>{it.cta} →</a>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <section className="sec darkcta"><div className="wrap" style={{ maxWidth: '720px' }}>
        <h2 className="h2 reveal">Prefer to just try it?</h2>
        <p className="lead reveal" style={{ margin: '18px auto 30px', transitionDelay: '.04s' }}>Start free and run your first skills-based assessment in minutes.</p>
        <div className="reveal btnrow" style={{ transitionDelay: '.08s' }}>
          <CtaButton label="Try for free" href="#" variant="light" size="md" icon="arrow" />
          <CtaButton label="Read the blog" href="/blog" variant="outline-light" size="md" icon="none" />
        </div>
      </div></section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
