import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.unique(array) - should return the input array with all duplicate items removed', t => {
  const expect = [4, 2, 1];
  const result = arrays.unique([4, 4, 2, 1, 1]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.union(array) - should not mutate the input', t => {
  const input = [4, 4, 2, 1, 1];
  const expect = [4, 4, 2, 1, 1];
  arrays.union(input);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
