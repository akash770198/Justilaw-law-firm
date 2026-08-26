import originalSiteData from "@/data/siteData.json";

// ── Root Schema Types ──
export type RawSiteData = typeof originalSiteData;
export type ServiceSchema = typeof originalSiteData.Service;
export type ServiceSections = ServiceSchema["sections"];
export type ServiceTemplateComponents = ServiceSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type ServiceHeaderData = ServiceSections["Header"]["variants"]["ServiceHeader1"];
export type ServiceHeroData = ServiceSections["Hero"]["variants"]["ServiceHero1"];
export type ServiceBottomHighlightsData = ServiceSections["BottomHighlights"]["variants"]["ServiceBottomHighlights1"];
export type ServiceAboutUsData = ServiceSections["AboutUs"]["variants"]["ServiceAboutUs1"];
export type ServiceServicesData = ServiceSections["Services"]["variants"]["ServiceServices1"];
export type ServicePracticeAreasData = ServiceSections["PracticeAreas"]["variants"]["ServicePracticeAreas1"];
export type ServiceWhyChooseUsData = ServiceSections["WhyChooseUs"]["variants"]["ServiceWhyChooseUs1"];
export type ServiceCaseStudiesData = ServiceSections["CaseStudies"]["variants"]["ServiceCaseStudies1"];
export type ServiceTestimonialsData = ServiceSections["Testimonials"]["variants"]["ServiceTestimonials1"];
export type ServiceTeamData = ServiceSections["Team"]["variants"]["ServiceTeam1"];
export type ServiceBlogData = ServiceSections["Blog"]["variants"]["ServiceBlog1"];
export type ServiceWorkProcessData = ServiceSections["WorkProcess"]["variants"]["ServiceWorkProcess1"];
export type ServiceOurApproachData = ServiceSections["OurApproach"]["variants"]["ServiceOurApproach1"];
export type ServiceFooterData = ServiceSections["Footer"]["variants"]["ServiceFooter1"];
export type ServiceServiceDetailsData = ServiceSections["ServiceDetails"]["variants"]["ServiceServiceDetails1"];
export type ServiceOurTeamPageData = ServiceSections["OurTeamPage"]["variants"]["ServiceOurTeamPage1"];
export type ServiceIndustriesPageData = ServiceSections["IndustriesPage"]["variants"]["ServiceIndustriesPage1"];
export type ServiceIndustryDetailsData = ServiceSections["IndustryDetails"]["variants"]["ServiceIndustryDetails1"];
export type ServiceCaseStudiesPageData = ServiceSections["CaseStudiesPage"]["variants"]["ServiceCaseStudiesPage1"];
export type ServiceCaseStudyDetailsData = ServiceSections["CaseStudyDetails"]["variants"]["ServiceCaseStudyDetails1"];
export type ServiceBlogsPageData = ServiceSections["BlogsPage"]["variants"]["ServiceBlogsPage1"];
export type ServiceBlogDetailsData = ServiceSections["BlogDetails"]["variants"]["ServiceBlogDetails1"];
export type ServiceLegalUpdatesData = ServiceSections["LegalUpdates"]["variants"]["ServiceLegalUpdates1"];
export type ServiceLegalUpdateDetailData = ServiceSections["LegalUpdateDetail"]["variants"]["ServiceLegalUpdateDetail1"];
export type ServiceNewsMediaData = ServiceSections["NewsMedia"]["variants"]["ServiceNewsMedia1"];
export type ServiceEventsPageData = ServiceSections["EventsPage"]["variants"]["ServiceEventsPage1"];
export type ServiceEventDetailData = ServiceSections["EventDetail"]["variants"]["ServiceEventDetail1"];
export type ServicePublicationPageData = ServiceSections["PublicationPage"]["variants"]["ServicePublicationPage1"];
export type ServiceEventDetailsData = ServiceSections["EventDetails"]["variants"]["ServiceEventDetails1"];
export type ServicePublicationDetailsData = ServiceSections["PublicationDetails"]["variants"]["ServicePublicationDetails1"];
export type ServiceAwardsRecognitionPageData = ServiceSections["AwardsRecognitionPage"]["variants"]["ServiceAwardsRecognitionPage1"];
export type ServiceTestimonialsPageData = ServiceSections["TestimonialsPage"]["variants"]["ServiceTestimonialsPage1"];
export type ServiceClientResourcesPageData = ServiceSections["ClientResourcesPage"]["variants"]["ServiceClientResourcesPage1"];
export type ServiceFaqPageData = ServiceSections["FaqPage"]["variants"]["ServiceFaqPage1"];
export type ServiceCareerPageData = ServiceSections["CareerPage"]["variants"]["ServiceCareerPage1"];
export type ServiceContactPageData = ServiceSections["ContactPage"]["variants"]["ServiceContactPage1"];
export type ServiceOfficeLocationPageData = ServiceSections["OfficeLocationPage"]["variants"]["ServiceOfficeLocationPage1"];
export type ServiceBookConsultationPageData = ServiceSections["BookConsultationPage"]["variants"]["ServiceBookConsultationPage1"];
export type ServiceTermsConditionsPageData = ServiceSections["TermsConditionsPage"]["variants"]["ServiceTermsConditionsPage1"];
export type ServiceSitemapPageData = ServiceSections["SitemapPage"]["variants"]["ServiceSitemapPage1"];

// ── Legacy Site Map for Standalone Site ──
const sec = originalSiteData.Service.sections;

const legacySiteMap = {
  header: sec.Header.variants.ServiceHeader1,
  hero: sec.Hero.variants.ServiceHero1,
  bottomHighlights: sec.BottomHighlights.variants.ServiceBottomHighlights1,
  aboutUs: sec.AboutUs.variants.ServiceAboutUs1,
  services: sec.Services.variants.ServiceServices1,
  practiceAreas: sec.PracticeAreas.variants.ServicePracticeAreas1,
  whyChooseUs: sec.WhyChooseUs.variants.ServiceWhyChooseUs1,
  caseStudies: sec.CaseStudies.variants.ServiceCaseStudies1,
  testimonials: sec.Testimonials.variants.ServiceTestimonials1,
  team: sec.Team.variants.ServiceTeam1,
  blog: sec.Blog.variants.ServiceBlog1,
  workProcess: sec.WorkProcess.variants.ServiceWorkProcess1,
  ourApproach: sec.OurApproach.variants.ServiceOurApproach1,
  footer: sec.Footer.variants.ServiceFooter1,
  serviceDetails: sec.ServiceDetails.variants.ServiceServiceDetails1,
  ourTeamPage: sec.OurTeamPage.variants.ServiceOurTeamPage1,
  industriesPage: sec.IndustriesPage.variants.ServiceIndustriesPage1,
  industryDetails: sec.IndustryDetails.variants.ServiceIndustryDetails1,
  caseStudiesPage: sec.CaseStudiesPage.variants.ServiceCaseStudiesPage1,
  caseStudyDetails: sec.CaseStudyDetails.variants.ServiceCaseStudyDetails1,
  blogsPage: sec.BlogsPage.variants.ServiceBlogsPage1,
  blogDetails: sec.BlogDetails.variants.ServiceBlogDetails1,
  legalUpdates: sec.LegalUpdates.variants.ServiceLegalUpdates1,
  legalUpdateDetail: sec.LegalUpdateDetail.variants.ServiceLegalUpdateDetail1,
  newsMedia: sec.NewsMedia.variants.ServiceNewsMedia1,
  eventsPage: sec.EventsPage.variants.ServiceEventsPage1,
  eventDetail: sec.EventDetail.variants.ServiceEventDetail1,
  publicationPage: sec.PublicationPage.variants.ServicePublicationPage1,
  eventDetails: sec.EventDetails.variants.ServiceEventDetails1,
  publicationDetails: sec.PublicationDetails.variants.ServicePublicationDetails1,
  awardsRecognitionPage: sec.AwardsRecognitionPage.variants.ServiceAwardsRecognitionPage1,
  testimonialsPage: sec.TestimonialsPage.variants.ServiceTestimonialsPage1,
  clientResourcesPage: sec.ClientResourcesPage.variants.ServiceClientResourcesPage1,
  faqPage: sec.FaqPage.variants.ServiceFaqPage1,
  careerPage: sec.CareerPage.variants.ServiceCareerPage1,
  contactPage: sec.ContactPage.variants.ServiceContactPage1,
  officeLocationPage: sec.OfficeLocationPage.variants.ServiceOfficeLocationPage1,
  bookConsultationPage: sec.BookConsultationPage.variants.ServiceBookConsultationPage1,
  termsConditionsPage: sec.TermsConditionsPage.variants.ServiceTermsConditionsPage1,
  sitemapPage: sec.SitemapPage.variants.ServiceSitemapPage1,
  Service: originalSiteData.Service
};

export type SiteData = typeof legacySiteMap;
// We export both site and siteData to keep backward compatibility with files already using siteData 
// while migrating to site
export const site = legacySiteMap;
export const siteData = legacySiteMap;
export default site;
