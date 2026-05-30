"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";

export default function CorporateHouseCleaning() {
  return (
    <ServicePageLayout
      serviceName="Corporate House Cleaning"
      heroImage="/services/corporate-house-cleaning.jpg"
      heroTitle="Corporate & Monthly Cleaning Services in Nepal"
      heroDescription="Regular office cleaning, common area sanitization, and monthly deep cleaning packages for businesses across Nepal."
      bookLabel="Book Corporate Cleaning Service"
      introTitle="Professional Corporate Cleaning Plans"
      introParagraphs={[
        "Maintaining clean corporate spaces is vital for productivity and professionalism. RocketSingh offers flexible cleaning plans for offices, co-working spaces, and commercial buildings.",
        "Choose weekly, bi-weekly, or monthly maintenance contracts tailored to your workspace size and hygiene requirements.",
      ]}
      scopeItems={[
        { title: "Daily Office Cleaning", description: "Desk sanitization, floor maintenance, restroom cleaning, and trash removal.", image: "/services/corporate-house-cleaning.jpg", imageAlt: "Office Cleaning" },
        { title: "Monthly Deep Cleaning", description: "Comprehensive deep cleaning of carpets, windows, ducts, and hard-to-reach areas.", image: "/services/monthly-cleaning.jpg", imageAlt: "Deep Cleaning" },
        { title: "Custom Contracts", description: "Flexible packages for businesses of all sizes across Kathmandu and Nepal.", image: "/services/corporate-house-cleaning.jpg", imageAlt: "Custom Contracts" },
      ]}
      faqs={[
        { id: 1, question: "What corporate cleaning plans are available?", answer: "We offer daily, weekly, bi-weekly, and monthly cleaning packages including deep cleaning add-ons for offices and commercial spaces." },
        { id: 2, question: "Can I customize a maintenance contract?", answer: "Yes, we tailor contracts based on office size, number of employees, and specific cleaning requirements." },
        { id: 3, question: "Do you clean after business hours?", answer: "Yes, we can schedule cleaning before or after business hours to minimize disruption to your operations." },
        { id: 4, question: "Are your staff trained and verified?", answer: "All cleaning personnel undergo professional training and background verification before joining RocketSingh." },
        { id: 5, question: "How do I get a corporate quote?", answer: "Contact RocketSingh with your office details for a customized corporate cleaning proposal." },
      ]}
    />
  );
}
