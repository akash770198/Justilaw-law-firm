const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Fix icon names
siteData.eventDetail.keyTopics.items[0].icon = "scales";
siteData.eventDetail.keyTopics.items[2].icon = "file-edit";
siteData.eventDetail.keyTopics.items[3].icon = "shield-check";

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Fixed icon names in siteData.json');
