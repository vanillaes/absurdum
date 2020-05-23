import test from 'tape';
import { has } from '@vanillaes/absurdum/objects';

test('objects.has(object, path) - returns true if a value exists at the chosen path', t => {
  const expect = true;
  const actual = has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, 'd.e');

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - returns true if a value exists at the chosen path', t => {
  const expect = true;
  const actual = has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, 'a[1]');

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - returns true if a value exists at the chosen path', t => {
  const expect = true;
  const actual = has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 0, 'b']);

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - returns false if a value does not exist at the chosen path', t => {
  const expect = false;
  const actual = has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 2]);

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - returns false if provided no paths', t => {
  const expect = false;
  const actual = has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } });

  t.equal(Object.prototype.toString.call(actual), '[object Boolean]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - should not mutate the input', t => {
  const input = { a: [{ b: { c: 3 } }, 4], e: { f: 6 } };
  const expect = { a: [{ b: { c: 3 } }, 4], e: { f: 6 } };
  has(input, 'a[1]');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
