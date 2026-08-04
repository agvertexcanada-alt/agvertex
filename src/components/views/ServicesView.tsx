import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../../data/websiteData';
import { ArrowRight, CheckCircle2, Compass, Layers, Activity, Wind, Scan, Cpu, Printer, ShieldCheck, X, FileText, ChevronRight } from 'lucide-react';

interface ServicesViewProps {
  onOpenQuoteModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'product-design': return <Compass className="w-8 h-8" />;
      case 'cad-modeling': return <Layers className="w-8 h-8" />;
      case 'cae-simulation': return <Activity className="w-8 h-8" />;
      case 'cfd-simulation': return <Wind className="w-8 h-8" />;
      case 'reverse-engineering': return <Scan className="w-8 h-8" />;
      case 'manufacturing-support': return <Cpu className="w-8 h-8" />;
      case 'prototyping': return <Printer className="w-8 h-8" />;
      case 'consulting': return <ShieldCheck className="w-8 h-8" />;
      default: return <Compass className="w-8 h-8" />;
    }
  };

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">OUR CAPABILITIES</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          Comprehensive Engineering Services
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Tailored mechanical design, FEA structural analysis, CFD thermal modeling, 3D laser scan reverse engineering, and additive manufacturing solutions.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="glass-card p-8 space-y-6 cursor-pointer group flex flex-col justify-between hover:border-blue-400"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center group-hover:bg-[#0057FF] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {getIcon(srv.id)}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {srv.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0057FF]">
                <span>View Full Specs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-4xl w-full p-8 lg:p-10 relative max-h-[90vh] overflow-y-auto space-y-8 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
                {getIcon(selectedService.id)}
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#0F172A]">{selectedService.title}</h2>
                <span className="text-xs font-mono text-blue-600">CAPABILITY SPECIFICATION</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-heading font-bold text-[#0F172A] uppercase tracking-wider">Overview</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedService.fullDesc}</p>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="rounded-2xl w-full h-48 object-cover border border-slate-200"
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-heading font-bold text-[#0F172A] uppercase tracking-wider">Key Capabilities</h3>
                  <ul className="space-y-2">
                    {selectedService.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0057FF] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-heading font-bold text-[#0F172A] uppercase tracking-wider">Deliverables</h3>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <FileText className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedService(null)}
                className="btn-secondary px-6 py-2.5 text-xs font-semibold"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenQuoteModal();
                }}
                className="btn-primary px-8 py-3 text-xs font-semibold flex items-center gap-2"
              >
                Request Service Estimate <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
