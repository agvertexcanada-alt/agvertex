import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ServicesView } from './components/views/ServicesView';
import { IndustriesView } from './components/views/IndustriesView';
import { PortfolioView } from './components/views/PortfolioView';
import { CaseStudyView } from './components/views/CaseStudyView';
import { TechnologiesView } from './components/views/TechnologiesView';
import { ProcessView } from './components/views/ProcessView';
import { ResourcesView } from './components/views/ResourcesView';
import { CareersView } from './components/views/CareersView';
import { ContactView } from './components/views/ContactView';
import { FAQView } from './components/views/FAQView';
import { BackgroundParticlesCanvas } from './components/three/BackgroundParticlesCanvas';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);

  const [modalFormData, setModalFormData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'CAD Modeling',
    details: ''
  });

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setQuoteSubmitted(false);
      setIsQuoteModalOpen(false);
      setModalFormData({ name: '', email: '', phone: '', discipline: 'CAD Modeling', details: '' });
    }, 3500);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            onOpenProjectModal={() => setActiveTab('portfolio')}
          />
        );
      case 'about':
        return <AboutView setActiveTab={setActiveTab} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'services':
        return <ServicesView onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'industries':
        return <IndustriesView onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'portfolio':
        return <PortfolioView setActiveTab={setActiveTab} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'case-study':
        return <CaseStudyView setActiveTab={setActiveTab} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'technologies':
        return <TechnologiesView onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'process':
        return <ProcessView onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'resources':
        return <ResourcesView onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'careers':
        return <CareersView />;
      case 'contact':
        return <ContactView />;
      case 'faq':
        return <FAQView onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      default:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            onOpenProjectModal={() => setActiveTab('portfolio')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0057FF] selection:text-white relative overflow-x-hidden">
      
      {/* CONTINUOUS BACKGROUND ANIMATION CANVAS */}
      <BackgroundParticlesCanvas />

      {/* Sticky Blur Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Page View Container */}
      <main className="flex-grow z-10">
        {renderActiveView()}
      </main>

      {/* Global Luxury Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* GLOBAL INSTANT QUOTE POPUP MODAL */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in">
          <div className="glass-card bg-white max-w-xl w-full p-8 relative space-y-6 shadow-2xl border-2 border-blue-200">
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-[#0057FF] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0057FF]" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-[#0F172A]">Request Project Estimate</h2>
                <span className="text-xs font-mono text-blue-600">DIRECT ENGINEERING INQUIRY</span>
              </div>
            </div>

            {quoteSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 text-emerald-800 text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-600" />
                <h3 className="font-heading font-bold text-xl">Project Proposal Sent!</h3>
                <p className="text-xs text-emerald-700">
                  Our principal engineering lead will review your specifications and issue a formal estimation statement within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={modalFormData.name}
                    onChange={(e) => setModalFormData({ ...modalFormData, name: e.target.value })}
                    placeholder="Full Name *"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    required
                    value={modalFormData.email}
                    onChange={(e) => setModalFormData({ ...modalFormData, email: e.target.value })}
                    placeholder="Work Email *"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    required
                    value={modalFormData.phone}
                    onChange={(e) => setModalFormData({ ...modalFormData, phone: e.target.value })}
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                  <select
                    value={modalFormData.discipline}
                    onChange={(e) => setModalFormData({ ...modalFormData, discipline: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  >
                    <option value="CAD Modeling">Parametric 3D CAD Modeling</option>
                    <option value="FEA Stress Analysis">FEA Structural Stress Analysis</option>
                    <option value="CFD Fluid Dynamics">CFD Fluid & Thermal Study</option>
                    <option value="Reverse Engineering">3D Scan Reverse Engineering</option>
                    <option value="Metal 3D Printing">Metal 3D Prototyping</option>
                  </select>
                </div>

                <textarea
                  rows={3}
                  required
                  value={modalFormData.details}
                  onChange={(e) => setModalFormData({ ...modalFormData, details: e.target.value })}
                  placeholder="Tell us about your project requirements, CAD software preferences, or delivery timeline..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="w-full btn-primary py-3.5 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  Submit Quote Request <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
