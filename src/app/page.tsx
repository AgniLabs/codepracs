import Link from "next/link"
import { siteConfig } from "@/src/config/site"
import { buttonVariants } from "@/src/components/ui/button"
import Hero from "@/src/components/Hero/Hero"
import RoundedCard from "@/src/components/RoundedCard/RoundedCard"
import { AlertDemo } from "@/src/components/alert"

export default function IndexPage() {

  return (
    <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <AlertDemo
        title="Heads up!"
        description="NOTE! - the site is still under development but please feel free to view the code on GitHub and contribute!"
      />
      <Hero />
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.topics}
          rel="noreferrer"
          className={buttonVariants()}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
