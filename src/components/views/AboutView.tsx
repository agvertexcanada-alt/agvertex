import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  HeartHandshake, 
  Calendar, 
  Box, 
  Crosshair, 
  Users, 
  ArrowRight 
} from 'lucide-react';

interface AboutViewProps {
  setActiveTab?: (tab: string) => void;
  onOpenQuoteModal?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = () => {
  const navigate = useNavigate();

  const PILLARS = [
    {
      icon: Target,
      title: 'OUR MISSION',
      desc: 'To deliver practical and precise mechanical design solutions that support manufacturability, quality, and efficient product development.',
    },
    {
      icon: Eye,
      title: 'OUR VISION',
      desc: 'To become a trusted engineering design partner for manufacturers, tooling companies, and automotive suppliers across Canada and beyond.',
    },
    {
      icon: ShieldCheck,
      title: 'CORE VALUES',
      desc: 'Technical Integrity · Quality · Collaboration · Confidentiality · Continuous Improvement',
    },
    {
      icon: HeartHandshake,
      title: 'OUR PROMISE',
      desc: "Clear communication, carefully developed deliverables, and engineering support focused on each client's technical and manufacturing requirements.",
    },
  ];

  const DOMAIN_CARDS = [
    {
      title: 'PRODUCT DEVELOPMENT',
      desc: 'Mechanical components and assemblies developed with performance, manufacturability, and production requirements in mind.',
      image: '/services/product_design.png',
    },
    {
      title: 'TOOLING EXPERIENCE',
      desc: 'Practical experience supporting injection molds, hot-runner systems, mold components, and pressure die-casting applications.',
      image: '/services/injection_mold.png',
    },
    {
      title: 'AUTOMOTIVE ENGINEERING',
      desc: 'Experience with suspension, steering, wheel-end components, engineering drawings, GD&T, and supplier coordination.',
      image: '/services/drawing_validation.png',
    },
    {
      title: 'CAD & DOCUMENTATION',
      desc: '3D models, drawings, BOMs, and controlled documentation using established CAD and PLM workflows.',
      image: '/services/cad_modelling.png',
    },
  ];

  const STATS = [
    {
      icon: Calendar,
      value: '15+ YEARS',
      label: 'Professional Engineering Experience',
    },
    {
      icon: Box,
      value: '3D CAD',
      label: 'Parts, Assemblies & Tooling',
    },
    {
      icon: Crosshair,
      value: 'GD&T / DFM',
      label: 'Manufacturing-Focused Design',
    },
    {
      icon: Users,
      value: 'SUPPLIER SUPPORT',
      label: 'Drawing Review & Coordination',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION (Matching PDF Page 2) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
              ABOUT AG VERTEX
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              ENGINEERING <br />
              DESIGN BUILT FOR <br />
              <span className="text-[#0057FF]">MANUFACTURING</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
              AG Vertex is a Windsor, Ontario-based mechanical design consultancy specializing in product design, mold and die design, 3D CAD modelling, and automotive drawing validation. We help transform engineering concepts into practical, manufacturable designs supported by accurate documentation and supplier coordination.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate('/portfolio')}
                className="btn-primary px-7 py-3.5 text-xs font-semibold flex items-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Explore Our Capabilities
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image (Dual Monitor CAD Station from PDF Page 10) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
              <img
                src="/images/cad_workstation_single.jpeg"
                alt="CAD Workstation - AG Vertex"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider block">
                    MANUFACTURING-FOCUSED MECHANICAL DESIGN
                  </span>
                  <p className="text-xs text-white font-medium">
                    Product, tooling, CAD and drawing support.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FOUR PILLARS (Matching PDF Page 2) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, idx) => {
            const PillarIcon = p.icon;
            return (
              <div
                key={idx}
                className="glass-card bg-white p-7 rounded-3xl border border-slate-200/90 shadow-md space-y-4 hover:border-blue-400 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
                  <PillarIcon className="w-6 h-6" />
                </div>
                
                <h3 className="text-base font-heading font-bold text-[#0F172A] uppercase tracking-wide">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. EXPERIENCE BEHIND AG VERTEX (Matching PDF Page 3) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
            EXPERIENCE BEHIND AG VERTEX
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
            15+ YEARS OF PROFESSIONAL ENGINEERING EXPERIENCE
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            AG Vertex is built on experience across product development, injection molding, hot-runner systems, automotive components, and manufacturing-focused mechanical design.
          </p>
        </div>

        {/* 4 Domain Cards with Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOMAIN_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="glass-card bg-white overflow-hidden rounded-3xl border border-slate-200/90 shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-sm font-heading font-bold text-[#0F172A] uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Summary Stat Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {STATS.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0">
                  <StatIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-[#0F172A] uppercase">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 4. CALL TO ACTION BANNER (Matching PDF Page 3) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card bg-white p-8 lg:p-12 rounded-3xl border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
              START A CONVERSATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] uppercase tracking-tight">
              DISCUSS YOUR ENGINEERING PROJECT
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
              Let's review your requirements and define a practical design path forward.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary px-7 py-3.5 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Request a Project Review
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl overflow-hidden h-48 border border-slate-200 shadow-md">
            <img
              src="/services/drawing_validation.png"
              alt="Discuss Your Engineering Project"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

    </div>
  );
};
