/**
 * Shared TypeScript interfaces and types for the application
 */

import { type siteConfig } from "@/config/site";

// Site configuration types
export type SiteConfig = typeof siteConfig;

// Location data structure
export interface LocationData {
  lga: string;
  towns: string[];
}

// FAQ data structure
export interface FAQItem {
  question: string;
  answer: string;
}

// Partner data structure
export interface Partner {
  name: string;
  logo: string;
  hint?: string;
}

// Contact information structure
export interface ContactInfo {
  phone: string;
  email: string;
  emergency: string;
  crisisLine: string;
}

// URL configuration structure
export interface URLConfig {
  qualtricsSurvey: string;
  humanitixRegister: string;
  crisisText: string;
  crisiChat: string;
}

// Theme and styling types
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'accent';

// Component prop types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface WithVariant<T = ButtonVariant> {
  variant?: T;
}

export interface WithSize<T = Size> {
  size?: T;
}

// Animation and motion preferences
export interface MotionPrefs {
  prefersReducedMotion: boolean;
}

// Feature flags and environment
export interface EnvironmentConfig {
  isDevelopment: boolean;
  isProduction: boolean;
  features: {
    animations: boolean;
    analytics: boolean;
  };
}