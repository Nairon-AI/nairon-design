# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Core Principles

**Think carefully and only action the specific task I have given you with the most concise and elegant solution that changes as little code as possible.**

## Build Verification

**IMPORTANT**: Always run `bun run build` after completing any task to ensure the code compiles without errors. Do not consider a task complete until the build passes successfully.

## Development Commands

Use these commands for development:

- `bun dev` or `npm run dev` - Start development server with Turbopack
- `bun run build` or `npm run build` - Build for production
- `bun start` or `npm start` - Start production server
- `bun run lint` or `npm run lint` - Run ESLint

The project uses Bun as the primary package manager (bun.lock present).

## Architecture Overview

This is a Next.js 15 application using the App Router with the following architecture:

**Core Stack:**
- Next.js 15.4.5 with App Router
- React 19.1.0
- TypeScript with strict mode
- Tailwind CSS v4 (new version with inline theme configuration)
- Bun as package manager

**UI Component System:**
- shadcn/ui components with "new-york" style
- Radix UI primitives for accessibility
- Class Variance Authority (CVA) for component variants
- Lucide React for icons
- Custom CSS variables for theming with OKLCH color space

**Project Structure:**
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - Reusable UI components following shadcn/ui patterns
- `lib/utils.ts` - Utility functions (cn helper for class merging)
- `public/` - Static assets

**Key Configuration:**
- TypeScript with `@/*` path mapping for absolute imports
- ESLint with Next.js recommended config
- PostCSS with Tailwind CSS v4 plugin
- Custom Tailwind theme using CSS variables and OKLCH colors
- tw-animate-css for additional animations

## Component Development

When creating new components:

1. Follow the shadcn/ui component pattern established in `components/ui/button.tsx`
2. Use CVA for variant management
3. Include proper TypeScript interfaces with React.ComponentProps
4. Use the `cn()` utility from `@/lib/utils` for conditional classes
5. Support `asChild` prop pattern for composition
6. Follow the established naming: use PascalCase for components, export both component and variant functions

## Styling Guidelines

- Use Tailwind CSS v4 syntax
- Custom properties are defined in `app/globals.css` using the new `@theme inline` block
- Color system uses OKLCH color space for better perceptual uniformity
- Dark mode is handled via the `dark` custom variant: `@custom-variant dark (&:is(.dark *))`
- Prefer semantic color tokens (primary, secondary, muted, etc.) over hardcoded colors

## Development Notes

- The project uses Geist fonts (sans and mono) optimized through `next/font`
- Static optimization is enabled by default
- Custom CSS variables support both light and dark themes
- Path aliases are configured: `@/` maps to the root directory

## File Naming Conventions

- React components: PascalCase (e.g., `Button.tsx`)
- Utilities and hooks: camelCase (e.g., `utils.ts`)
- Pages in app router: lowercase (e.g., `page.tsx`, `layout.tsx`)
- Configuration files: kebab-case or as required by tools