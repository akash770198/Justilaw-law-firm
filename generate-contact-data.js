const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

siteData.contactPage = {
  header: {
    subtitle: "CONTACT WITH US",
    titleDark: "We're Here to",
    titleGold: "Help You",
    description: "Have a question or need legal assistance? Our team is ready to help. Reach out to us and we'll get back to you as soon as possible."
  },
  contactDetails: [
    {
      icon: "phone",
      text1: "+92 3800 8060",
      text2: "+21 9655-0114"
    },
    {
      icon: "mail",
      text1: "info@justilaw.com",
      text2: "www.justilaw.com"
    },
    {
      icon: "map-pin",
      text1: "123 Justice Lane, Suite 500",
      text2: "New York, NY 10001, USA"
    }
  ],
  form: {
    titleDark: "Send Us a",
    titleGold: "Message"
  },
  map: {
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1683936555132!5m2!1sen!2s"
  }
};

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2));
console.log("Successfully injected Contact page data into siteData.json");
