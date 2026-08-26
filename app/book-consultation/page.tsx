import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import BookConsultationClient from "./BookConsultationClient";

export const metadata: Metadata = {
  title: "Book Consultation | JUSTILAW Legal Partners",
  description: "Schedule a one-on-one consultation with our legal experts.",
};

export default function BookConsultationPage() {
  const data = (siteData as any).bookConsultationPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Book Consultation"
        paths={[
          { name: "HOME", href: "/" },
          { name: "BOOK CONSULTATION", href: "/book-consultation" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <BookConsultationClient data={data} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
