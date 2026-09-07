const fs = require('fs');
const path = require('path');

const pages = [
  'CustomSoftware.tsx',
  'HRMSSoftware.tsx',
  'AIDevelopment.tsx',
  'WebDevelopmentHyderabad.tsx',
  'MobileAppDevelopment.tsx',
  'HealthcareSoftware.tsx'
];

pages.forEach(page => {
  const filePath = path.join(__dirname, 'src/pages', page);
  let content = fs.readFileSync(filePath, 'utf8');

  const regex = /(?:<\/p>\s*)?<Tabs defaultValue=\{deliverables\[0\]\.id\} className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 min-h-\[400px\]">(\s*<Link to=)/;
  
  if (content.match(regex)) {
    content = content.replace(regex, '</p>\n              <div className="flex flex-col sm:flex-row gap-4">$1');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed syntax error in hero section of ${page}`);
  } else {
    console.log(`No broken hero section found in ${page}`);
  }
});
