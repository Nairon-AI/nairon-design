/**
 * Screenshot Mapping Utility
 * 
 * This utility helps map URLs to static screenshot files
 */

// Type definition for screenshot mapping
export interface ScreenshotMapping {
  [domain: string]: {
    filename: string;
    name: string;
    category: string;
    featured: boolean;
    url: string;
  };
}

// Default mapping - will be replaced by loading from JSON file
let cachedMapping: ScreenshotMapping | null = null;

/**
 * Get screenshot mapping from public/screenshots/mapping.json
 */
export async function getScreenshotMapping(): Promise<ScreenshotMapping> {
  if (cachedMapping) {
    return cachedMapping;
  }

  try {
    const response = await fetch('/screenshots/mapping.json');
    if (!response.ok) {
      console.warn('Screenshot mapping file not found, using fallback');
      return {};
    }
    
    cachedMapping = await response.json();
    return cachedMapping || {};
  } catch (error) {
    console.warn('Failed to load screenshot mapping:', error);
    return {};
  }
}

/**
 * Get static screenshot path for a URL
 */
export function getStaticScreenshot(url: string, mapping: ScreenshotMapping): string | null {
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    const entry = mapping[domain];
    
    if (entry && entry.filename) {
      return `/screenshots/${entry.filename}`;
    }
    
    return null;
  } catch (error) {
    console.warn('Invalid URL provided to getStaticScreenshot:', url);
    return null;
  }
}

/**
 * Check if a static screenshot exists for a URL
 */
export function hasStaticScreenshot(url: string, mapping: ScreenshotMapping): boolean {
  return getStaticScreenshot(url, mapping) !== null;
}

/**
 * Get tool information from mapping
 */
export function getToolInfo(url: string, mapping: ScreenshotMapping) {
  try {
    const domain = new URL(url).hostname.replace('www.', '');
    return mapping[domain] || null;
  } catch (error) {
    console.warn('Invalid URL provided to getToolInfo:', url);
    return null;
  }
}