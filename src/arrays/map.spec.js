import test from 'tape'
import { map } from '@vanillaes/absurdum/arrays'

test('arrays.map(array, func) - should map over and apply the function to each value', t => {
  const expect = [3, 4, 5, 6]
  const actual = map([1, 2, 3, 4], (x) => x + 2)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 4, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.map(array, func) - should not mutate the input', t => {
  const input = ['a', 'b', 'a', 'c', 'a', 'c', 'b']
  const expect = ['a', 'b', 'a', 'c', 'a', 'c', 'b']
  map(input, (x) => x + 2)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
