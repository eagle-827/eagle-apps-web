create table public.app_wishes (
  id uuid primary key default gen_random_uuid(),
  app_id text not null,
  idea text not null,
  email text null,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  reviewed_at timestamptz null,
  completed_at timestamptz null,
  constraint app_wishes_status_check
    check (status in ('new', 'reviewed', 'done')),
  constraint app_wishes_app_id_check
    check (app_id in ('home', 'get-ready', 'baby', 'other')),
  constraint app_wishes_idea_length_check
    check (char_length(trim(idea)) between 1 and 1000)
);

create index app_wishes_created_at_idx
  on public.app_wishes (created_at desc);

create index app_wishes_status_idx
  on public.app_wishes (status);

create index app_wishes_app_id_idx
  on public.app_wishes (app_id);

alter table public.app_wishes enable row level security;

revoke all on table public.app_wishes from public;
revoke all on table public.app_wishes from anon;
revoke all on table public.app_wishes from authenticated;
revoke all on table public.app_wishes from service_role;

grant select, insert, update on table public.app_wishes to service_role;
