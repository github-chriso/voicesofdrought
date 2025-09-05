# Component Documentation

This document provides comprehensive documentation for all components in the Voices of Drought application.

## 🏗 Architecture Overview

The component architecture follows a layered approach:

```
Components/
├── ui/           # Base UI components (buttons, cards, etc.)
├── layout/       # Layout-specific components (header, footer)
├── header/       # Header-specific components
└── sections/     # Page sections (hero, faq, etc.)
```

## 🎨 Design System Components

### CTAButton (`src/components/ui/cta-button.tsx`)

A unified call-to-action button component with consistent styling across the application.

**Props:**
- `variant`: `'primary' | 'outline' | 'ghost' | 'emergency'`
- `size`: `'sm' | 'md'`
- `className`: Additional CSS classes
- All Next.js Link props are supported

**Examples:**
```tsx
<CTAButton href="/survey" variant="primary">Take Survey</CTAButton>
<CTAButton href="tel:000" variant="emergency">Emergency</CTAButton>
<CTAButton href="/contact" variant="outline" size="sm">Contact</CTAButton>
```

**Variants:**
- **Primary**: Blue background (`bg-lifeline-blue`)
- **Outline**: White background with border
- **Ghost**: Transparent background
- **Emergency**: Red background for emergency actions

### SectionTitle (`src/components/ui/section-title.tsx`)

An animated section title with scroll-triggered fade-in animation.

**Features:**
- GSAP-powered animations with ScrollTrigger
- Automatic reduced motion support
- Consistent headline typography

**Props:**
- `children`: Title text content
- `className`: Additional CSS classes

**Example:**
```tsx
<SectionTitle className="text-center mb-8">
  Why Get Involved?
</SectionTitle>
```

## 🧭 Layout Components

### Header (`src/components/layout/header.tsx`)

Main site header with responsive design and crisis support links.

**Features:**
- Sticky positioning with scroll-based styling
- Responsive design for all screen sizes
- Crisis support quick actions
- WebP logo optimization

**Responsive Behavior:**
- **Desktop (768px+)**: Shows HeaderActions component
- **Mobile (<768px)**: Shows emergency button with drawer

### HeaderActions (`src/components/header/header-actions.tsx`)

Quick action buttons for crisis support in the header.

**Includes:**
- Emergency (000 calls)
- Crisis Line (13 11 14)
- Text Support
- Online Chat

**Example:**
```tsx
<HeaderActions />
```

### FooterCallout (`src/components/layout/footer-callout.tsx`)

Footer section with contact information.

**Features:**
- Consistent branding
- Contact phone and email
- Accessible link structure

## 📄 Section Components

### Hero (`src/components/sections/hero.tsx`)

Main landing section with call-to-action buttons.

**Features:**
- Responsive hero image
- Primary and secondary CTAs
- Mobile-optimized layout

### Faq (`src/components/sections/faq.tsx`)

Expandable FAQ section using Radix UI Accordion.

**Features:**
- Accessible accordion implementation
- Smooth expand/collapse animations
- Keyboard navigation support

### Locations (`src/components/sections/locations.tsx`)

Location information section with expandable regions.

**Features:**
- Accordion-style location display
- Town listings per LGA
- Contact information integration

### ParticipationSplit (`src/components/sections/participation-split.tsx`)

Two-column participation options layout.

**Features:**
- Survey and conversation options
- Card-based layout
- Responsive design

### WhyInvolved (`src/components/sections/why-involved.tsx`)

Benefits and features section with animated cards.

**Features:**
- GSAP scroll animations
- Icon-based feature cards
- Responsive grid layout

### PartnerStrip (`src/components/sections/partner-strip.tsx`)

Council partner logos display.

**Features:**
- WebP logo optimization
- Responsive logo grid
- Accessibility hints

## 🔧 Configuration

### Site Configuration (`src/config/site.ts`)

Central configuration for all site data:

```typescript
export const siteConfig = {
  contacts: {
    phone: "1300 798 258",
    email: "info@lifelinecentralwest.org.au",
    emergency: "000",
    crisisLine: "131114"
  },
  urls: {
    qualtricsSurvey: "https://...",
    humanitixRegister: "https://...",
    crisisText: "https://...",
    crisiChat: "https://..."
  },
  locations: [...],
  faqData: [...]
}
```

### Environment Configuration (`src/config/env.ts`)

Environment and feature flag management:

```typescript
export const env = {
  isDevelopment: boolean,
  isProduction: boolean,
  features: {
    animations: boolean,
    analytics: boolean
  }
}
```

## 🎨 Styling Guidelines

### Color System
- **Primary**: `#004F9F` (Lifeline Blue)
- **Accent**: `#F1A63B` (Sunshine Orange)
- **Text**: `#1F2937` (Dark Gray)
- **Background**: `#FFFFFF` (White)

### Typography
- **Headlines**: `font-headline` (Montserrat)
- **Body**: `font-body` (Inter)
- **Sizes**: Mobile-first responsive scaling

### Spacing
- Consistent 8px grid system
- Tailwind spacing scale (4, 8, 12, 16, 20, 24...)

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 📱 Responsive Design Patterns

### Header Responsiveness
- **2xl (1536px+)**: Full header with detailed crisis info
- **xl (1280-1535px)**: Compact detailed layout  
- **lg (1024-1279px)**: Simplified inline format
- **md (768-1023px)**: Ultra compact numbers only
- **<md (768px)**: Emergency button with drawer

### Component Patterns
- Mobile-first approach
- Progressive enhancement
- Accessible on all devices
- Touch-friendly interaction areas

## 🔍 TypeScript Support

### Shared Types (`src/types/index.ts`)

Centralized type definitions:

```typescript
export interface LocationData {
  lga: string;
  towns: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'emergency';
```

### Component Props
All components use strict TypeScript interfaces with proper prop validation.

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader optimization

### Interactive Elements
- Proper focus indicators
- Keyboard accessibility
- Touch target sizing (44px minimum)
- Clear interactive states

## 🧪 Testing Considerations

### Component Testing
- Props validation
- Responsive behavior
- Accessibility compliance
- Animation performance

### Integration Testing
- Cross-component communication
- Data flow validation
- Error boundary behavior

## 🚀 Performance Optimizations

### Image Optimization
- WebP format usage
- Next.js Image component
- Proper sizing and loading strategies
- Responsive images

### Code Splitting
- Lazy loading for non-critical components
- Dynamic imports where appropriate
- Bundle size optimization

### Animation Performance
- GSAP for performant animations
- Reduced motion support
- GPU acceleration where beneficial
- Memory leak prevention

## 🔧 Development Guidelines

### Component Creation
1. Use TypeScript interfaces for props
2. Include JSDoc documentation
3. Follow naming conventions
4. Implement responsive design
5. Add accessibility features
6. Test across devices

### Code Style
- Use named exports for components
- Consistent prop destructuring
- Clear component composition
- Proper error handling
- Performance considerations

### File Organization
- One component per file
- Co-located styles when needed
- Clear import/export structure
- Logical folder hierarchy