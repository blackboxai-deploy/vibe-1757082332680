'use client'

import React from 'react'
import { Logo } from '@/components/UI/Logo'
import { GlassmorphismCard } from '@/components/UI/GlassmorphismCard'
import { COMPANY_INFO } from '@/lib/constants'

export default function SupportPage() {
  const handleCallNow = () => {
    window.location.href = `tel:${COMPANY_INFO.phone}`
  }

  const handleWhatsApp = () => {
    const phoneNumber = COMPANY_INFO.phone.replace(/\D/g, '')
    const message = encodeURIComponent('Hi! I would like to inquire about ordering a cake from J&Z CAKE WORLD.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-8 pb-6">
        <Logo size="lg" className="mb-6" />
        <div className="text-center">
          <h1 className="font-playfair text-3xl font-bold text-gray-800 mb-2">
            Help & Support
          </h1>
          <p className="text-gray-600 font-inter">
            We're here to help you with your orders and questions
          </p>
        </div>
      </header>

      {/* Contact Information */}
      <section className="px-6 pb-8">
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
          Get In Touch
        </h2>

        {/* Phone Support */}
        <GlassmorphismCard className="p-6 mb-4">
          <div className="text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
              Call Us Directly
            </h3>
            <p className="text-gray-600 font-inter mb-4">
              Speak with our friendly team for immediate assistance
            </p>
            <div className="bg-gradient-to-r from-amber-400/20 to-yellow-500/20 rounded-lg p-4 mb-4">
              <div className="font-playfair text-2xl font-bold text-gray-800">
                {COMPANY_INFO.phone}
              </div>
            </div>
            <button
              onClick={handleCallNow}
              className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📞 Call Now
            </button>
          </div>
        </GlassmorphismCard>

        {/* WhatsApp Support */}
        <GlassmorphismCard className="p-6 mb-4">
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
              WhatsApp Chat
            </h3>
            <p className="text-gray-600 font-inter mb-4">
              Send us a message on WhatsApp for quick responses
            </p>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Chat on WhatsApp
            </button>
          </div>
        </GlassmorphismCard>

        {/* Business Hours */}
        <GlassmorphismCard className="p-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
              Business Hours
            </h3>
            <div className="space-y-2 text-gray-600 font-inter">
              <div className="flex justify-between items-center">
                <span>Monday - Saturday</span>
                <span className="font-bold">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="font-bold">10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </GlassmorphismCard>
      </section>

      {/* FAQ Section */}
      <section className="px-6 pb-8">
        <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <GlassmorphismCard className="p-6">
            <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
              How do I place an order?
            </h3>
            <p className="text-gray-600 font-inter text-sm leading-relaxed">
              You can place orders through our app by selecting cakes, adding them to cart, 
              and filling out the delivery form. Alternatively, call us directly at {COMPANY_INFO.phone} 
              for personalized assistance.
            </p>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
              What are your delivery areas?
            </h3>
            <p className="text-gray-600 font-inter text-sm leading-relaxed">
              We deliver across the city and surrounding areas. Call us to confirm 
              delivery availability in your location. Same-day delivery is available 
              for orders placed before 2:00 PM.
            </p>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
              Can I customize my cake?
            </h3>
            <p className="text-gray-600 font-inter text-sm leading-relaxed">
              Absolutely! We specialize in custom designs. Share your ideas, themes, 
              or special requirements when placing your order. Our team will work 
              with you to create the perfect cake for your occasion.
            </p>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
              How far in advance should I order?
            </h3>
            <p className="text-gray-600 font-inter text-sm leading-relaxed">
              For best results, we recommend ordering at least 24-48 hours in advance. 
              For elaborate custom designs or large orders, please allow 3-5 days. 
              Same-day orders are accepted subject to availability.
            </p>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600 font-inter text-sm leading-relaxed">
              We accept cash on delivery, UPI payments, and all major credit/debit cards. 
              For large orders, we may require 50% advance payment to confirm the order.
            </p>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-6">
            <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
              Do you offer vegan or sugar-free options?
            </h3>
            <p className="text-gray-600 font-inter text-sm leading-relaxed">
              Yes! We offer vegan, sugar-free, and gluten-free alternatives. 
              Please specify your dietary requirements when placing your order, 
              and we'll create a delicious cake that meets your needs.
            </p>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="px-6 pb-8">
        <GlassmorphismCard className="p-6 bg-gradient-to-r from-red-400/20 to-red-500/20">
          <div className="text-center">
            <div className="text-3xl mb-3">🚨</div>
            <h3 className="font-playfair text-lg font-bold text-gray-800 mb-2">
              Last-Minute Orders?
            </h3>
            <p className="text-gray-600 font-inter text-sm mb-4">
              Need a cake urgently? Call us directly for same-day delivery options 
              (subject to availability and location).
            </p>
            <button
              onClick={handleCallNow}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Emergency Order Hotline
            </button>
          </div>
        </GlassmorphismCard>
      </section>

      {/* Feedback Section */}
      <section className="px-6 pb-12">
        <GlassmorphismCard className="p-6">
          <div className="text-center">
            <div className="text-3xl mb-3">💝</div>
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
              We Value Your Feedback
            </h3>
            <p className="text-gray-600 font-inter mb-4">
              Your experience matters to us. Share your thoughts, suggestions, 
              or testimonials to help us serve you better.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-inter">
                📧 Email: feedback@jzcakeworld.com
              </p>
              <p className="text-sm text-gray-600 font-inter">
                📞 Phone: {COMPANY_INFO.phone}
              </p>
            </div>
          </div>
        </GlassmorphismCard>
      </section>
    </div>
  )
}