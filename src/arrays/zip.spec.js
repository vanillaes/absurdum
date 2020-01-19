import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.zip(arrayA, arrayB) - should return an array with arrays of corresponding values', t => {
  const expect = [[5, 'ham'], [12, 'cheese'], [8, 'bread']];
  const result = arrays.zip([5, 12, 8], ['ham', 'cheese', 'bread']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.zip(arrayA, arrayB) - should return an array with arrays of corresponding values, the length of the shortest array', t => {
  const expect = [[5, 'ham'], [12, 'cheese'], [8, 'bread']];
  const result = arrays.zip([5, 12, 8, 130, 44], ['ham', 'cheese', 'bread']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.equal(result[0].length, 2, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.zip(arrayA, arrayB) - should return an empty array if either of the input arrays are empty', t => {
  const expect = [];
  const result = arrays.zip([], ['ham', 'cheese', 'bread']);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 0, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.zip(arrayA, arrayB, func) - should return an array with arrays of corresponding values, with the func applied to value pairs', t => {
  const expect = ['15 ham', '12 cheese', '18 bread'];
  const result = arrays.zip([15, 12, 18, 40, 30], ['ham', 'cheese', 'bread'], (x, y) => x + ' ' + y);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.equal(result[0].length, 6, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.zip(arrayA, arrayB, func) - should return an array with arrays of corresponding values, with the func applied to value pairs', t => {
  const expect = [{ x: 15, y: 'ham' }, { x: 12, y: 'cheese' }, { x: 18, y: 'bread' }];
  const result = arrays.zip([15, 12, 18, 40, 30], ['ham', 'cheese', 'bread'], (x, y) => ({ x, y }));

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.equal(result.length, 3, 'output length');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.zip(arrayA, arrayB) - should not mutate the input', t => {
  const input = [5, 12, 8];
  const expect = [5, 12, 8];
  arrays.zip(input, ['ham', 'cheese', 'bread']);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
