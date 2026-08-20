const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app/data/siteData.json');
const d = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const sampleDetail = {
  slug: 'avoiding-property-theft',
  title: 'Avoiding Property Theft in the Digital Age',
  tagline: 'CASE STUDY',
  taglineIcon: 'gavel',
  image: '/Case_study/case-study-gavel-high-quality.svg',
  heroDescription: 'The court declared the developer\'s documents "null and void." The client was restored to his home within 90 days, and the developer was fined for fraud. Our firm conducted a "Chain of Title" forensic audit going back 50 years. We filed a Writ Petition in the High Court challenging the validity of the developer\'s mutation.',
  meta: {
    date: '23 Jan, 2026',
    client: 'Mr. LexVersa',
    status: 'Completed'
  },
  projectDetails: {
    title: 'Project Details',
    client: 'Mr. LexVersa',
    category: 'Lawyer, Business',
    date: '23 Jan, 2026',
    status: 'Completed',
    address: 'Dublin Road, Florida, US',
    shareText: 'Share Case Study',
    socials: [
      { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
      { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com' },
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
      { name: 'Behance', icon: 'behance', url: 'https://behance.net' }
    ]
  },
  ctaBox: {
    title: 'Have a Similar Legal Challenge?',
    description: 'Our experienced legal team is here to help you achieve the best possible outcome.',
    buttonText: 'Contact Our Expert',
    buttonHref: '/contact'
  },
  caseOverview: {
    title: 'Case Overview',
    description: 'A retired teacher was wrongfully evicted from his ancestral home by a powerful local developer using forged documents. Our goal was to prove the forgery and restore immediate possession to the rightful owner. We emphasize the importance of witnesses, mental capacity, and probate processes to ensure asset protection.'
  },
  practiceArea: {
    title: 'Practice Area',
    icon: 'gavel',
    subtitle: 'Intellectual Property (IP) Law',
    description: 'We protect rights regarding creative works, including patents, trademarks, and copyrights. We also handle land ownership, construction, development, and landlord/tenant disputes.',
    checklist: [
      'Corporate & Business Law',
      'Real Estate Law',
      'Litigation & Dispute Resolution',
      'Employment & Labor Law',
      'Banking & Finance Law',
      'Estate Planning & Probate',
      'Human Resources Consulting',
      'Entertainment & Sports Law',
      'Intellectual Property Law',
      'Transactional Corporate Law'
    ],
    followUp: 'We handle domestic matters such as divorce, child custody, adoption, and prenuptials. We manage the relationship between employers and employees, including discrimination and wrongful termination. Our team also represents individuals accused of crimes or acts on their behalf.'
  },
  caseOutcome: {
    title: 'Case Outcome',
    icon: 'scales',
    subtitle: 'The "David vs. Goliath" Land Dispute',
    paragraphs: [
      'Professional representation of the team in formal attire before the Supreme Court or District Courts. We offer access to an extensive collection of law journals and books for deep legal research.',
      'Focusing on the formation, management, mergers, and acquisitions (M&A) of clients in court, arbitration, or mediation for civil or criminal disputes. We manage legal matters for financial institutions, including complex loan transactions.'
    ],
    quote: '"Justice delayed is justice denied. We fight for what is rightfully yours." — ProCounsel Legal Team'
  }
};

d.caseStudyDetails = {
  'avoiding-property-theft': sampleDetail,
  'corporate-law': { ...sampleDetail, slug: 'corporate-law', title: 'Corporate Structuring & Governance' },
  'real-estate': { ...sampleDetail, slug: 'real-estate', title: 'Commercial Property Acquisition' },
  'business-litigation': { ...sampleDetail, slug: 'business-litigation', title: 'Commercial Contract Breach Litigation' },
  'domestic-violence': { ...sampleDetail, slug: 'domestic-violence', title: 'Domestic Defense & Protective Relief' },
  'mergers-acquisitions': { ...sampleDetail, slug: 'mergers-acquisitions', title: 'Cross-Border Tech Merger & Acquisition' },
  'family-law': { ...sampleDetail, slug: 'family-law', title: 'Complex High-Net-Worth Family Asset Division' },
  'civil-defense': { ...sampleDetail, slug: 'civil-defense', title: 'Federal Civil Rights Trial & Defense' },
  'healthcare-malpractice': { ...sampleDetail, slug: 'healthcare-malpractice', title: 'Hospital Network Malpractice Settlement' }
};

// Update caseStudiesPage links to use slugs
if (d.caseStudiesPage && d.caseStudiesPage.items) {
  const slugs = [
    'corporate-law',
    'real-estate',
    'business-litigation',
    'domestic-violence',
    'mergers-acquisitions',
    'family-law',
    'civil-defense',
    'healthcare-malpractice'
  ];
  d.caseStudiesPage.items.forEach((item, idx) => {
    item.link = '/case-studies/' + (slugs[idx] || 'avoiding-property-theft');
  });
}

fs.writeFileSync(dataPath, JSON.stringify(d, null, 2));
console.log('siteData.json updated successfully with caseStudyDetails!');
