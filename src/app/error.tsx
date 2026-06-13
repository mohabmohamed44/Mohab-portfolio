"use client"

import { useEffect } from "react"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={2.5}
        repeatDelay={0.5}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full w-full",
        )}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 px-6">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <button
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
