"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";
import { Gift, ShieldCheck, UserCheck, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <UserCheck className="h-12 w-12 text-lifeline-blue" />,
    title: "Share Your Story, Shape Our Future",
    description: "Your unique drought experience and insights will guide future local programs and services built specifically for rural life—not copied from the city.",
    details: "Join 8–12 locals in relaxed, open discussions tailored to your area. Your voice matters in shaping support that truly works for our communities.",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-lifeline-blue" />,
    title: "Safe & Confidential",
    description: "Sessions are audio-recorded but all comments are de-identified to protect your privacy. Your information is securely stored and only accessed by authorized, trauma-informed Lifeline staff.",
    details: "We create a safe space where you can speak openly about your experiences, knowing your privacy is protected.",
    hasPrivacyLink: true,
  },
  {
    icon: <Gift className="h-12 w-12 text-lifeline-blue" />,
    title: "Quick & Rewarding",
    description: "Just 90 minutes of your time can make a lasting difference. Sessions are free to attend with light refreshments provided.",
    details: "Plus, every participant enters the draw for 1 of 5 × $100 gift cards. Transport support is available on request to ensure everyone can participate. Your contribution is valued and appreciated.",
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
              <CardHeader className="p-10">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-lifeline-blue/10 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="font-headline text-2xl mb-6 text-ink leading-tight">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mb-4 text-gray-600">
                  {feature.description}
                </CardDescription>
                <CardDescription className="text-sm leading-relaxed text-gray-500">
                  {feature.details}
                </CardDescription>
                {feature.hasPrivacyLink && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link 
                      href="https://lifelinecentralwest.org.au/wp-content/uploads/2025/03/RCS_-Privacy-Policy-2025-v2.0.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-lifeline-blue hover:text-lifeline-blue/80 font-medium transition-colors"
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
