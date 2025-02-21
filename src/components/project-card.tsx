import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import spotifyImage from "@/assets/spotify.jpg"
import formDarkWhiteImage from "@/assets/formdarkwhite.jpg"

interface ProjectCardProps {
  title: string
  description: string
  image: "spotify" | "formdarkwhite"
  visitUrl: string
  sourceUrl: string
}

export function ProjectCard({ title, description, image, visitUrl, sourceUrl }: ProjectCardProps) {
  const imageMap = {
    spotify: spotifyImage,
    formdarkwhite: formDarkWhiteImage,
  }

  return (
    <Card className="overflow-hidden">
      <Image
        src={imageMap[image] || "/placeholder.svg"}
        alt={title}
        width={600}
        height={300}
        className="aspect-video object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="gap-2 p-6 pt-0">
        <Button asChild>
          <a href={visitUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Source Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

