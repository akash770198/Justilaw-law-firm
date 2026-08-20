import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { OurApproachSection } from "@/app/components/OurApproachSection";

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
