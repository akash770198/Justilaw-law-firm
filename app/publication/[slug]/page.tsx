import type { Metadata } from "next";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { PublicationDetailClient } from "./PublicationDetailClient";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Publication Detail | JUSTILAW Legal Partners",
  description: "Read our comprehensive publications and legal insights.",
};

export default async function PublicationDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  // Use the dynamic data mapping based on the URL slug
  const data = (siteData as any).publicationDetails?.[slug];
  
  if (!data) {
    notFound();
  }

  // Generate dynamic breadcrumb path
  const paths = [
    { name: "Home", href: "/" },
    { name: "Publication", href: "/publication" },
    { name: "Publication Detail", href: `/publication/${slug}` }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={data.header?.title || "Publication Detail"} 
        paths={paths} 
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-[#fdfdfd]">
        <PublicationDetailClient data={data} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
