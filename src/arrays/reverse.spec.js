import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.reverse(array) - should return the input in reverse order', (t) => {
  let result = arrays.reverse([1, 2, 3, 4]);
  let expect = [4, 3, 2, 1];
  t.equal(Object.prototype.toString.call(result), '[object Array]', 'type');
  t.equal(result.length, 4, 'length');
  t.deepEqual(result, expect, 'value');
  t.end();
});
