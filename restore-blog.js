const fs = require('fs');
const data = require('./app/data/siteData.json');

data.blogDetails['legal-distribution-of-assets'] = {
  metadata: {
    title: 'Legal Distribution of Assets | JUSTILAW Legal Partners',
    description: 'Navigating Personal Laws and Succession Acts for legal distribution of assets.'
  },
  hero: {
    title: 'Legal Distribution of Assets: Navigating Personal Laws and Succession Acts.',
    author: 'Admin',
    authorIcon: 'user',
    comments: '5 Comments',
    commentsIcon: 'message-circle',
    date: '15 October, 26',
    dateIcon: 'calendar',
    category: 'Law',
    categoryIcon: 'folder',
    mainImage: '/Blog_detail.svg'
  },
  content1: [
    'Understanding the complexities of asset distribution requires a deep dive into personal laws and the Succession Act. Whether you are dealing with ancestral property or self-acquired assets, the legal framework ensures that your legacy is preserved and passed on according to your wishes or statutory requirements.',
    'At LexVersa, we prioritize attorney-client privilege. Every detail shared during our consultations remains 100% confidential, allowing you to discuss sensitive family matters with absolute peace of mind.'
  ],
  specializedCounsel: {
    title: 'Why Specialized Legal Counsel Matters',
    description: 'Our firm operates on a foundation of expertise. Each department is lead by advocates with over 15 years of experience in their respective fields. We utilize advanced legal research software to analyze case precedents, ensuring your strategy is backed by the latest High Court rulings.',
    points: [
      'Initial Consultation Scheduling',
      'Succession Certificate Guidance',
      'Confidentiality Agreements',
      'Data-Driven Case Strategy',
      'Transparent Fee Structures',
      'Client-Centric Communication'
    ],
    pointIcon: 'gavel',
    quote: {
      text: 'Explain the difference between trade licenses, TIN, and VAT registration. Discuss why "Articles of Association" are the most critical document for partners.',
      author: 'LexVersa'
    }
  },
  protectingInterests: {
    title: 'Protecting Your Intellectual & Personal Interests',
    content: [
      'From helping startups secure Trademarks for their logos to navigating sensitive Child Custody cases, our approach is always dictated by the "Best Interest" principle. We believe that a lawyer\'s job is not just to win cases, but to provide a sustainable roadmap for the client\'s future.',
      'The importance of witnesses, mental capacity, and probate processes to ensure assets reach the right heirs. With over 18 years of experience in the High Court Division, [Attorney Name] has successfully navigated some of the most complex corporate litigations in the country. He believes that a lawyer\'s job is not just to win cases.'
    ]
  },
  sidebar: {
    recentNews: [
      {
        title: 'Assisting with RJSC trade licenses',
        date: '15 Nov, 2026',
        image: '/Blogs/latest-news-1-clean-no-tags.svg',
        link: '#'
      },
      {
        title: 'Understanding Corporate Legal Compliance',
        date: '25 Nov, 2026',
        image: '/Blogs/latest-news-2-clean-no-tags.svg',
        link: '#'
      }
    ],
    categories: [
      { name: 'Corporate Law', icon: 'briefcase', link: '#' },
      { name: 'Family Law', icon: 'users', link: '#' },
      { name: 'Business Law', icon: 'briefcase', link: '#' },
      { name: 'Property Law', icon: 'home', link: '#' },
      { name: 'Employment Law', icon: 'briefcase', link: '#' },
      { name: 'Criminal Law', icon: 'handcuffs', link: '#' }
    ]
  }
};

fs.writeFileSync('./app/data/siteData.json', JSON.stringify(data, null, 2));
console.log('Restored legal-distribution-of-assets in blogDetails');
