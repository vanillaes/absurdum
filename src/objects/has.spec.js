import test from 'tape';
import { objects } from '../../index.js';

test('objects.has(object, path) - returns true if a value exists at the choosen path', t => {
  const expect = true;
  const result = objects.has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, 'd.e');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - returns true if a value exists at the choosen path', t => {
  const expect = true;
  const result = objects.has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, 'a[1]');

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - returns true if a value exists at the choosen path', t => {
  const expect = true;
  const result = objects.has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 0, 'b']);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - returns false if a value does not exist at the choosen path', t => {
  const expect = false;
  const result = objects.has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } }, ['a', 2]);

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - returns false if provided no paths', t => {
  const expect = false;
  const result = objects.has({ a: [{ b: { c: 3 } }, 4], d: { e: 0 } });

  t.equal(Object.prototype.toString.call(result), '[object Boolean]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.has(object, path) - should not mutate the input', t => {
  const input = { a: [{ b: { c: 3 } }, 4], e: { f: 6 } };
  const expect = { a: [{ b: { c: 3 } }, 4], e: { f: 6 } };
  objects.has(input, 'a[1]');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
