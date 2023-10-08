import { Topic } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { formatDate } from "@/lib/utils"

type TopicCardProps = {
    topic: {
        _id: string;
        title: string;
        description?: string;
        date?: string | number; // or whatever type you use for date
        slug: string;
    };
};

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
    return (
        <article
            key={topic._id}
            className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
        >
            <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                    <h2 className="text-xl font-medium tracking-tight">
                        {topic.title}
                    </h2>
                    {topic.description && (
                        <p className="text-muted-foreground">{topic.description}</p>
                    )}
                </div>
                {topic.date && (
                    <p className="text-sm text-muted-foreground">
                        {formatDate(topic.date)}
                    </p>
                )}
            </div>
            <Link href={topic.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
            </Link>
        </article>
    );
}

export default TopicCard;


// export function TopicCard({ topic }) {
//     return (
//         <article className="flex flex-col items-start justify-between">
//             <div className="flex items-center gap-x-4 text-xs">
//                 <time dateTime={topic.date}>
//                     {format(parseISO(topic.date), 'LLLL d, yyyy')}
//                 </time>
//             </div>
//             <div className="group relative">
//                 <h3 className="mt-3 text-lg font-semibold leading-6">
//                     <Link className="link" href={topic.slug}>
//                         <span className="absolute inset-0" />
//                         {topic.title}
//                     </Link>
//                 </h3>
//                 <p className="mt-5 line-clamp-3 text-sm leading-6">
//                     {topic.description}
//                 </p>
//             </div>
//         </article>
//     )
// }