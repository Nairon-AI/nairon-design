#!/usr/bin/env node

/**
 * Quick Setup Script for Screenshot System
 * 
 * This script sets up the directory structure and creates a sample mapping file
 * Run: node scripts/setup-screenshots.js
 */

const fs = require('fs');
const path = require('path');

function setupDirectories() {
  const publicDir = path.join(process.cwd(), 'public');
  const screenshotsDir = path.join(publicDir, 'screenshots');
  
  // Create directories if they don't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('✅ Created public directory');
  }
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
    console.log('✅ Created screenshots directory');
  }
  
  return screenshotsDir;
}

function createSampleMapping() {
  const mappingPath = path.join(process.cwd(), 'public', 'screenshots', 'mapping.json');
  
  // Don't overwrite existing mapping
  if (fs.existsSync(mappingPath)) {
    console.log('📋 Mapping file already exists, skipping...');
    return;
  }
  
  const sampleMapping = {
    "v0.dev": {
      "filename": "v0-v0-dev.png",
      "name": "v0",
      "category": "ai",
      "featured": true,
      "url": "https://v0.dev"
    },
    "magicui.design": {
      "filename": "magicui-magicui-design.png", 
      "name": "Magic UI",
      "category": "components",
      "featured": true,
      "url": "https://magicui.design/"
    },
    "tweakcn.com": {
      "filename": "tweakcn-tweakcn-com.png",
      "name": "TweakCN", 
      "category": "components",
      "featured": true,
      "url": "https://tweakcn.com/"
    }
  };
  
  fs.writeFileSync(mappingPath, JSON.stringify(sampleMapping, null, 2));
  console.log('📋 Created sample mapping file');
}

function createReadme() {
  const readmePath = path.join(process.cwd(), 'public', 'screenshots', 'README.md');
  
  const readme = `# Screenshots Directory

This directory contains static screenshots for tool previews.

## File Structure
- \`mapping.json\` - Maps domains to screenshot filenames
- \`*.png\` - Screenshot files (200x125px recommended)

## Adding New Screenshots
1. Take screenshot of the website
2. Resize to 200x125px 
3. Save as \`toolname-domain.png\`
4. Add entry to mapping.json:

\`\`\`json
{
  "example.com": {
    "filename": "tool-example-com.png",
    "name": "Tool Name", 
    "category": "components",
    "featured": false,
    "url": "https://example.com"
  }
}
\`\`\`

## Automated Generation
Run \`node scripts/generate-screenshots.js\` to auto-generate all screenshots.

## Manual Generation  
See \`scripts/manual-screenshots.md\` for manual screenshot guide.
`;

  fs.writeFileSync(readmePath, readme);
  console.log('📖 Created README file');
}

console.log('🚀 Setting up screenshot system...');

const screenshotsDir = setupDirectories();
createSampleMapping();
createReadme();

console.log('\n✅ Setup complete!');
console.log(`📁 Screenshots directory: ${screenshotsDir}`);
console.log('\n📋 Next steps:');
console.log('1. Install Puppeteer: npm install puppeteer');
console.log('2. Run automated script: node scripts/generate-screenshots.js');
console.log('3. Or follow manual guide: scripts/manual-screenshots.md');
console.log('4. Update LinkPreview component to use static images');