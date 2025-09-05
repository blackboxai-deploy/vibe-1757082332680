'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showTagline?: boolean
}

export function Logo({ size = 'md', className, showTagline = false }: LogoProps) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  const taglineSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="relative">
        {/* Golden glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 blur-lg opacity-30 scale-110"></div>
        
        {/* Main logo text */}
        <h1 className={cn(
          'relative font-playfair font-bold tracking-wider',
          'bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700',
          'bg-clip-text text-transparent',
          'drop-shadow-lg',
          sizes[size]
        )}>
          J&Z CAKE WORLD
        </h1>
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 text-amber-400 opacity-60">
          <span className="text-sm">✨</span>
        </div>
        <div className="absolute -bottom-2 -left-2 text-yellow-500 opacity-60">
          <span className="text-sm">🍰</span>
        </div>
      </div>
      
      {showTagline && (
        <p className={cn(
          'font-inter font-medium text-gray-700 mt-2 text-center',
          'italic tracking-wide',
          taglineSizes[size]
        )}>
          100% Homemade Cakes – Delivered Fresh
        </p>
      )}
    </div>
  )
}