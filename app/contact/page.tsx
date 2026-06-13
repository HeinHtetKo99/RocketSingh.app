"use client";

import Link from "next/link";
import React, { useState } from "react";
import MapEmbed from "../../components/GoogleMap";

const VisitIcon = () => (
  <svg width="27" height="26" fill="none" stroke="#0D5D59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C7 2 3 6 3 11c0 7 9 13 9 13s9-6 9-13c0-5-4-9-9-9z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

const EmailIcon = () => (
  <svg width="26" height="26" fill="none" stroke="#0D5D59" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="14" rx="2" ry="2" />
    <path d="M3 8l9 6 9-6" />
  </svg>
);

const quickContacts = [
  { name: "Ramesh Koirala", role: "Director", image: "/contact/1.png" },
  { name: "Sanjana Lama", role: "Operations Manager", image: "/contact/2.png" },
  { name: "Sudeep Basnet", role: "Customer Support Lead", image: "/contact/3.png" },
];

export default function Contact() {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", city: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (field: string, value: string) => {
    const newErrors = { ...errors };
    switch (field) {
      case "fullName":
        if (!value || value.trim().length < 2) newErrors.fullName = "Name must be at least 2 characters";
        else delete newErrors.fullName;
        break;
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = "Enter a valid email address";
        else delete newErrors.email;
        break;
      case "phone":
        if (value && !/^\d{7,15}$/.test(value.replace(/\s/g, ""))) newErrors.phone = "Phone must be 7-15 digits";
        else delete newErrors.phone;
        break;
      case "message":
        if (!value || value.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
        else delete newErrors.message;
        break;
    }
    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const val = name === "phone" ? value.replace(/[^0-9]/g, "") : value;
    setForm({ ...form, [name]: val });
    if (touched[name]) validate(name, val);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validate(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const allTouched = { fullName: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    validate("fullName", form.fullName);
    validate("email", form.email);
    validate("phone", form.phone);
    validate("message", form.message);

    if (!form.fullName || form.fullName.trim().length < 2) return;
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return;
    if (form.phone && !/^\d{7,15}$/.test(form.phone)) return;
    if (!form.message || form.message.trim().length < 10) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          city: form.city.trim(),
          message: form.message.trim(),
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setSubmitError(json.error ?? "There was a problem sending your message. Please try again.");
        return;
      }

      setSubmitted(true);
      setForm({ fullName: "", email: "", phone: "", city: "", message: "" });
      setErrors({});
      setTouched({});
    } catch {
      setSubmitError("We could not submit your message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 py-20 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center mb-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-teal-900 tracking-tight mb-3">Contact Us</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">Contact us, we&apos;re always here to help you out.</p>
        <div className="w-full flex justify-center mb-10">
          <div className="w-full max-w-xl h-[3px] bg-teal-300 rounded-full shadow-[0_0_12px_rgba(13,93,89,0.35)]" />
        </div>
      </div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="bg-white rounded-2xl shadow-[0_0_28px_rgba(13,93,89,0.15)] border border-gray-300 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-teal-900 mb-6 text-center">Get in Touch</h2>
          {submitted ? (
            <p className="text-center text-teal-800 font-medium py-8">
              Thank you! Your message has been received. We will get back to you soon.
            </p>
          ) : (
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border ${errors.fullName && touched.fullName ? "border-red-400" : "border-teal-200"} rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 shadow-inner w-full`}
                  placeholder="Full Name *"
                  required
                />
                {errors.fullName && touched.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border ${errors.email && touched.email ? "border-red-400" : "border-teal-200"} rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 shadow-inner w-full`}
                  placeholder="Email Address"
                />
                {errors.email && touched.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border ${errors.phone && touched.phone ? "border-red-400" : "border-teal-200"} rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 shadow-inner w-full`}
                  placeholder="Phone Number (digits only)"
                />
                {errors.phone && touched.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="border border-teal-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 shadow-inner w-full"
                placeholder="City (Chennai, Bengaluru, Mumbai...)"
              />
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border ${errors.message && touched.message ? "border-red-400" : "border-teal-200"} rounded-lg px-4 py-3 focus:ring-2 focus:ring-teal-600 shadow-inner w-full`}
                  rows={4}
                  placeholder="Service needed & message (min 10 chars) *"
                  required
                />
                {errors.message && touched.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              {submitError ? (
                <p role="alert" className="text-red-600 text-sm text-center">
                  {submitError}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="bg-gradient-to-r from-[#0E4541] via-teal-800 to-teal-700 hover:from-teal-900 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-500 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="flex justify-center">
          <img
            src="/contact/remwork.jpg"
            alt="RocketSingh Office"
            className="w-full max-w-md object-cover rounded-2xl drop-shadow-2xl hover:scale-105 transition-all duration-500 h-[450px]"
          />
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-teal-50 via-white to-teal-50 py-16 rounded-2xl shadow-inner max-w-6xl">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 mb-16">
          <div>
            <h2 className="text-4xl font-extrabold text-teal-900 mb-5">We Work Across India</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team serves Chennai, Bengaluru, Hyderabad, and nearby regions with fast, reliable cleaning solutions for homes, offices, hotels, and commercial properties.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(13,93,89,0.2)] border border-teal-400 h-[420px]">
            <MapEmbed />
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 px-4">
          <div className="group bg-white rounded-xl p-4 text-center border-2 border-teal-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div className="flex justify-center mb-2"><VisitIcon /></div>
            <h3 className="text-lg font-semibold text-teal-900 mb-1">Visit Us</h3>
            <p className="text-sm leading-relaxed">Anna Salai, T. Nagar,<br />Chennai, India</p>
          </div>
          <a
            href="mailto:support@rocketsingh.app"
            className="group bg-white rounded-xl p-4 text-center border-2 border-teal-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex justify-center mb-2"><EmailIcon /></div>
            <h3 className="text-lg font-semibold text-teal-900 mb-1">Email Us</h3>
            <p className="text-sm leading-relaxed">support@rocketsingh.app</p>
          </a>
          <Link
            href="/book"
            className="group bg-white rounded-xl p-4 text-center border-2 border-teal-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex justify-center mb-2"><EmailIcon /></div>
            <h3 className="text-lg font-semibold text-teal-900 mb-1">Book a Service</h3>
            <p className="text-sm leading-relaxed">Schedule online instantly</p>
          </Link>
        </div>
      </div>

      <section className="py-16 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-teal-900">Quick Contact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {quickContacts.map((person) => (
            <div key={person.name} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition border border-teal-50">
              <img src={person.image} alt={person.name} className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-teal-100" />
              <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
              <p className="text-gray-600 mb-4">{person.role}</p>
              <a
                href="https://b.broadpress.org/rocketsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0E4541] text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-900 transition"
              >
                WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
