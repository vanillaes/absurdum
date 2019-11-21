import test from 'tape';
import { arrays } from '../../index.js';

test('arrays.join(array) - should return the elements of the array seperated by a comma as a string', t => {
  const expect = '1,2,4,3,4,5';
  const result = arrays.join([1, 2, 4, 3, 4, 5]);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.join(array) - should return an empty string if provided array is empty', t => {
  const expect = '';
  const result = arrays.join([]);

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.join(array, separator) - should return the elements of the array seperated by the input separator as a string', t => {
  const expect = '1~|~3~|~5';
  const result = arrays.join([1, 3, 5], '~|~');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.join(array, separator) - should return the elements of the array seperated by the input separator as a string', t => {
  const expect = '1.a.4,r';
  const result = arrays.join([1, 'a', [4, 'r']], '.');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.join(array, separator) - should return an empty string if provided array is empty', t => {
  const expect = '';
  const result = arrays.join([], 'xx');

  t.equal(Object.prototype.toString.call(result), '[object String]', 'return type');
  t.equal(result, expect, 'output value');

  t.end();
});

test('arrays.join(array, separator) - should not mutate the input', t => {
  const input = [3, 4, 5];
  const expect = [3, 4, 5];

  arrays.join(input, '+');

  t.deepEqual(input, expect, 'input mutation');

  t.end();
});
