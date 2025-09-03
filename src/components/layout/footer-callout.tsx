import { siteConfig } from "@/config/site";
import { Mail, Phone } from "lucide-react";

export function FooterCallout() {
  return (
    <footer id="contact" className="bg-lifeline-blue text-primary-foreground mb-32">
      <div className="container py-12 text-center">
        <h2 className="font-headline text-2xl md:text-3xl font-bold">
          Questions or need help?
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          <a
            href={`tel:${siteConfig.contacts.phone}`}
            className="flex items-center gap-2 text-lg hover:underline underline-offset-4"
          >
            <Phone size={20} />
            <span>{siteConfig.contacts.phone}</span>
          </a>
          <a
            href={`mailto:${siteConfig.contacts.email}`}
            className="flex items-center gap-2 text-lg hover:underline underline-offset-4"
          >
            <Mail size={20} />
            <span>{siteConfig.contacts.email}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
