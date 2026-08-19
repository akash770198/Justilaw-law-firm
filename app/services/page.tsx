import siteData from "../data";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BreadcrumbBanner } from "../components/BreadcrumbBanner";
import { PracticeAreasSection } from "../components/PracticeAreasSection";

export default function ServicesPage() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header component */}
      <Header data={siteData.header} />

      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Our Services" paths={breadcrumbPaths} />

      {/* Services Content */}
      <div className="flex-grow flex flex-col bg-white">
        <PracticeAreasSection data={siteData.practiceAreas} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
