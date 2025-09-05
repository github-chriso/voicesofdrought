/**
 * Environment configuration and feature flags
 * Centralized environment management for consistent behavior across the application
 */

import type { EnvironmentConfig } from "@/types";

// Environment detection
const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

// Feature flags based on environment
export const env: EnvironmentConfig = {
  isDevelopment,
  isProduction,
  features: {
    // Enable animations in production, but respect user preferences
    animations: true,
    // Enable analytics only in production
    analytics: isProduction,
  },
} as const;

// Development helpers
export const isDev = isDevelopment;
export const isProd = isProduction;

// API endpoints configuration
export const apiConfig = {
  // Add API endpoints here when needed
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
} as const;

// Client-side environment checks
export const getMotionPreferences = (): boolean => {
  if (typeof window === "undefined") return false;
  
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
};

// Development utilities
export const devLog = (...args: unknown[]) => {
  if (isDevelopment) {
    console.log("[DEV]", ...args);
  }
};

export const devWarn = (...args: unknown[]) => {
  if (isDevelopment) {
    console.warn("[DEV WARNING]", ...args);
  }
};

export const devError = (...args: unknown[]) => {
  if (isDevelopment) {
    console.error("[DEV ERROR]", ...args);
  }
};