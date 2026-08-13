import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Box, 
  Layers, 
  FileText, 
  Users, 
  Cpu, 
  CheckCircle2, 
  X 
} from 'lucide-react';

interface ServicesViewProps {
  onOpenQuoteModal?: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<{ title: string; desc: string; category: string } | null>(null);

  const BLOCKS = [
    {
      num: '01',
      title: 'DEVELOP',
      image: '/images/cad_workstation_single.jpeg',
      services: [
        {
          name: 'PRODUCT DESIGN & DEVELOPMENT',
          desc: 'Concept development, component design, DFM/DFA and production-focused engineering support.',
        },
        {
          name: '3D CAD MODELLING',
          desc: 'Detailed parts and assemblies, CAD conversion, design modifications and parametric modelling.',
        },
      ],
    },
    {
      num: '02',
      title: 'TOOLING',
      image: '/services/injection_mold.png',
      services: [
        {
          name: 'INJECTION MOLD DESIGN',
          desc: 'Mold layouts, core and cavity development, inserts, slides, lifters and manufacturing documentation.',
        },
        {
          name: 'PRESSURE DIE-CASTING DIE DESIGN',
          desc: 'Die concepts, parting-line strategy, core and slide concepts, and detailed die documentation.',
        },
      ],
    },
    {
      num: '03',
      title: 'DOCUMENT',
      image: '/services/drawings_gdt.png',
      services: [
        {
          name: 'DRAWINGS, GD&T & BOMs',
          desc: 'Manufacturing drawings, tolerance definition, GD&T application and structured bills of materials.',
        },
        {
          name: 'AUTOMOTIVE DRAWING REVIEW',
          desc: 'Review of dimensions, GD&T, specifications, interfaces and supplier drawing questions.',
        },
      ],
    },
    {
      num: '04',
      title: 'COORDINATE',
      image: '/images/cad_team_collaboration.jpeg',
      services: [
        {
          name: 'DFM / DFA SUPPORT',
          desc: 'Design reviews focused on manufacturability, assembly, cost awareness and production feasibility.',
        },
        {
          name: 'SUPPLIER & PROTOTYPE COORDINATION',
          desc: 'Technical coordination, DFM clarification, prototype follow-up and engineering change support.',
        },
      ],
    },
  ];

  const PROCESS_STEPS = [
    {
      num: '1',
      title: 'REQUIREMENTS',
      desc: 'Understand goals, constraints and technical requirements.',
    },
    {
      num: '2',
      title: 'CAD DEVELOPMENT',
      desc: 'Create models, assemblies and detailed design solutions.',
    },
    {
      num: '3',
      title: 'DRAWING REVIEW',
      desc: 'Validate design intent, GD&T and documentation accuracy.',
    },
    {
      num: '4',
      title: 'SUPPLIER COORDINATION',
      desc: 'Support manufacturing handoff, prototypes and engineering changes.',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER (Matching PDF Page 4) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4 text-center max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          OUR CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight">
          ENGINEERING DESIGN SERVICES
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Manufacturing-focused mechanical design support—from product development and tooling design to detailed CAD documentation and supplier coordination.
        </p>
      </section>

      {/* 2. FOUR MAIN CAPABILITY BLOCKS (Matching PDF Page 4) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BLOCKS.map((block) => (
            <div
              key={block.num}
              className="glass-card bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md flex flex-col sm:flex-row gap-6 items-center"
            >
              {/* Left Image */}
              <div className="w-full sm:w-48 h-48 sm:h-52 rounded-2xl overflow-hidden shrink-0 relative border border-slate-200 shadow-sm">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Services List */}
              <div className="space-y-5 flex-1 w-full">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-heading font-bold text-blue-200">
                    {block.num}
                  </span>
                  <h2 className="text-xl font-heading font-bold text-[#0F172A] uppercase tracking-wide">
                    {block.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {block.services.map((srv, i) => (
                    <div key={i} className="space-y-1">
                      <h3 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wide">
                        {srv.name}
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                        {srv.desc}
                      </p>
                      <button
                        onClick={() => setSelectedService({ title: srv.name, desc: srv.desc, category: block.title })}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0057FF] hover:underline pt-0.5 cursor-pointer"
                      >
                        View Details <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUR PROCESS STEPS ROW (Matching PDF Page 4) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER (Matching PDF Page 4) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
        <div className="glass-card bg-white p-10 lg:p-14 rounded-3xl border border-slate-200/90 shadow-xl space-y-5 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] uppercase tracking-tight">
            HAVE A PROJECT TO DISCUSS?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
            Let's review your design requirements, documentation needs, or supplier drawing challenges.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary px-8 py-3.5 text-xs font-semibold inline-flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              Request a Project Review
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-slate-200 shadow-2xl relative space-y-5">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] font-mono font-bold text-[#0057FF] uppercase tracking-widest block">
              {selectedService.category} CAPABILITY
            </span>

            <h3 className="text-xl font-heading font-bold text-[#0F172A]">
              {selectedService.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedService.desc}
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedService(null)}
                className="btn-secondary px-5 py-2 text-xs font-semibold"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedService(null);
                  navigate('/contact');
                }}
                className="btn-primary px-5 py-2 text-xs font-semibold flex items-center gap-2"
              >
                Request Review <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
