import { NextResponse } from "next/server";

import { emailValidationError } from "@/lib/form-validation";
import { unmatchedServiceNames } from "@/lib/supabase-services";
import { uploadToStorage } from "@/lib/supabase-storage";
import { formatSupabaseEnvError, getSupabaseEnv } from "@/lib/supabase-env";
import { getSupabaseAdmin } from "@/lib/supabase";

function validationError(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function parseStringArray(raw: FormDataEntryValue | null): string[] {
  if (!raw) return [];
  const text = String(raw).trim();
  if (!text) return [];
  try {
    const parsed = JSON.parse(text) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.map((v) => String(v).trim()).filter(Boolean);
    }
  } catch {
    /* single value */
  }
  return [text];
}

export type CareerPayload = {
  fullName: string;
  phone: string;
  email: string;
  positions: string[];
  expertise: string[];
  yearsExperience: string;
  preferredAreas: string[];
  insurancePolicyNumber: string;
  emergencyContact: string;
  coverLetter: string;
  message: string;
  idProof: File | null;
  resume: File | null;
};

export type CareerJsonBody = Partial<CareerPayload>;

async function createCareerRecord(
  payload: CareerPayload,
  idProofUrl: string | null,
  resumeUrl: string | null,
): Promise<{ id: string; warnings: string[] } | { error: string }> {
  const warnings: string[] = [];

  const row: Record<string, unknown> = {
    full_name: payload.fullName,
    phone: payload.phone,
    application_date: new Date().toISOString(),
  };

  if (payload.email) row.email = payload.email;
  if (payload.positions.length > 0) {
    row.position_applied_for = payload.positions;
  }
  if (payload.preferredAreas.length > 0) {
    row.preferred_working_area = payload.preferredAreas;
  }
  if (payload.coverLetter) row.cover_letter = payload.coverLetter;
  if (payload.message) row.message = payload.message;
  if (payload.emergencyContact) {
    row.emergency_contact_number = payload.emergencyContact;
  }
  if (payload.yearsExperience) {
    row.years_of_experience = payload.yearsExperience;
  }

  const insurance = payload.insurancePolicyNumber.replace(/\D/g, "");
  if (insurance) row.insurance_policy_number = insurance;

  if (payload.expertise.length > 0) {
    row.area_of_expertise = payload.expertise;
    const unmatched = await unmatchedServiceNames(payload.expertise);
    if (unmatched.length > 0) {
      warnings.push(
        `These expertise areas were not found in Services: ${unmatched.join(", ")}.`,
      );
    }
  }

  if (idProofUrl) row.id_proof = idProofUrl;
  if (resumeUrl) row.resume_cv = resumeUrl;

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("workforce")
    .insert(row)
    .select("uin")
    .single();

  if (error) {
    return { error: error.message };
  }

  return { id: String(data.uin), warnings };
}

async function parseMultipart(request: Request): Promise<CareerPayload | null> {
  const form = await request.formData();
  const idRaw = form.get("idProof");
  const resumeRaw = form.get("resume");

  return {
    fullName: String(form.get("fullName") ?? "").trim(),
    phone: String(form.get("phone") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    positions: parseStringArray(form.get("positions")),
    expertise: parseStringArray(form.get("expertise")),
    yearsExperience: String(form.get("yearsExperience") ?? "").trim(),
    preferredAreas: parseStringArray(form.get("preferredAreas")),
    insurancePolicyNumber: String(
      form.get("insurancePolicyNumber") ?? "",
    ).trim(),
    emergencyContact: String(form.get("emergencyContact") ?? "").trim(),
    coverLetter: String(form.get("coverLetter") ?? "").trim(),
    message: String(form.get("message") ?? "").trim(),
    idProof: idRaw instanceof File && idRaw.size > 0 ? idRaw : null,
    resume: resumeRaw instanceof File && resumeRaw.size > 0 ? resumeRaw : null,
  };
}

function validatePayload(payload: CareerPayload): string | null {
  if (!payload.fullName || !payload.phone) {
    return "Please fill in all required fields (marked with *).";
  }
  if (!/^\d{10}$/.test(payload.phone)) {
    return "Enter a valid 10-digit mobile number.";
  }
  const emailErr = emailValidationError(payload.email);
  if (emailErr) return emailErr;
  if (payload.emergencyContact && !/^\d{10}$/.test(payload.emergencyContact)) {
    return "Emergency contact must be a 10-digit number.";
  }
  return null;
}

export async function handleCareerSubmission(
  request: Request,
): Promise<NextResponse> {
  const env = getSupabaseEnv();
  if (!env.ok) {
    return NextResponse.json(
      { error: formatSupabaseEnvError(env.missing) },
      { status: 500 },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  let payload: CareerPayload | null = null;

  try {
    if (contentType.includes("multipart/form-data")) {
      payload = await parseMultipart(request);
    } else {
      return validationError("Career applications must use multipart/form-data.");
    }
  } catch {
    return validationError("Invalid request body");
  }

  if (!payload) return validationError("Invalid request body");

  const validationMsg = validatePayload(payload);
  if (validationMsg) return validationError(validationMsg);

  const warnings: string[] = [];
  let idProofUrl: string | null = null;
  let resumeUrl: string | null = null;

  if (payload.idProof) {
    try {
      idProofUrl = await uploadToStorage("workforce/id-proof", payload.idProof);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      warnings.push(`ID proof could not be uploaded: ${payload.idProof.name}: ${msg}.`);
    }
  }

  if (payload.resume) {
    try {
      resumeUrl = await uploadToStorage("workforce/resume", payload.resume);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      warnings.push(`Resume could not be uploaded: ${payload.resume.name}: ${msg}.`);
    }
  }

  const result = await createCareerRecord(payload, idProofUrl, resumeUrl);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 502 });
  }

  warnings.push(...result.warnings);

  return NextResponse.json({
    ok: true as const,
    id: result.id,
    ...(warnings.length > 0 ? { warning: warnings.join(" ") } : {}),
  });
}
