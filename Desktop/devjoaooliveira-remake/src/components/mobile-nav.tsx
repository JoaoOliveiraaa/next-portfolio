"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X, Home, User, FileText, Code2, MessageSquare, Mail, Github, Instagram, Linkedin } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About me", icon: User },
    { href: "/projects", label: "Projects", icon: FileText },
    { href: "/stack", label: "Stack and uses", icon: Code2 },
    { href: "/contact", label: "Contato", icon: MessageSquare },
  ]

  const socialItems = [
    { href: "mailto:contato@joaopedro.com", label: "Email", icon: Mail, external: true },
    { href: "https://github.com/joaopedro", label: "Github", icon: Github, external: true },
    { href: "https://instagram.com/joaopedro", label: "Instagram", icon: Instagram, external: true },
    { href: "https://linkedin.com/in/joaopedro", label: "Linkedin", icon: Linkedin, external: true },
  ]

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/img/profilesite.png" alt="João Pedro" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <Link href="/" className="font-medium">João Oliveira</Link>
      </div>
      
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0">
            <VisuallyHidden>
              <SheetTitle>Menu de navegação</SheetTitle>
            </VisuallyHidden>
            
            <div className="flex flex-col h-full bg-background overflow-y-auto">
              {/* Header */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/img/profilesite.png" alt="João Pedro" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">João Oliveira</div>
                    <div className="text-sm text-muted-foreground">FrontEnd Developer</div>
                  </div>
                </div>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 px-2 py-4">
                <div className="mb-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 mb-1 rounded-lg transition-colors ${
                        isActive(item.href) 
                          ? "bg-gray-100 dark:bg-gray-800 font-medium" 
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase text-muted-foreground mb-2 px-3">
                    Social
                  </div>
                  {socialItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 px-3 py-2 mb-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t mt-auto">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">© 2024 João Oliveira</div>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
} 