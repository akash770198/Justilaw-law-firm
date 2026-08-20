const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'app', 'data', 'siteData.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

function generateSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

if (data.team && data.team.members) {
  data.team.members = data.team.members.map(member => ({
    ...member,
    slug: generateSlug(member.name)
  }));
}

if (data.ourTeamPage && data.ourTeamPage.members) {
  data.ourTeamPage.members = data.ourTeamPage.members.map(member => ({
    ...member,
    slug: generateSlug(member.name)
  }));
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log("Updated siteData.json with team member slugs");
