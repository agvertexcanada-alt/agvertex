import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../../data/websiteData';
import { 
  Compass, 
  Layers, 
  Cpu, 
  Box, 
  FileText, 
  ClipboardCheck, 
  Search, 
  Handshake, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface ServicesViewProps {
  onOpenQuoteModal: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'product-design-development':
        return <Compass className="w-8 h-8 text-[#0057FF]" />;
      case 'injection-mold-design':
        return <Layers className="w-8 h-8 text-[#0057FF]" />;
      case 'pressure-die-casting-die-design':
        return <Cpu className="w-8 h-8 text-[#0057FF]" />;
      case '3d-cad-modelling':
        return <Box className="w-8 h-8 text-[#0057FF]" />;
      case 'drawings-gdt-boms':
        return <FileText className="w-8 h-8 text-[#0057FF]" />;
      case 'dfm-dfa-support':
        return <ClipboardCheck className="w-8 h-8 text-[#0057FF]" />;
      case 'automotive-drawing-validation':
        return <Search className="w-8 h-8 text-[#0057FF]" />;
      case 'supplier-prototype-support':
        return <Handshake className="w-8 h-8 text-[#0057FF]" />;
      default:
        return <Compass className="w-8 h-8 text-[#0057FF]" />;
    }
  };

  const PANORAMIC_IMAGES = [
    {
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      alt: '3D CAD Engineering Workstation',
    },
    {
      src: '/services/industrial_metrology.png',
      alt: 'Precision Machined Aluminum Housing',
    },
    {
      src: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80',
      alt: 'Multi-Cavity Injection Mold Tooling',
    },
    {
      src: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80',
      alt: 'GD&T Drawing and Caliper Metrology',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4 text-center max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          OUR CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#0F172A] tracking-tight">
          ENGINEERING DESIGN SERVICES
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Manufacturing-focused mechanical design support—from product development and tooling design to detailed CAD documentation and supplier coordination.
        </p>
      </section>

      {/* 2. 8 OFFICIAL SERVICES CARDS (4x2 Grid) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="glass-card bg-white p-7 space-y-5 cursor-pointer group flex flex-col justify-between border border-slate-200/90 rounded-3xl shadow-sm hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Outlined Icon Box matching reference image */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center group-hover:bg-[#0057FF] group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors">
                    {getServiceIcon(srv.id)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-heading font-bold text-[#0F172A] uppercase tracking-tight group-hover:text-[#0057FF] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {srv.shortDesc}
                  </p>
                </div>
              </div>

              {/* Bottom Explore Service Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0057FF] group-hover:translate-x-0.5 transition-transform">
                <span>Explore Service</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PANORAMIC 4-IMAGE STRIP MATCHING REFERENCE SCREENSHOT */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white p-2">
          {PANORAMIC_IMAGES.map((img, idx) => (
            <div key={idx} className="h-44 sm:h-56 lg:h-64 overflow-hidden rounded-2xl relative group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-xs font-medium text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
            Have a project to discuss?
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Let's review your design requirements, documentation needs, or supplier drawing challenges.
          </p>
        </div>

        <div>
          <button
            onClick={onOpenQuoteModal}
            className="btn-primary px-8 py-4 text-sm font-semibold inline-flex items-center gap-2.5 shadow-lg shadow-blue-500/25 cursor-pointer"
          >
            Request a Project Review
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SERVICE DETAIL POPUP MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-3xl w-full p-8 lg:p-10 relative max-h-[90vh] overflow-y-auto space-y-8 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0">
                {getServiceIcon(selectedService.id)}
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#0F172A]">{selectedService.title}</h2>
                <span className="text-xs font-mono font-semibold text-[#0057FF]">CAPABILITY SPECIFICATION</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-heading font-bold text-[#0F172A] uppercase tracking-wider">Overview</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{selectedService.fullDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">Key Capabilities</h3>
                <ul className="space-y-2">
                  {selectedService.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0057FF] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">Deliverables</h3>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <FileText className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedService(null)}
                className="btn-secondary px-6 py-2.5 text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenQuoteModal();
                }}
                className="btn-primary px-8 py-3 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
              >
                Request a Project Review <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
