import { createClient } from '@supabase/supabase-js';

// Same Supabase project as the DJ site CMS — one login for both.
export const SUPABASE_URL = 'https://dbgvvizngytxuiyyiqrr.supabase.co';
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZ3Z2aXpuZ3l0eHVpeXlpcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyMTIzODUsImV4cCI6MjA4MDc4ODM4NX0.tZgm7I0sbqP_Z5Ve0IoT1qobdSd_9fTybVFi6KY1_v0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const BUCKET = 'cor-images';

export interface GalleryImage {
  id: string;
  section: string;
  image_url: string;
  caption: string | null;
  sort_order: number;
  created_at: string;
}

export async function fetchGallery(section: string): Promise<GalleryImage[]> {
  const { data, error } = await supabase
    .from('cor_gallery')
    .select('*')
    .eq('section', section)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (error) {
    console.error('Gallery fetch failed:', error.message);
    return [];
  }
  return data ?? [];
}
