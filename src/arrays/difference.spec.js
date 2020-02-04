import test from 'tape';
import { difference } from 'absurdum/arrays';

test('arrays.difference(arrayA, arrayB) - should return the difference between the input array and included values', t => {
  const expect = [1];
  const actual = difference([2, 1], [2, 3]);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 1, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.difference(arrayA, arrayB) - should not mutate the input', t => {
  const input = [2, 1];
  const expect = [2, 1];
  difference(input, [2, 3]);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
