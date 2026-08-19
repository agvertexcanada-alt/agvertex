import { supabase } from '../supabase';

export interface Service {
  id: string;
  title: string;
  short_desc: string;
  full_desc: string;
  image_url: string;
  display_order: number;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

export type ServiceInsert = Omit<Service, 'id' | 'created_at' | 'updated_at'>;

export const servicesApi = {
  async getAll(): Promise<Service[]> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('display_order', { ascending: true });
    if (error) throw error;
    return data || [];
  },

  async getPublished(): Promise<Service[]> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('status', 'published')
      .order('display_order', { ascending: true });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Service | null> {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(service: ServiceInsert): Promise<Service> {
    const { data, error } = await supabase
      .from('services')
      .insert(service)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: Partial<ServiceInsert>): Promise<Service> {
    const { data, error } = await supabase
      .from('services')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (error) throw error;
  },

  async publish(id: string): Promise<Service> {
    return this.update(id, { status: 'published' });
  },

  async unpublish(id: string): Promise<Service> {
    return this.update(id, { status: 'draft' });
  },
};
