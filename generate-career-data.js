const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

const careerPage = {
  header: {
    titleDark: "Our",
    titleGold: "Featured",
    titleSuffix: "Jobs",
    description: "Explore exciting career opportunities and take the next step in your legal journey."
  },
  jobs: [
    {
      id: "job-01",
      title: "Associate – Corporate Law",
      type: "Full Time, On-site",
      department: "Corporate Advisory",
      location: "Mumbai, India",
      experience: "2–3 Years",
      salary: "₹8 – ₹12 LPA",
      deadline: "15 June, 2025",
      link: "#"
    },
    {
      id: "job-02",
      title: "Senior Associate – Dispute Resolution",
      type: "Full Time, On-site",
      department: "Litigation & Arbitration",
      location: "Delhi, India",
      experience: "4–7 Years",
      salary: "₹12 – ₹18 LPA",
      deadline: "15 June, 2025",
      link: "#"
    },
    {
      id: "job-03",
      title: "Legal Counsel – Contracts",
      type: "Full Time, On-site",
      department: "Contracts & Commercial",
      location: "Bengaluru, India",
      experience: "3–6 Years",
      salary: "₹10 – ₹16 LPA",
      deadline: "15 June, 2025",
      link: "#"
    },
    {
      id: "job-04",
      title: "Associate – Intellectual Property",
      type: "Full Time, On-site",
      department: "Intellectual Property",
      location: "Mumbai, India",
      experience: "2–4 Years",
      salary: "₹8 – ₹14 LPA",
      deadline: "15 June, 2025",
      link: "#"
    }
  ]
};

siteData.careerPage = careerPage;

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2));
console.log("Successfully injected Career data into siteData.json");
