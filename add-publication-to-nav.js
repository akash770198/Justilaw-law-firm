const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Find "Pages" dropdown in header navbar links
const pagesMenu = siteData.header.navbar.navLinks.find(item => item.name === 'Pages');
if (pagesMenu && pagesMenu.dropdown) {
  // Check if it already exists to avoid duplicates
  if (!pagesMenu.dropdown.some(item => item.href === '/publication')) {
    pagesMenu.dropdown.push({
      name: 'Publications',
      href: '/publication'
    });
    fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
    console.log('Successfully added Publications to Pages dropdown in siteData.json');
  } else {
    console.log('Publications already exists in Pages dropdown');
  }
}
