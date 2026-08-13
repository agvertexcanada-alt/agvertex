import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Send, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    overview: '',
    timeline: '',
    agreed: true,
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
        timeline: '',
        agreed: true,
      });
    }, 3500);
  };

  return (
    <div className="space-y-16 lg:space-y-20 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER (Matching PDF Page 9) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4 text-center max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          GET IN TOUCH
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#0F172A] tracking-tight">
          Let's discuss your project
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Tell us what you are developing, the engineering support you need, and your preferred timeline.
        </p>
      </section>

      {/* 2. MAIN 2-COLUMN SECTION (Matching PDF Page 9) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Request a Project Review Form */}
          <div className="lg:col-span-7 glass-card bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
            <h2 className="text-xl font-heading font-bold text-[#0F172A] tracking-tight">
              Request a Project Review
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
                      Name
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
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Phone Number & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                      Phone Number (Optional)
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
                      Service Required
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
                      <option value="Automotive Drawing Review">Automotive Drawing Review</option>
                      <option value="DFM / DFA Support">DFM / DFA Support</option>
                      <option value="Supplier & Prototype Coordination">Supplier & Prototype Coordination</option>
                    </select>
                  </div>
                </div>

                {/* Project Overview */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                    Project Overview
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

                {/* Preferred Timeline */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                    Preferred Timeline (Optional)
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="">Select a timeline</option>
                    <option value="Immediate (Within 1-2 weeks)">Immediate (Within 1-2 weeks)</option>
                    <option value="Standard (1-2 months)">Standard (1-2 months)</option>
                    <option value="Planning / Future Quarter">Planning / Future Quarter</option>
                  </select>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="rounded border-slate-300 text-[#0057FF] focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-[11px] text-slate-600 cursor-pointer">
                    I agree that AG Vertex may contact me about this inquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25 mt-2"
                >
                  Send Project Request <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

          {/* Right Column: AG Vertex Company Card */}
          <div className="lg:col-span-5 glass-card bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
            <h2 className="text-xl font-heading font-bold text-[#0F172A] tracking-tight">
              AG Vertex
            </h2>

            {/* Contact Details */}
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#0057FF] shrink-0" />
                <span className="font-medium">Windsor, Ontario, Canada</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0057FF] shrink-0" />
                <span className="font-medium">info@agvertex.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#0057FF] shrink-0" />
                <span className="font-medium">Project inquiries by appointment</span>
              </div>
            </div>

            {/* Engineering Support Tagline */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-[#0057FF] uppercase tracking-wider block">
                Engineering Support
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Product Design · Mold & Die Design · 3D CAD Modelling · Drawings, GD&T & BOMs · Automotive Drawing Review
              </p>
            </div>

            {/* What happens next */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider block">
                What happens next
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0057FF] font-bold text-[10px] flex items-center justify-center shrink-0">1</span>
                  <span>We review your project brief</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0057FF] font-bold text-[10px] flex items-center justify-center shrink-0">2</span>
                  <span>We clarify scope and timing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0057FF] font-bold text-[10px] flex items-center justify-center shrink-0">3</span>
                  <span>You receive the recommended next step</span>
                </li>
              </ul>
            </div>

            {/* Image (3 Engineers reviewing drawings from PDF Page 11) */}
            <div className="rounded-2xl overflow-hidden h-52 relative border border-slate-200/80 shadow-md">
              <img
                src="/images/cad_team_collaboration.jpeg"
                alt="AG Vertex Engineering Collaboration"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
