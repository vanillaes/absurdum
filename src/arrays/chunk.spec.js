import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.chunk(array) - should return a chunk for each item in the array', t => {
  const expect = [[1], [2], [3], [4]];
  const result = arrays.chunk([1, 2, 3, 4]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 4, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.chunk(array, size) - should return an array of chunks of the specified size', t => {
  const expect = [[1, 2], [3, 4], [5]];
  const result = arrays.chunk([1, 2, 3, 4, 5], 2);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});
