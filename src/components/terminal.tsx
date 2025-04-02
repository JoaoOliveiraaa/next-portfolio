import { Terminal } from "lucide-react"

export function TerminalDemo() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center gap-2 border-b px-4 py-2">
        <Terminal className="h-4 w-4" />
        <span className="text-sm">Terminal</span>
      </div>
      <div className="p-4 font-mono">
        <span className="text-pink-500">npx</span> Nice to meet you!
      </div>
    </div>
  )
}

