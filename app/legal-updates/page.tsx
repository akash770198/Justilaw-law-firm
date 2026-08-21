import type { Metadata } from "next";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { LegalUpdatesClient } from "./LegalUpdatesClient";

export const metadata: Metadata = {
  title: "Legal Updates | JUSTILAW Legal Partners",
  description: "Stay informed with the latest legal updates, guidelines, and industry news.",
};

export default function LegalUpdatesPage() {
  const data = (siteData as any).legalUpdates;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={data.header?.title || "Legal Updates"} 
        paths={data.header?.breadcrumbs?.map((b: any) => ({ name: b.label || b.name, href: b.href })) || [{ name: "Home", href: "/" }, { name: "Legal Updates", href: "/legal-updates" }]} 
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-[#fdfdfd]">
        <LegalUpdatesClient data={data} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
