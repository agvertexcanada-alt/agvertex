import { supabase } from '../supabase';

export interface ContactSettings {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  contact_form_email: string;
}

export interface SocialSettings {
  linkedin: string;
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface BusinessSettings {
  company_name: string;
  tagline: string;
  short_description: string;
  business_hours: string;
}

export interface SectionImagesSettings {
  about_hero_image: string;
  about_facility_image: string;
  careers_team_image: string;
  home_hero_image: string;
}

export interface AllSettings {
  contact: ContactSettings;
  social: SocialSettings;
  business: BusinessSettings;
  images: SectionImagesSettings;
}

export interface HomePageContent {
  hero_title: string;
  hero_subtitle: string;
  badge_1: string;
  badge_2: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  cap_1_title: string;
  cap_1_desc: string;
  cap_1_img: string;
  cap_2_title: string;
  cap_2_desc: string;
  cap_2_img: string;
  cap_3_title: string;
  cap_3_desc: string;
  cap_3_img: string;
}

export interface CadStackItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  badge: string;
  logo_url: string;
}

export const DEFAULT_CAD_STACK: CadStackItem[] = [
  {
    id: 'cad-1',
    name: 'PTC Creo Parametric',
    category: 'Parametric 3D CAD & Surfacing',
    desc: 'Advanced surface modeling, mechanism design, large assemblies, and associative 2D drawing generation.',
    badge: 'CREO',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/PTC_Creo_logo.svg/512px-PTC_Creo_logo.svg.png',
  },
  {
    id: 'cad-2',
    name: 'Siemens NX',
    category: 'PLM & High-End Tooling',
    desc: 'Complex injection mold design, progressive dies, parting line splits, and multi-axis machining CAD data.',
    badge: 'SIEMENS NX',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Siemens-logo.svg/512px-Siemens-logo.svg.png',
  },
  {
    id: 'cad-3',
    name: 'Autodesk AutoCAD',
    category: '2D Drafting & Plant Layouts',
    desc: 'Precision engineering prints, geometric tolerance layout, plant schematics, and legacy DWG translation.',
    badge: 'AUTOCAD',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/AutoCAD_logo.svg/512px-AutoCAD_logo.svg.png',
  },
  {
    id: 'cad-4',
    name: 'Dassault SolidWorks',
    category: 'Mechanical Design & DFM',
    desc: 'Machine design, sheet metal enclosures, weldments, ASME Y14.5 GD&T drafting, and integrated BOM control.',
    badge: 'SOLIDWORKS',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/SolidWorks_Logo.svg/512px-SolidWorks_Logo.svg.png',
  },
];

export interface AboutPageContent {
  hero_tag: string;
  hero_title: string;
  hero_desc: string;
  hero_img: string;

  pillar_1_title: string;
  pillar_1_desc: string;
  pillar_2_title: string;
  pillar_2_desc: string;
  pillar_3_title: string;
  pillar_3_desc: string;
  pillar_4_title: string;
  pillar_4_desc: string;

  exp_1_title: string;
  exp_1_desc: string;
  exp_1_img: string;
  exp_2_title: string;
  exp_2_desc: string;
  exp_2_img: string;
  exp_3_title: string;
  exp_3_desc: string;
  exp_3_img: string;
  exp_4_title: string;
  exp_4_desc: string;
  exp_4_img: string;
  facility_img: string;

  cad_stack_title: string;
  cad_stack_desc: string;
  cad_items: CadStackItem[];
}

export interface CareersPageContent {
  hero_tag: string;
  hero_title: string;
  hero_desc: string;
  hero_img: string;
  val_1_title: string;
  val_1_desc: string;
  val_2_title: string;
  val_2_desc: string;
  val_3_title: string;
  val_3_desc: string;
  val_4_title: string;
  val_4_desc: string;
}

export interface WebsitePageContent {
  home: HomePageContent;
  about: AboutPageContent;
  careers: CareersPageContent;
}

export const DEFAULT_PAGE_CONTENT: WebsitePageContent = {
  home: {
    hero_title: 'ENGINEERING DESIGN BUILT FOR MANUFACTURING',
    hero_subtitle: 'Practical mechanical design support for products, tooling, CAD documentation, and supplier coordination.',
    badge_1: 'Windsor, Ontario, Canada',
    badge_2: '15+ Years of Engineering Experience',
    hero_cta_primary: 'Request a Project Review',
    hero_cta_secondary: 'Explore Services',
    cap_1_title: 'PRODUCT & MECHANICAL DESIGN',
    cap_1_desc: '3D CAD Modelling • Drawings, GD&T & BOMs',
    cap_1_img: '/services/product_design.png',
    cap_2_title: 'MOLD & DIE TOOLING DESIGN',
    cap_2_desc: '3D CAD Modelling • Drawings, GD&T & BOMs',
    cap_2_img: '/services/injection_mold.png',
    cap_3_title: 'CAD DOCUMENTATION & MANUFACTURING SUPPORT',
    cap_3_desc: 'DFM/DFA • Supplier Coordination',
    cap_3_img: '/services/drawings_gdt.png',
  },
  about: {
    hero_tag: 'ABOUT AG VERTEX',
    hero_title: 'PRECISION MECHANICAL DESIGN & ENGINEERING PARTNER',
    hero_desc: 'AG Vertex is a Windsor, Ontario-based mechanical design consultancy specializing in product design, mold and die design, 3D CAD modelling, and automotive drawing validation. We help transform engineering concepts into practical, manufacturable designs supported by accurate documentation and supplier coordination.',
    hero_img: '/images/cad_workstation_single.jpeg',

    pillar_1_title: 'OUR MISSION',
    pillar_1_desc: 'To deliver practical and precise mechanical design solutions that support manufacturability, quality, and efficient product development.',
    pillar_2_title: 'OUR VISION',
    pillar_2_desc: 'To become a trusted engineering design partner for manufacturers, tooling companies, and automotive suppliers across Canada and beyond.',
    pillar_3_title: 'CORE VALUES',
    pillar_3_desc: 'Technical Integrity · Quality · Collaboration · Confidentiality · Continuous Improvement',
    pillar_4_title: 'OUR PROMISE',
    pillar_4_desc: "Clear communication, carefully developed deliverables, and engineering support focused on each client's technical and manufacturing requirements.",

    exp_1_title: 'PRODUCT DEVELOPMENT',
    exp_1_desc: 'Mechanical components and assemblies developed with performance, manufacturability, and production requirements in mind.',
    exp_1_img: '/services/product_design.png',
    exp_2_title: 'TOOLING EXPERIENCE',
    exp_2_desc: 'Practical experience supporting injection molds, hot-runner systems, mold components, and pressure die-casting applications.',
    exp_2_img: '/services/injection_mold.png',
    exp_3_title: 'AUTOMOTIVE ENGINEERING',
    exp_3_desc: 'Experience with suspension, steering, wheel-end components, engineering drawings, GD&T, and supplier coordination.',
    exp_3_img: '/services/drawing_validation.png',
    exp_4_title: 'CAD & DOCUMENTATION',
    exp_4_desc: '3D models, drawings, BOMs, and controlled documentation using established CAD and PLM workflows.',
    exp_4_img: '/images/cad_workstation_single.jpeg',
    facility_img: '/services/drawing_validation.png',

    cad_stack_title: 'SOFTWARE & CAD PROFICIENCY',
    cad_stack_desc: 'We collaborate using industry-standard engineering suites and enterprise PLM workflows.',
    cad_items: DEFAULT_CAD_STACK,
  },
  careers: {
    hero_tag: 'CAREERS & COLLABORATION',
    hero_title: 'BRING PRACTICAL ENGINEERING IDEAS TO LIFE',
    hero_desc: 'AG Vertex welcomes experienced mechanical designers, tooling specialists, and CAD professionals interested in future project-based collaboration.',
    hero_img: '/images/cad_team_collaboration.jpeg',
    val_1_title: 'PRACTICAL ENGINEERING',
    val_1_desc: 'We solve real design problems with practical, manufacturable solutions.',
    val_2_title: 'FLEXIBLE COLLABORATION',
    val_2_desc: 'Work with us on a project basis or as an independent specialist.',
    val_3_title: 'TECHNICAL INTEGRITY',
    val_3_desc: 'We stand for accuracy, reliability, and clear communication in every deliverable.',
    val_4_title: 'CONTINUOUS LEARNING',
    val_4_desc: 'We encourage knowledge sharing and ongoing growth in engineering.',
  },
};

const defaultSettings: AllSettings = {
  contact: {
    phone: '+1 (289) 683-1234',
    email: 'info@agvertex.com',
    address: 'Windsor, Ontario, Canada',
    whatsapp: '',
    contact_form_email: 'info@agvertex.com',
  },
  social: { linkedin: '', instagram: '', facebook: '', youtube: '' },
  business: {
    company_name: 'AG Vertex',
    tagline: 'Precision Mechanical Design & Engineering Partner',
    short_description: 'Mechanical design consultancy in Windsor, Ontario.',
    business_hours: 'Monday – Friday, 9 AM – 5 PM EST',
  },
  images: {
    about_hero_image: '/images/cad_workstation_single.jpeg',
    about_facility_image: '/services/drawing_validation.png',
    careers_team_image: '/images/cad_team_collaboration.jpeg',
    home_hero_image: '',
  },
};

export const settingsApi = {
  async getAllSettings(): Promise<AllSettings> {
    try {
      const { data, error } = await supabase
        .from('website_settings')
        .select('setting_key, setting_value');
      if (error) return defaultSettings;

      const result: any = { ...defaultSettings };
      for (const row of data || []) {
        result[row.setting_key] = { ...result[row.setting_key], ...row.setting_value };
      }
      return result as AllSettings;
    } catch {
      return defaultSettings;
    }
  },

  async getContactSettings(): Promise<ContactSettings> {
    const all = await this.getAllSettings();
    return all.contact;
  },

  async getPageContent(): Promise<WebsitePageContent> {
    try {
      const { data, error } = await supabase
        .from('website_settings')
        .select('setting_value')
        .eq('setting_key', 'page_content')
        .single();
      if (error || !data?.setting_value) return DEFAULT_PAGE_CONTENT;
      return {
        home: { ...DEFAULT_PAGE_CONTENT.home, ...data.setting_value.home },
        about: { ...DEFAULT_PAGE_CONTENT.about, ...data.setting_value.about },
        careers: { ...DEFAULT_PAGE_CONTENT.careers, ...data.setting_value.careers },
      };
    } catch {
      return DEFAULT_PAGE_CONTENT;
    }
  },

  async updatePageContent(content: WebsitePageContent): Promise<void> {
    const { error } = await supabase
      .from('website_settings')
      .upsert({ setting_key: 'page_content', setting_value: content }, { onConflict: 'setting_key' });
    if (error) throw error;
  },

  async updateSetting(key: 'contact' | 'social' | 'business' | 'images' | 'page_content', value: object): Promise<void> {
    const { error } = await supabase
      .from('website_settings')
      .upsert({ setting_key: key, setting_value: value }, { onConflict: 'setting_key' });
    if (error) throw error;
  },

  async getPageVisibility(pageKey: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('page_visibility')
        .select('is_enabled')
        .eq('page_key', pageKey)
        .single();
      if (error) return true;
      return data?.is_enabled ?? true;
    } catch {
      return true;
    }
  },

  async setPageVisibility(pageKey: string, enabled: boolean): Promise<void> {
    const { error } = await supabase
      .from('page_visibility')
      .upsert({ page_key: pageKey, is_enabled: enabled }, { onConflict: 'page_key' });
    if (error) throw error;
  },
};
