import { notFound } from "next/navigation";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { CaseStudyDetailClient } from "@/app/case-studies/[slug]/CaseStudyDetailClient";

export async function generateStaticParams() {
  const details = (siteData as any).caseStudyDetails || {};
  return Object.keys(details).map((slug) => ({ slug }));
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // @ts-ignore
  const caseStudyData = siteData.caseStudyDetails?.[resolvedParams.slug] || siteData.caseStudyDetails?.['avoiding-property-theft'];

  if (!caseStudyData || !caseStudyData.title) {
    notFound();
  }

  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Case Study", href: "/case-studies" },
    { name: caseStudyData.title, href: `/case-studies/${resolvedParams.slug}` }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Case Study Detail" paths={breadcrumbPaths} />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col bg-white">
        <CaseStudyDetailClient data={caseStudyData} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
