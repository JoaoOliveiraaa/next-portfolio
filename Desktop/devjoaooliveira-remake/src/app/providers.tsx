"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    if (document.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(() => {
        // Atualiza o DOM aqui
        document.documentElement.scrollTop = 0
      })
    }
  }, [pathname])

  return <>{children}</>
}

