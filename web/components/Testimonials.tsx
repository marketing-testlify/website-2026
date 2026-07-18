'use client';

import { useEffect, useRef } from 'react';

type Item = { img: string; name: string; role: string; rating: string; quote: string };

type Props = {
  eyebrow?: string;
  heading?: string;
  items?: Item[];
};

const DEFAULT: Item[] = [
  { img: 'https://testlify.com/wp-content/uploads/2026/03/Xneelo-Chrissie-Blom.png', name: 'Chrissie Blom', role: 'Technical Talent Specialist, Xneelo', rating: '5.0', quote: 'We cut screening time by two-thirds. The ranked shortlist is the first thing my hiring managers open every morning.' },
  { img: 'https://testlify.com/wp-content/uploads/2026/03/Kimp-Senthu-Velnayagam.png', name: 'Senthu Velnayagam', role: 'People Ops, Kimp', rating: '5.0', quote: 'Skills-based assessments doubled our shortlist diversity and our offer-acceptance rate. The data finally backs every decision.' },
  { img: 'https://testlify.com/wp-content/uploads/2026/03/Endiprev-Daniela-Santos.png', name: 'Daniela Santos', role: 'HR Lead, Endiprev', rating: '5.0', quote: "Setup took an afternoon. Within a week we'd replaced three rounds of phone screens with one fair assessment." },
  { img: 'https://testlify.com/wp-content/uploads/2026/03/Virtual-Gurus-Abby-Belin.png', name: 'Abby Belin', role: 'Recruiting, Virtual Gurus', rating: '5.0', quote: "Candidates actually thank us for the experience. It feels fair, it's fast, and our drop-off fell off a cliff." },
];

const CSS = `
.tsm,.tsm *{box-sizing:border-box;font-family:'Poppins',sans-serif;}
.tsm-sec{padding:96px 28px;background:#fff;}
.tsm-inner{max-width:920px;margin:0 auto;text-align:center;}
.tsm-eyebrow{font-size:14px;font-weight:700;letter-spacing:1px;color:#8A7A7D;text-transform:uppercase;margin:0 0 14px;}
.tsm-eyebrow>span:last-child{color:#F23F44;}
.tsm-h2{font-size:46px;line-height:1.08;font-weight:800;letter-spacing:-1.4px;margin:0 0 44px;color:#1A1014;}
.tsm-stage{position:relative;max-width:1060px;margin:0 auto;}
.tsm-view{overflow:hidden;border-radius:26px;}
.tcard2{display:grid;grid-template-columns:300px 1fr;gap:0;background:#fff;border:1px solid #F4E4E5;border-radius:26px;overflow:hidden;box-shadow:0 24px 60px rgba(110,11,14,.10);text-align:left;}
.tphoto{position:relative;background:linear-gradient(160deg,#F76A6E,#A91E23);overflow:hidden;min-height:340px;}
.tphoto img{width:100%;height:100%;object-fit:cover;object-position:center 18%;}
.tphoto .g2badge{position:absolute;left:18px;bottom:18px;display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.94);border-radius:100px;padding:7px 13px;font-size:12.5px;font-weight:700;color:#1A1014;box-shadow:0 6px 16px rgba(0,0,0,.18);}
.tphoto .g2badge b{color:#FF492C;font-size:13px;letter-spacing:.5px;}
.tcontent{padding:46px 48px;display:flex;flex-direction:column;justify-content:center;}
.tquotemark{font-family:Georgia,serif;font-size:66px;line-height:.5;color:#FBD0D1;height:30px;}
.tstars{color:#F23F44;font-size:17px;letter-spacing:3px;margin-bottom:16px;}
.tquote2{font-size:24px;line-height:1.5;color:#1A1014;font-weight:600;letter-spacing:-.4px;margin:0 0 26px;}
.tname2{font-weight:700;font-size:16px;color:#1A1014;}
.trole2{font-size:14px;color:#8A7A7D;margin-top:2px;}
.tnav{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:50%;background:#fff;border:1px solid #F0D9DA;color:#F23F44;font-size:18px;cursor:pointer;box-shadow:0 10px 26px rgba(110,11,14,.14);display:flex;align-items:center;justify-content:center;transition:transform .2s ease, background .2s ease, color .2s ease;z-index:3;}
.tnav:hover{transform:translateY(-50%) scale(1.1);background:#F23F44;color:#fff;}
.ttrack{display:flex;cursor:grab;touch-action:pan-y;}
.ttrack.grabbing{cursor:grabbing;}
.tsm-dots{display:flex;justify-content:center;gap:9px;margin-top:26px;}
.tsm-dots span{height:9px;border-radius:6px;cursor:pointer;transition:all .3s ease;}
@media(max-width:760px){.tsm-sec{padding:64px 20px;}.tsm-h2{font-size:32px;}.tcard2{grid-template-columns:1fr;}.tphoto{min-height:200px;max-height:260px;}.tphoto img{object-fit:contain;object-position:center;}.tcontent{padding:30px 26px;}.tquote2{font-size:20px;}.tnav{display:none;}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export default function Testimonials({ eyebrow, heading, items }: Props) {
  const rootRef = useRef<HTMLElement>(null);

  const resolvedItems = Array.isArray(items) && items.length ? items : DEFAULT;
  const ey = eyebrow || 'Loved by HR teams';
  const hd = heading || "Hiring managers don't go back";

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let slide = 0;
    let slides = root.querySelectorAll('[data-slide]').length || 1;
    const track = root.querySelector('[data-track]') as (HTMLElement & { __cloned?: number; __x?: number; __raf?: number; __drag?: number }) | null;

    if (track && slides > 1 && !track.__cloned) {
      const first = track.querySelector('[data-slide]');
      if (first) {
        const c = first.cloneNode(true) as HTMLElement;
        c.setAttribute('data-clone', '');
        track.appendChild(c);
        track.__cloned = 1;
      }
    }

    const setX = (el: HTMLElement & { __raf?: number; __x?: number }, pct: number) => {
      if (el.__raf) cancelAnimationFrame(el.__raf);
      el.style.transform = 'translateX(' + pct + '%)';
      el.__x = pct;
    };

    const tweenX = (el: HTMLElement & { __raf?: number; __x?: number }, toPct: number, dur: number) => {
      if (el.__raf) cancelAnimationFrame(el.__raf);
      const from = typeof el.__x === 'number' ? el.__x : 0;
      const startT = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - startT) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        const v = from + (toPct - from) * e;
        el.style.transform = 'translateX(' + v + '%)';
        el.__x = v;
        if (p < 1) el.__raf = requestAnimationFrame(step);
        else el.__x = toPct;
      };
      el.__raf = requestAnimationFrame(step);
    };

    let loopSnap: ReturnType<typeof setTimeout> | undefined;
    const go = (i: number, user: boolean) => {
      const n = slides;
      if (!n) return;
      let target: number, real: number;
      if (i >= n) { target = n; real = 0; }
      else if (i < 0) { if (track) setX(track, -n * 100); target = n - 1; real = n - 1; }
      else { target = i; real = i; }
      slide = real;
      if (track) {
        tweenX(track, -target * 100, 480);
        if (target === n) { clearTimeout(loopSnap); loopSnap = setTimeout(() => setX(track, 0), 510); }
      }
      root.querySelectorAll('[data-dot]').forEach((d) => {
        const el = d as HTMLElement;
        const on = parseInt(el.getAttribute('data-dot') || '', 10) === real;
        el.style.width = on ? '26px' : '9px';
        el.style.background = on ? '#F23F44' : '#FBD0D1';
      });
      if (user && slideTimer) { clearInterval(slideTimer); slideTimer = setInterval(() => go(slide + 1, false), 4800); }
    };

    let slideTimer: ReturnType<typeof setInterval> | null = setInterval(() => go(slide + 1, false), 4800);

    // drag
    let dragCleanup: (() => void) | undefined;
    if (track && !track.__drag) {
      track.__drag = 1;
      let down = false, startX = 0, baseX = 0, moved = 0, w = 0;
      const start = (e: MouseEvent | TouchEvent) => {
        down = true; moved = 0;
        startX = ('touches' in e ? e.touches[0].clientX : e.clientX);
        w = track.getBoundingClientRect().width || 1;
        baseX = typeof track.__x === 'number' ? track.__x : -slide * 100;
        track.classList.add('grabbing');
        if (track.__raf) cancelAnimationFrame(track.__raf);
        if (slideTimer) { clearInterval(slideTimer); slideTimer = null; }
      };
      const move = (e: MouseEvent | TouchEvent) => {
        if (!down) return;
        const x = ('touches' in e ? e.touches[0].clientX : e.clientX);
        const dx = x - startX; moved = dx;
        const pct = baseX + (dx / w) * 100;
        track.style.transform = 'translateX(' + pct + '%)'; track.__x = pct;
        if (Math.abs(dx) > 6 && e.cancelable) e.preventDefault();
      };
      const end = () => {
        if (!down) return; down = false;
        track.classList.remove('grabbing');
        const threshold = w * 0.18;
        if (moved < -threshold) go(slide + 1, true);
        else if (moved > threshold) go(slide - 1, true);
        else go(slide, true);
      };
      track.addEventListener('mousedown', start);
      window.addEventListener('mousemove', move, { passive: false });
      window.addEventListener('mouseup', end);
      track.addEventListener('touchstart', start, { passive: true });
      track.addEventListener('touchmove', move, { passive: false });
      window.addEventListener('touchend', end);
      dragCleanup = () => {
        track.removeEventListener('mousedown', start);
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseup', end);
        track.removeEventListener('touchstart', start);
        track.removeEventListener('touchmove', move);
        window.removeEventListener('touchend', end);
      };
    }

    // wire nav + dots via delegation-free direct binding
    const prevBtn = root.querySelector('[data-prev]');
    const nextBtn = root.querySelector('[data-next]');
    const onPrev = () => go(slide - 1, true);
    const onNext = () => go(slide + 1, true);
    prevBtn?.addEventListener('click', onPrev);
    nextBtn?.addEventListener('click', onNext);
    const dotEls = Array.from(root.querySelectorAll('[data-dot]'));
    const onDot = (e: Event) => go(parseInt((e.currentTarget as HTMLElement).getAttribute('data-dot') || '', 10), true);
    dotEls.forEach((d) => d.addEventListener('click', onDot));

    return () => {
      if (slideTimer) clearInterval(slideTimer);
      if (loopSnap) clearTimeout(loopSnap);
      if (dragCleanup) dragCleanup();
      prevBtn?.removeEventListener('click', onPrev);
      nextBtn?.removeEventListener('click', onNext);
      dotEls.forEach((d) => d.removeEventListener('click', onDot));
      if (track) {
        track.__drag = undefined;
        track.__cloned = undefined;
        const clone = track.querySelector('[data-clone]');
        if (clone) clone.remove();
      }
    };
  }, [resolvedItems]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="tsm-sec tsm" ref={rootRef}>
        <div className="tsm-inner">
          <p className="tsm-eyebrow">{ey}<span>.</span></p>
          <h2 className="tsm-h2">{hd}</h2>
          <div className="tsm-stage">
            <div className="tsm-view">
              <div data-track className="ttrack" style={{ transform: 'translateX(0%)' }}>
                {resolvedItems.map((t, i) => (
                  <div data-slide key={i} style={{ flex: '0 0 100%', padding: '6px' }}>
                    <div className="tcard2">
                      <div className="tphoto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.img} alt={t.name} draggable={false} />
                        <span className="g2badge"><b>G2</b>{t.rating} ★</span>
                      </div>
                      <div className="tcontent">
                        <div className="tquotemark">&quot;</div>
                        <div className="tstars">★★★★★</div>
                        <p className="tquote2">{t.quote}</p>
                        <div>
                          <div className="tname2">{t.name}</div>
                          <div className="trole2">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button data-prev aria-label="Previous" className="tnav" style={{ left: '-22px' }}>‹</button>
            <button data-next aria-label="Next" className="tnav" style={{ right: '-22px' }}>›</button>
            <div className="tsm-dots">
              {resolvedItems.map((_, i) => (
                <span
                  key={i}
                  data-dot={i}
                  style={{
                    width: i === 0 ? '26px' : '9px',
                    height: '9px',
                    borderRadius: '6px',
                    background: i === 0 ? '#F23F44' : '#FBD0D1',
                    cursor: 'pointer',
                    transition: 'all .3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
