import type { Metadata } from "next";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { EventDetailClient } from "./EventDetailClient";
import React from "react";

export const metadata: Metadata = {
  title: "Event Details | JUSTILAW Legal Partners",
  description: "View the details of our upcoming events.",
};

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  // Use the dynamic data mapping based on the URL slug
  const data = (siteData as any).eventDetails?.[slug] || (siteData as any).eventDetail;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={data.header?.title || "Events Detail"} 
        paths={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events" },
          { name: "Event Detail", href: `/events/${slug}` }
        ]}
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-[#fdfdfd]">
        <EventDetailClient data={data} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
