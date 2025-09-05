import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm " +
  "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "ring-1 ring-inset", 
  {
    variants: {
      variant: {
        primary: "bg-lifeline-blue text-white hover:bg-lifeline-blue/90 ring-transparent",
        outline: "bg-white text-ink hover:bg-white/90 ring-border",
        ghost: "bg-transparent text-ink hover:bg-ink/5 ring-transparent",
        emergency: "bg-red-600 text-white hover:bg-red-700 ring-transparent",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type Props = React.ComponentProps<typeof Link> &
  VariantProps<typeof ctaVariants> & { as?: "a" | "button" | "link" };

/**
 * A customizable CTA button component with consistent styling across the application.
 * Uses the headline font and provides multiple visual variants for different use cases.
 * 
 * @param variant - The visual style variant: 'primary' (blue), 'outline' (white with border), 'ghost' (transparent), 'emergency' (red)
 * @param size - The button size: 'sm' (small) or 'md' (medium, default)
 * @param className - Additional CSS classes to apply
 * @param props - All standard Next.js Link props are supported
 * 
 * @example
 * ```tsx
 * <CTAButton href="/contact" variant="primary" size="md">
 *   Get Started
 * </CTAButton>
 * 
 * <CTAButton href="tel:131114" variant="emergency">
 *   Emergency
 * </CTAButton>
 * ```
 */
export function CTAButton({ className, variant, size, ...props }: Props) {
  return (
    <Link className={cn("font-headline", ctaVariants({ variant, size }), className)} {...props} />
  );
}