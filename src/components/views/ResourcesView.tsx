import React, { useState } from 'react';
import { ARTICLES_DATA, ArticleItem } from '../../data/websiteData';
import { Clock, Folder, ArrowRight, HelpCircle, X, CheckCircle2 } from 'lucide-react';

interface ResourcesViewProps {
  onOpenQuoteModal: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const categories = ['All', 'Product Design', 'Mold Design', 'CAD & Drawings', 'Automotive'];

  const featuredGuide = ARTICLES_DATA[0];
  const gridArticles = ARTICLES_DATA.slice(1);

  const filteredArticles = gridArticles.filter((art) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Automotive') return art.category.toLowerCase().includes('automotive') || art.title.toLowerCase().includes('automotive') || art.category === 'Drawing Validation';
    return art.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <div className="space-y-16 lg:space-y-20 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-4 text-center max-w-3xl">
        <span className="text-xs font-mono font-bold uppercase text-[#0057FF] tracking-widest block">
          ENGINEERING KNOWLEDGE HUB
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#0F172A] tracking-tight">
          RESOURCES & INSIGHTS
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
          Practical guidance on product design, mold design, 3D CAD modelling, GD&T, DFM and automotive drawing validation.
        </p>
      </section>

      {/* 2. FEATURED PRACTICAL GUIDE HERO CARD */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div
          onClick={() => setSelectedArticle(featuredGuide)}
          className="glass-card bg-white p-8 lg:p-12 border border-slate-200/90 rounded-3xl shadow-xl hover:border-blue-400 cursor-pointer transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Info */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold uppercase tracking-wider">
                FEATURED PRACTICAL GUIDE
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors leading-tight">
                {featuredGuide.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {featuredGuide.summary}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-xs text-slate-500 font-mono pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0057FF]" />
                  {featuredGuide.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-[#0057FF]" />
                  {featuredGuide.category}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(featuredGuide);
                  }}
                  className="btn-primary px-7 py-3 text-xs font-semibold flex items-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column Featured Workstation Graphic */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 h-[280px] sm:h-[340px]">
              <img
                src={featuredGuide.image}
                alt={featuredGuide.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. FILTER PILLS BAR */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0057FF] text-white shadow-md shadow-blue-500/25'
                  : 'bg-white text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. ARTICLES CARDS GRID (3 Cards matching reference screenshot) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="glass-card bg-white overflow-hidden rounded-3xl border border-slate-200/90 shadow-md cursor-pointer group flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-2.5">
                  <h3 className="text-base font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Read Article Link */}
              <div className="px-6 pb-6 pt-1 flex items-center gap-1 text-xs font-semibold text-[#0057FF] group-hover:translate-x-0.5 transition-transform">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM TECHNICAL DESIGN QUESTION BANNER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-[#0F172A]">
                Have a technical design question?
              </h3>
              <p className="text-xs text-slate-500">
                Our engineers are here to help with your project.
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenQuoteModal}
              className="btn-primary px-7 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer whitespace-nowrap"
            >
              Request a Project Review <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ARTICLE READING POPUP MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-3xl w-full p-8 lg:p-10 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
                {selectedArticle.category}
              </span>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-[#0F172A]">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-slate-200">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {selectedArticle.content || selectedArticle.summary}
              </p>

              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700 space-y-1">
                <span className="font-heading font-bold text-[#0F172A]">Key Takeaway for Manufacturing:</span>
                <p>Early DFM audits and synchronized 2D/3D CAD definitions eliminate tooling delays, part rejection, and supplier misalignments during production ramp-up.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn-secondary px-6 py-2.5 text-xs font-semibold cursor-pointer"
              >
                Close Article
              </button>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenQuoteModal();
                }}
                className="btn-primary px-8 py-3 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/20"
              >
                Discuss with Our Engineers <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
