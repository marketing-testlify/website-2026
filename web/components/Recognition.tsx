type Medal = { src: string; alt: string };

const BASE = 'https://testlify.com/wp-content/uploads/2026/03/';

const DEFAULT_MEDALS: Medal[] = [
  { src: BASE + 'TalentAssessment_HighPerformer_Enterprise_HighPerformer.png', alt: 'G2 High Performer Enterprise' },
  { src: BASE + 'TalentAssessment_HighPerformer_Mid-Market_HighPerformer.png', alt: 'G2 High Performer Mid-Market' },
  { src: BASE + 'TalentAssessment_Leader_Leader.png', alt: 'G2 Leader' },
  { src: BASE + 'TechnicalSkillsScreening_BestMeetsRequirements_Mid-Market_MeetsRequirements.png', alt: 'G2 Best Meets Requirements' },
  { src: BASE + 'TechnicalSkillsScreening_BestRelationship_Total.png', alt: 'G2 Best Relationship' },
  { src: BASE + 'TechnicalSkillsScreening_UsersMostLikelyToRecommend_Mid-Market_Nps.png', alt: 'G2 Users Most Likely To Recommend' },
];

type RecognitionProps = {
  bg?: string;
  eyebrow?: string;
  heading?: string;
  medals?: Medal[];
};

const css = `
.rec-sec{padding:96px 28px;font-family:'Poppins',sans-serif;}
.rec-wrap{max-width:1100px;margin:0 auto;text-align:center;}
.rec-eyebrow{font-size:14px;font-weight:700;letter-spacing:1px;color:#8A7A7D;text-transform:uppercase;margin:0 0 14px;}
.rec-eyebrow>span:last-child{color:#F23F44;}
.rec-h2{font-size:42px;line-height:1.1;font-weight:800;letter-spacing:-1.3px;margin:0 0 44px;color:#1A1014;}
.rec-medalrow{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:24px;}
.rec-medal{height:122px;width:auto;object-fit:contain;transition:transform .3s ease;}
.rec-medal:hover{transform:translateY(-8px) scale(1.05);}
.rec-reveal{opacity:0;transform:translateY(24px);transition:opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1);}
.rec-reveal.rec-in{opacity:1;transform:none;}
@media(max-width:720px){.rec-h2{font-size:30px;}.rec-medalrow{gap:18px;}.rec-medal{height:96px;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function Recognition({
  bg = '#fff',
  eyebrow = 'Awards and recognitions',
  heading = 'Recognized by the people who use it',
  medals = DEFAULT_MEDALS,
}: RecognitionProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <section className="rec-sec" style={{ background: bg }}>
        <div className="rec-wrap">
          <p className="rec-eyebrow rec-reveal reveal">
            {eyebrow}
            <span>.</span>
          </p>
          <h2 className="rec-h2 rec-reveal reveal">{heading}</h2>
          <div className="rec-medalrow rec-reveal reveal">
            {medals.map((m, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img key={i} className="rec-medal" src={m.src} alt={m.alt} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
