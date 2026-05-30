"use client";

import ServicePageLayout from "../../../components/ServicePageLayout";

export default function GardenCleaning() {
  return (
    <ServicePageLayout
      serviceName="Garden Cleaning"
      heroImage="/services/garden-cleaning.jpg"
      heroTitle="Garden Cleaning Services in Nepal"
      heroDescription="Professional garden maintenance including trimming, leaf removal, pathway cleaning, and outdoor space sanitization across Nepal."
      bookLabel="Book Garden Cleaning Service"
      introTitle="Expert Garden & Outdoor Cleaning"
      introParagraphs={[
        "A well-maintained garden enhances your home's appeal. RocketSingh offers expert garden cleaning including lawn care, hedge trimming, leaf removal, and pathway sanitization.",
        "We serve residential gardens, apartment green spaces, and commercial landscapes with the same professional care and eco-friendly approach.",
      ]}
      scopeItems={[
        { title: "Lawn & Hedge Care", description: "Mowing, trimming, and maintaining lawns and hedges for a neat appearance.", image: "/services/garden-cleaning.jpg", imageAlt: "Lawn Care" },
        { title: "Leaf & Debris Removal", description: "Clear fallen leaves, branches, and garden waste from all outdoor areas.", image: "/services/garden-cleaning.jpg", imageAlt: "Debris Removal" },
        { title: "Pathway Cleaning", description: "Sweep and sanitize garden paths, patios, and outdoor seating areas.", image: "/services/garden-cleaning.jpg", imageAlt: "Pathway Cleaning" },
      ]}
      faqs={[
        { id: 1, question: "What does garden cleaning include?", answer: "Lawn mowing, hedge trimming, leaf removal, weed control, flowerbed maintenance, and general outdoor tidying." },
        { id: 2, question: "Do you use eco-friendly products?", answer: "Yes, we use eco-friendly fertilizers and safe cleaning products to protect plants, pets, and the environment." },
        { id: 3, question: "Can I schedule recurring garden maintenance?", answer: "We offer weekly, bi-weekly, or monthly garden cleaning packages to keep your outdoor spaces pristine year-round." },
        { id: 4, question: "Do you handle commercial gardens?", answer: "Absolutely. We service private gardens, apartment complexes, hotels, and commercial landscapes across Nepal." },
        { id: 5, question: "How can I book garden cleaning?", answer: "Book online or contact RocketSingh. Our team will confirm your appointment promptly." },
      ]}
    />
  );
}
