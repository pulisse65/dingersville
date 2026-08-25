'use client'

import { createContext, useContext, useReducer, useEffect, useCallback, ReactNode } from 'react'
import { byId, Product } from './products'

export type LineItem = {
  productId: string
  size: string
  qty: number
}

type CartState = LineItem[]

type CartAction =
  | { type: 'ADD'; item: LineItem }
  | { type: 'REMOVE_LINE'; productId: string; size: string }
  | { type: 'SET_QTY'; productId: string; size: string; qty: number }
  | { type: 'CLEAR' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.findIndex(
        i => i.productId === action.item.productId && i.size === action.item.size
      )
      if (existing >= 0) {
        const next = [...state]
        next[existing] = { ...next[existing], qty: Math.min(10, next[existing].qty + action.item.qty) }
        return next
      }
      return [...state, { ...action.item, qty: Math.min(10, action.item.qty) }]
    }
    case 'REMOVE_LINE':
      return state.filter(i => !(i.productId === action.productId && i.size === action.size))
    case 'SET_QTY': {
      if (action.qty < 1) return state.filter(i => !(i.productId === action.productId && i.size === action.size))
      const existing = state.findIndex(i => i.productId === action.productId && i.size === action.size)
      if (existing < 0) return state
      const next = [...state]
      next[existing] = { ...next[existing], qty: Math.min(10, action.qty) }
      return next
    }
    case 'CLEAR':
      return []
    default:
      return state
  }
}

const CART_STORAGE_KEY = 'dingersville.cart.v1'

interface CartContextValue {
  items: LineItem[]
  itemCount: number
  subtotalCents: number
  addToCart: (productId: string, size: string, qty?: number) => void
  removeFromCart: (productId: string, size: string) => void
  setQty: (productId: string, size: string, qty: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, [])

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY)
      if (raw) {
        const parsed: LineItem[] = JSON.parse(raw)
        // Validate
        const valid = parsed.filter((i: LineItem) => byId(i.productId) && i.qty > 0)
        if (valid.length) dispatch({ type: 'CLEAR' })
        valid.forEach((i: LineItem) => dispatch({ type: 'ADD', item: i }))
      }
    } catch {
      // ignore corrupt storage
    }
  }, [])

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore storage errors
    }
  }, [state])

  const addToCart = useCallback((productId: string, size: string, qty = 1) => {
    dispatch({ type: 'ADD', item: { productId, size, qty } })
  }, [])

  const removeFromCart = useCallback((productId: string, size: string) => {
    dispatch({ type: 'REMOVE_LINE', productId, size })
  }, [])

  const setQty = useCallback((productId: string, size: string, qty: number) => {
    dispatch({ type: 'SET_QTY', productId, size, qty })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const itemCount = state.reduce((sum, i) => sum + i.qty, 0)
  const subtotalCents = state.reduce((sum, i) => {
    const product = byId(i.productId)
    if (!product) return sum
    return sum + product.priceCents * i.qty
  }, 0)

  return (
    <CartContext.Provider value={{ items: state, itemCount, subtotalCents, addToCart, removeFromCart, setQty, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
