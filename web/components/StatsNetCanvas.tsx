"use client";

import { useEffect, useRef } from "react";

/**
 * Animated canvas backdrop for the homepage "Global reach" stats band.
 * Ported 1:1 from the prototype's initGlobalNet() / _drawStatAnim(): each of the
 * four stats maps to its own visualization (radar map dots, scrolling test
 * cards, floating reactions, racing comets). Hovering a stat switches the active
 * visualization with a cross-fade. `active` is controlled by the parent.
 */
type S = {
  mapDots: { x: number; y: number; nx: number }[];
  cx: number;
  cy: number;
  cur: number;
  prev: number;
  fade: number;
  hearts: {
    x: number;
    y: number;
    vy: number;
    sz: number;
    ph: number;
    life: number;
    dur: number;
    shape: number;
    rose: boolean;
  }[];
  ht: number;
  hlast: number;
};

export default function StatsNetCanvas({ active }: { active: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<S>({
    mapDots: [],
    cx: 0,
    cy: 0,
    cur: 0,
    prev: 0,
    fade: 1,
    hearts: [],
    ht: 0,
    hlast: 0,
  });

  // Switch active visualization with a cross-fade when the hovered stat changes.
  useEffect(() => {
    const S = stateRef.current;
    if (S.cur === active) return;
    S.prev = S.cur;
    S.cur = active;
    S.fade = 0;
  }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const S = stateRef.current;
    let W = 0;
    let H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const build = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = Math.max(1, W * dpr);
      canvas.height = Math.max(1, H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S.cx = W / 2;
      S.cy = H / 2;
      const regions = [
        [0.16, 0.34, 0.1, 0.13, 22],
        [0.28, 0.66, 0.055, 0.13, 14],
        [0.49, 0.3, 0.045, 0.07, 10],
        [0.53, 0.57, 0.075, 0.15, 20],
        [0.68, 0.34, 0.14, 0.13, 30],
        [0.85, 0.72, 0.05, 0.05, 7],
      ];
      const mpx = W * 0.06;
      const mpw = W * 0.88;
      const mpy = H * 0.12;
      const mph = H * 0.74;
      S.mapDots = [];
      regions.forEach((rg) => {
        for (let i = 0; i < rg[4]; i++) {
          const ang = Math.random() * 6.283;
          const rad = Math.sqrt(Math.random());
          const nx = rg[0] + Math.cos(ang) * rg[2] * rad;
          const ny = rg[1] + Math.sin(ang) * rg[3] * rad;
          S.mapDots.push({ x: mpx + nx * mpw, y: mpy + ny * mph, nx });
        }
      });
    };
    build();
    window.addEventListener("resize", build, { passive: true });

    // ---- shape helpers ----
    const rrect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };
    const heart = (x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y + s * 0.5);
      ctx.bezierCurveTo(x - s, y - s * 0.2, x - s * 0.5, y - s, x, y - s * 0.35);
      ctx.bezierCurveTo(x + s * 0.5, y - s, x + s, y - s * 0.2, x, y + s * 0.5);
      ctx.closePath();
      ctx.stroke();
    };
    const star = (cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 10; i++) {
        const ang = -Math.PI / 2 + (i * Math.PI) / 5;
        const rad = i % 2 ? r * 0.45 : r;
        const x = cx + Math.cos(ang) * rad;
        const y = cy + Math.sin(ang) * rad;
        if (i) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    };
    const smiley = (cx: number, cy: number, r: number) => {
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 7);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy + r * 0.04, r * 0.55, 0.18 * Math.PI, 0.82 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - r * 0.36, cy - r * 0.22, r * 0.1, 0, 7);
      ctx.arc(cx + r * 0.36, cy - r * 0.22, r * 0.1, 0, 7);
      ctx.fill();
    };
    const thumb = (cx: number, cy: number, s: number) => {
      ctx.lineWidth = 1.6;
      const X = (v: number) => cx + v * s;
      const Y = (v: number) => cy + v * s;
      rrect(cx - 0.62 * s, cy + 0.05 * s, s * 0.34, s * 0.95, 3);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(X(-0.2), Y(1.0));
      ctx.lineTo(X(-0.2), Y(0.0));
      ctx.lineTo(X(0.12), Y(-0.5));
      ctx.quadraticCurveTo(X(0.22), Y(-0.8), X(0.4), Y(-0.5));
      ctx.lineTo(X(0.3), Y(0.0));
      ctx.lineTo(X(0.95), Y(0.0));
      ctx.quadraticCurveTo(X(1.06), Y(0.05), X(1.0), Y(0.3));
      ctx.lineTo(X(0.85), Y(0.92));
      ctx.quadraticCurveTo(X(0.8), Y(1.0), X(0.6), Y(1.0));
      ctx.closePath();
      ctx.stroke();
    };

    const drawStatAnim = (idx: number, t: number, a: number) => {
      if (a <= 0) return;
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, a));
      if (idx === 0) {
        const dots = S.mapDots || [];
        const sweep = (t * 0.12) % 1.15;
        dots.forEach((d) => {
          const on = d.nx <= sweep;
          const edge = Math.max(0, 1 - Math.abs(d.nx - sweep) / 0.06);
          if (on) {
            const glow = 0.4 + 0.6 * edge;
            ctx.fillStyle = "rgba(242,63,68," + glow.toFixed(3) + ")";
            ctx.beginPath();
            ctx.arc(d.x, d.y, 1.8 + 1.9 * edge, 0, 7);
            ctx.fill();
            if (edge > 0.25) {
              ctx.strokeStyle = "rgba(242,63,68," + (0.4 * edge).toFixed(3) + ")";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(d.x, d.y, 4 + 6 * (1 - edge), 0, 7);
              ctx.stroke();
            }
          } else {
            ctx.fillStyle = "rgba(255,206,197,0.13)";
            ctx.beginPath();
            ctx.arc(d.x, d.y, 1.3, 0, 7);
            ctx.fill();
          }
        });
      } else if (idx === 1) {
        const cw = 54;
        const chh = 78;
        const gapX = 46;
        const gapY = 26;
        const step = chh + gapY;
        const cols = Math.max(1, Math.floor((W - gapX) / (cw + gapX)));
        const totalW = cols * (cw + gapX) - gapX;
        const x0 = (W - totalW) / 2;
        const speed = 82;
        for (let c = 0; c < cols; c++) {
          const colOff = (t * speed + c * 60) % step;
          const x = x0 + c * (cw + gapX);
          for (let i = -1; i < Math.ceil(H / step) + 1; i++) {
            const y = H - (i * step - colOff);
            ctx.fillStyle = "rgba(255,255,255,0.022)";
            rrect(x, y, cw, chh, 6);
            ctx.fill();
            ctx.fillStyle = "rgba(242,63,68,0.22)";
            rrect(x + 8, y + 8, cw - 16, 7, 2);
            ctx.fill();
            ctx.fillStyle = "rgba(255,255,255,0.07)";
            rrect(x + 8, y + 24, cw - 16, 3.5, 2);
            ctx.fill();
            ctx.fillStyle = "rgba(255,255,255,0.045)";
            rrect(x + 8, y + 31, (cw - 16) * 0.64, 3.5, 2);
            ctx.fill();
            ctx.fillStyle = "rgba(242,63,68,0.2)";
            rrect(x + 8, y + chh - 14, 14, 7, 2);
            ctx.fill();
          }
        }
      } else if (idx === 2) {
        if (!S.hearts.length) {
          S.ht = t;
          S.hlast = t;
          for (let i = 0; i < 14; i++) {
            S.hearts.push({
              x: S.cx + (Math.random() - 0.5) * W * 0.6,
              y: H * 0.18 + Math.random() * H * 0.7,
              vy: 26 + Math.random() * 30,
              sz: 9 + Math.random() * 8,
              ph: Math.random() * 6.28,
              life: Math.random() * 2.4,
              dur: 2.6 + Math.random() * 1.3,
              shape: (Math.random() * 4) | 0,
              rose: Math.random() < 0.5,
            });
          }
        }
        const dt = Math.min(0.05, t - S.ht);
        S.ht = t;
        if (t - S.hlast > 0.16) {
          S.hlast = t;
          S.hearts.push({
            x: S.cx + (Math.random() - 0.5) * W * 0.5,
            y: H * 0.8,
            vy: 26 + Math.random() * 30,
            sz: 9 + Math.random() * 8,
            ph: Math.random() * 6.28,
            life: 0,
            dur: 2.6 + Math.random() * 1.3,
            shape: (Math.random() * 4) | 0,
            rose: Math.random() < 0.5,
          });
        }
        for (let i = S.hearts.length - 1; i >= 0; i--) {
          const p = S.hearts[i];
          p.life += dt;
          if (p.life > p.dur) {
            S.hearts.splice(i, 1);
            continue;
          }
          p.y -= p.vy * dt;
          const drift = Math.sin(t * 1.5 + p.ph) * 11;
          const k = p.life / p.dur;
          const X = p.x + drift;
          const al = (
            (k < 0.15 ? k / 0.15 : k > 0.7 ? (1 - k) / 0.3 : 1) * 0.8
          ).toFixed(3);
          const col = p.rose ? "255,122,82" : "242,63,68";
          ctx.strokeStyle = "rgba(" + col + "," + al + ")";
          ctx.fillStyle = "rgba(" + col + "," + al + ")";
          ctx.lineWidth = 1.6;
          if (p.shape === 0) heart(X, p.y, p.sz);
          else if (p.shape === 1) star(X, p.y, p.sz);
          else if (p.shape === 2) smiley(X, p.y, p.sz * 0.95);
          else thumb(X, p.y, p.sz * 0.82);
        }
      } else {
        const x0 = W * 0.06;
        const x1 = W * 0.94;
        const L = x1 - x0;
        const lanes = [
          { c: "255,255,255", s: 0.11, r: 2 },
          { c: "242,63,68", s: 0.11 * 1.55, r: 2.8 },
          { c: "255,255,255", s: 0.13, r: 2 },
          { c: "242,63,68", s: 0.13 * 1.55, r: 2.8 },
          { c: "255,255,255", s: 0.095, r: 2 },
          { c: "242,63,68", s: 0.095 * 1.55, r: 2.8 },
          { c: "255,255,255", s: 0.12, r: 2 },
          { c: "242,63,68", s: 0.12 * 1.55, r: 2.8 },
        ];
        const top = H * 0.15;
        const bot = H * 0.85;
        const gap = (bot - top) / (lanes.length - 1);
        ctx.strokeStyle = "rgba(255,255,255,0.14)";
        ctx.lineWidth = 1;
        lanes.forEach((ln, i) => {
          const y = top + i * gap;
          ctx.beginPath();
          ctx.moveTo(x0, y);
          ctx.lineTo(x1, y);
          ctx.stroke();
        });
        const comet = (pos: number, y: number, col: string, r: number) => {
          const x = x0 + pos * L;
          ctx.fillStyle = "rgba(" + col + ",0.95)";
          ctx.beginPath();
          ctx.arc(x, y, r, 0, 7);
          ctx.fill();
        };
        lanes.forEach((ln, i) => {
          const y = top + i * gap;
          const base = t * ln.s + i * 0.12;
          const n = ln.c === "242,63,68" ? 3 : 1;
          for (let d = 0; d < n; d++) {
            const pos = (base + d / n) % 1;
            comet(pos, y, ln.c, ln.r);
          }
        });
      }
      ctx.restore();
    };

    let last = performance.now();
    let raf = 0;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const tick = () => {
      if (!canvas.isConnected) return;
      const now = performance.now();
      const t = now / 1000;
      if (S.fade < 1) S.fade = Math.min(1, S.fade + (now - last) / 420);
      last = now;
      ctx.clearRect(0, 0, W, H);
      if (S.fade < 1) drawStatAnim(S.prev, t, 1 - S.fade);
      drawStatAnim(S.cur, t, S.fade);
      raf = requestAnimationFrame(tick);
    };

    if (reduced) {
      // Static frame: just render the current visualization once.
      ctx.clearRect(0, 0, W, H);
      drawStatAnim(S.cur, performance.now() / 1000, 1);
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%", display: "block" }}
    />
  );
}
