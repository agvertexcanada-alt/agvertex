import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Box, 
  Layers, 
  FileText, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Check, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ServicesViewProps {
  onOpenQuoteModal?: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = () => {
  const navigate = useNavigate();
  const [selectedBlock, setSelectedBlock] = useState<any | null>(null);

  const BLOCKS = [
    {
      num: '01',
      title: 'DEVELOP',
      category: 'PRODUCT DESIGN & 3D CAD MODELLING',
      subtitle: 'Concept development, parametric CAD modelling, and production-focused mechanical design.',
      image: '/services/product_design.png',
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
      needs: [
        'Transforming rough concepts or legacy drawings into production-ready 3D CAD',
        'Complex parametric surface and solid mechanical geometry modeling',
        'Eliminating fitment interferences and costly assembly clash risks',
      ],
      supports: [
        'Full parametric solid & surface 3D CAD modeling (SolidWorks / Creo / NX)',
        'DFM / DFA design reviews to lower manufacturing and assembly costs',
        'Complete assembly hierarchy, exploded views, and digital mockups',
      ],
      deliverables: [
        'Native 3D CAD Models (STEP / Parasolid / Native)',
        'Detailed 3D Assemblies & Digital Mockups',
        'DFM / DFA Feasibility Review Reports',
        'Kinematic Motion & Clearance Studies',
      ],
    },
    {
      num: '02',
      title: 'TOOLING',
      category: 'INJECTION MOLD & DIE-CASTING TOOLING',
      subtitle: 'Complete mold layouts, parting lines, sliders, lifters, and shop-floor manufacturing documentation.',
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
      needs: [
        'Tooling freeze delays due to complex undercut and parting line geometries',
        'Premature tooling wear, parting flash, or sink mark defects',
        'Lack of detailed component prints for toolmakers and mold shops',
      ],
      supports: [
        '3D core/cavity splits, runner/gate systems, and cooling line layouts',
        'Multi-axis slider mechanisms, hydraulic cores, and angle lifters',
        'Comprehensive tool component detailing and electrode extractions',
      ],
      deliverables: [
        'Full 3D Tooling Assemblies & Component Splits',
        'Core & Cavity Insert 3D Models & 2D Prints',
        'Slider, Lifter & Ejection Mechanism Models',
        '2D Toolmaker Fabrication & Detail Drawings',
      ],
    },
    {
      num: '03',
      title: 'DOCUMENT',
      category: 'DRAWINGS, GD&T & AUTOMOTIVE DRAWING REVIEW',
      subtitle: 'Production-ready manufacturing drawings, ASME Y14.5 GD&T, and automotive drawing validation.',
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
      needs: [
        'Ambiguous drawings causing high scrap rates and supplier confusion',
        'Incorrect datum structures and improper feature control frames',
        'Out-of-sync BOMs, missing material specs, and rev-control errors',
      ],
      supports: [
        'ASME Y14.5 compliant drafting with functionally constrained datum schemes',
        'Automotive OEM drawing verification and supplier discrepancy markups',
        'Structured PLM-ready hierarchical Bills of Materials (BOMs)',
      ],
      deliverables: [
        'Production 2D Drawings (PDF / DWG / DXF)',
        'ASME Y14.5 GD&T Feature Control Tables',
        'Synchronized Multi-Level Bills of Materials (BOMs)',
        'Drawing Discrepancy, Redline & Correction Reports',
      ],
    },
    {
      num: '04',
      title: 'COORDINATE',
      category: 'DFM/DFA & SUPPLIER COORDINATION',
      subtitle: 'Technical supplier alignment, prototype validation, and engineering change management.',
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
      needs: [
        'Bottlenecks communicating technical CAD changes to fabricators',
        'Prototype deviations and unexpected tooling modification costs',
        'Unresolved DFM feedback between internal teams and external vendors',
      ],
      supports: [
        'Direct supplier technical alignment and DFM review sessions',
        'Prototype fitment tracking and first-article drawing reconciliation',
        'Structured Engineering Change Orders (ECO / ECN) execution',
      ],
      deliverables: [
        'DFM & DFA Optimization Review Reports',
        'Supplier Technical Clarification & Question Logs',
        'Prototype Inspection & Fitment Assessments',
        'Engineering Change Orders (ECO / ECN) Documentation',
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
        <span className="text-xs sm:text-sm font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          OUR CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight">
          ENGINEERING DESIGN SERVICES
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
          Manufacturing-focused mechanical design support—from product development and tooling design to detailed CAD documentation and supplier coordination.
        </p>
      </section>

      {/* 2. FOUR MAIN CAPABILITY BLOCKS (Single "View Details" per card) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BLOCKS.map((block) => (
            <div
              key={block.num}
              className="glass-card bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Left Image */}
                <div className="w-full sm:w-52 h-52 rounded-2xl overflow-hidden shrink-0 relative border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-slate-700">
                      {block.num}
                    </span>
                  </div>
                </div>

                {/* Right Services List */}
                <div className="space-y-4 flex-1 w-full">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] uppercase tracking-wide">
                      {block.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {block.services.map((srv, i) => (
                      <div key={i} className="space-y-1">
                        <h3 className="text-xs sm:text-sm font-heading font-bold text-[#0F172A] uppercase tracking-wide">
                          {srv.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {srv.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Single "View Details" button for the entire card */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {block.category}
                </span>

                <button
                  onClick={() => setSelectedBlock(block)}
                  className="btn-secondary px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer hover:border-blue-500 hover:text-[#0057FF] transition-all"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUR PROCESS STEPS ROW (Matching PDF Page 4) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0 font-mono font-bold text-sm">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-heading font-bold text-[#0F172A] uppercase">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
            Let's review your design requirements, documentation needs, or supplier drawing challenges.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary px-8 py-4 text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              Request a Project Review
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* RICH CAPABILITY DETAILS MODAL (With Red & Green Needs vs Supports Columns) */}
      {selectedBlock && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 border border-slate-200 shadow-2xl relative space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlock(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0057FF] bg-blue-50 px-3 py-1 rounded-full">
                <span>{selectedBlock.num}</span>
                <span>•</span>
                <span>{selectedBlock.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A]">
                {selectedBlock.title} CAPABILITY
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {selectedBlock.subtitle}
              </p>
            </div>

            {/* Image Preview */}
            <div className="h-52 sm:h-60 rounded-2xl overflow-hidden border border-slate-200 shadow-md relative">
              <img
                src={selectedBlock.image}
                alt={selectedBlock.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono font-bold text-white uppercase">
                  AG VERTEX MANUFACTURING-FOCUSED ENGINEERING
                </span>
              </div>
            </div>

            {/* Services included breakdown */}
            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                Services Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedBlock.services.map((srv: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h5 className="text-xs font-heading font-bold text-[#0F172A]">{srv.name}</h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{srv.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Red Column vs Green Column (Challenges vs AG Vertex Supports) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Red Column: Typical Client Challenges */}
              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-3">
                <h4 className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  TYPICAL CHALLENGES
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedBlock.needs.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Green Column: How AG Vertex Delivers */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-3">
                <h4 className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  HOW AG VERTEX DELIVERS
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedBlock.supports.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Deliverables Pills */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                Key Engineering Deliverables:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedBlock.deliverables.map((del: string, idx: number) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold"
                  >
                    <Check className="w-3.5 h-3.5" />
                    {del}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedBlock(null)}
                className="btn-secondary px-5 py-2.5 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedBlock(null);
                  navigate('/contact');
                }}
                className="btn-primary px-6 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25"
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
