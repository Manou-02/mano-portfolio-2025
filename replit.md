# Overview

This is a modern developer portfolio web application built with React, TypeScript, and Express.js. The application serves as a professional showcase for a full-stack developer, featuring sections for personal introduction, skills, projects, and contact information. It includes internationalization support (English/French), dark/light theme switching, smooth animations, and a responsive design using shadcn/ui components with Tailwind CSS styling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: TanStack Query for server state management and data fetching
- **Animations**: Framer Motion for smooth, performant animations and scroll-triggered effects
- **Internationalization**: react-i18next for multi-language support (English/French)
- **Theme Management**: Custom theme provider with localStorage persistence for dark/light mode

## Backend Architecture
- **Server Framework**: Express.js with TypeScript for API development
- **Development Setup**: Hot module replacement (HMR) via Vite middleware in development
- **Static Serving**: Production builds served through Express with Vite-generated assets
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user data
- **Route Structure**: Centralized route registration with `/api` prefix for all backend endpoints

## Component Structure
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Layout Components**: Modular sections (Hero, About, Projects, Contact, Footer, Navigation)
- **Theme System**: CSS custom properties with automatic class-based theme switching
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

## Configuration Management
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Tailwind**: Custom theme extension with design tokens and CSS variables
- **PostCSS**: Autoprefixer and Tailwind CSS processing
- **Build Process**: Separate client and server builds with optimized output

## Development Tools
- **Replit Integration**: Custom error modal and cartographer plugin for development environment
- **Font Loading**: Google Fonts integration with Inter and JetBrains Mono
- **Asset Management**: Organized asset structure with proper path resolution
- **Code Quality**: ESLint-compatible setup with TypeScript compiler checks

# External Dependencies

## Database and ORM
- **Drizzle ORM**: Type-safe database queries and schema management
- **PostgreSQL**: Primary database with Neon serverless integration for cloud deployment
- **Schema Definition**: Centralized schema in shared directory for type consistency

## UI and Styling
- **Radix UI**: Headless, accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with extensive customization
- **Lucide React**: Modern icon library with consistent design language
- **Class Variance Authority**: Type-safe variant handling for component styling

## Animation and Interaction
- **Framer Motion**: Production-ready motion library for React applications
- **Embla Carousel**: Lightweight carousel component with touch support

## Development and Build
- **Vite**: Next-generation frontend tooling for fast development and builds
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **React Hook Form**: Performant form library with validation support

## Utilities and Tools
- **Date-fns**: Modern date utility library for date manipulation
- **CLSX/Tailwind Merge**: Conditional class name utilities for dynamic styling
- **Nanoid**: Secure, URL-safe unique ID generator
- **Zod**: TypeScript-first schema validation library

## Fonts and Icons
- **Google Fonts**: Inter (primary) and JetBrains Mono (code) font families
- **Font Awesome**: Comprehensive icon library for additional icon needs

## Development Environment
- **Replit**: Cloud-based development environment with integrated tooling
- **React Helmet Async**: SEO and meta tag management for single-page application
- **React Router**: Declarative routing for React applications