import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../../data/websiteData';
import { Search, ArrowRight, ShieldCheck, X, CheckCircle2, ChevronRight } from 'lucide-react';

interface PortfolioViewProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Product Design', 'Mold & Die Design', '3D CAD', 'Drawing Validation'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'All' || proj.category === activeCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (proj.tools && proj.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 lg:space-y-20 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4 text-center max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          ENGINEERING CAPABILITY SHOWCASE
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#0F172A] tracking-tight">
          DESIGN EXPERIENCE BUILT FOR MANUFACTURING
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Explore representative examples of mechanical design, tooling, CAD documentation, and automotive engineering support.
        </p>
      </section>

      {/* 2. FILTER PILLS & SEARCH BAR MATCHING REFERENCE SCREENSHOT */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3.5 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0057FF] text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-50 text-slate-600 hover:text-[#0F172A] hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capabilities..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

        </div>
      </section>

      {/* 3. SHOWCASE CARDS GRID MATCHING REFERENCE SCREENSHOT */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card bg-white overflow-hidden rounded-3xl border border-slate-200/90 shadow-md cursor-pointer group flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-2.5">
                  <span className="text-[11px] font-mono font-bold text-[#0057FF] uppercase tracking-wider block">
                    {project.tag}
                  </span>

                  <h3 className="text-lg font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 pb-6 pt-1 flex items-center justify-end text-[#0057FF] group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM REPRESENTATIVE DISCLAIMER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0057FF] shrink-0" />
          <p className="text-xs font-mono text-slate-500">
            Representative capability visuals. Client work is shown only with authorization.
          </p>
        </div>
      </section>

      {/* PROJECT DETAIL POPUP MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-3xl w-full p-8 lg:p-10 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1.5">
              <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
                {selectedProject.tag}
              </span>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-[#0F172A]">
                {selectedProject.title}
              </h2>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-slate-200">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProject.description || selectedProject.summary}
              </p>

              {/* Tools & Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {selectedProject.tools && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-xs font-heading font-bold text-[#0F172A] uppercase">
                      Engineering Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tools.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.highlights && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-xs font-heading font-bold text-[#0F172A] uppercase">
                      Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {selectedProject.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0057FF] shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-secondary px-6 py-2.5 text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuoteModal();
                }}
                className="btn-primary px-8 py-3 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
              >
                Discuss Similar Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
