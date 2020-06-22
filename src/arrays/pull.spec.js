import test from 'tape'
import { pull } from '@vanillaes/absurdum/arrays'

test('arrays.pull(array) - should return the input array if there are no input values', t => {
  const expect = ['ham', 'bread']
  const actual = pull(['ham', 'cheese', 'bread'], 'cheese')

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.pull(array, ...values) - should return an array with all the input values removed', t => {
  const expect = ['ham', 'bread']
  const actual = pull(['ham', 'cheese', 'bread'], 'cheese')

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.pull(array, ...values) - should return an array with all the input values removed', t => {
  const expect = [1, 4, 1]
  const actual = pull([1, 2, 4, 8, 2, 1], 2, 8)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.pull(array, ...values) - should return an empty array if all values are removed', t => {
  const expect = []
  const actual = pull([1, 1, 2, 3], 3, 2, 1)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.pull(array, ...values) - should not mutate the input', t => {
  const input = ['ham', 'cheese', 'bread']
  const expect = ['ham', 'cheese', 'bread']

  pull(input, 'ham', 'cheese')

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
