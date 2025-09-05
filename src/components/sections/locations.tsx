import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";

export function Locations() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center">
          <SectionTitle>Locations & Dates</SectionTitle>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Find a community conversation happening near you. Sessions are being held across five Local Government Areas.
          </p>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {siteConfig.locations.map((location, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-headline hover:no-underline">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>{location.lga}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-9 pt-2">
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {location.towns.map((town) => (
                        <li key={town}>{town}</li>
                      ))}
                    </ul>
                    <Button asChild variant="link" className="px-0 mt-4 h-auto text-primary">
                        <Link href={siteConfig.urls.humanitixRegister} target="_blank" rel="noopener">
                            See times & book <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
