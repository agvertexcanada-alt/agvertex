import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Send, 
  CheckCircle2, 
  Globe2, 
  Clock, 
  ShieldCheck, 
  CheckCircle,
  Building2,
  Layers
} from 'lucide-react';

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

  const GLOBAL_HUBS = [
    {
      country: 'CANADA',
      flag: '🇨🇦',
      city: 'Windsor & Toronto, Ontario',
      role: 'Headquarters & Client Engineering Coordination',
      details: 'North American engineering management, tooling review, OEM standards alignment, and client account delivery.',
      timezone: 'EST (UTC-5)',
    },
    {
      country: 'INDIA',
      flag: '🇮🇳',
      city: 'Kochi, Kerala',
      role: 'Engineering Design & CAD Detailing Center',
      details: 'Complex 3D CAD modeling, mold & die split engineering, ASME Y14.5 GD&T drafting, and parametric part validation.',
      timezone: 'IST (UTC+5:30)',
    },
    {
      country: 'NEW ZEALAND',
      flag: '🇳🇿',
      city: 'Auckland & Regional Support',
      role: 'APAC Operations & Quality Verification',
      details: 'Regional engineering coordination, timezone-optimized project handover, and continuous quality audits.',
      timezone: 'NZST (UTC+12)',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER */}
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

      {/* 2. MAIN 2-COLUMN SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Request a Project Review Form */}
          <div className="lg:col-span-7 glass-card bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-heading font-bold text-[#0F172A] tracking-tight">
                Request a Project Review
              </h2>
              <p className="text-xs text-slate-500 font-normal">
                Fill in the details below and an engineer will respond within 1 business day.
              </p>
            </div>

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
                      Name *
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
                      Work Email *
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
                      Service Required *
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
                    Project Overview *
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
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
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
            </div>

            {/* Quick Consultation Callout */}
            <div className="glass-card bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 rounded-3xl border border-blue-200/80 shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0057FF] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase">
                  Fast 24-Hour Turnaround
                </h4>
                <p className="text-xs text-slate-600">
                  Our distributed engineering footprint across three global timezones ensures continuous workflow support.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. GLOBAL FOOTPRINT SECTION (Matching user request: India, Canada, New Zealand) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0057FF] text-[11px] font-mono font-bold tracking-widest uppercase">
            <Globe2 className="w-3.5 h-3.5" />
            GLOBAL ENGINEERING FOOTPRINT
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
            Globally Positioned For Good Tech Practices
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Strategic delivery hubs across North America, Asia, and Oceania provide our clients with local engineering coordination, round-the-clock CAD execution, and rigorous quality standards.
          </p>
        </div>

        {/* 3 Global Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GLOBAL_HUBS.map((hub, idx) => (
            <div
              key={idx}
              className="glass-card bg-white p-8 rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all duration-300 space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl filter drop-shadow-xs">{hub.flag}</span>
                  <span className="text-[10px] font-mono font-bold text-[#0057FF] bg-blue-50 px-2.5 py-1 rounded-full">
                    {hub.timezone}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                    {hub.country}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#0057FF] shrink-0" />
                    <span>{hub.city}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-[#0057FF] uppercase tracking-wider block">
                    {hub.role}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {hub.details}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Engineering Node</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Map Visual Container */}
        <div className="glass-card bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(#0057FF_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight">
              24/7 Follow-the-Sun Engineering Delivery
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When Canada hands over at end of day, our teams in India and New Zealand pick up the design iterations, ensuring zero downtime and rapid turnaround on critical tooling and CAD milestones.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-lg font-heading font-bold text-white block">🇨🇦 Canada</span>
              <span className="text-[11px] text-slate-400">Windsor & Toronto</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-lg font-heading font-bold text-white block">🇮🇳 India</span>
              <span className="text-[11px] text-slate-400">Kochi Hub</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-lg font-heading font-bold text-white block">🇳🇿 New Zealand</span>
              <span className="text-[11px] text-slate-400">Auckland Support</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
};
