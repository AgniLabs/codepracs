import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Button } from "./ui/button"

interface CardProps {
  cardTitle: string
  cardDescription?: string
  cardContent?: string
  cardFooter?: string
}

export function CardComponent({ cardTitle, cardDescription, cardContent, cardFooter }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{cardContent}</p>
      </CardContent>
      <CardFooter>
        <p>{cardFooter}</p>
      </CardFooter>
    </Card>
  )
}

export function CardWithForm({ cardTitle, cardDescription, cardContent, cardFooter }: CardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{cardContent}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>{cardFooter}</Button>
      </CardFooter>
    </Card>
  )
}
