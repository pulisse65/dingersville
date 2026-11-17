export type ProductVariantOption = {
  id: string
  title: string
  color?: string
}

export type ProductOptions = {
  sizes: string[]
  colors: string[]
}

const SIZE_LABEL = /^(?:XS|S|M|L|XL|[2-6]XL|S\/M|L\/XL|ONE SIZE(?: FITS MOST)?|REGULAR CAN)$/i

function parseVariantOptions(title: string): { size: string; color?: string } | null {
  const parts = title.split(/\s+\/\s+/).map(part => part.trim()).filter(Boolean)
  if (parts.length === 1 && SIZE_LABEL.test(parts[0])) return { size: parts[0] }
  if (parts.length !== 2) return null

  const [left, right] = parts
  const leftIsSize = SIZE_LABEL.test(left)
  const rightIsSize = SIZE_LABEL.test(right)

  if (leftIsSize === rightIsSize) return null
  return leftIsSize ? { size: left, color: right } : { size: right, color: left }
}

export function getVariantAttributes(title: string): { size: string; color?: string } | null {
  return parseVariantOptions(title)
}

export function getVariantOptions(
  variants: ProductVariantOption[] | undefined,
  fallbackSizes: string[],
  fallbackColors: string[],
): ProductOptions {
  const parsed = (variants ?? [])
    .map(variant => parseVariantOptions(variant.title))
    .filter((option): option is { size: string; color?: string } => option !== null)

  if (!parsed.length) {
    return { sizes: fallbackSizes, colors: fallbackColors }
  }

  const variantColors = [...new Set(parsed.flatMap(option => option.color ? [option.color] : []))]
  return {
    sizes: [...new Set(parsed.map(option => option.size))],
    colors: variantColors.length ? variantColors : fallbackColors,
  }
}

export function hasVariantSelectionOptions(variants: ProductVariantOption[] | undefined): boolean {
  return (variants ?? []).some(variant => parseVariantOptions(variant.title) !== null)
}

export function getVariantForSelection<T extends ProductVariantOption>(
  variants: T[] | undefined,
  size: string,
  color: string,
): T | null {
  return (variants ?? []).find(variant => {
    const option = parseVariantOptions(variant.title)
    return option?.size === size && (!option.color || option.color === color)
  }) ?? null
}
