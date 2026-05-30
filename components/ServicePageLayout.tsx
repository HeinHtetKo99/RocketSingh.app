"use client";

import Link from "next/link";
import React, { useState } from "react";

export type ServiceFaq = {
  id: number;
  question: string;
  answer: string;
};

export type ServiceScopeItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type ServicePageLayoutProps = {
  serviceName: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  bookLabel: string;
  introTitle: string;
  introParagraphs: string[];
  scopeTitle?: string;
  scopeItems?: ServiceScopeItem[];
  faqs: ServiceFaq[];
};

export default function ServicePageLayout({
  serviceName,
  heroImage,
  heroTitle,
  heroDescription,
  bookLabel,
  introTitle,
  introParagraphs,
  scopeTitle = "Scope of Works",
  scopeItems = [],
  faqs,
}: ServicePageLayoutProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-0 mb-40">
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src={heroImage}
          alt={heroTitle}
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-white opacity-90">
              Home &gt; Services &gt; <span className="font-semibold">{serviceName}</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">{heroTitle}</h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              {heroDescription}
            </p>
            <Link href="/book">
              <button className="bg-[#0E4541] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition">
                {bookLabel}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto px-5 py-10 max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-teal-900 mb-5">{introTitle}</h2>
        {introParagraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>

      {scopeItems.length > 0 && (
        <div className="mx-auto px-5 py-10 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-teal-900 mb-10">{scopeTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {scopeItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

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
                <div className="p-5 text-gray-700 border-t border-gray-200">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
