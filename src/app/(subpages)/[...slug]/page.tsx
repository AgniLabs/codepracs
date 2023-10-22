import { allTopics } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { env } from "@/env.mjs"
import { absoluteUrl, cn } from "@/src/lib/utils"
import { Mdx } from "@/src/components/mdx-components"
import "@/src/styles/mdx.css"
import RoundedCard from '@/src/components/RoundedCard/RoundedCard'
import fs from 'fs';
import path from 'path';
import FolderCards from '@/src/components/FolderCards/FolderCards'

interface TopicPageProps {
    params: {
        slug: string[]
    }
}

async function getTopicFromParams(params: { slug: string[] }) {
    const slug = params?.slug?.join("/")
    const topic = allTopics.find((topic) => topic.slug === `/${slug}`)

    if (!topic) {
        return null
    }

    return topic
}

async function getMatchingTopics(params: { slug: string[] }) {
    const slug = params?.slug?.join("/") || '';
    const slugSegmentCount = slug.split('/').length;

    const filteredTopics = allTopics.filter(topic => {
        const topicSlugSegments = topic.slug.split('/');
        // Remove the last segment from topic.slug
        const topicSlugUpToSecondLast = topicSlugSegments.slice(0, -1).join('/');
        // Check if the remaining part of topic.slug matches the specified slug
        const matchesSlug = topicSlugUpToSecondLast === `/${slug}`;
        return matchesSlug
    });

    return filteredTopics.length > 0 ? filteredTopics : null;
}

async function getFolders(params: { slug: string[] }): Promise<string[] | null> {
    const slug = params?.slug?.join("/");
    const folderPath = path?.join(process.cwd(), slug);

    if (!folderPath || !fs.existsSync(folderPath)) {
        return null;
    }

    const files = fs?.readdirSync(folderPath, { withFileTypes: true });
    const folders = files?.filter(file => file.isDirectory()).map(dir => dir.name);

    return folders || null;
}

// export async function generateStaticParams(): Promise<
//     TopicPageProps["params"][]
// > {
//     return allTopics.map((topic) => ({
//         slug: topic.slugAsParams.split("/"),
//     }))
// }

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

export default async function TopicPage({ params }: TopicPageProps) {
    const folders = await getFolders(params)
    const availableTopics = await getMatchingTopics(params)
    const topic = await getTopicFromParams(params)
    const slug = `/${params?.slug?.join("/") || ''}`;

    if (topic) {
        return (
            <div>
                <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl'>
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

    if (availableTopics || folders) {
        return (
            <>
                {folders ?
                    <FolderCards slug={slug} folders={folders} />
                    :
                    <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl'>
                        No sub-topic folders published
                    </h1>}
                <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">

                    {availableTopics?.length ? (
                        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                            {availableTopics.map((availableTopic) => (
                                <RoundedCard key={availableTopic._id} _id={availableTopic._id} title={availableTopic.title} description={availableTopic.description} date={availableTopic.date} slug={availableTopic.slug} />
                            ))}
                        </div>
                    ) : (
                        <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl'>
                            No topics published
                        </h1>
                    )}

                </div>
            </>
        )
    }

    if (!topic || !availableTopics) {
        notFound()
    }


}