import React, { useState } from 'react';
import { 
  Box, 
  Crosshair, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Cpu,
  ShieldCheck
} from 'lucide-react';

interface IndustriesViewProps {
  onOpenQuoteModal: () => void;
}

interface IndustryTab {
  id: string;
  name: string;
  shortName: string;
  headerTitle: string;
  title: string;
  tagline: string;
  description: string;
  badges: { icon: any; label: string }[];
  image: string;
  clientNeeds: string[];
  agVertexSupports: string[];
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onOpenQuoteModal }) => {
  const [activeTabId, setActiveTabId] = useState<string>('automotive-components');

  const INDUSTRIES: IndustryTab[] = [
    {
      id: 'automotive-components',
      name: 'Automotive Components',
      shortName: 'AUTOMOTIVE',
      headerTitle: 'AUTOMOTIVE ENGINEERING SUPPORT',
      title: 'AUTOMOTIVE COMPONENT DESIGN',
      tagline: 'From concept development to production-ready documentation.',
      description: 'We deliver precise 3D component design and detailed documentation for suspension, steering, wheel-end, molded-plastic, and electromechanical parts—built for manufacturability and supplier collaboration.',
      badges: [
        { icon: Box, label: 'Product Development' },
        { icon: Crosshair, label: 'GD&T / DFM' },
        { icon: Users, label: 'Supplier Coordination' },
      ],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      clientNeeds: [
        'Production-ready component design',
        'Drawing discrepancies and design changes',
        'Manufacturing feasibility and supplier alignment',
      ],
      agVertexSupports: [
        '3D CAD modelling and design refinement',
        'Drawing review, GD&T and documentation',
        'Supplier coordination and issue resolution',
      ],
    },
    {
      id: 'injection-molding',
      name: 'Injection Molding',
      shortName: 'INJECTION MOLDING',
      headerTitle: 'INJECTION MOLDING & TOOLING SUPPORT',
      title: 'INJECTION MOLD DESIGN & TOOLING',
      tagline: 'Precision mold layouts, parting strategies, and tooling documentation.',
      description: 'Complete tool design for multi-cavity production molds, hot-runner systems, complex slides, and lifters—engineered for rapid cycle times and long tool life.',
      badges: [
        { icon: Layers, label: 'Mold Layout' },
        { icon: Crosshair, label: 'Parting Strategy' },
        { icon: ShieldCheck, label: 'Tooling DFM' },
      ],
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80',
      clientNeeds: [
        'Complex parting line & shut-off development',
        'Minimizing cycle times & thermal warpage',
        'Tooling fabrication prints & electrode extraction',
      ],
      agVertexSupports: [
        '3D mold assemblies with custom core/cavity splits',
        'Conformal cooling circuit & hot runner integration',
        'Toolmaker coordination and shop-floor trial support',
      ],
    },
    {
      id: 'industrial-products',
      name: 'Industrial Products',
      shortName: 'INDUSTRIAL',
      headerTitle: 'INDUSTRIAL MACHINERY & PRODUCT SUPPORT',
      title: 'INDUSTRIAL PRODUCTS & MACHINERY DESIGN',
      tagline: 'Heavy-duty mechanical design, weldments, and automation tooling.',
      description: 'Robust engineering design for specialized industrial machinery, structural sheet metal enclosures, welded frames, and custom automated assembly fixtures.',
      badges: [
        { icon: Cpu, label: 'Machine Design' },
        { icon: Box, label: 'Sheet Metal' },
        { icon: Users, label: 'Assembly Fixtures' },
      ],
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80',
      clientNeeds: [
        'Custom machinery & structural weldment design',
        'ASME compliant fabrication drawings & BOMs',
        'Assembly fixture design and supplier sign-off',
      ],
      agVertexSupports: [
        'Parametric 3D CAD machine & enclosure modeling',
        'Detailed weldment drafting with weld symbols & BOMs',
        'Fabrication coordination and drawing validation',
      ],
    },
    {
      id: 'electromechanical',
      name: 'Electromechanical',
      shortName: 'ELECTROMECHANICAL',
      headerTitle: 'ELECTROMECHANICAL PACKAGING SUPPORT',
      title: 'ELECTROMECHANICAL PACKAGING & ENCLOSURES',
      tagline: 'Electronics enclosures, thermal packaging, and connector integration.',
      description: 'High-density packaging for PCBs, battery modules, wiring harnesses, and ruggedized weatherproof enclosures with tight environmental ingress sealing.',
      badges: [
        { icon: Cpu, label: 'Enclosure Design' },
        { icon: Crosshair, label: 'Thermal Packaging' },
        { icon: ShieldCheck, label: 'Ingress Sealing' },
      ],
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
      clientNeeds: [
        'Compact PCB enclosure packaging & fitment',
        'Thermal dissipation and sealing gasket integration',
        'DFM review for low-cost plastic & die-cast housings',
      ],
      agVertexSupports: [
        'Precise 3D CAD packaging around PCB STEP models',
        'IP67/IP68 waterproof seal and fastener design',
        'Supplier drawing review and rapid prototype validation',
      ],
    },
  ];

  const activeIndustry = INDUSTRIES.find((ind) => ind.id === activeTabId) || INDUSTRIES[0];

  return (
    <div className="space-y-16 lg:space-y-20 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4 text-center max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          INDUSTRY EXPERIENCE
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#0F172A] tracking-tight">
          {activeIndustry.headerTitle}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Manufacturing-focused mechanical design and documentation support for automotive components, tooling, and supplier development.
        </p>

        {/* 4 INDUSTRY CATEGORY PILLS BAR */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTabId(ind.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTabId === ind.id
                  ? 'bg-[#0057FF] text-white shadow-md shadow-blue-500/25'
                  : 'bg-white text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>
      </section>

      {/* 2. SELECTED INDUSTRY HERO CARD */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card bg-white p-8 lg:p-12 border border-slate-200/90 rounded-3xl shadow-xl space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
                {activeIndustry.title}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-[#0057FF]">
                {activeIndustry.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {activeIndustry.description}
              </p>

              {/* 3 Badges Matching Image */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {activeIndustry.badges.map((b, idx) => {
                  const IconComp = b.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col items-center text-center gap-1.5"
                    >
                      <IconComp className="w-5 h-5 text-[#0057FF]" />
                      <span className="text-[11px] font-semibold text-[#0F172A] leading-tight">
                        {b.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column Workstation Image Matching Reference Screenshot */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 h-[320px] sm:h-[380px]">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-mono font-semibold text-white bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700">
                  {activeIndustry.name.toUpperCase()} CAD & METROLOGY
                </span>
              </div>
            </div>

          </div>

          {/* 3. COMPARISON BOXES: TYPICAL CLIENT NEEDS vs HOW AG VERTEX SUPPORTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
            
            {/* Left: Typical Client Needs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#0F172A] font-heading font-bold text-xs uppercase tracking-wider">
                <div className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <span>TYPICAL CLIENT NEEDS</span>
              </div>

              <div className="space-y-2.5">
                {activeIndustry.clientNeeds.map((need, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-rose-50/40 border border-rose-100/80 flex items-center gap-2.5 text-xs text-slate-700 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                    <span>{need}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: How AG Vertex Supports */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#0F172A] font-heading font-bold text-xs uppercase tracking-wider">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>HOW AG VERTEX SUPPORTS</span>
              </div>

              <div className="space-y-2.5">
                {activeIndustry.agVertexSupports.map((support, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-emerald-50/40 border border-emerald-100/80 flex items-center gap-2.5 text-xs text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{support}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 4. BOTTOM ACTION CTA BUTTON */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenQuoteModal}
              className="btn-primary px-8 py-3.5 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              DISCUSS YOUR {activeIndustry.shortName} PROJECT
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
