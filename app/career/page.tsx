import type { Metadata } from "next";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import CareerClient from "./CareerClient";

export const metadata: Metadata = {
  title: "Careers | JUSTILAW Legal Partners",
  description: "Explore exciting career opportunities and take the next step in your legal journey.",
};

export default function CareerPage() {
  const data = (siteData as any).careerPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Career"
        paths={[
          { name: "HOME", href: "/" },
          { name: "CAREER", href: "/career" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <CareerClient data={data} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
