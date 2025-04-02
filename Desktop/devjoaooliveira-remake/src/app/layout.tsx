import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import Providers from "./providers"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "João Pedro | Portfolio",
  description: "Portfolio de João Pedro - Desenvolvedor Frontend",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <Providers>
              <div className="flex min-h-screen bg-background">
                {/* Sidebar para desktop */}
                <div className="hidden md:block">
                  <PortfolioSidebar />
                </div>
                
                {/* Conteúdo principal */}
                <main className="flex-1 overflow-auto px-4 md:px-6 lg:px-8 xl:px-12 py-10 w-full">
                  {/* Barra de navegação mobile exibida apenas em telas pequenas */}
                  <div className="block md:hidden mb-6">
                    <MobileNav />
                  </div>
                  <div className="mx-auto max-w-full md:max-w-7xl">
                    {children}
                  </div>
                </main>
              </div>
            </Providers>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

