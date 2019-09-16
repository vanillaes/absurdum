import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.tap(array, func) - should apply a function to each value in the input array without mutating it', t => {
  const expect = [1, 2, 3, 4];
  const result = arrays.tap([1, 2, 3, 4], console.log);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
