import type { Metadata } from "next";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { CaseStudiesClient } from "@/app/case-studies/CaseStudiesClient";

export const metadata: Metadata = {
  title: (siteData.caseStudiesPage as any).metadata?.title,
  description: (siteData.caseStudiesPage as any).metadata?.description,
};

export default function CaseStudiesPage() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Case Study", href: "/case-studies" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Case Studies" paths={breadcrumbPaths} />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-white">
        <CaseStudiesClient data={siteData.caseStudiesPage as any} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
