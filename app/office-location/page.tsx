import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import OfficeLocationClient from "./OfficeLocationClient";

export const metadata: Metadata = {
  title: "Office Location | JUSTILAW Legal Partners",
  description: "Find our office locations and connect with us.",
};

export default function OfficeLocationPage() {
  const data = (siteData as any).officeLocationPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Office Location"
        paths={[
          { name: "HOME", href: "/" },
          { name: "OFFICE LOCATION", href: "/office-location" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <OfficeLocationClient data={data} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
