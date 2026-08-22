const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'app');

function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') && (file.includes('Client') || file.includes('Section') || file.includes('page'))) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

const files = findTsxFiles(directoryPath);

// Regular expression to match class names that define text sizes
const textSizeRegex = /\b(?:sm:|md:|lg:|xl:)?text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|\[\d+px\])\b/g;
const targetSize = "text-4xl sm:text-5xl md:text-6xl";

let modifiedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // We want to replace text sizes inside className="..." for <h1, <h2, <motion.h1, <motion.h2
  // We'll use a replacer function for any <h1 ...> or <h2 ...> tag
  content = content.replace(/<(?:motion\.)?h[12][^>]*className=(["'])(.*?)\1[^>]*>/g, (match, quote, className) => {
    // Only touch if it contains 'font-serif' and 'font-bold' to ensure it's a "title"
    if (!className.includes('font-serif') || !className.includes('font-bold')) {
      return match;
    }

    // Remove all existing text size classes
    let newClassName = className.replace(textSizeRegex, '').replace(/\s+/g, ' ').trim();
    
    // Add the target size
    newClassName = `${targetSize} ${newClassName}`.trim();

    return match.replace(className, newClassName);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${path.relative(__dirname, file)}`);
    modifiedFiles++;
  }
}

console.log(`Finished. Modified ${modifiedFiles} files.`);
