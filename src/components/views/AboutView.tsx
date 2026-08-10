import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, Calendar, Box, Crosshair, Users, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const VALUES = [
    {
      icon: Target,
      title: 'OUR MISSION',
      desc: 'Delivering practical, high-precision engineering solutions that bridge design concepts to flawless shop-floor production.',
    },
    {
      icon: Eye,
      title: 'OUR VISION',
      desc: 'Becoming the premier mechanical design consultancy trusted by automotive and industrial manufacturers worldwide.',
    },
    {
      icon: ShieldCheck,
      title: 'CORE VALUES',
      desc: 'Precision, integrity, manufacturability-first engineering, and uncompromising ASME GD&T compliance.',
    },
    {
      icon: HeartHandshake,
      title: 'OUR PROMISE',
      desc: 'Production-ready documentation, zero rework, and dedicated supplier coordination from day one.',
    },
  ];

  const DOMAIN_CARDS = [
    {
      title: 'Product Development',
      desc: 'From concept through detailed design, we create practical solutions that align with function, cost, and manufacturability.',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Tooling Experience',
      desc: 'Mold and die design that supports repeatable production and works seamlessly on the shop floor.',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Automotive Engineering',
      desc: 'Automotive drawing validation and documentation that meets industry standards and manufacturer requirements.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'CAD & Documentation',
      desc: 'Accurate 3D CAD modelling and clear documentation that communicates design intent and supports manufacturing.',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const STATS = [
    {
      icon: Calendar,
      value: '15+ Years',
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
      value: 'Supplier Support',
      label: 'Drawing Review & Coordination',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
              ABOUT AG VERTEX
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-heading font-bold text-[#0F172A] tracking-tight leading-[1.1]">
              Engineering Design Built for <span className="text-[#0057FF]">Manufacturing</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              AG Vertex is a Windsor, Ontario mechanical design consultancy providing practical engineering solutions that move products from concept to production. We specialize in product design, mold and die design, 3D CAD modelling, and automotive drawing validation that manufacturers can build with confidence.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('services')}
                className="btn-primary px-7 py-3.5 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Explore Our Capabilities <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column Workstation Image */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 h-[360px] sm:h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Engineering CAD Workstation and 2D Blueprints"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="text-[10px] font-mono font-bold text-blue-300 uppercase tracking-wider block">
                • WINDSOR, ONTARIO ENGINEERING FACILITY
              </span>
              <p className="text-xs font-medium text-slate-200">
                Advanced CAD, mold tooling, and drawing validation for global OEMs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OUR MISSION, VISION, CORE VALUES & PROMISE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div
                key={idx}
                className="glass-card bg-white p-7 space-y-4 border border-slate-200/90 rounded-3xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-[#0F172A] tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 4 ENGINEERING DOMAINS / PILLARS OF EXPERIENCE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest">
            CORE DOMAINS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">
            15+ years of professional engineering experience applied to every project we deliver.
          </h2>
        </div>

        {/* 4 Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOMAIN_CARDS.map((domain, idx) => (
            <div
              key={idx}
              className="glass-card bg-white overflow-hidden border border-slate-200/90 rounded-3xl shadow-md flex flex-col sm:flex-row hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="w-full sm:w-1/2 h-52 sm:h-auto overflow-hidden relative">
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
              </div>
              <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center space-y-2.5">
                <h3 className="text-lg font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {domain.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE THAT SUPPORTS PRACTICAL DESIGN */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">
            Experience That Supports Practical Design
          </h2>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="glass-card bg-white p-8 rounded-3xl border border-slate-200/90 text-center space-y-3 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center mx-auto">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="text-3xl font-heading font-bold text-[#0057FF]">
                  {item.value}
                </div>
                <div className="text-xs font-medium text-slate-600">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50/90 via-blue-100/50 to-blue-50/90 p-8 lg:p-14 border border-blue-200/70 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          
          <div className="space-y-4 max-w-xl z-10">
            <span className="text-xs font-mono font-bold text-[#0057FF] uppercase tracking-widest">
              • START COLLABORATION
            </span>

            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[#0F172A] tracking-tight">
              Discuss Your <br />
              <span className="text-[#0057FF]">Engineering Project</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Let's review your requirements and create a practical design path forward.
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

          {/* Right Blueprint & Tooling Render */}
          <div className="w-full lg:w-1/2 h-64 lg:h-80 relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80"
              alt="CAD Blueprint and Precision Tooling"
              className="w-full h-full object-cover rounded-2xl opacity-90 shadow-2xl border border-slate-200/80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-transparent to-transparent" />
          </div>

        </div>
      </section>

    </div>
  );
};
