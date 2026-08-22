const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

if (siteData.faqPage && siteData.faqPage.sidebar && siteData.faqPage.sidebar.images) {
  siteData.faqPage.sidebar.images[1].src = "/weighing_scale.svg";
  siteData.faqPage.sidebar.images[1].alt = "Weighing Scale";
  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2));
  console.log("Successfully updated the second FAQ image to /weighing_scale.svg");
} else {
  console.log("Could not find faqPage images in siteData.json");
}
