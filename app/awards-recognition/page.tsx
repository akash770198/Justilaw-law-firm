// Force TS cache clear
import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { AwardsClientComponent } from "./AwardsClient";

export const metadata: Metadata = {
  title: (siteData as any).awardsRecognitionPage?.metadata?.title || "Awards Recognition",
  description: (siteData as any).awardsRecognitionPage?.metadata?.description,
};

export default function AwardsRecognitionPage() {
  const data = (siteData as any).awardsRecognitionPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Awards Recognition"
        paths={[
          { name: "HOME", href: "/" },
          { name: "AWARDS RECOGNITION", href: "/awards-recognition" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <AwardsClientComponent data={data} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
