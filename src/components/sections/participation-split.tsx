import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ParticipationSplit() {
  return (
    <section className="py-16 sm:py-24 bg-sky-blue/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <Card className="bg-lifeline-blue text-primary-foreground border-none overflow-hidden">
            <CardContent className="p-8 grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h3 className="font-headline text-2xl md:text-3xl font-bold">
                  Take the Survey
                </h3>
                <p className="opacity-90">
                  10–15 minutes, mobile-friendly. Skip any question. Your answers are anonymous.
                </p>
                <Button asChild size="lg" variant="secondary" className="bg-white text-lifeline-blue hover:bg-white/90">
                  <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener" data-event="cta_survey_click">
                    Take the Survey <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
                <div className="relative h-48 w-full rounded-md overflow-hidden" suppressHydrationWarning>
                <Image
                  src="/survey-800x600.webp"
                  alt="Person completing a short survey on a tablet at a rural kitchen table."
                  data-ai-hint="survey tablet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-sunshine-orange text-ink border-none overflow-hidden">
             <CardContent className="p-8 grid gap-6 md:grid-cols-2 items-center">
                <div className="space-y-4">
                    <h3 className="font-headline text-2xl md:text-3xl font-bold">
                      Join a Conversation
                    </h3>
                    <p className="opacity-90">
                    Free 90-minute session with 8–12 locals in your LGA. Light refreshments.
                    </p>
                    <Button asChild size="lg" className="bg-white text-sunshine-orange hover:bg-white/90">
                      <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener" data-event="cta_register_click">
                          Join a Conversation <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                </div>
                <div className="relative h-48 w-full rounded-md overflow-hidden" suppressHydrationWarning>
                     <Image
                        src="/conversation-800x600.webp"
                        alt="Small group conversation in a community hall with people seated in a circle."
                        data-ai-hint="community meeting"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
