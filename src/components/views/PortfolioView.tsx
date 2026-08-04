import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../../data/websiteData';
import { Search, Filter, ArrowRight, ExternalLink, X, CheckCircle2, ChevronRight } from 'lucide-react';

interface PortfolioViewProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'CAD Design', 'Simulation', 'Manufacturing', 'Prototyping'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'All' || proj.category === activeCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.clientIndustry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">PROVEN TRACK RECORD</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          Our Engineering Portfolio
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Explore our gallery of high-precision mechanical CAD models, FEA structural stress studies, CFD fluid simulations, and physical metal prototypes.
        </p>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-white border border-slate-200 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0057FF] text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
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
              placeholder="Search CAD, ANSYS, EV..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
          </div>

        </div>
      </section>

      {/* PINTEREST MASONRY GRID */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono uppercase">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-mono">
                      {project.timeline}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-mono text-[#0057FF] uppercase font-semibold">
                    {project.clientIndustry}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 text-xs font-semibold text-[#0057FF]">
                <span>View Engineering Specs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-4xl w-full p-8 lg:p-10 relative max-h-[90vh] overflow-y-auto space-y-8 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
                {selectedProject.category} | {selectedProject.clientIndustry}
              </span>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-[#0F172A]">
                {selectedProject.title}
              </h2>
            </div>

            <div className="rounded-2xl overflow-hidden h-72 border border-slate-200">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-heading font-bold text-[#0F172A] uppercase tracking-wider">Project Summary</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedProject.summary}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-heading font-bold text-[#0F172A] uppercase tracking-wider">Engineering Highlights</h3>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0057FF] shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setActiveTab('case-study');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-secondary px-6 py-2.5 text-xs font-semibold flex items-center gap-2"
              >
                Open Deep Case Study <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuoteModal();
                }}
                className="btn-primary px-8 py-3 text-xs font-semibold"
              >
                Request Similar Project Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
