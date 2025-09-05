"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { Gift, ShieldCheck, UserCheck, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <UserCheck className="h-12 w-12 text-lifeline-blue" />,
    title: "Share Your Story",
    points: [
      "Your drought experience guides local programs",
      "Built specifically for rural life",
      "Not copied from city solutions"
    ],
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-lifeline-blue" />,
    title: "Safe & Confidential",
    points: [
      "Sessions are recorded but de-identified",
      "Only authorized Lifeline staff access information",
      "Your privacy is protected"
    ],
    hasPrivacyLink: true,
  },
  {
    icon: <Gift className="h-12 w-12 text-lifeline-blue" />,
    title: "Quick & Rewarding",
    points: [
      "90 minutes of your time",
      "Free sessions with refreshments",
      "Enter to win 1 of 5 × $100 gift cards"
    ],
  },
];

export function WhyInvolved() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cards = sectionRef.current.querySelectorAll("[data-why-card]");
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      cards,
      { autoAlpha: 0, y: 16, rotateX: 4 },
      {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "power3.out",
        stagger: prefersReducedMotion ? 0 : 0.05,
      }
    );

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      once: true,
      onEnter: () => tl.play(),
    });

    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle>Why Get Involved</SectionTitle>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-why-card
              className="text-center border-2 border-gray-100 shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-2 hover:shadow-xl hover:border-lifeline-blue/20 focus-within:-translate-y-2 focus-within:shadow-xl focus-within:border-lifeline-blue/20"
            >
              <CardHeader className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-lifeline-blue/10 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="font-headline text-xl mb-4 text-ink leading-tight">
                  {feature.title}
                </CardTitle>
                <div className="text-left space-y-2">
                  {feature.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start">
                      <span className="text-lifeline-blue mr-3 mt-1">•</span>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                {feature.hasPrivacyLink && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link 
                      href="https://lifelinecentralwest.org.au/wp-content/uploads/2025/03/RCS_-Privacy-Policy-2025-v2.0.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-lifeline-blue hover:text-lifeline-blue/80 font-medium transition-colors"
                    >
                      Learn more about our privacy policy
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
