import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.difference(array, values) - should return the difference between the input array and included values', t => {
  const expect = [1];
  const result = arrays.difference([2, 1], [2, 3]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 1, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
