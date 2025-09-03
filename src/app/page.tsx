import { Header } from "@/components/layout/header";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Locations } from "@/components/sections/locations";
import { PartnerStrip } from "@/components/sections/partner-strip";
import { ParticipationSplit } from "@/components/sections/participation-split";


import { WhyInvolved } from "@/components/sections/why-involved";
import { FooterCallout } from "@/components/layout/footer-callout";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow pt-20">
        <Hero />
        <WhyInvolved />
        <PartnerStrip />
        <Locations />
        <Faq />
        <ParticipationSplit />
      </main>
      <FooterCallout />
      <div className="h-32"></div>

    </div>
  );
}
