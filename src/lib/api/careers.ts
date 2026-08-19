import { supabase } from '../supabase';

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience_required: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  application_email: string;
  closing_date: string | null;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

export type CareerInsert = Omit<Career, 'id' | 'created_at' | 'updated_at'>;

export const careersApi = {
  async getAll(): Promise<Career[]> {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getPublished(): Promise<Career[]> {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Career | null> {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(career: CareerInsert): Promise<Career> {
    const { data, error } = await supabase
      .from('careers')
      .insert(career)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<CareerInsert>): Promise<Career> {
    const { data, error } = await supabase
      .from('careers')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('careers').delete().eq('id', id);
    if (error) throw error;
  },

  async publish(id: string): Promise<Career> {
    return this.update(id, { status: 'published' });
  },

  async unpublish(id: string): Promise<Career> {
    return this.update(id, { status: 'draft' });
  },
};
