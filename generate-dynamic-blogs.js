const fs = require('fs');
const data = require('./app/data/siteData.json');

const blogs = data.blogsPage.items || [];
data.blogDetails = {};

blogs.forEach((blog) => {
  const slug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  blog.link = '/blogs/' + slug;
  
  data.blogDetails[slug] = {
    metadata: {
      title: blog.title + ' | JUSTILAW Legal Partners',
      description: blog.description
    },
    hero: {
      title: blog.title,
      author: blog.author ? blog.author.name : 'Admin',
      authorIcon: 'user',
      comments: (Math.floor(Math.random() * 10) + 1) + ' Comments',
      commentsIcon: 'message-circle',
      date: blog.date,
      dateIcon: 'calendar',
      category: blog.category,
      categoryIcon: blog.categoryIcon || 'folder',
      mainImage: blog.image.src || '/Blog_detail.svg'
    },
    content1: [
      blog.description,
      'At LexVersa, we prioritize attorney-client privilege. Every detail shared during our consultations remains 100% confidential, allowing you to discuss sensitive matters with absolute peace of mind.'
    ],
    specializedCounsel: {
      title: 'Why Specialized Legal Counsel Matters in ' + blog.category,
      description: 'Our firm operates on a foundation of expertise. Each department is lead by advocates with over 15 years of experience in their respective fields. We utilize advanced legal research software to analyze case precedents, ensuring your strategy is backed by the latest High Court rulings.',
      points: [
        'Initial Consultation Scheduling',
        'In-depth ' + blog.category + ' Guidance',
        'Confidentiality Agreements',
        'Data-Driven Case Strategy',
        'Transparent Fee Structures',
        'Client-Centric Communication'
      ],
      pointIcon: 'gavel',
      quote: {
        text: 'The most important aspect of ' + blog.category + ' is understanding the intricate details of the statutory framework and applying it strategically to the client\'s unique situation.',
        author: 'LexVersa Legal Team'
      }
    },
    protectingInterests: {
      title: 'Protecting Your Intellectual & Personal Interests',
      content: [
        'From helping startups to navigating sensitive cases, our approach is always dictated by the "Best Interest" principle. We believe that a lawyer\'s job is not just to win cases, but to provide a sustainable roadmap for the client\'s future.',
        'With over 18 years of experience, our team has successfully navigated some of the most complex litigations in the country.'
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
});

fs.writeFileSync('./app/data/siteData.json', JSON.stringify(data, null, 2));
console.log('Successfully generated dynamic blogs mapping.');
