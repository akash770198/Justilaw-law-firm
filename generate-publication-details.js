const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
let siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

if (siteData.publicationPage && siteData.publicationPage.items) {
  const publicationDetailsMap = {};
  
  siteData.publicationPage.items.forEach((pub, index) => {
    // Generate related publications (next 5 items in the list, wrapping around)
    const related = [];
    for (let i = 1; i <= 5; i++) {
      const relatedIndex = (index + i) % siteData.publicationPage.items.length;
      const relatedPub = siteData.publicationPage.items[relatedIndex];
      related.push({
        image: relatedPub.image,
        title: relatedPub.title,
        date: relatedPub.date,
        readTime: relatedPub.readTime,
        slug: relatedPub.slug
      });
    }

    publicationDetailsMap[pub.slug] = {
      header: {
        breadcrumbs: [
          { label: "HOME", href: "/" },
          { label: "PUBLICATION", href: "/publication" }
        ],
        title: "Publication Detail"
      },
      category: pub.category,
      title: pub.title,
      description: pub.description,
      meta: {
        date: pub.date,
        readTime: pub.readTime,
        author: "JustiLaw Legal Team"
      },
      heroImage: { src: pub.image, alt: pub.title },
      content: [
        {
          heading: "Introduction",
          text: "The year 2025 brings several important amendments to the regulatory frameworks aimed at enhancing transparency, strengthening corporate governance, and promoting ease of doing business. These changes are expected to have a significant impact on companies, directors, and other stakeholders."
        },
        {
          heading: "1. Enhanced Corporate Governance",
          text: "The new amendments emphasize greater accountability of directors and key managerial personnel. Stricter disclosure norms and enhanced responsibilities will ensure more transparent decision-making and protect stakeholder interests."
        },
        {
          heading: "2. Simplified Compliance Requirements",
          text: "Several compliance processes have been simplified through digital integration and a risk-based approach. This move is expected to reduce the compliance burden on businesses, especially for startups and small companies."
        },
        {
          heading: "3. Strengthened Shareholder Rights",
          text: "Shareholder empowerment remains at the core of the 2025 amendments. Provisions related to e-voting, related party transactions, and minority shareholder protection have been further strengthened."
        },
        {
          heading: "4. Focus on Sustainability and ESG",
          text: "The law now places greater emphasis on Environmental, Social, and Governance (ESG) practices. Certain classes of companies will be required to disclose sustainability-related information in their annual reports."
        },
        {
          heading: "Conclusion",
          text: "These changes reflect the government's continued focus on building a transparent, accountable, and globally competitive corporate environment. Businesses should stay informed and adapt to these updates to remain compliant and future-ready."
        }
      ],
      sidebar: {
        tocBox: {
          title: "On This Page",
          items: [
            "Introduction",
            "1. Enhanced Corporate Governance",
            "2. Simplified Compliance Requirements",
            "3. Strengthened Shareholder Rights",
            "4. Focus on Sustainability and ESG",
            "Conclusion"
          ]
        },
        relatedBox: {
          title: "Related Publications",
          items: related
        },
        moreInfoBox: {
          title: "Need More Information?",
          text: "Our team is here to help you with any queries related to this topic."
        }
      }
    };
  });

  siteData.publicationDetails = publicationDetailsMap;
  fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
  console.log('Successfully generated dynamic publicationDetails mapping in siteData.json');
} else {
  console.log('Required data missing from siteData.json');
}
