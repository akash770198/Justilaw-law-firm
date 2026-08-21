import type { Metadata } from "next";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events | JUSTILAW Legal Partners",
  description: "Join us for our upcoming events, webinars and seminars.",
};

export default function EventsPage() {
  const data = (siteData as any).eventsPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={data.header?.title || "Events"} 
        paths={data.header?.breadcrumbs?.map((b: any) => ({ name: b.label || b.name, href: b.href })) || [{ name: "Home", href: "/" }, { name: "Events", href: "/events" }]} 
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-[#fdfdfd]">
        <EventsClient data={data} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
