import { expect, test } from 'vitest'
import { sum } from './sum.js'

test('adds 5 + 7 to equal 12', () => {
    const total = sum(5,7);
    const expected = 12;
  expect(total).toBe(expected)
})