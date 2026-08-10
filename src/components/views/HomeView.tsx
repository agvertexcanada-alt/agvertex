import React from 'react';
import { HeroCADCanvas } from '../three/HeroCADCanvas';
import { SERVICES_DATA, PROCESS_STEPS, SHOWCASE_CARDS, CAD_PLM_TOOLS } from '../../data/websiteData';
import { 
  ArrowRight, 
  MapPin, 
  Layers, 
  Cpu, 
  Calendar, 
  Box, 
  Target, 
  Users, 
  Search, 
  PenTool, 
  FileText, 
  CheckCircle, 
  Headphones,
  Compass
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
  onOpenProjectModal: (projectId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const getProcessIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Search className="w-5 h-5" />;
      case 1: return <Compass className="w-5 h-5" />;
      case 2: return <PenTool className="w-5 h-5" />;
      case 3: return <CheckCircle className="w-5 h-5" />;
      case 4: return <Headphones className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  const getServiceIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Layers className="w-5 h-5" />;
      case 1: return <Box className="w-5 h-5" />;
      case 2: return <Cpu className="w-5 h-5" />;
      case 3: return <Compass className="w-5 h-5" />;
      case 4: return <FileText className="w-5 h-5" />;
      case 5: return <CheckCircle className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-20 lg:space-y-28 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] pt-24 lg:pt-28 flex items-center justify-center bg-radial-glow">
        
        {/* Background Dot Matrix Accents */}
        <div className="absolute top-12 right-12 w-64 h-64 bg-[radial-gradient(#0057FF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-12 left-12 w-64 h-64 bg-[radial-gradient(#0057FF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-7 z-10">
            
            {/* Top Dot Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-ping" />
              DESIGN • SIMULATE • MANUFACTURE
            </div>

            {/* Main Official Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-bold text-[#0F172A] tracking-tight leading-[1.08]">
              ENGINEERING <br />
              DESIGN BUILT FOR <br />
              <span className="text-[#0057FF]">
                MANUFACTURING
              </span>
            </h1>

            {/* Official Sub-paragraph */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Product design, mold and die design, 3D CAD modelling, and automotive drawing validation—from concept to production-ready documentation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="btn-primary px-7 py-3.5 text-xs font-semibold flex items-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Request a Project Review
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className="btn-secondary px-6 py-3.5 text-xs font-semibold flex items-center gap-2 cursor-pointer"
              >
                Explore Services
              </button>
            </div>

            {/* Official Location Pill */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-white/80 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#0057FF]" />
                WINDSOR, ONTARIO, CANADA
              </div>
            </div>

          </div>

          {/* Right Column: CAD Graphic Visual */}
          <div className="lg:col-span-6 relative">
            <HeroCADCanvas />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-xs font-mono hidden md:flex">
          <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#0057FF] rounded-full animate-bounce" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* 2. CORE ENGINEERING CAPABILITIES (6 Specific Capabilities) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest block">
              WHAT WE DO
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">
              CORE ENGINEERING CAPABILITIES
            </h2>
          </div>

          <button
            onClick={() => setActiveTab('services')}
            className="text-xs font-semibold text-[#0057FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            View Detailed Services <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Capabilities Cards Grid (2 rows of 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              onClick={() => setActiveTab('services')}
              className="glass-card overflow-hidden bg-white border border-slate-200/90 rounded-3xl cursor-pointer group hover:border-blue-400 flex flex-col justify-between shadow-md transition-all duration-300"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-slate-700">
                      0{idx + 1}
                    </span>

                    <div className="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md text-[#0057FF] flex items-center justify-center shadow-sm">
                      {getServiceIcon(idx)}
                    </div>
                  </div>

                  {/* Bottom Image Title */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-blue-300 transition-colors">
                      {srv.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100">
                    {srv.capabilities.slice(0, 2).map((cap, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-blue-50/80 text-[10px] font-semibold text-[#0057FF] border border-blue-100">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-semibold text-[#0057FF]">
                <span>Explore Capability</span>
                <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#0057FF] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. A PRACTICAL DESIGN PROCESS (5 Steps) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest">
            OUR METHODOLOGY
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">
            A PRACTICAL DESIGN PROCESS
          </h2>
        </div>

        {/* 5 Connected Process Nodes */}
        <div className="relative">
          <div className="absolute top-7 left-16 right-16 h-0.5 border-b-2 border-dashed border-slate-200 hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((ps, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab('process')}
                className="flex flex-col items-center text-center space-y-3 cursor-pointer group bg-white/60 p-5 rounded-3xl border border-slate-200/60 hover:border-blue-300 transition-all shadow-xs"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-blue-500/20 text-[#0057FF] flex items-center justify-center group-hover:bg-[#0057FF] group-hover:text-white transition-all shadow-md">
                  {getProcessIcon(idx)}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-heading font-bold text-[#0F172A]">{ps.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[170px] mx-auto">{ps.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE BEHIND AG VERTEX */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card bg-white p-8 lg:p-12 border border-slate-200/90 rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Copy & Stat Pills */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest">
                ENGINEERING EXPERTISE
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">
                EXPERIENCE BEHIND AG VERTEX
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Built on 15+ years of professional engineering experience across automotive components, injection molding, hot-runner systems, electromechanical products, and manufacturing-focused design.
            </p>

            {/* 4 Official Stat/Pill Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1 hover:border-blue-300 transition-colors">
                <Calendar className="w-5 h-5 text-[#0057FF] mx-auto" />
                <div className="text-xs font-heading font-bold text-[#0F172A]">15+ Years</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Experience</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1 hover:border-blue-300 transition-colors">
                <Box className="w-5 h-5 text-[#0057FF] mx-auto" />
                <div className="text-xs font-heading font-bold text-[#0F172A]">3D CAD</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Modelling</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1 hover:border-blue-300 transition-colors">
                <Target className="w-5 h-5 text-[#0057FF] mx-auto" />
                <div className="text-xs font-heading font-bold text-[#0F172A]">GD&T / DFM</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Compliance</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1 hover:border-blue-300 transition-colors">
                <Users className="w-5 h-5 text-[#0057FF] mx-auto" />
                <div className="text-xs font-heading font-bold text-[#0F172A]">Supplier</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Coordination</div>
              </div>

            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('about')}
                className="btn-secondary px-6 py-3 text-xs font-semibold flex items-center gap-2 cursor-pointer"
              >
                Learn About Our Background <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column CNC / Cast Housing Graphic */}
          <div className="lg:col-span-5 relative h-72 lg:h-84 overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80"
              alt="Precision Machined Housing Assembly"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300">
                • METROLOGY & TOOLING
              </span>
              <p className="text-xs font-medium text-slate-200">
                Precision engineering built for zero-defect manufacturing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ENGINEERING CAPABILITY SHOWCASE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest block">
              PORTFOLIO HIGHLIGHTS
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">
              ENGINEERING CAPABILITY SHOWCASE
            </h2>
            <p className="text-xs font-mono text-slate-500">
              Conceptual capability examples
            </p>
          </div>

          <button
            onClick={() => setActiveTab('portfolio')}
            className="text-xs font-semibold text-[#0057FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            View Full Portfolio <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SHOWCASE_CARDS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab('portfolio')}
              className="group relative rounded-3xl overflow-hidden h-[380px] cursor-pointer shadow-lg border border-slate-200/80 transition-all duration-500 hover:border-blue-400 hover:shadow-2xl flex flex-col justify-end"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              <div className="relative z-10 p-6 space-y-2 text-white">
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 6. CAD & PLM EXPERIENCE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest">
            TOOLS & SYSTEMS
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">
            CAD & PLM EXPERIENCE
          </h2>
        </div>

        {/* 6 Official Software Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CAD_PLM_TOOLS.map((tool, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center justify-center text-center gap-1 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer shadow-xs"
            >
              <span className="font-heading font-bold text-base tracking-tight text-[#0F172A]">
                {tool.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50/90 via-blue-100/50 to-blue-50/90 p-8 lg:p-14 border border-blue-200/70 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          
          <div className="space-y-4 max-w-xl z-10">
            <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest">
              • START COLLABORATION
            </span>

            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[#0F172A] tracking-tight">
              LET'S REVIEW YOUR <br />
              <span className="text-[#0057FF]">ENGINEERING PROJECT</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Discuss your design requirements, documentation needs, or supplier drawing challenges.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="btn-primary px-8 py-3.5 text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                Request a Project Review <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Precision Blueprint & Part Graphic */}
          <div className="w-full lg:w-1/2 h-64 lg:h-80 relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
              alt="Engineering Blueprint and Bearings"
              className="w-full h-full object-cover rounded-2xl opacity-90 shadow-2xl border border-slate-200/80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-transparent to-transparent" />
          </div>

        </div>
      </section>

    </div>
  );
};
