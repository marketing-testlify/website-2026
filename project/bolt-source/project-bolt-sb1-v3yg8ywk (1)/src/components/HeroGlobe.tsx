import { useEffect, useRef } from 'react';

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let cx = 0;
    let cy = 0;
    let R = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      W = rect.width || 660;
      H = rect.height || 660;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2;
      cy = H / 2;
      R = Math.min(W, H) * 0.39;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const N = 720;
    const pts: number[][] = [];
    const ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const th = ga * i;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r, i % 9 === 0 ? 1 : 0]);
    }

    const makeArc = () => ({
      a: (Math.random() * N) | 0,
      b: (Math.random() * N) | 0,
      t0: performance.now(),
      dur: 1500 + Math.random() * 1600,
    });
    const arcs = Array.from({ length: 7 }, makeArc);

    let yaw = 0.4;
    let pitch = -0.18;
    let rafId = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const draw = () => {
      if (canvas.offsetParent === null) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      const now = performance.now();
      const rw0 = canvas.getBoundingClientRect().width;
      if (rw0 && Math.abs(rw0 - W) > 2) resize();

      yaw += 0.0026;
      pitch += (-0.18 - pitch) * 0.012;

      const cyw = Math.cos(yaw);
      const syw = Math.sin(yaw);
      const cpt = Math.cos(pitch);
      const spt = Math.sin(pitch);
      const rot = (p: number[]) => {
        const x = p[0] * cyw - p[2] * syw;
        const z1 = p[0] * syw + p[2] * cyw;
        const y = p[1] * cpt - z1 * spt;
        const z = p[1] * spt + z1 * cpt;
        return [x, y, z];
      };
      ctx.clearRect(0, 0, W, H);

      const g = ctx.createRadialGradient(cx, cy, R * 0.15, cx, cy, R * 1.3);
      g.addColorStop(0, 'rgba(242,63,68,0.12)');
      g.addColorStop(0.55, 'rgba(242,63,68,0.05)');
      g.addColorStop(1, 'rgba(242,63,68,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.lineWidth = 1;
      for (let k = -2; k <= 2; k++) {
        const ly = k * 0.34;
        const lr = Math.sqrt(Math.max(0, 1 - ly * ly));
        ctx.beginPath();
        for (let a = 0; a <= 60; a++) {
          const ang = (a / 60) * Math.PI * 2;
          const p = rot([Math.cos(ang) * lr, ly, Math.sin(ang) * lr]);
          const sx = cx + p[0] * R;
          const sy = cy - p[1] * R;
          const front = p[2] >= 0;
          ctx.strokeStyle = front ? 'rgba(242,63,68,0.13)' : 'rgba(242,63,68,0.05)';
          if (a === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
      }

      for (let i = 0; i < N; i++) {
        const p = rot(pts[i]);
        const f = (p[2] + 1) / 2;
        const sx = cx + p[0] * R;
        const sy = cy - p[1] * R;
        const alpha = 0.1 + f * 0.8;
        const size = 0.7 + f * 1.7;
        ctx.beginPath();
        ctx.fillStyle = pts[i][3] ? 'rgba(247,106,110,' + alpha + ')' : 'rgba(242,63,68,' + alpha + ')';
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let ai = 0; ai < arcs.length; ai++) {
        const arc = arcs[ai];
        const prog = (now - arc.t0) / arc.dur;
        if (prog >= 1) {
          arcs[ai] = makeArc();
          continue;
        }
        const A = pts[arc.a];
        const B = pts[arc.b];
        let dot = A[0] * B[0] + A[1] * B[1] + A[2] * B[2];
        dot = Math.max(-1, Math.min(1, dot));
        const om = Math.acos(dot);
        const so = Math.sin(om) || 1e-4;
        const steps = 42;
        const proj: [number, number][] = [];
        ctx.beginPath();
        for (let t = 0; t <= steps; t++) {
          const tt = t / steps;
          const w1 = Math.sin((1 - tt) * om) / so;
          const w2 = Math.sin(tt * om) / so;
          const x = A[0] * w1 + B[0] * w2;
          const y = A[1] * w1 + B[1] * w2;
          const z = A[2] * w1 + B[2] * w2;
          const lift = 1 + 0.24 * Math.sin(Math.PI * tt);
          const p = rot([x * lift, y * lift, z * lift]);
          const sx = cx + p[0] * R;
          const sy = cy - p[1] * R;
          proj.push([sx, sy]);
          if (t === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        const fade = Math.sin(Math.PI * prog);
        ctx.strokeStyle = 'rgba(242,63,68,' + 0.3 * fade + ')';
        ctx.lineWidth = 1.2;
        ctx.stroke();
        const pd = proj[Math.min((prog * steps) | 0, steps)];
        if (pd) {
          ctx.beginPath();
          ctx.fillStyle = 'rgba(247,106,110,' + 0.28 * fade + ')';
          ctx.arc(pd[0], pd[1], 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255,255,255,' + 0.95 * fade + ')';
          ctx.arc(pd[0], pd[1], 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      rafId = requestAnimationFrame(draw);
    };

    if (reduced) {
      draw();
      cancelAnimationFrame(rafId);
    } else {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
    />
  );
}
