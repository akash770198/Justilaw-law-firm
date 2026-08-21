const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// The last item in detailsBox should use "tag" instead of "ticket"
const items = siteData.eventDetail.sidebar.detailsBox.items;
if (items[items.length - 1].icon === 'ticket') {
    items[items.length - 1].icon = 'tag';
}

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Fixed missing ticket icon to tag in siteData.json');
