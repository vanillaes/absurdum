import test from 'tape';
import { arrays } from '../../index.js';

test(`arrays.map(array, func) - should map over and apply the function to each value`, t => {
  const expect = [3, 4, 5, 6];
  const result = arrays.map([1, 2, 3, 4], (x) => x + 2);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
