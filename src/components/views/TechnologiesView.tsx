import React from 'react';
import { SOFTWARE_TOOLS, EQUIPMENT_ITEMS } from '../../data/websiteData';
import { Cpu, ShieldCheck, Zap, Layers, Scan, Printer, CheckCircle2 } from 'lucide-react';

interface TechnologiesViewProps {
  onOpenQuoteModal: () => void;
}

export const TechnologiesView: React.FC<TechnologiesViewProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">STATE-OF-THE-ART HARDWARE & SOFTWARE</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          Technologies & Equipment We Use
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Advanced CAD/CAE software suites paired with metrology-grade 3D scanners, sub-micron CMM inspection probes, and 5-axis CNC machines.
        </p>
      </section>

      {/* SOFTWARE EXPERTISE GRID */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#0F172A]">Software Expertise</h2>
            <p className="text-xs text-slate-500">Parametric CAD modeling, FEA stress analysis, CFD fluid simulation & CAM.</p>
          </div>
          <span className="text-xs font-mono text-[#0057FF]">8 LICENSED ENTERPRISE SUITES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOFTWARE_TOOLS.map((tool, idx) => (
            <div key={idx} className="glass-card p-6 space-y-4 hover:border-blue-400 group">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0057FF] text-[10px] font-mono font-bold">
                  {tool.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">{tool.badge}</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT WE USE CATALOG */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#0F172A]">Hardware & Metrology Equipment</h2>
            <p className="text-xs text-slate-500">Metrology optical scanners, CMM inspection, metal printers, and CNC mills.</p>
          </div>
          <span className="text-xs font-mono text-[#0057FF]">SUB-MICRON PRECISION LAB</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EQUIPMENT_ITEMS.map((item, idx) => (
            <div key={idx} className="glass-card overflow-hidden group">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono">
                  ACCURACY: {item.precision}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-mono text-[#0057FF] uppercase font-semibold">{item.type}</span>
                <h3 className="text-base font-heading font-bold text-[#0F172A]">{item.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card p-10 bg-gradient-to-r from-blue-50 to-white border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-[#0F172A]">Need Specific Software File Formats?</h3>
            <p className="text-xs text-slate-600">We export native SolidWorks, CATIA, Creo, STEP, IGES, Parasolid, and 3D PDF files.</p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="btn-primary px-7 py-3 text-xs font-semibold whitespace-nowrap"
          >
            Request Technical Compatibility Check
          </button>
        </div>
      </section>
    </div>
  );
};
