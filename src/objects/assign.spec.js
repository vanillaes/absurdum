import test from 'tape';
import { objects } from '../../index.js';

test('objects.assign(object, sources) - returns the object if no source objects to merge are provided', t => {
  const expect = { hold: 25, your: 19, horses: 4 };
  const result = objects.assign({ hold: 25, your: 19, horses: 4 });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.assign(object, sources) - returns an object with properties merged and properties with the same key overwriting properties when merged from left to right', t => {
  const expect = { a: 'Mix', b: 'Stretch', c: 'Band' };
  const result = objects.assign({ a: 'Mix' }, { b: 34 }, { c: 'Band' }, { b: 'Stretch' });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.assign(object, sources) - returns an object with properties merged and properties with the same key overwriting properties when applied from left to right', t => {
  const expect = { a: [{ c: 3 }, { e: 5 }] };
  const result = objects.assign({ a: [{ b: 2 }, { d: 4 }] }, { a: [{ c: 3 }, { e: 5 }] });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.assign(object, sources) - returns an empty object if there are no items in the object', t => {
  const expect = {};
  const result = objects.assign({});

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.assign(object, sources) - should not mutate the input', t => {
  const input = { small: 'ant', big: 'elephant' };
  const expect = { small: 'ant', big: 'elephant' };
  objects.assign(input, { furry: 'dog' });

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
