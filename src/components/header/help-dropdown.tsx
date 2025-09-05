"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Phone, MessageSquare, Globe, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface HelpOption {
  label: string;
  href?: string;
  icon: React.ReactNode;
  variant?: "emergency" | "primary" | "secondary";
  children?: HelpOption[];
}

const helpOptions: HelpOption[] = [
  {
    label: "Emergency Services",
    href: "tel:000",
    icon: <AlertTriangle className="h-4 w-4" />,
    variant: "emergency"
  },
  {
    label: "Lifeline",
    icon: <Phone className="h-4 w-4" />,
    variant: "primary",
    children: [
      {
        label: "Call",
        href: `tel:${siteConfig.contacts.crisisLine}`,
        icon: <Phone className="h-3 w-3" />
      },
      {
        label: "Text",
        href: siteConfig.urls.crisisText,
        icon: <MessageSquare className="h-3 w-3" />
      },
      {
        label: "Online Chat",
        href: siteConfig.urls.crisiChat,
        icon: <Globe className="h-3 w-3" />
      }
    ]
  },
  {
    label: "13 YARN",
    href: "tel:139276",
    icon: <Phone className="h-4 w-4" />,
    variant: "secondary"
  }
];

export function HelpDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setExpandedSubmenu(null);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Lock body scroll on mobile when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const getVariantStyles = (variant?: string) => {
    switch (variant) {
      case "emergency":
        return "text-red-600 hover:text-red-700 hover:bg-red-50";
      case "primary":
        return "text-lifeline-blue hover:text-lifeline-blue/80 hover:bg-lifeline-blue/5";
      case "secondary":
        return "text-gray-700 hover:text-gray-900 hover:bg-gray-50";
      default:
        return "text-gray-700 hover:text-gray-900 hover:bg-gray-50";
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
          "bg-lifeline-blue text-white hover:bg-lifeline-blue/90",
          "focus:outline-none focus:ring-2 focus:ring-lifeline-blue/20 focus:ring-offset-2",
          "will-change-transform hover:-translate-y-0.5 hover:shadow-md",
          "whitespace-nowrap min-h-[44px]"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="sm:hidden">Help</span>
        <span className="hidden sm:inline">I want help</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <>
          {/* Mobile Sheet */}
          <div className="fixed inset-0 z-[1000] sm:hidden">
            <button 
              className="absolute inset-0 bg-black/40" 
              onClick={() => {
                setIsOpen(false);
                setExpandedSubmenu(null);
              }}
              aria-label="Close help menu"
            />
            <div className="absolute top-0 left-0 right-0 bg-white rounded-b-xl shadow-xl overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">Get help</h3>
              </div>
              <div className="max-h-[60vh] overflow-y-auto">
                {helpOptions.map((option) => (
                  <div key={option.label} className="relative">
                    {option.href ? (
                      <a
                        href={option.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-4 text-sm transition-all duration-200 min-h-[48px]",
                          getVariantStyles(option.variant),
                          "border-b border-gray-100 last:border-b-0"
                        )}
                        onClick={() => {
                          setIsOpen(false);
                          setExpandedSubmenu(null);
                        }}
                      >
                        {option.icon}
                        {option.label}
                        {option.variant === "emergency" && (
                          <span className="ml-auto text-xs text-red-500 font-medium">000</span>
                        )}
                        {option.label === "13 YARN" && (
                          <span className="ml-auto text-xs text-gray-500">13 92 76</span>
                        )}
                      </a>
                    ) : (
                      <>
                        <button
                          onClick={() => setExpandedSubmenu(
                            expandedSubmenu === option.label ? null : option.label
                          )}
                          className={cn(
                            "flex items-center gap-3 px-4 py-4 text-sm w-full text-left transition-all duration-200 min-h-[48px]",
                            getVariantStyles(option.variant),
                            "border-b border-gray-100"
                          )}
                        >
                          {option.icon}
                          {option.label}
                          <ChevronDown className={cn(
                            "h-4 w-4 ml-auto transition-transform duration-200",
                            expandedSubmenu === option.label && "rotate-180"
                          )} />
                        </button>
                        {expandedSubmenu === option.label && option.children && (
                          <div className="bg-gray-50 border-b border-gray-100">
                            {option.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="flex items-center gap-3 px-8 py-3 text-sm text-gray-600 hover:text-lifeline-blue hover:bg-white/50 transition-all duration-200 min-h-[44px]"
                                onClick={() => {
                                  setIsOpen(false);
                                  setExpandedSubmenu(null);
                                }}
                              >
                                {child.icon}
                                {child.label}
                                {child.label === "Call" && (
                                  <span className="ml-auto text-xs text-gray-400">13 11 14</span>
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Dropdown */}
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden hidden sm:block">
            {helpOptions.map((option) => (
              <div key={option.label} className="relative">
                {option.href ? (
                  <a
                    href={option.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200",
                      getVariantStyles(option.variant),
                      "border-b border-gray-100 last:border-b-0"
                    )}
                    onClick={() => {
                      setIsOpen(false);
                      setExpandedSubmenu(null);
                    }}
                  >
                    {option.icon}
                    {option.label}
                    {option.variant === "emergency" && (
                      <span className="ml-auto text-xs text-red-500 font-medium">000</span>
                    )}
                    {option.label === "13 YARN" && (
                      <span className="ml-auto text-xs text-gray-500">13 92 76</span>
                    )}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => setExpandedSubmenu(
                        expandedSubmenu === option.label ? null : option.label
                      )}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm w-full text-left transition-all duration-200",
                        getVariantStyles(option.variant),
                        "border-b border-gray-100"
                      )}
                    >
                      {option.icon}
                      {option.label}
                      <ChevronDown className={cn(
                        "h-4 w-4 ml-auto transition-transform duration-200",
                        expandedSubmenu === option.label && "rotate-180"
                      )} />
                    </button>
                    {expandedSubmenu === option.label && option.children && (
                      <div className="bg-gray-50 border-b border-gray-100">
                        {option.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 px-8 py-2.5 text-sm text-gray-600 hover:text-lifeline-blue hover:bg-white/50 transition-all duration-200 last:border-b-0"
                            onClick={() => {
                              setIsOpen(false);
                              setExpandedSubmenu(null);
                            }}
                          >
                            {child.icon}
                            {child.label}
                            {child.label === "Call" && (
                              <span className="ml-auto text-xs text-gray-400">13 11 14</span>
                            )}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}