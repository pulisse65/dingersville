import test from 'node:test'
import assert from 'node:assert/strict'
import { byPrintifyId } from '../src/lib/printify.ts'
import { getVariantOptions, getVariantForSelection, hasVariantSelectionOptions } from '../src/lib/product-variants.ts'

const cap = byPrintifyId('68ce1e546d18a047f20632be')

test('derives Dinger Cap sizes and colors from its actual Printify variants', () => {
  assert.ok(cap)
  assert.deepEqual(
    getVariantOptions(cap.variants, cap.sizes, cap.colors),
    {
      sizes: ['S/M', 'L/XL'],
      colors: ['White', 'Dark Navy', 'Grey', 'Khaki', 'Olive'],
    },
  )
})

test('resolves the exact Printify variant for a chosen cap size and color', () => {
  assert.ok(cap)
  assert.equal(getVariantForSelection(cap.variants, 'L/XL', 'Dark Navy')?.id, '118705')
})

test('maps size-only variants to the selected Printify size', () => {
  const hoodie = byPrintifyId('6916a36be1bc399c020dbe58')
  assert.ok(hoodie)
  assert.equal(hasVariantSelectionOptions(hoodie.variants), true)
  assert.equal(getVariantForSelection(hoodie.variants, '2XL', 'Multi')?.title, '2XL')
})

test('does not resolve an unavailable size and color combination', () => {
  assert.ok(cap)
  assert.equal(getVariantForSelection(cap.variants, 'S/M', 'Red'), null)
})
