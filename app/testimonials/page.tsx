// Force TS cache clear to prevent red line bug
import type { Metadata } from "next";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { TestimonialsClientComponent } from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Testimonials | JUSTILAW Legal Partners",
  description: "Read real stories from our clients who have experienced our commitment, dedication, and results.",
};

export default function TestimonialsPage() {
  const data = { 
    ...(siteData as any).testimonialsPage, 
    items: (siteData as any).testimonials.items 
  };
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Testimonials"
        paths={[
          { name: "HOME", href: "/" },
          { name: "TESTIMONIALS", href: "/testimonials" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <TestimonialsClientComponent data={data} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
