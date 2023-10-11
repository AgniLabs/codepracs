export type SiteConfig = typeof siteConfig
import { env } from "@/env.mjs"

export const siteConfig = {
  name: "codepracs",
  description:
    "The go-to place where all sorts of developers can get best practices with practical and proven tips, techniques, and guides to feel ready to jump right in",
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/agnilabs",
    github: "https://github.com/AgniLabs/codepracs",
    docs: env.NEXT_PUBLIC_APP_URL,
    about: "/about",
  },
  creator: "@AgniLabs",
}
