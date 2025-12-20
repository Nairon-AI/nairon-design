"use client";
import React from "react";
import { Palette, Cpu, Package, Sparkles, Wrench, Star, LayoutTemplate, Shapes } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview-static";

const inspirationTools = [
  { name: "Layers", url: "https://layers.to/", description: "UI design inspiration gallery" },
  { name: "UnCoverLabs", url: "https://uncoverlab.co/?aff=Z2vd4", description: "Figma website templates and user journeys" },
  { name: "Dribbble", url: "https://dribbble.com/", description: "Discover world-class design inspiration" },
  { name: "Behance", url: "https://www.behance.net/", description: "Leading platform for showcasing creative work" },
  { name: "NextFramer", url: "https://www.nextframer.com/", description: "Daily landing page templates built in public" },
  { name: "Sprrrint", url: "https://sprrrint.com/", description: "300+ Figma components and gradients, updated daily" },
  { name: "Web Interactions", url: "https://www.webinteractions.gallery/", description: "Animated elements gallery" },
  { name: "Best Designs on X", url: "https://bestdesignsonx.com", description: "Daily curation of the best designs shared on X" },
  { name: "Mobbin", url: "https://mobbin.com/", description: "Discover real-world iOS & Web design inspiration" },
];

const landingPageTemplates = [
  { name: "Browser Supply", url: "https://browser.supply", description: "Curated landing page templates and resources" },
  { name: "Framer Marketplace", url: "https://www.framer.com/marketplace", description: "Official Framer marketplace for templates" },
  { name: "Creative Market", url: "https://creativemarket.com/templates-themes/website-templates/framer-templates", description: "Framer templates on Creative Market" },
  { name: "SuperbThemes", url: "https://superbthemes.com/framer-landing-page-templates", description: "Curated Framer landing page templates" },
  { name: "Framerbite Templates", url: "https://framerbite.com/all-framer-templates", description: "Premium Framer templates collection" },
  { name: "SaaS Landing Page", url: "https://saaslandingpage.com/templates/framer/", description: "SaaS landing page templates for Framer" },
  { name: "Craftwork", url: "https://craftwork.design/catalog/framer", description: "High-quality Framer templates" },
  { name: "Green Yang", url: "https://www.framer.com/@green-yang/", description: "Framer templates by Green Yang" },
  { name: "Nest — Industries", url: "https://nest.show/industries/all", description: "Industry-specific landing page templates" },
];

const aiTools = [
  { name: "v0", url: "https://v0.dev", description: "AI-powered UI generation with professional polish", featured: true },
  { name: "SuperDesign", url: "http://superdesign.dev/", description: "Generate 10 designs in parallel for rapid exploration", featured: true },
  { name: "Onlook", url: "https://onlook.com/", description: "Visual React editor - 'Cursor for Designers'", featured: true },
  { name: "Aura", url: "https://aura.build/", description: "Generate designs in seconds and export to HTML or Figma.", featured: true },
];

const componentLibraries = [
  { name: "21st Century Components", url: "https://21st.dev/", description: "Next-generation UI components", featured: true },
  { name: "Magic UI", url: "https://magicui.design/", description: "Beautiful React components with Tailwind", featured: true },
  { name: "Aceternity UI", url: "https://ui.aceternity.com/", description: "Modern UI components and templates", featured: true },
  { name: "Kibo UI", url: "https://www.kibo-ui.com/", description: "Advanced components for shadcn/ui" },
  { name: "Motion Primitives", url: "https://motion-primitives.com/", description: "Beautiful, animated components" },
  { name: "Tailark", url: "https://tailark.com/", description: "Shadcn/UI Marketing Blocks" },
  { name: "LnDev UI", url: "https://ui.lndev.me/", description: "Clean library of motion components" },
  { name: "Square UI", url: "https://square.lndev.me/", description: "Beautifully crafted open-source layouts built with shadcn/ui" },
  { name: "MVP Blocks", url: "https://blocks.mvp-subha.me/", description: "Beautiful UI components with Tailwind" },
  { name: "Origin UI", url: "https://originui.com/", description: "Beautiful components with Tailwind" },
  { name: "Bundui", url: "https://bundui.io/", description: "Motion components, copy-paste ready" },
  { name: "Jakub Krehel", url: "https://jakub.kr/", description: "Design Engineer with a passion for building beautiful components" },
  { name: "Fancy Components", url: "https://www.fancycomponents.dev/", description: "Fun components for micro-interactions" },
  { name: "Prism UI", url: "https://www.prismui.tech/", description: "Customizable library on shadcn/ui" },
  { name: "UILabs", url: "https://www.uilabs.dev/", description: "Modern UI components" },
  { name: "Style UI", url: "https://www.styleui.dev/", description: "Customizable components" },
  { name: "UIVerse", url: "https://www.uiverse.io/", description: "Component marketplace" },
  { name: "Luxe", url: "https://www.luxeui.com/", description: "Copy-paste beautiful components" },
  { name: "Catalyst", url: "https://catalyst.tailwindui.com/", description: "Premium Tailwind CSS components" },
  { name: "HeadlessUI", url: "https://headlessui.com/", description: "Accessible UI primitives" },
  { name: "ReactBits", url: "https://reactbits.dev/", description: "Highly customizable animated components that make your React projects truly stand out" },
  { name: "EvilCharts", url: "https://evilcharts.com/", description: "React chart library with animated components built on shadcn/recharts" },
  { name: "REUI", url: "https://reui.io", description: "Modern React components library" },
  { name: "Prompt Kit", url: "https://www.prompt-kit.com", description: "High-quality, accessible, and customizable components for AI interfaces" },
  { name: "Tailus", url: "https://ui.tailus.io/", description: "Highly customizable React components for crafting modern, personalized websites and applications." },
  { name: "Blocks.so", url: "https://blocks.so/", description: "Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks" },
  { name: "ElevenLabs UI", url: "https://ui.elevenlabs.io/", description: "A collection of Open Source agent and audio components that you can customize and extend" },
  { name: "8bitcn", url: "https://www.8bitcn.com/", description: "Retro 8-bit styled components for creating nostalgic, pixel-art themed applications" },
  { name: "BaseCN", url: "https://basecn.dev/", description: "Foundational base components and primitives for shadcn/ui projects" },
  { name: "DiceUI", url: "https://www.diceui.com/", description: "Modern UI components with a focus on interactive and dynamic interfaces" },
  { name: "Elements", url: "https://www.tryelements.dev/", description: "Curated collection of essential UI elements and components" },
  { name: "FormCN", url: "https://formcn.dev/", description: "Specialized form components and validation utilities for shadcn/ui" },
  { name: "HexTA UI", url: "https://hextaui.com/", description: "Modern component library with hexagon-themed design elements" },
  { name: "Intent UI", url: "https://intentui.com/", description: "Purpose-driven components designed for specific use cases and user intents" },
  { name: "Kokonut UI", url: "https://kokonutui.com/", description: "Interactive and animated components built with shadcn/ui architecture" },
  { name: "Kanpeki", url: "https://kanpeki.vercel.app/", description: "Polished, production-ready components with attention to detail and perfection" },
  { name: "Cult UI", url: "https://www.cult-ui.com/", description: "Curated premium components with a focus on quality and design excellence" },
  { name: "Eldora UI", url: "https://eldoraui.site/", description: "Elegant and refined UI components for modern web applications" },
  { name: "HA Components", url: "https://hacomponents.keshuac.com/", description: "Custom component collection with unique design patterns" },
  { name: "Lens Blocks", url: "https://lensblocks.com/", description: "Component blocks designed for Lens protocol and social media applications" },
  { name: "Limeplay", url: "https://limeplay.winoffrg.dev/", description: "Playful and interactive components for engaging user experiences" },
  { name: "Systaliko UI", url: "https://systaliko-ui.vercel.app/", description: "Systematic and organized component library with consistent design patterns" },
  { name: "ROI UI", url: "https://roiui.com/", description: "Business-focused components optimized for conversion and user engagement" },
  { name: "Solace UI", url: "https://www.solaceui.com/", description: "Comfortable and intuitive components designed for ease of use" },
  { name: "Smooth UI", url: "https://smoothui.dev/", description: "Super Smooth UI Components for Every Team" },
  { name: "Shadcn Blocks", url: "https://shadcnblocks.com/", description: "Pre-built component blocks and sections built with shadcn/ui" },
  { name: "Shadcn Design", url: "https://www.shadcndesign.com/", description: "Design system, templates, and design resources for shadcn/ui projects" },
  { name: "Shadcn Studio", url: "https://shadcnstudio.com/", description: "Visual workspace and builder for creating shadcn/ui components" },
  { name: "Shadcn Editor", url: "https://shadcn-editor.vercel.app/", description: "Rich text editor and content editing components for shadcn/ui" },
  { name: "ShadcnUI Blocks", url: "https://shadcnui-blocks.com/", description: "Comprehensive collection of copy-paste blocks for shadcn/ui" },
  { name: "Spectrum UI", url: "https://ui.spectrumhq.in/", description: "Wide spectrum of components covering diverse use cases and styles" },
  { name: "Tailark", url: "https://tailark.com/", description: "Modern, responsive UI blocks specifically designed for marketing websites" },
  { name: "PatternCraft", url: "https://patterncraft.fun/", description: "Professional-grade background patterns and gradients. Easily copy the code and seamlessly integrate it into your projects. Crafted with modern CSS and Tailwind" },
  { name: "Taki UI", url: "https://taki-ui.com/", description: "Accessible components combining React Aria with shadcn design tokens" },
  { name: "UtilCN", url: "https://utilcn.dev/", description: "Utility components and helper functions for shadcn/ui development" },
  { name: "Wandry UI", url: "https://ui.wandry.com.ua/", description: "Custom UI components with unique design aesthetics" },
  { name: "Wigggle UI", url: "https://wigggle-ui.vercel.app/", description: "Open-source collection of copy-paste widgets compatible with shadcn/ui" },
  { name: "ZippyStarter", url: "https://zippystarter.com/", description: "Rapid starter templates and components built with shadcn/ui, Tailwind, and React" }
];

const animationTools = [
  { name: "Rive", url: "https://rive.app/", description: "Interactive design tool with stateful graphics format and multi-platform runtime", featured: true },
  { name: "AnimeJS", url: "https://animejs.com/", description: "JavaScript animation engine" },
  { name: "Unicorn Studio", url: "https://www.unicorn.studio/", description: "Create motion and interaction without code" },
];

const iconLibraries = [
  { name: "Lucide Animated", url: "https://lucide-animated.com/", description: "Open-source animated icon library built with Motion & Lucide" },
  { name: "Animated Icons", url: "https://icons.pqoqubbw.dev/", description: "Smooth animated SVG icons" },
  { name: "Iconsax", url: "https://iconsax.dev/", description: "5912 open source SVG icons" },
  { name: "Nucleo", url: "https://nucleoapp.com/", description: "30,000+ premium icons and SVG library manager" },
  { name: "3D Isometric Icons", url: "https://www.isocons.app/", description: "3D Isometric icons" },
];

const utilityTools = [
  { name: "Tailwind Converter", url: "https://tailwindconverter.app/", description: "Convert CSS to Tailwind" },
  { name: "TwBlocks", url: "https://www.twblocks.com/", description: "React SaaS website blocks" },
];

interface ResourceCardProps {
  name: string;
  url: string;
  description: string;
  featured?: boolean;
}

const ResourceCard = ({ name, url, description, featured = false }: ResourceCardProps) => (
  <LinkPreview url={url} className="h-full w-full">
    <div
      className={`group relative h-full p-5 rounded-xl border transition-all duration-300 w-full flex flex-col
        ${
          featured
            ? "bg-neutral-900/60 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-neutral-900/80"
            : "bg-neutral-900/40 border-white/5 hover:border-white/10 hover:bg-neutral-900/60"
        }
      `}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className={`font-medium transition-colors ${featured ? "text-emerald-100 group-hover:text-emerald-50" : "text-neutral-200 group-hover:text-white"}`}>
          {name}
        </h3>
        {featured && <Star className="w-3.5 h-3.5 fill-emerald-500/20 text-emerald-500" />}
      </div>
      <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 group-hover:text-neutral-400 transition-colors">
        {description}
      </p>
    </div>
  </LinkPreview>
);

export function ResourcesSection() {
  return (
    <div className="w-full py-24 bg-[#0a0a0a]" id="timeline-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Curated Resources</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            A collection of tools, libraries, and resources for modern interface design.
          </p>
        </div>

        {/* Finding Inspiration */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
              <Palette className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Finding Inspiration
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {inspirationTools.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Landing Page Templates */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
              <LayoutTemplate className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Landing Page Templates
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {landingPageTemplates.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* AI-Powered Design */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              AI-Powered Design
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiTools.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Component Libraries */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
              <Package className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Component Libraries
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {componentLibraries.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Animation Tools */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Animation & Motion
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {animationTools.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Icon Libraries */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
              <Shapes className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Icon Libraries
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {iconLibraries.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Utility Tools */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-neutral-900 border border-white/5">
              <Wrench className="w-5 h-5 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Utility Tools
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {utilityTools.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 relative overflow-hidden text-center p-12 rounded-3xl bg-neutral-900 border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-50" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Ready to Start Building?
            </h3>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Explore the component libraries to find the perfect building blocks for your next project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
