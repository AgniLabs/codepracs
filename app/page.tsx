import Link from "next/link"
import { compareDesc } from 'date-fns'
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Hero from "@/components/Hero/Hero"
import TopicCard from "@/components/TopicCard/TopicCard"
import { allTopics } from 'contentlayer/generated'
import { AlertDemo } from "@/components/alert"

export default function IndexPage() {
  const topics = allTopics.sort((a: { date: string | number | Date }, b: { date: string | number | Date }) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <AlertDemo
        title="Heads up!"
        description="NOTE! - the site is still under development but please feel free to view the code on GitHub and contribute!"
      />
      <Hero />
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.about}
          rel="noreferrer"
          className={buttonVariants()}
        >
          Get Started
        </Link>
      </div>

      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {/* {topics.map((topic: any, idx: any) => (
          <TopicCard key={idx} {...topic} />
        ))} */}
        {topics?.length ? (
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {topics.map((topic) => (
              <TopicCard key={topic._id} topic={topic} />
            ))}
          </div>
        ) : (
          <p>No topics published.</p>
        )}
      </div>
    </section>
  )
}
