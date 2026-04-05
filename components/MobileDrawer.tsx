'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type MobileDrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type SocialIconProps = {
  href: string;
  label: string;
  icon: string;
};

type NavItemProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

// Social Icon
const SocialIcon: React.FC<SocialIconProps> = ({ href, label, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    aria-label={label}
  >
    <img src={icon} alt={label} className="w-5 h-5" />
  </a>
);

// Nav Item
const NavItem: React.FC<NavItemProps> = ({ to, label, onClick }) => (
  <Link
    href={to}
    onClick={onClick}
    className="group flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-300/10"
  >
    <span className="font-medium">{label}</span>
    <span className="flex-1"></span>
    <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
      →
    </span>
  </Link>
);

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Single resize handler (fixed)
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);

      if (!mobile) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  // ✅ Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const toggleDrawer = () => {
    setIsOpen(prev => !prev);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  if (!isMobile) return null;

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/feedback', label: 'Feedback' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/', label: 'Facebook', path: '/icons/facebook.svg' },
    { href: 'https://www.youtube.com/', label: 'YouTube', path: '/icons/youtube.svg' },
    { href: 'https://www.x.com/', label: 'X', path: '/icons/x.svg' },
    { href: 'https://www.linkedin.com/company/', label: 'LinkedIn', path: '/icons/linkedin.svg' }
  ];

  return (
    <>
      {/* HAMBURGER */}
      <div className="relative w-full">
        <button
          onClick={toggleDrawer}
          className="lg:hidden block z-50 p-2 rounded cursor-pointer"
          style={{ background: 'var(--header)', color: 'var(--text)' }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <img src="/icons/hamburger.svg" alt="Menu" className="w-10 h-10" />
          )}
        </button>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeDrawer}
        />
      )}

      {/* DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 overflow-y-auto h-full bg-white">

          {/* Header */}
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300/20">
            <Link href="/" onClick={closeDrawer}>
              <img
                src="/logo/cleaning-sewa-logo-wordmark.svg"
                alt="Cleaning Sewa Logo"
                className="w-58 h-auto"
              />
            </Link>

            <button
              onClick={closeDrawer}
              className="text-2xl p-1"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Nav */}
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={closeDrawer}
              />
            ))}

            {/* Buttons */}
            <div className="pt-4 space-y-2">
              <Link
                href="/career"
                onClick={closeDrawer}
                className="block w-full text-center border rounded-lg px-6 py-2.5 hover:bg-gray-300/10 transition"
                style={{ borderColor: 'var(--text)', color: 'var(--text)' }}
              >
                Career
              </Link>

              <Link
                href="/book"
                onClick={closeDrawer}
                className="block w-full text-center bg-teal-900 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition"
              >
                Book Now
              </Link>
            </div>

            {/* Social */}
            <div className="mt-4 pt-3 border-t border-gray-300/20">
              <p className="text-xs font-medium text-gray-500 mb-3 text-center">
                Connect With Us
              </p>

              <div className="flex justify-center gap-3">
                {socialLinks.map((social) => (
                  <SocialIcon
                    key={social.label}
                    href={social.href}
                    label={social.label}
                    icon={social.path}
                  />
                ))}
              </div>
            </div>

          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;