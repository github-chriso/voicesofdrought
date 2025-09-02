"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subheadRef = useRef<HTMLHeadingElement | null>(null);

  const animatedHeadline = useMemo(() => "Voices of Drought", []);

  useEffect(() => {
    if (!headlineRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Show headline immediately without animation
      return;
    }

    const element = headlineRef.current;
    const text = element.innerText;
    element.innerHTML = text
      .split("")
      .map((char) => `<span class="inline-block opacity-0 translate-y-2">${char === " " ? "&nbsp;" : char}</span>`) 
      .join("");

    const chars = element.querySelectorAll("span");
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.03,
    });

    return () => {
      // cleanup: restore textContent
      element.textContent = text;
    };
  }, []);

  useEffect(() => {
    // Soft parallax on hero background
    const img = document.getElementById("hero-bg");
    if (!img) return;
    const onScroll = () => {
      const y = Math.min(window.scrollY, 600) * 0.1; // slightly gentler parallax
      (img as HTMLElement).style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-dvh min-h-[600px] flex items-end pb-24 md:pb-32 lg:pb-40 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 -z-20 will-change-transform transition-transform" id="hero-bg" suppressHydrationWarning>
        <picture>
          <source srcSet="/hero.webp" type="image/webp" />
          <img
            src="/hero.jpg"
            alt="Voices of Drought hero image featuring Central West NSW landscape with Lifeline Central West branding."
            data-ai-hint="drought landscape with logo"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
            loading="eager"
          />
        </picture>
      </div>
      {/* Stronger overlay at bottom for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="container grid grid-cols-1">
        <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-left">
          {/* Darker text backdrop for better readability */}
          <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 border border-white/10">
            <p className="uppercase tracking-widest text-xs sm:text-sm text-white/90 mb-3">Lifeline Central West</p>
            <h1 ref={headlineRef} className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold !leading-[1.05] text-white">
              {animatedHeadline}
            </h1>
            <h2 ref={subheadRef} className="font-headline mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
              Community Conversations & Survey
            </h2>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-lifeline-blue text-white hover:bg-lifeline-blue/90 font-semibold text-sm sm:text-base">
                <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener" data-event="cta_survey_click">
                  Take the Survey <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="accent" className="bg-sunshine-orange text-ink hover:bg-sunshine-orange/90 font-semibold text-sm sm:text-base">
                <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener" data-event="cta_register_click">
                  Join a Conversation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Unicorn Studio interactive background placeholder */}
        <div className="absolute inset-0 -z-30 pointer-events-none" aria-hidden>
          {/* Place Unicorn Studio embed script here when available */}
          {/* <div id="unicorn-embed" data-project-id="..." /> */}
        </div>
      </div>
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31.74,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,2V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}
