import React, { useState } from 'react';
import { INDUSTRIES_DATA, IndustryItem } from '../../data/websiteData';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, ChevronRight } from 'lucide-react';

interface IndustriesViewProps {
  onOpenQuoteModal: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onOpenQuoteModal }) => {
  const [activeIndustryId, setActiveIndustryId] = useState(INDUSTRIES_DATA[0].id);

  const activeIndustry = INDUSTRIES_DATA.find((ind) => ind.id === activeIndustryId) || INDUSTRIES_DATA[0];

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">DOMAINS OF EXCELLENCE</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          Industries We Serve
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          High-precision engineering solutions tailored to meet the strict regulatory, thermal, structural, and weight constraints of leading global industries.
        </p>
      </section>

      {/* INDUSTRY TAB SELECTOR BAR */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200">
          {INDUSTRIES_DATA.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustryId(ind.id)}
              className={`px-5 py-3 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeIndustryId === ind.id
                  ? 'bg-[#0057FF] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {ind.title}
            </button>
          ))}
        </div>
      </section>

      {/* SELECTED INDUSTRY DETAIL HERO */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card p-8 lg:p-12 bg-white relative overflow-hidden space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
                INDUSTRY SPECIFICATION SHEET
              </span>

              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[#0F172A]">
                {activeIndustry.title}
              </h2>

              <p className="text-base font-semibold text-[#0057FF]">
                "{activeIndustry.tagline}"
              </p>

              <p className="text-xs text-slate-600 leading-relaxed">
                {activeIndustry.description}
              </p>

              {/* Stats Badge */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {activeIndustry.stats.map((st, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-heading font-bold text-[#0057FF]">{st.value}</div>
                    <div className="text-[11px] text-slate-500 font-semibold">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[380px] relative border border-slate-200">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs font-mono text-white bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl">
                    VALIDATED SOLUTION: {activeIndustry.title.toUpperCase()} PROTOCOL
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* CHALLENGES vs SOLUTIONS COMPARISON */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-600 font-heading font-bold text-sm">
                <AlertTriangle className="w-5 h-5" />
                Industry Challenges
              </div>
              <ul className="space-y-3">
                {activeIndustry.challenges.map((ch, idx) => (
                  <li key={idx} className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs text-slate-700 leading-relaxed">
                    {ch}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-600 font-heading font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                AG Vertex Engineering Solutions
              </div>
              <ul className="space-y-3">
                {activeIndustry.solutions.map((sol, idx) => (
                  <li key={idx} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700 leading-relaxed">
                    {sol}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onOpenQuoteModal}
              className="btn-primary px-8 py-3.5 text-xs font-semibold flex items-center gap-2"
            >
              Discuss {activeIndustry.title} Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
