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
      if (position <= -50) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}%)`;
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <section className="relative h-dvh min-h-[600px] flex flex-col text-primary-foreground overflow-hidden">
      {/* Single Looping Hero Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden" id="hero-bg">
        <div className="flex w-[200%] h-full" id="hero-carousel">
          <picture className="w-1/2 h-full">
            <source srcSet="/hero-new.webp" type="image/webp" />
            <img
              src="/hero-new.jpg"
              alt="Central West NSW drought landscape showing different stages from green to dry"
              className="w-full h-full object-cover will-change-transform"
              loading="eager"
            />
          </picture>
          <picture className="w-1/2 h-full">
            <source srcSet="/hero-new.webp" type="image/webp" />
            <img
              src="/hero-new.jpg"
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

      {/* Simplified bottom bar with buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-lifeline-blue/80 via-lifeline-blue/70 to-lifeline-blue/80 backdrop-blur-md py-6">
        <div className="text-center">
          <p className="text-white/90 text-sm md:text-base font-medium mb-4">
            You've lived it — now help us plan for the next drought.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-lifeline-blue border-2 border-lifeline-blue hover:shadow-lg hover:shadow-lifeline-blue/20 active:bg-lifeline-blue/5 font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
              <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener" data-event="cta_survey_click">
                Take the Survey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-lifeline-blue border-2 border-lifeline-blue hover:shadow-lg hover:shadow-lifeline-blue/20 active:bg-lifeline-blue/5 font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
              <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener" data-event="cta_register_click">
                Join a Conversation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Always Visible Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-lifeline-blue/80 via-lifeline-blue/70 to-lifeline-blue/80 backdrop-blur-md py-4 sm:py-6 z-50">
        <div className="text-center">
          <p className="text-white/90 text-sm md:text-base font-medium mb-4">
            You've lived it — now help us plan for the next drought.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button asChild size="lg" className="bg-white text-lifeline-blue border-2 border-lifeline-blue hover:shadow-lg hover:shadow-lifeline-blue/20 active:bg-lifeline-blue/5 font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
              <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener" data-event="cta_survey_click">
                Take the Survey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-lifeline-blue border-2 border-lifeline-blue hover:shadow-lg hover:shadow-lifeline-blue/20 active:bg-lifeline-blue/5 font-semibold text-lg px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
              <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener" data-event="cta_register_click">
                Join a Conversation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}