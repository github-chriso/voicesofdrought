
'use client';

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7; // 70vh
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
          <header className={cn(
        // Keep the nav pinned and on top across browsers
        "fixed top-0 left-0 right-0 z-[100] bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/70 pt-safe",
        // Reduce repaint jank on Safari when scrolling with blurred backgrounds
        "will-change-transform transition-shadow duration-300",
        isScrolled && "shadow-md"
      )}>
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Block 1: Logo */}
          <Link href="/" className="flex items-center">
            <div suppressHydrationWarning className="min-w-[200px] sm:min-w-[240px] md:min-w-[240px] lg:min-w-[260px]">
              <Image
                src="/logo.png"
                alt="Lifeline Central West"
                width={280}
                height={70}
                className="h-14 w-auto"
                priority
              />
            </div>
          </Link>
          
          <div className="flex items-center gap-4 lg:gap-6 xl:gap-8">
            {/* Block 2: Empty Space / CTAs when scrolled - Hidden on mobile where bottom bar shows */}
            <div className={cn(
              "hidden xl:flex items-center gap-2 transition-all duration-300 min-w-[240px]",
              isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}>
              <Button asChild size="sm" className="bg-lifeline-blue text-white hover:bg-lifeline-blue/90">
                <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener">
                  Take the Survey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="accent" className="bg-sunshine-orange text-ink hover:bg-sunshine-orange/90">
                <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener">
                  Join a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Block 3: Emergency */}
            <div className="hidden lg:flex flex-col items-start text-sm">
              <span className="font-semibold text-primary text-sm">If life in danger call</span>
              <a href={`tel:${siteConfig.contacts.emergency}`} className="font-semibold text-primary hover:underline text-sm">
                Triple Zero {siteConfig.contacts.emergency}
              </a>
            </div>
            
            {/* Block 4: Crisis Line */}
            <div className="hidden lg:flex flex-col items-start text-sm">
              <a href={`tel:${siteConfig.contacts.crisisLine}`} className="font-semibold text-primary hover:underline flex items-center gap-1">
                Call {siteConfig.contacts.crisisLine} <ArrowRight className="w-3 h-3 text-orange-500" />
              </a>
              <span className="text-xs text-green-600">24/7 Crisis Support</span>
            </div>
            
            {/* Block 5: Online Services */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-start text-sm">
                <Link href={siteConfig.urls.crisisText} target="_blank" rel="noopener" className="font-semibold text-primary hover:underline flex items-center gap-1">
                  Text us <ArrowRight className="w-3 h-3 text-orange-500" />
                </Link>
                <span className="text-xs text-green-600">Online</span>
              </div>
              <div className="flex flex-col items-start text-sm">
                <Link href={siteConfig.urls.crisiChat} target="_blank" rel="noopener" className="font-semibold text-primary hover:underline flex items-center gap-1">
                  Chat with us <ArrowRight className="w-3 h-3 text-orange-500" />
                </Link>
                <span className="text-xs text-green-600">Online</span>
              </div>
            </div>

            {/* Mobile emergency/crisis slide-over */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" aria-label="Emergency and crisis options">Emergency</Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] sm:w-[380px]">
                  <SheetHeader>
                    <SheetTitle>Emergency & Crisis Support</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">If life is in danger call</p>
                      <a href={`tel:${siteConfig.contacts.emergency}`} className="text-lg font-semibold text-primary underline-offset-2 hover:underline">
                        Triple Zero {siteConfig.contacts.emergency}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">24/7 Crisis Support</p>
                      <a href={`tel:${siteConfig.contacts.crisisLine}`} className="text-lg font-semibold text-primary underline-offset-2 hover:underline">
                        Call {siteConfig.contacts.crisisLine}
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Link href={siteConfig.urls.crisisText} target="_blank" rel="noopener" className="text-center">
                        <Button className="w-full">Text us</Button>
                      </Link>
                      <Link href={siteConfig.urls.crisiChat} target="_blank" rel="noopener" className="text-center">
                        <Button variant="secondary" className="w-full">Chat</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
