'use client'

import React from 'react'
import { Logo } from '@/components/UI/Logo'
import { GlassmorphismCard } from '@/components/UI/GlassmorphismCard'
import { CAKE_CATEGORIES } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function MenuPage() {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-8 pb-6">
        <Logo size="lg" className="mb-6" />
        <div className="text-center">
          <h1 className="font-playfair text-3xl font-bold text-gray-800 mb-2">
            Our Menu
          </h1>
          <p className="text-gray-600 font-inter">
            Discover our exquisite collection of premium cakes
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="px-6 pb-8">
        <div className="grid grid-cols-1 gap-6">
          {CAKE_CATEGORIES.map((category) => (
            <GlassmorphismCard key={category.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                
                {/* Category Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-6">
                  <h2 className="font-playfair text-2xl font-bold text-white mb-3">
                    {category.name}
                  </h2>
                  <p className="text-gray-200 font-inter mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <Link
                    href={`/order?category=${category.id}`}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold px-6 py-3 rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                  >
                    Explore {category.name}
                  </Link>
                </div>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </section>

      {/* Special Services */}
      <section className="px-6 pb-8">
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
          Special Services
        </h2>
        
        <div className="space-y-4">
          <GlassmorphismCard className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎂</div>
              <div className="flex-1">
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                  Same Day Delivery
                </h3>
                <p className="text-gray-600 font-inter text-sm mb-3">
                  Need a cake urgently? We offer same-day delivery for orders placed before 2 PM.
                </p>
                <div className="text-amber-600 font-bold">Available in select areas</div>
              </div>
            </div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">✨</div>
              <div className="flex-1">
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                  Photo Cakes
                </h3>
                <p className="text-gray-600 font-inter text-sm mb-3">
                  Make it personal with edible photo printing on your favorite cake.
                </p>
                <div className="text-amber-600 font-bold">High-quality edible prints</div>
              </div>
            </div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎨</div>
              <div className="flex-1">
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                  Theme Cakes
                </h3>
                <p className="text-gray-600 font-inter text-sm mb-3">
                  Any theme, any design - we bring your vision to life with artistic precision.
                </p>
                <div className="text-amber-600 font-bold">Custom designs available</div>
              </div>
            </div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🌱</div>
              <div className="flex-1">
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                  Vegan & Sugar-Free Options
                </h3>
                <p className="text-gray-600 font-inter text-sm mb-3">
                  Healthy alternatives without compromising on taste and quality.
                </p>
                <div className="text-amber-600 font-bold">Health-conscious choices</div>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 pb-12">
        <GlassmorphismCard className="p-6 bg-gradient-to-r from-amber-400/20 to-yellow-500/20">
          <div className="text-center">
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
              Ready to Order?
            </h3>
            <p className="text-gray-700 font-inter mb-4">
              Browse our categories and create your perfect order
            </p>
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold px-8 py-4 rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Order
            </Link>
          </div>
        </GlassmorphismCard>
      </section>
    </div>
  )
}