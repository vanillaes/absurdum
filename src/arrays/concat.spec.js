import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.concat(...arrays) - should return an array with all inputs flattened and concatenated', t => {
  const expect = [1, 2, 3, 4];
  const result = arrays.concat([1], 2, [3], [[4]]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
