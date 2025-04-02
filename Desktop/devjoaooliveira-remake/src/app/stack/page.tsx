"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Code2, Database, Layout, Server, Smartphone, Terminal } from "lucide-react"

export default function StackPage() {
  const { theme } = useTheme()

  const stackCategories = [
    {
      title: "Front-end",
      description: "Tecnologias para desenvolvimento da interface do usuário",
      icon: Layout,
      items: [
        { name: "HTML", icon: "/img/html.png" },
        { name: "CSS", icon: "/img/css.png" },
        { name: "JavaScript", icon: "/img/js.png" },
        { name: "TypeScript", icon: "/img/typescript.png" },
        { name: "React", icon: "/img/react.png" },
        { name: "Angular", icon: "/img/angular.png" },
        { name: "Vue", icon: "/img/vue.png" },
        { name: "Vite", icon: "/img/vite.png" },
        { name: "Tailwind CSS", icon: "/img/tailwind.png" },
        { name: "Bootstrap", icon: "/img/bootstrap.png" },
        { name: "SASS", icon: "/img/sass.png" },
        { name: "Shadcn/ui", icon: "/img/shad.png" },
      ],
    },
    {
      title: "Back-end",
      description: "Tecnologias para desenvolvimento do servidor e lógica de negócios",
      icon: Server,
      items: [
        { name: "Node.js", icon: "/img/node.png" },
        { name: "NestJS", icon: "/img/nestjs.png" },
        { name: "PHP", icon: "/img/php.png" },
        { name: "Laravel", icon: "/img/laravel.png" },
        { name: "CodeIgniter", icon: "/img/codeigniter.png" },
        { name: "C#", icon: "/img/csharp.png" },
        { name: "Java", icon: "/img/java.png" },
        { name: "Python", icon: "/img/python.png" },
        { name: "Stripe", icon: "/img/stripe.png" },
      ],
    },
    {
      title: "Mobile",
      description: "Tecnologias para desenvolvimento de aplicativos móveis",
      icon: Smartphone,
      items: [
        { name: "React Native", icon: "/img/react.png" },
        { name: "Expo", icon: "/img/expo.png" },
      ],
    },
    {
      title: "Banco de Dados",
      description: "Sistemas de gerenciamento de banco de dados",
      icon: Database,
      items: [
        { name: "MySQL", icon: "/img/mysql.png" },
        { name: "PostgreSQL", icon: "/img/postgree.png" },
        { name: "MariaDB", icon: "/img/mariadb.png" },
        { name: "SQLite", icon: "/img/sql.png" },
        { name: "Prisma", icon: "/img/prisma.png" },
      ],
    },
    {
      title: "Ferramentas",
      description: "Ferramentas e ambientes de desenvolvimento",
      icon: Terminal,
      items: [
        { name: "Git", icon: "/img/git.png" },
        { name: "GitHub", icon: "/img/github.png" },
        { name: "VS Code", icon: "/img/vscode.png" },
        { name: "Docker", icon: "/img/docker.png" },
        { name: "Figma", icon: "/img/figma.png" },
        { name: "Photoshop", icon: "/img/ps.png" },
        { name: "Corel Draw", icon: "/img/corel.png" },
        { name: "Canva", icon: "/img/canva.png" },
      ],
    },
  ]

  return (
    <div className="py-8">
      <div className={`p-4 md:p-6 rounded-lg ${theme === "dark" ? "bg-black/50 text-white" : "bg-gray-50/80 text-gray-900"}`}>
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="h-6 w-6 text-blue-500" />
          <h1 className="text-3xl font-bold">Stack and uses</h1>
        </div>

        <p className="mb-8 text-muted-foreground">
          Explore as tecnologias e ferramentas que impulsionam minha jornada de desenvolvimento. Escolho e utilizo cuidadosamente estas
          ferramentas para criar soluções robustas, eficientes e centradas no usuário.
        </p>

        <div className="space-y-8">
          {stackCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                {category.items.map((item) => (
                  <div
                    key={`${category.title}-${item.name}`}
                    className="flex items-center gap-3 p-2 md:p-3 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <span className="text-sm md:text-base">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

