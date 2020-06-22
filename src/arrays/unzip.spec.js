/* eslint no-sparse-arrays: 0 */
import test from 'tape'
import { unzip } from '@vanillaes/absurdum/arrays'

test('arrays.unzip(array) - should return an array with arrays of corresponding values', t => {
  const expect = [[5, 12, 8], ['ham', 'cheese', 'bread']]
  const actual = unzip([[5, 'ham'], [12, 'cheese'], [8, 'bread']])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 2, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.unzip(array) - should return an array with arrays of corresponding values, the length of the longest array, with unused variables as undefined', t => {
  const expect = [['a', undefined, true], ['b', 2, false], ['c', undefined, true]]
  const actual = unzip([['a', 'b', 'c'], [undefined, 2], [true, false, true]])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 3, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.unzip(array) - should return an array with arrays of corresponding values, the length of the longest array, with arrays containing holes', t => {
  const expect = [['a', undefined, undefined], [undefined, 'b', undefined], [undefined, undefined, 'c']]
  const actual = unzip([['a'], [, 'b'], [, , 'c']])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 3, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.unzip(array) - should return an empty array if the input array is empty', t => {
  const expect = []
  const actual = unzip([])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 0, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.unzip(array) - should not mutate the input', t => {
  const input = [[5, 'ham'], [12, 'cheese'], [8, 'bread']]
  const expect = [[5, 'ham'], [12, 'cheese'], [8, 'bread']]
  unzip(input)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
