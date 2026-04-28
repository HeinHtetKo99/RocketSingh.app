"use client";

import Image from "next/image";
import React from "react";
import GoogleMap from "../../components/GoogleMap";
import MapEmbed from "../../components/GoogleMap";

export default function Contact() {
  const quickContacts = [
    {
      name: "Ramesh Koirala",
      role: "Director",
      phone: "+9779852024365",
      image: "/contact/1.png",
    },
    {
      name: "Sanjana Lama",
      role: "Operations Manager",
      phone: "+9779852024365",
      image: "/contact/2.png",
    },
    {
      name: "Sudeep Basnet",
      role: "Customer Support Lead",
      phone: "+9779852024365",
      image: "/contact/3.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#0E4541] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Cleaning Sewa</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Get in touch with Cleaning Sewa for inquiries, bookings, or support.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Visit Our Office</h2>
        <img
        src="/contact/remwork.jpg" // your image path
        alt="Location Map"
        className="w-full h-[450px] object-cover rounded-xl"
      />
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Quick Contact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {quickContacts.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-0 border-blue-700"
              />
              <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
              <p className="text-gray-600 mb-4">{person.role}</p>
              <a
                  href="https://b.broadpress.org/cleaningsewa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0E4541] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition"
                >
                WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 bg-gray-100 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Details</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-700">Pashupati Marg, Kamalpokhari, Kathmandu, Nepal</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+977 9811 52774</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-700">cleaningsewa@sriyog.com</p>
          </div>
        </div>
      </section>

      

      {/* Map Placeholder */}
      {/* Map Section */}
      <section className="mt-16 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
          <MapEmbed />
        </div>
      </section>

      {/* Footer */}
      
    </main>
  );
}