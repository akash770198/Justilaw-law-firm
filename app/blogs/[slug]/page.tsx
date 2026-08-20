import type { Metadata } from "next";
import { notFound } from "next/navigation";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { BlogDetailClient } from "@/app/blogs/[slug]/BlogDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  if (!(siteData as any).blogDetails) return [];
  return Object.keys((siteData as any).blogDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = (siteData as any).blogDetails?.[resolvedParams.slug];
  if (!blog) {
    return {
      title: "Blog Not Found | JUSTILAW Legal Partners",
    };
  }

  return {
    title: blog.metadata?.title || blog.hero.title,
    description: blog.metadata?.description || "Read our latest legal insights.",
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = (siteData as any).blogDetails?.[resolvedParams.slug];

  if (!blog) {
    notFound();
  }

  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Blog Detail", href: "#" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={blog.hero.title || "Blog Detail"}
        paths={breadcrumbPaths}
      />
      
      {/* Client Component for Interactive Sections */}
      <div className="flex-grow flex flex-col bg-white">
        <BlogDetailClient data={blog} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
