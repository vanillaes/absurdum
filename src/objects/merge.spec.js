import test from 'tape';
import { merge } from 'absurdum/objects';

test('objects.merge(object, sources) - returns the object if no source objects to merge are provided', t => {
  const expect = { hold: 25, your: 19, horses: 4 };
  const actual = merge({ hold: 25, your: 19, horses: 4 });

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.merge(object, sources) - returns an object with properties merged and properties with the same value overwriting properties when applied from left to right', t => {
  const expect = { a: 'Mix', b: 'Stretch', c: 'Band' };
  const actual = merge({ a: 'Mix' }, { b: 34 }, { c: 'Band' }, { b: 'Stretch' });

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.merge(object, sources) - returns an object with properties merged and nested objects or array values merged recursively', t => {
  const expect = { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] };
  const actual = merge({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] });

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.merge(object, sources) - returns an empty object if there are no items in the object', t => {
  const expect = {};
  const actual = merge({});

  t.equal(Object.prototype.toString.call(actual), '[object Object]', 'return type');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('objects.merge(object, sources) - should not mutate the input', t => {
  const input = { a: 'Mix', b: 'Stretch', c: 'Band' };
  const expect = { a: 'Mix', b: 'Stretch', c: 'Band' };
  merge(input, { hold: 25, your: 19, horses: 4 });

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
