import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.pull(array) - should return the input array if there are no input values', t => {
  const expect = ['ham', 'bread'];
  const result = arrays.pull(['ham', 'cheese', 'bread'], 'cheese');

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.pull(array, ...values) - should return an array with all the input values removed', t => {
  const expect = ['ham', 'bread'];
  const result = arrays.pull(['ham', 'cheese', 'bread'], 'cheese');

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.pull(array, ...values) - should return an array with all the input values removed', t => {
  const expect = [1, 4, 1];
  const result = arrays.pull([1, 2, 4, 8, 2, 1], 2, 8);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.pull(array, ...values) - should return an empty array if all values are removed', t => {
  const expect = [];
  const result = arrays.pull([1, 1, 2, 3], 3, 2, 1);

  t.equal(Object.prototype.toString.call(result), '[object Array]', 'return type');
  t.deepEqual(result, expect, 'output value');

  t.end();
});

test('arrays.pull(array, ...values) - should not mutate the input', t => {
  const input = ['ham', 'cheese', 'bread'];
  const expect = ['ham', 'cheese', 'bread'];

  arrays.pull(input, 'ham', 'cheese');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
