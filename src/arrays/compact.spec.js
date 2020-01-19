import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.compact(array) - should return the array with false removed', t => {
  const expect = [1, 3, 4];
  const result = arrays.compact([1, false, 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.compact(array) - should return the array with null removed', t => {
  const expect = [1, 3, 4];
  const result = arrays.compact([1, null, 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.compact(array) - should return the array with 0 removed', t => {
  const expect = [1, 3, 4];
  const result = arrays.compact([1, 0, 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.compact(array) - should return the array with "" removed', t => {
  const expect = [1, 3, 4];
  const result = arrays.compact([1, '', 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.compact(array) - should return the array with undefined removed', t => {
  const expect = [1, 3, 4];
  const result = arrays.compact([1, undefined, 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.compact(array) - should return the array with NaN removed', t => {
  const expect = [1, 3, 4];
  const result = arrays.compact([1, NaN, 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.compact(array) - should not mutate the input', t => {
  const input = [1, undefined, 3, 4];
  const expect = [1, undefined, 3, 4];
  arrays.compact(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
