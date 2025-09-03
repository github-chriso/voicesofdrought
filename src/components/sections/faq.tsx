"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import SectionTitle from "@/components/ui/section-title";

export function Faq() {
  return (
    <section className="py-16 sm:py-24 bg-lifeline-blue/10">
      <div className="container max-w-4xl">
        <div className="text-center">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
        </div>
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {siteConfig.faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b-0 bg-background rounded-lg shadow-sm px-6">
                <AccordionTrigger className="text-lg font-headline text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
