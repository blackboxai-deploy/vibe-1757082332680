'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigationItems = [
  { id: 'home', label: 'Home', path: '/', icon: '🏠' },
  { id: 'menu', label: 'Menu', path: '/menu', icon: '🎂' },
  { id: 'order', label: 'Order', path: '/order', icon: '🛒' },
  { id: 'about', label: 'About', path: '/about', icon: '📖' },
  { id: 'support', label: 'Support', path: '/support', icon: '📞' },
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-amber-200/50">
      <div className="flex items-center justify-around px-4 py-3">
        {navigationItems.map((item) => {
          const isActive = pathname === item.path
          
          return (
            <Link
              key={item.id}
              href={item.path}
              className={cn(
                'flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300',
                isActive
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg shadow-amber-400/30'
                  : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50/50'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span className={cn(
                'text-xs font-medium',
                isActive ? 'text-white' : 'text-gray-600'
              )}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}