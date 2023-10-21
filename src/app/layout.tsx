import "@/src/styles/globals.css"
import { Metadata } from "next"
import { env } from "@/env.mjs"
import { siteConfig } from "@/src/config/site"
import { fontMono, fontSans } from "@/src/lib/fonts"
import { cn } from "@/src/lib/utils"
import { SiteHeader } from "@/src/components/site-header"
import { TailwindIndicator } from "@/src/components/tailwind-indicator"
import { ThemeProvider } from "@/src/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: env.NEXT_PUBLIC_APP_URL,
    siteName: `${siteConfig.name}' site`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: siteConfig.name,
    card: 'summary_large_image',
    creator: siteConfig.creator,
  },
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col items-center justify-center">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

