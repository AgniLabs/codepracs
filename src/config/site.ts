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
    {
      title: "Topics",
      href: "/topics",
    },
  ],
  links: {
    twitter: "https://twitter.com/AgniLabs",
    github: "https://github.com/AgniLabs/codepracs",
    docs: env.NEXT_PUBLIC_APP_URL,
    about: "/about",
    topics: "/topics",
  },
  creator: "@AgniLabs",
}
