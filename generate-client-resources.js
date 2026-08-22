const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Inject navigation link
if (siteData.header && siteData.header.navbar && siteData.header.navbar.navLinks) {
  const pagesLink = siteData.header.navbar.navLinks.find(link => link.name === "Pages");
  if (pagesLink && pagesLink.dropdown) {
    if (!pagesLink.dropdown.some(item => item.name === "Client Resources")) {
      pagesLink.dropdown.push({
        name: "Client Resources",
        href: "/client-resources"
      });
    }
  }
}

// Client Resources Data
siteData.clientResourcesPage = {
  hero: {
    titleDark: "Client",
    titleGold: "Resources",
    description: "Practical insights, tools, and updates to help you navigate legal matters with confidence.",
    image: "/Client_resources/01_client_resources_hero_books_scales.svg"
  },
  practiceAreas: {
    title: "Browse by Practice Area",
    items: [
      { name: "Corporate Law", icon: "landmark" },
      { name: "Dispute Resolution", icon: "scale" },
      { name: "Employment Law", icon: "users" },
      { name: "Intellectual Property", icon: "lightbulb" },
      { name: "Taxation", icon: "calculator" },
      { name: "Regulatory & Compliance", icon: "shield-check" },
      { name: "Real Estate Law", icon: "home" },
      { name: "Family Law", icon: "users" }
    ]
  },
  featuredResources: {
    title: "Featured Resources",
    items: [
      {
        id: "fr-1",
        type: "GUIDE",
        title: "Guide to Commercial Contracts",
        description: "An overview of key clauses, negotiation tips, and best practices for robust commercial agreements.",
        image: "/Client_resources/02_guide_commercial_contracts.svg",
        meta: "PDF • 2.4 MB",
        linkText: "Download",
        linkHref: "#"
      },
      {
        id: "fr-2",
        type: "CHECKLIST",
        title: "Employment Compliance Checklist",
        description: "A practical checklist to help businesses stay compliant with employment laws and regulations.",
        image: "/Client_resources/03_employment_compliance_checklist.svg",
        meta: "PDF • 1.5 MB",
        linkText: "Download",
        linkHref: "#"
      },
      {
        id: "fr-3",
        type: "WEBINAR",
        title: "Navigating Legal Risks in 2025",
        description: "Watch our experts discuss key legal risks businesses face in 2025 and how to mitigate them.",
        image: "/Client_resources/04_legal_regulatory_guide.svg",
        meta: "Video • 45 min",
        linkText: "Watch Now",
        linkHref: "#"
      },
      {
        id: "fr-4",
        type: "TEMPLATE",
        title: "NDA Agreement Template",
        description: "Standard non-disclosure agreement template for your business needs.",
        image: "/Client_resources/05_nda_agreement_template.svg",
        meta: "DOCX • 55 KB",
        linkText: "Download",
        linkHref: "#"
      }
    ]
  },
  latestInsights: {
    title: "Latest Insights",
    items: [
      {
        id: "li-1",
        type: "ARTICLE",
        title: "Key Legal Developments Businesses Should Know in 2025",
        image: "/Client_resources/06_legal_technology_courthouse.svg",
        date: "May 10, 2025",
        readTime: "5 min read",
        linkHref: "#"
      },
      {
        id: "li-2",
        type: "ARTICLE",
        title: "Data Protection Compliance: What Businesses Need to Prepare For",
        image: "/Client_resources/07_cybersecurity_data_protection.svg",
        date: "May 5, 2025",
        readTime: "8 min read",
        linkHref: "#"
      },
      {
        id: "li-3",
        type: "INSIGHT",
        title: "Force Majeure Clauses: Key Considerations for Your Contracts",
        image: "/Client_resources/08_corporate_law_contract.svg",
        date: "April 28, 2025",
        readTime: "6 min read",
        linkHref: "#"
      },
      {
        id: "li-4",
        type: "ARTICLE",
        title: "Mergers & Acquisitions Trends to Watch in 2025",
        image: "/Client_resources/09_cross_border_disputes_building.svg",
        date: "April 20, 2025",
        readTime: "7 min read",
        linkHref: "#"
      }
    ]
  },
  toolsTemplates: {
    title: "Tools & Templates",
    items: [
      {
        id: "tt-1",
        title: "NDA Template",
        description: "Standard Non-Disclosure Agreement template.",
        icon: "file-text",
        format: "DOCX",
        size: "56 KB",
        linkHref: "#"
      },
      {
        id: "tt-2",
        title: "Service Agreement Template",
        description: "Professional service agreement template.",
        icon: "handshake",
        format: "DOCX",
        size: "72 KB",
        linkHref: "#"
      },
      {
        id: "tt-3",
        title: "Legal Risk Assessment Template",
        description: "Identify and assess potential legal risks in your business.",
        icon: "clipboard-check",
        format: "XLSX",
        size: "34 KB",
        linkHref: "#"
      },
      {
        id: "tt-4",
        title: "Privacy Policy Template",
        description: "Website privacy policy template.",
        icon: "shield",
        format: "DOCX",
        size: "48 KB",
        linkHref: "#"
      }
    ]
  }
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully injected Client Resources data into siteData.json');
