import rawSiteData from "@/app/data/siteData.json";

/**
 * Centralized data provider for the application.
 * All components should import siteData from here instead of directly from the JSON file.
 * This makes it easier to swap out the data source (e.g. to a CMS, API, or database) in the future.
 */
const serviceData = rawSiteData.Service.sections;

export const siteData = {
  header: serviceData.Header?.variants?.ServiceHeader1 || {},
  hero: serviceData.Hero?.variants?.ServiceHero1 || {},
  bottomHighlights: serviceData.BottomHighlights?.variants?.ServiceBottomHighlights1 || {},
  aboutUs: serviceData.AboutUs?.variants?.ServiceAboutUs1 || {},
  services: serviceData.Services?.variants?.ServiceServices1 || {},
  practiceAreas: serviceData.PracticeAreas?.variants?.ServicePracticeAreas1 || {},
  whyChooseUs: serviceData.WhyChooseUs?.variants?.ServiceWhyChooseUs1 || {},
  caseStudies: serviceData.CaseStudies?.variants?.ServiceCaseStudies1 || {},
  testimonials: serviceData.Testimonials?.variants?.ServiceTestimonials1 || {},
  team: serviceData.Team?.variants?.ServiceTeam1 || {},
  blog: serviceData.Blog?.variants?.ServiceBlog1 || {},
  workProcess: serviceData.WorkProcess?.variants?.ServiceWorkProcess1 || {},
  ourApproach: serviceData.OurApproach?.variants?.ServiceOurApproach1 || {},
  footer: serviceData.Footer?.variants?.ServiceFooter1 || {},
  serviceDetails: serviceData.ServiceDetails?.variants?.ServiceServiceDetails1 || {},
  ourTeamPage: serviceData.OurTeamPage?.variants?.ServiceOurTeamPage1 || {},
  industriesPage: serviceData.IndustriesPage?.variants?.ServiceIndustriesPage1 || {},
  industryDetails: serviceData.IndustryDetails?.variants?.ServiceIndustryDetails1 || {},
  caseStudiesPage: serviceData.CaseStudiesPage?.variants?.ServiceCaseStudiesPage1 || {},
  caseStudyDetails: serviceData.CaseStudyDetails?.variants?.ServiceCaseStudyDetails1 || {},
  blogsPage: serviceData.BlogsPage?.variants?.ServiceBlogsPage1 || {},
  blogDetails: serviceData.BlogDetails?.variants?.ServiceBlogDetails1 || {},
  legalUpdates: serviceData.LegalUpdates?.variants?.ServiceLegalUpdates1 || {},
  legalUpdateDetail: serviceData.LegalUpdateDetail?.variants?.ServiceLegalUpdateDetail1 || {},
  newsMedia: serviceData.NewsMedia?.variants?.ServiceNewsMedia1 || {},
  eventsPage: serviceData.EventsPage?.variants?.ServiceEventsPage1 || {},
  eventDetail: serviceData.EventDetail?.variants?.ServiceEventDetail1 || {},
  publicationPage: serviceData.PublicationPage?.variants?.ServicePublicationPage1 || {},
  eventDetails: serviceData.EventDetails?.variants?.ServiceEventDetails1 || {},
  publicationDetails: serviceData.PublicationDetails?.variants?.ServicePublicationDetails1 || {},
  awardsRecognitionPage: serviceData.AwardsRecognitionPage?.variants?.ServiceAwardsRecognitionPage1 || {},
  testimonialsPage: serviceData.TestimonialsPage?.variants?.ServiceTestimonialsPage1 || {},
  clientResourcesPage: serviceData.ClientResourcesPage?.variants?.ServiceClientResourcesPage1 || {},
  faqPage: serviceData.FaqPage?.variants?.ServiceFaqPage1 || {},
  careerPage: serviceData.CareerPage?.variants?.ServiceCareerPage1 || {},
  contactPage: serviceData.ContactPage?.variants?.ServiceContactPage1 || {},
  officeLocationPage: serviceData.OfficeLocationPage?.variants?.ServiceOfficeLocationPage1 || {},
  bookConsultationPage: serviceData.BookConsultationPage?.variants?.ServiceBookConsultationPage1 || {},
  termsConditionsPage: serviceData.TermsConditionsPage?.variants?.ServiceTermsConditionsPage1 || {},
  sitemapPage: serviceData.SitemapPage?.variants?.ServiceSitemapPage1 || {}
};

export default siteData;
