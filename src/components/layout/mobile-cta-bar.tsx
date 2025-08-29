import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function MobileCtaBar() {
  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t z-50 pb-safe">
      <div className="p-3">
        <div className="grid grid-cols-2 gap-2">
          <Button asChild size="lg" className="bg-lifeline-blue text-white">
            <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener">
              Take the Survey
            </Link>
          </Button>
          <Button asChild size="lg" variant="accent" className="bg-sunshine-orange text-ink">
            <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener">
              Join a Conversation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
