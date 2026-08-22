import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BRAND_COLORS = {
  orange: '#F47B20',
  teal: '#14B8A6',
  purple: '#7C3AED',
  deepGreen: '#1A4D2E',
  cream: '#FDF8F0',
  white: '#FFFFFF',
  dark: '#1A1A1A',
  gray: '#6B7280',
  lightGray: '#F3F4F6',
}
