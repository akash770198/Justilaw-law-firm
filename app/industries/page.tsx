import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { IndustriesClient } from "@/app/industries/IndustriesClient";

export const metadata: Metadata = {
  title: (siteData.industriesPage as any).metadata?.title,
  description: (siteData.industriesPage as any).metadata?.description,
};

export default function IndustriesPage() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb */}
      <BreadcrumbBanner title="Industries" paths={breadcrumbPaths} />

      {/* Main Detail Content */}
      <div className="flex-grow flex flex-col bg-white">
        <IndustriesClient data={siteData.industriesPage as any} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
