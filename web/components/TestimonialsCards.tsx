const STAR = (
  <svg viewBox="0 0 24 24" fill="#F23F44">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const Stars = () => (
  <div className="tcc-stars">
    {STAR}
    {STAR}
    {STAR}
    {STAR}
    {STAR}
  </div>
);

type TestimonialsCardsProps = {
  bg?: string;
  eyebrow?: string;
  heading?: string;
  q1?: string;
  name1?: string;
  role1?: string;
  badge1?: string;
  q2?: string;
  name2?: string;
  role2?: string;
  badge2?: string;
};

export default function TestimonialsCards({
  bg = '#ffffff',
  eyebrow = '',
  heading = 'What hiring teams say about skills-based hiring',
  q1 = '',
  name1 = '',
  role1 = '',
  badge1 = '',
  q2 = '',
  name2 = '',
  role2 = '',
  badge2 = '',
}: TestimonialsCardsProps) {
  const hasEyebrow = !!eyebrow;
  const hasBadge1 = !!badge1;
  const hasBadge2 = !!badge2;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
.tcc-sec{padding:96px 0;font-family:'Poppins',sans-serif;}
.tcc-w{max-width:1240px;margin:0 auto;padding:0 28px;}
.tcc-eyebrow{font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#8A7A7D;margin:0 0 16px;text-wrap:balance;}
.tcc-eyebrow>span:last-child{color:#F23F44;}
.tcc-h2{font-size:44px;line-height:1.12;font-weight:800;letter-spacing:-1px;color:#1A1014;margin:0 0 44px;text-wrap:balance;max-width:940px;}
.tcc-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;}
.tcc-card{background:#fff;border:1px solid #F0E2E3;border-radius:20px;padding:38px 36px;}
.tcc-stars{display:flex;gap:5px;margin-bottom:20px;}
.tcc-stars svg{width:20px;height:20px;}
.tcc-q{font-size:20px;line-height:1.5;font-style:italic;color:#2A1D21;margin:0 0 26px;text-wrap:pretty;}
.tcc-nm{font-weight:700;font-size:17px;color:#1A1014;}
.tcc-role{font-size:14.5px;color:#6C5A5D;margin-top:4px;}
.tcc-badge{display:inline-block;white-space:nowrap;margin-top:20px;background:#FCE0DE;color:#F23F44;font-size:12.5px;font-weight:700;padding:7px 14px;border-radius:100px;}
@media(max-width:820px){.tcc-grid{grid-template-columns:1fr;}.tcc-h2{font-size:32px;}.tcc-sec{padding:68px 0;}}
`,
        }}
      />
      <section className="tcc-sec" style={{ background: bg }}>
        <div className="tcc-w">
          {hasEyebrow && (
            <p className="tcc-eyebrow reveal">
              {eyebrow}
              <span>.</span>
            </p>
          )}
          <h2 className="tcc-h2 reveal">{heading}</h2>
          <div className="tcc-grid reveal">
            <div className="tcc-card">
              <Stars />
              <p className="tcc-q">{q1}</p>
              <div className="tcc-nm">{name1}</div>
              <div className="tcc-role">{role1}</div>
              {hasBadge1 && <span className="tcc-badge">{badge1}</span>}
            </div>
            <div className="tcc-card">
              <Stars />
              <p className="tcc-q">{q2}</p>
              <div className="tcc-nm">{name2}</div>
              <div className="tcc-role">{role2}</div>
              {hasBadge2 && <span className="tcc-badge">{badge2}</span>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
