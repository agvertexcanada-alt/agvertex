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

  async updateSetting(key: 'contact' | 'social' | 'business' | 'images', value: object): Promise<void> {
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
