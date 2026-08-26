import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { AboutUsSection } from "@/components/AboutUsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

import { WorkProcessSection } from "@/components/WorkProcessSection";
import { OurApproachSection } from "@/components/OurApproachSection";

export default function AboutPage() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header component */}
      <Header data={siteData.header} />

      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="About Us" paths={breadcrumbPaths} />

      {/* About Us Content */}
      <div className="flex-grow flex flex-col">
        <AboutUsSection data={siteData.aboutUs} hideButton={true} />
        <WorkProcessSection data={siteData.workProcess} />
        <WhyChooseUsSection data={siteData.whyChooseUs} hideButton={true} />
        <OurApproachSection data={siteData.ourApproach} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
