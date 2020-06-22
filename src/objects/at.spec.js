import test from 'tape'
import { at } from '@vanillaes/absurdum/objects'

test('objects.at(object, paths) - returns an array containing selected property value from path described by string', t => {
  const expect = ['b']
  const actual = at({ a: [{ b: { c: 3 } }, 4], 9: 'b' }, 9)

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.at(object, paths) - returns an array containing selected property values from paths described by strings', t => {
  const expect = [4, 'b']
  const actual = at({ a: [{ b: { c: 3 } }, 4], 9: 'b' }, 'a[1]', '9')

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.at(object, paths) - returns an array containing selected property values from paths described by array of strings or undefined if it does not exist', t => {
  const expect = [{ c: 3 }, undefined]
  const actual = at({ a: [{ b: { c: 3 } }, 4], 9: 'b' }, ['a[0].b', 'age'])

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.at(object) - returns an empty array if provided no paths', t => {
  const expect = []
  const actual = at({ a: [{ b: { c: 3 } }, 4], 9: 'b' })

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.at(object, paths) - should not mutate the input', t => {
  const input = { a: [{ b: { c: 3 } }, 4], 9: 'b' }
  const expect = { a: [{ b: { c: 3 } }, 4], 9: 'b' }
  at(input, ['a[0].b', 'age'])

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
