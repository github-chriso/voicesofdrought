import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { fontBody, fontHeadline } from '@/lib/fonts';

export const viewport = {
  themeColor: '#0B458B',
}

export const metadata: Metadata = {
  title: 'Voices of Drought – Community Conversations & Survey | Lifeline Central West',
  description: 'Share your experience of drought. Take a 10–15 minute anonymous survey or join a small in-person conversation in your LGA. Help shape local support in Central West NSW.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-64.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icon-512.png', color: '#0B458B' },
    ],
  },

  openGraph: {
    title: 'Voices of Drought – Community Conversations & Survey | Lifeline Central West',
    description: 'Help shape local support services by sharing your experience of drought.',
    url: 'https://www.regionalcommunity.support',
    siteName: 'Lifeline Central West',
    images: [
      {
        url: 'https://www.regionalcommunity.support/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Voices of Drought community survey - Help shape local support services in Central West NSW',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voices of Drought – Community Conversations & Survey | Lifeline Central West',
    description: 'Help shape local support services by sharing your experience of drought.',
    images: ['https://www.regionalcommunity.support/hero.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", fontBody.variable, fontHeadline.variable)}>
      <body className={cn("font-body antialiased", "min-h-screen bg-background font-sans")}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:px-4 focus:py-2 bg-background text-foreground border rounded-md">
          Skip to main content
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
