"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
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
    <section className="relative h-dvh min-h-[600px] flex items-end md:items-center pb-16 md:pb-0 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 -z-20 will-change-transform transition-transform" id="hero-bg" suppressHydrationWarning>
        <Image
          src="/hero.webp"
          alt="Sunset over a rural windmill in Central West NSW."
          data-ai-hint="rural sunset"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight-navy/70 via-midnight-navy/30 to-transparent"></div>
      <div className="container grid grid-cols-1">
        <div className="max-w-3xl text-left self-end">
          <p className="uppercase tracking-widest text-sm text-white/70 mb-3">Lifeline Central West</p>
          <h1 ref={headlineRef} className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-[1.05]">
            {animatedHeadline}
          </h1>
          <h2 ref={subheadRef} className="font-headline mt-4 text-xl md:text-2xl font-semibold opacity-90">
            Community Conversations & Survey
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-lifeline-blue text-white hover:bg-lifeline-blue/90">
              <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener" data-event="cta_survey_click">
                Take the Survey <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="accent" className="bg-sunshine-orange text-ink hover:bg-sunshine-orange/90">
              <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener" data-event="cta_register_click">
                Join a Conversation <ArrowRight className="ml-2" />
              </Link>
            </Button>
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
