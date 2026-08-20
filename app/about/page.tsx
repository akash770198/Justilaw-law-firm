import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { AboutUsSection } from "@/app/components/AboutUsSection";
import { WhyChooseUsSection } from "@/app/components/WhyChooseUsSection";

import { WorkProcessSection } from "@/app/components/WorkProcessSection";
import { OurApproachSection } from "@/app/components/OurApproachSection";

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
        <AboutUsSection data={siteData.aboutUs} />
        <WorkProcessSection data={siteData.workProcess} />
        <WhyChooseUsSection data={siteData.whyChooseUs} />
        <OurApproachSection data={siteData.ourApproach} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
