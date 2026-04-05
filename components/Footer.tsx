"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      
      <footer className="relative footer pt-16 pb-10 border-t z-10">

        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[45%]">
            <div className="mb-6">
              <Link
                href="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img
                  src="/logo/cleaning-sewa-logo-wordmark.svg"
                  alt="Cleaning Sewa Logo"
                  className="w-[300px] h-auto"
                />
              </Link>
            </div>

            <p className="text-[15px] leading-relaxed mb-4">
              Cleaning Sewa is a leading professional cleaning company in Kathmandu, Nepal, offering top-quality, reliable, and affordable cleaning services for homes, offices, and commercial spaces. 
            </p>

            <p className="text-[15px] leading-relaxed">
              Our mission is to empower households and businesses with reliable,
              efficient, and eco-friendly cleaning services that ensure a spotless,
              healthy environment while saving time and effort.
            </p>
          </div>

          {/* RIGHT COLUMNS */}
          <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 pt-6">
            {/* Browse More */}
            <div>
              <h3 className="font-semibold mb-3 text-[16px]">Browse More</h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
                <li className="py-1 cursor-pointer">
                  <Link href="/vmgo" className="hover:text-green-700">Vision & Mission</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/history" className="hover:text-green-700">History</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/why" className="hover:text-green-700">Why Us</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/timeline" className="hover:text-green-700">Timeline</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-3 text-[16px]">Resources</h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
                <li className="py-1 cursor-pointer">
                  <Link href="/gallery" className="hover:text-green-700">Gallery</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/qr" className="hover:text-green-700">QR</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/glossary" className="hover:text-green-700">Glossary</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/message" className="hover:text-green-700">Message</Link>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-3 text-[16px]">Links</h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
                <li className="py-1 cursor-pointer">
                  <Link href="/calendar" className="hover:text-green-700">Calendar</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/faq" className="hover:text-green-700">FAQ</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/testimonials" className="hover:text-green-700">Testimonials</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/video" className="hover:text-green-700">Video</Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-semibold mb-3 text-[16px]">Explore</h3>
              <ul className="space-y-2 text-[15px] leading-[1.6] pl-0">
                <li className="py-1 cursor-pointer">
                  <Link href="/refund" className="hover:text-green-700">Refund Policy</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/partnership" className="hover:text-green-700">Partnership</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/blog" className="hover:text-green-700">Blog</Link>
                </li>
                <li className="py-1 cursor-pointer">
                  <Link href="/team" className="hover:text-green-700">Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SOCIAL + CONTACT SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-8 mt-10">

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 justify-center">
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src={`/icons/x.svg`} className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="https://biratinfo.com/author/cleaningsewa" target="_blank" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src={`/icons/biratinfo.svg`} className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src={`/icons/youtube.svg`} className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src={`/icons/trello.svg`} className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src={`/icons/discord.svg`} className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            </a>
            <a href="#" className="flex items-center hover:opacity-60 transition hover:scale-110">
              <img src={`/icons/viber.svg`} className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] cursor-pointer" />
            </a>
          </div>

          {/* CONTACT BOXES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <a href="mailto:cleaningsewa@sriyog.com" className="flex items-center gap-2 border-2 rounded-lg px-7 py-3 w-full sm:w-auto">
              <img src="/icons/email.svg" alt="email" className="h-6 w-6" />
              <span className="text-sm">cleaningsewa@sriyog.com</span>
            </a>

            <a href="tel:+9779851152774" className="flex items-center gap-2 border-2 rounded-lg px-7 py-3 w-full sm:w-auto">
              <img src="/icons/phone.svg" alt="phone" className="h-6 w-6" />
              <span className="text-sm">+977-98511 52774</span>
            </a>

            <a href="https://wa.me/9779851152774" target="_blank" className="flex items-center gap-2 border-2 rounded-lg px-6 py-3 w-full sm:w-auto">
              <img src="/icons/whatsapp.svg" alt="whatsapp" className="h-6 w-6" />
              <span className="text-sm">+977 98511 52774</span>
            </a>
          </div>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="w-full border-t mt-14 mb-6"></div>

        {/* FOOTER BOTTOM */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-12 flex flex-col lg:flex-row justify-center items-center lg:justify-between text-[13px] gap-3 text-center md:text-left font-semibold">
          <p className="flex flex-col md:flex-row gap-4 md:gap-1 items-center">
            <span>All Rights Reserved. © 2018-{currentYear}</span>
            <span>Cleaning Sewa</span>
            <span>Built With : <a href="https://broadpress.org" target="_blank" className="hover:border-b hover:border-black text-gray-500">BroadPress</a></span>
          </p>

          <div className="flex gap-4 justify-center md:justify-end font-semibold mt-2 lg:mt-0">
            <Link href="/privacy" className="cursor-pointer">Privacy Policy</Link>
            <span>|</span>
            <Link href="/disclaimer" className="cursor-pointer">Disclaimer</Link>
            <span>|</span>
            <Link href="/tos" className="cursor-pointer">Terms of Service</Link>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;