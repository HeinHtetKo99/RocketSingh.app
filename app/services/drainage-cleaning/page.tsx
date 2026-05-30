"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";

export default function DrainageCleaning() {
  return (
    <ServicePageLayout
      serviceName="Drainage Cleaning"
      heroImage="/services/drainage-cleaning.jpg"
      heroTitle="Drainage & Gutter Cleaning Services in India"
      heroDescription="Professional drain unclogging, gutter cleaning, and water flow maintenance to prevent blockages, odors, and water damage."
      bookLabel="Book Drainage Cleaning Service"
      introTitle="Drainage, Gutter & Pipe Cleaning"
      introParagraphs={[
        "Clogged drains and gutters pose health and property risks. RocketSingh provides professional drainage cleaning including unclogging, gutter clearing, and preventive maintenance.",
        "Regular gutter and drain maintenance prevents water damage, roof issues, and unpleasant odors — especially important during India's monsoon season.",
      ]}
      scopeItems={[
        { title: "Drain Unclogging", description: "Clear blockages in kitchen, bathroom, and main drainage lines efficiently.", image: "/services/drainage-cleaning.jpg", imageAlt: "Drain Unclogging" },
        { title: "Gutter Cleaning", description: "Remove leaves and debris from roof gutters to prevent overflow and damage.", image: "/services/drainage-cleaning.jpg", imageAlt: "Gutter Cleaning" },
        { title: "Preventive Maintenance", description: "Scheduled inspections and cleaning to keep drainage systems flowing smoothly.", image: "/services/drainage-cleaning.jpg", imageAlt: "Preventive Maintenance" },
      ]}
      faqs={[
        { id: 1, question: "Why is gutter cleaning important?", answer: "Clogged gutters cause water overflow, roof damage, and foundation issues. Regular cleaning prevents costly repairs." },
        { id: 2, question: "How often should gutters be cleaned?", answer: "We recommend gutter cleaning twice a year — before and after monsoon season — or more frequently if surrounded by trees." },
        { id: 3, question: "Do you handle emergency drain blockages?", answer: "Yes, same-day drainage services may be available for urgent blockages in Chennai and nearby areas." },
        { id: 4, question: "What areas do you serve?", answer: "We provide drainage and gutter cleaning across Chennai, Bengaluru, Hyderabad, and select regions in India." },
        { id: 5, question: "How can I book drainage cleaning?", answer: "Book online or call RocketSingh to schedule drain or gutter cleaning at your property." },
      ]}
    />
  );
}
