import React from 'react'
import { cn } from "@/lib/utils"

export const Marquee: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div className={cn("w-full overflow-hidden z-10 relative", className)}>
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div className="flex w-max animate-marquee [--duration:20s]">
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}