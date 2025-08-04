# Static Screenshot System Setup

I've created a complete system for generating and using static screenshots for your tool cards. Here's how to implement it:

## 📁 Files Created

1. **`scripts/generate-screenshots.js`** - Automated Puppeteer script
2. **`scripts/setup-screenshots.js`** - Directory setup script  
3. **`scripts/manual-screenshots.md`** - Manual screenshot guide
4. **`lib/screenshot-mapping.ts`** - Mapping utility functions
5. **`components/ui/link-preview-static.tsx`** - Updated LinkPreview component

## 🚀 Quick Setup (Automated)

### Step 1: Install Dependencies
```bash
npm install puppeteer
# or
bun add puppeteer
```

### Step 2: Setup Directory Structure
```bash
node scripts/setup-screenshots.js
```

### Step 3: Generate All Screenshots
```bash
node scripts/generate-screenshots.js
```

This will:
- Create `public/screenshots/` directory
- Generate screenshots for all 35+ tools
- Create `mapping.json` file
- Handle errors gracefully and continue

## 🎯 Manual Setup (Alternative)

If you prefer manual control or the automated script fails:

1. **Create directories:**
   ```bash
   mkdir -p public/screenshots
   ```

2. **Follow the manual guide:**
   Open `scripts/manual-screenshots.md` for detailed instructions

3. **Use tools like:**
   - Browser extensions (Full Page Screen Capture)
   - Online services (web-capture.net)
   - macOS Screenshot tools

## 🔄 Integration Steps

### Step 1: Replace LinkPreview Component
Replace the import in `components/ui/resources-section.tsx`:

```typescript
// Change this:
import { LinkPreview } from "@/components/ui/link-preview";

// To this:
import { LinkPreview } from "@/components/ui/link-preview-static";
```

### Step 2: Build and Test
```bash
bun run build
```

## 📊 Expected Results

After setup, you'll have:
- ✅ **35+ static screenshots** (200x125px each)
- ✅ **Instant previews** for all tool cards
- ✅ **Fallback system** (static → microlink.io → placeholder)
- ✅ **No more blank previews**
- ✅ **Faster loading** times

## 🎨 Screenshot Specifications

- **Size:** 200x125px (matches current LinkPreview)
- **Format:** PNG with transparency support
- **Quality:** High-res captures, optimized for web
- **Naming:** `toolname-domain.png` (e.g., `v0-v0-dev.png`)

## 🔧 Customization

### Adding New Tools:
1. Add tool to the `allTools` array in `generate-screenshots.js`
2. Re-run the script: `node scripts/generate-screenshots.js`
3. The mapping file will be automatically updated

### Manual Screenshot Addition:
1. Take screenshot and save to `public/screenshots/`
2. Add entry to `public/screenshots/mapping.json`:
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

## 🐛 Troubleshooting

### Puppeteer Issues:
- **Linux:** Install dependencies: `apt-get install -y gconf-service libasound2-dev`
- **macOS:** May need Xcode command line tools: `xcode-select --install`
- **Windows:** Ensure Visual Studio Build Tools are installed

### Permission Issues:
- Make scripts executable: `chmod +x scripts/*.js`
- Ensure write permissions to `public/` directory

### Memory Issues:
- The script processes one site at a time to avoid memory issues
- Includes 1-second delays between requests to be respectful

## ⚡ Performance Benefits

- **No API calls** for screenshot generation during user interaction
- **Instant previews** on hover
- **Consistent quality** across all tool cards  
- **No rate limiting** issues
- **Works offline** once screenshots are generated

## 🎯 Next Steps

1. Choose your preferred method (automated vs manual)
2. Run the setup
3. Replace the LinkPreview import
4. Test the build
5. Enjoy perfect tool card previews!

The automated script should work for most sites, but you can always fall back to manual screenshots for any problematic sites.