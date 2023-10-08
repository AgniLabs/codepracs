import { allTopics } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { env } from "@/env.mjs"
import { absoluteUrl, cn } from "@/lib/utils"
import { Mdx } from "@/components/mdx-components"
import "@/styles/mdx.css"

interface TopicPageProps {
    params: {
        slug: string[]
    }
}

function getTopicFromParams(params: { slug: any }) {
    const slug = params.slug?.join("/") || ""
    const topic = allTopics.find((topic) => topic._raw.flattenedPath === slug)
    console.log("topic", topic)

    if (!topic) {
        null
    }

    return topic
}

export async function generateStaticParams() {
    return allTopics.map((topic) => ({
        slug: topic.slugAsParams.split("/"),
    }))
}

export async function generateMetadata({
    params,
}: TopicPageProps): Promise<Metadata> {
    const topic = await getTopicFromParams(params)

    if (!topic) {
        return {}
    }

    const url = env.NEXT_PUBLIC_APP_URL

    const ogUrl = new URL(`${url}/api/og`)
    ogUrl.searchParams.set("heading", topic.title)
    ogUrl.searchParams.set("type", "Topic")
    ogUrl.searchParams.set("mode", "dark")

    return {
        title: topic.title,
        description: topic.description,
        openGraph: {
            title: topic.title,
            description: topic.description,
            type: "article",
            url: absoluteUrl(topic.slug),
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: topic.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: topic.title,
            description: topic.description,
            images: [ogUrl.toString()],
        },
    }
}

const TopicLayout = ({ params }: TopicPageProps) => {
    const topic = getTopicFromParams(params)

    if (!topic) {
        notFound()
    }

    return (
        <div>
            <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                {topic.title}
            </h1>
            <time className="my-4 block text-sm text-zinc-400" dateTime={topic.date}>
                {format(parseISO(topic.date), 'LLLL d, yyyy')}
            </time>
            <article className="prose dark:prose-invert">
                {/* <MDXContent components={mdxComponents} /> */}
            </article>
            <Mdx code={topic.body.code} />
        </div>
    )
}

export default TopicLayout