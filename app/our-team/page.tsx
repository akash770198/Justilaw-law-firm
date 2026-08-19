import siteData from "../data";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BreadcrumbBanner } from "../components/BreadcrumbBanner";
import { TeamSection } from "../components/TeamSection";

export const metadata = {
  title: "Our Team | JUSTILAW Legal Partners",
  description: "Meet our dedicated attorneys bringing a wealth of knowledge and experience to every case.",
};

export default function OurTeamPage() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/our-team" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header component with topbar and main navbar */}
      <Header data={siteData.header} />
      
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Our Team" paths={breadcrumbPaths} />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col bg-white">
        {/* We use the existing TeamSection but with the dedicated 8-member data block and hiding the view all button */}
        <TeamSection data={siteData.ourTeamPage} hideButton={true} />
      </div>

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
