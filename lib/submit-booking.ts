import { NextResponse } from "next/server";

import { bookingScheduleValidationError } from "@/lib/booking-datetime";
import { emailValidationError } from "@/lib/form-validation";
import {
  formatServiceList,
  unmatchedServiceNames,
} from "@/lib/supabase-services";
import {
  joinStoredUrls,
  uploadFilesToStorage,
} from "@/lib/supabase-storage";
import { formatSupabaseEnvError, getSupabaseEnv } from "@/lib/supabase-env";
import { getSupabaseAdmin } from "@/lib/supabase";

const DEFAULT_STATUS = "New / Open";

export type BookingPayload = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  area: string;
  street: string;
  zip: string;
  landmark: string;
  propertyType: string;
  services: string[];
  startDate: string;
  deadlineDate: string;
  deadlineTime: string;
  shift: string;
  budget: string;
  priority: string;
  workDescription: string;
  referralSource: string;
  photos: File[];
};

export type BookingJsonBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  city?: string;
  area?: string;
  street?: string;
  zip?: string;
  landmark?: string;
  propertyType?: string;
  services?: unknown;
  startDate?: string;
  deadlineDate?: string;
  deadlineTime?: string;
  shift?: string;
  budget?: string;
  priority?: string;
  workDescription?: string;
  referralSource?: string;
};

function validationError(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function parseServices(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((v) => String(v ?? "").trim()).filter(Boolean);
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return [];
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map((v) => String(v ?? "").trim()).filter(Boolean);
      }
    } catch {
      return trimmed
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
    }
  }
  return [];
}

function buildDeadlineIso(deadlineDate: string, deadlineTime: string): string {
  if (!deadlineDate) return "";
  const time = deadlineTime || "00:00";
  return `${deadlineDate}T${time}:00`;
}

async function createBookingRecord(
  payload: BookingPayload,
  photoUrls: string[],
): Promise<{ id: string; warnings: string[] } | { error: string }> {
  const warnings: string[] = [];
  const deadline = buildDeadlineIso(payload.deadlineDate, payload.deadlineTime);

  const unmatched = await unmatchedServiceNames(payload.services);
  if (unmatched.length > 0) {
    warnings.push(
      `These services were not found in the Services table: ${unmatched.join(", ")}.`,
    );
  }

  const row: Record<string, unknown> = {
    full_name: payload.fullName,
    phone: payload.phone,
    city: payload.city || "Chennai",
    area: [payload.area],
    property_type: payload.propertyType,
    starting_date: payload.startDate,
    select_shift: payload.shift,
    budget: payload.budget,
    priority: payload.priority,
    status: DEFAULT_STATUS,
    select_services: formatServiceList(payload.services),
  };

  if (payload.email) row.email = payload.email;
  if (payload.street) row.street = payload.street;
  if (payload.zip) row.zip = payload.zip;
  if (payload.landmark) row.nearest_landmark = payload.landmark;
  if (deadline) row.deadline = deadline;
  if (payload.workDescription) row.work_description = payload.workDescription;
  if (payload.referralSource) {
    row.how_did_you_know_about_us = payload.referralSource;
  }
  if (photoUrls.length > 0) {
    row.add_photos_picture = joinStoredUrls(photoUrls);
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("booking")
    .insert(row)
    .select("bookingid")
    .single();

  if (error) {
    return { error: error.message };
  }

  return { id: String(data.bookingid), warnings };
}

async function parseMultipart(request: Request): Promise<BookingPayload | null> {
  const form = await request.formData();
  const photos = form
    .getAll("photos")
    .filter((v): v is File => v instanceof File && v.size > 0);

  return {
    fullName: String(form.get("fullName") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    phone: String(form.get("phone") ?? "").trim(),
    city: String(form.get("city") ?? "Chennai").trim() || "Chennai",
    area: String(form.get("area") ?? "").trim(),
    street: String(form.get("street") ?? "").trim(),
    zip: String(form.get("zip") ?? "").trim(),
    landmark: String(form.get("landmark") ?? "").trim(),
    propertyType: String(form.get("propertyType") ?? "").trim(),
    services: parseServices(form.get("services")),
    startDate: String(form.get("startDate") ?? "").trim(),
    deadlineDate: String(form.get("deadlineDate") ?? "").trim(),
    deadlineTime: String(form.get("deadlineTime") ?? "").trim(),
    shift: String(form.get("shift") ?? "").trim(),
    budget: String(form.get("budget") ?? "").trim(),
    priority: String(form.get("priority") ?? "").trim(),
    workDescription: String(form.get("workDescription") ?? "").trim(),
    referralSource: String(form.get("referralSource") ?? "").trim(),
    photos,
  };
}

function parseJsonBody(raw: BookingJsonBody): BookingPayload {
  return {
    fullName: String(raw.fullName ?? "").trim(),
    email: String(raw.email ?? "").trim(),
    phone: String(raw.phone ?? "").trim(),
    city: String(raw.city ?? "Chennai").trim() || "Chennai",
    area: String(raw.area ?? "").trim(),
    street: String(raw.street ?? "").trim(),
    zip: String(raw.zip ?? "").trim(),
    landmark: String(raw.landmark ?? "").trim(),
    propertyType: String(raw.propertyType ?? "").trim(),
    services: parseServices(raw.services),
    startDate: String(raw.startDate ?? "").trim(),
    deadlineDate: String(raw.deadlineDate ?? "").trim(),
    deadlineTime: String(raw.deadlineTime ?? "").trim(),
    shift: String(raw.shift ?? "").trim(),
    budget: String(raw.budget ?? "").trim(),
    priority: String(raw.priority ?? "").trim(),
    workDescription: String(raw.workDescription ?? "").trim(),
    referralSource: String(raw.referralSource ?? "").trim(),
    photos: [],
  };
}

function validatePayload(payload: BookingPayload): string | null {
  if (
    !payload.fullName ||
    !payload.phone ||
    !payload.area ||
    !payload.propertyType ||
    payload.services.length === 0 ||
    !payload.startDate ||
    !payload.shift ||
    !payload.budget ||
    !payload.priority
  ) {
    return "Please fill in all required fields.";
  }

  if (!/^\d{10}$/.test(payload.phone)) {
    return "Enter a valid 10-digit phone number.";
  }

  const emailErr = emailValidationError(payload.email);
  if (emailErr) return emailErr;

  const scheduleErr = bookingScheduleValidationError({
    startDate: payload.startDate,
    deadlineDate: payload.deadlineDate,
    deadlineTime: payload.deadlineTime,
    shift: payload.shift,
  });
  if (scheduleErr) return scheduleErr;

  return null;
}

export async function handleBookingSubmission(
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
  let payload: BookingPayload | null = null;

  try {
    if (contentType.includes("multipart/form-data")) {
      payload = await parseMultipart(request);
    } else {
      const raw = (await request.json()) as BookingJsonBody;
      payload = parseJsonBody(raw);
    }
  } catch {
    return validationError("Invalid request body");
  }

  if (!payload) return validationError("Invalid request body");

  const validationMsg = validatePayload(payload);
  if (validationMsg) return validationError(validationMsg);

  const warnings: string[] = [];
  let photoUrls: string[] = [];

  if (payload.photos.length > 0) {
    const uploaded = await uploadFilesToStorage("booking", payload.photos);
    photoUrls = uploaded.urls;
    if (uploaded.failures.length > 0) {
      warnings.push(
        `These photos could not be uploaded: ${uploaded.failures.join(", ")}.`,
      );
    }
  }

  const result = await createBookingRecord(payload, photoUrls);
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
