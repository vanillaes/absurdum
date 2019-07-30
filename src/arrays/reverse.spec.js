import test from 'tape';
import { arrays } from '../../index.js';

test(`arrays.reverse(array) - should return the input array in reverse order`, t => {
  const expect = [4, 3, 2, 1];
  const result = arrays.reverse([1, 2, 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
