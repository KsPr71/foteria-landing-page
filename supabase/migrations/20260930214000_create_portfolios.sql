-- Metadata for the photo portfolios stored in the `portfolios` Storage bucket.
-- `cover_path` and every value in `image_groups` are relative paths in that bucket.

create table public.portfolios (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  cover_path text not null,
  event_date date,
  clients text[] not null default '{}',
  location text,
  -- Array of image rows. Each nested array contains one to three Storage paths.
  image_groups jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint portfolios_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint portfolios_image_groups_is_array check (jsonb_typeof(image_groups) = 'array')
);

create index portfolios_published_sort_order_idx
  on public.portfolios (sort_order, event_date desc)
  where is_published = true;

alter table public.portfolios enable row level security;

-- The site can only retrieve portfolios explicitly marked as published.
grant select on table public.portfolios to anon, authenticated;

create policy "Published portfolios are publicly readable"
  on public.portfolios
  for select
  to anon, authenticated
  using (is_published = true);

comment on table public.portfolios is
  'Metadata for image galleries stored in the portfolios Storage bucket.';
