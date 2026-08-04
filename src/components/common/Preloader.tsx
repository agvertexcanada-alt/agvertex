import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING CAD ENGINE...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Total duration = 3000 ms (3 seconds)
    const totalTime = 3000;
    const intervalTime = 30; // Update every 30ms
    const totalSteps = totalTime / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + stepIncrement;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }

        if (next < 30) {
          setStatusText('INITIALIZING CAD ENGINE...');
        } else if (next < 65) {
          setStatusText('CALIBRATING METROLOGY & SIMULATION MESH...');
        } else if (next < 90) {
          setStatusText('OPTIMIZING GRAPHICS & TOPOGRAPHY FIELD...');
        } else {
          setStatusText('SYSTEM READY. WELCOME TO AG VERTEX.');
        }

        return Math.floor(next);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-[#F8FAFC] flex flex-col items-center justify-center p-6 transition-all duration-700 ease-in-out ${
      progress >= 100 ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
    }`}>
      
      {/* Background Blueprint Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0057FF]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full space-y-8 text-center">
        
        {/* Brand Logo with Glow Ring */}
        <div className="relative group">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0057FF] to-[#2D8CFF] opacity-20 blur-xl animate-pulse" />
          <div className="relative p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl">
            <img
              src="/ag_vertex_logo.png"
              alt="AG VERTEX Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
        </div>

        {/* Status Metrology Terminal Text */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0057FF] text-[10px] font-mono font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-ping" />
            {statusText}
          </div>
          
          <div className="text-4xl font-heading font-bold text-[#0F172A] font-mono tracking-tight">
            {progress}%
          </div>
        </div>

        {/* High-Precision Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden relative border border-slate-300/50 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#0057FF] to-[#2D8CFF] rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(0,87,255,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Metrology Spec Footprint */}
        <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400 border-t border-slate-200/80 pt-4">
          <span>PRECISION: 0.001 MM</span>
          <span>AG VERTEX v2.6</span>
        </div>

      </div>

    </div>
  );
};
