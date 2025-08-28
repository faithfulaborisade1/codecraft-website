# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production version with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a CodeCraft business website built with Next.js 15 using the App Router pattern. The project uses a component-based architecture with a single-page application structure.

### Project Structure
- `/app/` - Next.js App Router directory
  - `layout.js` - Root layout with Geist fonts and global styles
  - `page.js` - Main homepage composing all sections
  - `globals.css` - Global styles with Tailwind CSS and custom utilities
- `/components/` - Reusable React components for each page section
- `/public/` - Static assets (SVG icons)

### Key Technologies
- **Next.js 15** with App Router and Turbopack for faster builds
- **React 19** for component architecture
- **Tailwind CSS 4** for styling with custom utility classes
- **Framer Motion** for animations and interactions
- **Lucide React** for icons

### Component Architecture
The homepage (`app/page.js`) follows a sectioned layout pattern:
1. Navbar (fixed navigation)
2. Hero (landing section)
3. Services
4. Portfolio
5. Testimonials
6. MaintenancePlans
7. Contact

Each component is a standalone module in `/components/` that can be independently developed and maintained.

### Styling System
- Uses Tailwind CSS with custom utility classes defined in `globals.css`
- Custom gradient utilities (`.gradient-text`, `.gradient-bg`)
- Button variants (`.btn-primary`, `.btn-secondary`)
- Hover effects (`.card-hover`)
- Custom animations (`float`, `pulse-code`)

### Path Resolution
The project uses `@/*` path mapping (configured in `jsconfig.json`) for clean imports from the project root.

### Payment Integration
The project includes Stripe payment integration for both subscription (maintenance plans) and one-time payments (project pricing).

**Setup Requirements:**
1. Copy `.env.local.example` to `.env.local`
2. Add your Stripe API keys from the Stripe dashboard
3. Create price IDs in Stripe for each plan/project
4. Update price IDs in components

**Payment Components:**
- `ProjectPricing` - One-time project payments (€499-€2499)
- `MaintenancePlans` - Monthly subscription plans (€25-€99/month)
- `Success` page - Payment confirmation with session details

**API Routes:**
- `/api/create-checkout` - Creates Stripe checkout sessions
- `/api/checkout-session` - Retrieves session details for success page