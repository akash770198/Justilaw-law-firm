// Force TS cache clear to prevent red line bug
import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { ClientResourcesClient } from "./ClientResourcesClient";

export const metadata: Metadata = {
  title: "Client Resources | JUSTILAW Legal Partners",
  description: "Practical insights, tools, and updates to help you navigate legal matters with confidence.",
};

export default function ClientResourcesPage() {
  const data = (siteData as any).clientResourcesPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Client Resources"
        paths={[
          { name: "HOME", href: "/" },
          { name: "CLIENT RESOURCES", href: "/client-resources" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <ClientResourcesClient data={data} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
