# Vercel cutover checklist (Airtable → Supabase)

Your Supabase project already has tables and data. **Do not run any SQL migrations** — only wire env vars and deploy.

1. **Confirm schema alignment**
   - The app expects the table and column names listed in [`SCHEMA.md`](SCHEMA.md).
   - If your dashboard uses different names, share an export and we will map the code.

2. **Local verification**
   - Copy `.env.example` → `.env.local` and set `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`.
   - Run `npm run verify:supabase` — tables and storage buckets should report OK.
   - Run `npm run dev` and submit each form once (Book, Contact, Career, Partnership, Feedback).

3. **Vercel environment**
   - Add: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (Production + Preview if needed).
   - Remove: all `AIRTABLE_*` variables.
   - Redeploy the latest commit.

4. **Production smoke test**
   - Submit one test entry per form on the live site.
   - Confirm new rows appear in Supabase Table Editor and files in Storage.

5. **Cleanup**
   - Revoke the Airtable personal access token when satisfied.
   - Historical Airtable records stay in Airtable as archive (not migrated).
