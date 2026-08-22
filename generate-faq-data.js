const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

const faqPage = {
  header: {
    titleDark: "Have Questions?",
    titleGold: "We Have Answers.",
    description: "Find clear and helpful answers to common legal questions. If you can't find what you're looking for, feel free to contact us."
  },
  items: [
    {
      id: "01",
      question: "What Is Attorney-Client Privilege?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "02",
      question: "How Much Does A Lawyer Cost?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "03",
      question: "Can A Lawyer Help Get My Charges Reduced?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "04",
      question: "What Are The Grounds For Divorce?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "05",
      question: "How Long Does It Take To Settle A Case?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "06",
      question: "Do I Need A Lawyer For A Small Claim?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "07",
      question: "What Should I Do If I'm Arrested?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "08",
      question: "How Do I Start A Business?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "09",
      question: "Can A Lawyer Help With Property Disputes?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
      id: "10",
      question: "What Are My Rights As An Employee?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  ],
  sidebar: {
    images: [
      { src: "/faq_main.svg", alt: "Lawyers consulting" },
      { src: "/hero-bg.jpg", alt: "Courthouse building" } 
    ],
    cta: {
      title: "Still Have Questions?",
      description: "Our legal experts are here to help you.",
      buttonText: "Contact Us",
      buttonLink: "/contact"
    }
  }
};

siteData.faqPage = faqPage;

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2));
console.log("Successfully injected FAQ data into siteData.json");
