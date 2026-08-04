import React, { useEffect, useRef } from 'react';

export const BackgroundParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position for interactive vector lines
    let mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes
    const particleCount = Math.floor(Math.min(width, 1600) / 14);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      pulse: number;
      pulseSpeed: number;
      type: 'dot' | 'cross' | 'ring';
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        type: i % 7 === 0 ? 'cross' : i % 11 === 0 ? 'ring' : 'dot',
      });
    }

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    let waveTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      waveTime += 0.015;

      // 1. Moving Blueprint Engineering Grid
      const gridSize = 70;
      const gridOffsetX = (waveTime * 8) % gridSize;
      const gridOffsetY = (waveTime * 6) % gridSize;

      ctx.strokeStyle = 'rgba(0, 87, 255, 0.03)';
      ctx.lineWidth = 1;

      for (let x = gridOffsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = gridOffsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Continuous Fluid Wave Vector Lines (Simulation feel)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(45, 140, 255, 0.04)';
      ctx.lineWidth = 1.5;

      for (let x = 0; x < width; x += 10) {
        const y1 = height * 0.3 + Math.sin(x * 0.004 + waveTime) * 45 + Math.cos(x * 0.002 + waveTime * 0.5) * 35;
        if (x === 0) ctx.moveTo(x, y1);
        else ctx.lineTo(x, y1);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 87, 255, 0.035)';
      ctx.lineWidth = 1.5;

      for (let x = 0; x < width; x += 10) {
        const y2 = height * 0.7 + Math.cos(x * 0.005 - waveTime * 1.2) * 50 + Math.sin(x * 0.003 + waveTime) * 30;
        if (x === 0) ctx.moveTo(x, y2);
        else ctx.lineTo(x, y2);
      }
      ctx.stroke();

      // 3. Update & Draw Interactive Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        p.pulse += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse Interactivity: Push particles gently away from cursor
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 1.5;
          p.x -= (dxMouse / distMouse) * force;
          p.y -= (dyMouse / distMouse) * force;

          // Draw laser line to mouse
          ctx.strokeStyle = `rgba(0, 87, 255, ${(1 - distMouse / mouse.radius) * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Draw particle based on type
        if (p.type === 'cross') {
          ctx.strokeStyle = `rgba(0, 87, 255, ${Math.max(0.1, currentAlpha)})`;
          ctx.lineWidth = 1;
          const size = 4;
          ctx.beginPath();
          ctx.moveTo(p.x - size, p.y);
          ctx.lineTo(p.x + size, p.y);
          ctx.moveTo(p.x, p.y - size);
          ctx.lineTo(p.x, p.y + size);
          ctx.stroke();
        } else if (p.type === 'ring') {
          ctx.strokeStyle = `rgba(45, 140, 255, ${Math.max(0.1, currentAlpha)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(0, 87, 255, ${Math.max(0.1, currentAlpha)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Connect close particles with blueprint lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.15;
            ctx.strokeStyle = `rgba(45, 140, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Animated Ambient Orbs in Background */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#0057FF]/10 rounded-full blur-[140px] animate-orb-float-1" />
      <div className="absolute top-2/3 -right-20 w-[700px] h-[700px] bg-[#2D8CFF]/12 rounded-full blur-[160px] animate-orb-float-2" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-[#0057FF]/08 rounded-full blur-[130px] animate-orb-float-1" />

      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-90"
      />
    </div>
  );
};
