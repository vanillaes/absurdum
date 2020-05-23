import test from 'tape';
import { intersection } from '@vanillaes/absurdum/arrays';

test('arrays.intersection(...arrays) - should return an array containing the unique intersecting values between all input arrays', t => {
  const expect = [2];
  const actual = intersection([1, 2], [2, 3]);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 1, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.intersection(...arrays) - should return an array containing the unique intersecting values between all input arrays', t => {
  const expect = ['b', 2];
  const actual = intersection(['a', 'b', 'b', 2], [2, 'b', 'b', 'c'], [2, 'b', 'c', 'b']);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 2, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.intersection(...arrays) - should return an empty array if no overlap exists between input arrays', t => {
  const expect = [];
  const actual = intersection([1, 2], ['a', 'b']);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 0, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.intersection(...arrays) - should not mutate the input', t => {
  const input = [1, 2];
  const expect = [1, 2];
  intersection(input, ['a', 'b']);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
