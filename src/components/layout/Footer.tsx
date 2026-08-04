import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, Youtube, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-700 pt-16 pb-8 border-t border-slate-200 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Custom Logo & Socials */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center cursor-pointer focus:outline-none"
            >
              <img
                src="/ag_vertex_logo.png"
                alt="AG VERTEX Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </button>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Transforming ideas into precision engineered products with excellence, innovation and integrity.
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
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0057FF] hover:text-white flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-[#0057FF] transition-colors">About Us</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-[#0057FF] transition-colors">Leadership</button></li>
              <li><button onClick={() => setActiveTab('careers')} className="hover:text-[#0057FF] transition-colors">Careers</button></li>
              <li><button onClick={() => setActiveTab('resources')} className="hover:text-[#0057FF] transition-colors">News & Insights</button></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[#0057FF] transition-colors">Product Design</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[#0057FF] transition-colors">CAD Modeling</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[#0057FF] transition-colors">CAE Simulation</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-[#0057FF] transition-colors">Manufacturing Support</button></li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><button onClick={() => setActiveTab('industries')} className="hover:text-[#0057FF] transition-colors">Automotive</button></li>
              <li><button onClick={() => setActiveTab('industries')} className="hover:text-[#0057FF] transition-colors">Aerospace</button></li>
              <li><button onClick={() => setActiveTab('industries')} className="hover:text-[#0057FF] transition-colors">Medical</button></li>
              <li><button onClick={() => setActiveTab('industries')} className="hover:text-[#0057FF] transition-colors">Industrial</button></li>
              <li><button onClick={() => setActiveTab('industries')} className="hover:text-[#0057FF] transition-colors font-semibold text-[#0057FF]">View All</button></li>
            </ul>
          </div>

          {/* Col 5: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><button onClick={() => setActiveTab('resources')} className="hover:text-[#0057FF] transition-colors">Blog</button></li>
              <li><button onClick={() => setActiveTab('portfolio')} className="hover:text-[#0057FF] transition-colors">Case Studies</button></li>
              <li><button onClick={() => setActiveTab('resources')} className="hover:text-[#0057FF] transition-colors">Downloads</button></li>
              <li><button onClick={() => setActiveTab('faq')} className="hover:text-[#0057FF] transition-colors">FAQs</button></li>
            </ul>
          </div>

        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#0057FF]" />
            <span>+91 123 456 7890</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0057FF]" />
            <span>info@agvertex.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#0057FF]" />
            <span>Bengaluru / Coimbatore, India</span>
          </div>
        </div>

        {/* Newsletter Subscription Bar */}
        <div className="pt-2 max-w-sm space-y-2">
          <span className="text-[11px] font-mono text-slate-400 block">Subscribe to our newsletter</span>
          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2.5 rounded-full bg-slate-100 border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 w-8 rounded-full bg-[#0057FF] text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          {subscribed && <span className="text-[10px] text-emerald-600 block">Subscribed successfully!</span>}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2026 AG Vertex. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Sitemap</a>
          </div>

          {/* Floating Scroll to Top Button */}
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
