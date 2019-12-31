import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.without(array, values) - should return a copy of the input array without any of the input values', t => {
  const expect = ['down', 'left'];
  const result = arrays.without(['up', 'down', 'left', 'right'], 'right', 'up');

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.without(array, values) - should return a copy of the input array without any of the input values, input values not in the array are ignored', t => {
  const expect = [15, 37];
  const result = arrays.without([15, 26, 37], 26, 47);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.without(array, values) - should return a copy of the input array without any of the input values, using equality operator comparison', t => {
  const expect = [15, [11], 37];
  const result = arrays.without([15, 26, [11], 37], 26, 47, [11]);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.without(array, values) - should return an empty array if input array is empty', t => {
  const expect = [];
  const result = arrays.without([], 3);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.without(array, values) - should not mutate the input', t => {
  const input = [28, 34, 19, 76];
  const expect = [28, 34, 19, 76];
  arrays.without(input, 28, 19);

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
