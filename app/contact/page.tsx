import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | JUSTILAW Legal Partners",
  description: "Get in touch with JUSTILAW Legal Partners. Our team is ready to help.",
};

export default function ContactPage() {
  const data = (siteData as any).contactPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Contact Us"
        paths={[
          { name: "HOME", href: "/" },
          { name: "CONTACT", href: "/contact" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <ContactClient data={data} offices={(siteData as any).officeLocationPage.offices} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
