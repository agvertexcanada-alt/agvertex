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
  { label: 'Projects Delivered', value: '100+' },
  { label: 'Client Satisfaction', value: '95%' },
  { label: 'Industries Served', value: '20+' },
  { label: 'Engineering Experts', value: '15+' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'product-design',
    title: 'Product Design & CAD',
    shortDesc: 'Concept to manufacturing ready design solutions with DFM & DFA optimization.',
    description: 'We transform napkin sketches and industrial concepts into production-ready 3D CAD models. Our iterative design process incorporates Ergonomics, DFM (Design for Manufacturability), DFA (Design for Assembly), and Material Selection.',
    fullDesc: 'We transform napkin sketches and industrial concepts into production-ready 3D CAD models. Our iterative design process incorporates Ergonomics, DFM (Design for Manufacturability), DFA (Design for Assembly), and Material Selection.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    capabilities: ['3D Parametric CAD Modeling', 'DFM & DFA Optimization', 'GD&T ASME Y14.5 Compliance', 'Industrial Ergonomics & Aesthetics'],
    deliverables: ['Production 3D STEP/IGES CAD', 'Full 2D GD&T Manufacturing Drawings', 'Bill of Materials (BOM)', 'Exploded Assembly Views'],
    tools: ['SolidWorks', 'Autodesk Inventor', 'CATIA V5', 'PTC Creo'],
  },
  {
    id: 'cad-modeling',
    title: '3D Parametric Modeling',
    shortDesc: 'High-precision parametric 3D modeling and 2D GD&T technical drafting.',
    description: 'Complex surface modeling, sheet metal design, weldments, and large assembly CAD modeling optimized for seamless downstream CAE simulation and CNC machining.',
    fullDesc: 'Complex surface modeling, sheet metal design, weldments, and large assembly CAD modeling optimized for seamless downstream CAE simulation and CNC machining.',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Class-A Surface Modeling', 'Sheet Metal & Weldments', 'Large Assembly CAD Management', 'Family of Parts & Design Automation'],
    deliverables: ['Native 3D CAD Models', '2D Fabrication Blueprint PDFs', 'Export Formats (STEP, IGES, Parasolid)', '3D PDF Interactive Render'],
    tools: ['SolidWorks', 'Siemens NX', 'Autodesk Fusion 360', 'Rhino 3D'],
  },
  {
    id: 'cae-simulation',
    title: 'CAE & FEA Simulation',
    shortDesc: 'Structural, thermal, CFD fluid flow, and dynamic drop test FEA analysis.',
    description: 'Predict mechanical failure before physical prototyping. We run FEA structural static/dynamic stress analysis, Thermal dissipation modeling, CFD fluid flow dynamics, and vibration fatigue simulations.',
    fullDesc: 'Predict mechanical failure before physical prototyping. We run FEA structural static/dynamic stress analysis, Thermal dissipation modeling, CFD fluid flow dynamics, and vibration fatigue simulations.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Static & Dynamic FEA Stress Analysis', 'CFD Internal & External Aerodynamics', 'Thermal Heat Transfer & Cooling', 'Modal Vibration & Fatigue Life Prediction'],
    deliverables: ['Comprehensive CAE Validation Report', 'Stress & Deformation Heatmaps', 'Topology Optimization Recommendations', 'Safety Factor Verification (FoS)'],
    tools: ['ANSYS Mechanical', 'ANSYS Fluent', 'SolidWorks Simulation', 'Altair HyperWorks'],
  },
  {
    id: 'reverse-engineering',
    title: 'Reverse Engineering',
    shortDesc: 'Laser 3D scanning to parametric CAD, legacy part reconstruction.',
    description: 'Transform physical components or legacy broken parts into clean, parametric 3D CAD models using high-resolution optical metrology 3D laser scanners.',
    fullDesc: 'Transform physical components or legacy broken parts into clean, parametric 3D CAD models using high-resolution optical metrology 3D laser scanners.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    capabilities: ['3D Optical & Laser Mesh Scanning', 'Scan-to-CAD Parametric Reconstruction', 'Deviation & Metrology Comparison', 'Legacy Part Modernization'],
    deliverables: ['Parametric CAD Model', 'Point Cloud & Mesh Files (STL, OBJ)', '3D Color Metrology Deviation Report', '2D Re-engineered Blueprints'],
    tools: ['Geomagic Design X', 'GOM Inspect', 'PolyWorks', 'SolidWorks'],
  },
  {
    id: 'manufacturing-support',
    title: 'Manufacturing & DFM',
    shortDesc: 'CNC machining programming, mold design, sheet metal tooling, and production QA.',
    description: 'Bridging the gap between engineering CAD and factory floor execution. We optimize parts for CNC 5-axis milling, injection molding, casting, and sheet metal stamping.',
    fullDesc: 'Bridging the gap between engineering CAD and factory floor execution. We optimize parts for CNC 5-axis milling, injection molding, casting, and sheet metal stamping.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Injection Mold Flow & Core/Cavity Design', 'CNC CAM Toolpath Programming', 'Sheet Metal Die & Press Tooling', 'Quality Inspection Jigs & Fixtures'],
    deliverables: ['Production Tooling CAD', 'CAM G-Code Toolpaths', 'Mold Flow Analysis Reports', 'Quality Control CMM Inspection Fixtures'],
    tools: ['Mastercam', 'Siemens NX CAM', 'Moldflow', 'SolidWorks Plastics'],
  },
  {
    id: 'prototyping',
    title: 'Rapid Prototyping',
    shortDesc: 'Functional prototypes, CNC machining, SLA/SLS 3D printing & urethane casting.',
    description: 'Turn digital designs into physical working prototypes in as fast as 48 hours for design validation, fit testing, and investor demonstrations.',
    fullDesc: 'Turn digital designs into physical working prototypes in as fast as 48 hours for design validation, fit testing, and investor demonstrations.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Functional Mechanical Assemblies', 'High-Precision CNC Machined Parts', 'Silicon Mold Vacuum Urethane Casting', 'Post-Processing & Anodizing Finish'],
    deliverables: ['Physical Working Prototype Parts', 'Fit & Function Test Verification', 'Pre-Production Inspection Report'],
    tools: ['Stratasys 3D Printers', 'Haas 5-Axis CNC', 'Formlabs SLA'],
  },
  {
    id: '3d-printing',
    title: 'Additive Manufacturing',
    shortDesc: 'FDM, SLA, SLS & DMLS Direct Metal Laser Sintering 3D printing solutions.',
    description: 'Industrial additive manufacturing for lightweight aerospace components, medical implants, customized jigs, and low-volume production end-use parts.',
    fullDesc: 'Industrial additive manufacturing for lightweight aerospace components, medical implants, customized jigs, and low-volume production end-use parts.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    capabilities: ['Selective Laser Sintering (SLS Nylon)', 'Direct Metal Laser Sintering (DMLS Titanium/Steel)', 'Stereolithography (SLA High Resolution)', 'Generative Lattice Structure Light-weighting'],
    deliverables: ['End-Use Additive Components', 'Material Test Certification Data', 'Lattice Optimization CAD Files'],
    tools: ['EOS Metal 3D Printers', 'Markforged Carbon Fiber', 'UltiMaker Cura', 'Materialise Magics'],
  },
  {
    id: 'testing-validation',
    title: 'Testing & Validation',
    shortDesc: 'Rigorous physical testing, metrology inspection, and endurance validation.',
    description: 'Validate mechanical components against harsh operational conditions including thermal cycling, shock vibration, salt spray corrosion, and cycle fatigue tests.',
    fullDesc: 'Validate mechanical components against harsh operational conditions including thermal cycling, shock vibration, salt spray corrosion, and cycle fatigue tests.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    capabilities: ['CMM Coordinate Measuring Machine Inspection', 'Environmental & Thermal Chamber Testing', 'Hydraulic Pressure & Cyclic Load Testing', 'Corrosion & Salt Spray Exposure Analysis'],
    deliverables: ['ISO 17025 Certified Test Reports', 'Pass/Fail Quality Assurance Matrix', 'Physical Component Failure Analysis'],
    tools: ['Zeiss CMM Metrology', 'LabVIEW Data Acquisition', 'Instron Tensile Testers'],
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'automotive',
    title: 'Automotive & EV',
    tagline: 'Lightweight chassis, battery enclosures & EV powertrain design.',
    description: 'Empowering electric vehicle startups and Tier-1 suppliers with high-efficiency battery pack enclosures, suspension geometry, and crashworthy chassis topology.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    applications: ['EV Battery Pack Modules', 'Suspension Control Arms & Uprights', 'Composite Aerodynamic Body Panels', 'Thermal Management Heat Exchangers'],
    challenges: ['Minimizing curb weight without compromising crash safety', 'Managing heat dissipation in high-density EV battery modules'],
    solutions: ['FEA topology optimization & composite material replacement', 'Liquid cooling channel CFD fluid flow optimization'],
    stats: [
      { label: 'Weight Saved', value: '-28%' },
      { label: 'Crash Pass Rate', value: '100%' },
    ],
  },
  {
    id: 'aerospace',
    title: 'Aerospace & Defense',
    tagline: 'AS9100 compliant structural design and flight dynamic simulations.',
    description: 'Developing mission-critical flight components, turbine blades, satellite structures, and lightweight drone airframes engineered to withstand extreme G-forces.',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80',
    applications: ['Satellite Structural Panels', 'UAV / Drone Composite Fuselage', 'Turbine Engine Manifolds', 'Avionics Enclosure Heat Sinks'],
    challenges: ['Extreme vibration fatigue & 50G shock endurance', 'Strict AS9100 quality traceability'],
    solutions: ['Modal FEA vibration simulations & carbon fiber monocoque design', 'Complete 2D GD&T blueprint & CMM metrology reports'],
    stats: [
      { label: 'Safety Factor', value: '2.5x' },
      { label: 'Vibration Tolerance', value: '50G' },
    ],
  },
  {
    id: 'medical',
    title: 'Medical Devices',
    tagline: 'ISO 13485 bio-compatible implants and surgical instruments.',
    description: 'Engineering high-precision surgical handpieces, orthopedic implants, diagnostic lab equipment, and ergonomic healthcare electronics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    applications: ['Titanium Orthopedic Implants', 'Minimal Access Surgical Tools', 'Diagnostic Analyzer Enclosures', 'Patient Monitoring Wearables'],
    challenges: ['Biocompatibility & sub-micron precision', 'Autoclave steam sterilization endurance'],
    solutions: ['PEEK & Titanium Grade 5 DMLS 3D printing', 'Zero-backlash sealed micro-gear assemblies'],
    stats: [
      { label: 'Tolerance Precision', value: '±0.005mm' },
      { label: 'Compliance', value: 'FDA/ISO 13485' },
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial Automation',
    tagline: 'Heavy-duty robotic arms, automation jigs & special purpose machinery.',
    description: 'Designing high-torque gearboxes, automated assembly jigs, conveyor systems, and 6-axis robotic end-effectors for smart manufacturing plants.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    applications: ['6-Axis Robotic Arm Grippers', 'Automated Welding Jigs', 'Custom Gearboxes & Transmissions', 'High-Speed Packaging Machinery'],
    challenges: ['Cycle downtime & mechanical wear', 'High-torque load distribution'],
    solutions: ['Finite element fatigue life prediction', 'Modular quick-change fixture tooling CAD'],
    stats: [
      { label: 'Operating Cycles', value: '10M+' },
      { label: 'Uptime Reliability', value: '99.9%' },
    ],
  },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Discovery & Brief', desc: 'Understanding your product requirements, target specs, and constraints.' },
  { step: '02', title: 'Concept Design', desc: 'Brainstorming initial 3D concepts, industrial sketches, and ergonomic layouts.' },
  { step: '03', title: '3D CAD Modeling', desc: 'Detailed parametric modeling, assembly design, and BOM creation.' },
  { step: '04', title: 'CAE & Simulation', desc: 'FEA stress, thermal, and CFD validation to eliminate structural flaws.' },
  { step: '05', title: 'DFM Optimization', desc: 'Refining geometry for injection molding, CNC milling, or sheet metal.' },
  { step: '06', title: 'Prototyping', desc: 'Fabricating physical working prototypes via SLA/SLS 3D printing or CNC.' },
  { step: '07', title: 'Manufacturing', desc: 'Final tooling CAD handover, CAM programming, and production QA support.' },
];

export const FEATURED_CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'ev-chassis-lightweighting',
    title: 'EV Battery Enclosure & Structural Chassis Lightweighting',
    category: 'Automotive & EV',
    clientIndustry: 'EV Startup (USA)',
    summary: 'Achieved 28% mass reduction while increasing torsional rigidity by 18% for a next-gen electric sports sedan chassis.',
    challenge: 'The client needed to reduce battery pack enclosure weight to increase vehicle range without sacrificing crashworthiness during high-speed lateral side-impact tests.',
    solution: 'AG Vertex performed FEA topology optimization and replaced heavy steel stampings with extruded aluminum structural ribs combined with composite sandwich top covers.',
    results: [
      '28% Total Enclosure Weight Reduction',
      '18% Increase in Torsional Rigidity',
      '100% Pass Rate on FMVSS 214 Side Impact Simulation',
      'Saved $1.4M in Prototype Tooling Costs',
    ],
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    tag: 'AUTOMOTIVE • FEA TOPOLOGY OPTIMIZATION',
    tools: ['SolidWorks', 'ANSYS Mechanical', 'Altair OptiStruct'],
  },
  {
    id: 'aerospace-drone-fuselage',
    title: 'High-Altitude Solar UAV Composite Fuselage Design',
    category: 'Aerospace',
    clientIndustry: 'Aero Defense (Europe)',
    summary: 'Engineered an ultra-light carbon fiber composite fuselage capable of 48-hour continuous endurance flight.',
    challenge: 'Minimizing aerodynamic drag and structural flex under turbulent wind shear while keeping total dry airframe weight under 14 kg.',
    solution: 'Designed a monocoque carbon-Kevlar composite structure with internal generative lattice ribs and CFD optimized wing root fairings.',
    results: [
      'Airframe Weight Kept to 12.8 kg (1.2 kg below target)',
      '38% Reduction in Aerodynamic parasite drag',
      'Validated to 8G Limit Load Factor in Static FEA',
    ],
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80',
    tag: 'AEROSPACE • CFD & COMPOSITE CAD',
    tools: ['CATIA V5', 'ANSYS Fluent', 'Fibersim'],
  },
  {
    id: 'surgical-robot-handpiece',
    title: 'Micro-Surgical Robotic Handpiece & Gearbox Assembly',
    category: 'Medical Devices',
    clientIndustry: 'MedTech OEM (Japan)',
    summary: 'Designed a zero-backlash planetary micro-gearbox for robotic laparoscopic surgery.',
    challenge: 'Achieving sub-micron positioning accuracy inside a 12mm diameter bio-compatible titanium handpiece.',
    solution: 'Utilized custom cycloidal gear geometry and PEEK self-lubricating bearings rated for steam autoclave sterilization cycles.',
    results: [
      'Zero-Backlash (< 0.5 Arcmin Accuracy)',
      'Autoclave Sterilization Tested for 500+ Cycles',
      'FDA 510(k) Clearance Approved',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tag: 'MEDICAL • PRECISION CAD & GD&T',
    tools: ['SolidWorks', 'Zeiss Metrology', 'Moldflow'],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'EV Battery Enclosure Topology',
    category: 'Automotive & EV',
    client: 'EV Mobility OEM',
    clientIndustry: 'Automotive & EV',
    year: '2026',
    timeline: '3 Weeks',
    summary: '28% mass reduction using topology optimization & extruded aluminum alloy.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    tags: ['CAD', 'FEA', 'Lightweighting'],
    tools: ['SolidWorks', 'ANSYS'],
    highlights: ['28% weight reduction', 'FMVSS side impact validated'],
  },
  {
    id: 'proj-2',
    title: 'High-Altitude Solar UAV Airframe',
    category: 'Aerospace',
    client: 'Aero Defense Ltd',
    clientIndustry: 'Aerospace',
    year: '2025',
    timeline: '4 Weeks',
    summary: 'Monocoque carbon-Kevlar fuselage engineered for 48-hr flight endurance.',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80',
    tags: ['CFD', 'Composites', 'Aerodynamics'],
    tools: ['CATIA V5', 'ANSYS Fluent'],
    highlights: ['12.8 kg total weight', '48-hour continuous flight'],
  },
  {
    id: 'proj-3',
    title: 'Micro-Surgical Robotic Handpiece',
    category: 'Medical Devices',
    client: 'MedTech Surgical Inc',
    clientIndustry: 'Medical Devices',
    year: '2025',
    timeline: '2 Weeks',
    summary: 'Zero-backlash planetary micro-gearbox rated for 500+ autoclave cycles.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['GD&T', 'Metrology', 'Titanium 3D'],
    tools: ['SolidWorks', 'Zeiss CMM'],
    highlights: ['Zero-backlash accuracy', 'FDA 510(k) approved'],
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'article-1',
    title: 'Generative Design vs Topology Optimization in Aerospace Lightweighting',
    category: 'Engineering Insights',
    date: 'August 2026',
    readTime: '5 min read',
    summary: 'Comparing AI generative algorithms with traditional finite element density reduction.',
    snippet: 'Comparing AI generative algorithms with traditional finite element density reduction.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    author: 'Lead CAE Specialist',
  },
  {
    id: 'article-2',
    title: 'DFM Guidelines for Metal 3D Printing (DMLS) Components',
    category: 'Manufacturing',
    date: 'July 2026',
    readTime: '7 min read',
    summary: 'Key overhang angle, support structure, and post-machining tolerance rules.',
    snippet: 'Key overhang angle, support structure, and post-machining tolerance rules.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    author: 'Additive Lead',
  },
];

export const CAREER_OPENINGS: CareerItem[] = [
  {
    id: 'senior-cad-engineer',
    title: 'Senior CAD & Surface Modeling Engineer',
    department: 'Product Design',
    location: 'Bengaluru / Hybrid',
    type: 'Full-time',
    experience: '5+ Years',
    description: 'Lead 3D parametric CAD modeling and DFM optimization for automotive & aerospace clients.',
    responsibilities: [
      'Create Class-A surface CAD models using SolidWorks & Siemens NX.',
      'Lead DFM/DFA reviews with manufacturing tooling partners.',
      'Prepare GD&T 2D drawings per ASME Y14.5.',
    ],
  },
  {
    id: 'cae-fea-specialist',
    title: 'CAE & FEA Simulation Specialist',
    department: 'Simulation & Analysis',
    location: 'Coimbatore / Remote',
    type: 'Full-time',
    experience: '3+ Years',
    description: 'Perform static/dynamic FEA, fatigue, and CFD simulations using ANSYS Mechanical & Fluent.',
    responsibilities: [
      'Set up mesh, boundary conditions, and material models for FEA/CFD.',
      'Deliver failure analysis and topology optimization reports.',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What file formats do you accept and export?',
    answer: 'We accept all major 3D CAD native formats (SolidWorks, CATIA, Creo, Inventor, STEP, IGES, Parasolid, DXF, DWG, STL). All deliverables are provided in native source files plus standard STEP/IGES format.',
    q: 'What file formats do you accept and export?',
    a: 'We accept all major 3D CAD native formats (SolidWorks, CATIA, Creo, Inventor, STEP, IGES, Parasolid, DXF, DWG, STL). All deliverables are provided in native source files plus standard STEP/IGES format.',
  },
  {
    id: 'faq-2',
    category: 'Security & IP',
    question: 'How do you protect client intellectual property (IP)?',
    answer: 'We sign non-disclosure agreements (NDAs) prior to receiving any drawings or specifications. All CAD files are processed on secure encrypted workstations with restricted access.',
    q: 'How do you protect client intellectual property (IP)?',
    a: 'We sign non-disclosure agreements (NDAs) prior to receiving any drawings or specifications. All CAD files are processed on secure encrypted workstations with restricted access.',
  },
  {
    id: 'faq-3',
    category: 'Services & Process',
    question: 'What is your typical project turnaround time?',
    answer: 'Standard 3D CAD modeling and DFM projects take 1-2 weeks. Urgent 48-hour prototyping or fast-track FEA analysis options are available.',
    q: 'What is your typical project turnaround time?',
    a: 'Standard 3D CAD modeling and DFM projects take 1-2 weeks. Urgent 48-hour prototyping or fast-track FEA analysis options are available.',
  },
];

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    id: 'zeiss-cmm',
    name: 'Zeiss Spectrum CMM Metrology',
    category: 'Inspection & Metrology',
    type: 'Metrology Hardware',
    specs: 'Accuracy: 1.9 µm + L/300',
    precision: '1.9 µm',
    description: 'High-precision coordinate measuring machine for GD&T verification.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'eos-metal-3d',
    name: 'EOS M 290 Metal 3D Printer',
    category: 'Additive Manufacturing',
    type: '3D Printer',
    specs: 'Build Volume: 250 x 250 x 325 mm',
    precision: '±0.05 mm',
    description: 'Direct Metal Laser Sintering (DMLS) for Titanium, Aluminum, and Steel.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
];

export const SOFTWARE_TOOLS = [
  { name: 'SolidWorks', category: 'CAD/CAM', color: '#E2231A', badge: 'Core CAD', description: '3D parametric modeling & assembly design' },
  { name: 'CATIA V5', category: 'Aerospace CAD', color: '#005493', badge: 'Class-A Surface', description: 'Advanced aerospace surfacing' },
  { name: 'ANSYS', category: 'FEA / CFD', color: '#FFB700', badge: 'Simulation', description: 'Structural FEA & fluid dynamics' },
  { name: 'Autodesk Fusion', category: 'CAD/CAM', color: '#0696D7', badge: 'CAM & Generative', description: '5-axis machining toolpaths' },
  { name: 'Siemens NX', category: 'High-End CAD', color: '#009999', badge: 'Enterprise CAD', description: 'Complex assembly management' },
  { name: 'PTC Creo', category: 'Parametric CAD', color: '#77B800', badge: 'Mechanical CAD', description: 'Industrial parametric modeling' },
  { name: 'Mastercam', category: 'CAM Machining', color: '#002B49', badge: 'Toolpaths', description: 'CNC G-code generation' },
  { name: 'Geomagic', category: '3D Scan-to-CAD', color: '#0057FF', badge: 'Reverse Eng', description: '3D mesh to parametric CAD' },
];
