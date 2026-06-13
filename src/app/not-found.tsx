import Link from "next/link"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full w-full",
        )}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 px-6">
        <h2 className="text-2xl font-bold">Not Found</h2>
        <p className="text-muted-foreground">Could not find requested resource</p>
        <Link 
          href="/" 
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
