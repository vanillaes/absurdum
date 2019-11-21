import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.intersection(...arrays) - should return an array containing the unique intersecting values between all input arrays', t => {
  const expect = [2];
  const result = arrays.intersection([1, 2], [2, 3]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 1, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.intersection(...arrays) - should return an array containing the unique intersecting values between all input arrays', t => {
  const expect = ['b', 2];
  const result = arrays.intersection(['a', 'b', 'b', 2], [2, 'b', 'b', 'c'], [2, 'b', 'c', 'b']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.intersection(...arrays) - should return an empty array if no overlap exists between input arrays', t => {
  const expect = [];
  const result = arrays.intersection([1, 2], ['a', 'b']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.intersection(...arrays) - should not mutate the input', t => {
  const input = [1, 2];
  const expect = [1, 2];
  arrays.intersection(input, ['a', 'b']);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
