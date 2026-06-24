import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseEnv } from "@/lib/supabase-env";

let adminClient: SupabaseClient | null = null;

/** Server-only Supabase client (service role — bypasses RLS). */
export function getSupabaseAdmin(): SupabaseClient {
  const env = getSupabaseEnv();
  if (!env.ok) {
    throw new Error(`Supabase not configured: ${env.missing.join(", ")}`);
  }

  if (!adminClient) {
    adminClient = createClient(env.config.url, env.config.serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }

  return adminClient;
}

export function resetSupabaseAdminForTests(): void {
  adminClient = null;
}
