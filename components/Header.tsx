'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkIcon, setDarkIcon] = useState(true);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkIcon(false);
    } else {
      document.body.classList.remove("dark");
      setDarkIcon(true);
    }
  }, []);

  // Toggle dark/light mode
  const triggerTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.setItem("Theme", "light");
      setDarkIcon(true);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("Theme", "dark");
      setDarkIcon(false);
    }
  };

  return (
    <header className="header">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-4 px-3 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src="/logo/cleaning-sewa-logo-wordmark.svg"
              alt="Cleaning Sewa Logo"
              width={200}
              height={60}
              className="w-[190px] sm:w-[220px] h-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-0 sm:space-x-4">
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-[16px] hover:text-teal-700">Home</Link>
            <Link href="/about" className="text-[16px] hover:text-teal-700">About</Link>
            <Link href="/services" className="text-[16px] hover:text-teal-700">Services</Link>
            <Link href="/projects" className="text-[16px] hover:text-teal-700">Projects</Link>
            <Link href="/contact" className="text-[16px] hover:text-teal-700">Contact</Link>

            <Link href="/career">
              <button className="border cursor-pointer text-[16px] border-teal-900 hover:text-black rounded px-4 py-1 hover:bg-teal-50">
                Career
              </button>
            </Link>

            <Link href="/book">
              <button className="bg-teal-900 cursor-pointer text-[16px] border border-teal-900 text-white px-4 py-1 rounded hover:bg-teal-800">
                Book Now
              </button>
            </Link>
          </div>

          

          {/* Dark Mode Toggle */}
          <div className="hidden sm:block">
            <button
              onClick={triggerTheme}
              className={`text-2xl cursor-pointer ml-2 rounded-full h-8 w-8 flex items-center justify-center ${
                darkIcon ? "bg-black text-white rotate-45" : "bg-white text-black"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkIcon ? "☽" : "☀︎"}
            </button>
          </div>

          {/* Mobile Drawer */}
          <MobileDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Header;