import siteData from "@/data";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BottomHighlights } from "@/components/BottomHighlights";
import { AboutUsSection } from "@/components/AboutUsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { TeamSection } from "@/components/TeamSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0a1422]">
      {/* Header component with topbar and main navbar */}
      <Header data={siteData.header} />

      {/* Hero section */}
      <HeroSection data={siteData.hero} />

      {/* Bottom Highlights Strip */}
      <BottomHighlights data={siteData.bottomHighlights} />

      {/* About Us Section */}
      <AboutUsSection data={siteData.aboutUs} />

      {/* Services Section */}
      <ServicesSection data={{
        ...siteData.services,
        cards: siteData.practiceAreas.areas.slice(0, 4).map((area: any) => ({
          id: area.id,
          icon: area.icon,
          title: area.title,
          description: area.description,
          linkText: "Learn More",
          linkHref: area.link
        }))
      }} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection data={siteData.whyChooseUs} />

      {/* Case Study Section */}
      <CaseStudySection data={siteData.caseStudies} />

      {/* Testimonial Section */}
      <TestimonialSection data={siteData.testimonials} />
      
      {/* Team Section */}
      <TeamSection data={siteData.team} members={siteData.ourTeamPage.members.slice(0, 4)} />

      {/* Blog Section */}
      <BlogSection data={{
        ...siteData.blog,
        items: siteData.blogsPage.items.slice(0, 3)
      }} />

      {/* Footer */}
      <Footer data={siteData.footer} />
    </main>
  );
}
