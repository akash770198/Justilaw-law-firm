const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 1. Add Event Detail mock data
siteData.eventDetail = {
  header: {
    breadcrumbs: [
      { label: "HOME", href: "/" },
      { label: "EVENTS", href: "/events" }
    ],
    title: "Events Detail"
  },
  badge: "UPCOMING EVENT",
  title: "Corporate Law Symposium 2025",
  subtitle: "Insights. Strategies. Solutions.",
  description: "Join legal experts and industry leaders as we discuss the latest developments in corporate law and their impact on businesses.",
  infoBar: [
    { icon: "calendar", title: "June 20, 2025", sub: "Friday" },
    { icon: "clock", title: "10:00 AM – 4:30 PM", sub: "(IST)" },
    { icon: "map-pin", title: "The Westin Mumbai Garden City", sub: "Goregaon (E), Mumbai" }
  ],
  heroImage: {
    src: "/Case_study/case-study-legal-team-high-quality.svg",
    alt: "Corporate Law Symposium 2025"
  },
  about: {
    title: "About the Event",
    text: "The Corporate Law Symposium 2025 brings together legal experts, in-house counsel, and business leaders to explore emerging trends, regulatory updates, and practical strategies in corporate law."
  },
  keyTopics: {
    title: "Key Topics",
    items: [
      { icon: "scale", text: "Corporate Governance and Compliance" },
      { icon: "handshake", text: "M&A Trends and Due Diligence" },
      { icon: "file-text", text: "Contract Management and Risk Mitigation" },
      { icon: "shield", text: "Regulatory Updates and Way Forward" }
    ]
  },
  whoShouldAttend: {
    title: "Who Should Attend?",
    items: [
      { icon: "user", text: "In-house Counsels" },
      { icon: "user", text: "Legal Advisors" },
      { icon: "user", text: "Compliance Officers" },
      { icon: "user", text: "Business Leaders" }
    ]
  },
  agenda: {
    title: "Agenda Highlights",
    items: [
      { time: "10:00 AM – 10:30 AM", event: "Registration & Networking Tea" },
      { time: "10:30 AM – 11:20 AM", event: "Keynote Address: The Future of Corporate Law" },
      { time: "11:45 AM – 01:00 PM", event: "Panel Discussion: Governance, Risk & Compliance" },
      { time: "02:00 PM – 03:15 PM", event: "Panel Discussion: M&A Trends and Challenges" },
      { time: "03:30 PM – 04:15 PM", event: "Expert Talk: Contract Management Best Practices" },
      { time: "04:15 PM – 04:30 PM", event: "Q&A and Closing Remarks" }
    ]
  },
  sidebar: {
    detailsBox: {
      title: "Event Details",
      items: [
        { icon: "calendar", label: "Date", value: "June 20, 2025 (Friday)" },
        { icon: "clock", label: "Time", value: "10:00 AM – 4:30 PM (IST)" },
        { icon: "map-pin", label: "Venue", value: "The Westin Mumbai Garden City\nGoregaon (E), Mumbai" },
        { icon: "users", label: "Seats", value: "Limited Seats Available" },
        { icon: "ticket", label: "Registration Fee", value: "Complimentary\n(Prior Registration Required)" }
      ]
    },
    registerBox: {
      title: "Register Now"
    },
    whyAttendBox: {
      title: "Why Attend?",
      items: [
        "Stay updated with key legal developments",
        "Gain insights from industry experts",
        "Network with legal professionals and business leaders",
        "Practical takeaways for your business growth"
      ]
    },
    moreInfoBox: {
      title: "Need More Information?",
      text: "Our team is here to help you with any queries regarding the event."
    }
  }
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully updated siteData.json with Event Detail data');
