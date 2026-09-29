import "server-only";

import { createClient } from "@supabase/supabase-js";

export class SupabaseServerConfigError extends Error {
  constructor() {
    super("Supabase server env is not configured.");
    this.name = "SupabaseServerConfigError";
  }
}

export function createServiceRoleClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new SupabaseServerConfigError();
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
