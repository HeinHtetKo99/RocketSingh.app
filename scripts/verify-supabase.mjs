/**
 * Smoke-test Supabase connectivity against the live RocketSingh schema.
 * Usage: npm run verify:supabase
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function normalizeSupabaseUrl(raw) {
  let url = raw.trim().replace(/\/+$/, "");
  url = url.replace(/\/rest\/v1$/i, "");
  return url.replace(/\/+$/, "");
}

loadEnvLocal();

const urlRaw = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!urlRaw || !key) {
  console.error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Copy .env.example to .env.local.",
  );
  process.exit(1);
}

const url = normalizeSupabaseUrl(urlRaw);
if (url !== urlRaw.replace(/\/+$/, "")) {
  console.warn(
    `WARN SUPABASE_URL should be ${url} (without /rest/v1/). Auto-corrected for this check.`,
  );
}

const supabase = createClient(url, key, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const tables = [
  "services",
  "booking",
  "contact",
  "workforce",
  "partnership",
  "feedback",
];

let failed = false;

for (const table of tables) {
  const { error } = await supabase
    .from(table)
    .select("*", { head: true, count: "exact" });
  if (error) {
    console.error(`FAIL ${table}: ${error.message}`);
    failed = true;
  } else {
    console.log(`OK   ${table}`);
  }
}

const { error: bucketError } = await supabase.storage
  .from("uploads")
  .list("", { limit: 1 });

if (bucketError) {
  console.error(`FAIL bucket uploads: ${bucketError.message}`);
  failed = true;
} else {
  console.log("OK   bucket uploads");
}

if (failed) {
  console.error("\nSupabase verification failed. See supabase/SCHEMA.md.");
  process.exit(1);
}

console.log("\nSupabase is ready for form submissions.");
