import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/websiteData';
import { FileText, Search, Lightbulb, Box, Cpu, Layers, CheckCircle, Send, ArrowRight, ChevronRight } from 'lucide-react';

interface ProcessViewProps {
  onOpenQuoteModal: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({ onOpenQuoteModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <FileText className="w-6 h-6" />;
      case 1: return <Search className="w-6 h-6" />;
      case 2: return <Lightbulb className="w-6 h-6" />;
      case 3: return <Box className="w-6 h-6" />;
      case 4: return <Cpu className="w-6 h-6" />;
      case 5: return <Layers className="w-6 h-6" />;
      case 6: return <CheckCircle className="w-6 h-6" />;
      case 7: return <Send className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">STRUCTURED EXCELLENCE</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          Our Engineering Process
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          A structured 8-phase approach to deliver innovative, defect-free, and reliable mechanical engineering solutions on time.
        </p>
      </section>

      {/* HORIZONTAL TIMELINE PATH */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        <div className="relative overflow-x-auto pb-6 scrollbar-none">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />
          
          <div className="flex items-center justify-between min-w-[900px] relative z-10 px-4">
            {PROCESS_STEPS.map((ps, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                  activeStepIndex === idx
                    ? 'bg-[#0057FF] text-white scale-115 shadow-blue-500/30'
                    : 'bg-white text-slate-600 border border-slate-200 group-hover:border-blue-400'
                }`}>
                  {getStepIcon(idx)}
                </div>

                <div className="mt-3 text-center">
                  <span className={`text-[10px] font-mono font-bold block ${activeStepIndex === idx ? 'text-[#0057FF]' : 'text-slate-400'}`}>
                    STEP {ps.step}
                  </span>
                  <span className={`text-xs font-heading font-bold max-w-[100px] truncate block ${activeStepIndex === idx ? 'text-[#0F172A]' : 'text-slate-600'}`}>
                    {ps.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE STEP DETAILS BOX */}
        <div className="glass-card p-8 lg:p-12 bg-white max-w-4xl mx-auto space-y-6 border border-blue-100 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
                {getStepIcon(activeStepIndex)}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#0057FF]">STAGE {PROCESS_STEPS[activeStepIndex].step} OF 08</span>
                <h2 className="text-2xl font-heading font-bold text-[#0F172A]">
                  {PROCESS_STEPS[activeStepIndex].title}
                </h2>
              </div>
            </div>

            <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-mono">
              ESTIMATED DURATION: 3–5 DAYS
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {PROCESS_STEPS[activeStepIndex].desc}
          </p>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">Phase Deliverables Checklist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>NDA & Client Requirement Specifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Parametric 3D CAD Assembly & GD&T Drawings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>FEA Stress Verification & Safety Factor Map</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Final Quality Inspection & G-Code CAM Export</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
              className="btn-secondary px-5 py-2.5 text-xs font-semibold disabled:opacity-40"
            >
              ← Previous Step
            </button>
            <button
              disabled={activeStepIndex === PROCESS_STEPS.length - 1}
              onClick={() => setActiveStepIndex(prev => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
              className="btn-primary px-6 py-2.5 text-xs font-semibold disabled:opacity-40"
            >
              Next Step →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <button
          onClick={onOpenQuoteModal}
          className="btn-primary px-8 py-4 text-xs font-semibold inline-flex items-center gap-2"
        >
          Start Your Engineering Project <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
