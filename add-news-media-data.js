const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 1. Add "News Media" to the "Pages" dropdown in header
const pagesDropdown = siteData.header.navbar.navLinks.find(link => link.name === 'Pages').dropdown;
if (!pagesDropdown.find(l => l.name === 'News Media')) {
  pagesDropdown.push({
    name: 'News Media',
    href: '/news-media'
  });
}

// 2. Add News Media data
siteData.newsMedia = {
  header: {
    breadcrumbs: [
      { label: "HOME", href: "/" },
      { label: "NEWS MEDIA", href: "/news-media" }
    ],
    title: "News Media"
  },
  items: [
    {
      id: "nm1",
      logo: "/News_logos/lallantop.svg",
      title: "What the Latest Tax Amendments Mean for Individuals and Businesses",
      date: "10 Sep, 2024",
      slug: "tax-amendments"
    },
    {
      id: "nm2",
      logo: "/News_logos/news-india.svg",
      title: "Upcoming Webinar: Navigating Legal Challenges in 2024",
      date: "05 Sep, 2024",
      slug: "webinar-legal-challenges"
    },
    {
      id: "nm3",
      logo: "/News_logos/india-tv.svg",
      title: "Changes in Arbitration Laws: What You Need to Know",
      date: "01 Sep, 2024",
      slug: "changes-arbitration-laws"
    },
    {
      id: "nm4",
      logo: "/News_logos/aaj-tak.svg",
      title: "New Labour Code Updates: Key Compliance Highlights",
      date: "28 Aug, 2024",
      slug: "labour-code-updates"
    },
    {
      id: "nm5",
      logo: "/News_logos/economic-times.svg",
      title: "RBI Announces New Guidelines for Digital Transactions",
      date: "25 Aug, 2024",
      slug: "rbi-digital-transactions"
    },
    {
      id: "nm6",
      logo: "/News_logos/business-standard.svg",
      title: "Insolvency and Bankruptcy Code Amendments Explained",
      date: "22 Aug, 2024",
      slug: "insolvency-bankruptcy-amendments"
    },
    {
      id: "nm7",
      logo: "/News_logos/mint.svg",
      title: "Impact of New Foreign Direct Investment Rules in India",
      date: "20 Aug, 2024",
      slug: "fdi-rules-india"
    },
    {
      id: "nm8",
      logo: "/News_logos/ndtv.svg",
      title: "Data Protection Law: What Businesses Must Prepare For",
      date: "18 Aug, 2024",
      slug: "data-protection-law"
    },
    {
      id: "nm9",
      logo: "/News_logos/zee-news.svg",
      title: "Supreme Court Rulings That Impact Businesses in 2024",
      date: "15 Aug, 2024",
      slug: "supreme-court-rulings-business"
    },
    {
      id: "nm10",
      logo: "/News_logos/financial-express.svg",
      title: "New SEBI Regulations: What Investors Should Know",
      date: "12 Aug, 2024",
      slug: "sebi-regulations"
    },
    {
      id: "nm11",
      logo: "/News_logos/livelaw.svg",
      title: "Child Custody Laws in India: Recent Legal Developments",
      date: "10 Aug, 2024",
      slug: "child-custody-laws"
    },
    {
      id: "nm12",
      logo: "/News_logos/outlook.svg",
      title: "Competition Law Amendments and Their Industry Impact",
      date: "08 Aug, 2024",
      slug: "competition-law-amendments"
    }
  ]
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully updated siteData.json with News Media data');
