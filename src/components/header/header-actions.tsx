import { CTAButton } from "@/components/ui/cta-button";
import { siteConfig } from "@/config/site";

/**
 * Header action buttons providing quick access to emergency and crisis support options.
 * Uses the unified CTAButton component for consistent styling across the application.
 * 
 * Includes:
 * - Emergency (red button for 000 calls)
 * - Call (primary button for crisis line 131114)  
 * - Text (outline button for crisis text support)
 * - Chat (outline button for online crisis chat)
 * 
 * @example
 * ```tsx
 * <HeaderActions />
 * ```
 */
export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <CTAButton href={`tel:${siteConfig.contacts.emergency}`} variant="emergency" size="sm">
        Emergency
      </CTAButton>
      <CTAButton href={`tel:${siteConfig.contacts.crisisLine}`} variant="primary" size="sm">
        Call
      </CTAButton>
      <CTAButton href={siteConfig.urls.crisisText} variant="outline" size="sm" target="_blank" rel="noopener noreferrer">
        Text
      </CTAButton>
      <CTAButton href={siteConfig.urls.crisiChat} variant="outline" size="sm" target="_blank" rel="noopener noreferrer">
        Chat
      </CTAButton>
    </div>
  );
}