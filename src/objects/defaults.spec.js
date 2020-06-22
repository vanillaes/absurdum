import test from 'tape'
import { defaults } from '@vanillaes/absurdum/objects'

test('objects.defaults(object, sources) - returns the object if no source objects to merge are provided', t => {
  const expect = { hold: 25, your: 19, horses: 4 }
  const actual = defaults({ hold: 25, your: 19, horses: 4 })

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.defaults(object, sources) - returns an object with properties merged and properties with the same value overwriting properties when applied from left to right', t => {
  const expect = { a: 'Mix', b: 34, c: 'Band' }
  const actual = defaults({ a: 'Mix' }, { b: 34 }, { c: 'Band' }, { b: 'Stretch' })

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.defaults(object, sources) - returns an object with properties merged and nested objects or array values merged recursively', t => {
  const expect = { a: [{ b: 2 }, { d: 4 }] }
  const actual = defaults({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] })

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.defaults(object, sources) - returns an empty object if there are no items in the object', t => {
  const expect = {}
  const actual = defaults({})

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.defaults(object, sources) - should not mutate the input', t => {
  const input = { small: 'ant', big: 'elephant' }
  const expect = { small: 'ant', big: 'elephant' }
  defaults(input, { furry: 'dog' })

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
