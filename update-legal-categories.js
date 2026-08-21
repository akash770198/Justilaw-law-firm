const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

if (siteData.legalUpdates) {
  siteData.legalUpdates.filters = [
    "All Updates",
    "Corporate & Commercial",
    "Contracts",
    "Regulatory & Compliance",
    "Employment Law",
    "More"
  ];

  const categories = [
    "Corporate & Commercial",
    "Contracts",
    "Regulatory & Compliance",
    "Employment Law",
    "Family Law", // Keep one family law just in case
    "Corporate & Commercial"
  ];

  if (siteData.legalUpdates.items) {
    siteData.legalUpdates.items.forEach((item, index) => {
      // Cycle through categories
      item.category = categories[index % categories.length];
    });
  }

  // Update legalUpdateDetail entries to match their new categories
  if (siteData.legalUpdateDetails) {
    Object.values(siteData.legalUpdateDetails).forEach(detail => {
      const match = siteData.legalUpdates.items.find(i => i.slug === detail.slug);
      if (match) {
        detail.category = match.category;
      }
    });
  }

  fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
  console.log('Successfully updated categories and filters in siteData.json');
} else {
  console.log('legalUpdates not found in siteData.json');
}
