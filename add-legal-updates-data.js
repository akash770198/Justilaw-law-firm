const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

siteData.legalUpdates = {
  header: {
    breadcrumbs: [
      { label: "HOME", href: "/" },
      { label: "LEGAL UPDATES", href: "/legal-updates" }
    ],
    title: "Legal Updates"
  },
  filters: [
    "All Updates",
    "Corporate & Commercial",
    "Contracts",
    "Regulatory & Compliance",
    "Employment Law",
    "More"
  ],
  items: Array(6).fill(null).map((_, i) => ({
    id: `lu${i + 1}`,
    image: "/Case_study/case-study-gavel-high-quality.svg",
    category: "FAMILY LAW",
    title: "New Child Custody Guidelines in Bangladesh: What You Need to Know",
    date: "May 20, 2025",
    author: "By Ayesha Rahman",
    readTime: "5 min read",
    description: "The recent amendments to child custody laws aim to prioritize the best interests of the child. Here's what parents need to know about the new guidelines.",
    slug: `new-child-custody-guidelines-${i+1}`
  }))
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully added legalUpdates to siteData.json');
