const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// The user might have already added "Testimonials" to NavLinks during Awards, let's verify.
// Oh wait, in the mockup, the header has a "Pages" dropdown that includes Testimonials.
if (siteData.header && siteData.header.navbar && siteData.header.navbar.navLinks) {
  const pagesLink = siteData.header.navbar.navLinks.find(link => link.name === "Pages");
  if (pagesLink && pagesLink.dropdown) {
    if (!pagesLink.dropdown.some(item => item.name === "Testimonials")) {
      pagesLink.dropdown.push({
        name: "Testimonials",
        href: "/testimonials"
      });
    }
  }
}

// Data for Testimonials page
siteData.testimonialsPage = {
  header: {
    title: "Client Experiences That Matter",
    subtitle: "Real stories from real clients who have experienced our commitment, dedication, and results."
  },
  categories: [
    "All Testimonials",
    "Corporate Law",
    "Family Law",
    "Criminal Law",
    "Civil Law",
    "Others"
  ],
  items: [
    {
      id: "t-1",
      quote: "The team provided exceptional legal guidance and supported us at every step. Their expertise and professionalism helped us achieve the best possible outcome.",
      name: "Rohan Mehta",
      role: "CEO, Mehta Industries",
      image: "/Testimonial/testimonial-man-1-rectangular.svg",
      rating: 5,
      category: "Corporate Law"
    },
    {
      id: "t-2",
      quote: "Highly professional and approachable team. They resolved my legal matter efficiently and kept me informed throughout the entire process.",
      name: "Priya Sharma",
      role: "Business Owner",
      image: "/Testimonial/testimonial-woman-1-rectangular.svg",
      rating: 5,
      category: "Family Law"
    },
    {
      id: "t-3",
      quote: "I truly appreciate their dedication and attention to detail. They explained everything clearly and made a complex situation much easier to handle.",
      name: "Arjun Verma",
      role: "Individual Client",
      image: "/Testimonial/testimonial-man-2-rectangular.svg",
      rating: 5,
      category: "Civil Law"
    },
    {
      id: "t-4",
      quote: "The team provided exceptional legal guidance and supported us at every step. Their expertise and professionalism helped us achieve the best possible outcome.",
      name: "Rohan Mehta",
      role: "CEO, Mehta Industries",
      image: "/Testimonial/testimonial-man-1-rectangular.svg",
      rating: 5,
      category: "Criminal Law"
    },
    {
      id: "t-5",
      quote: "Highly professional and approachable team. They resolved my legal matter efficiently and kept me informed throughout the entire process.",
      name: "Priya Sharma",
      role: "Business Owner",
      image: "/Testimonial/testimonial-woman-2-rectangular.svg",
      rating: 5,
      category: "Others"
    },
    {
      id: "t-6",
      quote: "I truly appreciate their dedication and attention to detail. They explained everything clearly and made a complex situation much easier to handle.",
      name: "Arjun Verma",
      role: "Individual Client",
      image: "/Testimonial/testimonial-man-2-rectangular.svg",
      rating: 5,
      category: "Corporate Law"
    }
  ]
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully added Testimonials data to siteData.json');
