# Screenshots Directory

This directory contains static screenshots for tool previews.

## File Structure
- `mapping.json` - Maps domains to screenshot filenames
- `*.png` - Screenshot files (200x125px recommended)

## Adding New Screenshots
1. Take screenshot of the website
2. Resize to 200x125px 
3. Save as `toolname-domain.png`
4. Add entry to mapping.json:

```json
{
  "example.com": {
    "filename": "tool-example-com.png",
    "name": "Tool Name", 
    "category": "components",
    "featured": false,
    "url": "https://example.com"
  }
}
```

## Automated Generation
Run `node scripts/generate-screenshots.js` to auto-generate all screenshots.

## Manual Generation  
See `scripts/manual-screenshots.md` for manual screenshot guide.
