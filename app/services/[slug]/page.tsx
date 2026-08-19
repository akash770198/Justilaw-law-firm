import { notFound } from "next/navigation";
import siteData from "../../data";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BreadcrumbBanner } from "../../components/BreadcrumbBanner";
import { ServiceDetailClient } from "../../components/ServiceDetailClient";

export async function generateStaticParams() {
  return [
    { slug: "corporate" },
    { slug: "criminal" },
    { slug: "family" },
    { slug: "real-estate" },
    { slug: "employment" },
    { slug: "healthcare" },
    { slug: "ecommerce" }
  ];
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // @ts-ignore
  const serviceData = siteData.serviceDetails[resolvedParams.slug];

  if (!serviceData) {
    notFound();
  }

  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: serviceData.title, href: `/services/${resolvedParams.slug}` }
  ];

  const allServices = siteData.practiceAreas.areas.map(area => ({
    title: area.title,
    link: area.link
  }));

  const contactInfo = {
    phone: siteData.header.topBar.phone,
    email: siteData.header.topBar.email,
    location: "123 Justice Way, Suite 100\nNew York, NY 10001"
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      <Header data={siteData.header} />
      
      <BreadcrumbBanner title={serviceData.title} paths={breadcrumbPaths} />

      <div className="flex-grow flex flex-col bg-white">
        <ServiceDetailClient 
          slug={resolvedParams.slug}
          data={serviceData}
          allServices={allServices}
          contactInfo={contactInfo}
        />
      </div>

      <Footer data={siteData.footer} />
    </main>
  );
}
