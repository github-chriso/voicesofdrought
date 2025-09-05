"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * An animated section title component that fades in when scrolled into view.
 * Uses GSAP with ScrollTrigger for smooth animations, with automatic reduced motion support.
 * 
 * @param children - The title text content
 * @param className - Additional CSS classes to apply to the title
 * 
 * @example
 * ```tsx
 * <SectionTitle className="text-center mb-8">
 *   Why Get Involved?
 * </SectionTitle>
 * ```
 */
export function SectionTitle({ children, className }: SectionTitleProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const anim = gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 16 },
      {
        autoAlpha: 1,
        y: 0,
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <h2 ref={ref} className={cn("font-headline text-3xl md:text-4xl font-bold", className)}>
      {children}
    </h2>
  );
}



