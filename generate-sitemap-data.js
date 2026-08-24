const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');

try {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  data.sitemapPage = {
    title: "Sitemap",
    icon: "scales",
    subtitle: "EXPLORE ALL PAGES",
    categories: [
      {
        id: "01",
        title: "FIRM & INFORMATION",
        icon: "landmark",
        links: [
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
          { name: "Why Choose Us", href: "/why-choose-us" },
          { name: "Our Approach", href: "/our-approach" }
        ]
      },
      {
        id: "02",
        title: "SERVICES & EXPERTISE",
        icon: "briefcase",
        links: [
          { name: "Services", href: "/services" },
          { name: "Industries", href: "/industries" }
        ]
      },
      {
        id: "03",
        title: "PEOPLE & TEAM",
        icon: "users",
        links: [
          { name: "Our Team", href: "/our-team" },
          { name: "Careers", href: "/career" }
        ]
      },
      {
        id: "04",
        title: "CASES & RESULTS",
        icon: "gavel",
        links: [
          { name: "Case Studies / Representative Matters", href: "/case-studies" }
        ]
      },
      {
        id: "05",
        title: "INSIGHTS & RESOURCES",
        icon: "file-text",
        links: [
          { name: "Insights / Blog", href: "/blogs" },
          { name: "Legal Updates", href: "/legal-updates" },
          { name: "Client Resources", href: "/client-resources" }
        ]
      },
      {
        id: "06",
        title: "NEWS & EVENTS",
        icon: "megaphone",
        links: [
          { name: "News & Media", href: "/news-media" },
          { name: "Events", href: "/events" },
          { name: "Publications", href: "/publication" }
        ]
      },
      {
        id: "07",
        title: "RECOGNITION & TRUST",
        icon: "award",
        links: [
          { name: "Awards & Recognition", href: "/awards-recognition" },
          { name: "Testimonials", href: "/testimonials" }
        ]
      },
      {
        id: "08",
        title: "OTHER PAGES",
        icon: "book",
        links: [
          { name: "FAQs", href: "/faq" },
          { name: "Office Locations", href: "/office-location" },
          { name: "Contact Us", href: "/contact" },
          { name: "Book Consultation", href: "/book-consultation" },
          { name: "Terms & Conditions", href: "/terms-conditions" }
        ]
      }
    ]
  };

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log('Successfully injected sitemapPage data into siteData.json');
} catch (e) {
  console.error(e);
}
