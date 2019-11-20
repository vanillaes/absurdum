import test from 'tape';
import { objects } from '../../index.js';

test('objects.exclude(object, filter) - returns an object filtered by the filter array', t => {
  const expect = { medium: 'dog' };
  const result = objects.exclude({ small: 'ant', medium: 'dog', big: 'elephant' }, ['small', 'big']);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.exclude(object, filter) - returns an object filtered by the filter array, ignores unused elements of the filter array', t => {
  const expect = { small: 'ant', medium: 'dog' };
  const result = objects.exclude({ small: 'ant', medium: 'dog', big: 'elephant' }, ['big', 'enormous']);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.exclude(object, filter) - returns the same object if no elments in the filter array exist as object keys', t => {
  const expect = { small: 'ant', medium: 'dog', big: 'elephant' };
  const result = objects.exclude({ small: 'ant', medium: 'dog', big: 'elephant' }, ['tiny', 'mini']);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.exclude(object, filter) - returns an empty object if the input object is empty', t => {
  const expect = {};
  const result = objects.exclude({}, ['small', 'big']);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.exclude(object, filter) - should not mutate the input', t => {
  const input = { small: 'ant', medium: 'dog', big: 'elephant' };
  const expect = { small: 'ant', medium: 'dog', big: 'elephant' };
  objects.exclude(input, ['small', 'big']);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
