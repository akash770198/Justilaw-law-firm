import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { WorkProcessSection } from "@/components/WorkProcessSection";

export default function WhyChooseUsPage() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Why Choose Us", href: "/why-choose-us" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header component */}
      <Header data={siteData.header} />

      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Why Choose Us" paths={breadcrumbPaths} />

      {/* Why Choose Us Content (To be added later) */}
      <div className="flex-grow flex flex-col">
        <WhyChooseUsSection data={siteData.whyChooseUs} hideButton={true} />
        <WorkProcessSection data={siteData.workProcess} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
