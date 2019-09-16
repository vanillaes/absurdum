import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.filter(array, predicate) - should filter out values based on the result of the predicate', t => {
  const expect = [2, 4];
  const result = arrays.filter([1, 2, 3, 4], (x) => x % 2 === 0);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
