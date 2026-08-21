const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 1. Add "Events" to the "Pages" dropdown in header
const pagesDropdown = siteData.header.navbar.navLinks.find(link => link.name === 'Pages').dropdown;
if (!pagesDropdown.find(l => l.name === 'Events')) {
  pagesDropdown.push({
    name: 'Events',
    href: '/events'
  });
}

// 2. Add Events data
siteData.eventsPage = {
  header: {
    breadcrumbs: [
      { label: "HOME", href: "/" },
      { label: "EVENTS", href: "/events" }
    ],
    title: "Events"
  },
  sectionTitle: "OUR EVENTS",
  heading: "Upcoming Events",
  description: "Join us for our upcoming events, webinars and seminars where legal insights meet real-world impact.",
  items: [
    {
      id: "ev1",
      image: "/Case_study/case-study-gavel-high-quality.svg",
      type: "SEMINAR",
      dateBadge: { day: "24", month: "MAY", year: "2025" },
      title: "Recent Developments in Corporate Law",
      dateTime: "24 May 2025 | 10:00 AM - 01:00 PM",
      location: "The Claridges, New Delhi",
      slug: "recent-developments-corporate-law"
    },
    {
      id: "ev2",
      image: "/Case_study/case-study-legal-team-high-quality.svg",
      type: "WEBINAR",
      dateBadge: { day: "07", month: "JUN", year: "2025" },
      title: "Understanding Arbitration in Commercial Disputes",
      dateTime: "07 June 2025 | 04:00 PM - 05:30 PM",
      location: "Online (Zoom)",
      slug: "understanding-arbitration"
    },
    {
      id: "ev3",
      image: "/Case_study/case-study-lawyer-signing-high-quality.svg",
      type: "PANEL DISCUSSION",
      dateBadge: { day: "21", month: "JUN", year: "2025" },
      title: "Future of Legal Practice: Trends & Technology",
      dateTime: "21 June 2025 | 11:30 AM - 01:00 PM",
      location: "India Habitat Centre, New Delhi",
      slug: "future-of-legal-practice"
    },
    {
      id: "ev4",
      image: "/Case_study/case-study-lawyer-signing-high-quality.svg",
      type: "WORKSHOP",
      dateBadge: { day: "05", month: "JUL", year: "2025" },
      title: "Contract Drafting Workshop for Legal Professionals",
      dateTime: "05 July 2025 | 02:00 PM - 05:00 PM",
      location: "Lex & Co. Office, New Delhi",
      slug: "contract-drafting-workshop"
    },
    {
      id: "ev5",
      image: "/Case_study/case-study-lawyer-high-quality.svg",
      type: "WEBINAR",
      dateBadge: { day: "19", month: "JUL", year: "2025" },
      title: "Data Protection Law: Compliance & Beyond",
      dateTime: "19 July 2025 | 04:30 PM - 05:30 PM",
      location: "Online (Google Meet)",
      slug: "data-protection-law"
    },
    {
      id: "ev6",
      image: "/Case_study/case-study-gavel-high-quality.svg",
      type: "SEMINAR",
      dateBadge: { day: "02", month: "AUG", year: "2025" },
      title: "Insolvency & Bankruptcy Code: Key Insights",
      dateTime: "02 August 2025 | 10:30 AM - 01:00 PM",
      location: "The Leela Palace, New Delhi",
      slug: "insolvency-bankruptcy-code"
    }
  ]
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully updated siteData.json with Events data');
