import type { Metadata } from "next";
import { notFound } from "next/navigation";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { CareerDetailClient } from "./CareerDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const job = (siteData as any).careerPage?.jobs?.find((j: any) => j.id === id);
  
  if (!job) {
    return { title: "Job Not Found | JUSTILAW Legal Partners" };
  }

  return {
    title: `${job.title} | Careers | JUSTILAW Legal Partners`,
    description: job.overview || "Explore this exciting career opportunity.",
  };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = (siteData as any).careerPage?.jobs?.find((j: any) => j.id === id);
  
  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#fdfdfd]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title="Career Detail"
        paths={[
          { name: "HOME", href: "/" },
          { name: "CAREER", href: "/career" }
        ]}
      />

      {/* Main Content (Client Component) */}
      <CareerDetailClient job={job} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
