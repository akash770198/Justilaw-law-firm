const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 1. Add Navigation Link to Pages dropdown
if (siteData.header && siteData.header.navbar && siteData.header.navbar.navLinks) {
  const pagesLink = siteData.header.navbar.navLinks.find(link => link.name === "Pages");
  if (pagesLink && pagesLink.dropdown) {
    if (!pagesLink.dropdown.some(item => item.name === "Awards Recognition")) {
      // Add after Testimonials
      const testIndex = pagesLink.dropdown.findIndex(item => item.name === "Testimonials");
      const insertIdx = testIndex !== -1 ? testIndex + 1 : pagesLink.dropdown.length;
      pagesLink.dropdown.splice(insertIdx, 0, {
        name: "Awards Recognition",
        href: "/awards-recognition"
      });
    }
  }
}

// 2. Add Awards Page Data
siteData.awardsRecognitionPage = {
  metadata: {
    title: "Awards Recognition | JUSTILAW Legal Partners",
    description: "Discover our prestigious awards, accolades, and top-tier rankings in the legal industry."
  },
  hero: {
    tagline: "RECOGNITION & EXCELLENCE",
    titleDark: "Awards &",
    titleGold: "Accolades",
    description: "JustiLaw Legal Partners has been consistently recognized as a leading law firm for our expertise, integrity, and client focus. Our achievements reflect our commitment to delivering exceptional legal solutions and creating lasting impact.",
    image: "/final_award_svgs/trophy_award_landscape.svg"
  },
  stats: [
    {
      icon: "wreath", // Laurel wreath
      value: "15+",
      label: "Awards Won"
    },
    {
      icon: "badge", // Ribbon/Badge
      value: "10+",
      label: "Years of Recognition"
    },
    {
      icon: "building", // Court building
      value: "Top Tier",
      label: "Ranked Law Firm"
    },
    {
      icon: "users", // Group of people
      value: "Trusted by",
      label: "Clients & Peers"
    }
  ],
  awards: [
    {
      id: "aw-1",
      image: "/final_award_svgs/02_IBLJ_2025.svg",
      title: "Indian Law Firm Award",
      year: "2025",
      description: "India Business Law Journal recognizes JustiLaw as a top-performing law firm."
    },
    {
      id: "aw-2",
      image: "/final_award_svgs/03_IBLJ_2024.svg",
      title: "Indian Law Firm Award",
      year: "2024",
      description: "India Business Law Journal recognizes JustiLaw for excellence in legal services."
    },
    {
      id: "aw-3",
      image: "/final_award_svgs/04_Benchmark_2024.svg",
      title: "Benchmark Litigation Asia-Pacific",
      year: "2024",
      description: "Recognized as a Top Tier Firm in Tax practice."
    },
    {
      id: "aw-4",
      image: "/final_award_svgs/05_IBLJ_2023.svg",
      title: "Indian Law Firm Award",
      year: "2023",
      description: "Recognized for outstanding performance in Taxation (Direct)."
    },
    {
      id: "aw-5",
      image: "/final_award_svgs/06_IBLJ_2022.svg",
      title: "Indian Law Firm Award",
      year: "2022",
      description: "Honored for excellence in Taxation (Direct) practice."
    },
    {
      id: "aw-6",
      image: "/final_award_svgs/07_Global_Law_Experts_2020.svg",
      title: "Global Law Experts Award",
      year: "2020",
      description: "Awarded as Tax Disputes Law Firm of the Year."
    },
    {
      id: "aw-7",
      image: "/final_award_svgs/08_IBLJ_2020.svg",
      title: "Indian Law Firm Award",
      year: "2020",
      description: "Recognized for excellence in Taxation practice."
    },
    {
      id: "aw-8",
      image: "/final_award_svgs/09_Benchmark_2020.svg",
      title: "Benchmark Litigation Asia-Pacific",
      year: "2020",
      description: "Recognized as a Top Tier Firm in Tax practice."
    },
    {
      id: "aw-9",
      image: "/final_award_svgs/10_IBLJ_2019.svg",
      title: "Indian Law Firm Award",
      year: "2019",
      description: "Recognized for excellence in Taxation practice."
    }
  ]
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully added Awards Recognition data to siteData.json');
