"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Wrench,
  BookOpen,
  CircleHelp,
  Handshake,
} from "lucide-react";

const logo = "/logo/rocketsingh-logo.png";

const mobileNavItems = [
  { label: "Home", href: "/", Icon: Home },
  { label: "Services", href: "/services", Icon: Wrench },
  { label: "Book", href: "/book", Icon: BookOpen },
  { label: "FAQ", href: "/faq", Icon: CircleHelp },
  { label: "Partner", href: "/partnership", Icon: Handshake },
];

const browseMoreLinks = [
  { name: "Vision & Mission", href: "/vmgo" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/tos" },
  { name: "Disclaimer", href: "/disclaimer" },
];

const serviceLinks = [
  { name: "Home Cleaning", href: "/services/home-cleaning" },
  { name: "Kitchen Cleaning", href: "/services/kitchen-cleaning" },
  { name: "Bathroom Cleaning", href: "/services/bathroom-cleaning" },
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { name: "AC Cleaning", href: "/services/ac-cleaning" },
  { name: "Disinfection / Sanitization", href: "/services/disinfection-sanitization-services" },
  { name: "Corporate House Cleaning", href: "/services/corporate-house-cleaning" },
  { name: "Move-In / Move-Out Cleaning", href: "/services/move-in-move-out-cleaning" },
];

const socialLinks = [
  { icon: "/icons/x.svg", href: "#", label: "X" },
  { icon: "/icons/biratinfo.svg", href: "https://biratinfo.com/author/cleaningsewa", label: "BiratInfo" },
  { icon: "/icons/youtube.svg", href: "#", label: "YouTube" },
  { icon: "/icons/trello.svg", href: "#", label: "Trello" },
  { icon: "/icons/discord.svg", href: "#", label: "Discord" },
];

const Footer = () => {
  const pathname = usePathname();
  const newsletterRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const container = newsletterRef.current;
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js";
    script.dataset.buttonColor = "#064706";
    script.dataset.buttonTextColor = "#FFFFFF";
    script.dataset.site = "https://biratinfo.com/";
    script.dataset.locale = "en";
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <footer className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-900 text-gray-200 pt-16 pb-24 md:pb-12">
      {/* MOBILE FLOATING NAV */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-3xl border border-emerald-200/60 bg-white px-3 py-2 shadow-2xl shadow-black/10 md:hidden">
        <div className="grid grid-cols-5 gap-1">
          {mobileNavItems.map(({ label, href, Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-center text-[10px] font-medium transition ${
                  isActive
                    ? "bg-emerald-100 text-emerald-900 shadow-sm"
                    : "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                }`}
              >
                <Icon size={20} className="mb-1 text-emerald-600" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr] md:grid-cols-2 grid-cols-1 gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-2 rounded-md shadow-sm">
              <img src={logo} alt="RocketSingh Logo" className="h-12 w-auto" />
            </div>
          </div>

          <div className="text-[15px] leading-relaxed text-gray-300 max-w-lg space-y-4 mb-6">
            <p>
              RocketSingh is the Indian version of TACKLES PRO — a growing platform built with a vision
              to deliver fast, reliable, and professional on-demand cleaning services across India.
            </p>
            <p>
              Powered by skilled and trained professionals, RocketSingh provides SuperFast Services 24 hours
              a day, 365 days a year. From emergency support to daily maintenance, we connect customers
              with trusted experts anytime, anywhere.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 shadow-sm transition-all duration-300 hover:scale-110"
              >
                <img src={icon} alt={label} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-10">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Browse More</h4>
            <ul className="space-y-2">
              {browseMoreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-sm px-2 py-1 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="block text-sm px-2 py-1 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div ref={newsletterRef} className="col-span-2 mt-4 w-full" />
        </div>
      </div>

      <div className="border-t border-emerald-800 mt-12 mb-6 mx-6 opacity-60" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 text-center sm:text-left">
        <p className="leading-relaxed">
          © 2018 - {currentYear} RocketSingh. All Rights Reserved.
        </p>

        <p className="mt-2 sm:mt-0 leading-relaxed">
          Built with :{" "}
          <a
            href="https://broadpress.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold tracking-wide hover:underline"
          >
            BroadPress
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
