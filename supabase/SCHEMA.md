# Expected Supabase schema (existing tables)

The form API writes to these **existing** Supabase tables. No migrations or data import are required.

## Tables

| Table | Form | Primary key |
|-------|------|-------------|
| `booking` | Book a Service | `bookingid` |
| `contact` | Contact | `id` |
| `workforce` | Career | `uin` |
| `partnership` | Partnership | `partner_id` |
| `feedback` | Feedback | `id` |
| `services` | Service name lookup (optional warnings) | `id` |

## Storage

Single bucket: **`uploads`** (public URLs stored in text columns).

## Environment

```
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
```

Use the **project URL only** — not `.../rest/v1/`. The app strips `/rest/v1` automatically if pasted by mistake.

## Key column mapping

**booking:** `full_name`, `email`, `phone`, `city`, `area` (text[]), `street`, `zip`, `nearest_landmark`, `property_type`, `starting_date`, `deadline`, `select_shift`, `budget`, `priority`, `work_description`, `how_did_you_know_about_us`, `status`, `select_services` (comma-separated text), `add_photos_picture` (file URLs)

**contact:** `full_name`, `email`, `phone_number`, `city`, `message`

**workforce:** `full_name`, `phone`, `email`, `position_applied_for` (text[]), `preferred_working_area` (text[]), `area_of_expertise` (text[]), `years_of_experience`, `cover_letter`, `message`, `emergency_contact_number`, `insurance_policy_number`, `application_date`, `id_proof`, `resume_cv`

**partnership:** `full_name`, `phone_number`, `email`, `name_of_organisation`, `city`, `number_of_employees`, `business_type`, `partnership_interests`, `how_did_you_hear_about_us`, `message`, `services_offered` (text[]), `company_photos`, `company_registration_certificates`

**feedback:** `first_name`, `middle_name`, `last_name`, `country`, `organization`, `designation`, `phone`, `email`, `feedback` (service name prepended), `headshot`
