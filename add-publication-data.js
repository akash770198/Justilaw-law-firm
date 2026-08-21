const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

siteData.publicationPage = {
  header: {
    breadcrumbs: [
      { label: "HOME", href: "/" },
      { label: "PUBLICATION", href: "/publication" }
    ],
    title: "Publication"
  },
  heading: "Publications",
  description: "Explore our collection of thought leadership, articles, research papers, and guides on key legal issues and industry trends.",
  items: [
    {
      id: "pub-1",
      image: "/publications/01-glass-office.svg",
      icon: "scales",
      category: "CORPORATE LAW",
      title: "Key Changes in Company Law You Should Know in 2025",
      description: "An overview of the significant amendments and their impact on businesses and compliance.",
      date: "May 15, 2025",
      readTime: "6 min read",
      slug: "key-changes-company-law-2025"
    },
    {
      id: "pub-2",
      image: "/publications/02-gavel.svg",
      icon: "gavel",
      category: "DISPUTE RESOLUTION",
      title: "Arbitration vs Litigation: Choosing the Right Path for Your Business",
      description: "A comparative analysis to help businesses decide the most effective dispute resolution approach.",
      date: "May 10, 2025",
      readTime: "7 min read",
      slug: "arbitration-vs-litigation"
    },
    {
      id: "pub-3",
      image: "/publications/03-cybersecurity-lock.svg",
      icon: "shield-check",
      category: "DATA PROTECTION",
      title: "Data Protection Act 2025: What Businesses Must Comply With",
      description: "Key provisions and compliance requirements every business should be aware of.",
      date: "May 5, 2025",
      readTime: "8 min read",
      slug: "data-protection-act-2025"
    },
    {
      id: "pub-4",
      image: "/publications/04-light-bulb.svg",
      icon: "lightbulb",
      category: "INTELLECTUAL PROPERTY",
      title: "Protecting Your IP in the Digital Age: Strategies for Businesses",
      description: "Practical strategies to safeguard your intellectual property in an evolving digital landscape.",
      date: "April 28, 2025",
      readTime: "8 min read",
      slug: "protecting-ip-digital-age"
    },
    {
      id: "pub-5",
      image: "/publications/05-courthouse.svg",
      icon: "building",
      category: "REAL ESTATE LAW",
      title: "RERA Updates 2025: Key Implications for Developers and Buyers",
      description: "A look at the latest RERA updates and what they mean for real estate stakeholders.",
      date: "April 20, 2025",
      readTime: "5 min read",
      slug: "rera-updates-2025"
    },
    {
      id: "pub-6",
      image: "/publications/06-pen-contract.svg",
      icon: "briefcase",
      category: "EMPLOYMENT LAW",
      title: "Workplace Policies in 2025: Building Compliant and Future-Ready Workplaces",
      description: "Essential policy updates to ensure workplace compliance and employee well-being.",
      date: "April 15, 2025",
      readTime: "6 min read",
      slug: "workplace-policies-2025"
    },
    {
      id: "pub-7",
      image: "/publications/07-gavel-law-books.svg",
      icon: "file-edit",
      category: "TAXATION",
      title: "Recent Tax Law Amendments: What They Mean for Businesses",
      description: "An overview of key tax law changes and their implications for business planning and compliance.",
      date: "April 10, 2025",
      readTime: "7 min read",
      slug: "recent-tax-law-amendments"
    },
    {
      id: "pub-8",
      image: "/publications/08-business-handshake.svg",
      icon: "handshake",
      category: "MERGERS & ACQUISITIONS",
      title: "Due Diligence Essentials: A Guide for Successful M&A Transactions",
      description: "Key due diligence areas to focus on for smooth and successful M&A deals.",
      date: "April 5, 2025",
      readTime: "6 min read",
      slug: "due-diligence-essentials"
    },
    {
      id: "pub-9",
      image: "/publications/09-sprout-hand.svg",
      icon: "heart",
      category: "ENVIRONMENTAL LAW",
      title: "ESG Compliance and the Evolving Regulatory Landscape",
      description: "Understanding ESG compliance requirements and emerging regulatory trends.",
      date: "March 30, 2025",
      readTime: "5 min read",
      slug: "esg-compliance-regulatory-landscape"
    }
  ],
  totalResults: 24
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully added publication data to siteData.json');
