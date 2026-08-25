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

  const clonedData = JSON.parse(JSON.stringify(data));
  const allUpdates = (siteData as any).legalUpdates?.items || [];
  
  if (clonedData.sidebar && clonedData.sidebar.relatedPosts && Array.isArray(allUpdates)) {
    const otherUpdates = allUpdates.filter((u: any) => u.slug !== resolvedParams.slug).slice(0, 3);
    if (otherUpdates.length > 0) {
      clonedData.sidebar.relatedPosts.items = otherUpdates.map((u: any) => ({
        title: u.title,
        date: u.date,
        image: u.image || "/Case_study/case-study-gavel-high-quality.svg",
        href: `/legal-updates/${u.slug}`
      }));
    }
  }

  let breadcrumbPaths = clonedData.header?.breadcrumbs?.map((b: any) => ({ name: b.label || b.name, href: b.href }));
  if (!breadcrumbPaths || breadcrumbPaths.length === 0) {
    breadcrumbPaths = [
      { name: "Home", href: "/" },
      { name: "Legal Updates", href: "/legal-updates" }
    ];
  }
  // Ensure the current page is included in the breadcrumb
  if (breadcrumbPaths[breadcrumbPaths.length - 1].name !== "Legal Update Details") {
    breadcrumbPaths.push({ name: "Legal Update Details", href: "#" });
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={clonedData.header?.title || "Legal Updates Details"} 
        paths={breadcrumbPaths} 
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-[#fdfdfd]">
        <LegalUpdateDetailClient data={clonedData} slug={resolvedParams.slug} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
