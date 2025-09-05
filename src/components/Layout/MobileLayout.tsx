'use client'

import React from 'react'
import { BottomNavigation } from '@/components/Navigation/BottomNavigation'
import { FloatingButton } from '@/components/UI/FloatingButton'

interface MobileLayoutProps {
  children: React.ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-white to-amber-50">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-red-900/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.05) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(128, 0, 32, 0.05) 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Main Content */}
      <main className="relative z-10 pb-20 min-h-screen">
        {children}
      </main>
      
      {/* Floating Order Button */}
      <FloatingButton />
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}