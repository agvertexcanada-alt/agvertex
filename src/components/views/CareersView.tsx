import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Box, 
  Search, 
  CheckCircle2, 
  Send, 
  X, 
  ArrowRight,
  CircleDot
} from 'lucide-react';

export const CareersView: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: 'Product Design',
    portfolioUrl: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        area: 'Product Design',
        portfolioUrl: '',
        message: '',
      });
    }, 2500);
  };

  const VALUES = [
    {
      title: 'Practical Engineering',
      desc: 'We solve real design problems with practical, manufacturable solutions.',
    },
    {
      title: 'Flexible Collaboration',
      desc: 'Work with our team on a project basis or as an independent specialist.',
    },
    {
      title: 'Technical Integrity',
      desc: 'We stand for accuracy, reliability, and clear communication in every deliverable.',
    },
    {
      title: 'Continuous Learning',
      desc: 'We encourage knowledge sharing and ongoing growth in engineering.',
    },
  ];

  const AREAS_OF_INTEREST = [
    { title: 'Product Design', icon: Compass },
    { title: 'Mold & Die Design', icon: Layers },
    { title: '3D CAD Modelling', icon: Box },
    { title: 'Automotive Drawing Validation', icon: Search },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
              WORK WITH AG VERTEX
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-heading font-bold text-[#0F172A] tracking-tight leading-[1.1]">
              Build Practical <br />
              <span className="text-[#0057FF]">Engineering Solutions</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              AG Vertex is building a network of skilled engineering professionals and independent specialists who value technical integrity, clear communication, and manufacturing-focused design.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary px-7 py-3.5 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Submit Your Profile <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column Collaborative Workstation Visual */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 h-[340px] sm:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Engineers collaborating on 3D CAD design workstation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-xs font-medium text-white">
                Collaborative engineering across CAD, tooling, and drawing audits.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHAT WE VALUE (4 Cards matching reference screenshot) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          WHAT WE VALUE
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => (
            <div
              key={idx}
              className="glass-card bg-white p-7 space-y-4 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Outlined Glowing Circle Icon */}
                <div className="w-12 h-12 rounded-full bg-blue-50/80 border-2 border-[#0057FF] flex items-center justify-center text-[#0057FF]">
                  <CircleDot className="w-5 h-5" />
                </div>

                <h3 className="text-base font-heading font-bold text-[#0F172A] tracking-tight">
                  {val.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CURRENT OPPORTUNITIES (No active positions notice matching reference screenshot) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          CURRENT OPPORTUNITIES
        </span>

        <div className="glass-card bg-white p-8 lg:p-12 border border-slate-200/90 rounded-3xl shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
            No active positions at this time.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            We welcome expressions of interest from mechanical designers, mold and die specialists, and CAD professionals for future project-based opportunities.
          </p>

          <div className="pt-3">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary px-7 py-3 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
            >
              Submit Your Resume <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. AREAS OF INTEREST (4 Cards matching reference screenshot) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          AREAS OF INTEREST
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS_OF_INTEREST.map((area, idx) => (
            <div
              key={idx}
              onClick={() => {
                setFormData(prev => ({ ...prev, area: area.title }));
                setModalOpen(true);
              }}
              className="glass-card bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#0057FF] flex items-center justify-center text-[#0057FF] group-hover:bg-[#0057FF] group-hover:text-white transition-colors shrink-0">
                <CircleDot className="w-4 h-4" />
              </div>

              <span className="text-sm font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                {area.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DARK NAVY CTA BANNER ("Interested in future opportunities?") */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="rounded-3xl bg-[#09152C] p-8 lg:p-12 border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          
          <div className="space-y-2 max-w-xl text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
              Interested in future opportunities?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Send us your profile and we'll keep you in mind for suitable project-based work.
            </p>
          </div>

          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary px-8 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              Send Your Profile
            </button>
          </div>

        </div>
      </section>

      {/* RESUME / PROFILE SUBMISSION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-xl w-full p-8 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl rounded-3xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-[#0057FF] uppercase">
                EXPRESSION OF INTEREST
              </span>
              <h2 className="text-2xl font-heading font-bold text-[#0F172A]">
                Submit Your Engineering Profile
              </h2>
              <p className="text-xs text-slate-500">
                Contact AG Vertex officials for future project-based engineering opportunities.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 text-emerald-700 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-600" />
                <h3 className="font-heading font-bold text-lg">Profile Submitted Successfully!</h3>
                <p className="text-xs text-emerald-600">Our engineering lead will review your background and reach out for suitable project collaboration.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-slate-500 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-500 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-slate-500 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (519) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-500 block mb-1">Primary Area of Interest</label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                      <option value="Product Design">Product Design</option>
                      <option value="Mold & Die Design">Mold & Die Design</option>
                      <option value="3D CAD Modelling">3D CAD Modelling</option>
                      <option value="Automotive Drawing Validation">Automotive Drawing Validation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-500 block mb-1">LinkedIn / Portfolio URL</label>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-500 block mb-1">Summary of CAD / Engineering Experience</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your CAD tools (Creo, NX, SolidWorks), years of experience, or specialization..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="btn-secondary px-5 py-2.5 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn-primary px-7 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
                  >
                    Submit Profile <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
