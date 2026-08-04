import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/websiteData';
import { ChevronDown, Search, Sparkles, Calculator, CheckCircle2, ArrowRight, DollarSign, Clock, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FAQViewProps {
  onOpenQuoteModal: () => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onOpenQuoteModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [faqSearch, setFaqSearch] = useState<string>('');

  // INSTANT QUOTE ESTIMATOR CALCULATOR STATE
  const [calcService, setCalcService] = useState<string>('cad');
  const [calcComplexity, setCalcComplexity] = useState<string>('medium');
  const [calcUrgency, setCalcUrgency] = useState<string>('standard');
  const [quoteGenerated, setQuoteGenerated] = useState<boolean>(false);

  const faqCategories = ['All', 'General', 'Services', 'Pricing', 'Process'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = faqCategory === 'All' || item.category === faqCategory;
    const matchesSearch = item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
                          item.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate dynamic quote estimates
  const getEstimate = () => {
    let basePrice = 1500;
    let baseDays = 14;

    if (calcService === 'fea') { basePrice = 2800; baseDays = 10; }
    if (calcService === 'cfd') { basePrice = 3500; baseDays = 12; }
    if (calcService === 'scan') { basePrice = 1800; baseDays = 5; }
    if (calcService === 'metal3d') { basePrice = 4200; baseDays = 7; }

    if (calcComplexity === 'simple') { basePrice *= 0.6; baseDays *= 0.6; }
    if (calcComplexity === 'high') { basePrice *= 1.8; baseDays *= 1.5; }
    if (calcComplexity === 'extreme') { basePrice *= 2.8; baseDays *= 2.2; }

    if (calcUrgency === 'express') { basePrice *= 1.4; baseDays *= 0.4; }

    return {
      priceRange: `$${Math.round(basePrice).toLocaleString()} – $${Math.round(basePrice * 1.3).toLocaleString()} USD`,
      leadTime: `${Math.max(3, Math.round(baseDays))} Business Days`
    };
  };

  const handleGenerateQuote = () => {
    setQuoteGenerated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const estimate = getEstimate();

  return (
    <div className="space-y-24 pt-28 pb-16">
      {/* HEADER */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 text-center max-w-3xl">
        <span className="text-xs font-mono font-semibold uppercase text-[#0057FF] tracking-widest">TRANSPARENCY & CLARITY</span>
        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-[#0F172A]">
          FAQ & Instant Quote Calculator
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Find answers to common questions about our engineering capabilities or generate an instant project estimate.
        </p>
      </section>

      {/* INSTANT QUOTE ESTIMATOR WIDGET */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card p-8 lg:p-12 bg-white relative overflow-hidden space-y-8 border-2 border-blue-200 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0057FF] to-[#2D8CFF] text-white flex items-center justify-center shadow-md">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#0F172A]">Instant Engineering Price Estimator</h2>
                <p className="text-xs text-slate-500">Configure parameters to view real-time budget & lead-time ranges.</p>
              </div>
            </div>

            <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0057FF] text-xs font-mono font-semibold">
              REAL-TIME ALGORITHM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Service Selection */}
              <div className="space-y-2">
                <label className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">1. Select Service Discipline</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'cad', label: 'Parametric CAD' },
                    { id: 'fea', label: 'FEA Stress Study' },
                    { id: 'cfd', label: 'CFD Fluid Simulation' },
                    { id: 'scan', label: '3D Laser Scan CAD' },
                    { id: 'metal3d', label: 'Metal 3D Printing' },
                  ].map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setCalcService(srv.id)}
                      className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                        calcService === srv.id
                          ? 'bg-[#0057FF] text-white border-[#0057FF] shadow-md shadow-blue-500/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {srv.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Complexity */}
              <div className="space-y-2">
                <label className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">2. Assembly Complexity / Parts Count</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'simple', label: '1–5 Parts' },
                    { id: 'medium', label: '5–25 Parts' },
                    { id: 'high', label: '25–100 Parts' },
                    { id: 'extreme', label: '100+ Parts' },
                  ].map((cx) => (
                    <button
                      key={cx.id}
                      onClick={() => setCalcComplexity(cx.id)}
                      className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                        calcComplexity === cx.id
                          ? 'bg-[#0057FF] text-white border-[#0057FF] shadow-md shadow-blue-500/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cx.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Urgency */}
              <div className="space-y-2">
                <label className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">3. Desired Turnaround Schedule</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'standard', label: 'Standard Schedule' },
                    { id: 'express', label: 'Accelerated Express (Priority)' },
                  ].map((urg) => (
                    <button
                      key={urg.id}
                      onClick={() => setCalcUrgency(urg.id)}
                      className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                        calcUrgency === urg.id
                          ? 'bg-[#0057FF] text-white border-[#0057FF] shadow-md shadow-blue-500/20'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {urg.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Result Display Box */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900 text-white space-y-6 text-center">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">ESTIMATED PROPOSAL SUMMARY</span>

              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-emerald-400">
                  {estimate.priceRange}
                </div>
                <div className="text-xs text-slate-400 flex items-center justify-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  Estimated Turnaround: <span className="text-white font-semibold">{estimate.leadTime}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 text-xs text-slate-300 leading-relaxed">
                Includes full parametric source CAD, 2D GD&T drawings, and FEA verification certificate.
              </div>

              <button
                onClick={handleGenerateQuote}
                className="w-full btn-primary py-4 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Lock In Formal Quote Proposal
              </button>

              {quoteGenerated && (
                <div className="text-xs text-emerald-400 font-semibold animate-in fade-in">
                  ✓ Quote code #AG-2026-Q84 generated! Engineering manager notified.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIZED FAQ ACCORDION */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#0F172A]">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500">Search questions by keyword or filter by discipline.</p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search NDA, STEP files, FEA..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFaqCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                faqCategory === cat
                  ? 'bg-[#0057FF] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card bg-white border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-heading font-bold text-[#0F172A]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-blue-50 text-[#0057FF] flex items-center justify-center transition-transform ${isOpen ? 'rotate-180 bg-[#0057FF] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
