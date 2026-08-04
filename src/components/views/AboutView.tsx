import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, Award, Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY_STATS } from '../../data/websiteData';

interface AboutViewProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const TIMELINE_EVENTS = [
    { year: '2014', title: 'Company Founded', desc: 'Established in Coimbatore, India with a focus on parametric 3D CAD modeling.' },
    { year: '2016', title: 'First Major OEM Project', desc: 'Partnered with Tier-1 Automotive manufacturer for chassis CAD drafting.' },
    { year: '2018', title: 'Expanded FEA/CFD Lab', desc: 'Installed ANSYS & Abaqus high-performance simulation computing cluster.' },
    { year: '2020', title: 'Advanced Metrology Facility', desc: 'Acquired Creaform blue laser 3D scanners and sub-micron CMM equipment.' },
    { year: '2023', title: 'Additive Mfg Hub', desc: 'Launched DMLS titanium metal 3D printing and 5-axis CNC machining lab.' },
    { year: '2026', title: 'Global Tech Presence', desc: 'Expanded engineering operations across US, Europe, and Asia-Pacific.' },
  ];

  const VALUES = [
    { icon: Target, title: 'Our Mission', desc: 'Deliver innovative mechanical engineering solutions with uncompromised precision, speed, and integrity.' },
    { icon: Eye, title: 'Our Vision', desc: 'Be a global leader in engineering excellence, pioneering advanced simulation and digital twin manufacturing.' },
    { icon: ShieldCheck, title: 'Core Values', desc: 'Innovation, Quality, Integrity, Collaboration, and Continuous Technical Mastery in everything we engineer.' },
    { icon: HeartHandshake, title: 'Our Promise', desc: 'Commitment to deliver high-performance, cost-optimized, and defect-free engineering deliverables on time, every time.' },
  ];

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HERO HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">ABOUT AG VERTEX</span>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
            Transforming Engineering Ideas Into High-Performance Reality
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            AG Vertex is a next-generation engineering solutions company delivering innovation through design, simulation, reverse engineering, and advanced manufacturing.
          </p>
        </div>

        {/* Building & HQ Photo */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="AG Vertex Headquarters Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8 lg:p-12">
            <div className="text-white space-y-2 max-w-xl">
              <span className="px-3 py-1 rounded-full bg-blue-500 text-xs font-mono font-semibold">
                HEADQUARTERS & ADVANCED LABS
              </span>
              <h2 className="text-2xl font-heading font-bold">Innovation Park, Coimbatore Tech Zone</h2>
              <p className="text-xs text-slate-300">120,000 Sq. Ft. State-of-the-Art CAD/CAM & Metrology Facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES & PROMISE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div key={idx} className="glass-card p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0F172A]">{val.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* OUR JOURNEY TIMELINE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">DECADE OF EXCELLENCE</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[#0F172A]">Our Journey (2014 - 2026)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {TIMELINE_EVENTS.map((evt, idx) => (
            <div key={idx} className="glass-card p-6 space-y-3 relative group hover:border-blue-400">
              <div className="text-2xl font-heading font-bold text-[#0057FF]">{evt.year}</div>
              <h3 className="text-sm font-heading font-bold text-[#0F172A]">{evt.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">{evt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP & STATS */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        <div className="glass-card p-10 bg-gradient-to-br from-white to-blue-50/50 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-heading font-bold text-[#0F172A]">Empowered by Senior Engineers</h2>
            <p className="text-xs text-slate-500">Over 80+ licensed CAD/CAE specialists, metrologists, and metallurgists.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                <div className="text-4xl font-heading font-bold text-[#0057FF]">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
