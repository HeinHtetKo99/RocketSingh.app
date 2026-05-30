"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const DogCleaning = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does the dog cleaning service include?",
      answer:
        "Our dog cleaning service includes full grooming, bathing, nail trimming, ear cleaning, and brushing to keep your dog clean, healthy, and happy.",
    },
    {
      id: 2,
      question: "How often should my dog be cleaned?",
      answer:
        "We recommend regular grooming every 4-6 weeks for most dogs, but frequency depends on the breed, coat type, and lifestyle.",
    },
    {
      id: 3,
      question: "Do you use pet-friendly products?",
      answer:
        "Yes, we use safe, non-toxic, and eco-friendly products that are gentle on your dog’s skin and coat.",
    },
    {
      id: 4,
      question: "Can you groom all dog breeds and sizes?",
      answer:
        "Absolutely! We provide professional cleaning and grooming for dogs of all breeds and sizes, from small to large dogs.",
    },
    {
      id: 5,
      question: "How can I schedule a dog cleaning service?",
      answer:
        "You can schedule a dog cleaning by clicking the 'Book Dog Cleaning' button on our website. Our team will contact you to confirm your booking.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Dog Cleaning Services in India</title>
        <meta
          name="description"
          content="Professional dog cleaning and grooming services in India including bathing, nail trimming, ear cleaning, brushing, and full grooming for dogs of all breeds."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/dog-cleaning.jpg"
          alt="Dog Cleaning Services in India"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb */}
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">Dog Cleaning</span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Dog Cleaning Services in India
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Professional dog cleaning and grooming services for all breeds and sizes. We ensure your dog is clean, healthy, and happy.
            </p>
            
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                Book Dog Cleaning
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">
          Dog Cleaning Services in Chennai
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our dog cleaning services in India cover bathing, brushing, nail trimming, ear cleaning, and full grooming. We use trained professionals, modern equipment, and pet-friendly products for a safe and hygienic grooming experience.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          We provide reliable grooming services to keep your dog healthy, clean, and happy.
        </p>
      </div>

      <div className="mx-auto px-5 py-10 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">
          Scope of Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/dog-cleaning/1.jpg"
              alt="Nail and Paw Care"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Nail and Paw Care
            </h3>
            <p className="text-gray-600">
              Thorough cleaning and trimming to remove dirt, dust, and allergens from your pet’s paws and nails.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/dog-cleaning/2.jpg"
              alt="Ear and Eye Cleaning"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Ear and Eye Cleaning
            </h3>
            <p className="text-gray-600">
              Gentle cleaning of ears and eyes to remove wax, debris, and prevent infections.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-5 text-center">
            <img
              src="/services/dog-cleaning/3.jpg"
              alt="Parasite Control"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Parasite Control
            </h3>
            <p className="text-gray-600">
              Eliminate bacteria, fleas, ticks, and allergens from your pet’s body.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-[70%] mx-auto flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-bold text-teal-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 py-4 text-left text-gray-800 font-semibold hover:bg-gray-50 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-gray-500">{openFAQ === faq.id ? "–" : "+"}</span>
              </button>
              {openFAQ === faq.id && (
                <div className="p-5 text-gray-700 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogCleaning;