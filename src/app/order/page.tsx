'use client'

import React, { useState } from 'react'
import { Logo } from '@/components/UI/Logo'
import { GlassmorphismCard } from '@/components/UI/GlassmorphismCard'
import { FEATURED_CAKES, CAKE_CATEGORIES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import Image from 'next/image'

interface CartItem {
  id: number
  name: string
  price: string
  quantity: number
  image: string
}

export default function OrderPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [customerForm, setCustomerForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryDate: '',
    specialInstructions: ''
  })

  const addToCart = (cake: typeof FEATURED_CAKES[0]) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === cake.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === cake.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...cake, quantity: 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('₹', '').replace(',', ''))
      return total + (price * item.quantity)
    }, 0)
  }

  const handleFormChange = (field: string, value: string) => {
    setCustomerForm(prev => ({ ...prev, [field]: value }))
  }

  const filteredCakes = selectedCategory === 'all' 
    ? FEATURED_CAKES 
    : FEATURED_CAKES.filter(cake => cake.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-8 pb-6">
        <Logo size="lg" className="mb-6" />
        <div className="text-center">
          <h1 className="font-playfair text-3xl font-bold text-gray-800 mb-2">
            Place Your Order
          </h1>
          <p className="text-gray-600 font-inter">
            Select your favorite cakes and we'll deliver fresh to your doorstep
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="px-6 pb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <Button
            onClick={() => setSelectedCategory('all')}
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className="whitespace-nowrap bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600"
          >
            All Cakes
          </Button>
          {CAKE_CATEGORIES.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Cakes Grid */}
      <section className="px-6 pb-8">
        <div className="grid grid-cols-1 gap-4">
          {filteredCakes.map((cake) => (
            <GlassmorphismCard key={cake.id} className="overflow-hidden">
              <div className="flex">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    className="object-cover rounded-l-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#f3f4f6';
                    }}
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-playfair font-bold text-gray-800 text-sm">
                        {cake.name}
                      </h3>
                      <p className="text-amber-600 font-bold text-lg">
                        {cake.price}
                      </p>
                    </div>
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full">
                      {cake.category}
                    </span>
                  </div>
                  <Button
                    onClick={() => addToCart(cake)}
                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-bold py-2 rounded-lg transition-all duration-300"
                  >
                    Add to Cart 🛒
                  </Button>
                </div>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </section>

      {/* Shopping Cart */}
      {cartItems.length > 0 && (
        <section className="px-6 pb-8">
          <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
            Your Cart
          </h2>
          <GlassmorphismCard className="p-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-gray-800 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-amber-600 font-bold text-sm">
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 p-0"
                  >
                    -
                  </Button>
                  <span className="font-bold text-gray-800 w-8 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 p-0"
                  >
                    +
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2"
                  >
                    🗑️
                  </Button>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <div className="flex justify-between items-center">
                <span className="font-playfair text-lg font-bold text-gray-800">
                  Total: ₹{calculateTotal().toLocaleString()}
                </span>
              </div>
            </div>
          </GlassmorphismCard>
        </section>
      )}

      {/* Customer Form */}
      {cartItems.length > 0 && (
        <section className="px-6 pb-8">
          <h2 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
            Delivery Details
          </h2>
          <GlassmorphismCard className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={customerForm.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={customerForm.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerForm.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    value={customerForm.address}
                    onChange={(e) => handleFormChange('address', e.target.value)}
                    placeholder="Enter complete delivery address"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="deliveryDate">Preferred Delivery Date *</Label>
                  <Input
                    id="deliveryDate"
                    type="date"
                    value={customerForm.deliveryDate}
                    onChange={(e) => handleFormChange('deliveryDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="specialInstructions">Special Instructions</Label>
                  <Textarea
                    id="specialInstructions"
                    value={customerForm.specialInstructions}
                    onChange={(e) => handleFormChange('specialInstructions', e.target.value)}
                    placeholder="Any special requests or instructions..."
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </section>
      )}

      {/* Place Order Button */}
      {cartItems.length > 0 && (
        <section className="px-6 pb-12">
          <Button
            className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              alert('Order placed successfully! We will contact you soon to confirm your order.')
            }}
          >
            Place Order - ₹{calculateTotal().toLocaleString()} 🎂
          </Button>
        </section>
      )}

      {/* Empty Cart Message */}
      {cartItems.length === 0 && (
        <section className="px-6 pb-12">
          <GlassmorphismCard className="p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-600 font-inter mb-4">
              Add some delicious cakes to get started!
            </p>
          </GlassmorphismCard>
        </section>
      )}
    </div>
  )
}