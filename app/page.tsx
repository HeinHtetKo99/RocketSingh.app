'use client';
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full font-sans text-gray-800">

      {/* HERO SECTION */}
      <section className="w-full sm:bg-[url('/home/slider/2.jpg')] bg-cover bg-center bg-no-repeat min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-6">

          <div className="block sm:hidden w-full h-[300px] bg-[url('/home/slider/1.jpg')] bg-center bg-cover"></div>

          <div className="flex flex-col justify-start text-left z-10 w-full sm:w-1/2 mt-4 px-6 sm:mt-0">
            <div className="text-[23px] md:text-2xl font-semibold mb-3 opacity-90">
              Welcome to
            </div>

            <div className="font-bold text-3xl md:text-5xl mb-6">
              Cleaning Sewa
            </div>

            <h1 className="text-[18px] max-w-[600px] leading-relaxed opacity-95">
              Professional cleaning services in Kathmandu, Nepal.
            </h1>

            <div className="mt-8 flex gap-4">
          <Link
              href="/about"
              className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300 cursor-pointer"
            >
              About
            </Link>

          <Link
              href="/book"
              className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300 cursor-pointer"
            >
              Book a Service
            </Link>
        </div>
          </div>
        </div>
      </section>

      {/* LOGO SCROLL */}
      <section className="py-10 bg-gray-50 overflow-hidden">
      <div className="flex gap-12 animate-scroll whitespace-nowrap">
        {Array.from({ length: 14 }, (_, i) => (
          <img
            key={i}
            src={`/partners/${i + 1}.png`}
            alt={`partner ${i + 1}`}
            className="h-12 opacity-70"
          />
        ))}
      </div>
    </section>

      {/* SERVICES */}
      <section className="py-16 max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Top Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Service 1 */}
        <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
          <img
            src="/home/topservices/1.jpg"
            alt="Home Cleaning"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Car Interior Cleaning</h3>
          <p className="text-gray-600">
            Deep & detailed cleaning for luxury & precious vehicles, making every corner spotless.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
          <img
            src="/home/topservices/2.jpg"
            alt="Garden Cleaning"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Garden Cleaning</h3>
          <p className="text-gray-600">
            Professional garden maintenance & deep cleaning services to keep your outdoor spaces beautiful.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
          <img
            src="/home/topservices/3.jpg"
            alt="Kitchen Cleaning"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Kitchen Cleaning</h3>
          <p className="text-gray-600">
            We provide best kitchen cleaning service using international standard chemicals and equipments.
          </p>
        </div>

      </div>
    </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-16">
  
  <div className="max-w-[1000px] mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Happy Stories</h2>

    <div className="grid md:grid-cols-3 gap-6 items-center">

      {/* Testimonial 1 */}
      <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-left">
        <img
          src="/home/testimonials/1.png"
          alt="Customer 1"
          className="w-[100px] h-[100px] rounded-full mb-4 object-cover"
        />
        <p className="text-gray-600 mb-2">
          "Amazing service! The team is punctual, professional, and pays attention to every detail. Highly recommend."
        </p>
        <div className="font-semibold mt-auto">Rajesh Thapa</div>
      </div>

      {/* Testimonial 2 */}
      <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-left">
        <img
          src="/home/testimonials/2.png"
          alt="Customer 2"
          className="w-[100px] h-[100px] rounded-full mb-4 object-cover"
        />
        <p className="text-gray-600 mb-2">
          "Our office has never been cleaner. Consistent, thorough, and friendly staff. Very satisfied!"
        </p>
        <div className="font-semibold mt-auto">Sumnitra Shrestha</div>
      </div>

      {/* Testimonial 3 */}
      <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-left">
        <img
          src="/home/testimonials/3.png"
          alt="Customer 3"
          className="w-[100px] h-[100px] rounded-full mb-4 object-cover"
        />
        <p className="text-gray-600 mb-2">
          "Post-renovation cleanup was perfect. Efficient and detail-oriented team. Definitely recommend!"
        </p>
        <div className="font-semibold mt-auto">Vikas Pandey</div>
      </div>

    </div>
  </div>
</section>

      {/* BLOG SECTION */}
      <section className="py-16 max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Latest Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Blog 1 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
          <img src="/home/blog/1.jpg" alt="AC Cleaning Tips" className="w-full h-48 object-cover"/>
          <div className="p-5">
            <h3 className="font-semibold text-lg mb-2">AC Cleaning Tips</h3>
            <p className="text-gray-600 text-sm">
              Simple tricks to keep your air conditioner clean and efficient.
            </p>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
          <img src="/home/blog/2.jpg" alt="Bathroom Cleaning Tips" className="w-full h-48 object-cover"/>
          <div className="p-5">
            <h3 className="font-semibold text-lg mb-2">Bathroom Cleaning Tips</h3>
            <p className="text-gray-600 text-sm">
              Easy ways to make your floors sparkle and last longer.
            </p>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
          <img src="/home/blog/3.jpg" alt="Garden Cleaning Tips" className="w-full h-48 object-cover"/>
          <div className="p-5">
            <h3 className="font-semibold text-lg mb-2">Garden Cleaning Tips</h3>
            <p className="text-gray-600 text-sm">
              Tips for keeping your garden clean and well-maintained.
            </p>
          </div>
        </div>

      </div>
    </section>

      {/* SCROLL ANIMATION STYLE */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
};

export default Home;