import { Sidebar } from "@/components/sidebar"
import { ProfileHeader } from "@/components/profile-header"
import { ExperienceSection } from "@/components/experience-section"
import { TechStack } from "@/components/tech-stack"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-6 lg:p-8">
        <div className="mx-auto max-w-6xl space-y-16">
          <ProfileHeader />

          {/* About Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">About me</h2>
            <div className="max-w-3xl rounded-xl bg-card/50 p-6 backdrop-blur">
              <p className="text-muted-foreground">
                Hello! My name is João Pedro, and I'm passionate about turning ideas into reality. Ever since my early
                days in programming, back in my childhood, I dove headfirst into this fascinating universe, and I
                haven't stopped evolving since. As a constantly growing front-end developer, I'm here to take your
                vision to the next level! Whether you're an ambitious entrepreneur, a promising startup, or an
                established company looking for a striking online presence, I'm here to help.
              </p>
              <p className="mt-4 text-muted-foreground">
                With expertise in creating breathtaking landing pages and e-commerce platforms, I'm ready to make your
                brand irresistible in the digital world. From conception to implementation, every line of code is
                carefully crafted to ensure an exceptional user experience and results that exceed expectations. Let's
                transform your vision into reality together! Get in touch with me today, and let's start building the
                digital future of your brand. I'm ready to make your project the next internet sensation!
              </p>
            </div>
          </section>

          <ExperienceSection />

          {/* Projects Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My projects</h2>
              <Button variant="link">See all</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                title="Spotify Web Player Clone"
                description="Cloning spotify web player for training css"
                image="spotify"
                visitUrl="#"
                sourceUrl="#"
              />
              <ProjectCard
                title="Form Dark/White"
                description="Form for sign-up and sign-in with choose mode dark/white."
                image="formdarkwhite"
                visitUrl="#"
                sourceUrl="#"
              />
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold">Stack and uses</h2>
            <div className="space-y-12">
              <TechStack
                title="Front-end"
                items={[
                  { name: "HTML", icon: "html" },
                  { name: "CSS", icon: "css" },
                  { name: "JavaScript", icon: "javascript" },
                  { name: "React", icon: "react" },
                  { name: "TypeScript", icon: "typescript" },
                  { name: "Next.js", icon: "nextjs" },
                ]}
              />
              <TechStack
                title="Back-end"
                items={[
                  { name: "Node.js", icon: "nodejs" },
                  { name: "Python", icon: "python" },
                  { name: "PHP", icon: "php" },
                  { name: "Java", icon: "java" },
                ]}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

