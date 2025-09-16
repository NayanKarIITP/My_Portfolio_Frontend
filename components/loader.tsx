"use client"

import { useEffect, useState } from "react"

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [showInitials, setShowInitials] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setShowInitials(true)
          setTimeout(() => {
            onComplete()
          }, 2000)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        {!showInitials ? (
          <div className="space-y-8">
            <div className="text-6xl font-bold text-primary animate-pulse">Loading...</div>
            <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-muted-foreground">{progress}%</div>
          </div>
        ) : (
          <div className="relative">
            <div className="text-9xl font-bold text-primary animate-glow">NK</div>
            <div className="absolute inset-0 text-9xl font-bold text-primary opacity-50 animate-ping">NK</div>
          </div>
        )}
      </div>
    </div>
  )
}
