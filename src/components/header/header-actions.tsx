import { HelpDropdown } from "./help-dropdown";

/**
 * Header actions providing consolidated access to all help and crisis support options.
 * Features a single dropdown that organizes all support services under "I want help".
 * 
 * Includes:
 * - Emergency Services (000)
 * - Lifeline (with sub-options: Call 13 11 14, Text, Online Chat)
 * - 13 YARN (13 92 76)
 * 
 * @example
 * ```tsx
 * <HeaderActions />
 * ```
 */
export function HeaderActions() {
  return <HelpDropdown />;
}