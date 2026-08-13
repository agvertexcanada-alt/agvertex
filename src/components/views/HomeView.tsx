import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Search, 
  Compass, 
  PenTool, 
  CheckCircle2, 
  Headphones,
  Users,
  Box,
  Layers,
  FileText
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab?: (tab: string) => void;
  onOpenQuoteModal?: () => void;
  onOpenProjectModal?: (projectId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = () => {
  const navigate = useNavigate();

  const PROCESS_STEPS = [
    {
      step: 'STEP 01',
      title: 'Understand',
      desc: 'Clarify requirements and functional needs.',
      icon: Search,
    },
    {
      step: 'STEP 02',
      title: 'Develop',
      desc: 'Explore concepts and evaluate solutions.',
      icon: Compass,
    },
    {
      step: 'STEP 03',
      title: 'Detail',
      desc: 'Create detailed models and engineering documentation.',
      icon: PenTool,
    },
    {
      step: 'STEP 04',
      title: 'Review',
      desc: 'Validate designs and manufacturability.',
      icon: CheckCircle2,
    },
    {
      step: 'STEP 05',
      title: 'Support',
      desc: 'Support production and answer supplier questions.',
      icon: Headphones,
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pt-24 lg:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION (Matching PDF Page 1) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              ENGINEERING <br />
              DESIGN BUILT FOR <br />
              <span className="text-[#0057FF]">MANUFACTURING</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
              Practical mechanical design support for products, tooling, CAD documentation, and supplier coordination.
            </p>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 bg-white/90 border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#0057FF]" />
                Windsor, Ontario, Canada
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 bg-white/90 border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#0057FF]" />
                15+ Years of Engineering Experience
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary px-7 py-3.5 text-xs font-semibold flex items-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Request a Project Review
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/services')}
                className="btn-secondary px-6 py-3.5 text-xs font-semibold flex items-center gap-2 cursor-pointer"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Hero Video (new final.mp4) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950 group">
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[360px] sm:h-[440px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. THREE HIGHLIGHT CAPABILITY CARDS (Matching PDF Page 1) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Product & Mechanical Design */}
          <div 
            onClick={() => navigate('/services')}
            className="glass-card bg-white p-7 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-[#0F172A] leading-snug">
                Product & Mechanical Design
              </h3>
            </div>
            
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 font-medium">
              <span>3D CAD Modelling</span>
              <span className="text-slate-300">|</span>
              <span>Drawings, GD&T & BOMs</span>
            </div>
          </div>

          {/* Card 2: Mold & Die Tooling Design */}
          <div 
            onClick={() => navigate('/services')}
            className="glass-card bg-white p-7 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-[#0F172A] leading-snug">
                Mold & Die Tooling Design
              </h3>
            </div>
            
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 font-medium">
              <span>3D CAD Modelling</span>
              <span className="text-slate-300">|</span>
              <span>Drawings, GD&T & BOMs</span>
            </div>
          </div>

          {/* Card 3: CAD Documentation & Manufacturing Support */}
          <div 
            onClick={() => navigate('/services')}
            className="glass-card bg-white p-7 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 cursor-pointer space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-[#0F172A] leading-snug">
                CAD Documentation & Manufacturing Support
              </h3>
            </div>
            
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 font-medium">
              <span>DFM/DFA</span>
              <span className="text-slate-300">|</span>
              <span>Supplier Coordination</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FIVE-STEP PROCESS ROW (Matching PDF Page 1) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card bg-white/80 backdrop-blur-md p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {PROCESS_STEPS.map((st, idx) => {
              const StepIcon = st.icon;
              return (
                <div key={idx} className="space-y-3 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        {st.step}
                      </span>
                      <h4 className="text-sm font-heading font-bold text-[#0F172A]">
                        {st.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CALL-TO-ACTION BOTTOM BANNER (Matching PDF Page 1) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="glass-card bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6 w-full lg:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0">
              <Users className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] uppercase tracking-tight">
                LET'S REVIEW YOUR <span className="text-[#0057FF]">ENGINEERING PROJECT</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Discuss your design requirements, documentation needs, or supplier coordination challenges.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-start lg:justify-end">
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary px-7 py-3.5 text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25"
            >
              Request a Project Review
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/services')}
              className="btn-secondary px-6 py-3.5 text-xs font-semibold flex items-center gap-2 cursor-pointer"
            >
              Explore Services
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
