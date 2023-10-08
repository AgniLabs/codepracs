import { env } from "@/env.mjs"
import { allTopics } from "contentlayer/generated"

export default async function sitemap() {
  const topics = allTopics.map((topic) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${topic.slug}`,
    lastModified: topic.date,
  }))

  const routes = ["", "/about"].map((route) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...topics]
}
