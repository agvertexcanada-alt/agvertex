import { supabase } from '../supabase';

export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  client: string;
  project_year: string;
  project_url: string;
  display_order: number;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

export type ShowcaseInsert = Omit<ShowcaseProject, 'id' | 'created_at' | 'updated_at'>;

export const showcaseApi = {
  async getAll(): Promise<ShowcaseProject[]> {
    const { data, error } = await supabase
      .from('showcase_projects')
      .select('*')
      .order('display_order', { ascending: true });
    if (error) throw error;
    return data || [];
  },

  async getPublished(): Promise<ShowcaseProject[]> {
    const { data, error } = await supabase
      .from('showcase_projects')
      .select('*')
      .eq('status', 'published')
      .order('display_order', { ascending: true });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<ShowcaseProject | null> {
    const { data, error } = await supabase
      .from('showcase_projects')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(project: ShowcaseInsert): Promise<ShowcaseProject> {
    const { data, error } = await supabase
      .from('showcase_projects')
      .insert(project)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<ShowcaseInsert>): Promise<ShowcaseProject> {
    const { data, error } = await supabase
      .from('showcase_projects')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('showcase_projects').delete().eq('id', id);
    if (error) throw error;
  },

  async publish(id: string): Promise<ShowcaseProject> {
    return this.update(id, { status: 'published' });
  },

  async unpublish(id: string): Promise<ShowcaseProject> {
    return this.update(id, { status: 'draft' });
  },

  async getVisibility(): Promise<boolean> {
    const { data, error } = await supabase
      .from('page_visibility')
      .select('is_enabled')
      .eq('page_key', 'showcase')
      .single();
    if (error) return true;
    return data?.is_enabled ?? true;
  },

  async setVisibility(enabled: boolean): Promise<void> {
    const { error } = await supabase
      .from('page_visibility')
      .upsert({ page_key: 'showcase', is_enabled: enabled }, { onConflict: 'page_key' });
    if (error) throw error;
  },
};
