const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

data.termsConditionsPage = {
  header: {
    titleDark: "Terms &",
    titleGold: "Conditions",
    lastUpdated: "Last Updated: May 20, 2024",
    intro: "Welcome to JustiLaw Legal Partners. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully."
  },
  terms: [
    {
      id: "01",
      title: "Acceptance of Terms",
      description: "By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use our website."
    },
    {
      id: "02",
      title: "Use of Our Website",
      description: "You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit anyone else's use of the website."
    },
    {
      id: "03",
      title: "Intellectual Property",
      description: "All content on this website, including text, graphics, logos, images, and design, is the property of JustiLaw Legal Partners and is protected by intellectual property laws."
    },
    {
      id: "04",
      title: "Legal Disclaimer",
      description: "The content on this website is for general informational purposes only and does not constitute legal advice. You should not act or rely on any information without consulting a qualified attorney."
    },
    {
      id: "05",
      title: "Limitation of Liability",
      description: "JustiLaw Legal Partners shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services."
    },
    {
      id: "06",
      title: "Third-Party Links",
      description: "Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites."
    },
    {
      id: "07",
      title: "Privacy Policy",
      description: "Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your information."
    },
    {
      id: "08",
      title: "Changes to These Terms",
      description: "We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Your continued use of the website constitutes acceptance of the changes."
    },
    {
      id: "09",
      title: "Governing Law",
      description: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law principles."
    },
    {
      id: "10",
      title: "Contact Us",
      description: "If you have any questions about these Terms and Conditions, please contact us using the information provided on our Contact page."
    }
  ]
};

// Update footer navigation (Resources -> Terms & Conditions)
if (data.footer && data.footer.links && data.footer.links.resources) {
  const tcIndex = data.footer.links.resources.findIndex(link => link.text.toLowerCase().includes("terms"));
  if (tcIndex !== -1) {
    data.footer.links.resources[tcIndex].href = "/terms-conditions";
  } else {
    data.footer.links.resources.push({ text: "Terms & Conditions", href: "/terms-conditions" });
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2));
console.log("Successfully injected Terms & Conditions page data and updated routes.");
