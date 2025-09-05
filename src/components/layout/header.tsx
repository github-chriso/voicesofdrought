
'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
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
          
          {/* Unified Header Actions - All screen sizes */}
          <HeaderActions />
        </div>
      </div>
    </header>
  )
}
