"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  BORDER,
  FORM_FIELD_FULL_CLASS,
  FORM_GRID_CLASS,
  MultiPillSelect,
  PillSelect,
  ResetIcon,
  fieldLabelClass,
  sectionHeadingClass,
  textInputClass,
} from "@/components/form-controls";
import {
  BOOKING_CITY,
  BOOKING_PRIORITIES,
  BOOKING_SERVICES,
  BOOKING_SHIFTS,
  BUDGET_OPTIONS,
  CHENNAI_AREAS,
  MAX_PHOTOS,
  PROPERTY_TYPES,
  REFERRAL_SOURCES,
} from "@/lib/book-form-options";
import { emailValidationError } from "@/lib/form-validation";

const onlyDigits = (v: string) => v.replace(/[^0-9]/g, "");

type PhotoItem = {
  id: string;
  file: File;
  previewUrl: string;
};

const IMAGE_EXTENSIONS = new Set([
  "jpg",
  "jpeg",
  "png",
  "gif",
  "webp",
  "heic",
  "heif",
  "bmp",
]);

function isImageFile(file: File): boolean {
  if (file.type.startsWith("image/")) return true;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  return IMAGE_EXTENSIONS.has(ext);
}

function createPhotoItem(file: File): PhotoItem {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2)}`;
  return {
    id,
    file,
    previewUrl: URL.createObjectURL(file),
  };
}

function revokePhotoItems(items: PhotoItem[]) {
  for (const item of items) {
    URL.revokeObjectURL(item.previewUrl);
  }
}

function FormSection({
  title,
  description,
  children,
  className = "",
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${FORM_FIELD_FULL_CLASS} ${className}`}>
      <div className="mb-4 border-b border-zinc-200 pb-3">
        <h3 className={sectionHeadingClass()}>{title}</h3>
        {description ? (
          <p className="mt-1 text-[13px] leading-relaxed text-zinc-500">
            {description}
          </p>
        ) : null}
      </div>
      <div className={FORM_GRID_CLASS}>{children}</div>
    </div>
  );
}

export default function BookForm() {
  const formId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [landmark, setLandmark] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [startDate, setStartDate] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [shift, setShift] = useState("");
  const [budget, setBudget] = useState("");
  const [priority, setPriority] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [photoItems, setPhotoItems] = useState<PhotoItem[]>([]);
  const [photoDragOver, setPhotoDragOver] = useState(false);
  const photoItemsRef = useRef<PhotoItem[]>([]);

  photoItemsRef.current = photoItems;

  useEffect(() => {
    return () => revokePhotoItems(photoItemsRef.current);
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitWarning, setSubmitWarning] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const minDate = new Date().toISOString().slice(0, 10);

  const resetFields = useCallback(() => {
    setFullName("");
    setEmail("");
    setPhone("");
    setArea("");
    setStreet("");
    setZip("");
    setLandmark("");
    setPropertyType("");
    setServices([]);
    setStartDate("");
    setDeadlineDate("");
    setDeadlineTime("");
    setShift("");
    setBudget("");
    setPriority("");
    setWorkDescription("");
    setReferralSource("");
    setPhotoItems((prev) => {
      revokePhotoItems(prev);
      return [];
    });
    setEmailError(null);
    setSubmitError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const clear = () => {
    resetFields();
    setSubmitSuccess(false);
    setSubmitWarning(null);
  };

  const addPhotos = (files: FileList | null) => {
    if (!files?.length) return;
    const incoming = Array.from(files).filter(isImageFile);
    if (incoming.length === 0) return;

    setPhotoItems((prev) => {
      const slotsLeft = MAX_PHOTOS - prev.length;
      if (slotsLeft <= 0) return prev;
      const toAdd = incoming.slice(0, slotsLeft).map(createPhotoItem);
      return [...prev, ...toAdd];
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePhoto = (id: string) => {
    setPhotoItems((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setSubmitWarning(null);

    const emailErr = emailValidationError(email);
    setEmailError(emailErr);
    if (emailErr) return;

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !area ||
      !propertyType ||
      services.length === 0 ||
      !startDate ||
      !shift ||
      !budget ||
      !priority
    ) {
      setSubmitError("Please fill in all required fields (marked with *).");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setSubmitError("Enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitting(true);
    try {
      const data = new FormData();
      data.append("fullName", fullName.trim());
      data.append("email", email.trim());
      data.append("phone", phone);
      data.append("city", BOOKING_CITY);
      data.append("area", area);
      data.append("street", street.trim());
      data.append("zip", zip.trim());
      data.append("landmark", landmark.trim());
      data.append("propertyType", propertyType);
      data.append("services", JSON.stringify(services));
      data.append("startDate", startDate);
      data.append("deadlineDate", deadlineDate);
      data.append("deadlineTime", deadlineTime);
      data.append("shift", shift);
      data.append("budget", budget);
      data.append("priority", priority);
      data.append("workDescription", workDescription.trim());
      data.append("referralSource", referralSource);
      for (const item of photoItems) {
        data.append("photos", item.file);
      }

      const res = await fetch("/api/bookings", {
        method: "POST",
        body: data,
      });

      const json = (await res.json()) as {
        ok?: boolean;
        error?: string;
        warning?: string;
      };

      if (!res.ok || !json.ok) {
        setSubmitError(json.error ?? "Submission failed. Please try again.");
        return;
      }

      resetFields();
      setSubmitSuccess(true);
      setSubmitWarning(json.warning ?? null);
    } catch {
      setSubmitError(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <header className={`mb-8 ${FORM_FIELD_FULL_CLASS}`}>
        <p className="text-[13px] font-medium uppercase tracking-wide text-zinc-500">
          RocketSingh
        </p>
        <h2 className="mt-1 text-[24px] font-semibold leading-tight text-zinc-900 sm:text-[28px]">
          Service Booking Form
        </h2>
        <p className="mt-2 text-[14px] leading-relaxed text-zinc-500">
          Book on-demand home services in Chennai. Fields marked{" "}
          <span className="text-red-600">*</span> are required.
        </p>
      </header>

      <form id={formId} onSubmit={onSubmit} className="flex flex-col gap-8" noValidate>
        <FormSection
          title="Your contact details"
          description="How we can reach you to confirm the booking."
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-name`} className={fieldLabelClass()}>
              Full name<span className="text-red-600"> *</span>
            </label>
            <input
              id={`${formId}-name`}
              className={textInputClass()}
              style={{ borderColor: BORDER }}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-email`} className={fieldLabelClass()}>
              Email address
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              className={textInputClass()}
              style={{ borderColor: BORDER }}
              value={email}
              onChange={(e) => {
                const v = e.target.value;
                setEmail(v);
                setEmailError(emailValidationError(v));
              }}
              autoComplete="email"
              placeholder="you@example.com"
            />
            {emailError ? (
              <p className="text-[12px] text-red-600">{emailError}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-phone`} className={fieldLabelClass()}>
              Phone number<span className="text-red-600"> *</span>
            </label>
            <input
              id={`${formId}-phone`}
              type="tel"
              inputMode="numeric"
              maxLength={10}
              className={textInputClass()}
              style={{ borderColor: BORDER }}
              value={phone}
              onChange={(e) =>
                setPhone(onlyDigits(e.target.value).slice(0, 10))
              }
              autoComplete="tel"
              placeholder="10-digit mobile"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-city`} className={fieldLabelClass()}>
              City
            </label>
            <input
              id={`${formId}-city`}
              className={textInputClass() + " bg-zinc-100 text-zinc-600 cursor-not-allowed"}
              style={{ borderColor: BORDER }}
              value={BOOKING_CITY}
              readOnly
              tabIndex={-1}
              aria-readonly="true"
            />
          </div>
        </FormSection>

        <FormSection
          title="Service location"
          description="Where in Chennai should our team visit?"
        >
          <PillSelect
            id={`${formId}-area`}
            label="Area / neighbourhood"
            required
            options={[...CHENNAI_AREAS]}
            value={area}
            onChange={setArea}
            placeholder="Choose your area…"
          />

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-street`} className={fieldLabelClass()}>
              Street address
            </label>
            <input
              id={`${formId}-street`}
              className={textInputClass()}
              style={{ borderColor: BORDER }}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              autoComplete="street-address"
              placeholder="House no., street name"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-zip`} className={fieldLabelClass()}>
              PIN / zip code
            </label>
            <input
              id={`${formId}-zip`}
              className={textInputClass()}
              style={{ borderColor: BORDER }}
              value={zip}
              onChange={(e) => setZip(onlyDigits(e.target.value).slice(0, 6))}
              inputMode="numeric"
              maxLength={6}
              autoComplete="postal-code"
              placeholder="6-digit PIN"
            />
          </div>

          <div className={`flex flex-col gap-1.5 ${FORM_FIELD_FULL_CLASS}`}>
            <label htmlFor={`${formId}-landmark`} className={fieldLabelClass()}>
              Nearest landmark
            </label>
            <input
              id={`${formId}-landmark`}
              className={textInputClass()}
              style={{ borderColor: BORDER }}
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              placeholder="e.g. near Phoenix Mall, opposite metro station"
            />
          </div>
        </FormSection>

        <FormSection
          title="Property & services"
          description="Tell us about the property and what you need done."
        >
          <PillSelect
            id={`${formId}-property`}
            label="Property type"
            required
            options={[...PROPERTY_TYPES]}
            value={propertyType}
            onChange={setPropertyType}
            placeholder="Select property type…"
          />

          <div className={`${FORM_FIELD_FULL_CLASS}`}>
            <MultiPillSelect
              id={`${formId}-services`}
              label="Services needed"
              required
              options={BOOKING_SERVICES}
              values={services}
              onChange={setServices}
              placeholder="Tap + Add to choose one or more services"
              addLabel="Add service"
            />
          </div>
        </FormSection>

        <FormSection
          title="Schedule & budget"
          description="When do you need the work, and what is your budget range?"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor={`${formId}-start`} className={fieldLabelClass()}>
              Preferred start date<span className="text-red-600"> *</span>
            </label>
            <input
              id={`${formId}-start`}
              type="date"
              min={minDate}
              className={textInputClass()}
              style={{ borderColor: BORDER }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <span className={fieldLabelClass()}>Deadline (optional)</span>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                id={`${formId}-deadline-date`}
                type="date"
                min={startDate || minDate}
                className={textInputClass()}
                style={{ borderColor: BORDER }}
                value={deadlineDate}
                onChange={(e) => setDeadlineDate(e.target.value)}
                aria-label="Deadline date"
              />
              <input
                id={`${formId}-deadline-time`}
                type="time"
                className={textInputClass()}
                style={{ borderColor: BORDER }}
                value={deadlineTime}
                onChange={(e) => setDeadlineTime(e.target.value)}
                aria-label="Deadline time"
              />
            </div>
          </div>

          <PillSelect
            id={`${formId}-shift`}
            label="Preferred shift"
            required
            options={[...BOOKING_SHIFTS]}
            value={shift}
            onChange={setShift}
          />

          <PillSelect
            id={`${formId}-budget`}
            label="Estimated budget"
            required
            options={[...BUDGET_OPTIONS]}
            value={budget}
            onChange={setBudget}
          />

          <PillSelect
            id={`${formId}-priority`}
            label="Priority"
            required
            options={[...BOOKING_PRIORITIES]}
            value={priority}
            onChange={setPriority}
          />
        </FormSection>

        <FormSection title="Additional details">
          <div className={`flex flex-col gap-1.5 ${FORM_FIELD_FULL_CLASS}`}>
            <label htmlFor={`${formId}-work`} className={fieldLabelClass()}>
              Work description
            </label>
            <textarea
              id={`${formId}-work`}
              rows={5}
              className={textInputClass() + " resize-y min-h-[120px]"}
              style={{ borderColor: BORDER }}
              value={workDescription}
              onChange={(e) => setWorkDescription(e.target.value)}
              placeholder="Describe the work, access instructions, or anything else we should know…"
            />
          </div>

          <PillSelect
            id={`${formId}-referral`}
            label="How did you hear about us?"
            options={[...REFERRAL_SOURCES]}
            value={referralSource}
            onChange={setReferralSource}
            placeholder="Select an option…"
          />

          <div className={`flex flex-col gap-3 ${FORM_FIELD_FULL_CLASS}`}>
            <span className={fieldLabelClass()}>Photos (optional)</span>
            <label
              htmlFor={`${formId}-photos`}
              onDragOver={(e) => {
                e.preventDefault();
                setPhotoDragOver(true);
              }}
              onDragLeave={() => setPhotoDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setPhotoDragOver(false);
                addPhotos(e.dataTransfer.files);
              }}
              className={`flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-6 text-center transition-colors ${
                photoDragOver
                  ? "border-teal-500 bg-teal-50/80"
                  : "border-zinc-300 bg-zinc-50/80 hover:border-zinc-400 hover:bg-zinc-50"
              }`}
            >
              <span className="text-[14px] font-medium text-zinc-700">
                Drop images here or tap to browse
              </span>
              <span className="mt-1 text-[12px] text-zinc-500">
                {photoItems.length}/{MAX_PHOTOS} photos · JPG, PNG, WEBP, HEIC ·
                max 5 MB each
              </span>
              <input
                ref={fileInputRef}
                id={`${formId}-photos`}
                type="file"
                accept="image/*,.heic,.heif"
                multiple
                className="sr-only"
                onChange={(e) => addPhotos(e.target.files)}
                disabled={photoItems.length >= MAX_PHOTOS}
              />
            </label>
            {photoItems.length > 0 ? (
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {photoItems.map((item, i) => (
                  <li
                    key={item.id}
                    className="group relative aspect-square overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.previewUrl}
                      alt={item.file.name || `Photo ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-[16px] leading-none text-white opacity-90 transition hover:bg-red-600"
                      aria-label={`Remove ${item.file.name}`}
                      onClick={() => removePhoto(item.id)}
                    >
                      ×
                    </button>
                    <p className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/70 to-transparent px-2 pb-1.5 pt-6 text-[11px] text-white">
                      {item.file.name}
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </FormSection>

        {submitError ? (
          <p
            role="alert"
            className={`rounded-md border border-red-200 bg-red-50 px-3 py-2 text-[13px] text-red-800 ${FORM_FIELD_FULL_CLASS}`}
          >
            {submitError}
          </p>
        ) : null}

        {submitSuccess ? (
          <div
            role="status"
            className={`space-y-2 ${FORM_FIELD_FULL_CLASS}`}
          >
            <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-[13px] text-green-800">
              Thank you! Your booking request has been submitted. Our RocketSingh
              team will contact you shortly.
            </p>
            {submitWarning ? (
              <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-[13px] text-amber-900">
                {submitWarning}
              </p>
            ) : null}
          </div>
        ) : null}

        <div
          className={`flex flex-col-reverse gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between ${FORM_FIELD_FULL_CLASS}`}
        >
          <button
            type="button"
            onClick={clear}
            disabled={submitting}
            className="inline-flex items-center justify-center gap-1.5 text-[14px] text-zinc-500 transition-colors hover:text-zinc-900 disabled:opacity-50"
          >
            <ResetIcon className="text-zinc-500" />
            Clear form
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-zinc-900 px-8 py-3 text-[14px] font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        </div>

        <p
          className={`text-[11px] leading-relaxed text-zinc-400 ${FORM_FIELD_FULL_CLASS}`}
        >
          Do not submit passwords through this form. Report malicious form
          activity to{" "}
          <a
            href="mailto:cleaningsewa@sriyog.com"
            className="underline hover:text-zinc-600"
          >
            cleaningsewa@sriyog.com
          </a>
          .
        </p>
      </form>
    </div>
  );
}
