import test from 'tape';
import { objects } from '../../index.js';

test('objects.defaultsDeep(object, sources) - returns the object if no source objects to merge are provided', t => {
  const expect = { hold: 25, your: 19, horses: 4 };
  const result = objects.defaultsDeep({ hold: 25, your: 19, horses: 4 });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.defaultsDeep(object, sources) - returns an object with properties merged and properties with the same value overwriting properties when applied from left to right', t => {
  const expect = { a: 'Mix', b: 34, c: 'Band' };
  const result = objects.defaultsDeep({ a: 'Mix' }, { b: 34 }, { c: 'Band' }, { b: 'Stretch' });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.defaultsDeep(object, sources) - returns an object with properties merged and nested objects or array values merged recursively', t => {
  const expect = { a: [{ b: 2, c: 3 }, { d: 4, e: 5 }] };
  const result = objects.defaultsDeep({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.defaultsDeep(object, sources) - returns an object with properties merged and nested objects or array values merged recursively', t => {
  const expect = { a: { b: [3, 4, 15], c: 3 } };
  const result = objects.defaultsDeep({ a: { b: [3, 4] } }, { a: { b: [9, 18, 15], c: 3 } });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.defaultsDeep(object, sources) - returns an object with properties merged and nested objects or array values merged recursively, different datatypes will default to the first value', t => {
  const expect = { a: { b: 44, c: 3 } };
  const result = objects.defaultsDeep({ a: { b: 44 } }, { a: { b: [9, 18, 15], c: 3 } });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.defaultsDeep(object, sources) - returns an object with properties merged and nested objects or array values merged recursively, different datatypes will default to the first value', t => {
  const expect = { a: 77 };
  const result = objects.defaultsDeep({ a: 77 }, { a: { b: [9, 18, 15], c: 3 } });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.defaultsDeep(object, sources) - returns an empty object if there are no items in the object', t => {
  const expect = {};
  const result = objects.defaultsDeep({});

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
