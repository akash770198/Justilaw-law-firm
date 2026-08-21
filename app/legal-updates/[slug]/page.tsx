import type { Metadata } from "next";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { LegalUpdateDetailClient } from "./LegalUpdateDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Legal Update | JUSTILAW Legal Partners`,
  };
}

export default async function LegalUpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = (siteData as any).legalUpdateDetail;

  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={data.header?.title || "Legal Updates Details"} 
        paths={data.header?.breadcrumbs?.map((b: any) => ({ name: b.label || b.name, href: b.href })) || [{ name: "Home", href: "/" }, { name: "Legal Updates", href: "/legal-updates" }]} 
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-[#fdfdfd]">
        <LegalUpdateDetailClient data={data} slug={resolvedParams.slug} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
