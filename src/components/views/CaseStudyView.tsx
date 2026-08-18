import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, ShieldCheck, Zap, Layers, Activity } from 'lucide-react';

interface CaseStudyViewProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeStep, setActiveStep] = useState<number>(0);

  const CASE_STEPS = [
    {
      phase: '01',
      title: 'CAD Design & Packaging',
      desc: 'Formulated 3D parametric geometry in SolidWorks, establishing hard packaging envelopes and wishbone pickup hardpoints.',
      metrics: 'Assembly components: 42 parts'
    },
    {
      phase: '02',
      title: 'FEA Stress & Fatigue Analysis',
      desc: 'Ran non-linear dynamic FEA simulations under 3G cornering and 5G vertical bump shock loads using ANSYS Mechanical.',
      metrics: 'Peak von Mises stress: 340 MPa'
    },
    {
      phase: '03',
      title: 'Topology Optimization',
      desc: 'Executed material volume removal on titanium upright structure while keeping stress within 60% of material yield limit.',
      metrics: 'Mass saved: 32% (1.45 kg reduced)'
    },
    {
      phase: '04',
      title: 'Metal DMLS 3D Prototyping',
      desc: 'Printed functional titanium Ti-6Al-4V prototype upright on EOS M 290 additive system followed by 5-axis CNC machining.',
      metrics: 'Print time: 38 Hours'
    },
    {
      phase: '05',
      title: 'Final Vehicle Integration',
      desc: 'Full CMM metrology inspection certified zero dimensional deviation, successfully mounted on electric race vehicle.',
      metrics: '500,000 track cycle pass'
    }
  ];

  return (
    <div className="space-y-24 pt-36 sm:pt-40 lg:pt-44 pb-16">
      {/* NAVIGATION BAR BACK */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <button
          onClick={() => setActiveTab('portfolio')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0057FF] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio Gallery
        </button>
      </section>

      {/* APPLE-STYLE HERO */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
            DEEP-DIVE CASE STUDY: AUTOMOTIVE EV
          </span>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
            Automotive Wishbone Suspension System
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Complete design, FEA simulation, topology optimization, and DMLS titanium prototyping of a lightweight double-wishbone suspension upright for a high-performance electric vehicle platform.
          </p>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="text-3xl font-heading font-bold text-[#0057FF]">-32%</div>
            <div className="text-xs text-slate-500 font-medium">Mass Reduction</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="text-3xl font-heading font-bold text-[#0057FF]">500K</div>
            <div className="text-xs text-slate-500 font-medium">Fatigue Test Cycles</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="text-3xl font-heading font-bold text-[#0057FF]">340 MPa</div>
            <div className="text-xs text-slate-500 font-medium">Peak Stress Limit</div>
          </div>
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="text-3xl font-heading font-bold text-[#0057FF]">8 Weeks</div>
            <div className="text-xs text-slate-500 font-medium">Concept to Delivery</div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BEFORE / AFTER SLIDER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#0F172A]">Interactive Before vs. After CAD Model</h2>
          <p className="text-xs text-slate-500">Drag the slider to compare legacy heavy steel upright with AG Vertex topology-optimized titanium structure.</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px] select-none border border-slate-200">
          {/* AFTER IMAGE (Optimized Titanium) */}
          <img
            src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1600&q=80"
            alt="Optimized Suspension CAD"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 z-10 px-4 py-2 rounded-full bg-[#0057FF] text-white text-xs font-mono font-semibold">
            AFTER: AG VERTEX TOPOLOGY TITANIUM (-32% WEIGHT)
          </div>

          {/* BEFORE IMAGE (Legacy Cast Upright) clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
              alt="Legacy Steel Upright"
              className="absolute top-0 left-0 max-w-none w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-mono font-semibold">
              BEFORE: LEGACY HEAVY CAST STEEL UPRIGHT
            </div>
          </div>

          {/* SLIDER CONTROLLER HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#0057FF] shadow-2xl flex items-center justify-center border-2 border-[#0057FF]">
              ↔
            </div>
          </div>

          {/* Invisible Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>
      </section>

      {/* 5-STAGE STORYTELLING PIPELINE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono text-[#0057FF] uppercase font-semibold">STEP-BY-STEP WORKFLOW</span>
          <h2 className="text-3xl font-heading font-bold text-[#0F172A]">5-Phase Storytelling Pipeline</h2>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {CASE_STEPS.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#0057FF] text-white border-[#0057FF] shadow-lg shadow-blue-500/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="text-xs font-mono font-bold opacity-80">PHASE {st.phase}</div>
              <div className="text-xs font-heading font-bold mt-1 truncate">{st.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Step Display Box */}
        <div className="glass-card p-8 lg:p-12 bg-white space-y-6 border border-blue-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#0057FF] font-semibold">PHASE {CASE_STEPS[activeStep].phase} OF 05</span>
              <h3 className="text-2xl font-heading font-bold text-[#0F172A]">{CASE_STEPS[activeStep].title}</h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
              {CASE_STEPS[activeStep].metrics}
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            {CASE_STEPS[activeStep].desc}
          </p>

          <div className="pt-4 flex items-center justify-between">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className="btn-secondary px-5 py-2 text-xs font-semibold disabled:opacity-40"
            >
              Previous Phase
            </button>
            <button
              disabled={activeStep === CASE_STEPS.length - 1}
              onClick={() => setActiveStep(prev => Math.min(CASE_STEPS.length - 1, prev + 1))}
              className="btn-primary px-6 py-2 text-xs font-semibold disabled:opacity-40"
            >
              Next Phase →
            </button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div className="glass-card p-12 bg-slate-900 text-white space-y-6">
          <h2 className="text-3xl font-heading font-bold">Have a Similar Automotive or Aerospace Engineering Challenge?</h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">Our principal simulation team can evaluate your assembly CAD and provide an automated topology optimization study.</p>
          <button
            onClick={onOpenQuoteModal}
            className="btn-primary px-8 py-3.5 text-xs font-semibold inline-flex items-center gap-2"
          >
            Start Project Brief <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
