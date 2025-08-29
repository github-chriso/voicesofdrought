import { Inter, Montserrat } from 'next/font/google'

// Body font - Open Sans alternative (Inter is more performant and similar)
export const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '600'],
})

// Headline font - Montserrat
export const fontHeadline = Montserrat({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-headline',
  weight: ['600', '700'],
})
