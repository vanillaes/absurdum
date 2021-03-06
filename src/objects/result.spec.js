import test from 'tape'
import { result } from '@vanillaes/absurdum/objects'

test('objects.result(object, path) - returns value if a value exists at the choosen path', t => {
  const expect = 0
  const actual = result({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, 'd.e')

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.result(object, path) - returns value if a value exists at the choosen path', t => {
  const expect = 4
  const actual = result({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, 'a[1]')

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.result(object, path) - returns result of a function if a value of type function exists at the choosen path', t => {
  const expect = 5
  const actual = result({ a: [{ b: () => 5 }, 4], d: { e: 0 } }, ['a', 0, 'b'])

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.result(object, path) - returns undefined if a value does not exist at the choosen path', t => {
  const expect = undefined
  const actual = result({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 2])

  t.equal(Object.prototype.toString.call(actual), '[object Undefined]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.result(object, path, defaultValue) - returns defaultValue if a value does not exist at the choosen path and a defaultValue is provided', t => {
  const expect = 'default'
  const actual = result({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 2], 'default')

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.result(object, path, defaultValue) - returns result of defaultValue function if a value does not exist at the choosen path and a defaultValue function is provided', t => {
  const expect = 10
  const func = (x) => { return x + 7 }
  const actual = result({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 2], func(3))

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.result(object) - returns undefined if provided no paths', t => {
  const expect = undefined
  const actual = result({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } })

  t.equal(Object.prototype.toString.call(actual), '[object Undefined]', 'return type')
  t.deepEqual(actual, expect, 'output value')

  t.end()
})

test('objects.result(object, path) - should not mutate the input', t => {
  const input = { a: [{ b: { c: 3 } }, 4], e: { f: 6 } }
  const expect = { a: [{ b: { c: 3 } }, 4], e: { f: 6 } }
  result(input, 'a[1]')

  t.deepEqual(input, expect, 'input mutation')

  t.end()
})
