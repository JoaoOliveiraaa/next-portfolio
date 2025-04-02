"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function ProjectsPage() {
  const { theme } = useTheme()

  const projects = [
    {
      title: "JavaScript Banner",
      description: "Just a banner with some effects",
      image: "/img/portfoliodev.jpg",
      tags: ["JavaScript", "HTML", "CSS"],
      visitUrl: "https://example.com/project1",
      sourceUrl: "https://github.com/joaopedro/project1",
    },
    {
      title: "Spotify Web Player Clone",
      description: "Cloning spotify web player for training css",
      image: "/img/spotify.jpg",
      tags: ["React", "CSS", "Spotify API"],
      visitUrl: "https://example.com/project2",
      sourceUrl: "https://github.com/joaopedro/project2",
    },
    {
      title: "Barbearia",
      description: "Sistema de agendamento e site portfólio",
      image: "/img/barbershop.jpg",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      visitUrl: "https://example.com/project3",
      sourceUrl: "https://github.com/joaopedro/project3",
    },
    {
      title: "Nova Odessa Idiomas",
      description: "Website para escola de idiomas",
      image: "/img/novaodessaidiomass.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      visitUrl: "https://example.com/project4",
      sourceUrl: "https://github.com/joaopedro/project4",
    },
    {
      title: "Formulário Dark/White",
      description: "Formulário com modo escuro e claro",
      image: "/img/formdarkwhite.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      visitUrl: "https://example.com/project5",
      sourceUrl: "https://github.com/joaopedro/project5",
    },
    {
      title: "Link Tree",
      description: "Clone do Linktree para links de redes sociais",
      image: "/img/linktreecard.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      visitUrl: "https://example.com/project6",
      sourceUrl: "https://github.com/joaopedro/project6",
    },
    {
      title: "Cartão de Contato",
      description: "Design de cartão virtual de contato",
      image: "/img/cardcontato.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      visitUrl: "https://example.com/project7",
      sourceUrl: "https://github.com/joaopedro/project7",
    },
    {
      title: "Banner Home",
      description: "Banner para página principal de site",
      image: "/img/bannerhome.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      visitUrl: "https://example.com/project8",
      sourceUrl: "https://github.com/joaopedro/project8",
    }
  ]

  return (
    <div className="py-6 md:py-8">
      <div className="px-4 md:px-6 py-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
        <div className="flex justify-between items-center mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-bold">Meus projetos</h1>
          <Link href="/projects" className="text-blue-500 hover:underline text-sm md:text-base">Ver todos</Link>
        </div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid gap-6 md:gap-8 items-center ${index % 2 === 0 ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.2fr]"}`}
            >
              {/* Project Image with macOS window style */}
              <div className={`relative rounded-xl overflow-hidden border shadow-lg ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <div className="absolute top-0 left-0 right-0 h-7 bg-gray-200 dark:bg-gray-800 flex items-center px-3 z-10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover pt-7"
                />
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 0 ? "md:order-2 md:text-right" : "md:order-1 text-left"}`}>
                <h2 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4 text-muted-foreground text-sm md:text-base">{project.description}</p>
                <div className={`flex flex-wrap gap-2 mb-4 md:mb-6 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="px-2 py-1 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className={`flex gap-3 md:gap-4 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                  <Button asChild size="sm" className="rounded-lg">
                    <Link href={project.visitUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span className="text-xs md:text-sm">Visitar</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-lg">
                    <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span className="text-xs md:text-sm">Código</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

