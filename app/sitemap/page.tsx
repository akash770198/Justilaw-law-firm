import type { Metadata } from "next";
import siteData from "@/app/data/siteData.json";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "Sitemap | JUSTILAW Legal Partners",
  description: "Explore all pages on the JUSTILAW Legal Partners website.",
};

export default function SitemapPage() {
  const data = (siteData as any).sitemapPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Sitemap"
        paths={[
          { name: "HOME", href: "/" },
          { name: "SITEMAP", href: "/sitemap" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <SitemapClient data={data} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
