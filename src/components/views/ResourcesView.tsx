import React, { useState } from 'react';
import { ARTICLES_DATA, ArticleItem } from '../../data/websiteData';
import { BookOpen, Download, FileText, Clock, User, X, ArrowRight, ChevronRight } from 'lucide-react';

interface ResourcesViewProps {
  onOpenQuoteModal: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const categories = ['All', 'Blog', 'Articles', 'Downloads', 'Whitepapers'];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    return activeCategory === 'All' || art.category === activeCategory;
  });

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">ENGINEERING KNOWLEDGE HUB</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          Resources & Insights
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Technical articles, FEA simulation whitepapers, DFM guidelines, and parametric CAD best practices curated by principal engineers.
        </p>
      </section>

      {/* FEATURED MAGAZINE HERO ARTICLE */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div
          onClick={() => setSelectedArticle(ARTICLES_DATA[0])}
          className="glass-card p-8 lg:p-12 bg-white cursor-pointer group hover:border-blue-400 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
                FEATURED TECHNICAL GUIDE
              </span>
              <h2 className="text-2xl lg:text-4xl font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                {ARTICLES_DATA[0].title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {ARTICLES_DATA[0].snippet}
              </p>
              <div className="flex items-center gap-6 text-xs text-slate-400 font-mono pt-2">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {ARTICLES_DATA[0].readTime}</span>
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {ARTICLES_DATA[0].author}</span>
                <span>{ARTICLES_DATA[0].date}</span>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden h-64 border border-slate-200">
              <img
                src={ARTICLES_DATA[0].image}
                alt={ARTICLES_DATA[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR & CARDS */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0057FF] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="glass-card overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-[10px] font-mono text-slate-400 flex items-center gap-3">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[#0F172A] group-hover:text-[#0057FF] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {art.snippet}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4 text-xs font-semibold text-[#0057FF]">
                <span>Read Full Resource</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLE READING MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-3xl w-full p-8 lg:p-10 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
              {selectedArticle.category}
            </span>

            <h2 className="text-2xl font-heading font-bold text-[#0F172A]">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-mono border-b border-slate-100 pb-4">
              <span>{selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-56 object-cover rounded-2xl border border-slate-200"
            />

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {selectedArticle.snippet} In complex mechanical assembly design, preserving parametric CAD tree integrity prevents model corruption during downstream FEA mesh generation. Always define global equations for parametric variables and establish reference geometry planes.
            </p>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn-secondary px-6 py-2.5 text-xs font-semibold"
              >
                Close Article
              </button>

              <button
                onClick={() => alert(`Downloading technical PDF whitepaper: ${selectedArticle.title}`)}
                className="btn-primary px-6 py-2.5 text-xs font-semibold flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" /> Download PDF Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
