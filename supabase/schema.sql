-- Plantilla de persistencia para un PROYECTO SUPABASE INDEPENDIENTE.
-- No ejecutar en portal-operaciones-gs.
create table if not exists public.interpreter_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  source_language text,
  target_language text not null default 'es',
  translated_transcript text not null default '',
  created_at timestamptz not null default now()
);
alter table public.interpreter_sessions enable row level security;
create policy "Users can read own interpreter sessions"
  on public.interpreter_sessions for select to authenticated
  using ((select auth.uid()) = user_id);
create policy "Users can create own interpreter sessions"
  on public.interpreter_sessions for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy "Users can update own interpreter sessions"
  on public.interpreter_sessions for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
grant select, insert, update on public.interpreter_sessions to authenticated;
