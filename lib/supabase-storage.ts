import { getSupabaseAdmin } from "@/lib/supabase";

export const UPLOADS_BUCKET = "uploads";

const MAX_BYTES = 5 * 1024 * 1024;

const MIME_BY_EXT: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  heic: "image/heic",
  heif: "image/heif",
  bmp: "image/bmp",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function inferMime(file: File): string {
  if (file.type) return file.type;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  return MIME_BY_EXT[ext] ?? "application/octet-stream";
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^\w.\-() ]+/g, "_").slice(0, 200) || "file";
}

function storagePath(prefix: string, filename: string): string {
  return `${prefix}/${crypto.randomUUID()}-${sanitizeFilename(filename)}`;
}

export function joinStoredUrls(urls: string[]): string {
  return urls.filter(Boolean).join(", ");
}

/** Upload a file to the shared `uploads` bucket; returns its public URL. */
export async function uploadToStorage(
  prefix: string,
  file: File,
): Promise<string> {
  if (file.size === 0) {
    throw new Error(`${file.name || "File"} is empty (0 bytes)`);
  }
  if (file.size > MAX_BYTES) {
    throw new Error(
      `${file.name} is too large (max ${MAX_BYTES / (1024 * 1024)} MB per file)`,
    );
  }

  const supabase = getSupabaseAdmin();
  const path = storagePath(prefix, file.name);
  const contentType = inferMime(file);
  const bytes = Buffer.from(await file.arrayBuffer());

  const { error: uploadError } = await supabase.storage
    .from(UPLOADS_BUCKET)
    .upload(path, bytes, { contentType, upsert: false });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data } = supabase.storage.from(UPLOADS_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function uploadFilesToStorage(
  prefix: string,
  files: File[],
): Promise<{ urls: string[]; failures: string[] }> {
  const urls: string[] = [];
  const failures: string[] = [];

  for (const file of files) {
    try {
      urls.push(await uploadToStorage(prefix, file));
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed";
      failures.push(`${file.name}: ${msg}`);
    }
  }

  return { urls, failures };
}
