import Link from "next/link"
import Image from "next/image"
import { Home, User, FolderGit2, Hash, Mail, Github, Instagram, Linkedin, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import profileImage from "@/assets/profilesite.png"

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-6 p-6">
          <div className="flex items-center gap-3">
            <Image
              src={profileImage || "/placeholder.svg"}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">Joao Oliveira</h2>
              <p className="text-sm text-muted-foreground">FrontEnd Developer</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <div className="mt-4 text-xs font-semibold text-muted-foreground">Me</div>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
            >
              <User className="h-4 w-4" />
              About me
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
            >
              <FolderGit2 className="h-4 w-4" />
              Projects
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
            >
              <Hash className="h-4 w-4" />
              Stack and uses
            </Link>
          </nav>

          <div>
            <div className="text-xs font-semibold text-muted-foreground">Social</div>
            <div className="mt-2 flex flex-col gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
              >
                <Mail className="h-4 w-4" />
                Email
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
              >
                <Github className="h-4 w-4" />
                Github
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t p-6">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Sun className="h-4 w-4" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </aside>
  )
}

