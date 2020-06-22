import test from 'tape'
import { frequency } from '@vanillaes/absurdum/arrays'

test('arrays.frequency(array) - should return an empty object if the input is empty', t => {
  const expect = {}
  const actual = frequency([])

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.frequency(array) - should ignore empty positions in arrays', t => {
  const expect = {}
  const actual = frequency(new Array(5))

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.frequency(array) - should return an object of uniq values in the array and their frequency of occurrence', t => {
  const expect = { a: 3, b: 2, c: 2 }
  const actual = frequency(['a', 'b', 'a', 'c', 'a', 'c', 'b'])

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.frequency(array) - should return an object of uniq values when parsed numbers are parsed as strings in the array and their frequency of occurrence', t => {
  const expect = { 1: 3, 2.3: 2, c: 1 }
  const actual = frequency([1, '1', 1, 2.3, '2.3', 'c'])

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('arrays.frequency(array) - should not mutate the input', t => {
  const input = ['a', 'b', 'a', 'c', 'a', 'c', 'b']
  const expect = ['a', 'b', 'a', 'c', 'a', 'c', 'b']
  frequency(input)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
