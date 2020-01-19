import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.dropRight(array) - should return an array w/ the last item dropped when n is not specified', t => {
  const expect = [1, 2];
  const result = arrays.dropRight([1, 2, 3]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.dropRight(array, n) - should return an array with n items dropped from the end', t => {
  const expect = [1];
  const result = arrays.dropRight([1, 2, 3], 2);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 1, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.dropRight(array, n) - should return an empty array when n is larger than array.length', t => {
  const expect = [];
  const result = arrays.dropRight([1, 2, 3], 5);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.dropRight(array, n) - should return the input array when n is 0', t => {
  const expect = [1, 2, 3];
  const result = arrays.dropRight([1, 2, 3], 0);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.dropRight(array, n) - should not mutate the input', t => {
  const input = [1, 2, 3];
  const expect = [1, 2, 3];
  arrays.dropRight(input, 2);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
