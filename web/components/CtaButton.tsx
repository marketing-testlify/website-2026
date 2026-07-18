'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const CSS = `
.ctabtn{position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:9px;font-family:'Poppins',sans-serif;font-weight:600;text-decoration:none;cursor:pointer;border:1.5px solid transparent;white-space:nowrap;}
.ctabtn.sz-lg{font-size:17px;padding:16px 30px;border-radius:15px;}
.ctabtn.sz-md{font-size:16px;padding:14px 26px;border-radius:14px;}
.ctabtn.sz-sm{font-size:14.5px;padding:11px 20px;border-radius:12px;}
.ctabtn.v-primary{background:#F23F44;color:#fff;box-shadow:0 14px 30px rgba(242,63,68,.35);transition:transform .18s cubic-bezier(.2,.7,.3,1),box-shadow .25s ease;}
.ctabtn.v-primary::after{content:"";position:absolute;top:0;left:0;width:38%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.5),transparent);transform:translateX(-130%) skewX(-18deg);pointer-events:none;}
.ctabtn.v-primary:hover{transform:translateY(-2px);box-shadow:0 20px 40px rgba(242,63,68,.45);}
.ctabtn.v-primary:hover::after{animation:ctashine 1.05s ease;}
.ctabtn.v-secondary{background:#fff;color:#1A1014;border:1.5px solid #F0D9DA;transition:transform .25s ease,border-color .25s ease;}
.ctabtn.v-secondary:hover{transform:translateY(-3px);border-color:#F23F44;}
.ctabtn.v-light{background:#fff;color:#C0242B;transition:transform .18s cubic-bezier(.2,.7,.3,1),box-shadow .25s ease;box-shadow:0 12px 28px rgba(0,0,0,.18);}
.ctabtn.v-light::after{content:"";position:absolute;top:0;left:0;width:38%;height:100%;background:linear-gradient(100deg,transparent,rgba(242,63,68,.18),transparent);transform:translateX(-130%) skewX(-18deg);pointer-events:none;}
.ctabtn.v-light:hover{transform:translateY(-2px);box-shadow:0 18px 38px rgba(0,0,0,.24);}
.ctabtn.v-light:hover::after{animation:ctashine 1.05s ease;}
.ctabtn.v-outline-light{background:rgba(255,255,255,.14);color:#fff;border:1.5px solid rgba(255,255,255,.4);transition:transform .25s ease,background .25s ease,border-color .25s ease;}
.ctabtn.v-outline-light:hover{transform:translateY(-3px);background:rgba(255,255,255,.22);border-color:#fff;}
.ctabtn.v-ghost{background:transparent;color:#1A1014;border:1.5px solid #E7D2D3;transition:transform .25s ease,border-color .25s ease,background .25s ease;}
.ctabtn.v-ghost:hover{transform:translateY(-3px);border-color:#F23F44;background:#FFF5F5;}
.ctabtn .cta-arrow{font-size:19px;line-height:1;}
.ctabtn .cta-play{width:20px;height:20px;border-radius:50%;background:#FFF0F0;display:inline-flex;align-items:center;justify-content:center;color:#F23F44;}
.ctabtn .cta-play svg{display:block;margin-left:1px;width:8px;height:10px;}
@keyframes ctashine{0%{transform:translateX(-130%) skewX(-18deg)}55%,100%{transform:translateX(260%) skewX(-18deg)}}

h1,h2,h3,h4,.h1,.h2,.h3,.hero h1,.eyebrow{text-wrap:balance;}p,li,.body,.lead,.sub,figcaption,blockquote{text-wrap:pretty;}/*om-balance-rule*/
`;

export interface CtaButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'light' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'play' | 'none';
  magnetic?: boolean;
}

export default function CtaButton({
  label = 'Try for free',
  href = '#',
  variant = 'primary',
  size = 'lg',
  icon,
  magnetic = false,
}: CtaButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const resolvedIcon = icon || (variant === 'secondary' ? 'none' : 'arrow');
  const isArrow = resolvedIcon === 'arrow';
  const isPlay = resolvedIcon === 'play';

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn || !magnetic) return;
    const strength = 0.32,
      lift = -3;
    const enter = () => {
      btn.style.transition = 'transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .25s ease';
      btn.style.transform = 'translate(0px,' + lift + 'px)';
    };
    const move = (e: MouseEvent) => {
      btn.style.transition = 'transform .08s linear, box-shadow .25s ease';
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength + lift;
      btn.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
    };
    const leave = () => {
      btn.style.transition = 'transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s ease';
      btn.style.transform = '';
    };
    btn.addEventListener('mouseenter', enter);
    btn.addEventListener('mousemove', move);
    btn.addEventListener('mouseleave', leave);
    return () => {
      btn.removeEventListener('mouseenter', enter);
      btn.removeEventListener('mousemove', move);
      btn.removeEventListener('mouseleave', leave);
    };
  }, [magnetic]);

  const className = `ctabtn v-${variant} sz-${size}`;
  const isInternal = href.startsWith('/') || (!href.startsWith('http') && !href.startsWith('#'));

  const inner = (
    <>
      {isPlay && (
        <span className="cta-play">
          <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor">
            <path d="M0 0.6v9.8l9-4.9z"></path>
          </svg>
        </span>
      )}
      {label}
      {isArrow && <span className="cta-arrow">→</span>}
    </>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      {isInternal ? (
        <Link className={className} href={href} ref={btnRef}>
          {inner}
        </Link>
      ) : (
        <a className={className} href={href} ref={btnRef}>
          {inner}
        </a>
      )}
    </>
  );
}
