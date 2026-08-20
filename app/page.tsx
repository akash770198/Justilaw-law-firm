import siteData from "@/app/data";
import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { BottomHighlights } from "@/app/components/BottomHighlights";
import { AboutUsSection } from "@/app/components/AboutUsSection";
import { WhyChooseUsSection } from "@/app/components/WhyChooseUsSection";
import { ServicesSection } from "@/app/components/ServicesSection";
import { CaseStudySection } from "@/app/components/CaseStudySection";
import { TestimonialSection } from "@/app/components/TestimonialSection";
import { TeamSection } from "@/app/components/TeamSection";
import { BlogSection } from "@/app/components/BlogSection";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header component with topbar and main navbar */}
      <Header data={siteData.header} />

      {/* Hero section */}
      <HeroSection data={siteData.hero} />

      {/* Bottom Highlights Strip */}
      <BottomHighlights items={siteData.bottomHighlights} />

      {/* About Us Section */}
      <AboutUsSection data={siteData.aboutUs} />

      {/* Services Section */}
      <ServicesSection data={siteData.services} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection data={siteData.whyChooseUs} />

      {/* Case Study Section */}
      <CaseStudySection data={siteData.caseStudies} />

      {/* Testimonial Section */}
      <TestimonialSection data={siteData.testimonials} />
      
      {/* Team Section */}
      <TeamSection data={{
        ...siteData.team,
        members: siteData.ourTeamPage.members.slice(0, 4)
      }} />

      {/* Blog Section */}
      <BlogSection data={siteData.blog} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
