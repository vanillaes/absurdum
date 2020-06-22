import test from 'tape'
import { find } from '@vanillaes/absurdum/arrays'

test('arrays.find(array, predicate) - should return the value of first element at which a provided function is true', t => {
  const expect = 12
  const actual = find([5, 12, 8, 130, 44], (x) => x > 10)

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type')
  t.equal(actual, expect, 'output value')

  t.end()
})

test('arrays.find(array, predicate) - should return the value of first element at which a provided function is true', t => {
  const expect = 'hello'
  const actual = find(['hello'], (x) => x === 'hello')

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type')
  t.equal(actual, expect, 'output value')

  t.end()
})

test('arrays.find(array, predicate, thisArg) - should return the value of first element at which a provided function is true, with a replaceable this', t => {
  const expect = 5
  const actual = find([5, 12, 8, 130, 44], function (x) { return x > this }, 4)

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type')
  t.equal(actual, expect, 'output value')

  t.end()
})

test('arrays.find(array, predicate) - should return undefined if the array is empty', t => {
  const expect = undefined
  const actual = find([], (x) => x > 10)

  t.equal(Object.prototype.toString.call(actual), '[object Undefined]', 'return type')
  t.equal(actual, expect, 'output value')

  t.end()
})

test('arrays.find(array, predicate) - should return undefined if the array no element in the array satisfies the function', t => {
  const expect = undefined
  const actual = find([5, 12, 8, 130, 44], (x) => x > 200)

  t.equal(Object.prototype.toString.call(actual), '[object Undefined]', 'return type')
  t.equal(actual, expect, 'output value')

  t.end()
})

test('arrays.find(array, predicate) - should not mutate the input', t => {
  const input = [5, 12, 8, 130, 44]
  const expect = [5, 12, 8, 130, 44]
  find(input, (x) => x > 200)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
