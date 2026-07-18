import Link from 'next/link';

const ICONS: Record<string, string> = {
  chart: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
  globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
  cap: '<path d="M22 10L12 5 2 10l10 5 10-5z"></path><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"></path>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
  headset: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
  compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
  bolt: '<polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>',
};

const CSS = `
@property --ucbang{syntax:"<angle>";initial-value:0deg;inherits:false;}
@keyframes ucrun{to{--ucbang:360deg;}}
.uc{position:relative;display:block;background:#fff;border:1px solid #F2E6E7;border-radius:20px;padding:26px;text-decoration:none;transition:transform .3s cubic-bezier(.2,.7,.3,1),border-color .3s,box-shadow .3s;overflow:hidden;}
.uc:hover{transform:translateY(-6px);border-color:transparent;box-shadow:0 22px 46px rgba(80,40,60,.12);}
.uc::before{content:"";position:absolute;inset:0;border-radius:20px;padding:1.8px;background:conic-gradient(from var(--ucbang),transparent 0deg,#FF7A52 35deg,#F23F44 80deg,transparent 150deg,transparent 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;opacity:0;transition:opacity .35s ease;pointer-events:none;z-index:1;}
.uc:hover::before{opacity:1;animation:ucrun 2.4s linear infinite;}
.uc-ic{position:relative;width:52px;height:52px;border-radius:16px;display:flex;align-items:center;justify-content:center;transition:transform .35s cubic-bezier(.2,.7,.3,1),box-shadow .35s ease;}
.uc-ic::after{content:"";position:absolute;inset:0;border-radius:16px;background:linear-gradient(150deg,rgba(255,255,255,.65),rgba(255,255,255,0) 55%);pointer-events:none;}
.uc:hover .uc-ic{transform:translateY(-2px) scale(1.08) rotate(-3deg);box-shadow:0 12px 24px color-mix(in srgb,var(--ink) 32%,transparent);}
.uc-t{font-size:17px;font-weight:700;letter-spacing:-.2px;color:#1A1014;margin:18px 0 7px;}
.uc-d{font-size:13.5px;line-height:1.5;color:#5A4B4E;margin:0;}
.uc-arrow{color:#F23F44;font-size:14px;font-weight:600;margin-top:14px;display:inline-flex;align-items:center;gap:6px;opacity:0;transform:translateX(-4px);transition:opacity .25s,transform .25s;}
.uc:hover .uc-arrow{opacity:1;transform:translateX(0);}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export interface UseCaseCardProps {
  icon?: string;
  title?: string;
  desc?: string;
  tint?: string;
  ink?: string;
  href?: string;
}

export default function UseCaseCard({
  icon = 'chart',
  title = 'Volume hiring',
  desc = 'Screen thousands of applicants automatically and surface the top few in minutes.',
  tint = '#FFEDED',
  ink = '#F23F44',
  href = '#',
}: UseCaseCardProps) {
  const inner = ICONS[icon] || ICONS.chart;
  const isInternal = href.startsWith('/') || (!/^https?:\/\//.test(href) && href !== '#');

  const content = (
    <>
      <div
        className="uc-ic"
        style={{ ['--ink' as string]: ink, background: tint, color: ink }}
      >
        <svg
          width={23}
          height={23}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: inner }}
        />
      </div>
      <div className="uc-t">{title}</div>
      <p className="uc-d">{desc}</p>
      <span className="uc-arrow">Explore →</span>
    </>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {isInternal ? (
        <Link className="uc" href={href}>
          {content}
        </Link>
      ) : (
        <a className="uc" href={href}>
          {content}
        </a>
      )}
    </>
  );
}
