-- ============================================================
-- AG Vertex CMS — Supabase Database Schema
-- Run this in your Supabase project's SQL Editor
-- (Supabase Dashboard → SQL Editor → New Query → Paste → Run)
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- 1. ADMIN PROFILES
-- Links to Supabase auth.users for role management
-- ============================================================
create table if not exists admin_profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  role text default 'admin',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-update updated_at trigger
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- ============================================================
-- 2. PAGE VISIBILITY
-- Controls which pages are publicly accessible
-- ============================================================
create table if not exists page_visibility (
  id uuid default uuid_generate_v4() primary key,
  page_key text unique not null,
  is_enabled boolean default true,
  updated_at timestamptz default now()
);

-- Insert default visibility settings
insert into page_visibility (page_key, is_enabled) values
  ('showcase', true),
  ('resources', true),
  ('careers', true)
on conflict (page_key) do nothing;

-- ============================================================
-- 3. WEBSITE SETTINGS
-- Stores contact info, social links, business details as JSON
-- ============================================================
create table if not exists website_settings (
  id uuid default uuid_generate_v4() primary key,
  setting_key text unique not null,
  setting_value jsonb not null default '{}',
  updated_at timestamptz default now()
);

create trigger update_website_settings_updated_at
  before update on website_settings
  for each row execute function update_updated_at_column();

-- Insert default settings
insert into website_settings (setting_key, setting_value) values
  ('contact', '{"phone": "+1 (289) 683-1234", "email": "info@agvertex.com", "address": "Windsor, Ontario, Canada", "whatsapp": "", "contact_form_email": "info@agvertex.com"}'::jsonb),
  ('social', '{"linkedin": "", "instagram": "", "facebook": "", "youtube": ""}'::jsonb),
  ('business', '{"company_name": "AG Vertex", "tagline": "Precision Mechanical Design & Engineering Partner", "short_description": "Mechanical design consultancy in Windsor, Ontario.", "business_hours": "Monday – Friday, 9 AM – 5 PM EST"}'::jsonb)
on conflict (setting_key) do nothing;

-- ============================================================
-- 4. SERVICES
-- ============================================================
create table if not exists services (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  short_desc text default '',
  full_desc text default '',
  image_url text default '',
  display_order integer default 0,
  status text default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create trigger update_services_updated_at
  before update on services
  for each row execute function update_updated_at_column();

-- ============================================================
-- 5. SHOWCASE PROJECTS
-- ============================================================
create table if not exists showcase_projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text default '',
  category text default '',
  image_url text default '',
  client text default '',
  project_year text default '',
  project_url text default '',
  display_order integer default 0,
  status text default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create trigger update_showcase_projects_updated_at
  before update on showcase_projects
  for each row execute function update_updated_at_column();

-- ============================================================
-- 6. RESOURCES / ARTICLES
-- ============================================================
create table if not exists resources (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  excerpt text default '',
  content text default '',
  cover_image_url text default '',
  author text default 'AG Vertex',
  category text default '',
  tags text[] default array[]::text[],
  slug text unique,
  seo_title text default '',
  seo_description text default '',
  published_at timestamptz,
  status text default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create trigger update_resources_updated_at
  before update on resources
  for each row execute function update_updated_at_column();

-- ============================================================
-- 7. CAREERS
-- ============================================================
create table if not exists careers (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  department text default '',
  location text default 'Windsor, Ontario, Canada',
  employment_type text default 'Full-Time',
  experience_required text default '',
  description text default '',
  responsibilities text[] default array[]::text[],
  requirements text[] default array[]::text[],
  skills text[] default array[]::text[],
  application_email text default 'info@agvertex.com',
  closing_date date,
  status text default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create trigger update_careers_updated_at
  before update on careers
  for each row execute function update_updated_at_column();

-- ============================================================
-- 8. MEDIA LIBRARY
-- ============================================================
create table if not exists media (
  id uuid default uuid_generate_v4() primary key,
  filename text not null,
  storage_path text not null,
  public_url text not null,
  file_type text default '',
  file_size bigint default 0,
  alt_text text default '',
  created_at timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================================

-- Enable RLS on all tables
alter table admin_profiles enable row level security;
alter table page_visibility enable row level security;
alter table website_settings enable row level security;
alter table services enable row level security;
alter table showcase_projects enable row level security;
alter table resources enable row level security;
alter table careers enable row level security;
alter table media enable row level security;

-- ADMIN PROFILES: own row only
create policy "Users can view own profile" on admin_profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on admin_profiles
  for update using (auth.uid() = id);
create policy "Users can insert own profile" on admin_profiles
  for insert with check (auth.uid() = id);

-- PAGE VISIBILITY: public read, auth write
create policy "Anyone can read page_visibility" on page_visibility
  for select using (true);
create policy "Authenticated users can update page_visibility" on page_visibility
  for update using (auth.role() = 'authenticated');
create policy "Authenticated users can insert page_visibility" on page_visibility
  for insert with check (auth.role() = 'authenticated');

-- WEBSITE SETTINGS: public read, auth write
create policy "Anyone can read website_settings" on website_settings
  for select using (true);
create policy "Authenticated users can update website_settings" on website_settings
  for update using (auth.role() = 'authenticated');
create policy "Authenticated users can insert website_settings" on website_settings
  for insert with check (auth.role() = 'authenticated');

-- SERVICES: public reads published, auth reads all, auth writes
create policy "Public can read published services" on services
  for select using (status = 'published' or auth.role() = 'authenticated');
create policy "Authenticated users can insert services" on services
  for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update services" on services
  for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete services" on services
  for delete using (auth.role() = 'authenticated');

-- SHOWCASE PROJECTS: public reads published, auth reads all, auth writes
create policy "Public can read published showcase projects" on showcase_projects
  for select using (status = 'published' or auth.role() = 'authenticated');
create policy "Authenticated users can insert showcase_projects" on showcase_projects
  for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update showcase_projects" on showcase_projects
  for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete showcase_projects" on showcase_projects
  for delete using (auth.role() = 'authenticated');

-- RESOURCES: public reads published, auth reads all, auth writes
create policy "Public can read published resources" on resources
  for select using (status = 'published' or auth.role() = 'authenticated');
create policy "Authenticated users can insert resources" on resources
  for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update resources" on resources
  for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete resources" on resources
  for delete using (auth.role() = 'authenticated');

-- CAREERS: public reads published, auth reads all, auth writes
create policy "Public can read published careers" on careers
  for select using (status = 'published' or auth.role() = 'authenticated');
create policy "Authenticated users can insert careers" on careers
  for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can update careers" on careers
  for update using (auth.role() = 'authenticated');
create policy "Authenticated users can delete careers" on careers
  for delete using (auth.role() = 'authenticated');

-- MEDIA: public read, auth writes
create policy "Anyone can read media" on media
  for select using (true);
create policy "Authenticated users can insert media" on media
  for insert with check (auth.role() = 'authenticated');
create policy "Authenticated users can delete media" on media
  for delete using (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE BUCKET FOR IMAGES
-- Run this to create the public images bucket
-- ============================================================
insert into storage.buckets (id, name, public)
values ('cms-images', 'cms-images', true)
on conflict (id) do nothing;

-- Storage policy: anyone can read
create policy "Public read access to cms-images" on storage.objects
  for select using (bucket_id = 'cms-images');

-- Storage policy: authenticated users can upload
create policy "Authenticated users can upload to cms-images" on storage.objects
  for insert with check (bucket_id = 'cms-images' and auth.role() = 'authenticated');

-- Storage policy: authenticated users can delete
create policy "Authenticated users can delete from cms-images" on storage.objects
  for delete using (bucket_id = 'cms-images' and auth.role() = 'authenticated');
