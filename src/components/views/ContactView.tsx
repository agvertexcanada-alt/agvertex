import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [activeOffice, setActiveOffice] = useState<'coimbatore' | 'austin' | 'munich'>('coimbatore');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const OFFICES = {
    coimbatore: {
      name: 'Coimbatore HQ, India',
      address: 'AG Vertex Engineering Solutions, 120 Innovation Park, TIDEL Tech Zone, Coimbatore, Tamil Nadu - 641014',
      phone: '+91 (422) 890-4400',
      email: 'info@agvertex.com',
      mapUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80'
    },
    austin: {
      name: 'Austin R&D Hub, USA',
      address: '700 Tech Ridge Boulevard, Suite 400, Austin, Texas 78753',
      phone: '+1 (512) 440-9800',
      email: 'us.sales@agvertex.com',
      mapUrl: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?auto=format&fit=crop&w=1000&q=80'
    },
    munich: {
      name: 'Munich Office, Germany',
      address: 'Bavaria Technology Park 12, 80331 Munich, Germany',
      phone: '+49 (89) 210-9900',
      email: 'eu.sales@agvertex.com',
      mapUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=80'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">GET IN TOUCH</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          Let's Build Something Great
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Have an engineering project or request for quotation? Contact our principal engineering team today.
        </p>
      </section>

      {/* SPLIT LAYOUT FORM & MAP */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Glass Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 lg:p-12 space-y-6 bg-white border border-slate-200">
            <h2 className="text-2xl font-heading font-bold text-[#0F172A]">Send Us a Message</h2>

            {submitted ? (
              <div className="p-10 rounded-2xl bg-emerald-50 text-emerald-800 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-600" />
                <h3 className="font-heading font-bold text-xl">Inquiry Received!</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out to AG Vertex. Our principal engineering lead will review your message and reply within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase font-mono">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase font-mono">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase font-mono">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-slate-500 uppercase font-mono">Subject / Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Service Discipline...</option>
                      <option value="Parametric 3D CAD">Parametric 3D CAD Modeling</option>
                      <option value="FEA Simulation">FEA Structural Stress Simulation</option>
                      <option value="CFD Fluid Analysis">CFD Thermal & Fluid Analysis</option>
                      <option value="3D Scan Reverse Engineering">3D Laser Reverse Engineering</option>
                      <option value="Metal 3D Printing">DMLS Metal 3D Prototyping</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase font-mono">Project Overview</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your engineering requirements, materials, timeline, or CAD specifications..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  Send Project Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Selector & Interactive Map Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200">
              {(['coimbatore', 'austin', 'munich'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveOffice(key)}
                  className={`flex-1 py-2 text-[11px] font-semibold rounded-full capitalize transition-all cursor-pointer ${
                    activeOffice === key ? 'bg-[#0057FF] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="glass-card p-6 space-y-4 bg-white border border-slate-200">
              <h3 className="text-lg font-heading font-bold text-[#0F172A]">{OFFICES[activeOffice].name}</h3>
              
              <div className="space-y-3 text-xs text-slate-600 font-mono">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{OFFICES[activeOffice].address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{OFFICES[activeOffice].phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{OFFICES[activeOffice].email}</span>
                </div>
              </div>

              {/* Map Preview Image */}
              <div className="rounded-2xl overflow-hidden h-48 relative border border-slate-200">
                <img
                  src={OFFICES[activeOffice].mapUrl}
                  alt={OFFICES[activeOffice].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                  <span className="text-[10px] font-mono text-white bg-slate-900/80 px-3 py-1 rounded-md">
                    LAT/LONG: 11.0168° N, 76.9558° E [VERIFIED LOCATION]
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
