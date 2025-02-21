import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { TerminalDemo } from "@/components/terminal"
import profileImage from "../assets/profilesite.png"

export function ProfileHeader() {
  const technologies = ["css", "javascript", "bootstrap", "typescript", "react", "node", "shadcn/ui"]

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Image
            src={profileImage || "/profilesite.png"}
            alt="Joao Oliveira"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Joao Oliveira</h1>
            <p className="text-muted-foreground">
              Front-End Developer at{" "}
              <a href="#" className="text-blue-500 hover:underline">
                @Govoni
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[300px]">
        <TerminalDemo />
      </div>
    </div>
  )
}

