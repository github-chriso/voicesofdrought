import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function ParticipationSplit() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <Link href={siteConfig.urls.qualtricsSurvey} target="_blank" rel="noopener" data-event="cta_survey_click" className="block group">
            <Card className="bg-white/95 backdrop-blur-xl border border-gray-200/30 text-gray-900 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-lifeline-blue/30 cursor-pointer">
              <CardContent className="p-6 grid gap-6 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="font-headline text-xl md:text-2xl font-bold group-hover:text-lifeline-blue transition-colors">
                    Take the Survey
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-lifeline-blue mr-3 mt-1">•</span>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        10–15 minutes, mobile-friendly
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-lifeline-blue mr-3 mt-1">•</span>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        Skip any question, answers anonymous
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-lifeline-blue mr-3 mt-1">•</span>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        Share your drought experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-56 w-full rounded-md overflow-hidden" suppressHydrationWarning>
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
          </Link>

          <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener" data-event="cta_register_click" className="block group">
            <Card className="bg-white/95 backdrop-blur-xl border border-gray-200/30 text-gray-900 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-lifeline-blue/30 cursor-pointer">
               <CardContent className="p-6 grid gap-6 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                      <h3 className="font-headline text-xl md:text-2xl font-bold group-hover:text-lifeline-blue transition-colors">
                        Join a Conversation
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <span className="text-lifeline-blue mr-3 mt-1">•</span>
                          <p className="text-sm text-gray-600 leading-relaxed flex-1">
                            Free 90-minute session
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-lifeline-blue mr-3 mt-1">•</span>
                          <p className="text-sm text-gray-600 leading-relaxed flex-1">
                            8–12 locals in your LGA
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-lifeline-blue mr-3 mt-1">•</span>
                          <p className="text-sm text-gray-600 leading-relaxed flex-1">
                            Light refreshments provided
                          </p>
                        </div>
                      </div>
                  </div>
                  <div className="relative h-56 w-full rounded-md overflow-hidden" suppressHydrationWarning>
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
          </Link>
        </div>
      </div>
    </section>
  );
}
