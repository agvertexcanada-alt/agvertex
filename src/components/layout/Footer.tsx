import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, MapPin, ArrowUp, Linkedin, Youtube, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { label: 'Product Design & Development', path: '/services' },
    { label: 'Injection Mold Design', path: '/services' },
    { label: 'Pressure Die-Casting Die Design', path: '/services' },
    { label: '3D CAD Modelling', path: '/services' },
    { label: 'Drawings, GD&T & BOMs', path: '/services' },
    { label: 'Automotive Drawing Validation', path: '/services' },
  ];

  const companyList = [
    { label: 'About', path: '/about' },
    { label: 'Capability Showcase', path: '/portfolio' },
    { label: 'Engineering Approach', path: '/services' },
    { label: 'Resources & Insights', path: '/resources' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const bottomNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Showcase', path: '/portfolio' },
    { label: 'Resources', path: '/resources' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white text-slate-700 pt-16 pb-8 border-t border-slate-200 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Custom Logo & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="flex items-center cursor-pointer focus:outline-none"
            >
              <img
                src="/ag_vertex_logo.png"
                alt="AG VERTEX Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

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
                  <Link 
                    to={service.path}
                    className="hover:text-[#0057FF] transition-colors text-left block"
                  >
                    {service.label}
                  </Link>
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
                  <Link 
                    to={comp.path}
                    className="hover:text-[#0057FF] transition-colors text-left block"
                  >
                    {comp.label}
                  </Link>
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
                <a href="mailto:info@agvertex.com" className="hover:text-[#0057FF] transition-colors">
                  info@agvertex.com
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="px-4 py-2 rounded-xl bg-blue-50 text-[#0057FF] font-semibold text-xs hover:bg-[#0057FF] hover:text-white transition-colors cursor-pointer"
                >
                  Request a Project Review →
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Navigation Bar (Matching PDF Footer) */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2026 AG Vertex. All rights reserved.</p>

          {/* Bottom Page Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            {bottomNavLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="text-slate-500 hover:text-[#0057FF] transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
