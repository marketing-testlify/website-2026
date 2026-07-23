import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CtaBand from '@/components/CtaBand';
import CtaButton from '@/components/CtaButton';

const css = `
*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;color:#1A1014;background:#fff;}
a{text-decoration:none;color:inherit;}
.wrap{max-width:1240px;margin:0 auto;padding:0 28px;}
.sec{padding:104px 28px;}
.eyebrow{font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#8A7A7D;margin:0 0 18px;}
.eyebrow b{color:#F23F44;font-weight:600;}
.h1{font-size:62px;line-height:1.04;font-weight:800;letter-spacing:-2px;margin:0;color:#1A1014;}
.h2{font-size:43px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0;color:#1A1014;}
.h3{font-size:22px;line-height:1.25;font-weight:700;letter-spacing:-.4px;margin:0;color:#1A1014;}
.lead{font-size:19px;line-height:1.6;color:#5A4B4E;font-weight:400;}
.body{font-size:16px;line-height:1.66;color:#5A4B4E;}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1);}
.reveal.in{opacity:1;transform:none;}
@media(max-width:920px){
  .h1{font-size:42px;letter-spacing:-1.4px;}
  .h2{font-size:32px;letter-spacing:-1px;}
  .sec{padding:72px 22px;}
}
.acc{color:#F23F44;}
.phero{position:relative;overflow:hidden;padding:96px 28px 60px;background:radial-gradient(1100px 560px at 50% -12%,#FFE9E7 0%,rgba(255,240,238,0) 60%),#fff;text-align:center;}
.hero-in{position:relative;z-index:2;max-width:760px;margin:0 auto;}
.hblob{position:absolute;border-radius:50%;filter:blur(46px);opacity:.55;z-index:0;pointer-events:none;}
.hblob.b1{width:380px;height:380px;background:radial-gradient(circle,#FF7A52,rgba(255,122,82,0));top:-120px;left:-80px;animation:hblur 9s ease-in-out infinite;}
.hblob.b2{width:340px;height:340px;background:radial-gradient(circle,#F23F44,rgba(242,63,68,0));top:-10px;right:-90px;animation:hblur 12s ease-in-out infinite 1s;}
@keyframes hblur{0%,100%{filter:blur(40px);opacity:.42;transform:scale(1);}50%{filter:blur(84px);opacity:.7;transform:scale(1.16);}}
.pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.pcard{background:#fff;border:1px solid #F2E6E7;border-radius:18px;padding:22px;display:flex;flex-direction:column;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;}
.pcard:hover{transform:translateY(-4px);border-color:#FBD0D1;box-shadow:0 16px 34px rgba(110,11,14,.10);}
.ptag{display:inline-block;font-size:11.5px;font-weight:600;letter-spacing:.02em;color:#F23F44;background:#FFF0F0;border-radius:100px;padding:5px 12px;margin-bottom:16px;align-self:flex-start;}
.pclogo{height:110px;width:100%;display:flex;align-items:center;justify-content:center;margin-bottom:18px;overflow:hidden;padding:14px;}
.pclogo img{width:100%;height:100%;object-fit:contain;}
.pclogofb{font-size:22px;font-weight:800;color:#1A1014;letter-spacing:-.3px;}
.pname{font-size:18px;font-weight:700;color:#1A1014;margin:0 0 8px;}
.pdesc{font-size:14.5px;line-height:1.6;color:#5A4B4E;margin:0;flex:1;}
@media(max-width:920px){ .pgrid{grid-template-columns:1fr;} }
h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

type Partner = { name: string; category: string; desc: string; img: string | null };

const partners: Partner[] = [
  { name: 'TALiNT Partners', category: 'Media & research', desc: 'TALiNT Partners connects TA and HR leaders worldwide through international events, research, and market intelligence.', img: 'https://testlify.com/wp-content/uploads/2026/06/Talint-partners.png' },
  { name: 'Job Adder', category: 'Applicant tracking systems', desc: 'Simplify recruitment tasks and find the right talent faster with JobAdder.', img: 'https://testlify.com/wp-content/uploads/2023/12/JOnAdder.png' },
  { name: 'Xoxoday', category: 'Employee recognition', desc: 'Xoxoday boosts employee morale with unique and engaging rewards and recognition.', img: 'https://testlify.com/wp-content/uploads/2023/12/xoxoday.png' },
  { name: 'Akrivia HCM', category: 'Core HR', desc: 'Akrivia HCM centralizes human capital management for organizational efficiency.', img: 'https://testlify.com/wp-content/uploads/2023/12/Akrivia-HCM.png' },
  { name: 'Udder', category: 'Core HR', desc: 'Udder improves employee productivity with comprehensive workforce solutions.', img: 'https://testlify.com/wp-content/uploads/2023/12/Udder.png' },
  { name: 'Simplified', category: 'Core HR', desc: 'Simplified streamlines HR operations with an easy-to-use and efficient platform.', img: 'https://testlify.com/wp-content/uploads/2023/12/simplified-1.png' },
  { name: 'Drawmetrics', category: 'Conflict management', desc: 'Drawmetrics helps you gain insights into your hiring data for informed decision-making.', img: 'https://testlify.com/wp-content/uploads/2023/12/drawmetrics.png' },
  { name: 'Whire', category: 'Staffing', desc: 'Whire enhances your recruitment process with innovative and efficient tools.', img: 'https://testlify.com/wp-content/uploads/2023/12/whire-1.png' },
  { name: 'Ontop', category: 'Payroll management', desc: 'Ontop manages HR tasks effortlessly with a comprehensive HR management solution.', img: 'https://testlify.com/wp-content/uploads/2023/12/ontop-1.png' },
  { name: 'Veremark', category: 'Background checks', desc: 'Veremark verifies candidate credentials seamlessly for trustworthy hiring decisions.', img: 'https://testlify.com/wp-content/uploads/2023/12/veremark.png' },
  { name: 'Grove HR', category: 'Core HR', desc: 'Grove cultivates a positive work culture by automating onboarding, performance management, time-off, attendance tracking and payroll assistance.', img: 'https://testlify.com/wp-content/uploads/2023/12/grove-1.png' },
  { name: 'Comeet', category: 'Applicant tracking systems', desc: 'Comeet modernizes your hiring process with an all-in-one collaborative platform.', img: 'https://testlify.com/wp-content/uploads/2023/12/comeet-1.png' },
  { name: 'Lever', category: 'Applicant tracking systems', desc: 'Lever helps you optimize recruitment workflows and make data-driven hiring decisions.', img: 'https://testlify.com/wp-content/uploads/2023/12/lever.png' },
  { name: 'Recruitee', category: 'Applicant tracking systems', desc: 'Recruitee helps you elevate your hiring game with a user-friendly recruitment platform.', img: 'https://testlify.com/wp-content/uploads/2023/12/recruitee.png' },
  { name: 'Playroll', category: 'Core HR', desc: 'Playroll simplifies payroll processes and ensures accurate and timely payments.', img: 'https://testlify.com/wp-content/uploads/2023/12/playroll-1.png' },
  { name: 'JazzHR', category: 'Applicant tracking systems', desc: 'JazzHR streamlines your hiring process with an intuitive and collaborative platform.', img: null },
];

export default function OurPartnersPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <SiteHeader
        announcement="Grow with Testlify — partner programs now open"
        announcementCta="Become a partner"
        homeHref="/"
      />

      <section className="phero">
        <div className="hblob b1"></div>
        <div className="hblob b2"></div>
        <div className="hero-in wrap" style={{ maxWidth: '860px' }}>
          <p className="eyebrow reveal">Our partners<b>.</b></p>
          <h1 className="h1 reveal" style={{ transitionDelay: '.04s' }}>
            Building HR&apos;s future <span className="acc">together</span>
          </h1>
          <p className="lead reveal" style={{ margin: '22px auto 0', maxWidth: '640px', transitionDelay: '.08s' }}>
            Testlify is proud to partner with revolutionary startups and organizations working to make the world a better place for HR.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '26px', transitionDelay: '.08s' }}>
            <CtaButton label="Learn more" href="/partnership" variant="primary" size="md" icon="arrow" />
            <CtaButton label="Reach out for partnership" href="/contact" variant="ghost" size="md" icon="none" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="pgrid reveal">
            {partners.map((ptn) => (
              <div className="pcard" key={ptn.name}>
                <span className="ptag">{ptn.category}</span>
                {ptn.img ? (
                  <div className="pclogo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ptn.img} alt={ptn.name} />
                  </div>
                ) : (
                  <div className="pclogo">
                    <span className="pclogofb">{ptn.name}</span>
                  </div>
                )}
                <h3 className="pname">{ptn.name}</h3>
                <p className="pdesc">{ptn.desc}</p>
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
