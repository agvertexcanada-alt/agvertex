import { supabase } from '../supabase';

export interface MediaItem {
  id: string;
  filename: string;
  storage_path: string;
  public_url: string;
  file_type: string;
  file_size: number;
  alt_text: string;
  created_at: string;
}

export const mediaApi = {
  async getAll(): Promise<MediaItem[]> {
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async upload(file: File, altText?: string): Promise<MediaItem> {
    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const storagePath = `uploads/${filename}`;

    const { error: uploadError } = await supabase.storage
      .from('cms-images')
      .upload(storagePath, file, { cacheControl: '3600', upsert: false });
    if (uploadError) throw uploadError;

    const { data: urlData } = supabase.storage
      .from('cms-images')
      .getPublicUrl(storagePath);

    const publicUrl = urlData.publicUrl;

    const { data, error } = await supabase
      .from('media')
      .insert({
        filename: file.name,
        storage_path: storagePath,
        public_url: publicUrl,
        file_type: file.type,
        file_size: file.size,
        alt_text: altText || '',
      })
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(item: MediaItem): Promise<void> {
    const { error: storageError } = await supabase.storage
      .from('cms-images')
      .remove([item.storage_path]);
    if (storageError) throw storageError;

    const { error } = await supabase.from('media').delete().eq('id', item.id);
    if (error) throw error;
  },

  async updateAltText(id: string, altText: string): Promise<void> {
    const { error } = await supabase
      .from('media')
      .update({ alt_text: altText })
      .eq('id', id);
    if (error) throw error;
  },
};
