import type { Metadata } from "next";
import { notFound } from "next/navigation";
import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BreadcrumbBanner } from "@/app/components/BreadcrumbBanner";
import { BlogDetailClient } from "@/app/blogs/[slug]/BlogDetailClient";
import { PageProps } from "@/lib/types";

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

  // Deep clone to avoid mutating shared siteData
  const blogData = JSON.parse(JSON.stringify(blog));

  // Compute dynamic recent news (2 other blogs)
  const allSlugs = Object.keys((siteData as any).blogDetails || {});
  const otherSlugs = allSlugs.filter(s => s !== resolvedParams.slug).slice(0, 2);
  
  if (blogData.sidebar) {
    const defaultImages = [
      "/Blogs/latest-news-1-clean-no-tags.svg",
      "/Blogs/latest-news-2-clean-no-tags.svg"
    ];
    blogData.sidebar.recentNews = otherSlugs.map((s, idx) => {
      const b = (siteData as any).blogDetails[s];
      return {
        title: b.hero.title,
        date: b.hero.date,
        image: b.hero.mainImage || defaultImages[idx % defaultImages.length],
        link: `/blogs/${s}`
      };
    });
  }

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
        <BlogDetailClient data={blogData} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
