import { TypeAnimation } from "@/components/type-animation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-6 md:py-8 md:flex-row md:gap-12 lg:gap-20">
      <div className="mb-8 text-center md:mb-0 md:text-left">
        <h1 className="mb-6 md:mb-8 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Hi, <TypeAnimation />
        </h1>
      </div>
      <div className="relative mb-20 md:mb-0">
        <img 
          src="/img/profile.png" 
          alt="João Pedro" 
          className="w-auto h-auto max-w-[200px] md:max-w-[240px] lg:max-w-[280px] rounded-lg object-contain"
        />
      </div>
    </div>
  )
}

