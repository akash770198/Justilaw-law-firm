const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 1. Add "Legal Updates" to the "Pages" dropdown in header
const pagesDropdown = siteData.header.navbar.navLinks.find(link => link.name === 'Pages').dropdown;
if (!pagesDropdown.find(l => l.name === 'Legal Updates')) {
  pagesDropdown.push({
    name: 'Legal Updates',
    href: '/legal-updates'
  });
}

// 2. Add data for Legal Update Details page
siteData.legalUpdateDetail = {
  header: {
    breadcrumbs: [
      { label: "HOME", href: "/" },
      { label: "LEGAL UPDATES", href: "/legal-updates" }
    ],
    title: "Legal Updates Details"
  },
  content: {
    category: "FAMILY LAW",
    title: "New Child Custody Guidelines in Bangladesh: What You Need to Know",
    description: "The recent amendments to child custody laws aim to prioritize the best interests of the child. Here's what parents need to know about the new guidelines.",
    date: "May 20, 2025",
    author: "By Ayesha Rahman",
    readTime: "5 min read",
    image: "/Case_study/case-study-gavel-high-quality.svg",
    body: "Child custody matters can be emotionally challenging for everyone involved. To ensure that the best interests of the child remain the top priority, Bangladesh has introduced updated guidelines that bring more clarity and fairness to custody decisions.",
    sections: [
      {
        id: "01",
        title: "What Has Changed?",
        description: "The new guidelines emphasize the child's well-being above all else. Courts will now evaluate factors such as the child's emotional needs, stability, education, and the ability of each parent to provide a nurturing environment."
      },
      {
        id: "02",
        title: "Key Factors Considered by Courts",
        bullets: [
          { label: "Child's Best Interests", text: "The primary consideration in all custody decisions." },
          { label: "Parental Involvement", text: "Encouraging both parents to remain actively involved." },
          { label: "Living Conditions", text: "Assessing the quality and stability of each parent's home." },
          { label: "Child's Preference", text: "For older children, their preferences may be considered." }
        ]
      },
      {
        id: "03",
        title: "Joint Custody Encouraged",
        description: "Where possible, the courts now encourage joint custody arrangements to ensure children maintain strong relationships with both parents."
      },
      {
        id: "04",
        title: "How This Impacts Parents",
        description: "These updates aim to reduce conflicts and promote cooperative parenting. It's important for parents to understand their rights and responsibilities under the new guidelines and seek legal advice to navigate the process smoothly."
      }
    ]
  },
  sidebar: {
    relatedPosts: {
      title: "Related Posts",
      items: [
        {
          title: "Key Changes in Contract Law You Shouldn't Ignore in 2025",
          date: "May 15, 2025",
          image: "/Case_study/case-study-lawyer-signing-high-quality.svg",
          href: "/legal-updates/key-changes-contract-law"
        },
        {
          title: "Supreme Court Ruling on Property Disputes: Key Takeaways",
          date: "May 10, 2025",
          image: "/Case_study/case-study-lawyer-high-quality.svg",
          href: "/legal-updates/supreme-court-ruling-property"
        },
        {
          title: "Data Protection Act 2025: What Businesses Must Comply With",
          date: "May 5, 2025",
          image: "/Case_study/case-study-legal-team-high-quality.svg",
          href: "/legal-updates/data-protection-act"
        }
      ],
      button: {
        text: "View All Posts",
        href: "/legal-updates"
      }
    },
    helpWidget: {
      icon: "scales",
      title: "Need Help with a\nLegal Matter?",
      description: "Our experienced legal team is here to provide guidance and help you make informed decisions.",
      button: {
        text: "Book a Consultation",
        href: "#"
      }
    }
  }
};

fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
console.log('Successfully updated siteData.json');
