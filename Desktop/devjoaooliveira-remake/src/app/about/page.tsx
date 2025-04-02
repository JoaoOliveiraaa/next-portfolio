"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Download, ExternalLink } from "lucide-react"

export default function AboutPage() {
  const { theme } = useTheme()

  const experiences = [
    {
      company: "Govoni",
      logo: "/img/govoni.png",
      role: "Web developer Intern - Dev Web Full-stack",
      period: "2023 – Present ",
    },
    {
      company: "Freelance NovaOdessa Idiomas",
      logo: "/img/novaodessaidiomas.png",
      role: "I developed a website for a language school",
      period: "2020 – 1 month",
    },
    {
      company: "Freelance BarberShop TokFinal",
      logo: "/img/barber.png",
      role: "Developed a scheduling system and portfolio website",
      period: "2021 – 1month",
    },
  ]

  const education = [
    {
      institution: "ETEC - Development of Systems",
      logo: "/img/etec.png",
      description: "I did technical education integrated into high school",
      period: "2019 – 2021",
    },
    {
      institution: "Full-stack development - Dio",
      logo: "/img/dio.png",
      description: "Full-stack student",
      period: "2022 – 3 months",
    },
    {
      institution: "Frontend development - Alura",
      logo: "/img/alura.png",
      description: "Frontend student",
      period: "2022 – 1 month",
    },
    {
      institution: "Frontend development - Rocketseat",
      logo: "/img/rocketseat.png",
      description: "Frontend student",
      period: "2022 – 6 months",
    },
    {
      institution: "Engineering of Computing - UNICEP",
      logo: "/img/uniceps.png",
      description: "",
      period: "2022 – Present",
    },
  ]

  return (
    <div className="py-6 md:py-8">
      {/* Header section with photo and intro */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 mb-8 md:mb-12">
        <img 
          src="/img/profilesite.png" 
          alt="João Oliveira" 
          className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
        />

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">João Oliveira</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
            Front-End Developer at{" "}
            <Link href="https://www.govoni.com.br/" target="_blank" className="text-primary">
              @Govoni
            </Link>
          </p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            <Badge variant="secondary" className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs">css</Badge>
            <Badge variant="secondary" className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs">javascript</Badge>
            <Badge variant="secondary" className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs">bootstrap</Badge>
            <Badge variant="secondary" className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs">typescript</Badge>
            <Badge variant="secondary" className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs">react</Badge>
            <Badge variant="secondary" className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs">node</Badge>
            <Badge variant="secondary" className="px-1.5 md:px-2 py-0.5 md:py-1 text-xs">shadcn/ui</Badge>
          </div>
        </div>

        {/* Terminal component */}
        <div className="bg-black text-white rounded-md overflow-hidden w-max-w-[300px] md:min-w-[300px] h-[100px] md:h-[120px] mt-4 md:mt-0">
          <div className="flex items-center justify-between p-1.5 md:p-2 border-b border-white/10">
            <span className="text-xs md:text-sm">Terminal</span>
            <Button variant="outline" size="icon" className="h-4 w-4 md:h-5 md:w-5 p-0 border-white/20 bg-transparent hover:bg-transparent">
              <span className="sr-only">Maximize</span>
              <svg className="h-2 w-2 md:h-3 md:w-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="1" strokeWidth="2" />
              </svg>
            </Button>
          </div>
          <div className="p-2 md:p-4 font-mono">
            <p className="text-xs md:text-sm">
              <span className="text-purple-400">- npx</span> Nice to meet you!
            </p>
          </div>
        </div>
      </div>

      {/* About me section */}
      <div className="bg-gray-50 dark:bg-gray-900 p-4 md:p-6 rounded-lg mb-6 md:mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">About me</h2>
        <div className="space-y-3 md:space-y-4 text-sm md:text-base">
          <p>
            Hello! My name is João Pedro, and I'm passionate about turning ideas into reality. Ever since my early days
            in programming, back in my childhood, I dove headfirst into this fascinating universe, and I haven't stopped
            evolving since. As a constantly growing front-end developer, I'm here to take your vision to the next level!
            Whether you're an ambitious entrepreneur, a promising startup, or an established company looking for a
            striking online presence, I'm here to help.
          </p>
          <p>
            With expertise in creating breathtaking landing pages and e-commerce platforms, I'm ready to make your brand
            irresistible in the digital world. From conception to implementation, every line of code is carefully
            crafted to ensure an exceptional user experience and results that exceed expectations. Let's transform your
            vision into reality together! Get in touch with me today, and let's start building the digital future of
            your brand. I'm ready to make your project the next internet sensation!
          </p>
        </div>
      </div>

      {/* Experience and Formation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Experience section */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 md:p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Experience</h2>
            <Button variant="link" className="text-blue-500 p-0 h-auto text-xs md:text-sm">
              Hire me
            </Button>
          </div>
          <div className="space-y-4 md:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-3 md:gap-4 group transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:translate-x-1">
                <div className="relative">
                  <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-100 dark:bg-blue-900 overflow-hidden">
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="h-8 w-8 md:h-10 md:w-10 object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base">{exp.company}</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{exp.role}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" className="w-full mt-4 md:mt-6 text-xs md:text-sm">
            Download CV
          </Button>
        </div>

        {/* Formation section */}
        <div className="bg-gray-50 dark:bg-gray-900 p-4 md:p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Formation</h2>
            <Button variant="link" className="text-blue-500 p-0 h-auto text-xs md:text-sm">
              See all
            </Button>
          </div>
          <div className="space-y-4 md:space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-3 md:gap-4 group transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg hover:translate-x-1">
                <div className="relative">
                  <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-100 dark:bg-blue-900 overflow-hidden">
                    <img 
                      src={edu.logo} 
                      alt={edu.institution} 
                      className="h-8 w-8 md:h-10 md:w-10 object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-sm md:text-base">{edu.institution}</h3>
                  {edu.description && (
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
                  )}
                  <p className="text-xs text-gray-500 dark:text-gray-400">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

