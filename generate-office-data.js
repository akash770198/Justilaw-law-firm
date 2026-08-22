const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

siteData.officeLocationPage = {
  header: {
    subtitle: "OUR OFFICES",
    titleDark: "Our Office",
    titleGold: "Locations",
    description: "We are located in key cities to serve you better. Visit our nearest office or connect with us online."
  },
  heroImage: "/law_firm_reception.svg",
  offices: [
    {
      id: "delhi",
      city: "Delhi Office",
      address: "A-26, Green Park Extension,\nNew Delhi - 110016, India",
      phone: "+91 11 4100 1234",
      email: "delhi@justilaw.com",
      mapUrl: "https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "mumbai",
      city: "Mumbai Office",
      address: "1203, 12th Floor, World Trade\nCentre, Cuffe Parade,\nMumbai - 400005, India",
      phone: "+91 22 4500 1234",
      email: "mumbai@justilaw.com",
      mapUrl: "https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },
    {
      id: "bangalore",
      city: "Bangalore Office",
      address: "Unit No. 205, 2nd Floor,\nPrestige Meridian II, M.G. Road,\nBangalore - 560001, India",
      phone: "+91 80 4567 1234",
      email: "bangalore@justilaw.com",
      mapUrl: "https://maps.google.com/maps?q=Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
    }
  ]
};

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2));
console.log("Successfully injected Office Location page data into siteData.json");
