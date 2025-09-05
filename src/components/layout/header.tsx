
'use client';

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HeaderActions } from "@/components/header/header-actions";

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
        "fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-200 shadow-sm pt-safe",
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
                src="/logo-new.webp"
                alt="Lifeline Central West"
                width={280}
                height={70}
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 240px, 200px"
                className="h-14 w-auto"
                priority
              />
            </div>
          </Link>
          
          <div className="flex items-center gap-2 lg:gap-4 xl:gap-6 2xl:gap-8">
            
            {/* Unified Header Actions - Desktop and up */}
            <div className="hidden md:flex">
              <HeaderActions />
            </div>

            {/* Mobile (under 768px) - Emergency button with sheet */}
            <div className="md:hidden">
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
