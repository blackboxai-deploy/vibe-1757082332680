'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface GlassmorphismCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  blur?: 'sm' | 'md' | 'lg'
  opacity?: 'light' | 'medium' | 'dark'
}

export function GlassmorphismCard({ 
  children, 
  className, 
  hover = true,
  blur = 'md',
  opacity = 'light'
}: GlassmorphismCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  }

  const opacityClasses = {
    light: 'bg-white/10 border-white/20',
    medium: 'bg-white/20 border-white/30',
    dark: 'bg-white/30 border-white/40'
  }

  return (
    <div
      className={cn(
        'rounded-2xl border backdrop-blur-md',
        'shadow-xl shadow-black/10',
        blurClasses[blur],
        opacityClasses[opacity],
        hover && 'transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:border-amber-300/40 hover:bg-white/25',
        'relative overflow-hidden',
        className
      )}
    >
      {/* Gradient overlay for luxury effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-red-900/5 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}