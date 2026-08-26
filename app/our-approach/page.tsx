import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { OurApproachSection } from "@/components/OurApproachSection";

export default function OurApproachPage() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Our Approach", href: "/our-approach" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header component */}
      <Header data={siteData.header} />

      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Our Approach" paths={breadcrumbPaths} />

      {/* Our Approach Content */}
      <div className="flex-grow flex flex-col bg-[#fcfaf8]">
        <OurApproachSection data={siteData.ourApproach} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
