import Link from "next/link"
import { siteConfig } from "@/config/site"

export function StickyCrisisBar() {
  return (
    <div className="bg-sunshine-orange text-ink font-semibold text-center text-xs md:text-sm p-2 sticky top-0 z-50">
      <p>
        If life is in danger call <a href={`tel:${siteConfig.contacts.emergency}`} className="underline underline-offset-2">{siteConfig.contacts.emergency}</a>
        <span className="mx-1 md:mx-2">·</span>
        <a href={`tel:${siteConfig.contacts.crisisLine}`} className="underline underline-offset-2">{siteConfig.contacts.crisisLine} (24/7)</a>
        <span className="mx-1 md:mx-2">·</span>
        <Link href={siteConfig.urls.crisisText} className="underline underline-offset-2">Text Us</Link>
        <span className="mx-1 md:mx-2">·</span>
        <Link href={siteConfig.urls.crisiChat} className="underline underline-offset-2">Chat Online</Link>
      </p>
    </div>
  )
}
