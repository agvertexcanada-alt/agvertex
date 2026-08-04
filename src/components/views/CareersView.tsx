import React, { useState } from 'react';
import { CAREER_OPENINGS, CareerItem } from '../../data/websiteData';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send, Award, Users, Heart } from 'lucide-react';

export const CareersView: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerItem | null>(null);
  const [applied, setApplied] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setSelectedJob(null);
    }, 3000);
  };

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HERO HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">JOIN OUR TEAM</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          Shape the Future of Mechanical Engineering
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Build your career alongside world-class CAD designers, FEA simulation specialists, and metrologists working on groundbreaking EV, Aerospace, and Robotics R&D.
        </p>
      </section>

      {/* OFFICE & CULTURE PHOTO */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="AG Vertex Engineering Team Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-8 lg:p-12">
            <div className="text-white space-y-2 max-w-xl">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-500 text-xs font-mono font-semibold">
                LIFE AT AG VERTEX
              </span>
              <h2 className="text-2xl font-heading font-bold">Collaborative, High-Impact Engineering Culture</h2>
              <p className="text-xs text-slate-300">Continuous R&D learning, state-of-the-art CAD workstations, and flexible hybrid schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#0F172A]">Open Positions</h2>
            <p className="text-xs text-slate-500">Explore active career opportunities across design, simulation, and quality.</p>
          </div>
          <span className="text-xs font-mono text-[#0057FF]">{CAREER_OPENINGS.length} ACTIVE ROLES</span>
        </div>

        <div className="space-y-4">
          {CAREER_OPENINGS.map((job) => (
            <div key={job.id} className="glass-card p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-400">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0057FF] text-[10px] font-mono font-bold">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{job.type}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0F172A]">{job.title}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-blue-500" /> {job.location}</span>
                  <span>•</span>
                  <span>Experience: {job.experience}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="btn-primary px-6 py-3 text-xs font-semibold whitespace-nowrap self-start md:self-center"
              >
                View Job & Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
              {selectedJob.department}
            </span>

            <h2 className="text-2xl font-heading font-bold text-[#0F172A]">
              Apply for {selectedJob.title}
            </h2>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedJob.description}
            </p>

            {applied ? (
              <div className="p-8 rounded-2xl bg-emerald-50 text-emerald-700 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-600" />
                <h3 className="font-heading font-bold text-lg">Application Submitted!</h3>
                <p className="text-xs text-emerald-600">Our HR engineering recruiter will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="url"
                    placeholder="LinkedIn or Portfolio URL"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <textarea
                  rows={3}
                  placeholder="Brief Cover Note / Relevant CAD software experience..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />

                <div className="pt-2 flex justify-end">
                  <button type="submit" className="btn-primary px-8 py-3 text-xs font-semibold flex items-center gap-2">
                    Submit Application <Send className="w-3.5 h-3.5" />
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
