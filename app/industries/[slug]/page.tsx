import { notFound } from "next/navigation";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { IndustryDetailClient } from "@/app/industries/[slug]/IndustryDetailClient";

export async function generateStaticParams() {
  const items = siteData.industriesPage?.industries?.items || [];
  return items.map((item: any) => {
    // Extract slug from link like "/industries/corporate" -> "corporate"
    const parts = item.link.split('/').filter(Boolean);
    return { slug: parts[parts.length - 1] };
  });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // @ts-ignore
  const industryData = siteData.industryDetails?.[resolvedParams.slug];

  if (!industryData || !industryData.title) {
    notFound();
  }

  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Industry", href: "/industries" },
    { name: industryData.title, href: `/industries/${resolvedParams.slug}` }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      <Header data={siteData.header} />
      
      <BreadcrumbBanner title="Industry Detail" paths={breadcrumbPaths} />

      <div className="flex-grow flex flex-col bg-white">
        <IndustryDetailClient data={industryData} />
      </div>

      <Footer data={siteData.footer} />
    </main>
  );
}
