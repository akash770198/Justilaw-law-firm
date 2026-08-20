const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const detailedData = {
  phone: "(123) 456-7890",
  email: "contact@justilaw.com",
  linkedin: "linkedin.com/company/justilaw",
  about: "Advises businesses and individuals on complex legal matters with a focus on practical solutions and long-term success. Known for strategic thinking, client-focused approach, and commitment to excellence.",
  practiceAreas: ["Business Law", "Corporate Law", "Mergers & Acquisitions", "Contract Negotiation", "Legal Strategy"],
  education: [
    { degree: "Juris Doctor (J.D.)", school: "Harvard Law School", year: "2006" },
    { degree: "Bachelor of Arts (B.A.)", school: "University of Chicago", year: "2003" }
  ],
  barAdmissions: ["New York State Bar", "California State Bar", "Illinois State Bar"],
  experience: [
    { role: "Managing Partner", company: "Johnson & Associates Law Firm", duration: "2012 - Present", description: "Leading the firm and advising clients on corporate law, business strategy, and high-value transactions." },
    { role: "Senior Attorney", company: "Smith & Partners LLP", duration: "2008 - 2012", description: "Handled corporate transactions, mergers, acquisitions, and commercial agreements." },
    { role: "Associate Attorney", company: "Legal Solutions Group", duration: "2006 - 2008", description: "Focused on corporate law, contract drafting, and business dispute resolution." }
  ],
  affiliations: ["American Bar Association", "New York State Bar Association", "Business Law Section", "International Bar Association"]
};

// Update team.members
if (data.team && data.team.members) {
  data.team.members = data.team.members.map(member => ({
    ...member,
    email: member.name.toLowerCase().split(' ')[0] + "@justilaw.com",
    linkedin: "linkedin.com/in/" + member.name.toLowerCase().replace(' ', ''),
    ...detailedData
  }));
}

// Update ourTeamPage.members
if (data.ourTeamPage && data.ourTeamPage.members) {
  data.ourTeamPage.members = data.ourTeamPage.members.map(member => ({
    ...member,
    email: member.name.toLowerCase().split(' ')[0] + "@justilaw.com",
    linkedin: "linkedin.com/in/" + member.name.toLowerCase().replace(' ', ''),
    ...detailedData
  }));
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log("Updated siteData.json with team member details");
