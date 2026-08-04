import React, { useState, useRef } from 'react';

export const HeroCADCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[580px] md:h-[680px] flex items-center justify-center select-none"
    >
      {/* Technical Blueprint SVG Drawing Overlay with Dimension Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0 stroke-blue-500/40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="220" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="50%" cy="50%" r="290" strokeWidth="0.75" />
        <circle cx="50%" cy="50%" r="140" strokeWidth="1" />
        
        {/* Dimension callouts */}
        <path d="M 100 120 L 290 120 M 290 100 L 290 140" strokeWidth="1" />
        <text x="200" y="112" fill="#0057FF" fontSize="11" fontFamily="monospace" fontWeight="600">Ø62.5</text>

        <path d="M 680 180 L 820 180 M 820 160 L 820 200" strokeWidth="1" />
        <text x="730" y="172" fill="#0057FF" fontSize="11" fontFamily="monospace" fontWeight="600">Ø40 A 1.75</text>

        <path d="M 180 500 L 320 500" strokeWidth="1" strokeDasharray="3 3" />
        <text x="230" y="492" fill="#0057FF" fontSize="11" fontFamily="monospace" fontWeight="600">Ø11.3</text>

        <path d="M 700 480 L 800 480" strokeWidth="1" />
        <text x="720" y="472" fill="#0057FF" fontSize="11" fontFamily="monospace" fontWeight="600">Ø8.5</text>

        {/* Angular Coordinate Crosshairs */}
        <line x1="50%" y1="10%" x2="50%" y2="90%" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="10%" y1="50%" x2="90%" y2="50%" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>

      {/* Radial Blue Ambient Glow Backdrop */}
      <div className="absolute w-[520px] h-[520px] bg-[#0057FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Clean High-Definition Video Container (No Overlaid Badges or Pills) */}
      <div
        className="relative z-10 w-full max-w-[540px] aspect-square rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,87,255,0.18)] border border-blue-200/80 bg-white/70 backdrop-blur-md transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover mix-blend-multiply rounded-3xl"
        >
          <source src="/hero_gearbox_assembly.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Inner Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/40 via-transparent to-transparent pointer-events-none rounded-3xl" />
      </div>

    </div>
  );
};
