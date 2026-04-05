"use client";

import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#0E4541] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Cleaning Services in Nepal
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Providing professional, eco-friendly, and reliable home cleaning services across Nepal.
        </p>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
        <p className="text-gray-700 mb-4">
          Cleaning Sewa is a trusted cleaning service provider dedicated to making homes and offices spotless, hygienic, and welcoming. Our team of trained professionals uses modern equipment and eco-friendly products to deliver the highest standard of cleaning services.
        </p>
        <p className="text-gray-700 mb-4">
          From deep home cleaning to carpet and sofa care, AC cleaning, and post-construction cleanup, we ensure every corner of your space is maintained with care and precision.
        </p>
      </section>

      {/* Mission / Values */}
      <section className="py-16 px-6 bg-gray-100 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-gray-700 mb-4 text-center">
          To provide top-quality, reliable, and eco-friendly cleaning solutions that make homes and offices cleaner, safer, and healthier for everyone.
        </p>
        <p className="text-gray-700 text-center">
          ✔ Professional & Trained Staff &nbsp; | &nbsp; ✔ Eco-Friendly Products &nbsp; | &nbsp; ✔ 100% Customer Satisfaction
        </p>
      </section>

      {/* Message from Director */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Message from the Director</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src="/about/director.png"
            alt="Director"
            className="w-40 h-40 rounded-full object-cover border-0 border-blue-700"
          />
          <div className="flex-1">
            <p className="text-gray-700 mb-4">
              "At Cleaning Sewa, our vision is to create cleaner, healthier living and working spaces for every client. Our team is committed to excellence, and we continually invest in training and modern equipment to ensure you receive the best service possible. Your satisfaction is our top priority."
            </p>
            <p className="font-semibold text-gray-800">– Ramesh Koirala, Director</p>
          </div>

          <div className="flex gap-3 mt-2">
                  {/* <img src="/icons/x.svg" className="w-5 h-5 cursor-pointer hover:opacity-75" /> */}
                  <a 
                  href="https://www.linkedin.com/in/koiralaramesh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/icons/linkedin.svg" 
                    className="w-5 h-5 cursor-pointer hover:opacity-75" 
                    alt="LinkedIn Profile"
                  />
                </a>
                </div>
                
        </div>
      </section>
    </main>
  );
}