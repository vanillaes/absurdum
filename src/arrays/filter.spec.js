import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.filter(array, predicate) - should filter out values based on the result of the predicate', (t) => {
  let result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);
  let expect = [2, 4];
  t.equal(Object.prototype.toString.call(result), '[object Array]', 'type');
  t.equal(result.length, 2, 'length');
  t.deepEqual(result, expect, 'value');
  t.end();
});
