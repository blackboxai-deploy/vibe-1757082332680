// J&Z CAKE WORLD - Type Definitions

export interface CakeCategory {
  id: string
  name: string
  description: string
  image: string
}

export interface Cake {
  id: number
  name: string
  price: string
  image: string
  category: string
  description?: string
  ingredients?: string[]
  weight?: string
  servings?: number
}

export interface CartItem {
  cake: Cake
  quantity: number
  customization?: string
  deliveryDate?: string
}

export interface OrderDetails {
  items: CartItem[]
  total: number
  customerInfo: CustomerInfo
  deliveryInfo: DeliveryInfo
  orderDate: string
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered'
}

export interface CustomerInfo {
  name: string
  email: string
  phone: string
}

export interface DeliveryInfo {
  address: string
  city: string
  pincode: string
  deliveryDate: string
  deliveryTime: string
  specialInstructions?: string
}

export interface NavigationItem {
  id: string
  label: string
  path: string
  icon?: string
}

export interface GlassmorphismProps {
  className?: string
  children: React.ReactNode
  blur?: 'sm' | 'md' | 'lg'
  opacity?: 'light' | 'medium' | 'dark'
}