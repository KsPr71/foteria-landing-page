-- The public website needs to enumerate portfolio folders and read index.md files.
-- This exposes metadata only for the already-public `portfolios` bucket; writes remain admin-only.
create policy "Public can list portfolio files"
  on storage.objects
  for select
  to anon
  using (bucket_id = 'portfolios');
