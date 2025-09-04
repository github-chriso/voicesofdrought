"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export function Hero() {

  // Horizontal looping carousel effect
  useEffect(() => {
    const carousel = document.getElementById("hero-carousel");
    if (!carousel) return;
    
    let position = 0;
    const speed = 0.01; // Glacially slow horizontal movement
    
    const animate = () => {
      position -= speed;
      
      // Reset position when we've scrolled one full image width
      if (position <= -100) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}vw)`;
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <section className="relative h-dvh min-h-[600px] flex flex-col text-primary-foreground overflow-hidden">
      {/* Single Looping Hero Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden" id="hero-bg">
        <div className="flex h-full" id="hero-carousel" style={{ width: '200vw' }}>
          <picture className="w-screen h-full flex-shrink-0">
            <source srcSet="/heroImage.webp" type="image/webp" />
            <img
              src="/heroImage.webp"
              alt="Central West NSW drought landscape showing different stages from green to dry"
              className="w-full h-full object-cover will-change-transform"
              loading="eager"
            />
          </picture>
          <picture className="w-screen h-full flex-shrink-0">
            <source srcSet="/heroImage.webp" type="image/webp" />
            <img
              src="/heroImage.webp"
              alt="Central West NSW drought landscape showing different stages from green to dry"
              className="w-full h-full object-cover will-change-transform"
              loading="eager"
            />
          </picture>
        </div>
      </div>
      
      {/* Minimal overlay only behind text areas */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Original Title PNG in Sky */}
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src="/title1.png"
          alt="Every Person Every Town Drought Ready"
          className="w-auto h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl select-none pointer-events-none"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))'
          }}
          loading="eager"
        />
      </div>


      {/* Sticky CTA Bar – Lifeline Blue (no border gap) */}
      <div className="fixed bottom-0 left-0 right-0 bg-lifeline-blue py-4 sm:py-5 z-50 shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/95 text-sm md:text-base font-medium mb-4">
            You've lived it — now help us plan for the next drought.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            {/* Consistent button styling (Apple-glass inspired) */}
            <Button asChild size="lg" className="bg-white text-lifeline-blue border-2 border-white/80 hover:bg-white/95 active:bg-white/90 font-semibold text-base px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 w-full sm:w-auto">
              <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener" data-event="cta_survey_click">
                Take the Survey <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-lifeline-blue border-2 border-white/80 hover:bg-white/95 active:bg-white/90 font-semibold text-base px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 w-full sm:w-auto">
              <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener" data-event="cta_register_click">
                Join a Conversation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}