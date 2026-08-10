export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  fullDesc?: string;
  image: string;
  capabilities: string[];
  deliverables: string[];
  tools: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  applications: string[];
  challenges?: string[];
  solutions?: string[];
  stats: { label: string; value: string }[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tag: string;
  tools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  clientIndustry?: string;
  year: string;
  timeline?: string;
  summary: string;
  image: string;
  tags: string[];
  tools?: string[];
  highlights?: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  snippet?: string;
  image: string;
  author: string;
}

export interface CareerItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  type?: string;
  specs: string;
  precision?: string;
  description: string;
  image: string;
}

export const COMPANY_STATS = [
  { label: 'Years Experience', value: '15+' },
  { label: '3D CAD Expertise', value: '100%' },
  { label: 'GD&T / DFM Compliance', value: 'ASME Y14.5' },
  { label: 'Supplier Coordination', value: 'Global' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'product-design-development',
    title: 'Product Design & Development',
    shortDesc: 'End-to-end product design from concept through production-ready documentation.',
    description: 'Complete mechanical design engineering from initial napkin sketches and industrial styling through DFM/DFA optimization and manufacturing drawing releases.',
    fullDesc: 'Complete mechanical design engineering from initial napkin sketches and industrial styling through DFM/DFA optimization and manufacturing drawing releases.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Conceptual Ideation & Ergonomics', 'DFM / DFA Optimization', 'Material & Component Selection', 'Production Documentation'],
    deliverables: ['Production 3D CAD Models', '2D Manufacturing Blueprints', 'Complete Bill of Materials (BOM)'],
    tools: ['SolidWorks', 'Creo', 'Siemens NX'],
  },
  {
    id: 'injection-mold-design',
    title: 'Injection Mold Design',
    shortDesc: 'Mold layout, parting strategy, and detailed tooling documentation.',
    description: 'High-precision plastic injection mold design including multi-cavity layouts, parting surface generation, slider/lifter mechanisms, cooling circuits, and hot-runner integration.',
    fullDesc: 'High-precision plastic injection mold design including multi-cavity layouts, parting surface generation, slider/lifter mechanisms, cooling circuits, and hot-runner integration.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Parting Surface & Core/Cavity Split', 'Hot-Runner & Cooling Layouts', 'Sliders, Lifters & Ejection Systems', 'Tooling DFM & Moldflow Guidance'],
    deliverables: ['Full 3D Mold Tooling Assemblies', 'Tooling Component Manufacturing Prints', 'Electrode Extraction CAD'],
    tools: ['Siemens NX Mold Wizard', 'SolidWorks', 'Moldflow'],
  },
  {
    id: 'pressure-die-casting-die-design',
    title: 'Pressure Die-Casting Die Design',
    shortDesc: 'High-integrity die design for reliable casting and long tool life.',
    description: 'Robust tooling design for high-pressure aluminum, magnesium, and zinc die-casting components with optimized gating, venting, runner channels, and thermal control.',
    fullDesc: 'Robust tooling design for high-pressure aluminum, magnesium, and zinc die-casting components with optimized gating, venting, runner channels, and thermal control.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Gating & Runner System Design', 'Thermal Die Balancing & Cooling', 'Core Pull Mechanism Integration', 'Die Stress & Wear Optimization'],
    deliverables: ['Complete Die Casting Tool Assembly', 'Insert & Core Fabrication Drawings', 'Tool Life Optimization Specs'],
    tools: ['Creo', 'Siemens NX', 'SolidWorks'],
  },
  {
    id: '3d-cad-modelling',
    title: '3D CAD Modelling',
    shortDesc: 'Accurate parametric 3D models for parts, assemblies, and tooling.',
    description: 'High-integrity parametric solid and surface CAD modeling for complex mechanical assemblies, sheet metal structures, castings, and machined components.',
    fullDesc: 'High-integrity parametric solid and surface CAD modeling for complex mechanical assemblies, sheet metal structures, castings, and machined components.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Parametric Feature-Based CAD', 'Complex Surfacing & Geometry', 'Large Assembly Architecture', 'Native & Neutral File Conversions'],
    deliverables: ['Native 3D CAD Files', 'Neutral STEP / IGES / Parasolid', 'Exploded Assembly Configurations'],
    tools: ['SolidWorks', 'Creo', 'Siemens NX', 'AutoCAD'],
  },
  {
    id: 'drawings-gdt-boms',
    title: 'Drawings, GD&T & BOMs',
    shortDesc: 'Clear manufacturing drawings with GD&T and complete bill of materials.',
    description: 'ASME Y14.5 and ISO compliant 2D technical drafting with precise Geometric Dimensioning and Tolerancing, datum reference frames, tolerance stack-up analysis, and detailed structured BOMs.',
    fullDesc: 'ASME Y14.5 and ISO compliant 2D technical drafting with precise Geometric Dimensioning and Tolerancing, datum reference frames, tolerance stack-up analysis, and detailed structured BOMs.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    capabilities: ['ASME Y14.5 GD&T Standards', '1D/3D Tolerance Stack-Up Analysis', 'Fabrication & Assembly Drawings', 'Structured Bill of Materials (BOM)'],
    deliverables: ['Shop-Floor Ready PDF/DWG Prints', 'Datum Definition Matrices', 'Excel / PLM Formatted BOMs'],
    tools: ['AutoCAD', 'SolidWorks', 'Creo Drafting', 'Windchill'],
  },
  {
    id: 'automotive-drawing-validation',
    title: 'Automotive Drawing Validation',
    shortDesc: 'Supplier drawing reviews for dimensional accuracy and compliance.',
    description: 'Independent third-party review and validation of automotive tier-supplier engineering prints, ensuring tight adherence to OEM standards, GD&T feasibility, and manufacturability.',
    fullDesc: 'Independent third-party review and validation of automotive tier-supplier engineering prints, ensuring tight adherence to OEM standards, GD&T feasibility, and manufacturability.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    capabilities: ['OEM Drawing Standard Compliance', 'Datum & Tolerance Feasibility Audits', 'Supplier Print Discrepancy Reports', 'Engineering Change Management (ECN)'],
    deliverables: ['Drawing Validation & Redline Reports', 'Approved-for-Production Stamp Records', 'Engineering Revision Tracking'],
    tools: ['Teamcenter', 'Windchill', 'AutoCAD', 'SolidWorks'],
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: '01 Understand', desc: 'Clarify requirements and constraints.' },
  { step: '02', title: '02 Develop', desc: 'Explore concepts and design direction.' },
  { step: '03', title: '03 Detail', desc: 'Create detailed 3D models and drawings.' },
  { step: '04', title: '04 Review', desc: 'Validate drawings and manufacturability.' },
  { step: '05', title: '05 Support', desc: 'Support production and answer supplier questions.' },
];

export const SHOWCASE_CARDS = [
  {
    id: 'showcase-1',
    title: 'Automotive Component Design',
    desc: 'High-integrity lightweight structural housings, powertrain components & chassis brackets.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'showcase-2',
    title: 'Mold & Die Design',
    desc: 'Precision multi-cavity injection molds, high-pressure die-casting tooling & slider actions.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'showcase-3',
    title: 'Drawing Review & Validation',
    desc: 'Rigorous ASME Y14.5 GD&T compliance audits, tolerance stack-ups & supplier print verification.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
  },
];

export const CAD_PLM_TOOLS = [
  { name: 'Creo', category: 'Parametric CAD', color: '#77B800' },
  { name: 'Siemens NX', category: 'High-End CAD', color: '#009999' },
  { name: 'SolidWorks', category: '3D CAD Design', color: '#E2231A' },
  { name: 'AutoCAD', category: '2D Drafting', color: '#E51937' },
  { name: 'Windchill', category: 'PLM System', color: '#005493' },
  { name: 'Teamcenter', category: 'Enterprise PLM', color: '#006699' },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'automotive',
    title: 'Automotive & EV',
    tagline: 'Lightweight chassis, battery enclosures & EV powertrain design.',
    description: 'Empowering automotive startups and Tier-1 suppliers with high-efficiency component design, die casting layout, and drawing validation.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    applications: ['Gearbox & Transmission Housings', 'Structural Chassis Components', 'Battery Enclosures', 'Bracket & Suspension Systems'],
    challenges: ['Minimizing curb weight without compromising crash safety', 'Managing heat dissipation in high-density EV battery modules'],
    solutions: ['Die casting optimization & composite material replacement', 'DFM and GD&T tolerance balancing'],
    stats: [
      { label: 'Experience', value: '15+ Yrs' },
      { label: 'Accuracy', value: '100%' },
    ],
  },
  {
    id: 'injection-molding',
    title: 'Plastic Injection Molding',
    tagline: 'Precision tooling, parting strategies & mold documentation.',
    description: 'High-precision mold tooling design for consumer electronics, industrial enclosures, and medical components.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    applications: ['Multi-Cavity Molds', 'Hot Runner Systems', 'Slider & Lifter Actions', 'Electrodes & Inserts'],
    challenges: ['Minimizing cycle time and thermal warpage', 'Complex parting lines'],
    solutions: ['Advanced cooling layout & conformal cooling', 'Precision core/cavity splits'],
    stats: [
      { label: 'Mold Life', value: '1M+ Cycles' },
      { label: 'Quality', value: 'Zero Defect' },
    ],
  },
  {
    id: 'die-casting',
    title: 'Die-Casting Tooling',
    tagline: 'High-pressure die casting dies for aluminum and magnesium alloys.',
    description: 'Engineered for high thermal durability, reliable gating, and prolonged tool life in aggressive production environments.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    applications: ['Aluminum Die Casting Dies', 'Magnesium Structural Molds', 'Trim Dies & Fixtures', 'Thermal Flow Balancing'],
    challenges: ['Thermal fatigue & porosity defects', 'Ejection friction'],
    solutions: ['Optimized gating & venting channels', 'Hydraulic core pulling integration'],
    stats: [
      { label: 'Pressure Rating', value: '15,000 PSI' },
      { label: 'Tool Life', value: 'Extended' },
    ],
  },
];

export const FEATURED_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'hp-die-casting',
    title: 'High-Pressure Die-Casting Die',
    category: 'Automotive',
    clientIndustry: 'Tier-1 Automotive',
    summary: 'Full tool layout for complex aluminum gearbox housing.',
    challenge: 'Designing a robust high-integrity die casting tool for complex thin-wall transmission housings with zero porosity.',
    solution: 'Designed complete multi-slide die casting die with optimized cooling channels and vacuum venting.',
    results: [
      'Zero Porosity on Critical Sealing Surfaces',
      'Over 200,000 Shot Tool Life',
      '100% On-Time Production Sign-Off',
    ],
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    tag: 'AUTOMOTIVE TOOLING',
    tools: ['Creo', 'Siemens NX', 'AutoCAD'],
  },
  {
    id: 'precision-tooling',
    title: 'Precision Tooling Assembly',
    category: 'Tooling',
    clientIndustry: 'Consumer Electronics',
    summary: 'Multi-cavity injection mold for consumer electronics.',
    challenge: 'Achieving sub-micron parting line alignment and seamless texture finish on cosmetic plastic enclosures.',
    solution: 'Engineered hardened tool steel inserts, balanced hot-runner manifold, and guided ejection.',
    results: [
      'Parting Line Flash < 0.01mm',
      '18-Second Cycle Time Achieved',
      'Approved for Global Mass Production',
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tag: 'PRODUCT DEVELOPMENT',
    tools: ['Siemens NX', 'SolidWorks', 'Moldflow'],
  },
  {
    id: 'chassis-review',
    title: 'Chassis Component Review',
    category: 'Drawings',
    clientIndustry: 'Automotive OEM',
    summary: 'Comprehensive verification of 50+ supplier prints.',
    challenge: 'Reviewing 50+ supplier 2D blueprints for datum alignment, GD&T feasibility, and OEM specification compliance.',
    solution: 'Conducted rigorous tolerance stack-up and drawing validation audits with structured redline reports.',
    results: [
      'Identified 24 Critical GD&T Discrepancies Prior to Tooling',
      'Saved Estimated $350K in Rework Costs',
      '100% Drawing Compliance Approved',
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    tag: 'MECHANICAL DESIGN',
    tools: ['SolidWorks', 'AutoCAD', 'Windchill'],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Aluminum Gearbox Die Casting Die',
    category: 'Die Casting',
    client: 'Tier-1 Supplier',
    clientIndustry: 'Automotive',
    year: '2026',
    timeline: '3 Weeks',
    summary: 'Complete high-pressure die casting tooling layout with thermal balancing.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    tags: ['Tooling', 'Die Casting', 'Creo'],
    tools: ['Creo', 'AutoCAD'],
    highlights: ['Multi-slide die design', 'Optimized gating & venting'],
  },
  {
    id: 'proj-2',
    title: 'Multi-Cavity Plastic Injection Mold',
    category: 'Injection Molding',
    client: 'Electronics OEM',
    clientIndustry: 'Consumer Tech',
    year: '2025',
    timeline: '4 Weeks',
    summary: 'High-precision multi-cavity tooling with hot runner manifold system.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    tags: ['Mold Design', 'Hot Runner', 'NX'],
    tools: ['Siemens NX', 'SolidWorks'],
    highlights: ['Sub-micron parting alignment', '18s cycle time'],
  },
  {
    id: 'proj-3',
    title: 'Automotive Supplier GD&T Validation',
    category: 'Drawing Validation',
    client: 'Automotive OEM',
    clientIndustry: 'Automotive',
    year: '2025',
    timeline: '2 Weeks',
    summary: 'Comprehensive audit of 50+ supplier prints against ASME Y14.5.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    tags: ['GD&T', 'ASME Y14.5', 'Windchill'],
    tools: ['AutoCAD', 'Windchill'],
    highlights: ['24 discrepancies resolved', 'Zero tooling rework'],
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'article-1',
    title: 'Best Practices for Injection Mold Parting Line Strategy & Tooling DFM',
    category: 'Tooling Design',
    date: 'August 2026',
    readTime: '5 min read',
    summary: 'How to avoid flash, parting line mismatches, and complex tooling costs.',
    snippet: 'How to avoid flash, parting line mismatches, and complex tooling costs.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    author: 'Lead Tooling Engineer',
  },
  {
    id: 'article-2',
    title: 'ASME Y14.5 GD&T Rules for Automotive Supplier Drawing Audits',
    category: 'GD&T Standards',
    date: 'July 2026',
    readTime: '6 min read',
    summary: 'Key datum reference frames, position tolerancing, and common supplier drafting mistakes.',
    snippet: 'Key datum reference frames, position tolerancing, and common supplier drafting mistakes.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    author: 'Senior Mechanical Consultant',
  },
];

export const CAREER_OPENINGS: CareerItem[] = [
  {
    id: 'senior-tooling-engineer',
    title: 'Senior Mold & Die Design Engineer',
    department: 'Tooling & Mechanical Design',
    location: 'Windsor, Ontario / Hybrid',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'Lead injection mold and pressure die casting tooling design for automotive clients.',
    responsibilities: [
      'Develop complete 3D mold & die tooling layouts using Siemens NX / Creo.',
      'Perform parting line splits, slider actions, and cooling circuit designs.',
      'Review and validate supplier tooling drawings and GD&T.',
    ],
  },
  {
    id: 'cad-gdt-specialist',
    title: 'CAD & GD&T Validation Specialist',
    department: 'Engineering Documentation',
    location: 'Windsor, Ontario / Remote',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Execute detailed 2D GD&T drafting and automotive supplier print reviews.',
    responsibilities: [
      'Prepare ASME Y14.5 compliant manufacturing prints and BOMs.',
      'Perform 1D/3D tolerance stack-up analysis on complex assemblies.',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What engineering services does AG Vertex specialize in?',
    answer: 'AG Vertex specializes in Product Design & Development, Injection Mold Design, Pressure Die-Casting Die Design, 3D CAD Modelling, Drawings GD&T & BOMs, and Automotive Supplier Drawing Validation.',
    q: 'What engineering services does AG Vertex specialize in?',
    a: 'AG Vertex specializes in Product Design & Development, Injection Mold Design, Pressure Die-Casting Die Design, 3D CAD Modelling, Drawings GD&T & BOMs, and Automotive Supplier Drawing Validation.',
  },
  {
    id: 'faq-2',
    category: 'Location & Collaboration',
    question: 'Where is AG Vertex located and how do you work with clients?',
    answer: 'AG Vertex is a mechanical design consultancy based in Windsor, Ontario, Canada. We support local and international clients with turnkey CAD modeling, tooling designs, and drawing validation.',
    q: 'Where is AG Vertex located and how do you work with clients?',
    a: 'AG Vertex is a mechanical design consultancy based in Windsor, Ontario, Canada. We support local and international clients with turnkey CAD modeling, tooling designs, and drawing validation.',
  },
  {
    id: 'faq-3',
    category: 'CAD & PLM Systems',
    question: 'Which CAD and PLM software platforms do you support?',
    answer: 'We have extensive experience with Creo, Siemens NX, SolidWorks, AutoCAD, Windchill, and Teamcenter.',
    q: 'Which CAD and PLM software platforms do you support?',
    a: 'We have extensive experience with Creo, Siemens NX, SolidWorks, AutoCAD, Windchill, and Teamcenter.',
  },
];

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    id: 'cmm-inspection',
    name: 'Precision Metrology & GD&T Inspection',
    category: 'Inspection & Metrology',
    type: 'Inspection',
    specs: 'ASME Y14.5 / ISO Compliant',
    precision: '±0.001 mm',
    description: 'Comprehensive dimensional verification and drawing audits.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
  },
];

export const SOFTWARE_TOOLS = [
  { name: 'Creo', category: 'Parametric CAD', color: '#77B800', badge: 'Parametric CAD', description: 'Advanced mechanical & die tooling design' },
  { name: 'Siemens NX', category: 'High-End CAD', color: '#009999', badge: 'Enterprise CAD', description: 'Complex surfacing & mold wizard' },
  { name: 'SolidWorks', category: '3D CAD Design', color: '#E2231A', badge: 'Core CAD', description: 'Product design & assembly modeling' },
  { name: 'AutoCAD', category: '2D Drafting', color: '#E51937', badge: 'Drafting', description: '2D manufacturing prints & schematics' },
  { name: 'Windchill', category: 'PLM System', color: '#005493', badge: 'PLM System', description: 'Engineering change & CAD data management' },
  { name: 'Teamcenter', category: 'Enterprise PLM', color: '#006699', badge: 'Enterprise PLM', description: 'Automotive OEM data lifecycle' },
];
