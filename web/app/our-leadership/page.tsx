import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#F3F6F9;}
a{text-decoration:none;color:inherit;}
a.lnk{color:#F23F44;}a.lnk:hover{color:#DC3137;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.lhero{position:relative;overflow:hidden;padding:96px 28px 56px;background:radial-gradient(1100px 560px at 50% -12%,#FFE9E7 0%,rgba(255,240,238,0) 60%),#F3F6F9;text-align:center;}
.lhero-in{position:relative;z-index:2;}
.lblob{position:absolute;border-radius:50%;filter:blur(46px);opacity:.55;z-index:0;pointer-events:none;}
.lblob.b1{width:380px;height:380px;background:radial-gradient(circle,#FF7A52,rgba(255,122,82,0));top:-120px;left:-80px;animation:lblur 9s ease-in-out infinite;}
.lblob.b2{width:340px;height:340px;background:radial-gradient(circle,#F23F44,rgba(242,63,68,0));top:-10px;right:-90px;animation:lblur 12s ease-in-out infinite 1s;}
@keyframes lblur{0%,100%{filter:blur(40px);opacity:.42;transform:scale(1);}50%{filter:blur(84px);opacity:.7;transform:scale(1.16);}}
.lbadge{display:inline-flex;align-items:center;gap:9px;background:#1A1014;color:#fff;border-radius:999px;padding:8px 18px 8px 9px;font-size:13.5px;font-weight:600;box-shadow:0 14px 30px rgba(26,16,20,.20);margin-bottom:22px;}
.lbadge .ldot{width:22px;height:22px;border-radius:50%;background:#F23F44;display:flex;align-items:center;justify-content:center;color:#fff;flex:none;}
.lgraphic{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none;opacity:.5;}
.lgraphic .lline{stroke-dasharray:6 5;animation:llinedash 2.4s linear infinite;}
@keyframes llinedash{to{stroke-dashoffset:-22;}}
.lgraphic .lnode{animation:lnodepulse 3.2s ease-in-out infinite;}
@keyframes lnodepulse{0%,100%{r:6;opacity:1;}50%{r:8.5;opacity:.6;}}
.lgraphic .lroot{animation:lrootpulse 2.6s ease-in-out infinite;}
@keyframes lrootpulse{0%,100%{r:7;}50%{r:9.5;}}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
.founders{display:grid;grid-template-columns:repeat(4,1fr);gap:28px 22px;}
.fcard{text-align:center;border:1px solid #F2E6E7;border-radius:18px;overflow:hidden;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.fcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.fav{width:100%;aspect-ratio:1/1;margin:0;overflow:hidden;background:#FBF3EE;}
.fav img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s ease;}
.fcard:hover .fav img{transform:scale(1.08);}
.fname{font-size:17px;font-weight:700;margin:16px 18px 0;letter-spacing:-.3px;}
.frole{font-size:13.5px;color:#8A7A7D;font-weight:500;margin:5px 18px 10px;}
.llink{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:600;color:#0A66C2;margin:0 18px 18px;}
.llink:hover{color:#F23F44;}
.prin{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.pcard{background:#fff;border:1px solid #EFE2E3;border-radius:20px;padding:30px 26px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s;}
.pcard:hover{transform:translateY(-4px);box-shadow:0 22px 46px rgba(110,11,14,.10);border-color:#F4D2D3;}
.pic{width:46px;height:46px;border-radius:13px;background:#FFF0F0;color:#F23F44;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
.backers{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;}
.backer{font-size:14.5px;font-weight:600;color:#5A4B4E;background:#fff;border:1px solid #EADDDE;border-radius:100px;padding:11px 22px;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
  .founders{grid-template-columns:1fr 1fr;}
  .team{grid-template-columns:1fr 1fr;}
  .prin{grid-template-columns:1fr;}
}
@media(max-width:560px){ .founders{grid-template-columns:1fr;} .team{grid-template-columns:1fr;} }
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}
`;

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
  </svg>
);

type Leader = { name: string; role: string; img: string; href: string };

const leaders: Leader[] = [
  { name: 'Abhishek Shah', role: 'Founder and CEO', img: '/assets/abhishek-shah.png', href: 'https://www.linkedin.com/in/abhishekrshah' },
  { name: 'Namrata Kamdar', role: 'Co-Founder and COO', img: '/assets/namrata-kamdar.png', href: 'https://www.linkedin.com/in/namrata-kamdar-02869140/' },
  { name: 'Jiten Modi', role: 'Co-Founder and CTO', img: '/assets/jiten-modi.png', href: 'https://www.linkedin.com/in/jitenmodi/' },
  { name: 'Akash Patange', role: 'Director of Marketing', img: 'https://testlify.com/wp-content/uploads/2026/05/Akash-Patange-2.png', href: 'https://www.linkedin.com/in/akash-patange/' },
  { name: 'Pradeep Panicker', role: 'Head of Sales', img: 'https://testlify.com/wp-content/uploads/2026/05/Pradeep-Panicker.png', href: 'https://www.linkedin.com/in/ppanicker/' },
  { name: 'Taylor Gendron', role: 'Head of Enterprise Sales', img: 'https://testlify.com/wp-content/uploads/2026/05/Taylor-Gendron.png', href: 'https://www.linkedin.com/in/taylor-gendron-0ab954114/' },
  { name: 'Sankalp Menon', role: 'Senior Product Delivery Manager', img: 'https://testlify.com/wp-content/uploads/2026/05/Sankalp-Menon.png', href: 'https://www.linkedin.com/in/sankalp-menon/' },
  { name: 'Anuraag Raman', role: 'Director of Customer Success', img: 'https://testlify.com/wp-content/uploads/2026/05/Anuraag-Raman.png', href: 'https://www.linkedin.com/in/anuraag-surany-raman/' },
  { name: 'Usha Seshan', role: 'Senior Data Associate', img: 'https://testlify.com/wp-content/uploads/2026/05/Usha-Seshan-1.png', href: 'https://www.linkedin.com/in/usha-seshan-2a2049303/' },
  { name: 'Tej Gala', role: 'Lead Product Strategist', img: 'https://testlify.com/wp-content/uploads/2026/05/Tej-Gala.png', href: 'https://www.linkedin.com/in/tejgala/' },
  { name: 'Ritu Doshi', role: 'Head of Finance', img: 'https://testlify.com/wp-content/uploads/2026/05/Ritu-Doshi.png', href: 'https://www.linkedin.com/in/ca-ritu-doshi/' },
  { name: 'Arushi Shah', role: 'People and Talent Partner', img: 'https://testlify.com/wp-content/uploads/2026/05/Arushi-Shah.png', href: 'https://www.linkedin.com/in/arushishah9/' },
];

export default function OurLeadershipPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <SiteHeader announcement="We're hiring across product, engineering and GTM" announcementCta="See openings" />

      <section className="lhero">
        <div className="lblob b1"></div><div className="lblob b2"></div>
        <svg className="lgraphic" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" fill="none">
          <g className="lline" stroke="#F0D9DA" strokeWidth="1.5">
            <line x1="70" y1="40" x2="70" y2="130"></line>
            <line x1="70" y1="40" x2="150" y2="90"></line>
            <line x1="70" y1="130" x2="20" y2="200"></line>
            <line x1="1130" y1="350" x2="1130" y2="270"></line>
            <line x1="1130" y1="350" x2="1050" y2="310"></line>
            <line x1="1130" y1="270" x2="1180" y2="200"></line>
          </g>
          <g fill="#F23F44">
            <circle className="lroot" cx="70" cy="40" r="7"></circle>
          </g>
          <g fill="#FBD0D1">
            <circle className="lnode" cx="150" cy="90" r="6" style={{ animationDelay: '0s' }}></circle>
            <circle className="lnode" cx="70" cy="130" r="6" style={{ animationDelay: '.3s' }}></circle>
            <circle className="lnode" cx="20" cy="200" r="5" style={{ animationDelay: '.6s' }}></circle>
            <circle className="lnode" cx="1130" cy="350" r="6" style={{ animationDelay: '.9s' }}></circle>
            <circle className="lnode" cx="1050" cy="310" r="5" style={{ animationDelay: '1.2s' }}></circle>
            <circle className="lnode" cx="1130" cy="270" r="6" style={{ animationDelay: '.2s' }}></circle>
            <circle className="lnode" cx="1180" cy="200" r="5" style={{ animationDelay: '.5s' }}></circle>
          </g>
        </svg>
        <div className="wrap lhero-in" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal" style={{ justifyContent: 'center' }}>Our leadership<b>.</b></p>
          <h1 className="h1 reveal" style={{ marginTop: '14px', transitionDelay: '.04s' }}>The people betting<br /><span style={{ color: '#F23F44' }}>everything on skill</span></h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>Testlify&apos;s leadership team sets the strategic direction and vision of the company — driving growth, product innovation and a hiring standard built on proof, not pedigree.</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: '24px' }}>
        <div className="wrap">
          <div style={{ maxWidth: '640px', margin: '0 auto 46px', textAlign: 'center' }}>
            <p className="eyebrow reveal">Leadership team<b>.</b></p>
            <h2 className="h2 reveal" style={{ transitionDelay: '.04s' }}>Meet the leadership team</h2>
          </div>
          <div className="founders reveal">
            {leaders.map((l) => (
              <div className="fcard" key={l.name}>
                <div className="fav">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.img} alt={l.name} loading="lazy" />
                </div>
                <p className="fname">{l.name}</p>
                <p className="frole">{l.role}</p>
                <a className="llink" href={l.href} target="_blank" rel="noopener"><LinkedInIcon />LinkedIn</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </>
  );
}
