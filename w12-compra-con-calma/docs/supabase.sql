create table public.compra_reviews (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
 created_at timestamptz not null default now(),
 review jsonb not null,
 constraint compra_review_bounded check (
   jsonb_typeof(review) = 'object'
   and octet_length(review::text) <= 12000
   and jsonb_typeof(review->'item') = 'string'
   and length(review->>'item') between 1 and 80
   and jsonb_typeof(review->'knownSubtotal') = 'number'
   and (review->>'knownSubtotal')::numeric between 0 and 400000000
   and (review->>'knownSubtotal')::numeric = trunc((review->>'knownSubtotal')::numeric)
   and jsonb_typeof(review->'complete') = 'boolean'
   and jsonb_typeof(review->'missing') = 'array'
   and jsonb_typeof(review->'costs') = 'array'
   and jsonb_array_length(review->'costs') = 3
 )
);
alter table public.compra_reviews enable row level security;
create index compra_reviews_owner_created on public.compra_reviews(owner_id, created_at desc);
create policy compra_reviews_select_own on public.compra_reviews for select to authenticated using ((select auth.uid()) = owner_id);
create policy compra_reviews_insert_own on public.compra_reviews for insert to authenticated with check ((select auth.uid()) = owner_id);
create policy compra_reviews_delete_own on public.compra_reviews for delete to authenticated using ((select auth.uid()) = owner_id);
revoke all on public.compra_reviews from anon, authenticated;
grant select, insert, delete on public.compra_reviews to authenticated;
comment on table public.compra_reviews is 'Week 12 buyer-owned cost review snapshots; no retailer feed, commissions or public customer data.';
