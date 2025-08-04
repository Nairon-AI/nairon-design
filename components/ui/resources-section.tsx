"use client";
import React from "react";
import { Palette, Cpu, Package, Sparkles, Wrench, Star } from "lucide-react";

const inspirationTools = [
  { name: "Layers", url: "https://layers.to/", description: "UI design inspiration gallery" },
  { name: "UnCoverLabs", url: "https://uncoverlab.co/?aff=Z2vd4", description: "Figma website templates and user journeys" },
  { name: "Dribbble", url: "https://dribbble.com/", description: "Discover world-class design inspiration" },
  { name: "Behance", url: "https://www.behance.net/", description: "Leading platform for showcasing creative work" },
  { name: "NextFramer", url: "https://www.nextframer.com/", description: "Daily landing page templates built in public" },
  { name: "Sprrrint", url: "https://sprrrint.com/", description: "300+ Figma components and gradients, updated daily" },
  { name: "Web Interactions", url: "https://www.webinteractions.gallery/", description: "Animated elements gallery" },
];

const aiTools = [
  { name: "v0", url: "https://v0.dev", description: "AI-powered UI generation with professional polish", featured: true },
  { name: "SuperDesign", url: "http://superdesign.dev/", description: "Generate 10 designs in parallel for rapid exploration", featured: true },
  { name: "Onlook", url: "https://onlook.com/", description: "Visual React editor - 'Cursor for Designers'", featured: true },
];

const componentLibraries = [
  { name: "TweakCN", url: "https://tweakcn.com/", description: "Visual theme generator for shadcn/ui", featured: true },
  { name: "Kibo UI", url: "https://www.kibo-ui.com/", description: "Advanced components for shadcn/ui" },
  { name: "Motion Primitives", url: "https://motion-primitives.com/", description: "Beautiful, animated components" },
  { name: "nsUI", url: "https://nsui.irung.me/", description: "Shadcn/UI Marketing Blocks" },
  { name: "LnDev UI", url: "https://ui.lndev.me/", description: "Clean library of motion components" },
  { name: "MVP Blocks", url: "https://blocks.mvp-subha.me/", description: "Beautiful UI components with Tailwind" },
  { name: "Origin UI", url: "https://originui.com/", description: "Beautiful components with Tailwind CSS" },
  { name: "Bundui", url: "https://bundui.io/", description: "Motion components, copy-paste ready" },
  { name: "Jakub Król", url: "https://jakub.kr/", description: "Beautifully designed components" },
  { name: "Fancy Components", url: "https://www.fancycomponents.dev/", description: "Fun components for micro-interactions" },
  { name: "Prism UI", url: "https://www.prismui.tech/", description: "Customizable library on shadcn/ui" },
  { name: "UILabs", url: "https://www.uilabs.dev/", description: "Modern UI components" },
  { name: "Style UI", url: "https://www.styleui.dev/", description: "Customizable components" },
  { name: "UIVerse", url: "https://www.uiverse.io/", description: "Component marketplace" },
  { name: "Kokonut", url: "https://kokonut.dev/", description: "Interactive components with shadcn" },
  { name: "Luxe", url: "https://www.luxeui.com/", description: "Copy-paste beautiful components" },
  { name: "Catalyst", url: "https://catalyst.tailwindui.com/", description: "Premium Tailwind CSS components" },
  { name: "HeadlessUI", url: "https://headlessui.com/", description: "Accessible UI primitives" },
];

const animationTools = [
  { name: "AnimeJS", url: "https://animejs.com/", description: "JavaScript animation engine" },
  { name: "Unicorn Studio", url: "https://www.unicorn.studio/", description: "Create motion and interaction without code" },
  { name: "Animated Icons", url: "https://icons.pqoqubbw.dev/", description: "Smooth animated SVG icons" },
];

const utilityTools = [
  { name: "Iconsax", url: "https://iconsax.dev/", description: "5912 open source SVG icons" },
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
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`block p-4 rounded-lg border transition-all duration-200 hover:scale-105 ${
      featured
        ? "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-700 hover:border-purple-500"
        : "bg-neutral-800/50 border-neutral-700 hover:border-neutral-500"
    }`}
  >
    <h3 className={`font-semibold mb-1 flex items-center gap-2 ${featured ? "text-purple-300" : "text-white"}`}>
      {name} {featured && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
    </h3>
    <p className="text-sm text-neutral-400">{description}</p>
  </a>
);

export function ResourcesSection() {
  return (
    <div className="w-full py-20" style={{ backgroundColor: '#262626' }} id="timeline-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Curated collection of the best tools, libraries, and resources for rapid UI prototyping
          </p>
        </div>

        {/* Finding Inspiration */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Palette className="w-6 h-6" />
            Finding Inspiration
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inspirationTools.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* AI-Powered Design */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6" />
            AI-Powered Design
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiTools.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Component Libraries */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Package className="w-6 h-6" />
            Component Libraries
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {componentLibraries.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Animation Tools */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Animation & Motion
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {animationTools.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Utility Tools */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Wrench className="w-6 h-6" />
            Utility Tools
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {utilityTools.map((tool) => (
              <ResourceCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 text-center p-12 rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-700">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Building?
          </h3>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Begin with our theme customizer to establish your design system, then explore our curated components
          </p>
          <a
            href="https://tweakcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg rounded-full hover:scale-105 transition-transform duration-200"
          >
            Start with TweakCN →
          </a>
        </div>
      </div>
    </div>
  );
}