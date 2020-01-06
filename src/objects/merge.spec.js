import test from 'tape';
import { objects } from '../../index.js';

test('objects.merge(object, sources) - returns the object if no source objects to merge are provided', t => {
  const expect = { hold: 25, your: 19, horses: 4 };
  const result = objects.merge({ hold: 25, your: 19, horses: 4 });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.merge(object, sources) - returns an object with properties merged and properties with the same value overwriting properties when applied from left to right', t => {
  const expect = { a: 'Mix', b: 'Stretch', c: 'Band' };
  const result = objects.merge({ a: 'Mix' }, { b: 34 }, { c: 'Band' }, { b: 'Stretch' });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.merge(object, sources) - returns an object with properties merged and nested objects or array values merged recursively', t => {
  const expect = { a: [{ b: [5, 7, 14] }, { d: 4, e: 5 }] };
  const result = objects.merge({ a: [{ b: [2, 3, 14] }, { d: 4 }] }, { a: [{ b: [5, 7] }, { e: 5 }] });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.merge(object, sources) - returns an empty object if there are no items in the object', t => {
  const expect = {};
  const result = objects.merge({});

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
