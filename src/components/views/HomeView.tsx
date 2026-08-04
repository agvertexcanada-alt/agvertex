import React, { useState } from 'react';
import { HeroCADCanvas } from '../three/HeroCADCanvas';
import { SERVICES_DATA, INDUSTRIES_DATA, PROCESS_STEPS, FEATURED_CASE_STUDIES, SOFTWARE_TOOLS } from '../../data/websiteData';
import { ArrowRight, Play, ChevronRight, Box, Compass, Layers, Activity, Scan, Cpu, Printer, CheckCircle2, Search, Send, FileText, Globe, Zap, ShieldCheck } from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
  onOpenProjectModal: (projectId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, onOpenQuoteModal, onOpenProjectModal }) => {
  // Active filter for Industries section
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState<string>('All');

  const filteredIndustries = INDUSTRIES_DATA.filter(ind => {
    if (selectedIndustryFilter === 'All') return true;
    return ind.title.toLowerCase().includes(selectedIndustryFilter.toLowerCase()) ||
           ind.id.toLowerCase().includes(selectedIndustryFilter.toLowerCase());
  });

  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'product-design': return <Compass className="w-5 h-5" />;
      case 'cad-modeling': return <Layers className="w-5 h-5" />;
      case 'cae-simulation': return <Activity className="w-5 h-5" />;
      case 'reverse-engineering': return <Scan className="w-5 h-5" />;
      case 'manufacturing-support': return <Cpu className="w-5 h-5" />;
      case 'prototyping': return <Printer className="w-5 h-5" />;
      case '3d-printing': return <Box className="w-5 h-5" />;
      case 'testing-validation': return <CheckCircle2 className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-20 lg:space-y-28 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] pt-24 lg:pt-28 flex items-center justify-center bg-radial-glow">
        
        {/* Background Dot Matrix Pattern */}
        <div className="absolute top-12 right-12 w-64 h-64 bg-[radial-gradient(#0057FF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
        <div className="absolute bottom-12 left-12 w-64 h-64 bg-[radial-gradient(#0057FF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-7 z-10">
            {/* Top Dot Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-ping" />
              DESIGN • SIMULATE • MANUFACTURE
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-bold text-[#0F172A] tracking-tight leading-[1.08]">
              Engineering <br />
              Ideas Into <br />
              <span className="text-[#0057FF]">
                Reality
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
              Helping industries transform ideas into precision-engineered products through advanced CAD, CAE, simulation, prototyping, and manufacturing solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="btn-primary px-7 py-3.5 text-xs font-semibold flex items-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('case-study')}
                className="btn-secondary px-6 py-3.5 text-xs font-semibold flex items-center gap-2.5 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0057FF]">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                Watch Showreel
              </button>
            </div>

          </div>

          {/* Right Column: Clean 3D CAD Video Graphic */}
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

      {/* 2. ENGINEERING CAPABILITIES: EFFORTLESS & HIGHLY INTUITIVE CARD GRID */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-[#0057FF] uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5" /> WHAT WE DO • CORE DISCIPLINES
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">Engineering Capabilities</h2>
          </div>

          <button
            onClick={() => setActiveTab('services')}
            className="text-xs font-semibold text-[#0057FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            View All 8 Disciplines <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Intuitive 4-Column Grid (1 column on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              onClick={() => setActiveTab('services')}
              className="glass-card overflow-hidden bg-white border border-slate-200/90 rounded-3xl cursor-pointer group hover:border-blue-400 flex flex-col justify-between shadow-md transition-all duration-300"
            >
              <div>
                {/* Image Header with Discipline Badge */}
                <div className="h-48 overflow-hidden relative">
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
                      {getCapabilityIcon(srv.id)}
                    </div>
                  </div>

                  {/* Bottom Image Title */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-blue-300 transition-colors">
                      {srv.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
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
                <span>Explore Discipline</span>
                <div className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#0057FF] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. ULTRA-CLEAN MODERN HIGH-TECH INDUSTRIES GRID SHOWCASE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        
        {/* Top Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-[#0057FF] uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" /> WHO WE SERVE • SECTOR DIRECTORY
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">Industries We Serve</h2>
          </div>

          <button
            onClick={() => setActiveTab('industries')}
            className="text-xs font-semibold text-[#0057FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            View All Industries <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Category Filter Pills Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {['All', 'Automotive', 'Aerospace', 'Medical', 'Industrial', 'Oil & Gas', 'Defense', 'Electronics'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedIndustryFilter(cat)}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedIndustryFilter === cat
                  ? 'bg-[#0057FF] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Premium Industry Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIndustries.map((ind, idx) => (
            <div
              key={ind.id}
              onClick={() => setActiveTab('industries')}
              className="glass-card overflow-hidden bg-white border border-slate-200/90 rounded-3xl cursor-pointer group hover:border-blue-400 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-slate-700">
                      SECTOR 0{idx + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-blue-300 transition-colors">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-blue-600 font-mono font-medium line-clamp-1">
                    "{ind.tagline}"
                  </p>
                  
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {ind.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    {ind.stats.map((st, i) => (
                      <div key={i} className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-xs font-heading font-bold text-[#0057FF] block">{st.value}</span>
                        <span className="text-[9px] text-slate-400 font-mono block truncate">{st.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-[#0057FF]">
                <span>Explore Sector Specs</span>
                <div className="w-[#2D8CFF] w-7 h-7 rounded-full bg-blue-50 group-hover:bg-[#0057FF] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 4. ENGINEERING PROCESS */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">OUR PROCESS</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">Engineering Process</h2>
        </div>

        {/* 7 Connected Process Nodes */}
        <div className="relative">
          <div className="absolute top-7 left-12 right-12 h-0.5 border-b-2 border-dashed border-slate-200 hidden md:block" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
            {PROCESS_STEPS.map((ps, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab('process')}
                className="flex flex-col items-center text-center space-y-3 cursor-pointer group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-blue-500/20 text-[#0057FF] flex items-center justify-center group-hover:bg-[#0057FF] group-hover:text-white transition-all shadow-md">
                  {idx === 0 && <Search className="w-6 h-6" />}
                  {idx === 1 && <Compass className="w-6 h-6" />}
                  {idx === 2 && <Box className="w-6 h-6" />}
                  {idx === 3 && <Cpu className="w-6 h-6" />}
                  {idx === 4 && <Layers className="w-6 h-6" />}
                  {idx === 5 && <CheckCircle2 className="w-6 h-6" />}
                  {idx === 6 && <Send className="w-6 h-6" />}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-heading font-bold text-[#0F172A]">{ps.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-tight max-w-[130px] mx-auto">{ps.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDIES */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">FEATURED WORK</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">Featured Case Studies</h2>
          </div>
          <button
            onClick={() => setActiveTab('portfolio')}
            className="text-xs font-semibold text-[#0057FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            View All Projects <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Case Study Cards matching image layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Main Dark Card */}
          <div
            onClick={() => setActiveTab('case-study')}
            className="lg:col-span-6 rounded-3xl bg-[#0F172A] text-white p-8 lg:p-10 flex flex-col justify-between space-y-8 cursor-pointer group hover:shadow-2xl relative overflow-hidden"
          >
            <div className="space-y-4 z-10">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                {FEATURED_CASE_STUDIES[0].tag}
              </span>

              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white group-hover:text-blue-400 transition-colors">
                {FEATURED_CASE_STUDIES[0].title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                {FEATURED_CASE_STUDIES[0].summary}
              </p>

              <div className="flex items-center gap-2 pt-2">
                {FEATURED_CASE_STUDIES[0].tools.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-slate-800 text-[10px] font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="z-10 pt-4">
              <button className="btn-secondary px-5 py-2.5 text-xs font-semibold flex items-center gap-2 text-[#0F172A]">
                View Case Study <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Background 3D Render Image */}
            <div className="absolute right-0 bottom-0 top-0 w-3/5 pointer-events-none opacity-80 group-hover:scale-105 transition-transform duration-700">
              <img
                src={FEATURED_CASE_STUDIES[0].image}
                alt={FEATURED_CASE_STUDIES[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/70 to-transparent" />
            </div>
          </div>

          {/* Card 2: Light Card */}
          <div
            onClick={() => setActiveTab('portfolio')}
            className="lg:col-span-3 rounded-3xl bg-slate-50 border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 cursor-pointer group hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="rounded-2xl overflow-hidden h-40">
              <img
                src={FEATURED_CASE_STUDIES[1].image}
                alt={FEATURED_CASE_STUDIES[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0057FF] text-[9px] font-mono font-bold">
                {FEATURED_CASE_STUDIES[1].tag}
              </span>
              <h4 className="text-lg font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                {FEATURED_CASE_STUDIES[1].title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {FEATURED_CASE_STUDIES[1].summary}
              </p>
            </div>

            <div className="text-xs font-semibold text-[#0057FF] flex items-center gap-1">
              View Case Study <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Light Card */}
          <div
            onClick={() => setActiveTab('portfolio')}
            className="lg:col-span-3 rounded-3xl bg-slate-50 border border-slate-200/80 p-6 flex flex-col justify-between space-y-6 cursor-pointer group hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="rounded-2xl overflow-hidden h-40">
              <img
                src={FEATURED_CASE_STUDIES[2].image}
                alt={FEATURED_CASE_STUDIES[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0057FF] text-[9px] font-mono font-bold">
                {FEATURED_CASE_STUDIES[2].tag}
              </span>
              <h4 className="text-lg font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                {FEATURED_CASE_STUDIES[2].title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {FEATURED_CASE_STUDIES[2].summary}
              </p>
            </div>

            <div className="text-xs font-semibold text-[#0057FF] flex items-center gap-1">
              View Case Study <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </section>

      {/* 6. SOFTWARE EXPERTISE TICKER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">TECHNOLOGIES WE USE</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">Software Expertise</h2>
          </div>
          <button
            onClick={() => setActiveTab('technologies')}
            className="text-xs font-semibold text-[#0057FF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            View All Technologies <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Software Logos row matching image */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {SOFTWARE_TOOLS.map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center gap-2 hover:border-blue-400 transition-all cursor-pointer shadow-sm"
            >
              <span className="font-heading font-bold text-sm tracking-tight" style={{ color: tool.color }}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER MATCHING IMAGE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50/90 via-blue-100/50 to-blue-50/90 p-8 lg:p-14 border border-blue-200/70 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          
          <div className="space-y-4 max-w-xl z-10">
            <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest">
              • LET'S BUILD THE FUTURE
            </span>

            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[#0F172A] tracking-tight">
              Let's Build The <br />
              Future <span className="text-[#0057FF]">Together.</span>
            </h2>

            <p className="text-xs text-slate-600 leading-relaxed">
              Have a project in mind? Let's turn your ideas into innovative engineered solutions.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="btn-primary px-8 py-3.5 text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Floating 3D Metal Impeller Graphic */}
          <div className="w-full lg:w-1/2 h-64 lg:h-80 relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80"
              alt="3D Metallic Impeller Turbine Render"
              className="w-full h-full object-cover rounded-2xl opacity-90 shadow-2xl border border-slate-200/80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-transparent to-transparent" />
          </div>

        </div>
      </section>

    </div>
  );
};
