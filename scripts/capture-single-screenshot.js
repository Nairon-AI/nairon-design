#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureScreenshot(url, filename) {
  const screenshotDir = path.join(__dirname, '..', 'public', 'screenshots');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  console.log(`📸 Capturing screenshot of ${url}...`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    timeout: 60000
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport for consistency
    await page.setViewport({ width: 1280, height: 800 });
    
    // Navigate to the page
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait a bit for animations to complete
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take screenshot
    const screenshotPath = path.join(screenshotDir, `${filename}.png`);
    await page.screenshot({
      path: screenshotPath,
      clip: { x: 0, y: 0, width: 1280, height: 800 }
    });
    
    console.log(`✅ Screenshot saved: ${screenshotPath}`);
    
  } catch (error) {
    console.error(`❌ Failed to capture screenshot: ${error.message}`);
  } finally {
    await browser.close();
  }
}

// Get URL and filename from command line arguments
const url = process.argv[2];
const filename = process.argv[3];

if (!url || !filename) {
  console.error('Usage: node capture-single-screenshot.js <url> <filename>');
  process.exit(1);
}

captureScreenshot(url, filename);