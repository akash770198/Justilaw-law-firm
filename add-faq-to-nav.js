const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

// Find the Pages link in the navLinks
const pagesLink = siteData.header.navbar.navLinks.find(link => link.name === 'Pages');

if (pagesLink && pagesLink.dropdown) {
  // Check if FAQ is already in the dropdown
  const hasFaq = pagesLink.dropdown.some(item => item.name === 'FAQ');
  if (!hasFaq) {
    pagesLink.dropdown.push({
      name: "FAQ",
      href: "/faq"
    });
    fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2));
    console.log("Successfully added FAQ to Pages dropdown!");
  } else {
    console.log("FAQ is already in the dropdown.");
  }
} else {
  console.log("Could not find Pages link or dropdown array.");
}
