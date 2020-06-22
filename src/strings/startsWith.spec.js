import test from 'tape'
import { startsWith } from '@vanillaes/absurdum/strings'

test('strings.startsWith(string, substr) - returns truthy when the string starts with the substring', t => {
  const expect = true
  const actual = startsWith('This sentence starts with', 'This')

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type')
  t.equal(actual, expect, 'output value')

  t.end()
})

test('strings.startsWith(string, substr) - returns falsy when the string does not start with the substring', t => {
  const expect = false
  const actual = startsWith('This sentence does not start with', 'Nope')

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type')
  t.equal(actual, expect, 'output value')

  t.end()
})

test('strings.startsWith(string, substr) - returns falsy when the string does not start with the substring', t => {
  const expect = false
  const actual = startsWith('abc', 'f')

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type')
  t.equal(actual, expect, 'output value')

  t.end()
})

test('strings.startsWith(string, substr) - should not mutate the input', t => {
  const input = 'abc'
  const expect = 'abc'
  startsWith(input, 'f')

  t.equal(input, expect, 'input mutation')

  t.end()
})
