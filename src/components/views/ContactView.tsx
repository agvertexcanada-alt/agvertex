import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Send, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    overview: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        overview: '',
      });
    }, 3500);
  };

  return (
    <div className="space-y-16 lg:space-y-20 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4 text-center max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#0F172A] tracking-tight">
          LET'S DISCUSS YOUR PROJECT
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Tell us what you are developing, the support you need, and your preferred timeline.
        </p>
      </section>

      {/* 2. MAIN 2-COLUMN SECTION MATCHING REFERENCE SCREENSHOT */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: REQUEST A PROJECT REVIEW Form */}
          <div className="lg:col-span-7 glass-card bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
            <h2 className="text-xl font-heading font-bold text-[#0F172A] uppercase tracking-wide">
              REQUEST A PROJECT REVIEW
            </h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 text-emerald-800 text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-600" />
                <h3 className="font-heading font-bold text-lg">Project Request Sent!</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for contacting AG Vertex. Our engineering team will review your requirements and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                      WORK EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Phone Number & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                      PHONE NUMBER (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (519) 555-0123"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                      SERVICE REQUIRED
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="Product Design & Development">Product Design & Development</option>
                      <option value="Injection Mold Design">Injection Mold Design</option>
                      <option value="Pressure Die-Casting Die Design">Pressure Die-Casting Die Design</option>
                      <option value="3D CAD Modelling">3D CAD Modelling</option>
                      <option value="Drawings, GD&T & BOMs">Drawings, GD&T & BOMs</option>
                      <option value="DFM / DFA Support">DFM / DFA Support</option>
                      <option value="Automotive Drawing Validation">Automotive Drawing Validation</option>
                      <option value="Supplier & Prototype Support">Supplier & Prototype Support</option>
                    </select>
                  </div>
                </div>

                {/* Project Overview */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                    PROJECT OVERVIEW
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.overview}
                    onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                    placeholder="Briefly describe your component, tooling, drawing, or CAD requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25 mt-2"
                >
                  SEND PROJECT REQUEST <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

          {/* Right Column: AG VERTEX Company & Engineering Support Card */}
          <div className="lg:col-span-5 glass-card bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
            <h2 className="text-xl font-heading font-bold text-[#0F172A] tracking-tight">
              AG VERTEX
            </h2>

            {/* Contact Details List */}
            <div className="space-y-3.5 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#0057FF] shrink-0" />
                <span className="font-medium">Windsor, Ontario, Canada</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0057FF] shrink-0" />
                <span className="font-medium">Email: info@agvertex.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#0057FF] shrink-0" />
                <span className="font-medium">Project inquiries by appointment</span>
              </div>
            </div>

            {/* Engineering Support Tagline */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-[#0057FF] uppercase tracking-wider block">
                ENGINEERING SUPPORT
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Product Design · Mold & Die Design · 3D CAD Modelling · Automotive Drawing Validation
              </p>
            </div>

            {/* Workstation Graphic with CAD monitor and physical part */}
            <div className="rounded-2xl overflow-hidden h-56 relative border border-slate-200/80 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="CAD Workstation and Precision Machined Component"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                <p className="text-[11px] font-mono text-white font-medium">
                  Turnkey mechanical design & manufacturing documentation.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
