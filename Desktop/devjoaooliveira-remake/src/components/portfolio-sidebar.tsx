"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Home, User, FileText, Code2, Mail, Github, Instagram, Linkedin, MessageSquare } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export function PortfolioSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar className="border-r w-64 bg-background-white">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/img/profilesite.png" alt="João Pedro" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-base">João Oliveira</span>
            <span className="text-sm text-muted-foreground">FrontEnd Developer</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarMenu className="mb-4">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/")}
              className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
            >
              <Link href="/">
                <Home className="h-5 w-5 mr-3" />
                <span className="text-base">Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs font-semibold">Me</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/about")}
                  className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <Link href="/about">
                    <User className="h-5 w-5 mr-3" />
                    <span className="text-base">About me</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/projects")}
                  className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <Link href="/projects">
                    <FileText className="h-5 w-5 mr-3" />
                    <span className="text-base">Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/stack")}
                  className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <Link href="/stack">
                    <Code2 className="h-5 w-5 mr-3" />
                    <span className="text-base">Stack and uses</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/contact")}
                  className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <Link href="/contact">
                    <MessageSquare className="h-5 w-5 mr-3" />
                    <span className="text-base">Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="px-4 text-xs font-semibold">Social</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <a href="mailto:contato@joaopedro.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-5 w-5 mr-3" />
                    <span className="text-base">Email</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <a href="https://github.com/joaopedro" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-3" />
                    <span className="text-base">Github</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <a href="https://instagram.com/joaopedro" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 mr-3" />
                    <span className="text-base">Instagram</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                >
                  <a href="https://linkedin.com/in/joaopedro" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-3" />
                    <span className="text-base">Linkedin</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mt-auto p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-start">
            <ThemeToggle />
          </div>
          <Separator className="my-2" />
          <div className="text-xs text-muted-foreground">© 2025 João Oliveira, Inc.</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

