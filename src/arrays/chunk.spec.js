import test from 'tape'
import { chunk } from '@vanillaes/absurdum/arrays'

test('arrays.chunk(array) - should return a chunk for each item in the array', t => {
  const expect = [[1], [2], [3], [4]]
  const actual = chunk([1, 2, 3, 4])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 4, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.chunk(array, size) - should return an array of chunks of the specified size', t => {
  const expect = [[1, 2], [3, 4], [5]]
  const actual = chunk([1, 2, 3, 4, 5], 2)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 3, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.chunk(array, size) - should not mutate the input', t => {
  const input = [1, 2, 3, 4, 5]
  const expect = [1, 2, 3, 4, 5]
  chunk(input, 2)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
