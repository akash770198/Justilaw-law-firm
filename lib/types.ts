export interface CaseStudyItem {
    id: string;
    src: string;
    alt: string;
    location: string;
    title: string;
    link?: string;
}

export interface CaseStudiesPageData {
    tagline: string;
    taglineIcon: string;
    headingDark: string;
    headingGold: string;
    items: CaseStudyItem[];
}

export interface AboutFeature {
    id: string;
    number?: number;
    suffix?: string;
    text: string;
    icon: string;
}

export interface AboutData {
    sectionTitle: string;
    headingBlack: string;
    headingGold: string;
    paragraph1: string;
    paragraph2: string;
    features: AboutFeature[];
    button: {
        text: string;
        href: string;
        icon: string;
        };
    image: {
        src: string;
        alt: string;
        };
    experienceBadge: {
        number: number;
        suffix: string;
        label: string;
        icon: string;
        };
}

export interface Author {
    name: string;
    role: string;
    avatar: string;
}

export interface BlogItem {
    id: string;
    image: { src: string; alt: string };
    category: string;
    categoryIcon: string;
    date: string;
    dateIcon: string;
    title: string;
    description: string;
    author: Author;
    link: string;
}

export interface BlogData {
    tagline: string;
    taglineIcon: string;
    headingDark: string;
    headingGold: string;
    headingIcon: string;
    description: string;
    items: BlogItem[];
    button: {
        text: string;
        href: string;
        icon: string;
        };
}

export interface BottomHighlight {
    id: string;
    icon: string;
    title: string;
}

export interface BreadcrumbPath {
    name: string;
    href: string;
}

export interface BreadcrumbBannerProps {
    title: string;
    paths: BreadcrumbPath[];
}

export interface CaseStudyData {
    tagline: string;
    taglineIcon: string;
    headingDark: string;
    headingGold: string;
    items: CaseStudyItem[];
}

export interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    className?: string;
}

export interface FooterLink {
    name: string;
    href: string;
}

export interface FooterSocial {
    name: string;
    url: string;
    icon: string;
}

export interface FooterData {
    logo: {
        src: string;
        name: string;
        subtitle: string;
        };
    description: string;
    leftImage: {
        src: string;
        alt: string;
        };
    services: FooterLink[];
    quickLinks: FooterLink[];
    resources: FooterLink[];
    contact: {
        address: string;
        phone: string;
        email: string;
        hours: string;
        };
    newsletter: {
        title: string;
        description: string;
        placeholder: string;
        };
    copyright: string;
    centerText: {
        title: string;
        subtitle: string;
        };
    socials: FooterSocial[];
}

export interface TopBarData {
    phone: string;
    phoneHref: string;
    workingHours: string;
    email: string;
    emailHref: string;
    socials: Array<{
        name: string;
        url: string;
        icon: string;
        }>;
}

export interface NavLink {
    name: string;
    href: string;
    active?: boolean;
    dropdown?: Array<{
        name: string;
        href: string;
        }>;
}

export interface HeaderData {
    topBar: TopBarData;
    navbar: {
        logo: {
          name: string;
          subtitle: string;
          imageSrc?: string;
          icon?: string;
          href: string;
        };
        navLinks: NavLink[];
        careersButton: {
          text: string;
          href: string;
          icon: string;
        };
        quickCall: {
          label: string;
          phone: string;
          phoneHref: string;
          icon: string;
        };
        };
}

export interface HeroData {
    tagline: string;
    taglineIcon: string;
    titlePrefix: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    features: Array<{
        id: string;
        icon: string;
        title: string;
        }>;
    buttons: {
        primary: {
          text: string;
          href: string;
          icon: string;
        };
        secondary: {
          text: string;
          href: string;
          icon: string;
        };
        };
    stats: Array<{
        id: string;
        value: string;
        label: string;
        icon: string;
        }>;
    bannerImage: {
        src: string;
        alt: string;
        };
}

export interface Step {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Banner {
    icon: string;
    textDark: string;
    textGold: string;
    description: string;
    image: string;
}

export interface OurApproachData {
    sectionIcon: string;
    sectionTitle: string;
    headingDark: string;
    headingGold: string;
    description: string;
    steps: Step[];
    banner: Banner;
}

export interface OurApproachSectionProps {
    data: OurApproachData;
}

export interface PracticeArea {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: {
        src: string;
        alt: string;
        };
    link: string;
}

export interface PracticeAreasData {
    sectionTitle: string;
    sectionIcon: string;
    headingDark: string;
    headingGold: string;
    description: string;
    areas: PracticeArea[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ServiceDetail {
    title: string;
    description: string;
    heroImage: string;
    feature: {
        icon: string;
        title: string;
        description: string;
        };
    whyChooseUs: {
        title: string;
        cards: { icon: string; title: string; description: string }[];
        };
    benefits: {
        title: string;
        description: string;
        image: string;
        list: string[];
        };
    faqs: FAQ[];
}

export interface Props {
    slug: string;
    data: ServiceDetail;
    allServices: { title: string; link: string }[];
    contactInfo: { phone: string; email: string; location: string };
}

export interface ServiceCard {
    id: string;
    icon: string;
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
}

export interface ServicesData {
    sectionTitle: string;
    sectionIcon: string;
    headingWhite: string;
    headingGold: string;
    description: string;
    cards: ServiceCard[];
    viewAllButton: {
        text: string;
        href: string;
        icon: string;
        };
}

export interface TeamMember {
    id: string;
    slug?: string;
    name: string;
    title: string;
    description: string;
    image: { src: string; alt: string };
}

export interface TeamData {
    tagline: string;
    headingDark: string;
    headingGold: string;
    description: string;
    members: TeamMember[];
    button: {
        text: string;
        href: string;
        icon: string;
        };
}

export interface TestimonialItem {
    id: string;
    quote: string;
    name: string;
    title?: string;
    role?: string;
    image: { src: string; alt: string } | string;
    rating: number;
    category?: string;
}

export interface TestimonialData {
    tagline: string;
    taglineIcon: string;
    headingDark: string;
    headingGold: string;
    headingDarkSuffix?: string;
    description: string;
    items: TestimonialItem[];
}

export interface Feature {
    id: string;
    icon: string;
    title: string;
    desc: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface WhyChooseUsData {
    tagline: string;
    taglineIcon: string;
    headingDark: string;
    headingGold: string;
    description: string;
    features: Feature[];
    stats: Stat[];
    avatars: {
        images: string[];
        label: string;
        countBadge: string;
        };
    button: {
        text: string;
        href: string;
        icon: string;
        };
    images: {
        left: { src: string; alt: string };
        right: { src: string; alt: string };
        };
}

export interface WorkProcessData {
    sectionIcon: string;
    sectionTitle: string;
    headingDark: string;
    headingGold: string;
    steps: Step[];
}

export interface WorkProcessSectionProps {
    data: WorkProcessData;
}

export interface EventItem {
    id: string;
    image: string;
    type: string;
    dateBadge: {
        day: string;
        month: string;
        year: string;
        };
    title: string;
    dateTime: string;
    location: string;
    slug: string;
}

export interface EventsData {
    sectionTitle: string;
    heading: string;
    description: string;
    items: EventItem[];
}

export interface IndustryItem {
    icon: string;
    title: string;
    description: string;
    link: string;
}

export interface IndustriesData {
    hero: {
        subtitle: string;
        titleDark: string;
        titleGold: string;
        description: string;
        image: string;
        };
    industries: {
        title: string;
        description: string;
        items: IndustryItem[];
        };
    cta: {
        icon: string;
        title: string;
        description: string;
        button: {
          text: string;
          href: string;
        };
        };
}

export interface LegalUpdateItem {
    id: string;
    image: string;
    category: string;
    title: string;
    date: string;
    author: string;
    readTime: string;
    description: string;
    slug: string;
}

export interface LegalUpdatesData {
    filters: string[];
    items: LegalUpdateItem[];
}

export interface NewsMediaItem {
    id: string;
    logo: string;
    title: string;
    date: string;
    slug: string;
}

export interface NewsMediaData {
    items: NewsMediaItem[];
}

export interface PublicationItem {
    id: string;
    image: string;
    icon: string;
    category: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    slug: string;
}

export interface PublicationData {
    heading: string;
    description: string;
    items: PublicationItem[];
    totalResults: number;
}

export interface PageProps {
    params: Promise<{
        slug: string;
        }>;
}

export interface CaseStudyDetailData {
    slug: string;
    title: string;
    tagline: string;
    taglineIcon: string;
    image: string;
    heroDescription: string;
    meta: {
        date: string;
        client: string;
        status: string;
        };
    projectDetails: {
        title: string;
        client: string;
        category: string;
        date: string;
        status: string;
        address: string;
        shareText: string;
        socials: Array<{
          name: string;
          icon: string;
          url: string;
        }>;
        };
    ctaBox: {
        title: string;
        description: string;
        buttonText: string;
        buttonHref: string;
        };
    caseOverview: {
        title: string;
        description: string;
        };
    practiceArea: {
        title: string;
        icon: string;
        subtitle: string;
        description: string;
        checklist: string[];
        followUp: string;
        };
    caseOutcome: {
        title: string;
        icon: string;
        subtitle: string;
        paragraphs: string[];
        quote: string;
        };
}

export interface EventDetailData {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    infoBar: Array<{ icon: string; title: string; sub: string }>;
    heroImage: { src: string; alt: string };
    about: { title: string; text: string };
    keyTopics: { title: string; items: Array<{ icon: string; text: string }> };
    whoShouldAttend: { title: string; items: Array<{ icon: string; text: string }> };
    agenda: { title: string; items: Array<{ time: string; event: string }> };
    sidebar: {
        detailsBox: { title: string; items: Array<{ icon: string; label: string; value: string }> };
        registerBox: { title: string };
        whyAttendBox: { title: string; items: string[] };
        moreInfoBox: { title: string; text: string };
        };
}

export interface IndustryDetailData {
    title: string;
    subtitle: string;
    tagline: string;
    description: string;
    image: string;
    aboutSection: {
        icon: string;
        title: string;
        description: string;
        };
    supportSection: {
        title: string;
        items: {
          number: string;
          icon: string;
          title: string;
          description: string;
        }[];
        };
}

export interface TeamMemberDetail {
    id: string;
    name: string;
    title: string;
    description: string;
    image: { src: string; alt: string };
    phone: string;
    email: string;
    linkedin: string;
    about: string;
    practiceAreas: string[];
    education: { degree: string; school: string; year: string }[];
    barAdmissions: string[];
    experience: { role: string; company: string; duration: string; description: string }[];
    affiliations: string[];
}

export interface ContentSection {
    heading: string;
    text: string;
}

export interface RelatedPublication {
    image: string;
    title: string;
    date: string;
    readTime: string;
    slug: string;
}

export interface PublicationDetailData {
    category: string;
    title: string;
    description: string;
    meta: {
        date: string;
        readTime: string;
        author: string;
        };
    heroImage: { src: string; alt: string };
    content: ContentSection[];
    sidebar: {
        tocBox: { title: string; items: string[] };
        relatedBox: { title: string; items: RelatedPublication[] };
        moreInfoBox: { title: string; text: string };
        };
}

export interface AwardStat {
  icon: string;
  value: string;
  label: string;
}

export interface AwardItem {
  id: string;
  image: string;
  title: string;
  year: string;
  description: string;
}

export interface AwardsData {
  hero: {
    tagline: string;
    titleDark: string;
    titleGold: string;
    description: string;
    image: string;
  };
  stats: AwardStat[];
  awards: AwardItem[];
}

export interface TestimonialPageItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  category: string;
}

export interface TestimonialsPageData {
  header: {
    title: string;
    subtitle: string;
  };
  categories: string[];
  items: TestimonialPageItem[];
}

export interface PracticeAreaItem {
  name: string;
  icon: string;
}

export interface FeaturedResourceItem {
  id: string;
  type: string; // GUIDE, CHECKLIST, WEBINAR, TEMPLATE
  title: string;
  description: string;
  image: string;
  meta: string; // e.g., PDF • 2.4 MB
  linkText: string;
  linkHref: string;
}

export interface InsightItem {
  id: string;
  type: string; // ARTICLE, INSIGHT
  title: string;
  image: string;
  date: string;
  readTime: string;
  linkHref: string;
}

export interface ToolTemplateItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  format: string; // DOCX, XLSX
  size: string;
  linkHref: string;
}

export interface ClientResourcesData {
  hero: {
    titleDark: string;
    titleGold: string;
    description: string;
    image: string;
  };
  practiceAreas: {
    title: string;
    items: PracticeAreaItem[];
  };
  featuredResources: {
    title: string;
    items: FeaturedResourceItem[];
  };
  latestInsights: {
    title: string;
    items: InsightItem[];
  };
  toolsTemplates: {
    title: string;
    items: ToolTemplateItem[];
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqPageData {
  header: {
    titleDark: string;
    titleGold: string;
    description: string;
  };
  items: FaqItem[];
  sidebar: {
    images: Array<{
      src: string;
      alt: string;
    }>;
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
    };
  };
}

export interface JobItem {
  id: string;
  title: string;
  type: string;
  department: string;
  location: string;
  experience: string;
  salary: string;
  deadline: string;
  link: string;
  company?: string;
  verified?: boolean;
  overview?: string;
  responsibilities?: string[];
  education?: string[];
  experienceReq?: string[];
  skills?: string[];
  summary?: {
    expiration: string;
    vacancy: string;
    experience: string;
    education: string;
    gender: string;
    postedOn: string;
  };
}

export interface CareerPageData {
  header: {
    titleDark: string;
    titleGold: string;
    titleSuffix: string;
    description: string;
  };
  jobs: JobItem[];
}

export interface ContactPageData {
  header: {
    subtitle: string;
    titleDark: string;
    titleGold: string;
    description: string;
  };
  contactDetails: {
    icon: string;
    text1: string;
    text2: string;
  }[];
  form: {
    titleDark: string;
    titleGold: string;
  };
  map: {
    iframeSrc: string;
  };
}

export interface OfficeItem {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

export interface OfficeLocationPageData {
  header: {
    subtitle: string;
    titleDark: string;
    titleGold: string;
    description: string;
  };
  heroImage: string;
  offices: OfficeItem[];
}

export interface BookConsultationPageData {
  header: {
    subtitle: string;
    titleDark: string;
    titleGold: string;
    description: string;
  };
  form: {
    title: string;
    fields: {
      fullName: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      practiceArea: { label: string; placeholder: string };
      date: { label: string; placeholder: string };
      time: { label: string; placeholder: string };
      caseBrief: { label: string; placeholder: string };
    };
    submitText: string;
    secureText: string;
  };
  infoSection: {
    image: string;
    benefits: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

export interface TermsConditionsPageData {
  header: {
    titleDark: string;
    titleGold: string;
    lastUpdated: string;
    intro: string;
  };
  terms: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export interface SitemapCategory {
  id: string;
  title: string;
  icon: string;
  links: Array<{ name: string; href: string }>;
}

export interface SitemapPageData {
  title: string;
  icon: string;
  subtitle: string;
  categories: SitemapCategory[];
}
