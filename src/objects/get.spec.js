import test from 'tape';
import { get } from 'absurdum/objects';

test('objects.get(object, path) - returns value if a value exists at the chosen path', t => {
  const expect = 0;
  const actual = get({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, 'd.e');

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.get(object, path) - returns value if a value exists at the chosen path', t => {
  const expect = 4;
  const actual = get({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, 'a[1]');

  t.equal(Object.prototype.toString.call(actual), '[object Number]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.get(object, path) - returns value if a value exists at the chosen path', t => {
  const expect = { c: 3 };
  const actual = get({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 0, 'b']);

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.get(object, path) - returns undefined if a value does not exist at the chosen path', t => {
  const expect = undefined;
  const actual = get({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 2]);

  t.equal(Object.prototype.toString.call(actual), '[object Undefined]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.get(object, path, defaultValue) - returns defaultValue if a value does not exist at the chosen path and a defaultValue is provided', t => {
  const expect = 'default';
  const actual = get({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 2], 'default');

  t.equal(Object.prototype.toString.call(actual), '[object String]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.get(object) - returns undefined if provided no paths', t => {
  const expect = undefined;
  const actual = get({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } });

  t.equal(Object.prototype.toString.call(actual), '[object Undefined]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.get(object, path) - should not mutate the input', t => {
  const input = { a: [{ b: { c: 3 } }, 4], e: { f: 6 } };
  const expect = { a: [{ b: { c: 3 } }, 4], e: { f: 6 } };
  get(input, 'a[1]');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
