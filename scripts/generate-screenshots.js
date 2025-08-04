#!/usr/bin/env node

/**
 * Screenshot Generator Script for Design Code and Creed
 * 
 * This script automatically generates screenshots for all the tools listed in the resources section.
 * 
 * Prerequisites:
 * 1. Install dependencies: npm install puppeteer
 * 2. Run: node scripts/generate-screenshots.js
 * 
 * The script will:
 * - Create a public/screenshots directory
 * - Generate screenshots for all tools
 * - Create optimized images (200x125px) matching LinkPreview dimensions
 * - Handle errors gracefully and continue with other sites
 * - Generate a mapping file for easy integration
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Extract tools from your resources-section.tsx
const allTools = [
  // Finding Inspiration
  { name: "Layers", url: "https://layers.to/", category: "inspiration" },
  { name: "UnCoverLabs", url: "https://uncoverlab.co/?aff=Z2vd4", category: "inspiration" },
  { name: "Dribbble", url: "https://dribbble.com/", category: "inspiration" },
  { name: "Behance", url: "https://www.behance.net/", category: "inspiration" },
  { name: "NextFramer", url: "https://www.nextframer.com/", category: "inspiration" },
  { name: "Sprrrint", url: "https://sprrrint.com/", category: "inspiration" },
  { name: "Web Interactions", url: "https://www.webinteractions.gallery/", category: "inspiration" },

  // AI-Powered Design
  { name: "v0", url: "https://v0.dev", category: "ai", featured: true },
  { name: "SuperDesign", url: "http://superdesign.dev/", category: "ai", featured: true },
  { name: "Onlook", url: "https://onlook.com/", category: "ai", featured: true },

  // Component Libraries
  { name: "TweakCN", url: "https://tweakcn.com/", category: "components", featured: true },
  { name: "Magic UI", url: "https://magicui.design/", category: "components", featured: true },
  { name: "Aceternity UI", url: "https://ui.aceternity.com/", category: "components", featured: true },
  { name: "21st Century Components", url: "https://21st.dev/", category: "components", featured: true },
  { name: "Kibo UI", url: "https://www.kibo-ui.com/", category: "components" },
  { name: "Motion Primitives", url: "https://motion-primitives.com/", category: "components" },
  { name: "nsUI", url: "https://nsui.irung.me/", category: "components" },
  { name: "LnDev UI", url: "https://ui.lndev.me/", category: "components" },
  { name: "MVP Blocks", url: "https://blocks.mvp-subha.me/", category: "components" },
  { name: "Origin UI", url: "https://originui.com/", category: "components" },
  { name: "Bundui", url: "https://bundui.io/", category: "components" },
  { name: "Jakub Krehel", url: "https://jakub.kr/", category: "components" },
  { name: "Fancy Components", url: "https://www.fancycomponents.dev/", category: "components" },
  { name: "Prism UI", url: "https://www.prismui.tech/", category: "components" },
  { name: "UILabs", url: "https://www.uilabs.dev/", category: "components" },
  { name: "Style UI", url: "https://www.styleui.dev/", category: "components" },
  { name: "UIVerse", url: "https://www.uiverse.io/", category: "components" },
  { name: "Kokonut", url: "https://kokonut.dev/", category: "components" },
  { name: "Luxe", url: "https://www.luxeui.com/", category: "components" },
  { name: "Catalyst", url: "https://catalyst.tailwindui.com/", category: "components" },
  { name: "HeadlessUI", url: "https://headlessui.com/", category: "components" },

  // Animation Tools
  { name: "Rive", url: "https://rive.app/", category: "animation", featured: true },
  { name: "AnimeJS", url: "https://animejs.com/", category: "animation" },
  { name: "Unicorn Studio", url: "https://www.unicorn.studio/", category: "animation" },
  { name: "Animated Icons", url: "https://icons.pqoqubbw.dev/", category: "animation" },

  // Utility Tools
  { name: "Iconsax", url: "https://iconsax.dev/", category: "utility" },
  { name: "Tailwind Converter", url: "https://tailwindconverter.app/", category: "utility" },
  { name: "TwBlocks", url: "https://www.twblocks.com/", category: "utility" },
];

// Configuration
const SCREENSHOT_CONFIG = {
  width: 1200,
  height: 800,
  outputWidth: 200,
  outputHeight: 125,
  timeout: 30000,
  waitTime: 5000, // Wait 2 seconds for content to load
};

// Create necessary directories
function createDirectories() {
  const screenshotsDir = path.join(process.cwd(), 'public', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
  return screenshotsDir;
}

// Generate a safe filename from URL
function generateFilename(name, url) {
  const domain = new URL(url).hostname.replace('www.', '');
  const safeName = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return `${safeName}-${domain.replace(/\./g, '-')}.png`;
}

// Take screenshot with error handling
async function takeScreenshot(browser, tool, outputDir) {
  const filename = generateFilename(tool.name, tool.url);
  const filepath = path.join(outputDir, filename);
  
  // Skip if file already exists
  if (fs.existsSync(filepath)) {
    console.log(`✓ Screenshot already exists for ${tool.name}`);
    return { success: true, filename, cached: true };
  }

  console.log(`📸 Taking screenshot of ${tool.name} (${tool.url})...`);
  
  let page;
  try {
    page = await browser.newPage();
    
    // Set viewport and user agent
    await page.setViewport({ 
      width: SCREENSHOT_CONFIG.width, 
      height: SCREENSHOT_CONFIG.height,
      deviceScaleFactor: 2 // For high-DPI displays
    });
    
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    // Block unnecessary resources for faster loading
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const resourceType = req.resourceType();
      if (['font', 'media'].includes(resourceType)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    // Navigate to the page
    await page.goto(tool.url, { 
      waitUntil: 'networkidle0', 
      timeout: SCREENSHOT_CONFIG.timeout 
    });
    
    // Wait for additional content to load
    await new Promise(resolve => setTimeout(resolve, SCREENSHOT_CONFIG.waitTime));
    
    // Hide cookie banners and overlays (common selectors)
    await page.evaluate(() => {
      const selectors = [
        '[data-testid*="cookie"]',
        '[class*="cookie"]',
        '[id*="cookie"]',
        '[class*="banner"]',
        '[class*="consent"]',
        '[class*="gdpr"]',
        '.fc-consent-root',
        '#onetrust-consent-sdk',
        '[class*="modal"]',
        '[class*="popup"]'
      ];
      
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
          el.style.display = 'none';
        });
      });
    });

    // Take screenshot
    const screenshot = await page.screenshot({
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: SCREENSHOT_CONFIG.width,
        height: SCREENSHOT_CONFIG.height
      }
    });

    // Save the screenshot
    fs.writeFileSync(filepath, screenshot);
    
    console.log(`✅ Screenshot saved: ${filename}`);
    return { success: true, filename };

  } catch (error) {
    console.error(`❌ Failed to screenshot ${tool.name}: ${error.message}`);
    return { success: false, error: error.message, filename };
  } finally {
    if (page) {
      await page.close();
    }
  }
}

// Generate mapping file for easy integration
function generateMapping(results) {
  const mapping = {};
  
  results.forEach(result => {
    if (result.success) {
      const domain = new URL(result.tool.url).hostname.replace('www.', '');
      mapping[domain] = {
        filename: result.filename,
        name: result.tool.name,
        category: result.tool.category,
        featured: result.tool.featured || false,
        url: result.tool.url
      };
    }
  });

  const mappingPath = path.join(process.cwd(), 'public', 'screenshots', 'mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`📋 Mapping file created: mapping.json`);
  
  return mapping;
}

// Main execution function
async function generateAllScreenshots() {
  console.log('🚀 Starting screenshot generation...');
  console.log(`📊 Total tools to process: ${allTools.length}`);
  
  const outputDir = createDirectories();
  console.log(`📁 Screenshots will be saved to: ${outputDir}`);

  let browser;
  try {
    // Launch browser
    console.log('🌐 Launching browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    const results = [];
    let successful = 0;
    let failed = 0;
    let cached = 0;

    // Process each tool
    for (const tool of allTools) {
      const result = await takeScreenshot(browser, tool, outputDir);
      result.tool = tool;
      results.push(result);
      
      if (result.success) {
        if (result.cached) {
          cached++;
        } else {
          successful++;
        }
      } else {
        failed++;
      }
      
      // Small delay between requests to be respectful
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Generate mapping file
    const mapping = generateMapping(results);

    // Summary
    console.log('\n📈 Summary:');
    console.log(`✅ Successful: ${successful}`);
    console.log(`📋 Cached: ${cached}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📊 Total: ${allTools.length}`);

    if (failed > 0) {
      console.log('\n❌ Failed screenshots:');
      results.filter(r => !r.success).forEach(r => {
        console.log(`  - ${r.tool.name}: ${r.error}`);
      });
    }

    console.log('\n🎉 Screenshot generation complete!');
    console.log(`📁 Files saved to: ${outputDir}`);
    console.log(`🗺️  Mapping file: ${path.join(outputDir, 'mapping.json')}`);

  } catch (error) {
    console.error('💥 Fatal error:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// CLI execution
if (require.main === module) {
  generateAllScreenshots().catch(console.error);
}

module.exports = { generateAllScreenshots, allTools };