"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";

export default function FacadeCleaning() {
  return (
    <ServicePageLayout
      serviceName="Facade Cleaning"
      heroImage="/services/facade-cleaning.jpg"
      heroTitle="Facade Cleaning Services in Nepal"
      heroDescription="Professional exterior building cleaning using pressure washing, window cleaning, and polishing to maintain your property's aesthetics."
      bookLabel="Book Facade Cleaning Service"
      introTitle="Professional Exterior & Pressure Cleaning"
      introParagraphs={[
        "Building facades are exposed to dust, pollution, and weather. RocketSingh offers professional facade cleaning across Nepal using pressure washing and specialized exterior care.",
        "Regular facade maintenance protects building materials, enhances curb appeal, and maintains property value for commercial and residential buildings.",
      ]}
      scopeItems={[
        { title: "Pressure Washing", description: "High-pressure cleaning removes pollution, algae, and grime from building exteriors.", image: "/services/facade-cleaning.jpg", imageAlt: "Pressure Washing" },
        { title: "Window Cleaning", description: "Professional window cleaning for multi-story buildings and commercial properties.", image: "/services/facade-cleaning.jpg", imageAlt: "Window Cleaning" },
        { title: "Exterior Polishing", description: "Restore shine and protect exterior surfaces with professional polishing.", image: "/services/facade-cleaning.jpg", imageAlt: "Exterior Polishing" },
      ]}
      faqs={[
        { id: 1, question: "What is facade cleaning?", answer: "Facade cleaning removes dirt, pollution, algae, and stains from building exteriors using pressure washing, chemical treatments, and manual cleaning methods." },
        { id: 2, question: "Is pressure washing safe for all surfaces?", answer: "Our technicians adjust pressure levels and methods based on surface type — brick, concrete, glass, or metal — to avoid damage." },
        { id: 3, question: "How often should facades be cleaned?", answer: "We recommend annual facade cleaning for most buildings, or more frequently in high-pollution urban areas like Kathmandu." },
        { id: 4, question: "Do you service commercial buildings?", answer: "Yes, we clean office towers, hotels, shopping centers, and residential complexes across Nepal." },
        { id: 5, question: "How can I request a quote?", answer: "Contact RocketSingh with your building details for a customized facade cleaning quote." },
      ]}
    />
  );
}
