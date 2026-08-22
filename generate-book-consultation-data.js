const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

data.bookConsultationPage = {
  header: {
    subtitle: "BOOK CONSULTATION",
    titleDark: "Book Your",
    titleGold: "Consultation",
    description: "Schedule a one-on-one consultation with our legal experts. We're here to understand your concerns and provide the right legal guidance."
  },
  form: {
    title: "Consultation Details",
    fields: {
      fullName: { label: "Full Name", placeholder: "Enter your full name" },
      email: { label: "Email Address", placeholder: "Enter your email address" },
      phone: { label: "Phone Number", placeholder: "Enter your phone number" },
      practiceArea: { label: "Area of Practice", placeholder: "Select area of practice" },
      date: { label: "Preferred Date", placeholder: "Select date" },
      time: { label: "Preferred Time", placeholder: "Select time" },
      caseBrief: { label: "Brief About Your Case", placeholder: "Please provide a brief description of your legal concern" }
    },
    submitText: "Book Consultation",
    secureText: "Your information is secure and confidential."
  },
  infoSection: {
    image: "/legal_advice.jpg", // Assuming placeholder or existing image
    benefits: [
      {
        icon: "users",
        title: "Personalized Consultation",
        description: "One-on-one meeting with experienced legal professionals."
      },
      {
        icon: "shield-check",
        title: "Confidential & Secure",
        description: "Your information and case details are always kept confidential."
      },
      {
        icon: "clock",
        title: "Flexible Scheduling",
        description: "Choose a date and time that works best for you."
      },
      {
        icon: "file-text",
        title: "Expert Legal Guidance",
        description: "Get clarity and the right legal direction for your matter."
      }
    ]
  }
};

// Update footer navigation
if (data.footer && data.footer.links && data.footer.links.services) {
  const legalConsultationIndex = data.footer.links.services.findIndex(link => link.text.toLowerCase().includes("consultation"));
  if (legalConsultationIndex !== -1) {
    data.footer.links.services[legalConsultationIndex].href = "/book-consultation";
  } else {
    data.footer.links.services.push({ text: "Legal Consultation", href: "/book-consultation" });
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2));
console.log("Successfully injected Book Consultation page data and updated routes.");
