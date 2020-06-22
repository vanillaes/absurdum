import test from 'tape'
import { transform } from '@vanillaes/absurdum/objects'

test('objects.transform(object, func) - returns an object with updated values, ', t => {
  const expect = { 1: ['a', 'c'], 2: ['b'] }
  const actual = transform({ a: 1, b: 2, c: 1 }, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key)
  })

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.transform(object, func, accumulator) - returns an array with updated values', t => {
  const expect = [4, 9, 16]
  const actual = transform({ a: 2, b: 3, c: 4 }, (result, n) => {
    result.push(n *= n)
  }, [])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.transform(object) - returns the input object if no function is applied', t => {
  const expect = { a: 1, b: 2, c: 3 }
  const actual = transform({ a: 1, b: 2, c: 3 })

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.transform(object, func) - should not mutate the input', t => {
  const input = { a: 1, b: 2, c: 3 }
  const expect = { a: 1, b: 2, c: 3 }
  transform(input, value => value + 3)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
