"use client";

import ServiceCard from "../../components/ServiceCard";
import { serviceCategories } from "../data/servicesCatalog";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-white text-gray-800 pb-24">
      <section className="bg-[#0E4541] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Complete professional on demand service provider.. across Chennai, India.
        </p>
      </section>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {serviceCategories.map((category) => (
          <section key={category.title} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-teal-900">{category.title}</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  image={service.image}
                  title={service.title}
                  desc={service.desc}
                  href={`/services/${service.slug}`}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
