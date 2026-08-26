// Force TS update
import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { NewsMediaClient } from "./NewsMediaClient";

export const metadata: Metadata = {
  title: "News Media | JUSTILAW Legal Partners",
  description: "Stay updated with the latest news, media coverage, and press releases about JUSTILAW.",
};

export default function NewsMediaPage() {
  const data = (siteData as any).newsMedia;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={data.header?.title || "News Media"} 
        paths={data.header?.breadcrumbs?.map((b: any) => ({ name: b.label || b.name, href: b.href })) || [{ name: "Home", href: "/" }, { name: "News Media", href: "/news-media" }]} 
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-[#fdfdfd]">
        <NewsMediaClient data={data} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
