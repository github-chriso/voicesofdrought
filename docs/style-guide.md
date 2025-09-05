# Style Guide

This comprehensive style guide ensures consistency across the Voices of Drought application, covering colors, typography, spacing, components, and interaction patterns.

## 🎨 Color System

### Primary Colors

```css
/* Lifeline Blue - Primary brand color */
--color-lifeline-blue: #004F9F;

/* Sunshine Orange - Accent color */  
--color-sunshine-orange: #F1A63B;
```

### Semantic Colors

```css
/* Text Colors */
--color-ink: #1F2937;           /* Primary text */
--color-muted: #6B7280;         /* Secondary text */
--color-border: #E5E7EB;        /* Borders and dividers */

/* Background Colors */
--color-background: #FFFFFF;     /* Main background */
--color-card: #F9FAFB;          /* Card backgrounds */

/* Interactive Colors */
--color-primary: #004F9F;        /* Primary actions */
--color-destructive: #EF4444;    /* Emergency/delete actions */
--color-success: #10B981;        /* Success states */
--color-warning: #F59E0B;        /* Warning states */
```

### Usage Guidelines

**Lifeline Blue (`#004F9F`)**
- Primary buttons and links
- Header elements
- Call-to-action components
- Brand elements

**Sunshine Orange (`#F1A63B`)**
- Accent elements
- Hover states
- Secondary highlights
- Interactive indicators

**Emergency Red (`#EF4444`)**
- Emergency buttons (000 calls)
- Critical alerts
- Destructive actions

## 📝 Typography System

### Font Families

**Headlines (`font-headline`)**
```css
font-family: 'Montserrat', sans-serif;
```
- Used for: Page titles, section headings, button text
- Weights: 400 (regular), 600 (semibold), 700 (bold)

**Body (`font-body`)**
```css
font-family: 'Inter', sans-serif;
```
- Used for: Body text, descriptions, labels
- Weights: 400 (regular), 500 (medium), 600 (semibold)

### Type Scale

**Mobile-First Responsive Typography**

```css
/* Headings */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }     /* 36px - Hero titles */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; }   /* 30px - Section titles */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }        /* 24px - Card titles */
.text-xl  { font-size: 1.25rem; line-height: 1.75rem; }    /* 20px - Subsections */
.text-lg  { font-size: 1.125rem; line-height: 1.75rem; }   /* 18px - Large text */

/* Body Text */
.text-base { font-size: 1rem; line-height: 1.5rem; }       /* 16px - Body text */
.text-sm   { font-size: 0.875rem; line-height: 1.25rem; }  /* 14px - Captions */
.text-xs   { font-size: 0.75rem; line-height: 1rem; }      /* 12px - Labels */
```

**Desktop Enhancement (md+)**

```css
/* Responsive scaling for larger screens */
@media (min-width: 768px) {
  .md:text-4xl { font-size: 3rem; line-height: 3rem; }     /* 48px */
  .md:text-3xl { font-size: 2.25rem; line-height: 2.5rem; } /* 36px */
}
```

### Typography Usage

**Headlines**
```tsx
<h1 className="font-headline text-3xl md:text-4xl font-bold">Page Title</h1>
<h2 className="font-headline text-2xl md:text-3xl font-bold">Section Title</h2>
<h3 className="font-headline text-xl font-semibold">Subsection</h3>
```

**Body Text**
```tsx
<p className="font-body text-base">Regular paragraph text</p>
<p className="font-body text-sm text-muted">Secondary information</p>
```

## 📏 Spacing System

### Grid System
All spacing follows an 8px grid system using Tailwind's spacing scale.

```css
/* Spacing Scale */
4px  = space-1   /* Very tight spacing */
8px  = space-2   /* Tight spacing */
12px = space-3   /* Small spacing */
16px = space-4   /* Base spacing */
20px = space-5   /* Medium spacing */
24px = space-6   /* Large spacing */
32px = space-8   /* Extra large spacing */
48px = space-12  /* Section spacing */
64px = space-16  /* Major section spacing */
```

### Component Spacing

**Buttons**
```css
padding: 8px 16px;    /* py-2 px-4 - Small buttons */
padding: 12px 24px;   /* py-3 px-6 - Default buttons */
padding: 16px 32px;   /* py-4 px-8 - Large buttons */
```

**Cards**
```css
padding: 24px;        /* p-6 - Card padding */
margin-bottom: 16px;  /* mb-4 - Card spacing */
```

**Sections**
```css
padding: 64px 0;      /* py-16 - Section padding mobile */
padding: 96px 0;      /* py-24 - Section padding desktop */
```

## 🧩 Component Design Patterns

### Button Hierarchy

**Primary Actions**
```tsx
<CTAButton variant="primary" size="md">
  Take Survey
</CTAButton>
```
- Blue background
- White text
- Used for main actions

**Secondary Actions**
```tsx
<CTAButton variant="outline" size="md">
  Learn More
</CTAButton>
```
- White background
- Blue border and text
- Used for secondary actions

**Emergency Actions**
```tsx
<CTAButton variant="emergency" size="sm">
  Emergency 000
</CTAButton>
```
- Red background
- White text
- Used for urgent actions only

### Card Patterns

**Standard Cards**
```tsx
<Card className="p-6 hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle className="font-headline text-xl">Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="font-body text-base">Content</p>
  </CardContent>
</Card>
```

### Interactive States

**Hover Effects**
- Subtle shadow increase
- Color transitions (200ms ease)
- Slight scale or translate transforms

**Focus States**
- Visible focus rings
- High contrast borders
- Maintained accessibility

**Active States**
- Slight depression effect
- Immediate visual feedback

## 📱 Responsive Design Guidelines

### Breakpoint Strategy

```css
/* Mobile First Approach */
/* Default: 0-639px (Mobile) */
sm:  /* 640px+ (Large mobile) */
md:  /* 768px+ (Tablet) */
lg:  /* 1024px+ (Small desktop) */
xl:  /* 1280px+ (Desktop) */
2xl: /* 1536px+ (Large desktop) */
```

### Layout Patterns

**Container Sizes**
```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

**Grid Systems**
```tsx
{/* Mobile: 1 column, Desktop: 2-3 columns */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

**Flexible Typography**
```tsx
<h1 className="text-2xl sm:text-3xl md:text-4xl font-headline">
  Responsive Heading
</h1>
```

## 🎭 Animation Guidelines

### Motion Principles

**Duration**
- Quick interactions: 200ms
- Standard transitions: 300ms
- Complex animations: 600ms
- Page transitions: 800ms

**Easing**
```css
ease-out     /* For entrances */
ease-in      /* For exits */
ease-in-out  /* For state changes */
```

**Reduced Motion Support**
Always respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Animation Examples

**Fade In (Scroll Trigger)**
```tsx
// Implemented in SectionTitle component
gsap.fromTo(element, 
  { autoAlpha: 0, y: 16 }, 
  { 
    autoAlpha: 1, 
    y: 0, 
    duration: 0.6, 
    ease: "power3.out" 
  }
);
```

**Hover Effects**
```css
.hover-lift {
  transition: transform 200ms ease-out, box-shadow 200ms ease-out;
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
```

## ♿ Accessibility Standards

### Color Contrast
- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text**: 3:1 minimum contrast ratio
- **Non-text elements**: 3:1 minimum contrast ratio

### Interactive Elements
- **Touch targets**: 44px minimum size
- **Focus indicators**: Visible and high contrast
- **State changes**: Clear visual feedback

### Semantic HTML
```tsx
<main id="main-content">
  <section aria-labelledby="section-title">
    <h2 id="section-title">Section Title</h2>
    {/* Content */}
  </section>
</main>
```

## 🔧 Implementation Guidelines

### CSS Architecture

**Utility-First with Tailwind**
```tsx
// Preferred: Utility classes
<button className="bg-lifeline-blue text-white px-4 py-2 rounded-2xl font-headline">
  Button
</button>

// When needed: Custom components
<CTAButton variant="primary">Button</CTAButton>
```

**Component Variants with CVA**
```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center font-headline",
  {
    variants: {
      variant: {
        primary: "bg-lifeline-blue text-white",
        outline: "bg-white border border-lifeline-blue text-lifeline-blue"
      }
    }
  }
);
```

### Asset Optimization

**Images**
- Use WebP format
- Implement proper sizing
- Add responsive loading
- Include alt text

**Fonts**
- Preload critical fonts
- Use font-display: swap
- Optimize font loading

## 🎯 Brand Guidelines

### Logo Usage
- Use WebP format for web
- Maintain aspect ratio
- Ensure adequate spacing
- Use on appropriate backgrounds

### Tone of Voice
- **Supportive**: Encouraging and understanding
- **Professional**: Trustworthy and reliable  
- **Accessible**: Clear and inclusive language
- **Trauma-informed**: Safe and non-triggering

### Content Guidelines
- Use person-first language
- Avoid stigmatizing terms
- Provide clear calls-to-action
- Include appropriate support resources

## 🚀 Performance Considerations

### Critical CSS
- Inline critical styles
- Defer non-critical CSS
- Minimize render-blocking resources

### Component Performance
- Lazy load non-critical components
- Optimize re-renders
- Use appropriate React patterns

### Image Performance
- WebP with fallbacks
- Responsive images
- Proper lazy loading
- Optimized sizing

This style guide should be referenced for all design and development decisions to ensure consistency across the application.