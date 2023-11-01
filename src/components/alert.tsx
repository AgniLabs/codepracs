import { Terminal, Waves } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"

type AlertDemoProps = {
  title: string
  description: string
  variant?: "default" | "destructive" | null | undefined
}

export function AlertDemo({ title, description, variant }: AlertDemoProps) {
  return (
    <Alert variant={variant}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
