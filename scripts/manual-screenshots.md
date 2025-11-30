# Manual Screenshot Generation Guide

If you prefer to create screenshots manually or want more control over the process, here are the tools and methods:

## Option 1: Browser Extensions (Fastest)

### Recommended Extensions:
1. **Full Page Screen Capture** (Chrome/Edge)
2. **FireShot** (Chrome/Firefox) 
3. **Nimbus Screenshot** (Multi-browser)

### Manual Process:
1. Visit each URL from the list below
2. Take a full-page screenshot 
3. Crop/resize to 200x125px (or 600x375px for @3x)
4. Save as PNG with filename format: `toolname-domain.png`

## Option 2: Online Screenshot Tools

### Free Services:
- **Web-Capture.net** - Bulk screenshot generator
- **Website-Screenshot.org** - Single page screenshots  
- **ScreenshotMachine.com** - API and manual options

### Process:
1. Paste URLs one by one
2. Download screenshots
3. Batch resize using tools like:
   - **ImageOptim** (Mac)
   - **XnView** (Windows/Mac/Linux)
   - **GIMP** (Free, all platforms)

## Option 3: macOS Built-in Tools

### Using Safari + Screenshot:
```bash
# Take screenshot of specific window
# Press Cmd+Shift+4, then Space, then click window

# Or use command line:
screencapture -w screenshot.png
```

### Automator Workflow (macOS):
1. Open Automator
2. Create new "Quick Action"
3. Add "Get URLs from Input"
4. Add "Get Link URLs from Webpages" 
5. Add custom script to take screenshots

## Option 4: Batch Processing Tools

### Using ImageMagick (Command Line):
```bash
# Install ImageMagick
brew install imagemagick

# Resize all images in directory
mogrify -resize 200x125! *.png

# Or maintain aspect ratio with padding:
mogrify -resize 200x125 -gravity center -extent 200x125 -background white *.png
```

## Tools List for Manual Screenshots

Copy this list and work through each URL:

### Inspiration Tools:
- Layers: https://layers.to/
- UnCoverLabs: https://uncoverlab.co/?aff=Z2vd4
- Dribbble: https://dribbble.com/
- Behance: https://www.behance.net/
- NextFramer: https://www.nextframer.com/
- Sprrrint: https://sprrrint.com/
- Web Interactions: https://www.webinteractions.gallery/

### AI-Powered Design:
- v0: https://v0.dev
- SuperDesign: http://superdesign.dev/
- Onlook: https://onlook.com/

### Component Libraries:
- TweakCN: https://tweakcn.com/
- Magic UI: https://magicui.design/
- Aceternity UI: https://ui.aceternity.com/
- 21st Century Components: https://21st.dev/
- Kibo UI: https://www.kibo-ui.com/
- Motion Primitives: https://motion-primitives.com/
- Tailark: https://tailark.com/
- LnDev UI: https://ui.lndev.me/
- MVP Blocks: https://blocks.mvp-subha.me/
- Origin UI: https://originui.com/
- Bundui: https://bundui.io/
- Jakub Krehel: https://jakub.kr/
- Fancy Components: https://www.fancycomponents.dev/
- Prism UI: https://www.prismui.tech/
- UILabs: https://www.uilabs.dev/
- Style UI: https://www.styleui.dev/
- UIVerse: https://www.uiverse.io/
- Kokonut UI: https://kokonutui.com/
- Luxe: https://www.luxeui.com/
- Catalyst: https://catalyst.tailwindui.com/
- HeadlessUI: https://headlessui.com/

### Animation Tools:
- Rive: https://rive.app/
- AnimeJS: https://animejs.com/
- Unicorn Studio: https://www.unicorn.studio/
- Animated Icons: https://icons.pqoqubbw.dev/

### Utility Tools:
- Iconsax: https://iconsax.dev/
- Tailwind Converter: https://tailwindconverter.app/
- TwBlocks: https://www.twblocks.com/

## File Naming Convention

Use this format for consistency:
- `layers-layers-to.png`
- `v0-v0-dev.png` 
- `magicui-magicui-design.png`
- `tweakcn-tweakcn-com.png`

## Final Steps

1. Save all screenshots to `public/screenshots/`
2. Create the mapping file (see next guide)
3. Update the LinkPreview component to use static images

## Pro Tips

- **Timing**: Take screenshots during business hours for better content
- **Viewport**: Use 1200x800 viewport, then resize to 200x125
- **Quality**: Aim for crisp, clear text in the final 200x125 size
- **Consistency**: Try to capture the "hero" section of each site
- **Batch Processing**: Use tools like Photoshop Actions or ImageMagick for batch resizing