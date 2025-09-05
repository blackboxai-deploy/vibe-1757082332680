'use client'

import React from 'react'
import { Logo } from '@/components/UI/Logo'
import { GlassmorphismCard } from '@/components/UI/GlassmorphismCard'
import { FEATURED_CAKES } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="px-6 pt-8 pb-6">
        <Logo size="xl" showTagline={true} className="mb-8" />
        
        {/* Welcome Message */}
        <GlassmorphismCard className="p-6 mb-6">
          <div className="text-center">
            <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-3">
              Welcome to Luxury
            </h2>
            <p className="text-gray-600 font-inter leading-relaxed">
              Experience the finest homemade cakes crafted with premium ingredients 
              and delivered fresh to make your celebrations truly memorable.
            </p>
          </div>
        </GlassmorphismCard>
      </header>

      {/* Featured Cakes Section */}
      <section className="px-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-playfair text-2xl font-bold text-gray-800">
            Featured Cakes
          </h2>
          <Link 
            href="/menu" 
            className="text-amber-600 font-inter font-semibold text-sm hover:text-amber-700 transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-2 gap-4">
          {FEATURED_CAKES.map((cake) => (
            <GlassmorphismCard key={cake.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#f3f4f6';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    {cake.category}
                  </span>
                </div>
                
                {/* Cake Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-playfair font-bold text-white text-sm mb-1 leading-tight">
                    {cake.name}
                  </h3>
                  <p className="text-amber-300 font-inter font-bold text-lg">
                    {cake.price}
                  </p>
                </div>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="px-6 pb-8">
        <GlassmorphismCard className="p-6 bg-gradient-to-r from-amber-400/20 to-yellow-500/20">
          <div className="text-center">
            <div className="text-3xl mb-3">🎉</div>
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
              Special Offer
            </h3>
            <p className="text-gray-700 font-inter mb-4">
              Order 2 cakes and get <span className="font-bold text-amber-600">20% OFF</span> on your total bill!
            </p>
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold px-6 py-3 rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Claim Offer Now
            </Link>
          </div>
        </GlassmorphismCard>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 pb-12">
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
          Why Choose J&Z CAKE WORLD?
        </h2>
        
        <div className="space-y-4">
          {[
            { icon: '🍰', title: '100% Homemade', desc: 'Freshly baked with love' },
            { icon: '🚀', title: 'Fresh Delivery', desc: 'Delivered within hours of baking' },
            { icon: '🎨', title: 'Custom Designs', desc: 'Your imagination, our creation' },
            { icon: '⭐', title: 'Premium Quality', desc: 'Only finest ingredients used' }
          ].map((feature, index) => (
            <GlassmorphismCard key={index} className="p-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <h4 className="font-inter font-bold text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </section>
    </div>
  )
}