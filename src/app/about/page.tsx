'use client'

import React from 'react'
import { Logo } from '@/components/UI/Logo'
import { GlassmorphismCard } from '@/components/UI/GlassmorphismCard'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-8 pb-6">
        <Logo size="lg" className="mb-6" />
        <div className="text-center">
          <h1 className="font-playfair text-3xl font-bold text-gray-800 mb-2">
            About J&Z CAKE WORLD
          </h1>
          <p className="text-gray-600 font-inter">
            Crafting sweet memories since day one
          </p>
        </div>
      </header>

      {/* Hero Story */}
      <section className="px-6 pb-8">
        <GlassmorphismCard className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🍰</div>
            <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Our Sweet Journey
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
            <p>
              Welcome to <span className="font-bold text-amber-600">J&Z CAKE WORLD</span>, 
              where every cake tells a story and every bite creates a memory. Born from a 
              passion for creating extraordinary desserts, we've been crafting premium 
              homemade cakes that bring joy to celebrations across the city.
            </p>
            <p>
              Our journey began with a simple belief: that every special moment deserves 
              a cake as unique and wonderful as the occasion itself. From intimate birthday 
              celebrations to grand wedding ceremonies, we pour our hearts into creating 
              confectionery masterpieces that not only taste incredible but look absolutely stunning.
            </p>
          </div>
        </GlassmorphismCard>
      </section>

      {/* Values Section */}
      <section className="px-6 pb-8">
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
          What Makes Us Special
        </h2>
        
        <div className="space-y-4">
          <GlassmorphismCard className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏠</div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                  100% Homemade Excellence
                </h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  Every cake is freshly baked in our kitchen using traditional recipes 
                  passed down through generations. No preservatives, no shortcuts - 
                  just pure, homemade goodness.
                </p>
              </div>
            </div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🌟</div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                  Premium Ingredients Only
                </h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  We source only the finest ingredients - Belgian chocolate, French butter, 
                  fresh seasonal fruits, and organic flour. Quality is never compromised 
                  in our pursuit of perfection.
                </p>
              </div>
            </div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                  Artistic Craftsmanship
                </h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  Our skilled bakers and decorators are artists at heart. Each cake is 
                  a canvas where creativity meets culinary expertise, resulting in 
                  edible works of art.
                </p>
              </div>
            </div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
                  Fresh Delivery Promise
                </h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  We bake fresh daily and deliver within hours of preparation. 
                  Your cake arrives at the perfect moment - moist, flavorful, 
                  and ready to make your celebration unforgettable.
                </p>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 pb-8">
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
          Meet Our Team
        </h2>
        
        <GlassmorphismCard className="p-6">
          <div className="text-center">
            <div className="text-4xl mb-4">👨‍🍳👩‍🍳</div>
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
              Master Bakers & Artists
            </h3>
            <p className="text-gray-600 font-inter leading-relaxed mb-4">
              Our dedicated team of passionate bakers, decorators, and customer service 
              specialists work together to ensure every order exceeds expectations. 
              With years of experience and an unwavering commitment to quality, 
              we're here to make your sweetest dreams come true.
            </p>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-amber-800 font-inter font-medium italic text-sm">
                "Every cake we create carries our signature touch of love and dedication. 
                Your happiness is our greatest achievement."
              </p>
            </div>
          </div>
        </GlassmorphismCard>
      </section>

      {/* Mission Statement */}
      <section className="px-6 pb-8">
        <GlassmorphismCard className="p-6 bg-gradient-to-r from-amber-400/20 to-yellow-500/20">
          <div className="text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 font-inter leading-relaxed">
              To create exceptional cakes that bring people together, celebrate life's 
              precious moments, and spread joy one slice at a time. We're not just 
              baking cakes - we're crafting memories that last a lifetime.
            </p>
          </div>
        </GlassmorphismCard>
      </section>

      {/* Awards & Recognition */}
      <section className="px-6 pb-8">
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
          Recognition & Trust
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          <GlassmorphismCard className="p-4 text-center">
            <div className="text-2xl mb-2">⭐</div>
            <div className="font-bold text-lg text-gray-800">4.9/5</div>
            <div className="text-xs text-gray-600">Customer Rating</div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-4 text-center">
            <div className="text-2xl mb-2">🎂</div>
            <div className="font-bold text-lg text-gray-800">1000+</div>
            <div className="text-xs text-gray-600">Happy Customers</div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-4 text-center">
            <div className="text-2xl mb-2">🏆</div>
            <div className="font-bold text-lg text-gray-800">Premium</div>
            <div className="text-xs text-gray-600">Quality Assured</div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-4 text-center">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-bold text-lg text-gray-800">Same Day</div>
            <div className="text-xs text-gray-600">Delivery Available</div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 pb-12">
        <GlassmorphismCard className="p-6">
          <div className="text-center">
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
              Ready to Taste the Difference?
            </h3>
            <p className="text-gray-600 font-inter mb-4">
              Join thousands of satisfied customers who trust J&Z CAKE WORLD 
              for their special celebrations.
            </p>
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold px-8 py-4 rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Order Your Cake Today
            </Link>
          </div>
        </GlassmorphismCard>
      </section>
    </div>
  )
}