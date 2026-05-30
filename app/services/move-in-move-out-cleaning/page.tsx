"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";

export default function MoveInMoveOutCleaning() {
  return (
    <ServicePageLayout
      serviceName="Move-In / Move-Out Cleaning"
      heroImage="/services/move-in-move-out-cleaning.jpg"
      heroTitle="Move-In & Move-Out Cleaning Services in Nepal"
      heroDescription="Spotless move-in and move-out cleaning across Nepal. Deep sanitization, debris removal, and every corner cleaned for a seamless relocation."
      bookLabel="Book Move-In / Move-Out Cleaning"
      introTitle="Stress-Free Relocation Cleaning"
      introParagraphs={[
        "Moving can be stressful. RocketSingh ensures every corner of your property is spotless with comprehensive move-in and move-out cleaning services.",
        "We handle deep cleaning, bathroom and kitchen sanitization, floor care, and debris removal so you can focus on your move.",
      ]}
      scopeItems={[
        { title: "Move-Out Cleaning", description: "Leave your previous property in excellent condition for landlords and new tenants.", image: "/services/move-in-move-out-cleaning.jpg", imageAlt: "Move-Out Cleaning" },
        { title: "Move-In Cleaning", description: "Start fresh in your new home with fully sanitized rooms and fixtures.", image: "/services/home-cleaning/1.jpg", imageAlt: "Move-In Cleaning" },
        { title: "Post-Renovation Ready", description: "Remove construction dust and debris for a safe, comfortable new space.", image: "/services/post-construction-cleaning.jpg", imageAlt: "Post-Renovation Cleaning" },
      ]}
      faqs={[
        { id: 1, question: "What does move-in/move-out cleaning include?", answer: "Complete cleaning of all rooms, kitchens, bathrooms, floors, windows, closets, and appliances with sanitization throughout." },
        { id: 2, question: "How far in advance should I book?", answer: "We recommend booking at least 2–3 days in advance, though same-day service may be available depending on schedule." },
        { id: 3, question: "Do you provide cleaning for rental properties?", answer: "Yes, we specialize in move-out cleaning for rental properties to help tenants meet landlord requirements." },
        { id: 4, question: "Are eco-friendly products used?", answer: "Yes, all our move cleaning services use safe, eco-friendly products suitable for families and pets." },
        { id: 5, question: "How can I get a quote?", answer: "Contact RocketSingh with your property size and location for a detailed quote, or book directly online." },
      ]}
    />
  );
}
