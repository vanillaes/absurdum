import test from 'tape';
import { unique } from '@vanillaes/absurdum/arrays';

test('arrays.unique(array) - should return the input array with all duplicate items removed', t => {
  const expect = [4, 2, 1];
  const actual = unique([4, 4, 2, 1, 1]);

  t.equal(Object.prototype.toString.call(actual), '[object Array]', 'return type');
  t.equal(actual.length, 3, 'output length');
  t.deepEqual(actual, expect, 'output value');

  t.end();
});

test('arrays.unique(array) - should not mutate the input', t => {
  const input = [4, 4, 2, 1, 1];
  const expect = [4, 4, 2, 1, 1];
  unique(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
