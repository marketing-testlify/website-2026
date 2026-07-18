'use client';

import { useState } from 'react';

type FAQItem = { q: string; a: string };

const CSS = `
.fq-wrap{display:block;}
.fq-item{border-bottom:1px solid #F1E2E3;}
.fq-q{cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:22px;padding:24px 4px;}
.fq-t{font-size:18.5px;font-weight:600;letter-spacing:-.3px;color:#1A1014;}
.fq-chev{font-size:26px;font-weight:300;color:#F23F44;transition:transform .3s ease;line-height:1;flex:none;}
.fq-a{max-height:0;overflow:hidden;opacity:0;transition:max-height .42s ease,opacity .3s ease;}
.fq-p{font-size:16px;line-height:1.64;color:#5A4B4E;margin:0 0 24px;max-width:780px;}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function FAQ({
  eyebrow,
  heading,
  items,
}: {
  eyebrow?: string;
  heading?: string;
  items: FAQItem[];
}) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setOpen((s) => ({ ...s, [i]: !s[i] }));

  const list = Array.isArray(items) ? items : [];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="fq-wrap">
        {list.map((item, i) => (
          <div className="fq-item" key={i}>
            <div className="fq-q" onClick={() => toggle(i)}>
              <span className="fq-t">{item.q}</span>
              <span
                className="fq-chev"
                style={{ transform: open[i] ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </div>
            <div
              className="fq-a"
              style={open[i] ? { maxHeight: '800px', opacity: 1 } : { maxHeight: '0px', opacity: 0 }}
            >
              <p className="fq-p">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
