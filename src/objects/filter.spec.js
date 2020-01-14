import test from 'tape';
import { objects } from '../../index.js';

test('objects.filter(object) - returns the object if no filter function is provided', t => {
  const expect = { small: 'ant', medium: 'dog', big: 'elephant' };
  const result = objects.filter({ small: 'ant', medium: 'dog', big: 'elephant' });

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.filter(object, filter) - returns an object filtered by the filter function', t => {
  const expect = { small: 'ant', big: 'elephant' };
  const result = objects.filter({ small: 'ant', medium: 'dog', big: 'elephant' }, (_, key) => ['small', 'big'].includes(key));

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.filter(object, filter) - returns an object filtered by the filter function', t => {
  const expect = { big: 600 };
  const result = objects.filter({ small: 2, medium: 40, big: 600 }, (value) => value > 50);

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.filter(object, filter) - returns an empty object if the input object is empty', t => {
  const expect = {};
  const result = objects.filter({}, (_, key) => ['small', 'big'].includes(key));

  t.equal(Object.prototype.toString.call(result), '[object Object]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('objects.filter(object, filter) - should not mutate the input', t => {
  const input = { small: 'ant', medium: 'dog', big: 'elephant' };
  const expect = { small: 'ant', medium: 'dog', big: 'elephant' };
  objects.filter(input, (_, key) => ['small', 'big'].includes(key));

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
