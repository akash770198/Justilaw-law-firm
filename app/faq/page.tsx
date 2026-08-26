import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { FaqClient } from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | JUSTILAW Legal Partners",
  description: "Find clear and helpful answers to common legal questions.",
};

export default function FaqPage() {
  const data = (siteData as any).faqPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Frequently Asked Questions"
        paths={[
          { name: "HOME", href: "/" },
          { name: "FAQ", href: "/faq" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <FaqClient data={data} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
