const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

if (siteData.eventsPage && siteData.eventsPage.items && siteData.eventDetail) {
  const eventDetailsMap = {};
  const baseDetail = siteData.eventDetail;

  siteData.eventsPage.items.forEach(event => {
    // deep copy the base detail
    const detail = JSON.parse(JSON.stringify(baseDetail));
    
    // update specific fields based on the event item
    detail.badge = event.type;
    detail.title = event.title;
    detail.heroImage = { src: event.image, alt: event.title };
    
    // update info bar
    if (detail.infoBar && detail.infoBar.length >= 3) {
      detail.infoBar[0].title = `${event.dateBadge.month} ${event.dateBadge.day}, ${event.dateBadge.year}`; // Date
      detail.infoBar[1].title = event.dateTime; // Time
      detail.infoBar[2].title = event.location; // Location
    }

    // update sidebar details
    if (detail.sidebar && detail.sidebar.detailsBox && detail.sidebar.detailsBox.items && detail.sidebar.detailsBox.items.length >= 3) {
      detail.sidebar.detailsBox.items[0].value = `${event.dateBadge.month} ${event.dateBadge.day}, ${event.dateBadge.year}`;
      detail.sidebar.detailsBox.items[1].value = event.dateTime;
      detail.sidebar.detailsBox.items[2].value = event.location;
    }

    eventDetailsMap[event.slug] = detail;
  });

  siteData.eventDetails = eventDetailsMap;
  fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
  console.log('Successfully generated dynamic eventDetails mapping in siteData.json');
} else {
  console.log('Required data missing from siteData.json');
}
