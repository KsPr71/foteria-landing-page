-- Only users registered in public.admin_users can manage portfolio files.
create policy "Admins can list portfolio files"
  on storage.objects for select to authenticated
  using (
    bucket_id = 'portfolios'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
  );

create policy "Admins can upload portfolio files"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'portfolios'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
  );

create policy "Admins can update portfolio files"
  on storage.objects for update to authenticated
  using (
    bucket_id = 'portfolios'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
  )
  with check (
    bucket_id = 'portfolios'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
  );

create policy "Admins can delete portfolio files"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'portfolios'
    and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
  );
