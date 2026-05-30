'use client';

import React, { useEffect, useState } from 'react';

const BacktoTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!scrolled) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="back-to-top-btn rounded-full scale-[0.8] cursor-pointer hover:scale-[0.9] active:scale-[0.75] transition-all duration-200 touch-manipulation"
    >
      <img
        src="/icons/next-arrow.svg"
        alt=""
        aria-hidden="true"
        className="h-12 w-12 -rotate-90 pointer-events-none"
      />
    </button>
  );
};

export default BacktoTop;
