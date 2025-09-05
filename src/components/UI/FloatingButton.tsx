'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function FloatingButton() {
  return (
    <Link
      href="/order"
      className={cn(
        'fixed bottom-24 right-6 z-50',
        'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600',
        'hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700',
        'text-white font-bold px-6 py-4 rounded-full',
        'shadow-2xl shadow-amber-500/50',
        'transform transition-all duration-300',
        'hover:scale-110 hover:shadow-3xl hover:shadow-amber-500/60',
        'active:scale-95',
        'flex items-center space-x-2',
        'animate-pulse hover:animate-none'
      )}
    >
      <span className="text-lg">🍰</span>
      <span className="font-semibold text-sm whitespace-nowrap">Order Now</span>
    </Link>
  )
}