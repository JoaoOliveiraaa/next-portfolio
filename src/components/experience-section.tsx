import Image from "next/image"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

interface TimelineItemProps {
  logo: string
  title: string
  subtitle: string
  date: string
  duration?: string
}

function TimelineItem({ logo, title, subtitle, date, duration }: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background">
        <Image src={logo || "/placeholder.svg"} alt={title} width={24} height={24} />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium leading-none">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <p className="text-sm text-muted-foreground">
          {date} {duration && `• ${duration}`}
        </p>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Experience</h2>
            <Button variant="link" className="text-blue-500">
              Hire me
            </Button>
          </div>
          <div className="mt-6 space-y-6">
            <TimelineItem
              logo="/placeholder.svg"
              title="Govoni"
              subtitle="Web developer Intern - Dev Full-stack"
              date="2023 – Present"
              duration="10 month"
            />
            <TimelineItem
              logo="/placeholder.svg"
              title="Freelance NovaOdessa Idiomas"
              subtitle="I developed a website for a language school"
              date="2020"
              duration="1 month"
            />
            <TimelineItem
              logo="/placeholder.svg"
              title="Freelance BarberShop TokFinal"
              subtitle="Developed a scheduling system and portfolio website"
              date="2021"
              duration="1 month"
            />
          </div>
          <Button className="mt-6 w-full" variant="secondary">
            Download CV
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Formation</h2>
            <Button variant="link" className="text-blue-500">
              See all
            </Button>
          </div>
          <div className="mt-6 space-y-6">
            <TimelineItem
              logo="/placeholder.svg"
              title="ETEC - Development of Systems"
              subtitle="I did technical education integrated into high school"
              date="2019 – 2021"
            />
            <TimelineItem
              logo="/placeholder.svg"
              title="Full-stack development - Dio"
              subtitle="Full-stack student"
              date="2022"
              duration="3 months"
            />
            <TimelineItem
              logo="/placeholder.svg"
              title="Frontend development - Alura"
              subtitle="Frontend student"
              date="2022"
              duration="1 month"
            />
            <TimelineItem
              logo="/placeholder.svg"
              title="Frontend development - Rocketseat"
              subtitle="Frontend student"
              date="2022"
              duration="6 months"
            />
            <TimelineItem
              logo="/placeholder.svg"
              title="Engineering of Computing - UNICEP"
              subtitle="2022 – Present"
              date="2022 – Present"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

