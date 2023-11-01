import Link from "next/link"
import { siteConfig } from "~/config/site"
import { buttonVariants } from "~/components/ui/button"
import Hero from "~/components/Hero/Hero"
import { AlertDemo } from "~/components/alert"
import { Route } from "next"

export default function IndexPage() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <AlertDemo
        title="Heads up!"
        description="NOTE! - this site is still a work in progress! Please feel free to view the code on GitHub and contribute!"
      />
      <Hero />
      <div className="flex gap-4">
        <Link href={siteConfig.links.topics as Route} rel="noreferrer" className={buttonVariants()}>
          Get Started
        </Link>
      </div>
    </section>
  )
}
