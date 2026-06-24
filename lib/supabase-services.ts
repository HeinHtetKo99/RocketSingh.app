import { getSupabaseAdmin } from "@/lib/supabase";

let serviceNameCache: Set<string> | null = null;

async function knownServiceNames(): Promise<Set<string>> {
  if (!serviceNameCache) {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from("services").select("name");

    if (error) {
      throw new Error(`Could not load services: ${error.message}`);
    }

    serviceNameCache = new Set(
      (data ?? [])
        .map((row) => String(row.name ?? "").trim().toLowerCase())
        .filter(Boolean),
    );
  }

  return serviceNameCache;
}

/** Warn when form labels are not present in the services table (optional lookup). */
export async function unmatchedServiceNames(
  names: string[],
): Promise<string[]> {
  const known = await knownServiceNames();
  const unmatched: string[] = [];

  for (const raw of names) {
    const name = raw.trim();
    if (!name) continue;
    if (!known.has(name.toLowerCase())) unmatched.push(name);
  }

  return unmatched;
}

export function formatServiceList(names: string[]): string {
  return names.map((n) => n.trim()).filter(Boolean).join(", ");
}

export function clearServiceNameCache(): void {
  serviceNameCache = null;
}
