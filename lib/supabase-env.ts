function readEnv(...keys: string[]): string | undefined {
  for (const key of keys) {
    const raw = process.env[key];
    if (typeof raw !== "string") continue;
    const value = raw.trim().replace(/^['"]|['"]$/g, "");
    if (value) return value;
  }
  return undefined;
}

/** Project URL only — not the /rest/v1/ API path from the dashboard. */
export function normalizeSupabaseUrl(raw: string): string {
  let url = raw.trim().replace(/^['"]|['"]$/g, "").replace(/\/+$/, "");
  url = url.replace(/\/rest\/v1$/i, "");
  return url.replace(/\/+$/, "");
}

export type SupabaseEnvConfig = {
  url: string;
  serviceRoleKey: string;
};

export type SupabaseEnvStatus =
  | { ok: true; config: SupabaseEnvConfig }
  | { ok: false; missing: string[] };

export function getSupabaseEnv(): SupabaseEnvStatus {
  const urlRaw = readEnv("SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readEnv(
    "SUPABASE_SERVICE_ROLE_KEY",
    "SUPABASE_SERVICE_KEY",
  );

  const missing: string[] = [];
  if (!urlRaw) missing.push("SUPABASE_URL");
  if (!serviceRoleKey) missing.push("SUPABASE_SERVICE_ROLE_KEY");

  if (missing.length > 0) {
    return { ok: false, missing };
  }

  return {
    ok: true,
    config: {
      url: normalizeSupabaseUrl(urlRaw!),
      serviceRoleKey: serviceRoleKey!,
    },
  };
}

export function formatSupabaseEnvError(missing: string[]): string {
  const onVercel = Boolean(process.env["VERCEL"]);
  if (onVercel) {
    return (
      `Server is missing Supabase configuration (${missing.join(", ")}). ` +
      "In Vercel → Project → Settings → Environment Variables, add them for Production, save, then Redeploy."
    );
  }
  return (
    `Server is missing Supabase configuration (${missing.join(", ")}). ` +
    "Add them to .env.local and restart npm run dev."
  );
}
