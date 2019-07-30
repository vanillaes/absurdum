import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.map(array, func) - should map over and apply the function to each value', (t) => {
  let result = arrays.map([1, 2, 3, 4], (x) => x + 2);
  let expect = [3, 4, 5, 6];
  t.equal(Object.prototype.toString.call(result), '[object Array]', 'type');
  t.equal(result.length, 4, 'length');
  t.deepEqual(result, expect, 'value');
  t.end();
});
