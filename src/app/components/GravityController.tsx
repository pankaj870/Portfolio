import React, { useEffect, useRef } from 'react';

// ─── Single unified background: soft indigo constellation network ─────────────
// One primary accent colour keeps it clean and elegant.

const NODE_COUNT    = 60;
const MAX_DIST      = 160;
const CURSOR_RADIUS = 150;
const PRIMARY       = '#818cf8'; // soft indigo-400
const PRIMARY_DIM   = '#4f46e5'; // indigo-600

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  pulse: number;
}

interface Packet {
  from: number; to: number;
  t: number; speed: number;
}

const rand = (a: number, b: number) => Math.random() * (b - a) + a;
const d2   = (ax: number, ay: number, bx: number, by: number) =>
  (ax - bx) ** 2 + (ay - by) ** 2;

function rgba(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

export function GravityController() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── State ──────────────────────────────────────────────────────────────
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x:     rand(20, window.innerWidth  - 20),
      y:     rand(20, window.innerHeight - 20),
      vx:    rand(-0.2, 0.2),
      vy:    rand(-0.2, 0.2),
      r:     rand(1.5, 3),
      pulse: rand(0, 1),
    }));

    const packets: Packet[] = [];
    const mouse = { x: -999, y: -999 };
    let   time  = 0;
    let   raf   = 0;

    // ── Packet spawner ─────────────────────────────────────────────────────
    const spawnPacket = () => {
      const pairs: [number, number][] = [];
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++)
          if (d2(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y) < MAX_DIST ** 2)
            pairs.push([i, j]);
      if (!pairs.length || packets.length > 30) return;
      const [f, t] = pairs[Math.floor(Math.random() * pairs.length)];
      packets.push({ from: f, to: t, t: 0, speed: rand(0.006, 0.014) });
    };
    const timer = setInterval(spawnPacket, 280);

    // ── Mouse ──────────────────────────────────────────────────────────────
    const onMove  = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = ()              => { mouse.x = -999; mouse.y = -999; };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    // ── Render ─────────────────────────────────────────────────────────────
    const draw = () => {
      time++;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Move
      for (const n of nodes) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y;
        const d  = Math.sqrt(dx * dx + dy * dy) || 1;
        if (d < CURSOR_RADIUS) {
          const f = (1 - d / CURSOR_RADIUS) * 0.055;
          n.vx += (dx / d) * f;
          n.vy += (dy / d) * f;
        }
        n.vx *= 0.98; n.vy *= 0.98;
        n.x  += n.vx; n.y  += n.vy;
        n.pulse = (n.pulse + 0.008) % 1;

        if (n.x < 0) n.x = W; else if (n.x > W) n.x = 0;
        if (n.y < 0) n.y = H; else if (n.y > H) n.y = 0;
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dist = Math.sqrt(d2(a.x, a.y, b.x, b.y));
          if (dist >= MAX_DIST) continue;
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = rgba(PRIMARY, alpha);
          ctx.lineWidth   = 0.7;
          ctx.stroke();
        }
      }

      // Packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p  = packets[i];
        const fn = nodes[p.from], tn = nodes[p.to];
        if (!fn || !tn || d2(fn.x, fn.y, tn.x, tn.y) >= MAX_DIST ** 2) {
          packets.splice(i, 1); continue;
        }
        p.t += p.speed;
        if (p.t >= 1) { packets.splice(i, 1); continue; }

        const px = fn.x + (tn.x - fn.x) * p.t;
        const py = fn.y + (tn.y - fn.y) * p.t;

        // Trail
        for (let k = 0; k < 5; k++) {
          const kt  = Math.max(0, p.t - k * 0.02);
          const kx  = fn.x + (tn.x - fn.x) * kt;
          const ky  = fn.y + (tn.y - fn.y) * kt;
          const ka  = (1 - k / 5) * 0.7;
          const kg  = ctx.createRadialGradient(kx, ky, 0, kx, ky, 4);
          kg.addColorStop(0, rgba(PRIMARY, ka));
          kg.addColorStop(1, rgba(PRIMARY, 0));
          ctx.beginPath();
          ctx.arc(kx, ky, 4, 0, Math.PI * 2);
          ctx.fillStyle = kg;
          ctx.fill();
        }

        // Head
        const hg = ctx.createRadialGradient(px, py, 0, px, py, 5);
        hg.addColorStop(0, rgba(PRIMARY, 1));
        hg.addColorStop(1, rgba(PRIMARY, 0));
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = hg;
        ctx.fill();
      }

      // Nodes
      for (const n of nodes) {
        const near = d2(n.x, n.y, mouse.x, mouse.y) < CURSOR_RADIUS ** 2;
        const glow = Math.sin(n.pulse * Math.PI * 2) * 0.5 + 0.5;
        const gR   = n.r * (near ? 9 : 4 + glow * 2.5);
        const cA   = near ? 0.95 : 0.5 + glow * 0.3;

        const ng = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, gR);
        ng.addColorStop(0, rgba(near ? PRIMARY : PRIMARY_DIM, near ? 0.35 : 0.15));
        ng.addColorStop(1, rgba(PRIMARY, 0));
        ctx.beginPath();
        ctx.arc(n.x, n.y, gR, 0, Math.PI * 2);
        ctx.fillStyle = ng;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + (near ? 1 : 0), 0, Math.PI * 2);
        ctx.fillStyle   = rgba(PRIMARY, cA);
        ctx.shadowBlur  = near ? 15 : 4;
        ctx.shadowColor = PRIMARY;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Cursor aura
      if (mouse.x > 0) {
        const ripple = (time % 90) / 90;
        const rr     = ripple * CURSOR_RADIUS;

        const ag = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, CURSOR_RADIUS);
        ag.addColorStop(0, rgba(PRIMARY, 0.05));
        ag.addColorStop(1, rgba(PRIMARY, 0));
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, CURSOR_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = ag;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, rr, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(PRIMARY, (1 - ripple) * 0.2);
        ctx.lineWidth   = 1;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(timer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
      aria-hidden="true"
    />
  );
}
