export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  capabilities: string[];
  deliverables: string[];
  image: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  image: string;
  stats: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'CAD Design' | 'Simulation' | 'Manufacturing' | 'Prototyping';
  clientIndustry: string;
  timeline: string;
  tools: string[];
  image: string;
  summary: string;
  tag: string;
  isFeatured?: boolean;
  darkCard?: boolean;
  beforeAfterImage?: { before: string; after: string };
  highlights: string[];
}

export interface SoftwareTool {
  name: string;
  category: 'CAD' | 'CAE' | 'CFD' | 'CAM';
  description: string;
  badge: string;
  color: string;
}

export interface EquipmentItem {
  name: string;
  type: string;
  precision: string;
  image: string;
  specs: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: 'Blog' | 'Articles' | 'Downloads' | 'Whitepapers';
  readTime: string;
  date: string;
  author: string;
  snippet: string;
  image: string;
  downloadUrl?: string;
}

export interface CareerItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Pricing' | 'Process';
}

// COMPANY STATS MATCHING IMAGE
export const COMPANY_STATS = [
  { value: '100+', label: 'Projects Delivered', icon: 'Box' },
  { value: '95%', label: 'Client Satisfaction', icon: 'Star' },
  { value: '20+', label: 'Industries Served', icon: 'Globe' },
];

// 8 CORE CAPABILITIES MATCHING IMAGE EXACTLY
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'product-design',
    title: 'Product Design',
    shortDesc: 'Concept to manufacturing ready designs',
    fullDesc: 'We transform complex industrial ideas into market-ready physical hardware. Utilizing high-fidelity surface modeling, parametric design, and ergonomics.',
    icon: 'Compass',
    capabilities: ['Conceptual Ideation & Industrial Design', 'DFM (Design for Manufacturing)', 'Class-A Surface Modeling'],
    deliverables: ['3D CAD Models (STEP, IGES, Native)', '2D Manufacturing Drawings'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cad-modeling',
    title: 'CAD Modeling',
    shortDesc: '3D modeling and detailed drafting',
    fullDesc: 'Parametric 3D CAD modeling with full GD&T annotation for complex mechanical assemblies and components.',
    icon: 'Layers',
    capabilities: ['Parametric Assembly Modeling', 'Reverse Parametrics', 'GD&T ASME Y14.5 Drafting'],
    deliverables: ['Parametric Native CAD Files', 'Full 2D GD&T Drawings'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cae-simulation',
    title: 'CAE Simulation',
    shortDesc: 'Structural, thermal, CFD & more',
    fullDesc: 'Validate and optimize your engineering designs before physical prototyping with FEA, stress, and CFD thermal analysis.',
    icon: 'Activity',
    capabilities: ['Static & Dynamic FEA Analysis', 'Non-linear Material Simulation', 'Thermal & CFD Flow Analysis'],
    deliverables: ['Detailed FEA Verification Report', 'Von Mises Stress Contours'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'reverse-engineering',
    title: 'Reverse Engineering',
    shortDesc: 'Scan to CAD and product reengineering',
    fullDesc: 'Convert legacy parts, physical prototypes, or broken components into exact digital CAD models using 3D laser scanners.',
    icon: 'Scan',
    capabilities: ['Sub-10 Micron Laser Scanning', 'Mesh-to-CAD Surface Reconstruction'],
    deliverables: ['Solid Parametric CAD Model', '3D Color Deviation Map'],
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'manufacturing-support',
    title: 'Manufacturing Support',
    shortDesc: 'DFM, DFA, tolerance & production support',
    fullDesc: 'Bridge the gap between digital design and factory production with 5-axis CAM toolpaths and tooling design.',
    icon: 'Cpu',
    capabilities: ['5-Axis CAM Programming', 'Jig, Fixture & Mold Design'],
    deliverables: ['G-Code & CAM Programs', 'Tooling & Fixture CAD'],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'prototyping',
    title: 'Rapid Prototyping',
    shortDesc: '3D printing, CNC & rapid prototyping',
    fullDesc: 'Functional mechanical prototypes using SLA, SLS, metal 3D printing, and precision CNC machining.',
    icon: 'Printer',
    capabilities: ['DMLS Metal 3D Printing', 'Precision 5-Axis CNC Machining'],
    deliverables: ['Tested Functional Prototypes', 'Dimensional Inspection Sheet'],
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3d-printing',
    title: '3D Printing',
    shortDesc: 'FDM, SLA, SLS & metal printing',
    fullDesc: 'Additive manufacturing services with engineering-grade polymers and aerospace metal alloys.',
    icon: 'Box',
    capabilities: ['FDM, SLA, SLS Polymer Printing', 'Titanium & Aluminum Metal Printing'],
    deliverables: ['Functional 3D Printed Parts', 'Surface Finishing'],
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'testing-validation',
    title: 'Testing & Validation',
    shortDesc: 'Ensure quality and performance',
    fullDesc: 'Metrology inspection, CMM dimensional auditing, and physical load testing.',
    icon: 'CheckCircle2',
    capabilities: ['CMM Metrology Inspection', 'Structural Load & Vibration Validation'],
    deliverables: ['Inspection Certificates', 'Quality Assurance Report'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80'
  }
];

// 7 INDUSTRIES MATCHING IMAGE EXACTLY
export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'automotive',
    title: 'Automotive',
    tagline: 'Lightweight chassis, battery enclosures, and drivetrain engineering.',
    description: 'Empowering electric vehicle startups and OEM tier-1 suppliers with high-efficiency chassis design, crashworthiness simulation, battery pack thermal management.',
    challenges: ['Reducing vehicle curb weight without compromising crash safety', 'Managing intense thermal heat build-up in EV lithium battery packs'],
    solutions: ['Topology optimization cutting chassis weight by 28%', 'Multi-channel liquid cooling CFD simulation'],
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    stats: [{ label: 'Weight Reduction', value: '-28%' }, { label: 'Crash Pass Rate', value: '100%' }]
  },
  {
    id: 'aerospace',
    title: 'Aerospace',
    tagline: 'AS9100 compliant structural design and flight dynamic simulations.',
    description: 'Developing mission-critical flight components, turbine blades, satellite structures, and lightweight drone airframes.',
    challenges: ['Strict weight limitations and ultra-high safety margins'],
    solutions: ['Inconel & Titanium 3D metal printed bracket assemblies'],
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80',
    stats: [{ label: 'Safety Factor', value: '2.5x' }, { label: 'Vibration Tolerance', value: '50G' }]
  },
  {
    id: 'medical',
    title: 'Medical Devices',
    tagline: 'ISO 13485 bio-compatible implants and precision surgical instruments.',
    description: 'Engineering high-precision surgical handpieces, orthopedic implants, diagnostic lab equipment housings.',
    challenges: ['Complex bio-compatible ergonomic geometries'],
    solutions: ['Class-A surface modeling with bio-grade titanium (Ti-6Al-4V)'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    stats: [{ label: 'Tolerance Precision', value: '±0.005mm' }, { label: 'Compliance', value: 'FDA/ISO 13485' }]
  },
  {
    id: 'industrial',
    title: 'Industrial',
    tagline: 'Heavy-duty robotic arms, automation cells, and hydraulic systems.',
    description: 'Designing high-torque gearboxes, automated assembly jigs, conveyor systems, and 6-axis robotic arms.',
    challenges: ['High mechanical wear and fatigue over long lifespans'],
    solutions: ['Fatigue life cycle simulation for 10M+ operations'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    stats: [{ label: 'Operating Cycles', value: '10M+' }, { label: 'Uptime Reliability', value: '99.9%' }]
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    tagline: 'Subsea valves, high-pressure pumps, and renewable energy hardware.',
    description: 'Engineering ultra-durable deepwater valves, offshore rig components, wind turbine gearboxes.',
    challenges: ['Extreme hydrostatic pressure (up to 15,000 PSI)'],
    solutions: ['Non-linear rubber/metal seal FEA simulations'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    stats: [{ label: 'Pressure Rating', value: '15,000 PSI' }, { label: 'Corrosion Life', value: '25 Yrs' }]
  },
  {
    id: 'defense',
    title: 'Defense',
    tagline: 'Ruggedized tactical drones, unmanned ground vehicles, and armor plating.',
    description: 'Engineering high-impact ballistic shielding, autonomous robot chassis, sealed military electronics enclosures.',
    challenges: ['Extreme environmental shock and thermal swings'],
    solutions: ['Mil-Std 810G vibration and shock modeling'],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    stats: [{ label: 'Mil Standard', value: 'MIL-STD-810G' }, { label: 'Weight Saved', value: '-35%' }]
  },
  {
    id: 'electronics',
    title: 'Electronics',
    tagline: 'Sleek, ergonomic wearable tech, audio hardware, and smart appliances.',
    description: 'Combining minimalist industrial design with ultra-compact internal PCB layout integration.',
    challenges: ['Tight space constraints inside ultra-thin devices'],
    solutions: ['Elastomeric impact-absorbing internal ribbing'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    stats: [{ label: 'Drop Survival', value: '2.5 Meters' }, { label: 'IP Rating', value: 'IP68' }]
  }
];

// 7 PROCESS STEPS MATCHING IMAGE EXACTLY
export const PROCESS_STEPS = [
  { step: '01', title: 'Discover', desc: 'Understanding your requirements', icon: 'Search' },
  { step: '02', title: 'Research', desc: 'Feasibility study & concept development', icon: 'Compass' },
  { step: '03', title: 'CAD Design', desc: '3D modeling & documentation', icon: 'Box' },
  { step: '04', title: 'Simulation', desc: 'CAE analysis & optimization', icon: 'Cpu' },
  { step: '05', title: 'Prototype', desc: 'Build, test & validate', icon: 'Layers' },
  { step: '06', title: 'Manufacture', desc: 'Production & quality control', icon: 'CheckCircle' },
  { step: '07', title: 'Delivery', desc: 'On-time delivery & support', icon: 'Send' }
];

// FEATURED CASE STUDIES MATCHING IMAGE
export const FEATURED_CASE_STUDIES: ProjectItem[] = [
  {
    id: 'ev-suspension',
    title: 'Electric Vehicle Suspension System',
    category: 'CAD Design',
    clientIndustry: 'Automotive',
    tag: 'AUTOMOTIVE',
    darkCard: true,
    timeline: '8 Weeks',
    tools: ['SOLIDWORKS', 'ANSYS', 'CATIA'],
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Complete design, simulation and prototyping of next-gen EV suspension system.',
    highlights: ['32% Weight Reduction', '500,000 Cycle Fatigue Pass', 'Titanium Topology Upright']
  },
  {
    id: 'robotic-arm',
    title: 'Robotic Arm Assembly',
    category: 'Simulation',
    clientIndustry: 'Industrial',
    tag: 'INDUSTRIAL',
    darkCard: false,
    timeline: '6 Weeks',
    tools: ['NX', 'ANSYS'],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    summary: 'Design & simulation of 6-axis industrial robotic arm.',
    highlights: ['25kg Payload Capacity', '0.02mm Repeatability']
  },
  {
    id: 'surgical-instrument',
    title: 'Surgical Instrument',
    category: 'Prototyping',
    clientIndustry: 'Medical',
    tag: 'MEDICAL',
    darkCard: false,
    timeline: '4 Weeks',
    tools: ['Creo', '3D Printing'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    summary: 'Precision design & prototyping of surgical instrument.',
    highlights: ['Bio-compatible Titanium', 'Sub-millimeter Tolerance']
  }
];

export const PORTFOLIO_PROJECTS = FEATURED_CASE_STUDIES;

// SOFTWARE TOOLS WITH BRAND LOGOS / TEXT MATCHING IMAGE
export const SOFTWARE_TOOLS: SoftwareTool[] = [
  { name: 'SolidWorks', category: 'CAD', description: '3D Parametric CAD & Sheet Metal', badge: 'v2026', color: '#E2231A' },
  { name: 'CATIA', category: 'CAD', description: 'Class-A Surface Modeling', badge: 'V6', color: '#00539B' },
  { name: 'CREO', category: 'CAD', description: 'Parametric Assembly Modeling', badge: 'v10', color: '#00A3E0' },
  { name: 'NX', category: 'CAD', description: 'Siemens Integrated CAD/CAM', badge: 'Latest', color: '#005F87' },
  { name: 'ANSYS', category: 'CAE', description: 'Structural FEA & CFD Simulation', badge: 'v2026', color: '#FFB800' },
  { name: 'ABAQUS', category: 'CAE', description: 'Non-linear Extreme Stress FEA', badge: 'Simulia', color: '#003366' },
  { name: 'AUTOCAD', category: 'CAD', description: '2D/3D Precision Drafting', badge: 'Std', color: '#E51937' },
  { name: 'FUSION 360', category: 'CAM', description: 'Cloud Generative Design & CAM', badge: 'Ultimate', color: '#FF6600' },
];

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  { name: 'Creaform HandySCAN 3D', type: 'Metrology Scanner', precision: '0.025 mm', specs: 'Blue Laser Scan | 1,300,000 measurements/sec', image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=600&q=80' },
  { name: 'ZEISS CMM Machine', type: 'Coordinate Measurement', precision: '0.0009 mm', specs: 'High-speed scanning probe with thermal stabilization', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
  { name: 'EOS DMLS Metal Printer', type: 'Additive Manufacturing', precision: '0.05 mm', specs: '400W Fiber Laser | Titanium & Aluminum', image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80' },
  { name: '5-Axis CNC Mill', type: 'Machining Center', precision: '0.002 mm', specs: '20,000 RPM Spindle | 5-Axis Milling', image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80' },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'cad-modeling-tips',
    title: 'Top 10 Advanced CAD Parametric Tips for Complex Assemblies',
    category: 'Blog',
    readTime: '6 min read',
    date: 'July 24, 2026',
    author: 'Chief Engineering Lead',
    snippet: 'Mastering history tree management, global variables, and speed optimization for multi-thousand component assemblies in SolidWorks and Creo.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fea-beginners-guide',
    title: 'Understanding FEA Mesh Convergence for Structural Engineering',
    category: 'Articles',
    readTime: '8 min read',
    date: 'July 18, 2026',
    author: 'Principal CAE Simulation Engineer',
    snippet: 'Why automatic meshing leads to artificial stress singularities and how p-adaptive vs h-adaptive refinement guarantees reliable FEA output.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  }
];

export const CAREER_OPENINGS: CareerItem[] = [
  {
    id: 'senior-cad-engineer',
    title: 'Senior Mechanical CAD Engineer',
    department: 'Design Engineering',
    location: 'Bengaluru / Coimbatore HQ',
    type: 'Full-Time',
    experience: '5+ Years',
    description: 'Lead design projects across Automotive & Aerospace sectors.',
    requirements: ['5+ years experience in heavy parametric 3D CAD modeling and GD&T drafting.']
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'General',
    question: 'What types of engineering projects does AG Vertex specialize in?',
    answer: 'AG Vertex specializes in end-to-end mechanical engineering solutions including parametric 3D CAD design, Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), 3D laser reverse engineering, rapid prototyping, and advanced manufacturing support.'
  },
  {
    category: 'Services',
    question: 'Which CAD and CAE software packages do you support?',
    answer: 'SolidWorks, CATIA V6, Creo Parametric, Siemens NX, ANSYS Mechanical & Fluent, Abaqus, Autodesk Fusion 360, and AutoCAD Mechanical.'
  }
];
