"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/section-title";

const partners = [
  { name: "Orange City Council", logo: "/council_logos_webp_400x160/orange_tp_400x160.webp", hint: "council crest" },
  { name: "Cabonne Council", logo: "/council_logos_webp_400x160/cabonne_tp_400x160.webp", hint: "council crest" },
  { name: "Cowra Council", logo: "/council_logos_webp_400x160/cowra_tp_400x160.webp", hint: "council crest" },
  { name: "Blayney Shire Council", logo: "/council_logos_webp_400x160/blayney_tp_400x160.webp", hint: "council crest" },
  { name: "Weddin Shire Council", logo: "/council_logos_webp_400x160/weddin_tp_400x160.webp", hint: "council crest" },
];


export function PartnerStrip() {
  return (
    <section className="py-8 bg-background">
      <div className="container">
        <div className="text-center">
          <SectionTitle className="text-2xl">A project supported by</SectionTitle>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner) => (
            <div key={partner.name} className="relative h-[72px] w-[180px]" title={partner.name} suppressHydrationWarning>
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                data-ai-hint={partner.hint}
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
