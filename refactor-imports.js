const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p, callback);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      callback(p);
    }
  }
}

const root = path.join(process.cwd(), 'app');

walk(root, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Replace standard imports
  const importRegex = /from\s+['"](\.[^'"]+)['"]/g;
  content = content.replace(importRegex, (match, importPath) => {
    const absolutePath = path.resolve(path.dirname(filePath), importPath);
    let projectRelativePath = path.relative(process.cwd(), absolutePath);
    projectRelativePath = projectRelativePath.replace(/\\/g, '/');
    changed = true;
    return 'from "@/' + projectRelativePath + '"';
  });

  // Replace dynamic imports e.g. import('./file')
  const dynamicImportRegex = /import\(['"](\.[^'"]+)['"]\)/g;
  content = content.replace(dynamicImportRegex, (match, importPath) => {
    const absolutePath = path.resolve(path.dirname(filePath), importPath);
    let projectRelativePath = path.relative(process.cwd(), absolutePath);
    projectRelativePath = projectRelativePath.replace(/\\/g, '/');
    changed = true;
    return 'import("@/' + projectRelativePath + '")';
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
});
