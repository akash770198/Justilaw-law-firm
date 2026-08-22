const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

data.testimonials.items = [
  {
    "id": "t1",
    "quote": "The corporate law team provided outstanding legal support and guided our merger through every step with professionalism and care. Highly recommended!",
    "name": "Kevin Martin",
    "role": "CEO, ProCounsel",
    "image": "/Testimonial/testimonial-man-1-rectangular.svg",
    "rating": 5,
    "category": "Corporate Law"
  },
  {
    "id": "t2",
    "quote": "In a very difficult time for our family, JUSTILAW offered compassionate and incredibly effective representation in our custody case. We couldn't be more grateful.",
    "name": "Sarah Jenkins",
    "role": "Client",
    "image": "/Testimonial/testimonial-woman-1-rectangular.svg",
    "rating": 5,
    "category": "Family Law"
  },
  {
    "id": "t3",
    "quote": "Their criminal defense lawyers are top-notch. They meticulously examined every detail of my case and secured a complete dismissal. True lifesavers.",
    "name": "David Ramirez",
    "role": "Client",
    "image": "/Testimonial/testimonial-man-2-rectangular.svg",
    "rating": 5,
    "category": "Criminal Law"
  },
  {
    "id": "t4",
    "quote": "Navigating our civil litigation seemed impossible until we partnered with JUSTILAW. Their strategic approach and dedication won our case decisively.",
    "name": "Elena Rostova",
    "role": "Director, Apex Holdings",
    "image": "/Testimonial/testimonial-woman-2-rectangular.svg",
    "rating": 5,
    "category": "Civil Law"
  },
  {
    "id": "t5",
    "quote": "From drafting our foundational contracts to navigating complex intellectual property issues, they have been an indispensable partner to our startup.",
    "name": "Marcus Thorne",
    "role": "Founder, InnovateTech",
    "image": "/Testimonial/testimonial-man-3-rectangular.svg",
    "rating": 5,
    "category": "Corporate Law"
  },
  {
    "id": "t6",
    "quote": "I needed assistance with an immigration issue and their team was responsive, highly knowledgeable, and got my visa approved much faster than expected.",
    "name": "Aisha Patel",
    "role": "Client",
    "image": "/Testimonial/testimonial-woman-3-rectangular.svg",
    "rating": 4,
    "category": "Others"
  }
];

fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2));
console.log("Successfully added categorized testimonials");
