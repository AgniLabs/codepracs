import { Terminal, Waves } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

type AlertDemoProps = {
    title: string;
    description: string;
}

export function AlertDemo({ title, description }: AlertDemoProps) {
    return (
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    )
}

