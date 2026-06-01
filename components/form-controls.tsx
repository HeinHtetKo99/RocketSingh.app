"use client";

import { useEffect, useRef, useState } from "react";

export const BORDER = "#e4e4e7";
export const TAG_BG = "#f4f4f5";
export const TAG_TEXT = "#3f3f46";
export const AIRTABLE_BLUE = "#2D7FF9";

export const FORM_GRID_CLASS = "rs-form-grid";
export const FORM_FIELD_FULL_CLASS = "rs-form-full";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ResetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 12a8 8 0 1 1 3 6.32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 16V12h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type PillSelectProps = {
  id: string;
  label: string;
  required?: boolean;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export function PillSelect({
  id,
  label,
  required,
  options,
  value,
  onChange,
  placeholder = "Select…",
}: PillSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-normal text-zinc-800">
        {label}
        {required ? (
          <span className="text-red-600" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      <div ref={rootRef} className="relative">
        <button
          id={id}
          type="button"
          aria-expanded={open}
          aria-haspopup="listbox"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full min-h-[42px] items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-left text-[15px] outline-none transition-[border-color,box-shadow,background-color] focus:border-zinc-300 focus:bg-white focus-visible:ring-2 focus-visible:ring-zinc-900/10"
        >
          <span className="min-w-0 flex-1">
            {value ? (
              <span
                className="inline-flex max-w-full items-center truncate rounded px-2 py-0.5 text-[13px] font-medium"
                style={{ backgroundColor: TAG_BG, color: TAG_TEXT }}
              >
                {value}
              </span>
            ) : (
              <span className="text-zinc-400">{placeholder}</span>
            )}
          </span>
          <ChevronDown className="shrink-0 text-zinc-500" />
        </button>
        {open ? (
          <ul
            role="listbox"
            className="absolute z-20 mt-1 max-h-52 w-full overflow-auto rounded-md border bg-white py-1 shadow-sm"
            style={{ borderColor: BORDER }}
          >
            {options.map((opt) => (
              <li key={opt} role="option" aria-selected={value === opt}>
                <button
                  type="button"
                  className="w-full px-3 py-2 text-left text-[14px] text-zinc-800 hover:bg-zinc-50"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export function textInputClass() {
  return [
    "w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-[15px] text-zinc-900",
    "placeholder:text-zinc-400 outline-none transition-[border-color,box-shadow,background-color]",
    "focus:border-zinc-300 focus:bg-white focus-visible:ring-2 focus-visible:ring-zinc-900/10",
  ].join(" ");
}

export function fieldLabelClass() {
  return "text-[13px] font-medium text-zinc-800";
}

export function sectionHeadingClass() {
  return "text-[15px] font-semibold text-zinc-900 tracking-tight";
}

export type MultiPillSelectProps = {
  id: string;
  label: string;
  required?: boolean;
  options: readonly string[];
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  addLabel?: string;
};

export function MultiPillSelect({
  id,
  label,
  required,
  options,
  values,
  onChange,
  placeholder = "Tap + to add a service",
  addLabel = "Add service",
}: MultiPillSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const remaining = options.filter((o) => !values.includes(o));

  return (
    <div className="flex flex-col gap-1.5">
      <span id={`${id}-label`} className={fieldLabelClass()}>
        {label}
        {required ? (
          <span className="text-red-600" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </span>
      <div ref={rootRef} className="relative">
        <div
          className="flex min-h-[44px] flex-wrap items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50/50 px-2.5 py-2"
          style={{ borderColor: BORDER }}
          aria-labelledby={`${id}-label`}
        >
          <button
            type="button"
            aria-expanded={open}
            aria-haspopup="listbox"
            aria-label={addLabel}
            className="inline-flex h-8 shrink-0 items-center gap-1 rounded-md border border-zinc-200 bg-white px-2.5 text-[13px] font-medium text-zinc-700 hover:bg-zinc-50"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="text-base leading-none">+</span>
            Add
          </button>
          {values.map((v) => (
            <span
              key={v}
              className="inline-flex max-w-full items-center gap-1 rounded px-2 py-0.5 text-[12px] font-medium"
              style={{ backgroundColor: TAG_BG, color: TAG_TEXT }}
            >
              <span className="truncate">{v}</span>
              <button
                type="button"
                className="shrink-0 text-zinc-500 hover:text-zinc-800"
                aria-label={`Remove ${v}`}
                onClick={() => onChange(values.filter((x) => x !== v))}
              >
                ×
              </button>
            </span>
          ))}
          {values.length === 0 ? (
            <span className="text-[14px] text-zinc-400">{placeholder}</span>
          ) : null}
        </div>
        {open && remaining.length > 0 ? (
          <ul
            role="listbox"
            aria-label={label}
            className="absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-md border bg-white py-1 shadow-lg"
            style={{ borderColor: BORDER }}
          >
            {remaining.map((opt) => (
              <li key={opt} role="option">
                <button
                  type="button"
                  className="w-full px-3 py-2 text-left text-[14px] text-zinc-800 hover:bg-zinc-50"
                  onClick={() => {
                    onChange([...values, opt]);
                    setOpen(false);
                  }}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
