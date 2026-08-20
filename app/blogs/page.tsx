import type { Metadata } from "next";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { BlogsClient } from "@/app/blogs/BlogsClient";

export const metadata: Metadata = {
  title: (siteData.blogsPage as any).metadata?.title,
  description: (siteData.blogsPage as any).metadata?.description,
};

export default function BlogsPage() {
  const data = siteData.blogsPage;
  
  if (!data) return null;

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner 
        title={data.header?.title || "Blogs"} 
        paths={data.header?.breadcrumbs?.map((b: any) => ({ name: b.label || b.name, href: b.href })) || [{ name: "Home", href: "/" }, { name: "Blogs", href: "/blogs" }]} 
      />

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-white">
        <BlogsClient data={data} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
