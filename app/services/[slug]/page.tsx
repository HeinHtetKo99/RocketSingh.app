import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageLayout from "../../../components/ServicePageLayout";
import { getAllServiceDetailSlugs, getServiceDetail } from "../../data/serviceDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) {
    return {
      title: "Service Not Found | RocketSingh",
      description: "The requested service page could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const imageUrl = service.image || "/og/default.png";
  const pageTitle = `${service.title} | RocketSingh`;
  const pageDescription = service.heroDescription;
  const pageUrl = `/services/${slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      type: "website",
      siteName: "RocketSingh",
      images: [
        {
          url: imageUrl,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  return (
    <ServicePageLayout
      serviceName={service.title}
      heroImage={service.image}
      heroTitle={service.heroTitle}
      heroDescription={service.heroDescription}
      bookLabel={service.bookLabel}
      introTitle={service.introTitle}
      introParagraphs={service.introParagraphs}
      scopeTitle={service.scopeTitle}
      scopeItems={service.scopeItems}
      faqs={service.faqs}
    />
  );
}
