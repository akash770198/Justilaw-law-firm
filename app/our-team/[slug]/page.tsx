import { notFound } from "next/navigation";
import siteData from "@/data";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbBanner } from "@/components/BreadcrumbBanner";
import { TeamDetailClient } from "@/app/our-team/[slug]/TeamDetailClient";

export function generateStaticParams() {
  const allMembers = siteData.ourTeamPage?.members || [];
  
  return allMembers.map((member) => ({
    slug: member.slug || member.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const allMembers = siteData.ourTeamPage?.members || [];
  
  const member = allMembers.find((m) => (m.slug || m.id) === resolvedParams.slug);

  if (!member) {
    return {
      title: "Team Member Not Found | JUSTILAW",
    };
  }

  return {
    title: `${member.name} | ${member.title} | JUSTILAW Legal Partners`,
    description: member.description,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const allMembers = siteData.ourTeamPage?.members || [];
  
  const member = allMembers.find((m) => (m.slug || m.id) === resolvedParams.slug);

  if (!member) {
    notFound();
  }

  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/our-team" },
    { name: "Team Detail", href: `/our-team/${member.slug || member.id}` }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb */}
      <BreadcrumbBanner title="Team Detail" paths={breadcrumbPaths} />

      {/* Main Detail Content */}
      <div className="flex-grow flex flex-col bg-white">
        <TeamDetailClient member={member as any} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
