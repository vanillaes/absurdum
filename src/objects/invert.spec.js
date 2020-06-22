import test from 'tape'
import { invert } from '@vanillaes/absurdum/objects'

test('objects.invert(object) - returns an object with key-value pairs inverted', t => {
  const expect = { 4: 'horses', 19: 'your', 25: 'hold' }
  const actual = invert({ hold: 25, your: 19, horses: 4 })

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.invert(object) - returns an object with key-value pairs inverted', t => {
  const expect = { lights: '0', camera: '1', action: '2' }
  const actual = invert(['lights', 'camera', 'action'])

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.invert(object) - returns an object inverted with duplicate values being overwritten by the latter value', t => {
  const expect = { small: '9', big: '80' }
  const actual = invert({ 80: 'big', 4: 'small', 9: 'small' })

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.invert(object) - returns an empty object if there are no items in the object', t => {
  const expect = {}
  const actual = invert({})

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.invert(object) - should not mutate the input', t => {
  const input = { 80: 'big', 4: 'small', 9: 'small' }
  const expect = { 80: 'big', 4: 'small', 9: 'small' }
  invert(input)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
