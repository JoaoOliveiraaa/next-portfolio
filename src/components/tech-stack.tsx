import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import htmlIcon from "@/assets/html.png"
import cssIcon from "@/assets/css.png"
import javascriptIcon from "@/assets/js.png"
import reactIcon from "@/assets/react.png"
import typescriptIcon from "@/assets/typescript.png"
import nextjsIcon from "@/assets/next.png"
import nodejsIcon from "@/assets/node.png"
import pythonIcon from "@/assets/python.png"
import phpIcon from "@/assets/php.png"
import javaIcon from "@/assets/java.png"

interface TechStackProps {
  title: string
  items: Array<{
    name: string
    icon: string
  }>
}

const iconMap = {
  html: htmlIcon,
  css: cssIcon,
  javascript: javascriptIcon,
  react: reactIcon,
  typescript: typescriptIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  python: pythonIcon,
  php: phpIcon,
  java: javaIcon,
}

export function TechStack({ title, items }: TechStackProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <Card key={item.name} className="bg-card/50 backdrop-blur">
            <CardContent className="flex items-center gap-3 p-4">
              <Image
                src={iconMap[item.icon as keyof typeof iconMap] || "/placeholder.svg"}
                alt={item.name}
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span>{item.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

