import test from 'node:test'
import assert from 'node:assert/strict'
import { fitGuidance } from '../src/lib/fit-guidance.ts'

test('uses a product description to surface a stated relaxed fit', () => {
  assert.match(fitGuidance({
    category: 'hoodies',
    sizes: ['S', 'M', 'L'],
    description: 'Relaxed fit for easy movement and layering.',
  }), /relaxed fit/i)
})

test('does not invent a fit claim when product details do not state one', () => {
  const guidance = fitGuidance({
    category: 'polos',
    sizes: ['S', 'M', 'L'],
    description: 'Lightweight breathable polyester polo.',
  })

  assert.match(guidance, /fit varies by style/i)
  assert.doesNotMatch(guidance, /true to size/i)
})

test('shows the verified adjustable one-size note for a cap', () => {
  assert.match(fitGuidance({
    category: 'hats',
    sizes: ['One Size'],
    description: 'Structured cap with an adjustable snapback.',
  }), /one size.*adjustable snapback/i)
})

test('returns no fit block for non-apparel accessories', () => {
  assert.equal(fitGuidance({
    category: 'accessories',
    sizes: ['One Size'],
    description: 'Microfiber golf towel.',
  }), null)
})
