import test from 'tape'
import { values } from '@vanillaes/absurdum/objects'

test('objects.values(object) - returns an array of object values', t => {
  const expect = [25, 19, 4]
  const actual = values({ hold: 25, your: 19, horses: 4 })

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.values(object) - returns an array of object values', t => {
  const expect = ['lights', 'camera', 'action']
  const actual = values(['lights', 'camera', 'action'])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.values(object) - returns an array of a strings characters if given a string', t => {
  const expect = ['b', 'r', 'e', 'a', 'd']
  const actual = values('bread')

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.values(object) - returns an empty array if there are no items in the object or provided an incompatible data type', t => {
  const expect = []
  const actual = values(3476)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.values(object) - should not mutate the input', t => {
  const input = { hold: 25, your: 19, horses: 4 }
  const expect = { hold: 25, your: 19, horses: 4 }
  values(input)

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
