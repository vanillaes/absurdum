import test from 'tape';
import { dropRight } from 'absurdum/arrays';

test('arrays.dropRight(array) - should return an array w/ the last item dropped when count is not specified', t => {
  const expect = [1, 2];
  const actual = dropRight([1, 2, 3]);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 2, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.dropRight(array, count) - should return an array with count items dropped from the end', t => {
  const expect = [1];
  const actual = dropRight([1, 2, 3], 2);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 1, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.dropRight(array, count) - should return an empty array when count is larger than array.length', t => {
  const expect = [];
  const actual = dropRight([1, 2, 3], 5);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 0, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.dropRight(array, count) - should return the input array when count is 0', t => {
  const expect = [1, 2, 3];
  const actual = dropRight([1, 2, 3], 0);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 3, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.dropRight(array, count) - should not mutate the input', t => {
  const input = [1, 2, 3];
  const expect = [1, 2, 3];
  dropRight(input, 2);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
