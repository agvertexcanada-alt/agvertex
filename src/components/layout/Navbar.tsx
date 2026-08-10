import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'resources', label: 'Resources' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 pointer-events-none">
      <div className={`max-w-[1440px] mx-auto pointer-events-auto transition-all duration-300 rounded-full px-6 sm:px-8 py-3.5 md:py-4 flex items-center justify-between ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(15,23,42,0.1)] border border-slate-200/90' 
          : 'bg-white/90 backdrop-blur-md border border-slate-200/70 shadow-sm'
      }`}>
        
        {/* AG VERTEX Custom Logo Image (Enlarged & Prominent) */}
        <button 
          onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none shrink-0"
        >
          <img
            src="/ag_vertex_logo.png"
            alt="AG VERTEX Logo"
            className="h-11 sm:h-12 md:h-14 lg:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation Links (Bigger font size & comfortable padding) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 text-sm xl:text-[15px] font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-100 text-[#0057FF] font-bold shadow-xs'
                    : 'text-slate-700 hover:text-[#0057FF] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button (Proportional & Bold) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="btn-primary px-6 py-3 text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/25"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-800 hover:text-[#0057FF] focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu (Bigger text for easy touch) */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-3 max-w-[1440px] mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl p-6 border border-slate-200 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-3 text-left text-base font-semibold rounded-2xl transition-colors ${
                  activeTab === link.id ? 'bg-blue-50 text-[#0057FF] font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuoteModal();
            }}
            className="w-full btn-primary py-3.5 text-base font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
