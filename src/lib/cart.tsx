'use client'

import { createContext, useContext, useReducer, useEffect, useCallback, ReactNode } from 'react'
import { byId } from './products'
import { getVariantAttributes, getVariantForSelection, hasVariantSelectionOptions } from './product-variants'

export type LineItem = {
  productId: string
  size: string
  color?: string
  variantId?: string
  qty: number
}

type CartState = LineItem[]

const lineKey = (item: LineItem) =>
  `${item.productId}:${item.variantId ?? `${item.size}:${item.color ?? ''}`}`

type CartAction =
  | { type: 'ADD'; item: LineItem }
  | { type: 'REMOVE_LINE'; item: LineItem }
  | { type: 'SET_QTY'; item: LineItem; qty: number }
  | { type: 'CLEAR' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.findIndex(i => lineKey(i) === lineKey(action.item))
      if (existing >= 0) {
        const next = [...state]
        next[existing] = { ...next[existing], qty: Math.min(10, next[existing].qty + action.item.qty) }
        return next
      }
      return [...state, { ...action.item, qty: Math.min(10, action.item.qty) }]
    }
    case 'REMOVE_LINE':
      return state.filter(i => lineKey(i) !== lineKey(action.item))
    case 'SET_QTY': {
      if (action.qty < 1) return state.filter(i => lineKey(i) !== lineKey(action.item))
      const existing = state.findIndex(i => lineKey(i) === lineKey(action.item))
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

function normalizeStoredItem(raw: unknown): LineItem | null {
  if (!raw || typeof raw !== 'object') return null
  const item = raw as Partial<LineItem>
  if (typeof item.productId !== 'string' || typeof item.qty !== 'number' || !Number.isInteger(item.qty) || item.qty < 1) {
    return null
  }

  const product = byId(item.productId)
  if (!product) return null

  const variants = product.variants ?? []
  let variant = typeof item.variantId === 'string'
    ? variants.find(option => option.id === item.variantId)
    : undefined
  let size = typeof item.size === 'string' && product.sizes.includes(item.size) ? item.size : undefined
  let color = typeof item.color === 'string' && product.colors?.includes(item.color) ? item.color : undefined

  if (variant) {
    const attributes = getVariantAttributes(variant.title)
    if (attributes) {
      size = attributes.size
      color = attributes.color ?? color
    }
  }

  if (!size) {
    variant = variants.find(option => option.id === product.printifyVariantId)
    const attributes = variant ? getVariantAttributes(variant.title) : null
    if (attributes && product.sizes.includes(attributes.size)) size = attributes.size
    if (attributes?.color) color = attributes.color
  }

  size ??= product.sizes[0]
  color ??= product.colors?.[0] ?? product.color
  if (!size) return null

  variant ??= getVariantForSelection(variants, size, color) ?? undefined
  if (!variant && hasVariantSelectionOptions(variants)) return null

  return {
    productId: product.id,
    size,
    color,
    variantId: variant?.id ?? product.printifyVariantId,
    qty: Math.min(10, item.qty),
  }
}

const CART_STORAGE_KEY = 'dingersville.cart.v1'

interface CartContextValue {
  items: LineItem[]
  itemCount: number
  subtotalCents: number
  addToCart: (productId: string, size: string, color: string, variantId: string, qty?: number) => void
  removeFromCart: (item: LineItem) => void
  setQty: (item: LineItem, qty: number) => void
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
        const parsed: unknown = JSON.parse(raw)
        const valid = Array.isArray(parsed)
          ? parsed.map(normalizeStoredItem).filter((item): item is LineItem => item !== null)
          : []
        if (valid.length) dispatch({ type: 'CLEAR' })
        valid.forEach(item => dispatch({ type: 'ADD', item }))
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

  const addToCart = useCallback((productId: string, size: string, color: string, variantId: string, qty = 1) => {
    dispatch({ type: 'ADD', item: { productId, size, color, variantId, qty } })
  }, [])

  const removeFromCart = useCallback((item: LineItem) => {
    dispatch({ type: 'REMOVE_LINE', item })
  }, [])

  const setQty = useCallback((item: LineItem, qty: number) => {
    dispatch({ type: 'SET_QTY', item, qty })
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
