# Voices of Drought Landing Page

A Next.js application for Lifeline Central West's "Voices of Drought" community engagement initiative. This landing page enables residents of Central West NSW to participate in drought experience surveys and community conversations.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliant with focus management and screen reader support
- **Performance**: Next.js 15 with App Router, optimized fonts, and static generation
- **Trauma-Informed UX**: Safe, non-triggering language and optional participation paths
- **SEO Optimized**: Comprehensive meta tags and structured data

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Radix UI primitives
- **Fonts**: Optimized Google Fonts (Inter, Montserrat)
- **TypeScript**: Full type safety
- **Deployment**: Static export for hosting flexibility

## 📋 Project Structure

```
src/
├── app/                    # App Router pages and layouts
├── components/            
│   ├── ui/                # Reusable UI components (Radix-based)
│   ├── layout/            # Layout components (header, footer)
│   └── sections/          # Page sections (hero, FAQ, etc.)
├── lib/                   # Utilities and configurations
├── config/                # Site configuration
└── hooks/                 # Custom React hooks
```

## 🎨 Design System

- **Primary**: Lifeline Blue (#004F9F)
- **Accent**: Sunshine Orange (#F1A63B)
- **Typography**: Inter (body), Montserrat (headlines)
- **Spacing**: Consistent 8px grid system
- **Breakpoints**: Mobile-first responsive design

## 🚦 Getting Started

### Prerequisites

- Node.js ≥20.0.0
- npm ≥9.0.0

### Installation

1. Clone the repository:
```bash
git clone https://github.com/github-chriso/voicesofdrought.git
cd voicesofdrought
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:9002](http://localhost:9002) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type check with TypeScript

## 🌐 Deployment

This project is configured for static export and can be deployed to any static hosting provider:

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory.

3. Deploy the `out/` folder to your hosting provider.

### Recommended Hosts
- **Vercel**: Native Next.js support
- **Netlify**: Static site hosting
- **SiteGround**: Traditional web hosting

## 🔧 Configuration

### Site Configuration
Edit `src/config/site.ts` to update:
- Contact information
- External URLs (survey, registration)
- Location data
- FAQ content

### Styling
- Colors: `tailwind.config.ts`
- Components: `src/components/ui/`
- Global styles: `src/app/globals.css`

## ♿ Accessibility

This application follows WCAG 2.1 AA guidelines:

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Color contrast compliance
- ✅ Screen reader optimization
- ✅ Focus management

## 🧪 Testing

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build test
npm run build
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For technical issues or questions about this application:

- **Project Repository**: [github.com/github-chriso/voicesofdrought](https://github.com/github-chriso/voicesofdrought)
- **Lifeline Central West**: [lifelinecentralwest.org.au](https://lifelinecentralwest.org.au)

For crisis support:
- **Lifeline**: 13 11 14 (24/7)
- **Emergency**: 000

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Lifeline Central West** - Community mental health support
- **Central West NSW Councils** - Community partnership
- **Next.js Team** - Outstanding framework
- **Radix UI** - Accessible component primitives