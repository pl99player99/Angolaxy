import { createContext, useState, useContext, ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  discount: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems(cur => {
      const idx = cur.findIndex(i => i.id === item.id)
      if (idx > -1) {
        const updated = [...cur]
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + 1 }
        return updated
      }
      return [...cur, { ...item, quantity: 1 }]
    })
  }

  const removeItem = (id: number) => setItems(cur => cur.filter(i => i.id !== id))

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return removeItem(id)
    setItems(cur => cur.map(i => i.id === id ? { ...i, quantity } : i))
  }

  const clearCart = () => setItems([])

  const itemCount = items.reduce((t, i) => t + i.quantity, 0)
  
  const subtotal = items.reduce((t, i) => {
    const price = i.discount > 0 ? Math.round(i.price - (i.price * i.discount) / 100) : i.price
    return t + price * i.quantity
  }, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
