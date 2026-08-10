import React from 'react';
import { Mail, MapPin, ArrowUp, Linkedin, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    'Product Design & Development',
    'Injection Mold Design',
    'Pressure Die-Casting Die Design',
    '3D CAD Modelling',
    'Drawings, GD&T & BOMs',
    'Automotive Drawing Validation',
  ];

  const companyList = [
    { label: 'About', tab: 'about' },
    { label: 'Capability Showcase', tab: 'portfolio' },
    { label: 'Industries', tab: 'industries' },
    { label: 'Engineering Approach', tab: 'process' },
    { label: 'Contact', tab: 'contact' },
  ];

  return (
    <footer className="bg-white text-slate-700 pt-16 pb-8 border-t border-slate-200 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Custom Logo & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center cursor-pointer focus:outline-none"
            >
              <img
                src="/ag_vertex_logo.png"
                alt="AG VERTEX Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </button>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Mechanical design consultancy in Windsor, Ontario.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0057FF] hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0057FF] hover:text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0057FF] hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-[#0057FF] transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              {companyList.map((comp, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => { setActiveTab(comp.tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-[#0057FF] transition-colors text-left"
                  >
                    {comp.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">
              CONTACT
            </h4>
            
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0057FF] shrink-0 mt-0.5" />
                <span>Windsor, Ontario, Canada</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0057FF] shrink-0" />
                <a href="mailto:contact@agvertex.com" className="hover:text-[#0057FF] transition-colors">
                  contact@agvertex.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar matching image */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2026 AG Vertex. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Engineering Disclaimer</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#0057FF] text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
