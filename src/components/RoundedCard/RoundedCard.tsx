import Link from 'next/link'
import { formatDate } from "~/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"
import { Route } from 'next';

type RoundedCardProps = {
    _id: string;
    title: string;
    description?: string;
    date?: string | number;
    slug: string;
};

const RoundedCard: React.FC<RoundedCardProps> = ({ _id, title, description, date, slug }) => {
    return (
        <Card
            key={_id}
            className="group relative transition-shadow hover:shadow-lg"
        >
            <CardHeader className="flex flex-col justify-between pt-6">
                <CardContent className="space-y-2">
                    <CardTitle className="text-xl font-medium tracking-tight">
                        {title}
                    </CardTitle>
                    {description && (
                        <CardDescription className="text-muted-foreground">
                            {description}
                        </CardDescription>
                    )}
                </CardContent>
                {date && (
                    <CardFooter className="text-sm text-muted-foreground">
                        {formatDate(date)}
                    </CardFooter>
                )}
            </CardHeader>
            <Link href={slug as Route} className="absolute inset-0">
                <span className="sr-only">View</span>
            </Link>
        </Card>
    );
}

export default RoundedCard;