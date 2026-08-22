const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, 'app/data/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf-8'));

if (siteData.careerPage && siteData.careerPage.jobs) {
  siteData.careerPage.jobs = siteData.careerPage.jobs.map(job => {
    return {
      ...job,
      company: "JUSTILAW Legal Partners",
      verified: true,
      overview: `We are looking for a detail-oriented and highly motivated ${job.title} to join our ${job.department} team. The ideal candidate will have strong legal research, drafting, and analytical skills with a keen eye for detail.`,
      responsibilities: [
        "Provide legal support on corporate transactions, including mergers, acquisitions, and restructuring.",
        "Draft, review, and negotiate corporate agreements and documentation.",
        "Conduct legal research and due diligence on corporate matters.",
        "Advise clients on corporate governance, compliance, and regulatory requirements.",
        "Liaise with clients, regulators, and other stakeholders on legal matters.",
        "Support senior lawyers in delivering high-quality legal services."
      ],
      education: [
        "Bachelor's degree in Law (LL.B.) from a recognized university.",
        "Additional qualification such as LL.M. is preferred."
      ],
      experienceReq: [
        `${job.experience} of post-qualification experience in ${job.department}.`
      ],
      skills: [
        "Strong understanding of corporate laws and regulations.",
        "Excellent legal drafting and communication skills.",
        "Ability to manage multiple tasks and meet deadlines.",
        "Strong attention to detail and analytical thinking."
      ],
      summary: {
        expiration: job.deadline,
        vacancy: "02 Positions",
        experience: job.experience,
        education: "LL.B. (Mandatory)",
        gender: "Any",
        postedOn: "15 May, 2025"
      }
    };
  });

  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2));
  console.log("Successfully injected deep details into Career jobs.");
} else {
  console.log("Could not find careerPage jobs in siteData.json");
}
