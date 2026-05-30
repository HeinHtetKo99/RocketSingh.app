"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";

export default function HomeCleaning() {
  return (
    <ServicePageLayout
      serviceName="Home Cleaning"
      heroImage="/services/home-cleaning.jpg"
      heroTitle="Home Cleaning Services in Nepal"
      heroDescription="Professional home cleaning for apartments and houses. Deep cleaning, carpet cleaning, AC cleaning, and sofa cleaning to ensure a spotless and hygienic home."
      bookLabel="Book Home Cleaning Service"
      introTitle="Comprehensive Home Cleaning Services"
      introParagraphs={[
        "Our home cleaning services in Nepal ensure every corner of your house is spotless. We use trained professionals, modern equipment, and eco-friendly products for deep cleaning, carpet cleaning, sofa cleaning, AC cleaning, and post-construction cleanup.",
        "Deep cleaning eliminates hidden grime, germs, and stubborn stains in hard-to-reach areas — recommended every 3 to 6 months depending on usage and lifestyle.",
      ]}
      scopeItems={[
        { title: "Deep Home Cleaning", description: "Complete residential cleaning including floors, bathrooms, kitchen, and living areas.", image: "/services/home-cleaning/1.jpg", imageAlt: "Deep Home Cleaning" },
        { title: "Carpet & Sofa Cleaning", description: "Remove dust, stains, and allergens from carpets and sofas for a fresh home.", image: "/services/home-cleaning/2.jpg", imageAlt: "Carpet & Sofa Cleaning" },
        { title: "Bedroom Cleaning", description: "Thorough dusting, sanitization, and organization of bedrooms and living spaces.", image: "/services/home-cleaning/3.jpg", imageAlt: "Bedroom Cleaning" },
      ]}
      faqs={[
        { id: 1, question: "What does the home cleaning service include?", answer: "Our home cleaning includes deep cleaning of floors, bathrooms, kitchen, living areas, carpet cleaning, sofa cleaning, and AC cleaning. We ensure a hygienic and spotless home." },
        { id: 2, question: "How is deep cleaning different from regular cleaning?", answer: "Regular cleaning maintains surfaces, while deep cleaning eliminates hidden grime, germs, and stubborn stains in hard-to-reach areas for a more thorough clean." },
        { id: 3, question: "Do you provide eco-friendly cleaning products?", answer: "Yes, we use eco-friendly and safe cleaning products that are safe for children, pets, and the environment." },
        { id: 4, question: "How often should I book deep cleaning in Nepal?", answer: "We recommend deep cleaning every 3 to 6 months, depending on usage, lifestyle, and property type." },
        { id: 5, question: "How can I schedule a home cleaning service?", answer: "You can easily schedule a cleaning by clicking the Book button on our website or contacting RocketSingh directly." },
      ]}
    />
  );
}
