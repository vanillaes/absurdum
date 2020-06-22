import test from 'tape'
import { drop } from '@vanillaes/absurdum/arrays'

test('arrays.drop(array) - should return an array w/ the first item dropped when n is not specified', t => {
  const expect = [2, 3]
  const actual = drop([1, 2, 3])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 2, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.drop(array, n) - should return an array with n items dropped from the beginning', t => {
  const expect = [3]
  const actual = drop([1, 2, 3], 2)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 1, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.drop(array, count) - should return an empty array when count is larger than array.length', t => {
  const expect = []
  const actual = drop([1, 2, 3], 5)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 0, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.drop(array, count) - should return the input array when count is 0', t => {
  const expect = [1, 2, 3]
  const actual = drop([1, 2, 3], 0)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.equal(actual.length, 3, 'output length')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.drop(array, count) - should not mutate the input', t => {
  const input = [1, 2, 3]
  const expect = [1, 2, 3]
  drop(input, 2)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
